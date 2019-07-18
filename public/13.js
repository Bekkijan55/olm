(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/view-user.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/users/view-user.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/users */ "./resources/api/users.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        id: ''
      },
      users: {
        name: '',
        lastname: '',
        surname: ''
      }
    };
  },
  mounted: function mounted() {
    this.pageId.id = this.$route.params.id;
    this.fetchUsers();
  },
  methods: {
    fetchUsers: function fetchUsers() {
      var _this = this;

      Object(_api_users__WEBPACK_IMPORTED_MODULE_0__["viewUsers"])(this.pageId).then(function (res) {
        Object.assign(_this.users, res.data.data);
        console.log(_this.users.name);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/view-user.vue?vue&type=template&id=38587572&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/users/view-user.vue?vue&type=template&id=38587572& ***!
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
    "vx-card",
    [
      _c(
        "vs-row",
        { staticClass: "mt-6" },
        [
          _c(
            "vs-col",
            {
              attrs: {
                "vs-offset": "3",
                "vs-w": "6",
                "vs-justify": "center",
                "vs-type": "flex",
                "vs-align": "center"
              }
            },
            [
              _c("h3", [
                _vm._v(
                  _vm._s(_vm.users.lastname) +
                    " " +
                    _vm._s(_vm.users.name) +
                    " " +
                    _vm._s(_vm.users.surname) +
                    " "
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        { staticClass: "mt-10" },
        [
          _c(
            "vs-col",
            { attrs: { "vs-w": "8", "vs-offset": "1", "vs-type": "flex" } },
            [
              _c("vs-row", { staticClass: "mt-6" }, [
                _c("div", { staticClass: "vx-col w-sm:1/2 w-full mb-8" }, [
                  _c("h5", [_c("strong", [_vm._v("Дата рождения:")])]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(_vm.users.birthdate))])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "vx-col w-sm:1/2 w-full mb-8",
                    attrs: { "vs-offset": "1" }
                  },
                  [
                    _c("h5", [_c("strong", [_vm._v("Национальность:")])]),
                    _vm._v(" "),
                    _c("h5", [
                      _vm._v(_vm._s(_vm.users.profile.nation.nation_ru))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "vx-col w-sm:1/2 w-full mb-8",
                    attrs: { "vs-offset": "1" }
                  },
                  [
                    _c("h5", [_c("strong", [_vm._v("Округ")])]),
                    _vm._v(" "),
                    _c("h5", [_vm._v(_vm._s(_vm.users.profile.okrug.okrug_ru))])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("vs-row", { staticClass: "mt-6" }, [
                _c("div", { staticClass: "vx-col w-sm:1/2 mb-8" }, [
                  _c("h5", [_c("strong", [_vm._v("Место рождения:")])]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(_vm.users.profile.birthplace))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-col w-sm:1/2 mb-8" }, [
                  _c("h5", [_c("strong", [_vm._v("Партийность:")])]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(_vm.users.profile.party.party_ru))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-col w-sm:1/2 mb-8" }, [
                  _c("h5", [
                    _c("strong", [_vm._v("Название учебного заведения:")])
                  ]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("N/A")])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-col", { attrs: { "vs-w": "3", "vs-type": "flex" } }, [
            _c("img", {
              attrs: { src: _vm.users.photo, width: "200", height: "200" }
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        { staticClass: "mt-6" },
        [
          _c(
            "vs-col",
            { staticClass: "mb-8", attrs: { "vs-w": "5", "vs-offset": "1" } },
            [
              _c("h5", [_c("strong", [_vm._v("Образование:")])]),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.users.profile.edu.edu_ru))])
            ]
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "mb-8", attrs: { "vs-w": "6", "vs-offset": "1" } },
            [
              _c("h5", [_c("strong", [_vm._v("Адрес по прописке:")])]),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.users.profile.regis_address))])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        { staticClass: "mb-8" },
        [
          _c("vs-col", { attrs: { "vs-w": "11", "vs-offset": "1" } }, [
            _c("h5", [_c("strong", [_vm._v("Фактический адрес:")])]),
            _vm._v(" "),
            _c("h5", [_vm._v(_vm._s(_vm.users.profile.actual_address))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        { staticClass: "mb-8" },
        [
          _c("vs-col", { attrs: { "vs-w": "3", "vs-offset": "1" } }, [
            _c("h5", [_c("strong", [_vm._v("Рабочий телефон:")])]),
            _vm._v(" "),
            _c("h5", [_vm._v(_vm._s(_vm.users.profile.work_phone))])
          ]),
          _vm._v(" "),
          _c("vs-col", { attrs: { "vs-w": "4" } }, [
            _c("h5", [_c("strong", [_vm._v("Домашний телефон:")])]),
            _vm._v(" "),
            _c("h5", [_vm._v(_vm._s(_vm.users.profile.phone))])
          ]),
          _vm._v(" "),
          _c("vs-col", { attrs: { "vs-w": "4" } }, [
            _c("h5", [_c("strong", [_vm._v("Мобильный телефон:")])]),
            _vm._v(" "),
            _c("h5", [_vm._v(_vm._s(_vm.users.profile.mob_phone))])
          ])
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

/***/ "./resources/js/src/views/pages/users/view-user.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/pages/users/view-user.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_user_vue_vue_type_template_id_38587572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-user.vue?vue&type=template&id=38587572& */ "./resources/js/src/views/pages/users/view-user.vue?vue&type=template&id=38587572&");
/* harmony import */ var _view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-user.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/users/view-user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_user_vue_vue_type_template_id_38587572___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_user_vue_vue_type_template_id_38587572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/users/view-user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/users/view-user.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/users/view-user.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view-user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/view-user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/users/view-user.vue?vue&type=template&id=38587572&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/users/view-user.vue?vue&type=template&id=38587572& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_template_id_38587572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view-user.vue?vue&type=template&id=38587572& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/view-user.vue?vue&type=template&id=38587572&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_template_id_38587572___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_template_id_38587572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);