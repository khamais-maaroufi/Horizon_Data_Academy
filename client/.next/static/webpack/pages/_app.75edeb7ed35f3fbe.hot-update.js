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

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"Provider\": function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//initial state\nvar initialState = {\n    user: null\n};\n//create context\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\n//root reducer\nvar rootReducer = function(state, action) {\n    switch(action.type){\n        case \"LOGIN\":\n            return _objectSpread({}, state, {\n                user: action.payload\n            });\n        case \"LOGOUT\":\n            return _objectSpread({}, state, {\n                user: null\n            });\n        default:\n            return state;\n    }\n};\n//context provider\nvar Provider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(rootReducer, initialState), state = ref[0], dispatch = ref[1];\n    //router\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem('user'))\n        });\n    }, []);\n    axios__WEBPACK_IMPORTED_MODULE_3___default().interceptors.response.use(function(response) {\n        //any status code that lie within status 2xx will trigger this code\n        return response;\n    }, function(error) {\n        //any status code that lie outside the status 2xx will trigger this code\n        var res = error.response;\n        //401 is the unauthorized error\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            return new Promise(function(resolve, reject) {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().get('api/logout').then(function(data) {\n                    console.log(\"401 ERROR > logout\");\n                    dispatch({\n                        type: 'LOGOUT'\n                    });\n                    window.localStorage.removeItem('user');\n                    rooter.push('/login');\n                }).catch(function(err) {\n                    console.log(\"AXIOS INTERCEPTORS ERR\", err);\n                    reject(error);\n                });\n            });\n        }\n        ;\n        return promise.reject(error);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getCsrfToken = function() {\n            var _ref = _asyncToGenerator(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/csrf-token');\n                        case 2:\n                            data = _ctx.sent.data;\n                            console.log('csrf', data);\n                            (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers[\"X-CSRF-TOKEN\"]) = data.getCsrfToken;\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getCsrfToken() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getCsrfToken();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Context.Provider, {\n        value: {\n            state: state,\n            dispatch: dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\context\\\\index.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, _this));\n};\n_s(Provider, \"hRQUaZf1jR1Dml81Xs/rVwS95Ys=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Provider;\n\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUx2QixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUssQ0FBQzBDLFlBQVk7Nk1BQUcsUUFBUSxXQUFJLENBQUM7b0JBQzNCVCxJQUFJOzs7OzttQ0FBVWhDLGdEQUFTLENBQUMsQ0FBaUI7OzRCQUF6Q2dDLElBQUksYUFBSkEsSUFBSTs0QkFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFRixJQUFJOzRCQUN4QmhDLCtFQUFxQyxHQUFJZ0MsSUFBSSxDQUFDUyxZQUFZOzs7Ozs7WUFDOUQsQ0FBQzs0QkFKU0EsWUFBWTs7OztRQUtsQkEsWUFBWTtJQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDRHJDLE9BQU8sQ0FBQ00sUUFBUTtRQUFDa0MsS0FBSyxFQUFFLENBQUNyQztZQUFBQSxLQUFLLEVBQUxBLEtBQUs7WUFBRUssUUFBUSxFQUFSQSxRQUFRO1FBQUEsQ0FBQztrQkFBR0QsUUFBUTs7Ozs7O0FBRTdELENBQUM7R0FsREtELFFBQVE7O1FBSUNULGtEQUFTOzs7S0FKbEJTLFFBQVE7QUFvRGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuLy9pbml0aWFsIHN0YXRlXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjogbnVsbCxcbn07XG5cbi8vY3JlYXRlIGNvbnRleHRcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vcm9vdCByZWR1Y2VyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJMT0dJTlwiOlxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgICAgY2FzZSBcIkxPR09VVFwiOlxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcbi8vY29udGV4dCBwcm92aWRlclxuXG5jb25zdCBQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4vL3JvdXRlclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcIkxPR0lOXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSxcblxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgICBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAvL2FueSBzdGF0dXMgY29kZSB0aGF0IGxpZSB3aXRoaW4gc3RhdHVzIDJ4eCB3aWxsIHRyaWdnZXIgdGhpcyBjb2RlXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0sZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgLy9hbnkgc3RhdHVzIGNvZGUgdGhhdCBsaWUgb3V0c2lkZSB0aGUgc3RhdHVzIDJ4eCB3aWxsIHRyaWdnZXIgdGhpcyBjb2RlXG4gICAgICAgICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICAgICAgICAvLzQwMSBpcyB0aGUgdW5hdXRob3JpemVkIGVycm9yXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcGkvbG9nb3V0JylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNDAxIEVSUk9SID4gbG9nb3V0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdMT0dPVVQnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Rlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVhJT1MgSU5URVJDRVBUT1JTIEVSUlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0Q3NyZlRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY3NyZi10b2tlbicpO1xuICAgICAgICBjb25zb2xlLmxvZygnY3NyZicsIGRhdGEpO1xuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IGRhdGEuZ2V0Q3NyZlRva2VuO1xuICAgIH1cbiAgICAgICAgZ2V0Q3NyZlRva2VuKCk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c3RhdGUsIGRpc3BhdGNofX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuIGV4cG9ydCB7IENvbnRleHQsIFByb3ZpZGVyIH07Il0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiQ29udGV4dCIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInJvdXRlciIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsInJvb3RlciIsInB1c2giLCJjYXRjaCIsImVyciIsInByb21pc2UiLCJnZXRDc3JmVG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ })

});