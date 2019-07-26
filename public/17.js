(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/items.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/knowledge/items.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageId: {
        item_id: '',
        cat_id: ''
      }
    };
  },
  mounted: function mounted() {
    this.pageId.item_id = this.$route.params.id, this.pageId.cat_id = this.$route.params.cat_id, this.getItem(this.pageId);
  },
  watch: {
    '$route': function $route(refreshPage) {
      console.log(refreshPage.params);
      this.pageId.item_id = refreshPage.params.id;
      this.pageId.cat_id = refreshPage.params.cat_id;
      this.getItem(this.pageId);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['item', 'items'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getItem']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/items.vue?vue&type=template&id=8ac7dfec&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/knowledge/items.vue?vue&type=template&id=8ac7dfec& ***!
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
  return _c("div", { attrs: { id: "knowledge-base-article" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/5 lg:w-1/4" },
        [
          _c("vx-card", { attrs: { title: "Related Questions" } }, [
            _c(
              "ul",
              { staticClass: "bordered-items" },
              _vm._l(_vm.items, function(que) {
                return que.id != _vm.pageId.item_id
                  ? _c(
                      "li",
                      { key: que.id, staticClass: "py-2" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "catItems",
                                params: { id: que.id, cat_id: que.cat_id }
                              }
                            }
                          },
                          [_vm._v(_vm._s(que.title_ru))]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              }),
              0
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0" },
        [
          _c(
            "vx-card",
            [
              _c(
                "div",
                { staticClass: "article-title mb-6" },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-w": "10", "vs-type": "flex" } },
                        [_c("h1", [_vm._v(_vm._s(_vm.item.title_ru))])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-w": "2",
                            "vs-type": "flex",
                            "vs-justify": "flex-end"
                          }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "editItem",
                                  params: { id: _vm.pageId.item_id }
                                }
                              }
                            },
                            [
                              _c(
                                "vs-button",
                                { attrs: { color: "success", size: "medium" } },
                                [_vm._v("Edit")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-1" }, [
                    _vm._v("Last updated on "),
                    _c("span", [
                      _vm._v(_vm._s(_vm._f("date")(_vm.item.created_at, true)))
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.item.body_ru))]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Pastry jelly chocolate bar caramels fruitcake gummies marshmallow lemon drops. Powder cupcake topping muffin carrot cake croissant soufflé sugar plum sweet roll. Cotton candy ice cream gummies biscuit bonbon biscuit. Icing pastry bonbon. Sweet roll chocolate cake liquorice jelly beans caramels jelly cookie caramels. Pastry candy canes cake powder lollipop tootsie roll sugar plum. Cake cotton candy dragée danish. Muffin croissant sweet roll candy wafer marzipan cheesecake. Carrot cake toffee gummi bears gingerbread donut biscuit. Donut chupa chups oat cake cheesecake apple pie gummies marzipan icing cake. Macaroon jelly beans gummi bears carrot cake tiramisu liquorice. Sweet tootsie roll cookie marzipan brownie icing cookie jelly tart. Lollipop cookie tootsie roll candy canes."
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-6" }, [
                _vm._v(
                  "Candy canes oat cake biscuit halvah ice cream. Marshmallow icing topping toffee caramels dessert carrot cake. Liquorice soufflé brownie sugar plum dessert cotton candy. Cupcake halvah topping oat cake soufflé pastry dragée pudding cotton candy."
                )
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-2" }, [_vm._v("Topics:")]),
              _vm._v(" "),
              _c("p", { staticClass: "mt-4" }, [
                _vm._v(
                  "Chocolate cake powder I love jelly beans lemon drops candy fruitcake. Sesame snaps sugar plum chocolate candy canes muffin. Wafer pastry topping croissant pudding dessert I love. Bonbon apple pie fruitcake candy canes I love. Lollipop sweet gingerbread I love I love dessert. I love halvah marshmallow pie jelly beans macaroon candy. Bonbon ice cream lollipop pie fruitcake oat cake. Topping marshmallow I love sesame snaps dragée. I love sesame snaps jelly. Chocolate sesame snaps jelly I love I love powder jelly-o."
                )
              ]),
              _vm._v(" "),
              _c("template", { slot: "footer" }, [
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "flex items-center",
                        attrs: {
                          to: {
                            name: "catItems",
                            params: {
                              id:
                                _vm.pageId.item_id != 1
                                  ? _vm.pageId.item_id - 1
                                  : 1,
                              cat_id: _vm.pageId.cat_id
                            }
                          }
                        }
                      },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-2",
                          attrs: {
                            icon: "ChevronsLeftIcon",
                            svgClasses: "h-4 w-4"
                          }
                        }),
                        _vm._v(" Previous Article")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "flex items-center",
                        attrs: { to: "/pages/knowledge-base/category/question" }
                      },
                      [
                        _vm._v("Next Article "),
                        _c("feather-icon", {
                          staticClass: "ml-2",
                          attrs: {
                            icon: "ChevronsRightIcon",
                            svgClasses: "h-4 w-4"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/items.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/items.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_vue_vue_type_template_id_8ac7dfec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.vue?vue&type=template&id=8ac7dfec& */ "./resources/js/src/views/pages/knowledge/items.vue?vue&type=template&id=8ac7dfec&");
/* harmony import */ var _items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/knowledge/items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _items_vue_vue_type_template_id_8ac7dfec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _items_vue_vue_type_template_id_8ac7dfec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/knowledge/items.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/items.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/items.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./items.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/knowledge/items.vue?vue&type=template&id=8ac7dfec&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/knowledge/items.vue?vue&type=template&id=8ac7dfec& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_8ac7dfec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./items.vue?vue&type=template&id=8ac7dfec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/knowledge/items.vue?vue&type=template&id=8ac7dfec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_8ac7dfec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_8ac7dfec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);