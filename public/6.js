(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/add-form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/nationality/add-form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_nations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../api/nations */ "./resources/api/nations.js");
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
      popup: false,
      nations: {
        nation_uz: '',
        nation_uz2: '',
        nation_ru: ''
      }
    };
  },
  methods: {
    storeNation: function storeNation() {
      var _this = this;

      Object(_api_nations__WEBPACK_IMPORTED_MODULE_1__["storeNations"])(this.nations).then(function (res) {
        console.log(res.data.data);

        _this.$store.commit('addNation', res.data.data);

        _this.popup = false;
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/nationality/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _add_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-form */ "./resources/js/src/views/pages/nationality/add-form.vue");
/* harmony import */ var _api_nations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/nations */ "./resources/api/nations.js");
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
      popupedit: false,
      nation: {
        id: '',
        nation_uz: '',
        nation_uz2: '',
        nation_ru: ''
      }
    };
  },
  components: {
    AddForm: _add_form__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['nations'])),
  mounted: function mounted() {
    this.fetchNations();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['fetchNations']), {
    editNations: function editNations(val) {
      Object.assign(this.nation, val);
    },
    changeNation: function changeNation() {
      var _this = this;

      Object(_api_nations__WEBPACK_IMPORTED_MODULE_2__["updateNation"])(this.nation).then(function (res) {
        _this.fetchNations();

        _this.popupedit = false;
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/add-form.vue?vue&type=template&id=1dc4a350&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/nationality/add-form.vue?vue&type=template&id=1dc4a350& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
          attrs: { title: "Add Nation", active: _vm.popup },
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
                    return _vm.storeNation($event)
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
                          label: "Nation Uz",
                          placeholder: "Nation Uz",
                          name: "NationUz"
                        },
                        model: {
                          value: _vm.nations.nation_uz,
                          callback: function($$v) {
                            _vm.$set(_vm.nations, "nation_uz", $$v)
                          },
                          expression: "nations.nation_uz"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("NationUz")))
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
                          label: "Nation Uz2",
                          placeholder: "Nation Uz2",
                          name: "NationUz2"
                        },
                        model: {
                          value: _vm.nations.nation_uz2,
                          callback: function($$v) {
                            _vm.$set(_vm.nations, "nation_uz2", $$v)
                          },
                          expression: "nations.nation_uz2"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("NationsUz2")))
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
                          label: "Nations Ru",
                          placeholder: "Nations Ru",
                          name: "NationsRu"
                        },
                        model: {
                          value: _vm.nations.nation_ru,
                          callback: function($$v) {
                            _vm.$set(_vm.nations, "nation_ru", $$v)
                          },
                          expression: "nations.nation_ru"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("NationsRu")))
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/index.vue?vue&type=template&id=b14139cc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/nationality/index.vue?vue&type=template&id=b14139cc& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("add-form"),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Add Nation", active: _vm.popupedit },
          on: {
            "update:active": function($event) {
              _vm.popupedit = $event
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
                    return _vm.changeNation($event)
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
                          label: "Nation Uz",
                          placeholder: "Nation Uz",
                          name: "NationUz"
                        },
                        model: {
                          value: _vm.nation.nation_uz,
                          callback: function($$v) {
                            _vm.$set(_vm.nation, "nation_uz", $$v)
                          },
                          expression: "nation.nation_uz"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("NationUz")))
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
                          label: "Nation Uz2",
                          placeholder: "Nation Uz2",
                          name: "NationUz2"
                        },
                        model: {
                          value: _vm.nation.nation_uz2,
                          callback: function($$v) {
                            _vm.$set(_vm.nation, "nation_uz2", $$v)
                          },
                          expression: "nation.nation_uz2"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("NationsUz2")))
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
                          label: "Nations Ru",
                          placeholder: "Nations Ru",
                          name: "NationsRu"
                        },
                        model: {
                          value: _vm.nation.nation_ru,
                          callback: function($$v) {
                            _vm.$set(_vm.nation, "nation_ru", $$v)
                          },
                          expression: "nation.nation_ru"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("NationsRu")))
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
      _c(
        "vx-card",
        [
          _c(
            "vs-table",
            {
              attrs: { "max-items": "5", pagination: "", data: _vm.nations },
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
                          _c("vs-td", [_vm._v(_vm._s(val.nation_uz))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.nation_uz2))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.nation_ru))]),
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
                                    _vm.popupedit = true
                                    _vm.editNations(val)
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
                  _c("vs-th", [_vm._v("Millat")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Миллат")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Национальность")]),
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

/***/ "./resources/js/src/views/pages/nationality/add-form.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/nationality/add-form.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_form_vue_vue_type_template_id_1dc4a350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-form.vue?vue&type=template&id=1dc4a350& */ "./resources/js/src/views/pages/nationality/add-form.vue?vue&type=template&id=1dc4a350&");
/* harmony import */ var _add_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-form.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/nationality/add-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_form_vue_vue_type_template_id_1dc4a350___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_form_vue_vue_type_template_id_1dc4a350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/nationality/add-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/nationality/add-form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/nationality/add-form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/add-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/nationality/add-form.vue?vue&type=template&id=1dc4a350&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/nationality/add-form.vue?vue&type=template&id=1dc4a350& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_form_vue_vue_type_template_id_1dc4a350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-form.vue?vue&type=template&id=1dc4a350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/add-form.vue?vue&type=template&id=1dc4a350&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_form_vue_vue_type_template_id_1dc4a350___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_form_vue_vue_type_template_id_1dc4a350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/nationality/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/nationality/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b14139cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b14139cc& */ "./resources/js/src/views/pages/nationality/index.vue?vue&type=template&id=b14139cc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/nationality/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b14139cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b14139cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/nationality/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/nationality/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/nationality/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/nationality/index.vue?vue&type=template&id=b14139cc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/nationality/index.vue?vue&type=template&id=b14139cc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b14139cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b14139cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nationality/index.vue?vue&type=template&id=b14139cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b14139cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b14139cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);