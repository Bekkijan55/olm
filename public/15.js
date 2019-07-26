(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: {
        cat_id: '',
        title_ru: '',
        title_uz: '',
        title_uz2: '',
        body_ru: '',
        body_uz: '',
        body_uz2: ''
      }
    };
  },
  mounted: function mounted() {},
  computed: {},
  methods: {
    addItem: function addItem() {
      var _this = this;

      this.items.cat_id = this.$route.params.id, this.$store.dispatch('addNewItem', this.items).then(function () {
        _this.$vs.notify({
          title: 'Success',
          text: 'Items Successfully added',
          color: 'success',
          position: 'top-right'
        });

        _this.items.title_ru = '';
        _this.items.title_uz = '';
        _this.items.title_uz2 = '';
        _this.items.body_ru = '';
        _this.items.body_uz = '';
        _this.items.body_uz2 = '';
      });
    }
  },
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__["quillEditor"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=template&id=1e0673cc&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=template&id=1e0673cc& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { title: "Add Item" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addItem($event)
          }
        }
      },
      [
        _c("div", { staticClass: "vx-row mb-base" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/3" },
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
                attrs: { label: "Title Ru", name: "TitleRu" },
                model: {
                  value: _vm.items.title_ru,
                  callback: function($$v) {
                    _vm.$set(_vm.items, "title_ru", $$v)
                  },
                  expression: "items.title_ru"
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
            "div",
            { staticClass: "vx-col sm:w-1/3" },
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
                attrs: { label: "Title Uz", name: "TitleUz" },
                model: {
                  value: _vm.items.title_uz,
                  callback: function($$v) {
                    _vm.$set(_vm.items, "title_uz", $$v)
                  },
                  expression: "items.title_uz"
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
            "div",
            { staticClass: "vx-col sm:w-1/3" },
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
                  value: _vm.items.title_uz2,
                  callback: function($$v) {
                    _vm.$set(_vm.items, "title_uz2", $$v)
                  },
                  expression: "items.title_uz2"
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "text-danger text-sm" }, [
                _vm._v(_vm._s(_vm.errors.first("TitleUz2")))
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-base" }, [
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/3" },
            [
              _c("label", { attrs: { for: "BodyRu" } }, [_vm._v("Body Ru")]),
              _vm._v(" "),
              _c("quill-editor", {
                model: {
                  value: _vm.items.body_ru,
                  callback: function($$v) {
                    _vm.$set(_vm.items, "body_ru", $$v)
                  },
                  expression: "items.body_ru"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/3" },
            [
              _c("label", { attrs: { for: "BodyUz" } }, [_vm._v("Body Uz")]),
              _vm._v(" "),
              _c("quill-editor", {
                model: {
                  value: _vm.items.body_uz,
                  callback: function($$v) {
                    _vm.$set(_vm.items, "body_uz", $$v)
                  },
                  expression: "items.body_uz"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-1/3" },
            [
              _c("label", { attrs: { for: "Body Uz2" } }, [_vm._v("Body Uz2")]),
              _vm._v(" "),
              _c("quill-editor", {
                model: {
                  value: _vm.items.body_uz2,
                  callback: function($$v) {
                    _vm.$set(_vm.items, "body_uz2", $$v)
                  },
                  expression: "items.body_uz2"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-row" },
          [
            _c(
              "vs-col",
              {
                attrs: {
                  "vs-w": "12",
                  "vs-type": "flex",
                  "vs-justify": "flex-end"
                }
              },
              [
                _c(
                  "vs-button",
                  { attrs: { color: "primary", type: "filled" } },
                  [_vm._v("Save")]
                )
              ],
              1
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/category-item.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/category-item.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_item_vue_vue_type_template_id_1e0673cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-item.vue?vue&type=template&id=1e0673cc& */ "./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=template&id=1e0673cc&");
/* harmony import */ var _category_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-item.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_item_vue_vue_type_template_id_1e0673cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_item_vue_vue_type_template_id_1e0673cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/knowledge/category-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./category-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=template&id=1e0673cc&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=template&id=1e0673cc& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_item_vue_vue_type_template_id_1e0673cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./category-item.vue?vue&type=template&id=1e0673cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/category-item.vue?vue&type=template&id=1e0673cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_item_vue_vue_type_template_id_1e0673cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_item_vue_vue_type_template_id_1e0673cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);