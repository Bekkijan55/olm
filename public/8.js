(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/users/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/users */ "./resources/api/users.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      users: [],
      roles: [],
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        role: "",
        selectedRole: []
      },
      edit: false,
      popupActive2: false
    };
  },
  mounted: function mounted() {
    this.fetchUsers();
  },
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    fetchUsers: function fetchUsers() {
      var _this = this;

      Object(_api_users__WEBPACK_IMPORTED_MODULE_0__["getUsers"])().then(function (res) {
        _this.users = res.data[0];
        _this.roles = res.data[1];
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    addUser: function addUser() {
      var _this2 = this;

      console.log(this.selectedRole); // this.user.role = this.selectedRole.id;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          if (_this2.edit === false) {
            Object(_api_users__WEBPACK_IMPORTED_MODULE_0__["newUser"])(_this2.user).then(function (res) {
              _this2.users.unshift(res.data.data);

              _this2.popupActive2 = false;
            })["catch"](function (err) {
              console.log(err);
            });
          } else {
            Object(_api_users__WEBPACK_IMPORTED_MODULE_0__["updateUser"])(_this2.user).then(function (res) {
              _this2.fetchUsers();

              _this2.popupActive2 = false;
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }
      });
    },
    updateUser: function updateUser(v) {
      this.edit = true; // Object.assign(this.user, v);
      // console.log(v);

      this.user.id = v.id;
      this.user.name = v.name;
      this.user.email = v.email;
      this.user.password = v.password ? v.password : null;
      this.user.selectedRole = v.roles;
      console.log(this.user);
    },
    clearData: function clearData() {
      this.user.id = "";
      this.user.name = "";
      this.user.email = "";
      this.user.password = "";
      this.user.selectedRole = [];
      console.log(this.user);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/index.vue?vue&type=template&id=b1b19ab4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/users/index.vue?vue&type=template&id=b1b19ab4& ***!
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
          attrs: {
            classContent: "popup-example",
            title: "Add User",
            active: _vm.popupActive2
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive2 = $event
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
                    return _vm.addUser($event)
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
                          label: "Name",
                          placeholder: "Name",
                          name: "Name"
                        },
                        model: {
                          value: _vm.user.name,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "name", $$v)
                          },
                          expression: "user.name"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Name")))
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
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "Email",
                          placeholder: "Email",
                          name: "email"
                        },
                        model: {
                          value: _vm.user.email,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "email", $$v)
                          },
                          expression: "user.email"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("email")))
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
                        staticClass: "w-full",
                        attrs: {
                          label: "Password",
                          placeholder: "Password",
                          type: "password",
                          name: "Password"
                        },
                        model: {
                          value: _vm.user.password,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "password", $$v)
                          },
                          expression: "user.password"
                        }
                      })
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
                      _c("v-select", {
                        attrs: {
                          multiple: "",
                          label: "role_name",
                          options: _vm.roles
                        },
                        model: {
                          value: _vm.user.selectedRole,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "selectedRole", $$v)
                          },
                          expression: "user.selectedRole"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "bx-row mb-10" },
                            [
                              _c("vs-button", { staticClass: "mr-3 mb-2" }, [
                                _vm._v("Add")
                              ])
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
          ])
        ]
      ),
      _vm._v(" "),
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
                          _vm.popupActive2 = true
                          _vm.edit = false
                          _vm.clearData()
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
        "vx-card",
        [
          _c(
            "vs-table",
            {
              attrs: { data: _vm.users },
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
                          _c("vs-td", [_vm._v(_vm._s(val.name))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.email))]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            _vm._l(val.roles, function(item) {
                              return _c(
                                "vs-chip",
                                { key: item.id, attrs: { color: "success" } },
                                [_vm._v(_vm._s(item.role_name))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.created_at))]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c(
                                "vs-button",
                                {
                                  attrs: {
                                    color: "warning",
                                    "icon-pack": "feather",
                                    icon: "icon-edit",
                                    type: "filled"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.updateUser(val)
                                      _vm.popupActive2 = true
                                    }
                                  }
                                },
                                [_vm._v("edit")]
                              )
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
                  _c("vs-th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Roles")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("created_at")]),
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

/***/ "./resources/api/users.js":
/*!********************************!*\
  !*** ./resources/api/users.js ***!
  \********************************/
/*! exports provided: getUsers, newUser, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newUser", function() { return newUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./resources/utils/request.js");

function getUsers() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-users',
    method: 'get'
  });
}
function newUser(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/add-user',
    method: 'post',
    data: data
  });
}
function updateUser(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/update-user',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/js/src/views/pages/users/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/users/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b1b19ab4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b1b19ab4& */ "./resources/js/src/views/pages/users/index.vue?vue&type=template&id=b1b19ab4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b1b19ab4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b1b19ab4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/users/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/users/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/users/index.vue?vue&type=template&id=b1b19ab4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/users/index.vue?vue&type=template&id=b1b19ab4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b1b19ab4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b1b19ab4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/users/index.vue?vue&type=template&id=b1b19ab4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b1b19ab4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b1b19ab4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);