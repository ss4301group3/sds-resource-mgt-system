"use strict";
(self["webpackChunksds_resource_mgt_system"] = self["webpackChunksds_resource_mgt_system"] || []).push([["main"],{

/***/ 669:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/style.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: red;\n}", "",{"version":3,"sources":["webpack://./frontend/src/style.scss"],"names":[],"mappings":"AAEA;EACE,UAHW;AAEb","sourcesContent":["$body-color: red;\r\n\r\nbody {\r\n  color: $body-color;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 462:
/*!*********************************!*\
  !*** ./frontend/src/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ 669);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 32:
/*!****************************************!*\
  !*** ./frontend/src/components/box.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "BoxBuilder": () => (/* binding */ BoxBuilder),
/* harmony export */   "OrderABox": () => (/* binding */ OrderABox)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Box_id, _Box_parentId, _Box_label, _Box_properties, _Box_htmlNode, _Box_viewOption, _Box_editOption, _Box_deleteOption, _ViewOnlyBox_boxFactory;
class TileRenderOption {
    render(box) {
        const htmlNode = document.createElement("div");
        htmlNode.innerHTML = "a box as tile";
        return htmlNode;
    }
}
class RowRenderOption {
    render(box) {
        const htmlNode = document.createElement("tr");
        htmlNode.innerHTML = "a box as row";
        return htmlNode;
    }
}
class NoViewOption {
    view() {
        console.log("Do nothing");
    }
}
class CommonViewOption {
    view() {
        console.log("View in Normal Mode");
    }
}
class PrivilegedViewOption {
    view() {
        console.log("View in Privileged Mode");
    }
}
class NoEditOption {
    edit() {
        console.log("Do nothing");
    }
}
class CommonEditOption {
    edit() {
        console.log("Edit in Normal Mode");
    }
}
class NoDeleteOption {
    delete() {
        console.log("Do nothing");
    }
}
class CommonDeleteOption {
    delete() {
        console.log("Do nothing");
    }
}
class ViewOnlyBoxFactory {
    assignViewOption() { return new NoViewOption(); }
    assignEditOption() { return new NoEditOption(); }
    assignDeleteOption() { return new NoDeleteOption(); }
}
class CommonBoxFactory {
    assignViewOption() { return new CommonViewOption(); }
    assignEditOption() { return new NoEditOption(); }
    assignDeleteOption() { return new NoDeleteOption(); }
}
class AdminBoxFactory {
    assignViewOption() { return new PrivilegedViewOption(); }
    assignEditOption() { return new CommonEditOption(); }
    assignDeleteOption() { return new CommonDeleteOption(); }
}
class Box {
    constructor() {
        _Box_id.set(this, void 0);
        _Box_parentId.set(this, void 0);
        _Box_label.set(this, void 0);
        _Box_properties.set(this, {});
        _Box_htmlNode.set(this, void 0);
        _Box_viewOption.set(this, void 0);
        _Box_editOption.set(this, void 0);
        _Box_deleteOption.set(this, void 0);
    }
    setId(id) { __classPrivateFieldSet(this, _Box_id, id, "f"); }
    setParentId(parentId) { __classPrivateFieldSet(this, _Box_parentId, parentId, "f"); }
    setLabel(label) { __classPrivateFieldSet(this, _Box_label, label, "f"); }
    setProperty(propertyName, propertyValue) { __classPrivateFieldGet(this, _Box_properties, "f")[propertyName] = propertyValue; }
    setProperties(properties) { __classPrivateFieldSet(this, _Box_properties, properties, "f"); }
    appendThisHTMLTo(parentNode) { parentNode.appendChild(__classPrivateFieldGet(this, _Box_htmlNode, "f")); }
    appendBoxChild(childBox) { childBox.appendThisHTMLTo(__classPrivateFieldGet(this, _Box_htmlNode, "f")); }
    setViewOption(viewOption) { __classPrivateFieldSet(this, _Box_viewOption, viewOption, "f"); }
    setEditOption(editOption) { __classPrivateFieldSet(this, _Box_editOption, editOption, "f"); }
    setDeleteOption(deleteOption) { __classPrivateFieldSet(this, _Box_deleteOption, deleteOption, "f"); }
    getId() { return __classPrivateFieldGet(this, _Box_id, "f"); }
    getParentId() { return __classPrivateFieldGet(this, _Box_parentId, "f"); }
    getLabel() { return __classPrivateFieldGet(this, _Box_label, "f"); }
    getProperty(propertyName) { return __classPrivateFieldGet(this, _Box_properties, "f")[propertyName]; }
    getProperties() { return __classPrivateFieldGet(this, _Box_properties, "f"); }
    render(renderOption) { __classPrivateFieldSet(this, _Box_htmlNode, renderOption.render(this), "f"); }
    executeViewOption() { __classPrivateFieldGet(this, _Box_viewOption, "f").view(); }
    ;
    executeEditOption() { __classPrivateFieldGet(this, _Box_editOption, "f").edit(); }
    ;
    executeDeleteOption() { __classPrivateFieldGet(this, _Box_deleteOption, "f").delete(); }
    ;
}
_Box_id = new WeakMap(), _Box_parentId = new WeakMap(), _Box_label = new WeakMap(), _Box_properties = new WeakMap(), _Box_htmlNode = new WeakMap(), _Box_viewOption = new WeakMap(), _Box_editOption = new WeakMap(), _Box_deleteOption = new WeakMap();
class ViewOnlyBox extends Box {
    constructor(boxFactory) {
        super();
        _ViewOnlyBox_boxFactory.set(this, void 0);
        __classPrivateFieldSet(this, _ViewOnlyBox_boxFactory, boxFactory, "f");
    }
    makeBox(displayMode) {
        this.setViewOption(__classPrivateFieldGet(this, _ViewOnlyBox_boxFactory, "f").assignViewOption());
        this.setEditOption(__classPrivateFieldGet(this, _ViewOnlyBox_boxFactory, "f").assignEditOption());
        this.setDeleteOption(__classPrivateFieldGet(this, _ViewOnlyBox_boxFactory, "f").assignDeleteOption());
        this.render(displayMode == "Tile" ? new TileRenderOption() : new RowRenderOption());
    }
}
_ViewOnlyBox_boxFactory = new WeakMap();
class BoxBuilder {
    orderABox(typeOfBox, displayMode) {
        const theBox = this.makeBox(typeOfBox);
        theBox.makeBox(displayMode);
        return theBox;
    }
}
class OrderABox extends BoxBuilder {
    makeBox(typeOfBox) {
        let theBox = null;
        if (typeOfBox == "View Only") {
            const boxFactory = new ViewOnlyBoxFactory();
            theBox = new ViewOnlyBox(boxFactory);
            theBox.setLabel("A View Only Box");
        }
        return theBox;
    }
}


/***/ }),

/***/ 277:
/*!******************************!*\
  !*** ./frontend/src/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ 462);
/* harmony import */ var _brand_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand.png */ 505);
/* harmony import */ var _components_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/box */ 32);



function component() {
    const element = document.createElement('div');
    element.innerHTML = "arst";
    const myIcon = new Image();
    myIcon.src = _brand_png__WEBPACK_IMPORTED_MODULE_1__;
    element.appendChild(myIcon);
    const boxBuilder = new _components_box__WEBPACK_IMPORTED_MODULE_2__.OrderABox();
    const viewOnlyBox = boxBuilder.orderABox("View Only", "Row");
    viewOnlyBox.appendThisHTMLTo(element);
    const anotherViewOnlyBox = boxBuilder.orderABox("View Only", "Row");
    anotherViewOnlyBox.appendBoxChild(viewOnlyBox);
    anotherViewOnlyBox.appendThisHTMLTo(element);
    return element;
}
document.body.appendChild(component());


/***/ }),

/***/ 505:
/*!********************************!*\
  !*** ./frontend/src/brand.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef4bac32a69aec712b0d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(277));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ2xCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDN0pxQjtBQUNTO0FBQzhCO0FBRTdELFNBQVMsU0FBUztJQUNoQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBRTNCLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyx1Q0FBSSxDQUFDO0lBRWxCLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFNUIsTUFBTSxVQUFVLEdBQWUsSUFBSSxzREFBUyxFQUFFLENBQUM7SUFDL0MsTUFBTSxXQUFXLEdBQVEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sa0JBQWtCLEdBQVEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzdDLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZS5zY3NzP2NiOWQiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2JveC50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBjb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9mcm9udGVuZC9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBSFc7QUFFYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9keS1jb2xvcjogcmVkO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgY29sb3I6ICRib2R5LWNvbG9yO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbnRlcmZhY2UgUmVuZGVyT3B0aW9uIHsgcmVuZGVyKGJveDogQm94KTogTm9kZTsgfVxyXG5jbGFzcyBUaWxlUmVuZGVyT3B0aW9uIGltcGxlbWVudHMgUmVuZGVyT3B0aW9uIHtcclxuICAgIHJlbmRlcihib3g6IEJveCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBodG1sTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaHRtbE5vZGUuaW5uZXJIVE1MID0gXCJhIGJveCBhcyB0aWxlXCI7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxOb2RlO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvd1JlbmRlck9wdGlvbiBpbXBsZW1lbnRzIFJlbmRlck9wdGlvbiB7XHJcbiAgICByZW5kZXIoYm94OiBCb3gpOiBIVE1MVGFibGVSb3dFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBodG1sTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBodG1sTm9kZS5pbm5lckhUTUwgPSBcImEgYm94IGFzIHJvd1wiO1xyXG4gICAgICAgIHJldHVybiBodG1sTm9kZTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFZpZXdPcHRpb24geyB2aWV3KCk6IHZvaWQ7IH1cclxuY2xhc3MgTm9WaWV3T3B0aW9uIGltcGxlbWVudHMgVmlld09wdGlvbiB7XHJcbiAgICB2aWV3KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG8gbm90aGluZ1wiKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBDb21tb25WaWV3T3B0aW9uIGltcGxlbWVudHMgVmlld09wdGlvbiB7XHJcbiAgICB2aWV3KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmlldyBpbiBOb3JtYWwgTW9kZVwiKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBQcml2aWxlZ2VkVmlld09wdGlvbiBpbXBsZW1lbnRzIFZpZXdPcHRpb24ge1xyXG4gICAgdmlldygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZpZXcgaW4gUHJpdmlsZWdlZCBNb2RlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRWRpdE9wdGlvbiB7IGVkaXQoKTogdm9pZDsgfVxyXG5jbGFzcyBOb0VkaXRPcHRpb24gaW1wbGVtZW50cyBFZGl0T3B0aW9uIHtcclxuICAgIGVkaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEbyBub3RoaW5nXCIpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIENvbW1vbkVkaXRPcHRpb24gaW1wbGVtZW50cyBFZGl0T3B0aW9uIHtcclxuICAgIGVkaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFZGl0IGluIE5vcm1hbCBNb2RlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsZXRlT3B0aW9uIHsgZGVsZXRlKCk6IHZvaWQ7IH1cclxuY2xhc3MgTm9EZWxldGVPcHRpb24gaW1wbGVtZW50cyBEZWxldGVPcHRpb24ge1xyXG4gICAgZGVsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG8gbm90aGluZ1wiKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBDb21tb25EZWxldGVPcHRpb24gaW1wbGVtZW50cyBEZWxldGVPcHRpb24ge1xyXG4gICAgZGVsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG8gbm90aGluZ1wiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEJveEZhY3Rvcnkge1xyXG4gICAgYXNzaWduVmlld09wdGlvbigpOiBWaWV3T3B0aW9uO1xyXG4gICAgYXNzaWduRWRpdE9wdGlvbigpOiBFZGl0T3B0aW9uO1xyXG4gICAgYXNzaWduRGVsZXRlT3B0aW9uKCk6IERlbGV0ZU9wdGlvbjtcclxufVxyXG5jbGFzcyBWaWV3T25seUJveEZhY3RvcnkgaW1wbGVtZW50cyBCb3hGYWN0b3J5e1xyXG4gICAgYXNzaWduVmlld09wdGlvbigpOiBWaWV3T3B0aW9uIHsgcmV0dXJuIG5ldyBOb1ZpZXdPcHRpb24oKTsgfVxyXG4gICAgYXNzaWduRWRpdE9wdGlvbigpOiBFZGl0T3B0aW9uIHsgcmV0dXJuIG5ldyBOb0VkaXRPcHRpb24oKTsgfVxyXG4gICAgYXNzaWduRGVsZXRlT3B0aW9uKCk6IERlbGV0ZU9wdGlvbiB7IHJldHVybiBuZXcgTm9EZWxldGVPcHRpb24oKTsgfVxyXG59XHJcbmNsYXNzIENvbW1vbkJveEZhY3RvcnkgaW1wbGVtZW50cyBCb3hGYWN0b3J5e1xyXG4gICAgYXNzaWduVmlld09wdGlvbigpOiBWaWV3T3B0aW9uIHsgcmV0dXJuIG5ldyBDb21tb25WaWV3T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkVkaXRPcHRpb24oKTogRWRpdE9wdGlvbiB7IHJldHVybiBuZXcgTm9FZGl0T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkRlbGV0ZU9wdGlvbigpOiBEZWxldGVPcHRpb24geyByZXR1cm4gbmV3IE5vRGVsZXRlT3B0aW9uKCk7IH1cclxufVxyXG5jbGFzcyBBZG1pbkJveEZhY3RvcnkgaW1wbGVtZW50cyBCb3hGYWN0b3J5e1xyXG4gICAgYXNzaWduVmlld09wdGlvbigpOiBWaWV3T3B0aW9uIHsgcmV0dXJuIG5ldyBQcml2aWxlZ2VkVmlld09wdGlvbigpOyB9XHJcbiAgICBhc3NpZ25FZGl0T3B0aW9uKCk6IEVkaXRPcHRpb24geyByZXR1cm4gbmV3IENvbW1vbkVkaXRPcHRpb24oKTsgfVxyXG4gICAgYXNzaWduRGVsZXRlT3B0aW9uKCk6IERlbGV0ZU9wdGlvbiB7IHJldHVybiBuZXcgQ29tbW9uRGVsZXRlT3B0aW9uKCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJveCB7XHJcbiAgICAjaWQ6IG51bWJlcjtcclxuICAgICNwYXJlbnRJZDogbnVtYmVyO1xyXG4gICAgI2xhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgI3Byb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICAjaHRtbE5vZGU6IE5vZGU7XHJcblxyXG4gICAgI3ZpZXdPcHRpb246IFZpZXdPcHRpb247XHJcbiAgICAjZWRpdE9wdGlvbjogRWRpdE9wdGlvbjtcclxuICAgICNkZWxldGVPcHRpb246IERlbGV0ZU9wdGlvbjtcclxuXHJcbiAgICBhYnN0cmFjdCBtYWtlQm94KGRpc3BsYXlNb2RlOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIHNldElkKGlkOiBudW1iZXIpOiB2b2lkIHsgdGhpcy4jaWQgPSBpZDsgfVxyXG4gICAgc2V0UGFyZW50SWQocGFyZW50SWQ6IG51bWJlcik6IHZvaWQgeyB0aGlzLiNwYXJlbnRJZCA9IHBhcmVudElkOyB9XHJcbiAgICBzZXRMYWJlbChsYWJlbDogc3RyaW5nKTogdm9pZCB7IHRoaXMuI2xhYmVsID0gbGFiZWw7IH1cclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy4jcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlWYWx1ZTsgfVxyXG4gICAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7IHRoaXMuI3Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzOyB9XHJcblxyXG4gICAgYXBwZW5kVGhpc0hUTUxUbyhwYXJlbnROb2RlOiBOb2RlKTogdm9pZCB7IHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4jaHRtbE5vZGUpOyB9XHJcbiAgICBhcHBlbmRCb3hDaGlsZChjaGlsZEJveDogQm94KTogdm9pZCB7IGNoaWxkQm94LmFwcGVuZFRoaXNIVE1MVG8odGhpcy4jaHRtbE5vZGUpOyB9XHJcblxyXG4gICAgc2V0Vmlld09wdGlvbih2aWV3T3B0aW9uOiBWaWV3T3B0aW9uKTogdm9pZCB7IHRoaXMuI3ZpZXdPcHRpb24gPSB2aWV3T3B0aW9uOyB9XHJcbiAgICBzZXRFZGl0T3B0aW9uKGVkaXRPcHRpb246IEVkaXRPcHRpb24pOiB2b2lkIHsgdGhpcy4jZWRpdE9wdGlvbiA9IGVkaXRPcHRpb247IH1cclxuICAgIHNldERlbGV0ZU9wdGlvbihkZWxldGVPcHRpb246IERlbGV0ZU9wdGlvbik6IHZvaWQgeyB0aGlzLiNkZWxldGVPcHRpb24gPSBkZWxldGVPcHRpb247IH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy4jaWQ7IH1cclxuICAgIGdldFBhcmVudElkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLiNwYXJlbnRJZDsgfVxyXG4gICAgZ2V0TGFiZWwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuI2xhYmVsOyB9XHJcbiAgICBnZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiB0aGlzLiNwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07IH1cclxuICAgIGdldFByb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7IHJldHVybiB0aGlzLiNwcm9wZXJ0aWVzOyB9XHJcblxyXG4gICAgcmVuZGVyKHJlbmRlck9wdGlvbjogUmVuZGVyT3B0aW9uKTogdm9pZCB7IHRoaXMuI2h0bWxOb2RlID0gcmVuZGVyT3B0aW9uLnJlbmRlcih0aGlzKTsgfVxyXG5cclxuICAgIGV4ZWN1dGVWaWV3T3B0aW9uKCk6IHZvaWQgeyB0aGlzLiN2aWV3T3B0aW9uLnZpZXcoKSB9O1xyXG4gICAgZXhlY3V0ZUVkaXRPcHRpb24oKTogdm9pZCB7IHRoaXMuI2VkaXRPcHRpb24uZWRpdCgpIH07XHJcbiAgICBleGVjdXRlRGVsZXRlT3B0aW9uKCk6IHZvaWQgeyB0aGlzLiNkZWxldGVPcHRpb24uZGVsZXRlKCkgfTtcclxufVxyXG5jbGFzcyBWaWV3T25seUJveCBleHRlbmRzIEJveCB7XHJcbiAgICAjYm94RmFjdG9yeTogQm94RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihib3hGYWN0b3J5OiBCb3hGYWN0b3J5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiNib3hGYWN0b3J5ID0gYm94RmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlQm94KGRpc3BsYXlNb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFZpZXdPcHRpb24odGhpcy4jYm94RmFjdG9yeS5hc3NpZ25WaWV3T3B0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0RWRpdE9wdGlvbih0aGlzLiNib3hGYWN0b3J5LmFzc2lnbkVkaXRPcHRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5zZXREZWxldGVPcHRpb24odGhpcy4jYm94RmFjdG9yeS5hc3NpZ25EZWxldGVPcHRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKGRpc3BsYXlNb2RlID09IFwiVGlsZVwiPyBuZXcgVGlsZVJlbmRlck9wdGlvbigpIDogbmV3IFJvd1JlbmRlck9wdGlvbigpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJveEJ1aWxkZXIge1xyXG4gICAgYWJzdHJhY3QgbWFrZUJveCh0eXBlT2ZCb3g6IHN0cmluZyk6IEJveDtcclxuXHJcbiAgICBvcmRlckFCb3godHlwZU9mQm94OiBzdHJpbmcsIGRpc3BsYXlNb2RlOiBzdHJpbmcpOiBCb3gge1xyXG4gICAgICAgIGNvbnN0IHRoZUJveDogQm94ID0gdGhpcy5tYWtlQm94KHR5cGVPZkJveCk7XHJcbiAgICAgICAgdGhlQm94Lm1ha2VCb3goZGlzcGxheU1vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhlQm94O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcmRlckFCb3ggZXh0ZW5kcyBCb3hCdWlsZGVyIHtcclxuICAgIG1ha2VCb3godHlwZU9mQm94OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGhlQm94OiBCb3ggPSBudWxsO1xyXG5cclxuICAgICAgICBpZih0eXBlT2ZCb3ggPT0gXCJWaWV3IE9ubHlcIikge1xyXG4gICAgICAgICAgICBjb25zdCBib3hGYWN0b3J5OiBCb3hGYWN0b3J5ID0gbmV3IFZpZXdPbmx5Qm94RmFjdG9yeSgpO1xyXG4gICAgICAgICAgICB0aGVCb3ggPSBuZXcgVmlld09ubHlCb3goYm94RmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHRoZUJveC5zZXRMYWJlbChcIkEgVmlldyBPbmx5IEJveFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGVCb3g7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi9icmFuZC5wbmcnO1xyXG5pbXBvcnQgeyBCb3gsIEJveEJ1aWxkZXIsIE9yZGVyQUJveCB9IGZyb20gJy4vY29tcG9uZW50cy9ib3gnXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBlbGVtZW50LmlubmVySFRNTCA9IFwiYXJzdFwiO1xyXG5cclxuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBteUljb24uc3JjID0gSWNvbjtcclxuXHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xyXG5cclxuICBjb25zdCBib3hCdWlsZGVyOiBCb3hCdWlsZGVyID0gbmV3IE9yZGVyQUJveCgpO1xyXG4gIGNvbnN0IHZpZXdPbmx5Qm94OiBCb3ggPSBib3hCdWlsZGVyLm9yZGVyQUJveChcIlZpZXcgT25seVwiLCBcIlJvd1wiKTtcclxuICB2aWV3T25seUJveC5hcHBlbmRUaGlzSFRNTFRvKGVsZW1lbnQpO1xyXG4gIGNvbnN0IGFub3RoZXJWaWV3T25seUJveDogQm94ID0gYm94QnVpbGRlci5vcmRlckFCb3goXCJWaWV3IE9ubHlcIiwgXCJSb3dcIik7XHJcbiAgYW5vdGhlclZpZXdPbmx5Qm94LmFwcGVuZEJveENoaWxkKHZpZXdPbmx5Qm94KTtcclxuICBhbm90aGVyVmlld09ubHlCb3guYXBwZW5kVGhpc0hUTUxUbyhlbGVtZW50KTtcclxuXHJcbiAgXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==