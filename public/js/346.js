"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[346],{3346:(a,t,e)=>{e.r(t),e.d(t,{default:()=>i});var r=e(9470);const s={data:function(){return{payload:{name:"",email:"",password:"",password_confirmation:""}}},methods:{register:function(){var a=this;r.N.$emit("showLoading"),this.$store.dispatch("auth/register",this.payload).then((function(){a.$store.dispatch("auth/login",{email:a.payload.email,password:a.payload.password}).then((function(t){a.$router.replace({path:"/"})}))})).catch((function(t){r.N.$emit("hideLoading"),console.log(t),422==t.status&&a.$refs.form.setErrors(t.data.errors),a.$bvToast.toast(t.data.message||"Error Please try again later.",{title:"Register Failed",variant:"danger",solid:!0})})).finally((function(){r.N.$emit("hideLoading")}))},checkAuth:function(){this.$store.dispatch("auth/check")},validateState:function(a){var t=a.dirty,e=a.validated,r=a.valid;return t||e?void 0===r?null:r:null}}};const i=(0,e(1900).Z)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container-fluid"},[e("b-row",[e("b-col",{attrs:{cols:"12",sm:"7","offset-sm":"5",md:"6","offset-md":"6",lg:"4","offset-lg":"8"}},[e("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light",header:"Register"}},[e("validation-observer",{ref:"form",scopedSlots:a._u([{key:"default",fn:function(t){var r=t.handleSubmit;return[e("b-form",{staticClass:"text-left",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),r(a.register)}}},[e("validation-provider",{attrs:{name:"Name",vid:"name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid,i=t.dirty;return[e("b-form-group",{attrs:{label:"Name *"}},[e("b-form-input",{attrs:{id:"reg-name",autofocus:"",required:"",state:i?s:null},model:{value:a.payload.name,callback:function(t){a.$set(a.payload,"name",t)},expression:"payload.name"}}),a._v(" "),e("b-form-invalid-feedback",{attrs:{id:"reg-name-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),e("validation-provider",{attrs:{name:"Email",vid:"email",rules:"required|email"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid,i=t.dirty;return[e("b-form-group",{attrs:{label:"Email *"}},[e("b-form-input",{attrs:{id:"reg-email",type:"email",required:"",state:i?s:null},model:{value:a.payload.email,callback:function(t){a.$set(a.payload,"email",t)},expression:"payload.email"}}),a._v(" "),e("b-form-invalid-feedback",{attrs:{id:"reg-email-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),e("validation-provider",{attrs:{name:"Password",rules:"required|min:8|confirmed:password_confirmation",vid:"password"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid,i=t.dirty;return[e("b-form-group",{attrs:{label:"Password *"}},[e("b-form-input",{attrs:{id:"reg-password",type:"password",required:"",state:i?s:null},model:{value:a.payload.password,callback:function(t){a.$set(a.payload,"password",t)},expression:"payload.password"}}),a._v(" "),e("b-form-invalid-feedback",{attrs:{id:"reg-password-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),e("validation-provider",{attrs:{name:"Password Confirmation",rules:"required",vid:"password_confirmation"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid,i=t.dirty;return[e("b-form-group",{attrs:{label:"Confirm Password *"}},[e("b-form-input",{attrs:{id:"reg-password-confirmation",type:"password",required:"",state:i?s:null},model:{value:a.payload.password_confirmation,callback:function(t){a.$set(a.payload,"password_confirmation",t)},expression:"payload.password_confirmation"}}),a._v(" "),e("b-form-invalid-feedback",{attrs:{id:"reg-password-confirmation-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),e("div",{staticClass:"text-center"},[e("b-button",{staticClass:"w-50",attrs:{type:"submit",variant:"info",size:"sm"}},[a._v("Register")])],1)],1)]}}])}),a._v(" "),e("div",{staticClass:"text-center mt-3 pt-3 border-top"},[e("b-button",{staticClass:"w-50",attrs:{variant:"info",size:"sm",href:"/login"}},[a._v("Login To Existing An Account")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);