/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Raleway/Raleway-VariableFont_wght.ttf */ \"./src/Raleway/Raleway-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: railway;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    font-weight: 100;}\nbody{\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    font-family: railWay;\n    background-color: #f1f5f9;}\n#sidebar{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    border-radius: 10px;\n    height: 98vh;\n    background-color: #fee2e2;\n    gap: 20px;\n    grid-column-start: 1;\n    grid-column-end: 1;\n    box-shadow: 2px 0px 5px rgba(190, 190, 190, 0.589);}\nh2{display: flex; align-items: center; font-size: 40px;}\nh2>svg{width: 100px;}\n#sidebar>button{\n    width: 90%;\n    text-align: left;\n    font-size: 15px;\n    border-radius: 5px;\n    border-style: none;\n    height: 35px;\n    background-color: #e5e7eb00;}\n#details{\n    grid-column-start: 3;\n    grid-column-end: 3;\n    background-color: rgba(255, 255, 255, 0);\n    height: 200px;\n    margin-top: 50%;}\n#details>button{border-style: none; background-color: #f7bebe; border-radius: 5px;}\n#details>textarea{border-style: none; border-radius: 5px; box-shadow: 0px 5px 10px rgba(216, 216, 216, 0.616);}\n#sidebar>button:hover{\n    background-color: rgb(255, 255, 255);}\n#sidebar>*{\n    margin-left: 10px;}\n#new-project-button:hover{\n    background-color: rgb(255, 255, 255);}\n#projects-header{\n    display: flex;\n    align-items: center;\n    width: auto;\n    gap: 100px;}\nbutton{display: flex; align-items: center;}\nbutton>svg{width: 50px;}\nbutton:hover{background-color: rgba(255, 255, 255, 0.418);}\n#new-project-button{\n    display: flex;\n    align-items: center;\n    background-color: #e5e7eb00;\n    width: 80px;\n    height: 45px;\n    border-style: none;\n    border-radius: 15px;\n    gap: 5px;\n    font-size: large;}\n#main-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    grid-column-start: 2;\n    grid-column-end: 2;}\n#main-content>div{\n    background-color: white;\n    width: 50%;\n    border-radius: 10px;\n    margin-top: 10%;\n    box-shadow: 0px 5px 10px rgba(209, 209, 209, 0.596);\n    padding: 8px;\n    border-style: outset;\n    border-bottom-width: 5px;}\n#main-content>div>button{\n    background-color: #e5e7eb00;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    border-style: none;\n    border-radius: 10px;\n    border-style: none;\n    border-bottom-width: 5px;}\nul>div>button{border-style: none; background-color: #f7bebe; border-radius: 5px;\n    box-shadow: 0px px 10px rgba(204, 204, 204, 0.555);}\n#main-content>div>button:hover{\n    background-color: #b8b8b849;}\nul{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    list-style: none;}\ninput{\n    border-radius: 5px;\n    border-style: none;\n    box-shadow: 0px 2px 10px rgba(201, 201, 201, 0.493);\n    height: 25px;}\nselect{\n    border-style: none;\n    border-radius: 5px;\n    margin-left: 20%;\n    background-color: #fca5a5;}\nli{display: flex; align-items: center;gap: 10px;}\nli>button{\n    height: 30px;\n    width: 13rem;\n    font-size: 16px;\n    border-radius: 5px;\n    background-color: #e5e7eb00;\n    border-style: none;}\nli>.trash{\n    height: 30px;\n    width: 75px;\n    font-size: 16px;\n    border-radius: 5px;\n    background-color: #e5e7eb00;\n    border-style: none;\n}\nli>.trash:hover{background-color: rgb(255, 255, 255);}\nform>button{\n    text-align: center;\n    height: 30px;\n    width: 50px;\n    border-radius: 5px;\n    border-style: none;\n    box-shadow: 0px 3px 10px rgba(175, 175, 175, 0.438);\n    background-color: #f7bebe;}\nform{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    background-color: #cbd5e1;\n    padding: 8px;\n    border-radius: 5px;}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/AddProjectTodoItem.js":
/*!***********************************!*\
  !*** ./src/AddProjectTodoItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayTodoForm: () => (/* binding */ DisplayTodoForm),\n/* harmony export */   DisplayTodoList: () => (/* binding */ DisplayTodoList)\n/* harmony export */ });\n/* harmony import */ var _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreScheduleListValues */ \"./src/StoreScheduleListValues.js\");\n\nfunction DisplayTodoForm(id, project){\n    const form = document.createElement('form');\n    const todoName = document.createElement('input');\n    const description = document.createElement('textarea');\n    const dueDateInput=document.createElement('input');\n    const submitButton = document.createElement('button');\n    const cancelButton = document.createElement('button');\n\n    submitButton.textContent='Add';\n    submitButton.addEventListener('click', ()=>{form.remove();CreateListItem(todoName.value, project, dueDateInput.value, false);\n        description.id=todoName.value;\n        description.name=todoName.value;\n        _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].descriptions.push(description.value);\n        (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.SaveSiteData)();\n    });\n    cancelButton.textContent='Cancel';\n    cancelButton.addEventListener('click', ()=> form.remove());\n    todoName.placeholder='name';\n    dueDateInput.type='date';\n\n    [todoName, description, dueDateInput, submitButton, cancelButton].map((x)=>form.appendChild(x))\n    document.getElementById(id).prepend(form);\n}\nfunction DisplayTodoList(divId, ulId, project){\n    const listContainer = document.createElement('ul');\n    listContainer.id=ulId;\n    document.getElementById(divId).appendChild(listContainer);\n    DisplayListItem(ulId, project);\n}\nfunction DisplayListItem(id, project){\n    console.log(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects)\n    _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].listItemNames.map((x)=>{\n        CreateListItem(x, project, _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].calenderValues[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].listItemNames.indexOf(x)], true)\n    });\n}\nfunction RemoveListItem(project, todoName){\n    _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].listItemNames.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].listItemNames.indexOf(todoName), 1);\n    _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].calenderValues.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].listItemNames.indexOf(todoName), 1);\n    _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].descriptions.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].listItemNames.indexOf(todoName), 1);\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.SaveSiteData)();\n}\nfunction CreateListItem(todoName, project, date, loadPage){\n    const listItem = document.createElement('li');\n    const checkBox = document.createElement('input');\n    const para = document.createElement('p');\n    const dueDate = document.createElement('input');\n    const prioritySelect = document.createElement('select');\n    const descriptionButton = document.createElement('button');\n    const trash = document.createElement('button');\n\n    prioritySelect.name='Priorty';\n    for (let index = 1; index < 4; index++) {\n        const option=document.createElement('option');\n        option.value=index;\n        option.textContent=`Priority ${index}`;\n        prioritySelect.appendChild(option);\n    }\n    descriptionButton.textContent='Description'\n    descriptionButton.addEventListener('click',()=>(0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.GetDescription)(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].descriptions, _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project)].listItemNames.indexOf(todoName)));\n    trash.textContent='trash';\n    trash.addEventListener('click', ()=>{listItem.remove(); RemoveListItem(project, todoName)});\n    dueDate.type='date'\n    dueDate.value=date;\n    checkBox.type='checkbox';\n    para.textContent=todoName;\n    listItem.id=todoName;\n    \n    [checkBox, para, dueDate, prioritySelect, descriptionButton, trash].map((x)=>listItem.appendChild(x));\n    document.getElementById('project-todo-list').appendChild(listItem);\n    if(!loadPage){\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.StoreProjectListItemProperties)(project, todoName, date);\n    }\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.SaveSiteData)();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/AddProjectTodoItem.js?");

/***/ }),

/***/ "./src/AddTodoItem.js":
/*!****************************!*\
  !*** ./src/AddTodoItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateListItem: () => (/* binding */ CreateListItem),\n/* harmony export */   DisplayListItem: () => (/* binding */ DisplayListItem)\n/* harmony export */ });\n/* harmony import */ var _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreScheduleListValues */ \"./src/StoreScheduleListValues.js\");\n\n\nfunction DisplayListItem(id){\n    if(id=='todo-list'){\n        _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.map((x)=>{\n            CreateListItem(x, 'todo-list', _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayDropdownValues[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.indexOf(x)], _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayCalenderValues[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.indexOf(x)], true)\n        });\n    }else if(id=='future-todo-list'){\n        _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.map((x)=>{\n            CreateListItem(x, 'future-todo-list', _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleDropdownValues[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.indexOf(x)], _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleCalenderValues[_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.indexOf(x)], true);\n        })\n    }\n}\nfunction CreateListItem(todoName, id, dropdown, calender, loadPage){\n    const listItem = document.createElement('li');\n    const checkBox = document.createElement('input');\n    const para = document.createElement('p');\n    const prioritySelect = document.createElement('select');\n    const descriptionButton=document.createElement('button');\n    let date;\n    const trash = document.createElement('button');\n\n    id=='todo-list'?date = document.createElement('p'):date = document.createElement('input'); date.type='date';\n    date.value=calender;\n    descriptionButton.addEventListener('click',()=>id=='todo-list'?(0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.GetDescription)(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayDescriptions, _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.indexOf(todoName)):(0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.GetDescription)(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleDescriptions, _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.indexOf(todoName)));\n    prioritySelect.name='Priorty';\n    prioritySelect.value=dropdown;\n    for (let index = 1; index < 4; index++) {\n        const option=document.createElement('option');\n        option.value=index;\n        option.textContent=`Priority ${index}`;\n        prioritySelect.appendChild(option);\n    }\n    descriptionButton.textContent='Description';\n    trash.addEventListener('click', ()=>{listItem.remove(); RemoveListItem(todoName, id)});\n    trash.textContent='trash';\n    checkBox.type='checkbox';\n    para.textContent=todoName;\n    listItem.id=todoName;\n\n    [checkBox, para, prioritySelect, date, descriptionButton, trash].map((x)=>listItem.appendChild(x));\n    document.getElementById(`${id}`).appendChild(listItem);\n    if(!loadPage){\n        if(id=='todo-list'){\n            _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.push(todoName);\n            _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayCalenderValues.push(calender)\n            _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayDropdownValues.push(dropdown);\n        }else{\n            _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.push(todoName);\n            _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleCalenderValues.push(calender);\n            _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleDropdownValues.push(dropdown);\n        }\n    }\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.SaveSiteData)()\n}\nfunction RemoveListItem(todoName,listId){\n    if(listId=='todo-list'){\n        _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.map((x)=> {\n            if(x==todoName){\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.indexOf(x), 1);\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayCalenderValues.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.indexOf(x), 1);\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayDropdownValues.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.indexOf(x), 1);\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayDescriptions.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayListItems.indexOf(x), 1);\n                console.log(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.todayDescriptions);\n            }\n        })\n    }else{\n        _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.map((x)=>{\n            if(x==todoName){\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.indexOf(x), 1);\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleCalenderValues.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.indexOf(x), 1);\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleDropdownValues.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.indexOf(x), 1);\n                _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduleDescriptions.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.scheduelListItems.indexOf(x), 1);\n            }\n        });\n    }\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_0__.SaveSiteData)();\n}\n\n\n//# sourceURL=webpack://todo-list/./src/AddTodoItem.js?");

/***/ }),

/***/ "./src/StoreScheduleListValues.js":
/*!****************************************!*\
  !*** ./src/StoreScheduleListValues.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetDescription: () => (/* binding */ GetDescription),\n/* harmony export */   LoadPage: () => (/* binding */ LoadPage),\n/* harmony export */   SaveSiteData: () => (/* binding */ SaveSiteData),\n/* harmony export */   StoreProjectListItemProperties: () => (/* binding */ StoreProjectListItemProperties),\n/* harmony export */   myProjects: () => (/* binding */ myProjects),\n/* harmony export */   scheduelListItems: () => (/* binding */ scheduelListItems),\n/* harmony export */   scheduleCalenderValues: () => (/* binding */ scheduleCalenderValues),\n/* harmony export */   scheduleDescriptions: () => (/* binding */ scheduleDescriptions),\n/* harmony export */   scheduleDropdownValues: () => (/* binding */ scheduleDropdownValues),\n/* harmony export */   todayCalenderValues: () => (/* binding */ todayCalenderValues),\n/* harmony export */   todayDescriptions: () => (/* binding */ todayDescriptions),\n/* harmony export */   todayDropdownValues: () => (/* binding */ todayDropdownValues),\n/* harmony export */   todayListItems: () => (/* binding */ todayListItems)\n/* harmony export */ });\n/* harmony import */ var _updateProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateProjectList */ \"./src/updateProjectList.js\");\n/* harmony import */ var _AddTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTodoItem */ \"./src/AddTodoItem.js\");\n\n\nlet todayListItems=[];\nlet todayDropdownValues=[];\nlet todayCalenderValues=[]\nlet todayDescriptions=[];\n\nlet scheduelListItems=[];\nlet scheduleDropdownValues=[];\nlet scheduleCalenderValues=[]\nlet scheduleDescriptions=[];\n\nlet myProjects = [];\nfunction LoadPage(){\n    todayListItems= JSON.parse(localStorage.getItem('TodayListItemNames'));\n    todayDropdownValues= JSON.parse(localStorage.getItem('TodayDropdownValues'))\n    todayCalenderValues= JSON.parse(localStorage.getItem('TodayCalenderValues'));\n    todayDescriptions= JSON.parse(localStorage.getItem('TodayDescriptions'));\n\n    scheduelListItems= JSON.parse(localStorage.getItem('scheduelListItemNames'));\n    scheduleDropdownValues= JSON.parse(localStorage.getItem('scheduleDropdownValues'));\n    scheduleCalenderValues= JSON.parse(localStorage.getItem('scheduleCalenderValues'));\n    scheduleDescriptions= JSON.parse(localStorage.getItem('scheduleDescriptions'));\n\n    myProjects = JSON.parse(localStorage.getItem('projects'));\n    (0,_updateProjectList__WEBPACK_IMPORTED_MODULE_0__.DisplayProjects)();\n    (0,_AddTodoItem__WEBPACK_IMPORTED_MODULE_1__.DisplayListItem)('todo-list');\n}\nfunction SaveSiteData(){\n    localStorage.setItem('TodayListItemNames', JSON.stringify(todayListItems));\n    localStorage.setItem('TodayCalenderValues', JSON.stringify(todayCalenderValues));\n    localStorage.setItem('TodayDropdownValues', JSON.stringify(todayDropdownValues));\n    localStorage.setItem('TodayDescriptions', JSON.stringify(todayDescriptions));\n\n    localStorage.setItem('scheduelListItemNames',JSON.stringify(scheduelListItems));\n    localStorage.setItem('scheduleCalenderValues',JSON.stringify(scheduleCalenderValues));\n    localStorage.setItem('scheduleDescriptions',JSON.stringify(scheduleDescriptions));\n    localStorage.setItem('scheduleDropdownValues',JSON.stringify(scheduleDropdownValues));\n\n\n    localStorage.setItem('projects', JSON.stringify(myProjects));\n}\nfunction StoreProjectListItemProperties(project, listItem, date){\n    myProjects.map((x)=>{\n        if(x.projectName==project.projectName){\n            x.listItemNames.push(listItem);\n            x.calenderValues.push(date);\n        }\n    })\n}\nfunction GetDescription(descriptionArray, index){\n    console.log(index);\n    if(document.getElementById('description')){let element =document.getElementById('description'); element.id=element.name; element.remove();}\n    let descriptionBox = document.createElement('textarea');\n    descriptionBox.id='description';\n    descriptionBox.value = descriptionArray[index];\n    document.getElementById('details').appendChild(descriptionBox);\n    console.log(descriptionArray);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/StoreScheduleListValues.js?");

/***/ }),

/***/ "./src/SwitchScheduleView":
/*!********************************!*\
  !*** ./src/SwitchScheduleView ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayScheduleDiv: () => (/* binding */ DisplayScheduleDiv),\n/* harmony export */   DisplayTodoForm: () => (/* binding */ DisplayTodoForm),\n/* harmony export */   DisplayTodoList: () => (/* binding */ DisplayTodoList)\n/* harmony export */ });\n/* harmony import */ var _AddTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTodoItem */ \"./src/AddTodoItem.js\");\n/* harmony import */ var _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreScheduleListValues */ \"./src/StoreScheduleListValues.js\");\n\n\nfunction RemovePreviousDiv(){\n    document.getElementById('today-task')?document.getElementById('today-task').remove():document.getElementById('future-task').remove();\n}\nfunction DisplayTodoForm(id){\n    const form = document.createElement('form');\n    const todoName = document.createElement('input');\n    const description = document.createElement('textarea');\n    const prioritySelect = document.createElement('select');\n    const submitButton = document.createElement('button');\n    const cancelButton = document.createElement('button');\n    const calender=UseCalender(id);\n    \n    \n    prioritySelect.name='Priority';\n    for (let index = 1; index < 4; index++) {\n        const option=document.createElement('option');\n        option.value=index;\n        option.textContent=`Priority ${index}`;\n        prioritySelect.appendChild(option);\n    }\n    \n    submitButton.textContent='Add';\n    submitButton.addEventListener('click', ()=>{form.remove();\n        description.name=todoName.value;\n        id=='todo-list'?_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.todayDescriptions.push(description.value):_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.scheduleDescriptions.push(description.value);\n        (0,_AddTodoItem__WEBPACK_IMPORTED_MODULE_0__.CreateListItem)(todoName.value, id, prioritySelect.value, calender.value, false);\n    });\n    \n    cancelButton.textContent='Cancel';\n    cancelButton.addEventListener('click', ()=> form.remove());\n    todoName.placeholder='name';\n\n    [todoName, description, prioritySelect, calender, submitButton, cancelButton].map((x)=>form.appendChild(x))\n    document.getElementById(id).prepend(form);\n}\nfunction UseCalender(id){\n    if(id=='future-todo-list'){\n    const calender = document.createElement('input');\n    calender.type='date';\n    return calender;\n    }else return document.createElement('p');\n}\nfunction DisplayTodoList(divId, ulId){\n    const listContainer = document.createElement('ul');\n    listContainer.id=ulId;\n    document.getElementById(divId).appendChild(listContainer);\n    (0,_AddTodoItem__WEBPACK_IMPORTED_MODULE_0__.DisplayListItem)(ulId);\n}\nfunction DisplayScheduleDiv(id, divName){\n    RemovePreviousDiv();\n    const container = document.createElement('div');\n    const header = document.createElement('h2');\n    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');\n    const newTodo=document.createElement('button');\n\n    newTodo.textContent='';\n    newTodo.addEventListener('click', ()=>DisplayTodoForm(TodayOrFuture(id)));\n    svg.setAttribute('xmnls', \"http://www.w3.org/2000/svg\");\n    svg.setAttribute('viewBox', \"0 0 24 24\");\n    svgPath.setAttributeNS(null,'d', \"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\");\n    container.id=id;\n    header.textContent=divName;\n\n    document.getElementById('main-content').prepend(container);\n    DisplayTodoList(id, TodayOrFuture(id));\n    svg.append(svgPath);\n    newTodo.appendChild(svg);\n    container.appendChild(newTodo);\n    container.prepend(header);\n}\nfunction TodayOrFuture(selected){\n    if(selected=='today-task'){return 'todo-list'}else{return 'future-todo-list'}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/SwitchScheduleView?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SwitchScheduleView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchScheduleView */ \"./src/SwitchScheduleView\");\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StoreScheduleListValues */ \"./src/StoreScheduleListValues.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n(0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_2__.LoadPage)();\n(0,_newproject__WEBPACK_IMPORTED_MODULE_1__.ImplementNewProjectButton)();\n\ndocument.getElementById('today-button').addEventListener('click', ()=> (0,_SwitchScheduleView__WEBPACK_IMPORTED_MODULE_0__.DisplayScheduleDiv)('today-task', 'Today'));\ndocument.getElementById('upcoming-button').addEventListener('click', ()=> (0,_SwitchScheduleView__WEBPACK_IMPORTED_MODULE_0__.DisplayScheduleDiv)('future-task','Schedule'));\ndocument.getElementById('new-todo-button').addEventListener('click', ()=> (0,_SwitchScheduleView__WEBPACK_IMPORTED_MODULE_0__.DisplayTodoForm)('todo-list'));\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImplementNewProjectButton: () => (/* binding */ ImplementNewProjectButton),\n/* harmony export */   myProjects: () => (/* reexport safe */ _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.myProjects)\n/* harmony export */ });\n/* harmony import */ var _updateProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateProjectList */ \"./src/updateProjectList.js\");\n/* harmony import */ var _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreScheduleListValues */ \"./src/StoreScheduleListValues.js\");\n\n\n\n\nfunction ImplementNewProjectButton(){\nconst newProjectButton = document.getElementById('new-project-button');\nnewProjectButton.addEventListener('click', ()=>CreateNameProjectInput());\n}\n\nfunction MakeProject(name){\n    const theProject = new Project(name);\n    _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.myProjects.push(theProject);\n    (0,_updateProjectList__WEBPACK_IMPORTED_MODULE_0__.Update)(theProject);\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.SaveSiteData)();\n}\n\nfunction Project (name){\n        let projectName = name;\n        let listItemNames=[];\n        let calenderValues=[];\n        let dropdownValues=[];\n        let descriptions=[];\n        return{projectName, listItemNames, calenderValues, dropdownValues, descriptions}\n}\nfunction CreateNameProjectInput(){\n    const container = document.createElement('div');\n    const inputName = document.createElement('input');\n    const addButton = document.createElement('button');\n    const cancelButton = document.createElement('button');\n\n    inputName.placeholder='project name';\n    addButton.textContent='add';\n    cancelButton.textContent='cancel';\n\n    addButton.onclick=()=>{container.remove(); MakeProject(inputName.value); (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.SaveSiteData)();}\n    cancelButton.onclick=()=>container.remove();\n\n    container.appendChild(inputName);\n    container.appendChild(addButton);\n    container.appendChild(cancelButton);\n\n    document.getElementById('list-of-projects').prepend(container);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/newproject.js?");

/***/ }),

/***/ "./src/updateProjectList.js":
/*!**********************************!*\
  !*** ./src/updateProjectList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayProjects: () => (/* binding */ DisplayProjects),\n/* harmony export */   Update: () => (/* binding */ Update)\n/* harmony export */ });\n/* harmony import */ var _AddProjectTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProjectTodoItem */ \"./src/AddProjectTodoItem.js\");\n/* harmony import */ var _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreScheduleListValues */ \"./src/StoreScheduleListValues.js\");\n\n\nfunction Update(project){\n    const listItem = document.createElement('li');\n    const newProject = document.createElement('button');\n    const deleteProject = document.createElement('button');\n    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');\n\n    svg.setAttribute('xmnls', \"http://www.w3.org/2000/svg\");\n    svg.setAttribute('viewBox', \"0 0 40 24\");\n    svgPath.setAttributeNS(null,'d', \"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z\");\n    svg.append(svgPath);\n\n    deleteProject.classList.add('trash');\n    deleteProject.appendChild(svg);\n    deleteProject.addEventListener('click', ()=> {listItem.remove();RemoveProject(x)})\n    newProject.addEventListener('click', ()=>MakeProjectDiv(project));\n    newProject.textContent=project.projectName;\n    listItem.appendChild(newProject);\n    listItem.appendChild(deleteProject);\n    document.getElementById('list-of-projects').appendChild(listItem);\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.SaveSiteData)();\n    \n}\nfunction DisplayProjects(){\n    _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.myProjects.map((x)=>{const listItem = document.createElement('li');\n    const newProject = document.createElement('button');\n    const deleteProject = document.createElement('button');\n    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');\n\n    svg.setAttribute('xmnls', \"http://www.w3.org/2000/svg\");\n    svg.setAttribute('viewBox', \"0 0 40 24\");\n    svgPath.setAttributeNS(null,'d', \"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z\");\n    svg.append(svgPath);\n\n    deleteProject.classList.add('trash');\n    deleteProject.appendChild(svg);\n    deleteProject.addEventListener('click', ()=> {listItem.remove();RemoveProject(x)})\n    newProject.addEventListener('click', ()=>MakeProjectDiv(x));\n    newProject.textContent=x.projectName;\n    \n    listItem.appendChild(newProject);\n    listItem.appendChild(deleteProject);\n    document.getElementById('list-of-projects').appendChild(listItem);})\n    \n}\nfunction RemoveProject(projects){\n    _StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.myProjects.splice(_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.myProjects.indexOf(projects), 1);\n    (0,_StoreScheduleListValues__WEBPACK_IMPORTED_MODULE_1__.SaveSiteData)();\n}\n\nfunction MakeProjectDiv(project){\n    if(document.getElementById('Project-div'))document.getElementById('Project-div').remove();\n    const projectDiv = document.createElement('div');\n    const header = document.createElement('h2');\n    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');\n    const newTodo=document.createElement('button');\n\n    newTodo.textContent='';\n    newTodo.addEventListener('click', ()=> (0,_AddProjectTodoItem__WEBPACK_IMPORTED_MODULE_0__.DisplayTodoForm)('project-todo-list', project));\n    svg.setAttribute('xmnls', \"http://www.w3.org/2000/svg\");\n    svg.setAttribute('viewBox', \"0 0 24 24\");\n    svgPath.setAttributeNS(null,'d', \"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\");\n    svg.append(svgPath);\n    newTodo.appendChild(svg);\n    projectDiv.id='Project-div';\n    header.textContent=project.projectName;\n\n    document.getElementById('main-content').appendChild(projectDiv);\n    (0,_AddProjectTodoItem__WEBPACK_IMPORTED_MODULE_0__.DisplayTodoList)('Project-div','project-todo-list', project);\n    projectDiv.appendChild(newTodo);\n    projectDiv.prepend(header);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/updateProjectList.js?");

/***/ }),

/***/ "./src/Raleway/Raleway-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/Raleway/Raleway-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e14d84ccec6be3ff19e3.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/Raleway/Raleway-VariableFont_wght.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;