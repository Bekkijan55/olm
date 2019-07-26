(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/insts/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _inst_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inst-form */ "./resources/js/src/views/pages/insts/inst-form.vue");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      insts: {
        id: '',
        inst_uz: '',
        inst_uz2: '',
        inst_ru: ''
      },
      popup: false
    };
  },
  components: {
    InstForm: _inst_form__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.fetchInst();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['inst'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchInst']), {
    editInst: function editInst(val) {
      Object.assign(this.insts, val);
    },
    updateInst: function updateInst() {
      var _this = this;

      this.$store.dispatch('editInst', this.insts).then(function () {
        _this.popup = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/inst-form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/insts/inst-form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      insts: {
        inst_uz: '',
        inst_uz2: '',
        inst_ru: ''
      },
      popup: false
    };
  },
  methods: {
    storeInst: function storeInst() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$store.dispatch('addInst', _this.insts).then(function () {
            _this.popup = false;
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/index.vue?vue&type=template&id=2216ed4b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/insts/index.vue?vue&type=template&id=2216ed4b& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Add Institution", active: _vm.popup },
          on: {
            "update:active": function($event) {
              _vm.popup = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-col w-full mb-base" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateInst($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "Institut",
                          placeholder: "Institut",
                          name: "Institut"
                        },
                        model: {
                          value: _vm.insts.inst_uz,
                          callback: function($$v) {
                            _vm.$set(_vm.insts, "inst_uz", $$v)
                          },
                          expression: "insts.inst_uz"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Institut")))
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "Институт",
                          placeholder: "Институт",
                          name: "Институт"
                        },
                        model: {
                          value: _vm.insts.inst_uz2,
                          callback: function($$v) {
                            _vm.$set(_vm.insts, "inst_uz2", $$v)
                          },
                          expression: "insts.inst_uz2"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Институт")))
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "Институт",
                          placeholder: "Институт",
                          name: "Институт"
                        },
                        model: {
                          value: _vm.insts.inst_ru,
                          callback: function($$v) {
                            _vm.$set(_vm.insts, "inst_ru", $$v)
                          },
                          expression: "insts.inst_ru"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Институт")))
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "vs-row",
                  { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
                  [
                    _c(
                      "div",
                      { staticClass: "bx-row" },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              color: "success",
                              type: "filled",
                              size: "medium"
                            }
                          },
                          [_vm._v("Save")]
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("inst-form"),
      _vm._v(" "),
      _c(
        "vx-card",
        [
          _c(
            "vs-table",
            {
              attrs: { data: _vm.inst },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(val) {
                      return _c(
                        "vs-tr",
                        { key: val.id },
                        [
                          _c("vs-td", [_vm._v(_vm._s(val.id))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.inst_uz))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.inst_uz2))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.inst_ru))]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                attrs: {
                                  color: "warning",
                                  type: "filled",
                                  "icon-pack": "feather",
                                  icon: "icon-edit"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.editInst(val)
                                    _vm.popup = true
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Institut")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Институт")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("заведения")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Action")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/inst-form.vue?vue&type=template&id=12fffb64&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/insts/inst-form.vue?vue&type=template&id=12fffb64& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vx-card",
        { staticClass: "mb-2" },
        [
          _c(
            "vs-row",
            { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
            [
              _c(
                "div",
                { staticClass: "bx-row" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        color: "primary",
                        type: "filled",
                        size: "medium",
                        "icon-pack": "feather",
                        icon: "icon-plus"
                      },
                      on: {
                        click: function($event) {
                          _vm.popup = true
                        }
                      }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Add Institution", active: _vm.popup },
          on: {
            "update:active": function($event) {
              _vm.popup = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-col w-full mb-base" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.storeInst($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "Institut",
                          placeholder: "Institut",
                          name: "Institut"
                        },
                        model: {
                          value: _vm.insts.inst_uz,
                          callback: function($$v) {
                            _vm.$set(_vm.insts, "inst_uz", $$v)
                          },
                          expression: "insts.inst_uz"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Institut")))
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "Институт",
                          placeholder: "Институт",
                          name: "Институт"
                        },
                        model: {
                          value: _vm.insts.inst_uz2,
                          callback: function($$v) {
                            _vm.$set(_vm.insts, "inst_uz2", $$v)
                          },
                          expression: "insts.inst_uz2"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Институт")))
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "Институт",
                          placeholder: "Институт",
                          name: "Институт"
                        },
                        model: {
                          value: _vm.insts.inst_ru,
                          callback: function($$v) {
                            _vm.$set(_vm.insts, "inst_ru", $$v)
                          },
                          expression: "insts.inst_ru"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Институт")))
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "vs-row",
                  { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
                  [
                    _c(
                      "div",
                      { staticClass: "bx-row" },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              color: "success",
                              type: "filled",
                              size: "medium"
                            }
                          },
                          [_vm._v("Save")]
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/insts/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/insts/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2216ed4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2216ed4b& */ "./resources/js/src/views/pages/insts/index.vue?vue&type=template&id=2216ed4b&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/insts/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2216ed4b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2216ed4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/insts/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/insts/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/insts/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/insts/index.vue?vue&type=template&id=2216ed4b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/insts/index.vue?vue&type=template&id=2216ed4b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2216ed4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2216ed4b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/index.vue?vue&type=template&id=2216ed4b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2216ed4b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2216ed4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/insts/inst-form.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/pages/insts/inst-form.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inst_form_vue_vue_type_template_id_12fffb64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inst-form.vue?vue&type=template&id=12fffb64& */ "./resources/js/src/views/pages/insts/inst-form.vue?vue&type=template&id=12fffb64&");
/* harmony import */ var _inst_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inst-form.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/insts/inst-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _inst_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inst_form_vue_vue_type_template_id_12fffb64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inst_form_vue_vue_type_template_id_12fffb64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/insts/inst-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/insts/inst-form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/insts/inst-form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inst_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./inst-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/inst-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inst_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/insts/inst-form.vue?vue&type=template&id=12fffb64&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/insts/inst-form.vue?vue&type=template&id=12fffb64& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inst_form_vue_vue_type_template_id_12fffb64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./inst-form.vue?vue&type=template&id=12fffb64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/insts/inst-form.vue?vue&type=template&id=12fffb64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inst_form_vue_vue_type_template_id_12fffb64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inst_form_vue_vue_type_template_id_12fffb64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);