(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      newKb: {
        title_ru: '',
        title_uz: '',
        title_uz2: '',
        desc_ru: '',
        desc_uz: '',
        desc_uz2: '',
        photo: null
      }
    };
  },
  mounted: function mounted() {},
  computed: {},
  methods: {
    uploadPhoto: function uploadPhoto(e) {
      var _this = this;

      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = function (e) {
        _this.newKb.photo = e.target.result;
      };
    },
    addNewKB: function addNewKB() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this2.$store.dispatch('addKB', _this2.newKb).then(function () {
            _this2.$router.push({
              name: 'Knowledge'
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=template&id=05f8c7a9&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=template&id=05f8c7a9& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { title: "Add Knowledge Base" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addNewKB($event)
          }
        }
      },
      [
        _c(
          "vs-row",
          { staticClass: "mb-base", attrs: { "vs-w": "12" } },
          [
            _c(
              "vs-col",
              { attrs: { "vs-type": "flex", "vs-w": "4" } },
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
                  attrs: { name: "TitleRu", label: "Title Ru" },
                  model: {
                    value: _vm.newKb.title_ru,
                    callback: function($$v) {
                      _vm.$set(_vm.newKb, "title_ru", $$v)
                    },
                    expression: "newKb.title_ru"
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-danger text-sm" }, [
                  _vm._v(_vm._s(_vm.errors.first("TitleRu")))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-col",
              { attrs: { "vs-type": "flex", "vs-w": "4" } },
              [
                _c("label", { attrs: { for: "" } }),
                _vm._v(" "),
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
                  attrs: { name: "TitleUz", label: "Title Uz" },
                  model: {
                    value: _vm.newKb.title_uz,
                    callback: function($$v) {
                      _vm.$set(_vm.newKb, "title_uz", $$v)
                    },
                    expression: "newKb.title_uz"
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-danger text-sm" }, [
                  _vm._v(_vm._s(_vm.errors.first("TitleUz")))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-col",
              { attrs: { "vs-type": "flex", "vs-w": "4" } },
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
                  attrs: { label: "Title Uz2", name: "TitleUz2" },
                  model: {
                    value: _vm.newKb.title_uz2,
                    callback: function($$v) {
                      _vm.$set(_vm.newKb, "title_uz2", $$v)
                    },
                    expression: "newKb.title_uz2"
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-danger text-sm" }, [
                  _vm._v(_vm._s(_vm.errors.first("TitleUz2")))
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "vs-row",
          { staticClass: "mb-base", attrs: { "vs-w": "12" } },
          [
            _c(
              "vs-col",
              { attrs: { "vs-type": "flex", "vs-w": "4" } },
              [
                _c("vs-textarea", {
                  attrs: { label: "Body Ru" },
                  model: {
                    value: _vm.newKb.desc_ru,
                    callback: function($$v) {
                      _vm.$set(_vm.newKb, "desc_ru", $$v)
                    },
                    expression: "newKb.desc_ru"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-col",
              { attrs: { "vs-type": "flex", "vs-w": "4" } },
              [
                _c("vs-textarea", {
                  attrs: { label: "BodyUz" },
                  model: {
                    value: _vm.newKb.desc_uz,
                    callback: function($$v) {
                      _vm.$set(_vm.newKb, "desc_uz", $$v)
                    },
                    expression: "newKb.desc_uz"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-col",
              { attrs: { "vs-type": "flex", "vs-w": "4" } },
              [
                _c("vs-textarea", {
                  attrs: { label: "BodyUz2" },
                  model: {
                    value: _vm.newKb.desc_uz2,
                    callback: function($$v) {
                      _vm.$set(_vm.newKb, "desc_uz2", $$v)
                    },
                    expression: "newKb.desc_uz2"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "vs-row",
          { attrs: { "vs-w": "12" } },
          [
            _c("vs-col", { attrs: { "vs-w": "4", "vs-type": "flex" } }, [
              _c("input", {
                attrs: { type: "file" },
                on: { change: _vm.uploadPhoto }
              })
            ]),
            _vm._v(" "),
            _c(
              "vs-col",
              {
                attrs: {
                  "vs-w": "2",
                  "vs-offset": "6",
                  "vs-justify": "flex-end",
                  "vs-type": "flex"
                }
              },
              [
                _c("vs-button", { attrs: { color: "primary" } }, [
                  _vm._v("Add")
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/add-kb.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/add-kb.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_kb_vue_vue_type_template_id_05f8c7a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-kb.vue?vue&type=template&id=05f8c7a9& */ "./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=template&id=05f8c7a9&");
/* harmony import */ var _add_kb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-kb.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_kb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_kb_vue_vue_type_template_id_05f8c7a9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_kb_vue_vue_type_template_id_05f8c7a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/knowledge/add-kb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_kb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-kb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_kb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=template&id=05f8c7a9&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=template&id=05f8c7a9& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_kb_vue_vue_type_template_id_05f8c7a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-kb.vue?vue&type=template&id=05f8c7a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/add-kb.vue?vue&type=template&id=05f8c7a9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_kb_vue_vue_type_template_id_05f8c7a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_kb_vue_vue_type_template_id_05f8c7a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);