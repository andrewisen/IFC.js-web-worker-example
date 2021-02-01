var IFCjs = (function (exports) {
  'use strict';

  const namedProps = {
    agreementFlag: "AgreementFlag",
    axis: "Axis",
    axis1: "Axis1",
    axis2: "Axis2",
    axis3: "Axis3",
    baseSurface: "BaseSurface",
    basisCurve: "BasisCurve",
    bound: "Bound",
    bounds: "Bounds",
    cfsFaces: "CfsFaces",
    coordinates: "Coordinates",
    corner: "Corner",
    depth: "Depth",
    dirRatios: "DirectionRatios",
    elements: "Elements",
    extDirection: "ExtrudedDirection",
    expressId: "_ExpressId",
    fbsmFaces: "FbsmFaces",
    filletRadius: "FilletRadius",
    firstOperand: "FirstOperand",
    flangeThickness: "FlangeThickness",
    geometry: "_Geometry",
    geomRepresentations: "_GeometryRepresentations",
    hasBuildingElements: "_HasBuildingElements",
    hasFillings: "_HasFillings",
    hasOpenings: "_HasOpenings",
    hasSpatial: "_HasSpatialStructures",
    hasType: "_HasType",
    ifcClass: "_IfcClass",
    innerCurves: "InnerCurves",
    innerFilletRadius: "InnerFilletRadius",
    isBrep: "_IsBrep",
    items: "Items",
    location: "Location",
    localOrigin: "LocalOrigin",
    mappingOrigin: "MappingOrigin:",
    mappedRepresentation: "MappedRepresentation:",
    mappingSource: "MappingSource",
    mappingTarget: "MappingTarget",
    objectPlacement: "ObjectPlacement",
    operator: "Operator",
    orientation: "Orientation",
    outer: "Outer",
    outerCurve: "OuterCurve",
    outerFilletRadius: "OuterFilletRadius",
    overallDepth: "OverallDepth",
    overallWidth: "OverallWidth",
    parentCurve: "ParentCurve",
    pivots: "Pivots",
    placementRelTo: "PlacementRelTo",
    points: "Points",
    polygon: "Polygon",
    polygonalBoundary: "PolygonalBoundary",
    position: "Position",
    prefix: "Prefix",
    profile: "Profile",
    radius: "Radius",
    refDirection: "RefDirection",
    relatedBuildingElement: "RelatedBuildingElement",
    relatedElements: "RelatedElements",
    relatedObjects: "RelatedObjects",
    relatedOpeningElement: "RelatedOpeningElement",
    relatingBuildingElement: "RelatingBuildingElement",
    relatingObject: "RelatingObject",
    relatingOpeningElement: "RelatingOpeningElement",
    relatingStructure: "RelatingStructure",
    relatingType: "RelatingType",
    relativePlacement: "RelativePlacement",
    representation: "Representation",
    representations: "Representations",
    representationType: "RepresentationType",
    scale: "Scale",
    secondOperand: "SecondOperand",
    segments: "Segments",
    senseAgreement: "SenseAgreement",
    semiAxis1: "SemiAxis1",
    semiAxis2: "SemiAxis2",
    sweptArea: "SweptArea",
    transform: "_Transformation",
    trim1: "Trim1",
    trim2: "Trim2",
    trueGeometry: "_trueGeometry",
    undefined: "undefined",
    units: "Units",
    unitType: "UnitType",
    wallThickness: "WallThickness",
    webThickness: "WebThickness",
    xDim: "XDim",
    yDim: "YDim",
    zDim: "ZDim"
  };
  const ifcUnitsValue = {
    value: "Value",
    unit: "IfcUnit"
  };
  const geometryTypes = {
    annotation2D: "Annotation2D",
    curve2D: "Curve2D",
    curve3D: "Curve3D",
    sweptSolid: "SweptSolid",
    mappedRepresentation: "MappedRepresentation",
    brep: "Brep",
    geometricSet: "GeometricSet",
    clipping: "Clipping",
    extrudedAreaSolid: "IfcExtrudedAreaSolid",
    surfaceModel: "SurfaceModel",
    boundingBox: "BoundingBox"
  };
  const structuredData = {
    ifcProject: "IfcProject",
    products: "Products",
    spaces: "Spaces",
    units: "Units",
    mainObject: "MainObject"
  };
  const pivots = {
    pivots: "Pivots",
    locat: "Locations",
    xAxis: "xRotation",
    yAxis: "yRotation",
    zAxis: "zRotation"
  };
  const defaultValue = "$";

  function trackLocalTransform(product, placement, property) {
    const transform = initializeTransform(product, property);
    const {
      locat,
      xAxis,
      yAxis,
      zAxis
    } = getTransform(placement);
    transform[pivots.locat].push(locat);
    transform[pivots.xAxis].push(xAxis);
    transform[pivots.yAxis].push(yAxis);
    transform[pivots.zAxis].push(zAxis);
  }

  function initializeTransform(product, property) {
    if (!product[property]) product[property] = {
      [pivots.locat]: [],
      [pivots.xAxis]: [],
      [pivots.yAxis]: [],
      [pivots.zAxis]: []
    };
    return product[property];
  }

  function getTransform(placement) {
    const locat = getLocat(placement);
    const xAxis = getAxisX(placement);
    const zAxis = getAxisZ(placement);
    const yAxis = getAxisY(zAxis, xAxis);
    return {
      locat,
      xAxis,
      yAxis,
      zAxis
    };
  }

  function getTransformOfGeometry(placement) {
    const {
      locat,
      xAxis,
      yAxis,
      zAxis
    } = getTransform(placement);
    return {
      [pivots.locat]: [locat],
      [pivots.xAxis]: [xAxis],
      [pivots.yAxis]: [yAxis],
      [pivots.zAxis]: [zAxis]
    };
  }

  function getLocat(placement) {
    if (isInvalid(placement[namedProps.location])) return [0, 0, 0];
    const location = placement[namedProps.location][namedProps.coordinates];
    if (location.length === 2) location.push(0);
    return location;
  }

  function getAxisX(placement) {
    if (isInvalid(placement[namedProps.refDirection])) return [1, 0, 0];
    let x = placement[namedProps.refDirection][namedProps.dirRatios];
    if (x.length === 2) x.push(0);
    return x;
  }

  function getAxisZ(placement) {
    if (isInvalid(placement[namedProps.axis])) return [0, 0, 1];
    const z = placement[namedProps.axis][namedProps.dirRatios];
    if (z.length === 2) z.push(0);
    return z;
  } //In IFC the axis Y is implicit (computed from X and Z)


  function getAxisY(X, Z) {
    return [X[1] * Z[2] - X[2] * Z[1], X[2] * Z[0] - X[0] * Z[2], X[0] * Z[1] - X[1] * Z[0]];
  }

  function isInvalid(prop) {
    if (!prop || prop === defaultValue) return true;
    return false;
  }

  const mainObject = new THREE.Object3D();

  function applyTransforms(product, property) {
    const pivots = getPivots(product[property]);
    product[namedProps.geometry].forEach(geometry => applyTransform(geometry, pivots));
  }

  function applyTransformsToGeometry(geometry, placement) {
    const transform = getTransformOfGeometry(placement);
    const pivots = getPivots(transform);
    applyTransform(geometry, pivots);
  }

  function applyTransform(geometry, pivots) {
    if (geometry) {
      bindGeometryToPivots(geometry, pivots);
      mainObject.add(pivots[0]);
      attachGeometryToScene(geometry);
      mainObject.remove(pivots[0]);
    }
  }

  function attachGeometryToScene(geometry) {
    if (geometry.constructor === Array) return geometry.forEach(e => attachGeometryToScene(e));
    return mainObject.attach(geometry);
  }

  function bindGeometryToPivots(geometry, pivots) {
    if (geometry.constructor === Array) return geometry.forEach(e => bindGeometryToPivots(e, pivots));
    pivots[pivots.length - 1].add(geometry);
  }

  function getPivots(transform) {
    const pivots$1 = [];
    const locations = transform[pivots.locat] || [];

    for (let i = locations.length - 1; i >= 0; i--) {
      const pivot = new THREE.Object3D();
      pivot.rotation.setFromRotationMatrix(getRotMat(transform, i));
      pivot.position.set(...locations[i]);
      pivots$1.push(pivot);
    }

    bindPivots(pivots$1);
    return pivots$1;
  }

  function bindPivots(pivots) {
    for (let i = 0; i < pivots.length; i++) {
      if (pivots[i + 1]) pivots[i].add(pivots[i + 1]);
    }
  }

  function getRotMat(transform, index) {
    const {
      x,
      y,
      z
    } = getTransforms(transform, index);
    const directionMatrix = new THREE.Matrix4();
    const rotationMatrix = new THREE.Matrix4();
    directionMatrix.set(x[0], x[1], x[2], 0, y[0], y[1], y[2], 0, z[0], z[1], z[2], 0, 0, 0, 0, 1);
    rotationMatrix.getInverse(directionMatrix);
    return rotationMatrix;
  }

  function getTransforms(transform, index) {
    const x = transform[pivots.xAxis][index];
    const y = transform[pivots.yAxis][index];
    const z = transform[pivots.zAxis][index];
    return {
      x,
      y,
      z
    };
  }

  function applyTransformations(structured) {
    structured[structuredData.products].forEach(product => {
      applyTransform$1(product);
    });
  }

  function applyTransform$1(product) {
    getTransforms$1(product, getPlacement(product));
    applyTransforms(product, namedProps.transform);
    applyTransformToItems(product[namedProps.hasOpenings]);
    applyTransformToItems(product[namedProps.hasSpatial]);
  }

  function applyTransformToItems(items) {
    if (items) items.forEach(item => {
      getTransforms$1(item, getPlacement(item));
      applyTransforms(item, namedProps.transform);
    });
  } //Gets all the transforms (local origins) recursively


  function getTransforms$1(product, objPlacement) {
    try {
      const placement = objPlacement[namedProps.relativePlacement];
      trackLocalTransform(product, placement, namedProps.transform);
      if (objPlacement[namedProps.placementRelTo] != defaultValue) getTransforms$1(product, objPlacement[namedProps.placementRelTo]);
    } catch (e) {
      console.warn(e);
    }
  }

  function getPlacement(product) {
    try {
      return product[namedProps.objectPlacement];
    } catch (e) {
      console.warn(e);
    }
  }

  const ifcTypes = {
    //Building elements
    IfcBuildingElementProxy: "IFCBUILDINGELEMENTPROXY",
    IfcBeam: "IFCBEAM",
    IfcColumn: "IFCCOLUMN",
    IfcCovering: "IFCCOVERING",
    IfcCurtainWall: "IFCCURTAINWALL",
    IfcDoor: "IFCDOOR",
    IfcElementAssembly: "IFCELEMENTASSEMBLY",
    IfcEquipmentElement: "IFCEQUIPMENTELEMENT",
    IfcFastener: "IFCFASTENER",
    IfcFlowTerminal: "IFCFLOWTERMINAL",
    IfcFlowSegment: "IFCFLOWSEGMENT",
    IfcFooting: "IFCFOOTING",
    IfcFurnishingElement: "IFCFURNISHINGELEMENT",
    IfcMappedItem: "IFCMAPPEDITEM",
    IfcMechanicalFastener: "IFCMECHANICALFASTENER",
    IfcMember: "IFCMEMBER",
    IfcPlate: "IFCPLATE",
    IfcRailing: "IFCRAILING",
    IfcRamp: "IFCRAMP",
    IfcReinforcingBar: "IFCREINFORCINGBAR",
    IfcReinforcingMesh: "IFCREINFORCINGMESH",
    IfcSlab: "IFCSLAB",
    IfcOpeningElement: "IFCOPENINGELEMENT",
    IfcRoof: "IFCROOF",
    IfcStairFlight: "IFCSTAIRFLIGHT",
    IfcStair: "IFCSTAIR",
    IfcWallStandardCase: "IFCWALLSTANDARDCASE",
    IfcWall: "IFCWALL",
    IfcWindow: "IFCWINDOW",
    //Classification
    IfcClassification: "IFCCLASSIFICATION",
    IfcClassificationReference: "IFCCLASSIFICATIONREFERENCE",
    //Contexts
    IfcGeometricRepresentationContext: "IFCGEOMETRICREPRESENTATIONCONTEXT",
    IfcGeometricRepresentationSubContext: "IFCGEOMETRICREPRESENTATIONSUBCONTEXT",
    IfcGridPlacement: "IFCGRIDPLACEMENT",
    IfcLinearPlacement: "IFCLINEARPLACEMENT",
    IfcLocalPlacement: "IFCLOCALPLACEMENT",
    //Document
    IfcDocumentReference: "IFCDOCUMENTREFERENCE",
    //Geometry
    IfcArbitraryClosedProfileDef: "IFCARBITRARYCLOSEDPROFILEDEF",
    IfcArbitraryProfileDefWithVoids: "IFCARBITRARYPROFILEDEFWITHVOIDS",
    IfcAxis2Placement2D: "IFCAXIS2PLACEMENT2D",
    IfcAxis2Placement3D: "IFCAXIS2PLACEMENT3D",
    IfcBooleanClippingResult: "IFCBOOLEANCLIPPINGRESULT",
    IfcBoundingBox: "IFCBOUNDINGBOX",
    IfcCartesianPoint: "IFCCARTESIANPOINT",
    IfcCartesianTransformationOperator3D: "IFCCARTESIANTRANSFORMATIONOPERATOR3D",
    IfcCircle: "IFCCIRCLE",
    IfcCircleHollowProfileDef: "IFCCIRCLEHOLLOWPROFILEDEF",
    IfcClosedShell: "IFCCLOSEDSHELL",
    IfcCircleProfileDef: "IFCCIRCLEPROFILEDEF",
    IfcCompositeCurve: "IFCCOMPOSITECURVE",
    IfcCompositeCurveSegment: "IFCCOMPOSITECURVESEGMENT",
    IfcConnectedFaceSet: "IFCCONNECTEDFACESET",
    IfcConnectionSurfaceGeometry: "IFCCONNECTIONSURFACEGEOMETRY",
    IfcCurveBoundedPlane: "IFCCURVEBOUNDEDPLANE",
    IfcDirection: "IFCDIRECTION",
    IfcEllipse: "IFCELLIPSE",
    IfcExtrudedAreaSolid: "IFCEXTRUDEDAREASOLID",
    IfcFaceBound: "IFCFACEBOUND",
    IfcFace: "IFCFACE",
    IfcFaceBasedSurfaceModel: "IFCFACEBASEDSURFACEMODEL",
    IfcFaceOuterBound: "IFCFACEOUTERBOUND",
    IfcFacetedBrep: "IFCFACETEDBREP",
    IfcGeometricCurveSet: "IFCGEOMETRICCURVESET",
    IfcGeometricSet: "IFCGEOMETRICSET",
    IfcHalfSpaceSolid: "IFCHALFSPACESOLID",
    IfcIShapeProfileDef: "IFCISHAPEPROFILEDEF",
    IfcLine: "IFCLINE",
    IfcLShapeProfileDef: "IFCLSHAPEPROFILEDEF",
    IfcPlanarExtent: "IFCPLANAREXTENT",
    IfcPlane: "IFCPLANE",
    IfcPolygonalBoundedHalfSpace: "IFCPOLYGONALBOUNDEDHALFSPACE",
    IfcPolyline: "IFCPOLYLINE",
    IfcPolyLoop: "IFCPOLYLOOP",
    IfcProductDefinitionShape: "IFCPRODUCTDEFINITIONSHAPE",
    IfcRectangleHollowProfileDef: "IFCRECTANGLEHOLLOWPROFILEDEF",
    IfcRectangleProfileDef: "IFCRECTANGLEPROFILEDEF",
    IfcShapeRepresentation: "IFCSHAPEREPRESENTATION",
    IfcSweptDiskSolid: "IFCSWEPTDISKSOLID",
    IfcTrimmedCurve: "IFCTRIMMEDCURVE",
    IfcArbitraryOpenProfileDef: "IFCARBITRARYOPENPROFILEDEF",
    IfcSurfaceOfLinearExtrusion: "IFCSURFACEOFLINEAREXTRUSION",
    IfcVector: "IFCVECTOR",
    //Identities
    IfcApplication: "IFCAPPLICATION",
    IfcOrganization: "IFCORGANIZATION",
    IfcOwnerHistory: "IFCOWNERHISTORY",
    IfcPerson: "IFCPERSON",
    IfcPersonAndOrganization: "IFCPERSONANDORGANIZATION",
    IfcPostalAddress: "IFCPOSTALADDRESS",
    //Materials
    IfcMaterial: "IFCMATERIAL",
    IfcMaterialLayer: "IFCMATERIALLAYER",
    IfcMaterialLayerSet: "IFCMATERIALLAYERSET",
    IfcMaterialLayerSetUsage: "IFCMATERIALLAYERSETUSAGE",
    IfcMaterialList: "IFCMATERIALLIST",
    //Presentation
    IfcAnnotation: "IFCANNOTATION",
    IfcAnnotationFillArea: "IFCANNOTATIONFILLAREA",
    IfcColourRgb: "IFCCOLOURRGB",
    IfcCurveStyle: "IFCCURVESTYLE",
    IfcCurveStyleFont: "IFCCURVESTYLEFONT",
    IfcCurveStyleFontPattern: "IFCCURVESTYLEFONTPATTERN",
    IfcDraughtingPreDefinedCurveFont: "IFCDRAUGHTINGPREDEFINEDCURVEFONT",
    IfcFillAreaStyle: "IFCFILLAREASTYLE",
    IfcFillAreaStyleHatching: "IFCFILLAREASTYLEHATCHING",
    IfcMaterialDefinitionRepresentation: "IFCMATERIALDEFINITIONREPRESENTATION",
    IfcRepresentationMap: "IFCREPRESENTATIONMAP",
    IfcPresentationLayerAssignment: "IFCPRESENTATIONLAYERASSIGNMENT",
    IfcPresentationStyleAssignment: "IFCPRESENTATIONSTYLEASSIGNMENT",
    IfcStyledItem: "IFCSTYLEDITEM",
    IfcStyledRepresentation: "IFCSTYLEDREPRESENTATION",
    IfcSurfaceStyle: "IFCSURFACESTYLE",
    IfcSurfaceStyleRendering: "IFCSURFACESTYLERENDERING",
    IfcSurfaceStyleShading: "IFCSURFACESTYLESHADING",
    IfcTextLiteralWithExtent: "IFCTEXTLITERALWITHEXTENT",
    IfcTextStyle: "IFCTEXTSTYLE",
    IfcTextStyleFontModel: "IFCTEXTSTYLEFONTMODEL",
    IfcTextStyleForDefinedFont: "IFCTEXTSTYLEFORDEFINEDFONT",
    //Project
    IfcActor: "IFCACTOR",
    //Properties
    IfcAirTerminalType: "IFCAIRTERMINALTYPE",
    IfcBuildingElementProxyType: "IFCBUILDINGELEMENTPROXYTYPE",
    IfcBeamType: "IFCBEAMTYPE",
    IfcColumnType: "IFCCOLUMNTYPE",
    IfcCoveringType: "IFCCOVERINGTYPE",
    IfcCurtainWallType: "IFCCURTAINWALLTYPE",
    IfcFurnitureType: "IFCFURNITURETYPE",
    IfcDistributionElementType: "IFCDISTRIBUTIONELEMENTTYPE",
    IfcDoorType: "IFCDOORTYPE",
    IfcDoorLiningProperties: "IFCDOORLININGPROPERTIES",
    IfcDoorPanelProperties: "IFCDOORPANELPROPERTIES",
    IfcDoorStyle: "IFCDOORSTYLE",
    IfcDuctSegmentType: "IFCDUCTSEGMENTTYPE",
    IfcLightFixtureType: "IFCLIGHTFIXTURETYPE",
    IfcMemberType: "IFCMEMBERTYPE",
    IfcPipeSegmentType: "IFCPIPESEGMENTTYPE",
    IfcPlateType: "IFCPLATETYPE",
    IfcPropertySet: "IFCPROPERTYSET",
    IfcPropertyEnumeratedValue: "IFCPROPERTYENUMERATEDVALUE",
    IfcPropertySingleValue: "IFCPROPERTYSINGLEVALUE",
    IfcRailingType: "IFCRAILINGTYPE",
    IfcSanitaryTerminalType: "IFCSANITARYTERMINALTYPE",
    IfcSpaceType: "IFCSPACETYPE",
    IfcStairFlightType: "IFCSTAIRFLIGHTTYPE",
    IfcSystemFurnitureElementType: "IFCSYSTEMFURNITUREELEMENTTYPE",
    IfcWallType: "IFCWALLTYPE",
    IfcWindowStyle: "IFCWINDOWSTYLE",
    IfcSlabType: "IFCSLABTYPE",
    IfcWindowLiningProperties: "IFCWINDOWLININGPROPERTIES",
    //Quantities
    IfcElementQuantity: "IFCELEMENTQUANTITY",
    IfcQuantityArea: "IFCQUANTITYAREA",
    IfcQuantityLength: "IFCQUANTITYLENGTH",
    IfcQuantityVolume: "IFCQUANTITYVOLUME",
    // Relationships
    IfcRelAggregates: "IFCRELAGGREGATES",
    IfcRelAssignsToActor: "IFCRELASSIGNSTOACTOR",
    IfcRelAssignsToGroup: "IFCRELASSIGNSTOGROUP",
    IfcRelAssociatesClassification: "IFCRELASSOCIATESCLASSIFICATION",
    IfcRelAssociatesDocument: "IFCRELASSOCIATESDOCUMENT",
    IfcRelAssociatesMaterial: "IFCRELASSOCIATESMATERIAL",
    IfcRelConnectsPathElements: "IFCRELCONNECTSPATHELEMENTS",
    IfcRelConnectsPortToElement: "IFCRELCONNECTSPORTTOELEMENT",
    IfcRelConnectsWithRealizingElements: "IFCRELCONNECTSWITHREALIZINGELEMENTS",
    IfcRelContainedInSpatialStructure: "IFCRELCONTAINEDINSPATIALSTRUCTURE",
    IfcRelDefinesByProperties: "IFCRELDEFINESBYPROPERTIES",
    IfcRelDefinesByType: "IFCRELDEFINESBYTYPE",
    IfcRelFillsElement: "IFCRELFILLSELEMENT",
    IfcGroup: "IFCGROUP",
    IfcRelSpaceBoundary: "IFCRELSPACEBOUNDARY",
    IfcRelServicesBuildings: "IFCRELSERVICESBUILDINGS",
    IfcRelVoidsElement: "IFCRELVOIDSELEMENT",
    //Spatial structure elements
    IfcBuilding: "IFCBUILDING",
    IfcBuildingStorey: "IFCBUILDINGSTOREY",
    IfcProject: "IFCPROJECT",
    IfcSite: "IFCSITE",
    IfcSpace: "IFCSPACE",
    //Systems
    IfcDistributionPort: "IFCDISTRIBUTIONPORT",
    IfcSystem: "IFCSYSTEM",
    //Units
    IfcConversionBasedUnit: "IFCCONVERSIONBASEDUNIT",
    IfcDerivedUnit: "IFCDERIVEDUNIT",
    IfcDerivedUnitElement: "IFCDERIVEDUNITELEMENT",
    IfcDimensionalExponents: "IFCDIMENSIONALEXPONENTS",
    IfcMeasureWithUnit: "IFCMEASUREWITHUNIT",
    IfcSIUnit: "IFCSIUNIT",
    IfcUnitAssignment: "IFCUNITASSIGNMENT"
  };

  function getName(ifcType) {
    return Object.keys(ifcTypes).find(key => ifcTypes[key] === ifcType);
  }

  function createLine(coordinates) {
    const material = new THREE.LineBasicMaterial({
      linecap: "round",
      color: 0xff0000
    });
    const points = [];
    coordinates.forEach(e => {
      points.push(new THREE.Vector3(e[0], e[1]));
    });
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    return line;
  }

  function mapPolyline(shape) {
    const points = [];
    shape[namedProps.points].forEach(point => {
      points.push(point[namedProps.coordinates]);
    });
    return createLine(points);
  }

  function mapPolylineShape(shapeRepresentation) {
    const points = getShapePoints(shapeRepresentation[namedProps.points]);
    const shape = new THREE.Shape();
    shape.moveTo(...points[0]);
    points.shift();
    points.forEach(point => shape.lineTo(...point));
    return shape;
  }

  function getShapePoints(pointsRepresentation) {
    return pointsRepresentation.map(point => {
      const coords = point[namedProps.coordinates];
      return [-coords[1], coords[0]];
    });
  }

  function mapTrimmedCurve(curve) {
    const typeOfTrimmedCurve = curve[namedProps.basisCurve][namedProps.ifcClass].toUpperCase();
    return trimmedCurvesMap[typeOfTrimmedCurve].line(curve);
  }

  function mapTrimmedCurveAsShape(shape, curve) {
    const typeOfTrimmedCurve = curve[namedProps.basisCurve][namedProps.ifcClass].toUpperCase();
    return trimmedCurvesMap[typeOfTrimmedCurve].shape(shape, curve);
  }

  const trimmedCurvesMap = {
    [ifcTypes.IfcLine]: {
      line: mapTrimmedLine
    },
    [ifcTypes.IfcCircle]: {
      shape: mapTrimmedCircleShape,
      line: mapTrimmedCircleLine
    },
    [ifcTypes.IfcEllipse]: {
      shape: mapTrimmedEllipseShape,
      line: mapTrimmedCircleLine
    }
  };

  function mapTrimmedLine(curve) {
    const point1 = getTrimmedCurvePoint(curve[namedProps.trim1]);
    const point2 = getTrimmedCurvePoint(curve[namedProps.trim2]);
    return createLine([point1, point2]);
  }

  function getTrimmedCurvePoint(trim) {
    return trim[0][ifcUnitsValue.value][namedProps.coordinates];
  }

  function mapTrimmedCircleLine(curve) {
    const {
      x,
      y,
      radius,
      trims
    } = getCircleInfo(curve);
    const circleCurve = new THREE.EllipseCurve(x, y, radius, radius, trims[0], trims[1], false, 0);
    const points = circleCurve.getPoints(50).map(point => [point.x, point.y]);
    return createLine(points);
  }
  //(the last point of the current curve is the closest to the first point of the next curve)
  //But circles in IFC doesn't follow this rule necessarily
  //This logic ensures that the curve is drawn from the closest point to the farthest one


  function mapTrimmedCircleShape(shape, curve) {
    const {
      x,
      y,
      radius,
      trims,
      ends
    } = getCircleInfo(curve);
    const currentPoint = [shape.currentPoint.x, shape.currentPoint.y];
    const distancesToNextPoints = getDistancesToNextPoints(currentPoint, ends);
    distancesToNextPoints[0] < distancesToNextPoints[1] ? shape.absarc(x, y, radius, trims[0], trims[1], false) : shape.absarc(x, y, radius, trims[1], trims[0], true);
  }

  function mapTrimmedEllipseShape(shape, curve) {
    const {
      x,
      y,
      a,
      b,
      trims,
      ends
    } = getEllipseInfo(curve);
    const currentPoint = [shape.currentPoint.x, shape.currentPoint.y];
    const distancesToNextPoints = getDistancesToNextPoints(currentPoint, ends);
    distancesToNextPoints[0] < distancesToNextPoints[1] ? shape.absellipse(x, y, a, b, trims[1], trims[0], true) : shape.absellipse(x, y, a, b, trims[0], trims[1], false);
  }

  function getCircleInfo(curve) {
    const radius = curve[namedProps.basisCurve][namedProps.radius];
    const {
      x,
      y
    } = getCurveLocation(curve);
    const trims = getCurveTrims(curve);
    const ends = getCircleEnds(x, y, radius, trims);
    return {
      x,
      y,
      radius,
      trims,
      ends
    };
  }

  function getEllipseInfo(curve) {
    const {
      x,
      y
    } = getCurveLocation(curve);
    const a = curve[namedProps.basisCurve][namedProps.semiAxis1];
    const b = curve[namedProps.basisCurve][namedProps.semiAxis2];
    const trims = getCurveTrims(curve);
    const ends = getEllipseEnds(x, a, b, trims);
    return {
      x,
      y,
      a,
      b,
      trims,
      ends
    };
  }

  function getCurveLocation(curve) {
    const loc = curve[namedProps.basisCurve][namedProps.position][namedProps.location][namedProps.coordinates];
    return {
      x: loc[0],
      y: loc[1]
    };
  }

  function getCurveTrims(curve) {
    return [getCurveTrim(curve, [namedProps.trim1]), getCurveTrim(curve, [namedProps.trim2])];
  }

  function getCurveTrim(curve, trim) {
    const offsetAngle = getTrimmedCurveAngle(curve);
    return curve[trim][0][ifcUnitsValue.value] * Math.PI / 180 - offsetAngle;
  }

  function getCircleEnds(x, y, radius, trims) {
    return [getCircleEnd(x, y, radius, trims[0]), getCircleEnd(x, y, radius, trims[1])];
  }

  function getCircleEnd(x, y, radius, angle) {
    return [Math.cos(angle) * radius + x, Math.sin(angle) * radius + y];
  }

  function getEllipseEnds(x, a, b, trims) {
    return [getEllipseEnd(x, a, b, trims[0]), getEllipseEnd(x, a, b, trims[1])];
  }

  function getEllipseEnd(x, a, b, trim) {
    const angle = trim % (Math.PI * 2);
    const factor = angle > 3 * Math.PI / 2 || angle < Math.PI / 2 ? -1 : 1;
    const endX = a * b / Math.sqrt(b * b + a * a * Math.pow(Math.tan(angle), 2)) * factor;
    const endY = x * Math.tan(angle);
    return [endX, endY];
  }

  function getDistancesToNextPoints(currentPoint, ends) {
    return [getDistanceBetweenPoints(currentPoint, ends[0]), getDistanceBetweenPoints(currentPoint, ends[1])];
  }

  function getDistanceBetweenPoints(point1, point2) {
    const a = point1[0] - point2[0];
    const b = point1[1] - point2[1];
    return Math.sqrt(a * a + b * b);
  }

  function getTrimmedCurveAngle(curve) {
    const angle = curve[namedProps.basisCurve][namedProps.position][namedProps.refDirection][namedProps.dirRatios];
    return Math.acos(angle[0]);
  }

  function mapCurve2D(shape) {
    return mapCurve(shape[namedProps.items][0]);
  }

  function mapCurve3D(shape) {
    return mapCurve(shape[namedProps.items][0]);
  }

  function mapCurve(shape) {
    const ifcClass = shape[namedProps.ifcClass].toUpperCase();
    return curve2DMap[ifcClass](shape);
  }

  const curve2DMap = {
    [ifcTypes.IfcPolyline]: mapPolyline,
    [ifcTypes.IfcTrimmedCurve]: mapTrimmedCurve
  };

  function createExtrusionsByPoints(points, depth, dir = [0, 0, 1], holes, position) {
    const shapePoints = [];
    points.forEach(e => shapePoints.push(new THREE.Vector3(e[1], -e[0])));
    const shape = new THREE.Shape(shapePoints);
    if (holes) holes.forEach(hole => shape.holes.push(hole));
    dir = correctExtrusionOrientation(dir, position);
    return createExtrusion(shape, depth, dir);
  }

  function createCircularExtrusion(radius, depth, dir = [0, 0, 1], thickness) {
    const segments = 36;
    const outerShape = createCircularShape(radius, segments);

    if (thickness) {
      const innerShape = createCircularShape(radius - thickness, segments);
      outerShape.holes.push(innerShape);
    }

    return createExtrusion(outerShape, depth, dir = [0, 0, 1]);
  }

  function createTubularExtrusion(radius, depth, dir = [0, 0, 1], thickness) {
    return createCircularExtrusion(radius, depth, dir, thickness);
  }

  function createCircularShape(radius, segments) {
    const coordinates = getCircleCoordinates(radius, segments);
    const shape = new THREE.Shape();
    shape.moveTo(...coordinates[0]);
    coordinates.forEach(point => shape.lineTo(...point));
    return shape;
  }

  function getCircleCoordinates(radius, steps) {
    const coords = [];

    for (let i = 0; i < steps; i++) {
      coords.push([radius * Math.cos(2 * Math.PI * (i / steps)), radius * Math.sin(2 * Math.PI * (i / steps))]);
    }

    coords.push([...coords[0]]);
    return coords;
  }

  function createIShapeExtrusion(profile, depth, dir = [0, 0, 1]) {
    const overallWidth = profile[namedProps.overallWidth];
    const overallDepth = profile[namedProps.overallDepth];
    const webThickness = profile[namedProps.webThickness];
    const flangeThickness = profile[namedProps.flangeThickness];
    const filletRadius = profile[namedProps.filletRadius];
    const shape = new THREE.Shape();
    const halfWidth = overallWidth / 2;
    const halfDepth = overallDepth / 2;
    const halfWebThickness = webThickness / 2;
    shape.moveTo(halfWidth, halfDepth);
    shape.lineTo(-halfWidth, halfDepth);
    shape.lineTo(-halfWidth, halfDepth - flangeThickness);
    shape.lineTo(-halfWebThickness - filletRadius, halfDepth - flangeThickness);
    shape.lineTo(-halfWebThickness - filletRadius, halfDepth - flangeThickness);
    shape.arc(0, -filletRadius, filletRadius, Math.PI / 2, 0, true);
    shape.lineTo(-halfWebThickness, -halfDepth + flangeThickness + filletRadius);
    shape.arc(-filletRadius, 0, filletRadius, 0, 3 * Math.PI / 2, true);
    shape.lineTo(-halfWidth, -halfDepth + flangeThickness);
    shape.lineTo(-halfWidth, -halfDepth);
    shape.lineTo(halfWidth, -halfDepth);
    shape.lineTo(halfWidth, -halfDepth + flangeThickness);
    shape.lineTo(halfWebThickness + filletRadius, -halfDepth + flangeThickness);
    shape.lineTo(halfWebThickness + filletRadius, -halfDepth + flangeThickness);
    shape.arc(0, filletRadius, filletRadius, 3 * Math.PI / 2, Math.PI, true);
    shape.lineTo(halfWebThickness, halfDepth - flangeThickness - filletRadius);
    shape.arc(filletRadius, 0, filletRadius, Math.PI, Math.PI / 2, true);
    shape.lineTo(halfWidth, halfDepth - flangeThickness);
    const extrusion = createExtrusion(shape, depth, dir);
    extrusion.rotation.z += Math.PI / 2;
    extrusion.updateMatrix();
    return extrusion;
  }

  function createExtrusion(shape, depth, dir = [0, 0, 1]) {
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff
    });
    const extrudeSettings = getExtrudeSettings(depth, dir);
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    applyExtrusionDirection(dir, geometry);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.updateMatrix();
    return mesh;
  }

  function getExtrudeSettings(depth, dir) {
    const path = getVerticalDirection(depth, dir);
    return {
      bevelEnabled: false,
      steps: 1,
      extrudePath: path
    };
  } //To define the direction of the extrusion:
  // x and y are applied as a skew operation (transform matrix)
  // z is applied in the vertical direction


  function applyExtrusionDirection(dir, geometry) {
    const matrix = getTransformMatrix(dir);
    geometry.applyMatrix4(matrix);
  }

  function getTransformMatrix(dir) {
    const matrix = new THREE.Matrix4();
    const direction = new THREE.Vector3(dir[0], dir[1], dir[2]);
    const Syx = 0;
    const Sxy = 0;
    const Sxz = 0;
    const Syz = 0;
    const Szx = -direction.x / direction.z;
    const Szy = direction.y / direction.z;
    return matrix.set(1, Syx, Szx, 0, Sxy, 1, Szy, 0, Sxz, Syz, 1, 0, 0, 0, 0, 1);
  }

  function getVerticalDirection(depth, dir) {
    const v1 = new THREE.Vector3(0, 0, 0);
    const v2 = new THREE.Vector3(0, 0, depth * dir[2]);
    return new THREE.LineCurve3(v1, v2);
  } //The extrusion direction needs to be applied when creating the extrusion (at the profile level)
  //But in IFC, the coordinate system of the extrusion direction is at the level of IfcExtrudedAreaSolid
  //Thus, the extrusion direction needs to be correted in order to comply with this coordinate system


  function correctExtrusionOrientation(direction, position) {
    if (position) {
      const directionVector = position[namedProps.refDirection][namedProps.dirRatios];
      const angle = Math.atan2(directionVector[1], directionVector[0]);
      return [direction[0] * Math.cos(angle) - direction[1] * Math.sin(angle), direction[0] * Math.sin(angle) + direction[1] * Math.cos(angle), direction[2]];
    }

    return direction;
  }

  function mapRectangleProfileExtrusion(extruded) {
    getRectProfileDimensions(extruded);
    const position = extruded.profile[namedProps.position];
    const points = getRectProfilePoints(extruded);
    const geometry = createExtrusionsByPoints(points, extruded.depth, extruded.direction, undefined, position);
    applyTransformsToGeometry(geometry, position);
    return geometry;
  }

  function getRectProfilePoints(extruded) {
    const halfWidth = extruded[namedProps.xDim] / 2;
    const halfHeight = extruded[namedProps.yDim] / 2;
    return [[-halfWidth, halfHeight], [halfWidth, halfHeight], [halfWidth, -halfHeight], [-halfWidth, -halfHeight]];
  }

  function getRectProfileDimensions(extruded) {
    extruded[namedProps.xDim] = extruded.profile[namedProps.xDim];
    extruded[namedProps.yDim] = extruded.profile[namedProps.yDim];
  }

  function mapCompositeCurveShape(props, segments) {
    const shape = new THREE.Shape();
    const segmentsRepresentation = segments || props[namedProps.segments];
    segmentsRepresentation.forEach(curve => mapCompositeCurveSegment(shape, curve));
    resetFirstCompositeCurve();
    return shape;
  }

  function mapCompositeCurveSegment(shape, segmentRepresentation) {
    const curve = segmentRepresentation[namedProps.parentCurve];
    const typeOfCurve = curve[namedProps.ifcClass].toUpperCase();
    compositeCurvesMap[typeOfCurve](shape, curve);
  }

  const compositeCurvesMap = {
    [ifcTypes.IfcPolyline]: mapPolylineSegment,
    [ifcTypes.IfcTrimmedCurve]: mapTrimmedCurveAsShape
  };

  function mapPolylineSegment(shape, curve) {
    const points = curve[namedProps.points];

    if (isFirstSegmentOfCompositeCurve) {
      shape.moveTo(...points[0][namedProps.coordinates]);
      points.shift();
      isFirstSegmentOfCompositeCurve = false;
    }

    points.forEach(point => shape.lineTo(...point[namedProps.coordinates]));
  }

  let isFirstSegmentOfCompositeCurve = true;

  function resetFirstCompositeCurve() {
    isFirstSegmentOfCompositeCurve = true;
  }

  function mapArbitraryProfileExtrusion(props) {
    return mapExtrusionByTypeOfProfile(props);
  }

  function mapArbitraryProfileWithVoidsExtrusion(props) {
    props.holes = getInnerVoids(props);
    return mapExtrusionByTypeOfProfile(props);
  }

  function getInnerVoids(props) {
    const shapes = [];
    const innerCurvesRep = props.profile[namedProps.innerCurves];
    innerCurvesRep.forEach(curveRep => {
      const typeOfProfile = curveRep[namedProps.ifcClass].toUpperCase();
      shapes.push(extrusionCurvesMap[typeOfProfile].shape(curveRep));
    });
    return shapes;
  }

  function mapExtrusionByTypeOfProfile(props) {
    const typeOfProfile = props.profile[namedProps.outerCurve][namedProps.ifcClass].toUpperCase();
    return extrusionCurvesMap[typeOfProfile].extrusion(props);
  }

  const extrusionCurvesMap = {
    [ifcTypes.IfcPolyline]: {
      extrusion: mapPolylineExtrusion,
      shape: mapPolylineShape
    },
    [ifcTypes.IfcCompositeCurve]: {
      extrusion: mapCompositeCurveExtrusion,
      shape: mapCompositeCurveShape
    }
  };

  function mapPolylineExtrusion(props) {
    const profileRepresentation = props.profile;
    const pointsRepresentation = profileRepresentation[namedProps.outerCurve][namedProps.points];
    const points = getExtrusionPoints(pointsRepresentation);
    return createExtrusionsByPoints(points, props.depth, props.direction, props.holes);
  }

  function mapCompositeCurveExtrusion(props) {
    const segments = props.profile[namedProps.outerCurve][namedProps.segments];
    const shape = mapCompositeCurveShape(props, segments);
    if (props.holes) props.holes.forEach(hole => shape.holes.push(hole));
    const extrusion = createExtrusion(shape, props.depth, props.direction);
    extrusion.rotation.z += Math.PI / 2;
    extrusion.updateMatrix();
    return extrusion;
  }

  function getExtrusionPoints(pointsRepresentation) {
    return pointsRepresentation.map(point => {
      const coords = point[namedProps.coordinates];
      return [-coords[0], -coords[1]];
    });
  }

  function mapCircleProfileExtrusion(extruded) {
    const {
      position,
      radius
    } = getProperties(extruded);
    const cylinder = createCircularExtrusion(radius, extruded.depth);
    applyTransformsToGeometry(cylinder, position);
    return cylinder;
  }

  function mapCircleHollowProfileExtrusion(extruded) {
    const {
      position,
      radius,
      thickness
    } = getProperties(extruded);
    const tube = createTubularExtrusion(radius, extruded.depth, extruded.direction, thickness);
    applyTransformsToGeometry(tube, position);
    return tube;
  }

  function getProperties(extruded) {
    return {
      position: extruded.profile[namedProps.position],
      radius: extruded.profile[namedProps.radius],
      thickness: extruded.profile[namedProps.wallThickness]
    };
  }

  function mapIShapeProfileExtrusion(props) {
    const position = props.profile[namedProps.position];
    const geometry = createIShapeExtrusion(props.profile, props.depth, props.direction);
    applyTransformsToGeometry(geometry, position);
    return geometry;
  }

  function mapSweptSolid(shape, product) {
    const items = [];
    shape[namedProps.items].forEach(extruded => items.push(mapExtrudedAreaSolid(extruded, product)));
    return joinAllExtrusions(items);
  }

  function joinAllExtrusions(items) {
    var singleGeometry = new THREE.Geometry();
    items.forEach(item => {
      item.updateMatrix();
      singleGeometry.merge(item.geometry, item.matrix);
      mainObject.remove(item);
    });
    const result = new THREE.Mesh(singleGeometry);
    mainObject.add(result);
    return result;
  }

  function mapExtrudedAreaSolid(extruded, product) {
    const extrudedProps = getExtrusionProps(extruded);
    const solid = getExtrusionByType(extrudedProps, product);
    const position = extruded[namedProps.position];
    applyTransformsToGeometry(solid, position);
    return solid;
  }

  function getExtrusionProps(extruded) {
    return {
      profile: extruded[namedProps.sweptArea],
      ifcClass: extruded[namedProps.sweptArea][namedProps.ifcClass],
      depth: extruded[namedProps.depth],
      direction: extruded[namedProps.extDirection][namedProps.dirRatios]
    };
  }

  const extrusionTypes = {
    [ifcTypes.IfcRectangleProfileDef]: mapRectangleProfileExtrusion,
    [ifcTypes.IfcCircleProfileDef]: mapCircleProfileExtrusion,
    [ifcTypes.IfcCircleHollowProfileDef]: mapCircleHollowProfileExtrusion,
    [ifcTypes.IfcArbitraryClosedProfileDef]: mapArbitraryProfileExtrusion,
    [ifcTypes.IfcArbitraryProfileDefWithVoids]: mapArbitraryProfileWithVoidsExtrusion,
    [ifcTypes.IfcIShapeProfileDef]: mapIShapeProfileExtrusion
  };

  function getExtrusionByType(extruded, product) {
    return extrusionTypes[extruded.ifcClass.toUpperCase()](extruded, product);
  }

  function mapMappedRepresentation(shape, product) {
    const representation = shape[namedProps.items][0];
    const target = getMappingTarget(representation);
    const mapped = getMappingSource(product, representation);
    applyTransformsToGeometry(mapped, target);
    return mapped;
  } //The concept of mapped representation is that there are several instances
  //of the same geometry. Storing the geometries allows to generate them
  //only once and them simply create each instance copying the source geometry.


  const mappingSources = {};

  function getMappingSource(product, representation) {
    const source = representation[namedProps.mappingSource];
    const origin = source[namedProps.mappingOrigin];
    const geometry = isGeometryGenerated(source) ? getGeneratedGeometry(source) : generateGeometry(source, product);
    applyTransformsToGeometry(geometry, origin);
    return geometry;
  }

  function generateGeometry(source, product) {
    const mappedGeometry = source[namedProps.mappedRepresentation];
    const geometry = getMappedGeometry(mappedGeometry, product);
    mappingSources[source[namedProps.expressId]] = geometry;
    mainObject.remove(geometry);
    return geometry.clone();
  }

  function isGeometryGenerated(source) {
    return mappingSources[source[namedProps.expressId]] ? true : false;
  }

  function getGeneratedGeometry(source) {
    return mappingSources[source[namedProps.expressId]].clone();
  } //The mapping target defines the transformation of the mapped items
  //Generally, in IFC the transformation is read from IfcAxis2Placement instances
  //This is an exception: data needs to be structured like an IfcAxis2Placement
  //to avoid poluting the transformation logic


  function getMappingTarget(representation) {
    const target = representation[namedProps.mappingTarget];
    return {
      [namedProps.location]: {
        [namedProps.coordinates]: getTargetOrigin(target)
      },
      [namedProps.refDirection]: {
        [namedProps.dirRatios]: getAxis(target, namedProps.axis1, [1, 0, 0])
      },
      [namedProps.axis]: {
        [namedProps.dirRatios]: getAxis(target, namedProps.axis3, [0, 0, 1])
      },
      [namedProps.scale]: target[namedProps.scale]
    };
  }

  function getTargetOrigin(target) {
    return target[namedProps.localOrigin][namedProps.coordinates];
  }

  function getAxis(target, axis, def) {
    const value = target[axis];
    return value === defaultValue ? def : value;
  }

  //Credit to the following algorithm:
  //https://stackoverflow.com/questions/50272399/three-js-2d-object-in-3d-space-by-vertices/50274103#50274103
  function createFace(faceDefinition) {
    const coordinates = faceDefinition.outerBounds.bounds[0];
    let outerPoints = getPoints(coordinates);
    let {
      tempOuterPoints,
      quaternion
    } = getProjectedPointsAndQuaternion(outerPoints);
    const outerShape = new THREE.Shape(tempOuterPoints);
    const allPoints = [...outerPoints];
    if (hasHoles(faceDefinition)) punchHoles(faceDefinition, quaternion, allPoints, outerShape);
    return createGeometry(outerShape, allPoints);
  }

  function createGeometry(outerShape, allPoints) {
    const shapeGeom = new THREE.ShapeGeometry(outerShape, 24);
    const mesh = new THREE.Mesh(shapeGeom);
    mesh.geometry.vertices = allPoints;
    mesh.geometry.computeVertexNormals();
    mesh.geometry.computeFaceNormals();
    return mesh;
  }

  function getPoints(coordinates) {
    return coordinates.map(p => new THREE.Vector3(p[0], p[1], p[2]));
  }

  function getTempPoints(points, quaternion) {
    return points.map(p => p.clone().applyQuaternion(quaternion));
  }

  function hasHoles(faceDefinition) {
    return faceDefinition.innerBounds.bounds.length > 0;
  }

  function punchHoles(faceDefinition, quaternion, allPoints, outerShape) {
    faceDefinition.innerBounds.bounds.forEach(bound => {
      const innerPoints = getPoints(bound);
      const tempInnerPoints = getTempPoints(innerPoints, quaternion);
      const innerShape = new THREE.Path(tempInnerPoints);
      outerShape.holes.push(innerShape);
      allPoints.push(...innerPoints);
    });
  } //To implement this algorithm successfully (see link above)
  // the selected triangle of vertices needs to fulfill the following points to work:
  // 1. It must be a valid triangle (its vertices are not aligned)
  // 2. Its area should be as big as possible to increment the precission of its normal vector
  // 3. The generated 2d surface has its points defined clockwise


  function getProjectedPointsAndQuaternion(points) {
    const triangles = getAllTriangles(points); //1

    sortTrianglesByArea(triangles); //2

    return getQuatAndPoints(triangles, points); //3
  }

  function getAllTriangles(points) {
    const triangles = [];
    let i = 1;

    while (i + 1 < points.length) {
      const {
        vector,
        triangle
      } = getTriangleVector(points, i);
      if (isVectorValid(vector)) triangles.push({
        area: triangle.getArea(),
        triangle
      });
      i++;
    }

    return triangles;
  }

  function getTriangleVector(points, i) {
    const triangle = new THREE.Triangle(points[i + 1], points[i], points[0]);
    const vector = new THREE.Vector3();
    triangle.getNormal(vector);
    return {
      vector,
      triangle
    };
  }

  function sortTrianglesByArea(triangles) {
    triangles.sort((a, b) => a.area > b.area ? 1 : b.area > a.area ? -1 : 0).reverse();
  }

  function isVectorValid(vector) {
    return vector.x != 0 || vector.y != 0 || vector.z != 0;
  }

  function getQuatAndPoints(triangles, points) {
    const props = initializeProperties();

    while (props.isClockWise === false) selectAnotherTriangle(props, points, triangles);

    return {
      tempOuterPoints: props.tempOuterPoints,
      quaternion: props.quaternion
    };
  }

  function selectAnotherTriangle(props, points, triangles) {
    const tri = triangles[props.selectedTriangle];
    tri.triangle.getNormal(props.normal);
    props.quaternion = new THREE.Quaternion().setFromUnitVectors(props.normal, props.baseNormal);
    props.tempOuterPoints = getTempPoints(points, props.quaternion);
    const projected = props.tempOuterPoints.map(point => new THREE.Vector2(point.x, point.y));
    props.isClockWise = THREE.ShapeUtils.isClockWise(projected);
    props.selectedTriangle++;
  }

  function initializeProperties() {
    return {
      baseNormal: new THREE.Vector3(0, 0, 1),
      normal: new THREE.Vector3(),
      selectedTriangle: 0,
      tempOuterPoints: [],
      quaternion: {},
      isClockWise: false
    };
  }

  function mapBrep(shape) {
    const representations = shape[namedProps.items];
    const definitions = [];
    representations.forEach(r => definitions.push(...getGeometry(r[namedProps.outer][namedProps.cfsFaces])));
    return createAndJoinFaces(definitions);
  }

  function mapSurfaceModel(shape) {
    const faceSets = shape[namedProps.items][0][namedProps.fbsmFaces];
    const definitions = [];
    faceSets.forEach(faceSet => definitions.push(...getGeometry(faceSet[namedProps.cfsFaces])));
    return createAndJoinFaces(definitions);
  }

  function createAndJoinFaces(definitions) {
    const faces = [];
    definitions.forEach(definition => faces.push(createFace(definition)));
    return joinAllFaces(faces);
  }

  function joinAllFaces(faces) {
    const joined = new THREE.Geometry();
    faces.forEach(face => joined.merge(face.geometry, face.matrix));
    const material = new THREE.MeshPhongMaterial({
      side: 2
    });
    const mesh = new THREE.Mesh(joined, material);
    mesh.geometry.computeVertexNormals();
    mesh.geometry.computeFaceNormals();
    mesh[namedProps.isBrep] = true;
    return mesh;
  }

  function getGeometry(faceSet) {
    const faces = [];
    faceSet.forEach(face => faces.push(getAllBounds(face)));
    return faces;
  }

  function getAllBounds(face) {
    const outerBoundsInfo = filterBounds(face, ifcTypes.IfcFaceOuterBound);
    const innerBoundsInfo = filterBounds(face, ifcTypes.IfcFaceBound);
    const outerBounds = getBounds(outerBoundsInfo);
    const innerBounds = innerBoundsInfo ? getBounds(innerBoundsInfo) : {};
    return {
      outerBounds,
      innerBounds
    };
  }

  function getBounds(ifcBounds) {
    const bounds = [];
    const orientation = [];
    ifcBounds.forEach(bound => {
      bounds.push(getPoints$1(bound));
      orientation.push(bound[namedProps.orientation]);
    });
    return {
      orientation,
      bounds
    };
  }

  function getPoints$1(bound) {
    const points = bound[namedProps.bound][namedProps.polygon];
    const coordinates = [];
    points.forEach(point => {
      const coord = point[namedProps.coordinates];
      if (coord) coordinates.push(coord);
    });
    return coordinates;
  }

  function filterBounds(face, type) {
    return face[namedProps.bounds].filter(e => e[namedProps.ifcClass] === getName(type));
  }

  function mapGeometricSet(shape) {
    const curves = shape[namedProps.items][0][namedProps.elements];
    const result = new THREE.Object3D();
    const mappedCurves = curves.map(e => mapCurve(e));
    mappedCurves.forEach(curve => result.add(curve));
    return result;
  }

  function createClippingBox(orientation) {
    const geometry = new THREE.BoxBufferGeometry(100000, 100000, 100000);
    const mesh = new THREE.Mesh(geometry);
    const direction = orientation ? -1 : 1;
    mesh.position.z += 50000 * direction;
    mesh.updateMatrix();
    return mesh;
  }

  // ## License
  // 
  // Copyright (c) 2011 Evan Wallace (http://madebyevan.com/), under the MIT license.
  // THREE.js rework by thrax


  // # class CSG
  // Holds a binary space partition tree representing a 3D solid. Two solids can
  // be combined using the `union()`, `subtract()`, and `intersect()` methods.

  class CSG {
      constructor() {
          this.polygons = [];
      }
      clone() {
          var csg = new CSG();
          csg.polygons = this.polygons.map(function(p) {
              return p.clone();
          });
          return csg;
      }

      toPolygons() {
          return this.polygons;
      }

      union(csg) {
          var a = new Node(this.clone().polygons);
          var b = new Node(csg.clone().polygons);
          a.clipTo(b);
          b.clipTo(a);
          b.invert();
          b.clipTo(a);
          b.invert();
          a.build(b.allPolygons());
          return CSG.fromPolygons(a.allPolygons());
      }

      subtract(csg) {
          var a = new Node(this.clone().polygons);
          var b = new Node(csg.clone().polygons);
          a.invert();
          a.clipTo(b);
          b.clipTo(a);
          b.invert();
          b.clipTo(a);
          b.invert();
          a.build(b.allPolygons());
          a.invert();
          return CSG.fromPolygons(a.allPolygons());
      }

      intersect(csg) {
          var a = new Node(this.clone().polygons);
          var b = new Node(csg.clone().polygons);
          a.invert();
          b.clipTo(a);
          b.invert();
          a.clipTo(b);
          b.clipTo(a);
          a.build(b.allPolygons());
          a.invert();
          return CSG.fromPolygons(a.allPolygons());
      }

      // Return a new CSG solid with solid and empty space switched. This solid is
      // not modified.
      inverse() {
          var csg = this.clone();
          csg.polygons.map(function(p) {
              p.flip();
          });
          return csg;
      }
  }

  // Construct a CSG solid from a list of `Polygon` instances.
  CSG.fromPolygons=function(polygons) {
      var csg = new CSG();
      csg.polygons = polygons;
      return csg;
  };

  // # class Vector

  // Represents a 3D vector.
  // 
  // Example usage:
  // 
  //     new CSG.Vector(1, 2, 3);
  //     new CSG.Vector([1, 2, 3]);
  //     new CSG.Vector({ x: 1, y: 2, z: 3 });

  class Vector extends THREE.Vector3 {
      constructor(x, y, z) {
          if (arguments.length == 3)
              super(x, y, z);
          else if (Array.isArray(x))
              super(x[0], x[1], x[2]);
          else if (typeof x == 'object')
              super().copy(x);
          else
              throw "Invalid constructor to vector"
      }

      clone() {
          return new Vector(this)
      }
      negated() {
          return this.clone().multiplyScalar(-1)
      }
      plus(a) {
          return this.clone().add(a);
      }
      minus(a) {
          return this.clone().sub(a)
      }
      times(a) {
          return this.clone().multiplyScalar(a)
      }
      dividedBy(a) {
          return this.clone().divideScalar(a)
      }
      lerp(a, t) {
          return this.plus(a.minus(this).times(t))
      }
      unit() {
          return this.dividedBy(this.length())
      }
      cross(a) {
          return THREE.Vector3.prototype.cross.call(this.clone(), a)
      }
  }

  // # class Vertex

  // Represents a vertex of a polygon. Use your own vertex class instead of this
  // one to provide additional features like texture coordinates and vertex
  // colors. Custom vertex classes need to provide a `pos` property and `clone()`,
  // `flip()`, and `interpolate()` methods that behave analogous to the ones
  // defined by `CSG.Vertex`. This class provides `normal` so convenience
  // functions like `CSG.sphere()` can return a smooth vertex normal, but `normal`
  // is not used anywhere else.

  class Vertex {

      constructor(pos, normal, uv) {
          this.pos = new Vector(pos);
          this.normal = new Vector(normal);
          this.uv = new Vector(uv);
      }

      clone() {
          return new Vertex(this.pos.clone(),this.normal.clone(),this.uv.clone());
      }

      // Invert all orientation-specific data (e.g. vertex normal). Called when the
      // orientation of a polygon is flipped.
      flip() {
          this.normal = this.normal.negated();
      }

      // Create a new vertex between this vertex and `other` by linearly
      // interpolating all properties using a parameter of `t`. Subclasses should
      // override this to interpolate additional properties.
      interpolate(other, t) {
          return new Vertex(this.pos.lerp(other.pos, t),this.normal.lerp(other.normal, t),this.uv.lerp(other.uv, t))
      }
  }
  // # class Plane

  // Represents a plane in 3D space.

  class Plane {
      constructor(normal, w) {
          this.normal = normal;
          this.w = w;
      }

      clone() {
          return new Plane(this.normal.clone(),this.w);
      }

      flip() {
          this.normal = this.normal.negated();
          this.w = -this.w;
      }

      // Split `polygon` by this plane if needed, then put the polygon or polygon
      // fragments in the appropriate lists. Coplanar polygons go into either
      // `coplanarFront` or `coplanarBack` depending on their orientation with
      // respect to this plane. Polygons in front or in back of this plane go into
      // either `front` or `back`.
      splitPolygon(polygon, coplanarFront, coplanarBack, front, back) {
          var COPLANAR = 0;
          var FRONT = 1;
          var BACK = 2;
          var SPANNING = 3;

          // Classify each point as well as the entire polygon into one of the above
          // four classes.
          var polygonType = 0;
          var types = [];
          for (var i = 0; i < polygon.vertices.length; i++) {
              var t = this.normal.dot(polygon.vertices[i].pos) - this.w;
              var type = (t < -Plane.EPSILON) ? BACK : (t > Plane.EPSILON) ? FRONT : COPLANAR;
              polygonType |= type;
              types.push(type);
          }

          // Put the polygon in the correct list, splitting it when necessary.
          switch (polygonType) {
          case COPLANAR:
              (this.normal.dot(polygon.plane.normal) > 0 ? coplanarFront : coplanarBack).push(polygon);
              break;
          case FRONT:
              front.push(polygon);
              break;
          case BACK:
              back.push(polygon);
              break;
          case SPANNING:
              var f = []
                , b = [];
              for (var i = 0; i < polygon.vertices.length; i++) {
                  var j = (i + 1) % polygon.vertices.length;
                  var ti = types[i]
                    , tj = types[j];
                  var vi = polygon.vertices[i]
                    , vj = polygon.vertices[j];
                  if (ti != BACK)
                      f.push(vi);
                  if (ti != FRONT)
                      b.push(ti != BACK ? vi.clone() : vi);
                  if ((ti | tj) == SPANNING) {
                      var t = (this.w - this.normal.dot(vi.pos)) / this.normal.dot(vj.pos.minus(vi.pos));
                      var v = vi.interpolate(vj, t);
                      f.push(v);
                      b.push(v.clone());
                  }
              }
              if (f.length >= 3)
                  front.push(new Polygon(f,polygon.shared));
              if (b.length >= 3)
                  back.push(new Polygon(b,polygon.shared));
              break;
          }
      }

  }

  // `Plane.EPSILON` is the tolerance used by `splitPolygon()` to decide if a
  // point is on the plane.
  Plane.EPSILON = 1e-5;

  Plane.fromPoints = function(a, b, c) {
      var n = b.minus(a).cross(c.minus(a)).unit();
      return new Plane(n,n.dot(a));
  };


  // # class Polygon

  // Represents a convex polygon. The vertices used to initialize a polygon must
  // be coplanar and form a convex loop. They do not have to be `Vertex`
  // instances but they must behave similarly (duck typing can be used for
  // customization).
  // 
  // Each convex polygon has a `shared` property, which is shared between all
  // polygons that are clones of each other or were split from the same polygon.
  // This can be used to define per-polygon properties (such as surface color).

  class Polygon {

      constructor(vertices, shared) {
          this.vertices = vertices;
          this.shared = shared;
          this.plane = Plane.fromPoints(vertices[0].pos, vertices[1].pos, vertices[2].pos);
      }

      clone() {
          var vertices = this.vertices.map(function(v) {
              return v.clone();
          });
          return new Polygon(vertices,this.shared);
      }
      flip() {
          this.vertices.reverse().map(function(v) {
              v.flip();
          });
          this.plane.flip();
      }
  }

  // # class Node

  // Holds a node in a BSP tree. A BSP tree is built from a collection of polygons
  // by picking a polygon to split along. That polygon (and all other coplanar
  // polygons) are added directly to that node and the other polygons are added to
  // the front and/or back subtrees. This is not a leafy BSP tree since there is
  // no distinction between internal and leaf nodes.

  class Node {
      constructor(polygons) {
          this.plane = null;
          this.front = null;
          this.back = null;
          this.polygons = [];
          if (polygons)
              this.build(polygons);
      }
      clone() {
          var node = new Node();
          node.plane = this.plane && this.plane.clone();
          node.front = this.front && this.front.clone();
          node.back = this.back && this.back.clone();
          node.polygons = this.polygons.map(function(p) {
              return p.clone();
          });
          return node;
      }

      // Convert solid space to empty space and empty space to solid space.
      invert() {
          for (var i = 0; i < this.polygons.length; i++)
              this.polygons[i].flip();
          
          this.plane.flip();
          if (this.front)
              this.front.invert();
          if (this.back)
              this.back.invert();
          var temp = this.front;
          this.front = this.back;
          this.back = temp;
      }

      // Recursively remove all polygons in `polygons` that are inside this BSP
      // tree.
      clipPolygons(polygons) {
          if (!this.plane)
              return polygons.slice();
          var front = []
            , back = [];
          for (var i = 0; i < polygons.length; i++) {
              this.plane.splitPolygon(polygons[i], front, back, front, back);
          }
          if (this.front)
              front = this.front.clipPolygons(front);
          if (this.back)
              back = this.back.clipPolygons(back);
          else
              back = [];
          return front.concat(back);
      }

      // Remove all polygons in this BSP tree that are inside the other BSP tree
      // `bsp`.
      clipTo(bsp) {
          this.polygons = bsp.clipPolygons(this.polygons);
          if (this.front)
              this.front.clipTo(bsp);
          if (this.back)
              this.back.clipTo(bsp);
      }

      // Return a list of all polygons in this BSP tree.
      allPolygons() {
          var polygons = this.polygons.slice();
          if (this.front)
              polygons = polygons.concat(this.front.allPolygons());
          if (this.back)
              polygons = polygons.concat(this.back.allPolygons());
          return polygons;
      }

      // Build a BSP tree out of `polygons`. When called on an existing tree, the
      // new polygons are filtered down to the bottom of the tree and become new
      // nodes there. Each set of polygons is partitioned using the first polygon
      // (no heuristic is used to pick a good split).
      build(polygons) {
          if (!polygons.length)
              return;
          if (!this.plane)
              this.plane = polygons[0].plane.clone();
          var front = []
            , back = [];
          for (var i = 0; i < polygons.length; i++) {
              this.plane.splitPolygon(polygons[i], this.polygons, this.polygons, front, back);
          }
          if (front.length) {
              if (!this.front)
                  this.front = new Node();
              this.front.build(front);
          }
          if (back.length) {
              if (!this.back)
                  this.back = new Node();
              this.back.build(back);
          }
      }
  }

  CSG.fromGeometry=function(geom){
      if(geom.isBufferGeometry)
          geom = new THREE.Geometry().fromBufferGeometry(geom);
      var fs = geom.faces;
      var vs = geom.vertices;
      var polys=[];
      var fm=['a','b','c'];
      for(var i=0;i<fs.length;i++){
          var f = fs[i];
          var vertices=[];
          for(var j=0;j<3;j++) vertices.push(new Vertex(vs[f[fm[j]]],f.vertexNormals[j],geom.faceVertexUvs[0][i][j]));
          polys.push(new Polygon(vertices));
      }
      return CSG.fromPolygons(polys)
  };
  CSG._tmpm3 = new THREE.Matrix3();
  CSG.fromMesh=function(mesh){

      var csg = CSG.fromGeometry(mesh.geometry);
      CSG._tmpm3.getNormalMatrix(mesh.matrix);
      for(var i=0;i<csg.polygons.length;i++){
          var p = csg.polygons[i];
          for(var j=0;j<p.vertices.length;j++){
              var v=p.vertices[j];
              v.pos.applyMatrix4(mesh.matrix);
              v.normal.applyMatrix3(CSG._tmpm3);
          }
      }
      return csg;
  };

  CSG.toMesh=function(csg,toMatrix){
      var geom = new THREE.Geometry();
      var ps = csg.polygons;
      var vs = geom.vertices;
      var fvuv = geom.faceVertexUvs[0];
      for(var i=0;i<ps.length;i++){
          var p = ps[i];
          var pvs=p.vertices;
          var v0=vs.length;
          var pvlen=pvs.length;
          
          for(var j=0;j<pvlen;j++)
              vs.push(new THREE.Vector3().copy(pvs[j].pos));


          for(var j=3;j<=pvlen;j++){
              var fc = new THREE.Face3();
              var fuv = [];
              fvuv.push(fuv);
              var fnml = fc.vertexNormals;
              fc.a=v0;
              fc.b=v0+j-2;
              fc.c=v0+j-1;

              fnml.push(new THREE.Vector3().copy(pvs[0].normal));
              fnml.push(new THREE.Vector3().copy(pvs[j-2].normal));
              fnml.push(new THREE.Vector3().copy(pvs[j-1].normal));
              fuv.push(new THREE.Vector3().copy(pvs[0].uv));
              fuv.push(new THREE.Vector3().copy(pvs[j-2].uv));
              fuv.push(new THREE.Vector3().copy(pvs[j-1].uv));

              fc.normal = new THREE.Vector3().copy(p.plane.normal);
              geom.faces.push(fc);
          }
      }
      var inv = new THREE.Matrix4().getInverse(toMatrix);
      geom.applyMatrix4(inv);
      geom.verticesNeedUpdate = geom.elementsNeedUpdate = geom.normalsNeedUpdate = true;
      geom.computeBoundingSphere();
      geom.computeBoundingBox();
      var m = new THREE.Mesh(geom);
      m.matrix.copy(toMatrix);
      m.matrix.decompose(m.position,m.rotation,m.scale);
      m.updateMatrixWorld();
      return m
  };


  CSG.ieval=function(tokens,index=0){
      if(typeof tokens === 'string')
          CSG.currentOp=tokens;
      else if(tokens instanceof Array){
          for(let i=0;i<tokens.length;i++)CSG.ieval(tokens[i],0);
      }else if(typeof tokens==='object'){
          var op=CSG.currentOp;
          tokens.updateMatrix();
          tokens.updateMatrixWorld();
          if(!CSG.sourceMesh)
              CSG.currentPrim =  CSG.fromMesh(CSG.sourceMesh = tokens);
          else {
              CSG.nextPrim = CSG.fromMesh(tokens);
              CSG.currentPrim = CSG.currentPrim[op](CSG.nextPrim);
          }
          if(CSG.doRemove)tokens.parent.remove(tokens);
      }//union,subtract,intersect,inverse
  };

  CSG.eval=function(tokens,doRemove){//[['add',mesh,mesh,mesh,mesh],['sub',mesh,mesh,mesh,mesh]]
      CSG.currentOp=null;
      CSG.sourceMesh=null;
      CSG.doRemove=doRemove;
      CSG.ieval(tokens);
      var result = CSG.toMesh( CSG.currentPrim, CSG.sourceMesh.matrix );
      result.material = CSG.sourceMesh.material;
      result.castShadow  = result.receiveShadow = true;
      return result;
  };
  // Return a new CSG solid representing space in either this solid or in the
  // solid `csg`. Neither this solid nor the solid `csg` are modified.
  // 
  //     A.union(B)
  // 
  //     +-------+            +-------+
  //     |       |            |       |
  //     |   A   |            |       |
  //     |    +--+----+   =   |       +----+
  //     +----+--+    |       +----+       |
  //          |   B   |            |       |
  //          |       |            |       |
  //          +-------+            +-------+
  // 
  // Return a new CSG solid representing space in this solid but not in the
  // solid `csg`. Neither this solid nor the solid `csg` are modified.
  // 
  //     A.subtract(B)
  // 
  //     +-------+            +-------+
  //     |       |            |       |
  //     |   A   |            |       |
  //     |    +--+----+   =   |    +--+
  //     +----+--+    |       +----+
  //          |   B   |
  //          |       |
  //          +-------+
  // 
  // Return a new CSG solid representing space both this solid and in the
  // solid `csg`. Neither this solid nor the solid `csg` are modified.
  // 
  //     A.intersect(B)
  // 
  //     +-------+
  //     |       |
  //     |   A   |
  //     |    +--+----+   =   +--+
  //     +----+--+    |       +--+
  //          |   B   |
  //          |       |
  //          +-------+
  //

  function applyBoolDifferences(baseMesh, clipMeshes) {
    preventCoplanarSurfaces(baseMesh);
    let operand1 = CSG.fromMesh(baseMesh);

    for (let i = 0; i < clipMeshes.length; i++) {
      const clipMesh = clipMeshes[i];
      clipMesh.updateMatrix();
      const operand2 = CSG.fromMesh(clipMesh);
      operand1 = operand2.polygons.length > 0 ? subtractVolume(operand1, operand2, baseMesh, clipMesh) : operand1;
    }

    return operand1;
  } //Ugly, but avoids crashes of CSG operations due to face superpositions


  function preventCoplanarSurfaces(baseMesh) {
    const factor = 0.99999;
    baseMesh.scale.x *= factor;
    baseMesh.scale.y *= factor;
    baseMesh.scale.z *= factor;
    baseMesh.updateMatrix();
  } //Sometimes (uncommon) the CSG library fails and swaps the functionality of subtract and intersects
  //This rectifies the result if it is an intersection instead of a subtraction


  function subtractVolume(operand1, operand2, baseMesh, clippingMesh) {
    const result = operand1.subtract(operand2);
    const resultMesh = CSG.toMesh(result, baseMesh.matrix);
    const boundingBox1 = new THREE.Box3().setFromObject(resultMesh);
    const boundingBox2 = new THREE.Box3().setFromObject(clippingMesh);
    if (areBoundingBoxesEqual(boundingBox1, boundingBox2)) return operand1.intersect(operand2);
    return result;
  }

  function areBoundingBoxesEqual(boundingBox1, boundingBox2) {
    return isPointEqual(boundingBox1.max, boundingBox2.max, 2) && isPointEqual(boundingBox1.min, boundingBox2.min, 2);
  }

  function isPointEqual(point1, point2, precission) {
    return point1.x.toFixed(precission) == point2.x.toFixed(precission) && point1.y.toFixed(precission) == point2.y.toFixed(precission) && point1.z.toFixed(precission) == point2.z.toFixed(precission);
  }

  function mapClipping(shape, product) {
    const {
      clippingReps,
      bodyRep
    } = getClippingRepresentations(shape);
    const mainGeometry = getMappedGeometry(bodyRep, product);
    const clippingGeometries = createClippingVolumes(clippingReps);
    const booleanResult = applyBoolDifferences(mainGeometry, clippingGeometries);
    return generateResultMesh(booleanResult, mainGeometry, clippingGeometries);
  }

  function generateResultMesh(booleanResult, mainGeometry, clippingGeometries) {
    const result = CSG.toMesh(booleanResult, mainGeometry.matrix);
    result.geometry = new THREE.BufferGeometry().fromGeometry(result.geometry);
    result.material = new THREE.MeshPhongMaterial();
    mainObject.remove(mainGeometry);
    clippingGeometries.forEach(clippingGeo => mainObject.remove(clippingGeo));
    return result;
  }

  function getClippingRepresentations(shape) {
    const clippingReps = [];
    let bodyRep = shape[namedProps.items][0];

    while (bodyRep[namedProps.ifcClass] == 'IfcBooleanClippingResult') {
      clippingReps.push(bodyRep[namedProps.secondOperand]);
      bodyRep = bodyRep[namedProps.firstOperand];
    }

    return {
      clippingReps,
      bodyRep
    };
  }

  function createClippingVolumes(clippingRepresentations) {
    const clippingGeometries = [];
    clippingRepresentations.forEach(clippingRep => clippingGeometries.push(createClippingVolume(clippingRep)));
    return clippingGeometries;
  }

  function createClippingVolume(clippingRep) {
    if (clippingRep[namedProps.ifcClass].toUpperCase() === ifcTypes.IfcHalfSpaceSolid) return mapIfcHalfSpaceSolid(clippingRep);
    return mapIfcPolygonalBoundedHalfSpace(clippingRep);
  }

  function mapIfcHalfSpaceSolid(clippingRep) {
    let orientation = clippingRep[namedProps.agreementFlag];
    if (typeof orientation != 'boolean') orientation = orientation.value;
    const clippingGeom = createClippingBox(orientation);
    const position = clippingRep[namedProps.baseSurface][namedProps.position];
    applyTransformsToGeometry(clippingGeom, position);
    return clippingGeom;
  }

  function mapIfcPolygonalBoundedHalfSpace(clippingRep) {
    const clippingGeom = mapIfcHalfSpaceSolid(clippingRep);
    const boundingGeom = getBoundingGeometry(clippingRep);
    const result = applyBoundingToGeometry(clippingGeom, boundingGeom);
    result.geometry = new THREE.BufferGeometry().fromGeometry(result.geometry);
    result.material = new THREE.MeshPhongMaterial();
    mainObject.remove(clippingGeom);
    mainObject.remove(boundingGeom);
    result.add(clippingGeom);
    return result;
  }

  function applyBoundingToGeometry(clippingGeom, boundingGeom) {
    let bspA = CSG.fromMesh(clippingGeom);
    let bspB = CSG.fromMesh(boundingGeom);
    let geomResult = bspA.intersect(bspB);
    return CSG.toMesh(geomResult, clippingGeom.matrix);
  }

  function getBoundingGeometry(clippingRep) {
    const points = getBoundingPoints(clippingRep);
    const boundingGeom = createExtrusionsByPoints(points, 1000000);
    const boundPosition = clippingRep[namedProps.position];
    applyTransformsToGeometry(boundingGeom, boundPosition);
    boundingGeom.position.z -= 500000;
    boundingGeom.updateMatrix();
    return boundingGeom;
  }

  function getBoundingPoints(clippingRep) {
    return clippingRep[namedProps.polygonalBoundary][namedProps.points].map(point => {
      const coords = point[namedProps.coordinates];
      return [-coords[0], -coords[1]];
    });
  }

  function mapBoundingBox(shape) {
    const representation = shape[namedProps.items][0];
    const dims = getBoundingBoxDimensions(representation);
    const boundingBox = new THREE.BoxGeometry(dims.x, dims.y, dims.z);
    const mesh = new THREE.Mesh(boundingBox);
    setBoundingBoxPosition(mesh, representation, dims);
    return new THREE.Object3D();
  }

  function setBoundingBoxPosition(mesh, representation, dims) {
    const bottomLeftCorner = representation[namedProps.corner][namedProps.coordinates];
    mesh.position.set(bottomLeftCorner[0], bottomLeftCorner[1], bottomLeftCorner[2]);
    mesh.position.x += dims.x / 2;
    mesh.position.y += dims.y / 2;
    mesh.position.z += dims.z / 2;
  }

  function getBoundingBoxDimensions(representation) {
    return {
      x: representation[namedProps.xDim],
      y: representation[namedProps.yDim],
      z: representation[namedProps.zDim]
    };
  }

  function mapAnnotation(shape) {
    //TODO
    return new THREE.Object3D();
  }

  function constructGeometries(structured) {
    structured[structuredData.products].forEach(product => constructGeometry(product));
    structured[structuredData.spaces].forEach(space => constructGeometry(space));
  }

  function constructGeometry(item) {
    try {
      getRepresentations(item);
      mapRepresentations(item);
    } catch (e) {
      console.warn(e);
    }
  }

  function getRepresentations(product) {
    getRepresentationValue(product);
    getRepresentationOfItem(product[namedProps.hasOpenings]);
    getRepresentationOfItem(product[namedProps.hasSpatial]);
  }

  function getRepresentationOfItem(items) {
    if (items) items.forEach(item => getRepresentationValue(item));
  }

  function getRepresentationValue(product) {
    try {
      const representations = product[namedProps.representation][namedProps.representations];
      product[namedProps.geomRepresentations] = representations ? representations : [];
    } catch (e) {
      console.warn(e);
    }
  }

  function mapRepresentations(product) {
    mapProductRepresentations(product);
    mapRepresentationsOfItems(product[namedProps.hasOpenings]);
    mapRepresentationsOfItems(product[namedProps.hasSpatial]);
  }

  function mapRepresentationsOfItems(items) {
    if (items) items.forEach(item => mapProductRepresentations(item));
  }

  function mapProductRepresentations(product) {
    product[namedProps.geometry] = [];
    product[namedProps.geomRepresentations].forEach(representation => {
      const generatedGeometry = getMappedGeometry(representation, product);
      generatedGeometry._Data = product;
      product[namedProps.geometry].push(generatedGeometry);
    });
  }

  const geometryMap = {
    [geometryTypes.curve2D]: mapCurve2D,
    [geometryTypes.curve3D]: mapCurve3D,
    [geometryTypes.sweptSolid]: mapSweptSolid,
    [geometryTypes.mappedRepresentation]: mapMappedRepresentation,
    [geometryTypes.brep]: mapBrep,
    [geometryTypes.geometricSet]: mapGeometricSet,
    [geometryTypes.clipping]: mapClipping,
    [geometryTypes.extrudedAreaSolid]: mapExtrudedAreaSolid,
    [geometryTypes.surfaceModel]: mapSurfaceModel,
    [geometryTypes.boundingBox]: mapBoundingBox,
    [geometryTypes.annotation2D]: mapAnnotation
  };

  function getMappedGeometry(representation, product) {
    const type = getType(representation);

    try {
      return geometryMap[type](representation, product);
    } catch (e) {
      console.warn(`Error with item ${product[namedProps.ifcClass]} of type ${type}: ${e}`);
      return geometryMap[type](representation, product);
    }
  }

  function getType(representation) {
    const type = representation[namedProps.representationType];
    return type ? type : representation[namedProps.ifcClass];
  }

  function subtractOpenings(structured) {
    structured[structuredData.products].forEach(product => {
      try {
        if (product[namedProps.hasOpenings]) applyBooleanOperation(product);
      } catch (e) {
        console.warn('Error with CSG operations with: ', product, e);
      }
    });
  }

  function applyBooleanOperation(product) {
    for (let i = 0; i < product[namedProps.geometry].length; i++) {
      const geometryItem = product[namedProps.geometry][i];
      if (geometryItem.type === 'Mesh' && !geometryItem[namedProps.isBrep]) product[namedProps.geometry][i] = applyBooleanOperationOnMesh(product, geometryItem);
    }
  }

  function applyBooleanOperationOnMesh(product, geometry) {
    const openings = getOpenings(product);
    const resultGeom = applyBoolDifferences(geometry, openings);
    const result = CSG.toMesh(resultGeom, geometry.matrix);
    result.geometry = new THREE.BufferGeometry().fromGeometry(result.geometry);
    result.material = new THREE.MeshPhongMaterial();
    addResultToScene(geometry, openings, result);
    return result;
  }

  function addResultToScene(geometryItem, openings, result) {
    result._Data = geometryItem._Data; //Reference to parsed IFC information

    openings.forEach(opening => result.attach(opening));
    geometryItem.children.forEach(child => result.attach(child));
    mainObject.add(result);
    mainObject.remove(geometryItem);
  }

  function getOpenings(product) {
    const openingsReps = product[namedProps.hasOpenings];
    const openings = [];

    for (let i = 0; i < openingsReps.length; i++) openings.push(openingsReps[i][namedProps.geometry][0]);

    return openings;
  }

  const colors = {
    black: 0x000000,
    brown: 0xc2893a,
    red: 0xff0000,
    grey: 0x606060,
    darkBrown: 0x5c3d1e,
    darkBlue: 0x23395d,
    lightBlue: 0xadd8e6,
    white: 0xffffff
  };
  const materials = {
    whiteDiffuse: getDiffuseMat(colors.white),
    brownDiffuse: getDiffuseMat(colors.brown),
    transparent: getTransparentMat(colors.white, 0),
    translucentBlue: getTransparentMat(colors.lightBlue, 0.2)
  };
  const lineMaterials = {
    grey: newLineMaterial(colors.grey),
    brown: newLineMaterial(colors.darkBrown),
    blue: newLineMaterial(colors.darkBlue),
    black: newLineMaterial(colors.black)
  };

  function getMaterial(ifcType) {
    try {
      return materialsMap[ifcTypes[ifcType]].material;
    } catch (e) {
      console.warn(`The type ${ifcType} doesn't have a material implemented.`);
    }
  }

  function getLineMaterial(ifcType) {
    try {
      return materialsMap[ifcTypes[ifcType]].lineMaterial;
    } catch {
      return newLineMaterial(colors.grey);
    }
  }

  function getDiffuseMat(color) {
    return new THREE.MeshLambertMaterial({ ...getBaseSettings(color)
    });
  }

  function getTransparentMat(color, opacity = 0.2) {
    return new THREE.MeshBasicMaterial({ ...getBaseSettings(color),
      opacity: opacity,
      transparent: true,
      depthWrite: false
    });
  }

  function getBaseSettings(color) {
    return {
      color: color,
      side: 2,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    };
  }

  function newLineMaterial(lineColor) {
    return new THREE.LineBasicMaterial({
      color: lineColor
    });
  }

  const materialsMap = {
    [ifcTypes.IfcWall]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcWallStandardCase]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcSite]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcSlab]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcCovering]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcRoof]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcEquipmentElement]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcFurnishingElement]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcRailing]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcColumn]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcFooting]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcBeam]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcStair]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcStairFlight]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcMember]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcFlowTerminal]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcBuildingElementProxy]: {
      material: materials.whiteDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcDoor]: {
      material: materials.brownDiffuse,
      lineMaterial: lineMaterials.brown
    },
    [ifcTypes.IfcPlate]: {
      material: materials.translucentBlue,
      lineMaterial: lineMaterials.blue
    },
    [ifcTypes.IfcWindow]: {
      material: materials.translucentBlue,
      lineMaterial: lineMaterials.blue
    },
    [ifcTypes.IfcSpace]: {
      material: materials.transparent,
      lineMaterial: lineMaterials.grey
    },
    [ifcTypes.IfcOpeningElement]: {
      material: materials.transparent,
      lineMaterial: lineMaterials.grey
    }
  };

  function applyMaterials(structured) {
    applyMaterialOnSpaces(structured);
    structured[structuredData.products].forEach(product => {
      applyMaterialOnMesh(product);
      applyMaterialOnOpenings(product);
      applyMaterialOnSubElements(product);
    });
  }

  function applyMaterialOnSpaces(structured) {
    structured[structuredData.spaces].forEach(space => space[namedProps.geometry].forEach(item => getMeshMaterial(item, space[namedProps.ifcClass])));
  }

  function applyMaterialOnMesh(product) {
    product[namedProps.geometry].forEach(item => {
      getMeshMaterial(item, product[namedProps.ifcClass]);
    });
  }

  function applyMaterialOnOpenings(product) {
    applyMaterialOnItem(product[namedProps.hasOpenings]);
  }

  function applyMaterialOnSubElements(product) {
    applyMaterialOnItem(product[namedProps.hasSpatial]);
  }

  function getMeshMaterial(item, ifcType) {
    if (item.type === 'Mesh') item.material = getMaterial(ifcType);
    if (item.material && item.material.transparent === true) item.renderOrder = 1;
  }

  function applyMaterialOnItem(items) {
    if (items) items.forEach(prop => {
      prop[namedProps.geometry].forEach(geometry => {
        if (geometry.type === 'Mesh') geometry.material = getMaterial(prop[namedProps.ifcClass]);
      });
    });
  }

  function drawEdges(structured) {
    structured[structuredData.products].forEach(product => {
      generateEdgesOnProduct(product);
      generateEdgesOnItems(product[namedProps.hasSpatial]);
      generateEdgesOnItems(product[namedProps.hasOpenings]);
    });
  }

  function generateEdgesOnProduct(product) {
    product[namedProps.geometry].forEach(item => {
      const ifcClass = product[namedProps.ifcClass];
      if (item.type === 'Mesh' && ifcClass) createEdgesOfItem(ifcClass, item);
    });
  }

  function generateEdgesOnItems(items) {
    if (items) items.forEach(item => item[namedProps.geometry].forEach(geometry => createEdgesOfItem(item[namedProps.ifcClass], geometry)));
  }

  function createEdgesOfItem(ifcClass, item) {
    try {
      if (item.type === 'Mesh') {
        const geometry = new THREE.EdgesGeometry(item.geometry);
        const material = getLineMaterial(ifcClass);
        const wireframe = new THREE.LineSegments(geometry, material);
        item.add(wireframe);
      }
    } catch (e) {
      console.warn(`Error generating edges of the following item, of class ${ifcClass}:`, item);
    }
  }

  function applyScale(structured) {
    const units = structured[structuredData.units][namedProps.units];
    const scale = getUnitScale(units);
    if (scale === 1) return;
    applyScaleOnItems(scale, structured);
  }

  function applyScaleOnItems(scale, structured) {
    const axis = new THREE.Object3D();
    mainObject.add(axis);
    const geometries = getALlGeometries(structured);
    geometries.forEach(geometry => {
      axis.attach(geometry);
      axis.scale.set(scale, scale, scale);
      mainObject.attach(geometry);
      axis.scale.set(1, 1, 1);
    });
  }

  function getALlGeometries(structured) {
    const allGeometry = [];
    structured[structuredData.products].forEach(product => getGeometry$1(product, allGeometry));
    return allGeometry;
  }

  function getGeometry$1(product, allGeometry) {
    allGeometry.push(...product[namedProps.geometry]);
    if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(spatial => getGeometry$1(spatial, allGeometry));
  }

  function getUnitScale(units) {
    const lengthUnit = units.filter(unitType => {
      return unitType[namedProps.unitType] === 'LENGTHUNIT';
    })[0];
    const prefix = lengthUnit[namedProps.prefix];
    return unitMap[prefix];
  }

  const unitMap = {
    EXA: 100000000,
    PETA: 10000000,
    TERA: 1000000,
    GIGA: 100000,
    MEGA: 10000,
    KILO: 1000,
    HECTO: 100,
    DECA: 10,
    $: 1,
    DECI: 0.1,
    CENTI: 0.01,
    MILLI: 0.001,
    MICRO: 0.0001,
    NANO: 0.00001,
    PICO: 0.000001,
    FEMTO: 0.0000001,
    ATTO: 0.00000001
  };

  function buildGeometry(structured) {
    //console.log(structured);
    constructGeometries(structured);
    applyTransformations(structured);
    drawEdges(structured);
    subtractOpenings(structured);
    applyMaterials(structured);
    applyScale(structured);
    return structured;
  }

  exports.buildGeometry = buildGeometry;
  exports.mainObject = mainObject;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
