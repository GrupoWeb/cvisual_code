(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e70205e"],{"59da":function(e,t,c){e.exports=c.p+"img/logo-dark.a5a6af2c.png"},"9fe4":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=c("59da"),o=c.n(a),s=c("ea27"),i=c.n(s),l=c("e081"),r=c.n(l),d={class:"home-btn d-none d-sm-block"},m=Object(n["createElementVNode"])("i",{class:"fas fa-home h2"},null,-1),u={class:"my-5 pt-sm-5"},b={class:"container"},h={class:"row"},j={class:"col-lg-12"},O={class:"text-center"},g=Object(n["createElementVNode"])("img",{src:o.a,alt:"",height:"20",class:"auth-logo-dark mx-auto"},null,-1),v=Object(n["createElementVNode"])("img",{src:i.a,alt:"",height:"20",class:"auth-logo-light mx-auto"},null,-1),p=Object(n["createStaticVNode"])('<div class="row justify-content-center mt-5"><div class="col-sm-4"><div class="maintenance-img"><img src="'+r.a+'" alt="" class="img-fluid mx-auto d-block"></div></div></div><h4 class="mt-5">Let&#39;s get started with Skote</h4><p class="text-muted"> It will be as simple as Occidental in fact it will be Occidental. </p>',3),f={class:"row justify-content-center mt-5"},N={class:"col-md-8"},V={class:"counter-number ico-countdown"},w={class:"coming-box"},E=Object(n["createElementVNode"])("span",null,"Days",-1),x={class:"coming-box"},k=Object(n["createElementVNode"])("span",null,"Hours",-1),y={class:"coming-box"},T=Object(n["createElementVNode"])("span",null,"Minutes",-1),D={class:"coming-box"},S=Object(n["createElementVNode"])("span",null,"Seconds",-1);function C(e,t,c,a,o,s){var i=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(i,{to:"/",class:"text-dark"},{default:Object(n["withCtx"])((function(){return[m]})),_:1})]),Object(n["createElementVNode"])("section",u,[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("div",j,[Object(n["createElementVNode"])("div",O,[Object(n["createVNode"])(i,{to:"/",class:"d-block auth-logo"},{default:Object(n["withCtx"])((function(){return[g,v]})),_:1}),p,Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",N,[Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("div",w,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.days)+" ",1),E]),Object(n["createElementVNode"])("div",x,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.hours)+" ",1),k]),Object(n["createElementVNode"])("div",y,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.minutes)+" ",1),T]),Object(n["createElementVNode"])("div",D,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.seconds)+" ",1),S])])])])])])])])])])}c("a4d3"),c("e01a");var M=c("c2a4"),I={data:function(){return{start:"",end:"",interval:"",days:"",minutes:"",hours:"",seconds:"",starttime:"Nov 5, 2021 15:37:25",endtime:"Dec 31, 2022 16:37:25"}},created:function(){window.addEventListener("scroll",this.windowScroll)},mounted:function(){var e=this;this.start=new Date(this.starttime).getTime(),this.end=new Date(this.endtime).getTime(),this.timerCount(this.start,this.end),this.interval=setInterval((function(){e.timerCount(e.start,e.end)}),1e3)},methods:{timerCount:function(e,t){var c=(new Date).getTime(),n=e-c,a=t-c;n<0&&a<0?clearInterval(this.interval):n<0&&a>0?this.calcTime(a):n>0&&a>0&&this.calcTime(n)},calcTime:function(e){this.days=Math.floor(e/864e5),this.hours=Math.floor(e%864e5/36e5),this.minutes=Math.floor(e%36e5/6e4),this.seconds=Math.floor(e%6e4/1e3)}},page:{title:"coming-soon",meta:[{name:"description",content:M.description}]}},B=c("6b0d"),J=c.n(B);const L=J()(I,[["render",C]]);t["default"]=L},e081:function(e,t,c){e.exports=c.p+"img/coming-soon.2500498f.svg"},ea27:function(e,t,c){e.exports=c.p+"img/logo-light.ac4d15de.png"}}]);
//# sourceMappingURL=chunk-6e70205e.7d8ea291.js.map