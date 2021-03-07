webpackHotUpdate_N_E("pages/index",{

/***/ "./components/articles.js":
/*!********************************!*\
  !*** ./components/articles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tony_Developer_Freelance_tummystuff_front_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ \"./components/template.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/tony/Developer/Freelance/tummystuff-front/components/articles.js\",\n    _this = undefined;\n\n\n // material ui\n\n\n\nvar Articles = function Articles(_ref) {\n  var articles = _ref.articles;\n\n  var reversedArticles = Object(_Users_tony_Developer_Freelance_tummystuff_front_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(articles).reverse();\n\n  var leftArticlesCount = Math.ceil(reversedArticles.length / 3);\n  var leftArticles = reversedArticles.slice(0, leftArticlesCount);\n  var rightArticles = reversedArticles.slice(leftArticlesCount, reversedArticles.length);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    container: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      item: true,\n      xs: 12,\n      md: 6,\n      children: leftArticles.map(function (article) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          article: article\n        }, \"article__\".concat(article.id), false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 18\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      item: true,\n      xs: 12,\n      md: 6,\n      children: rightArticles.map(function (article) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          article: article\n        }, \"article__\".concat(article.id), false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 18\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\n\nvar _c;\n\n$RefreshReg$(_c, \"Articles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlcy5qcz8xMzQ2Il0sIm5hbWVzIjpbIkFydGljbGVzIiwiYXJ0aWNsZXMiLCJyZXZlcnNlZEFydGljbGVzIiwicmV2ZXJzZSIsImxlZnRBcnRpY2xlc0NvdW50IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJsZWZ0QXJ0aWNsZXMiLCJzbGljZSIsInJpZ2h0QXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDakMsTUFBTUMsZ0JBQWdCLEdBQUcsNEtBQUlELFFBQUosRUFBY0UsT0FBZCxFQUF6Qjs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLGdCQUFnQixDQUFDSyxNQUFqQixHQUEwQixDQUFwQyxDQUExQjtBQUNBLE1BQU1DLFlBQVksR0FBR04sZ0JBQWdCLENBQUNPLEtBQWpCLENBQXVCLENBQXZCLEVBQTBCTCxpQkFBMUIsQ0FBckI7QUFDQSxNQUFNTSxhQUFhLEdBQUdSLGdCQUFnQixDQUFDTyxLQUFqQixDQUNwQkwsaUJBRG9CLEVBRXBCRixnQkFBZ0IsQ0FBQ0ssTUFGRyxDQUF0QjtBQUtBLHNCQUNFLHFFQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUEsNEJBQ0UscUVBQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBQSxnQkFDR0MsWUFBWSxDQUFDRyxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM3Qiw0QkFBTyxxRUFBQyxpREFBRDtBQUFVLGlCQUFPLEVBQUVBO0FBQW5CLDhCQUE2Q0EsT0FBTyxDQUFDQyxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLDhEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQUEsZ0JBQ0dILGFBQWEsQ0FBQ0MsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQWE7QUFDOUIsNEJBQU8scUVBQUMsaURBQUQ7QUFBVSxpQkFBTyxFQUFFQTtBQUFuQiw4QkFBNkNBLE9BQU8sQ0FBQ0MsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELE9BRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXhCRDs7S0FBTWIsUTtBQTBCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2FydGljbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnXG5cbi8vIG1hdGVyaWFsIHVpXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xuXG5jb25zdCBBcnRpY2xlcyA9ICh7IGFydGljbGVzIH0pID0+IHtcbiAgY29uc3QgcmV2ZXJzZWRBcnRpY2xlcyA9IFsuLi5hcnRpY2xlc10ucmV2ZXJzZSgpXG5cbiAgY29uc3QgbGVmdEFydGljbGVzQ291bnQgPSBNYXRoLmNlaWwocmV2ZXJzZWRBcnRpY2xlcy5sZW5ndGggLyAzKVxuICBjb25zdCBsZWZ0QXJ0aWNsZXMgPSByZXZlcnNlZEFydGljbGVzLnNsaWNlKDAsIGxlZnRBcnRpY2xlc0NvdW50KVxuICBjb25zdCByaWdodEFydGljbGVzID0gcmV2ZXJzZWRBcnRpY2xlcy5zbGljZShcbiAgICBsZWZ0QXJ0aWNsZXNDb3VudCxcbiAgICByZXZlcnNlZEFydGljbGVzLmxlbmd0aFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICB7bGVmdEFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8VGVtcGxhdGUgYXJ0aWNsZT17YXJ0aWNsZX0ga2V5PXtgYXJ0aWNsZV9fJHthcnRpY2xlLmlkfWB9IC8+XG4gICAgICAgIH0pfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAge3JpZ2h0QXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUZW1wbGF0ZSBhcnRpY2xlPXthcnRpY2xlfSBrZXk9e2BhcnRpY2xlX18ke2FydGljbGUuaWR9YH0gLz5cbiAgICAgICAgfSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/articles.js\n");

/***/ })

})