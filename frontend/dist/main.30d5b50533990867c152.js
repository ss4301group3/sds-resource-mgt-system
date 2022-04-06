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

/***/ 260:
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


class TileRenderOption {
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
class RowRenderOption {
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
        if (__classPrivateFieldGet(this, _Box_htmlNode, "f") && __classPrivateFieldGet(this, _Box_htmlNode, "f").parentNode) {
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
        let theBox;
        if (typeOfBox == "View Only") {
            const boxFactory = new ViewOnlyBoxFactory();
            theBox = new ViewOnlyBox(boxFactory);
            theBox.setData(boxData);
        }
        else {
            const boxFactory = new ViewOnlyBoxFactory();
            theBox = new ViewOnlyBox(boxFactory);
            theBox.setData(boxData);
        }
        return theBox;
    }
}


/***/ }),

/***/ 856:
/*!*****************************************!*\
  !*** ./frontend/src/components/page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAsAppContainer": () => (/* binding */ setAsAppContainer),
/* harmony export */   "showPage": () => (/* binding */ showPage)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/html */ 910);
/* harmony import */ var _page_main_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/main-container */ 519);
/* harmony import */ var _page_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/navbar */ 32);
/* harmony import */ var _page_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/sidenav */ 509);
var _PageData_label, _PageData_remarks, _PageData_route, _PageData_section, _Page_data, _Page_content;




function setAsAppContainer(container) {
    let app = document.querySelector("#App");
    if (!app)
        app = initApp();
    container.appendChild(app);
}
function initApp() {
    const app = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("App");
    app.appendChild((0,_page_navbar__WEBPACK_IMPORTED_MODULE_1__.getNavbarFiller)());
    app.appendChild((0,_page_navbar__WEBPACK_IMPORTED_MODULE_1__.getNavbar)());
    app.appendChild((0,_page_sidenav__WEBPACK_IMPORTED_MODULE_2__.getSidenav)());
    app.appendChild((0,_page_sidenav__WEBPACK_IMPORTED_MODULE_2__.getSidenavToggle)());
    app.appendChild((0,_page_main_container__WEBPACK_IMPORTED_MODULE_3__.getMainContainer)());
    return app;
}
function showPage(pageName) {
}
class DefaultRenderOption {
    render(page) {
    }
}
class PageData {
    constructor() {
        _PageData_label.set(this, void 0);
        _PageData_remarks.set(this, void 0);
        _PageData_route.set(this, void 0);
        _PageData_section.set(this, void 0);
    }
}
_PageData_label = new WeakMap(), _PageData_remarks = new WeakMap(), _PageData_route = new WeakMap(), _PageData_section = new WeakMap();
class Page {
    constructor() {
        _Page_data.set(this, void 0);
        _Page_content.set(this, void 0);
    }
}
_Page_data = new WeakMap(), _Page_content = new WeakMap();
class PageContent {
}


/***/ }),

/***/ 519:
/*!********************************************************!*\
  !*** ./frontend/src/components/page/main-container.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMainContainer": () => (/* binding */ getMainContainer),
/* harmony export */   "getPageContent": () => (/* binding */ getPageContent),
/* harmony export */   "getPageRemarks": () => (/* binding */ getPageRemarks),
/* harmony export */   "getPageTitle": () => (/* binding */ getPageTitle)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/html */ 910);

function getMainContainer() {
    let container = document.querySelector("#AppMainContainer");
    if (!container) {
        container = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppMainContainer");
        container.appendChild(getPageTitle());
        container.appendChild(getPageRemarks());
        container.appendChild(getPageContent());
    }
    return container;
}
function getPageTitle() {
    let title = document.querySelector("#AppPageTitle");
    if (!title)
        title = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeH2WithId)("AppPageTitle");
    return title;
}
function getPageRemarks() {
    let remarks = document.querySelector("#AppPageRemarks");
    if (!remarks)
        remarks = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makePWithId)("AppPageRemarks");
    return remarks;
}
function getPageContent() {
    let content = document.querySelector("#AppPageContent");
    if (!content)
        content = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppPageContent");
    return content;
}


/***/ }),

/***/ 32:
/*!************************************************!*\
  !*** ./frontend/src/components/page/navbar.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNavbar": () => (/* binding */ getNavbar),
/* harmony export */   "getNavbarAuth": () => (/* binding */ getNavbarAuth),
/* harmony export */   "getNavbarAuthButton": () => (/* binding */ getNavbarAuthButton),
/* harmony export */   "getNavbarFiller": () => (/* binding */ getNavbarFiller),
/* harmony export */   "getNavbarNavs": () => (/* binding */ getNavbarNavs)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/html */ 910);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ 796);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.png */ 922);



function getNavbarFiller() {
    let filler = document.querySelector("#AppNavbarFiller");
    if (!filler)
        filler = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppNavbarFiller");
    return filler;
}
function getNavbar() {
    let navbar = document.querySelector("#AppNavbar");
    if (!navbar) {
        navbar = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppNavbar");
        navbar.appendChild(getNavbarLogo());
        navbar.appendChild(getNavbarNavs());
        navbar.appendChild(getNavbarAuth());
    }
    return navbar;
}
function getNavbarLogo() {
    let logo = document.querySelector("#AppNavbarLogo");
    if (!logo) {
        logo = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppNavbarLogo");
        logo.appendChild(getNavbarLogoAnchor());
    }
    return logo;
}
function getNavbarLogoAnchor() {
    const logoLink = document.createElement("a");
    logoLink.href = _config__WEBPACK_IMPORTED_MODULE_1__.HOMEPAGE_URL;
    logoLink.appendChild(getNavbarLogoImage());
    return logoLink;
}
function getNavbarLogoImage() {
    const logoImg = new Image();
    logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__;
    logoImg.alt = _config__WEBPACK_IMPORTED_MODULE_1__.DEPARTMENT_NAME;
    return logoImg;
}
function getNavbarNavs() {
    let navs = document.querySelector("#AppNavbarNavs");
    if (!navs)
        navs = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppNavbarNavs");
    return navs;
}
function getNavbarAuth() {
    let auth = document.querySelector("#AppNavbarAuth");
    if (!auth) {
        auth = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppNavbarAuth");
        auth.appendChild(getNavbarAuthButton());
    }
    return auth;
}
function getNavbarAuthButton() {
    let authBtn = document.querySelector("#AppNavbarAuthButton");
    if (!authBtn) {
        authBtn = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeButtonWithId)("AppNavbarAuthButton");
        authBtn.innerText = "Sign In";
    }
    return authBtn;
}


/***/ }),

/***/ 509:
/*!*************************************************!*\
  !*** ./frontend/src/components/page/sidenav.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSidenav": () => (/* binding */ getSidenav),
/* harmony export */   "getSidenavToggle": () => (/* binding */ getSidenavToggle)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/html */ 910);

function getSidenav() {
    let sidenav = document.querySelector("#AppSidenav");
    if (!sidenav) {
        sidenav = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithId)("AppSidenav");
    }
    ;
    return sidenav;
}
function getSidenavToggle() {
    let toggle = document.querySelector("#AppSidenavToggle");
    if (!toggle) {
        toggle = (0,_utils_html__WEBPACK_IMPORTED_MODULE_0__.makeDivWithIdAndText)("AppSidenavToggle", ">");
    }
    ;
    return toggle;
}


/***/ }),

/***/ 796:
/*!********************************!*\
  !*** ./frontend/src/config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEPARTMENT_NAME": () => (/* binding */ DEPARTMENT_NAME),
/* harmony export */   "HOMEPAGE_URL": () => (/* binding */ HOMEPAGE_URL)
/* harmony export */ });
const DEPARTMENT_NAME = "School of Digital Science";
const HOMEPAGE_URL = "http://sds.ubd.edu.bn/";


/***/ }),

/***/ 277:
/*!******************************!*\
  !*** ./frontend/src/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/main.scss */ 299);
/* harmony import */ var _assets_brand_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/brand.png */ 665);
/* harmony import */ var _components_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/box */ 260);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page */ 856);




(0,_components_page__WEBPACK_IMPORTED_MODULE_1__.setAsAppContainer)(document.body);
function component() {
    const element = document.createElement('div');
    element.innerHTML = "arst";
    const myIcon = new Image();
    myIcon.src = _assets_brand_png__WEBPACK_IMPORTED_MODULE_2__;
    element.appendChild(myIcon);
    const boxBuilder = new _components_box__WEBPACK_IMPORTED_MODULE_3__.OrderABox();
    const boxProperties = {
        "Serial Number": "33ETTT33333",
        "Model": "Nice",
    };
    const boxData = new _components_box__WEBPACK_IMPORTED_MODULE_3__.BoxData(0, 0, "Nice Stuff", boxProperties);
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
/* harmony export */   "hideElemUsingClassList": () => (/* binding */ hideElemUsingClassList),
/* harmony export */   "makeButtonWithId": () => (/* binding */ makeButtonWithId),
/* harmony export */   "makeDivWithClass": () => (/* binding */ makeDivWithClass),
/* harmony export */   "makeDivWithId": () => (/* binding */ makeDivWithId),
/* harmony export */   "makeDivWithIdAndText": () => (/* binding */ makeDivWithIdAndText),
/* harmony export */   "makeH2WithId": () => (/* binding */ makeH2WithId),
/* harmony export */   "makePWithId": () => (/* binding */ makePWithId),
/* harmony export */   "makeTableRowWithClass": () => (/* binding */ makeTableRowWithClass),
/* harmony export */   "unhideElemUsingClassList": () => (/* binding */ unhideElemUsingClassList)
/* harmony export */ });
const makeDivWithClass = (className) => Object.assign(document.createElement("div"), {
    className: className
});
const makeDivWithId = (id) => Object.assign(document.createElement("div"), {
    id: id
});
const makeDivWithIdAndText = (id, text) => Object.assign(document.createElement("div"), {
    id: id,
    innerHTML: text
});
const makeH2WithId = (id) => Object.assign(document.createElement("h2"), {
    id: id
});
const makePWithId = (id) => Object.assign(document.createElement("p"), {
    id: id
});
const makeButtonWithId = (id) => Object.assign(document.createElement("button"), {
    id: id
});
const makeTableRowWithClass = (className) => Object.assign(document.createElement("tr"), {
    className: className
});
function hideElemUsingClassList(elemToHide) {
    elemToHide.classList.add("hidden");
}
function unhideElemUsingClassList(elemToHide) {
    elemToHide.classList.remove("hidden");
}


/***/ }),

/***/ 665:
/*!***************************************!*\
  !*** ./frontend/src/assets/brand.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef4bac32a69aec712b0d.png";

/***/ }),

/***/ 922:
/*!**************************************!*\
  !*** ./frontend/src/assets/logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef4bac32a69aec712b0d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(277));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9ib3guc2NzcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvYm94LnNjc3M/MDQ4MiIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9tYWluLnNjc3M/ZDA1NyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYm94LnRzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvcGFnZS50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3BhZ2UvbWFpbi1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9wYWdlL25hdmJhci50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3BhZ2Uvc2lkZW5hdi50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy91dGlscy9odG1sLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJveC1jb21wb25lbnQge1xcbiAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2JveC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFIVztBQUViXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib2R5LWNvbG9yOiByZWQ7XFxyXFxuXFxyXFxuLmJveC1jb21wb25lbnQge1xcclxcbiAgY29sb3I6ICRib2R5LWNvbG9yO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib3guc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JveC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbWFrZURpdldpdGhDbGFzcywgbWFrZVRhYmxlUm93V2l0aENsYXNzIH0gZnJvbSBcIi4uL3V0aWxzL2h0bWxcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvYm94LnNjc3NcIjtcclxuaW50ZXJmYWNlIFJlbmRlck9wdGlvbiB7XHJcbiAgICByZW5kZXIoYm94OiBCb3gpOiBIVE1MRWxlbWVudDtcclxufVxyXG5jbGFzcyBUaWxlUmVuZGVyT3B0aW9uIGltcGxlbWVudHMgUmVuZGVyT3B0aW9uIHtcclxuICAgIHJlbmRlcihib3g6IEJveCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBodG1sTm9kZSA9IG1ha2VEaXZXaXRoQ2xhc3MoXCJib3gtY29tcG9uZW50IHRpbGVcIik7XHJcblxyXG4gICAgICAgIGxldCBpbm5lckhUTUxTdHJpbmc6IHN0cmluZyA9XHJcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwiYm94LWNvbXBvbmVudC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAke2JveC5nZXRMYWJlbCgpfVxyXG4gICAgICAgIDwvc3Bhbj5gO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhib3guZ2V0UHJvcGVydGllcygpKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaW5uZXJIVE1MU3RyaW5nICs9IGA8cCBjbGFzcz1cImJveC1jb21wb25lbnQtZGF0YVwiPiR7a2V5fTogJHt2YWx1ZX08L3A+YDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaHRtbE5vZGUuaW5uZXJIVE1MID0gaW5uZXJIVE1MU3RyaW5nXHJcblxyXG4gICAgICAgIHJldHVybiBodG1sTm9kZTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBSb3dSZW5kZXJPcHRpb24gaW1wbGVtZW50cyBSZW5kZXJPcHRpb24ge1xyXG4gICAgcmVuZGVyKGJveDogQm94KTogSFRNTFRhYmxlUm93RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBtYWtlVGFibGVSb3dXaXRoQ2xhc3MoXCJib3gtY29tcG9uZW50IHJvd1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGlubmVySFRNTFN0cmluZzogc3RyaW5nID1cclxuICAgICAgICBgPHRkIGNsYXNzPVwiYm94LWNvbXBvbmVudC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAke2JveC5nZXRMYWJlbCgpfVxyXG4gICAgICAgIDwvdGQ+YDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoYm94LmdldFByb3BlcnRpZXMoKSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGlubmVySFRNTFN0cmluZyArPSBgPHRkIGNsYXNzPVwiYm94LWNvbXBvbmVudC1kYXRhXCI+JHt2YWx1ZX08L3RkPmA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGh0bWxOb2RlLmlubmVySFRNTCA9IGlubmVySFRNTFN0cmluZ1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbE5vZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBWaWV3T3B0aW9uIHsgdmlldygpOiB2b2lkOyB9XHJcbmNsYXNzIE5vVmlld09wdGlvbiBpbXBsZW1lbnRzIFZpZXdPcHRpb24ge1xyXG4gICAgdmlldygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvIG5vdGhpbmdcIik7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQ29tbW9uVmlld09wdGlvbiBpbXBsZW1lbnRzIFZpZXdPcHRpb24ge1xyXG4gICAgdmlldygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZpZXcgaW4gTm9ybWFsIE1vZGVcIik7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUHJpdmlsZWdlZFZpZXdPcHRpb24gaW1wbGVtZW50cyBWaWV3T3B0aW9uIHtcclxuICAgIHZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWaWV3IGluIFByaXZpbGVnZWQgTW9kZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEVkaXRPcHRpb24geyBlZGl0KCk6IHZvaWQ7IH1cclxuY2xhc3MgTm9FZGl0T3B0aW9uIGltcGxlbWVudHMgRWRpdE9wdGlvbiB7XHJcbiAgICBlZGl0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG8gbm90aGluZ1wiKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBDb21tb25FZGl0T3B0aW9uIGltcGxlbWVudHMgRWRpdE9wdGlvbiB7XHJcbiAgICBlZGl0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdCBpbiBOb3JtYWwgTW9kZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIERlbGV0ZU9wdGlvbiB7IGRlbGV0ZSgpOiB2b2lkOyB9XHJcbmNsYXNzIE5vRGVsZXRlT3B0aW9uIGltcGxlbWVudHMgRGVsZXRlT3B0aW9uIHtcclxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvIG5vdGhpbmdcIik7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQ29tbW9uRGVsZXRlT3B0aW9uIGltcGxlbWVudHMgRGVsZXRlT3B0aW9uIHtcclxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvIG5vdGhpbmdcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb3hGYWN0b3J5IHtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbjtcclxuICAgIGFzc2lnbkVkaXRPcHRpb24oKTogRWRpdE9wdGlvbjtcclxuICAgIGFzc2lnbkRlbGV0ZU9wdGlvbigpOiBEZWxldGVPcHRpb247XHJcbn1cclxuY2xhc3MgVmlld09ubHlCb3hGYWN0b3J5IGltcGxlbWVudHMgQm94RmFjdG9yeXtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbiB7IHJldHVybiBuZXcgTm9WaWV3T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkVkaXRPcHRpb24oKTogRWRpdE9wdGlvbiB7IHJldHVybiBuZXcgTm9FZGl0T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkRlbGV0ZU9wdGlvbigpOiBEZWxldGVPcHRpb24geyByZXR1cm4gbmV3IE5vRGVsZXRlT3B0aW9uKCk7IH1cclxufVxyXG5jbGFzcyBDb21tb25Cb3hGYWN0b3J5IGltcGxlbWVudHMgQm94RmFjdG9yeXtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbiB7IHJldHVybiBuZXcgQ29tbW9uVmlld09wdGlvbigpOyB9XHJcbiAgICBhc3NpZ25FZGl0T3B0aW9uKCk6IEVkaXRPcHRpb24geyByZXR1cm4gbmV3IE5vRWRpdE9wdGlvbigpOyB9XHJcbiAgICBhc3NpZ25EZWxldGVPcHRpb24oKTogRGVsZXRlT3B0aW9uIHsgcmV0dXJuIG5ldyBOb0RlbGV0ZU9wdGlvbigpOyB9XHJcbn1cclxuY2xhc3MgQWRtaW5Cb3hGYWN0b3J5IGltcGxlbWVudHMgQm94RmFjdG9yeXtcclxuICAgIGFzc2lnblZpZXdPcHRpb24oKTogVmlld09wdGlvbiB7IHJldHVybiBuZXcgUHJpdmlsZWdlZFZpZXdPcHRpb24oKTsgfVxyXG4gICAgYXNzaWduRWRpdE9wdGlvbigpOiBFZGl0T3B0aW9uIHsgcmV0dXJuIG5ldyBDb21tb25FZGl0T3B0aW9uKCk7IH1cclxuICAgIGFzc2lnbkRlbGV0ZU9wdGlvbigpOiBEZWxldGVPcHRpb24geyByZXR1cm4gbmV3IENvbW1vbkRlbGV0ZU9wdGlvbigpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3hEYXRhIHtcclxuICAgICNpZDogbnVtYmVyO1xyXG4gICAgI3BhcmVudElkOiBudW1iZXI7XHJcbiAgICAjbGFiZWw6IHN0cmluZztcclxuXHJcbiAgICAjcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBwYXJlbnRJZDogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KXtcclxuICAgICAgICB0aGlzLiNpZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuI3BhcmVudElkID0gcGFyZW50SWQ7XHJcbiAgICAgICAgdGhpcy4jbGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLiNwcm9wZXJ0aWVzID0gcHJvcGVydGllcyA/IHByb3BlcnRpZXMgOiB7fTtcclxuICAgIH1cclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy4jcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlWYWx1ZTsgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLiNpZDsgfVxyXG4gICAgZ2V0UGFyZW50SWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuI3BhcmVudElkOyB9XHJcbiAgICBnZXRMYWJlbCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy4jbGFiZWw7IH1cclxuICAgIGdldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuI3Byb3BlcnRpZXNbcHJvcGVydHlOYW1lXTsgfVxyXG4gICAgZ2V0UHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHsgcmV0dXJuIHRoaXMuI3Byb3BlcnRpZXM7IH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJveCB7XHJcbiAgICAjZGF0YTogQm94RGF0YTtcclxuXHJcbiAgICAjaHRtbE5vZGU6IE5vZGU7XHJcblxyXG4gICAgI3JlbmRlck9wdGlvbjogUmVuZGVyT3B0aW9uO1xyXG5cclxuICAgICN2aWV3T3B0aW9uOiBWaWV3T3B0aW9uO1xyXG4gICAgI2VkaXRPcHRpb246IEVkaXRPcHRpb247XHJcbiAgICAjZGVsZXRlT3B0aW9uOiBEZWxldGVPcHRpb247XHJcblxyXG4gICAgYWJzdHJhY3QgbWFrZUJveChkaXNwbGF5TW9kZTogc3RyaW5nKTogdm9pZDtcclxuICAgIFxyXG4gICAgc2V0RGF0YShkYXRhOiBCb3hEYXRhKTogdm9pZCB7IHRoaXMuI2RhdGEgPSBkYXRhfTtcclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiNkYXRhLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRUaGlzSFRNTFRvKHBhcmVudE5vZGU6IE5vZGUpOiB2b2lkIHsgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNodG1sTm9kZSk7IH1cclxuICAgIGFwcGVuZEJveENoaWxkKGNoaWxkQm94OiBCb3gpOiB2b2lkIHsgY2hpbGRCb3guYXBwZW5kVGhpc0hUTUxUbyh0aGlzLiNodG1sTm9kZSk7IH1cclxuXHJcbiAgICBzZXRSZW5kZXJPcHRpb24ocmVuZGVyT3B0aW9uOiBSZW5kZXJPcHRpb24pOiB2b2lkIHsgdGhpcy4jcmVuZGVyT3B0aW9uID0gcmVuZGVyT3B0aW9uOyB9XHJcblxyXG4gICAgc2V0Vmlld09wdGlvbih2aWV3T3B0aW9uOiBWaWV3T3B0aW9uKTogdm9pZCB7IHRoaXMuI3ZpZXdPcHRpb24gPSB2aWV3T3B0aW9uOyB9XHJcbiAgICBzZXRFZGl0T3B0aW9uKGVkaXRPcHRpb246IEVkaXRPcHRpb24pOiB2b2lkIHsgdGhpcy4jZWRpdE9wdGlvbiA9IGVkaXRPcHRpb247IH1cclxuICAgIHNldERlbGV0ZU9wdGlvbihkZWxldGVPcHRpb246IERlbGV0ZU9wdGlvbik6IHZvaWQgeyB0aGlzLiNkZWxldGVPcHRpb24gPSBkZWxldGVPcHRpb247IH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy4jZGF0YS5nZXRJZCgpOyB9XHJcbiAgICBnZXRQYXJlbnRJZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy4jZGF0YS5nZXRQYXJlbnRJZCgpOyB9XHJcbiAgICBnZXRMYWJlbCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy4jZGF0YS5nZXRMYWJlbCgpOyB9XHJcbiAgICBnZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiB0aGlzLiNkYXRhLmdldFByb3BlcnR5KHByb3BlcnR5TmFtZSk7IH1cclxuICAgIGdldFByb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7IHJldHVybiB0aGlzLiNkYXRhLmdldFByb3BlcnRpZXMoKTsgfVxyXG5cclxuICAgIHJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmV3Tm9kZTogTm9kZSA9IHRoaXMuI3JlbmRlck9wdGlvbi5yZW5kZXIodGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiNodG1sTm9kZSAmJiB0aGlzLiNodG1sTm9kZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGU6IE5vZGUgPSB0aGlzLiNodG1sTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLiNodG1sTm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuI2h0bWxOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4jaHRtbE5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jaHRtbE5vZGUgPSBuZXdOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVWaWV3T3B0aW9uKCk6IHZvaWQgeyB0aGlzLiN2aWV3T3B0aW9uLnZpZXcoKSB9O1xyXG4gICAgZXhlY3V0ZUVkaXRPcHRpb24oKTogdm9pZCB7IHRoaXMuI2VkaXRPcHRpb24uZWRpdCgpIH07XHJcbiAgICBleGVjdXRlRGVsZXRlT3B0aW9uKCk6IHZvaWQgeyB0aGlzLiNkZWxldGVPcHRpb24uZGVsZXRlKCkgfTtcclxufVxyXG5jbGFzcyBWaWV3T25seUJveCBleHRlbmRzIEJveCB7XHJcbiAgICAjYm94RmFjdG9yeTogQm94RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihib3hGYWN0b3J5OiBCb3hGYWN0b3J5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiNib3hGYWN0b3J5ID0gYm94RmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlQm94KGRpc3BsYXlNb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFZpZXdPcHRpb24odGhpcy4jYm94RmFjdG9yeS5hc3NpZ25WaWV3T3B0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0RWRpdE9wdGlvbih0aGlzLiNib3hGYWN0b3J5LmFzc2lnbkVkaXRPcHRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5zZXREZWxldGVPcHRpb24odGhpcy4jYm94RmFjdG9yeS5hc3NpZ25EZWxldGVPcHRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UmVuZGVyT3B0aW9uKGRpc3BsYXlNb2RlID09IFwiVGlsZVwiPyBuZXcgVGlsZVJlbmRlck9wdGlvbigpIDogbmV3IFJvd1JlbmRlck9wdGlvbigpKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJveEJ1aWxkZXIge1xyXG4gICAgYWJzdHJhY3QgbWFrZUJveCh0eXBlT2ZCb3g6IHN0cmluZywgYm94RGF0YTogQm94RGF0YSk6IEJveDtcclxuXHJcbiAgICBvcmRlckFCb3godHlwZU9mQm94OiBzdHJpbmcsIGRpc3BsYXlNb2RlOiBzdHJpbmcsIGJveERhdGE6IEJveERhdGEpOiBCb3gge1xyXG4gICAgICAgIGNvbnN0IHRoZUJveDogQm94ID0gdGhpcy5tYWtlQm94KHR5cGVPZkJveCwgYm94RGF0YSk7XHJcbiAgICAgICAgdGhlQm94Lm1ha2VCb3goZGlzcGxheU1vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhlQm94O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcmRlckFCb3ggZXh0ZW5kcyBCb3hCdWlsZGVyIHtcclxuICAgIG1ha2VCb3godHlwZU9mQm94OiBzdHJpbmcsIGJveERhdGE6IEJveERhdGEpIHtcclxuICAgICAgICBsZXQgdGhlQm94OiBCb3g7XHJcblxyXG4gICAgICAgIGlmKHR5cGVPZkJveCA9PSBcIlZpZXcgT25seVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveEZhY3Rvcnk6IEJveEZhY3RvcnkgPSBuZXcgVmlld09ubHlCb3hGYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIHRoZUJveCA9IG5ldyBWaWV3T25seUJveChib3hGYWN0b3J5KTtcclxuICAgICAgICAgICAgdGhlQm94LnNldERhdGEoYm94RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBib3hGYWN0b3J5OiBCb3hGYWN0b3J5ID0gbmV3IFZpZXdPbmx5Qm94RmFjdG9yeSgpO1xyXG4gICAgICAgICAgICB0aGVCb3ggPSBuZXcgVmlld09ubHlCb3goYm94RmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHRoZUJveC5zZXREYXRhKGJveERhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoZUJveDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IG1ha2VEaXZXaXRoSWQsIG1ha2VIMldpdGhJZCwgbWFrZVBXaXRoSWQgfSBmcm9tIFwiLi4vdXRpbHMvaHRtbFwiO1xyXG5pbXBvcnQgeyBnZXRNYWluQ29udGFpbmVyIH0gZnJvbSBcIi4vcGFnZS9tYWluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBnZXROYXZiYXIsIGdldE5hdmJhckZpbGxlciB9IGZyb20gXCIuL3BhZ2UvbmF2YmFyXCI7XHJcbmltcG9ydCB7IGdldFNpZGVuYXYsIGdldFNpZGVuYXZUb2dnbGUgfSBmcm9tIFwiLi9wYWdlL3NpZGVuYXZcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBc0FwcENvbnRhaW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBsZXQgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBcIik7XHJcblxyXG4gICAgaWYoIWFwcCkgYXBwID0gaW5pdEFwcCgpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QXBwKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGFwcCA9IG1ha2VEaXZXaXRoSWQoXCJBcHBcIik7XHJcblxyXG4gICAgYXBwLmFwcGVuZENoaWxkKGdldE5hdmJhckZpbGxlcigpKTtcclxuICAgIGFwcC5hcHBlbmRDaGlsZChnZXROYXZiYXIoKSk7XHJcblxyXG4gICAgYXBwLmFwcGVuZENoaWxkKGdldFNpZGVuYXYoKSk7XHJcbiAgICBhcHAuYXBwZW5kQ2hpbGQoZ2V0U2lkZW5hdlRvZ2dsZSgpKTtcclxuXHJcbiAgICBhcHAuYXBwZW5kQ2hpbGQoZ2V0TWFpbkNvbnRhaW5lcigpKTtcclxuXHJcbiAgICByZXR1cm4gYXBwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BhZ2UocGFnZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBSZW5kZXJPcHRpb24ge1xyXG4gICAgcmVuZGVyKHBhZ2U6IFBhZ2UpOiB2b2lkO1xyXG59XHJcbmNsYXNzIERlZmF1bHRSZW5kZXJPcHRpb24gaW1wbGVtZW50cyBSZW5kZXJPcHRpb24ge1xyXG4gICAgcmVuZGVyKHBhZ2U6IFBhZ2UpOiB2b2lkIHtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGFnZURhdGEge1xyXG4gICAgI2xhYmVsOiBzdHJpbmc7XHJcbiAgICAjcmVtYXJrczogc3RyaW5nO1xyXG5cclxuICAgICNyb3V0ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgICNzZWN0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIFBhZ2Uge1xyXG4gICAgI2RhdGE6IFBhZ2VEYXRhO1xyXG4gICAgI2NvbnRlbnQ6IFBhZ2VDb250ZW50O1xyXG59XHJcblxyXG5jbGFzcyBQYWdlQ29udGVudCB7fSIsImltcG9ydCB7IG1ha2VEaXZXaXRoSWQsIG1ha2VIMldpdGhJZCwgbWFrZVBXaXRoSWQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1haW5Db250YWluZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwTWFpbkNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgaWYoIWNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnRhaW5lciA9IG1ha2VEaXZXaXRoSWQoXCJBcHBNYWluQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRQYWdlVGl0bGUoKSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFBhZ2VSZW1hcmtzKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRQYWdlQ29udGVudCgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnZVRpdGxlKCk6IEhUTUxIZWFkaW5nRWxlbWVudCB7XHJcbiAgICBsZXQgdGl0bGU6IEhUTUxIZWFkaW5nRWxlbWVudCA9IDxIVE1MSGVhZGluZ0VsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwUGFnZVRpdGxlXCIpO1xyXG5cclxuICAgIGlmKCF0aXRsZSkgdGl0bGUgPSBtYWtlSDJXaXRoSWQoXCJBcHBQYWdlVGl0bGVcIik7XHJcblxyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnZVJlbWFya3MoKTogSFRNTFBhcmFncmFwaEVsZW1lbnQge1xyXG4gICAgbGV0IHJlbWFya3M6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gPEhUTUxQYXJhZ3JhcGhFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcFBhZ2VSZW1hcmtzXCIpO1xyXG5cclxuICAgIGlmKCFyZW1hcmtzKSByZW1hcmtzID0gbWFrZVBXaXRoSWQoXCJBcHBQYWdlUmVtYXJrc1wiKTtcclxuXHJcbiAgICByZXR1cm4gcmVtYXJrcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VDb250ZW50KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGxldCBjb250ZW50OiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBQYWdlQ29udGVudFwiKTtcclxuXHJcbiAgICBpZighY29udGVudCkgY29udGVudCA9IG1ha2VEaXZXaXRoSWQoXCJBcHBQYWdlQ29udGVudFwiKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufSIsImltcG9ydCB7IG1ha2VCdXR0b25XaXRoSWQsIG1ha2VEaXZXaXRoSWR9IGZyb20gXCIuLi8uLi91dGlscy9odG1sXCI7XHJcbmltcG9ydCB7IERFUEFSVE1FTlRfTkFNRSwgSE9NRVBBR0VfVVJMIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgTE9HTyBmcm9tICcuLi8uLi9hc3NldHMvbG9nby5wbmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdmJhckZpbGxlcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgZmlsbGVyOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBOYXZiYXJGaWxsZXJcIik7XHJcblxyXG4gICAgaWYoIWZpbGxlcikgZmlsbGVyID0gbWFrZURpdldpdGhJZChcIkFwcE5hdmJhckZpbGxlclwiKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpbGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdmJhcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgbmF2YmFyOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBOYXZiYXJcIik7XHJcblxyXG4gICAgaWYoIW5hdmJhcikge1xyXG4gICAgICAgIG5hdmJhciA9IG1ha2VEaXZXaXRoSWQoXCJBcHBOYXZiYXJcIik7XHJcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGdldE5hdmJhckxvZ28oKSk7XHJcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGdldE5hdmJhck5hdnMoKSk7XHJcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGdldE5hdmJhckF1dGgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5hdmJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmF2YmFyTG9nbygpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgbG9nbzogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwTmF2YmFyTG9nb1wiKTtcclxuXHJcbiAgICBpZighbG9nbykge1xyXG4gICAgICAgIGxvZ28gPSBtYWtlRGl2V2l0aElkKFwiQXBwTmF2YmFyTG9nb1wiKTtcclxuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKGdldE5hdmJhckxvZ29BbmNob3IoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxvZ287XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5hdmJhckxvZ29BbmNob3IoKTogSFRNTEFuY2hvckVsZW1lbnQge1xyXG4gICAgY29uc3QgbG9nb0xpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgbG9nb0xpbmsuaHJlZiA9IEhPTUVQQUdFX1VSTDtcclxuICAgIGxvZ29MaW5rLmFwcGVuZENoaWxkKGdldE5hdmJhckxvZ29JbWFnZSgpKTtcclxuXHJcbiAgICByZXR1cm4gbG9nb0xpbms7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5hdmJhckxvZ29JbWFnZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgIGNvbnN0IGxvZ29JbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBsb2dvSW1nLnNyYyA9IExPR087XHJcbiAgICBsb2dvSW1nLmFsdCA9IERFUEFSVE1FTlRfTkFNRTtcclxuXHJcbiAgICByZXR1cm4gbG9nb0ltZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdmJhck5hdnMoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IG5hdnM6IEhUTUxEaXZFbGVtZW50ID0gPEhUTUxEaXZFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcE5hdmJhck5hdnNcIik7XHJcblxyXG4gICAgaWYoIW5hdnMpIG5hdnMgPSBtYWtlRGl2V2l0aElkKFwiQXBwTmF2YmFyTmF2c1wiKTtcclxuXHJcbiAgICByZXR1cm4gbmF2cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdmJhckF1dGgoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IGF1dGg6IEhUTUxEaXZFbGVtZW50ID0gPEhUTUxEaXZFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcE5hdmJhckF1dGhcIik7XHJcblxyXG4gICAgaWYoIWF1dGgpIHtcclxuICAgICAgICBhdXRoID0gbWFrZURpdldpdGhJZChcIkFwcE5hdmJhckF1dGhcIik7XHJcbiAgICAgICAgYXV0aC5hcHBlbmRDaGlsZChnZXROYXZiYXJBdXRoQnV0dG9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhdXRoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF2YmFyQXV0aEJ1dHRvbigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBsZXQgYXV0aEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwTmF2YmFyQXV0aEJ1dHRvblwiKTtcclxuXHJcbiAgICBpZighYXV0aEJ0bikge1xyXG4gICAgICAgIGF1dGhCdG4gPSBtYWtlQnV0dG9uV2l0aElkKFwiQXBwTmF2YmFyQXV0aEJ1dHRvblwiKTtcclxuICAgICAgICBhdXRoQnRuLmlubmVyVGV4dCA9IFwiU2lnbiBJblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhdXRoQnRuO1xyXG59IiwiaW1wb3J0IHsgbWFrZURpdldpdGhJZCwgbWFrZURpdldpdGhJZEFuZFRleHQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lkZW5hdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgc2lkZW5hdjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwU2lkZW5hdlwiKTtcclxuXHJcbiAgICBpZighc2lkZW5hdikge1xyXG4gICAgICAgIHNpZGVuYXYgPSBtYWtlRGl2V2l0aElkKFwiQXBwU2lkZW5hdlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNpZGVuYXY7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZGVuYXZUb2dnbGUoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IHRvZ2dsZTogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwU2lkZW5hdlRvZ2dsZVwiKTtcclxuXHJcbiAgICBpZighdG9nZ2xlKSB7XHJcbiAgICAgICAgdG9nZ2xlID0gbWFrZURpdldpdGhJZEFuZFRleHQoXCJBcHBTaWRlbmF2VG9nZ2xlXCIsIFwiPlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRvZ2dsZTtcclxufSIsImV4cG9ydCBjb25zdCBERVBBUlRNRU5UX05BTUU6IHN0cmluZyA9IFwiU2Nob29sIG9mIERpZ2l0YWwgU2NpZW5jZVwiO1xyXG5leHBvcnQgY29uc3QgSE9NRVBBR0VfVVJMOiBzdHJpbmcgPSBcImh0dHA6Ly9zZHMudWJkLmVkdS5ibi9cIjsiLCJpbXBvcnQgXCIuL3N0eWxlc2hlZXRzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2Fzc2V0cy9icmFuZC5wbmcnO1xyXG5pbXBvcnQgeyBCb3hEYXRhLCBCb3gsIEJveEJ1aWxkZXIsIE9yZGVyQUJveCB9IGZyb20gJy4vY29tcG9uZW50cy9ib3gnO1xyXG5pbXBvcnQgeyBzZXRBc0FwcENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlJztcclxuXHJcbnNldEFzQXBwQ29udGFpbmVyKGRvY3VtZW50LmJvZHkpO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcImFyc3RcIjtcclxuXHJcbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgbXlJY29uLnNyYyA9IEljb247XHJcblxyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuXHJcbiAgY29uc3QgYm94QnVpbGRlcjogQm94QnVpbGRlciA9IG5ldyBPcmRlckFCb3goKTtcclxuICBcclxuICBjb25zdCBib3hQcm9wZXJ0aWVzID0ge1xyXG4gICAgXCJTZXJpYWwgTnVtYmVyXCI6IFwiMzNFVFRUMzMzMzNcIixcclxuICAgIFwiTW9kZWxcIjogXCJOaWNlXCIsXHJcbiAgfVxyXG4gIGNvbnN0IGJveERhdGE6IEJveERhdGEgPSBuZXcgQm94RGF0YSgwLCAwLCBcIk5pY2UgU3R1ZmZcIiwgYm94UHJvcGVydGllcyk7XHJcblxyXG4gIGNvbnN0IGJveHh4OiBCb3ggPSBib3hCdWlsZGVyLm9yZGVyQUJveChcIlZpZXcgT25seVwiLCBcIlRpbGVcIiwgYm94RGF0YSk7XHJcbiAgYm94eHguYXBwZW5kVGhpc0hUTUxUbyhlbGVtZW50KTtcclxuICBib3h4eC5zZXRQcm9wZXJ0eShcIk1vZGVsXCIsIFwiTmljZXJcIik7XHJcblxyXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gIGNvbnN0IHJvdzE6IEJveCA9IGJveEJ1aWxkZXIub3JkZXJBQm94KFwiVmlldyBPbmx5XCIsIFwiUm93XCIsIGJveERhdGEpO1xyXG4gIHJvdzEuYXBwZW5kVGhpc0hUTUxUbyh0YWJsZSk7XHJcbiAgY29uc3Qgcm93MjogQm94ID0gYm94QnVpbGRlci5vcmRlckFCb3goXCJWaWV3IE9ubHlcIiwgXCJSb3dcIiwgYm94RGF0YSk7XHJcbiAgcm93Mi5hcHBlbmRUaGlzSFRNTFRvKHRhYmxlKTtcclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyIsImV4cG9ydCBjb25zdCBtYWtlRGl2V2l0aENsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQgPT4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtcclxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbWFrZURpdldpdGhJZCA9IChpZDogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQgPT4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtcclxuICAgIGlkOiBpZFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IG1ha2VEaXZXaXRoSWRBbmRUZXh0ID0gKGlkOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx7XHJcbiAgICBpZDogaWQsXHJcbiAgICBpbm5lckhUTUw6IHRleHRcclxufSk7XHJcbmV4cG9ydCBjb25zdCBtYWtlSDJXaXRoSWQgPSAoaWQ6IHN0cmluZyk6IEhUTUxIZWFkaW5nRWxlbWVudCA9PiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSx7XHJcbiAgICBpZDogaWRcclxufSk7XHJcbmV4cG9ydCBjb25zdCBtYWtlUFdpdGhJZCA9IChpZDogc3RyaW5nKTogSFRNTFBhcmFncmFwaEVsZW1lbnQgPT4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSx7XHJcbiAgICBpZDogaWRcclxufSk7XHJcbmV4cG9ydCBjb25zdCBtYWtlQnV0dG9uV2l0aElkID0gKGlkOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCA9PiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikse1xyXG4gICAgaWQ6IGlkXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbWFrZVRhYmxlUm93V2l0aENsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTFRhYmxlUm93RWxlbWVudCA9PiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSx7XHJcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxyXG59KTtcclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVFbGVtVXNpbmdDbGFzc0xpc3QoZWxlbVRvSGlkZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGVsZW1Ub0hpZGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5oaWRlRWxlbVVzaW5nQ2xhc3NMaXN0KGVsZW1Ub0hpZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBlbGVtVG9IaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=