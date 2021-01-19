var IFCjs = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
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
  var itemsReaderValues = {
    expressId: "expressId",
    type: "type",
    properties: "properties"
  };
  var typeValue = {
    type: "type",
    value: "value"
  };
  var ifcUnitsValue = {
    value: "Value",
    unit: "IfcUnit"
  };
  var ifcValueType = {
    number: "Number",
    text: "Text",
    "enum": "Enum",
    bool: "Boolean",
    singleNumber: "SingleNumber"
  };
  var ifcBoolValues = {
    trueValue: ".T.",
    falseValue: ".F."
  };
  var structuredData = {
    ifcProject: "IfcProject",
    products: "Products",
    spaces: "Spaces",
    units: "Units",
    mainObject: "MainObject"
  };

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

  var typesParserMap = {};

  function newObject(ifcObject) {
    typesParserMap[ifcTypes[ifcObject[namedProps.ifcClass]]] = ifcObject;
  }

  function parserByType(ifcType) {
    return typesParserMap[ifcType];
  }

  var ifcDataTypes = {
    asterisk: "Asterisk",
    anything: "Anything",
    bool: "Boolean",
    date: "Date",
    "default": "DefaultValue",
    "enum": "Enum",
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

  var _newObject, _newObject2, _newObject3, _newObject4, _newObject5, _newObject6, _newObject7, _newObject8, _newObject9, _newObject10, _newObject11, _newObject12, _newObject13, _newObject14, _newObject15, _newObject16, _newObject17, _newObject18, _newObject19, _newObject20, _newObject21, _newObject22, _newObject23;
  newObject((_newObject = {}, _defineProperty(_newObject, namedProps.ifcClass, getName(ifcTypes.IfcMappedItem)), _defineProperty(_newObject, namedProps.mappingSource, ifcDataTypes.id), _defineProperty(_newObject, namedProps.mappingTarget, ifcDataTypes.id), _newObject));
  newObject((_newObject2 = {}, _defineProperty(_newObject2, namedProps.ifcClass, getName(ifcTypes.IfcWall)), _defineProperty(_newObject2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2, "Name", ifcDataTypes.text), _defineProperty(_newObject2, "Description", ifcDataTypes.text), _defineProperty(_newObject2, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject2, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject2, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject2, "Tag", ifcDataTypes.text), _newObject2));
  newObject((_newObject3 = {}, _defineProperty(_newObject3, namedProps.ifcClass, getName(ifcTypes.IfcBeam)), _defineProperty(_newObject3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3, "Name", ifcDataTypes.text), _defineProperty(_newObject3, "Description", ifcDataTypes.text), _defineProperty(_newObject3, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject3, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject3, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject3, "Tag", ifcDataTypes.text), _newObject3));
  newObject((_newObject4 = {}, _defineProperty(_newObject4, namedProps.ifcClass, getName(ifcTypes.IfcFooting)), _defineProperty(_newObject4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4, "Name", ifcDataTypes.text), _defineProperty(_newObject4, "Description", ifcDataTypes.text), _defineProperty(_newObject4, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject4, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject4, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject4, "Tag", ifcDataTypes.text), _defineProperty(_newObject4, "PredefinedType", ifcDataTypes["enum"]), _newObject4));
  newObject((_newObject5 = {}, _defineProperty(_newObject5, namedProps.ifcClass, getName(ifcTypes.IfcWallStandardCase)), _defineProperty(_newObject5, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5, "Name", ifcDataTypes.text), _defineProperty(_newObject5, "Description", ifcDataTypes.text), _defineProperty(_newObject5, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject5, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject5, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject5, "Tag", ifcDataTypes.text), _newObject5));
  newObject((_newObject6 = {}, _defineProperty(_newObject6, namedProps.ifcClass, getName(ifcTypes.IfcCurtainWall)), _defineProperty(_newObject6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject6, "Name", ifcDataTypes.text), _defineProperty(_newObject6, "Description", ifcDataTypes.text), _defineProperty(_newObject6, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject6, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject6, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject6, "Tag", ifcDataTypes.text), _newObject6));
  newObject((_newObject7 = {}, _defineProperty(_newObject7, namedProps.ifcClass, getName(ifcTypes.IfcDoor)), _defineProperty(_newObject7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject7, "Name", ifcDataTypes.text), _defineProperty(_newObject7, "Description", ifcDataTypes.text), _defineProperty(_newObject7, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject7, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject7, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject7, "Tag", ifcDataTypes.text), _defineProperty(_newObject7, "OverallHeight", ifcDataTypes.number), _defineProperty(_newObject7, "OverallWidth", ifcDataTypes.number), _newObject7));
  newObject((_newObject8 = {}, _defineProperty(_newObject8, namedProps.ifcClass, getName(ifcTypes.IfcRailing)), _defineProperty(_newObject8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject8, "Name", ifcDataTypes.text), _defineProperty(_newObject8, "Description", ifcDataTypes.text), _defineProperty(_newObject8, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject8, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject8, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject8, "Tag", ifcDataTypes.text), _defineProperty(_newObject8, "PredefinedType", ifcDataTypes["enum"]), _newObject8));
  newObject((_newObject9 = {}, _defineProperty(_newObject9, namedProps.ifcClass, getName(ifcTypes.IfcPlate)), _defineProperty(_newObject9, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject9, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject9, "Name", ifcDataTypes.text), _defineProperty(_newObject9, "Description", ifcDataTypes.text), _defineProperty(_newObject9, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject9, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject9, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject9, "Tag", ifcDataTypes.text), _newObject9));
  newObject((_newObject10 = {}, _defineProperty(_newObject10, namedProps.ifcClass, getName(ifcTypes.IfcMember)), _defineProperty(_newObject10, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject10, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject10, "Name", ifcDataTypes.text), _defineProperty(_newObject10, "Description", ifcDataTypes.text), _defineProperty(_newObject10, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject10, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject10, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject10, "Tag", ifcDataTypes.text), _newObject10));
  newObject((_newObject11 = {}, _defineProperty(_newObject11, namedProps.ifcClass, getName(ifcTypes.IfcSlab)), _defineProperty(_newObject11, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject11, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject11, "Name", ifcDataTypes.text), _defineProperty(_newObject11, "Description", ifcDataTypes.text), _defineProperty(_newObject11, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject11, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject11, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject11, "Tag", ifcDataTypes.text), _defineProperty(_newObject11, "PredefinedType", ifcDataTypes["enum"]), _newObject11));
  newObject((_newObject12 = {}, _defineProperty(_newObject12, namedProps.ifcClass, getName(ifcTypes.IfcOpeningElement)), _defineProperty(_newObject12, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject12, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject12, "Name", ifcDataTypes.text), _defineProperty(_newObject12, "Description", ifcDataTypes.text), _defineProperty(_newObject12, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject12, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject12, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject12, "Tag", ifcDataTypes.text), _newObject12));
  newObject((_newObject13 = {}, _defineProperty(_newObject13, namedProps.ifcClass, getName(ifcTypes.IfcWindow)), _defineProperty(_newObject13, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject13, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject13, "Name", ifcDataTypes.text), _defineProperty(_newObject13, "Description", ifcDataTypes.text), _defineProperty(_newObject13, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject13, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject13, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject13, "Tag", ifcDataTypes.text), _defineProperty(_newObject13, "OverallHeight", ifcDataTypes.number), _defineProperty(_newObject13, "OverallWidth", ifcDataTypes.number), _newObject13));
  newObject((_newObject14 = {}, _defineProperty(_newObject14, namedProps.ifcClass, getName(ifcTypes.IfcStair)), _defineProperty(_newObject14, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject14, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject14, "Name", ifcDataTypes.text), _defineProperty(_newObject14, "Description", ifcDataTypes.text), _defineProperty(_newObject14, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject14, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject14, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject14, "Tag", ifcDataTypes.text), _defineProperty(_newObject14, "ShapeType", ifcDataTypes["enum"]), _newObject14));
  newObject((_newObject15 = {}, _defineProperty(_newObject15, namedProps.ifcClass, getName(ifcTypes.IfcRoof)), _defineProperty(_newObject15, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject15, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject15, "Name", ifcDataTypes.text), _defineProperty(_newObject15, "Description", ifcDataTypes.text), _defineProperty(_newObject15, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject15, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject15, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject15, "Tag", ifcDataTypes.text), _defineProperty(_newObject15, "ShapeType", ifcDataTypes["enum"]), _newObject15));
  newObject((_newObject16 = {}, _defineProperty(_newObject16, namedProps.ifcClass, getName(ifcTypes.IfcColumn)), _defineProperty(_newObject16, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject16, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject16, "Name", ifcDataTypes.text), _defineProperty(_newObject16, "Description", ifcDataTypes.text), _defineProperty(_newObject16, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject16, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject16, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject16, "Tag", ifcDataTypes.text), _newObject16));
  newObject((_newObject17 = {}, _defineProperty(_newObject17, namedProps.ifcClass, getName(ifcTypes.IfcStairFlight)), _defineProperty(_newObject17, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject17, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject17, "Name", ifcDataTypes.text), _defineProperty(_newObject17, "Description", ifcDataTypes.text), _defineProperty(_newObject17, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject17, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject17, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject17, "Tag", ifcDataTypes.text), _defineProperty(_newObject17, "NumberOfRiser", ifcDataTypes.number), _defineProperty(_newObject17, "NumberOfThreads", ifcDataTypes.number), _defineProperty(_newObject17, "RiserHeight", ifcDataTypes.number), _defineProperty(_newObject17, "TreadLength", ifcDataTypes.number), _newObject17));
  newObject((_newObject18 = {}, _defineProperty(_newObject18, namedProps.ifcClass, getName(ifcTypes.IfcFlowTerminal)), _defineProperty(_newObject18, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject18, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject18, "Name", ifcDataTypes.text), _defineProperty(_newObject18, "Description", ifcDataTypes.text), _defineProperty(_newObject18, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject18, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject18, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject18, "Tag", ifcDataTypes.text), _newObject18));
  newObject((_newObject19 = {}, _defineProperty(_newObject19, namedProps.ifcClass, getName(ifcTypes.IfcFurnishingElement)), _defineProperty(_newObject19, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject19, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject19, "Name", ifcDataTypes.text), _defineProperty(_newObject19, "Description", ifcDataTypes.text), _defineProperty(_newObject19, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject19, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject19, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject19, "Tag", ifcDataTypes.text), _newObject19));
  newObject((_newObject20 = {}, _defineProperty(_newObject20, namedProps.ifcClass, getName(ifcTypes.IfcCovering)), _defineProperty(_newObject20, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject20, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject20, "Name", ifcDataTypes.text), _defineProperty(_newObject20, "Description", ifcDataTypes.text), _defineProperty(_newObject20, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject20, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject20, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject20, "Tag", ifcDataTypes.text), _defineProperty(_newObject20, "PredefinedType", ifcDataTypes["enum"]), _newObject20));
  newObject((_newObject21 = {}, _defineProperty(_newObject21, namedProps.ifcClass, getName(ifcTypes.IfcBuildingElementProxy)), _defineProperty(_newObject21, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject21, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject21, "Name", ifcDataTypes.text), _defineProperty(_newObject21, "Description", ifcDataTypes.text), _defineProperty(_newObject21, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject21, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject21, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject21, "Tag", ifcDataTypes.text), _defineProperty(_newObject21, "CompositionType", ifcDataTypes["enum"]), _newObject21));
  newObject((_newObject22 = {}, _defineProperty(_newObject22, namedProps.ifcClass, getName(ifcTypes.IfcEquipmentElement)), _defineProperty(_newObject22, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject22, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject22, "Name", ifcDataTypes.text), _defineProperty(_newObject22, "Description", ifcDataTypes.text), _defineProperty(_newObject22, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject22, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject22, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject22, "Tag", ifcDataTypes.text), _newObject22));
  newObject((_newObject23 = {}, _defineProperty(_newObject23, namedProps.ifcClass, getName(ifcTypes.IfcAnnotation)), _defineProperty(_newObject23, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject23, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject23, "Name", ifcDataTypes.text), _defineProperty(_newObject23, "Description", ifcDataTypes.text), _defineProperty(_newObject23, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject23, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject23, namedProps.representation, ifcDataTypes.id), _newObject23));

  var _newObject$1, _newObject2$1;
  newObject((_newObject$1 = {}, _defineProperty(_newObject$1, namedProps.ifcClass, getName(ifcTypes.IfcClassification)), _defineProperty(_newObject$1, "Source", ifcDataTypes.text), _defineProperty(_newObject$1, "Edition", ifcDataTypes.text), _defineProperty(_newObject$1, "EditionDate", ifcDataTypes.id), _defineProperty(_newObject$1, "Name", ifcDataTypes.text), _newObject$1));
  newObject((_newObject2$1 = {}, _defineProperty(_newObject2$1, namedProps.ifcClass, getName(ifcTypes.IfcClassificationReference)), _defineProperty(_newObject2$1, "Location", ifcDataTypes.text), _defineProperty(_newObject2$1, "ItemReference", ifcDataTypes.text), _defineProperty(_newObject2$1, "Name", ifcDataTypes.text), _defineProperty(_newObject2$1, "ReferencedSource", ifcDataTypes.id), _newObject2$1));

  var _newObject$2, _newObject2$2, _newObject3$1, _newObject4$1, _newObject5$1;
  newObject((_newObject$2 = {}, _defineProperty(_newObject$2, namedProps.ifcClass, getName(ifcTypes.IfcGeometricRepresentationContext)), _defineProperty(_newObject$2, "ContextIdentifier", ifcDataTypes.text), _defineProperty(_newObject$2, "ContextType", ifcDataTypes.text), _defineProperty(_newObject$2, "CoordinateSpaceDimension", ifcDataTypes.number), _defineProperty(_newObject$2, "Precision", ifcDataTypes.number), _defineProperty(_newObject$2, "WorldCoordinateSystem", ifcDataTypes.id), _defineProperty(_newObject$2, "TrueNorth", ifcDataTypes.id), _newObject$2));
  newObject((_newObject2$2 = {}, _defineProperty(_newObject2$2, namedProps.ifcClass, getName(ifcTypes.IfcGeometricRepresentationSubContext)), _defineProperty(_newObject2$2, "ContextIdentifier", ifcDataTypes.text), _defineProperty(_newObject2$2, "ContextType", ifcDataTypes.text), _defineProperty(_newObject2$2, namedProps.undefined, ifcDataTypes.asterisk), _defineProperty(_newObject2$2, "ParentContext", ifcDataTypes.id), _defineProperty(_newObject2$2, "TargetScale", ifcDataTypes.value), _defineProperty(_newObject2$2, "TargetView", ifcDataTypes["enum"]), _defineProperty(_newObject2$2, "UserDefinedTargetView", ifcDataTypes.text), _newObject2$2));
  newObject((_newObject3$1 = {}, _defineProperty(_newObject3$1, namedProps.ifcClass, getName(ifcTypes.IfcGridPlacement)), _defineProperty(_newObject3$1, "PlacementLocation", ifcDataTypes.id), _defineProperty(_newObject3$1, "PlacementRefDirection", ifcDataTypes.id), _newObject3$1));
  newObject((_newObject4$1 = {}, _defineProperty(_newObject4$1, namedProps.ifcClass, getName(ifcTypes.IfcLinearPlacement)), _defineProperty(_newObject4$1, "PlacementRelTo", ifcDataTypes.id), _defineProperty(_newObject4$1, "PlacementMeasuredAlong", ifcDataTypes.id), _defineProperty(_newObject4$1, "Distance", ifcDataTypes.id), _defineProperty(_newObject4$1, "Orientation", ifcDataTypes.id), _defineProperty(_newObject4$1, "CartesianPosition", ifcDataTypes.id), _newObject4$1));
  newObject((_newObject5$1 = {}, _defineProperty(_newObject5$1, namedProps.ifcClass, getName(ifcTypes.IfcLocalPlacement)), _defineProperty(_newObject5$1, "PlacementRelTo", ifcDataTypes.id), _defineProperty(_newObject5$1, "RelativePlacement", ifcDataTypes.id), _newObject5$1));

  var _newObject$3, _newObject2$3, _newObject3$2, _newObject4$2, _newObject5$2, _newObject6$1, _newObject7$1, _newObject8$1, _newObject9$1, _newObject10$1, _newObject11$1, _newObject12$1, _newObject13$1, _newObject14$1, _newObject15$1, _newObject16$1, _newObject17$1, _newObject18$1, _newObject19$1, _newObject20$1, _newObject21$1, _newObject22$1, _newObject23$1, _newObject24, _newObject25, _newObject26, _newObject27, _newObject28, _newObject29, _newObject30, _newObject31, _newObject32, _newObject33, _newObject34, _newObject35, _newObject36, _newObject37, _newObject38, _newObject39, _newObject40;
  newObject((_newObject$3 = {}, _defineProperty(_newObject$3, namedProps.ifcClass, getName(ifcTypes.IfcAxis2Placement2D)), _defineProperty(_newObject$3, namedProps.location, ifcDataTypes.id), _defineProperty(_newObject$3, namedProps.refDirection, ifcDataTypes.id), _newObject$3));
  newObject((_newObject2$3 = {}, _defineProperty(_newObject2$3, namedProps.ifcClass, getName(ifcTypes.IfcAxis2Placement3D)), _defineProperty(_newObject2$3, namedProps.location, ifcDataTypes.id), _defineProperty(_newObject2$3, namedProps.axis, ifcDataTypes.id), _defineProperty(_newObject2$3, namedProps.refDirection, ifcDataTypes.id), _newObject2$3));
  newObject((_newObject3$2 = {}, _defineProperty(_newObject3$2, namedProps.ifcClass, getName(ifcTypes.IfcBooleanClippingResult)), _defineProperty(_newObject3$2, namedProps.operator, ifcDataTypes["enum"]), _defineProperty(_newObject3$2, namedProps.firstOperand, ifcDataTypes.id), _defineProperty(_newObject3$2, namedProps.secondOperand, ifcDataTypes.id), _newObject3$2));
  newObject((_newObject4$2 = {}, _defineProperty(_newObject4$2, namedProps.ifcClass, getName(ifcTypes.IfcEllipse)), _defineProperty(_newObject4$2, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject4$2, namedProps.semiAxis1, ifcDataTypes.number), _defineProperty(_newObject4$2, namedProps.semiAxis2, ifcDataTypes.number), _newObject4$2));
  newObject((_newObject5$2 = {}, _defineProperty(_newObject5$2, namedProps.ifcClass, getName(ifcTypes.IfcIShapeProfileDef)), _defineProperty(_newObject5$2, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject5$2, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject5$2, "Position", ifcDataTypes.id), _defineProperty(_newObject5$2, "OverallWidth", ifcDataTypes.number), _defineProperty(_newObject5$2, "OverallDepth", ifcDataTypes.number), _defineProperty(_newObject5$2, "WebThickness", ifcDataTypes.number), _defineProperty(_newObject5$2, "FlangeThickness", ifcDataTypes.number), _defineProperty(_newObject5$2, "FilletRadius", ifcDataTypes.number), _newObject5$2));
  newObject((_newObject6$1 = {}, _defineProperty(_newObject6$1, namedProps.ifcClass, getName(ifcTypes.IfcCartesianPoint)), _defineProperty(_newObject6$1, namedProps.coordinates, ifcDataTypes.numSet), _newObject6$1));
  newObject((_newObject7$1 = {}, _defineProperty(_newObject7$1, namedProps.ifcClass, getName(ifcTypes.IfcConnectionSurfaceGeometry)), _defineProperty(_newObject7$1, "SurfaceOnRelatingElement", ifcDataTypes.id), _defineProperty(_newObject7$1, "SurfaceOnRelatedElement", ifcDataTypes.id), _newObject7$1));
  newObject((_newObject8$1 = {}, _defineProperty(_newObject8$1, namedProps.ifcClass, getName(ifcTypes.IfcCurveBoundedPlane)), _defineProperty(_newObject8$1, "BasisSurface", ifcDataTypes.id), _defineProperty(_newObject8$1, "OuterBoundary", ifcDataTypes.id), _defineProperty(_newObject8$1, "InnerBoundaries", ifcDataTypes.idSet), _newObject8$1));
  newObject((_newObject9$1 = {}, _defineProperty(_newObject9$1, namedProps.ifcClass, getName(ifcTypes.IfcDirection)), _defineProperty(_newObject9$1, namedProps.dirRatios, ifcDataTypes.numSet), _newObject9$1));
  newObject((_newObject10$1 = {}, _defineProperty(_newObject10$1, namedProps.ifcClass, getName(ifcTypes.IfcExtrudedAreaSolid)), _defineProperty(_newObject10$1, namedProps.sweptArea, ifcDataTypes.id), _defineProperty(_newObject10$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject10$1, namedProps.extDirection, ifcDataTypes.id), _defineProperty(_newObject10$1, namedProps.depth, ifcDataTypes.number), _newObject10$1));
  newObject((_newObject11$1 = {}, _defineProperty(_newObject11$1, namedProps.ifcClass, getName(ifcTypes.IfcPlane)), _defineProperty(_newObject11$1, "Position", ifcDataTypes.id), _newObject11$1));
  newObject((_newObject12$1 = {}, _defineProperty(_newObject12$1, namedProps.ifcClass, getName(ifcTypes.IfcPolygonalBoundedHalfSpace)), _defineProperty(_newObject12$1, namedProps.baseSurface, ifcDataTypes.id), _defineProperty(_newObject12$1, namedProps.agreementFlag, ifcDataTypes.bool), _defineProperty(_newObject12$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject12$1, namedProps.polygonalBoundary, ifcDataTypes.id), _newObject12$1));
  newObject((_newObject13$1 = {}, _defineProperty(_newObject13$1, namedProps.ifcClass, getName(ifcTypes.IfcPolyline)), _defineProperty(_newObject13$1, namedProps.points, ifcDataTypes.idSet), _newObject13$1));
  newObject((_newObject14$1 = {}, _defineProperty(_newObject14$1, namedProps.ifcClass, getName(ifcTypes.IfcProductDefinitionShape)), _defineProperty(_newObject14$1, "Description", ifcDataTypes.text), _defineProperty(_newObject14$1, namedProps.representationType, ifcDataTypes.text), _defineProperty(_newObject14$1, namedProps.representations, ifcDataTypes.idSet), _newObject14$1));
  newObject((_newObject15$1 = {}, _defineProperty(_newObject15$1, namedProps.ifcClass, getName(ifcTypes.IfcRectangleProfileDef)), _defineProperty(_newObject15$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject15$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject15$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject15$1, namedProps.xDim, ifcDataTypes.number), _defineProperty(_newObject15$1, namedProps.yDim, ifcDataTypes.number), _newObject15$1));
  newObject((_newObject16$1 = {}, _defineProperty(_newObject16$1, namedProps.ifcClass, getName(ifcTypes.IfcCircleProfileDef)), _defineProperty(_newObject16$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject16$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject16$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject16$1, namedProps.radius, ifcDataTypes.number), _newObject16$1));
  newObject((_newObject17$1 = {}, _defineProperty(_newObject17$1, namedProps.ifcClass, getName(ifcTypes.IfcCircleHollowProfileDef)), _defineProperty(_newObject17$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject17$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject17$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject17$1, namedProps.radius, ifcDataTypes.number), _defineProperty(_newObject17$1, namedProps.wallThickness, ifcDataTypes.number), _newObject17$1));
  newObject((_newObject18$1 = {}, _defineProperty(_newObject18$1, namedProps.ifcClass, getName(ifcTypes.IfcArbitraryProfileDefWithVoids)), _defineProperty(_newObject18$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject18$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject18$1, namedProps.outerCurve, ifcDataTypes.id), _defineProperty(_newObject18$1, namedProps.innerCurves, ifcDataTypes.idSet), _newObject18$1));
  newObject((_newObject19$1 = {}, _defineProperty(_newObject19$1, namedProps.ifcClass, getName(ifcTypes.IfcArbitraryClosedProfileDef)), _defineProperty(_newObject19$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject19$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject19$1, namedProps.outerCurve, ifcDataTypes.id), _newObject19$1));
  newObject((_newObject20$1 = {}, _defineProperty(_newObject20$1, namedProps.ifcClass, getName(ifcTypes.IfcShapeRepresentation)), _defineProperty(_newObject20$1, "ContextOfItems", ifcDataTypes.id), _defineProperty(_newObject20$1, "RepresentationIdentifier", ifcDataTypes.text), _defineProperty(_newObject20$1, namedProps.representationType, ifcDataTypes.text), _defineProperty(_newObject20$1, namedProps.items, ifcDataTypes.idSet), _newObject20$1));
  newObject((_newObject21$1 = {}, _defineProperty(_newObject21$1, namedProps.ifcClass, getName(ifcTypes.IfcFaceOuterBound)), _defineProperty(_newObject21$1, namedProps.bound, ifcDataTypes.id), _defineProperty(_newObject21$1, namedProps.orientation, ifcDataTypes.bool), _newObject21$1));
  newObject((_newObject22$1 = {}, _defineProperty(_newObject22$1, namedProps.ifcClass, getName(ifcTypes.IfcFaceBound)), _defineProperty(_newObject22$1, namedProps.bound, ifcDataTypes.id), _defineProperty(_newObject22$1, namedProps.orientation, ifcDataTypes.bool), _newObject22$1));
  newObject((_newObject23$1 = {}, _defineProperty(_newObject23$1, namedProps.ifcClass, getName(ifcTypes.IfcFace)), _defineProperty(_newObject23$1, namedProps.bounds, ifcDataTypes.idSet), _newObject23$1));
  newObject((_newObject24 = {}, _defineProperty(_newObject24, namedProps.ifcClass, getName(ifcTypes.IfcPolyLoop)), _defineProperty(_newObject24, namedProps.polygon, ifcDataTypes.idSet), _newObject24));
  newObject((_newObject25 = {}, _defineProperty(_newObject25, namedProps.ifcClass, getName(ifcTypes.IfcClosedShell)), _defineProperty(_newObject25, namedProps.cfsFaces, ifcDataTypes.idSet), _newObject25));
  newObject((_newObject26 = {}, _defineProperty(_newObject26, namedProps.ifcClass, getName(ifcTypes.IfcFacetedBrep)), _defineProperty(_newObject26, namedProps.outer, ifcDataTypes.id), _newObject26));
  newObject((_newObject27 = {}, _defineProperty(_newObject27, namedProps.ifcClass, getName(ifcTypes.IfcCartesianTransformationOperator3D)), _defineProperty(_newObject27, namedProps.axis1, ifcDataTypes.id), _defineProperty(_newObject27, namedProps.axis2, ifcDataTypes.id), _defineProperty(_newObject27, namedProps.localOrigin, ifcDataTypes.id), _defineProperty(_newObject27, namedProps.scale, ifcDataTypes.number), _defineProperty(_newObject27, namedProps.axis3, ifcDataTypes.id), _newObject27));
  newObject((_newObject28 = {}, _defineProperty(_newObject28, namedProps.ifcClass, getName(ifcTypes.IfcSurfaceOfLinearExtrusion)), _defineProperty(_newObject28, "SweptCurve", ifcDataTypes.id), _defineProperty(_newObject28, "Position", ifcDataTypes.id), _defineProperty(_newObject28, "ExtrudedDirection", ifcDataTypes.id), _defineProperty(_newObject28, "Depth", ifcDataTypes.number), _newObject28));
  newObject((_newObject29 = {}, _defineProperty(_newObject29, namedProps.ifcClass, getName(ifcTypes.IfcArbitraryOpenProfileDef)), _defineProperty(_newObject29, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject29, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject29, "Curve", ifcDataTypes.id), _newObject29));
  newObject((_newObject30 = {}, _defineProperty(_newObject30, namedProps.ifcClass, getName(ifcTypes.IfcGeometricSet)), _defineProperty(_newObject30, "Elements", ifcDataTypes.idSet), _newObject30));
  newObject((_newObject31 = {}, _defineProperty(_newObject31, namedProps.ifcClass, getName(ifcTypes.IfcGeometricCurveSet)), _defineProperty(_newObject31, namedProps.elements, ifcDataTypes.idSet), _newObject31));
  newObject((_newObject32 = {}, _defineProperty(_newObject32, namedProps.ifcClass, getName(ifcTypes.IfcConnectedFaceSet)), _defineProperty(_newObject32, "CfsFaces", ifcDataTypes.idSet), _newObject32));
  newObject((_newObject33 = {}, _defineProperty(_newObject33, namedProps.ifcClass, getName(ifcTypes.IfcFaceBasedSurfaceModel)), _defineProperty(_newObject33, "FbsmFaces", ifcDataTypes.idSet), _newObject33));
  newObject((_newObject34 = {}, _defineProperty(_newObject34, namedProps.ifcClass, getName(ifcTypes.IfcHalfSpaceSolid)), _defineProperty(_newObject34, namedProps.baseSurface, ifcDataTypes.id), _defineProperty(_newObject34, namedProps.agreementFlag, ifcDataTypes.bool), _newObject34));
  newObject((_newObject35 = {}, _defineProperty(_newObject35, namedProps.ifcClass, getName(ifcTypes.IfcCompositeCurveSegment)), _defineProperty(_newObject35, "Transition", ifcDataTypes["enum"]), _defineProperty(_newObject35, "SameSense", ifcDataTypes.bool), _defineProperty(_newObject35, namedProps.parentCurve, ifcDataTypes.id), _newObject35));
  newObject((_newObject36 = {}, _defineProperty(_newObject36, namedProps.ifcClass, getName(ifcTypes.IfcCircle)), _defineProperty(_newObject36, "Position", ifcDataTypes.id), _defineProperty(_newObject36, "Radius", ifcDataTypes.number), _newObject36));
  newObject((_newObject37 = {}, _defineProperty(_newObject37, namedProps.ifcClass, getName(ifcTypes.IfcTrimmedCurve)), _defineProperty(_newObject37, namedProps.basisCurve, ifcDataTypes.id), _defineProperty(_newObject37, namedProps.trim1, ifcDataTypes.valueSet), _defineProperty(_newObject37, namedProps.trim2, ifcDataTypes.valueSet), _defineProperty(_newObject37, namedProps.senseAgreement, ifcDataTypes.bool), _defineProperty(_newObject37, "MasterRepresentation", ifcDataTypes["enum"]), _newObject37));
  newObject((_newObject38 = {}, _defineProperty(_newObject38, namedProps.ifcClass, getName(ifcTypes.IfcCompositeCurve)), _defineProperty(_newObject38, namedProps.segments, ifcDataTypes.idSet), _defineProperty(_newObject38, "SelfIntersect", ifcDataTypes.bool), _newObject38));
  newObject((_newObject39 = {}, _defineProperty(_newObject39, namedProps.ifcClass, getName(ifcTypes.IfcBoundingBox)), _defineProperty(_newObject39, namedProps.corner, ifcDataTypes.id), _defineProperty(_newObject39, namedProps.xDim, ifcDataTypes.number), _defineProperty(_newObject39, namedProps.yDim, ifcDataTypes.number), _defineProperty(_newObject39, namedProps.zDim, ifcDataTypes.number), _newObject39));
  newObject((_newObject40 = {}, _defineProperty(_newObject40, namedProps.ifcClass, getName(ifcTypes.IfcPlanarExtent)), _defineProperty(_newObject40, "SizeInX", ifcDataTypes.number), _defineProperty(_newObject40, "SizeInY", ifcDataTypes.number), _newObject40));

  var _newObject$4, _newObject2$4, _newObject3$3, _newObject4$3, _newObject5$3, _newObject6$2;
  newObject((_newObject$4 = {}, _defineProperty(_newObject$4, namedProps.ifcClass, getName(ifcTypes.IfcApplication)), _defineProperty(_newObject$4, "ApplicationDeveloper", ifcDataTypes.id), _defineProperty(_newObject$4, "Version", ifcDataTypes.text), _defineProperty(_newObject$4, "ApplicationFullName", ifcDataTypes.text), _defineProperty(_newObject$4, "ApplicationIdentifier", ifcDataTypes.text), _newObject$4));
  newObject((_newObject2$4 = {}, _defineProperty(_newObject2$4, namedProps.ifcClass, getName(ifcTypes.IfcOrganization)), _defineProperty(_newObject2$4, "Identification", ifcDataTypes.text), _defineProperty(_newObject2$4, "Name", ifcDataTypes.text), _defineProperty(_newObject2$4, "Description", ifcDataTypes.text), _defineProperty(_newObject2$4, "Roles", ifcDataTypes.idSet), _defineProperty(_newObject2$4, "Addresses", ifcDataTypes.idSet), _newObject2$4));
  newObject((_newObject3$3 = {}, _defineProperty(_newObject3$3, namedProps.ifcClass, getName(ifcTypes.IfcOwnerHistory)), _defineProperty(_newObject3$3, "OwningUser", ifcDataTypes.id), _defineProperty(_newObject3$3, "OwningApplication", ifcDataTypes.id), _defineProperty(_newObject3$3, "State", ifcDataTypes["enum"]), _defineProperty(_newObject3$3, "ChangeAction", ifcDataTypes["enum"]), _defineProperty(_newObject3$3, "LastModifiedDate", ifcDataTypes.date), _defineProperty(_newObject3$3, "LastModifyingUser", ifcDataTypes.id), _defineProperty(_newObject3$3, "LastModifyingApplication", ifcDataTypes.id), _defineProperty(_newObject3$3, "CreationDate", ifcDataTypes.date), _newObject3$3));
  newObject((_newObject4$3 = {}, _defineProperty(_newObject4$3, namedProps.ifcClass, getName(ifcTypes.IfcPerson)), _defineProperty(_newObject4$3, "Identification", ifcDataTypes.text), _defineProperty(_newObject4$3, "FamilyName", ifcDataTypes.text), _defineProperty(_newObject4$3, "GivenName", ifcDataTypes.text), _defineProperty(_newObject4$3, "MiddleNames", ifcDataTypes.textSet), _defineProperty(_newObject4$3, "PrefixTitles", ifcDataTypes.textSet), _defineProperty(_newObject4$3, "SuffixTitles", ifcDataTypes.textSet), _defineProperty(_newObject4$3, "Roles", ifcDataTypes.idSet), _defineProperty(_newObject4$3, "Addresses", ifcDataTypes.idSet), _newObject4$3));
  newObject((_newObject5$3 = {}, _defineProperty(_newObject5$3, namedProps.ifcClass, getName(ifcTypes.IfcPersonAndOrganization)), _defineProperty(_newObject5$3, "ThePerson", ifcDataTypes.id), _defineProperty(_newObject5$3, "TheOrganization", ifcDataTypes.id), _defineProperty(_newObject5$3, "Roles", ifcDataTypes.idSet), _newObject5$3));
  newObject((_newObject6$2 = {}, _defineProperty(_newObject6$2, namedProps.ifcClass, getName(ifcTypes.IfcPostalAddress)), _defineProperty(_newObject6$2, "Purpose", ifcDataTypes["enum"]), _defineProperty(_newObject6$2, "Description", ifcDataTypes.text), _defineProperty(_newObject6$2, "UserDefinedPurpose", ifcDataTypes.text), _defineProperty(_newObject6$2, "InternalLocation", ifcDataTypes.text), _defineProperty(_newObject6$2, "AddressLines", ifcDataTypes.textSet), _defineProperty(_newObject6$2, "PostalBox", ifcDataTypes.text), _defineProperty(_newObject6$2, "Town", ifcDataTypes.text), _defineProperty(_newObject6$2, "Region", ifcDataTypes.text), _defineProperty(_newObject6$2, "PostalCode", ifcDataTypes.text), _defineProperty(_newObject6$2, "Country", ifcDataTypes.text), _newObject6$2));

  var _newObject$5, _newObject2$5, _newObject3$4, _newObject4$4, _newObject5$4;
  newObject((_newObject$5 = {}, _defineProperty(_newObject$5, namedProps.ifcClass, getName(ifcTypes.IfcMaterial)), _defineProperty(_newObject$5, "Name", ifcDataTypes.text), _newObject$5));
  newObject((_newObject2$5 = {}, _defineProperty(_newObject2$5, namedProps.ifcClass, getName(ifcTypes.IfcMaterialLayer)), _defineProperty(_newObject2$5, "Material", ifcDataTypes.id), _defineProperty(_newObject2$5, "LayerThickness", ifcDataTypes.number), _defineProperty(_newObject2$5, "IsVentilated", ifcDataTypes.value), _newObject2$5));
  newObject((_newObject3$4 = {}, _defineProperty(_newObject3$4, namedProps.ifcClass, getName(ifcTypes.IfcMaterialLayerSet)), _defineProperty(_newObject3$4, "MaterialLayers", ifcDataTypes.idSet), _defineProperty(_newObject3$4, "LayerSetName", ifcDataTypes.text), _newObject3$4));
  newObject((_newObject4$4 = {}, _defineProperty(_newObject4$4, namedProps.ifcClass, getName(ifcTypes.IfcMaterialLayerSetUsage)), _defineProperty(_newObject4$4, "ForLayerSet", ifcDataTypes.id), _defineProperty(_newObject4$4, "LayerSetDirection", ifcDataTypes["enum"]), _defineProperty(_newObject4$4, "DirectionSense", ifcDataTypes["enum"]), _defineProperty(_newObject4$4, "OffsetFromReferenceLine", ifcDataTypes.number), _newObject4$4));
  newObject((_newObject5$4 = {}, _defineProperty(_newObject5$4, namedProps.ifcClass, getName(ifcTypes.IfcMaterialList)), _defineProperty(_newObject5$4, "Materials", ifcDataTypes.idSet), _newObject5$4));

  var _newObject$6, _newObject2$6, _newObject3$5, _newObject4$5, _newObject5$5, _newObject6$3, _newObject7$2, _newObject8$2, _newObject9$2, _newObject10$2, _newObject11$2, _newObject12$2, _newObject13$2, _newObject14$2, _newObject15$2, _newObject16$2, _newObject17$2, _newObject18$2, _newObject19$2, _newObject20$2, _newObject21$2;
  newObject((_newObject$6 = {}, _defineProperty(_newObject$6, namedProps.ifcClass, getName(ifcTypes.IfcColourRgb)), _defineProperty(_newObject$6, "Name", ifcDataTypes.text), _defineProperty(_newObject$6, "Red", ifcDataTypes.number), _defineProperty(_newObject$6, "Green", ifcDataTypes.number), _defineProperty(_newObject$6, "Blue", ifcDataTypes.number), _newObject$6));
  newObject((_newObject2$6 = {}, _defineProperty(_newObject2$6, namedProps.ifcClass, getName(ifcTypes.IfcCurveStyleFontPattern)), _defineProperty(_newObject2$6, "VisibleSegmentLength", ifcDataTypes.number), _defineProperty(_newObject2$6, "InvisibleSegmentLength", ifcDataTypes.number), _newObject2$6));
  newObject((_newObject3$5 = {}, _defineProperty(_newObject3$5, namedProps.ifcClass, getName(ifcTypes.IfcCurveStyle)), _defineProperty(_newObject3$5, "Name", ifcDataTypes.text), _defineProperty(_newObject3$5, "CurveFont", ifcDataTypes.id), _defineProperty(_newObject3$5, "CurveWidth", ifcDataTypes.value), _defineProperty(_newObject3$5, "CurveColour", ifcDataTypes.id), _newObject3$5));
  newObject((_newObject4$5 = {}, _defineProperty(_newObject4$5, namedProps.ifcClass, getName(ifcTypes.IfcFillAreaStyle)), _defineProperty(_newObject4$5, "Name", ifcDataTypes.text), _defineProperty(_newObject4$5, "FillStyles", ifcDataTypes.idSet), _newObject4$5));
  newObject((_newObject5$5 = {}, _defineProperty(_newObject5$5, namedProps.ifcClass, getName(ifcTypes.IfcFillAreaStyleHatching)), _defineProperty(_newObject5$5, "HatchLineAppearance", ifcDataTypes.id), _defineProperty(_newObject5$5, "StartOfNextHatchLine", ifcDataTypes.value), _defineProperty(_newObject5$5, "PointOfReferenceHatchLine", ifcDataTypes.id), _defineProperty(_newObject5$5, "PatternStart", ifcDataTypes.id), _defineProperty(_newObject5$5, "HatchLineAngle", ifcDataTypes.number), _newObject5$5));
  newObject((_newObject6$3 = {}, _defineProperty(_newObject6$3, namedProps.ifcClass, getName(ifcTypes.IfcCurveStyleFont)), _defineProperty(_newObject6$3, "Name", ifcDataTypes.text), _defineProperty(_newObject6$3, "PatternList", ifcDataTypes.idSet), _newObject6$3));
  newObject((_newObject7$2 = {}, _defineProperty(_newObject7$2, namedProps.ifcClass, getName(ifcTypes.IfcDraughtingPreDefinedCurveFont)), _defineProperty(_newObject7$2, "Name", ifcDataTypes.text), _newObject7$2));
  newObject((_newObject8$2 = {}, _defineProperty(_newObject8$2, namedProps.ifcClass, getName(ifcTypes.IfcMaterialDefinitionRepresentation)), _defineProperty(_newObject8$2, "Name", ifcDataTypes.text), _defineProperty(_newObject8$2, "Description", ifcDataTypes.text), _defineProperty(_newObject8$2, namedProps.representations, ifcDataTypes.idSet), _defineProperty(_newObject8$2, "RepresentedMaterial", ifcDataTypes.id), _newObject8$2));
  newObject((_newObject9$2 = {}, _defineProperty(_newObject9$2, namedProps.ifcClass, getName(ifcTypes.IfcPresentationStyleAssignment)), _defineProperty(_newObject9$2, "Styles", ifcDataTypes.idSet), _newObject9$2));
  newObject((_newObject10$2 = {}, _defineProperty(_newObject10$2, namedProps.ifcClass, getName(ifcTypes.IfcStyledItem)), _defineProperty(_newObject10$2, "Item", ifcDataTypes.id), _defineProperty(_newObject10$2, "Styles", ifcDataTypes.idSet), _defineProperty(_newObject10$2, "Name", ifcDataTypes.id), _newObject10$2));
  newObject((_newObject11$2 = {}, _defineProperty(_newObject11$2, namedProps.ifcClass, getName(ifcTypes.IfcStyledRepresentation)), _defineProperty(_newObject11$2, "ContextOfItems", ifcDataTypes.id), _defineProperty(_newObject11$2, "RepresentationIdentifier", ifcDataTypes.text), _defineProperty(_newObject11$2, namedProps.representationType, ifcDataTypes.text), _defineProperty(_newObject11$2, namedProps.items, ifcDataTypes.idSet), _newObject11$2));
  newObject((_newObject12$2 = {}, _defineProperty(_newObject12$2, namedProps.ifcClass, getName(ifcTypes.IfcSurfaceStyle)), _defineProperty(_newObject12$2, "Name", ifcDataTypes.text), _defineProperty(_newObject12$2, "Side", ifcDataTypes["enum"]), _defineProperty(_newObject12$2, "Styles", ifcDataTypes.idSet), _newObject12$2));
  newObject((_newObject13$2 = {}, _defineProperty(_newObject13$2, namedProps.ifcClass, getName(ifcTypes.IfcSurfaceStyleRendering)), _defineProperty(_newObject13$2, "SurfaceColour", ifcDataTypes.id), _defineProperty(_newObject13$2, "Transparency", ifcDataTypes.value), _defineProperty(_newObject13$2, "DiffuseColour", ifcDataTypes.value), _defineProperty(_newObject13$2, "TransmissionColour", ifcDataTypes.value), _defineProperty(_newObject13$2, "DiffuseTransmissionColour", ifcDataTypes.value), _defineProperty(_newObject13$2, "ReflectionColour", ifcDataTypes.value), _defineProperty(_newObject13$2, "SpecularColour", ifcDataTypes.value), _defineProperty(_newObject13$2, "SpecularHighlight", ifcDataTypes.value), _defineProperty(_newObject13$2, "ReflectanceMethod", ifcDataTypes["enum"]), _newObject13$2));
  newObject((_newObject14$2 = {}, _defineProperty(_newObject14$2, namedProps.ifcClass, getName(ifcTypes.IfcRepresentationMap)), _defineProperty(_newObject14$2, namedProps.mappingOrigin, ifcDataTypes.id), _defineProperty(_newObject14$2, namedProps.mappedRepresentation, ifcDataTypes.id), _newObject14$2));
  newObject((_newObject15$2 = {}, _defineProperty(_newObject15$2, namedProps.ifcClass, getName(ifcTypes.IfcPresentationLayerAssignment)), _defineProperty(_newObject15$2, "Name", ifcDataTypes.text), _defineProperty(_newObject15$2, "Description", ifcDataTypes.text), _defineProperty(_newObject15$2, "AssignedItems", ifcDataTypes.idSet), _defineProperty(_newObject15$2, "Identifier", ifcDataTypes.text), _newObject15$2));
  newObject((_newObject16$2 = {}, _defineProperty(_newObject16$2, namedProps.ifcClass, getName(ifcTypes.IfcSurfaceStyleShading)), _defineProperty(_newObject16$2, "SurfaceColour", ifcDataTypes.id), _newObject16$2));
  newObject((_newObject17$2 = {}, _defineProperty(_newObject17$2, namedProps.ifcClass, getName(ifcTypes.IfcTextStyleFontModel)), _defineProperty(_newObject17$2, "Name", ifcDataTypes.text), _defineProperty(_newObject17$2, "FontFamily", ifcDataTypes.textSet), _defineProperty(_newObject17$2, "FontStyle", ifcDataTypes.text), _defineProperty(_newObject17$2, "FontVariant", ifcDataTypes.text), _defineProperty(_newObject17$2, "FontWeight", ifcDataTypes.number), _defineProperty(_newObject17$2, "FontSize", ifcDataTypes.value), _newObject17$2));
  newObject((_newObject18$2 = {}, _defineProperty(_newObject18$2, namedProps.ifcClass, getName(ifcTypes.IfcTextStyleForDefinedFont)), _defineProperty(_newObject18$2, "Colour", ifcDataTypes.id), _defineProperty(_newObject18$2, "BackgroundColour", ifcDataTypes.id), _newObject18$2));
  newObject((_newObject19$2 = {}, _defineProperty(_newObject19$2, namedProps.ifcClass, getName(ifcTypes.IfcTextStyle)), _defineProperty(_newObject19$2, "Name", ifcDataTypes.text), _defineProperty(_newObject19$2, "TextCharacterAppearance", ifcDataTypes.id), _defineProperty(_newObject19$2, "TextStyle", ifcDataTypes.id), _defineProperty(_newObject19$2, "TextFontStyle", ifcDataTypes.id), _newObject19$2));
  newObject((_newObject20$2 = {}, _defineProperty(_newObject20$2, namedProps.ifcClass, getName(ifcTypes.IfcTextLiteralWithExtent)), _defineProperty(_newObject20$2, "Literal", ifcDataTypes.text), _defineProperty(_newObject20$2, "Placement", ifcDataTypes.id), _defineProperty(_newObject20$2, "Path", ifcDataTypes["enum"]), _defineProperty(_newObject20$2, "Extent", ifcDataTypes.id), _defineProperty(_newObject20$2, "BoxAlignment", ifcDataTypes.text), _newObject20$2));
  newObject((_newObject21$2 = {}, _defineProperty(_newObject21$2, namedProps.ifcClass, getName(ifcTypes.IfcAnnotationFillArea)), _defineProperty(_newObject21$2, "OuterBoundary", ifcDataTypes.id), _defineProperty(_newObject21$2, "InnerBoundaries", ifcDataTypes.idSet), _newObject21$2));

  var _newObject$7, _newObject2$7, _newObject3$6, _newObject4$6, _newObject5$6, _newObject6$4, _newObject7$3, _newObject8$3, _newObject9$3, _newObject10$3, _newObject11$3, _newObject12$3, _newObject13$3, _newObject14$3, _newObject15$3, _newObject16$3, _newObject17$3, _newObject18$3, _newObject19$3, _newObject20$3, _newObject21$3, _newObject22$2, _newObject23$2, _newObject24$1;
  newObject((_newObject$7 = {}, _defineProperty(_newObject$7, namedProps.ifcClass, getName(ifcTypes.IfcPropertySet)), _defineProperty(_newObject$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$7, "Name", ifcDataTypes.text), _defineProperty(_newObject$7, "Description", ifcDataTypes.text), _defineProperty(_newObject$7, "HasProperties", ifcDataTypes.idSet), _newObject$7));
  newObject((_newObject2$7 = {}, _defineProperty(_newObject2$7, namedProps.ifcClass, getName(ifcTypes.IfcPropertySingleValue)), _defineProperty(_newObject2$7, "Name", ifcDataTypes.text), _defineProperty(_newObject2$7, "Description", ifcDataTypes.text), _defineProperty(_newObject2$7, "NominalValue", ifcDataTypes.value), _defineProperty(_newObject2$7, "Unit", ifcDataTypes.id), _newObject2$7));
  newObject((_newObject3$6 = {}, _defineProperty(_newObject3$6, namedProps.ifcClass, getName(ifcTypes.IfcSpaceType)), _defineProperty(_newObject3$6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3$6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3$6, "Name", ifcDataTypes.text), _defineProperty(_newObject3$6, "Description", ifcDataTypes.text), _defineProperty(_newObject3$6, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject3$6, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject3$6, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject3$6, "Tag", ifcDataTypes.text), _defineProperty(_newObject3$6, "ElementType", ifcDataTypes.text), _defineProperty(_newObject3$6, "PredefinedType", ifcDataTypes["enum"]), _newObject3$6));
  newObject((_newObject4$6 = {}, _defineProperty(_newObject4$6, namedProps.ifcClass, getName(ifcTypes.IfcColumnType)), _defineProperty(_newObject4$6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4$6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4$6, "Name", ifcDataTypes.text), _defineProperty(_newObject4$6, "Description", ifcDataTypes.text), _defineProperty(_newObject4$6, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject4$6, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject4$6, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject4$6, "Tag", ifcDataTypes.text), _defineProperty(_newObject4$6, "ElementType", ifcDataTypes.text), _defineProperty(_newObject4$6, "PredefinedType", ifcDataTypes["enum"]), _newObject4$6));
  newObject((_newObject5$6 = {}, _defineProperty(_newObject5$6, namedProps.ifcClass, getName(ifcTypes.IfcPlateType)), _defineProperty(_newObject5$6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5$6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5$6, "Name", ifcDataTypes.text), _defineProperty(_newObject5$6, "Description", ifcDataTypes.text), _defineProperty(_newObject5$6, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject5$6, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject5$6, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject5$6, "Tag", ifcDataTypes.text), _defineProperty(_newObject5$6, "ElementType", ifcDataTypes.text), _defineProperty(_newObject5$6, "PredefinedType", ifcDataTypes["enum"]), _newObject5$6));
  newObject((_newObject6$4 = {}, _defineProperty(_newObject6$4, namedProps.ifcClass, getName(ifcTypes.IfcMemberType)), _defineProperty(_newObject6$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject6$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject6$4, "Name", ifcDataTypes.text), _defineProperty(_newObject6$4, "Description", ifcDataTypes.text), _defineProperty(_newObject6$4, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject6$4, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject6$4, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject6$4, "Tag", ifcDataTypes.text), _defineProperty(_newObject6$4, "ElementType", ifcDataTypes.text), _defineProperty(_newObject6$4, "PredefinedType", ifcDataTypes["enum"]), _newObject6$4));
  newObject((_newObject7$3 = {}, _defineProperty(_newObject7$3, namedProps.ifcClass, getName(ifcTypes.IfcWallType)), _defineProperty(_newObject7$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject7$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject7$3, "Name", ifcDataTypes.text), _defineProperty(_newObject7$3, "Description", ifcDataTypes.text), _defineProperty(_newObject7$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject7$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject7$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject7$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject7$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject7$3, "PredefinedType", ifcDataTypes["enum"]), _newObject7$3));
  newObject((_newObject8$3 = {}, _defineProperty(_newObject8$3, namedProps.ifcClass, getName(ifcTypes.IfcStairFlightType)), _defineProperty(_newObject8$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject8$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject8$3, "Name", ifcDataTypes.text), _defineProperty(_newObject8$3, "Description", ifcDataTypes.text), _defineProperty(_newObject8$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject8$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject8$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject8$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject8$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject8$3, "PredefinedType", ifcDataTypes["enum"]), _newObject8$3));
  newObject((_newObject9$3 = {}, _defineProperty(_newObject9$3, namedProps.ifcClass, getName(ifcTypes.IfcCoveringType)), _defineProperty(_newObject9$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject9$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject9$3, "Name", ifcDataTypes.text), _defineProperty(_newObject9$3, "Description", ifcDataTypes.text), _defineProperty(_newObject9$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject9$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject9$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject9$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject9$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject9$3, "PredefinedType", ifcDataTypes["enum"]), _newObject9$3));
  newObject((_newObject10$3 = {}, _defineProperty(_newObject10$3, namedProps.ifcClass, getName(ifcTypes.IfcCurtainWallType)), _defineProperty(_newObject10$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject10$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject10$3, "Name", ifcDataTypes.text), _defineProperty(_newObject10$3, "Description", ifcDataTypes.text), _defineProperty(_newObject10$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject10$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject10$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject10$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject10$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject10$3, "PredefinedType", ifcDataTypes["enum"]), _newObject10$3));
  newObject((_newObject11$3 = {}, _defineProperty(_newObject11$3, namedProps.ifcClass, getName(ifcTypes.IfcFurnitureType)), _defineProperty(_newObject11$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject11$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject11$3, "Name", ifcDataTypes.text), _defineProperty(_newObject11$3, "Description", ifcDataTypes.text), _defineProperty(_newObject11$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject11$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject11$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject11$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject11$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject11$3, "AssemblyPlace", ifcDataTypes["enum"]), _newObject11$3));
  newObject((_newObject12$3 = {}, _defineProperty(_newObject12$3, namedProps.ifcClass, getName(ifcTypes.IfcDoorType)), _defineProperty(_newObject12$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject12$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject12$3, "Name", ifcDataTypes.text), _defineProperty(_newObject12$3, "Description", ifcDataTypes.text), _defineProperty(_newObject12$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject12$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject12$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject12$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject12$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject12$3, "PredefinedType", ifcDataTypes["enum"]), _defineProperty(_newObject12$3, "OperationType", ifcDataTypes["enum"]), _defineProperty(_newObject12$3, "ParameterTakesPrecedence", ifcDataTypes.bool), _defineProperty(_newObject12$3, "UserDefinedOperationType", ifcDataTypes.text), _newObject12$3));
  newObject((_newObject13$3 = {}, _defineProperty(_newObject13$3, namedProps.ifcClass, getName(ifcTypes.IfcSlabType)), _defineProperty(_newObject13$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject13$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject13$3, "Name", ifcDataTypes.text), _defineProperty(_newObject13$3, "Description", ifcDataTypes.text), _defineProperty(_newObject13$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject13$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject13$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject13$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject13$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject13$3, "PredefinedType", ifcDataTypes["enum"]), _newObject13$3));
  newObject((_newObject14$3 = {}, _defineProperty(_newObject14$3, namedProps.ifcClass, getName(ifcTypes.IfcBuildingElementProxyType)), _defineProperty(_newObject14$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject14$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject14$3, "Name", ifcDataTypes.text), _defineProperty(_newObject14$3, "Description", ifcDataTypes.text), _defineProperty(_newObject14$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject14$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject14$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject14$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject14$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject14$3, "PredefinedType", ifcDataTypes["enum"]), _newObject14$3));
  newObject((_newObject15$3 = {}, _defineProperty(_newObject15$3, namedProps.ifcClass, getName(ifcTypes.IfcSanitaryTerminalType)), _defineProperty(_newObject15$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject15$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject15$3, "Name", ifcDataTypes.text), _defineProperty(_newObject15$3, "Description", ifcDataTypes.text), _defineProperty(_newObject15$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject15$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject15$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject15$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject15$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject15$3, "PredefinedType", ifcDataTypes["enum"]), _newObject15$3));
  newObject((_newObject16$3 = {}, _defineProperty(_newObject16$3, namedProps.ifcClass, getName(ifcTypes.IfcAirTerminalType)), _defineProperty(_newObject16$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject16$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject16$3, "Name", ifcDataTypes.text), _defineProperty(_newObject16$3, "Description", ifcDataTypes.text), _defineProperty(_newObject16$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject16$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject16$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject16$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject16$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject16$3, "PredefinedType", ifcDataTypes["enum"]), _newObject16$3));
  newObject((_newObject17$3 = {}, _defineProperty(_newObject17$3, namedProps.ifcClass, getName(ifcTypes.IfcLightFixtureType)), _defineProperty(_newObject17$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject17$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject17$3, "Name", ifcDataTypes.text), _defineProperty(_newObject17$3, "Description", ifcDataTypes.text), _defineProperty(_newObject17$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject17$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject17$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject17$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject17$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject17$3, "PredefinedType", ifcDataTypes["enum"]), _newObject17$3));
  newObject((_newObject18$3 = {}, _defineProperty(_newObject18$3, namedProps.ifcClass, getName(ifcTypes.IfcSystemFurnitureElementType)), _defineProperty(_newObject18$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject18$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject18$3, "Name", ifcDataTypes.text), _defineProperty(_newObject18$3, "Description", ifcDataTypes.text), _defineProperty(_newObject18$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject18$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject18$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject18$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject18$3, "ElementType", ifcDataTypes.text), _newObject18$3));
  newObject((_newObject19$3 = {}, _defineProperty(_newObject19$3, namedProps.ifcClass, getName(ifcTypes.IfcDistributionElementType)), _defineProperty(_newObject19$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject19$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject19$3, "Name", ifcDataTypes.text), _defineProperty(_newObject19$3, "Description", ifcDataTypes.text), _defineProperty(_newObject19$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject19$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject19$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject19$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject19$3, "ElementType", ifcDataTypes.text), _newObject19$3));
  newObject((_newObject20$3 = {}, _defineProperty(_newObject20$3, namedProps.ifcClass, getName(ifcTypes.IfcDoorLiningProperties)), _defineProperty(_newObject20$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject20$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject20$3, "Name", ifcDataTypes.text), _defineProperty(_newObject20$3, "Description", ifcDataTypes.text), _defineProperty(_newObject20$3, "LiningDepth", ifcDataTypes.number), _defineProperty(_newObject20$3, "LiningThickness", ifcDataTypes.number), _defineProperty(_newObject20$3, "ThresholdDepth", ifcDataTypes.number), _defineProperty(_newObject20$3, "ThresholdThickness", ifcDataTypes.number), _defineProperty(_newObject20$3, "TransomThickness", ifcDataTypes.number), _defineProperty(_newObject20$3, "TransomOffset", ifcDataTypes.number), _defineProperty(_newObject20$3, "LiningOffset", ifcDataTypes.number), _defineProperty(_newObject20$3, "ThresholdOffset", ifcDataTypes.number), _defineProperty(_newObject20$3, "CasingThickness", ifcDataTypes.number), _defineProperty(_newObject20$3, "CasingDepth", ifcDataTypes.number), _defineProperty(_newObject20$3, "ShapeAspectStyle", ifcDataTypes.id), _newObject20$3));
  newObject((_newObject21$3 = {}, _defineProperty(_newObject21$3, namedProps.ifcClass, getName(ifcTypes.IfcDoorPanelProperties)), _defineProperty(_newObject21$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject21$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject21$3, "Name", ifcDataTypes.text), _defineProperty(_newObject21$3, "Description", ifcDataTypes.text), _defineProperty(_newObject21$3, "PanelDepth", ifcDataTypes.number), _defineProperty(_newObject21$3, "PanelOperation", ifcDataTypes["enum"]), _defineProperty(_newObject21$3, "PanelWidth", ifcDataTypes.value), _defineProperty(_newObject21$3, "PanelPosition", ifcDataTypes["enum"]), _defineProperty(_newObject21$3, "ShapeAspectStyle", ifcDataTypes.id), _newObject21$3));
  newObject((_newObject22$2 = {}, _defineProperty(_newObject22$2, namedProps.ifcClass, getName(ifcTypes.IfcDoorStyle)), _defineProperty(_newObject22$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject22$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject22$2, "Name", ifcDataTypes.text), _defineProperty(_newObject22$2, "Description", ifcDataTypes.text), _defineProperty(_newObject22$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject22$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject22$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject22$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject22$2, "OperationType", ifcDataTypes["enum"]), _defineProperty(_newObject22$2, "ConstructionType", ifcDataTypes["enum"]), _defineProperty(_newObject22$2, "ParameterTakesPrecedence", ifcDataTypes.bool), _defineProperty(_newObject22$2, "Sizeable", ifcDataTypes.bool), _newObject22$2));
  newObject((_newObject23$2 = {}, _defineProperty(_newObject23$2, namedProps.ifcClass, getName(ifcTypes.IfcWindowStyle)), _defineProperty(_newObject23$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject23$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject23$2, "Name", ifcDataTypes.text), _defineProperty(_newObject23$2, "Description", ifcDataTypes.text), _defineProperty(_newObject23$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject23$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject23$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject23$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject23$2, "ConstructionType", ifcDataTypes["enum"]), _defineProperty(_newObject23$2, "OperationType", ifcDataTypes["enum"]), _defineProperty(_newObject23$2, "ParameterTakesPrecedence", ifcDataTypes.bool), _defineProperty(_newObject23$2, "Sizeable", ifcDataTypes.bool), _newObject23$2));
  newObject((_newObject24$1 = {}, _defineProperty(_newObject24$1, namedProps.ifcClass, getName(ifcTypes.IfcWindowLiningProperties)), _defineProperty(_newObject24$1, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject24$1, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject24$1, "Name", ifcDataTypes.text), _defineProperty(_newObject24$1, "Description", ifcDataTypes.text), _defineProperty(_newObject24$1, "LiningDepth", ifcDataTypes.number), _defineProperty(_newObject24$1, "LiningThickness", ifcDataTypes.number), _defineProperty(_newObject24$1, "TransomThickness", ifcDataTypes.number), _defineProperty(_newObject24$1, "MullionThickness", ifcDataTypes.number), _defineProperty(_newObject24$1, "FirstTransomOffset", ifcDataTypes.number), _defineProperty(_newObject24$1, "SecondTransomOffset", ifcDataTypes.number), _defineProperty(_newObject24$1, "FirstMullionOffset", ifcDataTypes.number), _defineProperty(_newObject24$1, "SecondMullionOffset", ifcDataTypes.number), _defineProperty(_newObject24$1, "ShapeAspectStyle", ifcDataTypes.number), _newObject24$1));

  var _newObject$8;
  newObject((_newObject$8 = {}, _defineProperty(_newObject$8, namedProps.ifcClass, getName(ifcTypes.IfcActor)), _defineProperty(_newObject$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$8, "Name", ifcDataTypes.text), _defineProperty(_newObject$8, "Description", ifcDataTypes.text), _defineProperty(_newObject$8, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject$8, "TheActor", ifcDataTypes.id), _newObject$8));

  var _newObject$9, _newObject2$8, _newObject3$7, _newObject4$7, _newObject5$7, _newObject6$5, _newObject7$4, _newObject8$4, _newObject9$4, _newObject10$4, _newObject11$4, _newObject12$4, _newObject13$4, _newObject14$4, _newObject15$4;
  newObject((_newObject$9 = {}, _defineProperty(_newObject$9, namedProps.ifcClass, getName(ifcTypes.IfcRelAggregates)), _defineProperty(_newObject$9, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$9, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$9, "Name", ifcDataTypes.text), _defineProperty(_newObject$9, "Description", ifcDataTypes.text), _defineProperty(_newObject$9, namedProps.relatingObject, ifcDataTypes.id), _defineProperty(_newObject$9, namedProps.relatedObjects, ifcDataTypes.idSet), _newObject$9));
  newObject((_newObject2$8 = {}, _defineProperty(_newObject2$8, namedProps.ifcClass, getName(ifcTypes.IfcRelContainedInSpatialStructure)), _defineProperty(_newObject2$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2$8, "Name", ifcDataTypes.text), _defineProperty(_newObject2$8, "Description", ifcDataTypes.text), _defineProperty(_newObject2$8, namedProps.relatedElements, ifcDataTypes.idSet), _defineProperty(_newObject2$8, namedProps.relatingStructure, ifcDataTypes.id), _newObject2$8));
  newObject((_newObject3$7 = {}, _defineProperty(_newObject3$7, namedProps.ifcClass, getName(ifcTypes.IfcRelDefinesByProperties)), _defineProperty(_newObject3$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3$7, "Name", ifcDataTypes.text), _defineProperty(_newObject3$7, "Description", ifcDataTypes.text), _defineProperty(_newObject3$7, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject3$7, "RelatingPropertyDefinition", ifcDataTypes.id), _newObject3$7));
  newObject((_newObject4$7 = {}, _defineProperty(_newObject4$7, namedProps.ifcClass, getName(ifcTypes.IfcRelAssociatesMaterial)), _defineProperty(_newObject4$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4$7, "Name", ifcDataTypes.text), _defineProperty(_newObject4$7, "Description", ifcDataTypes.text), _defineProperty(_newObject4$7, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject4$7, "RelatingMaterial", ifcDataTypes.id), _newObject4$7));
  newObject((_newObject5$7 = {}, _defineProperty(_newObject5$7, namedProps.ifcClass, getName(ifcTypes.IfcRelAssociatesClassification)), _defineProperty(_newObject5$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5$7, "Name", ifcDataTypes.text), _defineProperty(_newObject5$7, "Description", ifcDataTypes.text), _defineProperty(_newObject5$7, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject5$7, "RelatingClassification", ifcDataTypes.id), _newObject5$7));
  newObject((_newObject6$5 = {}, _defineProperty(_newObject6$5, namedProps.ifcClass, getName(ifcTypes.IfcRelDefinesByType)), _defineProperty(_newObject6$5, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject6$5, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject6$5, "Name", ifcDataTypes.text), _defineProperty(_newObject6$5, "Description", ifcDataTypes.text), _defineProperty(_newObject6$5, namedProps.relatedObjects, ifcDataTypes.idSet), _defineProperty(_newObject6$5, namedProps.relatingType, ifcDataTypes.id), _newObject6$5));
  newObject((_newObject7$4 = {}, _defineProperty(_newObject7$4, namedProps.ifcClass, getName(ifcTypes.IfcRelSpaceBoundary)), _defineProperty(_newObject7$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject7$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject7$4, "Name", ifcDataTypes.text), _defineProperty(_newObject7$4, "Description", ifcDataTypes.text), _defineProperty(_newObject7$4, "RelatingSpace", ifcDataTypes.id), _defineProperty(_newObject7$4, "RelatedBuildingElement", ifcDataTypes.id), _defineProperty(_newObject7$4, "ConnectionGeometry", ifcDataTypes.id), _defineProperty(_newObject7$4, "PhysicalOrVirtualBoundary", ifcDataTypes["enum"]), _defineProperty(_newObject7$4, "InternalOrExternalBoundary", ifcDataTypes["enum"]), _newObject7$4));
  newObject((_newObject8$4 = {}, _defineProperty(_newObject8$4, namedProps.ifcClass, getName(ifcTypes.IfcRelConnectsPathElements)), _defineProperty(_newObject8$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject8$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject8$4, "Name", ifcDataTypes.text), _defineProperty(_newObject8$4, "Description", ifcDataTypes.text), _defineProperty(_newObject8$4, "ConnectionGeometry", ifcDataTypes.id), _defineProperty(_newObject8$4, "RelatingElement", ifcDataTypes.id), _defineProperty(_newObject8$4, "RelatedElement", ifcDataTypes.id), _defineProperty(_newObject8$4, "RelatingPriorities", ifcDataTypes.numSet), _defineProperty(_newObject8$4, "RelatedPriorities", ifcDataTypes.numSet), _defineProperty(_newObject8$4, "RelatedConnectionType", ifcDataTypes["enum"]), _defineProperty(_newObject8$4, "RelatingConnectionType", ifcDataTypes["enum"]), _newObject8$4));
  newObject((_newObject9$4 = {}, _defineProperty(_newObject9$4, namedProps.ifcClass, getName(ifcTypes.IfcRelVoidsElement)), _defineProperty(_newObject9$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject9$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject9$4, "Name", ifcDataTypes.text), _defineProperty(_newObject9$4, "Description", ifcDataTypes.text), _defineProperty(_newObject9$4, namedProps.relatingBuildingElement, ifcDataTypes.id), _defineProperty(_newObject9$4, namedProps.relatedOpeningElement, ifcDataTypes.id), _newObject9$4));
  newObject((_newObject10$4 = {}, _defineProperty(_newObject10$4, namedProps.ifcClass, getName(ifcTypes.IfcRelFillsElement)), _defineProperty(_newObject10$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject10$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject10$4, "Name", ifcDataTypes.text), _defineProperty(_newObject10$4, "Description", ifcDataTypes.text), _defineProperty(_newObject10$4, namedProps.relatingOpeningElement, ifcDataTypes.id), _defineProperty(_newObject10$4, namedProps.relatedBuildingElement, ifcDataTypes.id), _newObject10$4));
  newObject((_newObject11$4 = {}, _defineProperty(_newObject11$4, namedProps.ifcClass, getName(ifcTypes.IfcRelConnectsPortToElement)), _defineProperty(_newObject11$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject11$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject11$4, "Name", ifcDataTypes.text), _defineProperty(_newObject11$4, "Description", ifcDataTypes.text), _defineProperty(_newObject11$4, "RelatingPort", ifcDataTypes.id), _defineProperty(_newObject11$4, "RelatedElement", ifcDataTypes.id), _newObject11$4));
  newObject((_newObject12$4 = {}, _defineProperty(_newObject12$4, namedProps.ifcClass, getName(ifcTypes.IfcRelAssignsToGroup)), _defineProperty(_newObject12$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject12$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject12$4, "Name", ifcDataTypes.text), _defineProperty(_newObject12$4, "Description", ifcDataTypes.text), _defineProperty(_newObject12$4, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject12$4, "RelatedObjectsType", ifcDataTypes["enum"]), _defineProperty(_newObject12$4, "RelatingGroup", ifcDataTypes.id), _newObject12$4));
  newObject((_newObject13$4 = {}, _defineProperty(_newObject13$4, namedProps.ifcClass, getName(ifcTypes.IfcRelServicesBuildings)), _defineProperty(_newObject13$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject13$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject13$4, "Name", ifcDataTypes.text), _defineProperty(_newObject13$4, "Description", ifcDataTypes.text), _defineProperty(_newObject13$4, "RelatingSystem", ifcDataTypes.id), _defineProperty(_newObject13$4, "RelatedBuildings", ifcDataTypes.idSet), _newObject13$4));
  newObject((_newObject14$4 = {}, _defineProperty(_newObject14$4, namedProps.ifcClass, getName(ifcTypes.IfcGroup)), _defineProperty(_newObject14$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject14$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject14$4, "Name", ifcDataTypes.text), _defineProperty(_newObject14$4, "Description", ifcDataTypes.text), _defineProperty(_newObject14$4, "ObjectType", ifcDataTypes.text), _newObject14$4));
  newObject((_newObject15$4 = {}, _defineProperty(_newObject15$4, namedProps.ifcClass, getName(ifcTypes.IfcRelAssignsToActor)), _defineProperty(_newObject15$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject15$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject15$4, "Name", ifcDataTypes.text), _defineProperty(_newObject15$4, "Description", ifcDataTypes.text), _defineProperty(_newObject15$4, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject15$4, "RelatedObjectsType", ifcDataTypes["enum"]), _defineProperty(_newObject15$4, "RelatingActor", ifcDataTypes.id), _defineProperty(_newObject15$4, "ActingRole", ifcDataTypes.id), _newObject15$4));

  var _newObject$a, _newObject2$9, _newObject3$8, _newObject4$8;
  newObject((_newObject$a = {}, _defineProperty(_newObject$a, namedProps.ifcClass, getName(ifcTypes.IfcQuantityArea)), _defineProperty(_newObject$a, "Name", ifcDataTypes.text), _defineProperty(_newObject$a, "Description", ifcDataTypes.text), _defineProperty(_newObject$a, "Unit", ifcDataTypes.id), _defineProperty(_newObject$a, "AreaValue", ifcDataTypes.number), _newObject$a));
  newObject((_newObject2$9 = {}, _defineProperty(_newObject2$9, namedProps.ifcClass, getName(ifcTypes.IfcQuantityLength)), _defineProperty(_newObject2$9, "Name", ifcDataTypes.text), _defineProperty(_newObject2$9, "Description", ifcDataTypes.text), _defineProperty(_newObject2$9, "Unit", ifcDataTypes.id), _defineProperty(_newObject2$9, "LengthValue", ifcDataTypes.number), _newObject2$9));
  newObject((_newObject3$8 = {}, _defineProperty(_newObject3$8, namedProps.ifcClass, getName(ifcTypes.IfcQuantityVolume)), _defineProperty(_newObject3$8, "Name", ifcDataTypes.text), _defineProperty(_newObject3$8, "Description", ifcDataTypes.text), _defineProperty(_newObject3$8, "Unit", ifcDataTypes.id), _defineProperty(_newObject3$8, "VolumeValue", ifcDataTypes.number), _newObject3$8));
  newObject((_newObject4$8 = {}, _defineProperty(_newObject4$8, namedProps.ifcClass, getName(ifcTypes.IfcElementQuantity)), _defineProperty(_newObject4$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4$8, "Name", ifcDataTypes.text), _defineProperty(_newObject4$8, "Description", ifcDataTypes.text), _defineProperty(_newObject4$8, "MethodOfMeasurement", ifcDataTypes.text), _defineProperty(_newObject4$8, "Quantities", ifcDataTypes.idSet), _newObject4$8));

  var _newObject$b, _newObject2$a;
  newObject((_newObject$b = {}, _defineProperty(_newObject$b, namedProps.ifcClass, getName(ifcTypes.IfcDistributionPort)), _defineProperty(_newObject$b, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$b, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$b, "Name", ifcDataTypes.text), _defineProperty(_newObject$b, "Description", ifcDataTypes.text), _defineProperty(_newObject$b, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject$b, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject$b, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject$b, "FlowDirection", ifcDataTypes["enum"]), _newObject$b));
  newObject((_newObject2$a = {}, _defineProperty(_newObject2$a, namedProps.ifcClass, getName(ifcTypes.IfcSystem)), _defineProperty(_newObject2$a, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2$a, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2$a, "Name", ifcDataTypes.text), _defineProperty(_newObject2$a, "Description", ifcDataTypes.text), _defineProperty(_newObject2$a, "ObjectType", ifcDataTypes.text), _newObject2$a));

  var _newObject$c, _newObject2$b, _newObject3$9, _newObject4$9, _newObject5$8;
  newObject((_newObject$c = {}, _defineProperty(_newObject$c, namedProps.ifcClass, getName(ifcTypes.IfcProject)), _defineProperty(_newObject$c, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$c, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$c, "Name", ifcDataTypes.text), _defineProperty(_newObject$c, "Description", ifcDataTypes.text), _defineProperty(_newObject$c, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject$c, "LongName", ifcDataTypes.text), _defineProperty(_newObject$c, "Phase", ifcDataTypes.text), _defineProperty(_newObject$c, "RepresentationContexts", ifcDataTypes.idSet), _defineProperty(_newObject$c, "UnitsInContext", ifcDataTypes.id), _newObject$c));
  newObject((_newObject2$b = {}, _defineProperty(_newObject2$b, namedProps.ifcClass, getName(ifcTypes.IfcSite)), _defineProperty(_newObject2$b, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2$b, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2$b, "Name", ifcDataTypes.text), _defineProperty(_newObject2$b, "Description", ifcDataTypes.text), _defineProperty(_newObject2$b, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject2$b, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject2$b, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject2$b, "LongName", ifcDataTypes.text), _defineProperty(_newObject2$b, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject2$b, "RefLatitude", ifcDataTypes.numSet), _defineProperty(_newObject2$b, "RefLongitude", ifcDataTypes.numSet), _defineProperty(_newObject2$b, "RefElevation", ifcDataTypes.number), _defineProperty(_newObject2$b, "LandTitleNumber", ifcDataTypes.text), _defineProperty(_newObject2$b, "SiteAddress", ifcDataTypes.id), _newObject2$b));
  newObject((_newObject3$9 = {}, _defineProperty(_newObject3$9, namedProps.ifcClass, getName(ifcTypes.IfcBuilding)), _defineProperty(_newObject3$9, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3$9, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3$9, "Name", ifcDataTypes.text), _defineProperty(_newObject3$9, "Description", ifcDataTypes.text), _defineProperty(_newObject3$9, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject3$9, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject3$9, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject3$9, "LongName", ifcDataTypes.text), _defineProperty(_newObject3$9, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject3$9, "ElevationOfRefHeight", ifcDataTypes.number), _defineProperty(_newObject3$9, "ElevationOfTerrain", ifcDataTypes.number), _defineProperty(_newObject3$9, "BuildingAddress", ifcDataTypes.id), _newObject3$9));
  newObject((_newObject4$9 = {}, _defineProperty(_newObject4$9, namedProps.ifcClass, getName(ifcTypes.IfcBuildingStorey)), _defineProperty(_newObject4$9, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4$9, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4$9, "Name", ifcDataTypes.text), _defineProperty(_newObject4$9, "Description", ifcDataTypes.text), _defineProperty(_newObject4$9, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject4$9, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject4$9, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject4$9, "LongName", ifcDataTypes.text), _defineProperty(_newObject4$9, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject4$9, "Elevation", ifcDataTypes.number), _newObject4$9));
  newObject((_newObject5$8 = {}, _defineProperty(_newObject5$8, namedProps.ifcClass, getName(ifcTypes.IfcSpace)), _defineProperty(_newObject5$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5$8, "Name", ifcDataTypes.text), _defineProperty(_newObject5$8, "Description", ifcDataTypes.text), _defineProperty(_newObject5$8, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject5$8, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject5$8, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject5$8, "LongName", ifcDataTypes.text), _defineProperty(_newObject5$8, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject5$8, "InteriorOrExteriorSpace", ifcDataTypes["enum"]), _defineProperty(_newObject5$8, "ElevationWithFlooring", ifcDataTypes.number), _newObject5$8));

  var _newObject$d, _newObject2$c, _newObject3$a, _newObject4$a, _newObject5$9, _newObject6$6, _newObject7$5;
  newObject((_newObject$d = {}, _defineProperty(_newObject$d, namedProps.ifcClass, getName(ifcTypes.IfcConversionBasedUnit)), _defineProperty(_newObject$d, "Dimensions", ifcDataTypes.id), _defineProperty(_newObject$d, namedProps.unitType, ifcDataTypes["enum"]), _defineProperty(_newObject$d, "Name", ifcDataTypes.text), _defineProperty(_newObject$d, "ConversionFactor", ifcDataTypes.id), _newObject$d));
  newObject((_newObject2$c = {}, _defineProperty(_newObject2$c, namedProps.ifcClass, getName(ifcTypes.IfcDerivedUnit)), _defineProperty(_newObject2$c, "Elements", ifcDataTypes.idSet), _defineProperty(_newObject2$c, namedProps.unitType, ifcDataTypes["enum"]), _defineProperty(_newObject2$c, "UserDefinedType", ifcDataTypes.text), _newObject2$c));
  newObject((_newObject3$a = {}, _defineProperty(_newObject3$a, namedProps.ifcClass, getName(ifcTypes.IfcDerivedUnitElement)), _defineProperty(_newObject3$a, "Unit", ifcDataTypes.id), _defineProperty(_newObject3$a, "Exponent", ifcDataTypes.number), _newObject3$a));
  newObject((_newObject4$a = {}, _defineProperty(_newObject4$a, namedProps.ifcClass, getName(ifcTypes.IfcDimensionalExponents)), _defineProperty(_newObject4$a, "LengthExponent", ifcDataTypes.number), _defineProperty(_newObject4$a, "MassExponent", ifcDataTypes.number), _defineProperty(_newObject4$a, "TimeExponent", ifcDataTypes.number), _defineProperty(_newObject4$a, "ElectricCurrentExponent", ifcDataTypes.number), _defineProperty(_newObject4$a, "ThermodynamicTemperatureExponent", ifcDataTypes.number), _defineProperty(_newObject4$a, "AmountOfSubstanceExponent", ifcDataTypes.number), _defineProperty(_newObject4$a, "LuminousIntensityExponent", ifcDataTypes.number), _newObject4$a));
  newObject((_newObject5$9 = {}, _defineProperty(_newObject5$9, namedProps.ifcClass, getName(ifcTypes.IfcMeasureWithUnit)), _defineProperty(_newObject5$9, "ValueComponent", ifcDataTypes.value), _defineProperty(_newObject5$9, "UnitComponent", ifcDataTypes.id), _newObject5$9));
  newObject((_newObject6$6 = {}, _defineProperty(_newObject6$6, namedProps.ifcClass, getName(ifcTypes.IfcSIUnit)), _defineProperty(_newObject6$6, namedProps.undefined, ifcDataTypes.asterisk), _defineProperty(_newObject6$6, namedProps.unitType, ifcDataTypes["enum"]), _defineProperty(_newObject6$6, namedProps.prefix, ifcDataTypes["enum"]), _defineProperty(_newObject6$6, "Name", ifcDataTypes["enum"]), _newObject6$6));
  newObject((_newObject7$5 = {}, _defineProperty(_newObject7$5, namedProps.ifcClass, getName(ifcTypes.IfcUnitAssignment)), _defineProperty(_newObject7$5, namedProps.units, ifcDataTypes.idSet), _newObject7$5));

  var _patterns;
  var newToken = chevrotain.createToken;
  var Lexer = chevrotain.Lexer; //Tokens / vocabulary for constructing the parser primitives

  var tokens = [];
  var patterns = (_patterns = {}, _defineProperty(_patterns, ifcDataTypes.id, /#\d+/), _defineProperty(_patterns, ifcDataTypes.asterisk, /\*/), _defineProperty(_patterns, ifcDataTypes["default"], /\$/), _defineProperty(_patterns, ifcDataTypes.value, /IFC[A-Z]+?(?=\()/), _defineProperty(_patterns, ifcDataTypes.bool, /\.T\.|\.F\./), _defineProperty(_patterns, ifcDataTypes["enum"], /\.[A-Z0-9_]+?\./), _defineProperty(_patterns, ifcDataTypes.number, /[0-9.E-]+/), _defineProperty(_patterns, ifcDataTypes.text, /'.*?'(?=[\)|,])/), _defineProperty(_patterns, "EqualSign", /=/), _defineProperty(_patterns, "OpenPar", /\(/), _defineProperty(_patterns, "ClosePar", /\)/), _defineProperty(_patterns, "Semicolon", /;/), _defineProperty(_patterns, "Comma", /\s*,\s*/), _defineProperty(_patterns, ifcDataTypes.anything, /.+/), _patterns);
  var ingoredPatterns = {
    NewLine: /[\n\r]+/,
    WhiteSpace: /\s+/
  };

  (function createTokens() {
    Object.keys(patterns).forEach(function (e) {
      tokens.push(newToken({
        name: e,
        pattern: patterns[e]
      }));
    });
  })();

  (function createIgnoredTokens() {
    Object.keys(ingoredPatterns).forEach(function (e) {
      tokens.push(newToken({
        name: e,
        pattern: ingoredPatterns[e],
        group: chevrotain.Lexer.SKIPPED
      }));
    });
  })();

  var lexer = new Lexer(tokens);
  var vocabulary = {};
  tokens.forEach(function (token) {
    vocabulary[token.name] = token;
  });

  var _primitiveParsers;

  function addPrimitiveParsers($) {
    var parsers = [];
    Object.values(primitiveParsers).forEach(function (e) {
      if (!parsers.includes(e)) {
        parsers.push(e);
        $.RULE(e.name, e($));
      }
    });
  }

  var primitiveParsers = (_primitiveParsers = {}, _defineProperty(_primitiveParsers, ifcDataTypes.asterisk, Asterisk_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.number, Number_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.date, Number_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.text, IfcText_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.bool, IfcBool_Parser), _defineProperty(_primitiveParsers, ifcDataTypes["enum"], IfcEnum_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.id, IfcExpressId_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.idSet, IdSet_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.numSet, NumberSet_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.value, IfcValue_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.valueSet, ValueSet_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.textSet, TextSet_Parser), _primitiveParsers);

  function getParser(dataType) {
    return primitiveParsers[dataType].name;
  }

  function Asterisk_Parser($) {
    return function () {
      $.AT_LEAST_ONE(function () {
        $.OR([{
          ALT: function ALT() {
            $.CONSUME(vocabulary[ifcDataTypes.asterisk]);
          }
        }]);
        $.OPTION(function () {
          $.CONSUME(vocabulary.Comma);
        });
      });
    };
  }

  function IfcValue_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary.IfcValue);
          $.CONSUME(vocabulary.OpenPar);
          $.OR2([{
            ALT: function ALT() {
              $.CONSUME(vocabulary[ifcDataTypes.number]);
            }
          }, {
            ALT: function ALT() {
              $.CONSUME(vocabulary[ifcDataTypes.text]);
            }
          }, {
            ALT: function ALT() {
              $.CONSUME(vocabulary[ifcDataTypes.bool]);
            }
          }, {
            ALT: function ALT() {
              $.CONSUME(vocabulary[ifcDataTypes["enum"]]);
            }
          }]);
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes.id]);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME2(vocabulary[ifcDataTypes.number]);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION(function () {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function Number_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes.number]);
        }
      }]);
      $.OPTION(function () {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function NumberSet_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(function () {
            $.CONSUME(vocabulary[ifcDataTypes.number]);
            $.OPTION(function () {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION2(function () {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function TextSet_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(function () {
            $.CONSUME(vocabulary[ifcDataTypes.text]);
            $.OPTION(function () {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION2(function () {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function IdSet_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(function () {
            $.CONSUME(vocabulary[ifcDataTypes.id]);
            $.OPTION(function () {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION2(function () {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function ValueSet_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary.OpenPar);
          $.MANY(function () {
            $.SUBRULE($.IfcValue_Parser);
            $.OPTION(function () {
              $.CONSUME(vocabulary.Comma);
            });
          });
          $.CONSUME(vocabulary.ClosePar);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION2(function () {
        $.CONSUME2(vocabulary.Comma);
      });
    };
  }

  function IfcText_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes.text]);
        }
      }]);
      $.OPTION2(function () {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function IfcBool_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes.bool]);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION2(function () {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function IfcEnum_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["enum"]]);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION2(function () {
        $.CONSUME(vocabulary.Comma);
      });
    };
  }

  function IfcExpressId_Parser($) {
    return function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes.id]);
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes["default"]]);
        }
      }]);
      $.OPTION2(function () {
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
    Object.values(ifcItem).forEach(function (dataType) {
      if (isDataTypeValid(dataType)) newRule($, dataType);
    });
  }

  function newRule($, dataType) {
    var rule = "SUBRULE".concat(getIndex(dataType));
    updateCounter(dataType);
    return $[rule]($[primitiveParsers[dataType].name]);
  } //The counter is necessary because chevrotain cannot have
  //multiple identical SUBRULEs. The repeated methods need to be
  //followed by a suffix (f.e. SUBRULE(X), SUBRULE2(X), ...)


  var counter = {};

  function resetParserFactory() {
    counter = {};
    getAllDataTypes().forEach(function (e) {
      counter[e] = 0;
    });
  }

  function updateCounter(dataType) {
    counter[dataType]++;
  } //Chevrotain syntax: SUBRULE0(X) is expressed as SUBRULE(X)


  function getIndex(dataType) {
    return counter[dataType] === 0 ? "" : counter[dataType];
  }

  var CstParser = chevrotain.CstParser; //Contains all the syntactical structures (RULEs)

  var IfcParser = /*#__PURE__*/function (_CstParser) {
    _inherits(IfcParser, _CstParser);

    var _super = _createSuper(IfcParser);

    function IfcParser() {
      var _this;

      _classCallCheck(this, IfcParser);

      _this = _super.call(this, tokens);
      addPrimitiveParsers(_assertThisInitialized(_this));
      addParsesForAllIfcTypes(_assertThisInitialized(_this));

      _this.performSelfAnalysis();

      return _this;
    }

    return IfcParser;
  }(CstParser); //Creates the syntactical structures (RULEs) for all the IFC Classes


  function addParsesForAllIfcTypes($) {
    Object.values(typesParserMap).forEach(function (e) {
      $.RULE(e[namedProps.ifcClass], function () {
        newParser($, e);
      });
    });
  }

  var parser = new IfcParser();

  var r = {
    unicode: /\\X2\\[0-9A-F]+?\\X\d\\/,
    getUnicode: /[0-9A-F]+(?=\\X\d\\)/
  };

  function unicode(text) {
    while (r.unicode.test(text)) {
      var encoded = text.match(r.unicode)[0].match(r.getUnicode)[0];
      text = text.replace(r.unicode, String.fromCharCode(parseInt(encoded, 16)));
    }

    return text;
  }

  function formatDate(dateAsNumber) {
    if (isNaN(dateAsNumber)) return dateAsNumber;
    var formattedDate = new Date(dateAsNumber * 1000);
    return formattedDate.getTime() ? formattedDate : dateAsNumber;
  }

  var _semanticUnits;

  var semanticUnits = (_semanticUnits = {}, _defineProperty(_semanticUnits, ifcDataTypes.id, getExpressId), _defineProperty(_semanticUnits, ifcDataTypes.idSet, getIdSet), _defineProperty(_semanticUnits, ifcDataTypes.text, getIfcText), _defineProperty(_semanticUnits, ifcDataTypes.textSet, getTextSet), _defineProperty(_semanticUnits, ifcDataTypes.number, getNumber), _defineProperty(_semanticUnits, ifcDataTypes.numSet, getNumberSet), _defineProperty(_semanticUnits, ifcDataTypes.date, getDate), _defineProperty(_semanticUnits, ifcDataTypes.value, getIfcValue), _defineProperty(_semanticUnits, ifcDataTypes.bool, getBool), _defineProperty(_semanticUnits, ifcDataTypes["enum"], getEnum), _defineProperty(_semanticUnits, ifcDataTypes.asterisk, getAsterisk), _defineProperty(_semanticUnits, ifcDataTypes.valueSet, getValueSet), _semanticUnits);

  function getProperty(parsed, type) {
    return semanticUnits[type](parsed);
  } //The counter is necessary because chevrotain generates indexed
  //parsed structures. F.e. if there are two enums in a IFC Class,
  //the first one has index=1, the second one index=2, etc


  var counter$1 = {};

  function resetSemanticFactory() {
    var _counter;

    counter$1 = (_counter = {}, _defineProperty(_counter, ifcDataTypes.id, 0), _defineProperty(_counter, ifcDataTypes.text, 0), _defineProperty(_counter, ifcDataTypes.number, 0), _defineProperty(_counter, ifcDataTypes["enum"], 0), _defineProperty(_counter, ifcDataTypes.idSet, 0), _defineProperty(_counter, ifcDataTypes.numSet, 0), _defineProperty(_counter, ifcDataTypes.value, 0), _defineProperty(_counter, ifcDataTypes.textSet, 0), _defineProperty(_counter, ifcDataTypes.bool, 0), _defineProperty(_counter, ifcDataTypes.valueSet, 0), _counter);
  }

  function getBool(parsed) {
    return getValue(parsed, ifcDataTypes.bool, formatBool);
  }

  function getEnum(parsed) {
    return getValue(parsed, ifcDataTypes["enum"], formatEnum);
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
    return getSet(parsed, ifcDataTypes.textSet, ifcDataTypes.text, function (e) {
      return unicode(e.image.slice(1, -1));
    });
  }

  function getIdSet(parsed) {
    return getSet(parsed, ifcDataTypes.idSet, ifcDataTypes.id, function (e) {
      return Number(e.image.slice(1));
    });
  }

  function getNumberSet(parsed) {
    return getSet(parsed, ifcDataTypes.numSet, ifcDataTypes.number, function (e) {
      return Number(e.image);
    });
  }

  function getValueSet(parsed) {
    var valueSet = parsed[getParser(ifcDataTypes.valueSet)][counter$1[ifcDataTypes.valueSet]++];
    var values = valueSet.children[getParser(ifcDataTypes.value)];
    return values.map(function (ifcValue) {
      var _ref;

      var valueProps = ifcValue.children;
      var type = getIfcValueType(valueProps);
      var value = valueProps[type][0].image;
      var formattedValue = formatIfcValue(type, value);
      var unit = valueProps[ifcDataTypes.value] ? valueProps[ifcDataTypes.value][0].image : "";
      return _ref = {}, _defineProperty(_ref, ifcUnitsValue.value, formattedValue), _defineProperty(_ref, ifcUnitsValue.unit, unit), _ref;
    });
  }

  function getIfcValue(parsed) {
    if (isDefaultValue(parsed, ifcDataTypes.value)) return getDefault(parsed, ifcDataTypes.value);
    if (isExpressId(parsed, ifcDataTypes.value)) return getIfcValueId(parsed, ifcDataTypes.value);
    var data = parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children;
    var type = getIfcValueType(data);
    var value = formatIfcValue(type, getIfcValueValue(parsed, type));
    return {
      Value: value,
      IfcUnit: getIfcUnit(parsed)
    };
  }

  function getEmptySet(type) {
    counter$1[type]++;
    return [];
  }

  function getAsterisk() {
    return "*";
  }

  function getValue(parsed, type, formatFunction) {
    if (isDefaultValue(parsed, type)) return getDefault(parsed, type);
    return formatFunction(extract(parsed, type));
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
    return parsed[getParser(type)][counter$1[type]].children[ifcDataTypes["default"]] ? true : false;
  }

  function isEmptySet(parsed, type, subtype) {
    return parsed[getParser(type)][counter$1[type]].children[subtype] ? false : true;
  }

  function getDefault(parsed, type) {
    return parsed[getParser(type)][counter$1[type]++].children[ifcDataTypes["default"]][0].image;
  }

  function isExpressId(parsed, type) {
    return parsed[getParser(type)][counter$1[type]].children[ifcDataTypes.id] ? true : false;
  }

  function getIfcValueId(parsed, type) {
    var rawId = parsed[getParser(type)][counter$1[type]++].children[ifcDataTypes.id][0].image;
    return Number(rawId.slice(1));
  }

  function getIfcValueValue(parsed, type) {
    return parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[type][0].image;
  }

  function formatIfcValue(type, value) {
    if (type === ifcValueType.number) return formatNumber(value);
    if (type === ifcValueType.text) return formatText(value);
    if (type === ifcValueType.bool) return formatBool(value);
    if (type === ifcValueType["enum"]) return formatEnum(value);
    return value;
  }

  function getIfcValueType(data) {
    if (data[ifcDataTypes.number]) return ifcValueType.number;
    if (data[ifcDataTypes.text]) return ifcValueType.text;
    if (data[ifcDataTypes.bool]) return ifcValueType.bool;
    return ifcValueType["enum"];
  }

  function getIfcUnit(parsed) {
    var ifcUnit = parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[ifcDataTypes.value] ? parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[ifcDataTypes.value][0].image : "";
    counter$1[ifcDataTypes.value]++;
    return ifcUnit;
  }

  function newSemantic(parsed, ifcItem) {
    resetSemanticFactory();
    var result = retrieveIfcObjectProperties(parsed, ifcItem);
    addClassName(result, ifcItem);
    cleanUndefinedProperties(result);
    return result;
  }

  function retrieveIfcObjectProperties(parsed, ifcItem) {
    var result = {};
    Object.keys(ifcItem).forEach(function (e) {
      if (isDataTypeValid(ifcItem[e])) result[e] = newSemanticUnit(parsed, ifcItem[e]);
    });
    return result;
  }

  function newSemanticUnit(parsed, dataType) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, typeValue.value, getProperty(parsed, dataType)), _defineProperty(_ref, typeValue.type, dataType), _ref;
  }

  function addClassName(result, ifcItem) {
    result[namedProps.ifcClass] = ifcItem[namedProps.ifcClass];
  }

  function cleanUndefinedProperties(ifcItem) {
    if (ifcItem.hasOwnProperty([namedProps.undefined])) delete ifcItem[namedProps.undefined];
  }

  //When the parser outputs a syntactical structure, the visitor
  //handles it with the correspondant method using visit()

  var BaseVisitor = parser.getBaseCstVisitorConstructor();

  var IfcVisitor = /*#__PURE__*/function (_BaseVisitor) {
    _inherits(IfcVisitor, _BaseVisitor);

    var _super = _createSuper(IfcVisitor);

    function IfcVisitor() {
      var _this;

      _classCallCheck(this, IfcVisitor);

      _this = _super.call(this);

      _this.validateVisitor();

      return _this;
    }

    return IfcVisitor;
  }(BaseVisitor);

  (function createPrimitiveSemantic() {
    Object.keys(primitiveParsers).forEach(function (e) {
      IfcVisitor.prototype[primitiveParsers[e].name] = function (parsed) {};
    });
  })();

  (function createSemantic() {
    Object.values(typesParserMap).forEach(function (e) {
      IfcVisitor.prototype[e[namedProps.ifcClass]] = function (parsed) {
        return getSemantic(ifcTypes[e[namedProps.ifcClass]], parsed);
      };
    });
  })();

  function getSemantic(ifcType, parsed) {
    var ifcItem = typesParserMap[ifcType];
    return newSemantic(parsed, ifcItem);
  }

  var ifcVisitor = new IfcVisitor();

  //1. The lexer tokenizes the input
  //2. The tokenized input is given to the parser
  //3. The parser is applied using the chosen syntactical structure
  //4. The visitor applies semantic rules to the output of the parser

  function parse(text, ifcType) {
    var lexingResult = lexer.tokenize(text);
    parser.input = lexingResult.tokens;
    var cstOutput = parser[parserByType(ifcType)[namedProps.ifcClass]]();
    if (parser.errors.length > 0) showErrors(text, ifcType, parser);
    return ifcVisitor.visit(cstOutput);
  }

  function showErrors(text, ifcType, parser) {
    console.warn(parser.errors);
    console.warn("Error while parsing item: ".concat(text, " of type ").concat(ifcType));
  }

  var regexp = {
    allNewLines: /\r?\n|\r/g,
    headerSection: /HEADER;.+?(?=ENDSEC;)/,
    dataSection: /DATA;\s+.+(?=ENDSEC;)/,
    singleIfcItems: /#\d+\s*=\s*IFC.+?\)(;\s*(?=#\d*)|;\s*$)/g,
    expressId: /^#\d+/,
    rawIfcType: /IFC\w+/,
    rawIfcProperties: /\(.+?(?=;\s*$)/
  };

  function readIfcItems(loadedIfc) {
    var _extractSections = extractSections(loadedIfc),
        dataSection = _extractSections.dataSection;

    return constructRawIfcItems(dataSection);
  }

  function extractSections(loadedIfc) {
    var ifcPlaneText = removeAllNewLines(loadedIfc);
    return {
      headerSection: readHeaderSection(ifcPlaneText),
      dataSection: readDataSection(ifcPlaneText)
    };
  }

  function constructRawIfcItems(dataSection) {
    var flatIfcItemList = separateIfcEntities(dataSection);
    return flatIfcItemList.map(function (e) {
      var _ref;

      return _ref = {}, _defineProperty(_ref, itemsReaderValues.expressId, getId(e)), _defineProperty(_ref, itemsReaderValues.type, getIfcType(e)), _defineProperty(_ref, itemsReaderValues.properties, getIfcRawProperties(e)), _ref;
    });
  }

  function separateIfcEntities(dataSection) {
    return dataSection.match(regexp.singleIfcItems);
  }

  function readHeaderSection(ifcLine) {
    return ifcLine.match(regexp.headerSection)[0];
  }

  function readDataSection(ifcLine) {
    return ifcLine.match(regexp.dataSection)[0];
  }

  function removeAllNewLines(ifcFile) {
    return ifcFile.replace(regexp.allNewLines, " ");
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

  function referenceEntities(items) {
    var key;

    for (key in items) {
      var ifcLine = items[key];

      for (key in ifcLine) {
        var ifcProperty = ifcLine[key];
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
      var property = ifcProperty;

      var values = _toConsumableArray(property[typeValue.value]);

      property[typeValue.value] = values.map(function (e) {
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
    var value = ifcLine[key][typeValue.value];
    if (value) ifcLine[key] = value;
  }

  function findRemainingTypes(items) {
    var remainingTypes = [];
    items.forEach(function (element) {
      if (Object.values(ifcTypes).indexOf(element[itemsReaderValues.type]) < 0) {
        if (!remainingTypes.includes(element[itemsReaderValues.type])) {
          remainingTypes.push(element[itemsReaderValues.type]);
        }
      }
    });
    if (remainingTypes.length > 0) console.log('Error: the following classes are not implemented: ', remainingTypes);
  }

  function loadIfcFileItems(ifcData) {
    var ifcItems = readIfcItems(ifcData);
    findRemainingTypes(ifcItems);
    return loadItems(ifcItems);
  }

  function loadItems(ifcData) {
    var loadedItems = {};
    ifcData.map(function (ifcItem) {
      if (isTypeSupported(ifcItem)) loadedItems[ifcItem[itemsReaderValues.expressId]] = parseAndLoadItem(ifcItem);
    });
    referenceEntities(loadedItems);
    return loadedItems;
  }

  function parseAndLoadItem(ifcItem) {
    var parsed = parse(ifcItem[itemsReaderValues.properties], ifcItem[itemsReaderValues.type]);
    parsed[namedProps.expressId] = ifcItem[itemsReaderValues.expressId];
    return parsed;
  }

  function isTypeSupported(ifcItem) {
    return Object.values(ifcTypes).indexOf(ifcItem[itemsReaderValues.type]) > -1;
  }

  var IfcEntityFinder = /*#__PURE__*/function () {
    function IfcEntityFinder(ifcData) {
      _classCallCheck(this, IfcEntityFinder);

      this.ifcData = ifcData;
    }

    _createClass(IfcEntityFinder, [{
      key: "findByType",
      value: function findByType(ifcType) {
        var _this = this;

        var matches = {};
        Object.keys(this.ifcData).forEach(function (e) {
          if (_this.getType(e) === getName(ifcType)) {
            matches[e] = _this.ifcData[e];
          }
        });
        return matches;
      }
    }, {
      key: "getType",
      value: function getType(id) {
        return this.ifcData[id][namedProps.ifcClass];
      }
    }, {
      key: "findAllProducts",
      value: function findAllProducts(spatialStructureElements) {
        var _this2 = this;

        var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        spatialStructureElements.forEach(function (spatial) {
          var buildingElementsHere = spatial[namedProps.hasBuildingElements];
          var spatialElementsHere = spatial[namedProps.hasSpatial];
          if (buildingElementsHere) elements.push.apply(elements, _toConsumableArray(buildingElementsHere));
          if (spatialElementsHere) _this2.findAllProducts(spatialElementsHere, elements);
        });
        return elements;
      }
    }]);

    return IfcEntityFinder;
  }();

  function createIfcItemsFinder(loadedIfc) {
    return new IfcEntityFinder(loadedIfc);
  }

  function bindElements(finder, type, relating, related, property) {
    var relations = finder.findByType(type);
    Object.values(relations).forEach(function (relation) {
      return isArray(relation[relating]) ? bindMultiple(relation, relating, related, property) : bindSingle(relation, relating, related, property);
    });
  }

  function bindSingle(relation, relating, related, property) {
    if (!relation[relating][property]) relation[relating][property] = [];
    bind(relation[relating][property], relation, related);
  }

  function bindMultiple(relation, relating, related, property) {
    relation[relating].forEach(function (e) {
      if (!e[property]) e[property] = [];
      bind(e[property], relation, related);
    });
  }

  function bind(property, relation, related) {
    return isArray(relation[related]) ? property.push.apply(property, _toConsumableArray(relation[related])) : property.push(relation[related]);
  }

  function isArray(item) {
    return item.constructor === Array;
  }

  function constructProject(ifcData) {
    var _ref;

    var finder = createIfcItemsFinder(ifcData);
    bindAllElements(finder);
    var ifcProjects = get(finder, ifcTypes.IfcProject);
    var elements = finder.findAllProducts(ifcProjects);
    var spaces = get(finder, ifcTypes.IfcSpace);
    var units = get(finder, ifcTypes.IfcUnitAssignment)[0];
    return _ref = {}, _defineProperty(_ref, structuredData.ifcProject, ifcProjects), _defineProperty(_ref, structuredData.products, elements), _defineProperty(_ref, structuredData.spaces, spaces), _defineProperty(_ref, structuredData.units, units), _defineProperty(_ref, structuredData.mainObject, {}), _ref;
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

  exports.constructProject = constructProject;
  exports.loadIfcFileItems = loadIfcFileItems;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
