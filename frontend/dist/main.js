"use strict";
(self["webpackChunksds_resource_mgt_system"] = self["webpackChunksds_resource_mgt_system"] || []).push([["main"],{

/***/ 255:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/app.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#App {\n  margin: 0;\n  font-family: sans-serif;\n}\n#App #AppNavbarFiller {\n  height: 55px;\n}\n#App .hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/app.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,uBAAA;AACF;AACE;EAAmB,YAAA;AAErB;AAAE;EACE,aAAA;AAEJ","sourcesContent":["#App {\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  \r\n  #AppNavbarFiller { height: 55px; }\r\n  \r\n  .hidden {\r\n    display: none;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 979:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/app/dropnav.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#App #AppDropnav {\n  z-index: 1;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 55px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);\n  background-color: #132233;\n  transition-property: background-color, height;\n  transition-duration: 0.3s;\n}\n#App #AppDropnav.dropnav-active {\n  background: #132233;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/app/dropnav.scss"],"names":[],"mappings":"AAGE;EACE,UAAA;EACA,eAAA;EACA,OAAA;EAAQ,MAAA;EACR,WAAA;EAAa,YAAA;EAEb,6EAAA;EAEA,yBAXc;EAad,6CAAA;EACA,yBAAA;AAHJ;AAKI;EACE,mBAjBY;EAkBZ,YAAA;AAHN","sourcesContent":["$color_navbar-bg: #132233;\r\n\r\n#App {\r\n  #AppDropnav {\r\n    z-index: 1;\r\n    position: fixed; \r\n    left:0; top:0;\r\n    width: 100%; height: 55px;\r\n\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.29);\r\n\r\n    background-color: $color_navbar-bg;\r\n    \r\n    transition-property: background-color, height;\r\n    transition-duration: 0.3s;\r\n\r\n    &.dropnav-active {\r\n      background: $color_navbar-bg;\r\n      height: 100%;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 757:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/app/mainContainer.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#App #AppMainContainer {\n  transition: margin-left 0.2s ease-out;\n  margin-left: 20px;\n}\n#App #AppMainContainer #AppPage #AppPageTitle {\n  margin: 20px 0 0 20px;\n}\n#App #AppMainContainer #AppPage #AppPageRemarks {\n  margin: 5px 0 0 20px;\n}\n#App #AppMainContainer #AppPage #AppPageContent {\n  margin: 0 0 0 20px;\n}\n#App #AppMainContainer #AppPage #AppPageContent button {\n  margin: 0;\n}\n#App #AppMainContainer #AppPage #AppPageContent h3 {\n  margin: 20px 0 10px;\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/app/mainContainer.scss"],"names":[],"mappings":"AACE;EACE,qCAAA;EACA,iBAAA;AAAJ;AAEM;EACE,qBAAA;AAAR;AAEM;EACE,oBAAA;AAAR;AAEM;EACE,kBAAA;AAAR;AACQ;EACE,SAAA;AACV;AACQ;EACE,mBAAA;AACV","sourcesContent":["#App {\r\n  #AppMainContainer {\r\n    transition: margin-left 0.2s ease-out;\r\n    margin-left: 20px;\r\n    #AppPage{\r\n      #AppPageTitle {\r\n        margin: 20px 0 0 20px;\r\n      }\r\n      #AppPageRemarks {\r\n        margin: 5px 0 0 20px;\r\n      }\r\n      #AppPageContent {\r\n        margin: 0 0 0 20px;\r\n        button {\r\n          margin: 0 ;\r\n        }\r\n        h3 {\r\n          margin: 20px 0 10px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 877:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/app/messageBox.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#App #AppMessageBox {\n  z-index: 1;\n  display: block;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n}\n#App #AppMessageBox p, #App #AppMessageBox h3 {\n  display: block;\n  margin: 0;\n  padding: 7px 0;\n  background-color: rgba(255, 221, 136, 0.8);\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/app/messageBox.scss"],"names":[],"mappings":"AAGC;EACC,UAAA;EACA,cAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EAEA,kBAAA;AAHF;AAKE;EACC,cAAA;EAEA,SAAA;EACA,cAAA;EAEA,0CAlBkB;AAarB","sourcesContent":["$color_yellow-light: #ffdd88cc;\r\n\r\n#App {\r\n\t#AppMessageBox {\r\n\t\tz-index: 1;\r\n\t\tdisplay: block;\r\n\t\tposition:fixed;\r\n\t\tbottom: 0;\r\n\t\twidth:100%;\r\n\r\n\t\ttext-align: center;\r\n\r\n\t\tp,h3 {\r\n\t\t\tdisplay:block;\r\n\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 7px 0;\r\n\r\n\t\t\tbackground-color: $color_yellow-light;\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 527:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/app/navbar.scss ***!
  \******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#App #AppNavbar {\n  z-index: 1;\n  position: fixed;\n  display: flex;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 55px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  transition-property: background-color, top, left, width;\n  transition-timing-function: ease;\n  transition-duration: 0.2s;\n}\n#App #AppNavbar.dropnav-active {\n  left: -10%;\n  width: 120%;\n  top: -55px;\n}\n#App #AppNavbar #AppNavbarLogo {\n  flex-grow: 1;\n}\n#App #AppNavbar #AppNavbarLogo img {\n  margin: 9px 0 6px 9px;\n}\n#App #AppNavbar #NavbarNavs {\n  display: flex;\n  margin: 0 2px;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-around;\n  align-items: flex-end;\n}\n#App #AppNavbar #NavbarNavs .nav.hidden {\n  display: none;\n}\n#App #AppNavbar #NavbarNavs .nav .link {\n  display: table-cell;\n  height: 55px;\n  padding: 0 4px;\n  vertical-align: middle;\n  text-align: center;\n  color: white;\n  text-decoration: underline rgba(14, 60, 110, 0);\n  text-underline-offset: 4px;\n  transition-property: text-decoration-color, color;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out;\n}\n#App #AppNavbar #NavbarNavs .nav .link:hover, #App #AppNavbar #NavbarNavs .nav .link.current {\n  color: #ffcb00;\n  text-decoration: underline #ffcb00;\n}\n#App #AppNavbarAuth {\n  flex-grow: 200;\n  text-align: right;\n  margin-right: 10px;\n}\n#App #AppNavbarAuth #AppNavbarAuthButton {\n  position: relative;\n  top: 0px;\n  left: 0px;\n  padding: 5px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 3px 6px 4px 0 rgb(0, 0, 0);\n  background-color: #ffcb00;\n  color: black;\n  cursor: pointer;\n  transition-property: background-color, color, box-shadow, top, left;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n}\n#App #AppNavbarAuth #AppNavbarAuthButton:hover {\n  position: relative;\n  top: 2px;\n  left: 1px;\n  box-shadow: 1.5px 3px 2px 0 rgb(0, 0, 0);\n  background-color: #f0c000;\n}\n#App #AppNavbarAuth #AppNavbarAuthButton.clicked, #App #AppNavbarAuth #AppNavbarAuthButton:active {\n  position: relative;\n  top: 4px;\n  left: 2px;\n  box-shadow: 0px 0px 0px 0 rgb(0, 0, 0);\n  background-color: #ea0;\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/app/navbar.scss"],"names":[],"mappings":"AAkBE;EACE,UAAA;EACA,eAAA;EAAiB,aAAA;EACjB,OAAA;EAAQ,MAAA;EACR,WAAA;EAAa,YAAA;EAEb,mBAAA;EACA,8BAAA;EAAgC,mBAAA;EAEhC,uDAAA;EACA,gCAAA;EACA,yBAAA;AAfJ;AAiBI;EACE,UAAA;EACA,WAAA;EACA,UAAA;AAfN;AAiBI;EACE,YAAA;AAfN;AAgBM;EAAM,qBAAA;AAbZ;AAgBI;EACE,aAAA;EACA,aAAA;EAEA,mBAAA;EAAqB,YAAA;EACrB,6BAAA;EAA+B,qBAAA;AAbrC;AAgBQ;EAAU,aAAA;AAblB;AAcQ;EACE,mBAAA;EACA,YAAA;EAAc,cAAA;EAEd,sBAAA;EAAwB,kBAAA;EAExB,YAAA;EAEA,+CAAA;EACA,0BAAA;EArDR,iDAAA;EACA,yBAAA;EACA,oCAAA;AAyCF;AAcU;EACE,cA7DG;EA8DH,kCAAA;AAZZ;AAkBE;EACE,cAAA;EACA,iBAAA;EACA,kBAAA;AAhBJ;AAkBI;EACE,kBAAA;EACA,QAAA;EAAU,SAAA;EACV,YAAA;EAAc,YAAA;EAAc,kBAAA;EAE5B,sCAAA;EACA,yBA/ES;EAgFT,YAAA;EAEA,eAAA;EAzEJ,mEAAA;EACA,yBAAA;EACA,uCAAA;AA2DF;AAeM;EACE,kBAAA;EACA,QAAA;EAAU,SAAA;EAEV,wCAAA;EACA,yBA3FY;AA8EpB;AAeM;EACE,kBAAA;EACA,QAAA;EAAU,SAAA;EAEV,sCAAA;EACA,sBAnGe;AAsFvB","sourcesContent":["$color_navbar-bg: #132233;\r\n$color_yellow-darkest: #ea0;\r\n$color_yellow-dark: #f0c000;\r\n$color_yellow: #ffcb00;\r\n\r\n@mixin nav-link-animation {\r\n  transition-property: text-decoration-color, color;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-out;\r\n}\r\n\r\n@mixin button-animation {\r\n  transition-property: background-color, color, box-shadow, top, left;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in-out;\r\n}\r\n\r\n#App {\r\n  #AppNavbar {\r\n    z-index: 1;\r\n    position: fixed; display: flex;\r\n    left:0; top:0;\r\n    width: 100%; height: 55px;\r\n    \r\n    flex-direction: row;\r\n    justify-content: space-between; align-items: center;\r\n\r\n    transition-property: background-color, top, left, width;\r\n    transition-timing-function: ease;\r\n    transition-duration: 0.2s;\r\n\r\n    &.dropnav-active {\r\n      left: -10%;\r\n      width: 120%;\r\n      top: -55px;\r\n    }\r\n    #AppNavbarLogo {\r\n      flex-grow: 1;\r\n      img { margin: 9px 0 6px 9px; }\r\n    }\r\n\r\n    #NavbarNavs {\r\n      display:flex;\r\n      margin: 0 2px;\r\n\r\n      flex-direction: row; flex-grow: 1;\r\n      justify-content: space-around; align-items: flex-end;\r\n\r\n      .nav {\r\n        &.hidden {display: none;}\r\n        .link {\r\n          display: table-cell;\r\n          height: 55px; padding:0 4px;\r\n\r\n          vertical-align: middle; text-align: center;\r\n\r\n          color: white;\r\n\r\n          text-decoration: underline rgb(14,60,110,0);\r\n          text-underline-offset: 4px;\r\n\r\n          @include nav-link-animation();\r\n\r\n          &:hover, &.current {\r\n            color: $color_yellow;\r\n            text-decoration: underline $color_yellow;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  #AppNavbarAuth {\r\n    flex-grow: 200;\r\n    text-align: right;\r\n    margin-right: 10px;\r\n\r\n    #AppNavbarAuthButton {\r\n      position:relative;\r\n      top: 0px; left: 0px;\r\n      padding: 5px; border: none; border-radius: 5px;\r\n      \r\n      box-shadow: 3px 6px 4px 0 rgba(0,0,0,1);\r\n      background-color: $color_yellow;\r\n      color: black;\r\n\r\n      cursor: pointer;\r\n\r\n      @include button-animation();\r\n      &:hover {\r\n        position:relative;\r\n        top: 2px; left: 1px;\r\n\r\n        box-shadow: 1.5px 3px 2px 0 rgba(0,0,0,1);\r\n        background-color: $color_yellow-dark;\r\n      }\r\n      &.clicked, &:active {\r\n        position:relative;\r\n        top: 4px; left: 2px;\r\n        \r\n        box-shadow: 0px 0px 0px 0 rgba(0,0,0,1);\r\n        background-color: $color_yellow-darkest;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 930:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/app/sidenav.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#App #AppSidenav {\n  z-index: 1;\n  position: fixed;\n  top: 55px;\n  left: -240px;\n  width: 240px;\n  height: calc(100% - 55px);\n  color: white;\n  background-color: #132233;\n  transition: left 0.2s ease-out;\n}\n#App #AppSidenav #SideNavSearch {\n  height: 19.5px;\n  margin-left: 3.5px;\n  width: 226.5px;\n  border: none;\n  padding: 5px;\n  background-color: white;\n}\n#App #AppSidenav #SideNavSearch:focus {\n  outline: none;\n}\n#App #AppSidenav #SideNavSearch:disabled {\n  background-color: white;\n}\n#App #AppSidenav #SideNavRemarks {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Old versions of Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  height: 30px;\n  margin: 0px 0px 0px 3.5px;\n  padding: 5px;\n  background-color: white;\n  color: black;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n}\n#App #AppSidenav #SideNavList {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Old versions of Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0 0 0 0;\n  height: 100%;\n}\n#App #AppSidenav #SideNavList #SideNavListUl {\n  margin-left: 3.5px;\n}\n#App #AppSidenav ul {\n  margin: 0;\n  padding-left: 0;\n}\n#App #AppSidenav ul li {\n  margin-top: 3.5px;\n  padding: 3.5px;\n  border: 3.5px solid white;\n  list-style: none;\n  font-weight: normal;\n  font-style: normal;\n  color: white;\n  background-color: #132233;\n}\n#App #AppSidenav ul li:hover, #App #AppSidenav ul li.searchResult {\n  cursor: grab;\n  font-weight: bold;\n  font-style: italic;\n  color: #ffcb00;\n  border-color: #ffcb00;\n  background-color: rgb(13, 45, 90);\n}\n#App #AppSidenav ul li.dragOver {\n  color: #00ff00;\n  border-color: #00ff00;\n}\n#App #AppSidenav ul li.dragged {\n  font-style: normal;\n  background-color: rgb(10, 40, 80);\n}\n#App #AppSidenavToggle {\n  z-index: 1;\n  align-items: center;\n  position: fixed;\n  display: flex;\n  top: 55px;\n  left: 0px;\n  width: 22px;\n  height: calc(100% - 55px);\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n  background-color: #132233;\n  box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.2), 10px 10px 10px 0 rgba(0, 0, 0, 0.19);\n  flex-direction: row;\n  justify-content: center;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Old versions of Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  transition: left 0.2s ease-out;\n  transition-property: left, box-shadow;\n  transition-timing-function: ease-out;\n  transition-duration: 0.2s;\n}\n#App #AppSidenavToggle.dropnav-active {\n  left: -22px;\n  box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0), 10px 10px 10px 0 rgba(0, 0, 0, 0);\n}\n#App #AppSidenavToggle:hover {\n  font-style: bold;\n  color: #ffcb00;\n  background-color: rgb(13, 45, 90);\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/app/sidenav.scss"],"names":[],"mappings":"AAcE;EACE,UAAA;EACA,eAAA;EACA,SAAA;EAAW,YAAA;EACX,YAAA;EAAc,yBAAA;EAEd,YAAA;EACA,yBArBc;EAuBd,8BAAA;AAbJ;AAeI;EACE,cAAA;EACA,kBAzBK;EA0BL,cAAA;EAEA,YAAA;EACA,YAAA;EAEA,uBAAA;AAfN;AAiBM;EACE,aAAA;AAfR;AAkBM;EACE,uBAAA;AAhBR;AAmBI;EAtCF,2BAAA;EAA6B,eAAA;EAC7B,yBAAA;EAA2B,WAAA;EAC3B,wBAAA;EAA0B,mBAAA;EAC1B,sBAAA;EAAwB,4BAAA;EACxB,qBAAA;EAAuB,2BAAA;EACvB,iBAAA;EAoCI,YAAA;EACA,yBAAA;EACA,YAAA;EAEA,uBAAA;EACA,YAAA;EAEA,kBAAA;EACA,eAAA;EACA,iBAAA;AAVN;AAaI;EArDF,2BAAA;EAA6B,eAAA;EAC7B,yBAAA;EAA2B,WAAA;EAC3B,wBAAA;EAA0B,mBAAA;EAC1B,sBAAA;EAAwB,4BAAA;EACxB,qBAAA;EAAuB,2BAAA;EACvB,iBAAA;EAmDI,eAAA;EACA,YAAA;AAFN;AAIM;EAAiB,kBA9DZ;AA6DX;AAII;EACE,SAAA;EACA,eAAA;AAFN;AAIM;EACE,iBAtEG;EAuEH,cAvEG;EAyEH,yBAAA;EAEA,gBAAA;EAEA,mBAAA;EACA,kBAAA;EACA,YAAA;EAEA,yBAnFU;AA6ElB;AAQQ;EACE,YAAA;EAEA,iBAAA;EACA,kBAAA;EACA,cAzFK;EA2FL,qBA3FK;EA6FL,iCAAA;AATV;AAWQ;EACE,cAAA;EACA,qBAAA;AATV;AAWQ;EACE,kBAAA;EACA,iCAAA;AATV;AAcE;EACE,UAAA;EACA,mBAAA;EAEA,eAAA;EAAiB,aAAA;EACjB,SAAA;EAAU,SAAA;EACV,WAAA;EAAY,yBAAA;EAEZ,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EAEA,yBAxHc;EA0Hd,kFAAA;EAEA,mBAAA;EACA,uBAAA;EAxHF,2BAAA;EAA6B,eAAA;EAC7B,yBAAA;EAA2B,WAAA;EAC3B,wBAAA;EAA0B,mBAAA;EAC1B,sBAAA;EAAwB,4BAAA;EACxB,qBAAA;EAAuB,2BAAA;EACvB,iBAAA;EAsHE,8BAAA;EAEA,qCAAA;EACA,oCAAA;EACA,yBAAA;AANJ;AAQI;EACE,WAAA;EACA,6EAAA;AANN;AASI;EACE,gBAAA;EACA,cA5IS;EA8IT,iCAAA;AARN","sourcesContent":["$color_navbar-bg: #132233;\r\n$color_yellow: #ffcb00;\r\n$px_small: 3.5px;\r\n\r\n@mixin noselect {\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */\r\n  -khtml-user-select: none; /* Konqueror HTML */\r\n  -moz-user-select: none; /* Old versions of Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none;\r\n}\r\n\r\n#App {\r\n  #AppSidenav {\r\n    z-index: 1;\r\n    position: fixed;\r\n    top: 55px; left: -240px;\r\n    width: 240px; height: calc(100% - 55px);\r\n\r\n    color:white;\r\n    background-color: $color_navbar-bg;\r\n    \r\n    transition: left 0.2s ease-out;\r\n\r\n    #SideNavSearch {\r\n      height: 19.5px;\r\n      margin-left: $px_small;\r\n      width: calc(240px - $px_small - 5px - 5px);\r\n\r\n      border: none;\r\n      padding: 5px;\r\n      \r\n      background-color: white;\r\n      \r\n      &:focus {\r\n        outline: none;\r\n      }\r\n\r\n      &:disabled {\r\n        background-color: white;\r\n      }\r\n    }\r\n    #SideNavRemarks {\r\n      @include noselect();\r\n\r\n      height:30px;\r\n      margin: 0px 0px 0px $px_small;\r\n      padding: 5px;\r\n\r\n      background-color: white;\r\n      color: black;\r\n\r\n      text-align: center;\r\n      font-size:12px;\r\n      font-weight: bold;\r\n      \r\n    }\r\n    #SideNavList {\r\n      @include noselect();\r\n\r\n      margin: 0 0 0 0;\r\n      height: 100%;\r\n\r\n      #SideNavListUl { margin-left: $px_small; };\r\n    }\r\n\r\n    ul {\r\n      margin: 0;\r\n      padding-left: 0;\r\n\r\n      li {\r\n        margin-top: $px_small;\r\n        padding: $px_small;\r\n\r\n        border: $px_small solid white;\r\n\r\n        list-style: none;\r\n\r\n        font-weight: normal;\r\n        font-style: normal;\r\n        color:white;\r\n\r\n        background-color:$color_navbar-bg;\r\n\r\n        &:hover, &.searchResult {\r\n          cursor: grab;\r\n\r\n          font-weight: bold;\r\n          font-style: italic;\r\n          color:$color_yellow;\r\n\r\n          border-color: $color_yellow;\r\n\r\n          background-color: rgb(13,45,90);\r\n        }\r\n        &.dragOver {\r\n          color: #00ff00;\r\n          border-color: #00ff00;\r\n        }\r\n        &.dragged {\r\n          font-style: normal;\r\n          background-color: rgba(10,40,80,1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n  #AppSidenavToggle {\r\n    z-index: 1;\r\n    align-items: center;\r\n    \r\n    position: fixed; display: flex;\r\n    top:55px; left:0px;\r\n    width:22px; height: calc(100% - 55px);\r\n\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color:white;\r\n\r\n    background-color: $color_navbar-bg;\r\n\r\n    box-shadow: 8px 8px 8px 0 rgba(0,0,0,0.2),10px 10px 10px 0 rgba(0,0,0,0.19);\r\n    \r\n    flex-direction: row;\r\n    justify-content: center;\r\n    @include noselect();\r\n\r\n    transition: left 0.2s ease-out;\r\n    \r\n    transition-property: left, box-shadow;\r\n    transition-timing-function: ease-out;\r\n    transition-duration: 0.2s;\r\n\r\n    &.dropnav-active {\r\n      left: -22px;\r\n      box-shadow: 8px 8px 8px 0 rgba(0,0,0,0),10px 10px 10px 0 rgba(0,0,0,0);\r\n    }\r\n    \r\n    &:hover {\r\n      font-style: bold;\r\n      color:$color_yellow;\r\n\r\n      background-color: rgb(13,45,90);\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 884:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/pages/frontPage.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 #f4c803;\n  }\n  70% {\n    -webkit-box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);\n  }\n  100% {\n    -webkit-box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);\n  }\n}\n#AppButtonBoxContainer {\n  position: relative;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  opacity: 1;\n  top: -200px;\n  transition-property: opacity, top;\n  transition-duration: 0.5s;\n}\n#AppButtonBoxContainer.dropnav-active {\n  top: 50%;\n}\n#AppButtonBoxContainer.page-inactive {\n  opacity: 0;\n}\n#AppButtonBoxContainer.page-inactive button, #AppButtonBoxContainer.page-inactive #AppButtonBoxSeparator {\n  scale: 0.0001;\n}\n#AppButtonBoxContainer #AppButtonBox {\n  position: absolute;\n  display: flex;\n  gap: 0px;\n  justify-content: center;\n  width: 100%;\n  left: 0%;\n  transition-property: top;\n  transition-duration: 0.5s;\n}\n#AppButtonBoxContainer #AppButtonBox button {\n  position: relative;\n  text-decoration: none;\n  overflow: hidden;\n  padding: 10px 20px;\n  background: transparent;\n  color: #f4c803;\n  border-radius: 25px;\n  border: 2px solid #f4c803;\n  height: 40px;\n  top: 80px;\n  margin: 0 30px;\n  transition-property: scale;\n  transition-duration: 0.5s;\n}\n#AppButtonBoxContainer #AppButtonBox button:hover {\n  animation: pulse 1.5s infinite;\n  cursor: pointer;\n}\n#AppButtonBoxContainer #AppButtonBox #AppButtonBoxSeparator {\n  background: linear-gradient(#132233 0%, #f4c803 35%, #132233 100%);\n  width: 2px;\n  height: 200px;\n  position: relative;\n  transition-property: scale, top;\n  transition-duration: 0.5s;\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/pages/frontPage.scss"],"names":[],"mappings":"AAEA;EACE;IACE,mCAAA;EADF;EAGA;IACE,iDAAA;EADF;EAGA;IACE,8CAAA;EADF;AACF;AAIA;EAEE,kBAAA;EACA,mBAAA;EACA,8BAAA;EAAgC,mBAAA;EAChC,aAAA;EACA,UAAA;EACA,WAAA;EAEA,iCAAA;EACA,yBAAA;AAHF;AAKE;EACE,QAAA;AAHJ;AAME;EACE,UAAA;AAJJ;AAKI;EACE,aAAA;AAHN;AAOE;EACE,kBAAA;EACA,aAAA;EACA,QAAA;EACA,uBAAA;EAEA,WAAA;EAAY,QAAA;EAEZ,wBAAA;EACA,yBAAA;AANJ;AAQI;EACE,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,cAtDS;EAuDT,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,SAAA;EACA,cAAA;EAEA,0BAAA;EACA,yBAAA;AAPN;AASM;EACE,8BAAA;EACA,eAAA;AAPR;AAUI;EACE,kEAAA;EACA,UAAA;EACA,aAAA;EACA,kBAAA;EAEA,+BAAA;EACA,yBAAA;AATN","sourcesContent":["$color_yellow: #f4c803;\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    -webkit-box-shadow: 0 0 0 0 $color_yellow;\r\n  }\r\n  70% {\r\n    -webkit-box-shadow: 0 0 0 10px rgba(255,0,0, 0);\r\n  }\r\n  100% {\r\n    -webkit-box-shadow: 0 0 0 0 rgba(255,0,0, 0);\r\n  }\r\n}\r\n\r\n#AppButtonBoxContainer {\r\n  \r\n  position:relative;\r\n  flex-direction: row;\r\n  justify-content: space-between; align-items: center;\r\n  display: flex;\r\n  opacity: 1;\r\n  top:-200px;\r\n  \r\n  transition-property: opacity, top;\r\n  transition-duration: 0.5s;\r\n  \r\n  &.dropnav-active {\r\n    top: 50%;\r\n  }\r\n  \r\n  &.page-inactive {\r\n    opacity: 0;\r\n    button, #AppButtonBoxSeparator {\r\n      scale:0.0001;\r\n    }\r\n  }\r\n  \r\n  #AppButtonBox {\r\n    position: absolute;\r\n    display: flex;\r\n    gap: 0px;\r\n    justify-content:center;\r\n    \r\n    width:100%; left: 0%;\r\n    \r\n    transition-property: top;\r\n    transition-duration: 0.5s;\r\n    \r\n    button {\r\n      position: relative;\r\n      text-decoration: none;\r\n      overflow: hidden;\r\n      padding: 10px 20px;\r\n      background: transparent;\r\n      color: $color_yellow;\r\n      border-radius: 25px;\r\n      border: 2px solid $color_yellow;\r\n      height: 40px;\r\n      top: 80px;\r\n      margin: 0 30px;\r\n      \r\n      transition-property: scale;\r\n      transition-duration: 0.5s;\r\n      \r\n      &:hover{\r\n        animation: pulse 1.5s infinite;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n    #AppButtonBoxSeparator {\r\n      background: linear-gradient( #132233 0%, $color_yellow 35%, #132233 100%);\r\n      width: 2px;\r\n      height: 200px;\r\n      position: relative;\r\n      \r\n      transition-property: scale, top;\r\n      transition-duration: 0.5s;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 935:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/stylesheets/components/pages/loanPage.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#AppLoanBoxContainer {\n  position: relative;\n  overflow-y: auto;\n  height: 100%;\n  left: 0;\n  top: -55px;\n  transition-property: opacity, scale, top, left;\n  transition-duration: 0.5s;\n}\n#AppLoanBoxContainer.dropnav-active {\n  top: 0px;\n}\n#AppLoanBoxContainer.page-inactive {\n  left: 100%;\n  opacity: 0;\n  scale: 0;\n}\n#AppLoanBoxContainer #AppLoanBox {\n  position: relative;\n  padding: 40px;\n  top: 20px;\n  left: 15%;\n  background: #091119;\n  box-sizing: border-box;\n  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  margin-bottom: 60px;\n  width: 70%;\n}\n#AppLoanBoxContainer #AppLoanBox .btn {\n  background: transparent;\n  border: none;\n  color: #f4c803;\n  float: left;\n  cursor: pointer;\n}\n#AppLoanBoxContainer #AppLoanBox h2 {\n  margin: 0 0 20px;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  clear: both;\n}\n#AppLoanBoxContainer #AppLoanBox .user-box {\n  position: relative;\n}\n#AppLoanBoxContainer #AppLoanBox .user-box input {\n  width: 40%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n}\n#AppLoanBoxContainer #AppLoanBox .user-box label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  pointer-events: none;\n  transition: 0.5s;\n}\n#AppLoanBoxContainer #AppLoanBox .user-box {\n  position: relative;\n}\n#AppLoanBoxContainer #AppLoanBox .user-box input {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n}\n#AppLoanBoxContainer #AppLoanBox .user-box label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  pointer-events: none;\n  transition: 0.5s;\n}\n#AppLoanBoxContainer #AppLoanBox .user-box input:focus ~ label,\n#AppLoanBoxContainer #AppLoanBox .user-box input:valid ~ label {\n  top: -20px;\n  left: 0;\n  color: #f4c803;\n  font-size: 12px;\n}\n#AppLoanBoxContainer #AppLoanBox .date-box {\n  display: inline;\n  justify-content: space-evenly;\n  padding-top: 0.6px;\n  color: #fff;\n  font-size: 16px;\n}\n#AppLoanBoxContainer #AppLoanBox .date-box input {\n  width: 30%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n#AppLoanBoxContainer #AppLoanBox .select-box {\n  position: relative;\n  width: 100%;\n  align-content: center;\n}\n#AppLoanBoxContainer #AppLoanBox .select-box select {\n  width: 40%;\n  margin-right: 10px;\n  border-radius: 25px;\n  padding: 10px;\n  background: transparent;\n  outline: none;\n  color: #fff;\n}\n#AppLoanBoxContainer #AppLoanBox .select-box option {\n  color: black;\n}\n#AppLoanBoxContainer #AppLoanBox .select-box input {\n  width: 40%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  margin-left: 20px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n}\n#AppLoanBoxContainer #AppLoanBox .select-box label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  pointer-events: none;\n  transition: 0.5s;\n}\n#AppLoanBoxContainer #AppLoanBox .select-box button {\n  background: transparent;\n  color: #fff;\n  border: none;\n  margin-left: 20px;\n}\n#AppLoanBoxContainer #AppLoanBox .select-box button:hover {\n  cursor: pointer;\n}\n#AppLoanBoxContainer #AppLoanBox h3, #AppLoanBoxContainer #AppLoanBox p {\n  color: #fff;\n  font-size: 15px;\n}\n#AppLoanBoxContainer #AppLoanBox .submit-btn {\n  position: relative;\n  display: inline-block;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 10px 20px;\n  color: #f4c803;\n  font-size: 16px;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: 0.5s;\n  margin-top: 40px;\n  letter-spacing: 4px;\n  border-radius: 25px;\n  border: 2px solid #f4c803;\n  background: transparent;\n}\n#AppLoanBoxContainer #AppLoanBox .submit-btn:hover {\n  background: #f4c803;\n  color: #091119;\n  border-radius: 25px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./frontend/src/stylesheets/components/pages/loanPage.scss"],"names":[],"mappings":"AAAA;EACC,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,OAAA;EACA,UAAA;EAEA,8CAAA;EACA,yBAAA;AAAD;AAEC;EACC,QAAA;AAAF;AAGC;EACC,UAAA;EACA,UAAA;EACA,QAAA;AADF;AAGC;EACC,kBAAA;EACA,aAAA;EACA,SAAA;EACA,SAAA;EACA,mBAAA;EACA,sBAAA;EACA,0CAAA;EACA,mBAAA;EACA,mBAAA;EACA,UAAA;AADF;AAGE;EACC,uBAAA;EACA,YAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;AADH;AAIE;EACC,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AAFH;AAME;EACC,kBAAA;AAJH;AAOE;EACC,UAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;AALH;AAOE;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;EACA,gBAAA;AALH;AAQE;EACC,kBAAA;AANH;AASE;EACC,WAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;AAPH;AASE;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;EACA,gBAAA;AAPH;AAUE;;EAEC,UAAA;EACA,OAAA;EACA,cAAA;EACA,eAAA;AARH;AAWE;EACC,eAAA;EACA,6BAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;AATH;AAWE;EACC,UAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;AATH;AAYE;EACC,kBAAA;EACA,WAAA;EACA,qBAAA;AAVH;AAYE;EACC,UAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,aAAA;EACA,WAAA;AAVH;AAYE;EACC,YAAA;AAVH;AAYE;EACC,UAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;AAVH;AAYE;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;EACA,gBAAA;AAVH;AAaE;EACC,uBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAXH;AAcE;EACC,eAAA;AAZH;AAcE;EACC,WAAA;EACA,eAAA;AAZH;AAeE;EACC,kBAAA;EACA,qBAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,uBAAA;AAbH;AAgBE;EACC,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;AAdH","sourcesContent":["#AppLoanBoxContainer {\r\n\tposition: relative;\r\n\toverflow-y: auto;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\ttop: -55px;\r\n\t\r\n\ttransition-property: opacity, scale, top, left;\r\n\ttransition-duration: 0.5s;\r\n\t\r\n\t&.dropnav-active {\r\n\t\ttop: 0px;\r\n\t}\r\n\t\r\n\t&.page-inactive {\r\n\t\tleft: 100%;\r\n\t\topacity: 0;\r\n\t\tscale: 0;\r\n\t}\r\n\t#AppLoanBox {\r\n\t\tposition: relative;\r\n\t\tpadding: 40px;\r\n\t\ttop: 20px;\r\n\t\tleft: 15%;\r\n\t\tbackground: #091119;\r\n\t\tbox-sizing: border-box;\r\n\t\tbox-shadow: 0 15px 25px rgba(0,0,0,.6);\r\n\t\tborder-radius: 10px;\r\n\t\tmargin-bottom: 60px;\r\n\t\twidth: 70%;\r\n\t\t\r\n\t\t.btn{\r\n\t\t\tbackground: transparent;\r\n\t\t\tborder: none;\r\n\t\t\tcolor: #f4c803;\r\n\t\t\tfloat: left;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t\t\r\n\t\th2{\r\n\t\t\tmargin: 0 0 20px;\r\n\t\t\tcolor: #fff;\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-size: 20px;\r\n\t\t\tclear: both;\r\n\t\t}\r\n\t\t\r\n\t\t\r\n\t\t.user-box {\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\t\t\r\n\t\t.user-box input {\r\n\t\t\twidth: 40%;\r\n\t\t\tpadding: 10px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tcolor: #fff;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t\tborder: none;\r\n\t\t\tborder-bottom: 1px solid #fff;\r\n\t\t\toutline: none;\r\n\t\t\tbackground: transparent;\r\n\t\t}\r\n\t\t.user-box label {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop:0;\r\n\t\t\tleft: 0;\r\n\t\t\tpadding: 10px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tcolor: #fff;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: .5s;\r\n\t\t}\r\n\t\t\r\n\t\t.user-box {\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\t\t\r\n\t\t.user-box input {\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding: 10px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tcolor: #fff;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t\tborder: none;\r\n\t\t\tborder-bottom: 1px solid #fff;\r\n\t\t\toutline: none;\r\n\t\t\tbackground: transparent;\r\n\t\t}\r\n\t\t.user-box label {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop:0;\r\n\t\t\tleft: 0;\r\n\t\t\tpadding: 10px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tcolor: #fff;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: .5s;\r\n\t\t}\r\n\t\t\r\n\t\t.user-box input:focus ~ label,\r\n\t\t.user-box input:valid ~ label {\r\n\t\t\ttop: -20px;\r\n\t\t\tleft: 0;\r\n\t\t\tcolor: #f4c803;\r\n\t\t\tfont-size: 12px;\r\n\t\t}\r\n\t\t\r\n\t\t.date-box{\r\n\t\t\tdisplay: inline;\r\n\t\t\tjustify-content: space-evenly;\r\n\t\t\tpadding-top: 0.6px;\r\n\t\t\tcolor:#fff;\r\n\t\t\tfont-size: 16px;\r\n\t\t}\r\n\t\t.date-box input{\r\n\t\t\twidth: 30%;\r\n\t\t\tpadding: 10px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tcolor: #fff;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t\tborder: none;\r\n\t\t\tborder-bottom: 1px solid #fff;\r\n\t\t\toutline: none;\r\n\t\t\tbackground: transparent;\r\n\t\t\tmargin-left: 10px;\r\n\t\t\tmargin-right: 10px;\r\n\t\t}\r\n\t\t\r\n\t\t.select-box{\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 100%;\r\n\t\t\talign-content: center;\r\n\t\t}\r\n\t\t.select-box select{\r\n\t\t\twidth:40%;\r\n\t\t\tmargin-right: 10px;\r\n\t\t\tborder-radius: 25px;\r\n\t\t\tpadding:10px;\r\n\t\t\tbackground:transparent;\r\n\t\t\toutline: none;\r\n\t\t\tcolor: #fff;\r\n\t\t}\r\n\t\t.select-box option{\r\n\t\t\tcolor: black;\r\n\t\t}\r\n\t\t.select-box input{\r\n\t\t\twidth: 40%;\r\n\t\t\tpadding: 10px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tcolor: #fff;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t\tmargin-left: 20px;\r\n\t\t\tborder: none;\r\n\t\t\tborder-bottom: 1px solid #fff;\r\n\t\t\toutline: none;\r\n\t\t\tbackground: transparent;\r\n\t\t}\r\n\t\t.select-box label{\r\n\t\t\tposition: absolute;\r\n\t\t\ttop:0;\r\n\t\t\tleft: 0;\r\n\t\t\tpadding: 10px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tcolor: #fff;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: .5s;\r\n\t\t}\r\n\t\t\r\n\t\t.select-box button{\r\n\t\t\tbackground: transparent;\r\n\t\t\tcolor: #fff;\r\n\t\t\tborder: none;\r\n\t\t\tmargin-left: 20px;\r\n\t\t}\r\n\t\t\r\n\t\t.select-box button:hover{\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t\th3, p{\r\n\t\t\tcolor: #fff;\r\n\t\t\tfont-size: 15px;\r\n\t\t}\r\n\t\t\r\n\t\t.submit-btn{\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tleft: 50%;\r\n\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\tpadding: 10px 20px;\r\n\t\t\tcolor: #f4c803;\r\n\t\t\tfont-size: 16px;\r\n\t\t\ttext-decoration: none;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t\toverflow: hidden;\r\n\t\t\ttransition: .5s;\r\n\t\t\tmargin-top: 40px;\r\n\t\t\tletter-spacing: 4px;\r\n\t\t\tborder-radius: 25px;\r\n\t\t\tborder: 2px solid #f4c803;\r\n\t\t\tbackground: transparent;\r\n\t\t}\r\n\t\t\r\n\t\t.submit-btn:hover {\r\n\t\t\tbackground: #f4c803;\r\n\t\t\tcolor: #091119;\r\n\t\t\tborder-radius:25px;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t}\r\n\t\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 795:
/*!******************************************************!*\
  !*** ./frontend/src/stylesheets/components/app.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ 255);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 304:
/*!**************************************************************!*\
  !*** ./frontend/src/stylesheets/components/app/dropnav.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropnav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./dropnav.scss */ 979);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropnav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropnav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropnav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropnav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 197:
/*!********************************************************************!*\
  !*** ./frontend/src/stylesheets/components/app/mainContainer.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainContainer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./mainContainer.scss */ 757);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 426:
/*!*****************************************************************!*\
  !*** ./frontend/src/stylesheets/components/app/messageBox.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_messageBox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./messageBox.scss */ 877);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_messageBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_messageBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_messageBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_messageBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 583:
/*!*************************************************************!*\
  !*** ./frontend/src/stylesheets/components/app/navbar.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./navbar.scss */ 527);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 273:
/*!**************************************************************!*\
  !*** ./frontend/src/stylesheets/components/app/sidenav.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidenav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./sidenav.scss */ 930);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidenav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidenav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidenav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sidenav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 246:
/*!******************************************************************!*\
  !*** ./frontend/src/stylesheets/components/pages/frontPage.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./frontPage.scss */ 884);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 190:
/*!*****************************************************************!*\
  !*** ./frontend/src/stylesheets/components/pages/loanPage.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 380);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loanPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./loanPage.scss */ 935);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loanPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loanPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loanPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loanPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/app */ 271);
/* harmony import */ var _scripts_utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/utils/auth */ 9521);
/* harmony import */ var _scripts_utils_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/utils/pages */ 18);



function init() {
    (0,_scripts_utils_auth__WEBPACK_IMPORTED_MODULE_0__.init)();
    (0,_scripts_app__WEBPACK_IMPORTED_MODULE_1__.setAsAppContainer)(document.body);
    (0,_scripts_app__WEBPACK_IMPORTED_MODULE_1__.init)();
}
init();
//hideDropnav();
//pages.frontPage.show();
_scripts_utils_pages__WEBPACK_IMPORTED_MODULE_2__.pages.loanForm.init();
setTimeout(() => {
    //hideDropnav();
    //    pages.frontPage.show();
}, 1000);
setTimeout(() => {
    //showDropnav();
    //  pages.loanForm.show();
}, 2000);
setTimeout(() => {
    //pages.frontPage.show();
    //hideDropnav();
}, 3000);
setTimeout(() => {
    //pages.loanForm.show();
}, 4000);
setTimeout(() => {
    //pages.frontPage.show();
}, 5000);


/***/ }),

/***/ 271:
/*!*************************************!*\
  !*** ./frontend/src/scripts/app.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideApp": () => (/* binding */ hideApp),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "setAsAppContainer": () => (/* binding */ setAsAppContainer),
/* harmony export */   "showApp": () => (/* binding */ showApp)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/html */ 434);
/* harmony import */ var _app_mainContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/mainContainer */ 824);
/* harmony import */ var _app_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/navbar */ 832);
/* harmony import */ var _app_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/sidenav */ 694);
/* harmony import */ var _app_dropnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/dropnav */ 146);
/* harmony import */ var _utils_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/pages */ 18);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/auth */ 9521);
/* harmony import */ var _stylesheets_components_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/components/app.scss */ 795);
/* harmony import */ var _stylesheets_components_app_messageBox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/components/app/messageBox.scss */ 426);









let appContainer;
function init() {
    var _a;
    (0,_app_dropnav__WEBPACK_IMPORTED_MODULE_2__.removeLoader)();
    showApp();
    _utils_pages__WEBPACK_IMPORTED_MODULE_3__.pages.frontPage.init();
    //to be replaced with proper code
    (_a = document.querySelector('#AppNavbarAuthButton')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", _utils_auth__WEBPACK_IMPORTED_MODULE_4__.signOut);
}
function setAsAppContainer(container) {
    if (!container)
        container = appContainer;
    appContainer = container;
}
function showApp() {
    let app = document.querySelector("#App");
    if (!app)
        app = getApp();
    appContainer.appendChild(app);
}
function hideApp() {
    var _a;
    let app = document.querySelector("#App");
    if (app)
        (_a = app.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(app);
}
function getApp() {
    const app = (0,_utils_html__WEBPACK_IMPORTED_MODULE_5__.makeDivWithId)("App");
    app.appendChild((0,_app_navbar__WEBPACK_IMPORTED_MODULE_6__.getNavbarFiller)());
    app.appendChild((0,_app_navbar__WEBPACK_IMPORTED_MODULE_6__.getNavbar)());
    app.appendChild((0,_app_sidenav__WEBPACK_IMPORTED_MODULE_7__.getSidenav)());
    app.appendChild((0,_app_sidenav__WEBPACK_IMPORTED_MODULE_7__.getSidenavToggle)());
    app.appendChild((0,_app_mainContainer__WEBPACK_IMPORTED_MODULE_8__.getMainContainer)());
    return app;
}


/***/ }),

/***/ 146:
/*!*********************************************!*\
  !*** ./frontend/src/scripts/app/dropnav.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDropnav": () => (/* binding */ getDropnav),
/* harmony export */   "getEffectedElems": () => (/* binding */ getEffectedElems),
/* harmony export */   "haveDropnavEffect": () => (/* binding */ haveDropnavEffect),
/* harmony export */   "hideDropnav": () => (/* binding */ hideDropnav),
/* harmony export */   "removeLoader": () => (/* binding */ removeLoader),
/* harmony export */   "showDropnav": () => (/* binding */ showDropnav)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/html */ 434);
/* harmony import */ var _stylesheets_components_app_dropnav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/components/app/dropnav.scss */ 304);
/* harmony import */ var _utils_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/pages */ 18);



function getDropnav() {
    let dropnav = document.querySelector("#AppDropnav");
    if (!dropnav) {
        dropnav = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppDropnav");
    }
    return dropnav;
}
function showDropnav() {
    const effectedElems = getEffectedElems();
    for (let i = 0; i < effectedElems.length; i++)
        effectedElems[i].classList.add("dropnav-active");
}
function hideDropnav() {
    const effectedElems = getEffectedElems();
    for (let i = 0; i < effectedElems.length; i++)
        effectedElems[i].classList.remove("dropnav-active");
    _utils_pages__WEBPACK_IMPORTED_MODULE_2__.pages.frontPage.hide();
}
function getEffectedElems() {
    return document.getElementsByClassName("dropnav-effectee");
}
function haveDropnavEffect(elem) {
    elem.classList.add("dropnav-effectee");
}
function removeLoader() {
    var _a;
    let loader = document.querySelector('#Preloaded');
    if (loader)
        (_a = loader.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(loader);
}


/***/ }),

/***/ 824:
/*!***************************************************!*\
  !*** ./frontend/src/scripts/app/mainContainer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPageContent": () => (/* binding */ addPageContent),
/* harmony export */   "clearPageRemarks": () => (/* binding */ clearPageRemarks),
/* harmony export */   "clearPageTitle": () => (/* binding */ clearPageTitle),
/* harmony export */   "getMainContainer": () => (/* binding */ getMainContainer),
/* harmony export */   "getPageContent": () => (/* binding */ getPageContent),
/* harmony export */   "getPageRemarks": () => (/* binding */ getPageRemarks),
/* harmony export */   "getPageTitle": () => (/* binding */ getPageTitle),
/* harmony export */   "setPageTitle": () => (/* binding */ setPageTitle)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/html */ 434);
/* harmony import */ var _stylesheets_components_app_mainContainer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/components/app/mainContainer.scss */ 197);


function getMainContainer() {
    let container = document.querySelector("#AppMainContainer");
    if (!container) {
        container = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppMainContainer");
        container.appendChild(getPageTitle());
        container.appendChild(getPageRemarks());
        container.appendChild(getPageContent());
    }
    return container;
}
function getPageTitle() {
    let title = document.querySelector("#AppPageTitle");
    if (!title)
        title = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeH3WithId)("AppPageTitle");
    return title;
}
function setPageTitle(title) {
    getPageTitle().innerHTML = title;
}
function clearPageTitle() { (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(getPageTitle()); }
function getPageRemarks() {
    let remarks = document.querySelector("#AppPageRemarks");
    if (!remarks)
        remarks = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makePWithId)("AppPageRemarks");
    return remarks;
}
function clearPageRemarks() { (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(getPageRemarks()); }
function getPageContent() {
    let content = document.querySelector("#AppPageContent");
    if (!content)
        content = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppPageContent");
    return content;
}
function addPageContent(newContent) {
    getPageContent().appendChild(newContent);
}


/***/ }),

/***/ 832:
/*!********************************************!*\
  !*** ./frontend/src/scripts/app/navbar.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNavbar": () => (/* binding */ getNavbar),
/* harmony export */   "getNavbarAuth": () => (/* binding */ getNavbarAuth),
/* harmony export */   "getNavbarAuthButton": () => (/* binding */ getNavbarAuthButton),
/* harmony export */   "getNavbarFiller": () => (/* binding */ getNavbarFiller),
/* harmony export */   "getNavbarNavs": () => (/* binding */ getNavbarNavs)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/html */ 434);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ 796);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/logo.png */ 922);
/* harmony import */ var _stylesheets_components_app_navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/components/app/navbar.scss */ 583);




function getNavbarFiller() {
    let filler = document.querySelector("#AppNavbarFiller");
    if (!filler)
        filler = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppNavbarFiller");
    return filler;
}
function getNavbar() {
    let navbar = document.querySelector("#AppNavbar");
    if (!navbar) {
        navbar = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppNavbar");
        navbar.appendChild(getNavbarLogo());
        navbar.appendChild(getNavbarNavs());
        navbar.appendChild(getNavbarAuth());
    }
    return navbar;
}
function getNavbarLogo() {
    let logo = document.querySelector("#AppNavbarLogo");
    if (!logo) {
        logo = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppNavbarLogo");
        logo.appendChild(getNavbarLogoAnchor());
    }
    return logo;
}
function getNavbarLogoAnchor() {
    const logoLink = document.createElement("a");
    logoLink.href = _config__WEBPACK_IMPORTED_MODULE_2__.HOMEPAGE_URL;
    logoLink.appendChild(getNavbarLogoImage());
    return logoLink;
}
function getNavbarLogoImage() {
    const logoImg = new Image();
    logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__;
    logoImg.alt = _config__WEBPACK_IMPORTED_MODULE_2__.DEPARTMENT_NAME;
    return logoImg;
}
function getNavbarNavs() {
    let navs = document.querySelector("#AppNavbarNavs");
    if (!navs)
        navs = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppNavbarNavs");
    return navs;
}
function getNavbarAuth() {
    let auth = document.querySelector("#AppNavbarAuth");
    if (!auth) {
        auth = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppNavbarAuth");
        auth.appendChild(getNavbarAuthButton());
    }
    return auth;
}
function getNavbarAuthButton() {
    let authBtn = document.querySelector("#AppNavbarAuthButton");
    if (!authBtn) {
        authBtn = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeButtonWithId)("AppNavbarAuthButton");
        authBtn.innerText = "Sign In";
    }
    return authBtn;
}


/***/ }),

/***/ 694:
/*!*********************************************!*\
  !*** ./frontend/src/scripts/app/sidenav.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSidenav": () => (/* binding */ getSidenav),
/* harmony export */   "getSidenavToggle": () => (/* binding */ getSidenavToggle)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/html */ 434);
/* harmony import */ var _stylesheets_components_app_sidenav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/components/app/sidenav.scss */ 273);


function getSidenav() {
    let sidenav = document.querySelector("#AppSidenav");
    if (!sidenav) {
        sidenav = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppSidenav");
    }
    ;
    return sidenav;
}
function getSidenavToggle() {
    let toggle = document.querySelector("#AppSidenavToggle");
    if (!toggle) {
        toggle = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithIdAndText)("AppSidenavToggle", ">");
    }
    ;
    return toggle;
}


/***/ }),

/***/ 313:
/*!*************************************************!*\
  !*** ./frontend/src/scripts/pages/frontPage.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFrontPage": () => (/* binding */ getFrontPage)
/* harmony export */ });
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/html */ 434);
/* harmony import */ var _app_dropnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/dropnav */ 146);
/* harmony import */ var _stylesheets_components_pages_frontPage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/components/pages/frontPage.scss */ 246);
/* harmony import */ var _utils_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pages */ 18);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ 9521);





function getFrontPage() {
    let boxContainer = document.querySelector("#AppButtonBoxContainer");
    if (!boxContainer) {
        boxContainer = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithIdAndClass)("AppButtonBoxContainer", "page-inactive");
        boxContainer.appendChild(getButtonBox());
        (0,_app_dropnav__WEBPACK_IMPORTED_MODULE_2__.haveDropnavEffect)(boxContainer);
    }
    return boxContainer;
}
function getButtonBox() {
    let buttonBox = document.querySelector("#AppButtonBox");
    if (!buttonBox) {
        buttonBox = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppButtonBox");
        buttonBox.appendChild(getAdminButton());
        buttonBox.appendChild(getSeparator());
        buttonBox.appendChild(getLoanButton());
    }
    return buttonBox;
}
function getAdminButton() {
    let adminButton = document.querySelector("#AppFrontNavAdmin");
    if (!adminButton) {
        adminButton = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeButtonWithId)("AppFrontNavAdmin");
        adminButton.innerText = "ADMIN";
        adminButton.addEventListener("click", () => (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.signIn)("loginPopup"), { capture: false });
    }
    return adminButton;
}
function getSeparator() {
    let separator = document.querySelector("#AppButtonBoxSeparator");
    if (!separator) {
        separator = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppButtonBoxSeparator");
    }
    return separator;
}
function getLoanButton() {
    let loanButton = document.querySelector("#AppFrontNavLoan");
    if (!loanButton) {
        loanButton = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeButtonWithId)("AppFrontNavLoan");
    }
    loanButton.innerText = "LOAN RESOURCES";
    loanButton.addEventListener("click", () => _utils_pages__WEBPACK_IMPORTED_MODULE_4__.pages.loanForm.show(), { capture: false });
    return loanButton;
}


/***/ }),

/***/ 407:
/*!************************************************!*\
  !*** ./frontend/src/scripts/pages/loanPage.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoanPage": () => (/* binding */ getLoanPage)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ 796);
/* harmony import */ var _app_dropnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/dropnav */ 146);
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/html */ 434);
/* harmony import */ var _stylesheets_components_pages_loanPage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/components/pages/loanPage.scss */ 190);
/* harmony import */ var _utils_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/pages */ 18);





function getLoanPage() {
    let boxContainer = document.querySelector("#AppLoanBoxContainer");
    if (!boxContainer) {
        boxContainer = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithIdAndClass)("AppLoanBoxContainer", "page-inactive");
        boxContainer.appendChild(getLoanForm());
        (0,_app_dropnav__WEBPACK_IMPORTED_MODULE_2__.haveDropnavEffect)(boxContainer);
    }
    return boxContainer;
}
function getLoanForm() {
    let loanBox = document.querySelector("#AppLoanBox");
    if (!loanBox) {
        loanBox = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeDivWithId)("AppLoanBox");
        loanBox.innerHTML = `
<button class="btn"><i class="material-icons icon" id="AppLoanBoxCloseBtn">
    close
</i></button>
<h2>School of DIgital Science</h2>
<h2>Agreement to Borrow Equipment Release of Liability</h2>
<div class="user-box">
    <input type="text" name="" required="">
    <label>Student Name</label>
</div>
<div class="user-box">
    <input type="text" name="" required="">
    <label>Supervisor Name</label>
</div>
<div class="user-box">
    <input type="email" name="" required="">
    <label>Email</label>
</div>
<div class="date-box">
    <label>Start Date</label>
    <input type="date" name="start_date" required="">
</div>
<div class ="date-box">
    <label>End Date</label>
    <input type="date" name="end_date"  required="">
</div>
<div class="select-box">
    <h3>List of Item(s) borrowed:</h3>
    <select id="items" name="select_items">
        <option value="">--Select an Item--</option>
        <option value="laptop">Laptop</option>
        <option value="computer">Computer</option>
    </select>
    <input type="number" name="" required>
    <button type="button" class="addMore"><i class="material-icons">add</i></button>
</div>
<div class="user-box">
    <div class="agreement">
        <h3>By submitting this form, I understand that the following as my responsibility:
        </h3>
        <p>1. To pick up and return the Equipment at the end of my loan period unless agreed by both parties</p>
        <p>2. To inspect the equipment at check out</p>
        <p>3. Do not chnage the settings in the computer</p>
        <p>4. Report problems experienced during the loan to the technician or supervisor</p>
        <p>5. I am not allowed to repair without reporting the problems to the technician or supervisor</p>
        <p>6. Pay repair or replacement costs for damages/loss</p>
        <p>7. Sign out/turn off syncing for personal account in email, browsers and social media and collect all data and documents befroe returning</p>
        <p>8. Failure to comply with these borrowing policies and procedures may result in loss of privilege</p>
    </div>
</div>
<div>
    <button class="submit-btn" type="submit">Submit</button>
</div>
        `;
        const closeBtn = loanBox.querySelector("#AppLoanBoxCloseBtn");
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => _utils_pages__WEBPACK_IMPORTED_MODULE_3__.pages.frontPage.show(), { capture: true });
    }
    return loanBox;
}
function getCloseBtn() {
    let closeBtn = document.querySelector("#LoanBoxCloseBtn");
    if (!closeBtn) {
        closeBtn = (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeButtonWithClass)("close-btn");
        closeBtn.innerHTML = '<i class="material-icons icon">close</i>';
    }
    return closeBtn;
}
function getDepartmentHeader() {
    return (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeH2WithText)(_config__WEBPACK_IMPORTED_MODULE_4__.DEPARTMENT_NAME);
}
function getFormHeader() {
    return (0,_utils_html__WEBPACK_IMPORTED_MODULE_1__.makeH2WithText)("Agreement to Borrow Equipment Release of Liability");
}
//function getInputBoxFor(fieldName: string, boxType: string): HTMLDivElement {
//
//    let div = makeDivWithIdAndClass(fieldName.split(" ").join(""), boxType);
//}


/***/ }),

/***/ 9521:
/*!********************************************!*\
  !*** ./frontend/src/scripts/utils/auth.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attemptSsoSilent": () => (/* binding */ attemptSsoSilent),
/* harmony export */   "getIsStaff": () => (/* binding */ getIsStaff),
/* harmony export */   "getIsStudent": () => (/* binding */ getIsStudent),
/* harmony export */   "getProfile": () => (/* binding */ getProfile),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "signIn": () => (/* binding */ signIn),
/* harmony export */   "signOut": () => (/* binding */ signOut)
/* harmony export */ });
/* harmony import */ var _auth_AuthModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/AuthModule */ 2238);
/* harmony import */ var _auth_FetchManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/FetchManager */ 7366);
/* harmony import */ var _auth_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/Constants */ 3681);



//check if browser is Internet Explorer; to login via redirect (as opposed to popup) later on  if so.
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const isIE = msie > 0 || msie11 > 0;
const authModule = new _auth_AuthModule__WEBPACK_IMPORTED_MODULE_0__.AuthModule();
const networkModule = new _auth_FetchManager__WEBPACK_IMPORTED_MODULE_1__.FetchManager();
function init() {
    window.addEventListener("load", async () => {
        authModule.loadAuthModule();
    });
}
/**
 * Called to prompt user for signin, method either loginRedirect or loginPopup
 * @param method
 */
function signIn(method) {
    const signInType = isIE ? "loginRedirect" : method;
    authModule.login(signInType);
}
/**
 * Called when user clicks "Sign Out"
 */
function signOut() {
    authModule.logout();
}
/**
 * Called to fetch user profile
 */
async function getProfile() {
    const token = isIE ? await authModule.getProfileTokenRedirect() : await authModule.getProfileTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(_auth_Constants__WEBPACK_IMPORTED_MODULE_2__.GRAPH_CONFIG.GRAPH_ME_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_ME_ENDPT);
    }
}
/**
 * Called to fetch info on whether user belongs to UBD Staff Group
 */
async function getIsStaff() {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(_auth_Constants__WEBPACK_IMPORTED_MODULE_2__.GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT);
    }
}
/**
 * Called to fetch info on whether user belongs to UBD Sudent Group
 */
async function getIsStudent() {
    const token = isIE ? await authModule.getGroupsTokenRedirect() : await authModule.getGroupsTokenPopup();
    if (token && token.length > 0) {
        const graphResponse = await networkModule.callEndpointWithToken(_auth_Constants__WEBPACK_IMPORTED_MODULE_2__.GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT, token);
        //UIManager.updateUI(graphResponse, GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT);
    }
}
/**
 * Called to attempt silent single sign-on
 */
function attemptSsoSilent() {
    authModule.attemptSsoSilent();
}


/***/ }),

/***/ 2238:
/*!*******************************************************!*\
  !*** ./frontend/src/scripts/utils/auth/AuthModule.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/msal-browser */ 4088);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-browser */ 9807);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @azure/msal-browser */ 6371);
/* harmony import */ var _app_dropnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/dropnav */ 146);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages */ 18);



/**
 * Configuration class for @azure/msal-browser:
 * https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_config_configuration_.html
 */
const MSAL_CONFIG = {
    auth: {
        clientId: "77d7a34b-9853-4113-9d57-3136eb0149e4",
        authority: "https://login.microsoftonline.com/3f46b7a8-385a-4569-9af5-c43dd63dad93",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                        console.error(message);
                        return;
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info:
                        console.info(message);
                        return;
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};
/**
 * AuthModule for application - handles authentication in app.
 */
class AuthModule {
    constructor() {
        this.myMSALObj = new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__.PublicClientApplication(MSAL_CONFIG);
        this.account = null;
        this.loginRequest = {
            scopes: ["User.Read", "api://sdsrms/access_as_user"]
        };
        this.loginRedirectRequest = Object.assign(Object.assign({}, this.loginRequest), { redirectStartPage: window.location.href });
        this.profileRequest = {
            scopes: ["User.Read"]
        };
        this.profileRedirectRequest = Object.assign(Object.assign({}, this.profileRequest), { redirectStartPage: window.location.href });
        // Add here scopes for access token to be used at MS Graph API endpoints.
        this.groupsRequest = {
            scopes: ["User.Read"]
        };
        this.groupsRedirectRequest = Object.assign(Object.assign({}, this.groupsRequest), { redirectStartPage: window.location.href });
        this.silentProfileRequest = {
            scopes: ["openid", "profile", "User.Read"],
            forceRefresh: false
        };
        this.silentGroupsRequest = {
            scopes: ["openid", "profile", "Mail.Read"],
            forceRefresh: false
        };
        this.silentLoginRequest = {
        //domainHint: "3f46b7a8-385a-4569-9af5-c43dd63dad93",
        };
    }
    /**
     * Calls getAllAccounts and determines the correct account to sign into, currently defaults to first account found in cache.
     * TODO: Add account chooser code
     *
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */
    getAccount() {
        // need to call getAccount here?
        const currentAccounts = this.myMSALObj.getAllAccounts();
        if (currentAccounts === null) {
            console.log("No accounts detected");
            return null;
        }
        console.log(currentAccounts);
        if (currentAccounts.length > 1) {
            // Add choose account code here
            console.log("Multiple accounts detected, need to add choose account code.");
            return currentAccounts[0];
        }
        else if (currentAccounts.length === 1) {
            return currentAccounts[0];
        }
        return null;
    }
    /**
     * Checks whether we are in the middle of a redirect and handles state accordingly. Only required for redirect flows.
     *
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md#redirect-apis
     */
    loadAuthModule() {
        this.myMSALObj.handleRedirectPromise().then((resp) => {
            this.handleResponse(resp);
            if (!this.account)
                this.attemptSsoSilent();
        }).catch(console.error);
    }
    /**
     * Handles the response from a popup or redirect. If response is null, will check if we have any accounts and attempt to sign in.
     * @param response
     */
    handleResponse(response) {
        if (response !== null) {
            this.account = response.account;
        }
        else {
            this.account = this.getAccount();
        }
        if (this.account) {
            (0,_app_dropnav__WEBPACK_IMPORTED_MODULE_2__.hideDropnav)();
            document.querySelector('#AppPageTitle').innerHTML = "Admin page";
            document.querySelector('#AppPageRemarks').innerHTML = "Still working in this";
            //UIManager.showWelcomeMessage(this.account);
        }
        else
            _pages__WEBPACK_IMPORTED_MODULE_3__.pages.frontPage.show();
    }
    /**
     * Calls ssoSilent to attempt silent flow. If it fails due to interaction required error, it will prompt the user to login using popup.
     * @param request
     */
    attemptSsoSilent() {
        this.myMSALObj.ssoSilent(this.silentLoginRequest).then(() => {
            this.account = this.getAccount();
            if (this.account) {
                //UIManager.showWelcomeMessage(this.account);
            }
            else {
                console.log("No account!");
            }
        }).catch(error => {
            console.error("Silent Error: " + error);
        });
    }
    /**
     * Calls loginPopup or loginRedirect based on given signInType.
     * @param signInType
     */
    login(signInType) {
        if (signInType === "loginPopup") {
            this.myMSALObj.loginPopup(this.loginRequest).then((resp) => {
                this.handleResponse(resp);
            }).catch(() => {
                console.error;
                _pages__WEBPACK_IMPORTED_MODULE_3__.pages.frontPage.show();
            });
        }
        else if (signInType === "loginRedirect") {
            this.myMSALObj.loginRedirect(this.loginRedirectRequest);
        }
        _pages__WEBPACK_IMPORTED_MODULE_3__.pages.frontPage.hide();
    }
    /**
     * Logs out of current account.
     */
    logout() {
        let account;
        if (this.account) {
            account = this.account;
        }
        const logOutRequest = {
            account
        };
        this.myMSALObj.logoutRedirect(logOutRequest);
    }
    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive redirect.
     */
    async getProfileTokenRedirect() {
        if (this.account) {
            this.silentProfileRequest.account = this.account;
        }
        return this.getTokenRedirect(this.silentProfileRequest, this.profileRedirectRequest);
    }
    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive popup.
     */
    async getProfileTokenPopup() {
        if (this.account) {
            this.silentProfileRequest.account = this.account;
        }
        return this.getTokenPopup(this.silentProfileRequest, this.profileRequest);
    }
    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive redirect.
     */
    async getGroupsTokenRedirect() {
        if (this.account) {
            this.silentGroupsRequest.account = this.account;
        }
        return this.getTokenRedirect(this.silentGroupsRequest, this.groupsRedirectRequest);
    }
    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive popup.
     */
    async getGroupsTokenPopup() {
        if (this.account) {
            this.silentGroupsRequest.account = this.account;
        }
        return this.getTokenPopup(this.silentGroupsRequest, this.groupsRequest);
    }
    /**
     * Gets a token silently, or falls back to interactive popup.
     */
    async getTokenPopup(silentRequest, interactiveRequest) {
        try {
            const response = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        }
        catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof _azure_msal_browser__WEBPACK_IMPORTED_MODULE_4__.InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                return this.myMSALObj.acquireTokenPopup(interactiveRequest).then((resp) => {
                    return resp.accessToken;
                }).catch((err) => {
                    console.error(err);
                    return null;
                });
            }
            else {
                console.error(e);
            }
        }
        return null;
    }
    /**
     * Gets a token silently, or falls back to interactive redirect.
     */
    async getTokenRedirect(silentRequest, interactiveRequest) {
        try {
            const response = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        }
        catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof _azure_msal_browser__WEBPACK_IMPORTED_MODULE_4__.InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                this.myMSALObj.acquireTokenRedirect(interactiveRequest).catch(console.error);
            }
            else {
                console.error(e);
            }
        }
        return null;
    }
}


/***/ }),

/***/ 3681:
/*!******************************************************!*\
  !*** ./frontend/src/scripts/utils/auth/Constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPH_CONFIG": () => (/* binding */ GRAPH_CONFIG)
/* harmony export */ });
// Add here the endpoints for MS Graph API services you would like to use.
const GRAPH_CONFIG = {
    GRAPH_ME_ENDPT: "https://graph.microsoft.com/v1.0/me",
    GRAPH_MAIL_ENDPT: "https://graph.microsoft.com/v1.0/me/messages",
    GRAPH_GROUPS_ISSTUDENT_ENDPT: "https://graph.microsoft.com/v1.0/me/transitiveMemberOf/microsoft.graph.group?$count=true&$filter=id eq 'ff037dbb-28b3-47d5-a710-86d3e4ae4135'",
    GRAPH_GROUPS_ISSTAFF_ENDPT: "https://graph.microsoft.com/v1.0/me/transitiveMemberOf/microsoft.graph.group?$count=true&$filter=id eq '25d38ff4-6d95-4344-a853-a580bd00e8ea'"
}; //note must also set consistencylevel to eventual in http header for the last 2 endpts to return count


/***/ }),

/***/ 7366:
/*!*********************************************************!*\
  !*** ./frontend/src/scripts/utils/auth/FetchManager.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchManager": () => (/* binding */ FetchManager)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ 3681);
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FetchManager_requireCLHeader;

/**
 * Class that handles Bearer requests for data using Fetch.
 */
class FetchManager {
    constructor() {
        _FetchManager_requireCLHeader.set(this, [_Constants__WEBPACK_IMPORTED_MODULE_0__.GRAPH_CONFIG.GRAPH_GROUPS_ISSTAFF_ENDPT, _Constants__WEBPACK_IMPORTED_MODULE_0__.GRAPH_CONFIG.GRAPH_GROUPS_ISSTUDENT_ENDPT]);
    }
    /**
     * Makes an Authorization "Bearer"  request with the given accessToken to the given endpoint.
     * @param endpoint
     * @param accessToken
     */
    async callEndpointWithToken(endpoint, accessToken) {
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;
        headers.append("Authorization", bearer);
        if (__classPrivateFieldGet(this, _FetchManager_requireCLHeader, "f").includes(endpoint))
            headers.append("ConsistencyLevel", "Eventual");
        const options = {
            method: "GET",
            headers: headers
        };
        console.log('request made at: ' + new Date().toString());
        const response = await fetch(endpoint, options);
        return (await response.json());
    }
}
_FetchManager_requireCLHeader = new WeakMap();


/***/ }),

/***/ 434:
/*!********************************************!*\
  !*** ./frontend/src/scripts/utils/html.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expandElemUsingClassList": () => (/* binding */ expandElemUsingClassList),
/* harmony export */   "hideElemUsingClassList": () => (/* binding */ hideElemUsingClassList),
/* harmony export */   "makeButtonWithClass": () => (/* binding */ makeButtonWithClass),
/* harmony export */   "makeButtonWithId": () => (/* binding */ makeButtonWithId),
/* harmony export */   "makeDivWithClass": () => (/* binding */ makeDivWithClass),
/* harmony export */   "makeDivWithId": () => (/* binding */ makeDivWithId),
/* harmony export */   "makeDivWithIdAndClass": () => (/* binding */ makeDivWithIdAndClass),
/* harmony export */   "makeDivWithIdAndText": () => (/* binding */ makeDivWithIdAndText),
/* harmony export */   "makeH2WithText": () => (/* binding */ makeH2WithText),
/* harmony export */   "makeH3WithId": () => (/* binding */ makeH3WithId),
/* harmony export */   "makePWithId": () => (/* binding */ makePWithId),
/* harmony export */   "makeTableRowWithClass": () => (/* binding */ makeTableRowWithClass),
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren),
/* harmony export */   "unexpandElemUsingClassList": () => (/* binding */ unexpandElemUsingClassList),
/* harmony export */   "unhideElemUsingClassList": () => (/* binding */ unhideElemUsingClassList)
/* harmony export */ });
const makeDivWithClass = (className) => Object.assign(document.createElement("div"), {
    className: className
});
const makeDivWithId = (id) => Object.assign(document.createElement("div"), {
    id: id
});
const makeDivWithIdAndClass = (id, className) => Object.assign(document.createElement("div"), {
    id: id,
    className: className
});
const makeDivWithIdAndText = (id, text) => Object.assign(document.createElement("div"), {
    id: id,
    innerHTML: text
});
const makeH2WithText = (text) => Object.assign(document.createElement("h2"), {
    innerHTML: text
});
const makeH3WithId = (id) => Object.assign(document.createElement("h3"), {
    id: id
});
const makePWithId = (id) => Object.assign(document.createElement("p"), {
    id: id
});
const makeButtonWithId = (id) => Object.assign(document.createElement("button"), {
    id: id
});
const makeButtonWithClass = (className) => Object.assign(document.createElement("button"), {
    className: className
});
const makeTableRowWithClass = (className) => Object.assign(document.createElement("tr"), {
    className: className
});
function removeChildren(elemToClear) {
    while (elemToClear.hasChildNodes())
        elemToClear.removeChild(elemToClear.firstChild);
}
function hideElemUsingClassList(elemToHide) {
    elemToHide.classList.add("hidden");
}
function unhideElemUsingClassList(elemToHide) {
    elemToHide.classList.remove("hidden");
}
function expandElemUsingClassList(elemToHide) {
    elemToHide.classList.add("expanded");
}
function unexpandElemUsingClassList(elemToHide) {
    elemToHide.classList.remove("expanded");
}


/***/ }),

/***/ 18:
/*!*********************************************!*\
  !*** ./frontend/src/scripts/utils/pages.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => (/* binding */ pages)
/* harmony export */ });
/* harmony import */ var _app_dropnav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/dropnav */ 146);
/* harmony import */ var _pages_frontPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/frontPage */ 313);
/* harmony import */ var _pages_loanPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/loanPage */ 407);



class PageContainer {
    constructor(pageGetter, pageShower, pageHider) {
        this.pages = new Set();
        this.getNode = pageGetter;
        this.show = function () {
            hideOtherContainersButUnhide(this);
        };
        this.hide = pageHider;
        this.unhide = pageShower;
    }
}
const dropnav = new PageContainer(_app_dropnav__WEBPACK_IMPORTED_MODULE_0__.getDropnav, _app_dropnav__WEBPACK_IMPORTED_MODULE_0__.showDropnav, _app_dropnav__WEBPACK_IMPORTED_MODULE_0__.hideDropnav);
const containers = new Set();
containers.add(dropnav);
class Page {
    hide() { var _a; (_a = this.node) === null || _a === void 0 ? void 0 : _a.classList.add("page-inactive"); }
    unhide() { var _a; (_a = this.node) === null || _a === void 0 ? void 0 : _a.classList.remove("page-inactive"); }
    init() { append(this).to(this.parentContainer); }
    show() {
        append(this).to(this.parentContainer);
        unhide(this).butHideOthersOn(this.parentContainer);
    }
}
class DropnavPage extends Page {
    constructor(pageGetter) {
        super();
        this.parentContainer = dropnav;
        this.getNode = pageGetter;
        this.parentContainer.pages.add(this);
    }
}
const pages = {
    frontPage: new DropnavPage(_pages_frontPage__WEBPACK_IMPORTED_MODULE_1__.getFrontPage),
    loanForm: new DropnavPage(_pages_loanPage__WEBPACK_IMPORTED_MODULE_2__.getLoanPage)
};
function append(page) {
    const pageNode = page.node = page.getNode();
    const attachOption = {
        to(pageContainer) {
            const parentNode = pageContainer.getNode();
            if (!parentNode.contains(pageNode))
                parentNode.appendChild(pageNode);
            pageContainer.show();
        }
    };
    return attachOption;
}
function unhide(page) {
    page.unhide();
    const hideOthersOption = {
        butHideOthersOn(pageContainer) {
            pageContainer.pages.forEach(otherPage => {
                if (otherPage != page)
                    otherPage.hide();
            });
        }
    };
    return hideOthersOption;
}
function hideOtherContainersButUnhide(container) {
    container.unhide();
    containers.forEach(otherContainer => {
        if (otherContainer != container)
            otherContainer.hide();
    });
}


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_azure_msal-browser_dist_app_PublicClientApplication_js-node_modules_css--966dc7"], () => (__webpack_exec__(277)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsY0FBYyw0QkFBNEIsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLE9BQU8sK0dBQStHLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSwrQkFBK0IsZ0JBQWdCLDhCQUE4QiwrQkFBK0IsZUFBZSxxQkFBcUIsc0JBQXNCLE9BQU8sS0FBSyxtQkFBbUI7QUFDemlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDREQUE0RCxlQUFlLG9CQUFvQixZQUFZLFdBQVcsZ0JBQWdCLGlCQUFpQixrRkFBa0YsOEJBQThCLGtEQUFrRCw4QkFBOEIsR0FBRyxtQ0FBbUMsd0JBQXdCLGlCQUFpQixHQUFHLE9BQU8sdUhBQXVILFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxtREFBbUQsY0FBYyxtQkFBbUIsbUJBQW1CLHlCQUF5QixnQkFBZ0IsTUFBTSxxQkFBcUIsYUFBYSxvRkFBb0YsK0NBQStDLDhEQUE4RCxrQ0FBa0MsOEJBQThCLHVDQUF1Qyx1QkFBdUIsU0FBUyxPQUFPLEtBQUssbUJBQW1CO0FBQy9zQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxrRUFBa0UsMENBQTBDLHNCQUFzQixHQUFHLGlEQUFpRCwwQkFBMEIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsbURBQW1ELHVCQUF1QixHQUFHLDBEQUEwRCxjQUFjLEdBQUcsc0RBQXNELHdCQUF3QixHQUFHLE9BQU8sNkhBQTZILFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVywrQkFBK0IseUJBQXlCLDhDQUE4QywwQkFBMEIsaUJBQWlCLHlCQUF5QixrQ0FBa0MsV0FBVywyQkFBMkIsaUNBQWlDLFdBQVcsMkJBQTJCLCtCQUErQixvQkFBb0IseUJBQXlCLGFBQWEsZ0JBQWdCLGtDQUFrQyxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssbUJBQW1CO0FBQ2p4QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwrREFBK0QsZUFBZSxtQkFBbUIsb0JBQW9CLGNBQWMsZ0JBQWdCLHVCQUF1QixHQUFHLGlEQUFpRCxtQkFBbUIsY0FBYyxtQkFBbUIsK0NBQStDLEdBQUcsT0FBTywwSEFBMEgsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEseURBQXlELGNBQWMsc0JBQXNCLG1CQUFtQix1QkFBdUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsK0JBQStCLGtCQUFrQix3QkFBd0Isd0JBQXdCLHlCQUF5QixvREFBb0QsU0FBUyxPQUFPLEtBQUssbUJBQW1CO0FBQ2g5QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwyREFBMkQsZUFBZSxvQkFBb0Isa0JBQWtCLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLDREQUE0RCxxQ0FBcUMsOEJBQThCLEdBQUcsa0NBQWtDLGVBQWUsZ0JBQWdCLGVBQWUsR0FBRyxrQ0FBa0MsaUJBQWlCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLCtCQUErQixrQkFBa0Isa0JBQWtCLHdCQUF3QixpQkFBaUIsa0NBQWtDLDBCQUEwQixHQUFHLDJDQUEyQyxrQkFBa0IsR0FBRywwQ0FBMEMsd0JBQXdCLGlCQUFpQixtQkFBbUIsMkJBQTJCLHVCQUF1QixpQkFBaUIsb0RBQW9ELCtCQUErQixzREFBc0QsOEJBQThCLHlDQUF5QyxHQUFHLGdHQUFnRyxtQkFBbUIsdUNBQXVDLEdBQUcsdUJBQXVCLG1CQUFtQixzQkFBc0IsdUJBQXVCLEdBQUcsNENBQTRDLHVCQUF1QixhQUFhLGNBQWMsaUJBQWlCLGlCQUFpQix1QkFBdUIsMkNBQTJDLDhCQUE4QixpQkFBaUIsb0JBQW9CLHdFQUF3RSw4QkFBOEIsNENBQTRDLEdBQUcsa0RBQWtELHVCQUF1QixhQUFhLGNBQWMsNkNBQTZDLDhCQUE4QixHQUFHLHFHQUFxRyx1QkFBdUIsYUFBYSxjQUFjLDJDQUEyQywyQkFBMkIsR0FBRyxPQUFPLHVIQUF1SCxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVkscURBQXFELGdDQUFnQyxnQ0FBZ0MsMkJBQTJCLG1DQUFtQyx3REFBd0QsZ0NBQWdDLDJDQUEyQyxLQUFLLGlDQUFpQywwRUFBMEUsZ0NBQWdDLDhDQUE4QyxLQUFLLGNBQWMsa0JBQWtCLG1CQUFtQix5QkFBeUIsY0FBYyxnQkFBZ0IsTUFBTSxxQkFBcUIsYUFBYSxvQ0FBb0Msd0NBQXdDLG9CQUFvQixvRUFBb0UseUNBQXlDLGtDQUFrQyw4QkFBOEIscUJBQXFCLHNCQUFzQixxQkFBcUIsU0FBUyx3QkFBd0IsdUJBQXVCLGdCQUFnQix3QkFBd0IsU0FBUyx5QkFBeUIsdUJBQXVCLHdCQUF3QixtQ0FBbUMsYUFBYSx5Q0FBeUMsc0JBQXNCLG9CQUFvQixzQkFBc0IsZUFBZSxtQkFBbUIsa0NBQWtDLDRCQUE0QixjQUFjLDBDQUEwQyxtQkFBbUIsK0JBQStCLDhEQUE4RCx5Q0FBeUMsZ0RBQWdELHNDQUFzQyxxQ0FBcUMseURBQXlELGVBQWUsYUFBYSxXQUFXLFNBQVMsT0FBTyxzQkFBc0IsdUJBQXVCLDBCQUEwQiwyQkFBMkIsa0NBQWtDLDRCQUE0QixvQkFBb0IsVUFBVSx3QkFBd0IsY0FBYyxtQkFBbUIsNERBQTRELDBDQUEwQyx1QkFBdUIsOEJBQThCLDBDQUEwQyxtQkFBbUIsOEJBQThCLHNCQUFzQixVQUFVLDBEQUEwRCxpREFBaUQsV0FBVywrQkFBK0IsOEJBQThCLHNCQUFzQixVQUFVLGdFQUFnRSxvREFBb0QsV0FBVyxTQUFTLE9BQU8sS0FBSyxtQkFBbUI7QUFDdDBMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDREQUE0RCxlQUFlLG9CQUFvQixjQUFjLGlCQUFpQixpQkFBaUIsOEJBQThCLGlCQUFpQiw4QkFBOEIsbUNBQW1DLEdBQUcsbUNBQW1DLG1CQUFtQix1QkFBdUIsbUJBQW1CLGlCQUFpQixpQkFBaUIsNEJBQTRCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLDRDQUE0Qyw0QkFBNEIsR0FBRyxvQ0FBb0MsZ0NBQWdDLGtEQUFrRCw2Q0FBNkMsbURBQW1ELDJEQUEyRCxzREFBc0QsaUJBQWlCLDhCQUE4QixpQkFBaUIsNEJBQTRCLGlCQUFpQix1QkFBdUIsb0JBQW9CLHNCQUFzQixHQUFHLGlDQUFpQyxnQ0FBZ0Msa0RBQWtELDZDQUE2QyxtREFBbUQsMkRBQTJELHNEQUFzRCxvQkFBb0IsaUJBQWlCLEdBQUcsZ0RBQWdELHVCQUF1QixHQUFHLHVCQUF1QixjQUFjLG9CQUFvQixHQUFHLDBCQUEwQixzQkFBc0IsbUJBQW1CLDhCQUE4QixxQkFBcUIsd0JBQXdCLHVCQUF1QixpQkFBaUIsOEJBQThCLEdBQUcscUVBQXFFLGlCQUFpQixzQkFBc0IsdUJBQXVCLG1CQUFtQiwwQkFBMEIsc0NBQXNDLEdBQUcsbUNBQW1DLG1CQUFtQiwwQkFBMEIsR0FBRyxrQ0FBa0MsdUJBQXVCLHNDQUFzQyxHQUFHLDBCQUEwQixlQUFlLHdCQUF3QixvQkFBb0Isa0JBQWtCLGNBQWMsY0FBYyxnQkFBZ0IsOEJBQThCLHVCQUF1QixvQkFBb0Isc0JBQXNCLGlCQUFpQiw4QkFBOEIsdUZBQXVGLHdCQUF3Qiw0QkFBNEIsZ0NBQWdDLGtEQUFrRCw2Q0FBNkMsbURBQW1ELDJEQUEyRCxzREFBc0QsbUNBQW1DLDBDQUEwQyx5Q0FBeUMsOEJBQThCLEdBQUcseUNBQXlDLGdCQUFnQixrRkFBa0YsR0FBRyxnQ0FBZ0MscUJBQXFCLG1CQUFtQixzQ0FBc0MsR0FBRyxPQUFPLHVIQUF1SCxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksbURBQW1ELDJCQUEyQixxQkFBcUIseUJBQXlCLG1DQUFtQyxpREFBaUQsNENBQTRDLGtEQUFrRCwwREFBMEQsb0RBQW9ELEtBQUssY0FBYyxtQkFBbUIsbUJBQW1CLHdCQUF3QixtQkFBbUIsYUFBYSxzQkFBc0IsMEJBQTBCLHdCQUF3QiwyQ0FBMkMsK0NBQStDLDRCQUE0Qix5QkFBeUIsaUNBQWlDLHFEQUFxRCwyQkFBMkIsdUJBQXVCLDRDQUE0Qyw2QkFBNkIsMEJBQTBCLFdBQVcsMEJBQTBCLG9DQUFvQyxXQUFXLFNBQVMseUJBQXlCLDhCQUE4QiwwQkFBMEIsd0NBQXdDLHVCQUF1QixzQ0FBc0MsdUJBQXVCLGlDQUFpQyx5QkFBeUIsNEJBQTRCLG1CQUFtQixzQkFBc0IsOEJBQThCLDhCQUE4Qix1QkFBdUIsK0JBQStCLDBCQUEwQixTQUFTLGdCQUFnQixvQkFBb0IsMEJBQTBCLGtCQUFrQixrQ0FBa0MsK0JBQStCLDhDQUE4QyxpQ0FBaUMsb0NBQW9DLCtCQUErQix3QkFBd0Isa0RBQWtELHlDQUF5QywyQkFBMkIsb0NBQW9DLGlDQUFpQyxrQ0FBa0MsOENBQThDLGtEQUFrRCxhQUFhLHdCQUF3Qiw2QkFBNkIsb0NBQW9DLGFBQWEsdUJBQXVCLGlDQUFpQyxpREFBaUQsYUFBYSxXQUFXLFNBQVMsT0FBTyx5QkFBeUIsbUJBQW1CLDRCQUE0QixpQ0FBaUMsY0FBYyxrQkFBa0IsU0FBUyxvQkFBb0IsMEJBQTBCLCtCQUErQix3QkFBd0IsMEJBQTBCLG9CQUFvQiwrQ0FBK0Msd0ZBQXdGLG9DQUFvQyxnQ0FBZ0MsNEJBQTRCLDJDQUEyQyxzREFBc0QsNkNBQTZDLGtDQUFrQyw4QkFBOEIsc0JBQXNCLGlGQUFpRixTQUFTLHlCQUF5QiwyQkFBMkIsOEJBQThCLDhDQUE4QyxTQUFTLE9BQU8sS0FBSyxtQkFBbUI7QUFDM2dRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDREQUE0RCxRQUFRLDBDQUEwQyxLQUFLLFNBQVMsd0RBQXdELEtBQUssVUFBVSxxREFBcUQsS0FBSyxHQUFHLDBCQUEwQix1QkFBdUIsd0JBQXdCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLGVBQWUsZ0JBQWdCLHNDQUFzQyw4QkFBOEIsR0FBRyx5Q0FBeUMsYUFBYSxHQUFHLHdDQUF3QyxlQUFlLEdBQUcsNEdBQTRHLGtCQUFrQixHQUFHLHdDQUF3Qyx1QkFBdUIsa0JBQWtCLGFBQWEsNEJBQTRCLGdCQUFnQixhQUFhLDZCQUE2Qiw4QkFBOEIsR0FBRywrQ0FBK0MsdUJBQXVCLDBCQUEwQixxQkFBcUIsdUJBQXVCLDRCQUE0QixtQkFBbUIsd0JBQXdCLDhCQUE4QixpQkFBaUIsY0FBYyxtQkFBbUIsK0JBQStCLDhCQUE4QixHQUFHLHFEQUFxRCxtQ0FBbUMsb0JBQW9CLEdBQUcsK0RBQStELHVFQUF1RSxlQUFlLGtCQUFrQix1QkFBdUIsb0NBQW9DLDhCQUE4QixHQUFHLE9BQU8sMkhBQTJILEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGdEQUFnRCwwQkFBMEIsVUFBVSxrREFBa0QsT0FBTyxXQUFXLHdEQUF3RCxPQUFPLFlBQVkscURBQXFELE9BQU8sS0FBSyxnQ0FBZ0MsOEJBQThCLDBCQUEwQixzQ0FBc0Msb0JBQW9CLG9CQUFvQixpQkFBaUIsaUJBQWlCLDhDQUE4QyxnQ0FBZ0MsOEJBQThCLGlCQUFpQixPQUFPLDZCQUE2QixtQkFBbUIsd0NBQXdDLHVCQUF1QixTQUFTLE9BQU8sMkJBQTJCLDJCQUEyQixzQkFBc0IsaUJBQWlCLCtCQUErQiw0QkFBNEIsU0FBUyx5Q0FBeUMsa0NBQWtDLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLDJCQUEyQiw2QkFBNkIsa0NBQWtDLCtCQUErQiw4QkFBOEIsMENBQTBDLHVCQUF1QixvQkFBb0IseUJBQXlCLCtDQUErQyxvQ0FBb0MsNEJBQTRCLDJDQUEyQyw0QkFBNEIsV0FBVyxTQUFTLGdDQUFnQyxvRkFBb0YscUJBQXFCLHdCQUF3Qiw2QkFBNkIsb0RBQW9ELG9DQUFvQyxTQUFTLE9BQU8sS0FBSyxtQkFBbUI7QUFDOXBJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdFQUFnRSx1QkFBdUIscUJBQXFCLGlCQUFpQixZQUFZLGVBQWUsbURBQW1ELDhCQUE4QixHQUFHLHVDQUF1QyxhQUFhLEdBQUcsc0NBQXNDLGVBQWUsZUFBZSxhQUFhLEdBQUcsb0NBQW9DLHVCQUF1QixrQkFBa0IsY0FBYyxjQUFjLHdCQUF3QiwyQkFBMkIsK0NBQStDLHdCQUF3Qix3QkFBd0IsZUFBZSxHQUFHLHlDQUF5Qyw0QkFBNEIsaUJBQWlCLG1CQUFtQixnQkFBZ0Isb0JBQW9CLEdBQUcsdUNBQXVDLHFCQUFxQixnQkFBZ0IsdUJBQXVCLG9CQUFvQixnQkFBZ0IsR0FBRyw4Q0FBOEMsdUJBQXVCLEdBQUcsb0RBQW9ELGVBQWUsb0JBQW9CLG9CQUFvQixnQkFBZ0Isd0JBQXdCLGlCQUFpQixrQ0FBa0Msa0JBQWtCLDRCQUE0QixHQUFHLG9EQUFvRCx1QkFBdUIsV0FBVyxZQUFZLG9CQUFvQixvQkFBb0IsZ0JBQWdCLHlCQUF5QixxQkFBcUIsR0FBRyw4Q0FBOEMsdUJBQXVCLEdBQUcsb0RBQW9ELGdCQUFnQixvQkFBb0Isb0JBQW9CLGdCQUFnQix3QkFBd0IsaUJBQWlCLGtDQUFrQyxrQkFBa0IsNEJBQTRCLEdBQUcsb0RBQW9ELHVCQUF1QixXQUFXLFlBQVksb0JBQW9CLG9CQUFvQixnQkFBZ0IseUJBQXlCLHFCQUFxQixHQUFHLG1JQUFtSSxlQUFlLFlBQVksbUJBQW1CLG9CQUFvQixHQUFHLDhDQUE4QyxvQkFBb0Isa0NBQWtDLHVCQUF1QixnQkFBZ0Isb0JBQW9CLEdBQUcsb0RBQW9ELGVBQWUsb0JBQW9CLG9CQUFvQixnQkFBZ0Isd0JBQXdCLGlCQUFpQixrQ0FBa0Msa0JBQWtCLDRCQUE0QixzQkFBc0IsdUJBQXVCLEdBQUcsZ0RBQWdELHVCQUF1QixnQkFBZ0IsMEJBQTBCLEdBQUcsdURBQXVELGVBQWUsdUJBQXVCLHdCQUF3QixrQkFBa0IsNEJBQTRCLGtCQUFrQixnQkFBZ0IsR0FBRyx1REFBdUQsaUJBQWlCLEdBQUcsc0RBQXNELGVBQWUsb0JBQW9CLG9CQUFvQixnQkFBZ0Isd0JBQXdCLHNCQUFzQixpQkFBaUIsa0NBQWtDLGtCQUFrQiw0QkFBNEIsR0FBRyxzREFBc0QsdUJBQXVCLFdBQVcsWUFBWSxvQkFBb0Isb0JBQW9CLGdCQUFnQix5QkFBeUIscUJBQXFCLEdBQUcsdURBQXVELDRCQUE0QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLDZEQUE2RCxvQkFBb0IsR0FBRywyRUFBMkUsZ0JBQWdCLG9CQUFvQixHQUFHLGdEQUFnRCx1QkFBdUIsMEJBQTBCLGNBQWMscUNBQXFDLHVCQUF1QixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIscUJBQXFCLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3Qiw4QkFBOEIsNEJBQTRCLEdBQUcsc0RBQXNELHdCQUF3QixtQkFBbUIsd0JBQXdCLG9CQUFvQixHQUFHLE9BQU8sMEhBQTBILFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSwrQ0FBK0MseUJBQXlCLHVCQUF1QixtQkFBbUIsY0FBYyxpQkFBaUIsMkRBQTJELGdDQUFnQyw4QkFBOEIsaUJBQWlCLE9BQU8sNkJBQTZCLG1CQUFtQixtQkFBbUIsaUJBQWlCLE9BQU8sbUJBQW1CLDJCQUEyQixzQkFBc0Isa0JBQWtCLGtCQUFrQiw0QkFBNEIsK0JBQStCLCtDQUErQyw0QkFBNEIsNEJBQTRCLG1CQUFtQixxQkFBcUIsa0NBQWtDLHVCQUF1Qix5QkFBeUIsc0JBQXNCLDBCQUEwQixTQUFTLG1CQUFtQiwyQkFBMkIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsc0JBQXNCLFNBQVMsbUNBQW1DLDZCQUE2QixTQUFTLGlDQUFpQyxxQkFBcUIsMEJBQTBCLDBCQUEwQixzQkFBc0IsOEJBQThCLHVCQUF1Qix3Q0FBd0Msd0JBQXdCLGtDQUFrQyxTQUFTLHlCQUF5Qiw2QkFBNkIsZ0JBQWdCLGtCQUFrQiwwQkFBMEIsMEJBQTBCLHNCQUFzQiwrQkFBK0IsMEJBQTBCLFNBQVMsMkJBQTJCLDZCQUE2QixTQUFTLGlDQUFpQyxzQkFBc0IsMEJBQTBCLDBCQUEwQixzQkFBc0IsOEJBQThCLHVCQUF1Qix3Q0FBd0Msd0JBQXdCLGtDQUFrQyxTQUFTLHlCQUF5Qiw2QkFBNkIsZ0JBQWdCLGtCQUFrQiwwQkFBMEIsMEJBQTBCLHNCQUFzQiwrQkFBK0IsMEJBQTBCLFNBQVMscUZBQXFGLHFCQUFxQixrQkFBa0IseUJBQXlCLDBCQUEwQixTQUFTLDBCQUEwQiwwQkFBMEIsd0NBQXdDLDZCQUE2QixxQkFBcUIsMEJBQTBCLFNBQVMsd0JBQXdCLHFCQUFxQiwwQkFBMEIsMEJBQTBCLHNCQUFzQiw4QkFBOEIsdUJBQXVCLHdDQUF3Qyx3QkFBd0Isa0NBQWtDLDRCQUE0Qiw2QkFBNkIsU0FBUyw0QkFBNEIsNkJBQTZCLHNCQUFzQixnQ0FBZ0MsU0FBUywyQkFBMkIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsdUJBQXVCLGlDQUFpQyx3QkFBd0Isc0JBQXNCLFNBQVMsMkJBQTJCLHVCQUF1QixTQUFTLDBCQUEwQixxQkFBcUIsMEJBQTBCLDBCQUEwQixzQkFBc0IsOEJBQThCLDRCQUE0Qix1QkFBdUIsd0NBQXdDLHdCQUF3QixrQ0FBa0MsU0FBUywwQkFBMEIsNkJBQTZCLGdCQUFnQixrQkFBa0IsMEJBQTBCLDBCQUEwQixzQkFBc0IsK0JBQStCLDBCQUEwQixTQUFTLG1DQUFtQyxrQ0FBa0Msc0JBQXNCLHVCQUF1Qiw0QkFBNEIsU0FBUyx5Q0FBeUMsMEJBQTBCLFNBQVMsY0FBYyxzQkFBc0IsMEJBQTBCLFNBQVMsNEJBQTRCLDZCQUE2QixnQ0FBZ0Msb0JBQW9CLDJDQUEyQyw2QkFBNkIseUJBQXlCLDBCQUEwQixnQ0FBZ0Msb0NBQW9DLDJCQUEyQiwwQkFBMEIsMkJBQTJCLDhCQUE4Qiw4QkFBOEIsb0NBQW9DLGtDQUFrQyxTQUFTLG1DQUFtQyw4QkFBOEIseUJBQXlCLDZCQUE2QiwwQkFBMEIsU0FBUyxPQUFPLFdBQVcsbUJBQW1CO0FBQzN6VjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QyxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUE0SjtBQUM1SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBIQUFPOzs7O0FBSXNHO0FBQzlILE9BQU8saUVBQWUsMEhBQU8sSUFBSSxpSUFBYyxHQUFHLGlJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQXNLO0FBQ3RLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOEhBQU87Ozs7QUFJZ0g7QUFDeEksT0FBTyxpRUFBZSw4SEFBTyxJQUFJLHFJQUFjLEdBQUcscUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBNEs7QUFDNUs7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvSUFBTzs7OztBQUlzSDtBQUM5SSxPQUFPLGlFQUFlLG9JQUFPLElBQUksMklBQWMsR0FBRywySUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUF5SztBQUN6SztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGlJQUFPOzs7O0FBSW1IO0FBQzNJLE9BQU8saUVBQWUsaUlBQU8sSUFBSSx3SUFBYyxHQUFHLHdJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQXFLO0FBQ3JLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkhBQU87Ozs7QUFJK0c7QUFDdkksT0FBTyxpRUFBZSw2SEFBTyxJQUFJLG9JQUFjLEdBQUcsb0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBc0s7QUFDdEs7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4SEFBTzs7OztBQUlnSDtBQUN4SSxPQUFPLGlFQUFlLDhIQUFPLElBQUkscUlBQWMsR0FBRyxxSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUF3SztBQUN4SztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGdJQUFPOzs7O0FBSWtIO0FBQzFJLE9BQU8saUVBQWUsZ0lBQU8sSUFBSSx1SUFBYyxHQUFHLHVJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQXVLO0FBQ3ZLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0hBQU87Ozs7QUFJaUg7QUFDekksT0FBTyxpRUFBZSwrSEFBTyxJQUFJLHNJQUFjLEdBQUcsc0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ0RSxNQUFNLGVBQWUsR0FBVywyQkFBMkIsQ0FBQztBQUM1RCxNQUFNLFlBQVksR0FBVyx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDRGU7QUFFcEI7QUFDVjtBQUU5QyxTQUFTLElBQUk7SUFDVCx5REFBUSxFQUFFLENBQUM7SUFDWCwrREFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsa0RBQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUNELElBQUksRUFBRSxDQUFDO0FBQ1AsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6QixxRUFBbUIsRUFBRSxDQUFDO0FBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDWixnQkFBZ0I7SUFDcEIsNkJBQTZCO0FBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDWixnQkFBZ0I7SUFDbEIsMEJBQTBCO0FBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDWix3QkFBd0I7QUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1QsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNaLHlCQUF5QjtBQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Cb0M7QUFDVTtBQUNHO0FBQ0c7QUFDaEI7QUFDUDtBQUNDO0FBRUs7QUFDVztBQUV2RCxJQUFJLFlBQXlCLENBQUM7QUFFdkIsU0FBUyxJQUFJOztJQUNoQiwwREFBWSxFQUFFLENBQUM7SUFDZixPQUFPLEVBQUUsQ0FBQztJQUNWLDhEQUFvQixFQUFFLENBQUM7SUFFdkIsaUNBQWlDO0lBQ2pDLGNBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdEQUFPLENBQUMsQ0FBQztBQUN2RixDQUFDO0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxTQUF1QjtJQUNyRCxJQUFHLENBQUMsU0FBUztRQUFFLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDeEMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM3QixDQUFDO0FBRU0sU0FBUyxPQUFPO0lBQ25CLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekMsSUFBRyxDQUFDLEdBQUc7UUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFFeEIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRU0sU0FBUyxPQUFPOztJQUNuQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXpDLElBQUcsR0FBRztRQUFFLFNBQUcsQ0FBQyxVQUFVLDBDQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRUQsU0FBUyxNQUFNO0lBQ1gsTUFBTSxHQUFHLEdBQUcsMERBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQyxHQUFHLENBQUMsV0FBVyxDQUFDLDREQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLEdBQUcsQ0FBQyxXQUFXLENBQUMsc0RBQVMsRUFBRSxDQUFDLENBQUM7SUFFN0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyx3REFBVSxFQUFFLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsV0FBVyxDQUFDLDhEQUFnQixFQUFFLENBQUMsQ0FBQztJQUVwQyxHQUFHLENBQUMsV0FBVyxDQUFDLG9FQUFnQixFQUFFLENBQUMsQ0FBQztJQUVwQyxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckQrRDtBQUdUO0FBQ2hCO0FBRWhDLFNBQVMsVUFBVTtJQUN0QixJQUFJLE9BQU8sR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVyRixJQUFHLENBQUMsT0FBTyxFQUFFO1FBQ1QsT0FBTyxHQUFHLDBEQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDekM7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRU0sU0FBUyxXQUFXO0lBQ3ZCLE1BQU0sYUFBYSxHQUE4QixnQkFBZ0IsRUFBRSxDQUFDO0lBRXBFLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtRQUNoRCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFDTSxTQUFTLFdBQVc7SUFDdkIsTUFBTSxhQUFhLEdBQThCLGdCQUFnQixFQUFFLENBQUM7SUFFcEUsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFeEQsOERBQW9CLEVBQUUsQ0FBQztBQUMzQixDQUFDO0FBSU0sU0FBUyxnQkFBZ0I7SUFDNUIsT0FBTyxRQUFRLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBQ00sU0FBUyxpQkFBaUIsQ0FBQyxJQUFpQjtJQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFTSxTQUFTLFlBQVk7O0lBQ3hCLElBQUksTUFBTSxHQUE4QixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUU1RSxJQUFHLE1BQU07UUFBRSxZQUFNLENBQUMsYUFBYSwwQ0FBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUN3RjtBQUU1QjtBQUV0RCxTQUFTLGdCQUFnQjtJQUM1QixJQUFJLFNBQVMsR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRTdGLElBQUcsQ0FBQyxTQUFTLEVBQUU7UUFDWCxTQUFTLEdBQUcsMERBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN0QyxTQUFTLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUVNLFNBQVMsWUFBWTtJQUN4QixJQUFJLEtBQUssR0FBNEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUU3RixJQUFHLENBQUMsS0FBSztRQUFFLEtBQUssR0FBRyx5REFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRWhELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFDTSxTQUFTLFlBQVksQ0FBQyxLQUFhO0lBQ3RDLFlBQVksRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDckMsQ0FBQztBQUNNLFNBQVMsY0FBYyxLQUFXLDJEQUFjLENBQUMsWUFBWSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUM7QUFFcEUsU0FBUyxjQUFjO0lBQzFCLElBQUksT0FBTyxHQUFnRCxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFckcsSUFBRyxDQUFDLE9BQU87UUFBRSxPQUFPLEdBQUcsd0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXJELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFDTSxTQUFTLGdCQUFnQixLQUFXLDJEQUFjLENBQUMsY0FBYyxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUM7QUFFeEUsU0FBUyxjQUFjO0lBQzFCLElBQUksT0FBTyxHQUFvQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFekYsSUFBRyxDQUFDLE9BQU87UUFBRSxPQUFPLEdBQUcsMERBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXZELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFDTSxTQUFTLGNBQWMsQ0FBQyxVQUF1QjtJQUNsRCxjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzhEO0FBQ0Y7QUFFcEI7QUFFYTtBQUUvQyxTQUFTLGVBQWU7SUFDM0IsSUFBSSxNQUFNLEdBQW9DLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUV6RixJQUFHLENBQUMsTUFBTTtRQUFFLE1BQU0sR0FBRywwREFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFdEQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVNLFNBQVMsU0FBUztJQUNyQixJQUFJLE1BQU0sR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVuRixJQUFHLENBQUMsTUFBTSxFQUFFO1FBQ1IsTUFBTSxHQUFHLDBEQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDdkM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsU0FBUyxhQUFhO0lBQ2xCLElBQUksSUFBSSxHQUFvQyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFckYsSUFBRyxDQUFDLElBQUksRUFBRTtRQUNOLElBQUksR0FBRywwREFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsbUJBQW1CO0lBQ3hCLE1BQU0sUUFBUSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWhFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsaURBQVksQ0FBQztJQUM3QixRQUFRLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUUzQyxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxrQkFBa0I7SUFDdkIsTUFBTSxPQUFPLEdBQXFCLElBQUksS0FBSyxFQUFFLENBQUM7SUFFOUMsT0FBTyxDQUFDLEdBQUcsR0FBRyw2Q0FBSSxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLEdBQUcsb0RBQWUsQ0FBQztJQUU5QixPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRU0sU0FBUyxhQUFhO0lBQ3pCLElBQUksSUFBSSxHQUFvQyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFckYsSUFBRyxDQUFDLElBQUk7UUFBRSxJQUFJLEdBQUcsMERBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVoRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRU0sU0FBUyxhQUFhO0lBQ3pCLElBQUksSUFBSSxHQUFvQyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFckYsSUFBRyxDQUFDLElBQUksRUFBRTtRQUNOLElBQUksR0FBRywwREFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsbUJBQW1CO0lBQy9CLElBQUksT0FBTyxHQUEwQyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFFcEcsSUFBRyxDQUFDLE9BQU8sRUFBRTtRQUNULE9BQU8sR0FBRyw2REFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQ2pDO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZrRTtBQUVaO0FBRWhELFNBQVMsVUFBVTtJQUN0QixJQUFJLE9BQU8sR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVyRixJQUFHLENBQUMsT0FBTyxFQUFFO1FBQ1QsT0FBTyxHQUFHLDBEQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDekM7SUFBQSxDQUFDO0lBRUYsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUNNLFNBQVMsZ0JBQWdCO0lBQzVCLElBQUksTUFBTSxHQUFvQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFMUYsSUFBRyxDQUFDLE1BQU0sRUFBRTtRQUNSLE1BQU0sR0FBRyxpRUFBb0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxRDtJQUFBLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCc0Y7QUFDdkI7QUFFTDtBQUNwQjtBQUNBO0FBRWhDLFNBQVMsWUFBWTtJQUV4QixJQUFJLFlBQVksR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXJHLElBQUcsQ0FBQyxZQUFZLEVBQUU7UUFDZCxZQUFZLEdBQUcsa0VBQXFCLENBQUMsdUJBQXVCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDL0UsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLCtEQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsWUFBWTtJQUNqQixJQUFJLFNBQVMsR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV6RixJQUFHLENBQUMsU0FBUyxFQUFFO1FBQ1gsU0FBUyxHQUFHLDBEQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN0QyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUM7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ25CLElBQUksV0FBVyxHQUEwQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFckcsSUFBRyxDQUFDLFdBQVcsRUFBRTtRQUNiLFdBQVcsR0FBRyw2REFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsbURBQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsQ0FBQztLQUNyRjtJQUVELE9BQU8sV0FBVyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLFlBQVk7SUFDakIsSUFBSSxTQUFTLEdBQW9DLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUVsRyxJQUFHLENBQUMsU0FBUyxFQUFFO1FBQ1gsU0FBUyxHQUFHLDBEQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN0RDtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLGFBQWE7SUFDbEIsSUFBSSxVQUFVLEdBQTBDLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUVuRyxJQUFHLENBQUMsVUFBVSxFQUFFO1FBQ1osVUFBVSxHQUFHLDZEQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FBQztJQUNsRCxVQUFVLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQ3hDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQ3RDLDZEQUFtQixFQUFFLEVBQ3ZCLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDO0lBRXRCLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEU4QztBQUNJO0FBQ3lFO0FBRWxFO0FBQ25CO0FBRWhDLFNBQVMsV0FBVztJQUN2QixJQUFJLFlBQVksR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRW5HLElBQUcsQ0FBQyxZQUFZLEVBQUU7UUFDZCxZQUFZLEdBQUcsa0VBQXFCLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDN0UsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLCtEQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25DO0lBQ0QsT0FBTyxZQUFZLENBQUM7QUFDeEIsQ0FBQztBQUNELFNBQVMsV0FBVztJQUNoQixJQUFJLE9BQU8sR0FBb0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVyRixJQUFHLENBQUMsT0FBTyxFQUFFO1FBQ1QsT0FBTyxHQUFHLDBEQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FxRG5CLENBQUM7UUFDRixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDOUQsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyw4REFBb0IsRUFBRSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7S0FDdEY7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2hCLElBQUksUUFBUSxHQUEwQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFakcsSUFBRyxDQUFDLFFBQVEsRUFBRTtRQUNWLFFBQVEsR0FBRyxnRUFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxRQUFRLENBQUMsU0FBUyxHQUFHLDBDQUEwQyxDQUFDO0tBQ25FO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUVELFNBQVMsbUJBQW1CO0lBQ3hCLE9BQU8sMkRBQWMsQ0FBQyxvREFBZSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUNELFNBQVMsYUFBYTtJQUNsQixPQUFPLDJEQUFjLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUNoRixDQUFDO0FBRUQsK0VBQStFO0FBQy9FLEVBQUU7QUFDRiw4RUFBOEU7QUFDOUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEc0QztBQUNJO0FBQ0g7QUFFaEQscUdBQXFHO0FBQ3JHLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQ3RDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFcEMsTUFBTSxVQUFVLEdBQWUsSUFBSSx3REFBVSxFQUFFLENBQUM7QUFDaEQsTUFBTSxhQUFhLEdBQWlCLElBQUksNERBQVksRUFBRSxDQUFDO0FBRWhELFNBQVMsSUFBSTtJQUNoQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3ZDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRDs7O0dBR0c7QUFDSyxTQUFTLE1BQU0sQ0FBQyxNQUFjO0lBQ2xDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSSxTQUFTLE9BQU87SUFDbkIsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRDs7R0FFRztBQUNLLEtBQUssVUFBVSxVQUFVO0lBQzdCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxVQUFVLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUMxRyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMzQixNQUFNLGFBQWEsR0FBRyxNQUFNLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyx3RUFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRyxpRUFBaUU7S0FDcEU7QUFDTCxDQUFDO0FBRUQ7O0dBRUc7QUFDSSxLQUFLLFVBQVUsVUFBVTtJQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sVUFBVSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEcsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxhQUFhLEdBQUcsTUFBTSxhQUFhLENBQUMscUJBQXFCLENBQUMsb0ZBQXVDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEgsNkVBQTZFO0tBQ2hGO0FBQ0wsQ0FBQztBQUVEOztHQUVHO0FBQ0ksS0FBSyxVQUFVLFlBQVk7SUFDOUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3hHLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE1BQU0sYUFBYSxHQUFHLE1BQU0sYUFBYSxDQUFDLHFCQUFxQixDQUFDLHNGQUF5QyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xILCtFQUErRTtLQUNsRjtBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNLLFNBQVMsZ0JBQWdCO0lBQzdCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekV3TjtBQUU3SjtBQUczQjtBQUVqQzs7O0dBR0c7QUFDSCxNQUFNLFdBQVcsR0FBa0I7SUFDL0IsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLHNDQUFzQztRQUNoRCxTQUFTLEVBQUUsd0VBQXdFO0tBQ3RGO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsYUFBYSxFQUFFLGNBQWM7UUFDN0Isc0JBQXNCLEVBQUUsS0FBSyxFQUFFLDhEQUE4RDtLQUNoRztJQUNELE1BQU0sRUFBRTtRQUNKLGFBQWEsRUFBRTtZQUNYLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksV0FBVyxFQUFFO29CQUNiLE9BQU87aUJBQ1Y7Z0JBQ0QsUUFBUSxLQUFLLEVBQUU7b0JBQ1gsS0FBSywrREFBYzt3QkFDZixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2QixPQUFPO29CQUNYLEtBQUssOERBQWE7d0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEIsT0FBTztvQkFDWCxLQUFLLGlFQUFnQjt3QkFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdkIsT0FBTztvQkFDWCxLQUFLLGlFQUFnQjt3QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEIsT0FBTztpQkFDZDtZQUNMLENBQUM7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUVGOztHQUVHO0FBQ0ksTUFBTSxVQUFVO0lBY25CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHdFQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLDZCQUE2QixDQUFDO1NBQ3ZELENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLG1DQUNsQixJQUFJLENBQUMsWUFBWSxLQUNwQixpQkFBaUIsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDbEIsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3hCLENBQUM7UUFFRixJQUFJLENBQUMsc0JBQXNCLG1DQUNwQixJQUFJLENBQUMsY0FBYyxLQUN0QixpQkFBaUIsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FDMUMsQ0FBQztRQUVGLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUN4QixDQUFDO1FBRUYsSUFBSSxDQUFDLHFCQUFxQixtQ0FDbkIsSUFBSSxDQUFDLGFBQWEsS0FDckIsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQzFDLENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLEdBQUc7WUFDeEIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7WUFDMUMsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQztRQUVGLElBQUksQ0FBQyxtQkFBbUIsR0FBRztZQUN2QixNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQztZQUMxQyxZQUFZLEVBQUUsS0FBSztTQUN0QixDQUFDO1FBRUYsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFEQUFxRDtTQUN4RCxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssVUFBVTtRQUNkLGdDQUFnQztRQUNoQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hELElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzVCLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsK0JBQStCO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztZQUM1RSxPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckMsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNGLGNBQWM7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBaUMsRUFBRSxFQUFFO1lBQzlFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxRQUFxQztRQUNoRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQ25DO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNwQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLHlEQUFXLEVBQUUsQ0FBQztZQUNBLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFFLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztZQUNsRSxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFFLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1lBQzdGLDZDQUE2QztTQUNoRDs7WUFDSSx3REFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0I7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCw2Q0FBNkM7YUFDaEQ7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM5QjtRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxVQUFrQjtRQUNwQixJQUFJLFVBQVUsS0FBSyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQTBCLEVBQUUsRUFBRTtnQkFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLHdEQUFvQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNLElBQUksVUFBVSxLQUFLLGVBQWUsRUFBRTtZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUMzRDtRQUNELHdEQUFvQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNGLElBQUksT0FBZ0MsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87U0FDekI7UUFDRCxNQUFNLGFBQWEsR0FBc0I7WUFDckMsT0FBTztTQUNWLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsdUJBQXVCO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNwRDtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsb0JBQW9CO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNwRDtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxzQkFBc0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxtQkFBbUI7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOztPQUVHO0lBQ0ssS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUE0QixFQUFFLGtCQUFnQztRQUN0RixJQUFJO1lBQ0EsTUFBTSxRQUFRLEdBQXlCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5RixPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDL0I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSw2RUFBNEIsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDdEUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixPQUFPLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBNEIsRUFBRSxrQkFBbUM7UUFDNUYsSUFBSTtZQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RSxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDL0I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSw2RUFBNEIsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQzNTRCwwRUFBMEU7QUFDbkUsTUFBTSxZQUFZLEdBQUc7SUFDeEIsY0FBYyxFQUFFLHFDQUFxQztJQUNyRCxnQkFBZ0IsRUFBRSw4Q0FBOEM7SUFDaEUsNEJBQTRCLEVBQUUsK0lBQStJO0lBQzdLLDBCQUEwQixFQUFFLCtJQUErSTtDQUM5SyxDQUFDLHVHQUFzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ043RDtBQUczQzs7R0FFRztBQUNJLE1BQU0sWUFBWTtJQUF6QjtRQUVJLHdDQUE2QixDQUFFLCtFQUF1QyxFQUFFLGlGQUF5QyxDQUFFLEVBQUM7SUEwQnhILENBQUM7SUF4Qkc7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxRQUFnQixFQUFFLFdBQW1CO1FBQzdELE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsTUFBTSxNQUFNLEdBQUcsVUFBVSxXQUFXLEVBQUUsQ0FBQztRQUV2QyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFHLDJCQUFJLHFDQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDdkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVuRCxNQUFNLE9BQU8sR0FBRztZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXpELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQStDLENBQUM7SUFDakYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ00sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFNBQWlCLEVBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUM7SUFDL0csU0FBUyxFQUFFLFNBQVM7Q0FDdkIsQ0FBQyxDQUFDO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFVLEVBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUM7SUFDckcsRUFBRSxFQUFFLEVBQUU7Q0FDVCxDQUFDLENBQUM7QUFDSSxNQUFNLHFCQUFxQixHQUFHLENBQUMsRUFBVSxFQUFFLFNBQWlCLEVBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUM7SUFDaEksRUFBRSxFQUFFLEVBQUU7SUFDTixTQUFTLEVBQUUsU0FBUztDQUN2QixDQUFDLENBQUM7QUFDSSxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBVSxFQUFFLElBQVksRUFBa0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQztJQUMxSCxFQUFFLEVBQUUsRUFBRTtJQUNOLFNBQVMsRUFBRSxJQUFJO0NBQ2xCLENBQUMsQ0FBQztBQUVJLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBWSxFQUFzQixFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDO0lBQzNHLFNBQVMsRUFBRSxJQUFJO0NBQ2xCLENBQUMsQ0FBQztBQUNJLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBVSxFQUFzQixFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDO0lBQ3ZHLEVBQUUsRUFBRSxFQUFFO0NBQ1QsQ0FBQyxDQUFDO0FBRUksTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFVLEVBQXdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUM7SUFDdkcsRUFBRSxFQUFFLEVBQUU7Q0FDVCxDQUFDLENBQUM7QUFFSSxNQUFNLGdCQUFnQixHQUFHLENBQUMsRUFBVSxFQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQzlHLEVBQUUsRUFBRSxFQUFFO0NBQ1QsQ0FBQyxDQUFDO0FBQ0ksTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFNBQWlCLEVBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUM7SUFDeEgsU0FBUyxFQUFFLFNBQVM7Q0FDdkIsQ0FBQyxDQUFDO0FBRUksTUFBTSxxQkFBcUIsR0FBRyxDQUFDLFNBQWlCLEVBQXVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUM7SUFDeEgsU0FBUyxFQUFFLFNBQVM7Q0FDdkIsQ0FBQyxDQUFDO0FBRUksU0FBUyxjQUFjLENBQUMsV0FBd0I7SUFDbkQsT0FBTSxXQUFXLENBQUMsYUFBYSxFQUFFO1FBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBUSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUYsQ0FBQztBQUVNLFNBQVMsc0JBQXNCLENBQUMsVUFBdUI7SUFDMUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUNNLFNBQVMsd0JBQXdCLENBQUMsVUFBdUI7SUFDNUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVNLFNBQVMsd0JBQXdCLENBQUMsVUFBdUI7SUFDNUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUNNLFNBQVMsMEJBQTBCLENBQUMsVUFBdUI7SUFDOUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRxRTtBQUNwQjtBQUNGO0FBRWhELE1BQU0sYUFBYTtJQU9mLFlBQVksVUFBNkIsRUFBRSxVQUFzQixFQUFFLFNBQXFCO1FBTnhGLFVBQUssR0FBYyxJQUFJLEdBQUcsRUFBUSxDQUFDO1FBTy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUiw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxvREFBVSxFQUFFLHFEQUFXLEVBQUUscURBQVcsQ0FBQyxDQUFDO0FBRXhFLE1BQU0sVUFBVSxHQUF1QixJQUFJLEdBQUcsRUFBaUIsQ0FBQztBQUNoRSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXhCLE1BQWUsSUFBSTtJQUtmLElBQUksYUFBVyxVQUFJLENBQUMsSUFBSSwwQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxNQUFNLGFBQVcsVUFBSSxDQUFDLElBQUksMENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEUsSUFBSSxLQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RCxJQUFJO1FBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDSjtBQUNELE1BQU0sV0FBWSxTQUFRLElBQUk7SUFJMUIsWUFBWSxVQUFnQztRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUpILG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBSy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFDTSxNQUFNLEtBQUssR0FBRztJQUNqQixTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsMERBQVksQ0FBQztJQUN4QyxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsd0RBQVcsQ0FBQztDQUN6QztBQUVELFNBQVMsTUFBTSxDQUFDLElBQVU7SUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFNUMsTUFBTSxZQUFZLEdBQUc7UUFDakIsRUFBRSxDQUFDLGFBQTRCO1lBQzNCLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUzQyxJQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVwRSxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQztLQUNKO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLElBQVU7SUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWQsTUFBTSxnQkFBZ0IsR0FBRztRQUNyQixlQUFlLENBQUMsYUFBNEI7WUFDeEMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BDLElBQUcsU0FBUyxJQUFJLElBQUk7b0JBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQztBQUM1QixDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FBQyxTQUF3QjtJQUMxRCxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFbkIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNoQyxJQUFHLGNBQWMsSUFBSSxTQUFTO1lBQUUsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvZHJvcG5hdi5zY3NzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYXBwL21haW5Db250YWluZXIuc2NzcyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC9tZXNzYWdlQm94LnNjc3MiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvc2lkZW5hdi5zY3NzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvcGFnZXMvZnJvbnRQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9wYWdlcy9sb2FuUGFnZS5zY3NzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYXBwLnNjc3M/ZmQwMyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC9kcm9wbmF2LnNjc3M/ZGYxMyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC9tYWluQ29udGFpbmVyLnNjc3M/OTIyMSIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC9tZXNzYWdlQm94LnNjc3M/Mjk0NyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC9uYXZiYXIuc2Nzcz83OGFkIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYXBwL3NpZGVuYXYuc2Nzcz80Yzc0Iiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvcGFnZXMvZnJvbnRQYWdlLnNjc3M/ODNiZiIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL3BhZ2VzL2xvYW5QYWdlLnNjc3M/YTQ3NSIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zY3JpcHRzL2FwcC50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zY3JpcHRzL2FwcC9kcm9wbmF2LnRzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3NjcmlwdHMvYXBwL21haW5Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc2NyaXB0cy9hcHAvbmF2YmFyLnRzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3NjcmlwdHMvYXBwL3NpZGVuYXYudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc2NyaXB0cy9wYWdlcy9mcm9udFBhZ2UudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc2NyaXB0cy9wYWdlcy9sb2FuUGFnZS50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zY3JpcHRzL3V0aWxzL2F1dGgudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc2NyaXB0cy91dGlscy9hdXRoL0F1dGhNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc2RzLXJlc291cmNlLW1ndC1zeXN0ZW0vLi9mcm9udGVuZC9zcmMvc2NyaXB0cy91dGlscy9hdXRoL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zY3JpcHRzL3V0aWxzL2F1dGgvRmV0Y2hNYW5hZ2VyLnRzIiwid2VicGFjazovL3Nkcy1yZXNvdXJjZS1tZ3Qtc3lzdGVtLy4vZnJvbnRlbmQvc3JjL3NjcmlwdHMvdXRpbHMvaHRtbC50cyIsIndlYnBhY2s6Ly9zZHMtcmVzb3VyY2UtbWd0LXN5c3RlbS8uL2Zyb250ZW5kL3NyYy9zY3JpcHRzL3V0aWxzL3BhZ2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI0FwcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuI0FwcCAjQXBwTmF2YmFyRmlsbGVyIHtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuI0FwcCAuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUFtQixZQUFBO0FBRXJCO0FBQUU7RUFDRSxhQUFBO0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI0FwcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIFxcclxcbiAgI0FwcE5hdmJhckZpbGxlciB7IGhlaWdodDogNTVweDsgfVxcclxcbiAgXFxyXFxuICAuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI0FwcCAjQXBwRHJvcG5hdiB7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yOSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyMjMzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgaGVpZ2h0O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuI0FwcCAjQXBwRHJvcG5hdi5kcm9wbmF2LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMTMyMjMzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvZHJvcG5hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQVEsTUFBQTtFQUNSLFdBQUE7RUFBYSxZQUFBO0VBRWIsNkVBQUE7RUFFQSx5QkFYYztFQWFkLDZDQUFBO0VBQ0EseUJBQUE7QUFISjtBQUtJO0VBQ0UsbUJBakJZO0VBa0JaLFlBQUE7QUFITlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3JfbmF2YmFyLWJnOiAjMTMyMjMzO1xcclxcblxcclxcbiNBcHAge1xcclxcbiAgI0FwcERyb3BuYXYge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICBsZWZ0OjA7IHRvcDowO1xcclxcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1NXB4O1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjMpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjI5KTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX25hdmJhci1iZztcXHJcXG4gICAgXFxyXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGhlaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG5cXHJcXG4gICAgJi5kcm9wbmF2LWFjdGl2ZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yX25hdmJhci1iZztcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI0FwcCAjQXBwTWFpbkNvbnRhaW5lciB7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2Utb3V0O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbiNBcHAgI0FwcE1haW5Db250YWluZXIgI0FwcFBhZ2UgI0FwcFBhZ2VUaXRsZSB7XFxuICBtYXJnaW46IDIwcHggMCAwIDIwcHg7XFxufVxcbiNBcHAgI0FwcE1haW5Db250YWluZXIgI0FwcFBhZ2UgI0FwcFBhZ2VSZW1hcmtzIHtcXG4gIG1hcmdpbjogNXB4IDAgMCAyMHB4O1xcbn1cXG4jQXBwICNBcHBNYWluQ29udGFpbmVyICNBcHBQYWdlICNBcHBQYWdlQ29udGVudCB7XFxuICBtYXJnaW46IDAgMCAwIDIwcHg7XFxufVxcbiNBcHAgI0FwcE1haW5Db250YWluZXIgI0FwcFBhZ2UgI0FwcFBhZ2VDb250ZW50IGJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxufVxcbiNBcHAgI0FwcE1haW5Db250YWluZXIgI0FwcFBhZ2UgI0FwcFBhZ2VDb250ZW50IGgzIHtcXG4gIG1hcmdpbjogMjBweCAwIDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC9tYWluQ29udGFpbmVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSxxQ0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFTTtFQUNFLHFCQUFBO0FBQVI7QUFFTTtFQUNFLG9CQUFBO0FBQVI7QUFFTTtFQUNFLGtCQUFBO0FBQVI7QUFDUTtFQUNFLFNBQUE7QUFDVjtBQUNRO0VBQ0UsbUJBQUE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjQXBwIHtcXHJcXG4gICNBcHBNYWluQ29udGFpbmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgICNBcHBQYWdle1xcclxcbiAgICAgICNBcHBQYWdlVGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAjQXBwUGFnZVJlbWFya3Mge1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwIDIwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICNBcHBQYWdlQ29udGVudCB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICBtYXJnaW46IDAgO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaDMge1xcclxcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjQXBwICNBcHBNZXNzYWdlQm94IHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jQXBwICNBcHBNZXNzYWdlQm94IHAsICNBcHAgI0FwcE1lc3NhZ2VCb3ggaDMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA3cHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjEsIDEzNiwgMC44KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYXBwL21lc3NhZ2VCb3guc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQztFQUNDLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUFIRjtBQUtFO0VBQ0MsY0FBQTtFQUVBLFNBQUE7RUFDQSxjQUFBO0VBRUEsMENBbEJrQjtBQWFyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3JfeWVsbG93LWxpZ2h0OiAjZmZkZDg4Y2M7XFxyXFxuXFxyXFxuI0FwcCB7XFxyXFxuXFx0I0FwcE1lc3NhZ2VCb3gge1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0cG9zaXRpb246Zml4ZWQ7XFxyXFxuXFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdHdpZHRoOjEwMCU7XFxyXFxuXFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcdFxcdHAsaDMge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6YmxvY2s7XFxyXFxuXFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDdweCAwO1xcclxcblxcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl95ZWxsb3ctbGlnaHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI0FwcCAjQXBwTmF2YmFyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB0b3AsIGxlZnQsIHdpZHRoO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG4jQXBwICNBcHBOYXZiYXIuZHJvcG5hdi1hY3RpdmUge1xcbiAgbGVmdDogLTEwJTtcXG4gIHdpZHRoOiAxMjAlO1xcbiAgdG9wOiAtNTVweDtcXG59XFxuI0FwcCAjQXBwTmF2YmFyICNBcHBOYXZiYXJMb2dvIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuI0FwcCAjQXBwTmF2YmFyICNBcHBOYXZiYXJMb2dvIGltZyB7XFxuICBtYXJnaW46IDlweCAwIDZweCA5cHg7XFxufVxcbiNBcHAgI0FwcE5hdmJhciAjTmF2YmFyTmF2cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuI0FwcCAjQXBwTmF2YmFyICNOYXZiYXJOYXZzIC5uYXYuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNBcHAgI0FwcE5hdmJhciAjTmF2YmFyTmF2cyAubmF2IC5saW5rIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBwYWRkaW5nOiAwIDRweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSByZ2JhKDE0LCA2MCwgMTEwLCAwKTtcXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNHB4O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBjb2xvcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxufVxcbiNBcHAgI0FwcE5hdmJhciAjTmF2YmFyTmF2cyAubmF2IC5saW5rOmhvdmVyLCAjQXBwICNBcHBOYXZiYXIgI05hdmJhck5hdnMgLm5hdiAubGluay5jdXJyZW50IHtcXG4gIGNvbG9yOiAjZmZjYjAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgI2ZmY2IwMDtcXG59XFxuI0FwcCAjQXBwTmF2YmFyQXV0aCB7XFxuICBmbGV4LWdyb3c6IDIwMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4jQXBwICNBcHBOYXZiYXJBdXRoICNBcHBOYXZiYXJBdXRoQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDZweCA0cHggMCByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIGJveC1zaGFkb3csIHRvcCwgbGVmdDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbiNBcHAgI0FwcE5hdmJhckF1dGggI0FwcE5hdmJhckF1dGhCdXR0b246aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiAxcHg7XFxuICBib3gtc2hhZG93OiAxLjVweCAzcHggMnB4IDAgcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYzAwMDtcXG59XFxuI0FwcCAjQXBwTmF2YmFyQXV0aCAjQXBwTmF2YmFyQXV0aEJ1dHRvbi5jbGlja2VkLCAjQXBwICNBcHBOYXZiYXJBdXRoICNBcHBOYXZiYXJBdXRoQnV0dG9uOmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDJweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDAgcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYXBwL25hdmJhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWtCRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQWlCLGFBQUE7RUFDakIsT0FBQTtFQUFRLE1BQUE7RUFDUixXQUFBO0VBQWEsWUFBQTtFQUViLG1CQUFBO0VBQ0EsOEJBQUE7RUFBZ0MsbUJBQUE7RUFFaEMsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBZko7QUFpQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFmTjtBQWlCSTtFQUNFLFlBQUE7QUFmTjtBQWdCTTtFQUFNLHFCQUFBO0FBYlo7QUFnQkk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQXFCLFlBQUE7RUFDckIsNkJBQUE7RUFBK0IscUJBQUE7QUFickM7QUFnQlE7RUFBVSxhQUFBO0FBYmxCO0FBY1E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFBYyxjQUFBO0VBRWQsc0JBQUE7RUFBd0Isa0JBQUE7RUFFeEIsWUFBQTtFQUVBLCtDQUFBO0VBQ0EsMEJBQUE7RUFyRFIsaURBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FBeUNGO0FBY1U7RUFDRSxjQTdERztFQThESCxrQ0FBQTtBQVpaO0FBa0JFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFoQko7QUFrQkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBVSxTQUFBO0VBQ1YsWUFBQTtFQUFjLFlBQUE7RUFBYyxrQkFBQTtFQUU1QixzQ0FBQTtFQUNBLHlCQS9FUztFQWdGVCxZQUFBO0VBRUEsZUFBQTtFQXpFSixtRUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QUEyREY7QUFlTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFFVix3Q0FBQTtFQUNBLHlCQTNGWTtBQThFcEI7QUFlTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFFVixzQ0FBQTtFQUNBLHNCQW5HZTtBQXNGdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbG9yX25hdmJhci1iZzogIzEzMjIzMztcXHJcXG4kY29sb3JfeWVsbG93LWRhcmtlc3Q6ICNlYTA7XFxyXFxuJGNvbG9yX3llbGxvdy1kYXJrOiAjZjBjMDAwO1xcclxcbiRjb2xvcl95ZWxsb3c6ICNmZmNiMDA7XFxyXFxuXFxyXFxuQG1peGluIG5hdi1saW5rLWFuaW1hdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGNvbG9yO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ1dHRvbi1hbmltYXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIGJveC1zaGFkb3csIHRvcCwgbGVmdDtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNBcHAge1xcclxcbiAgI0FwcE5hdmJhciB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGVmdDowOyB0b3A6MDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNTVweDtcXHJcXG4gICAgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdG9wLCBsZWZ0LCB3aWR0aDtcXHJcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuXFxyXFxuICAgICYuZHJvcG5hdi1hY3RpdmUge1xcclxcbiAgICAgIGxlZnQ6IC0xMCU7XFxyXFxuICAgICAgd2lkdGg6IDEyMCU7XFxyXFxuICAgICAgdG9wOiAtNTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAjQXBwTmF2YmFyTG9nbyB7XFxyXFxuICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgIGltZyB7IG1hcmdpbjogOXB4IDAgNnB4IDlweDsgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNOYXZiYXJOYXZzIHtcXHJcXG4gICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgbWFyZ2luOiAwIDJweDtcXHJcXG5cXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG5cXHJcXG4gICAgICAubmF2IHtcXHJcXG4gICAgICAgICYuaGlkZGVuIHtkaXNwbGF5OiBub25lO31cXHJcXG4gICAgICAgIC5saW5rIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4OyBwYWRkaW5nOjAgNHB4O1xcclxcblxcclxcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmdiKDE0LDYwLDExMCwwKTtcXHJcXG4gICAgICAgICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA0cHg7XFxyXFxuXFxyXFxuICAgICAgICAgIEBpbmNsdWRlIG5hdi1saW5rLWFuaW1hdGlvbigpO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyLCAmLmN1cnJlbnQge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfeWVsbG93O1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICRjb2xvcl95ZWxsb3c7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICNBcHBOYXZiYXJBdXRoIHtcXHJcXG4gICAgZmxleC1ncm93OiAyMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuXFxyXFxuICAgICNBcHBOYXZiYXJBdXRoQnV0dG9uIHtcXHJcXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICB0b3A6IDBweDsgbGVmdDogMHB4O1xcclxcbiAgICAgIHBhZGRpbmc6IDVweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgXFxyXFxuICAgICAgYm94LXNoYWRvdzogM3B4IDZweCA0cHggMCByZ2JhKDAsMCwwLDEpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl95ZWxsb3c7XFxyXFxuICAgICAgY29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBidXR0b24tYW5pbWF0aW9uKCk7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogMnB4OyBsZWZ0OiAxcHg7XFxyXFxuXFxyXFxuICAgICAgICBib3gtc2hhZG93OiAxLjVweCAzcHggMnB4IDAgcmdiYSgwLDAsMCwxKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl95ZWxsb3ctZGFyaztcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJi5jbGlja2VkLCAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogNHB4OyBsZWZ0OiAycHg7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDAgcmdiYSgwLDAsMCwxKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl95ZWxsb3ctZGFya2VzdDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI0FwcCAjQXBwU2lkZW5hdiB7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1NXB4O1xcbiAgbGVmdDogLTI0MHB4O1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzIyMzM7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgZWFzZS1vdXQ7XFxufVxcbiNBcHAgI0FwcFNpZGVuYXYgI1NpZGVOYXZTZWFyY2gge1xcbiAgaGVpZ2h0OiAxOS41cHg7XFxuICBtYXJnaW4tbGVmdDogMy41cHg7XFxuICB3aWR0aDogMjI2LjVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2ICNTaWRlTmF2U2VhcmNoOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNBcHAgI0FwcFNpZGVuYXYgI1NpZGVOYXZTZWFyY2g6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNBcHAgI0FwcFNpZGVuYXYgI1NpZGVOYXZSZW1hcmtzIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC8qIGlPUyBTYWZhcmkgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBTYWZhcmkgKi9cXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAzLjVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNBcHAgI0FwcFNpZGVuYXYgI1NpZGVOYXZMaXN0IHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC8qIGlPUyBTYWZhcmkgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBTYWZhcmkgKi9cXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2ICNTaWRlTmF2TGlzdCAjU2lkZU5hdkxpc3RVbCB7XFxuICBtYXJnaW4tbGVmdDogMy41cHg7XFxufVxcbiNBcHAgI0FwcFNpZGVuYXYgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2IHVsIGxpIHtcXG4gIG1hcmdpbi10b3A6IDMuNXB4O1xcbiAgcGFkZGluZzogMy41cHg7XFxuICBib3JkZXI6IDMuNXB4IHNvbGlkIHdoaXRlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyMjMzO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2IHVsIGxpOmhvdmVyLCAjQXBwICNBcHBTaWRlbmF2IHVsIGxpLnNlYXJjaFJlc3VsdCB7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjZmZjYjAwO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZjYjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA0NSwgOTApO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2IHVsIGxpLmRyYWdPdmVyIHtcXG4gIGNvbG9yOiAjMDBmZjAwO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBmZjAwO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2IHVsIGxpLmRyYWdnZWQge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCA0MCwgODApO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2VG9nZ2xlIHtcXG4gIHotaW5kZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvcDogNTVweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjIzMztcXG4gIGJveC1zaGFkb3c6IDhweCA4cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAxMHB4IDEwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAvKiBpT1MgU2FmYXJpICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogU2FmYXJpICovXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4ycyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIGJveC1zaGFkb3c7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG4jQXBwICNBcHBTaWRlbmF2VG9nZ2xlLmRyb3BuYXYtYWN0aXZlIHtcXG4gIGxlZnQ6IC0yMnB4O1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA4cHggMCByZ2JhKDAsIDAsIDAsIDApLCAxMHB4IDEwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbiNBcHAgI0FwcFNpZGVuYXZUb2dnbGU6aG92ZXIge1xcbiAgZm9udC1zdHlsZTogYm9sZDtcXG4gIGNvbG9yOiAjZmZjYjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA0NSwgOTApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9mcm9udGVuZC9zcmMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvc2lkZW5hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQVcsWUFBQTtFQUNYLFlBQUE7RUFBYyx5QkFBQTtFQUVkLFlBQUE7RUFDQSx5QkFyQmM7RUF1QmQsOEJBQUE7QUFiSjtBQWVJO0VBQ0UsY0FBQTtFQUNBLGtCQXpCSztFQTBCTCxjQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtBQWZOO0FBaUJNO0VBQ0UsYUFBQTtBQWZSO0FBa0JNO0VBQ0UsdUJBQUE7QUFoQlI7QUFtQkk7RUF0Q0YsMkJBQUE7RUFBNkIsZUFBQTtFQUM3Qix5QkFBQTtFQUEyQixXQUFBO0VBQzNCLHdCQUFBO0VBQTBCLG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLDRCQUFBO0VBQ3hCLHFCQUFBO0VBQXVCLDJCQUFBO0VBQ3ZCLGlCQUFBO0VBb0NJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVZOO0FBYUk7RUFyREYsMkJBQUE7RUFBNkIsZUFBQTtFQUM3Qix5QkFBQTtFQUEyQixXQUFBO0VBQzNCLHdCQUFBO0VBQTBCLG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLDRCQUFBO0VBQ3hCLHFCQUFBO0VBQXVCLDJCQUFBO0VBQ3ZCLGlCQUFBO0VBbURJLGVBQUE7RUFDQSxZQUFBO0FBRk47QUFJTTtFQUFpQixrQkE5RFo7QUE2RFg7QUFJSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBRk47QUFJTTtFQUNFLGlCQXRFRztFQXVFSCxjQXZFRztFQXlFSCx5QkFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFuRlU7QUE2RWxCO0FBUVE7RUFDRSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBekZLO0VBMkZMLHFCQTNGSztFQTZGTCxpQ0FBQTtBQVRWO0FBV1E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFUVjtBQVdRO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQVRWO0FBY0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQWlCLGFBQUE7RUFDakIsU0FBQTtFQUFVLFNBQUE7RUFDVixXQUFBO0VBQVkseUJBQUE7RUFFWixrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkF4SGM7RUEwSGQsa0ZBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBeEhGLDJCQUFBO0VBQTZCLGVBQUE7RUFDN0IseUJBQUE7RUFBMkIsV0FBQTtFQUMzQix3QkFBQTtFQUEwQixtQkFBQTtFQUMxQixzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4QixxQkFBQTtFQUF1QiwyQkFBQTtFQUN2QixpQkFBQTtFQXNIRSw4QkFBQTtFQUVBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQU5KO0FBUUk7RUFDRSxXQUFBO0VBQ0EsNkVBQUE7QUFOTjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxjQTVJUztFQThJVCxpQ0FBQTtBQVJOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRjb2xvcl9uYXZiYXItYmc6ICMxMzIyMzM7XFxyXFxuJGNvbG9yX3llbGxvdzogI2ZmY2IwMDtcXHJcXG4kcHhfc21hbGw6IDMuNXB4O1xcclxcblxcclxcbkBtaXhpbiBub3NlbGVjdCB7XFxyXFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcclxcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNBcHAge1xcclxcbiAgI0FwcFNpZGVuYXYge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNTVweDsgbGVmdDogLTI0MHB4O1xcclxcbiAgICB3aWR0aDogMjQwcHg7IGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxyXFxuXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfbmF2YmFyLWJnO1xcclxcbiAgICBcXHJcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzIGVhc2Utb3V0O1xcclxcblxcclxcbiAgICAjU2lkZU5hdlNlYXJjaCB7XFxyXFxuICAgICAgaGVpZ2h0OiAxOS41cHg7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6ICRweF9zbWFsbDtcXHJcXG4gICAgICB3aWR0aDogY2FsYygyNDBweCAtICRweF9zbWFsbCAtIDVweCAtIDVweCk7XFxyXFxuXFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICBcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBcXHJcXG4gICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICY6ZGlzYWJsZWQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICNTaWRlTmF2UmVtYXJrcyB7XFxyXFxuICAgICAgQGluY2x1ZGUgbm9zZWxlY3QoKTtcXHJcXG5cXHJcXG4gICAgICBoZWlnaHQ6MzBweDtcXHJcXG4gICAgICBtYXJnaW46IDBweCAwcHggMHB4ICRweF9zbWFsbDtcXHJcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgY29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBmb250LXNpemU6MTJweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICBcXHJcXG4gICAgfVxcclxcbiAgICAjU2lkZU5hdkxpc3Qge1xcclxcbiAgICAgIEBpbmNsdWRlIG5vc2VsZWN0KCk7XFxyXFxuXFxyXFxuICAgICAgbWFyZ2luOiAwIDAgMCAwO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAjU2lkZU5hdkxpc3RVbCB7IG1hcmdpbi1sZWZ0OiAkcHhfc21hbGw7IH07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgICAgbGkge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogJHB4X3NtYWxsO1xcclxcbiAgICAgICAgcGFkZGluZzogJHB4X3NtYWxsO1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyOiAkcHhfc21hbGwgc29saWQgd2hpdGU7XFxyXFxuXFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcclxcblxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokY29sb3JfbmF2YmFyLWJnO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciwgJi5zZWFyY2hSZXN1bHQge1xcclxcbiAgICAgICAgICBjdXJzb3I6IGdyYWI7XFxyXFxuXFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgICAgICAgIGNvbG9yOiRjb2xvcl95ZWxsb3c7XFxyXFxuXFxyXFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3llbGxvdztcXHJcXG5cXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLDQ1LDkwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICYuZHJhZ092ZXIge1xcclxcbiAgICAgICAgICBjb2xvcjogIzAwZmYwMDtcXHJcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZjAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJi5kcmFnZ2VkIHtcXHJcXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDQwLDgwLDEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgI0FwcFNpZGVuYXZUb2dnbGUge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0b3A6NTVweDsgbGVmdDowcHg7XFxyXFxuICAgIHdpZHRoOjIycHg7IGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9uYXZiYXItYmc7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDEwcHggMTBweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXHJcXG4gICAgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBub3NlbGVjdCgpO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIFxcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBib3gtc2hhZG93O1xcclxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuXFxyXFxuICAgICYuZHJvcG5hdi1hY3RpdmUge1xcclxcbiAgICAgIGxlZnQ6IC0yMnB4O1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDhweCA4cHggOHB4IDAgcmdiYSgwLDAsMCwwKSwxMHB4IDEwcHggMTBweCAwIHJnYmEoMCwwLDAsMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XFxyXFxuICAgICAgY29sb3I6JGNvbG9yX3llbGxvdztcXHJcXG5cXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsNDUsOTApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgI2Y0YzgwMztcXG4gIH1cXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjU1LCAwLCAwLCAwKTtcXG4gIH1cXG59XFxuI0FwcEJ1dHRvbkJveENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcGFjaXR5OiAxO1xcbiAgdG9wOiAtMjAwcHg7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB0b3A7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG4jQXBwQnV0dG9uQm94Q29udGFpbmVyLmRyb3BuYXYtYWN0aXZlIHtcXG4gIHRvcDogNTAlO1xcbn1cXG4jQXBwQnV0dG9uQm94Q29udGFpbmVyLnBhZ2UtaW5hY3RpdmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuI0FwcEJ1dHRvbkJveENvbnRhaW5lci5wYWdlLWluYWN0aXZlIGJ1dHRvbiwgI0FwcEJ1dHRvbkJveENvbnRhaW5lci5wYWdlLWluYWN0aXZlICNBcHBCdXR0b25Cb3hTZXBhcmF0b3Ige1xcbiAgc2NhbGU6IDAuMDAwMTtcXG59XFxuI0FwcEJ1dHRvbkJveENvbnRhaW5lciAjQXBwQnV0dG9uQm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwJTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbiNBcHBCdXR0b25Cb3hDb250YWluZXIgI0FwcEJ1dHRvbkJveCBidXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmNGM4MDM7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2Y0YzgwMztcXG4gIGhlaWdodDogNDBweDtcXG4gIHRvcDogODBweDtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogc2NhbGU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG4jQXBwQnV0dG9uQm94Q29udGFpbmVyICNBcHBCdXR0b25Cb3ggYnV0dG9uOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI0FwcEJ1dHRvbkJveENvbnRhaW5lciAjQXBwQnV0dG9uQm94ICNBcHBCdXR0b25Cb3hTZXBhcmF0b3Ige1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxMzIyMzMgMCUsICNmNGM4MDMgMzUlLCAjMTMyMjMzIDEwMCUpO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBzY2FsZSwgdG9wO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZnJvbnRlbmQvc3JjL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvcGFnZXMvZnJvbnRQYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRTtJQUNFLG1DQUFBO0VBREY7RUFHQTtJQUNFLGlEQUFBO0VBREY7RUFHQTtJQUNFLDhDQUFBO0VBREY7QUFDRjtBQUlBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQWdDLG1CQUFBO0VBQ2hDLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGlDQUFBO0VBQ0EseUJBQUE7QUFIRjtBQUtFO0VBQ0UsUUFBQTtBQUhKO0FBTUU7RUFDRSxVQUFBO0FBSko7QUFLSTtFQUNFLGFBQUE7QUFITjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUFZLFFBQUE7RUFFWix3QkFBQTtFQUNBLHlCQUFBO0FBTko7QUFRSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQXREUztFQXVEVCxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBRUEsMEJBQUE7RUFDQSx5QkFBQTtBQVBOO0FBU007RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUFQUjtBQVVJO0VBQ0Usa0VBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsK0JBQUE7RUFDQSx5QkFBQTtBQVROXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRjb2xvcl95ZWxsb3c6ICNmNGM4MDM7XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCAkY29sb3JfeWVsbG93O1xcclxcbiAgfVxcclxcbiAgNzAlIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LDAsMCwgMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjU1LDAsMCwgMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNBcHBCdXR0b25Cb3hDb250YWluZXIge1xcclxcbiAgXFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRvcDotMjAwcHg7XFxyXFxuICBcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIHRvcDtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICBcXHJcXG4gICYuZHJvcG5hdi1hY3RpdmUge1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgJi5wYWdlLWluYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgYnV0dG9uLCAjQXBwQnV0dG9uQm94U2VwYXJhdG9yIHtcXHJcXG4gICAgICBzY2FsZTowLjAwMDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI0FwcEJ1dHRvbkJveCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDoxMDAlOyBsZWZ0OiAwJTtcXHJcXG4gICAgXFxyXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG4gICAgXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yX3llbGxvdztcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcl95ZWxsb3c7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIHRvcDogODBweDtcXHJcXG4gICAgICBtYXJnaW46IDAgMzBweDtcXHJcXG4gICAgICBcXHJcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBzY2FsZTtcXHJcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgICAgIFxcclxcbiAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDEuNXMgaW5maW5pdGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICNBcHBCdXR0b25Cb3hTZXBhcmF0b3Ige1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggIzEzMjIzMyAwJSwgJGNvbG9yX3llbGxvdyAzNSUsICMxMzIyMzMgMTAwJSk7XFxyXFxuICAgICAgd2lkdGg6IDJweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBcXHJcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBzY2FsZSwgdG9wO1xcclxcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI0FwcExvYW5Cb3hDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IC01NXB4O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgc2NhbGUsIHRvcCwgbGVmdDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyLmRyb3BuYXYtYWN0aXZlIHtcXG4gIHRvcDogMHB4O1xcbn1cXG4jQXBwTG9hbkJveENvbnRhaW5lci5wYWdlLWluYWN0aXZlIHtcXG4gIGxlZnQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgc2NhbGU6IDA7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiAxNSU7XFxuICBiYWNrZ3JvdW5kOiAjMDkxMTE5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaGFkb3c6IDAgMTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZjRjODAzO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IGgyIHtcXG4gIG1hcmdpbjogMCAwIDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4jQXBwTG9hbkJveENvbnRhaW5lciAjQXBwTG9hbkJveCAudXNlci1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jQXBwTG9hbkJveENvbnRhaW5lciAjQXBwTG9hbkJveCAudXNlci1ib3ggaW5wdXQge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4jQXBwTG9hbkJveENvbnRhaW5lciAjQXBwTG9hbkJveCAudXNlci1ib3ggbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4jQXBwTG9hbkJveENvbnRhaW5lciAjQXBwTG9hbkJveCAudXNlci1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jQXBwTG9hbkJveENvbnRhaW5lciAjQXBwTG9hbkJveCAudXNlci1ib3ggaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnVzZXItYm94IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnVzZXItYm94IGlucHV0OmZvY3VzIH4gbGFiZWwsXFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnVzZXItYm94IGlucHV0OnZhbGlkIH4gbGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogI2Y0YzgwMztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLmRhdGUtYm94IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy10b3A6IDAuNnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IC5kYXRlLWJveCBpbnB1dCB7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnNlbGVjdC1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IC5zZWxlY3QtYm94IHNlbGVjdCB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnNlbGVjdC1ib3ggb3B0aW9uIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnNlbGVjdC1ib3ggaW5wdXQge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IC5zZWxlY3QtYm94IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnNlbGVjdC1ib3ggYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggLnNlbGVjdC1ib3ggYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI0FwcExvYW5Cb3hDb250YWluZXIgI0FwcExvYW5Cb3ggaDMsICNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IHAge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IC5zdWJtaXQtYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY29sb3I6ICNmNGM4MDM7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjRjODAzO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbiNBcHBMb2FuQm94Q29udGFpbmVyICNBcHBMb2FuQm94IC5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmNGM4MDM7XFxuICBjb2xvcjogIzA5MTExOTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Zyb250ZW5kL3NyYy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL3BhZ2VzL2xvYW5QYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBRUEsOENBQUE7RUFDQSx5QkFBQTtBQUFEO0FBRUM7RUFDQyxRQUFBO0FBQUY7QUFHQztFQUNDLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQURGO0FBR0M7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBREY7QUFHRTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURIO0FBSUU7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRkg7QUFNRTtFQUNDLGtCQUFBO0FBSkg7QUFPRTtFQUNDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUxIO0FBT0U7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUxIO0FBUUU7RUFDQyxrQkFBQTtBQU5IO0FBU0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFQSDtBQVNFO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFQSDtBQVVFOztFQUVDLFVBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFSSDtBQVdFO0VBQ0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVRIO0FBV0U7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVEg7QUFZRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBVkg7QUFZRTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFWSDtBQVlFO0VBQ0MsWUFBQTtBQVZIO0FBWUU7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVZIO0FBWUU7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVZIO0FBYUU7RUFDQyx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFYSDtBQWNFO0VBQ0MsZUFBQTtBQVpIO0FBY0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQVpIO0FBZUU7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQWJIO0FBZ0JFO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBZEhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI0FwcExvYW5Cb3hDb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogLTU1cHg7XFxyXFxuXFx0XFxyXFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgc2NhbGUsIHRvcCwgbGVmdDtcXHJcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcblxcdFxcclxcblxcdCYuZHJvcG5hdi1hY3RpdmUge1xcclxcblxcdFxcdHRvcDogMHB4O1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQmLnBhZ2UtaW5hY3RpdmUge1xcclxcblxcdFxcdGxlZnQ6IDEwMCU7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHRzY2FsZTogMDtcXHJcXG5cXHR9XFxyXFxuXFx0I0FwcExvYW5Cb3gge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRwYWRkaW5nOiA0MHB4O1xcclxcblxcdFxcdHRvcDogMjBweDtcXHJcXG5cXHRcXHRsZWZ0OiAxNSU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogIzA5MTExOTtcXHJcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDAgMTVweCAyNXB4IHJnYmEoMCwwLDAsLjYpO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG5cXHRcXHR3aWR0aDogNzAlO1xcclxcblxcdFxcdFxcclxcblxcdFxcdC5idG57XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjZjRjODAzO1xcclxcblxcdFxcdFxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0aDJ7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIDAgMjBweDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdFxcdFxcdGNsZWFyOiBib3RoO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQudXNlci1ib3gge1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0LnVzZXItYm94IGlucHV0IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNDAlO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuXFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0LnVzZXItYm94IGxhYmVsIHtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0dG9wOjA7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDA7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IC41cztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0LnVzZXItYm94IHtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC51c2VyLWJveCBpbnB1dCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMTBweCAwO1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG5cXHRcXHRcXHRvdXRsaW5lOiBub25lO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQudXNlci1ib3ggbGFiZWwge1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR0b3A6MDtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogLjVzO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQudXNlci1ib3ggaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcXHJcXG5cXHRcXHQudXNlci1ib3ggaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XFxyXFxuXFx0XFx0XFx0dG9wOiAtMjBweDtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjZjRjODAzO1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0LmRhdGUtYm94e1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZTtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogMC42cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6I2ZmZjtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5kYXRlLWJveCBpbnB1dHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMzAlO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuXFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5zZWxlY3QtYm94e1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5zZWxlY3QtYm94IHNlbGVjdHtcXHJcXG5cXHRcXHRcXHR3aWR0aDo0MCU7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzoxMHB4O1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XFxyXFxuXFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0LnNlbGVjdC1ib3ggb3B0aW9ue1xcclxcblxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0LnNlbGVjdC1ib3ggaW5wdXR7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDQwJTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDA7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcblxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5zZWxlY3QtYm94IGxhYmVse1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR0b3A6MDtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogLjVzO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQuc2VsZWN0LWJveCBidXR0b257XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQuc2VsZWN0LWJveCBidXR0b246aG92ZXJ7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRoMywgcHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5zdWJtaXQtYnRue1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0XFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2Y0YzgwMztcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdFxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0XFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiAuNXM7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogNDBweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiAycHggc29saWQgI2Y0YzgwMztcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0LnN1Ym1pdC1idG46aG92ZXIge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmNGM4MDM7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwOTExMTk7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czoyNXB4O1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wbmF2LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wbmF2LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5Db250YWluZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5Db250YWluZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVzc2FnZUJveC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVzc2FnZUJveC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlbmF2LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlbmF2LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zyb250UGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZnJvbnRQYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYW5QYWdlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FuUGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNvbnN0IERFUEFSVE1FTlRfTkFNRTogc3RyaW5nID0gXCJTY2hvb2wgb2YgRGlnaXRhbCBTY2llbmNlXCI7XHJcbmV4cG9ydCBjb25zdCBIT01FUEFHRV9VUkw6IHN0cmluZyA9IFwiaHR0cDovL3Nkcy51YmQuZWR1LmJuL1wiOyIsImltcG9ydCB7IHNob3dBcHAsIHNldEFzQXBwQ29udGFpbmVyLCBpbml0IGFzIGFwcEluaXQgfSBmcm9tICcuL3NjcmlwdHMvYXBwJztcclxuaW1wb3J0IHsgaGlkZURyb3BuYXYsIHNob3dEcm9wbmF2IH0gZnJvbSAnLi9zY3JpcHRzL2FwcC9kcm9wbmF2JztcclxuaW1wb3J0IHsgaW5pdCBhcyBhdXRoSW5pdCB9IGZyb20gJy4vc2NyaXB0cy91dGlscy9hdXRoJztcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tICcuL3NjcmlwdHMvdXRpbHMvcGFnZXMnO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGF1dGhJbml0KCk7XHJcbiAgICBzZXRBc0FwcENvbnRhaW5lcihkb2N1bWVudC5ib2R5KTtcclxuICAgIGFwcEluaXQoKTtcclxufVxyXG5pbml0KCk7XHJcbi8vaGlkZURyb3BuYXYoKTtcclxuLy9wYWdlcy5mcm9udFBhZ2Uuc2hvdygpO1xyXG5wYWdlcy5sb2FuRm9ybS5pbml0KCk7XHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy9oaWRlRHJvcG5hdigpO1xyXG4vLyAgICBwYWdlcy5mcm9udFBhZ2Uuc2hvdygpO1xyXG59LCAxMDAwKTtcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvL3Nob3dEcm9wbmF2KCk7XHJcbiAgLy8gIHBhZ2VzLmxvYW5Gb3JtLnNob3coKTtcclxufSwgMjAwMCk7XHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy9wYWdlcy5mcm9udFBhZ2Uuc2hvdygpO1xyXG4gICAgLy9oaWRlRHJvcG5hdigpO1xyXG59LCAzMDAwKTtcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvL3BhZ2VzLmxvYW5Gb3JtLnNob3coKTtcclxufSwgNDAwMCk7XHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy9wYWdlcy5mcm9udFBhZ2Uuc2hvdygpO1xyXG59LCA1MDAwKTsiLCJpbXBvcnQgeyBtYWtlRGl2V2l0aElkIH0gZnJvbSBcIi4vdXRpbHMvaHRtbFwiO1xyXG5pbXBvcnQgeyBnZXRNYWluQ29udGFpbmVyIH0gZnJvbSBcIi4vYXBwL21haW5Db250YWluZXJcIjtcclxuaW1wb3J0IHsgZ2V0TmF2YmFyLCBnZXROYXZiYXJGaWxsZXIgfSBmcm9tIFwiLi9hcHAvbmF2YmFyXCI7XHJcbmltcG9ydCB7IGdldFNpZGVuYXYsIGdldFNpZGVuYXZUb2dnbGUgfSBmcm9tIFwiLi9hcHAvc2lkZW5hdlwiO1xyXG5pbXBvcnQgeyByZW1vdmVMb2FkZXIgfSBmcm9tIFwiLi9hcHAvZHJvcG5hdlwiO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuL3V0aWxzL3BhZ2VzXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwiLi91dGlscy9hdXRoXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9jb21wb25lbnRzL2FwcC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvYXBwL21lc3NhZ2VCb3guc2Nzc1wiO1xyXG5cclxubGV0IGFwcENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcclxuICAgIHJlbW92ZUxvYWRlcigpO1xyXG4gICAgc2hvd0FwcCgpO1xyXG4gICAgcGFnZXMuZnJvbnRQYWdlLmluaXQoKTtcclxuXHJcbiAgICAvL3RvIGJlIHJlcGxhY2VkIHdpdGggcHJvcGVyIGNvZGVcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNBcHBOYXZiYXJBdXRoQnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaWduT3V0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFzQXBwQ29udGFpbmVyKGNvbnRhaW5lcj86IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZighY29udGFpbmVyKSBjb250YWluZXIgPSBhcHBDb250YWluZXI7XHJcbiAgICBhcHBDb250YWluZXIgPSBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QXBwKCk6IHZvaWQge1xyXG4gICAgbGV0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwXCIpO1xyXG5cclxuICAgIGlmKCFhcHApIGFwcCA9IGdldEFwcCgpO1xyXG5cclxuICAgIGFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChhcHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFwcCgpOiB2b2lkIHtcclxuICAgIGxldCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcFwiKTtcclxuXHJcbiAgICBpZihhcHApIGFwcC5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChhcHApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHAoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgYXBwID0gbWFrZURpdldpdGhJZChcIkFwcFwiKTtcclxuXHJcbiAgICBhcHAuYXBwZW5kQ2hpbGQoZ2V0TmF2YmFyRmlsbGVyKCkpO1xyXG4gICAgYXBwLmFwcGVuZENoaWxkKGdldE5hdmJhcigpKTtcclxuXHJcbiAgICBhcHAuYXBwZW5kQ2hpbGQoZ2V0U2lkZW5hdigpKTtcclxuICAgIGFwcC5hcHBlbmRDaGlsZChnZXRTaWRlbmF2VG9nZ2xlKCkpO1xyXG5cclxuICAgIGFwcC5hcHBlbmRDaGlsZChnZXRNYWluQ29udGFpbmVyKCkpO1xyXG5cclxuICAgIHJldHVybiBhcHA7XHJcbn0iLCJpbXBvcnQgeyBtYWtlQnV0dG9uV2l0aElkLCBtYWtlRGl2V2l0aElkIH0gZnJvbSBcIi4uL3V0aWxzL2h0bWxcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRQYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL2Zyb250UGFnZVwiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvZHJvcG5hdi5zY3NzXCI7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSBcIi4uL3V0aWxzL3BhZ2VzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHJvcG5hdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgZHJvcG5hdjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwRHJvcG5hdlwiKTtcclxuXHJcbiAgICBpZighZHJvcG5hdikge1xyXG4gICAgICAgIGRyb3BuYXYgPSBtYWtlRGl2V2l0aElkKFwiQXBwRHJvcG5hdlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHJvcG5hdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEcm9wbmF2KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWZmZWN0ZWRFbGVtczogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiA9IGdldEVmZmVjdGVkRWxlbXMoKTtcclxuXHJcbiAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBlZmZlY3RlZEVsZW1zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGVmZmVjdGVkRWxlbXNbaV0uY2xhc3NMaXN0LmFkZChcImRyb3BuYXYtYWN0aXZlXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlRHJvcG5hdigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVmZmVjdGVkRWxlbXM6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4gPSBnZXRFZmZlY3RlZEVsZW1zKCk7XHJcblxyXG4gICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZWZmZWN0ZWRFbGVtcy5sZW5ndGg7IGkrKylcclxuICAgICAgICBlZmZlY3RlZEVsZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wbmF2LWFjdGl2ZVwiKTtcclxuICAgIFxyXG4gICAgcGFnZXMuZnJvbnRQYWdlLmhpZGUoKTtcclxufVxyXG4gICAgXHJcbiAgICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RlZEVsZW1zKCk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wbmF2LWVmZmVjdGVlXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoYXZlRHJvcG5hdkVmZmVjdChlbGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcG5hdi1lZmZlY3RlZVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxvYWRlcigpOiB2b2lkIHtcclxuICAgIGxldCBsb2FkZXI6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJlbG9hZGVkJylcclxuXHJcbiAgICBpZihsb2FkZXIpIGxvYWRlci5wYXJlbnRFbGVtZW50Py5yZW1vdmVDaGlsZChsb2FkZXIpO1xyXG59IiwiaW1wb3J0IHsgbWFrZURpdldpdGhJZCwgbWFrZUgzV2l0aElkLCBtYWtlUFdpdGhJZCwgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tIFwiLi4vdXRpbHMvaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvbWFpbkNvbnRhaW5lci5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFpbkNvbnRhaW5lcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBNYWluQ29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICBpZighY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29udGFpbmVyID0gbWFrZURpdldpdGhJZChcIkFwcE1haW5Db250YWluZXJcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFBhZ2VUaXRsZSgpKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0UGFnZVJlbWFya3MoKSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFBhZ2VDb250ZW50KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlVGl0bGUoKTogSFRNTEhlYWRpbmdFbGVtZW50IHtcclxuICAgIGxldCB0aXRsZTogSFRNTEhlYWRpbmdFbGVtZW50ID0gPEhUTUxIZWFkaW5nRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBQYWdlVGl0bGVcIik7XHJcblxyXG4gICAgaWYoIXRpdGxlKSB0aXRsZSA9IG1ha2VIM1dpdGhJZChcIkFwcFBhZ2VUaXRsZVwiKTtcclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhZ2VUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBnZXRQYWdlVGl0bGUoKS5pbm5lckhUTUwgPSB0aXRsZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQYWdlVGl0bGUoKTogdm9pZCB7IHJlbW92ZUNoaWxkcmVuKGdldFBhZ2VUaXRsZSgpICk7IH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlUmVtYXJrcygpOiBIVE1MUGFyYWdyYXBoRWxlbWVudCB7XHJcbiAgICBsZXQgcmVtYXJrczogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSA8SFRNTFBhcmFncmFwaEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwUGFnZVJlbWFya3NcIik7XHJcblxyXG4gICAgaWYoIXJlbWFya3MpIHJlbWFya3MgPSBtYWtlUFdpdGhJZChcIkFwcFBhZ2VSZW1hcmtzXCIpO1xyXG5cclxuICAgIHJldHVybiByZW1hcmtzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclBhZ2VSZW1hcmtzKCk6IHZvaWQgeyByZW1vdmVDaGlsZHJlbihnZXRQYWdlUmVtYXJrcygpICk7IH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlQ29udGVudCgpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgY29udGVudDogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwUGFnZUNvbnRlbnRcIik7XHJcblxyXG4gICAgaWYoIWNvbnRlbnQpIGNvbnRlbnQgPSBtYWtlRGl2V2l0aElkKFwiQXBwUGFnZUNvbnRlbnRcIik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBhZ2VDb250ZW50KG5ld0NvbnRlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBnZXRQYWdlQ29udGVudCgpLmFwcGVuZENoaWxkKG5ld0NvbnRlbnQpO1xyXG59IiwiaW1wb3J0IHsgbWFrZUJ1dHRvbldpdGhJZCwgbWFrZURpdldpdGhJZH0gZnJvbSBcIi4uL3V0aWxzL2h0bWxcIjtcclxuaW1wb3J0IHsgREVQQVJUTUVOVF9OQU1FLCBIT01FUEFHRV9VUkwgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgTE9HTyBmcm9tICcuLi8uLi9hc3NldHMvbG9nby5wbmcnO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvbmF2YmFyLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYXZiYXJGaWxsZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IGZpbGxlcjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwTmF2YmFyRmlsbGVyXCIpO1xyXG5cclxuICAgIGlmKCFmaWxsZXIpIGZpbGxlciA9IG1ha2VEaXZXaXRoSWQoXCJBcHBOYXZiYXJGaWxsZXJcIik7XHJcbiAgICBcclxuICAgIHJldHVybiBmaWxsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYXZiYXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IG5hdmJhcjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwTmF2YmFyXCIpO1xyXG5cclxuICAgIGlmKCFuYXZiYXIpIHtcclxuICAgICAgICBuYXZiYXIgPSBtYWtlRGl2V2l0aElkKFwiQXBwTmF2YmFyXCIpO1xyXG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChnZXROYXZiYXJMb2dvKCkpO1xyXG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChnZXROYXZiYXJOYXZzKCkpO1xyXG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChnZXROYXZiYXJBdXRoKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYXZiYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5hdmJhckxvZ28oKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IGxvZ286IEhUTUxEaXZFbGVtZW50ID0gPEhUTUxEaXZFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcE5hdmJhckxvZ29cIik7XHJcblxyXG4gICAgaWYoIWxvZ28pIHtcclxuICAgICAgICBsb2dvID0gbWFrZURpdldpdGhJZChcIkFwcE5hdmJhckxvZ29cIik7XHJcbiAgICAgICAgbG9nby5hcHBlbmRDaGlsZChnZXROYXZiYXJMb2dvQW5jaG9yKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsb2dvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROYXZiYXJMb2dvQW5jaG9yKCk6IEhUTUxBbmNob3JFbGVtZW50IHtcclxuICAgIGNvbnN0IGxvZ29MaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgIGxvZ29MaW5rLmhyZWYgPSBIT01FUEFHRV9VUkw7XHJcbiAgICBsb2dvTGluay5hcHBlbmRDaGlsZChnZXROYXZiYXJMb2dvSW1hZ2UoKSk7XHJcblxyXG4gICAgcmV0dXJuIGxvZ29MaW5rO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROYXZiYXJMb2dvSW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICBjb25zdCBsb2dvSW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgbG9nb0ltZy5zcmMgPSBMT0dPO1xyXG4gICAgbG9nb0ltZy5hbHQgPSBERVBBUlRNRU5UX05BTUU7XHJcblxyXG4gICAgcmV0dXJuIGxvZ29JbWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYXZiYXJOYXZzKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGxldCBuYXZzOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBOYXZiYXJOYXZzXCIpO1xyXG5cclxuICAgIGlmKCFuYXZzKSBuYXZzID0gbWFrZURpdldpdGhJZChcIkFwcE5hdmJhck5hdnNcIik7XHJcblxyXG4gICAgcmV0dXJuIG5hdnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYXZiYXJBdXRoKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGxldCBhdXRoOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBOYXZiYXJBdXRoXCIpO1xyXG5cclxuICAgIGlmKCFhdXRoKSB7XHJcbiAgICAgICAgYXV0aCA9IG1ha2VEaXZXaXRoSWQoXCJBcHBOYXZiYXJBdXRoXCIpO1xyXG4gICAgICAgIGF1dGguYXBwZW5kQ2hpbGQoZ2V0TmF2YmFyQXV0aEJ1dHRvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXV0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdmJhckF1dGhCdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgbGV0IGF1dGhCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcE5hdmJhckF1dGhCdXR0b25cIik7XHJcblxyXG4gICAgaWYoIWF1dGhCdG4pIHtcclxuICAgICAgICBhdXRoQnRuID0gbWFrZUJ1dHRvbldpdGhJZChcIkFwcE5hdmJhckF1dGhCdXR0b25cIik7XHJcbiAgICAgICAgYXV0aEJ0bi5pbm5lclRleHQgPSBcIlNpZ24gSW5cIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXV0aEJ0bjtcclxufSIsImltcG9ydCB7IG1ha2VEaXZXaXRoSWQsIG1ha2VEaXZXaXRoSWRBbmRUZXh0IH0gZnJvbSBcIi4uL3V0aWxzL2h0bWxcIlxyXG5cclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvY29tcG9uZW50cy9hcHAvc2lkZW5hdi5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lkZW5hdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgc2lkZW5hdjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwU2lkZW5hdlwiKTtcclxuXHJcbiAgICBpZighc2lkZW5hdikge1xyXG4gICAgICAgIHNpZGVuYXYgPSBtYWtlRGl2V2l0aElkKFwiQXBwU2lkZW5hdlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNpZGVuYXY7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZGVuYXZUb2dnbGUoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IHRvZ2dsZTogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwU2lkZW5hdlRvZ2dsZVwiKTtcclxuXHJcbiAgICBpZighdG9nZ2xlKSB7XHJcbiAgICAgICAgdG9nZ2xlID0gbWFrZURpdldpdGhJZEFuZFRleHQoXCJBcHBTaWRlbmF2VG9nZ2xlXCIsIFwiPlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRvZ2dsZTtcclxufSIsImltcG9ydCB7IG1ha2VCdXR0b25XaXRoSWQsIG1ha2VEaXZXaXRoSWQsIG1ha2VEaXZXaXRoSWRBbmRDbGFzcyB9IGZyb20gXCIuLi91dGlscy9odG1sXCI7XHJcbmltcG9ydCB7IGhhdmVEcm9wbmF2RWZmZWN0LCBoaWRlRHJvcG5hdiB9IGZyb20gXCIuLi9hcHAvZHJvcG5hdlwiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvY29tcG9uZW50cy9wYWdlcy9mcm9udFBhZ2Uuc2Nzc1wiO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuLi91dGlscy9wYWdlc1wiO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyb250UGFnZSgpOiBIVE1MRGl2RWxlbWVudCB7XHJcblxyXG4gICAgbGV0IGJveENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwQnV0dG9uQm94Q29udGFpbmVyXCIpO1xyXG5cclxuICAgIGlmKCFib3hDb250YWluZXIpIHtcclxuICAgICAgICBib3hDb250YWluZXIgPSBtYWtlRGl2V2l0aElkQW5kQ2xhc3MoXCJBcHBCdXR0b25Cb3hDb250YWluZXJcIiwgXCJwYWdlLWluYWN0aXZlXCIpO1xyXG4gICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRCdXR0b25Cb3goKSk7XHJcbiAgICAgICAgaGF2ZURyb3BuYXZFZmZlY3QoYm94Q29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYm94Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCdXR0b25Cb3goKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IGJ1dHRvbkJveDogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwQnV0dG9uQm94XCIpO1xyXG4gICAgXHJcbiAgICBpZighYnV0dG9uQm94KSB7XHJcbiAgICAgICAgYnV0dG9uQm94ID0gbWFrZURpdldpdGhJZChcIkFwcEJ1dHRvbkJveFwiKTtcclxuICAgICAgICBidXR0b25Cb3guYXBwZW5kQ2hpbGQoZ2V0QWRtaW5CdXR0b24oKSk7XHJcbiAgICAgICAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGdldFNlcGFyYXRvcigpKTtcclxuICAgICAgICBidXR0b25Cb3guYXBwZW5kQ2hpbGQoZ2V0TG9hbkJ1dHRvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnV0dG9uQm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBZG1pbkJ1dHRvbigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBsZXQgYWRtaW5CdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcEZyb250TmF2QWRtaW5cIik7XHJcblxyXG4gICAgaWYoIWFkbWluQnV0dG9uKSB7XHJcbiAgICAgICAgYWRtaW5CdXR0b24gPSBtYWtlQnV0dG9uV2l0aElkKFwiQXBwRnJvbnROYXZBZG1pblwiKTtcclxuICAgICAgICBhZG1pbkJ1dHRvbi5pbm5lclRleHQgPSBcIkFETUlOXCI7XHJcbiAgICAgICAgYWRtaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNpZ25JbihcImxvZ2luUG9wdXBcIiksIHtjYXB0dXJlOmZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWRtaW5CdXR0b247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlcGFyYXRvcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBsZXQgc2VwYXJhdG9yOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBCdXR0b25Cb3hTZXBhcmF0b3JcIik7XHJcbiAgICBcclxuICAgIGlmKCFzZXBhcmF0b3IpIHtcclxuICAgICAgICBzZXBhcmF0b3IgPSBtYWtlRGl2V2l0aElkKFwiQXBwQnV0dG9uQm94U2VwYXJhdG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXBhcmF0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvYW5CdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgbGV0IGxvYW5CdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0FwcEZyb250TmF2TG9hblwiKTtcclxuXHJcbiAgICBpZighbG9hbkJ1dHRvbikge1xyXG4gICAgICAgIGxvYW5CdXR0b24gPSBtYWtlQnV0dG9uV2l0aElkKFwiQXBwRnJvbnROYXZMb2FuXCIpO31cclxuICAgICAgICBsb2FuQnV0dG9uLmlubmVyVGV4dCA9IFwiTE9BTiBSRVNPVVJDRVNcIjtcclxuICAgICAgICBsb2FuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBcclxuICAgICAgICAgICAgcGFnZXMubG9hbkZvcm0uc2hvdygpXHJcbiAgICAgICAgLCB7Y2FwdHVyZTpmYWxzZX0pXHJcblxyXG4gICAgcmV0dXJuIGxvYW5CdXR0b247XHJcbn0iLCJpbXBvcnQgeyBERVBBUlRNRU5UX05BTUUgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGhhdmVEcm9wbmF2RWZmZWN0IH0gZnJvbSBcIi4uL2FwcC9kcm9wbmF2XCI7XHJcbmltcG9ydCB7IG1ha2VCdXR0b25XaXRoQ2xhc3MsIG1ha2VCdXR0b25XaXRoSWQsIG1ha2VEaXZXaXRoSWQsIG1ha2VEaXZXaXRoSWRBbmRDbGFzcywgbWFrZUgyV2l0aFRleHQgfSBmcm9tIFwiLi4vdXRpbHMvaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzaGVldHMvY29tcG9uZW50cy9wYWdlcy9sb2FuUGFnZS5zY3NzXCI7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSBcIi4uL3V0aWxzL3BhZ2VzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9hblBhZ2UoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgbGV0IGJveENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwTG9hbkJveENvbnRhaW5lclwiKTtcclxuXHJcbiAgICBpZighYm94Q29udGFpbmVyKSB7XHJcbiAgICAgICAgYm94Q29udGFpbmVyID0gbWFrZURpdldpdGhJZEFuZENsYXNzKFwiQXBwTG9hbkJveENvbnRhaW5lclwiLCBcInBhZ2UtaW5hY3RpdmVcIik7XHJcbiAgICAgICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGdldExvYW5Gb3JtKCkpO1xyXG4gICAgICAgIGhhdmVEcm9wbmF2RWZmZWN0KGJveENvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm94Q29udGFpbmVyO1xyXG59XHJcbmZ1bmN0aW9uIGdldExvYW5Gb3JtKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGxldCBsb2FuQm94OiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNBcHBMb2FuQm94XCIpO1xyXG4gICAgXHJcbiAgICBpZighbG9hbkJveCkge1xyXG4gICAgICAgIGxvYW5Cb3ggPSBtYWtlRGl2V2l0aElkKFwiQXBwTG9hbkJveFwiKTtcclxuICAgICAgICBsb2FuQm94LmlubmVySFRNTCA9IGBcclxuPGJ1dHRvbiBjbGFzcz1cImJ0blwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblwiIGlkPVwiQXBwTG9hbkJveENsb3NlQnRuXCI+XHJcbiAgICBjbG9zZVxyXG48L2k+PC9idXR0b24+XHJcbjxoMj5TY2hvb2wgb2YgRElnaXRhbCBTY2llbmNlPC9oMj5cclxuPGgyPkFncmVlbWVudCB0byBCb3Jyb3cgRXF1aXBtZW50IFJlbGVhc2Ugb2YgTGlhYmlsaXR5PC9oMj5cclxuPGRpdiBjbGFzcz1cInVzZXItYm94XCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgcmVxdWlyZWQ9XCJcIj5cclxuICAgIDxsYWJlbD5TdHVkZW50IE5hbWU8L2xhYmVsPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInVzZXItYm94XCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgcmVxdWlyZWQ9XCJcIj5cclxuICAgIDxsYWJlbD5TdXBlcnZpc29yIE5hbWU8L2xhYmVsPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInVzZXItYm94XCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cIlwiIHJlcXVpcmVkPVwiXCI+XHJcbiAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImRhdGUtYm94XCI+XHJcbiAgICA8bGFiZWw+U3RhcnQgRGF0ZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwic3RhcnRfZGF0ZVwiIHJlcXVpcmVkPVwiXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzID1cImRhdGUtYm94XCI+XHJcbiAgICA8bGFiZWw+RW5kIERhdGU8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZF9kYXRlXCIgIHJlcXVpcmVkPVwiXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwic2VsZWN0LWJveFwiPlxyXG4gICAgPGgzPkxpc3Qgb2YgSXRlbShzKSBib3Jyb3dlZDo8L2gzPlxyXG4gICAgPHNlbGVjdCBpZD1cIml0ZW1zXCIgbmFtZT1cInNlbGVjdF9pdGVtc1wiPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBhbiBJdGVtLS08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGFwdG9wXCI+TGFwdG9wPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvbXB1dGVyXCI+Q29tcHV0ZXI8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiXCIgcmVxdWlyZWQ+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZE1vcmVcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9pPjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInVzZXItYm94XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgPGgzPkJ5IHN1Ym1pdHRpbmcgdGhpcyBmb3JtLCBJIHVuZGVyc3RhbmQgdGhhdCB0aGUgZm9sbG93aW5nIGFzIG15IHJlc3BvbnNpYmlsaXR5OlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHA+MS4gVG8gcGljayB1cCBhbmQgcmV0dXJuIHRoZSBFcXVpcG1lbnQgYXQgdGhlIGVuZCBvZiBteSBsb2FuIHBlcmlvZCB1bmxlc3MgYWdyZWVkIGJ5IGJvdGggcGFydGllczwvcD5cclxuICAgICAgICA8cD4yLiBUbyBpbnNwZWN0IHRoZSBlcXVpcG1lbnQgYXQgY2hlY2sgb3V0PC9wPlxyXG4gICAgICAgIDxwPjMuIERvIG5vdCBjaG5hZ2UgdGhlIHNldHRpbmdzIGluIHRoZSBjb21wdXRlcjwvcD5cclxuICAgICAgICA8cD40LiBSZXBvcnQgcHJvYmxlbXMgZXhwZXJpZW5jZWQgZHVyaW5nIHRoZSBsb2FuIHRvIHRoZSB0ZWNobmljaWFuIG9yIHN1cGVydmlzb3I8L3A+XHJcbiAgICAgICAgPHA+NS4gSSBhbSBub3QgYWxsb3dlZCB0byByZXBhaXIgd2l0aG91dCByZXBvcnRpbmcgdGhlIHByb2JsZW1zIHRvIHRoZSB0ZWNobmljaWFuIG9yIHN1cGVydmlzb3I8L3A+XHJcbiAgICAgICAgPHA+Ni4gUGF5IHJlcGFpciBvciByZXBsYWNlbWVudCBjb3N0cyBmb3IgZGFtYWdlcy9sb3NzPC9wPlxyXG4gICAgICAgIDxwPjcuIFNpZ24gb3V0L3R1cm4gb2ZmIHN5bmNpbmcgZm9yIHBlcnNvbmFsIGFjY291bnQgaW4gZW1haWwsIGJyb3dzZXJzIGFuZCBzb2NpYWwgbWVkaWEgYW5kIGNvbGxlY3QgYWxsIGRhdGEgYW5kIGRvY3VtZW50cyBiZWZyb2UgcmV0dXJuaW5nPC9wPlxyXG4gICAgICAgIDxwPjguIEZhaWx1cmUgdG8gY29tcGx5IHdpdGggdGhlc2UgYm9ycm93aW5nIHBvbGljaWVzIGFuZCBwcm9jZWR1cmVzIG1heSByZXN1bHQgaW4gbG9zcyBvZiBwcml2aWxlZ2U8L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGxvYW5Cb3gucXVlcnlTZWxlY3RvcihcIiNBcHBMb2FuQm94Q2xvc2VCdG5cIik7XHJcbiAgICAgICAgY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwYWdlcy5mcm9udFBhZ2Uuc2hvdygpLCB7Y2FwdHVyZTogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsb2FuQm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDbG9zZUJ0bigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBsZXQgY2xvc2VCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xvYW5Cb3hDbG9zZUJ0blwiKTtcclxuICAgIFxyXG4gICAgaWYoIWNsb3NlQnRuKSB7XHJcbiAgICAgICAgY2xvc2VCdG4gPSBtYWtlQnV0dG9uV2l0aENsYXNzKFwiY2xvc2UtYnRuXCIpOyBcclxuICAgICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBpY29uXCI+Y2xvc2U8L2k+JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VCdG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlcGFydG1lbnRIZWFkZXIoKTogSFRNTEhlYWRFbGVtZW50IHtcclxuICAgIHJldHVybiBtYWtlSDJXaXRoVGV4dChERVBBUlRNRU5UX05BTUUpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEZvcm1IZWFkZXIoKTogSFRNTEhlYWRFbGVtZW50IHtcclxuICAgIHJldHVybiBtYWtlSDJXaXRoVGV4dChcIkFncmVlbWVudCB0byBCb3Jyb3cgRXF1aXBtZW50IFJlbGVhc2Ugb2YgTGlhYmlsaXR5XCIpO1xyXG59XHJcblxyXG4vL2Z1bmN0aW9uIGdldElucHV0Qm94Rm9yKGZpZWxkTmFtZTogc3RyaW5nLCBib3hUeXBlOiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XHJcbi8vXHJcbi8vICAgIGxldCBkaXYgPSBtYWtlRGl2V2l0aElkQW5kQ2xhc3MoZmllbGROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLCBib3hUeXBlKTtcclxuLy99IiwiaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gXCIuL2F1dGgvQXV0aE1vZHVsZVwiO1xyXG5pbXBvcnQgeyBGZXRjaE1hbmFnZXIgfSBmcm9tIFwiLi9hdXRoL0ZldGNoTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHUkFQSF9DT05GSUcgfSBmcm9tIFwiLi9hdXRoL0NvbnN0YW50c1wiO1xyXG5cclxuLy9jaGVjayBpZiBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyOyB0byBsb2dpbiB2aWEgcmVkaXJlY3QgKGFzIG9wcG9zZWQgdG8gcG9wdXApIGxhdGVyIG9uICBpZiBzby5cclxuY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoXCJNU0lFIFwiKTtcclxuY29uc3QgbXNpZTExID0gdWEuaW5kZXhPZihcIlRyaWRlbnQvXCIpO1xyXG5jb25zdCBpc0lFID0gbXNpZSA+IDAgfHwgbXNpZTExID4gMDtcclxuXHJcbmNvbnN0IGF1dGhNb2R1bGU6IEF1dGhNb2R1bGUgPSBuZXcgQXV0aE1vZHVsZSgpO1xyXG5jb25zdCBuZXR3b3JrTW9kdWxlOiBGZXRjaE1hbmFnZXIgPSBuZXcgRmV0Y2hNYW5hZ2VyKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXV0aE1vZHVsZS5sb2FkQXV0aE1vZHVsZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgdG8gcHJvbXB0IHVzZXIgZm9yIHNpZ25pbiwgbWV0aG9kIGVpdGhlciBsb2dpblJlZGlyZWN0IG9yIGxvZ2luUG9wdXBcclxuICogQHBhcmFtIG1ldGhvZFxyXG4gKi9cclxuIGV4cG9ydCBmdW5jdGlvbiBzaWduSW4obWV0aG9kOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZ25JblR5cGUgPSBpc0lFID8gXCJsb2dpblJlZGlyZWN0XCIgOiBtZXRob2Q7XHJcbiAgICBhdXRoTW9kdWxlLmxvZ2luKHNpZ25JblR5cGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbGVkIHdoZW4gdXNlciBjbGlja3MgXCJTaWduIE91dFwiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpOiB2b2lkIHtcclxuICAgIGF1dGhNb2R1bGUubG9nb3V0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlXHJcbiAqL1xyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGlzSUUgPyBhd2FpdCBhdXRoTW9kdWxlLmdldFByb2ZpbGVUb2tlblJlZGlyZWN0KCkgOiBhd2FpdCBhdXRoTW9kdWxlLmdldFByb2ZpbGVUb2tlblBvcHVwKCk7XHJcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGdyYXBoUmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrTW9kdWxlLmNhbGxFbmRwb2ludFdpdGhUb2tlbihHUkFQSF9DT05GSUcuR1JBUEhfTUVfRU5EUFQsIHRva2VuKTtcclxuICAgICAgICAvL1VJTWFuYWdlci51cGRhdGVVSShncmFwaFJlc3BvbnNlLCBHUkFQSF9DT05GSUcuR1JBUEhfTUVfRU5EUFQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsbGVkIHRvIGZldGNoIGluZm8gb24gd2hldGhlciB1c2VyIGJlbG9uZ3MgdG8gVUJEIFN0YWZmIEdyb3VwXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SXNTdGFmZigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHRva2VuID0gaXNJRSA/IGF3YWl0IGF1dGhNb2R1bGUuZ2V0R3JvdXBzVG9rZW5SZWRpcmVjdCgpIDogYXdhaXQgYXV0aE1vZHVsZS5nZXRHcm91cHNUb2tlblBvcHVwKCk7XHJcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGdyYXBoUmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrTW9kdWxlLmNhbGxFbmRwb2ludFdpdGhUb2tlbihHUkFQSF9DT05GSUcuR1JBUEhfR1JPVVBTX0lTU1RBRkZfRU5EUFQsIHRva2VuKTtcclxuICAgICAgICAvL1VJTWFuYWdlci51cGRhdGVVSShncmFwaFJlc3BvbnNlLCBHUkFQSF9DT05GSUcuR1JBUEhfR1JPVVBTX0lTU1RBRkZfRU5EUFQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsbGVkIHRvIGZldGNoIGluZm8gb24gd2hldGhlciB1c2VyIGJlbG9uZ3MgdG8gVUJEIFN1ZGVudCBHcm91cFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldElzU3R1ZGVudCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHRva2VuID0gaXNJRSA/IGF3YWl0IGF1dGhNb2R1bGUuZ2V0R3JvdXBzVG9rZW5SZWRpcmVjdCgpIDogYXdhaXQgYXV0aE1vZHVsZS5nZXRHcm91cHNUb2tlblBvcHVwKCk7XHJcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGdyYXBoUmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrTW9kdWxlLmNhbGxFbmRwb2ludFdpdGhUb2tlbihHUkFQSF9DT05GSUcuR1JBUEhfR1JPVVBTX0lTU1RVREVOVF9FTkRQVCwgdG9rZW4pO1xyXG4gICAgICAgIC8vVUlNYW5hZ2VyLnVwZGF0ZVVJKGdyYXBoUmVzcG9uc2UsIEdSQVBIX0NPTkZJRy5HUkFQSF9HUk9VUFNfSVNTVFVERU5UX0VORFBUKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGxlZCB0byBhdHRlbXB0IHNpbGVudCBzaW5nbGUgc2lnbi1vblxyXG4gKi9cclxuIGV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0U3NvU2lsZW50KCk6IHZvaWQge1xyXG4gICAgYXV0aE1vZHVsZS5hdHRlbXB0U3NvU2lsZW50KCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUHVibGljQ2xpZW50QXBwbGljYXRpb24sIFNpbGVudFJlcXVlc3QsIEF1dGhlbnRpY2F0aW9uUmVzdWx0LCBDb25maWd1cmF0aW9uLCBMb2dMZXZlbCwgQWNjb3VudEluZm8sIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IsIFJlZGlyZWN0UmVxdWVzdCwgUG9wdXBSZXF1ZXN0LCBFbmRTZXNzaW9uUmVxdWVzdCB9IGZyb20gXCJAYXp1cmUvbXNhbC1icm93c2VyXCI7XHJcbmltcG9ydCB7IFNzb1NpbGVudFJlcXVlc3QgfSBmcm9tIFwiQGF6dXJlL21zYWwtYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBnZXREcm9wbmF2LCBoaWRlRHJvcG5hdiB9IGZyb20gXCIuLi8uLi9hcHAvZHJvcG5hdlwiO1xyXG5pbXBvcnQgeyBnZXRNYWluQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2FwcC9tYWluQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IG1ha2VCdXR0b25XaXRoQ2xhc3MsIG1ha2VIM1dpdGhJZCB9IGZyb20gXCIuLi9odG1sXCI7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSBcIi4uL3BhZ2VzXCI7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBjbGFzcyBmb3IgQGF6dXJlL21zYWwtYnJvd3NlcjogXHJcbiAqIGh0dHBzOi8vYXp1cmVhZC5naXRodWIuaW8vbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3JlZi9tc2FsLWJyb3dzZXIvbW9kdWxlcy9fc3JjX2NvbmZpZ19jb25maWd1cmF0aW9uXy5odG1sXHJcbiAqL1xyXG5jb25zdCBNU0FMX0NPTkZJRzogQ29uZmlndXJhdGlvbiA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgICBjbGllbnRJZDogXCI3N2Q3YTM0Yi05ODUzLTQxMTMtOWQ1Ny0zMTM2ZWIwMTQ5ZTRcIixcclxuICAgICAgICBhdXRob3JpdHk6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tLzNmNDZiN2E4LTM4NWEtNDU2OS05YWY1LWM0M2RkNjNkYWQ5M1wiLFxyXG4gICAgfSxcclxuICAgIGNhY2hlOiB7XHJcbiAgICAgICAgY2FjaGVMb2NhdGlvbjogXCJsb2NhbFN0b3JhZ2VcIiwgLy8gVGhpcyBjb25maWd1cmVzIHdoZXJlIHlvdXIgY2FjaGUgd2lsbCBiZSBzdG9yZWRcclxuICAgICAgICBzdG9yZUF1dGhTdGF0ZUluQ29va2llOiBmYWxzZSwgLy8gU2V0IHRoaXMgdG8gXCJ0cnVlXCIgaWYgeW91IGFyZSBoYXZpbmcgaXNzdWVzIG9uIElFMTEgb3IgRWRnZVxyXG4gICAgfSxcclxuICAgIHN5c3RlbToge1xyXG4gICAgICAgIGxvZ2dlck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbG9nZ2VyQ2FsbGJhY2s6IChsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluc1BpaSkge1x0XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1x0XHJcbiAgICAgICAgICAgICAgICB9XHRcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcdFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHRcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm86XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKG1lc3NhZ2UpO1x0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcdFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuVmVyYm9zZTpcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1x0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcdFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuV2FybmluZzpcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1x0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXV0aE1vZHVsZSBmb3IgYXBwbGljYXRpb24gLSBoYW5kbGVzIGF1dGhlbnRpY2F0aW9uIGluIGFwcC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHtcclxuXHJcbiAgICBwcml2YXRlIG15TVNBTE9iajogUHVibGljQ2xpZW50QXBwbGljYXRpb247IC8vIGh0dHBzOi8vYXp1cmVhZC5naXRodWIuaW8vbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3JlZi9tc2FsLWJyb3dzZXIvY2xhc3Nlcy9fc3JjX2FwcF9wdWJsaWNjbGllbnRhcHBsaWNhdGlvbl8ucHVibGljY2xpZW50YXBwbGljYXRpb24uaHRtbFxyXG4gICAgcHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50SW5mbyB8IG51bGw7IC8vIGh0dHBzOi8vYXp1cmVhZC5naXRodWIuaW8vbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3JlZi9tc2FsLWNvbW1vbi9tb2R1bGVzL19zcmNfYWNjb3VudF9hY2NvdW50aW5mb18uaHRtbFxyXG4gICAgcHJpdmF0ZSBsb2dpblJlZGlyZWN0UmVxdWVzdDogUmVkaXJlY3RSZXF1ZXN0OyAvLyBodHRwczovL2F6dXJlYWQuZ2l0aHViLmlvL21pY3Jvc29mdC1hdXRoZW50aWNhdGlvbi1saWJyYXJ5LWZvci1qcy9yZWYvbXNhbC1icm93c2VyL21vZHVsZXMvX3NyY19yZXF1ZXN0X3JlZGlyZWN0cmVxdWVzdF8uaHRtbFxyXG4gICAgcHJpdmF0ZSBsb2dpblJlcXVlc3Q6IFBvcHVwUmVxdWVzdDsgLy8gaHR0cHM6Ly9henVyZWFkLmdpdGh1Yi5pby9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvcmVmL21zYWwtYnJvd3Nlci9tb2R1bGVzL19zcmNfcmVxdWVzdF9wb3B1cHJlcXVlc3RfLmh0bWxcclxuICAgIHByaXZhdGUgcHJvZmlsZVJlZGlyZWN0UmVxdWVzdDogUmVkaXJlY3RSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBwcm9maWxlUmVxdWVzdDogUG9wdXBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBncm91cHNSZWRpcmVjdFJlcXVlc3Q6IFJlZGlyZWN0UmVxdWVzdDtcclxuICAgIHByaXZhdGUgZ3JvdXBzUmVxdWVzdDogUG9wdXBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBzaWxlbnRQcm9maWxlUmVxdWVzdDogU2lsZW50UmVxdWVzdDsgLy8gaHR0cHM6Ly9henVyZWFkLmdpdGh1Yi5pby9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvcmVmL21zYWwtYnJvd3Nlci9tb2R1bGVzL19zcmNfcmVxdWVzdF9zaWxlbnRyZXF1ZXN0Xy5odG1sXHJcbiAgICBwcml2YXRlIHNpbGVudEdyb3Vwc1JlcXVlc3Q6IFNpbGVudFJlcXVlc3Q7XHJcbiAgICBwcml2YXRlIHNpbGVudExvZ2luUmVxdWVzdDogU3NvU2lsZW50UmVxdWVzdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm15TVNBTE9iaiA9IG5ldyBQdWJsaWNDbGllbnRBcHBsaWNhdGlvbihNU0FMX0NPTkZJRyk7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIHNjb3BlczogW1wiVXNlci5SZWFkXCIsIFwiYXBpOi8vc2Rzcm1zL2FjY2Vzc19hc191c2VyXCJdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblJlZGlyZWN0UmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5sb2dpblJlcXVlc3QsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0U3RhcnRQYWdlOiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucHJvZmlsZVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIHNjb3BlczogW1wiVXNlci5SZWFkXCJdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9maWxlUmVkaXJlY3RSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnByb2ZpbGVSZXF1ZXN0LFxyXG4gICAgICAgICAgICByZWRpcmVjdFN0YXJ0UGFnZTogd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBBZGQgaGVyZSBzY29wZXMgZm9yIGFjY2VzcyB0b2tlbiB0byBiZSB1c2VkIGF0IE1TIEdyYXBoIEFQSSBlbmRwb2ludHMuXHJcbiAgICAgICAgdGhpcy5ncm91cHNSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBzY29wZXM6IFtcIlVzZXIuUmVhZFwiXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXBzUmVkaXJlY3RSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmdyb3Vwc1JlcXVlc3QsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0U3RhcnRQYWdlOiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2lsZW50UHJvZmlsZVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIHNjb3BlczogW1wib3BlbmlkXCIsIFwicHJvZmlsZVwiLCBcIlVzZXIuUmVhZFwiXSxcclxuICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2lsZW50R3JvdXBzUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgc2NvcGVzOiBbXCJvcGVuaWRcIiwgXCJwcm9maWxlXCIsIFwiTWFpbC5SZWFkXCJdLFxyXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zaWxlbnRMb2dpblJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIC8vZG9tYWluSGludDogXCIzZjQ2YjdhOC0zODVhLTQ1NjktOWFmNS1jNDNkZDYzZGFkOTNcIixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbHMgZ2V0QWxsQWNjb3VudHMgYW5kIGRldGVybWluZXMgdGhlIGNvcnJlY3QgYWNjb3VudCB0byBzaWduIGludG8sIGN1cnJlbnRseSBkZWZhdWx0cyB0byBmaXJzdCBhY2NvdW50IGZvdW5kIGluIGNhY2hlLlxyXG4gICAgICogVE9ETzogQWRkIGFjY291bnQgY2hvb3NlciBjb2RlXHJcbiAgICAgKiBcclxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9BenVyZUFEL21pY3Jvc29mdC1hdXRoZW50aWNhdGlvbi1saWJyYXJ5LWZvci1qcy9ibG9iL2Rldi9saWIvbXNhbC1jb21tb24vZG9jcy9BY2NvdW50cy5tZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEFjY291bnQoKTogQWNjb3VudEluZm8gfCBudWxsIHtcclxuICAgICAgICAvLyBuZWVkIHRvIGNhbGwgZ2V0QWNjb3VudCBoZXJlP1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY2NvdW50cyA9IHRoaXMubXlNU0FMT2JqLmdldEFsbEFjY291bnRzKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBY2NvdW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnRzIGRldGVjdGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjY291bnRzKVxyXG4gICAgICAgIGlmIChjdXJyZW50QWNjb3VudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvLyBBZGQgY2hvb3NlIGFjY291bnQgY29kZSBoZXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXVsdGlwbGUgYWNjb3VudHMgZGV0ZWN0ZWQsIG5lZWQgdG8gYWRkIGNob29zZSBhY2NvdW50IGNvZGUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjY291bnRzWzBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEFjY291bnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjY291bnRzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB3ZSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHJlZGlyZWN0IGFuZCBoYW5kbGVzIHN0YXRlIGFjY29yZGluZ2x5LiBPbmx5IHJlcXVpcmVkIGZvciByZWRpcmVjdCBmbG93cy5cclxuICAgICAqIFxyXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL2Jsb2IvZGV2L2xpYi9tc2FsLWJyb3dzZXIvZG9jcy9pbml0aWFsaXphdGlvbi5tZCNyZWRpcmVjdC1hcGlzXHJcbiAgICAgKi9cclxuICAgICBsb2FkQXV0aE1vZHVsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15TVNBTE9iai5oYW5kbGVSZWRpcmVjdFByb21pc2UoKS50aGVuKChyZXNwOiBBdXRoZW50aWNhdGlvblJlc3VsdCB8IG51bGwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShyZXNwKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYWNjb3VudCkgdGhpcy5hdHRlbXB0U3NvU2lsZW50KCk7XHJcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSByZXNwb25zZSBmcm9tIGEgcG9wdXAgb3IgcmVkaXJlY3QuIElmIHJlc3BvbnNlIGlzIG51bGwsIHdpbGwgY2hlY2sgaWYgd2UgaGF2ZSBhbnkgYWNjb3VudHMgYW5kIGF0dGVtcHQgdG8gc2lnbiBpbi5cclxuICAgICAqIEBwYXJhbSByZXNwb25zZSBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IEF1dGhlbnRpY2F0aW9uUmVzdWx0IHwgbnVsbCkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSByZXNwb25zZS5hY2NvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wbmF2KCk7XHJcbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0FwcFBhZ2VUaXRsZScpKS5pbm5lckhUTUwgPSBcIkFkbWluIHBhZ2VcIjtcclxuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQXBwUGFnZVJlbWFya3MnKSkuaW5uZXJIVE1MID0gXCJTdGlsbCB3b3JraW5nIGluIHRoaXNcIjtcclxuICAgICAgICAgICAgLy9VSU1hbmFnZXIuc2hvd1dlbGNvbWVNZXNzYWdlKHRoaXMuYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcGFnZXMuZnJvbnRQYWdlLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxzIHNzb1NpbGVudCB0byBhdHRlbXB0IHNpbGVudCBmbG93LiBJZiBpdCBmYWlscyBkdWUgdG8gaW50ZXJhY3Rpb24gcmVxdWlyZWQgZXJyb3IsIGl0IHdpbGwgcHJvbXB0IHRoZSB1c2VyIHRvIGxvZ2luIHVzaW5nIHBvcHVwLlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKi9cclxuICAgIGF0dGVtcHRTc29TaWxlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5teU1TQUxPYmouc3NvU2lsZW50KHRoaXMuc2lsZW50TG9naW5SZXF1ZXN0KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgICAgIC8vVUlNYW5hZ2VyLnNob3dXZWxjb21lTWVzc2FnZSh0aGlzLmFjY291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50IVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNpbGVudCBFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxzIGxvZ2luUG9wdXAgb3IgbG9naW5SZWRpcmVjdCBiYXNlZCBvbiBnaXZlbiBzaWduSW5UeXBlLlxyXG4gICAgICogQHBhcmFtIHNpZ25JblR5cGUgXHJcbiAgICAgKi9cclxuICAgIGxvZ2luKHNpZ25JblR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzaWduSW5UeXBlID09PSBcImxvZ2luUG9wdXBcIikge1xyXG4gICAgICAgICAgICB0aGlzLm15TVNBTE9iai5sb2dpblBvcHVwKHRoaXMubG9naW5SZXF1ZXN0KS50aGVuKChyZXNwOiBBdXRoZW50aWNhdGlvblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShyZXNwKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvclxyXG4gICAgICAgICAgICAgICAgcGFnZXMuZnJvbnRQYWdlLnNob3coKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaWduSW5UeXBlID09PSBcImxvZ2luUmVkaXJlY3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLm15TVNBTE9iai5sb2dpblJlZGlyZWN0KHRoaXMubG9naW5SZWRpcmVjdFJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYWdlcy5mcm9udFBhZ2UuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyBvdXQgb2YgY3VycmVudCBhY2NvdW50LlxyXG4gICAgICovXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGFjY291bnQ6IEFjY291bnRJbmZvIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgYWNjb3VudCA9IHRoaXMuYWNjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2dPdXRSZXF1ZXN0OiBFbmRTZXNzaW9uUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgYWNjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5teU1TQUxPYmoubG9nb3V0UmVkaXJlY3QobG9nT3V0UmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0b2tlbiB0byByZWFkIHVzZXIgcHJvZmlsZSBkYXRhIGZyb20gTVMgR3JhcGggc2lsZW50bHksIG9yIGZhbGxzIGJhY2sgdG8gaW50ZXJhY3RpdmUgcmVkaXJlY3QuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldFByb2ZpbGVUb2tlblJlZGlyZWN0KCk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcclxuICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lsZW50UHJvZmlsZVJlcXVlc3QuYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5SZWRpcmVjdCh0aGlzLnNpbGVudFByb2ZpbGVSZXF1ZXN0LCB0aGlzLnByb2ZpbGVSZWRpcmVjdFJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdG9rZW4gdG8gcmVhZCB1c2VyIHByb2ZpbGUgZGF0YSBmcm9tIE1TIEdyYXBoIHNpbGVudGx5LCBvciBmYWxscyBiYWNrIHRvIGludGVyYWN0aXZlIHBvcHVwLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXRQcm9maWxlVG9rZW5Qb3B1cCgpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpbGVudFByb2ZpbGVSZXF1ZXN0LmFjY291bnQgPSB0aGlzLmFjY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRva2VuUG9wdXAodGhpcy5zaWxlbnRQcm9maWxlUmVxdWVzdCwgdGhpcy5wcm9maWxlUmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0b2tlbiB0byByZWFkIG1haWwgZGF0YSBmcm9tIE1TIEdyYXBoIHNpbGVudGx5LCBvciBmYWxscyBiYWNrIHRvIGludGVyYWN0aXZlIHJlZGlyZWN0LlxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXRHcm91cHNUb2tlblJlZGlyZWN0KCk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcclxuICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lsZW50R3JvdXBzUmVxdWVzdC5hY2NvdW50ID0gdGhpcy5hY2NvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUb2tlblJlZGlyZWN0KHRoaXMuc2lsZW50R3JvdXBzUmVxdWVzdCwgdGhpcy5ncm91cHNSZWRpcmVjdFJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdG9rZW4gdG8gcmVhZCBtYWlsIGRhdGEgZnJvbSBNUyBHcmFwaCBzaWxlbnRseSwgb3IgZmFsbHMgYmFjayB0byBpbnRlcmFjdGl2ZSBwb3B1cC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0R3JvdXBzVG9rZW5Qb3B1cCgpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpbGVudEdyb3Vwc1JlcXVlc3QuYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5Qb3B1cCh0aGlzLnNpbGVudEdyb3Vwc1JlcXVlc3QsIHRoaXMuZ3JvdXBzUmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgdG9rZW4gc2lsZW50bHksIG9yIGZhbGxzIGJhY2sgdG8gaW50ZXJhY3RpdmUgcG9wdXAuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0VG9rZW5Qb3B1cChzaWxlbnRSZXF1ZXN0OiBTaWxlbnRSZXF1ZXN0LCBpbnRlcmFjdGl2ZVJlcXVlc3Q6IFBvcHVwUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogQXV0aGVudGljYXRpb25SZXN1bHQgPSBhd2FpdCB0aGlzLm15TVNBTE9iai5hY3F1aXJlVG9rZW5TaWxlbnQoc2lsZW50UmVxdWVzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2lsZW50IHRva2VuIGFjcXVpc2l0aW9uIGZhaWxzLlwiKTtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjcXVpcmluZyB0b2tlbiB1c2luZyByZWRpcmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm15TVNBTE9iai5hY3F1aXJlVG9rZW5Qb3B1cChpbnRlcmFjdGl2ZVJlcXVlc3QpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIHRva2VuIHNpbGVudGx5LCBvciBmYWxscyBiYWNrIHRvIGludGVyYWN0aXZlIHJlZGlyZWN0LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGdldFRva2VuUmVkaXJlY3Qoc2lsZW50UmVxdWVzdDogU2lsZW50UmVxdWVzdCwgaW50ZXJhY3RpdmVSZXF1ZXN0OiBSZWRpcmVjdFJlcXVlc3QpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm15TVNBTE9iai5hY3F1aXJlVG9rZW5TaWxlbnQoc2lsZW50UmVxdWVzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2lsZW50IHRva2VuIGFjcXVpc2l0aW9uIGZhaWxzLlwiKTtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjcXVpcmluZyB0b2tlbiB1c2luZyByZWRpcmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlNU0FMT2JqLmFjcXVpcmVUb2tlblJlZGlyZWN0KGludGVyYWN0aXZlUmVxdWVzdCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBBZGQgaGVyZSB0aGUgZW5kcG9pbnRzIGZvciBNUyBHcmFwaCBBUEkgc2VydmljZXMgeW91IHdvdWxkIGxpa2UgdG8gdXNlLlxyXG5leHBvcnQgY29uc3QgR1JBUEhfQ09ORklHID0ge1xyXG4gICAgR1JBUEhfTUVfRU5EUFQ6IFwiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWVcIixcclxuICAgIEdSQVBIX01BSUxfRU5EUFQ6IFwiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWUvbWVzc2FnZXNcIixcclxuICAgIEdSQVBIX0dST1VQU19JU1NUVURFTlRfRU5EUFQ6IFwiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWUvdHJhbnNpdGl2ZU1lbWJlck9mL21pY3Jvc29mdC5ncmFwaC5ncm91cD8kY291bnQ9dHJ1ZSYkZmlsdGVyPWlkIGVxICdmZjAzN2RiYi0yOGIzLTQ3ZDUtYTcxMC04NmQzZTRhZTQxMzUnXCIsXHJcbiAgICBHUkFQSF9HUk9VUFNfSVNTVEFGRl9FTkRQVDogXCJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vdjEuMC9tZS90cmFuc2l0aXZlTWVtYmVyT2YvbWljcm9zb2Z0LmdyYXBoLmdyb3VwPyRjb3VudD10cnVlJiRmaWx0ZXI9aWQgZXEgJzI1ZDM4ZmY0LTZkOTUtNDM0NC1hODUzLWE1ODBiZDAwZThlYSdcIlxyXG59Oy8vbm90ZSBtdXN0IGFsc28gc2V0IGNvbnNpc3RlbmN5bGV2ZWwgdG8gZXZlbnR1YWwgaW4gaHR0cCBoZWFkZXIgZm9yIHRoZSBsYXN0IDIgZW5kcHRzIHRvIHJldHVybiBjb3VudCIsImltcG9ydCB7IEdSQVBIX0NPTkZJRyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbywgTWVtYmVyc2hpcEluZm8sIERlcGFydG1lbnRJbmZvIH0gZnJvbSBcIi4vR3JhcGhSZXBvbnNlVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGhhbmRsZXMgQmVhcmVyIHJlcXVlc3RzIGZvciBkYXRhIHVzaW5nIEZldGNoLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZldGNoTWFuYWdlciB7XHJcblxyXG4gICAgI3JlcXVpcmVDTEhlYWRlcjogc3RyaW5nW10gPSBbIEdSQVBIX0NPTkZJRy5HUkFQSF9HUk9VUFNfSVNTVEFGRl9FTkRQVCwgR1JBUEhfQ09ORklHLkdSQVBIX0dST1VQU19JU1NUVURFTlRfRU5EUFQgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIGFuIEF1dGhvcml6YXRpb24gXCJCZWFyZXJcIiAgcmVxdWVzdCB3aXRoIHRoZSBnaXZlbiBhY2Nlc3NUb2tlbiB0byB0aGUgZ2l2ZW4gZW5kcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0gZW5kcG9pbnQgXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW4gXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNhbGxFbmRwb2ludFdpdGhUb2tlbihlbmRwb2ludDogc3RyaW5nLCBhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxVc2VySW5mbyB8IE1lbWJlcnNoaXBJbmZvIHwgRGVwYXJ0bWVudEluZm8+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBjb25zdCBiZWFyZXIgPSBgQmVhcmVyICR7YWNjZXNzVG9rZW59YDtcclxuXHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIGJlYXJlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy4jcmVxdWlyZUNMSGVhZGVyLmluY2x1ZGVzKGVuZHBvaW50KSlcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb25zaXN0ZW5jeUxldmVsXCIsIFwiRXZlbnR1YWxcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IG1hZGUgYXQ6ICcgKyBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgVXNlckluZm8gfCBNZW1iZXJzaGlwSW5mbyB8IERlcGFydG1lbnRJbmZvO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBtYWtlRGl2V2l0aENsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQgPT4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtcclxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbWFrZURpdldpdGhJZCA9IChpZDogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQgPT4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtcclxuICAgIGlkOiBpZFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IG1ha2VEaXZXaXRoSWRBbmRDbGFzcyA9IChpZDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx7XHJcbiAgICBpZDogaWQsXHJcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IG1ha2VEaXZXaXRoSWRBbmRUZXh0ID0gKGlkOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx7XHJcbiAgICBpZDogaWQsXHJcbiAgICBpbm5lckhUTUw6IHRleHRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUgyV2l0aFRleHQgPSAodGV4dDogc3RyaW5nKTogSFRNTEhlYWRpbmdFbGVtZW50ID0+IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLHtcclxuICAgIGlubmVySFRNTDogdGV4dFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IG1ha2VIM1dpdGhJZCA9IChpZDogc3RyaW5nKTogSFRNTEhlYWRpbmdFbGVtZW50ID0+IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpLHtcclxuICAgIGlkOiBpZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlUFdpdGhJZCA9IChpZDogc3RyaW5nKTogSFRNTFBhcmFncmFwaEVsZW1lbnQgPT4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSx7XHJcbiAgICBpZDogaWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUJ1dHRvbldpdGhJZCA9IChpZDogc3RyaW5nKTogSFRNTEJ1dHRvbkVsZW1lbnQgPT4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLHtcclxuICAgIGlkOiBpZFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IG1ha2VCdXR0b25XaXRoQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCA9PiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikse1xyXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVRhYmxlUm93V2l0aENsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTFRhYmxlUm93RWxlbWVudCA9PiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSx7XHJcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihlbGVtVG9DbGVhcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHdoaWxlKGVsZW1Ub0NsZWFyLmhhc0NoaWxkTm9kZXMoKSkgZWxlbVRvQ2xlYXIucmVtb3ZlQ2hpbGQoPE5vZGU+IGVsZW1Ub0NsZWFyLmZpcnN0Q2hpbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUVsZW1Vc2luZ0NsYXNzTGlzdChlbGVtVG9IaWRlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgZWxlbVRvSGlkZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bmhpZGVFbGVtVXNpbmdDbGFzc0xpc3QoZWxlbVRvSGlkZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGVsZW1Ub0hpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEVsZW1Vc2luZ0NsYXNzTGlzdChlbGVtVG9IaWRlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgZWxlbVRvSGlkZS5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVuZXhwYW5kRWxlbVVzaW5nQ2xhc3NMaXN0KGVsZW1Ub0hpZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBlbGVtVG9IaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcclxufSIsImltcG9ydCB7IGdldERyb3BuYXYsIGhpZGVEcm9wbmF2LCBzaG93RHJvcG5hdiB9IGZyb20gXCIuLi9hcHAvZHJvcG5hdlwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udFBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvZnJvbnRQYWdlXCI7XHJcbmltcG9ydCB7IGdldExvYW5QYWdlIH0gZnJvbSBcIi4uL3BhZ2VzL2xvYW5QYWdlXCI7XHJcblxyXG5jbGFzcyBQYWdlQ29udGFpbmVyIHtcclxuICAgIHBhZ2VzOiBTZXQ8UGFnZT4gPSBuZXcgU2V0PFBhZ2U+KCk7XHJcbiAgICBnZXROb2RlOiAoKSA9PiBIVE1MRWxlbWVudDtcclxuICAgIHNob3c6ICgpID0+IHZvaWQ7XHJcbiAgICBoaWRlOiAoKSA9PiB2b2lkO1xyXG4gICAgdW5oaWRlOiAoKSA9PiB2b2lkO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlR2V0dGVyOiAoKSA9PiBIVE1MRWxlbWVudCwgcGFnZVNob3dlcjogKCkgPT4gdm9pZCwgcGFnZUhpZGVyOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5nZXROb2RlID0gcGFnZUdldHRlcjtcclxuICAgICAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZU90aGVyQ29udGFpbmVyc0J1dFVuaGlkZSh0aGlzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IHBhZ2VIaWRlcjtcclxuICAgICAgICB0aGlzLnVuaGlkZSA9IHBhZ2VTaG93ZXI7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZHJvcG5hdiA9IG5ldyBQYWdlQ29udGFpbmVyKGdldERyb3BuYXYsIHNob3dEcm9wbmF2LCBoaWRlRHJvcG5hdik7XHJcblxyXG5jb25zdCBjb250YWluZXJzOiBTZXQ8UGFnZUNvbnRhaW5lcj4gPSBuZXcgU2V0PFBhZ2VDb250YWluZXI+KCk7XHJcbmNvbnRhaW5lcnMuYWRkKGRyb3BuYXYpO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgUGFnZSB7XHJcbiAgICBhYnN0cmFjdCBwYXJlbnRDb250YWluZXI6IFBhZ2VDb250YWluZXI7XHJcbiAgICBhYnN0cmFjdCBnZXROb2RlKCk6IEhUTUxFbGVtZW50O1xyXG4gICAgbm9kZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGhpZGUoKTogdm9pZCB7IHRoaXMubm9kZT8uY2xhc3NMaXN0LmFkZChcInBhZ2UtaW5hY3RpdmVcIik7IH1cclxuICAgIHVuaGlkZSgpOiB2b2lkIHsgdGhpcy5ub2RlPy5jbGFzc0xpc3QucmVtb3ZlKFwicGFnZS1pbmFjdGl2ZVwiKTsgfVxyXG4gICAgXHJcbiAgICBpbml0KCk6IHZvaWQgeyBhcHBlbmQodGhpcykudG8odGhpcy5wYXJlbnRDb250YWluZXIpOyB9XHJcbiAgICBcclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgYXBwZW5kKHRoaXMpLnRvKHRoaXMucGFyZW50Q29udGFpbmVyKVxyXG4gICAgICAgIHVuaGlkZSh0aGlzKS5idXRIaWRlT3RoZXJzT24odGhpcy5wYXJlbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIERyb3BuYXZQYWdlIGV4dGVuZHMgUGFnZXtcclxuICAgIHJlYWRvbmx5IHBhcmVudENvbnRhaW5lciA9IGRyb3BuYXY7XHJcbiAgICByZWFkb25seSBnZXROb2RlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlR2V0dGVyOiAoKSA9PiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXROb2RlID0gcGFnZUdldHRlcjtcclxuICAgICAgICB0aGlzLnBhcmVudENvbnRhaW5lci5wYWdlcy5hZGQodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHBhZ2VzID0ge1xyXG4gICAgZnJvbnRQYWdlOiBuZXcgRHJvcG5hdlBhZ2UoZ2V0RnJvbnRQYWdlKSxcclxuICAgIGxvYW5Gb3JtOiBuZXcgRHJvcG5hdlBhZ2UoZ2V0TG9hblBhZ2UpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZChwYWdlOiBQYWdlKSB7XHJcbiAgICBjb25zdCBwYWdlTm9kZSA9IHBhZ2Uubm9kZSA9IHBhZ2UuZ2V0Tm9kZSgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhdHRhY2hPcHRpb24gPSB7XHJcbiAgICAgICAgdG8ocGFnZUNvbnRhaW5lcjogUGFnZUNvbnRhaW5lcik6dm9pZCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBwYWdlQ29udGFpbmVyLmdldE5vZGUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFwYXJlbnROb2RlLmNvbnRhaW5zKHBhZ2VOb2RlKSkgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwYWdlTm9kZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYWdlQ29udGFpbmVyLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBhdHRhY2hPcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaGlkZShwYWdlOiBQYWdlKSB7XHJcbiAgICBwYWdlLnVuaGlkZSgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoaWRlT3RoZXJzT3B0aW9uID0ge1xyXG4gICAgICAgIGJ1dEhpZGVPdGhlcnNPbihwYWdlQ29udGFpbmVyOiBQYWdlQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHBhZ2VDb250YWluZXIucGFnZXMuZm9yRWFjaChvdGhlclBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYob3RoZXJQYWdlICE9IHBhZ2UpIG90aGVyUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGhpZGVPdGhlcnNPcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVPdGhlckNvbnRhaW5lcnNCdXRVbmhpZGUoY29udGFpbmVyOiBQYWdlQ29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIudW5oaWRlKCk7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lcnMuZm9yRWFjaChvdGhlckNvbnRhaW5lciA9PiB7XHJcbiAgICAgICAgaWYob3RoZXJDb250YWluZXIgIT0gY29udGFpbmVyKSBvdGhlckNvbnRhaW5lci5oaWRlKCk7XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==