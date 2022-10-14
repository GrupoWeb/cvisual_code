(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9f77304"],{"7c87":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=[{id:1,name:"David McHenry",designation:"UI/UX Designer",projects:["Photoshop","illustrator"],email:"david@skote.com"},{id:2,image:a("95f5"),name:"Frank Kirk",designation:"Frontend Developer",projects:["Html","Css","2 + more"],email:"frank@skote.com"},{id:3,image:a("61ae"),name:"Rafael Morales",designation:"Backend Developer",projects:["Php","Java","Python"],email:"Rafael@skote.com"},{id:4,name:"Mark Ellison",designation:"Full Stack Developer",projects:["Ruby","Php","2 + more"],email:"mark@skote.com"},{id:5,image:a("1f62"),name:"Minnie Walter",designation:"Frontend Developer",projects:["Html","Css","2 + more"],email:"minnie@skote.com"},{id:6,image:a("a8a4"),name:"Shirley Smith",designation:"UI/UX Designer",projects:["Photoshop","illustrator"],email:"shirley@skote.com"},{id:7,name:"John Santiago",designation:"Full Stack Developer",projects:["Ruby","Php","2 + more"],email:"john@skote.com"},{id:8,image:a("a8a4"),name:"Colin Melton",designation:"Backend Developer",projects:["Php","Java","Python"],email:"colin@skote.com"}]},"95f5":function(e,t,a){e.exports=a.p+"img/avatar-2.02aea0c2.jpg"},a8a4:function(e,t,a){e.exports=a.p+"img/avatar-5.3e35c39b.jpg"},e3e1:function(e,t,a){"use strict";a.d(t,"a",(function(){return $})),a.d(t,"b",(function(){return V})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return N})),a.d(t,"e",(function(){return A})),a.d(t,"f",(function(){return k})),a.d(t,"g",(function(){return P})),a.d(t,"h",(function(){return h})),a.d(t,"i",(function(){return D})),a.d(t,"j",(function(){return B})),a.d(t,"k",(function(){return M}));var r=a("8afd");function n(e){return"function"===typeof e}function o(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function i(e){return n(e.$validator)?Object.assign({},e):{$validator:e}}function s(e){return"object"===typeof e?e.$valid:e}function c(e){return e.$validator||e}function l(e,t){if(!o(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!o(t)&&!n(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=i(t);return a.$params=Object.assign({},a.$params||{},e),a}function d(e,t){if(!n(e)&&"string"!==typeof Object(r["n"])(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!o(t)&&!n(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=i(t);return a.$message=e,a}function m(e,t=[]){const a=i(e);return Object.assign({},a,{$async:!0,$watchTargets:t})}function u(e){return{$validator(t,...a){return Object(r["n"])(t).reduce((t,r)=>{const n=Object.entries(r).reduce((t,[n,o])=>{const i=e[n]||{},l=Object.entries(i).reduce((e,[t,i])=>{const l=c(i),d=l.call(this,o,r,...a),m=s(d);if(e.$data[t]=d,e.$data.$invalid=!m||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!m){let a=i.$message||"";const r=i.$params||{};"function"===typeof a&&(a=a({$pending:!1,$invalid:!m,$params:r,$model:o,$response:d})),e.$errors.push({$property:n,$message:a,$params:r,$response:d,$model:o,$pending:!1,$validator:t})}return{$valid:e.$valid&&m,$data:e.$data,$errors:e.$errors}},{$valid:!0,$data:{},$errors:[]});return t.$data[n]=l.$data,t.$errors[n]=l.$errors,{$valid:t.$valid&&l.$valid,$data:t.$data,$errors:t.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&n.$valid,$data:t.$data.concat(n.$data),$errors:t.$errors.concat(n.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:({$response:e})=>e?e.$errors.map(e=>Object.values(e).map(e=>e.map(e=>e.$message)).reduce((e,t)=>e.concat(t),[])):[]}}const b=e=>{if(e=Object(r["n"])(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},p=e=>(e=Object(r["n"])(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function v(e){return t=>(t=Object(r["n"])(t),!b(t)||e.test(t))}var j=Object.freeze({__proto__:null,withParams:l,withMessage:d,withAsync:m,forEach:u,req:b,len:p,regex:v,unwrap:r["n"],unwrapNormalizedValidator:c,unwrapValidatorResponse:s,normalizeValidatorObject:i}),f=(v(/^[a-zA-Z]*$/),v(/^[a-zA-Z0-9]*$/)),$={$validator:f,$message:"The value must be alpha-numeric",$params:{type:"alphaNum"}},O=v(/^\d*(\.\d+)?$/),h={$validator:O,$message:"Value must be numeric",$params:{type:"numeric"}};const g=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var x=v(g),V={$validator:x,$message:"Value is not a valid email address",$params:{type:"email"}};function y(e){return t=>!b(t)||p(t)<=Object(r["n"])(e)}function N(e){return{$validator:y(e),$message:({$params:e})=>"The maximum length allowed is "+e.max,$params:{max:e,type:"maxLength"}}}function E(e){return t=>!b(t)||p(t)>=Object(r["n"])(e)}function k(e){return{$validator:E(e),$message:({$params:e})=>`This field should be at least ${e.min} long`,$params:{min:e,type:"minLength"}}}function w(e){return"string"===typeof e&&(e=e.trim()),b(e)}var D={$validator:w,$message:"Value is required",$params:{type:"required"}};function C(e){return t=>Object(r["n"])(t)===Object(r["n"])(e)}function B(e,t="other"){return{$validator:C(e),$message:({$params:e})=>`The value must be equal to the ${t} value`,$params:{equalTo:e,otherName:t,type:"sameAs"}}}const z=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;var S=v(z),M={$validator:S,$message:"The value is not a valid URL address",$params:{type:"url"}};function q(e){return t=>!b(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+Object(r["n"])(e)}function P(e){return{$validator:q(e),$message:({$params:e})=>"The minimum value allowed is "+e.min,$params:{min:e,type:"minValue"}}}function T(e){return t=>!b(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+Object(r["n"])(e)}var A=e=>({$validator:T(e),$message:({$params:e})=>"The maximum value is "+e.max,$params:{max:e,type:"maxValue"}});v(/(^[0-9]*$)|(^-[0-9]+$)/),v(/^[-]?\d*(\.\d+)?$/)},e5d0:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),n={class:"row"},o={class:"d-flex"},i={class:"row"},s={class:"col-12"},c={class:"mb-3"},l=Object(r["createElementVNode"])("label",{for:"name"},"Event Name",-1),d={key:0,class:"invalid-feedback"},m={key:0},u={class:"col-12"},b={class:"mb-3"},p=Object(r["createElementVNode"])("label",{for:"name"},"Designation",-1),v={key:0,class:"invalid-feedback"},j={key:0},f={class:"col-12"},$={class:"mb-3"},O=Object(r["createElementVNode"])("label",{for:"email"},"Email",-1),h={key:0,class:"invalid-feedback"},g={key:0},x={class:"col-12"},V=Object(r["createElementVNode"])("label",{for:"projects"},"Projects",-1),y={class:"text-end mt-3"},N=Object(r["createTextVNode"])("Close"),E=Object(r["createTextVNode"])("Create event"),k={class:"row"},w={class:"card text-center"},D={class:"card-body"},C={key:0,class:"avatar-sm mx-auto mb-4"},B={class:"avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16"},z={key:1,class:"mb-4"},S=["src"],M={class:"font-size-15 mb-1"},q={href:"javascript: void(0);",class:"text-dark"},P={class:"text-muted"},T={href:"javascript: void(0);",class:"badge bg-primary font-size-11 m-1"},A={href:"javascript: void(0);",class:"badge bg-primary font-size-11 m-1"},U={href:"javascript: void(0);",class:"badge bg-primary font-size-11 m-1"},_={class:"card-footer bg-transparent border-top"},F={class:"contact-links d-flex font-size-20"},G={class:"flex-fill"},L={title:"Message",href:"javascript: void(0);"},R=Object(r["createElementVNode"])("i",{class:"bx bx-message-square-dots"},null,-1),H=[R],J={class:"flex-fill"},I={title:"Projects",href:"javascript: void(0);"},X=Object(r["createElementVNode"])("i",{class:"bx bx-pie-chart-alt"},null,-1),Z=[X],K={class:"flex-fill"},W={title:"Profile",href:"javascript: void(0);"},Q=Object(r["createElementVNode"])("i",{class:"bx bx-user-circle"},null,-1),Y=[Q],ee=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",{class:"col-12"},[Object(r["createElementVNode"])("div",{class:"text-center my-3"},[Object(r["createElementVNode"])("a",{href:"javascript:void(0);",class:"text-success"},[Object(r["createElementVNode"])("i",{class:"bx bx-hourglass bx-spin me-2"}),Object(r["createTextVNode"])(" Load more ")])])])],-1);function te(e,t,a,R,X,Q){var te=Object(r["resolveComponent"])("PageHeader"),ae=Object(r["resolveComponent"])("multiselect"),re=Object(r["resolveComponent"])("b-button"),ne=Object(r["resolveComponent"])("b-modal"),oe=Object(r["resolveComponent"])("Layout"),ie=Object(r["resolveDirective"])("b-tooltip");return Object(r["openBlock"])(),Object(r["createBlock"])(oe,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(te,{title:X.title,items:X.items},null,8,["title","items"]),Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("button",{class:"btn btn-success ms-auto mb-2",onClick:t[0]||(t[0]=function(e){return X.showModal=!0})}," Add Customer ")])]),Object(r["createVNode"])(ne,{modelValue:X.showModal,"onUpdate:modelValue":t[7]||(t[7]=function(e){return X.showModal=e}),title:"Add Customer","hide-footer":""},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("form",{onSubmit:t[6]||(t[6]=Object(r["withModifiers"])((function(){return Q.handleSubmit&&Q.handleSubmit.apply(Q,arguments)}),["prevent"]))},[Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",c,[l,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return X.users.name=e}),type:"text",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":X.submitted&&R.v$.users.name.$error}]),placeholder:"Insert name"},null,2),[[r["vModelText"],X.users.name]]),X.submitted&&R.v$.users.name.$error?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",d,[R.v$.users.name.required.$message?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",m,Object(r["toDisplayString"])(R.v$.users.name.required.$message),1)):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("div",b,[p,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"designation","onUpdate:modelValue":t[2]||(t[2]=function(e){return X.users.designation=e}),type:"text",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":X.submitted&&R.v$.users.designation.$error}]),placeholder:"Insert designation"},null,2),[[r["vModelText"],X.users.designation]]),X.submitted&&R.v$.users.designation.$error?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",v,[R.v$.users.designation.required.$message?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",j,Object(r["toDisplayString"])(R.v$.users.designation.required.$message),1)):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",$,[O,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return X.users.email=e}),type:"email",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":X.submitted&&R.v$.users.email.$error}]),placeholder:"Insert email"},null,2),[[r["vModelText"],X.users.email]]),X.submitted&&R.v$.users.email.$error?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",h,[R.v$.users.email.required.$message?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",g,Object(r["toDisplayString"])(R.v$.users.email.required.$message),1)):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",x,[V,Object(r["createVNode"])(ae,{modelValue:X.value1,"onUpdate:modelValue":t[4]||(t[4]=function(e){return X.value1=e}),options:X.options,multiple:!0},null,8,["modelValue","options"])])]),Object(r["createElementVNode"])("div",y,[Object(r["createVNode"])(re,{variant:"light",onClick:t[5]||(t[5]=function(e){return X.showModal=!1})},{default:Object(r["withCtx"])((function(){return[N]})),_:1}),Object(r["createVNode"])(re,{type:"submit",variant:"success",class:"ms-1"},{default:Object(r["withCtx"])((function(){return[E]})),_:1})])],32)]})),_:1},8,["modelValue"]),Object(r["createElementVNode"])("div",k,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(X.userGridData,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.id,class:"col-xl-3 col-sm-6"},[Object(r["createElementVNode"])("div",w,[Object(r["createElementVNode"])("div",D,[e.image?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",C,[Object(r["createElementVNode"])("span",B,Object(r["toDisplayString"])(e.name.charAt(0)),1)])),e.image?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",z,[Object(r["createElementVNode"])("img",{class:"rounded-circle avatar-sm",src:"".concat(e.image),alt:""},null,8,S)])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("h5",M,[Object(r["createElementVNode"])("a",q,Object(r["toDisplayString"])(e.name),1)]),Object(r["createElementVNode"])("p",P,Object(r["toDisplayString"])(e.designation),1),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("a",T,Object(r["toDisplayString"])(e.projects[0]),1),Object(r["createElementVNode"])("a",A,Object(r["toDisplayString"])(e.projects[1]),1),Object(r["createElementVNode"])("a",U,Object(r["toDisplayString"])(e.projects[2]),1)])]),Object(r["createElementVNode"])("div",_,[Object(r["createElementVNode"])("div",F,[Object(r["createElementVNode"])("div",G,[Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("a",L,H)),[[ie,void 0,void 0,{hover:!0,top:!0}]])]),Object(r["createElementVNode"])("div",J,[Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("a",I,Z)),[[ie,void 0,void 0,{hover:!0,top:!0}]])]),Object(r["createElementVNode"])("div",K,[Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("a",W,Y)),[[ie,void 0,void 0,{hover:!0,top:!0}]])])])])])])})),128))]),ee]})),_:1})}a("a4d3"),a("e01a");var ae=a("444f"),re=a("2579"),ne=a("c2a4"),oe=a("e3e1"),ie=a("25a0"),se=a("a3064"),ce=a("7c87"),le={setup:function(){return{v$:Object(ie["a"])()}},page:{title:"Contact Users Grid",meta:[{name:"description",content:ne.description}]},components:{Layout:ae["a"],PageHeader:re["a"],Multiselect:se["a"]},data:function(){return{userGridData:ce["a"],title:"Users Grid",items:[{text:"Contacts",href:"/"},{text:"Users Grid",active:!0}],showModal:!1,submitted:!1,users:{name:"",designation:"",email:""},value1:null,options:["Photoshop","illustrator","Html","Css","Php","Java","Python","Ruby"]}},validations:{users:{name:{required:oe["c"].withMessage("Name is required",oe["i"])},designation:{required:oe["c"].withMessage("Designation is required",oe["i"])},email:{required:oe["c"].withMessage("Email is required",oe["i"])}}},methods:{handleSubmit:function(e){this.submitted=!0,this.v$.$touch(),this.v$.$invalid||(this.userGridData.push({id:this.userGridData.length+1,name:this.users.name,designation:this.users.designation,projects:this.value1,email:this.users.email}),this.showModal=!1,this.users={},this.value1=[],this.submitted=!1)}}},de=a("6b0d"),me=a.n(de);const ue=me()(le,[["render",te]]);t["default"]=ue}}]);
//# sourceMappingURL=chunk-c9f77304.7420e917.js.map