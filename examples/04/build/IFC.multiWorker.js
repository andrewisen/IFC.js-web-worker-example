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
    directrix: "Directrix",
    dirRatios: "DirectionRatios",
    elements: "Elements",
    endParam: "EndParam",
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
    innerRadius: "InnerRadius",
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
    startParam: "StartParam",
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
  const typeValue = {
    type: "type",
    value: "value"
  };
  const ifcUnitsValue = {
    value: "Value",
    unit: "IfcUnit"
  };
  const structuredData = {
    ifcProject: "IfcProject",
    products: "Products",
    spaces: "Spaces",
    units: "Units",
    mainObject: "MainObject"
  };

  const ifcDataTypes = {
    asterisk: "Asterisk",
    anything: "Anything",
    bool: "Boolean",
    date: "Date",
    default: "DefaultValue",
    enum: "Enum",
    id: "ExpressId",
    idSet: "ExpressIdSet",
    value: "IfcValue",
    number: "Number",
    numSet: "NumberSet",
    valueSet: "ValueSet",
    text: "Text",
    textSet: "TextSet"
  };
  const dataTypesSet = new Set();
  Object.values(ifcDataTypes).forEach(e => dataTypesSet.add(e));
  const dataTypesArray = Array.from(dataTypesSet);

  function bindEntities(items) {
    for (let item in items) {
      const ifcItem = items[item];

      for (let property in ifcItem) {
        bindProperty(ifcItem[property], items);
        trimExplicitTypes(ifcItem, property);
      }
    }
  }

  function bindProperty(ifcProperty, items) {
    bindIdProperty(ifcProperty, items);
    bindIdSetProperty(ifcProperty, items);
    bindValueSetProperty(ifcProperty, items);
  }

  function bindIdProperty(ifcProperty, items) {
    const id = ifcProperty[typeValue.value];
    if (ifcProperty[typeValue.type] === ifcDataTypes.id && items.hasOwnProperty(id)) ifcProperty[typeValue.value] = items[id];
  }

  function bindIdSetProperty(ifcProperty, items) {
    if (ifcProperty[typeValue.type] === ifcDataTypes.idSet) {
      const values = [...ifcProperty[typeValue.value]];
      ifcProperty[typeValue.value] = values.map(e => items.hasOwnProperty(e) ? items[e] : e);
    }
  } //IfcValues can also contains IDs (not always)


  function bindValueSetProperty(ifcProperty, items) {
    if (ifcProperty[typeValue.type] === ifcDataTypes.valueSet && ifcProperty[typeValue.value][0][ifcUnitsValue.unit] === ifcDataTypes.id) ifcProperty[typeValue.value] = ifcProperty[typeValue.value].map(e => {
      if (items.hasOwnProperty(e[ifcUnitsValue.value])) e[ifcUnitsValue.value] = items[e[ifcUnitsValue.value]];
      return e;
    });
  }

  function trimExplicitTypes(ifcLine, key) {
    const value = ifcLine[key][typeValue.value];
    if (typeof value !== 'undefined') ifcLine[key] = value;
  }

  const regexp = {
    allNewLines: /\r?\n|\r/g,
    headerSection: /HEADER;.+?(?=ENDSEC;)/,
    dataSection: /DATA;.+(?=ENDSEC;)/,
    singleIfcItems: /#\d+\s*=\s*IFC.+?\)(;\s*(?=#\d*)|;\s*$)/g,
    expressId: /^#\d+/,
    rawIfcType: /IFC\w+/,
    rawIfcProperties: /\(.+?(?=;\s*$)/
  };

  function extractSections(loadedIfc) {
    const ifcPlaneText = removeAllNewLines(loadedIfc);
    return {
      // headerSection: readHeaderSection(ifcPlaneText),
      dataSection: readDataSection(ifcPlaneText)
    };
  }

  function readDataSection(ifcLine) {
    return ifcLine.match(regexp.dataSection)[0];
  }

  function removeAllNewLines(ifcFile) {
    return ifcFile.replace(regexp.allNewLines, '');
  }

  const ifcTypes = {
    //Building elements
    IfcBuildingElementProxy: "IFCBUILDINGELEMENTPROXY",
    IfcBeam: "IFCBEAM",
    IfcBuildingElementPart: "IFCBUILDINGELEMENTPART",
    IfcColumn: "IFCCOLUMN",
    IfcCovering: "IFCCOVERING",
    IfcCurtainWall: "IFCCURTAINWALL",
    IfcDistributionElement: "IFCDISTRIBUTIONELEMENT",
    IfcDoor: "IFCDOOR",
    IfcElementAssembly: "IFCELEMENTASSEMBLY",
    IfcEquipmentElement: "IFCEQUIPMENTELEMENT",
    IfcFastener: "IFCFASTENER",
    IfcFlowFitting: "IFCFLOWFITTING",
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
    IfcVirtualElement: "IFCVIRTUALELEMENT",
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
    IfcOpenShell: "IFCOPENSHELL",
    IfcPlane: "IFCPLANE",
    IfcPolygonalBoundedHalfSpace: "IFCPOLYGONALBOUNDEDHALFSPACE",
    IfcPolyline: "IFCPOLYLINE",
    IfcPolyLoop: "IFCPOLYLOOP",
    IfcProductDefinitionShape: "IFCPRODUCTDEFINITIONSHAPE",
    IfcRectangleHollowProfileDef: "IFCRECTANGLEHOLLOWPROFILEDEF",
    IfcRectangleProfileDef: "IFCRECTANGLEPROFILEDEF",
    IfcShapeRepresentation: "IFCSHAPEREPRESENTATION",
    IfcShellBasedSurfaceModel: "IFCSHELLBASEDSURFACEMODEL",
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
    IfcCableCarrierSegmentType: "IFCCABLECARRIERSEGMENTTYPE",
    IfcCableCarrierFittingType: "IFCCABLECARRIERFITTINGTYPE",
    IfcCoveringType: "IFCCOVERINGTYPE",
    IfcCurtainWallType: "IFCCURTAINWALLTYPE",
    IfcDuctFittingType: "IFCDUCTFITTINGTYPE",
    IfcFireSuppressionTerminalType: "IFCFIRESUPPRESSIONTERMINALTYPE",
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
    IfcPipeFittingType: "IFCPIPEFITTINGTYPE",
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
    IfcWindowPanelProperties: "IFCWINDOWPANELPROPERTIES",
    //Quantities
    IfcElementQuantity: "IFCELEMENTQUANTITY",
    IfcMonetaryUnit: "IFCMONETARYUNIT",
    IfcQuantityArea: "IFCQUANTITYAREA",
    IfcQuantityCount: "IFCQUANTITYCOUNT",
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
    IfcRelConnectsPorts: "IFCRELCONNECTSPORTS",
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
  const ifcTypesSet = new Set();
  Object.values(ifcTypes).forEach(e => ifcTypesSet.add(e));
  const ifcTypesMap = new Map();
  Object.keys(ifcTypes).forEach(e => ifcTypesMap.set(ifcTypes[e], e));

  function getName(ifcType) {
    return ifcTypesMap.get(ifcType);
  }

  class IfcEntityFinder {
    constructor(ifcData) {
      const map = new Map(); // generate map so we can return all types without looping tree again

      Object.keys(ifcData).forEach(e => {
        const t = ifcData[e][namedProps.ifcClass];

        if (map.has(t)) {
          const x = map.get(t);
          x.push({
            p: e,
            d: ifcData[e]
          });
        } else {
          const x = [{
            p: e,
            d: ifcData[e]
          }];
          map.set(t, x);
        }
      });
      this.cache = map;
    }

    findByType(ifcType) {
      const map = this.cache;
      const matches = {};

      if (map.has(getName(ifcType))) {
        const x = map.get(getName(ifcType));
        x.forEach(e => {
          matches[e.p] = e.d;
        });
      }

      return matches;
    }

    findAllProducts(spatialStructureElements, elements = []) {
      spatialStructureElements.forEach(spatial => {
        const buildingElementsHere = spatial[namedProps.hasBuildingElements];
        const spatialElementsHere = spatial[namedProps.hasSpatial];
        if (buildingElementsHere) elements.push(...buildingElementsHere);
        if (spatialElementsHere) this.findAllProducts(spatialElementsHere, elements);
      });
      return elements;
    }

  }

  function createIfcItemsFinder(loadedIfc) {
    return new IfcEntityFinder(loadedIfc);
  }

  function bindElements(finder, type, relating, related, property) {
    const relations = finder.findByType(type);
    if (Object.keys(relations).length === 0) return;

    const _isArray = isArray(Object.keys(relations)[0]);

    Object.values(relations).forEach(relation => {
      return _isArray ? bindMultiple(relation, relating, related, property) : bindSingle(relation, relating, related, property);
    });
  }

  function bindSingle(relation, relating, related, property) {
    if (!relation[relating][property]) relation[relating][property] = [];
    bind(relation[relating][property], relation, related);
  }

  function bindMultiple(relation, relating, related, property) {
    relation[relating].forEach(e => {
      if (!e[property]) e[property] = [];
      bind(e[property], relation, related);
    });
  }

  function bind(property, relation, related) {
    return isArray(relation[related]) ? property.push(...relation[related]) : property.push(relation[related]);
  }

  function isArray(item) {
    return item.constructor === Array;
  }

  function constructProject(ifcData) {
    const finder = createIfcItemsFinder(ifcData);
    bindAllElements(finder);
    const ifcProjects = get(finder, ifcTypes.IfcProject);
    const elements = finder.findAllProducts(ifcProjects);
    const spaces = get(finder, ifcTypes.IfcSpace);
    const units = get(finder, ifcTypes.IfcUnitAssignment)[0];
    return {
      [structuredData.ifcProject]: ifcProjects,
      [structuredData.products]: elements,
      [structuredData.spaces]: spaces,
      [structuredData.units]: units,
      [structuredData.mainObject]: {} // mainObject

    };
  }

  function get(finder, type) {
    return Object.values(finder.findByType(type));
  }

  function bindAllElements(finder) {
    bindSpatialToSpatial(finder);
    bindElementsToSpatial(finder);
    bindVoidsToElements(finder);
    bindFillingsToElements(finder);
    bindTypesToElements(finder);
  }

  function bindSpatialToSpatial(finder) {
    bindElements(finder, ifcTypes.IfcRelAggregates, namedProps.relatingObject, namedProps.relatedObjects, namedProps.hasSpatial);
  }

  function bindElementsToSpatial(finder) {
    bindElements(finder, ifcTypes.IfcRelContainedInSpatialStructure, namedProps.relatingStructure, namedProps.relatedElements, namedProps.hasBuildingElements);
  }

  function bindVoidsToElements(finder) {
    bindElements(finder, ifcTypes.IfcRelVoidsElement, namedProps.relatingBuildingElement, namedProps.relatedOpeningElement, namedProps.hasOpenings);
  }

  function bindFillingsToElements(finder) {
    bindElements(finder, ifcTypes.IfcRelFillsElement, namedProps.relatingOpeningElement, namedProps.relatedBuildingElement, namedProps.hasFillings);
  }

  function bindTypesToElements(finder) {
    bindElements(finder, ifcTypes.IfcRelDefinesByType, namedProps.relatedObjects, namedProps.relatingType, namedProps.hasType);
  }

  exports.bindEntities = bindEntities;
  exports.constructProject = constructProject;
  exports.extractSections = extractSections;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
