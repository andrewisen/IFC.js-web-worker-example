/**
 * Building Elements
 */
const _buildingElements = {
  IfcBuildingElementProxy: 'IFCBUILDINGELEMENTPROXY',
  IfcBeam: 'IFCBEAM',
  IfcColumn: 'IFCCOLUMN',
  IfcCovering: 'IFCCOVERING',
  IfcCurtainWall: 'IFCCURTAINWALL',
  IfcDoor: 'IFCDOOR',
  IfcElementAssembly: 'IFCELEMENTASSEMBLY',
  IfcEquipmentElement: 'IFCEQUIPMENTELEMENT',
  IfcFastener: 'IFCFASTENER',
  IfcFlowTerminal: 'IFCFLOWTERMINAL',
  IfcFlowSegment: 'IFCFLOWSEGMENT',
  IfcFooting: 'IFCFOOTING',
  IfcFurnishingElement: 'IFCFURNISHINGELEMENT',
  IfcMappedItem: 'IFCMAPPEDITEM',
  IfcMechanicalFastener: 'IFCMECHANICALFASTENER',
  IfcMember: 'IFCMEMBER',
  IfcPlate: 'IFCPLATE',
  IfcRailing: 'IFCRAILING',
  IfcRamp: 'IFCRAMP',
  IfcReinforcingBar: 'IFCREINFORCINGBAR',
  IfcReinforcingMesh: 'IFCREINFORCINGMESH',
  IfcSlab: 'IFCSLAB',
  IfcOpeningElement: 'IFCOPENINGELEMENT',
  IfcRoof: 'IFCROOF',
  IfcStairFlight: 'IFCSTAIRFLIGHT',
  IfcStair: 'IFCSTAIR',
  IfcWallStandardCase: 'IFCWALLSTANDARDCASE',
  IfcWall: 'IFCWALL',
  IfcWindow: 'IFCWINDOW'
};
/**
 * Geometry - Faces
 */
const _geometryFaces = {
  IfcFace: 'IFCFACE'
};
/**
 * Geometry - Miscellaneous faces
 */
const _geometryFacesMisc = {
  IfcFaceBound: 'IFCFACEBOUND',
  IfcFaceBasedSurfaceModel: 'IFCFACEBASEDSURFACEMODEL',
  IfcFaceOuterBound: 'IFCFACEOUTERBOUND',
  IfcFacetedBrep: 'IFCFACETEDBREP'
};
/**
 * Geometry - Points
 */
const _geometryPoints = {
  IfcCartesianPoint: 'IFCCARTESIANPOINT',
  IfcCartesianTransformationOperator3D: 'IFCCARTESIANTRANSFORMATIONOPERATOR3D',
  IfcVector: 'IFCVECTOR'
};
/**
 * Geometry - Planes
 */
const _geometryPlanes = {
  IfcPlanarExtent: 'IFCPLANAREXTENT',
  IfcPlane: 'IFCPLANE',
  IfcPolygonalBoundedHalfSpace: 'IFCPOLYGONALBOUNDEDHALFSPACE',
  IfcAxis2Placement2D: 'IFCAXIS2PLACEMENT2D',
  IfcAxis2Placement3D: 'IFCAXIS2PLACEMENT3D'
};
/**
 * Geometry - Polylines
 */
const _geometryPolylines = {
  IfcPolyline: 'IFCPOLYLINE',
  IfcPolyLoop: 'IFCPOLYLOOP'
};
/**
 * Geometry - "Weird" Shapes
 */
const _geometryWeirdShapes = {
  IfcCircle: 'IFCCIRCLE',
  IfcCircleHollowProfileDef: 'IFCCIRCLEHOLLOWPROFILEDEF',
  IfcClosedShell: 'IFCCLOSEDSHELL',
  IfcCircleProfileDef: 'IFCCIRCLEPROFILEDEF',
  IfcCompositeCurve: 'IFCCOMPOSITECURVE',
  IfcCompositeCurveSegment: 'IFCCOMPOSITECURVESEGMENT',
  IfcConnectedFaceSet: 'IFCCONNECTEDFACESET',
  IfcConnectionSurfaceGeometry: 'IFCCONNECTIONSURFACEGEOMETRY',
  IfcCurveBoundedPlane: 'IFCCURVEBOUNDEDPLANE',
  IfcDirection: 'IFCDIRECTION',
  IfcEllipse: 'IFCELLIPSE',
  IfcExtrudedAreaSolid: 'IFCEXTRUDEDAREASOLID'
};
/**
 * Geometry - Miscellaneous
 */
const _geometryMisc = {
  IfcGeometricCurveSet: 'IFCGEOMETRICCURVESET',
  IfcGeometricSet: 'IFCGEOMETRICSET',
  IfcHalfSpaceSolid: 'IFCHALFSPACESOLID',
  IfcIShapeProfileDef: 'IFCISHAPEPROFILEDEF',
  IfcLine: 'IFCLINE',
  IfcLShapeProfileDef: 'IFCLSHAPEPROFILEDEF',
  IfcTrimmedCurve: 'IFCTRIMMEDCURVE',
  IfcArbitraryOpenProfileDef: 'IFCARBITRARYOPENPROFILEDEF',
  IfcSurfaceOfLinearExtrusion: 'IFCSURFACEOFLINEAREXTRUSION',
  IfcArbitraryClosedProfileDef: 'IFCARBITRARYCLOSEDPROFILEDEF',
  IfcArbitraryProfileDefWithVoids: 'IFCARBITRARYPROFILEDEFWITHVOIDS',
  IfcBooleanClippingResult: 'IFCBOOLEANCLIPPINGRESULT',
  IfcBoundingBox: 'IFCBOUNDINGBOX',
  IfcProductDefinitionShape: 'IFCPRODUCTDEFINITIONSHAPE',
  IfcRectangleHollowProfileDef: 'IFCRECTANGLEHOLLOWPROFILEDEF',
  IfcLShapeProfileDef: 'IFCLSHAPEPROFILEDEF',
  IfcRectangleProfileDef: 'IFCRECTANGLEPROFILEDEF',
  IfcShapeRepresentation: 'IFCSHAPEREPRESENTATION',
  IfcSweptDiskSolid: 'IFCSWEPTDISKSOLID'
};
/**
 * Properties
 */
const _properties = {
  IfcAirTerminalType: 'IFCAIRTERMINALTYPE',
  IfcBuildingElementProxyType: 'IFCBUILDINGELEMENTPROXYTYPE',
  IfcBeamType: 'IFCBEAMTYPE',
  IfcColumnType: 'IFCCOLUMNTYPE',
  IfcCoveringType: 'IFCCOVERINGTYPE',
  IfcCurtainWallType: 'IFCCURTAINWALLTYPE',
  IfcFurnitureType: 'IFCFURNITURETYPE',
  IfcDistributionElementType: 'IFCDISTRIBUTIONELEMENTTYPE',
  IfcDoorType: 'IFCDOORTYPE',
  IfcDoorLiningProperties: 'IFCDOORLININGPROPERTIES',
  IfcDoorPanelProperties: 'IFCDOORPANELPROPERTIES',
  IfcDoorStyle: 'IFCDOORSTYLE',
  IfcDuctSegmentType: 'IFCDUCTSEGMENTTYPE',
  IfcLightFixtureType: 'IFCLIGHTFIXTURETYPE',
  IfcMemberType: 'IFCMEMBERTYPE',
  IfcPipeSegmentType: 'IFCPIPESEGMENTTYPE',
  IfcPlateType: 'IFCPLATETYPE',
  IfcPropertySet: 'IFCPROPERTYSET',
  IfcPropertyEnumeratedValue: 'IFCPROPERTYENUMERATEDVALUE',
  IfcPropertySingleValue: 'IFCPROPERTYSINGLEVALUE',
  IfcRailingType: 'IFCRAILINGTYPE',
  IfcSanitaryTerminalType: 'IFCSANITARYTERMINALTYPE',
  IfcSpaceType: 'IFCSPACETYPE',
  IfcStairFlightType: 'IFCSTAIRFLIGHTTYPE',
  IfcSystemFurnitureElementType: 'IFCSYSTEMFURNITUREELEMENTTYPE',
  IfcWallType: 'IFCWALLTYPE',
  IfcWindowStyle: 'IFCWINDOWSTYLE',
  IfcSlabType: 'IFCSLABTYPE',
  IfcWindowLiningProperties: 'IFCWINDOWLININGPROPERTIES'
};
/**
 * Relationships
 */
const _relationships = {
  IfcRelAggregates: 'IFCRELAGGREGATES',
  IfcRelAssignsToActor: 'IFCRELASSIGNSTOACTOR',
  IfcRelAssignsToGroup: 'IFCRELASSIGNSTOGROUP',
  IfcRelAssociatesClassification: 'IFCRELASSOCIATESCLASSIFICATION',
  IfcRelAssociatesDocument: 'IFCRELASSOCIATESDOCUMENT',
  IfcRelAssociatesMaterial: 'IFCRELASSOCIATESMATERIAL',
  IfcRelConnectsPathElements: 'IFCRELCONNECTSPATHELEMENTS',
  IfcRelConnectsPortToElement: 'IFCRELCONNECTSPORTTOELEMENT',
  IfcRelConnectsWithRealizingElements: 'IFCRELCONNECTSWITHREALIZINGELEMENTS',
  IfcRelContainedInSpatialStructure: 'IFCRELCONTAINEDINSPATIALSTRUCTURE',
  IfcRelDefinesByProperties: 'IFCRELDEFINESBYPROPERTIES',
  IfcRelDefinesByType: 'IFCRELDEFINESBYTYPE',
  IfcRelFillsElement: 'IFCRELFILLSELEMENT',
  IfcGroup: 'IFCGROUP',
  IfcRelSpaceBoundary: 'IFCRELSPACEBOUNDARY',
  IfcRelServicesBuildings: 'IFCRELSERVICESBUILDINGS',
  IfcRelVoidsElement: 'IFCRELVOIDSELEMENT'
};
/**
 * Materials
 */
const _materials = {
  IfcMaterial: 'IFCMATERIAL',
  IfcMaterialLayer: 'IFCMATERIALLAYER',
  IfcMaterialLayerSet: 'IFCMATERIALLAYERSET',
  IfcMaterialLayerSetUsage: 'IFCMATERIALLAYERSETUSAGE',
  IfcMaterialList: 'IFCMATERIALLIST'
};
/**
 * Presentation
 */
const _presentation = {
  IfcAnnotation: 'IFCANNOTATION',
  IfcAnnotationFillArea: 'IFCANNOTATIONFILLAREA',
  IfcColourRgb: 'IFCCOLOURRGB',
  IfcCurveStyle: 'IFCCURVESTYLE',
  IfcCurveStyleFont: 'IFCCURVESTYLEFONT',
  IfcCurveStyleFontPattern: 'IFCCURVESTYLEFONTPATTERN',
  IfcDraughtingPreDefinedCurveFont: 'IFCDRAUGHTINGPREDEFINEDCURVEFONT',
  IfcFillAreaStyle: 'IFCFILLAREASTYLE',
  IfcFillAreaStyleHatching: 'IFCFILLAREASTYLEHATCHING',
  IfcMaterialDefinitionRepresentation: 'IFCMATERIALDEFINITIONREPRESENTATION',
  IfcRepresentationMap: 'IFCREPRESENTATIONMAP',
  IfcPresentationLayerAssignment: 'IFCPRESENTATIONLAYERASSIGNMENT',
  IfcPresentationStyleAssignment: 'IFCPRESENTATIONSTYLEASSIGNMENT',
  IfcStyledItem: 'IFCSTYLEDITEM',
  IfcStyledRepresentation: 'IFCSTYLEDREPRESENTATION',
  IfcSurfaceStyle: 'IFCSURFACESTYLE',
  IfcSurfaceStyleRendering: 'IFCSURFACESTYLERENDERING',
  IfcSurfaceStyleShading: 'IFCSURFACESTYLESHADING',
  IfcTextLiteralWithExtent: 'IFCTEXTLITERALWITHEXTENT',
  IfcTextStyle: 'IFCTEXTSTYLE',
  IfcTextStyleFontModel: 'IFCTEXTSTYLEFONTMODEL',
  IfcTextStyleForDefinedFont: 'IFCTEXTSTYLEFORDEFINEDFONT'
};
/**
 * Units
 */
const _units = {
  IfcConversionBasedUnit: 'IFCCONVERSIONBASEDUNIT',
  IfcDerivedUnit: 'IFCDERIVEDUNIT',
  IfcDerivedUnitElement: 'IFCDERIVEDUNITELEMENT',
  IfcDimensionalExponents: 'IFCDIMENSIONALEXPONENTS',
  IfcMeasureWithUnit: 'IFCMEASUREWITHUNIT',
  IfcSIUnit: 'IFCSIUNIT',
  IfcUnitAssignment: 'IFCUNITASSIGNMENT'
};

const _misc = {
  // Classification
  IfcClassification: 'IFCCLASSIFICATION',
  IfcClassificationReference: 'IFCCLASSIFICATIONREFERENCE',
  // Contexts
  IfcGeometricRepresentationContext: 'IFCGEOMETRICREPRESENTATIONCONTEXT',
  IfcGeometricRepresentationSubContext: 'IFCGEOMETRICREPRESENTATIONSUBCONTEXT',
  IfcGridPlacement: 'IFCGRIDPLACEMENT',
  IfcLinearPlacement: 'IFCLINEARPLACEMENT',
  IfcLocalPlacement: 'IFCLOCALPLACEMENT',
  // Document
  IfcDocumentReference: 'IFCDOCUMENTREFERENCE',
  // Identities
  IfcApplication: 'IFCAPPLICATION',
  IfcOrganization: 'IFCORGANIZATION',
  IfcOwnerHistory: 'IFCOWNERHISTORY',
  IfcPerson: 'IFCPERSON',
  IfcPersonAndOrganization: 'IFCPERSONANDORGANIZATION',
  IfcPostalAddress: 'IFCPOSTALADDRESS',
  // Project
  IfcActor: 'IFCACTOR',
  // Quantities
  IfcElementQuantity: 'IFCELEMENTQUANTITY',
  IfcQuantityArea: 'IFCQUANTITYAREA',
  IfcQuantityLength: 'IFCQUANTITYLENGTH',
  IfcQuantityVolume: 'IFCQUANTITYVOLUME',
  // Spatial Structure Elements
  IfcBuilding: 'IFCBUILDING',
  IfcBuildingStorey: 'IFCBUILDINGSTOREY',
  IfcProject: 'IFCPROJECT',
  IfcSite: 'IFCSITE',
  IfcSpace: 'IFCSPACE',
  // Systems
  IfcDistributionPort: 'IFCDISTRIBUTIONPORT',
  IfcSystem: 'IFCSYSTEM'
};
/**
 * Please note that FireFox doesn't support module workers.
 * We will use the regular importScripts().
 */
const ifcTypesGroups = {
  _buildingElements,
  _geometryFaces,
  _geometryFacesMisc,
  _geometryPoints,
  _geometryPlanes,
  _geometryPolylines,
  _geometryWeirdShapes,
  _geometryMisc,
  _properties,
  _relationships,
  _materials,
  _presentation,
  _units,
  _misc
};
