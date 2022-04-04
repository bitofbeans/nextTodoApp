"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home({ data  }) {\n    const name = data.name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\~Programming\\\\Web Dev\\\\Projects\\\\Websites\\\\jsBookWebsite\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"His name was \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\~Programming\\\\Web Dev\\\\Projects\\\\Websites\\\\jsBookWebsite\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\~Programming\\\\Web Dev\\\\Projects\\\\Websites\\\\jsBookWebsite\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await fetch(`http://localhost:3000/api`);\n    const data = await res.json();\n    // Pass data to the page via props\n    return {\n        props: {\n            data\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQSxTQUFTQSxJQUFJLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFFcEIsTUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNDLElBQUk7SUFDdEIscUJBQ0ksOERBQUNDLE1BQUk7OzBCQUNELDhEQUFDQyxJQUFFOzBCQUFDLE1BQUk7Ozs7O29CQUFLOzBCQUNiLDhEQUFDQyxHQUFDOztvQkFBQyxlQUFhO29CQUFDSCxJQUFJOzs7Ozs7b0JBQUs7Ozs7OztZQUN2QixDQUNUO0NBQ0w7QUFFTSxlQUFlSSxrQkFBa0IsR0FBRztJQUN2QywrQkFBK0I7SUFDL0IsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDcEQsTUFBTVAsSUFBSSxHQUFHLE1BQU1NLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBRTdCLGtDQUFrQztJQUNsQyxPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFVCxJQUFJO1NBQUU7S0FBRSxDQUFDO0NBQzlCO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2std2Vic2l0ZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8aDE+SG9tZTwvaDE+XHJcbiAgICAgICAgICAgIDxwPkhpcyBuYW1lIHdhcyB7bmFtZX08L3A+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIkhvbWUiLCJkYXRhIiwibmFtZSIsIm1haW4iLCJoMSIsInAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();