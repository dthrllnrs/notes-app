"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[705],{6705:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var o=n(9470),a=n(629),r=n(7757),i=n.n(r);function s(t,e,n,o,a,r,i){try{var s=t[r](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,a)}const l={props:["note"],methods:{handleClick:function(){o.N.$emit("viewNote",this.note)},handleDeleteClick:function(t){var e=this;this.$store.dispatch("notes/delete",this.note.id).then(function(){var t,n=(t=i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("notes/fetchNotes");case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function i(t){s(r,o,a,i,l,"next",t)}function l(t){s(r,o,a,i,l,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}()).catch((function(t){e.$bvToast.toast(t.message||"Error Please try again later.",{title:"Delete Note",variant:"danger",solid:!0})})),t.stopPropagation()}}};var d=n(1900);const c=(0,d.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"note-card",attrs:{title:t.note.title||"Untitled Note"},on:{click:t.handleClick}},[n("b-button",{staticClass:"float-right delete-btn",attrs:{variant:"outline-danger",size:"sm"},on:{click:t.handleDeleteClick}},[n("b-icon-trash")],1),t._v(" "),n("b-card-text",{staticClass:"note-card-content"},[t._v(t._s(t.note.content))])],1)}),[],!1,null,null,null).exports;const u={props:["note"]};function f(t,e,n,o,a,r,i){try{var s=t[r](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,a)}const v={props:["note"],data:function(){return{payload:{id:this.note.id,content:this.note.content,title:this.note.title}}},methods:{onSubmit:function(){var t=this;o.N.$emit("showLoading"),this.$store.dispatch("notes/update",this.payload).then(function(){var e,n=(e=i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.N.$emit("hideLoading"),t.$bvToast.toast("Note Updated",{title:"Success",variant:"success",solid:!0}),e.next=4,t.$store.dispatch("notes/fetchNotes");case 4:t.$bvModal.hide("view-note-modal");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,a){var r=e.apply(t,n);function i(t){f(r,o,a,i,s,"next",t)}function s(t){f(r,o,a,i,s,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}()).catch((function(e){o.N.$emit("hideLoading"),422==e.status&&t.$refs.form.setErrors(e.data.errors),t.$bvToast.toast(e.data.message||"Error Please try again later.",{title:"Update Note Failed",variant:"danger",solid:!0})}))}}};const h={components:{ViewNote:(0,d.Z)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",[n("b-card-text",[t._v(t._s(t.note.content))])],1)}),[],!1,null,null,null).exports,UpdateNote:(0,d.Z)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[n("b-form",{on:{submit:function(e){return e.preventDefault(),o(t.onSubmit)}}},[n("validation-provider",{attrs:{name:"Title",vid:"title",rules:"max:20"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,a=e.touched,r=e.valid;return[n("b-form-group",{attrs:{label:"Title"}},[n("b-form-input",{attrs:{autofocus:"",placeholder:"Enter note title here",state:a?r:null},model:{value:t.payload.title,callback:function(e){t.$set(t.payload,"title",e)},expression:"payload.title"}}),t._v(" "),n("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)]}}],null,!0)}),t._v(" "),n("validation-provider",{attrs:{name:"Content",vid:"content",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,a=e.touched,r=e.valid;return[n("b-form-group",{attrs:{label:"Content *"}},[n("b-form-textarea",{attrs:{placeholder:"Enter note content here",required:"",rows:"3","max-rows":"6",state:a?r:null},model:{value:t.payload.content,callback:function(e){t.$set(t.payload,"content",e)},expression:"payload.content"}}),t._v(" "),n("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)]}}],null,!0)}),t._v(" "),n("div",{staticClass:"text-right"},[n("b-button",{attrs:{type:"submit",variant:"info"}},[t._v("Save")])],1)],1)]}}])})}),[],!1,null,null,null).exports},data:function(){return{update_note:!1,note:{id:null,title:"",content:""}}},created:function(){var t=this;o.N.$on("viewNote",(function(e){t.note=e,t.showModal()}))},methods:{showModal:function(){this.update_note=!1,this.$bvModal.show("view-note-modal")},toggleEditMode:function(){this.update_note=!0}}};function p(t,e,n,o,a,r,i){try{var s=t[r](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,a)}const m={data:function(){return{payload:{title:"",content:""}}},mounted:function(){var t=this;this.$root.$on("bv::modal::show",(function(e,n){t.resetForm()}))},methods:{resetForm:function(){this.payload.title="",this.payload.content=""},onSubmit:function(){var t=this;o.N.$emit("showLoading"),this.$store.dispatch("notes/create",this.payload).then(function(){var e,n=(e=i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.N.$emit("hideLoading"),e.next=3,t.$bvToast.toast("Note Created",{title:"Success",variant:"success",solid:!0});case 3:return e.next=5,t.$store.dispatch("notes/fetchNotes");case 5:t.$bvModal.hide("add-note-modal");case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,a){var r=e.apply(t,n);function i(t){p(r,o,a,i,s,"next",t)}function s(t){p(r,o,a,i,s,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}()).catch((function(e){o.N.$emit("hideLoading"),422==e.status&&t.$refs.form.setErrors(e.data.errors),t.$bvToast.toast(e.data.message||"Error Please try again later.",{title:"Add Note Failed",variant:"danger",solid:!0})}))}},destroyed:function(){this.resetForm()}};const b={components:{NoteCard:c,NotesModal:(0,d.Z)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"view-note-modal",title:t.note.title||"Untitled Note","hide-footer":""}},[t.update_note?n("update-note",{attrs:{note:t.note}}):n("view-note",{attrs:{note:t.note}}),t._v(" "),t.update_note?t._e():n("div",{staticClass:"text-right mt-2"},[n("b-button",{attrs:{variant:"info"},on:{click:t.toggleEditMode}},[t._v("Edit")])],1)],1)}),[],!1,null,null,null).exports,AddNoteModal:(0,d.Z)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"add-note-modal",title:"Add Note","hide-footer":""}},[n("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[n("b-form",{on:{submit:function(e){return e.preventDefault(),o(t.onSubmit)}}},[n("validation-provider",{attrs:{name:"Title",vid:"title",rules:"max:20"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,a=e.valid,r=e.touched;return[n("b-form-group",{attrs:{label:"Title "}},[n("b-form-input",{attrs:{autofocus:"",placeholder:"Enter note title here",state:r?a:null},model:{value:t.payload.title,callback:function(e){t.$set(t.payload,"title",e)},expression:"payload.title"}}),t._v(" "),n("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)]}}],null,!0)}),t._v(" "),n("validation-provider",{attrs:{name:"Content",vid:"content",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,a=e.valid,r=e.touched;return[n("b-form-group",{attrs:{label:"Content *"}},[n("b-form-textarea",{attrs:{placeholder:"Enter note content here",required:"",rows:"3","max-rows":"6",state:r?a:null},model:{value:t.payload.content,callback:function(e){t.$set(t.payload,"content",e)},expression:"payload.content"}}),t._v(" "),n("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)]}}],null,!0)}),t._v(" "),n("div",{staticClass:"text-right"},[n("b-button",{attrs:{type:"submit",variant:"info"}},[t._v("Save")])],1)],1)]}}])})],1)}),[],!1,null,null,null).exports},data:function(){return{}},computed:(0,a.rn)({notes:function(t){return t.notes.notes}}),created:function(){this.fetchNotes()},methods:{fetchNotes:function(){var t=this;o.N.$emit("showLoading"),this.$store.dispatch("notes/fetchNotes").catch((function(e){t.$bvToast.toast(e.message||"Error Please try again later.",{title:"Something went wrong.",variant:"danger",solid:!0})})).finally((function(){o.N.$emit("hideLoading")}))},addNote:function(){this.$bvModal.show("add-note-modal")}}};const _=(0,d.Z)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",{attrs:{cols:"12",md:"4","offset-md":"4"}},[n("b-form-group",[n("b-form-input",{attrs:{readonly:"",placeholder:"Click here to add note"},on:{click:t.addNote}})],1)],1)],1),t._v(" "),n("b-row",t._l(t.notes,(function(t){return n("b-col",{key:t.id,attrs:{cols:"12",sm:"4",md:"3",lg:"2"}},[n("note-card",{attrs:{note:t}})],1)})),1),t._v(" "),n("notes-modal"),t._v(" "),n("add-note-modal")],1)}),[],!1,null,null,null).exports}}]);