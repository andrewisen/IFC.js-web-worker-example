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
const typeValue = {
  type: "type",
  value: "value"
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

function referenceEntities(items) {
  let key;

  for (key in items) {
    const ifcLine = items[key];

    for (key in ifcLine) {
      const ifcProperty = ifcLine[key];
      referenceSingleItem(ifcProperty, items);
      referenceMultipleItems(ifcProperty, items);
      trimExplicitTypes(ifcLine, key);
    }
  }
}

function referenceSingleItem(ifcProperty, items) {
  if (isSingleItemValid(ifcProperty, items)) ifcProperty[typeValue.value] = items[ifcProperty[typeValue.value]];
}

function isSingleItemValid(ifcProperty, items) {
  return isItemWithReference(ifcProperty) && items.hasOwnProperty(ifcProperty[typeValue.value]);
}

function referenceMultipleItems(ifcProperty, items) {
  if (ifcProperty[typeValue.type] === ifcDataTypes.idSet) {
    const property = ifcProperty;
    const values = [...property[typeValue.value]];
    property[typeValue.value] = values.map(e => {
      return items.hasOwnProperty(e) ? items[e] : e;
    });
  }
}

function isItemWithReference(item) {
  if (item[typeValue.value] === ifcDataTypes[typeValue.value] && !isNaN(item[typeValue.value])) return true;
  if (item[typeValue.type] === ifcDataTypes.id) return true;
  return false;
}

function trimExplicitTypes(ifcLine, key) {
  const value = ifcLine[key][typeValue.value];
  if (value) ifcLine[key] = value;
}

const regexp = {
  allNewLines: /\r?\n|\r/g,
  headerSection: /HEADER;.+?(?=ENDSEC;)/,
  dataSection: /DATA;\s+.+(?=ENDSEC;)/,
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
  return ifcFile.replace(regexp.allNewLines, " ");
}

const ifcTypes = {
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
  IfcTrimmedCurve: "IFCTRIMMEDCURVE",
  IfcGeometricSet: "IFCGEOMETRICSET",
  IfcArbitraryOpenProfileDef: "IFCARBITRARYOPENPROFILEDEF",
  IfcSurfaceOfLinearExtrusion: "IFCSURFACEOFLINEAREXTRUSION",
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
  IfcColumnType: "IFCCOLUMNTYPE",
  IfcCoveringType: "IFCCOVERINGTYPE",
  IfcCurtainWallType: "IFCCURTAINWALLTYPE",
  IfcFurnitureType: "IFCFURNITURETYPE",
  IfcDistributionElementType: "IFCDISTRIBUTIONELEMENTTYPE",
  IfcDoorType: "IFCDOORTYPE",
  IfcDoorLiningProperties: "IFCDOORLININGPROPERTIES",
  IfcDoorPanelProperties: "IFCDOORPANELPROPERTIES",
  IfcDoorStyle: "IFCDOORSTYLE",
  IfcLightFixtureType: "IFCLIGHTFIXTURETYPE",
  IfcMemberType: "IFCMEMBERTYPE",
  IfcPlateType: "IFCPLATETYPE",
  IfcPropertySet: "IFCPROPERTYSET",
  IfcPropertySingleValue: "IFCPROPERTYSINGLEVALUE",
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
  IfcRelAssociatesMaterial: "IFCRELASSOCIATESMATERIAL",
  IfcRelConnectsPathElements: "IFCRELCONNECTSPATHELEMENTS",
  IfcRelConnectsPortToElement: "IFCRELCONNECTSPORTTOELEMENT",
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

class IfcEntityFinder {
  constructor(ifcData) {
    this.ifcData = ifcData;
  }

  findByType(ifcType) {
    const matches = {};
    const name = getName(ifcType);
    Object.keys(this.ifcData).forEach(e => {
      if (this.getType(e) === name) {
        matches[e] = this.ifcData[e];
      }
    });
    return matches;
  }

  getType(id) {
    return this.ifcData[id][namedProps.ifcClass];
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

export { constructProject, extractSections, referenceEntities };
