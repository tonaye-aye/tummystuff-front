webpackHotUpdate_N_E("pages/index",{

/***/ "./components/template.js":
/*!********************************!*\
  !*** ./components/template.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n\n\nvar _jsxFileName = \"/Users/tony/Developer/Freelance/tummystuff-front/components/template.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // material ui\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      marginBottom: theme.spacing(4),\n      background: '#f7f7f7'\n    },\n    cardContent: {\n      padding: '25px 25px 16px'\n    },\n    cardActions: {\n      padding: '4px 25px 12px',\n      justifyContent: 'flex-end'\n    }\n  };\n});\n\nvar Template = function Template(_ref) {\n  _s();\n\n  var article = _ref.article;\n  var classes = useStyles();\n  var imageUrl = article.image.url.startsWith('/') ? process.env.API_URL + article.image.url : article.image.url;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: classes.root,\n    elevation: 0,\n    color: \"primary\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      component: \"img\",\n      image: imageUrl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: classes.cardContent,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        gutterBottom: true,\n        variant: \"h5\",\n        component: \"h2\",\n        className: \"articleTitle\",\n        children: article.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        variant: \"caption\",\n        color: \"textSecondary\",\n        component: \"p\",\n        children: [article.content.slice(0, 150), \"...\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      className: classes.cardActions,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        as: \"/article/\".concat(article.id),\n        href: \"/article/[id]\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          children: \"Read More\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Template, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Template;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Template);\n\nvar _c;\n\n$RefreshReg$(_c, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZS5qcz8xNWQ1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsImNhcmRDb250ZW50IiwicGFkZGluZyIsImNhcmRBY3Rpb25zIiwianVzdGlmeUNvbnRlbnQiLCJUZW1wbGF0ZSIsImFydGljbGUiLCJjbGFzc2VzIiwiaW1hZ2VVcmwiLCJpbWFnZSIsInVybCIsInN0YXJ0c1dpdGgiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsInRpdGxlIiwiY29udGVudCIsInNsaWNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGtCQUFZLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FEVjtBQUVKQyxnQkFBVSxFQUFFO0FBRlIsS0FEaUM7QUFLdkNDLGVBQVcsRUFBRTtBQUNYQyxhQUFPLEVBQUU7QUFERSxLQUwwQjtBQVF2Q0MsZUFBVyxFQUFFO0FBQ1hELGFBQU8sRUFBRSxlQURFO0FBRVhFLG9CQUFjLEVBQUU7QUFGTDtBQVIwQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFjQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNoQyxNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxNQUFNYyxRQUFRLEdBQUdGLE9BQU8sQ0FBQ0csS0FBUixDQUFjQyxHQUFkLENBQWtCQyxVQUFsQixDQUE2QixHQUE3QixJQUNiQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWixHQUFzQlIsT0FBTyxDQUFDRyxLQUFSLENBQWNDLEdBRHZCLEdBRWJKLE9BQU8sQ0FBQ0csS0FBUixDQUFjQyxHQUZsQjtBQUlBLHNCQUNFLHFFQUFDLDhEQUFEO0FBQU0sYUFBUyxFQUFFSCxPQUFPLENBQUNWLElBQXpCO0FBQStCLGFBQVMsRUFBRSxDQUExQztBQUE2QyxTQUFLLEVBQUMsU0FBbkQ7QUFBQSw0QkFDRSxxRUFBQyxtRUFBRDtBQUFXLGVBQVMsRUFBQyxLQUFyQjtBQUEyQixXQUFLLEVBQUVXO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLHFFQUFEO0FBQWEsZUFBUyxFQUFFRCxPQUFPLENBQUNOLFdBQWhDO0FBQUEsOEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxvQkFBWSxNQURkO0FBRUUsZUFBTyxFQUFDLElBRlY7QUFHRSxpQkFBUyxFQUFDLElBSFo7QUFJRSxpQkFBUyxFQUFDLGNBSlo7QUFBQSxrQkFNR0ssT0FBTyxDQUFDUztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLFNBQXBCO0FBQThCLGFBQUssRUFBQyxlQUFwQztBQUFvRCxpQkFBUyxFQUFDLEdBQTlEO0FBQUEsbUJBQ0dULE9BQU8sQ0FBQ1UsT0FBUixDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsQ0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQWVFLHFFQUFDLHFFQUFEO0FBQWEsZUFBUyxFQUFFVixPQUFPLENBQUNKLFdBQWhDO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFFLHFCQUFjRyxPQUFPLENBQUNZLEVBQXRCLENBQVI7QUFBb0MsWUFBSSxFQUFDLGVBQXpDO0FBQUEsK0JBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBOUJEOztHQUFNYixRO1VBQ1lYLFM7OztLQURaVyxRO0FBZ0NTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGVtcGxhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIG1hdGVyaWFsIHVpXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucydcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBiYWNrZ3JvdW5kOiAnI2Y3ZjdmNydcbiAgfSxcbiAgY2FyZENvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiAnMjVweCAyNXB4IDE2cHgnXG4gIH0sXG4gIGNhcmRBY3Rpb25zOiB7XG4gICAgcGFkZGluZzogJzRweCAyNXB4IDEycHgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gIH1cbn0pKVxuXG5jb25zdCBUZW1wbGF0ZSA9ICh7IGFydGljbGUgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICBjb25zdCBpbWFnZVVybCA9IGFydGljbGUuaW1hZ2UudXJsLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcHJvY2Vzcy5lbnYuQVBJX1VSTCArIGFydGljbGUuaW1hZ2UudXJsXG4gICAgOiBhcnRpY2xlLmltYWdlLnVybFxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGVsZXZhdGlvbj17MH0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICA8Q2FyZE1lZGlhIGNvbXBvbmVudD1cImltZ1wiIGltYWdlPXtpbWFnZVVybH0gLz5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENvbnRlbnR9PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVUaXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICB7YXJ0aWNsZS5jb250ZW50LnNsaWNlKDAsIDE1MCl9Li4uXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnMgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRBY3Rpb25zfT5cbiAgICAgICAgPExpbmsgYXM9e2AvYXJ0aWNsZS8ke2FydGljbGUuaWR9YH0gaHJlZj1cIi9hcnRpY2xlL1tpZF1cIj5cbiAgICAgICAgICA8QnV0dG9uPlJlYWQgTW9yZTwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/template.js\n");

/***/ })

})