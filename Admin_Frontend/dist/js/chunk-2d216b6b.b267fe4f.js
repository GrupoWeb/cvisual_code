(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216b6b"],{c448:function(e,t,l){"use strict";l.r(t);var a=l("7a23"),c={class:"row"},n={class:"col-12"},o={class:"card"},d={class:"card-body"},r=Object(a["createElementVNode"])("h4",{class:"card-title"},"Range slider",-1),i=Object(a["createElementVNode"])("p",{class:"card-title-desc"},"Cool, comfortable, responsive and easily customizable range slider",-1),s={class:"row"},m={class:"col-md-6"},b={class:"p-3"},u=Object(a["createElementVNode"])("h5",{class:"font-size-14 mb-3 mt-0"},"Default",-1),V={class:"p-3"},j={class:"col-md-6"},O={class:"p-3"},v=Object(a["createElementVNode"])("h5",{class:"font-size-14 mb-3 mt-0"},"Min-Max",-1),N={class:"p-3"},p={class:"row"},E={class:"col-md-6"},f={class:"p-3"},g=Object(a["createElementVNode"])("h5",{class:"font-size-14 mb-3 mt-0"},"Range and Label",-1),h={class:"p-3"},C={class:"col-md-6"},w={class:"p-3"},L=Object(a["createElementVNode"])("h5",{class:"font-size-14 mb-3 mt-0"},"Loading",-1),k={class:"p-3"},z=Object(a["createElementVNode"])("br",null,null,-1),R=Object(a["createTextVNode"])("Start"),x={class:"row"},S={class:"col-md-6"},U={class:"p-3"},W=Object(a["createElementVNode"])("h5",{class:"font-size-14 mb-3 mt-0"},"Rtl",-1),y={class:"p-3"},H={class:"col-md-6"},I={class:"p-3"},B=Object(a["createElementVNode"])("h5",{class:"font-size-14 mb-3 mt-0"},"Format",-1),D={class:"p-3"};function J(e,t,l,J,M,P){var _=Object(a["resolveComponent"])("PageHeader"),F=Object(a["resolveComponent"])("Slider"),T=Object(a["resolveComponent"])("b-button"),$=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])($,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(_,{title:M.title,items:M.items},null,8,["title","items"]),Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",d,[r,i,Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",b,[u,Object(a["createElementVNode"])("div",V,[Object(a["createVNode"])(F,{modelValue:M.simpleValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return M.simpleValue=e})},null,8,["modelValue"])])])]),Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("div",O,[v,Object(a["createElementVNode"])("div",N,[Object(a["createVNode"])(F,{modelValue:M.sliderCustomzie,"onUpdate:modelValue":t[1]||(t[1]=function(e){return M.sliderCustomzie=e}),min:100,max:500},null,8,["modelValue"])])])])]),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",E,[Object(a["createElementVNode"])("div",f,[g,Object(a["createElementVNode"])("div",h,[Object(a["createVNode"])(F,{modelValue:M.sliderWithLabel.value,"onUpdate:modelValue":t[2]||(t[2]=function(e){return M.sliderWithLabel.value=e}),data:M.sliderWithLabel.data,range:M.sliderWithLabel.range,onCallbackRange:P.callbackRange},null,8,["modelValue","data","range","onCallbackRange"])])])]),Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("div",w,[L,Object(a["createElementVNode"])("div",k,[Object(a["createVNode"])(F,{modelValue:M.loadingValue,"onUpdate:modelValue":t[3]||(t[3]=function(e){return M.loadingValue=e}),"is-disabled":!0,class:"slider-red"},null,8,["modelValue"]),z,Object(a["createVNode"])(T,{size:"sm",variant:"light",onClick:P.startLoad},{default:Object(a["withCtx"])((function(){return[R]})),_:1},8,["onClick"])])])])]),Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("div",U,[W,Object(a["createElementVNode"])("div",y,[Object(a["createVNode"])(F,{modelValue:M.rtlvalue,"onUpdate:modelValue":t[4]||(t[4]=function(e){return M.rtlvalue=e}),direction:M.direction,orientation:M.orientation},null,8,["modelValue","direction","orientation"])])])]),Object(a["createElementVNode"])("div",H,[Object(a["createElementVNode"])("div",I,[B,Object(a["createElementVNode"])("div",D,[Object(a["createVNode"])(F,{modelValue:M.value,"onUpdate:modelValue":t[5]||(t[5]=function(e){return M.value=e}),merge:M.merge,format:M.format},null,8,["modelValue","merge","format"])])])])])])])])])]})),_:1})}l("a4d3"),l("e01a");var M=l("a6f0"),P=l("444f"),_=l("2579"),F=l("c2a4"),T={page:{title:"Range Slider",meta:[{name:"description",content:F.description}]},components:{Slider:M["a"],Layout:P["a"],PageHeader:_["a"]},data:function(){return{title:"Range Slider",items:[{text:"UI Elements",href:"/"},{text:"Range Slider",active:!0}],simpleValue:10,sliderCustomzie:300,sliderWithLabel:{value:45,data:[15,30,45,60,75,90,120],range:[{label:"15 mins"},{label:"30 mins",isHide:!0},{label:"45 mins"},{label:"1 hr",isHide:!0},{label:"1 hr 15 mins"},{label:"1 hr 30 mins",isHide:!0},{label:"2 hrs"}],rangeValue:{}},value:[20,30,40],merge:10,format:{prefix:"$",decimals:2},loader:null,loadingValue:0,customStyle:50,stepData:10,rtlvalue:50,orientation:"vertical",direction:"rtl"}},methods:{callbackRange:function(e){this.sliderWithLabel.rangeValue=e},startLoad:function(){var e=this;this.loader=setInterval((function(){e.loadingValue++,100===e.loadingValue&&clearInterval(e.loader)}),100)}}},$=l("6b0d"),q=l.n($);const A=q()(T,[["render",J]]);t["default"]=A}}]);
//# sourceMappingURL=chunk-2d216b6b.b267fe4f.js.map