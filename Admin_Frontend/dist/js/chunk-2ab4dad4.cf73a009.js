(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ab4dad4"],{"0b81":function(e,t,l){"use strict";l.d(t,"a",(function(){return m})),l.d(t,"b",(function(){return O}));var c=l("7a23");
/**
 * Vue 3 Carousel 0.1.38
 * (c) 2022
 * @license MIT
 */const n={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function a(e,t){let l;return function(...c){l&&clearTimeout(l),l=setTimeout(()=>{e(...c),l=null},t)}}function r(e,t){let l;return function(...c){const n=this;l||(e.apply(n,c),l=!0,setTimeout(()=>l=!1,t))}}function o(e){var t,l,c;return e?"CarouselSlide"===(null===(l=null===(t=e[0])||void 0===t?void 0:t.type)||void 0===l?void 0:l.name)?e:(null===(c=e[0])||void 0===c?void 0:c.children)||[]:[]}function i(e,t){if(e.wrapAround)return t-1;switch(e.snapAlign){case"start":return t-e.itemsToShow;case"end":return t-1;case"center":case"center-odd":return t-Math.ceil(e.itemsToShow/2);case"center-even":return t-Math.ceil(e.itemsToShow/2);default:return 0}}function s(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function d(e,t,l,c){return e.wrapAround?t:Math.min(Math.max(t,c),l)}function u({slidesBuffer:e,currentSlide:t,snapAlign:l,itemsToShow:c,wrapAround:n,slidesCount:a}){let r=e.indexOf(t);if(-1===r&&(r=e.indexOf(Math.ceil(t))),"center"===l||"center-odd"===l?r-=(c-1)/2:"center-even"===l?r-=(c-2)/2:"end"===l&&(r-=c-1),!n){const e=a-c,t=0;r=Math.max(Math.min(r,e),t)}return r}var m=Object(c["defineComponent"])({name:"Carousel",props:{itemsToShow:{default:n.itemsToShow,type:Number},itemsToScroll:{default:n.itemsToScroll,type:Number},wrapAround:{default:n.wrapAround,type:Boolean},snapAlign:{default:n.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:n.transition,type:Number},breakpoints:{default:n.breakpoints,type:Object},autoplay:{default:n.autoplay,type:Number},pauseAutoplayOnHover:{default:n.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:n.mouseDrag,type:Boolean},touchDrag:{default:n.touchDrag,type:Boolean},dir:{default:n.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}},setup(e,{slots:t,emit:l,expose:m}){var b;const v=Object(c["ref"])(null),O=Object(c["ref"])([]),j=Object(c["ref"])([]),p=Object(c["ref"])(0),f=Object(c["ref"])(1),h=Object(c["ref"])(null),N=Object(c["ref"])(null);let V=Object(c["ref"])({}),w=Object.assign({},n);const x=Object(c["reactive"])(Object.assign({},w)),E=Object(c["ref"])(null!==(b=x.modelValue)&&void 0!==b?b:0),g=Object(c["ref"])(0),y=Object(c["ref"])(0),S=Object(c["ref"])(0),T=Object(c["ref"])(0);function C(){const t=Object.assign(Object.assign({},e),e.settings);V=Object(c["ref"])(Object.assign({},t.breakpoints)),w=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),A(w)}function M(){const e=Object.keys(V.value).map(e=>Number(e)).sort((e,t)=>+t-+e);let t=Object.assign({},w);e.some(e=>{const l=window.matchMedia(`(min-width: ${e}px)`).matches;return!!l&&(t=Object.assign(Object.assign({},t),V.value[e]),!0)}),A(t)}function A(e){for(let t in e)x[t]=e[t]}Object(c["provide"])("config",x),Object(c["provide"])("slidesBuffer",j),Object(c["provide"])("slidesCount",f),Object(c["provide"])("currentSlide",E),Object(c["provide"])("maxSlide",S),Object(c["provide"])("minSlide",T);const _=a(()=>{V.value&&(M(),B()),k()},16);function k(){if(!v.value)return;const e=v.value.getBoundingClientRect();p.value=e.width/x.itemsToShow}function B(){f.value=Math.max(O.value.length,1),f.value<=0||(y.value=Math.ceil((f.value-1)/2),S.value=i(x,f.value),T.value=s(x),E.value=d(x,E.value,S.value,T.value))}function L(){const e=[...Array(f.value).keys()],t=x.wrapAround&&x.itemsToShow+1<=f.value;if(t){const t=1!==x.itemsToShow?Math.round((f.value-x.itemsToShow)/2):0;let l=t-E.value;if("end"===x.snapAlign?l+=Math.floor(x.itemsToShow-1):"center"!==x.snapAlign&&"center-odd"!==x.snapAlign||l++,l<0)for(let c=l;c<0;c++)e.push(Number(e.shift()));else for(let c=0;c<l;c++)e.unshift(Number(e.pop()))}j.value=e}Object(c["onMounted"])(()=>{V.value&&(M(),B()),Object(c["nextTick"])(()=>setTimeout(k,16)),x.autoplay&&x.autoplay>0&&R(),window.addEventListener("resize",_,{passive:!0})}),Object(c["onUnmounted"])(()=>{N.value&&clearTimeout(N.value),W(!1)});let D=!1;const P={x:0,y:0},H={x:0,y:0},z=Object(c["reactive"])({x:0,y:0}),$=Object(c["ref"])(!1),I=Object(c["ref"])(!1),X=()=>{I.value=!0},F=()=>{I.value=!1},Y=r(e=>{D||e.preventDefault(),H.x=D?e.touches[0].clientX:e.clientX,H.y=D?e.touches[0].clientY:e.clientY;const t=H.x-P.x,l=H.y-P.y;z.y=l,z.x=t},16);function U(e){D="touchstart"===e.type,D||e.preventDefault(),!D&&0!==e.button||G.value||($.value=!0,P.x=D?e.touches[0].clientX:e.clientX,P.y=D?e.touches[0].clientY:e.clientY,document.addEventListener(D?"touchmove":"mousemove",Y),document.addEventListener(D?"touchend":"mouseup",J))}function J(){$.value=!1;const e="rtl"===x.dir?-1:1,t=.4*Math.sign(z.x),l=Math.round(z.x/p.value+t)*e;let c=d(x,E.value-l,S.value,T.value);q(c),z.x=0,z.y=0,document.removeEventListener(D?"touchmove":"mousemove",Y),document.removeEventListener(D?"touchend":"mouseup",J)}function R(){h.value=setInterval(()=>{x.pauseAutoplayOnHover&&I.value||K()},x.autoplay)}function W(e=!0){h.value&&(clearInterval(h.value),e&&R())}const G=Object(c["ref"])(!1);function q(e,t=!1){if(W(),E.value===e||G.value)return;const c=f.value-1;return e>c?q(e-f.value):e<0?q(e+f.value):(G.value=!0,g.value=E.value,E.value=e,t||l("update:modelValue",E.value),void(N.value=setTimeout(()=>{x.wrapAround&&L(),G.value=!1},x.transition)))}function K(){let e=E.value+x.itemsToScroll;x.wrapAround||(e=Math.min(e,S.value)),q(e)}function Q(){let e=E.value-x.itemsToScroll;x.wrapAround||(e=Math.max(e,T.value)),q(e)}const Z={slideTo:q,next:K,prev:Q};Object(c["provide"])("nav",Z);const ee=Object(c["computed"])(()=>u({slidesBuffer:j.value,itemsToShow:x.itemsToShow,snapAlign:x.snapAlign,wrapAround:Boolean(x.wrapAround),currentSlide:E.value,slidesCount:f.value}));Object(c["provide"])("slidesToScroll",ee);const te=Object(c["computed"])(()=>{const e="rtl"===x.dir?-1:1,t=ee.value*p.value*e;return{transform:`translateX(${z.x-t}px)`,transition:(G.value?x.transition:0)+"ms"}});function le(){C()}function ce(){C(),M(),B(),L(),k()}function ne(){B(),L()}Object(c["watch"])(()=>Object.values(e),ce),le(),Object(c["watchEffect"])(()=>{const t=f.value!==O.value.length,l=void 0!==e.modelValue&&E.value!==e.modelValue;l&&q(Number(e.modelValue),!0),t&&ne()});const ae={config:x,slidesBuffer:j,slidesCount:f,slideWidth:p,currentSlide:E,maxSlide:S,minSlide:T,middleSlide:y};m({updateBreakpointsConfigs:M,updateSlidesData:B,updateSlideWidth:k,updateSlidesBuffer:L,initCarousel:le,restartCarousel:ce,updateCarousel:ne,slideTo:q,next:K,prev:Q,nav:Z,data:ae});const re=t.default||t.slides,oe=t.addons,ie=Object(c["reactive"])(ae);return()=>{const e=o(null===re||void 0===re?void 0:re(ie)),t=(null===oe||void 0===oe?void 0:oe(ie))||[];O.value=e,e.forEach((e,t)=>e.props.index=t);const l=Object(c["h"])("ol",{class:"carousel__track",style:te.value,onMousedown:x.mouseDrag?U:null,onTouchstart:x.touchDrag?U:null},e),n=Object(c["h"])("div",{class:"carousel__viewport"},l);return Object(c["h"])("section",{ref:v,class:{carousel:!0,"carousel--rtl":"rtl"===x.dir},dir:x.dir,"aria-label":"Gallery",onMouseenter:X,onMouseleave:F},[n,t])}}});const b={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},v=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const l=b[t],n=Object(c["h"])("path",{d:l}),a=e.title||t,r=Object(c["h"])("title",null,t);return Object(c["h"])("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:a},[r,n])};v.props={name:String,title:String};var O=Object(c["defineComponent"])({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:t}){const l=Object(c["inject"])("config",Object(c["reactive"])(Object.assign({},n))),a=Object(c["inject"])("slidesBuffer",Object(c["ref"])([])),r=Object(c["inject"])("currentSlide",Object(c["ref"])(0)),o=Object(c["inject"])("slidesToScroll",Object(c["ref"])(0)),i=Object(c["ref"])(e.index);function s(){i.value=a.value.indexOf(e.index)}l.wrapAround&&(s(),Object(c["watch"])(a,s));const d=Object(c["computed"])(()=>{const e=l.itemsToShow,t=1/e*100+"%";return{width:t,order:i.value.toString()}}),u=()=>e.index===r.value,m=()=>{const t=Math.ceil(o.value),c=Math.floor(o.value+l.itemsToShow),n=a.value.slice(t,c);return n.includes(e.index)},b=()=>e.index===a.value[Math.ceil(o.value)-1],v=()=>e.index===a.value[Math.floor(o.value+l.itemsToShow)];return()=>{var e;return Object(c["h"])("li",{style:d.value,class:{carousel__slide:!0,"carousel__slide--active":u(),"carousel__slide--visible":m(),"carousel__slide--prev":b(),"carousel__slide--next":v()}},null===(e=t.default)||void 0===e?void 0:e.call(t))}}})},4001:function(e,t,l){},ad15:function(e,t,l){"use strict";l.r(t);var c=l("7a23"),n={class:"row"},a={class:"col-lg-12"},r={class:"card"},o={class:"card-body"},i=Object(c["createElementVNode"])("h4",{class:"card-title mb-4"},"Horizontal Timeline",-1),s={class:"hori-timeline"},d=Object(c["createElementVNode"])("div",{class:"item event-list"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div",{class:"event-date"},[Object(c["createElementVNode"])("div",{class:"text-primary mb-1"},"12 September"),Object(c["createElementVNode"])("h5",{class:"mb-4"},"First event")]),Object(c["createElementVNode"])("div",{class:"event-down-icon"},[Object(c["createElementVNode"])("i",{class:"bx bx-down-arrow-circle h1 text-primary down-arrow-icon"})]),Object(c["createElementVNode"])("div",{class:"mt-3 px-3"},[Object(c["createElementVNode"])("p",{class:"text-muted"}," It will be as simple as occidental in fact it will be Cambridge ")])])],-1),u=Object(c["createElementVNode"])("div",{class:"item event-list"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div",{class:"event-date"},[Object(c["createElementVNode"])("div",{class:"text-primary mb-1"},"06 October"),Object(c["createElementVNode"])("h5",{class:"mb-4"},"Second event")]),Object(c["createElementVNode"])("div",{class:"event-down-icon"},[Object(c["createElementVNode"])("i",{class:"bx bx-down-arrow-circle h1 text-primary down-arrow-icon"})]),Object(c["createElementVNode"])("div",{class:"mt-3 px-3"},[Object(c["createElementVNode"])("p",{class:"text-muted"}," To an English person, it will seem like simplified English existence. ")])])],-1),m=Object(c["createElementVNode"])("div",{class:"item event-list active"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div",{class:"event-date"},[Object(c["createElementVNode"])("div",{class:"text-primary mb-1"},"06 October"),Object(c["createElementVNode"])("h5",{class:"mb-4"},"Third event")]),Object(c["createElementVNode"])("div",{class:"event-down-icon"},[Object(c["createElementVNode"])("i",{class:"bx bx-down-arrow-circle h1 text-primary down-arrow-icon"})]),Object(c["createElementVNode"])("div",{class:"mt-3 px-3"},[Object(c["createElementVNode"])("p",{class:"text-muted"}," For science, music, sport, etc, Europe uses the same vocabulary. ")])])],-1),b=Object(c["createElementVNode"])("div",{class:"item event-list"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div",{class:"event-date"},[Object(c["createElementVNode"])("div",{class:"text-primary mb-1"},"04 November"),Object(c["createElementVNode"])("h5",{class:"mb-4"},"Fourth event")]),Object(c["createElementVNode"])("div",{class:"event-down-icon"},[Object(c["createElementVNode"])("i",{class:"bx bx-down-arrow-circle h1 text-primary down-arrow-icon"})]),Object(c["createElementVNode"])("div",{class:"mt-3 px-3"},[Object(c["createElementVNode"])("p",{class:"text-muted"}," New common language will be more simple than existing. ")])])],-1),v=Object(c["createElementVNode"])("div",{class:"item event-list"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div",{class:"event-date"},[Object(c["createElementVNode"])("div",{class:"text-primary mb-1"},"19 November"),Object(c["createElementVNode"])("h5",{class:"mb-4"},"Fifth event")]),Object(c["createElementVNode"])("div",{class:"event-down-icon"},[Object(c["createElementVNode"])("i",{class:"bx bx-down-arrow-circle h1 text-primary down-arrow-icon"})]),Object(c["createElementVNode"])("div",{class:"mt-3 px-3"},[Object(c["createElementVNode"])("p",{class:"text-muted"}," It will be as simple as occidental in fact it will be Cambridge ")])])],-1),O=Object(c["createElementVNode"])("div",{class:"item event-list"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div",{class:"event-date"},[Object(c["createElementVNode"])("div",{class:"text-primary mb-1"},"21 December"),Object(c["createElementVNode"])("h5",{class:"mb-4"},"Sixth event")]),Object(c["createElementVNode"])("div",{class:"event-down-icon"},[Object(c["createElementVNode"])("i",{class:"bx bx-down-arrow-circle h1 text-primary down-arrow-icon"})]),Object(c["createElementVNode"])("div",{class:"mt-3 px-3"},[Object(c["createElementVNode"])("p",{class:"text-muted"}," To an English person, it will seem like simplified English existence. ")])])],-1),j={class:"owl-nav"},p=Object(c["createElementVNode"])("i",{class:"mdi mdi-chevron-left"},null,-1),f=[p],h=Object(c["createElementVNode"])("i",{class:"mdi mdi-chevron-right"},null,-1),N=[h],V=Object(c["createElementVNode"])("div",{class:"row"},[Object(c["createElementVNode"])("div",{class:"col-lg-12"},[Object(c["createElementVNode"])("div",{class:"card"},[Object(c["createElementVNode"])("div",{class:"card-body"},[Object(c["createElementVNode"])("h4",{class:"card-title mb-5"},"Vertical Timeline"),Object(c["createElementVNode"])("div",{class:""},[Object(c["createElementVNode"])("ul",{class:"verti-timeline list-unstyled"},[Object(c["createElementVNode"])("li",{class:"event-list"},[Object(c["createElementVNode"])("div",{class:"event-timeline-dot"},[Object(c["createElementVNode"])("i",{class:"bx bx-right-arrow-circle"})]),Object(c["createElementVNode"])("div",{class:"d-flex"},[Object(c["createElementVNode"])("div",{class:"me-3"},[Object(c["createElementVNode"])("i",{class:"bx bx-copy-alt h2 text-primary"})]),Object(c["createElementVNode"])("div",{class:"flex-grow-1"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("h5",null,"Ordered"),Object(c["createElementVNode"])("p",{class:"text-muted"}," New common language will be more simple and regular than the existing. ")])])])]),Object(c["createElementVNode"])("li",{class:"event-list"},[Object(c["createElementVNode"])("div",{class:"event-timeline-dot"},[Object(c["createElementVNode"])("i",{class:"bx bx-right-arrow-circle"})]),Object(c["createElementVNode"])("div",{class:"d-flex"},[Object(c["createElementVNode"])("div",{class:"me-3"},[Object(c["createElementVNode"])("i",{class:"bx bx-package h2 text-primary"})]),Object(c["createElementVNode"])("div",{class:"flex-grow-1"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("h5",null,"Packed"),Object(c["createElementVNode"])("p",{class:"text-muted"}," To achieve this, it would be necessary to have uniform grammar. ")])])])]),Object(c["createElementVNode"])("li",{class:"event-list active"},[Object(c["createElementVNode"])("div",{class:"event-timeline-dot"},[Object(c["createElementVNode"])("i",{class:"bx bx-right-arrow-circle bx-fade-right"})]),Object(c["createElementVNode"])("div",{class:"d-flex"},[Object(c["createElementVNode"])("div",{class:"me-3"},[Object(c["createElementVNode"])("i",{class:"bx bx-car h2 text-primary"})]),Object(c["createElementVNode"])("div",{class:"flex-grow-1"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("h5",null,"Shipped"),Object(c["createElementVNode"])("p",{class:"text-muted"}," It will be as simple as Occidental in fact, it will be Occidental.. ")])])])]),Object(c["createElementVNode"])("li",{class:"event-list"},[Object(c["createElementVNode"])("div",{class:"event-timeline-dot"},[Object(c["createElementVNode"])("i",{class:"bx bx-right-arrow-circle"})]),Object(c["createElementVNode"])("div",{class:"d-flex"},[Object(c["createElementVNode"])("div",{class:"me-3"},[Object(c["createElementVNode"])("i",{class:"bx bx-badge-check h2 text-primary"})]),Object(c["createElementVNode"])("div",{class:"flex-grow-1"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("h5",null,"Delivered"),Object(c["createElementVNode"])("p",{class:"text-muted"}," To an English person, it will seem like simplified English. ")])])])])])])])])])],-1);function w(e,t,l,p,h,w){var x=Object(c["resolveComponent"])("PageHeader"),E=Object(c["resolveComponent"])("slide"),g=Object(c["resolveComponent"])("carousel"),y=Object(c["resolveComponent"])("Layout");return Object(c["openBlock"])(),Object(c["createBlock"])(y,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{title:h.title,items:h.items},null,8,["title","items"]),Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",o,[i,Object(c["createElementVNode"])("div",s,[Object(c["createVNode"])(g,{ref:"carousel",class:"events navs-carousel",id:"timeline-carousel","navigation-enabled":!1,"pagination-enabled":!1,perPageCustom:[[480,2],[768,4]]},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(E,null,{default:Object(c["withCtx"])((function(){return[d]})),_:1}),Object(c["createVNode"])(E,null,{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(E,null,{default:Object(c["withCtx"])((function(){return[m]})),_:1}),Object(c["createVNode"])(E,null,{default:Object(c["withCtx"])((function(){return[b]})),_:1}),Object(c["createVNode"])(E,null,{default:Object(c["withCtx"])((function(){return[v]})),_:1}),Object(c["createVNode"])(E,null,{default:Object(c["withCtx"])((function(){return[O]})),_:1})]})),_:1},512),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("button",{type:"button",role:"presentation",class:"owl-prev",onClick:t[0]||(t[0]=Object(c["withModifiers"])((function(){return w.prevSlide&&w.prevSlide.apply(w,arguments)}),["prevent"]))},f),Object(c["createElementVNode"])("button",{type:"button",role:"presentation",class:"owl-next",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return w.nextSlide&&w.nextSlide.apply(w,arguments)}),["prevent"]))},N)])])])])])]),V]})),_:1})}l("a4d3"),l("e01a"),l("4001");var x=l("0b81"),E=l("444f"),g=l("2579"),y=l("c2a4"),S={page:{title:"Timeline",meta:[{name:"description",content:y.description}]},components:{Carousel:x["a"],Slide:x["b"],Layout:E["a"],PageHeader:g["a"]},data:function(){return{title:"Timeline",items:[{text:"Utility",href:"/"},{text:"Timeline",active:!0}]}},methods:{nextSlide:function(){this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage())},prevSlide:function(){this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage())}}},T=l("6b0d"),C=l.n(T);const M=C()(S,[["render",w]]);t["default"]=M}}]);
//# sourceMappingURL=chunk-2ab4dad4.cf73a009.js.map