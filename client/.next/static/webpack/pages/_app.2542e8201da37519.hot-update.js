"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\n//import { Router } from 'express';\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = antd__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, SubMenu = antd__WEBPACK_IMPORTED_MODULE_9__.Menu.SubMenu, ItemGroup = antd__WEBPACK_IMPORTED_MODULE_9__.Menu.ItemGroup;\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), current = ref[0], setCurrent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context), state = ref1.state, dispatch = ref1.dispatch;\n    var user = state.user;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    //console.log(user);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setCurrent( true && window.location.pathname);\n        // if (process.browser){ setCurrent(window.location.pathname)};\n        console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    var logout = function() {\n        var _ref = _asyncToGenerator(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        dispatch({\n                            type: \"LOGOUT\"\n                        });\n                        window.localStorage.removeItem(\"user\");\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/api/logout\");\n                    case 4:\n                        data = _ctx.sent.data;\n                        (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(data.message);\n                        router.push('/login');\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                onClick: function(e) {\n                    return setCurrent(e.key);\n                },\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        children: \"Suggestions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 43,\n                        columnNumber: 24\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, \"/\", false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, _this),\n            user && (user.role && user.role.includes(\"instructor\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                onClick: function(e) {\n                    return setCurrent(e.key);\n                },\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.ExperimentOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/instructor\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        children: \"Instructor Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 49,\n                        columnNumber: 38\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, _this)\n            }, \"/instructor\", false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                onClick: function(e) {\n                    return setCurrent(e.key);\n                },\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.UserSwitchOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/user/become-instructor\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        children: \"Become Instructor\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 54,\n                        columnNumber: 50\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, _this)\n            }, \"/user/become-instructor\", false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, _this)),\n            user === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                        onClick: function(e) {\n                            return setCurrent(e.key);\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 62,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, _this)\n                    }, \"/login\", false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                        onClick: function(e) {\n                            return setCurrent(e.key);\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/register\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 67,\n                                columnNumber: 40\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, _this)\n                    }, \"/register\", false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true),\n            user !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SubMenu, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.CoffeeOutlined, {}, void 0, false, void 0, void 0),\n                title: user && user.name,\n                className: \"float-right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ItemGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, _this)\n                        }, \"/user\", false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                            onClick: logout,\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                            className: \"float-right\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 81,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this));\n};\n_s(TopNav, \"bp+2bVN8wLZqmKZUSZ90tmfaZqo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRWMsSUFBSSw4RUFBRzNDLDhEQUFjOzRCQUFJdUMsU0FBUyxFQUFDLENBQWE7c0NBQUMsQ0FFeEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCLENBQUM7R0F2RUt4QixNQUFNOztRQUtPSixrREFBUzs7O0tBTHRCSSxNQUFNO0FBeUVaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BOYXYuanM/OWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7QXBwc3RvcmVPdXRsaW5lZCwgTG9naW5PdXRsaW5lZCwgVXNlckFkZE91dGxpbmVkLFxyXG4gICAgIExvZ291dE91dGxpbmVkLCBDb2ZmZWVPdXRsaW5lZCwgRXhwZXJpbWVudE91dGxpbmVkLCBVc2VyU3dpdGNoT3V0bGluZWR9XHJcbiBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJlYWN0RG9tIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuLy9pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCB7SXRlbSwgU3ViTWVudSwgSXRlbUdyb3VwfSA9IE1lbnU7XHJcblxyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiAgICBjb25zdCB7dXNlcn0gPSBzdGF0ZTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50KHByb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgLy8gaWYgKHByb2Nlc3MuYnJvd3Nlcil7IHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKX07XHJcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiTE9HT1VUXCJ9KTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvbG9nb3V0XCIpO1xyXG4gICAgICAgIHRvYXN0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPEl0ZW0ga2V5PVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX0gaWNvbj17PEFwcHN0b3JlT3V0bGluZWQvPn0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5TdWdnZXN0aW9uczwvYT48L0xpbms+XHJcblxyXG4gICAgICAgIDwvSXRlbT5cclxuXHJcbiAgICAgICAge3VzZXIgJiYgKHVzZXIucm9sZSAmJiB1c2VyLnJvbGUuaW5jbHVkZXMoXCJpbnN0cnVjdG9yXCIpID8gKCBcclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL2luc3RydWN0b3JcIiBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9IGljb249ezxFeHBlcmltZW50T3V0bGluZWQvPn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5zdHJ1Y3RvclwiPjxhPkluc3RydWN0b3IgRGFzaGJvYXJkPC9hPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvdXNlci9iZWNvbWUtaW5zdHJ1Y3RvclwiIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX0gaWNvbj17PFVzZXJTd2l0Y2hPdXRsaW5lZC8+fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL2JlY29tZS1pbnN0cnVjdG9yXCI+PGE+QmVjb21lIEluc3RydWN0b3I8L2E+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICB7dXNlciA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBrZXk9XCIvbG9naW5cIiBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9IGljb249ezxMb2dpbk91dGxpbmVkLz59PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZ2luPC9hPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3JlZ2lzdGVyXCIgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfSBpY29uPXs8VXNlckFkZE91dGxpbmVkLz59PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPjxhPnJlZ2lzdGVyPC9hPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsgdXNlciAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgIDxTdWJNZW51IGljb249ezxDb2ZmZWVPdXRsaW5lZC8+fSB0aXRsZT17dXNlciAmJiB1c2VyLm5hbWV9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8SXRlbUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtIGtleT1cIi91c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkRhc2hib2FyZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17bG9nb3V0fSBpY29uPXs8TG9nb3V0T3V0bGluZWQvPn0gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICApfSAgICBcclxuICAgIDwvTWVudT5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjsiXSwibmFtZXMiOlsiTWVudSIsIkxpbmsiLCJBcHBzdG9yZU91dGxpbmVkIiwiTG9naW5PdXRsaW5lZCIsIlVzZXJBZGRPdXRsaW5lZCIsIkxvZ291dE91dGxpbmVkIiwiQ29mZmVlT3V0bGluZWQiLCJFeHBlcmltZW50T3V0bGluZWQiLCJVc2VyU3dpdGNoT3V0bGluZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJyZWFjdERvbSIsIkNvbnRleHQiLCJheGlvcyIsInRvYXN0IiwidXNlUm91dGVyIiwiSXRlbSIsIlN1Yk1lbnUiLCJJdGVtR3JvdXAiLCJUb3BOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwicm91dGVyIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsImxvZ291dCIsImRhdGEiLCJ0eXBlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImdldCIsIm1lc3NhZ2UiLCJwdXNoIiwibW9kZSIsInNlbGVjdGVkS2V5cyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJlIiwia2V5IiwiaWNvbiIsImhyZWYiLCJhIiwicm9sZSIsImluY2x1ZGVzIiwidGl0bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ })

});