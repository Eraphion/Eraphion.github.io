/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/content/img sync recursive \\.(?:png|jpe?g|gif|tiff)$/i":
/*!**************************************************************!*\
  !*** ./modules/content/img sync \.(?:png|jpe?g|gif|tiff)$/i ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./phone.jpg\": \"./modules/content/img/phone.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules/content/img sync recursive \\\\.(?:png|jpe?g|gif|tiff)$/i\";\n\n//# sourceURL=webpack:///./modules/content/img_sync_\\.(?");

/***/ }),

/***/ "./modules/content/img/phone.jpg":
/*!***************************************!*\
  !*** ./modules/content/img/phone.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"\\\\content\\\\img\\\\phone.jpg\";\n\n//# sourceURL=webpack:///./modules/content/img/phone.jpg?");

/***/ }),

/***/ "./modules/content/script.js":
/*!***********************************!*\
  !*** ./modules/content/script.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./modules/content/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n \r\n\r\nlet req = __webpack_require__(\"./modules/content/img sync recursive \\\\.(?:png|jpe?g|gif|tiff)$/i\");\r\nreq.keys().forEach((key) => req(key));\r\n\r\nconsole.log(\"executing custom script...\");\n\n//# sourceURL=webpack:///./modules/content/script.js?");

/***/ }),

/***/ "./modules/content/style.less":
/*!************************************!*\
  !*** ./modules/content/style.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/content/style.less?");

/***/ }),

/***/ "./modules/footer/img sync recursive \\.(?:png|jpe?g|gif|tiff)$/i":
/*!*************************************************************!*\
  !*** ./modules/footer/img sync \.(?:png|jpe?g|gif|tiff)$/i ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./phone.jpg\": \"./modules/footer/img/phone.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules/footer/img sync recursive \\\\.(?:png|jpe?g|gif|tiff)$/i\";\n\n//# sourceURL=webpack:///./modules/footer/img_sync_\\.(?");

/***/ }),

/***/ "./modules/footer/img/phone.jpg":
/*!**************************************!*\
  !*** ./modules/footer/img/phone.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"\\\\footer\\\\img\\\\phone.jpg\";\n\n//# sourceURL=webpack:///./modules/footer/img/phone.jpg?");

/***/ }),

/***/ "./modules/footer/script.js":
/*!**********************************!*\
  !*** ./modules/footer/script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./modules/footer/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n \r\n\r\nlet req = __webpack_require__(\"./modules/footer/img sync recursive \\\\.(?:png|jpe?g|gif|tiff)$/i\");\r\nreq.keys().forEach((key) => req(key));\n\n//# sourceURL=webpack:///./modules/footer/script.js?");

/***/ }),

/***/ "./modules/footer/style.less":
/*!***********************************!*\
  !*** ./modules/footer/style.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/footer/style.less?");

/***/ }),

/***/ "./modules/header/img sync recursive \\.(?:png|jpe?g|gif|tiff)$/i":
/*!*************************************************************!*\
  !*** ./modules/header/img sync \.(?:png|jpe?g|gif|tiff)$/i ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./phone.jpg\": \"./modules/header/img/phone.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules/header/img sync recursive \\\\.(?:png|jpe?g|gif|tiff)$/i\";\n\n//# sourceURL=webpack:///./modules/header/img_sync_\\.(?");

/***/ }),

/***/ "./modules/header/img/phone.jpg":
/*!**************************************!*\
  !*** ./modules/header/img/phone.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"\\\\header\\\\img\\\\phone.jpg\";\n\n//# sourceURL=webpack:///./modules/header/img/phone.jpg?");

/***/ }),

/***/ "./modules/header/script.js":
/*!**********************************!*\
  !*** ./modules/header/script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./modules/header/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n \r\n\r\nlet req = __webpack_require__(\"./modules/header/img sync recursive \\\\.(?:png|jpe?g|gif|tiff)$/i\");\r\nreq.keys().forEach((key) => req(key));\r\n\r\n\n\n//# sourceURL=webpack:///./modules/header/script.js?");

/***/ }),

/***/ "./modules/header/style.less":
/*!***********************************!*\
  !*** ./modules/header/style.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/header/style.less?");

/***/ }),

/***/ "./modules/index.pug":
/*!***************************!*\
  !*** ./modules/index.pug ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h1>Start of our new site</h1><h2>more text</h2><h2>i will be autosaved</h2><h3>dfdfdfdfdfdfdfdfdfdfdf</h3><h2 class=\\\"header\\\">header</h2><div class=\\\"header-wrapper\\\">header-wrapper<div class=\\\"header-content\\\">header-content</div></div><img src=\\\"out/content/img/phone.jpg\\\" alt=\\\"ALTERNATIVE TEXT FOR THIS IMG\\\"/><div>more text<div>even more</div><div>text</div></div><h2 class=\\\"content\\\">content</h2><div class=\\\"content-wrapper\\\">content-wrapper<div class=\\\"content-content\\\">content-content</div></div><h1>HELLO FROM inner</h1><h2 class=\\\"footer\\\">footer</h2><div class=\\\"footer-wrapper\\\">footer-wrapper<div class=\\\"footer-content\\\">footer-content</div></div><h1>End of pug</h1>\"\n\n//# sourceURL=webpack:///./modules/index.pug?");

/***/ }),

/***/ "./modules/main.js":
/*!*************************!*\
  !*** ./modules/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/script.js */ \"./modules/header/script.js\");\n/* harmony import */ var _content_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/script.js */ \"./modules/content/script.js\");\n/* harmony import */ var _footer_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/script.js */ \"./modules/footer/script.js\");\n\r\n\r\n\r\n\r\nlet pugTemplate = __webpack_require__(/*! ./index.pug */ \"./modules/index.pug\");\r\ndocument.querySelector(\"#pugTemplate\").innerHTML = pugTemplate;\r\n\r\nconsole.log(123);\n\n//# sourceURL=webpack:///./modules/main.js?");

/***/ })

/******/ });