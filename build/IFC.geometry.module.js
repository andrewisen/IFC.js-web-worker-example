function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var namedProps = {
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
  firstOperand: "FirstOperand",
  geometry: "_Geometry",
  geomRepresentations: "_GeometryRepresentations",
  hasBuildingElements: "_HasBuildingElements",
  hasFillings: "_HasFillings",
  hasOpenings: "_HasOpenings",
  hasSpatial: "_HasSpatialStructures",
  hasType: "_HasType",
  ifcClass: "_IfcClass",
  innerCurves: "InnerCurves",
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
  xDim: "XDim",
  yDim: "YDim",
  zDim: "ZDim"
};
var ifcUnitsValue = {
  value: "Value",
  unit: "IfcUnit"
};
var geometryTypes = {
  annotation2D: "Annotation2D",
  curve2D: "Curve2D",
  sweptSolid: "SweptSolid",
  mappedRepresentation: "MappedRepresentation",
  brep: "Brep",
  geometricSet: "GeometricSet",
  clipping: "Clipping",
  extrudedAreaSolid: "IfcExtrudedAreaSolid",
  surfaceModel: "SurfaceModel",
  boundingBox: "BoundingBox"
};
var structuredData = {
  ifcProject: "IfcProject",
  products: "Products",
  spaces: "Spaces",
  units: "Units",
  mainObject: "MainObject"
};
var pivots = {
  pivots: "Pivots",
  locat: "Locations",
  xAxis: "xRotation",
  yAxis: "yRotation",
  zAxis: "zRotation"
};
var defaultValue = "$";

function trackLocalTransform(product, placement, property) {
  var transform = initializeTransform(product, property);

  var _getTransform = getTransform(placement),
      locat = _getTransform.locat,
      xAxis = _getTransform.xAxis,
      yAxis = _getTransform.yAxis,
      zAxis = _getTransform.zAxis;

  transform[pivots.locat].push(locat);
  transform[pivots.xAxis].push(xAxis);
  transform[pivots.yAxis].push(yAxis);
  transform[pivots.zAxis].push(zAxis);
}

function initializeTransform(product, property) {
  var _product$property;

  if (!product[property]) product[property] = (_product$property = {}, _defineProperty(_product$property, pivots.locat, []), _defineProperty(_product$property, pivots.xAxis, []), _defineProperty(_product$property, pivots.yAxis, []), _defineProperty(_product$property, pivots.zAxis, []), _product$property);
  return product[property];
}

function getTransform(placement) {
  var locat = getLocat(placement);
  var xAxis = getAxisX(placement);
  var zAxis = getAxisZ(placement);
  var yAxis = getAxisY(zAxis, xAxis);
  return {
    locat: locat,
    xAxis: xAxis,
    yAxis: yAxis,
    zAxis: zAxis
  };
}

function getTransformOfGeometry(placement) {
  var _ref;

  var _getTransform2 = getTransform(placement),
      locat = _getTransform2.locat,
      xAxis = _getTransform2.xAxis,
      yAxis = _getTransform2.yAxis,
      zAxis = _getTransform2.zAxis;

  return _ref = {}, _defineProperty(_ref, pivots.locat, [locat]), _defineProperty(_ref, pivots.xAxis, [xAxis]), _defineProperty(_ref, pivots.yAxis, [yAxis]), _defineProperty(_ref, pivots.zAxis, [zAxis]), _ref;
}

function getLocat(placement) {
  if (isInvalid(placement[namedProps.location])) return [0, 0, 0];
  var location = placement[namedProps.location][namedProps.coordinates];
  if (location.length === 2) location.push(0);
  return location;
}

function getAxisX(placement) {
  if (isInvalid(placement[namedProps.refDirection])) return [1, 0, 0];
  var x = placement[namedProps.refDirection][namedProps.dirRatios];
  if (x.length === 2) x.push(0);
  return x;
}

function getAxisZ(placement) {
  if (isInvalid(placement[namedProps.axis])) return [0, 0, 1];
  var z = placement[namedProps.axis][namedProps.dirRatios];
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

var mainObject = new THREE.Object3D();

function applyTransforms(product, property) {
  var pivots = getPivots(product[property]);
  product[namedProps.geometry].forEach(function (geometry) {
    return applyTransform(geometry, pivots);
  });
}

function applyTransformsToGeometry(geometry, placement) {
  var transform = getTransformOfGeometry(placement);
  var pivots = getPivots(transform);
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
  if (geometry.constructor === Array) return geometry.forEach(function (e) {
    return attachGeometryToScene(e);
  });
  return mainObject.attach(geometry);
}

function bindGeometryToPivots(geometry, pivots) {
  if (geometry.constructor === Array) return geometry.forEach(function (e) {
    return bindGeometryToPivots(e, pivots);
  });
  pivots[pivots.length - 1].add(geometry);
}

function getPivots(transform) {
  var pivots$1 = [];
  var locations = transform[pivots.locat] || [];

  for (var i = locations.length - 1; i >= 0; i--) {
    var _pivot$position;

    var pivot = new THREE.Object3D();
    pivot.rotation.setFromRotationMatrix(getRotMat(transform, i));

    (_pivot$position = pivot.position).set.apply(_pivot$position, _toConsumableArray(locations[i]));

    pivots$1.push(pivot);
  }

  bindPivots(pivots$1);
  return pivots$1;
}

function bindPivots(pivots) {
  for (var i = 0; i < pivots.length; i++) {
    if (pivots[i + 1]) pivots[i].add(pivots[i + 1]);
  }
}

function getRotMat(transform, index) {
  var _getTransforms = getTransforms(transform, index),
      x = _getTransforms.x,
      y = _getTransforms.y,
      z = _getTransforms.z;

  var directionMatrix = new THREE.Matrix4();
  var rotationMatrix = new THREE.Matrix4();
  directionMatrix.set(x[0], x[1], x[2], 0, y[0], y[1], y[2], 0, z[0], z[1], z[2], 0, 0, 0, 0, 1);
  rotationMatrix.getInverse(directionMatrix);
  return rotationMatrix;
}

function getTransforms(transform, index) {
  var x = transform[pivots.xAxis][index];
  var y = transform[pivots.yAxis][index];
  var z = transform[pivots.zAxis][index];
  return {
    x: x,
    y: y,
    z: z
  };
}

function applyTransformations(structured) {
  structured[structuredData.products].forEach(function (product) {
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
  if (items) items.forEach(function (item) {
    getTransforms$1(item, getPlacement(item));
    applyTransforms(item, namedProps.transform);
  });
} //Gets all the transforms (local origins) recursively


function getTransforms$1(product, objPlacement) {
  try {
    var placement = objPlacement[namedProps.relativePlacement];
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

function createLine(coordinates) {
  var material = new THREE.LineBasicMaterial({
    linecap: "round",
    color: 0xff0000
  });
  var points = [];
  coordinates.forEach(function (e) {
    points.push(new THREE.Vector3(e[0], e[1]));
  });
  var geometry = new THREE.BufferGeometry().setFromPoints(points);
  var line = new THREE.Line(geometry, material);
  return line;
}

var _ifcTypes;

var ifcTypes = (_ifcTypes = {
  //Building elements
  IfcBuildingElementProxy: "IFCBUILDINGELEMENTPROXY",
  IfcBeam: "IFCBEAM",
  IfcColumn: "IFCCOLUMN",
  IfcCovering: "IFCCOVERING",
  IfcCurtainWall: "IFCCURTAINWALL",
  IfcDoor: "IFCDOOR",
  IfcEquipmentElement: "IFCEQUIPMENTELEMENT",
  IfcFlowTerminal: "IFCFLOWTERMINAL",
  IfcFooting: "IFCFOOTING",
  IfcFurnishingElement: "IFCFURNISHINGELEMENT",
  IfcMappedItem: "IFCMAPPEDITEM",
  IfcMember: "IFCMEMBER",
  IfcPlate: "IFCPLATE",
  IfcRailing: "IFCRAILING",
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
  IfcPlanarExtent: "IFCPLANAREXTENT",
  IfcPlane: "IFCPLANE",
  IfcPolygonalBoundedHalfSpace: "IFCPOLYGONALBOUNDEDHALFSPACE",
  IfcPolyline: "IFCPOLYLINE",
  IfcPolyLoop: "IFCPOLYLOOP",
  IfcProductDefinitionShape: "IFCPRODUCTDEFINITIONSHAPE",
  IfcRectangleProfileDef: "IFCRECTANGLEPROFILEDEF",
  IfcShapeRepresentation: "IFCSHAPEREPRESENTATION",
  IfcTrimmedCurve: "IFCTRIMMEDCURVE"
}, _defineProperty(_ifcTypes, "IfcGeometricSet", "IFCGEOMETRICSET"), _defineProperty(_ifcTypes, "IfcArbitraryOpenProfileDef", "IFCARBITRARYOPENPROFILEDEF"), _defineProperty(_ifcTypes, "IfcSurfaceOfLinearExtrusion", "IFCSURFACEOFLINEAREXTRUSION"), _defineProperty(_ifcTypes, "IfcApplication", "IFCAPPLICATION"), _defineProperty(_ifcTypes, "IfcOrganization", "IFCORGANIZATION"), _defineProperty(_ifcTypes, "IfcOwnerHistory", "IFCOWNERHISTORY"), _defineProperty(_ifcTypes, "IfcPerson", "IFCPERSON"), _defineProperty(_ifcTypes, "IfcPersonAndOrganization", "IFCPERSONANDORGANIZATION"), _defineProperty(_ifcTypes, "IfcPostalAddress", "IFCPOSTALADDRESS"), _defineProperty(_ifcTypes, "IfcMaterial", "IFCMATERIAL"), _defineProperty(_ifcTypes, "IfcMaterialLayer", "IFCMATERIALLAYER"), _defineProperty(_ifcTypes, "IfcMaterialLayerSet", "IFCMATERIALLAYERSET"), _defineProperty(_ifcTypes, "IfcMaterialLayerSetUsage", "IFCMATERIALLAYERSETUSAGE"), _defineProperty(_ifcTypes, "IfcMaterialList", "IFCMATERIALLIST"), _defineProperty(_ifcTypes, "IfcAnnotation", "IFCANNOTATION"), _defineProperty(_ifcTypes, "IfcAnnotationFillArea", "IFCANNOTATIONFILLAREA"), _defineProperty(_ifcTypes, "IfcColourRgb", "IFCCOLOURRGB"), _defineProperty(_ifcTypes, "IfcCurveStyle", "IFCCURVESTYLE"), _defineProperty(_ifcTypes, "IfcCurveStyleFont", "IFCCURVESTYLEFONT"), _defineProperty(_ifcTypes, "IfcCurveStyleFontPattern", "IFCCURVESTYLEFONTPATTERN"), _defineProperty(_ifcTypes, "IfcDraughtingPreDefinedCurveFont", "IFCDRAUGHTINGPREDEFINEDCURVEFONT"), _defineProperty(_ifcTypes, "IfcFillAreaStyle", "IFCFILLAREASTYLE"), _defineProperty(_ifcTypes, "IfcFillAreaStyleHatching", "IFCFILLAREASTYLEHATCHING"), _defineProperty(_ifcTypes, "IfcMaterialDefinitionRepresentation", "IFCMATERIALDEFINITIONREPRESENTATION"), _defineProperty(_ifcTypes, "IfcRepresentationMap", "IFCREPRESENTATIONMAP"), _defineProperty(_ifcTypes, "IfcPresentationLayerAssignment", "IFCPRESENTATIONLAYERASSIGNMENT"), _defineProperty(_ifcTypes, "IfcPresentationStyleAssignment", "IFCPRESENTATIONSTYLEASSIGNMENT"), _defineProperty(_ifcTypes, "IfcStyledItem", "IFCSTYLEDITEM"), _defineProperty(_ifcTypes, "IfcStyledRepresentation", "IFCSTYLEDREPRESENTATION"), _defineProperty(_ifcTypes, "IfcSurfaceStyle", "IFCSURFACESTYLE"), _defineProperty(_ifcTypes, "IfcSurfaceStyleRendering", "IFCSURFACESTYLERENDERING"), _defineProperty(_ifcTypes, "IfcSurfaceStyleShading", "IFCSURFACESTYLESHADING"), _defineProperty(_ifcTypes, "IfcTextLiteralWithExtent", "IFCTEXTLITERALWITHEXTENT"), _defineProperty(_ifcTypes, "IfcTextStyle", "IFCTEXTSTYLE"), _defineProperty(_ifcTypes, "IfcTextStyleFontModel", "IFCTEXTSTYLEFONTMODEL"), _defineProperty(_ifcTypes, "IfcTextStyleForDefinedFont", "IFCTEXTSTYLEFORDEFINEDFONT"), _defineProperty(_ifcTypes, "IfcActor", "IFCACTOR"), _defineProperty(_ifcTypes, "IfcAirTerminalType", "IFCAIRTERMINALTYPE"), _defineProperty(_ifcTypes, "IfcBuildingElementProxyType", "IFCBUILDINGELEMENTPROXYTYPE"), _defineProperty(_ifcTypes, "IfcColumnType", "IFCCOLUMNTYPE"), _defineProperty(_ifcTypes, "IfcCoveringType", "IFCCOVERINGTYPE"), _defineProperty(_ifcTypes, "IfcCurtainWallType", "IFCCURTAINWALLTYPE"), _defineProperty(_ifcTypes, "IfcFurnitureType", "IFCFURNITURETYPE"), _defineProperty(_ifcTypes, "IfcDistributionElementType", "IFCDISTRIBUTIONELEMENTTYPE"), _defineProperty(_ifcTypes, "IfcDoorType", "IFCDOORTYPE"), _defineProperty(_ifcTypes, "IfcDoorLiningProperties", "IFCDOORLININGPROPERTIES"), _defineProperty(_ifcTypes, "IfcDoorPanelProperties", "IFCDOORPANELPROPERTIES"), _defineProperty(_ifcTypes, "IfcDoorStyle", "IFCDOORSTYLE"), _defineProperty(_ifcTypes, "IfcLightFixtureType", "IFCLIGHTFIXTURETYPE"), _defineProperty(_ifcTypes, "IfcMemberType", "IFCMEMBERTYPE"), _defineProperty(_ifcTypes, "IfcPlateType", "IFCPLATETYPE"), _defineProperty(_ifcTypes, "IfcPropertySet", "IFCPROPERTYSET"), _defineProperty(_ifcTypes, "IfcPropertySingleValue", "IFCPROPERTYSINGLEVALUE"), _defineProperty(_ifcTypes, "IfcSanitaryTerminalType", "IFCSANITARYTERMINALTYPE"), _defineProperty(_ifcTypes, "IfcSpaceType", "IFCSPACETYPE"), _defineProperty(_ifcTypes, "IfcStairFlightType", "IFCSTAIRFLIGHTTYPE"), _defineProperty(_ifcTypes, "IfcSystemFurnitureElementType", "IFCSYSTEMFURNITUREELEMENTTYPE"), _defineProperty(_ifcTypes, "IfcWallType", "IFCWALLTYPE"), _defineProperty(_ifcTypes, "IfcWindowStyle", "IFCWINDOWSTYLE"), _defineProperty(_ifcTypes, "IfcSlabType", "IFCSLABTYPE"), _defineProperty(_ifcTypes, "IfcWindowLiningProperties", "IFCWINDOWLININGPROPERTIES"), _defineProperty(_ifcTypes, "IfcElementQuantity", "IFCELEMENTQUANTITY"), _defineProperty(_ifcTypes, "IfcQuantityArea", "IFCQUANTITYAREA"), _defineProperty(_ifcTypes, "IfcQuantityLength", "IFCQUANTITYLENGTH"), _defineProperty(_ifcTypes, "IfcQuantityVolume", "IFCQUANTITYVOLUME"), _defineProperty(_ifcTypes, "IfcRelAggregates", "IFCRELAGGREGATES"), _defineProperty(_ifcTypes, "IfcRelAssignsToActor", "IFCRELASSIGNSTOACTOR"), _defineProperty(_ifcTypes, "IfcRelAssignsToGroup", "IFCRELASSIGNSTOGROUP"), _defineProperty(_ifcTypes, "IfcRelAssociatesClassification", "IFCRELASSOCIATESCLASSIFICATION"), _defineProperty(_ifcTypes, "IfcRelAssociatesMaterial", "IFCRELASSOCIATESMATERIAL"), _defineProperty(_ifcTypes, "IfcRelConnectsPathElements", "IFCRELCONNECTSPATHELEMENTS"), _defineProperty(_ifcTypes, "IfcRelConnectsPortToElement", "IFCRELCONNECTSPORTTOELEMENT"), _defineProperty(_ifcTypes, "IfcRelContainedInSpatialStructure", "IFCRELCONTAINEDINSPATIALSTRUCTURE"), _defineProperty(_ifcTypes, "IfcRelDefinesByProperties", "IFCRELDEFINESBYPROPERTIES"), _defineProperty(_ifcTypes, "IfcRelDefinesByType", "IFCRELDEFINESBYTYPE"), _defineProperty(_ifcTypes, "IfcRelFillsElement", "IFCRELFILLSELEMENT"), _defineProperty(_ifcTypes, "IfcGroup", "IFCGROUP"), _defineProperty(_ifcTypes, "IfcRelSpaceBoundary", "IFCRELSPACEBOUNDARY"), _defineProperty(_ifcTypes, "IfcRelServicesBuildings", "IFCRELSERVICESBUILDINGS"), _defineProperty(_ifcTypes, "IfcRelVoidsElement", "IFCRELVOIDSELEMENT"), _defineProperty(_ifcTypes, "IfcBuilding", "IFCBUILDING"), _defineProperty(_ifcTypes, "IfcBuildingStorey", "IFCBUILDINGSTOREY"), _defineProperty(_ifcTypes, "IfcProject", "IFCPROJECT"), _defineProperty(_ifcTypes, "IfcSite", "IFCSITE"), _defineProperty(_ifcTypes, "IfcSpace", "IFCSPACE"), _defineProperty(_ifcTypes, "IfcDistributionPort", "IFCDISTRIBUTIONPORT"), _defineProperty(_ifcTypes, "IfcSystem", "IFCSYSTEM"), _defineProperty(_ifcTypes, "IfcConversionBasedUnit", "IFCCONVERSIONBASEDUNIT"), _defineProperty(_ifcTypes, "IfcDerivedUnit", "IFCDERIVEDUNIT"), _defineProperty(_ifcTypes, "IfcDerivedUnitElement", "IFCDERIVEDUNITELEMENT"), _defineProperty(_ifcTypes, "IfcDimensionalExponents", "IFCDIMENSIONALEXPONENTS"), _defineProperty(_ifcTypes, "IfcMeasureWithUnit", "IFCMEASUREWITHUNIT"), _defineProperty(_ifcTypes, "IfcSIUnit", "IFCSIUNIT"), _defineProperty(_ifcTypes, "IfcUnitAssignment", "IFCUNITASSIGNMENT"), _ifcTypes);

function getName(ifcType) {
  return Object.keys(ifcTypes).find(function (key) {
    return ifcTypes[key] === ifcType;
  });
}

var _curve2DMap;

function mapCurve2D(shape) {
  return mapCurve(shape[namedProps.items][0]);
}

function mapCurve(shape) {
  var ifcClass = shape[namedProps.ifcClass].toUpperCase();
  return curve2DMap[ifcClass](shape);
}

var curve2DMap = (_curve2DMap = {}, _defineProperty(_curve2DMap, ifcTypes.IfcPolyline, mapPolyline), _defineProperty(_curve2DMap, ifcTypes.IfcTrimmedCurve, mapTrimmedCurve), _curve2DMap);

function mapPolyline(shape) {
  var points = [];
  shape[namedProps.points].forEach(function (point) {
    points.push(point[namedProps.coordinates]);
  });
  return createLine(points);
}

function mapTrimmedCurve(shape) {
  //TODO
  console.log("TODO:", shape);
  return new THREE.Object3D();
}

function createExtrusionsByPoints(points, depth) {
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0, 1];
  var holes = arguments.length > 3 ? arguments[3] : undefined;
  var shapePoints = [];
  points.forEach(function (e) {
    return shapePoints.push(new THREE.Vector3(e[1], -e[0]));
  });
  var shape = new THREE.Shape(shapePoints);
  if (holes) holes.forEach(function (hole) {
    return shape.holes.push(hole);
  });
  return createExtrusion(shape, depth, dir);
}

function createCircularExtrusion(radius, depth) {
  var thickness = arguments.length > 3 ? arguments[3] : undefined;
  var segments = 36;
  var outerShape = createCircularShape(radius, segments);

  if (thickness) {
    var innerShape = createCircularShape(radius - thickness, segments);
    outerShape.holes.push(innerShape);
  }

  return createExtrusion(outerShape, depth, [0, 0, 1]);
}

function createTubularExtrusion(radius, depth) {
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0, 1];
  var thickness = arguments.length > 3 ? arguments[3] : undefined;
  return createCircularExtrusion(radius, depth, dir, thickness);
}

function createCircularShape(radius, segments) {
  var coordinates = getCircleCoordinates(radius, segments);
  var shape = new THREE.Shape();
  shape.moveTo.apply(shape, _toConsumableArray(coordinates[0]));
  coordinates.forEach(function (point) {
    return shape.lineTo.apply(shape, _toConsumableArray(point));
  });
  return shape;
}

function getCircleCoordinates(radius, steps) {
  var coords = [];

  for (var i = 0; i < steps; i++) {
    coords.push([radius * Math.cos(2 * Math.PI * (i / steps)), radius * Math.sin(2 * Math.PI * (i / steps))]);
  }

  coords.push(_toConsumableArray(coords[0]));
  return coords;
}

function createExtrusion(shape, depth) {
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0, 1];
  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });
  var extrudeSettings = getExtrudeSettings(depth, dir);
  var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  applyExtrusionDirection(dir, geometry);
  var mesh = new THREE.Mesh(geometry, material);
  mesh.updateMatrix();
  return mesh;
}

function getExtrudeSettings(depth, dir) {
  var path = getVerticalDirection(depth, dir);
  return {
    bevelEnabled: false,
    steps: 1,
    extrudePath: path
  };
} //To define the direction of the extrusion:
// x and y are applied as a skew operation (transform matrix)
// z is applied in the vertical direction


function applyExtrusionDirection(dir, geometry) {
  var matrix = getTransformMatrix(dir);
  geometry.applyMatrix4(matrix);
}

function getTransformMatrix(dir) {
  var matrix = new THREE.Matrix4();
  var direction = new THREE.Vector3(dir[0], dir[1], dir[2]);
  var Syx = 0,
      Sxy = 0,
      Sxz = 0,
      Syz = 0;
  var Szx = direction.y,
      Szy = direction.x;
  return matrix.set(1, Syx, Szx, 0, Sxy, 1, Szy, 0, Sxz, Syz, 1, 0, 0, 0, 0, 1);
}

function getVerticalDirection(depth, dir) {
  var v1 = new THREE.Vector3(0, 0, 0);
  var v2 = new THREE.Vector3(0, 0, depth * dir[2]);
  return new THREE.LineCurve3(v1, v2);
}

function mapRectangleProfileExtrusion(extruded, product) {
  getRectProfileDimensions(extruded);
  var position = extruded.profile[namedProps.position];
  var points = getRectProfilePoints(extruded);
  var geometry = createExtrusionsByPoints(points, extruded.depth, extruded.direction);
  applyTransformsToGeometry(geometry, position);
  return geometry;
}

function getRectProfilePoints(extruded) {
  var halfWidth = extruded[namedProps.xDim] / 2;
  var halfHeight = extruded[namedProps.yDim] / 2;
  return [[-halfWidth, halfHeight], [halfWidth, halfHeight], [halfWidth, -halfHeight], [-halfWidth, -halfHeight]];
}

function getRectProfileDimensions(extruded) {
  extruded[namedProps.xDim] = extruded.profile[namedProps.xDim];
  extruded[namedProps.yDim] = extruded.profile[namedProps.yDim];
}

var _extrusionCurvesMap, _compositeCurvesMap;

function mapArbitraryProfileExtrusion(props) {
  return mapExtrusionByTypeOfProfile(props);
}

function mapArbitraryProfileWithVoidsExtrusion(props) {
  props.holes = getInnerVoids(props);
  return mapExtrusionByTypeOfProfile(props);
}

function getInnerVoids(props) {
  var shapes = [];
  var innerCurvesRep = props.profile[namedProps.innerCurves];
  innerCurvesRep.forEach(function (curveRep) {
    var typeOfProfile = curveRep[namedProps.ifcClass].toUpperCase();
    shapes.push(extrusionCurvesMap[typeOfProfile].shape(curveRep));
  });
  return shapes;
}

function mapExtrusionByTypeOfProfile(props) {
  var typeOfProfile = props.profile[namedProps.outerCurve][namedProps.ifcClass].toUpperCase();
  return extrusionCurvesMap[typeOfProfile].extrusion(props);
}

var extrusionCurvesMap = (_extrusionCurvesMap = {}, _defineProperty(_extrusionCurvesMap, ifcTypes.IfcPolyline, {
  extrusion: mapPolylineExtrusion,
  shape: mapPolylineShape
}), _defineProperty(_extrusionCurvesMap, ifcTypes.IfcCompositeCurve, {
  extrusion: mapCompositeCurveExtrusion,
  shape: mapCompositeCurveShape
}), _extrusionCurvesMap);

function mapPolylineShape(shapeRepresentation) {
  var points = getShapePoints(shapeRepresentation[namedProps.points]);
  var shape = new THREE.Shape();
  shape.moveTo.apply(shape, _toConsumableArray(points[0]));
  points.shift();
  points.forEach(function (point) {
    return shape.lineTo.apply(shape, _toConsumableArray(point));
  });
  return shape;
}

function getShapePoints(pointsRepresentation) {
  return pointsRepresentation.map(function (point) {
    var coords = point[namedProps.coordinates];
    return [-coords[1], coords[0]];
  });
}

function mapPolylineExtrusion(props) {
  var profileRepresentation = props.profile;
  var pointsRepresentation = profileRepresentation[namedProps.outerCurve][namedProps.points];
  var points = getExtrusionPoints(pointsRepresentation);
  return createExtrusionsByPoints(points, props.depth, props.direction, props.holes);
}

function mapCompositeCurveShape(shapeRepresentation) {
  var shape = new THREE.Shape();
  var segmentsRepresentation = shapeRepresentation[namedProps.segments];
  segmentsRepresentation.forEach(function (curve) {
    return mapCompositeCurveSegment(shape, curve);
  });
  resetFirstCompositeCurve();
  return shape;
}

function mapCompositeCurveExtrusion(props) {
  var shape = new THREE.Shape();
  var segmentsRepresentation = props.profile[namedProps.outerCurve][namedProps.segments];
  segmentsRepresentation.forEach(function (curve) {
    return mapCompositeCurveSegment(shape, curve);
  });
  resetFirstCompositeCurve();
  if (props.holes) props.holes.forEach(function (hole) {
    return shape.holes.push(hole);
  });
  var extrusion = createExtrusion(shape, props.depth, props.direction);
  extrusion.rotation.z += Math.PI / 2;
  extrusion.updateMatrix();
  return extrusion;
}

function mapCompositeCurveSegment(shape, segmentRepresentation) {
  var curve = segmentRepresentation[namedProps.parentCurve];
  var typeOfCurve = curve[namedProps.ifcClass].toUpperCase();
  compositeCurvesMap[typeOfCurve](shape, curve);
}

var compositeCurvesMap = (_compositeCurvesMap = {}, _defineProperty(_compositeCurvesMap, ifcTypes.IfcPolyline, mapPolylineSegment), _defineProperty(_compositeCurvesMap, ifcTypes.IfcTrimmedCurve, mapTrimmedCurveSegment), _compositeCurvesMap);

function mapPolylineSegment(shape, curve) {
  var points = curve[namedProps.points];

  if (isFirstSegmentOfCompositeCurve) {
    shape.moveTo.apply(shape, _toConsumableArray(points[0][namedProps.coordinates]));
    points.shift();
    isFirstSegmentOfCompositeCurve = false;
  }

  points.forEach(function (point) {
    return shape.lineTo.apply(shape, _toConsumableArray(point[namedProps.coordinates]));
  });
}

function mapTrimmedCurveSegment(shape, curve) {
  var typeOfTrimmedCurve = curve[namedProps.basisCurve][namedProps.ifcClass].toUpperCase();
  trimmedCurvesMap[typeOfTrimmedCurve](shape, curve);
}

var trimmedCurvesMap = _defineProperty({}, ifcTypes.IfcCircle, mapTrimmedCircleCurve); //Three.js draw shapes continuously
//(the last point of the current curve is the closest to the first point of the next curve)
//But circles in IFC doesn't follow this pattern necessarily
//This function computes the closest point of the next arc
//To determine wether to draw the circle clockwise or counter-clockwise


function mapTrimmedCircleCurve(shape, curve) {
  var _getCircleInfo = getCircleInfo(curve),
      x = _getCircleInfo.x,
      y = _getCircleInfo.y,
      radius = _getCircleInfo.radius,
      trims = _getCircleInfo.trims,
      ends = _getCircleInfo.ends;

  var currentPoint = [shape.currentPoint.x, shape.currentPoint.y];
  var distancesToNextPoints = getDistancesToNextPoints(currentPoint, ends);
  distancesToNextPoints[0] < distancesToNextPoints[1] ? shape.absarc(x, y, radius, trims[0], trims[1], false) : shape.absarc(x, y, radius, trims[1], trims[0], true);
}

function getDistancesToNextPoints(currentPoint, ends) {
  return [getDistanceBetweenPoints(currentPoint, ends[0]), getDistanceBetweenPoints(currentPoint, ends[1])];
}

function getCircleInfo(curve) {
  var location = curve[namedProps.basisCurve][namedProps.position][namedProps.location][namedProps.coordinates];
  var radius = curve[namedProps.basisCurve][namedProps.radius];
  var x = location[0];
  var y = location[1];
  var trims = getTrimmedCircleTrims(curve);
  var ends = getTrimmedCircleEnds(x, y, radius, trims);
  return {
    x: x,
    y: y,
    radius: radius,
    trims: trims,
    ends: ends
  };
}

function getTrimmedCircleTrims(curve) {
  return [getTrimmedCircleTrim(curve, [namedProps.trim1]), getTrimmedCircleTrim(curve, [namedProps.trim2])];
}

function getTrimmedCircleTrim(curve, trim) {
  var rotation = curve[namedProps.basisCurve][namedProps.position][namedProps.refDirection][namedProps.dirRatios];
  var offsetAngle = Math.acos(rotation[0]);
  return curve[trim][0][ifcUnitsValue.value] * Math.PI / 180 + offsetAngle;
}

function getTrimmedCircleEnds(x, y, radius, trims) {
  return [getCirclePoint(x, y, radius, trims[0]), getCirclePoint(x, y, radius, trims[1])];
}

function getCirclePoint(x, y, radius, angle) {
  return [Math.cos(angle) * radius + x, Math.sin(angle) * radius + y];
}

function getDistanceBetweenPoints(point1, point2) {
  var a = point1[0] - point2[0];
  var b = point1[1] - point2[1];
  return Math.sqrt(a * a + b * b);
}

function getExtrusionPoints(pointsRepresentation) {
  return pointsRepresentation.map(function (point) {
    var coords = point[namedProps.coordinates];
    return [-coords[0], -coords[1]];
  });
} //Three.js needs to know the first point of the first curve to create a shape


var isFirstSegmentOfCompositeCurve = true;

function resetFirstCompositeCurve() {
  isFirstSegmentOfCompositeCurve = true;
}

function mapCircleProfileExtrusion(extruded) {
  var _getProperties = getProperties(extruded),
      position = _getProperties.position,
      radius = _getProperties.radius;

  var cylinder = createCircularExtrusion(radius, extruded.depth);
  applyTransformsToGeometry(cylinder, position);
  return cylinder;
}

function mapCircleHollowProfileExtrusion(extruded) {
  var _getProperties2 = getProperties(extruded),
      position = _getProperties2.position,
      radius = _getProperties2.radius,
      thickness = _getProperties2.thickness;

  var tube = createTubularExtrusion(radius, extruded.depth, extruded.direction, thickness);
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

var _extrusionTypes;

function mapSweptSolid(shape, product) {
  var items = [];
  shape[namedProps.items].forEach(function (extruded) {
    return items.push(mapExtrudedAreaSolid(extruded, product));
  });
  return joinAllExtrusions(items);
}

function joinAllExtrusions(items) {
  var singleGeometry = new THREE.Geometry();
  items.forEach(function (item) {
    item.updateMatrix();
    singleGeometry.merge(item.geometry, item.matrix);
    mainObject.remove(item);
  });
  var result = new THREE.Mesh(singleGeometry);
  mainObject.add(result);
  return result;
}

function mapExtrudedAreaSolid(extruded, product) {
  var extrudedProps = getExtrusionProps(extruded);
  var solid = getExtrusionByType(extrudedProps, product);
  var position = extruded[namedProps.position];
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

var extrusionTypes = (_extrusionTypes = {}, _defineProperty(_extrusionTypes, ifcTypes.IfcRectangleProfileDef, mapRectangleProfileExtrusion), _defineProperty(_extrusionTypes, ifcTypes.IfcCircleProfileDef, mapCircleProfileExtrusion), _defineProperty(_extrusionTypes, ifcTypes.IfcCircleHollowProfileDef, mapCircleHollowProfileExtrusion), _defineProperty(_extrusionTypes, ifcTypes.IfcArbitraryClosedProfileDef, mapArbitraryProfileExtrusion), _defineProperty(_extrusionTypes, ifcTypes.IfcArbitraryProfileDefWithVoids, mapArbitraryProfileWithVoidsExtrusion), _extrusionTypes);

function getExtrusionByType(extruded, product) {
  return extrusionTypes[extruded.ifcClass.toUpperCase()](extruded, product);
}

function mapMappedRepresentation(shape, product) {
  var representation = shape[namedProps.items][0];
  var target = getMappingTarget(representation);
  var mapped = getMappingSource(product, representation);
  applyTransformsToGeometry(mapped, target);
  return mapped;
} //The concept of mapped representation is that there are several instances
//of the same geometry. Storing the geometries allows to generate them
//only once and them simply create each instance copying the source geometry.


var mappingSources = {};

function getMappingSource(product, representation) {
  var source = representation[namedProps.mappingSource];
  var origin = source[namedProps.mappingOrigin];
  var geometry = isGeometryGenerated(source) ? getGeneratedGeometry(source) : generateGeometry(source, product);
  applyTransformsToGeometry(geometry, origin);
  return geometry;
}

function generateGeometry(source, product) {
  var mappedGeometry = source[namedProps.mappedRepresentation];
  var geometry = getMappedGeometry(mappedGeometry, product);
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
  var _ref;

  var target = representation[namedProps.mappingTarget];
  return _ref = {}, _defineProperty(_ref, namedProps.location, _defineProperty({}, namedProps.coordinates, getTargetOrigin(target))), _defineProperty(_ref, namedProps.refDirection, _defineProperty({}, namedProps.dirRatios, getAxis(target, namedProps.axis1, [1, 0, 0]))), _defineProperty(_ref, namedProps.axis, _defineProperty({}, namedProps.dirRatios, getAxis(target, namedProps.axis3, [0, 0, 1]))), _defineProperty(_ref, namedProps.scale, target[namedProps.scale]), _ref;
}

function getTargetOrigin(target) {
  return target[namedProps.localOrigin][namedProps.coordinates];
}

function getAxis(target, axis, def) {
  var value = target[axis];
  return value === defaultValue ? def : value;
}

//Credit to the following algorithm:
//https://stackoverflow.com/questions/50272399/three-js-2d-object-in-3d-space-by-vertices/50274103#50274103
function createFace(faceDefinition) {
  var coordinates = faceDefinition.outerBounds.bounds[0];
  var outerPoints = getPoints(coordinates);

  var _getProjectedPointsAn = getProjectedPointsAndQuaternion(outerPoints),
      tempOuterPoints = _getProjectedPointsAn.tempOuterPoints,
      quaternion = _getProjectedPointsAn.quaternion;

  var outerShape = new THREE.Shape(tempOuterPoints);

  var allPoints = _toConsumableArray(outerPoints);

  if (hasHoles(faceDefinition)) punchHoles(faceDefinition, quaternion, allPoints, outerShape);
  return createGeometry(outerShape, allPoints);
}

function createGeometry(outerShape, allPoints) {
  var shapeGeom = new THREE.ShapeGeometry(outerShape, 24);
  var mesh = new THREE.Mesh(shapeGeom);
  mesh.geometry.vertices = allPoints;
  mesh.geometry.computeVertexNormals();
  mesh.geometry.computeFaceNormals();
  return mesh;
}

function getPoints(coordinates) {
  return coordinates.map(function (p) {
    return new THREE.Vector3(p[0], p[1], p[2]);
  });
}

function getTempPoints(points, quaternion) {
  return points.map(function (p) {
    return p.clone().applyQuaternion(quaternion);
  });
}

function hasHoles(faceDefinition) {
  return faceDefinition.innerBounds.bounds.length > 0;
}

function punchHoles(faceDefinition, quaternion, allPoints, outerShape) {
  faceDefinition.innerBounds.bounds.forEach(function (bound) {
    var innerPoints = getPoints(bound);
    var tempInnerPoints = getTempPoints(innerPoints, quaternion);
    var innerShape = new THREE.Path(tempInnerPoints);
    outerShape.holes.push(innerShape);
    allPoints.push.apply(allPoints, _toConsumableArray(innerPoints));
  });
} //To implement this algorithm successfully (see link above)
// the selected triangle of vertices needs to fulfill the following points to work:
// 1. It must be a valid triangle (its vertices are not aligned)
// 2. Its area should be as big as possible to increment the precission of its normal vector
// 3. The generated 2d surface has its points defined clockwise


function getProjectedPointsAndQuaternion(points) {
  var triangles = getAllTriangles(points); //1

  sortTrianglesByArea(triangles); //2

  return getQuatAndPoints(triangles, points); //3
}

function getAllTriangles(points) {
  var triangles = [];
  var i = 1;

  while (i + 1 < points.length) {
    var _getTriangleVector = getTriangleVector(points, i),
        vector = _getTriangleVector.vector,
        triangle = _getTriangleVector.triangle;

    if (isVectorValid(vector)) triangles.push({
      area: triangle.getArea(),
      triangle: triangle
    });
    i++;
  }

  return triangles;
}

function getTriangleVector(points, i) {
  var triangle = new THREE.Triangle(points[i + 1], points[i], points[0]);
  var vector = new THREE.Vector3();
  triangle.getNormal(vector);
  return {
    vector: vector,
    triangle: triangle
  };
}

function sortTrianglesByArea(triangles) {
  triangles.sort(function (a, b) {
    return a.area > b.area ? 1 : b.area > a.area ? -1 : 0;
  }).reverse();
}

function isVectorValid(vector) {
  return vector.x != 0 || vector.y != 0 || vector.z != 0;
}

function getQuatAndPoints(triangles, points) {
  var props = initializeProperties();

  while (props.isClockWise === false) {
    selectAnotherTriangle(props, points, triangles);
  }

  return {
    tempOuterPoints: props.tempOuterPoints,
    quaternion: props.quaternion
  };
}

function selectAnotherTriangle(props, points, triangles) {
  var tri = triangles[props.selectedTriangle];
  tri.triangle.getNormal(props.normal);
  props.quaternion = new THREE.Quaternion().setFromUnitVectors(props.normal, props.baseNormal);
  props.tempOuterPoints = getTempPoints(points, props.quaternion);
  var projected = props.tempOuterPoints.map(function (point) {
    return new THREE.Vector2(point.x, point.y);
  });
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
  var representations = shape[namedProps.items];
  var definitions = [];
  representations.forEach(function (r) {
    return definitions.push.apply(definitions, _toConsumableArray(getGeometry(r[namedProps.outer][namedProps.cfsFaces])));
  });
  return createAndJoinFaces(definitions);
}

function mapSurfaceModel(shape) {
  var faceSets = shape[namedProps.items][0][namedProps.fbsmFaces];
  var definitions = [];
  faceSets.forEach(function (faceSet) {
    return definitions.push.apply(definitions, _toConsumableArray(getGeometry(faceSet[namedProps.cfsFaces])));
  });
  return createAndJoinFaces(definitions);
}

function createAndJoinFaces(definitions) {
  var faces = [];
  definitions.forEach(function (definition) {
    return faces.push(createFace(definition));
  });
  return joinAllFaces(faces);
}

function joinAllFaces(faces) {
  var joined = new THREE.Geometry();
  faces.forEach(function (face) {
    return joined.merge(face.geometry, face.matrix);
  });
  var material = new THREE.MeshPhongMaterial({
    side: 2
  });
  var mesh = new THREE.Mesh(joined, material);
  mesh.geometry.computeVertexNormals();
  mesh.geometry.computeFaceNormals();
  mesh[namedProps.isBrep] = true;
  return mesh;
}

function getGeometry(faceSet) {
  var faces = [];
  faceSet.forEach(function (face) {
    return faces.push(getAllBounds(face));
  });
  return faces;
}

function getAllBounds(face) {
  var outerBoundsInfo = filterBounds(face, ifcTypes.IfcFaceOuterBound);
  var innerBoundsInfo = filterBounds(face, ifcTypes.IfcFaceBound);
  var outerBounds = getBounds(outerBoundsInfo);
  var innerBounds = innerBoundsInfo ? getBounds(innerBoundsInfo) : {};
  return {
    outerBounds: outerBounds,
    innerBounds: innerBounds
  };
}

function getBounds(ifcBounds) {
  var bounds = [];
  var orientation = [];
  ifcBounds.forEach(function (bound) {
    bounds.push(getPoints$1(bound));
    orientation.push(bound[namedProps.orientation]);
  });
  return {
    orientation: orientation,
    bounds: bounds
  };
}

function getPoints$1(bound) {
  var points = bound[namedProps.bound][namedProps.polygon];
  var coordinates = [];
  points.forEach(function (point) {
    var coord = point[namedProps.coordinates];
    if (coord) coordinates.push(coord);
  });
  return coordinates;
}

function filterBounds(face, type) {
  return face[namedProps.bounds].filter(function (e) {
    return e[namedProps.ifcClass] === getName(type);
  });
}

function mapGeometricSet(shape) {
  var curves = shape[namedProps.items][0][namedProps.elements];
  var result = new THREE.Object3D();
  result.children = _toConsumableArray(curves.map(function (e) {
    return mapCurve(e);
  }));
  return result;
}

function createClippingBox(orientation) {
  var geometry = new THREE.BoxBufferGeometry(100000, 100000, 100000);
  var mesh = new THREE.Mesh(geometry);
  var direction = orientation ? -1 : 1;
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

// import { scene } from '../../../examples/00/three-scene.js';

function applyBoolDifferences(baseMesh, clipMeshes) {
  preventCoplanarSurfaces(baseMesh);
  var operand1 = CSG.fromMesh(baseMesh);

  for (var i = 0; i < clipMeshes.length; i++) {
    var clipMesh = clipMeshes[i];
    clipMesh.updateMatrix();
    var operand2 = CSG.fromMesh(clipMesh);
    operand1 = subtractVolume(operand1, operand2, baseMesh, clipMesh);
  }

  return operand1;
} //Ugly, but avoids crashes of CSG operations due to face superpositions


function preventCoplanarSurfaces(baseMesh) {
  var factor = 0.99999;
  baseMesh.scale.x *= factor;
  baseMesh.scale.y *= factor;
  baseMesh.scale.z *= factor;
  baseMesh.updateMatrix();
} //Sometimes (uncommon) the CSG library fails and swaps the functionality of subtract and intersects
//This rectifies the result if it is an intersection instead of a subtraction


function subtractVolume(operand1, operand2, baseMesh, clippingMesh) {
  var result = operand1.subtract(operand2);
  var resultMesh = CSG.toMesh(result, baseMesh.matrix);
  var boundingBox1 = new THREE.Box3().setFromObject(resultMesh);
  var boundingBox2 = new THREE.Box3().setFromObject(clippingMesh);
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
  var _getClippingRepresent = getClippingRepresentations(shape),
      clippingReps = _getClippingRepresent.clippingReps,
      bodyRep = _getClippingRepresent.bodyRep;

  var mainGeometry = getMappedGeometry(bodyRep, product);
  var clippingGeometries = createClippingVolumes(clippingReps);
  var booleanResult = applyBoolDifferences(mainGeometry, clippingGeometries);
  return generateResultMesh(booleanResult, mainGeometry, clippingGeometries);
}

function generateResultMesh(booleanResult, mainGeometry, clippingGeometries) {
  var result = CSG.toMesh(booleanResult, mainGeometry.matrix);
  result.geometry = new THREE.BufferGeometry().fromGeometry(result.geometry);
  result.material = new THREE.MeshPhongMaterial();
  mainObject.remove(mainGeometry);
  clippingGeometries.forEach(function (clippingGeo) {
    return mainObject.remove(clippingGeo);
  });
  return result;
}

function getClippingRepresentations(shape) {
  var clippingReps = [];
  var bodyRep = shape[namedProps.items][0];

  while (bodyRep[namedProps.ifcClass] == 'IfcBooleanClippingResult') {
    clippingReps.push(bodyRep[namedProps.secondOperand]);
    bodyRep = bodyRep[namedProps.firstOperand];
  }

  return {
    clippingReps: clippingReps,
    bodyRep: bodyRep
  };
}

function createClippingVolumes(clippingRepresentations) {
  var clippingGeometries = [];
  clippingRepresentations.forEach(function (clippingRep) {
    return clippingGeometries.push(createClippingVolume(clippingRep));
  });
  return clippingGeometries;
}

function createClippingVolume(clippingRep) {
  if (clippingRep[namedProps.ifcClass].toUpperCase() === ifcTypes.IfcHalfSpaceSolid) return mapIfcHalfSpaceSolid(clippingRep);
  return mapIfcPolygonalBoundedHalfSpace(clippingRep);
}

function mapIfcHalfSpaceSolid(clippingRep) {
  var orientation = clippingRep[namedProps.agreementFlag];
  if (typeof orientation != 'boolean') orientation = orientation.value;
  var clippingGeom = createClippingBox(orientation);
  var position = clippingRep[namedProps.baseSurface][namedProps.position];
  applyTransformsToGeometry(clippingGeom, position);
  return clippingGeom;
}

function mapIfcPolygonalBoundedHalfSpace(clippingRep) {
  var clippingGeom = mapIfcHalfSpaceSolid(clippingRep);
  var boundingGeom = getBoundingGeometry(clippingRep);
  var result = applyBoundingToGeometry(clippingGeom, boundingGeom);
  result.geometry = new THREE.BufferGeometry().fromGeometry(result.geometry);
  result.material = new THREE.MeshPhongMaterial();
  mainObject.remove(clippingGeom);
  mainObject.remove(boundingGeom);
  result.add(clippingGeom);
  return result;
}

function applyBoundingToGeometry(clippingGeom, boundingGeom) {
  var bspA = CSG.fromMesh(clippingGeom);
  var bspB = CSG.fromMesh(boundingGeom);
  var geomResult = bspA.intersect(bspB);
  return CSG.toMesh(geomResult, clippingGeom.matrix);
}

function getBoundingGeometry(clippingRep) {
  var points = getBoundingPoints(clippingRep);
  var boundingGeom = createExtrusionsByPoints(points, 1000000);
  var boundPosition = clippingRep[namedProps.position];
  applyTransformsToGeometry(boundingGeom, boundPosition);
  boundingGeom.position.z -= 500000;
  boundingGeom.updateMatrix();
  return boundingGeom;
}

function getBoundingPoints(clippingRep) {
  return clippingRep[namedProps.polygonalBoundary][namedProps.points].map(function (point) {
    var coords = point[namedProps.coordinates];
    return [-coords[0], -coords[1]];
  });
}

function mapBoundingBox(shape) {
  var representation = shape[namedProps.items][0];
  var dims = getBoundingBoxDimensions(representation);
  var boundingBox = new THREE.BoxGeometry(dims.x, dims.y, dims.z);
  var mesh = new THREE.Mesh(boundingBox);
  setBoundingBoxPosition(mesh, representation, dims);
  return new THREE.Object3D();
}

function setBoundingBoxPosition(mesh, representation, dims) {
  var bottomLeftCorner = representation[namedProps.corner][namedProps.coordinates];
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
  console.log("TODO:", shape);
  return new THREE.Object3D();
}

var _geometryMap;
var geometryMap = (_geometryMap = {}, _defineProperty(_geometryMap, geometryTypes.curve2D, mapCurve2D), _defineProperty(_geometryMap, geometryTypes.sweptSolid, mapSweptSolid), _defineProperty(_geometryMap, geometryTypes.mappedRepresentation, mapMappedRepresentation), _defineProperty(_geometryMap, geometryTypes.brep, mapBrep), _defineProperty(_geometryMap, geometryTypes.geometricSet, mapGeometricSet), _defineProperty(_geometryMap, geometryTypes.clipping, mapClipping), _defineProperty(_geometryMap, geometryTypes.extrudedAreaSolid, mapExtrudedAreaSolid), _defineProperty(_geometryMap, geometryTypes.surfaceModel, mapSurfaceModel), _defineProperty(_geometryMap, geometryTypes.boundingBox, mapBoundingBox), _defineProperty(_geometryMap, geometryTypes.annotation2D, mapAnnotation), _geometryMap);

function getMappedGeometry(representation, product) {
  var type = getType(representation);

  try {
    return geometryMap[type](representation, product);
  } catch (e) {
    console.warn("Error with item ".concat(product[namedProps.ifcClass], " of type ").concat(type, ": ").concat(e));
  }
}

function getType(representation) {
  var type = representation[namedProps.representationType];
  return type ? type : representation[namedProps.ifcClass];
}

function constructGeometries(structured) {
  structured[structuredData.products].forEach(function (product) {
    return constructGeometry(product);
  });
  structured[structuredData.spaces].forEach(function (space) {
    return constructGeometry(space);
  });
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
  if (items) items.forEach(function (item) {
    return getRepresentationValue(item);
  });
}

function getRepresentationValue(product) {
  try {
    var representations = product[namedProps.representation][namedProps.representations];
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
  if (items) items.forEach(function (item) {
    return mapProductRepresentations(item);
  });
}

function mapProductRepresentations(product) {
  product[namedProps.geometry] = [];
  product[namedProps.geomRepresentations].forEach(function (representation) {
    var generatedGeometry = getMappedGeometry(representation, product);
    generatedGeometry._Data = product;
    product[namedProps.geometry].push(generatedGeometry);
  });
}

function subtractOpenings(structured) {
  structured[structuredData.products].forEach(function (product) {
    try {
      if (product[namedProps.hasOpenings]) applyBooleanOperation(product);
    } catch (e) {
      console.warn('Error with CSG operations with: ', product, e);
    }
  });
}

function applyBooleanOperation(product) {
  for (var i = 0; i < product[namedProps.geometry].length; i++) {
    var geometryItem = product[namedProps.geometry][i];
    if (geometryItem.type === 'Mesh' && !geometryItem[namedProps.isBrep]) product[namedProps.geometry][i] = applyBooleanOperationOnMesh(product, geometryItem);
  }
}

function applyBooleanOperationOnMesh(product, geometry) {
  var openings = getOpenings(product);
  var resultGeom = applyBoolDifferences(geometry, openings);
  var result = CSG.toMesh(resultGeom, geometry.matrix);
  result.geometry = new THREE.BufferGeometry().fromGeometry(result.geometry);
  result.material = new THREE.MeshPhongMaterial();
  addResultToScene(geometry, openings, result);
  return result;
}

function addResultToScene(geometryItem, openings, result) {
  result._Data = geometryItem._Data; //Reference to parsed IFC information

  result.attach.apply(result, _toConsumableArray(openings));
  result.attach.apply(result, _toConsumableArray(geometryItem.children));
  mainObject.add(result);
  mainObject.remove(geometryItem);
}

function getOpenings(product) {
  var openingsReps = product[namedProps.hasOpenings];
  var openings = [];

  for (var i = 0; i < openingsReps.length; i++) {
    openings.push(openingsReps[i][namedProps.geometry][0]);
  }

  return openings;
}

var _materialsMap;

function getMaterial(ifcType) {
  try {
    return materialsMap[ifcTypes[ifcType]].material;
  } catch (e) {
    console.warn("The type ".concat(ifcType, " doesn't have a material implemented."));
  }
}

function getLineColor(ifcType) {
  try {
    return materialsMap[ifcTypes[ifcType]].lineColor;
  } catch (_unused) {
    return materialsMap[ifcTypes.IfcWall];
  }
}

function getDiffuseMat(color) {
  return new THREE.MeshLambertMaterial(_objectSpread2({}, getBaseSettings(color)));
}

function getTransparentMat(color) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
  return new THREE.MeshBasicMaterial(_objectSpread2(_objectSpread2({}, getBaseSettings(color)), {}, {
    opacity: opacity,
    transparent: true,
    depthWrite: false
  }));
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

var colors = {
  black: 0x000000,
  brown: 0xc2893a,
  red: 0xff0000,
  grey: 0x606060,
  darkBrown: 0x5c3d1e,
  darkBlue: 0x23395d,
  lightBlue: 0xadd8e6,
  white: 0xffffff
};
var materialsMap = (_materialsMap = {}, _defineProperty(_materialsMap, ifcTypes.IfcWall, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcWallStandardCase, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcSite, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcSlab, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcCovering, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcRoof, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcEquipmentElement, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcFurnishingElement, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcDoor, {
  material: getDiffuseMat(colors.brown),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcRailing, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcColumn, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcStair, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcStairFlight, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcPlate, {
  material: getTransparentMat(colors.lightBlue, 0.2),
  lineColor: colors.darkBlue
}), _defineProperty(_materialsMap, ifcTypes.IfcMember, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcFlowTerminal, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcWindow, {
  material: getTransparentMat(colors.lightBlue, 0.2),
  lineColor: colors.darkBlue
}), _defineProperty(_materialsMap, ifcTypes.IfcSpace, {
  material: getTransparentMat(colors.lightBlue, 0),
  lineColor: colors.black
}), _defineProperty(_materialsMap, ifcTypes.IfcOpeningElement, {
  material: getTransparentMat(colors.lightBlue, 0),
  lineColor: colors.black
}), _defineProperty(_materialsMap, ifcTypes.IfcBuildingElementProxy, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _materialsMap);

function applyMaterials(structured) {
  applyMaterialOnSpaces(structured);
  structured[structuredData.products].forEach(function (product) {
    applyMaterialOnMesh(product);
    applyMaterialOnOpenings(product);
    applyMaterialOnSubElements(product);
  });
}

function applyMaterialOnSpaces(structured) {
  structured[structuredData.spaces].forEach(function (space) {
    return space[namedProps.geometry].forEach(function (item) {
      return getMeshMaterial(item, space[namedProps.ifcClass]);
    });
  });
}

function applyMaterialOnMesh(product) {
  product[namedProps.geometry].forEach(function (item) {
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
  if (items) items.forEach(function (prop) {
    var mesh = prop[namedProps.geometry][0];
    mesh.material = getMaterial(prop[namedProps.ifcClass]);
  });
}

function drawEdges(structured) {
  structured[structuredData.products].forEach(function (product) {
    generateEdgesOnProduct(product);
    generateEdgesOnItems(product[namedProps.hasSpatial]);
    generateEdgesOnItems(product[namedProps.hasOpenings]);
  });
}

function generateEdgesOnProduct(product) {
  product[namedProps.geometry].forEach(function (item) {
    var ifcClass = product[namedProps.ifcClass];
    if (item.type === 'Mesh' && ifcClass) createEdgesOfItem(ifcClass, item);
  });
}

function generateEdgesOnItems(items) {
  if (items) items.forEach(function (item) {
    return item[namedProps.geometry].forEach(function (geometry) {
      return createEdgesOfItem(item[namedProps.ifcClass], geometry);
    });
  });
}

function createEdgesOfItem(ifcClass, item) {
  var lineColor = getLineColor(ifcClass);
  var geometry = new THREE.EdgesGeometry(item.geometry);
  var material = new THREE.LineBasicMaterial({
    color: lineColor
  });
  var wireframe = new THREE.LineSegments(geometry, material);
  item.add(wireframe);
}

function applyScale(structured) {
  var units = structured[structuredData.units][namedProps.units];
  var scale = getUnitScale(units);
  if (scale === 1) return;
  applyScaleOnItems(scale, structured);
}

function applyScaleOnItems(scale, structured) {
  var axis = new THREE.Object3D();
  mainObject.add(axis);
  var geometries = getALlGeometries(structured);
  geometries.forEach(function (geometry) {
    axis.attach(geometry);
    axis.scale.set(scale, scale, scale);
    mainObject.attach(geometry);
    axis.scale.set(1, 1, 1);
  });
}

function getALlGeometries(structured) {
  var allGeometry = [];
  structured[structuredData.products].forEach(function (product) {
    return getGeometry$1(product, allGeometry);
  });
  return allGeometry;
}

function getGeometry$1(product, allGeometry) {
  allGeometry.push.apply(allGeometry, _toConsumableArray(product[namedProps.geometry]));
  if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(function (spatial) {
    return getGeometry$1(spatial, allGeometry);
  });
}

function getUnitScale(units) {
  var lengthUnit = units.filter(function (unitType) {
    return unitType[namedProps.unitType] === 'LENGTHUNIT';
  })[0];
  var prefix = lengthUnit[namedProps.prefix];
  return unitMap[prefix];
}

var unitMap = {
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
  console.log(structured);
  constructGeometries(structured);
  applyTransformations(structured);
  drawEdges(structured);
  subtractOpenings(structured);
  applyMaterials(structured);
  applyScale(structured);
  return structured;
}

export { buildGeometry, mainObject };
