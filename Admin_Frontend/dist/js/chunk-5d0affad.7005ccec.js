(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d0affad"],{5855:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c={class:"row"},o={class:"col-12"},r={class:"email-rightbar mb-3"},l={class:"card"},i={class:"btn-toolbar p-3"},s={class:"mt-3"},d={class:"message-list"},b=["onClick","onKeypress"],m={class:"col-mail col-mail-1"},u={class:"checkbox-wrapper-mail"},p=["id"],j=["for"],O={class:"title"},g={class:"col-mail col-mail-2"},h={class:"date"},f={class:"row justify-content-md-between align-items-md-center"},v={class:"col-xl-7"},x={class:"col-xl-5"},V={class:"text-md-right float-end mt-2 pagination-rounded"};function E(e,t,a,E,N,w){var I=Object(n["resolveComponent"])("PageHeader"),k=Object(n["resolveComponent"])("Sidepanel"),y=Object(n["resolveComponent"])("Toolbar"),C=Object(n["resolveComponent"])("router-link"),P=Object(n["resolveComponent"])("b-pagination"),D=Object(n["resolveComponent"])("Layout");return Object(n["openBlock"])(),Object(n["createBlock"])(D,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{title:N.title,items:N.items},null,8,["title","items"]),Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(k),Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(y)]),Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("ul",d,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(N.paginatedEmailData,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(C,{custom:"",key:t,class:Object(n["normalizeClass"])({unread:!0===e.unread}),to:"/email/reademail/".concat(e.id)},{default:Object(n["withCtx"])((function(a){var c=a.navigate;return[Object(n["createElementVNode"])("li",{onClick:c,onKeypress:Object(n["withKeys"])(c,["enter"])},[Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("input",{id:"chk-".concat(t),type:"checkbox"},null,8,p),Object(n["createElementVNode"])("label",{for:"chk-".concat(t)},null,8,j)]),Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])("star-toggle far fa-star text-".concat(e.text))},null,2),Object(n["createElementVNode"])("a",O,Object(n["toDisplayString"])(e.title),1)]),Object(n["createElementVNode"])("div",g,[Object(n["createVNode"])(C,{to:"/email/reademail/".concat(e.id),class:"subject"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.subject),1)]})),_:2},1032,["to"]),Object(n["createElementVNode"])("div",h,Object(n["toDisplayString"])(e.date),1)])],40,b)]})),_:2},1032,["class","to"])})),128))])])]),Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",v,"Showing "+Object(n["toDisplayString"])(N.startIndex)+" - "+Object(n["toDisplayString"])(N.endIndex)+" of "+Object(n["toDisplayString"])(w.rows),1),Object(n["createElementVNode"])("div",x,[Object(n["createElementVNode"])("div",V,[Object(n["createVNode"])(P,{modelValue:N.currentPage,"onUpdate:modelValue":t[0]||(t[0]=function(e){return N.currentPage=e}),"total-rows":w.rows,"per-page":N.perPage,onInput:w.onPageChange},null,8,["modelValue","total-rows","per-page","onInput"])])])])])])])]})),_:1})}a("a4d3"),a("e01a"),a("fb6a");var N=a("444f"),w=a("2579"),I=a("c2a4"),k=a("4491"),y=a("bbaf"),C=a("95d2"),P={page:{title:"Inbox",meta:[{name:"description",content:I.description}]},components:{Layout:N["a"],PageHeader:w["a"],Toolbar:k["a"],Sidepanel:y["a"]},data:function(){return{emailData:C["a"],paginatedEmailData:C["a"],title:"Inbox",items:[{text:"Email",href:"/"},{text:"Inbox",active:!0}],currentPage:1,perPage:15,emailIds:[],startIndex:1,endIndex:15}},computed:{rows:function(){return this.emailData.length}},created:function(){this.startIndex=0,this.endIndex=this.perPage,this.paginatedEmailData=this.emailData.slice(this.startIndex,this.endIndex)},methods:{onPageChange:function(){this.startIndex=(this.currentPage-1)*this.perPage,this.endIndex=(this.currentPage-1)*this.perPage+this.perPage,this.paginatedEmailData=this.emailData.slice(this.startIndex,this.endIndex)}}},D=a("6b0d"),S=a.n(D);const B=S()(P,[["render",E]]);t["default"]=B},fb6a:function(e,t,a){"use strict";var n=a("23e7"),c=a("da84"),o=a("e8b5"),r=a("68ee"),l=a("861d"),i=a("23cb"),s=a("07fa"),d=a("fc6a"),b=a("8418"),m=a("b622"),u=a("1dde"),p=a("f36a"),j=u("slice"),O=m("species"),g=c.Array,h=Math.max;n({target:"Array",proto:!0,forced:!j},{slice:function(e,t){var a,n,c,m=d(this),u=s(m),j=i(e,u),f=i(void 0===t?u:t,u);if(o(m)&&(a=m.constructor,r(a)&&(a===g||o(a.prototype))?a=void 0:l(a)&&(a=a[O],null===a&&(a=void 0)),a===g||void 0===a))return p(m,j,f);for(n=new(void 0===a?g:a)(h(f-j,0)),c=0;j<f;j++,c++)j in m&&b(n,c,m[j]);return n.length=c,n}})}}]);
//# sourceMappingURL=chunk-5d0affad.7005ccec.js.map