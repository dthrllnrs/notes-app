"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[115],{1115:(a,e,t)=>{t.r(e),t.d(e,{default:()=>i});var r=t(9470);const s={data:function(){return{payload:{name:"",email:"",password:"",password_confirmation:""}}},methods:{register:function(){var a=this;r.N.$emit("showLoading"),this.$store.dispatch("auth/register",this.payload).then((function(){a.$router.replace({path:"/login"})})).catch((function(e){r.N.$emit("hideLoading"),422==e.status&&a.$refs.form.setErrors(e.data.errors),a.$bvToast.toast(e.data.message||"Error Please try again later.",{title:"Register Failed",variant:"danger",solid:!0})})).finally((function(){r.N.$emit("hideLoading")}))},checkAuth:function(){this.$store.dispatch("auth/check")},validateState:function(a){var e=a.dirty,t=a.validated,r=a.valid;return e||t?void 0===r?null:r:null}}};const i=(0,t(1900).Z)(s,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container-fluid"},[t("b-row",[t("b-col",{attrs:{cols:"12",md:"4","offset-md":"8"}},[t("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light",header:"Register"}},[t("validation-observer",{ref:"form",scopedSlots:a._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[t("b-form",{staticClass:"text-left",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),r(a.register)}}},[t("validation-provider",{attrs:{name:"Name",vid:"name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors,s=e.valid,i=e.touched;return[t("b-form-group",{attrs:{label:"Name *"}},[t("b-form-input",{attrs:{id:"reg-name",autofocus:"",required:"",state:i?s:null},model:{value:a.payload.name,callback:function(e){a.$set(a.payload,"name",e)},expression:"payload.name"}}),a._v(" "),t("b-form-invalid-feedback",{attrs:{id:"reg-name-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),t("validation-provider",{attrs:{name:"Email",vid:"email",rules:"required|email"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors,s=e.valid,i=e.touched;return[t("b-form-group",{attrs:{label:"Email *"}},[t("b-form-input",{attrs:{id:"reg-email",type:"email",required:"",state:i?s:null},model:{value:a.payload.email,callback:function(e){a.$set(a.payload,"email",e)},expression:"payload.email"}}),a._v(" "),t("b-form-invalid-feedback",{attrs:{id:"reg-email-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),t("validation-provider",{attrs:{name:"Password",rules:"required|min:8|confirmed:password_confirmation",vid:"password"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors,s=e.valid,i=e.touched;return[t("b-form-group",{attrs:{label:"Password *"}},[t("b-form-input",{attrs:{id:"reg-password",type:"password",required:"",state:i?s:null},model:{value:a.payload.password,callback:function(e){a.$set(a.payload,"password",e)},expression:"payload.password"}}),a._v(" "),t("b-form-invalid-feedback",{attrs:{id:"reg-password-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),t("validation-provider",{attrs:{name:"Password Confirmation",rules:"required",vid:"password_confirmation"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors,s=e.valid,i=e.touched;return[t("b-form-group",{attrs:{label:"Confirm Password *"}},[t("b-form-input",{attrs:{id:"reg-password-confirmation",type:"password",required:"",state:i?s:null},model:{value:a.payload.password_confirmation,callback:function(e){a.$set(a.payload,"password_confirmation",e)},expression:"payload.password_confirmation"}}),a._v(" "),t("b-form-invalid-feedback",{attrs:{id:"reg-password-confirmation-live-feedback"}},[a._v(a._s(r[0]))])],1)]}}],null,!0)}),a._v(" "),t("div",{staticClass:"text-center"},[t("b-button",{staticClass:"w-50",attrs:{type:"submit",variant:"info",size:"sm"}},[a._v("Register")])],1)],1)]}}])}),a._v(" "),t("div",{staticClass:"text-center mt-3 pt-3 border-top"},[t("b-button",{staticClass:"w-50",attrs:{variant:"info",size:"sm",href:"/login"}},[a._v("Login To Existing An Account")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);