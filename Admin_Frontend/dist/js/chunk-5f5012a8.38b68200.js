(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f5012a8"],{a204:function(e,t,c){"use strict";c.r(t);c("b0c0");var l=c("7a23"),n={class:"row"},o={class:"col-12"},a={class:"card"},r={class:"card-body"},d=Object(l["createElementVNode"])("h4",{class:"card-title mb-4"},"Example",-1),i={class:"repeater",enctype:"multipart/form-data"},m={class:"mb-3 col-lg-2"},s=Object(l["createElementVNode"])("label",{for:"name"},"Name",-1),b=["onUpdate:modelValue"],u={class:"mb-3 col-lg-2"},p=Object(l["createElementVNode"])("label",{for:"email"},"Email",-1),j=["onUpdate:modelValue"],f={class:"mb-3 col-lg-2"},O=Object(l["createElementVNode"])("label",{for:"subject"},"Subject",-1),E=["onUpdate:modelValue"],V=Object(l["createElementVNode"])("div",{class:"mb-3 col-lg-2"},[Object(l["createElementVNode"])("label",{for:"resume"},"Resume"),Object(l["createElementVNode"])("input",{id:"resume",type:"file",class:"form-control-file"})],-1),N={class:"mb-3 col-lg-2"},v=Object(l["createElementVNode"])("label",{for:"message"},"Message",-1),h=["onUpdate:modelValue"],y={class:"col-lg-2 align-self-center"},g={class:"d-grid"},k=["onClick"],w={class:"row"},x={class:"col-lg-12"},D={class:"card"},M={class:"card-body"},A=Object(l["createElementVNode"])("h4",{class:"card-title mb-4"},"Nested",-1),B={class:"outer-repeater"},R={class:"outer"},U={class:"outer"},C=Object(l["createElementVNode"])("div",{class:"mb-3"},[Object(l["createElementVNode"])("label",{for:"formname"},"Name :"),Object(l["createElementVNode"])("input",{id:"formname",type:"text",class:"form-control",placeholder:"Enter your Name..."})],-1),P=Object(l["createElementVNode"])("div",{class:"mb-3"},[Object(l["createElementVNode"])("label",{for:"formemail"},"Email :"),Object(l["createElementVNode"])("input",{id:"formemail",type:"email",class:"form-control",placeholder:"Enter your Email..."})],-1),F={class:"inner-repeater mb-4"},T={class:"inner mb-3"},L=Object(l["createElementVNode"])("label",null,"Phone no :",-1),H={class:"col-md-10 col-8"},J=["onUpdate:modelValue"],S={class:"col-md-2 col-4"},G={class:"d-grid"},_=["onClick"],q=Object(l["createElementVNode"])("div",{class:"mb-3"},[Object(l["createElementVNode"])("label",{class:"d-block mb-3"},"Gender :"),Object(l["createElementVNode"])("div",{class:"form-check form-check-inline"},[Object(l["createElementVNode"])("input",{class:"form-check-input",type:"radio",name:"gender",id:"inlineRadio1",value:"option1"}),Object(l["createElementVNode"])("label",{class:"form-check-label",for:"inlineRadio1"},"Male")]),Object(l["createElementVNode"])("div",{class:"form-check form-check-inline"},[Object(l["createElementVNode"])("input",{class:"form-check-input",type:"radio",name:"gender",id:"inlineRadio2",value:"option2"}),Object(l["createElementVNode"])("label",{class:"form-check-label",for:"inlineRadio2"},"Female")])],-1),z=Object(l["createElementVNode"])("div",{class:"mb-3"},[Object(l["createElementVNode"])("label",{for:"formmessage"},"Message :"),Object(l["createElementVNode"])("textarea",{id:"formmessage",class:"form-control",rows:"3"})],-1),I=Object(l["createElementVNode"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function K(e,t,c,K,Q,W){var X=Object(l["resolveComponent"])("PageHeader"),Y=Object(l["resolveComponent"])("Layout");return Object(l["openBlock"])(),Object(l["createBlock"])(Y,null,{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(X,{title:Q.title,items:Q.items},null,8,["title","items"]),Object(l["createElementVNode"])("div",n,[Object(l["createElementVNode"])("div",o,[Object(l["createElementVNode"])("div",a,[Object(l["createElementVNode"])("div",r,[d,Object(l["createElementVNode"])("form",i,[Object(l["createElementVNode"])("div",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(Q.fields,(function(e,t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:e.id,class:"row"},[Object(l["createElementVNode"])("div",m,[s,Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"name","onUpdate:modelValue":function(t){return e.name=t},type:"text",name:"untyped-input",class:"form-control"},null,8,b),[[l["vModelText"],e.name]])]),Object(l["createElementVNode"])("div",u,[p,Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"email","onUpdate:modelValue":function(t){return e.email=t},type:"email",class:"form-control"},null,8,j),[[l["vModelText"],e.email]])]),Object(l["createElementVNode"])("div",f,[O,Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"subject","onUpdate:modelValue":function(t){return e.subject=t},type:"text",class:"form-control"},null,8,E),[[l["vModelText"],e.subject]])]),V,Object(l["createElementVNode"])("div",N,[v,Object(l["withDirectives"])(Object(l["createElementVNode"])("textarea",{id:"message","onUpdate:modelValue":function(t){return e.message=t},class:"form-control"},null,8,h),[[l["vModelText"],e.message]])]),Object(l["createElementVNode"])("div",y,[Object(l["createElementVNode"])("div",g,[Object(l["createElementVNode"])("input",{type:"button",class:"btn btn-primary btn-block",value:"Delete",onClick:function(e){return W.deleteRow(t)}},null,8,k)])])])})),128))]),Object(l["createElementVNode"])("input",{type:"button",class:"btn btn-success mt-3 mt-lg-0",value:"Add",onClick:t[0]||(t[0]=function(){return W.AddformData&&W.AddformData.apply(W,arguments)})})])])])])]),Object(l["createElementVNode"])("div",w,[Object(l["createElementVNode"])("div",x,[Object(l["createElementVNode"])("div",D,[Object(l["createElementVNode"])("div",M,[A,Object(l["createElementVNode"])("form",B,[Object(l["createElementVNode"])("div",R,[Object(l["createElementVNode"])("div",U,[C,P,Object(l["createElementVNode"])("div",F,[Object(l["createElementVNode"])("div",T,[L,(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(Q.phoneData,(function(e,t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:e.id,class:"inner mb-3 row"},[Object(l["createElementVNode"])("div",H,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{"onUpdate:modelValue":function(t){return e.phone=t},type:"text",class:"inner form-control",placeholder:"Enter your phone no..."},null,8,J),[[l["vModelText"],e.phone]])]),Object(l["createElementVNode"])("div",S,[Object(l["createElementVNode"])("div",G,[Object(l["createElementVNode"])("input",{type:"button",class:"btn btn-primary btn-block inner",value:"Delete",onClick:function(e){return W.deletePhone(t)}},null,8,_)])])])})),128))]),Object(l["createElementVNode"])("input",{type:"button",class:"btn btn-success inner",value:"Add Number",onClick:t[1]||(t[1]=function(){return W.AddPhoneNo&&W.AddPhoneNo.apply(W,arguments)})})]),q,z,I])])])])])])])]})),_:1})}c("a4d3"),c("e01a"),c("a434");var Q=c("444f"),W=c("2579"),X=c("c2a4"),Y={page:{title:"Form Repeater",meta:[{name:"description",content:X.description}]},components:{Layout:Q["a"],PageHeader:W["a"]},data:function(){return{title:"Form Repeater",items:[{text:"Forms",href:"/"},{text:"Form Repeater",active:!0}],fields:[{id:1}],phoneData:[{id:1}]}},methods:{AddformData:function(){this.fields.push({name:"",email:"",subject:"",message:""})},deleteRow:function(e){confirm("Are you sure you want to delete this element?")&&this.fields.splice(e,1)},AddPhoneNo:function(){this.phoneData.push({phone:""})},deletePhone:function(e){this.phoneData.splice(e,1)}}},Z=c("6b0d"),$=c.n(Z);const ee=$()(Y,[["render",K]]);t["default"]=ee},a434:function(e,t,c){"use strict";var l=c("23e7"),n=c("da84"),o=c("23cb"),a=c("5926"),r=c("07fa"),d=c("7b0b"),i=c("65f0"),m=c("8418"),s=c("1dde"),b=s("splice"),u=n.TypeError,p=Math.max,j=Math.min,f=9007199254740991,O="Maximum allowed length exceeded";l({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var c,l,n,s,b,E,V=d(this),N=r(V),v=o(e,N),h=arguments.length;if(0===h?c=l=0:1===h?(c=0,l=N-v):(c=h-2,l=j(p(a(t),0),N-v)),N+c-l>f)throw u(O);for(n=i(V,l),s=0;s<l;s++)b=v+s,b in V&&m(n,s,V[b]);if(n.length=l,c<l){for(s=v;s<N-l;s++)b=s+l,E=s+c,b in V?V[E]=V[b]:delete V[E];for(s=N;s>N-l+c;s--)delete V[s-1]}else if(c>l)for(s=N-l;s>v;s--)b=s+l-1,E=s+c-1,b in V?V[E]=V[b]:delete V[E];for(s=0;s<c;s++)V[s+v]=arguments[s+2];return V.length=N-l+c,n}})}}]);
//# sourceMappingURL=chunk-5f5012a8.38b68200.js.map