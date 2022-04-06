"use strict";
(self["webpackChunksds_resource_mgt_system"] = self["webpackChunksds_resource_mgt_system"] || []).push([["main"],{

/***/ 955:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/box.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".box-component {\n  color: red;\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/box.scss"],"names":[],"mappings":"AAEA;EACE,UAHW;AAEb","sourcesContent":["$body-color: red;\r\n\r\n.box-component {\r\n  color: $body-color;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 702:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/main.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ 807:
/*!*******************************************!*\
  !*** ./frontend/src/stylesheets/box.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_box_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./box.scss */ 955);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_box_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 299:
/*!********************************************!*\
  !*** ./frontend/src/stylesheets/main.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ 702);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   "BoxData": () => (/* binding */ BoxData),
/* harmony export */   "OrderABox": () => (/* binding */ OrderABox)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/html */ 910);
/* harmony import */ var _stylesheets_box_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/box.scss */ 807);
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
var _BoxData_id, _BoxData_parentId, _BoxData_label, _BoxData_properties, _Box_data, _Box_htmlNode, _Box_renderOption, _Box_viewOption, _Box_editOption, _Box_deleteOption, _ViewOnlyBox_boxFactory;


class RenderOption {
}
class TileRenderOption extends RenderOption {
    render(box) {
        const htmlNode = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithClass)("box-component tile");
        let innerHTMLString = `<span class="box-component-label">
            ${box.getLabel()}
        </span>`;
        Object.entries(box.getProperties()).forEach(([key, value]) => {
            innerHTMLString += `<p class="box-component-data">${key}: ${value}</p>`;
        });
        htmlNode.innerHTML = innerHTMLString;
        return htmlNode;
    }
}
class RowRenderOption extends RenderOption {
    render(box) {
        const htmlNode = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeTableRowWithClass)("box-component row");
        let innerHTMLString = `<td class="box-component-label">
            ${box.getLabel()}
        </td>`;
        Object.entries(box.getProperties()).forEach(([key, value]) => {
            innerHTMLString += `<td class="box-component-data">${value}</td>`;
        });
        htmlNode.innerHTML = innerHTMLString;
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
class BoxData {
    constructor(id, parentId, label, properties) {
        _BoxData_id.set(this, void 0);
        _BoxData_parentId.set(this, void 0);
        _BoxData_label.set(this, void 0);
        _BoxData_properties.set(this, void 0);
        __classPrivateFieldSet(this, _BoxData_id, id, "f");
        __classPrivateFieldSet(this, _BoxData_parentId, parentId, "f");
        __classPrivateFieldSet(this, _BoxData_label, label, "f");
        __classPrivateFieldSet(this, _BoxData_properties, properties ? properties : {}, "f");
    }
    setProperty(propertyName, propertyValue) { __classPrivateFieldGet(this, _BoxData_properties, "f")[propertyName] = propertyValue; }
    getId() { return __classPrivateFieldGet(this, _BoxData_id, "f"); }
    getParentId() { return __classPrivateFieldGet(this, _BoxData_parentId, "f"); }
    getLabel() { return __classPrivateFieldGet(this, _BoxData_label, "f"); }
    getProperty(propertyName) { return __classPrivateFieldGet(this, _BoxData_properties, "f")[propertyName]; }
    getProperties() { return __classPrivateFieldGet(this, _BoxData_properties, "f"); }
}
_BoxData_id = new WeakMap(), _BoxData_parentId = new WeakMap(), _BoxData_label = new WeakMap(), _BoxData_properties = new WeakMap();
class Box {
    constructor() {
        _Box_data.set(this, void 0);
        _Box_htmlNode.set(this, void 0);
        _Box_renderOption.set(this, void 0);
        _Box_viewOption.set(this, void 0);
        _Box_editOption.set(this, void 0);
        _Box_deleteOption.set(this, void 0);
    }
    setData(data) { __classPrivateFieldSet(this, _Box_data, data, "f"); }
    ;
    setProperty(propertyName, propertyValue) {
        __classPrivateFieldGet(this, _Box_data, "f").setProperty(propertyName, propertyValue);
        this.render();
    }
    appendThisHTMLTo(parentNode) { parentNode.appendChild(__classPrivateFieldGet(this, _Box_htmlNode, "f")); }
    appendBoxChild(childBox) { childBox.appendThisHTMLTo(__classPrivateFieldGet(this, _Box_htmlNode, "f")); }
    setRenderOption(renderOption) { __classPrivateFieldSet(this, _Box_renderOption, renderOption, "f"); }
    setViewOption(viewOption) { __classPrivateFieldSet(this, _Box_viewOption, viewOption, "f"); }
    setEditOption(editOption) { __classPrivateFieldSet(this, _Box_editOption, editOption, "f"); }
    setDeleteOption(deleteOption) { __classPrivateFieldSet(this, _Box_deleteOption, deleteOption, "f"); }
    getId() { return __classPrivateFieldGet(this, _Box_data, "f").getId(); }
    getParentId() { return __classPrivateFieldGet(this, _Box_data, "f").getParentId(); }
    getLabel() { return __classPrivateFieldGet(this, _Box_data, "f").getLabel(); }
    getProperty(propertyName) { return __classPrivateFieldGet(this, _Box_data, "f").getProperty(propertyName); }
    getProperties() { return __classPrivateFieldGet(this, _Box_data, "f").getProperties(); }
    render() {
        let newNode = __classPrivateFieldGet(this, _Box_renderOption, "f").render(this);
        if (__classPrivateFieldGet(this, _Box_htmlNode, "f")) {
            const parentNode = __classPrivateFieldGet(this, _Box_htmlNode, "f").parentNode;
            parentNode.insertBefore(newNode, __classPrivateFieldGet(this, _Box_htmlNode, "f"));
            __classPrivateFieldGet(this, _Box_htmlNode, "f").parentNode.removeChild(__classPrivateFieldGet(this, _Box_htmlNode, "f"));
        }
        __classPrivateFieldSet(this, _Box_htmlNode, newNode, "f");
    }
    executeViewOption() { __classPrivateFieldGet(this, _Box_viewOption, "f").view(); }
    ;
    executeEditOption() { __classPrivateFieldGet(this, _Box_editOption, "f").edit(); }
    ;
    executeDeleteOption() { __classPrivateFieldGet(this, _Box_deleteOption, "f").delete(); }
    ;
}
_Box_data = new WeakMap(), _Box_htmlNode = new WeakMap(), _Box_renderOption = new WeakMap(), _Box_viewOption = new WeakMap(), _Box_editOption = new WeakMap(), _Box_deleteOption = new WeakMap();
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
        this.setRenderOption(displayMode == "Tile" ? new TileRenderOption() : new RowRenderOption());
        this.render();
    }
}
_ViewOnlyBox_boxFactory = new WeakMap();
class BoxBuilder {
    orderABox(typeOfBox, displayMode, boxData) {
        const theBox = this.makeBox(typeOfBox, boxData);
        theBox.makeBox(displayMode);
        return theBox;
    }
}
class OrderABox extends BoxBuilder {
    makeBox(typeOfBox, boxData) {
        let theBox = null;
        if (typeOfBox == "View Only") {
            const boxFactory = new ViewOnlyBoxFactory();
            theBox = new ViewOnlyBox(boxFactory);
            theBox.setData(boxData);
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
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/main.scss */ 299);
/* harmony import */ var _assets_brand_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/brand.png */ 665);
/* harmony import */ var _components_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/box */ 32);



function component() {
    const element = document.createElement('div');
    element.innerHTML = "arst";
    const myIcon = new Image();
    myIcon.src = _assets_brand_png__WEBPACK_IMPORTED_MODULE_1__;
    element.appendChild(myIcon);
    const boxBuilder = new _components_box__WEBPACK_IMPORTED_MODULE_2__.OrderABox();
    const boxProperties = {
        "Serial Number": "33ETTT33333",
        "Model": "Nice",
    };
    const boxData = new _components_box__WEBPACK_IMPORTED_MODULE_2__.BoxData(0, 0, "Nice Stuff", boxProperties);
    const boxxx = boxBuilder.orderABox("View Only", "Tile", boxData);
    boxxx.appendThisHTMLTo(element);
    boxxx.setProperty("Model", "Nicer");
    const table = document.createElement("table");
    element.appendChild(table);
    const row1 = boxBuilder.orderABox("View Only", "Row", boxData);
    row1.appendThisHTMLTo(table);
    const row2 = boxBuilder.orderABox("View Only", "Row", boxData);
    row2.appendThisHTMLTo(table);
    return element;
}
document.body.appendChild(component());


/***/ }),

/***/ 910:
/*!************************************!*\
  !*** ./frontend/src/utils/html.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeDivWithClass": () => (/* binding */ makeDivWithClass),
/* harmony export */   "makeTableRowWithClass": () => (/* binding */ makeTableRowWithClass)
/* harmony export */ });
const makeDivWithClass = (className, innerHTML) => Object.assign(document.createElement("div"), {
    className: className ? className : null,
    innerHTML: innerHTML ? innerHTML : null
});
const makeTableRowWithClass = (className, innerHTML) => Object.assign(document.createElement("tr"), {
    className: className ? className : null,
    innerHTML: innerHTML ? innerHTML : null
});


/***/ }),

/***/ 665:
/*!***************************************!*\
  !*** ./frontend/src/assets/brand.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef4bac32a69aec712b0d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(277));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45YTgxNDBlZDg5OWJiZWEzYjVhYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwwREFBMEQsZUFBZSxHQUFHLE9BQU8sb0dBQW9HLFVBQVUsMENBQTBDLHdCQUF3Qix5QkFBeUIsS0FBSyxtQkFBbUI7QUFDcFQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXNKO0FBQ3RKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEhBQU87Ozs7QUFJZ0c7QUFDeEgsT0FBTyxpRUFBZSwwSEFBTyxJQUFJLGlJQUFjLEdBQUcsaUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBdUo7QUFDdko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUlpRztBQUN6SCxPQUFPLGlFQUFlLDJIQUFPLElBQUksa0lBQWMsR0FBRyxrSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0U7QUFDdkM7QUFDakMsTUFBZSxZQUFZO0NBRTFCO0FBQ0QsTUFBTSxnQkFBaUIsU0FBUSxZQUFZO0lBQ3ZDLE1BQU0sQ0FBQyxHQUFRO1FBQ1gsTUFBTSxRQUFRLEdBQUcsNkRBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV4RCxJQUFJLGVBQWUsR0FDbkI7Y0FDTSxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNaLENBQUM7UUFFVCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDekQsZUFBZSxJQUFJLGlDQUFpQyxHQUFHLEtBQUssS0FBSyxNQUFNLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsU0FBUyxHQUFHLGVBQWU7UUFFcEMsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBQ0QsTUFBTSxlQUFnQixTQUFRLFlBQVk7SUFDdEMsTUFBTSxDQUFDLEdBQVE7UUFDWCxNQUFNLFFBQVEsR0FBRyxrRUFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVELElBQUksZUFBZSxHQUNuQjtjQUNNLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Y0FDZCxDQUFDO1FBRVAsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQ3pELGVBQWUsSUFBSSxrQ0FBa0MsS0FBSyxPQUFPLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsU0FBUyxHQUFHLGVBQWU7UUFFcEMsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBR0QsTUFBTSxZQUFZO0lBQ2QsSUFBSTtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBQ0QsTUFBTSxnQkFBZ0I7SUFDbEIsSUFBSTtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7QUFDRCxNQUFNLG9CQUFvQjtJQUN0QixJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQUdELE1BQU0sWUFBWTtJQUNkLElBQUk7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUNELE1BQU0sZ0JBQWdCO0lBQ2xCLElBQUk7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNKO0FBR0QsTUFBTSxjQUFjO0lBQ2hCLE1BQU07UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUNELE1BQU0sa0JBQWtCO0lBQ3BCLE1BQU07UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQU9ELE1BQU0sa0JBQWtCO0lBQ3BCLGdCQUFnQixLQUFpQixPQUFPLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdELGdCQUFnQixLQUFpQixPQUFPLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdELGtCQUFrQixLQUFtQixPQUFPLElBQUksY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3RFO0FBQ0QsTUFBTSxnQkFBZ0I7SUFDbEIsZ0JBQWdCLEtBQWlCLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxnQkFBZ0IsS0FBaUIsT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RCxrQkFBa0IsS0FBbUIsT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUN0RTtBQUNELE1BQU0sZUFBZTtJQUNqQixnQkFBZ0IsS0FBaUIsT0FBTyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLGdCQUFnQixLQUFpQixPQUFPLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsa0JBQWtCLEtBQW1CLE9BQU8sSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUMxRTtBQUVNLE1BQU0sT0FBTztJQU9oQixZQUFZLEVBQVUsRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxVQUFxQztRQU45Riw4QkFBWTtRQUNaLG9DQUFrQjtRQUNsQixpQ0FBZTtRQUVmLHNDQUF1QztRQUduQywyQkFBSSxlQUFPLEVBQUUsT0FBQztRQUNkLDJCQUFJLHFCQUFhLFFBQVEsT0FBQztRQUMxQiwyQkFBSSxrQkFBVSxLQUFLLE9BQUM7UUFDcEIsMkJBQUksdUJBQWUsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBQztJQUNwRCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFlBQW9CLEVBQUUsYUFBcUIsSUFBVSwyQkFBSSwyQkFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFbEgsS0FBSyxLQUFhLE9BQU8sMkJBQUksbUJBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEMsV0FBVyxLQUFhLE9BQU8sMkJBQUkseUJBQVUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsUUFBUSxLQUFhLE9BQU8sMkJBQUksc0JBQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUMsV0FBVyxDQUFDLFlBQW9CLElBQVksT0FBTywyQkFBSSwyQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRixhQUFhLEtBQWdDLE9BQU8sMkJBQUksMkJBQVksQ0FBQyxDQUFDLENBQUM7Q0FDMUU7O0FBRU0sTUFBZSxHQUFHO0lBQXpCO1FBQ0ksNEJBQWU7UUFFZixnQ0FBZ0I7UUFFaEIsb0NBQTRCO1FBRTVCLGtDQUF3QjtRQUN4QixrQ0FBd0I7UUFDeEIsb0NBQTRCO0lBd0NoQyxDQUFDO0lBcENHLE9BQU8sQ0FBQyxJQUFhLElBQVUsMkJBQUksYUFBUyxJQUFJLFNBQUM7SUFBQSxDQUFDO0lBQ2xELFdBQVcsQ0FBQyxZQUFvQixFQUFFLGFBQXFCO1FBQ25ELDJCQUFJLGlCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQWdCLElBQVUsVUFBVSxDQUFDLFdBQVcsQ0FBQywyQkFBSSxxQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLGNBQWMsQ0FBQyxRQUFhLElBQVUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDJCQUFJLHFCQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEYsZUFBZSxDQUFDLFlBQTBCLElBQVUsMkJBQUkscUJBQWlCLFlBQVksT0FBQyxDQUFDLENBQUM7SUFFeEYsYUFBYSxDQUFDLFVBQXNCLElBQVUsMkJBQUksbUJBQWUsVUFBVSxPQUFDLENBQUMsQ0FBQztJQUM5RSxhQUFhLENBQUMsVUFBc0IsSUFBVSwyQkFBSSxtQkFBZSxVQUFVLE9BQUMsQ0FBQyxDQUFDO0lBQzlFLGVBQWUsQ0FBQyxZQUEwQixJQUFVLDJCQUFJLHFCQUFpQixZQUFZLE9BQUMsQ0FBQyxDQUFDO0lBRXhGLEtBQUssS0FBYSxPQUFPLDJCQUFJLGlCQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLFdBQVcsS0FBYSxPQUFPLDJCQUFJLGlCQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELFFBQVEsS0FBYSxPQUFPLDJCQUFJLGlCQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELFdBQVcsQ0FBQyxZQUFvQixJQUFZLE9BQU8sMkJBQUksaUJBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLGFBQWEsS0FBZ0MsT0FBTywyQkFBSSxpQkFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVqRixNQUFNO1FBQ0YsSUFBSSxPQUFPLEdBQVMsMkJBQUkseUJBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEQsSUFBSSwyQkFBSSxxQkFBVSxFQUFFO1lBQ2hCLE1BQU0sVUFBVSxHQUFTLDJCQUFJLHFCQUFVLENBQUMsVUFBVSxDQUFDO1lBQ25ELFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDJCQUFJLHFCQUFVLENBQUMsQ0FBQztZQUNqRCwyQkFBSSxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsMkJBQUkscUJBQVUsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsMkJBQUksaUJBQWEsT0FBTyxPQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsS0FBVywyQkFBSSx1QkFBWSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3RELGlCQUFpQixLQUFXLDJCQUFJLHVCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUFBLENBQUM7SUFDdEQsbUJBQW1CLEtBQVcsMkJBQUkseUJBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0lBQUEsQ0FBQztDQUMvRDs7QUFDRCxNQUFNLFdBQVksU0FBUSxHQUFHO0lBR3pCLFlBQVksVUFBc0I7UUFDOUIsS0FBSyxFQUFFLENBQUM7UUFIWiwwQ0FBd0I7UUFJcEIsMkJBQUksMkJBQWUsVUFBVSxPQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPLENBQUMsV0FBbUI7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBSSwrQkFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUFJLCtCQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQUksK0JBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLElBQUksTUFBTSxFQUFDLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFNUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjs7QUFFTSxNQUFlLFVBQVU7SUFHNUIsU0FBUyxDQUFDLFNBQWlCLEVBQUUsV0FBbUIsRUFBRSxPQUFnQjtRQUM5RCxNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQUNNLE1BQU0sU0FBVSxTQUFRLFVBQVU7SUFDckMsT0FBTyxDQUFDLFNBQWlCLEVBQUUsT0FBZ0I7UUFDdkMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO1FBRXZCLElBQUcsU0FBUyxJQUFJLFdBQVcsRUFBRTtZQUN6QixNQUFNLFVBQVUsR0FBZSxJQUFJLGtCQUFrQixFQUFFLENBQUM7WUFDeEQsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQ3pOZ0M7QUFDSztBQUNnQztBQUV0RSxTQUFTLFNBQVM7SUFDaEIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU5QyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUUzQixNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsOENBQUksQ0FBQztJQUVsQixPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTVCLE1BQU0sVUFBVSxHQUFlLElBQUksc0RBQVMsRUFBRSxDQUFDO0lBRS9DLE1BQU0sYUFBYSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxhQUFhO1FBQzlCLE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsTUFBTSxPQUFPLEdBQVksSUFBSSxvREFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRXhFLE1BQU0sS0FBSyxHQUFRLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFcEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLE1BQU0sSUFBSSxHQUFRLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsTUFBTSxJQUFJLEdBQVEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUk3QixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDaEMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFNBQWtCLEVBQUUsU0FBa0IsRUFBa0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQztJQUNwSSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7SUFDdkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO0NBQzFDLENBQUMsQ0FBQztBQUNJLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxTQUFrQixFQUFFLFNBQWtCLEVBQXVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUM7SUFDN0ksU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO0lBQ3ZDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtDQUMxQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9ib3guc2NzcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvYm94LnNjc3M/MDQ4MiIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9tYWluLnNjc3M/ZDA1NyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYm94LnRzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvdXRpbHMvaHRtbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib3gtY29tcG9uZW50IHtcXG4gIGNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9ib3guc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBSFc7QUFFYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9keS1jb2xvcjogcmVkO1xcclxcblxcclxcbi5ib3gtY29tcG9uZW50IHtcXHJcXG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm94LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib3guc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG1ha2VEaXZXaXRoQ2xhc3MsIG1ha2VUYWJsZVJvd1dpdGhDbGFzcyB9IGZyb20gXCIuLi91dGlscy9odG1sXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2JveC5zY3NzXCI7XHJcbmFic3RyYWN0IGNsYXNzIFJlbmRlck9wdGlvbiB7XHJcbiAgICBhYnN0cmFjdCByZW5kZXIoYm94OiBCb3gpOiBIVE1MRWxlbWVudDtcclxufVxyXG5jbGFzcyBUaWxlUmVuZGVyT3B0aW9uIGV4dGVuZHMgUmVuZGVyT3B0aW9uIHtcclxuICAgIHJlbmRlcihib3g6IEJveCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBodG1sTm9kZSA9IG1ha2VEaXZXaXRoQ2xhc3MoXCJib3gtY29tcG9uZW50IHRpbGVcIik7XHJcblxyXG4gICAgICAgIGxldCBpbm5lckhUTUxTdHJpbmc6IHN0cmluZyA9XHJcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwiYm94LWNvbXBvbmVudC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAke2JveC5nZXRMYWJlbCgpfVxyXG4gICAgICAgIDwvc3Bhbj5gO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhib3guZ2V0UHJvcGVydGllcygpKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaW5uZXJIVE1MU3RyaW5nICs9IGA8cCBjbGFzcz1cImJveC1jb21wb25lbnQtZGF0YVwiPiR7a2V5fTogJHt2YWx1ZX08L3A+YDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaHRtbE5vZGUuaW5uZXJIVE1MID0gaW5uZXJIVE1MU3RyaW5nXHJcblxyXG4gICAgICAgIHJldHVybiBodG1sTm9kZTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBSb3dSZW5kZXJPcHRpb24gZXh0ZW5kcyBSZW5kZXJPcHRpb24ge1xyXG4gICAgcmVuZGVyKGJveDogQm94KTogSFRNTFRhYmxlUm93RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBtYWtlVGFibGVSb3dXaXRoQ2xhc3MoXCJib3gtY29tcG9uZW50IHJvd1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGlubmVySFRNTFN0cmluZzogc3RyaW5nID1cclxuICAgICAgICBgPHRkIGNsYXNzPVwiYm94LWNvbXBvbmVudC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAke2JveC5nZXRMYWJlbCgpfVxyXG4gICAgICAgIDwvdGQ+YDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoYm94LmdldFByb3BlcnRpZXMoKSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlubmVySFRNTFN0cmluZyArPSBgPHRkIGNsYXNzPVwiYm94LWNvbXBvbmVudC1kYXRhXCI+JHt2YWx1ZX08L3RkPmA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGh0bWxOb2RlLmlubmVySFRNTCA9IGlubmVySFRNTFN0cmluZ1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbE5vZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBWaWV3T3B0aW9uIHsgdmlldygpOiB2b2lkOyB9XHJcbmNsYXNzIE5vVmlld09wdGlvbiBpbXBsZW1lbnRzIFZpZXdPcHRpb24ge1xyXG4gICAgdmlldygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvIG5vdGhpbmdcIik7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQ29tbW9uVmlld09wdGlvbiBpbXBsZW1lbnRzIFZpZXdPcHRpb24ge1xyXG4gICAgdmlldygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZpZXcgaW4gTm9ybWFsIE1vZGVcIik7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUHJpdmlsZWdlZFZpZXdPcHRpb24gaW1wbGVtZW50cyBWaWV3T3B0aW9uIHtcclxuICAgIHZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWaWV3IGluIFByaXZpbGVnZWQgTW9kZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEVkaXRPcHRpb24geyBlZGl0KCk6IHZvaWQ7IH1cclxuY2xhc3MgTm9FZGl0T3B0aW9uIGltcGxlbWVudHMgRWRpdE9wdGlvbiB7XHJcbiAgICBlZGl0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG8gbm90aGluZ1wiKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBDb21tb25FZGl0T3B0aW9uIGltcGxlbWVudHMgRWRpdE9wdGlvbiB7XHJcbiAgICBlZGl0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdCBpbiBOb3JtYWwgTW9kZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIERlbGV0ZU9wdGlvbiB7IGRlbGV0ZSgpOiB2b2lkOyB9XHJcbmNsYXNzIE5vRGVsZXRlT3B0aW9uIGltcGxlbWVudHMgRGVsZXRlT3B0aW9uIHtcclxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvIG5vdGhpbmdcIik7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQ29tbW9uRGVsZXRlT3B0aW9uIGltcGxlbWVudHMgRGVsZXRlT3B0aW9uIHtcclxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvIG5vdGhpbmdcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb3hGYWN0b3J5IHtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbjtcclxuICAgIGFzc2lnbkVkaXRPcHRpb24oKTogRWRpdE9wdGlvbjtcclxuICAgIGFzc2lnbkRlbGV0ZU9wdGlvbigpOiBEZWxldGVPcHRpb247XHJcbn1cclxuY2xhc3MgVmlld09ubHlCb3hGYWN0b3J5IGltcGxlbWVudHMgQm94RmFjdG9yeXtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbiB7IHJldHVybiBuZXcgTm9WaWV3T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkVkaXRPcHRpb24oKTogRWRpdE9wdGlvbiB7IHJldHVybiBuZXcgTm9FZGl0T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkRlbGV0ZU9wdGlvbigpOiBEZWxldGVPcHRpb24geyByZXR1cm4gbmV3IE5vRGVsZXRlT3B0aW9uKCk7IH1cclxufVxyXG5jbGFzcyBDb21tb25Cb3hGYWN0b3J5IGltcGxlbWVudHMgQm94RmFjdG9yeXtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbiB7IHJldHVybiBuZXcgQ29tbW9uVmlld09wdGlvbigpOyB9XHJcbiAgICBhc3NpZ25FZGl0T3B0aW9uKCk6IEVkaXRPcHRpb24geyByZXR1cm4gbmV3IE5vRWRpdE9wdGlvbigpOyB9XHJcbiAgICBhc3NpZ25EZWxldGVPcHRpb24oKTogRGVsZXRlT3B0aW9uIHsgcmV0dXJuIG5ldyBOb0RlbGV0ZU9wdGlvbigpOyB9XHJcbn1cclxuY2xhc3MgQWRtaW5Cb3hGYWN0b3J5IGltcGxlbWVudHMgQm94RmFjdG9yeXtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbiB7IHJldHVybiBuZXcgUHJpdmlsZWdlZFZpZXdPcHRpb24oKTsgfVxyXG4gICAgYXNzaWduRWRpdE9wdGlvbigpOiBFZGl0T3B0aW9uIHsgcmV0dXJuIG5ldyBDb21tb25FZGl0T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkRlbGV0ZU9wdGlvbigpOiBEZWxldGVPcHRpb24geyByZXR1cm4gbmV3IENvbW1vbkRlbGV0ZU9wdGlvbigpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3hEYXRhIHtcclxuICAgICNpZDogbnVtYmVyO1xyXG4gICAgI3BhcmVudElkOiBudW1iZXI7XHJcbiAgICAjbGFiZWw6IHN0cmluZztcclxuXHJcbiAgICAjcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBwYXJlbnRJZDogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KXtcclxuICAgICAgICB0aGlzLiNpZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuI3BhcmVudElkID0gcGFyZW50SWQ7XHJcbiAgICAgICAgdGhpcy4jbGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLiNwcm9wZXJ0aWVzID0gcHJvcGVydGllcyA/IHByb3BlcnRpZXMgOiB7fTtcclxuICAgIH1cclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy4jcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlWYWx1ZTsgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLiNpZDsgfVxyXG4gICAgZ2V0UGFyZW50SWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuI3BhcmVudElkOyB9XHJcbiAgICBnZXRMYWJlbCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy4jbGFiZWw7IH1cclxuICAgIGdldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuI3Byb3BlcnRpZXNbcHJvcGVydHlOYW1lXTsgfVxyXG4gICAgZ2V0UHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHsgcmV0dXJuIHRoaXMuI3Byb3BlcnRpZXM7IH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJveCB7XHJcbiAgICAjZGF0YTogQm94RGF0YTtcclxuXHJcbiAgICAjaHRtbE5vZGU6IE5vZGU7XHJcblxyXG4gICAgI3JlbmRlck9wdGlvbjogUmVuZGVyT3B0aW9uO1xyXG5cclxuICAgICN2aWV3T3B0aW9uOiBWaWV3T3B0aW9uO1xyXG4gICAgI2VkaXRPcHRpb246IEVkaXRPcHRpb247XHJcbiAgICAjZGVsZXRlT3B0aW9uOiBEZWxldGVPcHRpb247XHJcblxyXG4gICAgYWJzdHJhY3QgbWFrZUJveChkaXNwbGF5TW9kZTogc3RyaW5nKTogdm9pZDtcclxuICAgIFxyXG4gICAgc2V0RGF0YShkYXRhOiBCb3hEYXRhKTogdm9pZCB7IHRoaXMuI2RhdGEgPSBkYXRhfTtcclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiNkYXRhLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRUaGlzSFRNTFRvKHBhcmVudE5vZGU6IE5vZGUpOiB2b2lkIHsgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNodG1sTm9kZSk7IH1cclxuICAgIGFwcGVuZEJveENoaWxkKGNoaWxkQm94OiBCb3gpOiB2b2lkIHsgY2hpbGRCb3guYXBwZW5kVGhpc0hUTUxUbyh0aGlzLiNodG1sTm9kZSk7IH1cclxuXHJcbiAgICBzZXRSZW5kZXJPcHRpb24ocmVuZGVyT3B0aW9uOiBSZW5kZXJPcHRpb24pOiB2b2lkIHsgdGhpcy4jcmVuZGVyT3B0aW9uID0gcmVuZGVyT3B0aW9uOyB9XHJcblxyXG4gICAgc2V0Vmlld09wdGlvbih2aWV3T3B0aW9uOiBWaWV3T3B0aW9uKTogdm9pZCB7IHRoaXMuI3ZpZXdPcHRpb24gPSB2aWV3T3B0aW9uOyB9XHJcbiAgICBzZXRFZGl0T3B0aW9uKGVkaXRPcHRpb246IEVkaXRPcHRpb24pOiB2b2lkIHsgdGhpcy4jZWRpdE9wdGlvbiA9IGVkaXRPcHRpb247IH1cclxuICAgIHNldERlbGV0ZU9wdGlvbihkZWxldGVPcHRpb246IERlbGV0ZU9wdGlvbik6IHZvaWQgeyB0aGlzLiNkZWxldGVPcHRpb24gPSBkZWxldGVPcHRpb247IH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy4jZGF0YS5nZXRJZCgpOyB9XHJcbiAgICBnZXRQYXJlbnRJZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy4jZGF0YS5nZXRQYXJlbnRJZCgpOyB9XHJcbiAgICBnZXRMYWJlbCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy4jZGF0YS5nZXRMYWJlbCgpOyB9XHJcbiAgICBnZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiB0aGlzLiNkYXRhLmdldFByb3BlcnR5KHByb3BlcnR5TmFtZSk7IH1cclxuICAgIGdldFByb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7IHJldHVybiB0aGlzLiNkYXRhLmdldFByb3BlcnRpZXMoKTsgfVxyXG5cclxuICAgIHJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmV3Tm9kZTogTm9kZSA9IHRoaXMuI3JlbmRlck9wdGlvbi5yZW5kZXIodGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiNodG1sTm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlOiBOb2RlID0gdGhpcy4jaHRtbE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy4jaHRtbE5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLiNodG1sTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuI2h0bWxOb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI2h0bWxOb2RlID0gbmV3Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlVmlld09wdGlvbigpOiB2b2lkIHsgdGhpcy4jdmlld09wdGlvbi52aWV3KCkgfTtcclxuICAgIGV4ZWN1dGVFZGl0T3B0aW9uKCk6IHZvaWQgeyB0aGlzLiNlZGl0T3B0aW9uLmVkaXQoKSB9O1xyXG4gICAgZXhlY3V0ZURlbGV0ZU9wdGlvbigpOiB2b2lkIHsgdGhpcy4jZGVsZXRlT3B0aW9uLmRlbGV0ZSgpIH07XHJcbn1cclxuY2xhc3MgVmlld09ubHlCb3ggZXh0ZW5kcyBCb3gge1xyXG4gICAgI2JveEZhY3Rvcnk6IEJveEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYm94RmFjdG9yeTogQm94RmFjdG9yeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4jYm94RmFjdG9yeSA9IGJveEZhY3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUJveChkaXNwbGF5TW9kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRWaWV3T3B0aW9uKHRoaXMuI2JveEZhY3RvcnkuYXNzaWduVmlld09wdGlvbigpKTtcclxuICAgICAgICB0aGlzLnNldEVkaXRPcHRpb24odGhpcy4jYm94RmFjdG9yeS5hc3NpZ25FZGl0T3B0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVsZXRlT3B0aW9uKHRoaXMuI2JveEZhY3RvcnkuYXNzaWduRGVsZXRlT3B0aW9uKCkpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFJlbmRlck9wdGlvbihkaXNwbGF5TW9kZSA9PSBcIlRpbGVcIj8gbmV3IFRpbGVSZW5kZXJPcHRpb24oKSA6IG5ldyBSb3dSZW5kZXJPcHRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCb3hCdWlsZGVyIHtcclxuICAgIGFic3RyYWN0IG1ha2VCb3godHlwZU9mQm94OiBzdHJpbmcsIGJveERhdGE6IEJveERhdGEpOiBCb3g7XHJcblxyXG4gICAgb3JkZXJBQm94KHR5cGVPZkJveDogc3RyaW5nLCBkaXNwbGF5TW9kZTogc3RyaW5nLCBib3hEYXRhOiBCb3hEYXRhKTogQm94IHtcclxuICAgICAgICBjb25zdCB0aGVCb3g6IEJveCA9IHRoaXMubWFrZUJveCh0eXBlT2ZCb3gsIGJveERhdGEpO1xyXG4gICAgICAgIHRoZUJveC5tYWtlQm94KGRpc3BsYXlNb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoZUJveDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgT3JkZXJBQm94IGV4dGVuZHMgQm94QnVpbGRlciB7XHJcbiAgICBtYWtlQm94KHR5cGVPZkJveDogc3RyaW5nLCBib3hEYXRhOiBCb3hEYXRhKSB7XHJcbiAgICAgICAgbGV0IHRoZUJveDogQm94ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYodHlwZU9mQm94ID09IFwiVmlldyBPbmx5XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgYm94RmFjdG9yeTogQm94RmFjdG9yeSA9IG5ldyBWaWV3T25seUJveEZhY3RvcnkoKTtcclxuICAgICAgICAgICAgdGhlQm94ID0gbmV3IFZpZXdPbmx5Qm94KGJveEZhY3RvcnkpO1xyXG4gICAgICAgICAgICB0aGVCb3guc2V0RGF0YShib3hEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGVCb3g7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgXCIuL3N0eWxlc2hlZXRzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2Fzc2V0cy9icmFuZC5wbmcnO1xyXG5pbXBvcnQgeyBCb3hEYXRhLCBCb3gsIEJveEJ1aWxkZXIsIE9yZGVyQUJveCB9IGZyb20gJy4vY29tcG9uZW50cy9ib3gnXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBlbGVtZW50LmlubmVySFRNTCA9IFwiYXJzdFwiO1xyXG5cclxuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBteUljb24uc3JjID0gSWNvbjtcclxuXHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xyXG5cclxuICBjb25zdCBib3hCdWlsZGVyOiBCb3hCdWlsZGVyID0gbmV3IE9yZGVyQUJveCgpO1xyXG4gIFxyXG4gIGNvbnN0IGJveFByb3BlcnRpZXMgPSB7XHJcbiAgICBcIlNlcmlhbCBOdW1iZXJcIjogXCIzM0VUVFQzMzMzM1wiLFxyXG4gICAgXCJNb2RlbFwiOiBcIk5pY2VcIixcclxuICB9XHJcbiAgY29uc3QgYm94RGF0YTogQm94RGF0YSA9IG5ldyBCb3hEYXRhKDAsIDAsIFwiTmljZSBTdHVmZlwiLCBib3hQcm9wZXJ0aWVzKTtcclxuXHJcbiAgY29uc3QgYm94eHg6IEJveCA9IGJveEJ1aWxkZXIub3JkZXJBQm94KFwiVmlldyBPbmx5XCIsIFwiVGlsZVwiLCBib3hEYXRhKTtcclxuICBib3h4eC5hcHBlbmRUaGlzSFRNTFRvKGVsZW1lbnQpO1xyXG4gIGJveHh4LnNldFByb3BlcnR5KFwiTW9kZWxcIiwgXCJOaWNlclwiKTtcclxuXHJcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgY29uc3Qgcm93MTogQm94ID0gYm94QnVpbGRlci5vcmRlckFCb3goXCJWaWV3IE9ubHlcIiwgXCJSb3dcIiwgYm94RGF0YSk7XHJcbiAgcm93MS5hcHBlbmRUaGlzSFRNTFRvKHRhYmxlKTtcclxuICBjb25zdCByb3cyOiBCb3ggPSBib3hCdWlsZGVyLm9yZGVyQUJveChcIlZpZXcgT25seVwiLCBcIlJvd1wiLCBib3hEYXRhKTtcclxuICByb3cyLmFwcGVuZFRoaXNIVE1MVG8odGFibGUpO1xyXG4gIFxyXG5cclxuICBcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7IiwiZXhwb3J0IGNvbnN0IG1ha2VEaXZXaXRoQ2xhc3MgPSAoY2xhc3NOYW1lPzogc3RyaW5nLCBpbm5lckhUTUw/OiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCA9PiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikse1xyXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgPyBjbGFzc05hbWUgOiBudWxsLFxyXG4gICAgaW5uZXJIVE1MOiBpbm5lckhUTUwgPyBpbm5lckhUTUwgOiBudWxsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbWFrZVRhYmxlUm93V2l0aENsYXNzID0gKGNsYXNzTmFtZT86IHN0cmluZywgaW5uZXJIVE1MPzogc3RyaW5nKTogSFRNTFRhYmxlUm93RWxlbWVudCA9PiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSx7XHJcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6IG51bGwsXHJcbiAgICBpbm5lckhUTUw6IGlubmVySFRNTCA/IGlubmVySFRNTCA6IG51bGxcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9