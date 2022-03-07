"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_notes_Indexpage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/AddNoteModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/AddNoteModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        title: '',
        content: ''
      }
    };
  },
  mounted: function mounted() {
    var self = this;
    this.$root.$on('bv::modal::show', function (bvEvent, modalId) {
      self.resetForm();
    });
  },
  methods: {
    resetForm: function resetForm() {
      this.payload.title = '';
      this.payload.content = '';
    },
    onSubmit: function onSubmit() {
      var _this = this;

      _event_bus__WEBPACK_IMPORTED_MODULE_1__.EventBus.$emit('showLoading');
      this.$store.dispatch('notes/create', this.payload).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _event_bus__WEBPACK_IMPORTED_MODULE_1__.EventBus.$emit('hideLoading');
                  _context.next = 3;
                  return _this.$bvToast.toast('Note Created', {
                    title: "Success",
                    variant: "success",
                    solid: true
                  });

                case 3:
                  _context.next = 5;
                  return _this.$store.dispatch('notes/fetchNotes');

                case 5:
                  _this.$bvModal.hide("add-note-modal");

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (err) {
        _event_bus__WEBPACK_IMPORTED_MODULE_1__.EventBus.$emit('hideLoading');

        if (err.status == 422) {
          _this.$refs.form.setErrors(err.data.errors);
        }

        _this.$bvToast.toast(err.data.message || 'Error Please try again later.', {
          title: "Add Note Failed",
          variant: "danger",
          solid: true
        });
      });
    }
  },
  destroyed: function destroyed() {
    this.resetForm();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['note'],
  methods: {
    handleClick: function handleClick() {
      _event_bus__WEBPACK_IMPORTED_MODULE_1__.EventBus.$emit('viewNote', this.note);
    },
    handleDeleteClick: function handleDeleteClick(e) {
      var _this = this;

      this.$store.dispatch('notes/delete', this.note.id).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.$store.dispatch('notes/fetchNotes');

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (err) {
        _this.$bvToast.toast(err.message || 'Error Please try again later.', {
          title: "Delete Note",
          variant: "danger",
          solid: true
        });
      });
      e.stopPropagation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewNote_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewNote.vue */ "./resources/js/components/notes/ViewNote.vue");
/* harmony import */ var _UpdateNote_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateNote.vue */ "./resources/js/components/notes/UpdateNote.vue");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
//
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
  components: {
    ViewNote: _ViewNote_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UpdateNote: _UpdateNote_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      update_note: false,
      note: {
        id: null,
        title: '',
        content: ''
      }
    };
  },
  created: function created() {
    var self = this;
    _event_bus__WEBPACK_IMPORTED_MODULE_2__.EventBus.$on("viewNote", function (note) {
      self.note = note;
      self.showModal();
    });
  },
  methods: {
    showModal: function showModal() {
      this.update_note = false;
      this.$bvModal.show("view-note-modal");
    },
    toggleEditMode: function toggleEditMode() {
      this.update_note = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/UpdateNote.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/UpdateNote.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['note'],
  data: function data() {
    return {
      payload: {
        id: this.note.id,
        content: this.note.content,
        title: this.note.title
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      _event_bus__WEBPACK_IMPORTED_MODULE_1__.EventBus.$emit('showLoading');
      this.$store.dispatch('notes/update', this.payload).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _event_bus__WEBPACK_IMPORTED_MODULE_1__.EventBus.$emit('hideLoading');

                  _this.$bvToast.toast('Note Updated', {
                    title: "Success",
                    variant: "success",
                    solid: true
                  });

                  _context.next = 4;
                  return _this.$store.dispatch('notes/fetchNotes');

                case 4:
                  _this.$bvModal.hide("view-note-modal");

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (err) {
        _event_bus__WEBPACK_IMPORTED_MODULE_1__.EventBus.$emit('hideLoading');

        if (err.status == 422) {
          _this.$refs.form.setErrors(err.data.errors);
        }

        _this.$bvToast.toast(err.data.message || 'Error Please try again later.', {
          title: "Update Note Failed",
          variant: "danger",
          solid: true
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/ViewNote.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/ViewNote.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['note']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/notes/Indexpage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/notes/Indexpage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_notes_NotesCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/notes/NotesCard.vue */ "./resources/js/components/notes/NotesCard.vue");
/* harmony import */ var _components_notes_NotesModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/notes/NotesModal.vue */ "./resources/js/components/notes/NotesModal.vue");
/* harmony import */ var _components_notes_AddNoteModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/notes/AddNoteModal.vue */ "./resources/js/components/notes/AddNoteModal.vue");
//
//
//
//
//
//
//
//
//
//
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
  components: {
    NoteCard: _components_notes_NotesCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotesModal: _components_notes_NotesModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddNoteModal: _components_notes_AddNoteModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)({
    notes: function notes(state) {
      return state.notes.notes;
    }
  }),
  created: function created() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes: function fetchNotes() {
      var _this = this;

      _event_bus__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('showLoading');
      this.$store.dispatch('notes/fetchNotes')["catch"](function (err) {
        _this.$bvToast.toast(err.message || 'Error Please try again later.', {
          title: "Something went wrong.",
          variant: "danger",
          solid: true
        });
      })["finally"](function () {
        _event_bus__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('hideLoading');
      });
    },
    addNote: function addNote() {
      this.$bvModal.show("add-note-modal");
    }
  }
});

/***/ }),

/***/ "./resources/js/components/notes/AddNoteModal.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/notes/AddNoteModal.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddNoteModal_vue_vue_type_template_id_4797d073___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNoteModal.vue?vue&type=template&id=4797d073& */ "./resources/js/components/notes/AddNoteModal.vue?vue&type=template&id=4797d073&");
/* harmony import */ var _AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNoteModal.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/AddNoteModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNoteModal_vue_vue_type_template_id_4797d073___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddNoteModal_vue_vue_type_template_id_4797d073___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notes/AddNoteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notes/NotesCard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/notes/NotesCard.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotesCard_vue_vue_type_template_id_4ea592f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesCard.vue?vue&type=template&id=4ea592f0& */ "./resources/js/components/notes/NotesCard.vue?vue&type=template&id=4ea592f0&");
/* harmony import */ var _NotesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesCard.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/NotesCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotesCard_vue_vue_type_template_id_4ea592f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _NotesCard_vue_vue_type_template_id_4ea592f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notes/NotesCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notes/NotesModal.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/notes/NotesModal.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotesModal_vue_vue_type_template_id_60eccc36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesModal.vue?vue&type=template&id=60eccc36& */ "./resources/js/components/notes/NotesModal.vue?vue&type=template&id=60eccc36&");
/* harmony import */ var _NotesModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesModal.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/NotesModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotesModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotesModal_vue_vue_type_template_id_60eccc36___WEBPACK_IMPORTED_MODULE_0__.render,
  _NotesModal_vue_vue_type_template_id_60eccc36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notes/NotesModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notes/UpdateNote.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/notes/UpdateNote.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateNote_vue_vue_type_template_id_0de9e358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateNote.vue?vue&type=template&id=0de9e358& */ "./resources/js/components/notes/UpdateNote.vue?vue&type=template&id=0de9e358&");
/* harmony import */ var _UpdateNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateNote.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/UpdateNote.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateNote_vue_vue_type_template_id_0de9e358___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateNote_vue_vue_type_template_id_0de9e358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notes/UpdateNote.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notes/ViewNote.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/notes/ViewNote.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewNote_vue_vue_type_template_id_69e93870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewNote.vue?vue&type=template&id=69e93870& */ "./resources/js/components/notes/ViewNote.vue?vue&type=template&id=69e93870&");
/* harmony import */ var _ViewNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewNote.vue?vue&type=script&lang=js& */ "./resources/js/components/notes/ViewNote.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewNote_vue_vue_type_template_id_69e93870___WEBPACK_IMPORTED_MODULE_0__.render,
  _ViewNote_vue_vue_type_template_id_69e93870___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notes/ViewNote.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/notes/Indexpage.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/notes/Indexpage.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Indexpage_vue_vue_type_template_id_1d746ecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Indexpage.vue?vue&type=template&id=1d746ecc& */ "./resources/js/pages/notes/Indexpage.vue?vue&type=template&id=1d746ecc&");
/* harmony import */ var _Indexpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Indexpage.vue?vue&type=script&lang=js& */ "./resources/js/pages/notes/Indexpage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Indexpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Indexpage_vue_vue_type_template_id_1d746ecc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Indexpage_vue_vue_type_template_id_1d746ecc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/notes/Indexpage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notes/AddNoteModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/notes/AddNoteModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddNoteModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/AddNoteModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notes/NotesCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/notes/NotesCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotesCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notes/NotesModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/notes/NotesModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotesModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notes/UpdateNote.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/notes/UpdateNote.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/UpdateNote.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notes/ViewNote.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/notes/ViewNote.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewNote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/ViewNote.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/notes/Indexpage.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/notes/Indexpage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Indexpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Indexpage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/notes/Indexpage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Indexpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notes/AddNoteModal.vue?vue&type=template&id=4797d073&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/notes/AddNoteModal.vue?vue&type=template&id=4797d073& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_template_id_4797d073___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_template_id_4797d073___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_template_id_4797d073___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddNoteModal.vue?vue&type=template&id=4797d073& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/AddNoteModal.vue?vue&type=template&id=4797d073&");


/***/ }),

/***/ "./resources/js/components/notes/NotesCard.vue?vue&type=template&id=4ea592f0&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/notes/NotesCard.vue?vue&type=template&id=4ea592f0& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesCard_vue_vue_type_template_id_4ea592f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesCard_vue_vue_type_template_id_4ea592f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesCard_vue_vue_type_template_id_4ea592f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotesCard.vue?vue&type=template&id=4ea592f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesCard.vue?vue&type=template&id=4ea592f0&");


/***/ }),

/***/ "./resources/js/components/notes/NotesModal.vue?vue&type=template&id=60eccc36&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/notes/NotesModal.vue?vue&type=template&id=60eccc36& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesModal_vue_vue_type_template_id_60eccc36___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesModal_vue_vue_type_template_id_60eccc36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesModal_vue_vue_type_template_id_60eccc36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotesModal.vue?vue&type=template&id=60eccc36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesModal.vue?vue&type=template&id=60eccc36&");


/***/ }),

/***/ "./resources/js/components/notes/UpdateNote.vue?vue&type=template&id=0de9e358&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/notes/UpdateNote.vue?vue&type=template&id=0de9e358& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNote_vue_vue_type_template_id_0de9e358___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNote_vue_vue_type_template_id_0de9e358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNote_vue_vue_type_template_id_0de9e358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNote.vue?vue&type=template&id=0de9e358& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/UpdateNote.vue?vue&type=template&id=0de9e358&");


/***/ }),

/***/ "./resources/js/components/notes/ViewNote.vue?vue&type=template&id=69e93870&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/notes/ViewNote.vue?vue&type=template&id=69e93870& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNote_vue_vue_type_template_id_69e93870___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNote_vue_vue_type_template_id_69e93870___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNote_vue_vue_type_template_id_69e93870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewNote.vue?vue&type=template&id=69e93870& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/ViewNote.vue?vue&type=template&id=69e93870&");


/***/ }),

/***/ "./resources/js/pages/notes/Indexpage.vue?vue&type=template&id=1d746ecc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/notes/Indexpage.vue?vue&type=template&id=1d746ecc& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Indexpage_vue_vue_type_template_id_1d746ecc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Indexpage_vue_vue_type_template_id_1d746ecc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Indexpage_vue_vue_type_template_id_1d746ecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Indexpage.vue?vue&type=template&id=1d746ecc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/notes/Indexpage.vue?vue&type=template&id=1d746ecc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/AddNoteModal.vue?vue&type=template&id=4797d073&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/AddNoteModal.vue?vue&type=template&id=4797d073& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    { attrs: { id: "add-note-modal", title: "Add Note", "hide-footer": "" } },
    [
      _c("validation-observer", {
        ref: "form",
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var handleSubmit = ref.handleSubmit
              return [
                _c(
                  "b-form",
                  {
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return handleSubmit(_vm.onSubmit)
                      },
                    },
                  },
                  [
                    _c("validation-provider", {
                      attrs: { name: "Title", vid: "title", rules: "max:20" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              var valid = ref.valid
                              var dirty = ref.dirty
                              return [
                                _c(
                                  "b-form-group",
                                  { attrs: { label: "Title " } },
                                  [
                                    _c("b-form-input", {
                                      attrs: {
                                        autofocus: "",
                                        placeholder: "Enter note title here",
                                        state: dirty ? valid : null,
                                      },
                                      model: {
                                        value: _vm.payload.title,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.payload, "title", $$v)
                                        },
                                        expression: "payload.title",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(_vm._s(errors[0])),
                                    ]),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ],
                        null,
                        true
                      ),
                    }),
                    _vm._v(" "),
                    _c("validation-provider", {
                      attrs: {
                        name: "Content",
                        vid: "content",
                        rules: "required",
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              var valid = ref.valid
                              var dirty = ref.dirty
                              return [
                                _c(
                                  "b-form-group",
                                  { attrs: { label: "Content *" } },
                                  [
                                    _c("b-form-textarea", {
                                      attrs: {
                                        placeholder: "Enter note content here",
                                        required: "",
                                        rows: "3",
                                        "max-rows": "6",
                                        state: dirty ? valid : null,
                                      },
                                      model: {
                                        value: _vm.payload.content,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.payload, "content", $$v)
                                        },
                                        expression: "payload.content",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(_vm._s(errors[0])),
                                    ]),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ],
                        null,
                        true
                      ),
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-right" },
                      [
                        _c(
                          "b-button",
                          { attrs: { type: "submit", variant: "info" } },
                          [_vm._v("Save")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesCard.vue?vue&type=template&id=4ea592f0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesCard.vue?vue&type=template&id=4ea592f0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    {
      staticClass: "note-card",
      attrs: { title: _vm.note.title || "Untitled Note" },
      on: { click: _vm.handleClick },
    },
    [
      _c(
        "b-button",
        {
          staticClass: "float-right delete-btn",
          attrs: { variant: "outline-danger", size: "sm" },
          on: { click: _vm.handleDeleteClick },
        },
        [_c("b-icon-trash")],
        1
      ),
      _vm._v(" "),
      _c("b-card-text", { staticClass: "note-card-content" }, [
        _vm._v(_vm._s(_vm.note.content)),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesModal.vue?vue&type=template&id=60eccc36&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/NotesModal.vue?vue&type=template&id=60eccc36& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      attrs: {
        id: "view-note-modal",
        title: _vm.note.title || "Untitled Note",
        "hide-footer": "",
      },
    },
    [
      _vm.update_note
        ? _c("update-note", { attrs: { note: _vm.note } })
        : _c("view-note", { attrs: { note: _vm.note } }),
      _vm._v(" "),
      !_vm.update_note
        ? _c(
            "div",
            { staticClass: "text-right mt-2" },
            [
              _c(
                "b-button",
                {
                  attrs: { variant: "info" },
                  on: { click: _vm.toggleEditMode },
                },
                [_vm._v("Edit")]
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/UpdateNote.vue?vue&type=template&id=0de9e358&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/UpdateNote.vue?vue&type=template&id=0de9e358& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("validation-observer", {
    ref: "form",
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function (ref) {
          var handleSubmit = ref.handleSubmit
          return [
            _c(
              "b-form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return handleSubmit(_vm.onSubmit)
                  },
                },
              },
              [
                _c("validation-provider", {
                  attrs: { name: "Title", vid: "title", rules: "max:20" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (ref) {
                          var errors = ref.errors
                          var valid = ref.valid
                          var dirty = ref.dirty
                          return [
                            _c(
                              "b-form-group",
                              { attrs: { label: "Title" } },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    autofocus: "",
                                    placeholder: "Enter note title here",
                                    state: dirty ? valid : null,
                                  },
                                  model: {
                                    value: _vm.payload.title,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.payload, "title", $$v)
                                    },
                                    expression: "payload.title",
                                  },
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                    ],
                    null,
                    true
                  ),
                }),
                _vm._v(" "),
                _c("validation-provider", {
                  attrs: { name: "Content", vid: "content", rules: "required" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (ref) {
                          var errors = ref.errors
                          var valid = ref.valid
                          var dirty = ref.dirty
                          return [
                            _c(
                              "b-form-group",
                              { attrs: { label: "Content *" } },
                              [
                                _c("b-form-textarea", {
                                  attrs: {
                                    placeholder: "Enter note content here",
                                    required: "",
                                    rows: "3",
                                    "max-rows": "6",
                                    state: dirty ? valid : null,
                                  },
                                  model: {
                                    value: _vm.payload.content,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.payload, "content", $$v)
                                    },
                                    expression: "payload.content",
                                  },
                                }),
                                _vm._v(" "),
                                _c("b-form-invalid-feedback", [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                    ],
                    null,
                    true
                  ),
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right" },
                  [
                    _c(
                      "b-button",
                      { attrs: { type: "submit", variant: "info" } },
                      [_vm._v("Save")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/ViewNote.vue?vue&type=template&id=69e93870&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notes/ViewNote.vue?vue&type=template&id=69e93870& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    [_c("b-card-text", [_vm._v(_vm._s(_vm.note.content))])],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/notes/Indexpage.vue?vue&type=template&id=1d746ecc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/notes/Indexpage.vue?vue&type=template&id=1d746ecc& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12", md: "4", "offset-md": "4" } },
            [
              _c(
                "b-form-group",
                [
                  _c("b-form-input", {
                    attrs: { placeholder: "Click here to add note" },
                    on: { click: _vm.addNote },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        _vm._l(_vm.notes, function (note) {
          return _c(
            "b-col",
            { key: note.id, attrs: { cols: "12", md: "2" } },
            [_c("note-card", { attrs: { note: note } })],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("notes-modal"),
      _vm._v(" "),
      _c("add-note-modal"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);