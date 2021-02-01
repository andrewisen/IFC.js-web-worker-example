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
  const itemsReaderValues = {
    expressId: "expressId",
    type: "type",
    properties: "properties"
  };
  const typeValue = {
    type: "type",
    value: "value"
  };
  const ifcUnitsValue = {
    value: "Value",
    unit: "IfcUnit"
  };
  const ifcValueType = {
    number: "Number",
    text: "Text",
    enum: "Enum",
    bool: "Boolean",
    id: "ExpressId",
    singleNumber: "SingleNumber"
  };
  const ifcBoolValues = {
    trueValue: ".T.",
    falseValue: ".F."
  };
  const structuredData = {
    ifcProject: "IfcProject",
    products: "Products",
    spaces: "Spaces",
    units: "Units",
    mainObject: "MainObject"
  };

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

  const typesParserMap = {};

  function newObject(ifcObject) {
    typesParserMap[ifcTypes[ifcObject[namedProps.ifcClass]]] = ifcObject;
  }

  function parserByType(ifcType) {
    return typesParserMap[ifcType];
  }

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

  function isDataTypeValid(dataType) {
    if (Object.values(ifcDataTypes).indexOf(dataType) > -1) return true;
    return false;
  }

  function getAllDataTypes() {
    return Object.values(ifcDataTypes);
  }

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMappedItem),
    [namedProps.mappingSource]: ifcDataTypes.id,
    [namedProps.mappingTarget]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcWall),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBeam),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFooting),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcWallStandardCase),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCurtainWall),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDoor),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    OverallHeight: ifcDataTypes.number,
    OverallWidth: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRailing),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPlate),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMember),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSlab),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcOpeningElement),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcWindow),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    OverallHeight: ifcDataTypes.number,
    OverallWidth: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcStair),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    ShapeType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRoof),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    ShapeType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcColumn),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcStairFlight),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    NumberOfRiser: ifcDataTypes.number,
    NumberOfThreads: ifcDataTypes.number,
    RiserHeight: ifcDataTypes.number,
    TreadLength: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFlowTerminal),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFlowSegment),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFurnishingElement),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCovering),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBuildingElementProxy),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    CompositionType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcEquipmentElement),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcAnnotation),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRamp),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    ShapeType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcReinforcingBar),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    SteelGrade: ifcDataTypes.text,
    NominalDiameter: ifcDataTypes.number,
    CrossSectionArea: ifcDataTypes.number,
    BarLength: ifcDataTypes.number,
    BarRole: ifcDataTypes.enum,
    BarSurface: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcReinforcingMesh),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    SteelGrade: ifcDataTypes.text,
    MeshLength: ifcDataTypes.number,
    MeshWidth: ifcDataTypes.number,
    LongitudinalBarNominalDiameter: ifcDataTypes.number,
    TransverseBarNominalDiameter: ifcDataTypes.number,
    LongitudinalBarCrossSectionArea: ifcDataTypes.number,
    TransverseBarCrossSectionArea: ifcDataTypes.number,
    LongitudinalBarSpacing: ifcDataTypes.number,
    TransverseBarSpacing: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcElementAssembly),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    AssemblyPlace: ifcDataTypes.enum,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMechanicalFastener),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text,
    NominalDiameter: ifcDataTypes.number,
    NominalLength: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFastener),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    Tag: ifcDataTypes.text
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcClassification),
    Source: ifcDataTypes.text,
    Edition: ifcDataTypes.text,
    EditionDate: ifcDataTypes.id,
    Name: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcClassificationReference),
    Location: ifcDataTypes.text,
    ItemReference: ifcDataTypes.text,
    Name: ifcDataTypes.text,
    ReferencedSource: ifcDataTypes.id
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcGeometricRepresentationContext),
    ContextIdentifier: ifcDataTypes.text,
    ContextType: ifcDataTypes.text,
    CoordinateSpaceDimension: ifcDataTypes.number,
    Precision: ifcDataTypes.number,
    WorldCoordinateSystem: ifcDataTypes.id,
    TrueNorth: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcGeometricRepresentationSubContext),
    ContextIdentifier: ifcDataTypes.text,
    ContextType: ifcDataTypes.text,
    [`${namedProps.undefined}1`]: ifcDataTypes.asterisk,
    [`${namedProps.undefined}2`]: ifcDataTypes.asterisk,
    [`${namedProps.undefined}3`]: ifcDataTypes.asterisk,
    [`${namedProps.undefined}4`]: ifcDataTypes.asterisk,
    ParentContext: ifcDataTypes.id,
    TargetScale: ifcDataTypes.value,
    TargetView: ifcDataTypes.enum,
    UserDefinedTargetView: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcGridPlacement),
    PlacementLocation: ifcDataTypes.id,
    PlacementRefDirection: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcLinearPlacement),
    PlacementRelTo: ifcDataTypes.id,
    PlacementMeasuredAlong: ifcDataTypes.id,
    Distance: ifcDataTypes.id,
    Orientation: ifcDataTypes.id,
    CartesianPosition: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcLocalPlacement),
    PlacementRelTo: ifcDataTypes.id,
    RelativePlacement: ifcDataTypes.id
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDocumentReference),
    Location: ifcDataTypes.text,
    ItemReference: ifcDataTypes.text,
    Name: ifcDataTypes.text
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcAxis2Placement2D),
    [namedProps.location]: ifcDataTypes.id,
    [namedProps.refDirection]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcAxis2Placement3D),
    [namedProps.location]: ifcDataTypes.id,
    [namedProps.axis]: ifcDataTypes.id,
    [namedProps.refDirection]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBooleanClippingResult),
    [namedProps.operator]: ifcDataTypes.enum,
    [namedProps.firstOperand]: ifcDataTypes.id,
    [namedProps.secondOperand]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcEllipse),
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.semiAxis1]: ifcDataTypes.number,
    [namedProps.semiAxis2]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcIShapeProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.overallWidth]: ifcDataTypes.number,
    [namedProps.overallDepth]: ifcDataTypes.number,
    [namedProps.webThickness]: ifcDataTypes.number,
    [namedProps.flangeThickness]: ifcDataTypes.number,
    [namedProps.filletRadius]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcLShapeProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    Position: ifcDataTypes.id,
    Depth: ifcDataTypes.number,
    Width: ifcDataTypes.number,
    Thickness: ifcDataTypes.number,
    FilletRadius: ifcDataTypes.number,
    EdgeRadius: ifcDataTypes.number,
    LegSlope: ifcDataTypes.number,
    CentreOfGravityInX: ifcDataTypes.number,
    CentreOfGravityInY: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCartesianPoint),
    [namedProps.coordinates]: ifcDataTypes.numSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcConnectionSurfaceGeometry),
    SurfaceOnRelatingElement: ifcDataTypes.id,
    SurfaceOnRelatedElement: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCurveBoundedPlane),
    BasisSurface: ifcDataTypes.id,
    OuterBoundary: ifcDataTypes.id,
    InnerBoundaries: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDirection),
    [namedProps.dirRatios]: ifcDataTypes.numSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcExtrudedAreaSolid),
    [namedProps.sweptArea]: ifcDataTypes.id,
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.extDirection]: ifcDataTypes.id,
    [namedProps.depth]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSweptDiskSolid),
    Directrix: ifcDataTypes.id,
    Radius: ifcDataTypes.number,
    InnerRadius: ifcDataTypes.number,
    StartParam: ifcDataTypes.number,
    EndParam: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPlane),
    Position: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPolygonalBoundedHalfSpace),
    [namedProps.baseSurface]: ifcDataTypes.id,
    [namedProps.agreementFlag]: ifcDataTypes.bool,
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.polygonalBoundary]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPolyline),
    [namedProps.points]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcProductDefinitionShape),
    Description: ifcDataTypes.text,
    [namedProps.representationType]: ifcDataTypes.text,
    [namedProps.representations]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRectangleProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.xDim]: ifcDataTypes.number,
    [namedProps.yDim]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCircleProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.radius]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCircleHollowProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.radius]: ifcDataTypes.number,
    [namedProps.wallThickness]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRectangleHollowProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    [namedProps.position]: ifcDataTypes.id,
    [namedProps.xDim]: ifcDataTypes.number,
    [namedProps.yDim]: ifcDataTypes.number,
    [namedProps.wallThickness]: ifcDataTypes.number,
    [namedProps.innerFilletRadius]: ifcDataTypes.number,
    [namedProps.outerFilletRadius]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcArbitraryProfileDefWithVoids),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    [namedProps.outerCurve]: ifcDataTypes.id,
    [namedProps.innerCurves]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcArbitraryClosedProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    [namedProps.outerCurve]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcShapeRepresentation),
    ContextOfItems: ifcDataTypes.id,
    RepresentationIdentifier: ifcDataTypes.text,
    [namedProps.representationType]: ifcDataTypes.text,
    [namedProps.items]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFaceOuterBound),
    [namedProps.bound]: ifcDataTypes.id,
    [namedProps.orientation]: ifcDataTypes.bool
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFaceBound),
    [namedProps.bound]: ifcDataTypes.id,
    [namedProps.orientation]: ifcDataTypes.bool
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFace),
    [namedProps.bounds]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPolyLoop),
    [namedProps.polygon]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcClosedShell),
    [namedProps.cfsFaces]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFacetedBrep),
    [namedProps.outer]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCartesianTransformationOperator3D),
    [namedProps.axis1]: ifcDataTypes.id,
    [namedProps.axis2]: ifcDataTypes.id,
    [namedProps.localOrigin]: ifcDataTypes.id,
    [namedProps.scale]: ifcDataTypes.number,
    [namedProps.axis3]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSurfaceOfLinearExtrusion),
    SweptCurve: ifcDataTypes.id,
    Position: ifcDataTypes.id,
    ExtrudedDirection: ifcDataTypes.id,
    Depth: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcArbitraryOpenProfileDef),
    ProfileType: ifcDataTypes.enum,
    ProfileName: ifcDataTypes.text,
    Curve: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcGeometricSet),
    Elements: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcGeometricCurveSet),
    [namedProps.elements]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcConnectedFaceSet),
    CfsFaces: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFaceBasedSurfaceModel),
    FbsmFaces: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcHalfSpaceSolid),
    [namedProps.baseSurface]: ifcDataTypes.id,
    [namedProps.agreementFlag]: ifcDataTypes.bool
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCompositeCurveSegment),
    Transition: ifcDataTypes.enum,
    SameSense: ifcDataTypes.bool,
    [namedProps.parentCurve]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCircle),
    Position: ifcDataTypes.id,
    Radius: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcTrimmedCurve),
    [namedProps.basisCurve]: ifcDataTypes.id,
    [namedProps.trim1]: ifcDataTypes.valueSet,
    [namedProps.trim2]: ifcDataTypes.valueSet,
    [namedProps.senseAgreement]: ifcDataTypes.bool,
    MasterRepresentation: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCompositeCurve),
    [namedProps.segments]: ifcDataTypes.idSet,
    SelfIntersect: ifcDataTypes.bool
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBoundingBox),
    [namedProps.corner]: ifcDataTypes.id,
    [namedProps.xDim]: ifcDataTypes.number,
    [namedProps.yDim]: ifcDataTypes.number,
    [namedProps.zDim]: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPlanarExtent),
    SizeInX: ifcDataTypes.number,
    SizeInY: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcVector),
    Orientation: ifcDataTypes.id,
    Magnitude: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcLine),
    Pnt: ifcDataTypes.id,
    Dir: ifcDataTypes.id
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcApplication),
    ApplicationDeveloper: ifcDataTypes.id,
    Version: ifcDataTypes.text,
    ApplicationFullName: ifcDataTypes.text,
    ApplicationIdentifier: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcOrganization),
    Identification: ifcDataTypes.text,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    Roles: ifcDataTypes.idSet,
    Addresses: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcOwnerHistory),
    OwningUser: ifcDataTypes.id,
    OwningApplication: ifcDataTypes.id,
    State: ifcDataTypes.enum,
    ChangeAction: ifcDataTypes.enum,
    LastModifiedDate: ifcDataTypes.date,
    LastModifyingUser: ifcDataTypes.id,
    LastModifyingApplication: ifcDataTypes.id,
    CreationDate: ifcDataTypes.date
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPerson),
    Identification: ifcDataTypes.text,
    FamilyName: ifcDataTypes.text,
    GivenName: ifcDataTypes.text,
    MiddleNames: ifcDataTypes.textSet,
    PrefixTitles: ifcDataTypes.textSet,
    SuffixTitles: ifcDataTypes.textSet,
    Roles: ifcDataTypes.idSet,
    Addresses: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPersonAndOrganization),
    ThePerson: ifcDataTypes.id,
    TheOrganization: ifcDataTypes.id,
    Roles: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPostalAddress),
    Purpose: ifcDataTypes.enum,
    Description: ifcDataTypes.text,
    UserDefinedPurpose: ifcDataTypes.text,
    InternalLocation: ifcDataTypes.text,
    AddressLines: ifcDataTypes.textSet,
    PostalBox: ifcDataTypes.text,
    Town: ifcDataTypes.text,
    Region: ifcDataTypes.text,
    PostalCode: ifcDataTypes.text,
    Country: ifcDataTypes.text
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMaterial),
    Name: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMaterialLayer),
    Material: ifcDataTypes.id,
    LayerThickness: ifcDataTypes.number,
    IsVentilated: ifcDataTypes.value
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMaterialLayerSet),
    MaterialLayers: ifcDataTypes.idSet,
    LayerSetName: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMaterialLayerSetUsage),
    ForLayerSet: ifcDataTypes.id,
    LayerSetDirection: ifcDataTypes.enum,
    DirectionSense: ifcDataTypes.enum,
    OffsetFromReferenceLine: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMaterialList),
    Materials: ifcDataTypes.idSet
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcColourRgb),
    Name: ifcDataTypes.text,
    Red: ifcDataTypes.number,
    Green: ifcDataTypes.number,
    Blue: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCurveStyleFontPattern),
    VisibleSegmentLength: ifcDataTypes.number,
    InvisibleSegmentLength: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCurveStyle),
    Name: ifcDataTypes.text,
    CurveFont: ifcDataTypes.id,
    CurveWidth: ifcDataTypes.value,
    CurveColour: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFillAreaStyle),
    Name: ifcDataTypes.text,
    FillStyles: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFillAreaStyleHatching),
    HatchLineAppearance: ifcDataTypes.id,
    StartOfNextHatchLine: ifcDataTypes.value,
    PointOfReferenceHatchLine: ifcDataTypes.id,
    PatternStart: ifcDataTypes.id,
    HatchLineAngle: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCurveStyleFont),
    Name: ifcDataTypes.text,
    PatternList: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDraughtingPreDefinedCurveFont),
    Name: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMaterialDefinitionRepresentation),
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    [namedProps.representations]: ifcDataTypes.idSet,
    RepresentedMaterial: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPresentationStyleAssignment),
    Styles: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcStyledItem),
    Item: ifcDataTypes.id,
    Styles: ifcDataTypes.idSet,
    Name: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcStyledRepresentation),
    ContextOfItems: ifcDataTypes.id,
    RepresentationIdentifier: ifcDataTypes.text,
    [namedProps.representationType]: ifcDataTypes.text,
    [namedProps.items]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSurfaceStyle),
    Name: ifcDataTypes.text,
    Side: ifcDataTypes.enum,
    Styles: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSurfaceStyleRendering),
    SurfaceColour: ifcDataTypes.id,
    Transparency: ifcDataTypes.value,
    DiffuseColour: ifcDataTypes.value,
    TransmissionColour: ifcDataTypes.value,
    DiffuseTransmissionColour: ifcDataTypes.value,
    ReflectionColour: ifcDataTypes.value,
    SpecularColour: ifcDataTypes.value,
    SpecularHighlight: ifcDataTypes.value,
    ReflectanceMethod: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRepresentationMap),
    [namedProps.mappingOrigin]: ifcDataTypes.id,
    [namedProps.mappedRepresentation]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPresentationLayerAssignment),
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    AssignedItems: ifcDataTypes.idSet,
    Identifier: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSurfaceStyleShading),
    SurfaceColour: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcTextStyleFontModel),
    Name: ifcDataTypes.text,
    FontFamily: ifcDataTypes.textSet,
    FontStyle: ifcDataTypes.text,
    FontVariant: ifcDataTypes.text,
    FontWeight: ifcDataTypes.number,
    FontSize: ifcDataTypes.value
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcTextStyleForDefinedFont),
    Colour: ifcDataTypes.id,
    BackgroundColour: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcTextStyle),
    Name: ifcDataTypes.text,
    TextCharacterAppearance: ifcDataTypes.id,
    TextStyle: ifcDataTypes.id,
    TextFontStyle: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcTextLiteralWithExtent),
    Literal: ifcDataTypes.text,
    Placement: ifcDataTypes.id,
    Path: ifcDataTypes.enum,
    Extent: ifcDataTypes.id,
    BoxAlignment: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcAnnotationFillArea),
    OuterBoundary: ifcDataTypes.id,
    InnerBoundaries: ifcDataTypes.idSet
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPropertySet),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    HasProperties: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPropertySingleValue),
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    NominalValue: ifcDataTypes.value,
    Unit: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPropertyEnumeratedValue),
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    EnumerationValues: ifcDataTypes.valueSet,
    EnumerationReference: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSpaceType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcColumnType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPlateType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMemberType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcWallType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcStairFlightType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDuctSegmentType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRailingType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCoveringType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcCurtainWallType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcFurnitureType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    AssemblyPlace: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDoorType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum,
    OperationType: ifcDataTypes.enum,
    ParameterTakesPrecedence: ifcDataTypes.bool,
    UserDefinedOperationType: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcPipeSegmentType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBeamType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSlabType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBuildingElementProxyType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSanitaryTerminalType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcAirTerminalType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcLightFixtureType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text,
    PredefinedType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSystemFurnitureElementType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDistributionElementType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ElementType: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDoorLiningProperties),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    LiningDepth: ifcDataTypes.number,
    LiningThickness: ifcDataTypes.number,
    ThresholdDepth: ifcDataTypes.number,
    ThresholdThickness: ifcDataTypes.number,
    TransomThickness: ifcDataTypes.number,
    TransomOffset: ifcDataTypes.number,
    LiningOffset: ifcDataTypes.number,
    ThresholdOffset: ifcDataTypes.number,
    CasingThickness: ifcDataTypes.number,
    CasingDepth: ifcDataTypes.number,
    ShapeAspectStyle: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDoorPanelProperties),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    PanelDepth: ifcDataTypes.number,
    PanelOperation: ifcDataTypes.enum,
    PanelWidth: ifcDataTypes.value,
    PanelPosition: ifcDataTypes.enum,
    ShapeAspectStyle: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDoorStyle),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    OperationType: ifcDataTypes.enum,
    ConstructionType: ifcDataTypes.enum,
    ParameterTakesPrecedence: ifcDataTypes.bool,
    Sizeable: ifcDataTypes.bool
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcWindowStyle),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ApplicableOccurrence: ifcDataTypes.text,
    HasPropertySets: ifcDataTypes.idSet,
    RepresentationMaps: ifcDataTypes.idSet,
    Tag: ifcDataTypes.text,
    ConstructionType: ifcDataTypes.enum,
    OperationType: ifcDataTypes.enum,
    ParameterTakesPrecedence: ifcDataTypes.bool,
    Sizeable: ifcDataTypes.bool
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcWindowLiningProperties),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    LiningDepth: ifcDataTypes.number,
    LiningThickness: ifcDataTypes.number,
    TransomThickness: ifcDataTypes.number,
    MullionThickness: ifcDataTypes.number,
    FirstTransomOffset: ifcDataTypes.number,
    SecondTransomOffset: ifcDataTypes.number,
    FirstMullionOffset: ifcDataTypes.number,
    SecondMullionOffset: ifcDataTypes.number,
    ShapeAspectStyle: ifcDataTypes.number
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcActor),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    TheActor: ifcDataTypes.id
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelAggregates),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    [namedProps.relatingObject]: ifcDataTypes.id,
    [namedProps.relatedObjects]: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelContainedInSpatialStructure),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    [namedProps.relatedElements]: ifcDataTypes.idSet,
    [namedProps.relatingStructure]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelDefinesByProperties),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatedObjects: ifcDataTypes.idSet,
    RelatingPropertyDefinition: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelAssociatesMaterial),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatedObjects: ifcDataTypes.idSet,
    RelatingMaterial: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelAssociatesClassification),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatedObjects: ifcDataTypes.idSet,
    RelatingClassification: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelDefinesByType),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    [namedProps.relatedObjects]: ifcDataTypes.idSet,
    [namedProps.relatingType]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelSpaceBoundary),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatingSpace: ifcDataTypes.id,
    RelatedBuildingElement: ifcDataTypes.id,
    ConnectionGeometry: ifcDataTypes.id,
    PhysicalOrVirtualBoundary: ifcDataTypes.enum,
    InternalOrExternalBoundary: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelConnectsPathElements),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ConnectionGeometry: ifcDataTypes.id,
    RelatingElement: ifcDataTypes.id,
    RelatedElement: ifcDataTypes.id,
    RelatingPriorities: ifcDataTypes.numSet,
    RelatedPriorities: ifcDataTypes.numSet,
    RelatedConnectionType: ifcDataTypes.enum,
    RelatingConnectionType: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelVoidsElement),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    [namedProps.relatingBuildingElement]: ifcDataTypes.id,
    [namedProps.relatedOpeningElement]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelFillsElement),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    [namedProps.relatingOpeningElement]: ifcDataTypes.id,
    [namedProps.relatedBuildingElement]: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelConnectsPortToElement),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatingPort: ifcDataTypes.id,
    RelatedElement: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelAssignsToGroup),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatedObjects: ifcDataTypes.idSet,
    RelatedObjectsType: ifcDataTypes.enum,
    RelatingGroup: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelServicesBuildings),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatingSystem: ifcDataTypes.id,
    RelatedBuildings: ifcDataTypes.idSet
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcGroup),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelAssignsToActor),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatedObjects: ifcDataTypes.idSet,
    RelatedObjectsType: ifcDataTypes.enum,
    RelatingActor: ifcDataTypes.id,
    ActingRole: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelAssociatesDocument),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    RelatedObjects: ifcDataTypes.idSet,
    RelatingDocument: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcRelConnectsWithRealizingElements),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ConnectionGeometry: ifcDataTypes.idSet,
    RelatingElement: ifcDataTypes.id,
    RelatedElement: ifcDataTypes.id,
    RealizingElements: ifcDataTypes.idSet,
    ConnectionType: ifcDataTypes.text
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcQuantityArea),
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    Unit: ifcDataTypes.id,
    AreaValue: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcQuantityLength),
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    Unit: ifcDataTypes.id,
    LengthValue: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcQuantityVolume),
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    Unit: ifcDataTypes.id,
    VolumeValue: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcElementQuantity),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    MethodOfMeasurement: ifcDataTypes.text,
    Quantities: ifcDataTypes.idSet
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDistributionPort),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    FlowDirection: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSystem),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcProject),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    LongName: ifcDataTypes.text,
    Phase: ifcDataTypes.text,
    RepresentationContexts: ifcDataTypes.idSet,
    UnitsInContext: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSite),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    LongName: ifcDataTypes.text,
    CompositionType: ifcDataTypes.enum,
    RefLatitude: ifcDataTypes.numSet,
    RefLongitude: ifcDataTypes.numSet,
    RefElevation: ifcDataTypes.number,
    LandTitleNumber: ifcDataTypes.text,
    SiteAddress: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBuilding),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    LongName: ifcDataTypes.text,
    CompositionType: ifcDataTypes.enum,
    ElevationOfRefHeight: ifcDataTypes.number,
    ElevationOfTerrain: ifcDataTypes.number,
    BuildingAddress: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcBuildingStorey),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    LongName: ifcDataTypes.text,
    CompositionType: ifcDataTypes.enum,
    Elevation: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSpace),
    GlobalId: ifcDataTypes.text,
    OwnerHistory: ifcDataTypes.id,
    Name: ifcDataTypes.text,
    Description: ifcDataTypes.text,
    ObjectType: ifcDataTypes.text,
    [namedProps.objectPlacement]: ifcDataTypes.id,
    [namedProps.representation]: ifcDataTypes.id,
    LongName: ifcDataTypes.text,
    CompositionType: ifcDataTypes.enum,
    InteriorOrExteriorSpace: ifcDataTypes.enum,
    ElevationWithFlooring: ifcDataTypes.number
  });

  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcConversionBasedUnit),
    Dimensions: ifcDataTypes.id,
    [namedProps.unitType]: ifcDataTypes.enum,
    Name: ifcDataTypes.text,
    ConversionFactor: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDerivedUnit),
    Elements: ifcDataTypes.idSet,
    [namedProps.unitType]: ifcDataTypes.enum,
    UserDefinedType: ifcDataTypes.text
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDerivedUnitElement),
    Unit: ifcDataTypes.id,
    Exponent: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcDimensionalExponents),
    LengthExponent: ifcDataTypes.number,
    MassExponent: ifcDataTypes.number,
    TimeExponent: ifcDataTypes.number,
    ElectricCurrentExponent: ifcDataTypes.number,
    ThermodynamicTemperatureExponent: ifcDataTypes.number,
    AmountOfSubstanceExponent: ifcDataTypes.number,
    LuminousIntensityExponent: ifcDataTypes.number
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcMeasureWithUnit),
    ValueComponent: ifcDataTypes.value,
    UnitComponent: ifcDataTypes.id
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcSIUnit),
    [namedProps.undefined]: ifcDataTypes.asterisk,
    [namedProps.unitType]: ifcDataTypes.enum,
    [namedProps.prefix]: ifcDataTypes.enum,
    Name: ifcDataTypes.enum
  });
  newObject({
    [namedProps.ifcClass]: getName(ifcTypes.IfcUnitAssignment),
    [namedProps.units]: ifcDataTypes.idSet
  });

  const newToken = chevrotain.createToken;
  const Lexer = chevrotain.Lexer; //Tokens / vocabulary for constructing the parser primitives

  const tokens = [];
  const patterns = {
    [ifcDataTypes.id]: /#\d+/,
    [ifcDataTypes.default]: /\$/,
    [ifcDataTypes.asterisk]: /\*/,
    [ifcDataTypes.value]: /IFC[A-Z]+?(?=\()/,
    [ifcDataTypes.bool]: /\.T\.|\.F\./,
    [ifcDataTypes.enum]: /\.[A-Z0-9_]+?\./,
    [ifcDataTypes.number]: /[0-9.E-]+/,
    [ifcDataTypes.text]: /'.*?'(?=[\)|,])/,
    EqualSign: /=/,
    OpenPar: /\(/,
    ClosePar: /\)/,
    Semicolon: /;/,
    Comma: /\s*,\s*/,
    [ifcDataTypes.anything]: /.+/
  };
  const ingoredPatterns = {
    NewLine: /[\n\r]+/,
    WhiteSpace: /\s+/
  };

  (function createTokens() {
    Object.keys(patterns).forEach(e => {
      tokens.push(newToken({
        name: e,
        pattern: patterns[e]
      }));
    });
  })();

  (function createIgnoredTokens() {
    Object.keys(ingoredPatterns).forEach(e => {
      tokens.push(newToken({
        name: e,
        pattern: ingoredPatterns[e],
        group: chevrotain.Lexer.SKIPPED
      }));
    });
  })();

  const lexer = new Lexer(tokens);
  const vocabulary = {};
  tokens.forEach(token => {
    vocabulary[token.name] = token;
  });

  function addPrimitiveParsers($) {
    const parsers = [];
    Object.values(primitiveParsers).forEach(e => {
      if (!parsers.includes(e)) {
        parsers.push(e);
        $.RULE(e.name, e($));
      }
    });
  }

  const primitiveParsers = {
    [ifcDataTypes.asterisk]: Asterisk_Parser,
    [ifcDataTypes.number]: Number_Parser,
    [ifcDataTypes.date]: Number_Parser,
    [ifcDataTypes.text]: IfcText_Parser,
    [ifcDataTypes.bool]: IfcBool_Parser,
    [ifcDataTypes.enum]: IfcEnum_Parser,
    [ifcDataTypes.id]: IfcExpressId_Parser,
    [ifcDataTypes.idSet]: IdSet_Parser,
    [ifcDataTypes.numSet]: NumberSet_Parser,
    [ifcDataTypes.value]: IfcValue_Parser,
    [ifcDataTypes.valueSet]: ValueSet_Parser,
    [ifcDataTypes.textSet]: TextSet_Parser
  };

  function getParser(dataType) {
    return primitiveParsers[dataType].name;
  }

  function Asterisk_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.asterisk]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION(() => {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function IfcValue_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary.IfcValue);
          $.CONSUME(vocabulary.OpenPar);
          $.OR2([{
            ALT: () => {
              $.CONSUME(vocabulary[ifcDataTypes.number]);
            }
          }, {
            ALT: () => {
              $.CONSUME(vocabulary[ifcDataTypes.text]);
            }
          }, {
            ALT: () => {
              $.CONSUME(vocabulary[ifcDataTypes.bool]);
            }
          }, {
            ALT: () => {
              $.CONSUME(vocabulary[ifcDataTypes.enum]);
            }
          }]);
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.id]);
        }
      }, {
        ALT: () => {
          $.CONSUME2(vocabulary[ifcDataTypes.number]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION(() => {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function Number_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.number]);
        }
      }]);
      $.OPTION(() => {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function NumberSet_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(() => {
            $.CONSUME(vocabulary[ifcDataTypes.number]);
            $.OPTION(() => {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function TextSet_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(() => {
            $.CONSUME(vocabulary[ifcDataTypes.text]);
            $.OPTION(() => {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function IdSet_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(() => {
            $.CONSUME(vocabulary[ifcDataTypes.id]);
            $.OPTION(() => {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function ValueSet_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(() => {
            $.SUBRULE($.IfcValue_Parser);
            $.OPTION(() => {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function IfcText_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.text]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function IfcBool_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.bool]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function IfcEnum_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.enum]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.asterisk]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function IfcExpressId_Parser($) {
    return () => {
      $.OR([{
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.id]);
        }
      }, {
        ALT: () => {
          $.CONSUME(vocabulary[ifcDataTypes.default]);
        }
      }]);
      $.OPTION2(() => {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function newParser($, ifcItem) {
    resetParserFactory();
    $.CONSUME(vocabulary.OpenPar);
    createRulesForAllProperties($, ifcItem);
    $.CONSUME(vocabulary.ClosePar);
  }

  function createRulesForAllProperties($, ifcItem) {
    Object.values(ifcItem).forEach(dataType => {
      if (isDataTypeValid(dataType)) newRule($, dataType);
    });
  }

  function newRule($, dataType) {
    const rule = `SUBRULE${getIndex(dataType)}`;
    updateCounter(dataType);
    return $[rule]($[primitiveParsers[dataType].name]);
  } //The counter is necessary because chevrotain cannot have
  //multiple identical SUBRULEs. The repeated methods need to be
  //followed by a suffix (f.e. SUBRULE(X), SUBRULE2(X), ...)


  let counter = {};

  function resetParserFactory() {
    counter = {};
    getAllDataTypes().forEach(e => {
      counter[e] = 0;
    });
  }

  function updateCounter(dataType) {
    counter[dataType]++;
  } //Chevrotain syntax: SUBRULE0(X) is expressed as SUBRULE(X)


  function getIndex(dataType) {
    return counter[dataType] === 0 ? "" : counter[dataType];
  }

  const CstParser = chevrotain.CstParser; //Contains all the syntactical structures (RULEs)

  class IfcParser extends CstParser {
    constructor() {
      super(tokens);
      addPrimitiveParsers(this);
      addParsesForAllIfcTypes(this);
      this.performSelfAnalysis();
    }

  } //Creates the syntactical structures (RULEs) for all the IFC Classes


  function addParsesForAllIfcTypes($) {
    Object.values(typesParserMap).forEach(e => {
      $.RULE(e[namedProps.ifcClass], () => {
        newParser($, e);
      });
    });
  }

  const parser = new IfcParser();

  const r = {
    unicode: /\\X2\\[0-9A-F]+?\\X\d\\/,
    getUnicode: /[0-9A-F]+(?=\\X\d\\)/
  };

  function unicode(text) {
    while (r.unicode.test(text)) {
      const encoded = text.match(r.unicode)[0].match(r.getUnicode)[0];
      text = text.replace(r.unicode, String.fromCharCode(parseInt(encoded, 16)));
    }

    return text;
  }

  function formatDate(dateAsNumber) {
    if (isNaN(dateAsNumber)) return dateAsNumber;
    const formattedDate = new Date(dateAsNumber * 1000);
    return formattedDate.getTime() ? formattedDate : dateAsNumber;
  }

  const semanticUnits = {
    [ifcDataTypes.id]: getExpressId,
    [ifcDataTypes.idSet]: getIdSet,
    [ifcDataTypes.text]: getIfcText,
    [ifcDataTypes.textSet]: getTextSet,
    [ifcDataTypes.number]: getNumber,
    [ifcDataTypes.numSet]: getNumberSet,
    [ifcDataTypes.date]: getDate,
    [ifcDataTypes.value]: getIfcValue,
    [ifcDataTypes.bool]: getBool,
    [ifcDataTypes.enum]: getEnum,
    [ifcDataTypes.asterisk]: getAsterisk,
    [ifcDataTypes.valueSet]: getValueSet
  };

  function getProperty(parsed, type) {
    return semanticUnits[type](parsed);
  } //The counter is necessary because chevrotain generates indexed
  //parsed structures. F.e. if there are two enums in a IFC Class,
  //the first one has index=1, the second one index=2, etc


  let counter$1 = {};

  function resetSemanticFactory() {
    counter$1 = {
      [ifcDataTypes.id]: 0,
      [ifcDataTypes.text]: 0,
      [ifcDataTypes.number]: 0,
      [ifcDataTypes.enum]: 0,
      [ifcDataTypes.idSet]: 0,
      [ifcDataTypes.numSet]: 0,
      [ifcDataTypes.value]: 0,
      [ifcDataTypes.textSet]: 0,
      [ifcDataTypes.bool]: 0,
      [ifcDataTypes.valueSet]: 0
    };
  }

  function getBool(parsed) {
    return getValue(parsed, ifcDataTypes.bool, formatBool);
  }

  function getEnum(parsed) {
    return getValue(parsed, ifcDataTypes.enum, formatEnum);
  }

  function getNumber(parsed) {
    return getValue(parsed, ifcDataTypes.number, formatNumber);
  }

  function getDate(parsed) {
    return formatDate(getNumber(parsed));
  }

  function getExpressId(parsed) {
    return getValue(parsed, ifcDataTypes.id, formatId);
  }

  function getIfcText(parsed) {
    return getValue(parsed, ifcDataTypes.text, formatText);
  }

  function getTextSet(parsed) {
    return getSet(parsed, ifcDataTypes.textSet, ifcDataTypes.text, e => unicode(e.image.slice(1, -1)));
  }

  function getIdSet(parsed) {
    return getSet(parsed, ifcDataTypes.idSet, ifcDataTypes.id, e => Number(e.image.slice(1)));
  }

  function getNumberSet(parsed) {
    return getSet(parsed, ifcDataTypes.numSet, ifcDataTypes.number, e => Number(e.image));
  }

  function getValueSet(parsed) {
    const valueSet = parsed[getParser(ifcDataTypes.valueSet)][counter$1[ifcDataTypes.valueSet]++];
    const values = valueSet.children[getParser(ifcDataTypes.value)];
    return values.map(ifcValue => {
      const valueProps = ifcValue.children;
      let type = getIfcValueType(valueProps);
      const value = valueProps[type][0].image;
      const formattedValue = formatIfcValue(type, value);
      const unit = valueProps[ifcDataTypes.value] ? valueProps[ifcDataTypes.value][0].image : getTypeName(type);
      return {
        [ifcUnitsValue.value]: formattedValue,
        [ifcUnitsValue.unit]: unit
      };
    });
  }

  function getIfcValue(parsed) {
    if (isDefaultValue(parsed, ifcDataTypes.value)) return getDefault(parsed, ifcDataTypes.value);
    if (isExpressId(parsed, ifcDataTypes.value)) return getIfcValueId(parsed, ifcDataTypes.value);
    const data = parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children;
    let type = getIfcValueType(data);
    const value = formatIfcValue(type, getIfcValueValue(parsed, type));
    const unit = getIfcUnit(parsed) || getTypeName(type);
    return {
      [ifcUnitsValue.value]: value,
      [ifcUnitsValue.unit]: unit
    };
  }

  function getTypeName(type) {
    return type.toString();
  }

  function getEmptySet(type) {
    counter$1[type]++;
    return [];
  }

  function getAsterisk() {
    return '*';
  }

  function getValue(parsed, type, formatFunction) {
    try {
      if (isDefaultValue(parsed, type)) return getDefault(parsed, type);
      return formatFunction(extract(parsed, type));
    } catch (e) {
      return getAsterisk();
    }
  }

  function getSet(parsed, type, subtype, mapFunction) {
    if (isDefaultValue(parsed, type)) return getDefault(parsed, type);
    if (isEmptySet(parsed, type, subtype)) return getEmptySet(type);
    return parsed[getParser(type)][counter$1[type]++].children[subtype].map(mapFunction);
  }

  function extract(parsed, type) {
    return getContent(parsed[getParser(type)], type);
  }

  function getContent(subParsed, type) {
    return subParsed[counter$1[type]++].children[type][0].image;
  }

  function formatId(id) {
    return Number(id.slice(1));
  }

  function formatText(text) {
    return unicode(text.slice(1, -1));
  }

  function formatNumber(number) {
    return Number(number);
  }

  function formatBool(bool) {
    return bool === ifcBoolValues.trueValue ? true : false;
  }

  function formatEnum(enumValue) {
    return enumValue.slice(1, -1);
  }

  function isDefaultValue(parsed, type) {
    return parsed[getParser(type)][counter$1[type]].children[ifcDataTypes.default] ? true : false;
  }

  function isEmptySet(parsed, type, subtype) {
    return parsed[getParser(type)][counter$1[type]].children[subtype] ? false : true;
  }

  function getDefault(parsed, type) {
    return parsed[getParser(type)][counter$1[type]++].children[ifcDataTypes.default][0].image;
  }

  function isExpressId(parsed, type) {
    return parsed[getParser(type)][counter$1[type]].children[ifcDataTypes.id] ? true : false;
  }

  function getIfcValueId(parsed, type) {
    const rawId = parsed[getParser(type)][counter$1[type]++].children[ifcDataTypes.id][0].image;
    return Number(rawId.slice(1));
  }

  function getIfcValueValue(parsed, type) {
    return parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[type][0].image;
  }

  function formatIfcValue(type, value) {
    if (type === ifcValueType.number) return formatNumber(value);
    if (type === ifcValueType.text) return formatText(value);
    if (type === ifcValueType.bool) return formatBool(value);
    if (type === ifcValueType.enum) return formatEnum(value);
    if (type === ifcValueType.id) return formatId(value);
    return value;
  }

  function getIfcValueType(data) {
    if (data[ifcDataTypes.number]) return ifcValueType.number;
    if (data[ifcDataTypes.text]) return ifcValueType.text;
    if (data[ifcDataTypes.bool]) return ifcValueType.bool;
    if (data[ifcDataTypes.id]) return ifcValueType.id;
    return ifcValueType.enum;
  }

  function getIfcUnit(parsed) {
    const ifcUnit = parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[ifcDataTypes.value] ? parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[ifcDataTypes.value][0].image : '';
    counter$1[ifcDataTypes.value]++;
    return ifcUnit;
  }

  function newSemantic(parsed, ifcItem) {
    resetSemanticFactory();
    const result = retrieveIfcObjectProperties(parsed, ifcItem);
    addClassName(result, ifcItem);
    cleanUndefinedProperties(result);
    return result;
  }

  function retrieveIfcObjectProperties(parsed, ifcItem) {
    const result = {};
    Object.keys(ifcItem).forEach(e => {
      if (isDataTypeValid(ifcItem[e])) result[e] = newSemanticUnit(parsed, ifcItem[e]);
    });
    return result;
  }

  function newSemanticUnit(parsed, dataType) {
    return {
      [typeValue.value]: getProperty(parsed, dataType),
      [typeValue.type]: dataType
    };
  }

  function addClassName(result, ifcItem) {
    result[namedProps.ifcClass] = ifcItem[namedProps.ifcClass];
  }

  function cleanUndefinedProperties(ifcItem) {
    Object.keys(ifcItem).forEach(prop => {
      if (prop.includes(namedProps.undefined)) {
        delete ifcItem[prop];
      }
    });
  }

  //When the parser outputs a syntactical structure, the visitor
  //handles it with the correspondant method using visit()

  const BaseVisitor = parser.getBaseCstVisitorConstructor();

  class IfcVisitor extends BaseVisitor {
    constructor() {
      super();
      this.validateVisitor();
    }

  }

  (function createPrimitiveSemantic() {
    Object.keys(primitiveParsers).forEach(e => {
      IfcVisitor.prototype[primitiveParsers[e].name] = parsed => {};
    });
  })();

  (function createSemantic() {
    Object.values(typesParserMap).forEach(e => {
      IfcVisitor.prototype[e[namedProps.ifcClass]] = parsed => getSemantic(ifcTypes[e[namedProps.ifcClass]], parsed);
    });
  })();

  function getSemantic(ifcType, parsed) {
    const ifcItem = typesParserMap[ifcType];
    return newSemantic(parsed, ifcItem);
  }

  const ifcVisitor = new IfcVisitor();

  //1. The lexer tokenizes the input
  //2. The tokenized input is given to the parser
  //3. The parser is applied using the chosen syntactical structure
  //4. The visitor applies semantic rules to the output of the parser

  function parse(text, ifcType) {
    const lexingResult = lexer.tokenize(text);
    parser.input = lexingResult.tokens;
    const cstOutput = parser[parserByType(ifcType)[namedProps.ifcClass]]();
    if (parser.errors.length > 0) showErrors(text, ifcType, parser);
    return ifcVisitor.visit(cstOutput);
  }

  function showErrors(text, ifcType, parser) {
    console.warn(parser.errors);
    console.warn(`Error while parsing item: ${text} of type ${ifcType}`);
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

  function separateIfcEntities(dataSection) {
    return dataSection.match(regexp.singleIfcItems);
  }

  function getId(rawIfcLine) {
    return parseInt(rawIfcLine.match(regexp.expressId).toString().slice(1));
  }

  function getIfcType(rawIfcLine) {
    return rawIfcLine.match(regexp.rawIfcType).toString();
  }

  function getIfcRawProperties(ifcLine) {
    return ifcLine.match(regexp.rawIfcProperties).toString();
  }

  function parseAndLoadItem(ifcItem) {
    const parsed = parse(ifcItem[itemsReaderValues.properties], ifcItem[itemsReaderValues.type]);
    parsed[namedProps.expressId] = ifcItem[itemsReaderValues.expressId];
    return parsed;
  }

  function isTypeSupported(ifcItem) {
    return Object.values(ifcTypes).indexOf(ifcItem[itemsReaderValues.type]) > -1;
  }

  exports.getId = getId;
  exports.getIfcRawProperties = getIfcRawProperties;
  exports.getIfcType = getIfcType;
  exports.i = itemsReaderValues;
  exports.isTypeSupported = isTypeSupported;
  exports.parseAndLoadItem = parseAndLoadItem;
  exports.s = structuredData;
  exports.separateIfcEntities = separateIfcEntities;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
