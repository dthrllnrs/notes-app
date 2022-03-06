"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_RegisterPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      payload: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      _event_bus__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('showLoading');
      this.$store.dispatch('auth/register', this.payload).then(function () {
        _this.$router.replace({
          path: "/login"
        });
      })["catch"](function (err) {
        console.log(err);
      })["finally"](function () {
        _event_bus__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('hideLoading');
      });
    },
    checkAuth: function checkAuth() {
      this.$store.dispatch('auth/check');
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/auth/RegisterPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/auth/RegisterPage.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=template&id=30eb5a60& */ "./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&");
/* harmony import */ var _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/RegisterPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=template&id=30eb5a60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "text-center",
                  attrs: { "bg-variant": "light", header: "Register" },
                },
                [
                  _c(
                    "b-form",
                    { staticClass: "text-left" },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Name:" } },
                        [
                          _c("b-form-input", {
                            model: {
                              value: _vm.payload.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "name", $$v)
                              },
                              expression: "payload.name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { attrs: { label: "Email:" } },
                        [
                          _c("b-form-input", {
                            attrs: { type: "email" },
                            model: {
                              value: _vm.payload.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "email", $$v)
                              },
                              expression: "payload.email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { attrs: { label: "Password" } },
                        [
                          _c("b-form-input", {
                            attrs: { type: "password" },
                            model: {
                              value: _vm.payload.password,
                              callback: function ($$v) {
                                _vm.$set(_vm.payload, "password", $$v)
                              },
                              expression: "payload.password",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { attrs: { label: "Confirm Password" } },
                        [
                          _c("b-form-input", {
                            attrs: { type: "password" },
                            model: {
                              value: _vm.payload.password_confirmation,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.payload,
                                  "password_confirmation",
                                  $$v
                                )
                              },
                              expression: "payload.password_confirmation",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "w-50",
                              attrs: { variant: "info", size: "sm" },
                              on: { click: _vm.login },
                            },
                            [_vm._v("Register")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center mt-3 pt-3 border-top" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "w-50",
                          attrs: {
                            variant: "info",
                            size: "sm",
                            href: "/login",
                          },
                        },
                        [_vm._v("Login To Existing An Account")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);