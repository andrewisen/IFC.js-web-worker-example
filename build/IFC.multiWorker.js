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
  var typeValue = {
    type: "type",
    value: "value"
  };
  var structuredData = {
    ifcProject: "IfcProject",
    products: "Products",
    spaces: "Spaces",
    units: "Units",
    mainObject: "MainObject"
  };

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

  var regexp = {
    allNewLines: /\r?\n|\r/g,
    headerSection: /HEADER;.+?(?=ENDSEC;)/,
    dataSection: /DATA;\s+.+(?=ENDSEC;)/,
    singleIfcItems: /#\d+\s*=\s*IFC.+?\)(;\s*(?=#\d*)|;\s*$)/g,
    expressId: /^#\d+/,
    rawIfcType: /IFC\w+/,
    rawIfcProperties: /\(.+?(?=;\s*$)/
  };

  function extractSections(loadedIfc) {
    var ifcPlaneText = removeAllNewLines(loadedIfc);
    return {
      headerSection: readHeaderSection(ifcPlaneText),
      dataSection: readDataSection(ifcPlaneText)
    };
  }

  function readHeaderSection(ifcLine) {
    return ifcLine.match(regexp.headerSection)[0];
  }

  function readDataSection(ifcLine) {
    return ifcLine.match(regexp.dataSection)[0];
  }

  function removeAllNewLines(ifcFile) {
    return ifcFile.replace(regexp.allNewLines, ' ');
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
        var name = getName(ifcType);
        Object.keys(this.ifcData).forEach(function (e) {
          if (_this.getType(e) === name) {
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

    var _isArray = isArray(Object.keys(relations)[0]);

    Object.values(relations).forEach(function (relation) {
      return _isArray ? bindMultiple(relation, relating, related, property) : bindSingle(relation, relating, related, property);
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
  exports.extractSections = extractSections;
  exports.referenceEntities = referenceEntities;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
