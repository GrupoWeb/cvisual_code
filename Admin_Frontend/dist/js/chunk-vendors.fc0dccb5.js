(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0026":function(t,e,i){"use strict";(function(t){function n(){return M().__VUE_DEVTOOLS_GLOBAL_HOOK__}function M(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return M})),i.d(e,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,i("c8ba"))},"00ee":function(t,e,i){var n=i("b622"),M=n("toStringTag"),s={};s[M]="z",t.exports="[object z]"===String(s)},"00fd":function(t,e,i){var n=i("9e69"),M=Object.prototype,s=M.hasOwnProperty,a=M.toString,r=n?n.toStringTag:void 0;function o(t){var e=s.call(t,r),i=t[r];try{t[r]=void 0;var n=!0}catch(o){}var M=a.call(t);return n&&(e?t[r]=i:delete t[r]),M}t.exports=o},"01b4":function(t,e){var i=function(){this.head=null,this.tail=null};i.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=i},"0366":function(t,e,i){var n=i("e330"),M=i("59ed"),s=i("40d5"),a=n(n.bind);t.exports=function(t,e){return M(t),void 0===e?t:s?a(t,e):function(){return t.apply(e,arguments)}}},"057f":function(t,e,i){var n=i("c6b6"),M=i("fc6a"),s=i("241c").f,a=i("4dae"),r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return a(r)}};t.exports.f=function(t){return r&&"Window"==n(t)?o(t):s(M(t))}},"06cf":function(t,e,i){var n=i("83ab"),M=i("c65b"),s=i("d1e7"),a=i("5c6c"),r=i("fc6a"),o=i("a04b"),u=i("1a2d"),c=i("0cfb"),g=Object.getOwnPropertyDescriptor;e.f=n?g:function(t,e){if(t=r(t),e=o(e),c)try{return g(t,e)}catch(i){}if(u(t,e))return a(!M(s.f,t,e),t[e])}},"07fa":function(t,e,i){var n=i("50c4");t.exports=function(t){return n(t.length)}},"0829":function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return vu})),i.d(e,"b",(function(){return Co})),i.d(e,"c",(function(){return Ao})),i.d(e,"d",(function(){return no})),i.d(e,"e",(function(){return uu})),i.d(e,"f",(function(){return po})),i.d(e,"g",(function(){return y})),i.d(e,"h",(function(){return fo})),i.d(e,"i",(function(){return cu})),i.d(e,"j",(function(){return gu})),i.d(e,"k",(function(){return G})),i.d(e,"l",(function(){return ku})),i.d(e,"m",(function(){return Br})),i.d(e,"n",(function(){return rt})),i.d(e,"o",(function(){return R})),i.d(e,"p",(function(){return $r})),i.d(e,"q",(function(){return S})),i.d(e,"r",(function(){return H})),i.d(e,"s",(function(){return N})),i.d(e,"t",(function(){return Xr})),i.d(e,"u",(function(){return Hu})),i.d(e,"v",(function(){return sc})),i.d(e,"w",(function(){return Mc})),i.d(e,"x",(function(){return wo})),i.d(e,"y",(function(){return ao})),i.d(e,"z",(function(){return ro})),i.d(e,"A",(function(){return io})),i.d(e,"B",(function(){return Xu})),i.d(e,"C",(function(){return ic})),i.d(e,"D",(function(){return To})),i.d(e,"E",(function(){return oo})),i.d(e,"F",(function(){return jo})),i.d(e,"G",(function(){return So})),i.d(e,"H",(function(){return xo})),i.d(e,"I",(function(){return pu})),i.d(e,"J",(function(){return bu})),i.d(e,"K",(function(){return No})),i.d(e,"L",(function(){return $u})),i.d(e,"M",(function(){return Gu})),i.d(e,"N",(function(){return Zu})),i.d(e,"O",(function(){return Qu})),i.d(e,"P",(function(){return Pu})),i.d(e,"Q",(function(){return Vu})),i.d(e,"R",(function(){return Bu})),i.d(e,"S",(function(){return ac})),i.d(e,"T",(function(){return wu})),i.d(e,"U",(function(){return yu})),i.d(e,"V",(function(){return Eo})),i.d(e,"W",(function(){return mo})),i.d(e,"X",(function(){return _u})),i.d(e,"Y",(function(){return qu})),i.d(e,"Z",(function(){return Su})),i.d(e,"ab",(function(){return Nu})),i.d(e,"bb",(function(){return co})),i.d(e,"cb",(function(){return uo})),i.d(e,"db",(function(){return ec})),i.d(e,"eb",(function(){return nc})),i.d(e,"fb",(function(){return Fu})),i.d(e,"gb",(function(){return l})),i.d(e,"hb",(function(){return lu})),i.d(e,"ib",(function(){return Eu})),i.d(e,"jb",(function(){return Tu})),i.d(e,"kb",(function(){return Ru})),i.d(e,"lb",(function(){return yo})),i.d(e,"mb",(function(){return ju}));var n=i("589b"),M=i("22e5"),s=i("e691"),a=i("1fd5"),r=i("8f6b");const o="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.6.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=new s["b"]("@firebase/firestore");function I(){return g.logLevel}function l(t){g.setLogLevel(t)}function A(t,...e){if(g.logLevel<=s["a"].DEBUG){const i=e.map(L);g.debug(`Firestore (${c}): ${t}`,...i)}}function D(t,...e){if(g.logLevel<=s["a"].ERROR){const i=e.map(L);g.error(`Firestore (${c}): ${t}`,...i)}}function N(t,...e){if(g.logLevel<=s["a"].WARN){const i=e.map(L);g.warn(`Firestore (${c}): ${t}`,...i)}}function L(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+t;throw D(e),new Error(e)}function d(t,e){t||j()}function S(t,e){t||j()}function h(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends a["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class m{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class b{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let M=new x;this.o=()=>{this.i++,this.currentUser=this.u(),M.resolve(),M=new x,t.enqueueRetryable(()=>n(this.currentUser))};const s=()=>{const e=M;t.enqueueRetryable(async()=>{await e.promise,await n(this.currentUser)})},a=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>a(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?a(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),M.resolve(),M=new x)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(d("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return d(null===t||"string"==typeof t),new u(t)}}class p{constructor(t,e,i){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const n=t.auth.getAuthHeaderValueForFirstParty([]);n&&this.headers.set("Authorization",n),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class C{constructor(t,e,i){this.h=t,this.l=e,this.m=i}getToken(){return Promise.resolve(new p(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=i=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&A("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(i))};const i=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(d("string"==typeof t.token),new z(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let n=0;n<t;n++)i[n]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y.I=-1;class O{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const n=v(40);for(let M=0;M<n.length;++M)i.length<20&&n[M]<e&&(i+=t.charAt(n[M]%t.length))}return i}}function U(t,e){return t<e?-1:t>e?1:0}function k(t,e,i){return t.length===e.length&&t.every((t,n)=>i(t,e[n]))}function W(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new G(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.timestamp=t}static fromTimestamp(t){return new J(t)}static min(){return new J(new G(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){let e=0;for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e++;return e}function Q(t,e){for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e(i,t[i])}function P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e,i){void 0===e?e=0:e>t.length&&j(),void 0===i?i=t.length-e:i>t.length-e&&j(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===V.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof V?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),M=e.get(n);if(i<M)return-1;if(i>M)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends V{construct(t,e,i){return new B(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new y(w.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class R extends V{construct(t,e,i){return new R(t,e,i)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),R.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new R(["__name__"])}static fromServerFormat(t){const e=[];let i="",n=0;const M=()=>{if(0===i.length)throw new y(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let s=!1;for(;n<t.length;){const e=t[n];if("\\"===e){if(n+1===t.length)throw new y(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[n+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new y(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=e,n+=2}else"`"===e?(s=!s,n++):"."!==e||s?(i+=e,n++):(M(),n++)}if(M(),s)throw new y(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new R(e)}static emptyPath(){return new R([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.fields=t,t.sort(R.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return k(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new _(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new _(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_.EMPTY_BYTE_STRING=new _("");const q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $(t){if(d(!!t),"string"==typeof t){let e=0;const i=q.exec(t);if(d(!!i),i[1]){let t=i[1];t=(t+"000000000").substr(0,9),e=Number(t)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:K(t.seconds),nanos:K(t.nanos)}}function K(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function tt(t){return"string"==typeof t?_.fromBase64String(t):_.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){var e,i;return"server_timestamp"===(null===(i=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}function it(t){const e=t.mapValue.fields.__previous_value__;return et(e)?it(e):e}function nt(t){const e=$(t.mapValue.fields.__local_write_time__.timestampValue);return new G(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return null==t}function st(t){return 0===t&&1/t==-1/0}function at(t){return"number"==typeof t&&Number.isInteger(t)&&!st(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.path=t}static fromPath(t){return new rt(B.fromString(t))}static fromName(t){return new rt(B.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rt(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?et(t)?4:10:j()}function ut(t,e){if(t===e)return!0;const i=ot(t);if(i!==ot(e))return!1;switch(i){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nt(t).isEqual(nt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const i=$(t.timestampValue),n=$(e.timestampValue);return i.seconds===n.seconds&&i.nanos===n.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return tt(t.bytesValue).isEqual(tt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return K(t.geoPointValue.latitude)===K(e.geoPointValue.latitude)&&K(t.geoPointValue.longitude)===K(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return K(t.integerValue)===K(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const i=K(t.doubleValue),n=K(e.doubleValue);return i===n?st(i)===st(n):isNaN(i)&&isNaN(n)}return!1}(t,e);case 9:return k(t.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(t,e){const i=t.mapValue.fields||{},n=e.mapValue.fields||{};if(Z(i)!==Z(n))return!1;for(const M in i)if(i.hasOwnProperty(M)&&(void 0===n[M]||!ut(i[M],n[M])))return!1;return!0}(t,e);default:return j()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>ut(t,e))}function gt(t,e){if(t===e)return 0;const i=ot(t),n=ot(e);if(i!==n)return U(i,n);switch(i){case 0:return 0;case 1:return U(t.booleanValue,e.booleanValue);case 2:return function(t,e){const i=K(t.integerValue||t.doubleValue),n=K(e.integerValue||e.doubleValue);return i<n?-1:i>n?1:i===n?0:isNaN(i)?isNaN(n)?0:-1:1}(t,e);case 3:return It(t.timestampValue,e.timestampValue);case 4:return It(nt(t),nt(e));case 5:return U(t.stringValue,e.stringValue);case 6:return function(t,e){const i=tt(t),n=tt(e);return i.compareTo(n)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const i=t.split("/"),n=e.split("/");for(let M=0;M<i.length&&M<n.length;M++){const t=U(i[M],n[M]);if(0!==t)return t}return U(i.length,n.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const i=U(K(t.latitude),K(e.latitude));return 0!==i?i:U(K(t.longitude),K(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const i=t.values||[],n=e.values||[];for(let M=0;M<i.length&&M<n.length;++M){const t=gt(i[M],n[M]);if(t)return t}return U(i.length,n.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const i=t.fields||{},n=Object.keys(i),M=e.fields||{},s=Object.keys(M);n.sort(),s.sort();for(let a=0;a<n.length&&a<s.length;++a){const t=U(n[a],s[a]);if(0!==t)return t;const e=gt(i[n[a]],M[s[a]]);if(0!==e)return e}return U(n.length,s.length)}(t.mapValue,e.mapValue);default:throw j()}}function It(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return U(t,e);const i=$(t),n=$(e),M=U(i.seconds,n.seconds);return 0!==M?M:U(i.nanos,n.nanos)}function lt(t){return At(t)}function At(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=$(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tt(t.bytesValue).toBase64():"referenceValue"in t?(i=t.referenceValue,rt.fromName(i).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",i=!0;for(const n of t.values||[])i?i=!1:e+=",",e+=At(n);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let i="{",n=!0;for(const M of e)n?n=!1:i+=",",i+=`${M}:${At(t.fields[M])}`;return i+"}"}(t.mapValue):j();var e,i}function Dt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nt(t){return!!t&&"integerValue"in t}function Lt(t){return!!t&&"arrayValue"in t}function jt(t){return!!t&&"nullValue"in t}function dt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function St(t){return!!t&&"mapValue"in t}function ht(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Q(t.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ht(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(t.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=ht(t.arrayValue.values[i]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!St(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ht(e)}setAll(t){let e=R.emptyPath(),i={},n=[];t.forEach((t,M)=>{if(!e.isImmediateParentOf(M)){const t=this.getFieldsMap(e);this.applyChanges(t,i,n),i={},n=[],e=M.popLast()}t?i[M.lastSegment()]=ht(t):n.push(M.lastSegment())});const M=this.getFieldsMap(e);this.applyChanges(M,i,n)}delete(t){const e=this.field(t.popLast());St(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let n=e.mapValue.fields[t.get(i)];St(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=n),e=n}return e.mapValue.fields}applyChanges(t,e,i){Q(e,(e,i)=>t[e]=i);for(const n of i)delete t[n]}clone(){return new wt(ht(this.value))}}function yt(t){const e=[];return Q(t.fields,(t,i)=>{const n=new R([t]);if(St(i)){const t=yt(i.mapValue).fields;if(0===t.length)e.push(n);else for(const i of t)e.push(n.child(i))}else e.push(n)}),new X(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xt{constructor(t,e,i,n,M){this.key=t,this.documentType=e,this.version=i,this.data=n,this.documentState=M}static newInvalidDocument(t){return new xt(t,0,J.min(),wt.empty(),0)}static newFoundDocument(t,e,i){return new xt(t,1,e,i,0)}static newNoDocument(t,e){return new xt(t,2,e,wt.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e=null,i=[],n=[],M=null,s=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=n,this.limit=M,this.startAt=s,this.endAt=a,this.R=null}}function Et(t,e=null,i=[],n=[],M=null,s=null,a=null){return new Tt(t,e,i,n,M,s,a)}function mt(t){const e=h(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>ft(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Mt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Qt(e.startAt)),e.endAt&&(t+="|ub:",t+=Qt(e.endAt)),e.R=t}return e.R}function bt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${lt(e.value)}`;var e}).join(", ")}]`),Mt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Qt(t.startAt)),t.endAt&&(e+=", endAt: "+Qt(t.endAt)),`Target(${e})`}function pt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let M=0;M<t.orderBy.length;M++)if(!Vt(t.orderBy[M],e.orderBy[M]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let M=0;M<t.filters.length;M++)if(i=t.filters[M],n=e.filters[M],i.op!==n.op||!i.field.isEqual(n.field)||!ut(i.value,n.value))return!1;var i,n;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ft(t.startAt,e.startAt)&&Ft(t.endAt,e.endAt)}function Ct(t){return rt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class zt extends class{}{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,i):new Yt(t,e,i):"array-contains"===e?new kt(t,i):"in"===e?new Wt(t,i):"not-in"===e?new Gt(t,i):"array-contains-any"===e?new Jt(t,i):new zt(t,e,i)}static P(t,e,i){return"in"===e?new vt(t,i):new Ot(t,i)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(gt(e,this.value)):null!==e&&ot(this.value)===ot(e)&&this.v(gt(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return j()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function ft(t){return t.field.canonicalString()+t.op.toString()+lt(t.value)}class Yt extends zt{constructor(t,e,i){super(t,e,i),this.key=rt.fromName(i.referenceValue)}matches(t){const e=rt.comparator(t.key,this.key);return this.v(e)}}class vt extends zt{constructor(t,e){super(t,"in",e),this.keys=Ut("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ot extends zt{constructor(t,e){super(t,"not-in",e),this.keys=Ut("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ut(t,e){var i;return((null===(i=e.arrayValue)||void 0===i?void 0:i.values)||[]).map(t=>rt.fromName(t.referenceValue))}class kt extends zt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lt(e)&&ct(e.arrayValue,this.value)}}class Wt extends zt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class Gt extends zt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class Jt extends zt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Zt{constructor(t,e){this.position=t,this.before=e}}function Qt(t){return`${t.before?"b":"a"}:${t.position.map(t=>lt(t)).join(",")}`}class Pt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bt(t,e,i){let n=0;for(let M=0;M<t.position.length;M++){const s=e[M],a=t.position[M];if(n=s.field.isKeyField()?rt.comparator(rt.fromName(a.referenceValue),i.key):gt(a,i.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return t.before?n<=0:n<0}function Ft(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let i=0;i<t.position.length;i++)if(!ut(t.position[i],e.position[i]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e=null,i=[],n=[],M=null,s="F",a=null,r=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=n,this.limit=M,this.limitType=s,this.startAt=a,this.endAt=r,this.S=null,this.D=null,this.startAt,this.endAt}}function Xt(t,e,i,n,M,s,a,r){return new Rt(t,e,i,n,M,s,a,r)}function Ht(t){return new Rt(t)}function _t(t){return!Mt(t.limit)&&"F"===t.limitType}function qt(t){return!Mt(t.limit)&&"L"===t.limitType}function $t(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kt(t){for(const e of t.filters)if(e.V())return e.field;return null}function te(t){return null!==t.collectionGroup}function ee(t){const e=h(t);if(null===e.S){e.S=[];const t=Kt(e),i=$t(e);if(null!==t&&null===i)t.isKeyField()||e.S.push(new Pt(t)),e.S.push(new Pt(R.keyField(),"asc"));else{let t=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Pt(R.keyField(),t))}}}return e.S}function ie(t){const e=h(t);if(!e.D)if("F"===e.limitType)e.D=Et(e.path,e.collectionGroup,ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const M of ee(e)){const e="desc"===M.dir?"asc":"desc";t.push(new Pt(M.field,e))}const i=e.endAt?new Zt(e.endAt.position,!e.endAt.before):null,n=e.startAt?new Zt(e.startAt.position,!e.startAt.before):null;e.D=Et(e.path,e.collectionGroup,t,e.filters,e.limit,i,n)}return e.D}function ne(t,e,i){return new Rt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,i,t.startAt,t.endAt)}function Me(t,e){return pt(ie(t),ie(e))&&t.limitType===e.limitType}function se(t){return`${mt(ie(t))}|lt:${t.limitType}`}function ae(t){return`Query(target=${bt(ie(t))}; limitType=${t.limitType})`}function re(t,e){return e.isFoundDocument()&&function(t,e){const i=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):rt.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(t,e)&&function(t,e){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&null===e.data.field(i.field))return!1;return!0}(t,e)&&function(t,e){for(const i of t.filters)if(!i.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Bt(t.startAt,ee(t),e))&&(!t.endAt||!Bt(t.endAt,ee(t),e))}(t,e)}function oe(t){return(e,i)=>{let n=!1;for(const M of ee(t)){const t=ue(M,e,i);if(0!==t)return t;n=n||M.field.isKeyField()}return 0}}function ue(t,e,i){const n=t.field.isKeyField()?rt.comparator(e.key,i.key):function(t,e,i){const n=e.data.field(t),M=i.data.field(t);return null!==n&&null!==M?gt(n,M):j()}(t.field,e,i);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return j()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:st(e)?"-0":e}}function ge(t){return{integerValue:""+t}}function Ie(t,e){return at(e)?ge(e):ce(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this._=void 0}}function Ae(t,e,i){return t instanceof Le?function(t,e){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(i.fields.__previous_value__=e),{mapValue:i}}(i,e):t instanceof je?de(t,e):t instanceof Se?he(t,e):function(t,e){const i=Ne(t,e),n=ye(i)+ye(t.N);return Nt(i)&&Nt(t.N)?ge(n):ce(t.k,n)}(t,e)}function De(t,e,i){return t instanceof je?de(t,e):t instanceof Se?he(t,e):i}function Ne(t,e){return t instanceof we?Nt(i=e)||function(t){return!!t&&"doubleValue"in t}(i)?e:{integerValue:0}:null;var i}class Le extends le{}class je extends le{constructor(t){super(),this.elements=t}}function de(t,e){const i=xe(e);for(const n of t.elements)i.some(t=>ut(t,n))||i.push(n);return{arrayValue:{values:i}}}class Se extends le{constructor(t){super(),this.elements=t}}function he(t,e){let i=xe(e);for(const n of t.elements)i=i.filter(t=>!ut(t,n));return{arrayValue:{values:i}}}class we extends le{constructor(t,e){super(),this.k=t,this.N=e}}function ye(t){return K(t.integerValue||t.doubleValue)}function xe(t){return Lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.field=t,this.transform=e}}function Ee(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof je&&e instanceof je||t instanceof Se&&e instanceof Se?k(t.elements,e.elements,ut):t instanceof we&&e instanceof we?ut(t.N,e.N):t instanceof Le&&e instanceof Le}(t.transform,e.transform)}class me{constructor(t,e){this.version=t,this.transformResults=e}}class be{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new be}static exists(t){return new be(void 0,t)}static updateTime(t){return new be(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function pe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ce{}function ze(t,e,i){t instanceof Ue?function(t,e,i){const n=t.value.clone(),M=Ge(t.fieldTransforms,e,i.transformResults);n.setAll(M),e.convertToFoundDocument(i.version,n).setHasCommittedMutations()}(t,e,i):t instanceof ke?function(t,e,i){if(!pe(t.precondition,e))return void e.convertToUnknownDocument(i.version);const n=Ge(t.fieldTransforms,e,i.transformResults),M=e.data;M.setAll(We(t)),M.setAll(n),e.convertToFoundDocument(i.version,M).setHasCommittedMutations()}(t,e,i):function(t,e,i){e.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,i)}function fe(t,e,i){t instanceof Ue?function(t,e,i){if(!pe(t.precondition,e))return;const n=t.value.clone(),M=Je(t.fieldTransforms,i,e);n.setAll(M),e.convertToFoundDocument(Oe(e),n).setHasLocalMutations()}(t,e,i):t instanceof ke?function(t,e,i){if(!pe(t.precondition,e))return;const n=Je(t.fieldTransforms,i,e),M=e.data;M.setAll(We(t)),M.setAll(n),e.convertToFoundDocument(Oe(e),M).setHasLocalMutations()}(t,e,i):function(t,e){pe(t.precondition,e)&&e.convertToNoDocument(J.min())}(t,e)}function Ye(t,e){let i=null;for(const n of t.fieldTransforms){const t=e.data.field(n.field),M=Ne(n.transform,t||null);null!=M&&(null==i&&(i=wt.empty()),i.set(n.field,M))}return i||null}function ve(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&k(t,e,(t,e)=>Ee(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Oe(t){return t.isFoundDocument()?t.version:J.min()}class Ue extends Ce{constructor(t,e,i,n=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=n,this.type=0}}class ke extends Ce{constructor(t,e,i,n,M=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=n,this.fieldTransforms=M,this.type=1}}function We(t){const e=new Map;return t.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const n=t.data.field(i);e.set(i,n)}}),e}function Ge(t,e,i){const n=new Map;d(t.length===i.length);for(let M=0;M<i.length;M++){const s=t[M],a=s.transform,r=e.data.field(s.field);n.set(s.field,De(a,r,i[M]))}return n}function Je(t,e,i){const n=new Map;for(const M of t){const t=M.transform,s=i.data.field(M.field);n.set(M.field,Ae(t,s,e))}return n}class Ze extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Qe extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,Be;function Fe(t){switch(t){default:return j();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Re(t){if(void 0===t)return D("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ve.OK:return w.OK;case Ve.CANCELLED:return w.CANCELLED;case Ve.UNKNOWN:return w.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return w.INTERNAL;case Ve.UNAVAILABLE:return w.UNAVAILABLE;case Ve.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ve.NOT_FOUND:return w.NOT_FOUND;case Ve.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ve.ABORTED:return w.ABORTED;case Ve.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ve.DATA_LOSS:return w.DATA_LOSS;default:return j()}}(Be=Ve||(Ve={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(t,e){this.comparator=t,this.root=e||_e.EMPTY}insert(t,e){return new Xe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(t){return new Xe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_e.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new He(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new He(this.root,t,this.comparator,!1)}getReverseIterator(){return new He(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new He(this.root,t,this.comparator,!0)}}class He{constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let M=1;for(;!t.isEmpty();)if(M=e?i(t.key,e):1,n&&(M*=-1),M<0)t=this.isReverse?t.left:t.right;else{if(0===M){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _e{constructor(t,e,i,n,M){this.key=t,this.value=e,this.color=null!=i?i:_e.RED,this.left=null!=n?n:_e.EMPTY,this.right=null!=M?M:_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,n,M){return new _e(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=M?M:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const M=i(t,n.key);return n=M<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===M?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return _e.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j();if(this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1,_e.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,i,n,M){return this}insert(t,e,i){return new _e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(t){this.comparator=t,this.data=new Xe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $e(this.data.getIterator())}getIteratorFrom(t){return new $e(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof qe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new qe(this.comparator);return e.data=t,e}}class $e{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Xe(rt.comparator);function ti(){return Ke}const ei=new Xe(rt.comparator);function ii(){return ei}const ni=new Xe(rt.comparator);function Mi(){return ni}const si=new qe(rt.comparator);function ai(...t){let e=si;for(const i of t)e=e.add(i);return e}const ri=new qe(U);function oi(){return ri}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,i,n,M){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=n,this.resolvedLimboDocuments=M}static createSynthesizedRemoteEventForCurrentChange(t,e){const i=new Map;return i.set(t,ci.createSynthesizedTargetChangeForCurrentChange(t,e)),new ui(J.min(),i,oi(),ti(),ai())}}class ci{constructor(t,e,i,n,M){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=n,this.removedDocuments=M}static createSynthesizedTargetChangeForCurrentChange(t,e){return new ci(_.EMPTY_BYTE_STRING,e,ai(),ai(),ai())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,i,n){this.$=t,this.removedTargetIds=e,this.key=i,this.O=n}}class Ii{constructor(t,e){this.targetId=t,this.M=e}}class li{constructor(t,e,i=_.EMPTY_BYTE_STRING,n=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=n}}class Ai{constructor(){this.F=0,this.L=Li(),this.B=_.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=ai(),e=ai(),i=ai();return this.L.forEach((n,M)=>{switch(M){case 0:t=t.add(n);break;case 2:e=e.add(n);break;case 1:i=i.add(n);break;default:j()}}),new ci(this.B,this.U,t,e,i)}H(){this.q=!1,this.L=Li()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class Di{constructor(t){this.et=t,this.nt=new Map,this.st=ti(),this.it=Ni(),this.rt=new qe(U)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,e=>{const i=this.ht(e);switch(t.state){case 0:this.lt(e)&&i.W(t.resumeToken);break;case 1:i.Z(),i.K||i.H(),i.W(t.resumeToken);break;case 2:i.Z(),i.K||this.removeTarget(e);break;case 3:this.lt(e)&&(i.tt(),i.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),i.W(t.resumeToken));break;default:j()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,i)=>{this.lt(i)&&e(i)})}dt(t){const e=t.targetId,i=t.M.count,n=this.wt(e);if(n){const t=n.target;if(Ct(t))if(0===i){const i=new rt(t.path);this.at(e,i,xt.newNoDocument(i,J.min()))}else d(1===i);else this._t(e)!==i&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((i,n)=>{const M=this.wt(n);if(M){if(i.current&&Ct(M.target)){const e=new rt(M.target.path);null!==this.st.get(e)||this.yt(n,e)||this.at(n,e,xt.newNoDocument(e,t))}i.j&&(e.set(n,i.G()),i.H())}});let i=ai();this.it.forEach((t,e)=>{let n=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(n=!1,!1)}),n&&(i=i.add(t))});const n=new ui(t,e,this.rt,this.st,i);return this.st=ti(),this.it=Ni(),this.rt=new qe(U),n}ct(t,e){if(!this.lt(t))return;const i=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,i),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,i){if(!this.lt(t))return;const n=this.ht(t);this.yt(t,e)?n.J(e,1):n.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),i&&(this.st=this.st.insert(e,i))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Ai,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new qe(U),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||A("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Ai),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function Ni(){return new Xe(rt.comparator)}function Li(){return new Xe(rt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),di=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Si{constructor(t,e){this.databaseId=t,this.C=e}}function hi(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wi(t,e){return t.C?e.toBase64():e.toUint8Array()}function yi(t,e){return hi(t,e.toTimestamp())}function xi(t){return d(!!t),J.fromTimestamp(function(t){const e=$(t);return new G(e.seconds,e.nanos)}(t))}function Ti(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ei(t){const e=B.fromString(t);return d(tn(e)),e}function mi(t,e){return Ti(t.databaseId,e.path)}function bi(t,e){const i=Ei(e);if(i.get(1)!==t.databaseId.projectId)throw new y(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+t.databaseId.projectId);if(i.get(3)!==t.databaseId.database)throw new y(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+t.databaseId.database);return new rt(fi(i))}function pi(t,e){return Ti(t.databaseId,e)}function Ci(t){const e=Ei(t);return 4===e.length?B.emptyPath():fi(e)}function zi(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fi(t){return d(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Yi(t,e,i){return{name:mi(t,e),fields:i.value.mapValue.fields}}function vi(t,e,i){const n=bi(t,e.name),M=xi(e.updateTime),s=new wt({mapValue:{fields:e.fields}}),a=xt.newFoundDocument(n,M,s);return i&&a.setHasCommittedMutations(),i?a.setHasCommittedMutations():a}function Oi(t,e){return"found"in e?function(t,e){d(!!e.found),e.found.name,e.found.updateTime;const i=bi(t,e.found.name),n=xi(e.found.updateTime),M=new wt({mapValue:{fields:e.found.fields}});return xt.newFoundDocument(i,n,M)}(t,e):"missing"in e?function(t,e){d(!!e.missing),d(!!e.readTime);const i=bi(t,e.missing),n=xi(e.readTime);return xt.newNoDocument(i,n)}(t,e):j()}function Ui(t,e){let i;if("targetChange"in e){e.targetChange;const n=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),M=e.targetChange.targetIds||[],s=function(t,e){return t.C?(d(void 0===e||"string"==typeof e),_.fromBase64String(e||"")):(d(void 0===e||e instanceof Uint8Array),_.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,r=a&&function(t){const e=void 0===t.code?w.UNKNOWN:Re(t.code);return new y(e,t.message||"")}(a);i=new li(n,M,s,r||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const M=bi(t,n.document.name),s=xi(n.document.updateTime),a=new wt({mapValue:{fields:n.document.fields}}),r=xt.newFoundDocument(M,s,a),o=n.targetIds||[],u=n.removedTargetIds||[];i=new gi(o,u,r.key,r)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const M=bi(t,n.document),s=n.readTime?xi(n.readTime):J.min(),a=xt.newNoDocument(M,s),r=n.removedTargetIds||[];i=new gi([],r,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const M=bi(t,n.document),s=n.removedTargetIds||[];i=new gi([],s,M,null)}else{if(!("filter"in e))return j();{e.filter;const t=e.filter;t.targetId;const n=t.count||0,M=new Pe(n),s=t.targetId;i=new Ii(s,M)}}return i}function ki(t,e){let i;if(e instanceof Ue)i={update:Yi(t,e.key,e.value)};else if(e instanceof Ze)i={delete:mi(t,e.key)};else if(e instanceof ke)i={update:Yi(t,e.key,e.data),updateMask:Ki(e.fieldMask)};else{if(!(e instanceof Qe))return j();i={verify:mi(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const i=e.transform;if(i instanceof Le)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof je)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof Se)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof we)return{fieldPath:e.field.canonicalString(),increment:i.N};throw j()}(0,t))),e.precondition.isNone||(i.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:yi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:j()}(t,e.precondition)),i}function Wi(t,e){const i=e.currentDocument?function(t){return void 0!==t.updateTime?be.updateTime(xi(t.updateTime)):void 0!==t.exists?be.exists(t.exists):be.none()}(e.currentDocument):be.none(),n=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let i=null;if("setToServerValue"in e)d("REQUEST_TIME"===e.setToServerValue),i=new Le;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];i=new je(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];i=new Se(t)}else"increment"in e?i=new we(t,e.increment):j();const n=R.fromServerFormat(e.fieldPath);return new Te(n,i)}(t,e)):[];if(e.update){e.update.name;const M=bi(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new X(e.map(t=>R.fromServerFormat(t)))}(e.updateMask);return new ke(M,s,t,i,n)}return new Ue(M,s,i,n)}if(e.delete){const n=bi(t,e.delete);return new Ze(n,i)}if(e.verify){const n=bi(t,e.verify);return new Qe(n,i)}return j()}function Gi(t,e){return t&&t.length>0?(d(void 0!==e),t.map(t=>function(t,e){let i=t.updateTime?xi(t.updateTime):xi(e);return i.isEqual(J.min())&&(i=xi(e)),new me(i,t.transformResults||[])}(t,e))):[]}function Ji(t,e){return{documents:[pi(t,e.path)]}}function Zi(t,e){const i={structuredQuery:{}},n=e.path;null!==e.collectionGroup?(i.parent=pi(t,n),i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i.parent=pi(t,n.popLast()),i.structuredQuery.from=[{collectionId:n.lastSegment()}]);const M=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(dt(t.value))return{unaryFilter:{field:Hi(t.field),op:"IS_NAN"}};if(jt(t.value))return{unaryFilter:{field:Hi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(dt(t.value))return{unaryFilter:{field:Hi(t.field),op:"IS_NOT_NAN"}};if(jt(t.value))return{unaryFilter:{field:Hi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(t.field),op:Xi(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);M&&(i.structuredQuery.where=M);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Hi(t.field),direction:Ri(t.dir)}}(t))}(e.orderBy);s&&(i.structuredQuery.orderBy=s);const a=function(t,e){return t.C||Mt(e)?e:{value:e}}(t,e.limit);return null!==a&&(i.structuredQuery.limit=a),e.startAt&&(i.structuredQuery.startAt=Bi(e.startAt)),e.endAt&&(i.structuredQuery.endAt=Bi(e.endAt)),i}function Qi(t){let e=Ci(t.parent);const i=t.structuredQuery,n=i.from?i.from.length:0;let M=null;if(n>0){d(1===n);const t=i.from[0];t.allDescendants?M=t.collectionId:e=e.child(t.collectionId)}let s=[];i.where&&(s=Vi(i.where));let a=[];i.orderBy&&(a=i.orderBy.map(t=>function(t){return new Pt(_i(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let r=null;i.limit&&(r=function(t){let e;return e="object"==typeof t?t.value:t,Mt(e)?null:e}(i.limit));let o=null;i.startAt&&(o=Fi(i.startAt));let u=null;return i.endAt&&(u=Fi(i.endAt)),Xt(e,M,a,s,r,"F",o,u)}function Pi(t,e){const i=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return null==i?null:{"goog-listen-tags":i}}function Vi(t){return t?void 0!==t.unaryFilter?[$i(t)]:void 0!==t.fieldFilter?[qi(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Vi(t)).reduce((t,e)=>t.concat(e)):j():[]}function Bi(t){return{before:t.before,values:t.position}}function Fi(t){const e=!!t.before,i=t.values||[];return new Zt(i,e)}function Ri(t){return ji[t]}function Xi(t){return di[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function _i(t){return R.fromServerFormat(t.fieldPath)}function qi(t){return zt.create(_i(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function $i(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_i(t.unaryFilter.field);return zt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(t.unaryFilter.field);return zt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=_i(t.unaryFilter.field);return zt.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const M=_i(t.unaryFilter.field);return zt.create(M,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function Ki(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){let e="";for(let i=0;i<t.length;i++)e.length>0&&(e=Mn(e)),e=nn(t.get(i),e);return Mn(e)}function nn(t,e){let i=e;const n=t.length;for(let M=0;M<n;M++){const e=t.charAt(M);switch(e){case"\0":i+="";break;case"":i+="";break;default:i+=e}}return i}function Mn(t){return t+""}function sn(t){const e=t.length;if(d(e>=2),2===e)return d(""===t.charAt(0)&&""===t.charAt(1)),B.emptyPath();const i=e-2,n=[];let M="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>i)&&j(),t.charAt(e+1)){case"":const i=t.substring(s,e);let a;0===M.length?a=i:(M+=i,a=M,M=""),n.push(a);break;case"":M+=t.substring(s,e),M+="\0";break;case"":M+=t.substring(s,e+1);break;default:j()}s=e+2}return new B(n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class rn{constructor(t,e,i){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=i}}rn.store="owner",rn.key="owner";class on{constructor(t,e,i){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=i}}on.store="mutationQueues",on.keyPath="userId";class un{constructor(t,e,i,n,M){this.userId=t,this.batchId=e,this.localWriteTimeMs=i,this.baseMutations=n,this.mutations=M}}un.store="mutations",un.keyPath="batchId",un.userMutationsIndex="userMutationsIndex",un.userMutationsKeyPath=["userId","batchId"];class cn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,en(e)]}static key(t,e,i){return[t,en(e),i]}}cn.store="documentMutations",cn.PLACEHOLDER=new cn;class gn{constructor(t,e){this.path=t,this.readTime=e}}class In{constructor(t,e){this.path=t,this.version=e}}class ln{constructor(t,e,i,n,M,s){this.unknownDocument=t,this.noDocument=e,this.document=i,this.hasCommittedMutations=n,this.readTime=M,this.parentPath=s}}ln.store="remoteDocuments",ln.readTimeIndex="readTimeIndex",ln.readTimeIndexPath="readTime",ln.collectionReadTimeIndex="collectionReadTimeIndex",ln.collectionReadTimeIndexPath=["parentPath","readTime"];class An{constructor(t){this.byteSize=t}}An.store="remoteDocumentGlobal",An.key="remoteDocumentGlobalKey";class Dn{constructor(t,e,i,n,M,s,a){this.targetId=t,this.canonicalId=e,this.readTime=i,this.resumeToken=n,this.lastListenSequenceNumber=M,this.lastLimboFreeSnapshotVersion=s,this.query=a}}Dn.store="targets",Dn.keyPath="targetId",Dn.queryTargetsIndexName="queryTargetsIndex",Dn.queryTargetsKeyPath=["canonicalId","targetId"];class Nn{constructor(t,e,i){this.targetId=t,this.path=e,this.sequenceNumber=i}}Nn.store="targetDocuments",Nn.keyPath=["targetId","path"],Nn.documentTargetsIndex="documentTargetsIndex",Nn.documentTargetsKeyPath=["path","targetId"];class Ln{constructor(t,e,i,n){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=i,this.targetCount=n}}Ln.key="targetGlobalKey",Ln.store="targetGlobal";class jn{constructor(t,e){this.collectionId=t,this.parent=e}}jn.store="collectionParents",jn.keyPath=["collectionId","parent"];class dn{constructor(t,e,i,n){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=i,this.inForeground=n}}dn.store="clientMetadata",dn.keyPath="clientId";class Sn{constructor(t,e,i){this.bundleId=t,this.createTime=e,this.version=i}}Sn.store="bundles",Sn.keyPath="bundleId";class hn{constructor(t,e,i){this.name=t,this.readTime=e,this.bundledQuery=i}}hn.store="namedQueries",hn.keyPath="name";const wn=[on.store,un.store,cn.store,ln.store,Dn.store,rn.store,Ln.store,Nn.store,dn.store,An.store,jn.store,Sn.store,hn.store],yn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Tn((i,n)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(i,n)},this.catchCallback=t=>{this.wrapFailure(e,t).next(i,n)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Tn?e:Tn.resolve(e)}catch(t){return Tn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Tn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Tn.reject(e)}static resolve(t){return new Tn((e,i)=>{e(t)})}static reject(t){return new Tn((e,i)=>{i(t)})}static waitFor(t){return new Tn((e,i)=>{let n=0,M=0,s=!1;t.forEach(t=>{++n,t.next(()=>{++M,s&&M===n&&e()},t=>i(t))}),s=!0,M===n&&e()})}static or(t){let e=Tn.resolve(!1);for(const i of t)e=e.next(t=>t?Tn.resolve(t):i());return e}static forEach(t,e){const i=[];return t.forEach((t,n)=>{i.push(e.call(this,t,n))}),this.waitFor(i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.It=new x,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{e.error?this.It.reject(new pn(t,e.error)):this.It.resolve()},this.transaction.onerror=e=>{const i=vn(e.target.error);this.It.reject(new pn(t,i))}}static open(t,e,i,n){try{return new En(e,t.transaction(n,i))}catch(t){throw new pn(e,t)}}get At(){return this.It.promise}abort(t){t&&this.It.reject(t),this.aborted||(A("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new zn(e)}}class mn{constructor(t,e,i){this.name=t,this.version=e,this.Rt=i,12.2===mn.bt(Object(a["l"])())&&D("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return A("SimpleDb","Removing database:",t),fn(window.indexedDB.deleteDatabase(t)).toPromise()}static Pt(){if(!Object(a["r"])())return!1;if(mn.vt())return!0;const t=Object(a["l"])(),e=mn.bt(t),i=0<e&&e<10,n=mn.Vt(t),M=0<n&&n<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||i||M)}static vt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({VUE_APP_URL:"http://168.232.79.90:30011/",VUE_APP_I18N_LOCALE:"es",VUE_APP_I18N_FALLBACK_LOCALE:"es",VUE_APP_DEFAULT_AUTH:"authapi",VUE_APP_APIKEY:"",VUE_APP_AUTHDOMAIN:"",VUE_APP_DATABASEURL:"",VUE_APP_PROJECTId:"",VUE_APP_STORAGEBUCKET:"",VUE_APP_MESSAGINGSENDERID:"",VUE_APP_APPId:"",VUE_APP_MEASUREMENTID:"",VUE_APP_SERVER:"http://168.232.79.90:30010/api/",NODE_ENV:"production",BASE_URL:"/"}))||void 0===e?void 0:e.St)}static Dt(t,e){return t.store(e)}static bt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static Vt(t){const e=t.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async Ct(t){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,i)=>{const n=indexedDB.open(this.name,this.version);n.onsuccess=t=>{const i=t.target.result;e(i)},n.onblocked=()=>{i(new pn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=e=>{const n=e.target.error;"VersionError"===n.name?i(new y(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===n.name?i(new y(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+n)):i(new pn(t,n))},n.onupgradeneeded=t=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Rt.Nt(e,n.transaction,t.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=t=>this.kt(t)),this.db}xt(t){this.kt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,i,n){const M="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Ct(t);const e=En.open(this.db,t,M?"readonly":"readwrite",i),s=n(e).catch(t=>(e.abort(t),Tn.reject(t))).toPromise();return s.catch(()=>{}),await e.At,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(A("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class bn{constructor(t){this.$t=t,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(t){this.$t=t}done(){this.Ot=!0}Lt(t){this.Mt=t}delete(){return fn(this.$t.delete())}}class pn extends y{constructor(t,e){super(w.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Cn(t){return"IndexedDbTransactionError"===t.name}class zn{constructor(t){this.store=t}put(t,e){let i;return void 0!==e?(A("SimpleDb","PUT",this.store.name,t,e),i=this.store.put(e,t)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",t),i=this.store.put(t)),fn(i)}add(t){return A("SimpleDb","ADD",this.store.name,t,t),fn(this.store.add(t))}get(t){return fn(this.store.get(t)).next(e=>(void 0===e&&(e=null),A("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return A("SimpleDb","DELETE",this.store.name,t),fn(this.store.delete(t))}count(){return A("SimpleDb","COUNT",this.store.name),fn(this.store.count())}Bt(t,e){const i=this.cursor(this.options(t,e)),n=[];return this.Ut(i,(t,e)=>{n.push(e)}).next(()=>n)}qt(t,e){A("SimpleDb","DELETE ALL",this.store.name);const i=this.options(t,e);i.Kt=!1;const n=this.cursor(i);return this.Ut(n,(t,e,i)=>i.delete())}jt(t,e){let i;e?i=t:(i={},e=t);const n=this.cursor(i);return this.Ut(n,e)}Qt(t){const e=this.cursor({});return new Tn((i,n)=>{e.onerror=t=>{const e=vn(t.target.error);n(e)},e.onsuccess=e=>{const n=e.target.result;n?t(n.primaryKey,n.value).next(t=>{t?n.continue():i()}):i()}})}Ut(t,e){const i=[];return new Tn((n,M)=>{t.onerror=t=>{M(t.target.error)},t.onsuccess=t=>{const M=t.target.result;if(!M)return void n();const s=new bn(M),a=e(M.primaryKey,M.value,s);if(a instanceof Tn){const t=a.catch(t=>(s.done(),Tn.reject(t)));i.push(t)}s.isDone?n():null===s.Ft?M.continue():M.continue(s.Ft)}}).next(()=>Tn.waitFor(i))}options(t,e){let i;return void 0!==t&&("string"==typeof t?i=t:e=t),{index:i,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const i=this.store.index(t.index);return t.Kt?i.openKeyCursor(t.range,e):i.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function fn(t){return new Tn((e,i)=>{t.onsuccess=t=>{const i=t.target.result;e(i)},t.onerror=t=>{const e=vn(t.target.error);i(e)}})}let Yn=!1;function vn(t){const e=mn.bt(Object(a["l"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yn||(Yn=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends xn{constructor(t,e){super(),this.Wt=t,this.currentSequenceNumber=e}}function Un(t,e){const i=h(t);return mn.Dt(i.Wt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e,i,n){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=n}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let n=0;n<this.mutations.length;n++){const e=this.mutations[n];e.key.isEqual(t.key)&&ze(e,t,i[n])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&fe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&fe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const i=t.get(e.key),n=i;this.applyToLocalView(n),i.isValidDocument()||n.convertToNoDocument(J.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ai())}isEqual(t){return this.batchId===t.batchId&&k(this.mutations,t.mutations,(t,e)=>ve(t,e))&&k(this.baseMutations,t.baseMutations,(t,e)=>ve(t,e))}}class Wn{constructor(t,e,i,n){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=n}static from(t,e,i){d(t.mutations.length===i.length);let n=Mi();const M=t.mutations;for(let s=0;s<M.length;s++)n=n.insert(M[s].key,i[s].version);return new Wn(t,e,i,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,i,n,M=J.min(),s=J.min(),a=_.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=n,this.snapshotVersion=M,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(t){return new Gn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.Gt=t}}function Zn(t,e){if(e.document)return vi(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=rt.fromSegments(e.noDocument.path),i=Fn(e.noDocument.readTime),n=xt.newNoDocument(t,i);return e.hasCommittedMutations?n.setHasCommittedMutations():n}if(e.unknownDocument){const t=rt.fromSegments(e.unknownDocument.path),i=Fn(e.unknownDocument.version);return xt.newUnknownDocument(t,i)}return j()}function Qn(t,e,i){const n=Pn(i),M=e.key.path.popLast().toArray();if(e.isFoundDocument()){const i=function(t,e){return{name:mi(t,e.key),fields:e.data.value.mapValue.fields,updateTime:hi(t,e.version.toTimestamp())}}(t.Gt,e),s=e.hasCommittedMutations;return new ln(null,null,i,s,n,M)}if(e.isNoDocument()){const t=e.key.path.toArray(),i=Bn(e.version),s=e.hasCommittedMutations;return new ln(null,new gn(t,i),null,s,n,M)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),i=Bn(e.version);return new ln(new In(t,i),null,null,!0,n,M)}return j()}function Pn(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Vn(t){const e=new G(t[0],t[1]);return J.fromTimestamp(e)}function Bn(t){const e=t.toTimestamp();return new an(e.seconds,e.nanoseconds)}function Fn(t){const e=new G(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function Rn(t,e){const i=(e.baseMutations||[]).map(e=>Wi(t.Gt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const i=e.mutations[s+1];t.updateTransforms=i.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(e=>Wi(t.Gt,e)),M=G.fromMillis(e.localWriteTimeMs);return new kn(e.batchId,M,i,n)}function Xn(t){const e=Fn(t.readTime),i=void 0!==t.lastLimboFreeSnapshotVersion?Fn(t.lastLimboFreeSnapshotVersion):J.min();let n;var M;return void 0!==t.query.documents?(d(1===(M=t.query).documents.length),n=ie(Ht(Ci(M.documents[0])))):n=function(t){return ie(Qi(t))}(t.query),new Gn(n,t.targetId,0,t.lastListenSequenceNumber,e,i,_.fromBase64String(t.resumeToken))}function Hn(t,e){const i=Bn(e.snapshotVersion),n=Bn(e.lastLimboFreeSnapshotVersion);let M;M=Ct(e.target)?Ji(t.Gt,e.target):Zi(t.Gt,e.target);const s=e.resumeToken.toBase64();return new Dn(e.targetId,mt(e.target),i,s,e.sequenceNumber,n,M)}function _n(t){const e=Qi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ne(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{getBundleMetadata(t,e){return $n(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:Fn(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return $n(t).put({bundleId:(i=e).id,createTime:Bn(xi(i.createTime)),version:i.version});var i}getNamedQuery(t,e){return Kn(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:_n(e.bundledQuery),readTime:Fn(e.readTime)};var e})}saveNamedQuery(t,e){return Kn(t).put(function(t){return{name:t.name,readTime:Bn(xi(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function $n(t){return Un(t,Sn.store)}function Kn(t){return Un(t,hn.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.zt=new eM}addToCollectionParentIndex(t,e){return this.zt.add(e),Tn.resolve()}getCollectionParents(t,e){return Tn.resolve(this.zt.getEntries(e))}}class eM{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),n=this.index[e]||new qe(B.comparator),M=!n.has(i);return this.index[e]=n.add(i),M}has(t){const e=t.lastSegment(),i=t.popLast(),n=this.index[e];return n&&n.has(i)}getEntries(t){return(this.index[t]||new qe(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.Ht=new eM}addToCollectionParentIndex(t,e){if(!this.Ht.has(e)){const i=e.lastSegment(),n=e.popLast();t.addOnCommittedListener(()=>{this.Ht.add(e)});const M={collectionId:i,parent:en(n)};return nM(t).put(M)}return Tn.resolve()}getCollectionParents(t,e){const i=[],n=IDBKeyRange.bound([e,""],[W(e),""],!1,!0);return nM(t).Bt(n).next(t=>{for(const n of t){if(n.collectionId!==e)break;i.push(sn(n.parent))}return i})}}function nM(t){return Un(t,jn.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sM{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new sM(t,sM.DEFAULT_COLLECTION_PERCENTILE,sM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(t,e,i){const n=t.store(un.store),M=t.store(cn.store),s=[],a=IDBKeyRange.only(i.batchId);let r=0;const o=n.jt({range:a},(t,e,i)=>(r++,i.delete()));s.push(o.next(()=>{d(1===r)}));const u=[];for(const c of i.mutations){const t=cn.key(e,c.key.path,i.batchId);s.push(M.delete(t)),u.push(c.key)}return Tn.waitFor(s).next(()=>u)}function rM(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw j();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sM.DEFAULT_COLLECTION_PERCENTILE=10,sM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sM.DEFAULT=new sM(41943040,sM.DEFAULT_COLLECTION_PERCENTILE,sM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sM.DISABLED=new sM(-1,0,0);class oM{constructor(t,e,i,n){this.userId=t,this.k=e,this.Jt=i,this.referenceDelegate=n,this.Yt={}}static Xt(t,e,i,n){d(""!==t.uid);const M=t.isAuthenticated()?t.uid:"";return new oM(M,e,i,n)}checkEmpty(t){let e=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cM(t).jt({index:un.userMutationsIndex,range:i},(t,i,n)=>{e=!1,n.done()}).next(()=>e)}addMutationBatch(t,e,i,n){const M=gM(t),s=cM(t);return s.add({}).next(a=>{d("number"==typeof a);const r=new kn(a,e,i,n),o=function(t,e,i){const n=i.baseMutations.map(e=>ki(t.Gt,e)),M=i.mutations.map(e=>ki(t.Gt,e));return new un(e,i.batchId,i.localWriteTime.toMillis(),n,M)}(this.k,this.userId,r),u=[];let c=new qe((t,e)=>U(t.canonicalString(),e.canonicalString()));for(const t of n){const e=cn.key(this.userId,t.key.path,a);c=c.add(t.key.path.popLast()),u.push(s.put(o)),u.push(M.put(e,cn.PLACEHOLDER))}return c.forEach(e=>{u.push(this.Jt.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Yt[a]=r.keys()}),Tn.waitFor(u).next(()=>r)})}lookupMutationBatch(t,e){return cM(t).get(e).next(t=>t?(d(t.userId===this.userId),Rn(this.k,t)):null)}Zt(t,e){return this.Yt[e]?Tn.resolve(this.Yt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const i=t.keys();return this.Yt[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const i=e+1,n=IDBKeyRange.lowerBound([this.userId,i]);let M=null;return cM(t).jt({index:un.userMutationsIndex,range:n},(t,e,n)=>{e.userId===this.userId&&(d(e.batchId>=i),M=Rn(this.k,e)),n.done()}).next(()=>M)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return cM(t).jt({index:un.userMutationsIndex,range:e,reverse:!0},(t,e,n)=>{i=e.batchId,n.done()}).next(()=>i)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cM(t).Bt(un.userMutationsIndex,e).next(t=>t.map(t=>Rn(this.k,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const i=cn.prefixForPath(this.userId,e.path),n=IDBKeyRange.lowerBound(i),M=[];return gM(t).jt({range:n},(i,n,s)=>{const[a,r,o]=i,u=sn(r);if(a===this.userId&&e.path.isEqual(u))return cM(t).get(o).next(t=>{if(!t)throw j();d(t.userId===this.userId),M.push(Rn(this.k,t))});s.done()}).next(()=>M)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new qe(U);const n=[];return e.forEach(e=>{const M=cn.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(M),a=gM(t).jt({range:s},(t,n,M)=>{const[s,a,r]=t,o=sn(a);s===this.userId&&e.path.isEqual(o)?i=i.add(r):M.done()});n.push(a)}),Tn.waitFor(n).next(()=>this.te(t,i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,n=i.length+1,M=cn.prefixForPath(this.userId,i),s=IDBKeyRange.lowerBound(M);let a=new qe(U);return gM(t).jt({range:s},(t,e,M)=>{const[s,r,o]=t,u=sn(r);s===this.userId&&i.isPrefixOf(u)?u.length===n&&(a=a.add(o)):M.done()}).next(()=>this.te(t,a))}te(t,e){const i=[],n=[];return e.forEach(e=>{n.push(cM(t).get(e).next(t=>{if(null===t)throw j();d(t.userId===this.userId),i.push(Rn(this.k,t))}))}),Tn.waitFor(n).next(()=>i)}removeMutationBatch(t,e){return aM(t.Wt,this.userId,e).next(i=>(t.addOnCommittedListener(()=>{this.ee(e.batchId)}),Tn.forEach(i,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}ee(t){delete this.Yt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Tn.resolve();const i=IDBKeyRange.lowerBound(cn.prefixForUser(this.userId)),n=[];return gM(t).jt({range:i},(t,e,i)=>{if(t[0]===this.userId){const e=sn(t[1]);n.push(e)}else i.done()}).next(()=>{d(0===n.length)})})}containsKey(t,e){return uM(t,this.userId,e)}ne(t){return IM(t).get(this.userId).next(t=>t||new on(this.userId,-1,""))}}function uM(t,e,i){const n=cn.prefixForPath(e,i.path),M=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return gM(t).jt({range:s,Kt:!0},(t,i,n)=>{const[s,r,o]=t;s===e&&r===M&&(a=!0),n.done()}).next(()=>a)}function cM(t){return Un(t,un.store)}function gM(t){return Un(t,cn.store)}function IM(t){return Un(t,on.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new lM(0)}static re(){return new lM(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(t,e){this.referenceDelegate=t,this.k=e}allocateTargetId(t){return this.oe(t).next(e=>{const i=new lM(e.highestTargetId);return e.highestTargetId=i.next(),this.ce(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.oe(t).next(t=>J.fromTimestamp(new G(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.oe(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,i){return this.oe(t).next(n=>(n.highestListenSequenceNumber=e,i&&(n.lastRemoteSnapshotVersion=i.toTimestamp()),e>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e),this.ce(t,n)))}addTargetData(t,e){return this.ae(t,e).next(()=>this.oe(t).next(i=>(i.targetCount+=1,this.ue(e,i),this.ce(t,i))))}updateTargetData(t,e){return this.ae(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>DM(t).delete(e.targetId)).next(()=>this.oe(t)).next(e=>(d(e.targetCount>0),e.targetCount-=1,this.ce(t,e)))}removeTargets(t,e,i){let n=0;const M=[];return DM(t).jt((s,a)=>{const r=Xn(a);r.sequenceNumber<=e&&null===i.get(r.targetId)&&(n++,M.push(this.removeTargetData(t,r)))}).next(()=>Tn.waitFor(M)).next(()=>n)}forEachTarget(t,e){return DM(t).jt((t,i)=>{const n=Xn(i);e(n)})}oe(t){return NM(t).get(Ln.key).next(t=>(d(null!==t),t))}ce(t,e){return NM(t).put(Ln.key,e)}ae(t,e){return DM(t).put(Hn(this.k,e))}ue(t,e){let i=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,i=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,i=!0),i}getTargetCount(t){return this.oe(t).next(t=>t.targetCount)}getTargetData(t,e){const i=mt(e),n=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let M=null;return DM(t).jt({range:n,index:Dn.queryTargetsIndexName},(t,i,n)=>{const s=Xn(i);pt(e,s.target)&&(M=s,n.done())}).next(()=>M)}addMatchingKeys(t,e,i){const n=[],M=LM(t);return e.forEach(e=>{const s=en(e.path);n.push(M.put(new Nn(i,s))),n.push(this.referenceDelegate.addReference(t,i,e))}),Tn.waitFor(n)}removeMatchingKeys(t,e,i){const n=LM(t);return Tn.forEach(e,e=>{const M=en(e.path);return Tn.waitFor([n.delete([i,M]),this.referenceDelegate.removeReference(t,i,e)])})}removeMatchingKeysForTargetId(t,e){const i=LM(t),n=IDBKeyRange.bound([e],[e+1],!1,!0);return i.delete(n)}getMatchingKeysForTargetId(t,e){const i=IDBKeyRange.bound([e],[e+1],!1,!0),n=LM(t);let M=ai();return n.jt({range:i,Kt:!0},(t,e,i)=>{const n=sn(t[1]),s=new rt(n);M=M.add(s)}).next(()=>M)}containsKey(t,e){const i=en(e.path),n=IDBKeyRange.bound([i],[W(i)],!1,!0);let M=0;return LM(t).jt({index:Nn.documentTargetsIndex,Kt:!0,range:n},([t,e],i,n)=>{0!==t&&(M++,n.done())}).next(()=>M>0)}Et(t,e){return DM(t).get(e).next(t=>t?Xn(t):null)}}function DM(t){return Un(t,Dn.store)}function NM(t){return Un(t,Ln.store)}function LM(t){return Un(t,Nn.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jM(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==yn)throw t;A("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM([t,e],[i,n]){const M=U(t,i);return 0===M?U(e,n):M}class SM{constructor(t){this.he=t,this.buffer=new qe(dM),this.le=0}fe(){return++this.le}de(t){const e=[t,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();dM(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class hM{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.we=!1,this._e=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(t)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(t){const e=this.we?3e5:6e4;A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this._e=null,this.we=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Cn(t)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await jM(t)}await this.me(t)})}}class wM{constructor(t,e){this.ge=t,this.params=e}calculateTargetCount(t,e){return this.ge.ye(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Tn.resolve(Y.I);const i=new SM(e);return this.ge.forEachTarget(t,t=>i.de(t.sequenceNumber)).next(()=>this.ge.pe(t,t=>i.de(t))).next(()=>i.maxValue)}removeTargets(t,e,i){return this.ge.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.ge.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector","Garbage collection skipped; disabled"),Tn.resolve(MM)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),MM):this.Te(t,e))}getCacheSize(t){return this.ge.getCacheSize(t)}Te(t,e){let i,n,M,a,r,o,u;const c=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),n=this.params.maximumSequenceNumbersToCollect):n=e,a=Date.now(),this.nthSequenceNumber(t,n))).next(n=>(i=n,r=Date.now(),this.removeTargets(t,i,e))).next(e=>(M=e,o=Date.now(),this.removeOrphanedDocuments(t,i))).next(t=>(u=Date.now(),I()<=s["a"].DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${a-c}ms\n\tDetermined least recently used ${n} in `+(r-a)+"ms\n"+`\tRemoved ${M} targets in `+(o-r)+"ms\n"+`\tRemoved ${t} documents in `+(u-o)+"ms\n"+`Total Duration: ${u-c}ms`),Tn.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:M,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new wM(t,e)}(this,e)}ye(t){const e=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Ee(t){let e=0;return this.pe(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pe(t,e){return this.Ie(t,(t,i)=>e(i))}addReference(t,e,i){return xM(t,i)}removeReference(t,e,i){return xM(t,i)}removeTargets(t,e,i){return this.db.getTargetCache().removeTargets(t,e,i)}markPotentiallyOrphaned(t,e){return xM(t,e)}Ae(t,e){return function(t,e){let i=!1;return IM(t).Qt(n=>uM(t,n,e).next(t=>(t&&(i=!0),Tn.resolve(!t)))).next(()=>i)}(t,e)}removeOrphanedDocuments(t,e){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),n=[];let M=0;return this.Ie(t,(s,a)=>{if(a<=e){const e=this.Ae(t,s).next(e=>{if(!e)return M++,i.getEntry(t,s).next(()=>(i.removeEntry(s),LM(t).delete([0,en(s.path)])))});n.push(e)}}).next(()=>Tn.waitFor(n)).next(()=>i.apply(t)).next(()=>M)}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,i)}updateLimboDocument(t,e){return xM(t,e)}Ie(t,e){const i=LM(t);let n,M=Y.I;return i.jt({index:Nn.documentTargetsIndex},([t,i],{path:s,sequenceNumber:a})=>{0===t?(M!==Y.I&&e(new rt(sn(n)),M),M=a,n=s):M=Y.I}).next(()=>{M!==Y.I&&e(new rt(sn(n)),M)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function xM(t,e){return LM(t).put(function(t,e){return new Nn(0,en(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0!==i)for(const[n,M]of i)if(this.equalsFn(n,t))return M}has(t){return void 0!==this.get(t)}set(t,e){const i=this.mapKeyFn(t),n=this.inner[i];if(void 0!==n){for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return void(n[i]=[t,e]);n.push([t,e])}else this.inner[i]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0===i)return!1;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return 1===i.length?delete this.inner[e]:i.splice(n,1),!0;return!1}forEach(t){Q(this.inner,(e,i)=>{for(const[n,M]of i)t(n,M)})}isEmpty(){return P(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(){this.changes=new TM(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:J.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:xt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return void 0!==i?Tn.resolve(i.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(t,e){this.k=t,this.Jt=e}addEntry(t,e,i){return CM(t).put(zM(e),i)}removeEntry(t,e){const i=CM(t),n=zM(e);return i.delete(n)}updateMetadata(t,e){return this.getMetadata(t).next(i=>(i.byteSize+=e,this.Re(t,i)))}getEntry(t,e){return CM(t).get(zM(e)).next(t=>this.be(e,t))}Pe(t,e){return CM(t).get(zM(e)).next(t=>({document:this.be(e,t),size:rM(t)}))}getEntries(t,e){let i=ti();return this.ve(t,e,(t,e)=>{const n=this.be(t,e);i=i.insert(t,n)}).next(()=>i)}Ve(t,e){let i=ti(),n=new Xe(rt.comparator);return this.ve(t,e,(t,e)=>{const M=this.be(t,e);i=i.insert(t,M),n=n.insert(t,rM(e))}).next(()=>({documents:i,Se:n}))}ve(t,e,i){if(e.isEmpty())return Tn.resolve();const n=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),M=e.getIterator();let s=M.getNext();return CM(t).jt({range:n},(t,e,n)=>{const a=rt.fromSegments(t);for(;s&&rt.comparator(s,a)<0;)i(s,null),s=M.getNext();s&&s.isEqual(a)&&(i(s,e),s=M.hasNext()?M.getNext():null),s?n.Lt(s.path.toArray()):n.done()}).next(()=>{for(;s;)i(s,null),s=M.hasNext()?M.getNext():null})}getDocumentsMatchingQuery(t,e,i){let n=ti();const M=e.path.length+1,s={};if(i.isEqual(J.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),n=Pn(i);s.range=IDBKeyRange.lowerBound([t,n],!0),s.index=ln.collectionReadTimeIndex}return CM(t).jt(s,(t,i,s)=>{if(t.length!==M)return;const a=Zn(this.k,i);e.path.isPrefixOf(a.key.path)?re(e,a)&&(n=n.insert(a.key,a)):s.done()}).next(()=>n)}newChangeBuffer(t){return new bM(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return pM(t).get(An.key).next(t=>(d(!!t),t))}Re(t,e){return pM(t).put(An.key,e)}be(t,e){if(e){const t=Zn(this.k,e);if(!t.isNoDocument()||!t.version.isEqual(J.min()))return t}return xt.newInvalidDocument(t)}}class bM extends EM{constructor(t,e){super(),this.De=t,this.trackRemovals=e,this.Ce=new TM(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let i=0,n=new qe((t,e)=>U(t.canonicalString(),e.canonicalString()));return this.changes.forEach((M,s)=>{const a=this.Ce.get(M);if(s.document.isValidDocument()){const r=Qn(this.De.k,s.document,this.getReadTime(M));n=n.add(M.path.popLast());const o=rM(r);i+=o-a,e.push(this.De.addEntry(t,M,r))}else if(i-=a,this.trackRemovals){const i=Qn(this.De.k,xt.newNoDocument(M,J.min()),this.getReadTime(M));e.push(this.De.addEntry(t,M,i))}else e.push(this.De.removeEntry(t,M))}),n.forEach(i=>{e.push(this.De.Jt.addToCollectionParentIndex(t,i))}),e.push(this.De.updateMetadata(t,i)),Tn.waitFor(e)}getFromCache(t,e){return this.De.Pe(t,e).next(t=>(this.Ce.set(e,t.size),t.document))}getAllFromCache(t,e){return this.De.Ve(t,e).next(({documents:t,Se:e})=>(e.forEach((t,e)=>{this.Ce.set(t,e)}),t))}}function pM(t){return Un(t,An.store)}function CM(t){return Un(t,ln.store)}function zM(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(t){this.k=t}Nt(t,e,i,n){d(i<n&&i>=0&&n<=11);const M=new En("createOrUpgrade",e);i<1&&n>=1&&(function(t){t.createObjectStore(rn.store)}(t),function(t){t.createObjectStore(on.store,{keyPath:on.keyPath}),t.createObjectStore(un.store,{keyPath:un.keyPath,autoIncrement:!0}).createIndex(un.userMutationsIndex,un.userMutationsKeyPath,{unique:!0}),t.createObjectStore(cn.store)}(t),YM(t),function(t){t.createObjectStore(ln.store)}(t));let s=Tn.resolve();return i<3&&n>=3&&(0!==i&&(function(t){t.deleteObjectStore(Nn.store),t.deleteObjectStore(Dn.store),t.deleteObjectStore(Ln.store)}(t),YM(t)),s=s.next(()=>function(t){const e=t.store(Ln.store),i=new Ln(0,0,J.min().toTimestamp(),0);return e.put(Ln.key,i)}(M))),i<4&&n>=4&&(0!==i&&(s=s.next(()=>function(t,e){return e.store(un.store).Bt().next(i=>{t.deleteObjectStore(un.store),t.createObjectStore(un.store,{keyPath:un.keyPath,autoIncrement:!0}).createIndex(un.userMutationsIndex,un.userMutationsKeyPath,{unique:!0});const n=e.store(un.store),M=i.map(t=>n.put(t));return Tn.waitFor(M)})}(t,M))),s=s.next(()=>{!function(t){t.createObjectStore(dn.store,{keyPath:dn.keyPath})}(t)})),i<5&&n>=5&&(s=s.next(()=>this.Ne(M))),i<6&&n>=6&&(s=s.next(()=>(function(t){t.createObjectStore(An.store)}(t),this.ke(M)))),i<7&&n>=7&&(s=s.next(()=>this.xe(M))),i<8&&n>=8&&(s=s.next(()=>this.$e(t,M))),i<9&&n>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(ln.store);e.createIndex(ln.readTimeIndex,ln.readTimeIndexPath,{unique:!1}),e.createIndex(ln.collectionReadTimeIndex,ln.collectionReadTimeIndexPath,{unique:!1})}(e)})),i<10&&n>=10&&(s=s.next(()=>this.Oe(M))),i<11&&n>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(Sn.store,{keyPath:Sn.keyPath})}(t),function(t){t.createObjectStore(hn.store,{keyPath:hn.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)})),s}ke(t){let e=0;return t.store(ln.store).jt((t,i)=>{e+=rM(i)}).next(()=>{const i=new An(e);return t.store(An.store).put(An.key,i)})}Ne(t){const e=t.store(on.store),i=t.store(un.store);return e.Bt().next(e=>Tn.forEach(e,e=>{const n=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return i.Bt(un.userMutationsIndex,n).next(i=>Tn.forEach(i,i=>{d(i.userId===e.userId);const n=Rn(this.k,i);return aM(t,e.userId,n).next(()=>{})}))}))}xe(t){const e=t.store(Nn.store),i=t.store(ln.store);return t.store(Ln.store).get(Ln.key).next(t=>{const n=[];return i.jt((i,M)=>{const s=new B(i),a=function(t){return[0,en(t)]}(s);n.push(e.get(a).next(i=>i?Tn.resolve():(i=>e.put(new Nn(0,en(i),t.highestListenSequenceNumber)))(s)))}).next(()=>Tn.waitFor(n))})}$e(t,e){t.createObjectStore(jn.store,{keyPath:jn.keyPath});const i=e.store(jn.store),n=new eM,M=t=>{if(n.add(t)){const e=t.lastSegment(),n=t.popLast();return i.put({collectionId:e,parent:en(n)})}};return e.store(ln.store).jt({Kt:!0},(t,e)=>{const i=new B(t);return M(i.popLast())}).next(()=>e.store(cn.store).jt({Kt:!0},([t,e,i],n)=>{const s=sn(e);return M(s.popLast())}))}Oe(t){const e=t.store(Dn.store);return e.jt((t,i)=>{const n=Xn(i),M=Hn(this.k,n);return e.put(M)})}}function YM(t){t.createObjectStore(Nn.store,{keyPath:Nn.keyPath}).createIndex(Nn.documentTargetsIndex,Nn.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Dn.store,{keyPath:Dn.keyPath}).createIndex(Dn.queryTargetsIndexName,Dn.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Ln.store)}const vM="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class OM{constructor(t,e,i,n,M,s,a,r,o,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=i,this.Me=M,this.window=s,this.document=a,this.Fe=o,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=t=>Promise.resolve(),!OM.Pt())throw new y(w.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new yM(this,n),this.Ge=e+"main",this.k=new Jn(r),this.ze=new mn(this.Ge,11,new fM(this.k)),this.He=new AM(this.referenceDelegate,this.k),this.Jt=new iM,this.Je=function(t,e){return new mM(t,e)}(this.k,this.Jt),this.Ye=new qn,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&D("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(w.FAILED_PRECONDITION,vM);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.He.getHighestSequenceNumber(t))}).then(t=>{this.Be=new Y(t,this.Fe)}).then(()=>{this.Ue=!0}).catch(t=>(this.ze&&this.ze.close(),Promise.reject(t)))}sn(t){return this.We=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ze.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>kM(t).put(new dn(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(t).next(t=>{t||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(t)).next(e=>this.isPrimary&&!e?this.cn(t).next(()=>!1):!!e&&this.an(t).next(()=>!0))).catch(t=>{if(Cn(t))return A("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Me.enqueueRetryable(()=>this.We(t)),this.isPrimary=t})}rn(t){return UM(t).get(rn.key).next(t=>Tn.resolve(this.un(t)))}hn(t){return kM(t).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Un(t,dn.store);return e.Bt().next(t=>{const i=this.dn(t,18e5),n=t.filter(t=>-1===i.indexOf(t));return Tn.forEach(n,t=>e.delete(t.clientId)).next(()=>n)})}).catch(()=>[]);if(this.Xe)for(const e of t)this.Xe.removeItem(this.wn(e.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(t){return!!t&&t.ownerId===this.clientId}on(t){return this.Le?Tn.resolve(!0):UM(t).get(rn.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)){if(this.un(e)&&this.networkEnabled)return!0;if(!this.un(e)){if(!e.allowTabSynchronization)throw new y(w.FAILED_PRECONDITION,vM);return!1}}return!(!this.networkEnabled||!this.inForeground)||kM(t).Bt().next(t=>void 0===this.dn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,i=!this.inForeground&&t.inForeground,n=this.networkEnabled===t.networkEnabled;if(e||i&&n)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&A("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[rn.store,dn.store],t=>{const e=new On(t,Y.I);return this.cn(e).next(()=>this.hn(e))}),this.ze.close(),this.pn()}dn(t,e){return t.filter(t=>this.fn(t.updateTimeMs,e)&&!this._n(t.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",t=>kM(t).Bt().next(t=>this.dn(t,18e5).map(t=>t.clientId)))}get started(){return this.Ue}getMutationQueue(t){return oM.Xt(t,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(t,e,i){A("IndexedDbPersistence","Starting transaction:",t);const n="readonly"===e?"readonly":"readwrite";let M;return this.ze.runTransaction(t,n,wn,n=>(M=new On(n,this.Be?this.Be.next():Y.I),"readwrite-primary"===e?this.rn(M).next(t=>!!t||this.on(M)).next(e=>{if(!e)throw D(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new y(w.FAILED_PRECONDITION,yn);return i(M)}).next(t=>this.an(M).next(()=>t)):this.En(M).next(()=>i(M)))).then(t=>(M.raiseOnCommittedEvent(),t))}En(t){return UM(t).get(rn.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)&&!this.un(t)&&!(this.Le||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(w.FAILED_PRECONDITION,vM)})}an(t){const e=new rn(this.clientId,this.allowTabSynchronization,Date.now());return UM(t).put(rn.key,e)}static Pt(){return mn.Pt()}cn(t){const e=UM(t);return e.get(rn.key).next(t=>this.un(t)?(A("IndexedDbPersistence","Releasing primary lease."),e.delete(rn.key)):Tn.resolve())}fn(t,e){const i=Date.now();return!(t<i-e)&&(!(t>i)||(D(`Detected an update time that is in the future: ${t} > ${i}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.qe=()=>{this.mn(),Object(a["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(t){var e;try{const i=null!==(null===(e=this.Xe)||void 0===e?void 0:e.getItem(this.wn(t)));return A("IndexedDbPersistence",`Client '${t}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(t){return D("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(t){D("Failed to set zombie client id.",t)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(t){}}wn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function UM(t){return Un(t,rn.store)}function kM(t){return Un(t,dn.store)}function WM(t,e){let i=t.projectId;return t.isDefaultDatabase||(i+="."+t.database),"firestore/"+e+"/"+i+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class GM{constructor(t,e){this.progress=t,this.In=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(t,e,i){this.Je=t,this.An=e,this.Jt=i}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(i=>this.bn(t,e,i))}bn(t,e,i){return this.Je.getEntry(t,e).next(t=>{for(const e of i)e.applyToLocalView(t);return t})}Pn(t,e){t.forEach((t,i)=>{for(const n of e)n.applyToLocalView(i)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Pn(e,t))}getDocumentsMatchingQuery(t,e,i){return function(t){return rt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):te(e)?this.Dn(t,e,i):this.Cn(t,e,i)}Sn(t,e){return this.Rn(t,new rt(e)).next(t=>{let e=ii();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,i){const n=e.collectionGroup;let M=ii();return this.Jt.getCollectionParents(t,n).next(s=>Tn.forEach(s,s=>{const a=function(t,e){return new Rt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(n));return this.Cn(t,a,i).next(t=>{t.forEach((t,e)=>{M=M.insert(t,e)})})}).next(()=>M))}Cn(t,e,i){let n,M;return this.Je.getDocumentsMatchingQuery(t,e,i).next(i=>(n=i,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(M=e,this.Nn(t,M,n).next(t=>{n=t;for(const e of M)for(const t of e.mutations){const i=t.key;let M=n.get(i);null==M&&(M=xt.newInvalidDocument(i),n=n.insert(i,M)),fe(t,M,e.localWriteTime),M.isFoundDocument()||(n=n.remove(i))}}))).next(()=>(n.forEach((t,i)=>{re(e,i)||(n=n.remove(t))}),n))}Nn(t,e,i){let n=ai();for(const s of e)for(const t of s.mutations)t instanceof ke&&null===i.get(t.key)&&(n=n.add(t.key));let M=i;return this.Je.getEntries(t,n).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(M=M.insert(t,e))}),M))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(t,e,i,n){this.targetId=t,this.fromCache=e,this.kn=i,this.xn=n}static $n(t,e){let i=ai(),n=ai();for(const M of e.docChanges)switch(M.type){case 0:i=i.add(M.doc.key);break;case 1:n=n.add(M.doc.key)}return new ZM(t,e.fromCache,i,n)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,i,n){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||i.isEqual(J.min())?this.Fn(t,e):this.Mn.vn(t,n).next(M=>{const a=this.Ln(e,M);return(_t(e)||qt(e))&&this.Bn(e.limitType,a,n,i)?this.Fn(t,e):(I()<=s["a"].DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ae(e)),this.Mn.getDocumentsMatchingQuery(t,e,i).next(t=>(a.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let i=new qe(oe(t));return e.forEach((e,n)=>{re(t,n)&&(i=i.add(n))}),i}Bn(t,e,i,n){if(i.size!==e.size)return!0;const M="F"===t?e.last():e.first();return!!M&&(M.hasPendingWrites||M.version.compareTo(n)>0)}Fn(t,e){return I()<=s["a"].DEBUG&&A("QueryEngine","Using full collection scan to execute query:",ae(e)),this.Mn.getDocumentsMatchingQuery(t,e,J.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(t,e,i,n){this.persistence=t,this.Un=e,this.k=n,this.qn=new Xe(U),this.Kn=new TM(t=>mt(t),pt),this.jn=J.min(),this.An=t.getMutationQueue(i),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new JM(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function VM(t,e,i,n){return new PM(t,e,i,n)}async function BM(t,e){const i=h(t);let n=i.An,M=i.Wn;const s=await i.persistence.runTransaction("Handle user change","readonly",t=>{let s;return i.An.getAllMutationBatches(t).next(a=>(s=a,n=i.persistence.getMutationQueue(e),M=new JM(i.Qn,n,i.persistence.getIndexManager()),n.getAllMutationBatches(t))).next(e=>{const i=[],n=[];let a=ai();for(const t of s){i.push(t.batchId);for(const e of t.mutations)a=a.add(e.key)}for(const t of e){n.push(t.batchId);for(const e of t.mutations)a=a.add(e.key)}return M.vn(t,a).next(t=>({Gn:t,removedBatchIds:i,addedBatchIds:n}))})});return i.An=n,i.Wn=M,i.Un.On(i.Wn),s}function FM(t,e){const i=h(t);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const n=e.batch.keys(),M=i.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,i,n){const M=i.batch,s=M.keys();let a=Tn.resolve();return s.forEach(t=>{a=a.next(()=>n.getEntry(e,t)).next(e=>{const s=i.docVersions.get(t);d(null!==s),e.version.compareTo(s)<0&&(M.applyToRemoteDocument(e,i),e.isValidDocument()&&n.addEntry(e,i.commitVersion))})}),a.next(()=>t.An.removeMutationBatch(e,M))}(i,t,e,M).next(()=>M.apply(t)).next(()=>i.An.performConsistencyCheck(t)).next(()=>i.Wn.vn(t,n))})}function RM(t){const e=h(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function XM(t,e){const i=h(t),n=e.snapshotVersion;let M=i.qn;return i.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=i.Qn.newChangeBuffer({trackRemovals:!0});M=i.qn;const a=[];e.targetChanges.forEach((s,r)=>{const o=M.get(r);if(!o)return;a.push(i.He.removeMatchingKeys(t,s.removedDocuments,r).next(()=>i.He.addMatchingKeys(t,s.addedDocuments,r)));let u=o.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(r)?u=u.withResumeToken(_.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),M=M.insert(r,u),function(t,e,i){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)}(o,u,s)&&a.push(i.He.updateTargetData(t,u))});let r=ti();if(e.documentUpdates.forEach((n,M)=>{e.resolvedLimboDocuments.has(n)&&a.push(i.persistence.referenceDelegate.updateLimboDocument(t,n))}),a.push(HM(t,s,e.documentUpdates,n,void 0).next(t=>{r=t})),!n.isEqual(J.min())){const e=i.He.getLastRemoteSnapshotVersion(t).next(e=>i.He.setTargetsMetadata(t,t.currentSequenceNumber,n));a.push(e)}return Tn.waitFor(a).next(()=>s.apply(t)).next(()=>i.Wn.Vn(t,r)).next(()=>r)}).then(t=>(i.qn=M,t))}function HM(t,e,i,n,M){let s=ai();return i.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=ti();return i.forEach((i,a)=>{const r=t.get(i),o=(null==M?void 0:M.get(i))||n;a.isNoDocument()&&a.version.isEqual(J.min())?(e.removeEntry(i,o),s=s.insert(i,a)):!r.isValidDocument()||a.version.compareTo(r.version)>0||0===a.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(a,o),s=s.insert(i,a)):A("LocalStore","Ignoring outdated watch update for ",i,". Current version:",r.version," Watch version:",a.version)}),s})}function _M(t,e){const i=h(t);return i.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),i.An.getNextMutationBatchAfterBatchId(t,e)))}function qM(t,e){const i=h(t);return i.persistence.runTransaction("Allocate target","readwrite",t=>{let n;return i.He.getTargetData(t,e).next(M=>M?(n=M,Tn.resolve(n)):i.He.allocateTargetId(t).next(M=>(n=new Gn(e,M,0,t.currentSequenceNumber),i.He.addTargetData(t,n).next(()=>n))))}).then(t=>{const n=i.qn.get(t.targetId);return(null===n||t.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(i.qn=i.qn.insert(t.targetId,t),i.Kn.set(e,t.targetId)),t})}async function $M(t,e,i){const n=h(t),M=n.qn.get(e),s=i?"readwrite":"readwrite-primary";try{i||await n.persistence.runTransaction("Release target",s,t=>n.persistence.referenceDelegate.removeTarget(t,M))}catch(t){if(!Cn(t))throw t;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}n.qn=n.qn.remove(e),n.Kn.delete(M.target)}function KM(t,e,i){const n=h(t);let M=J.min(),s=ai();return n.persistence.runTransaction("Execute query","readonly",t=>function(t,e,i){const n=h(t),M=n.Kn.get(i);return void 0!==M?Tn.resolve(n.qn.get(M)):n.He.getTargetData(e,i)}(n,t,ie(e)).next(e=>{if(e)return M=e.lastLimboFreeSnapshotVersion,n.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>n.Un.getDocumentsMatchingQuery(t,e,i?M:J.min(),i?s:ai())).next(t=>({documents:t,zn:s})))}function ts(t,e){const i=h(t),n=h(i.He),M=i.qn.get(e);return M?Promise.resolve(M.target):i.persistence.runTransaction("Get target data","readonly",t=>n.Et(t,e).next(t=>t?t.target:null))}function es(t){const e=h(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,i){const n=h(t);let M=ti(),s=Pn(i);const a=CM(e),r=IDBKeyRange.lowerBound(s,!0);return a.jt({index:ln.readTimeIndex,range:r},(t,e)=>{const i=Zn(n.k,e);M=M.insert(i.key,i),s=e.readTime}).next(()=>({In:M,readTime:Vn(s)}))}(e.Qn,t,e.jn)).then(({In:t,readTime:i})=>(e.jn=i,t))}async function is(t){const e=h(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=CM(t);let i=J.min();return e.jt({index:ln.readTimeIndex,reverse:!0},(t,e,n)=>{e.readTime&&(i=Vn(e.readTime)),n.done()}).next(()=>i)}(t)).then(t=>{e.jn=t})}async function ns(t,e,i,n){const M=h(t);let s=ai(),a=ti(),r=Mi();for(const c of i){const t=e.Hn(c.metadata.name);c.document&&(s=s.add(t)),a=a.insert(t,e.Jn(c)),r=r.insert(t,e.Yn(c.metadata.readTime))}const o=M.Qn.newChangeBuffer({trackRemovals:!0}),u=await qM(M,function(t){return ie(Ht(B.fromString("__bundle__/docs/"+t)))}(n));return M.persistence.runTransaction("Apply bundle documents","readwrite",t=>HM(t,o,a,J.min(),r).next(e=>(o.apply(t),e)).next(e=>M.He.removeMatchingKeysForTargetId(t,u.targetId).next(()=>M.He.addMatchingKeys(t,s,u.targetId)).next(()=>M.Wn.Vn(t,e)).next(()=>e)))}async function Ms(t,e,i=ai()){const n=await qM(t,ie(_n(e.bundledQuery))),M=h(t);return M.persistence.runTransaction("Save named query","readwrite",t=>{const s=xi(e.readTime);if(n.snapshotVersion.compareTo(s)>=0)return M.Ye.saveNamedQuery(t,e);const a=n.withResumeToken(_.EMPTY_BYTE_STRING,s);return M.qn=M.qn.insert(a.targetId,a),M.He.updateTargetData(t,a).next(()=>M.He.removeMatchingKeysForTargetId(t,n.targetId)).next(()=>M.He.addMatchingKeys(t,i,n.targetId)).next(()=>M.Ye.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Tn.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var i;return this.Xn.set(e.id,{id:(i=e).id,version:i.version,createTime:xi(i.createTime)}),Tn.resolve()}getNamedQuery(t,e){return Tn.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:_n(t.bundledQuery),readTime:xi(t.readTime)}}(e)),Tn.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.ts=new qe(rs.es),this.ns=new qe(rs.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const i=new rs(t,e);this.ts=this.ts.add(i),this.ns=this.ns.add(i)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new rs(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new rt(new B([])),i=new rs(e,t),n=new rs(e,t+1),M=[];return this.ns.forEachInRange([i,n],t=>{this.os(t),M.push(t.key)}),M}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new rt(new B([])),i=new rs(e,t),n=new rs(e,t+1);let M=ai();return this.ns.forEachInRange([i,n],t=>{M=M.add(t.key)}),M}containsKey(t){const e=new rs(t,0),i=this.ts.firstAfterOrEqual(e);return null!==i&&t.isEqual(i.key)}}class rs{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return rt.comparator(t.key,e.key)||U(t.fs,e.fs)}static ss(t,e){return U(t.fs,e.fs)||rt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new qe(rs.es)}checkEmpty(t){return Tn.resolve(0===this.An.length)}addMutationBatch(t,e,i,n){const M=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new kn(M,e,i,n);this.An.push(s);for(const a of n)this.ws=this.ws.add(new rs(a.key,M)),this.Jt.addToCollectionParentIndex(t,a.key.path.popLast());return Tn.resolve(s)}lookupMutationBatch(t,e){return Tn.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,n=this.gs(i),M=n<0?0:n;return Tn.resolve(this.An.length>M?this.An[M]:null)}getHighestUnacknowledgedBatchId(){return Tn.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Tn.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new rs(e,0),n=new rs(e,Number.POSITIVE_INFINITY),M=[];return this.ws.forEachInRange([i,n],t=>{const e=this._s(t.fs);M.push(e)}),Tn.resolve(M)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new qe(U);return e.forEach(t=>{const e=new rs(t,0),n=new rs(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,n],t=>{i=i.add(t.fs)})}),Tn.resolve(this.ys(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,n=i.length+1;let M=i;rt.isDocumentKey(M)||(M=M.child(""));const s=new rs(new rt(M),0);let a=new qe(U);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!i.isPrefixOf(e)&&(e.length===n&&(a=a.add(t.fs)),!0)},s),Tn.resolve(this.ys(a))}ys(t){const e=[];return t.forEach(t=>{const i=this._s(t);null!==i&&e.push(i)}),e}removeMutationBatch(t,e){d(0===this.ps(e.batchId,"removed")),this.An.shift();let i=this.ws;return Tn.forEach(e.mutations,n=>{const M=new rs(n.key,e.batchId);return i=i.delete(M),this.referenceDelegate.markPotentiallyOrphaned(t,n.key)}).next(()=>{this.ws=i})}ee(t){}containsKey(t,e){const i=new rs(e,0),n=this.ws.firstAfterOrEqual(i);return Tn.resolve(e.isEqual(n&&n.key))}performConsistencyCheck(t){return this.An.length,Tn.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Xe(rt.comparator),this.size=0}addEntry(t,e,i){const n=e.key,M=this.docs.get(n),s=M?M.size:0,a=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a,readTime:i}),this.size+=a-s,this.Jt.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return Tn.resolve(i?i.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let i=ti();return e.forEach(t=>{const e=this.docs.get(t);i=i.insert(t,e?e.document.mutableCopy():xt.newInvalidDocument(t))}),Tn.resolve(i)}getDocumentsMatchingQuery(t,e,i){let n=ti();const M=new rt(e.path.child("")),s=this.docs.getIteratorFrom(M);for(;s.hasNext();){const{key:t,value:{document:M,readTime:a}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;a.compareTo(i)<=0||re(e,M)&&(n=n.insert(M.key,M.mutableCopy()))}return Tn.resolve(n)}Es(t,e){return Tn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new cs(this)}getSize(t){return Tn.resolve(this.size)}}class cs extends EM{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((i,n)=>{n.document.isValidDocument()?e.push(this.De.addEntry(t,n.document,this.getReadTime(i))):this.De.removeEntry(i)}),Tn.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t){this.persistence=t,this.Is=new TM(t=>mt(t),pt),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.As=0,this.Rs=new as,this.targetCount=0,this.bs=lM.ie()}forEachTarget(t,e){return this.Is.forEach((t,i)=>e(i)),Tn.resolve()}getLastRemoteSnapshotVersion(t){return Tn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Tn.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Tn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.As&&(this.As=e),Tn.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new lM(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Tn.resolve()}updateTargetData(t,e){return this.ae(e),Tn.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Tn.resolve()}removeTargets(t,e,i){let n=0;const M=[];return this.Is.forEach((s,a)=>{a.sequenceNumber<=e&&null===i.get(a.targetId)&&(this.Is.delete(s),M.push(this.removeMatchingKeysForTargetId(t,a.targetId)),n++)}),Tn.waitFor(M).next(()=>n)}getTargetCount(t){return Tn.resolve(this.targetCount)}getTargetData(t,e){const i=this.Is.get(e)||null;return Tn.resolve(i)}addMatchingKeys(t,e,i){return this.Rs.rs(e,i),Tn.resolve()}removeMatchingKeys(t,e,i){this.Rs.cs(e,i);const n=this.persistence.referenceDelegate,M=[];return n&&e.forEach(e=>{M.push(n.markPotentiallyOrphaned(t,e))}),Tn.waitFor(M)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Tn.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Rs.ls(e);return Tn.resolve(i)}containsKey(t,e){return Tn.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e){this.Ps={},this.Be=new Y(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new gs(this),this.Jt=new tM,this.Je=function(t,e){return new us(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Jn(e),this.Ye=new ss(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new os(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,i){A("MemoryPersistence","Starting transaction:",t);const n=new ls(this.Be.next());return this.referenceDelegate.Vs(),i(n).next(t=>this.referenceDelegate.Ss(n).next(()=>t)).toPromise().then(t=>(n.raiseOnCommittedEvent(),t))}Ds(t,e){return Tn.or(Object.values(this.Ps).map(i=>()=>i.containsKey(t,e)))}}class ls extends xn{constructor(t){super(),this.currentSequenceNumber=t}}class As{constructor(t){this.persistence=t,this.Cs=new as,this.Ns=null}static ks(t){return new As(t)}get xs(){if(this.Ns)return this.Ns;throw j()}addReference(t,e,i){return this.Cs.addReference(i,e),this.xs.delete(i.toString()),Tn.resolve()}removeReference(t,e,i){return this.Cs.removeReference(i,e),this.xs.add(i.toString()),Tn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Tn.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>i.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tn.forEach(this.xs,i=>{const n=rt.fromPath(i);return this.$s(t,n).next(t=>{t||e.removeEntry(n)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Tn.or([()=>Tn.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t,e){return`firestore_clients_${t}_${e}`}function Ns(t,e,i){let n=`firestore_mutations_${t}_${i}`;return e.isAuthenticated()&&(n+="_"+e.uid),n}function Ls(t,e){return`firestore_targets_${t}_${e}`}class js{constructor(t,e,i,n){this.user=t,this.batchId=e,this.state=i,this.error=n}static Os(t,e,i){const n=JSON.parse(i);let M,s="object"==typeof n&&-1!==["pending","acknowledged","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(M=new y(n.error.code,n.error.message))),s?new js(t,e,n.state,M):(D("SharedClientState",`Failed to parse mutation state for ID '${e}': ${i}`),null)}Ms(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ds{constructor(t,e,i){this.targetId=t,this.state=e,this.error=i}static Os(t,e){const i=JSON.parse(e);let n,M="object"==typeof i&&-1!==["not-current","current","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return M&&i.error&&(M="string"==typeof i.error.message&&"string"==typeof i.error.code,M&&(n=new y(i.error.code,i.error.message))),M?new ds(t,i.state,n):(D("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Ms(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Ss{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Os(t,e){const i=JSON.parse(e);let n="object"==typeof i&&i.activeTargetIds instanceof Array,M=oi();for(let s=0;n&&s<i.activeTargetIds.length;++s)n=at(i.activeTargetIds[s]),M=M.add(i.activeTargetIds[s]);return n?new Ss(t,M):(D("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class hs{constructor(t,e){this.clientId=t,this.onlineState=e}static Os(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new hs(e.clientId,e.onlineState):(D("SharedClientState","Failed to parse online state: "+t),null)}}class ws{constructor(){this.activeTargetIds=oi()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ys{constructor(t,e,i,n,M){this.window=t,this.Me=e,this.persistenceKey=i,this.Bs=n,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Xe(U),this.started=!1,this.js=[];const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=M,this.Qs=Ds(this.persistenceKey,this.Bs),this.Ws=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new ws),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Ys=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Tn();for(const i of t){if(i===this.Bs)continue;const t=this.getItem(Ds(this.persistenceKey,i));if(t){const e=Ss.Os(i,t);e&&(this.Ks=this.Ks.insert(e.clientId,e))}}this.Xs();const e=this.storage.getItem(this.Js);if(e){const t=this.Zs(e);t&&this.ti(t)}for(const i of this.js)this.qs(i);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(t){let e=!1;return this.Ks.forEach((i,n)=>{n.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ni(t,"pending")}updateMutationState(t,e,i){this.ni(t,e,i),this.si(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const i=this.storage.getItem(Ls(this.persistenceKey,t));if(i){const n=ds.Os(t,i);n&&(e=n.state)}}return this.ii.Fs(t),this.Xs(),e}removeLocalQueryTarget(t){this.ii.Ls(t),this.Xs()}isLocalQueryTarget(t){return this.ii.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Ls(this.persistenceKey,t))}updateQueryState(t,e,i){this.ri(t,e,i)}handleUserChange(t,e,i){e.forEach(t=>{this.si(t)}),this.currentUser=t,i.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.oi(t)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return A("SharedClientState","READ",t,e),e}setItem(t,e){A("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){A("SharedClientState","REMOVE",t),this.storage.removeItem(t)}qs(t){const e=t;if(e.storageArea===this.storage){if(A("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Qs)return void D("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Gs.test(e.key)){if(null==e.newValue){const t=this.ai(e.key);return this.ui(t,null)}{const t=this.hi(e.key,e.newValue);if(t)return this.ui(t.clientId,t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.li(e.key,e.newValue);if(t)return this.fi(t)}}else if(this.Hs.test(e.key)){if(null!==e.newValue){const t=this.di(e.key,e.newValue);if(t)return this.wi(t)}}else if(e.key===this.Js){if(null!==e.newValue){const t=this.Zs(e.newValue);if(t)return this.ti(t)}}else if(e.key===this.Ws){const t=function(t){let e=Y.I;if(null!=t)try{const i=JSON.parse(t);d("number"==typeof i),e=i}catch(t){D("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==Y.I&&this.sequenceNumberHandler(t)}else if(e.key===this.Ys)return this.syncEngine._i()}else this.js.push(e)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(t,e,i){const n=new js(this.currentUser,t,e,i),M=Ns(this.persistenceKey,this.currentUser,t);this.setItem(M,n.Ms())}si(t){const e=Ns(this.persistenceKey,this.currentUser,t);this.removeItem(e)}oi(t){const e={clientId:this.Bs,onlineState:t};this.storage.setItem(this.Js,JSON.stringify(e))}ri(t,e,i){const n=Ls(this.persistenceKey,t),M=new ds(t,e,i);this.setItem(n,M.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(t){const e=this.Gs.exec(t);return e?e[1]:null}hi(t,e){const i=this.ai(t);return Ss.Os(i,e)}li(t,e){const i=this.zs.exec(t),n=Number(i[1]),M=void 0!==i[2]?i[2]:null;return js.Os(new u(M),n,e)}di(t,e){const i=this.Hs.exec(t),n=Number(i[1]);return ds.Os(n,e)}Zs(t){return hs.Os(t)}async fi(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.mi(t.batchId,t.state,t.error);A("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}wi(t){return this.syncEngine.gi(t.targetId,t.state,t.error)}ui(t,e){const i=e?this.Ks.insert(t,e):this.Ks.remove(t),n=this.ei(this.Ks),M=this.ei(i),s=[],a=[];return M.forEach(t=>{n.has(t)||s.push(t)}),n.forEach(t=>{M.has(t)||a.push(t)}),this.syncEngine.yi(s,a).then(()=>{this.Ks=i})}ti(t){this.Ks.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ei(t){let e=oi();return t.forEach((t,i)=>{e=e.unionWith(i.activeTargetIds)}),e}}class xs{constructor(){this.pi=new ws,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,i){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new ws,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,i,n,M){const s=this.Ui(t,e);A("RestConnection","Sending: ",s,i);const a={};return this.qi(a,n,M),this.Ki(t,s,a,i).then(t=>(A("RestConnection","Received: ",t),t),e=>{throw N("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",i),e})}ji(t,e,i,n,M){return this.Bi(t,e,i,n,M)}qi(t,e,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+c,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,i)=>t[i]=e),i&&i.headers.forEach((e,i)=>t[i]=e)}Ui(t,e){const i=ms[t];return`${this.Fi}/v1/${e}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,i,n){return new Promise((M,s)=>{const a=new r["g"];a.listenOnce(r["c"].COMPLETE,()=>{try{switch(a.getLastErrorCode()){case r["a"].NO_ERROR:const e=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(e)),M(e);break;case r["a"].TIMEOUT:A("Connection",'RPC "'+t+'" timed out'),s(new y(w.DEADLINE_EXCEEDED,"Request time out"));break;case r["a"].HTTP_ERROR:const i=a.getStatus();if(A("Connection",'RPC "'+t+'" failed with status:',i,"response text:",a.getResponseText()),i>0){const t=a.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);s(new y(e,t.message))}else s(new y(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new y(w.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{A("Connection",'RPC "'+t+'" completed.')}});const o=JSON.stringify(n);a.send(e,"POST",o,i,15)})}Qi(t,e,i){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],M=Object(r["h"])(),s=Object(r["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new r["d"]({})),this.qi(o.initMessageHeaders,e,i),Object(a["s"])()||Object(a["u"])()||Object(a["o"])()||Object(a["q"])()||Object(a["w"])()||Object(a["n"])()||(o.httpHeadersOverwriteParam="$httpHeaders");const u=n.join("");A("Connection","Creating WebChannel: "+u,o);const c=M.createWebChannel(u,o);let g=!1,I=!1;const l=new bs({Vi:t=>{I?A("Connection","Not sending because WebChannel is closed:",t):(g||(A("Connection","Opening WebChannel transport."),c.open(),g=!0),A("Connection","WebChannel sending:",t),c.send(t))},Si:()=>c.close()}),D=(t,e,i)=>{t.listen(e,t=>{try{i(t)}catch(t){setTimeout(()=>{throw t},0)}})};return D(c,r["f"].EventType.OPEN,()=>{I||A("Connection","WebChannel transport opened.")}),D(c,r["f"].EventType.CLOSE,()=>{I||(I=!0,A("Connection","WebChannel transport closed"),l.Oi())}),D(c,r["f"].EventType.ERROR,t=>{I||(I=!0,N("Connection","WebChannel transport errored:",t),l.Oi(new y(w.UNAVAILABLE,"The operation could not be completed")))}),D(c,r["f"].EventType.MESSAGE,t=>{var e;if(!I){const i=t.data[0];d(!!i);const n=i,M=n.error||(null===(e=n[0])||void 0===e?void 0:e.error);if(M){A("Connection","WebChannel received error:",M);const t=M.status;let e=function(t){const e=Ve[t];if(void 0!==e)return Re(e)}(t),i=M.message;void 0===e&&(e=w.INTERNAL,i="Unknown error status: "+t+" with message "+M.message),I=!0,l.Oi(new y(e,i)),c.close()}else A("Connection","WebChannel received:",i),l.Mi(i)}}),D(s,r["b"].STAT_EVENT,t=>{t.stat===r["e"].PROXY?A("Connection","Detected buffering proxy"):t.stat===r["e"].NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{l.$i()},0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(){return"undefined"!=typeof window?window:null}function zs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){return new Si(t,!0)}class Ys{constructor(t,e,i=1e3,n=1.5,M=6e4){this.Me=t,this.timerId=e,this.Wi=i,this.Gi=n,this.zi=M,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),i=Math.max(0,Date.now()-this.Yi),n=Math.max(0,e-i);n>0&&A("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,n,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,i,n,M,s,a,r){this.Me=t,this.nr=i,this.sr=n,this.ir=M,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=r,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Ys(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(D(e.toString()),D("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,i])=>{this.rr===e&&this.Ir(t,i)},e=>{t(()=>{const t=new y(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const i=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{i(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{i(()=>this.Ar(t))}),this.stream.onMessage(t=>{i(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return A("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget(()=>this.rr===t?e():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Os extends vs{constructor(t,e,i,n,M,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,n,s),this.k=M}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=Ui(this.k,t),i=function(t){if(!("targetChange"in t))return J.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?J.min():e.readTime?xi(e.readTime):J.min()}(t);return this.listener.br(e,i)}Pr(t){const e={};e.database=zi(this.k),e.addTarget=function(t,e){let i;const n=e.target;return i=Ct(n)?{documents:Ji(t,n)}:{query:Zi(t,n)},i.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?i.resumeToken=wi(t,e.resumeToken):e.snapshotVersion.compareTo(J.min())>0&&(i.readTime=hi(t,e.snapshotVersion.toTimestamp())),i}(this.k,t);const i=Pi(this.k,t);i&&(e.labels=i),this.gr(e)}vr(t){const e={};e.database=zi(this.k),e.removeTarget=t,this.gr(e)}}class Us extends vs{constructor(t,e,i,n,M,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,n,s),this.k=M,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(d(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=Gi(t.writeResults,t.commitTime),i=xi(t.commitTime);return this.listener.Cr(i,e)}return d(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=zi(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>ki(this.k,t))};this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends class{}{constructor(t,e,i,n){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=i,this.k=n,this.$r=!1}Or(){if(this.$r)throw new y(w.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,M])=>this.ir.Bi(t,e,i,n,M)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new y(w.UNKNOWN,t.toString())})}ji(t,e,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,M])=>this.ir.ji(t,e,i,n,M)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new y(w.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Ws{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(D(e),this.Lr=!1):A("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e,i,n,M){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=M,this.Hr.Ei(t=>{i.enqueueAndForget(async()=>{Xs(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=h(t);e.Gr.add(4),await Zs(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Js(e)}(this))})}),this.Jr=new Ws(i,n)}}async function Js(t){if(Xs(t))for(const e of t.zr)await e(!0)}async function Zs(t){for(const e of t.zr)await e(!1)}function Qs(t,e){const i=h(t);i.Wr.has(e.targetId)||(i.Wr.set(e.targetId,e),Rs(i)?Fs(i):Ia(i).lr()&&Vs(i,e))}function Ps(t,e){const i=h(t),n=Ia(i);i.Wr.delete(e),n.lr()&&Bs(i,e),0===i.Wr.size&&(n.lr()?n._r():Xs(i)&&i.Jr.set("Unknown"))}function Vs(t,e){t.Yr.X(e.targetId),Ia(t).Pr(e)}function Bs(t,e){t.Yr.X(e),Ia(t).vr(e)}function Fs(t){t.Yr=new Di({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Ia(t).start(),t.Jr.Br()}function Rs(t){return Xs(t)&&!Ia(t).hr()&&t.Wr.size>0}function Xs(t){return 0===h(t).Gr.size}function Hs(t){t.Yr=void 0}async function _s(t){t.Wr.forEach((e,i)=>{Vs(t,e)})}async function qs(t,e){Hs(t),Rs(t)?(t.Jr.Kr(e),Fs(t)):t.Jr.set("Unknown")}async function $s(t,e,i){if(t.Jr.set("Online"),e instanceof li&&2===e.state&&e.cause)try{await async function(t,e){const i=e.cause;for(const n of e.targetIds)t.Wr.has(n)&&(await t.remoteSyncer.rejectListen(n,i),t.Wr.delete(n),t.Yr.removeTarget(n))}(t,e)}catch(i){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ks(t,i)}else if(e instanceof gi?t.Yr.ot(e):e instanceof Ii?t.Yr.dt(e):t.Yr.ut(e),!i.isEqual(J.min()))try{const e=await RM(t.localStore);i.compareTo(e)>=0&&await function(t,e){const i=t.Yr.gt(e);return i.targetChanges.forEach((i,n)=>{if(i.resumeToken.approximateByteSize()>0){const M=t.Wr.get(n);M&&t.Wr.set(n,M.withResumeToken(i.resumeToken,e))}}),i.targetMismatches.forEach(e=>{const i=t.Wr.get(e);if(!i)return;t.Wr.set(e,i.withResumeToken(_.EMPTY_BYTE_STRING,i.snapshotVersion)),Bs(t,e);const n=new Gn(i.target,e,1,i.sequenceNumber);Vs(t,n)}),t.remoteSyncer.applyRemoteEvent(i)}(t,i)}catch(e){A("RemoteStore","Failed to raise snapshot:",e),await Ks(t,e)}}async function Ks(t,e,i){if(!Cn(e))throw e;t.Gr.add(1),await Zs(t),t.Jr.set("Offline"),i||(i=()=>RM(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await i(),t.Gr.delete(1),await Js(t)})}function ta(t,e){return e().catch(i=>Ks(t,i,e))}async function ea(t){const e=h(t),i=la(e);let n=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;ia(e);)try{const t=await _M(e.localStore,n);if(null===t){0===e.Qr.length&&i._r();break}n=t.batchId,na(e,t)}catch(t){await Ks(e,t)}Ma(e)&&sa(e)}function ia(t){return Xs(t)&&t.Qr.length<10}function na(t,e){t.Qr.push(e);const i=la(t);i.lr()&&i.Sr&&i.Dr(e.mutations)}function Ma(t){return Xs(t)&&!la(t).hr()&&t.Qr.length>0}function sa(t){la(t).start()}async function aa(t){la(t).kr()}async function ra(t){const e=la(t);for(const i of t.Qr)e.Dr(i.mutations)}async function oa(t,e,i){const n=t.Qr.shift(),M=Wn.from(n,e,i);await ta(t,()=>t.remoteSyncer.applySuccessfulWrite(M)),await ea(t)}async function ua(t,e){e&&la(t).Sr&&await async function(t,e){if(i=e.code,Fe(i)&&i!==w.ABORTED){const i=t.Qr.shift();la(t).wr(),await ta(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,e)),await ea(t)}var i}(t,e),Ma(t)&&sa(t)}async function ca(t,e){const i=h(t);i.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const n=Xs(i);i.Gr.add(3),await Zs(i),n&&i.Jr.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Gr.delete(3),await Js(i)}async function ga(t,e){const i=h(t);e?(i.Gr.delete(2),await Js(i)):e||(i.Gr.add(2),await Zs(i),i.Jr.set("Unknown"))}function Ia(t){return t.Xr||(t.Xr=function(t,e,i){const n=h(t);return n.Or(),new Os(e,n.ir,n.authCredentials,n.appCheckCredentials,n.k,i)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:_s.bind(null,t),Ni:qs.bind(null,t),br:$s.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Rs(t)?Fs(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Hs(t))})),t.Xr}function la(t){return t.Zr||(t.Zr=function(t,e,i){const n=h(t);return n.Or(),new Us(e,n.ir,n.authCredentials,n.appCheckCredentials,n.k,i)}(t.datastore,t.asyncQueue,{Di:aa.bind(null,t),Ni:ua.bind(null,t),Nr:ra.bind(null,t),Cr:oa.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await ea(t)):(await t.Zr.stop(),t.Qr.length>0&&(A("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Aa{constructor(t,e,i,n,M){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=M,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,i,n,M){const s=Date.now()+i,a=new Aa(t,e,s,n,M);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new y(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Da(t,e){if(D("AsyncQueue",`${e}: ${t}`),Cn(t))return new y(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t){this.comparator=t?(e,i)=>t(e,i)||rt.comparator(e.key,i.key):(t,e)=>rt.comparator(t.key,e.key),this.keyedMap=ii(),this.sortedSet=new Xe(this.comparator)}static emptySet(t){return new Na(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Na))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(!t.isEqual(n))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const i=new Na;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.eo=new Xe(rt.comparator)}track(t){const e=t.doc.key,i=this.eo.get(e);i?0!==t.type&&3===i.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==i.type?this.eo=this.eo.insert(e,{type:i.type,doc:t.doc}):2===t.type&&2===i.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===i.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===i.type?this.eo=this.eo.remove(e):1===t.type&&2===i.type?this.eo=this.eo.insert(e,{type:1,doc:i.doc}):0===t.type&&1===i.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):j():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,i)=>{t.push(i)}),t}}class ja{constructor(t,e,i,n,M,s,a,r){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=n,this.mutatedKeys=M,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=r}static fromInitialDocuments(t,e,i,n){const M=[];return e.forEach(t=>{M.push({type:0,doc:t})}),new ja(t,e,Na.emptySet(e),M,i,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Me(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let n=0;n<e.length;n++)if(e[n].type!==i[n].type||!e[n].doc.isEqual(i[n].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.so=void 0,this.listeners=[]}}class Sa{constructor(){this.queries=new TM(t=>se(t),Me),this.onlineState="Unknown",this.io=new Set}}async function ha(t,e){const i=h(t),n=e.query;let M=!1,s=i.queries.get(n);if(s||(M=!0,s=new da),M)try{s.so=await i.onListen(n)}catch(t){const i=Da(t,`Initialization of query '${ae(e.query)}' failed`);return void e.onError(i)}i.queries.set(n,s),s.listeners.push(e),e.ro(i.onlineState),s.so&&e.oo(s.so)&&Ta(i)}async function wa(t,e){const i=h(t),n=e.query;let M=!1;const s=i.queries.get(n);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),M=0===s.listeners.length)}if(M)return i.queries.delete(n),i.onUnlisten(n)}function ya(t,e){const i=h(t);let n=!1;for(const M of e){const t=M.query,e=i.queries.get(t);if(e){for(const t of e.listeners)t.oo(M)&&(n=!0);e.so=M}}n&&Ta(i)}function xa(t,e,i){const n=h(t),M=n.queries.get(e);if(M)for(const s of M.listeners)s.onError(i);n.queries.delete(e)}function Ta(t){t.io.forEach(t=>{t.next()})}class Ea{constructor(t,e,i){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=i||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const i of t.docChanges)3!==i.type&&e.push(i);t=new ja(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const i="Offline"!==e;return(!this.options.wo||!i)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=ja.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.payload=t,this.byteLength=e}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t){this.k=t}Hn(t){return bi(this.k,t)}Jn(t){return t.metadata.exists?vi(this.k,t.document,!1):xt.newNoDocument(this.Hn(t.metadata.name),this.Yn(t.metadata.readTime))}Yn(t){return xi(t)}}class pa{constructor(t,e,i){this.mo=t,this.localStore=e,this.k=i,this.queries=[],this.documents=[],this.progress=Ca(t)}yo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}po(t){const e=new Map,i=new ba(this.k);for(const n of t)if(n.metadata.queries){const t=i.Hn(n.metadata.name);for(const i of n.metadata.queries){const n=(e.get(i)||ai()).add(t);e.set(i,n)}}return e}async complete(){const t=await ns(this.localStore,new ba(this.k),this.documents,this.mo.id),e=this.po(this.documents);for(const i of this.queries)await Ms(this.localStore,i,e.get(i.name));return this.progress.taskState="Success",new GM(Object.assign({},this.progress),t)}}function Ca(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.key=t}}class fa{constructor(t){this.key=t}}class Ya{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=ai(),this.mutatedKeys=ai(),this.Ao=oe(t),this.Ro=new Na(this.Ao)}get bo(){return this.To}Po(t,e){const i=e?e.vo:new La,n=e?e.Ro:this.Ro;let M=e?e.mutatedKeys:this.mutatedKeys,s=n,a=!1;const r=_t(this.query)&&n.size===this.query.limit?n.last():null,o=qt(this.query)&&n.size===this.query.limit?n.first():null;if(t.inorderTraversal((t,e)=>{const u=n.get(t),c=re(this.query,e)?e:null,g=!!u&&this.mutatedKeys.has(u.key),I=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let l=!1;u&&c?u.data.isEqual(c.data)?g!==I&&(i.track({type:3,doc:c}),l=!0):this.Vo(u,c)||(i.track({type:2,doc:c}),l=!0,(r&&this.Ao(c,r)>0||o&&this.Ao(c,o)<0)&&(a=!0)):!u&&c?(i.track({type:0,doc:c}),l=!0):u&&!c&&(i.track({type:1,doc:u}),l=!0,(r||o)&&(a=!0)),l&&(c?(s=s.add(c),M=I?M.add(t):M.delete(t)):(s=s.delete(t),M=M.delete(t)))}),_t(this.query)||qt(this.query))for(;s.size>this.query.limit;){const t=_t(this.query)?s.last():s.first();s=s.delete(t.key),M=M.delete(t.key),i.track({type:1,doc:t})}return{Ro:s,vo:i,Bn:a,mutatedKeys:M}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i){const n=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const M=t.vo.no();M.sort((t,e)=>function(t,e){const i=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return i(t)-i(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(i);const s=e?this.Do():[],a=0===this.Io.size&&this.current?1:0,r=a!==this.Eo;return this.Eo=a,0!==M.length||r?{snapshot:new ja(this.query,t.Ro,n,M,t.mutatedKeys,0===a,r,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new La,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=ai(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new fa(t))}),this.Io.forEach(i=>{t.has(i)||e.push(new za(i))}),e}ko(t){this.To=t.zn,this.Io=ai();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return ja.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class va{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Oa{constructor(t){this.key=t,this.$o=!1}}class Ua{constructor(t,e,i,n,M,s){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=n,this.currentUser=M,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Mo=new TM(t=>se(t),Me),this.Fo=new Map,this.Lo=new Set,this.Bo=new Xe(rt.comparator),this.Uo=new Map,this.qo=new as,this.Ko={},this.jo=new Map,this.Qo=lM.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ka(t,e){const i=Ir(t);let n,M;const s=i.Mo.get(e);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),M=s.view.xo();else{const t=await qM(i.localStore,ie(e)),s=i.sharedClientState.addLocalQueryTarget(t.targetId);n=t.targetId,M=await Wa(i,e,n,"current"===s),i.isPrimaryClient&&Qs(i.remoteStore,t)}return M}async function Wa(t,e,i,n){t.Go=(e,i,n)=>async function(t,e,i,n){let M=e.view.Po(i);M.Bn&&(M=await KM(t.localStore,e.query,!1).then(({documents:t})=>e.view.Po(t,M)));const s=n&&n.targetChanges.get(e.targetId),a=e.view.applyChanges(M,t.isPrimaryClient,s);return qa(t,e.targetId,a.Co),a.snapshot}(t,e,i,n);const M=await KM(t.localStore,e,!0),s=new Ya(e,M.zn),a=s.Po(M.documents),r=ci.createSynthesizedTargetChangeForCurrentChange(i,n&&"Offline"!==t.onlineState),o=s.applyChanges(a,t.isPrimaryClient,r);qa(t,i,o.Co);const u=new va(e,i,s);return t.Mo.set(e,u),t.Fo.has(i)?t.Fo.get(i).push(e):t.Fo.set(i,[e]),o.snapshot}async function Ga(t,e){const i=h(t),n=i.Mo.get(e),M=i.Fo.get(n.targetId);if(M.length>1)return i.Fo.set(n.targetId,M.filter(t=>!Me(t,e))),void i.Mo.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(n.targetId),i.sharedClientState.isActiveQueryTarget(n.targetId)||await $M(i.localStore,n.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(n.targetId),Ps(i.remoteStore,n.targetId),Ha(i,n.targetId)}).catch(jM)):(Ha(i,n.targetId),await $M(i.localStore,n.targetId,!0))}async function Ja(t,e,i){const n=lr(t);try{const t=await function(t,e){const i=h(t),n=G.now(),M=e.reduce((t,e)=>t.add(e.key),ai());let s;return i.persistence.runTransaction("Locally write mutations","readwrite",t=>i.Wn.vn(t,M).next(M=>{s=M;const a=[];for(const t of e){const e=Ye(t,s.get(t.key));null!=e&&a.push(new ke(t.key,e,yt(e.value.mapValue),be.exists(!0)))}return i.An.addMutationBatch(t,n,a,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(n.localStore,e);n.sharedClientState.addPendingMutation(t.batchId),function(t,e,i){let n=t.Ko[t.currentUser.toKey()];n||(n=new Xe(U)),n=n.insert(e,i),t.Ko[t.currentUser.toKey()]=n}(n,t.batchId,i),await tr(n,t.changes),await ea(n.remoteStore)}catch(t){const e=Da(t,"Failed to persist write");i.reject(e)}}async function Za(t,e){const i=h(t);try{const t=await XM(i.localStore,e);e.targetChanges.forEach((t,e)=>{const n=i.Uo.get(e);n&&(d(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?n.$o=!0:t.modifiedDocuments.size>0?d(n.$o):t.removedDocuments.size>0&&(d(n.$o),n.$o=!1))}),await tr(i,t,e)}catch(t){await jM(t)}}function Qa(t,e,i){const n=h(t);if(n.isPrimaryClient&&0===i||!n.isPrimaryClient&&1===i){const t=[];n.Mo.forEach((i,n)=>{const M=n.view.ro(e);M.snapshot&&t.push(M.snapshot)}),function(t,e){const i=h(t);i.onlineState=e;let n=!1;i.queries.forEach((t,i)=>{for(const M of i.listeners)M.ro(e)&&(n=!0)}),n&&Ta(i)}(n.eventManager,e),t.length&&n.Oo.br(t),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Pa(t,e,i){const n=h(t);n.sharedClientState.updateQueryState(e,"rejected",i);const M=n.Uo.get(e),s=M&&M.key;if(s){let t=new Xe(rt.comparator);t=t.insert(s,xt.newNoDocument(s,J.min()));const i=ai().add(s),M=new ui(J.min(),new Map,new qe(U),t,i);await Za(n,M),n.Bo=n.Bo.remove(s),n.Uo.delete(e),Ka(n)}else await $M(n.localStore,e,!1).then(()=>Ha(n,e,i)).catch(jM)}async function Va(t,e){const i=h(t),n=e.batch.batchId;try{const t=await FM(i.localStore,e);Xa(i,n,null),Ra(i,n),i.sharedClientState.updateMutationState(n,"acknowledged"),await tr(i,t)}catch(t){await jM(t)}}async function Ba(t,e,i){const n=h(t);try{const t=await function(t,e){const i=h(t);return i.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let n;return i.An.lookupMutationBatch(t,e).next(e=>(d(null!==e),n=e.keys(),i.An.removeMutationBatch(t,e))).next(()=>i.An.performConsistencyCheck(t)).next(()=>i.Wn.vn(t,n))})}(n.localStore,e);Xa(n,e,i),Ra(n,e),n.sharedClientState.updateMutationState(e,"rejected",i),await tr(n,t)}catch(i){await jM(i)}}async function Fa(t,e){const i=h(t);Xs(i.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=h(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.An.getHighestUnacknowledgedBatchId(t))}(i.localStore);if(-1===t)return void e.resolve();const n=i.jo.get(t)||[];n.push(e),i.jo.set(t,n)}catch(t){const i=Da(t,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ra(t,e){(t.jo.get(e)||[]).forEach(t=>{t.resolve()}),t.jo.delete(e)}function Xa(t,e,i){const n=h(t);let M=n.Ko[n.currentUser.toKey()];if(M){const t=M.get(e);t&&(i?t.reject(i):t.resolve(),M=M.remove(e)),n.Ko[n.currentUser.toKey()]=M}}function Ha(t,e,i=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Fo.get(e))t.Mo.delete(n),i&&t.Oo.zo(n,i);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||_a(t,e)})}function _a(t,e){t.Lo.delete(e.path.canonicalString());const i=t.Bo.get(e);null!==i&&(Ps(t.remoteStore,i),t.Bo=t.Bo.remove(e),t.Uo.delete(i),Ka(t))}function qa(t,e,i){for(const n of i)n instanceof za?(t.qo.addReference(n.key,e),$a(t,n)):n instanceof fa?(A("SyncEngine","Document no longer in limbo: "+n.key),t.qo.removeReference(n.key,e),t.qo.containsKey(n.key)||_a(t,n.key)):j()}function $a(t,e){const i=e.key,n=i.path.canonicalString();t.Bo.get(i)||t.Lo.has(n)||(A("SyncEngine","New document in limbo: "+i),t.Lo.add(n),Ka(t))}function Ka(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const i=new rt(B.fromString(e)),n=t.Qo.next();t.Uo.set(n,new Oa(i)),t.Bo=t.Bo.insert(i,n),Qs(t.remoteStore,new Gn(ie(Ht(i.path)),n,2,Y.I))}}async function tr(t,e,i){const n=h(t),M=[],s=[],a=[];n.Mo.isEmpty()||(n.Mo.forEach((t,r)=>{a.push(n.Go(r,e,i).then(t=>{if(t){n.isPrimaryClient&&n.sharedClientState.updateQueryState(r.targetId,t.fromCache?"not-current":"current"),M.push(t);const e=ZM.$n(r.targetId,t);s.push(e)}}))}),await Promise.all(a),n.Oo.br(M),await async function(t,e){const i=h(t);try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Tn.forEach(e,e=>Tn.forEach(e.kn,n=>i.persistence.referenceDelegate.addReference(t,e.targetId,n)).next(()=>Tn.forEach(e.xn,n=>i.persistence.referenceDelegate.removeReference(t,e.targetId,n)))))}catch(t){if(!Cn(t))throw t;A("LocalStore","Failed to update sequence numbers: "+t)}for(const n of e){const t=n.targetId;if(!n.fromCache){const e=i.qn.get(t),n=e.snapshotVersion,M=e.withLastLimboFreeSnapshotVersion(n);i.qn=i.qn.insert(t,M)}}}(n.localStore,s))}async function er(t,e){const i=h(t);if(!i.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const t=await BM(i.localStore,e);i.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new y(w.CANCELLED,e))})}),t.jo.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await tr(i,t.Gn)}}function ir(t,e){const i=h(t),n=i.Uo.get(e);if(n&&n.$o)return ai().add(n.key);{let t=ai();const n=i.Fo.get(e);if(!n)return t;for(const e of n){const n=i.Mo.get(e);t=t.unionWith(n.view.bo)}return t}}async function nr(t,e){const i=h(t),n=await KM(i.localStore,e.query,!0),M=e.view.ko(n);return i.isPrimaryClient&&qa(i,e.targetId,M.Co),M}async function Mr(t){const e=h(t);return es(e.localStore).then(t=>tr(e,t))}async function sr(t,e,i,n){const M=h(t),s=await function(t,e){const i=h(t),n=h(i.An);return i.persistence.runTransaction("Lookup mutation documents","readonly",t=>n.Zt(t,e).next(e=>e?i.Wn.vn(t,e):Tn.resolve(null)))}(M.localStore,e);null!==s?("pending"===i?await ea(M.remoteStore):"acknowledged"===i||"rejected"===i?(Xa(M,e,n||null),Ra(M,e),function(t,e){h(h(t).An).ee(e)}(M.localStore,e)):j(),await tr(M,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ar(t,e){const i=h(t);if(Ir(i),lr(i),!0===e&&!0!==i.Wo){const t=i.sharedClientState.getAllActiveQueryTargets(),e=await rr(i,t.toArray());i.Wo=!0,await ga(i.remoteStore,!0);for(const n of e)Qs(i.remoteStore,n)}else if(!1===e&&!1!==i.Wo){const t=[];let e=Promise.resolve();i.Fo.forEach((n,M)=>{i.sharedClientState.isLocalQueryTarget(M)?t.push(M):e=e.then(()=>(Ha(i,M),$M(i.localStore,M,!0))),Ps(i.remoteStore,M)}),await e,await rr(i,t),function(t){const e=h(t);e.Uo.forEach((t,i)=>{Ps(e.remoteStore,i)}),e.qo.hs(),e.Uo=new Map,e.Bo=new Xe(rt.comparator)}(i),i.Wo=!1,await ga(i.remoteStore,!1)}}async function rr(t,e,i){const n=h(t),M=[],s=[];for(const a of e){let t;const e=n.Fo.get(a);if(e&&0!==e.length){t=await qM(n.localStore,ie(e[0]));for(const t of e){const e=n.Mo.get(t),i=await nr(n,e);i.snapshot&&s.push(i.snapshot)}}else{const e=await ts(n.localStore,a);t=await qM(n.localStore,e),await Wa(n,or(e),a,!1)}M.push(t)}return n.Oo.br(s),M}function or(t){return Xt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function ur(t){const e=h(t);return h(h(e.localStore).persistence).Tn()}async function cr(t,e,i,n){const M=h(t);if(M.Wo)A("SyncEngine","Ignoring unexpected query state notification.");else if(M.Fo.has(e))switch(i){case"current":case"not-current":{const t=await es(M.localStore),n=ui.createSynthesizedRemoteEventForCurrentChange(e,"current"===i);await tr(M,t,n);break}case"rejected":await $M(M.localStore,e,!0),Ha(M,e,n);break;default:j()}}async function gr(t,e,i){const n=Ir(t);if(n.Wo){for(const t of e){if(n.Fo.has(t)){A("SyncEngine","Adding an already active target "+t);continue}const e=await ts(n.localStore,t),i=await qM(n.localStore,e);await Wa(n,or(e),i.targetId,!1),Qs(n.remoteStore,i)}for(const t of i)n.Fo.has(t)&&await $M(n.localStore,t,!1).then(()=>{Ps(n.remoteStore,t),Ha(n,t)}).catch(jM)}}function Ir(t){const e=h(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Za.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ir.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pa.bind(null,e),e.Oo.br=ya.bind(null,e.eventManager),e.Oo.zo=xa.bind(null,e.eventManager),e}function lr(t){const e=h(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Va.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ba.bind(null,e),e}function Ar(t,e,i){const n=h(t);(async function(t,e,i){try{const n=await e.getMetadata();if(await function(t,e){const i=h(t),n=xi(e.createTime);return i.persistence.runTransaction("hasNewerBundle","readonly",t=>i.Ye.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(n)>=0)}(t.localStore,n))return await e.close(),void i._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(n));i._updateProgress(Ca(n));const M=new pa(n,t.localStore,e.k);let s=await e.Ho();for(;s;){const t=await M.yo(s);t&&i._updateProgress(t),s=await e.Ho()}const a=await M.complete();await tr(t,a.In,void 0),await function(t,e){const i=h(t);return i.persistence.runTransaction("Save bundle","readwrite",t=>i.Ye.saveBundleMetadata(t,e))}(t.localStore,n),i._completeWith(a.progress)}catch(t){N("SyncEngine","Loading bundle failed with "+t),i._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(n,e,i).then(()=>{n.sharedClientState.notifyBundleLoaded()})}class Dr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=fs(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return VM(this.persistence,new QM,t.initialUser,this.k)}Yo(t){return new Is(As.ks,this.k)}Jo(t){return new xs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nr extends Dr{constructor(t,e,i){super(),this.tc=t,this.cacheSizeBytes=e,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await is(this.localStore),await this.tc.initialize(this,t),await lr(this.tc.syncEngine),await ea(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(t){return VM(this.persistence,new QM,t.initialUser,this.k)}Xo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new hM(e,t.asyncQueue)}Yo(t){const e=WM(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),i=void 0!==this.cacheSizeBytes?sM.withCacheSize(this.cacheSizeBytes):sM.DEFAULT;return new OM(this.synchronizeTabs,e,t.clientId,i,t.asyncQueue,Cs(),zs(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(t){return new xs}}class Lr extends Nr{constructor(t,e){super(t,e,!1),this.tc=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.tc.syncEngine;this.sharedClientState instanceof ys&&(this.sharedClientState.syncEngine={mi:sr.bind(null,e),gi:cr.bind(null,e),yi:gr.bind(null,e),Tn:ur.bind(null,e),_i:Mr.bind(null,e)},await this.sharedClientState.start()),await this.persistence.sn(async t=>{await ar(this.tc.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Jo(t){const e=Cs();if(!ys.Pt(e))throw new y(w.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=WM(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new ys(e,t.asyncQueue,i,t.clientId,t.initialUser)}}class jr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Qa(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=er.bind(null,this.syncEngine),await ga(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Sa}createDatastore(t){const e=fs(t.databaseInfo.databaseId),i=(n=t.databaseInfo,new ps(n));var n;return function(t,e,i,n){return new ks(t,e,i,n)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return e=this.localStore,i=this.datastore,n=t.asyncQueue,M=t=>Qa(this.syncEngine,t,0),s=Es.Pt()?new Es:new Ts,new Gs(e,i,n,M,s);var e,i,n,M,s}createSyncEngine(t,e){return function(t,e,i,n,M,s,a){const r=new Ua(t,e,i,n,M,s);return a&&(r.Wo=!0),r}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=h(t);A("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Zs(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e=10240){let i=0;return{async read(){if(i<t.byteLength){const n={value:t.slice(i,i+e),done:!1};return i+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.sc=t,this.k=e,this.metadata=new x,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then(t=>{t&&t._o()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const t=await this.oc();if(null===t)return null;const e=this.ic.decode(t),i=Number(e);isNaN(i)&&this.cc(`length string (${e}) is not valid number`);const n=await this.ac(i);return new ma(JSON.parse(n),t.length+i)}uc(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async oc(){for(;this.uc()<0;)if(await this.hc())break;if(0===this.buffer.length)return null;const t=this.uc();t<0&&this.cc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ac(t){for(;this.buffer.length<t;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const e=this.ic.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}cc(t){throw this.sc.cancel(),new Error("Invalid bundle format: "+t)}async hc(){const t=await this.sc.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const i=h(t),n=zi(i.k)+"/documents",M={documents:e.map(t=>mi(i.k,t))},s=await i.ji("BatchGetDocuments",n,M),a=new Map;s.forEach(t=>{const e=Oi(i.k,t);a.set(e.key.toString(),e)});const r=[];return e.forEach(t=>{const e=a.get(t.toString());d(!!e),r.push(e)}),r}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ze(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const i=rt.fromPath(e);this.mutations.push(new Qe(i,this.precondition(i)))}),await async function(t,e){const i=h(t),n=zi(i.k)+"/documents",M={writes:e.map(t=>ki(i.k,t))};await i.Bi("Commit",n,M)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw j();e=J.min()}const i=this.readVersions.get(t.key.toString());if(i){if(!e.isEqual(i))throw new y(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?be.updateTime(e):be.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(J.min()))throw new y(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return be.updateTime(e)}return be.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,i,n){this.asyncQueue=t,this.datastore=e,this.updateFunction=i,this.deferred=n,this.lc=5,this.ur=new Ys(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi(async()=>{const t=new wr(this.datastore),e=this.dc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.wc(t)}))}).catch(t=>{this.wc(t)})})}dc(t){try{const e=this.updateFunction(t);return!Mt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}wc(t){this.lc>0&&this._c(t)?(this.lc-=1,this.asyncQueue.enqueueAndForget(()=>(this.fc(),Promise.resolve()))):this.deferred.reject(t)}_c(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Fe(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=O.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async t=>{A("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(i,t=>(A("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Da(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Tr(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const i=await t.getConfiguration();await e.initialize(i);let n=i.initialUser;t.setCredentialChangeListener(async t=>{n.isEqual(t)||(await BM(e.localStore,t),n=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Er(t,e){t.asyncQueue.verifyOperationInProgress();const i=await mr(t);A("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(i,n),t.setCredentialChangeListener(t=>ca(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,i)=>ca(e.remoteStore,i)),t.onlineComponents=e}async function mr(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await Tr(t,new Dr)),t.offlineComponents}async function br(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await Er(t,new jr)),t.onlineComponents}function pr(t){return mr(t).then(t=>t.persistence)}function Cr(t){return mr(t).then(t=>t.localStore)}function zr(t){return br(t).then(t=>t.remoteStore)}function fr(t){return br(t).then(t=>t.syncEngine)}async function Yr(t){const e=await br(t),i=e.eventManager;return i.onListen=ka.bind(null,e.syncEngine),i.onUnlisten=Ga.bind(null,e.syncEngine),i}function vr(t){return t.asyncQueue.enqueue(async()=>{const e=await pr(t),i=await zr(t);return e.setNetworkEnabled(!0),function(t){const e=h(t);return e.Gr.delete(0),Js(e)}(i)})}function Or(t){return t.asyncQueue.enqueue(async()=>{const e=await pr(t),i=await zr(t);return e.setNetworkEnabled(!1),async function(t){const e=h(t);e.Gr.add(0),await Zs(e),e.Jr.set("Offline")}(i)})}function Ur(t,e){const i=new x;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,i){try{const n=await function(t,e){const i=h(t);return i.persistence.runTransaction("read document","readonly",t=>i.Wn.Rn(t,e))}(t,e);n.isFoundDocument()?i.resolve(n):n.isNoDocument()?i.resolve(null):i.reject(new y(w.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const n=Da(t,`Failed to get document '${e} from cache`);i.reject(n)}}(await Cr(t),e,i)),i.promise}function kr(t,e,i={}){const n=new x;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,i,n,M){const s=new Sr({next:s=>{e.enqueueAndForget(()=>wa(t,a));const r=s.docs.has(i);!r&&s.fromCache?M.reject(new y(w.UNAVAILABLE,"Failed to get document because the client is offline.")):r&&s.fromCache&&n&&"server"===n.source?M.reject(new y(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):M.resolve(s)},error:t=>M.reject(t)}),a=new Ea(Ht(i.path),s,{includeMetadataChanges:!0,wo:!0});return ha(t,a)}(await Yr(t),t.asyncQueue,e,i,n)),n.promise}function Wr(t,e){const i=new x;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,i){try{const n=await KM(t,e,!0),M=new Ya(e,n.zn),s=M.Po(n.documents),a=M.applyChanges(s,!1);i.resolve(a.snapshot)}catch(t){const n=Da(t,`Failed to execute query '${e} against cache`);i.reject(n)}}(await Cr(t),e,i)),i.promise}function Gr(t,e,i={}){const n=new x;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,i,n,M){const s=new Sr({next:i=>{e.enqueueAndForget(()=>wa(t,a)),i.fromCache&&"server"===n.source?M.reject(new y(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):M.resolve(i)},error:t=>M.reject(t)}),a=new Ea(i,s,{includeMetadataChanges:!0,wo:!0});return ha(t,a)}(await Yr(t),t.asyncQueue,e,i,n)),n.promise}function Jr(t,e){const i=new Sr(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){h(t).io.add(e),e.next()}(await Yr(t),i)),()=>{i.nc(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){h(t).io.delete(e)}(await Yr(t),i))}}function Zr(t,e){const i=new x;return t.asyncQueue.enqueueAndForget(async()=>{const n=await function(t){return br(t).then(t=>t.datastore)}(t);new yr(t.asyncQueue,n,e,i).run()}),i.promise}function Qr(t,e,i,n){const M=function(t,e){let i;return i="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new hr(t,e)}(function(t,e){if(t instanceof Uint8Array)return dr(t,e);if(t instanceof ArrayBuffer)return dr(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(i),e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,fs(e));t.asyncQueue.enqueueAndForget(async()=>{Ar(await fr(t),M,n)})}function Pr(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const i=h(t);return i.persistence.runTransaction("Get named query","readonly",t=>i.Ye.getNamedQuery(t,e))}(await Cr(t),e))}class Vr{constructor(t,e,i,n,M,s,a,r){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=M,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=r}}class Br{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Br&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e,i){if(!i)throw new y(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Xr(t,e,i,n){if(!0===e&&!0===n)throw new y(w.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}function Hr(t){if(!rt.isDocumentKey(t))throw new y(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _r(t){if(rt.isDocumentKey(t))throw new y(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qr(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":j()}function $r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new y(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=qr(t);throw new y(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}function Kr(t,e){if(e<=0)throw new y(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new y(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new y(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Xr("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e,i){this._authCredentials=e,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new to({}),this._settingsFrozen=!1,t instanceof Br?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new y(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(t.options.projectId)}(t))}get app(){if(!this._app)throw new y(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new y(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new to(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new E;switch(t.type){case"gapi":const e=t.client;return d(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new C(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Fr.get(t);e&&(A("ComponentProvider","Removing Datastore"),Fr.delete(t),e.terminate())}(this),Promise.resolve()}}function io(t,e,i,n={}){var M;const s=(t=$r(t,eo))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&N("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${i}`,ssl:!1})),n.mockUserToken){let e,i;if("string"==typeof n.mockUserToken)e=n.mockUserToken,i=u.MOCK_USER;else{e=Object(a["f"])(n.mockUserToken,null===(M=t._app)||void 0===M?void 0:M.options.projectId);const s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new y(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new u(s)}t._authCredentials=new m(new T(e,i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new so(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new no(this.firestore,t,this._key)}}class Mo{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Mo(this.firestore,t,this._query)}}class so extends Mo{constructor(t,e,i){super(t,e,Ht(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new no(this.firestore,null,new rt(t))}withConverter(t){return new so(this.firestore,t,this._path)}}function ao(t,e,...i){if(t=Object(a["k"])(t),Rr("collection","path",e),t instanceof eo){const n=B.fromString(e,...i);return _r(n),new so(t,null,n)}{if(!(t instanceof no||t instanceof so))throw new y(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(B.fromString(e,...i));return _r(n),new so(t.firestore,null,n)}}function ro(t,e){if(t=$r(t,eo),Rr("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(w.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mo(t,null,function(t){return new Rt(B.emptyPath(),t)}(e))}function oo(t,e,...i){if(t=Object(a["k"])(t),1===arguments.length&&(e=O.A()),Rr("doc","path",e),t instanceof eo){const n=B.fromString(e,...i);return Hr(n),new no(t,null,new rt(n))}{if(!(t instanceof no||t instanceof so))throw new y(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(B.fromString(e,...i));return Hr(n),new no(t.firestore,t instanceof so?t.converter:null,new rt(n))}}function uo(t,e){return t=Object(a["k"])(t),e=Object(a["k"])(e),(t instanceof no||t instanceof so)&&(e instanceof no||e instanceof so)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function co(t,e){return t=Object(a["k"])(t),e=Object(a["k"])(e),t instanceof Mo&&e instanceof Mo&&t.firestore===e.firestore&&Me(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class go{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Ys(this,"async_queue_retry"),this.bc=()=>{const t=zs();t&&A("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=zs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=zs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const e=new x;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Cn(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const e=this.mc.then(()=>(this.Ic=!0,t().catch(t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw D("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ic=!1,t))));return this.mc=e,e}enqueueAfterDelay(t,e,i){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const n=Aa.createAndSchedule(this,t,e,i,t=>this.Sc(t));return this.Tc.push(n),n}Pc(){this.Ec&&j()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}function Io(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const i=t;for(const n of e)if(n in i&&"function"==typeof i[n])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class lo{constructor(){this._progressObserver={},this._taskCompletionResolver=new x,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,i){this._progressObserver={next:t,error:e,complete:i}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=-1;class Do extends eo{constructor(t,e,i){super(t,e,i),this.type="firestore",this._queue=new go,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lo(this),this._firestoreClient.terminate()}}function No(t){return t._firestoreClient||Lo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lo(t){var e;const i=t._freezeSettings(),n=function(t,e,i,n){return new Vr(t,e,i,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new xr(t._authCredentials,t._appCheckCredentials,t._queue,n)}function jo(t,e){bo(t=$r(t,Do));const i=No(t),n=t._freezeSettings(),M=new jr;return ho(i,M,new Nr(M,n.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function So(t){bo(t=$r(t,Do));const e=No(t),i=t._freezeSettings(),n=new jr;return ho(e,n,new Lr(n,i.cacheSizeBytes))}function ho(t,e,i){const n=new x;return t.asyncQueue.enqueue(async()=>{try{await Tr(t,i),await Er(t,e),n.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),n.reject(t)}}).then(()=>n.promise)}function wo(t){if(t._initialized&&!t._terminated)throw new y(w.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new x;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!mn.Pt())return Promise.resolve();const e=t+"main";await mn.delete(e)}(WM(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function yo(t){return function(t){const e=new x;return t.asyncQueue.enqueueAndForget(async()=>Fa(await fr(t),e)),e.promise}(No(t=$r(t,Do)))}function xo(t){return vr(No(t=$r(t,Do)))}function To(t){return Or(No(t=$r(t,Do)))}function Eo(t,e){const i=No(t=$r(t,Do)),n=new lo;return Qr(i,t._databaseId,e,n),n}function mo(t,e){return Pr(No(t=$r(t,Do)),e).then(e=>e?new Mo(t,null,e.query):null)}function bo(t){if(t._initialized||t._terminated)throw new y(w.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new y(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new R(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Co(_.fromBase64String(t))}catch(t){throw new y(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Co(_.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=/^__.*__$/;class vo{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return null!==this.fieldMask?new ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ue(t,this.data,e,this.fieldTransforms)}}class Oo{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new ke(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Uo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class ko{constructor(t,e,i,n,M,s){this.settings=t,this.databaseId=e,this.k=i,this.ignoreUndefinedProperties=n,void 0===M&&this.xc(),this.fieldTransforms=M||[],this.fieldMask=s||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new ko(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Oc({path:i,Fc:!1});return n.Lc(t),n}Bc(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Oc({path:i,Fc:!1});return n.xc(),n}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return nu(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(Uo(this.$c)&&Yo.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Wo{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=i||fs(t)}Qc(t,e,i,n=!1){return new ko({$c:t,methodName:e,jc:i,path:R.emptyPath(),Fc:!1,Kc:n},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Go(t){const e=t._freezeSettings(),i=fs(t._databaseId);return new Wo(t._databaseId,!!e.ignoreUndefinedProperties,i)}function Jo(t,e,i,n,M,s={}){const a=t.Qc(s.merge||s.mergeFields?2:0,e,i,M);Ko("Data must be an object, but it was:",a,n);const r=qo(n,a);let o,u;if(s.merge)o=new X(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const t=[];for(const n of s.mergeFields){const M=tu(e,n,i);if(!a.contains(M))throw new y(w.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);Mu(t,M)||t.push(M)}o=new X(t),u=a.fieldTransforms.filter(t=>o.covers(t.field))}else o=null,u=a.fieldTransforms;return new vo(new wt(r),o,u)}class Zo extends zo{_toFieldTransform(t){if(2!==t.$c)throw 1===t.$c?t.qc(this._methodName+"() can only appear at the top level of your update data"):t.qc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zo}}function Qo(t,e,i){return new ko({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:i},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Po extends zo{_toFieldTransform(t){return new Te(t.path,new Le)}isEqual(t){return t instanceof Po}}class Vo extends zo{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Qo(this,t,!0),i=this.Wc.map(t=>_o(t,e)),n=new je(i);return new Te(t.path,n)}isEqual(t){return this===t}}class Bo extends zo{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Qo(this,t,!0),i=this.Wc.map(t=>_o(t,e)),n=new Se(i);return new Te(t.path,n)}isEqual(t){return this===t}}class Fo extends zo{constructor(t,e){super(t),this.Gc=e}_toFieldTransform(t){const e=new we(t.k,Ie(t.k,this.Gc));return new Te(t.path,e)}isEqual(t){return this===t}}function Ro(t,e,i,n){const M=t.Qc(1,e,i);Ko("Data must be an object, but it was:",M,n);const s=[],r=wt.empty();Q(n,(t,n)=>{const o=iu(e,t,i);n=Object(a["k"])(n);const u=M.Bc(o);if(n instanceof Zo)s.push(o);else{const t=_o(n,u);null!=t&&(s.push(o),r.set(o,t))}});const o=new X(s);return new Oo(r,o,M.fieldTransforms)}function Xo(t,e,i,n,M,s){const r=t.Qc(1,e,i),o=[tu(e,n,i)],u=[M];if(s.length%2!=0)throw new y(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)o.push(tu(e,s[a])),u.push(s[a+1]);const c=[],g=wt.empty();for(let l=o.length-1;l>=0;--l)if(!Mu(c,o[l])){const t=o[l];let e=u[l];e=Object(a["k"])(e);const i=r.Bc(t);if(e instanceof Zo)c.push(t);else{const n=_o(e,i);null!=n&&(c.push(t),g.set(t,n))}}const I=new X(c);return new Oo(g,I,r.fieldTransforms)}function Ho(t,e,i,n=!1){return _o(i,t.Qc(n?4:3,e))}function _o(t,e){if($o(t=Object(a["k"])(t)))return Ko("Unsupported field value:",e,t),qo(t,e);if(t instanceof zo)return function(t,e){if(!Uo(e.$c))throw e.qc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.qc(t._methodName+"() is not currently supported inside arrays");const i=t._toFieldTransform(e);i&&e.fieldTransforms.push(i)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.$c)throw e.qc("Nested arrays are not supported");return function(t,e){const i=[];let n=0;for(const M of t){let t=_o(M,e.Uc(n));null==t&&(t={nullValue:"NULL_VALUE"}),i.push(t),n++}return{arrayValue:{values:i}}}(t,e)}return function(t,e){if(null===(t=Object(a["k"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ie(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const i=G.fromDate(t);return{timestampValue:hi(e.k,i)}}if(t instanceof G){const i=new G(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:hi(e.k,i)}}if(t instanceof fo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Co)return{bytesValue:wi(e.k,t._byteString)};if(t instanceof no){const i=e.databaseId,n=t.firestore._databaseId;if(!n.isEqual(i))throw e.qc(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ti(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.qc("Unsupported field value: "+qr(t))}(t,e)}function qo(t,e){const i={};return P(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Q(t,(t,n)=>{const M=_o(n,e.Mc(t));null!=M&&(i[t]=M)}),{mapValue:{fields:i}}}function $o(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof G||t instanceof fo||t instanceof Co||t instanceof no||t instanceof zo)}function Ko(t,e,i){if(!$o(i)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(i)){const n=qr(i);throw"an object"===n?e.qc(t+" a custom object"):e.qc(t+" "+n)}}function tu(t,e,i){if((e=Object(a["k"])(e))instanceof po)return e._internalPath;if("string"==typeof e)return iu(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,i)}const eu=new RegExp("[~\\*/\\[\\]]");function iu(t,e,i){if(e.search(eu)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,i);try{return new po(...e.split("."))._internalPath}catch(n){throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,i)}}function nu(t,e,i,n,M){const s=n&&!n.isEmpty(),a=void 0!==M;let r=`Function ${e}() called with invalid data`;i&&(r+=" (via `toFirestore()`)"),r+=". ";let o="";return(s||a)&&(o+=" (found",s&&(o+=" in field "+n),a&&(o+=" in document "+M),o+=")"),new y(w.INVALID_ARGUMENT,r+t+o)}function Mu(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e,i,n,M){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=n,this._converter=M}get id(){return this._key.path.lastSegment()}get ref(){return new no(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new au(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ru("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class au extends su{data(){return super.data()}}function ru(t,e){return"string"==typeof e?iu(t,e):e instanceof po?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uu extends su{constructor(t,e,i,n,M,s){super(t,e,i,n,s),this._firestore=t,this._firestoreImpl=t,this.metadata=M}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(ru("DocumentSnapshot.get",t));if(null!==i)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class cu extends uu{data(t={}){return super.data(t)}}class gu{constructor(t,e,i,n){this._firestore=t,this._userDataWriter=e,this._snapshot=n,this.metadata=new ou(n.hasPendingWrites,n.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new cu(this._firestore,this._userDataWriter,i.key,i,new ou(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(i=>({type:"added",doc:new cu(t._firestore,t._userDataWriter,i.doc.key,i.doc,new ou(t._snapshot.mutatedKeys.has(i.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let i=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const n=new cu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ou(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let M=-1,s=-1;return 0!==e.type&&(M=i.indexOf(e.doc.key),i=i.delete(e.doc.key)),1!==e.type&&(i=i.add(e.doc),s=i.indexOf(e.doc.key)),{type:Iu(e.type),doc:n,oldIndex:M,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Iu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}function lu(t,e){return t instanceof uu&&e instanceof uu?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof gu&&e instanceof gu&&t._firestore===e._firestore&&co(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){if(qt(t)&&0===t.explicitOrderBy.length)throw new y(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Du{}function Nu(t,...e){for(const i of e)t=i._apply(t);return t}class Lu extends Du{constructor(t,e,i){super(),this.zc=t,this.Hc=e,this.Jc=i,this.type="where"}_apply(t){const e=Go(t.firestore),i=function(t,e,i,n,M,s,a){let r;if(M.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new y(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){fu(a,s);const e=[];for(const i of a)e.push(zu(n,t,i));r={arrayValue:{values:e}}}else r=zu(n,t,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||fu(a,s),r=Ho(i,e,a,"in"===s||"not-in"===s);const o=zt.create(M,s,r);return function(t,e){if(e.V()){const i=Kt(t);if(null!==i&&!i.isEqual(e.field))throw new y(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${e.field.toString()}'`);const n=$t(t);null!==n&&Yu(t,e.field,n)}const i=function(t,e){for(const i of t.filters)if(e.indexOf(i.op)>=0)return i.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==i)throw i===e.op?new y(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${i.toString()}' filters.`)}(t,o),o}(t._query,"where",e,t.firestore._databaseId,this.zc,this.Hc,this.Jc);return new Mo(t.firestore,t.converter,function(t,e){const i=t.filters.concat([e]);return new Rt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),i,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,i))}}function ju(t,e,i){const n=e,M=ru("where",t);return new Lu(M,n,i)}class du extends Du{constructor(t,e){super(),this.zc=t,this.Yc=e,this.type="orderBy"}_apply(t){const e=function(t,e,i){if(null!==t.startAt)throw new y(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new y(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const n=new Pt(e,i);return function(t,e){if(null===$t(t)){const i=Kt(t);null!==i&&Yu(t,i,e.field)}}(t,n),n}(t._query,this.zc,this.Yc);return new Mo(t.firestore,t.converter,function(t,e){const i=t.explicitOrderBy.concat([e]);return new Rt(t.path,t.collectionGroup,i,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Su(t,e="asc"){const i=e,n=ru("orderBy",t);return new du(n,i)}class hu extends Du{constructor(t,e,i){super(),this.type=t,this.Xc=e,this.Zc=i}_apply(t){return new Mo(t.firestore,t.converter,ne(t._query,this.Xc,this.Zc))}}function wu(t){return Kr("limit",t),new hu("limit",t,"F")}function yu(t){return Kr("limitToLast",t),new hu("limitToLast",t,"L")}class xu extends Du{constructor(t,e,i){super(),this.type=t,this.ta=e,this.ea=i}_apply(t){const e=Cu(t,this.type,this.ta,this.ea);return new Mo(t.firestore,t.converter,function(t,e){return new Rt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Tu(...t){return new xu("startAt",t,!0)}function Eu(...t){return new xu("startAfter",t,!1)}class mu extends Du{constructor(t,e,i){super(),this.type=t,this.ta=e,this.ea=i}_apply(t){const e=Cu(t,this.type,this.ta,this.ea);return new Mo(t.firestore,t.converter,function(t,e){return new Rt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function bu(...t){return new mu("endBefore",t,!0)}function pu(...t){return new mu("endAt",t,!1)}function Cu(t,e,i,n){if(i[0]=Object(a["k"])(i[0]),i[0]instanceof su)return function(t,e,i,n,M){if(!n)throw new y(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${i}().`);const s=[];for(const a of ee(t))if(a.field.isKeyField())s.push(Dt(e,n.key));else{const t=n.data.field(a.field);if(et(t))throw new y(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=a.field.canonicalString();throw new y(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Zt(s,M)}(t._query,t.firestore._databaseId,e,i[0]._document,n);{const M=Go(t.firestore);return function(t,e,i,n,M,s){const a=t.explicitOrderBy;if(M.length>a.length)throw new y(w.INVALID_ARGUMENT,`Too many arguments provided to ${n}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const r=[];for(let o=0;o<M.length;o++){const s=M[o];if(a[o].field.isKeyField()){if("string"!=typeof s)throw new y(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${n}(), but got a ${typeof s}`);if(!te(t)&&-1!==s.indexOf("/"))throw new y(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n}() must be a plain document ID, but '${s}' contains a slash.`);const i=t.path.child(B.fromString(s));if(!rt.isDocumentKey(i))throw new y(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n}() must result in a valid document path, but '${i}' is not because it contains an odd number of segments.`);const M=new rt(i);r.push(Dt(e,M))}else{const t=Ho(i,n,s);r.push(t)}}return new Zt(r,s)}(t._query,t.firestore._databaseId,M,e,i,n)}}function zu(t,e,i){if("string"==typeof(i=Object(a["k"])(i))){if(""===i)throw new y(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!te(e)&&-1!==i.indexOf("/"))throw new y(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const n=e.path.child(B.fromString(i));if(!rt.isDocumentKey(n))throw new y(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Dt(t,new rt(n))}if(i instanceof no)return Dt(t,i._key);throw new y(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qr(i)}.`)}function fu(t,e){if(!Array.isArray(t)||0===t.length)throw new y(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new y(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Yu(t,e,i){if(!i.isEqual(e))throw new y(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${i.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{convertValue(t,e="none"){switch(ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw j()}}convertObject(t,e){const i={};return Q(t.fields,(t,n)=>{i[t]=this.convertValue(n,e)}),i}convertGeoPoint(t){return new fo(K(t.latitude),K(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=it(t);return null==i?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(nt(t));default:return null}}convertTimestamp(t){const e=$(t);return new G(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=B.fromString(t);d(tn(i));const n=new Br(i.get(1),i.get(3)),M=new rt(i.popFirst(5));return n.isEqual(e)||D(`Document ${M} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),M}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e,i){let n;return n=t?i&&(i.merge||i.mergeFields)?t.toFirestore(e,i):t.toFirestore(e):e,n}class Uu extends vu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Co(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new no(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Go(t)}set(t,e,i){this._verifyNotCommitted();const n=Wu(t,this._firestore),M=Ou(n.converter,e,i),s=Jo(this._dataReader,"WriteBatch.set",n._key,M,null!==n.converter,i);return this._mutations.push(s.toMutation(n._key,be.none())),this}update(t,e,i,...n){this._verifyNotCommitted();const M=Wu(t,this._firestore);let s;return s="string"==typeof(e=Object(a["k"])(e))||e instanceof po?Xo(this._dataReader,"WriteBatch.update",M._key,e,i,n):Ro(this._dataReader,"WriteBatch.update",M._key,e),this._mutations.push(s.toMutation(M._key,be.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Wu(t,this._firestore);return this._mutations=this._mutations.concat(new Ze(e._key,be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wu(t,e){if((t=Object(a["k"])(t)).firestore!==e)throw new y(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){t=$r(t,no);const e=$r(t.firestore,Do);return kr(No(e),t._key).then(i=>Ku(e,t,i))}class Ju extends vu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Co(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new no(this.firestore,null,e)}}function Zu(t){t=$r(t,no);const e=$r(t.firestore,Do),i=No(e),n=new Ju(e);return Ur(i,t._key).then(i=>new uu(e,n,t._key,i,new ou(null!==i&&i.hasLocalMutations,!0),t.converter))}function Qu(t){t=$r(t,no);const e=$r(t.firestore,Do);return kr(No(e),t._key,{source:"server"}).then(i=>Ku(e,t,i))}function Pu(t){t=$r(t,Mo);const e=$r(t.firestore,Do),i=No(e),n=new Ju(e);return Au(t._query),Gr(i,t._query).then(i=>new gu(e,n,t,i))}function Vu(t){t=$r(t,Mo);const e=$r(t.firestore,Do),i=No(e),n=new Ju(e);return Wr(i,t._query).then(i=>new gu(e,n,t,i))}function Bu(t){t=$r(t,Mo);const e=$r(t.firestore,Do),i=No(e),n=new Ju(e);return Gr(i,t._query,{source:"server"}).then(i=>new gu(e,n,t,i))}function Fu(t,e,i){t=$r(t,no);const n=$r(t.firestore,Do),M=Ou(t.converter,e,i);return $u(n,[Jo(Go(n),"setDoc",t._key,M,null!==t.converter,i).toMutation(t._key,be.none())])}function Ru(t,e,i,...n){t=$r(t,no);const M=$r(t.firestore,Do),s=Go(M);let r;return r="string"==typeof(e=Object(a["k"])(e))||e instanceof po?Xo(s,"updateDoc",t._key,e,i,n):Ro(s,"updateDoc",t._key,e),$u(M,[r.toMutation(t._key,be.exists(!0))])}function Xu(t){return $u($r(t.firestore,Do),[new Ze(t._key,be.none())])}function Hu(t,e){const i=$r(t.firestore,Do),n=oo(t),M=Ou(t.converter,e);return $u(i,[Jo(Go(t.firestore),"addDoc",n._key,M,null!==t.converter,{}).toMutation(n._key,be.exists(!1))]).then(()=>n)}function _u(t,...e){var i,n,M;t=Object(a["k"])(t);let s={includeMetadataChanges:!1},r=0;"object"!=typeof e[r]||Io(e[r])||(s=e[r],r++);const o={includeMetadataChanges:s.includeMetadataChanges};if(Io(e[r])){const t=e[r];e[r]=null===(i=t.next)||void 0===i?void 0:i.bind(t),e[r+1]=null===(n=t.error)||void 0===n?void 0:n.bind(t),e[r+2]=null===(M=t.complete)||void 0===M?void 0:M.bind(t)}let u,c,g;if(t instanceof no)c=$r(t.firestore,Do),g=Ht(t._key.path),u={next:i=>{e[r]&&e[r](Ku(c,t,i))},error:e[r+1],complete:e[r+2]};else{const i=$r(t,Mo);c=$r(i.firestore,Do),g=i._query;const n=new Ju(c);u={next:t=>{e[r]&&e[r](new gu(c,n,i,t))},error:e[r+1],complete:e[r+2]},Au(t._query)}return function(t,e,i,n){const M=new Sr(n),s=new Ea(e,M,i);return t.asyncQueue.enqueueAndForget(async()=>ha(await Yr(t),s)),()=>{M.nc(),t.asyncQueue.enqueueAndForget(async()=>wa(await Yr(t),s))}}(No(c),g,o,u)}function qu(t,e){return Jr(No(t=$r(t,Do)),Io(e)?e:{next:e})}function $u(t,e){return function(t,e){const i=new x;return t.asyncQueue.enqueueAndForget(async()=>Ja(await fr(t),e,i)),i.promise}(No(t),e)}function Ku(t,e,i){const n=i.docs.get(e._key),M=new Ju(t);return new uu(t,M,e._key,n,new ou(i.hasPendingWrites,i.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Go(t)}get(t){const e=Wu(t,this._firestore),i=new Uu(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return j();const n=t[0];if(n.isFoundDocument())return new su(this._firestore,i,n.key,n,e.converter);if(n.isNoDocument())return new su(this._firestore,i,e._key,null,e.converter);throw j()})}set(t,e,i){const n=Wu(t,this._firestore),M=Ou(n.converter,e,i),s=Jo(this._dataReader,"Transaction.set",n._key,M,null!==n.converter,i);return this._transaction.set(n._key,s),this}update(t,e,i,...n){const M=Wu(t,this._firestore);let s;return s="string"==typeof(e=Object(a["k"])(e))||e instanceof po?Xo(this._dataReader,"Transaction.update",M._key,e,i,n):Ro(this._dataReader,"Transaction.update",M._key,e),this._transaction.update(M._key,s),this}delete(t){const e=Wu(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Wu(t,this._firestore),i=new Ju(this._firestore);return super.get(t).then(t=>new uu(this._firestore,i,e._key,t._document,new ou(!1,!1),e.converter))}}function ec(t,e){return Zr(No(t=$r(t,Do)),i=>e(new tc(t,i)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return new Zo("deleteField")}function nc(){return new Po("serverTimestamp")}function Mc(...t){return new Vo("arrayUnion",t)}function sc(...t){return new Bo("arrayRemove",t)}function ac(t){return new Fo("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){c=t}(n["SDK_VERSION"]),Object(n["_registerComponent"])(new M["a"]("firestore",(t,{options:i})=>{const n=t.getProvider("app").getImmediate(),M=new Do(n,new b(t.getProvider("auth-internal")),new f(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),M._setSettings(i),M},"PUBLIC")),Object(n["registerVersion"])(o,"3.4.4",t),Object(n["registerVersion"])(o,"3.4.4","esm2017")}()}).call(this,i("4362"))},"0a06":function(t,e,i){"use strict";var n=i("c532"),M=i("30b5"),s=i("f6b4"),a=i("5270"),r=i("4a7b"),o=i("848b"),u=o.validators;function c(t){this.defaults=t,this.interceptors={request:new s,response:new s}}c.prototype.request=function(t,e){if("string"===typeof t?(e=e||{},e.url=t):e=t||{},!e.url)throw new Error("Provided config url is not valid");e=r(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var i=e.transitional;void 0!==i&&o.assertOptions(i,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],M=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(M=M&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)})),!M){var g=[a,void 0];Array.prototype.unshift.apply(g,n),g=g.concat(c),s=Promise.resolve(e);while(g.length)s=s.then(g.shift(),g.shift());return s}var I=e;while(n.length){var l=n.shift(),A=n.shift();try{I=l(I)}catch(D){A(D);break}}try{s=a(I)}catch(D){return Promise.reject(D)}while(c.length)s=s.then(c.shift(),c.shift());return s},c.prototype.getUri=function(t){if(!t.url)throw new Error("Provided config url is not valid");return t=r(this.defaults,t),M(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,i){return this.request(r(i||{},{method:t,url:e,data:(i||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,i,n){return this.request(r(n||{},{method:t,url:e,data:i}))}})),t.exports=c},"0b42":function(t,e,i){var n=i("da84"),M=i("e8b5"),s=i("68ee"),a=i("861d"),r=i("b622"),o=r("species"),u=n.Array;t.exports=function(t){var e;return M(t)&&(e=t.constructor,s(e)&&(e===u||M(e.prototype))?e=void 0:a(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?u:e}},"0cb2":function(t,e,i){var n=i("e330"),M=i("7b0b"),s=Math.floor,a=n("".charAt),r=n("".replace),o=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,n,g,I){var l=i+t.length,A=n.length,D=c;return void 0!==g&&(g=M(g),D=u),r(I,D,(function(M,r){var u;switch(a(r,0)){case"$":return"$";case"&":return t;case"`":return o(e,0,i);case"'":return o(e,l);case"<":u=g[o(r,1,-1)];break;default:var c=+r;if(0===c)return M;if(c>A){var I=s(c/10);return 0===I?M:I<=A?void 0===n[I-1]?a(r,1):n[I-1]+a(r,1):M}u=n[c-1]}return void 0===u?"":u}))}},"0cfb":function(t,e,i){var n=i("83ab"),M=i("d039"),s=i("cc12");t.exports=!n&&!M((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,i){var n=i("da84"),M=n.String;t.exports=function(t){try{return M(t)}catch(e){return"Object"}}},"0df6":function(t,e,i){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"107c":function(t,e,i){var n=i("d039"),M=i("da84"),s=M.RegExp;t.exports=n((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"126d":function(t,e,i){var n=i("6da8"),M=i("aaec"),s=i("d094");function a(t){return M(t)?s(t):n(t)}t.exports=a},1276:function(t,e,i){"use strict";var n=i("2ba4"),M=i("c65b"),s=i("e330"),a=i("d784"),r=i("44e7"),o=i("825a"),u=i("1d80"),c=i("4840"),g=i("8aa5"),I=i("50c4"),l=i("577e"),A=i("dc4a"),D=i("4dae"),N=i("14c3"),L=i("9263"),j=i("9f7f"),d=i("d039"),S=j.UNSUPPORTED_Y,h=4294967295,w=Math.min,y=[].push,x=s(/./.exec),T=s(y),E=s("".slice),m=!d((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));a("split",(function(t,e,i){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var s=l(u(this)),a=void 0===i?h:i>>>0;if(0===a)return[];if(void 0===t)return[s];if(!r(t))return M(e,s,t,a);var o,c,g,I=[],A=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),N=0,j=new RegExp(t.source,A+"g");while(o=M(L,j,s)){if(c=j.lastIndex,c>N&&(T(I,E(s,N,o.index)),o.length>1&&o.index<s.length&&n(y,I,D(o,1)),g=o[0].length,N=c,I.length>=a))break;j.lastIndex===o.index&&j.lastIndex++}return N===s.length?!g&&x(j,"")||T(I,""):T(I,E(s,N)),I.length>a?D(I,0,a):I}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:M(e,this,t,i)}:e,[function(e,i){var n=u(this),a=void 0==e?void 0:A(e,t);return a?M(a,e,n,i):M(s,l(n),e,i)},function(t,n){var M=o(this),a=l(t),r=i(s,M,a,n,s!==e);if(r.done)return r.value;var u=c(M,RegExp),A=M.unicode,D=(M.ignoreCase?"i":"")+(M.multiline?"m":"")+(M.unicode?"u":"")+(S?"g":"y"),L=new u(S?"^(?:"+M.source+")":M,D),j=void 0===n?h:n>>>0;if(0===j)return[];if(0===a.length)return null===N(L,a)?[a]:[];var d=0,y=0,x=[];while(y<a.length){L.lastIndex=S?0:y;var m,b=N(L,S?E(a,y):a);if(null===b||(m=w(I(L.lastIndex+(S?y:0)),a.length))===d)y=g(a,y,A);else{if(T(x,E(a,d,y)),x.length===j)return x;for(var p=1;p<=b.length-1;p++)if(T(x,b[p]),x.length===j)return x;y=d=m}}return T(x,E(a,d)),x}]}),!m,S)},1310:function(t,e){function i(t){return null!=t&&"object"==typeof t}t.exports=i},"14c3":function(t,e,i){var n=i("da84"),M=i("c65b"),s=i("825a"),a=i("1626"),r=i("c6b6"),o=i("9263"),u=n.TypeError;t.exports=function(t,e){var i=t.exec;if(a(i)){var n=M(i,t,e);return null!==n&&s(n),n}if("RegExp"===r(t))return M(o,t,e);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,i){var n=i("da84"),M=i("fdbc"),s=i("785a"),a=i("17c2"),r=i("9112"),o=function(t){if(t&&t.forEach!==a)try{r(t,"forEach",a)}catch(e){t.forEach=a}};for(var u in M)M[u]&&o(n[u]&&n[u].prototype);o(s)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"16b3":function(t,e,i){"use strict";(function(t){let n,M;function s(){var e;return void 0!==n||("undefined"!==typeof window&&window.performance?(n=!0,M=window.performance):"undefined"!==typeof t&&(null===(e=t.perf_hooks)||void 0===e?void 0:e.performance)?(n=!0,M=t.perf_hooks.performance):n=!1),n}function a(){return s()?M.now():Date.now()}i.d(e,"a",(function(){return a}))}).call(this,i("c8ba"))},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,M=i("a640"),s=M("forEach");t.exports=s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1862:function(t,e,i){"use strict";var n=i("7ded"),M=i("0829"),s=i("1fd5"),a=i("22e5");const r="@firebase/firestore-compat",o="0.1.13";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new M["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){if("undefined"===typeof Uint8Array)throw new M["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function g(){if(!Object(M["r"])())throw new M["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class I{constructor(t){this._delegate=t}static fromBase64String(t){return g(),new I(M["b"].fromBase64String(t))}static fromUint8Array(t){return c(),new I(M["b"].fromUint8Array(t))}toBase64(){return g(),this._delegate.toBase64()}toUint8Array(){return c(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t){return A(t,["next","error","complete"])}function A(t,e){if("object"!==typeof t||null===t)return!1;const i=t;for(const n of e)if(n in i&&"function"===typeof i[n])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{enableIndexedDbPersistence(t,e){return Object(M["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(M["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(M["x"])(t._delegate)}}class N{constructor(t,e,i){this._delegate=e,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},t instanceof M["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(M["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,i={}){Object(M["A"])(this._delegate,t,e,i)}enableNetwork(){return Object(M["H"])(this._delegate)}disableNetwork(){return Object(M["D"])(this._delegate)}enablePersistence(t){let e=!1,i=!1;return t&&(e=!!t.synchronizeTabs,i=!!t.experimentalForceOwningTab,Object(M["t"])("synchronizeTabs",e,"experimentalForceOwningTab",i)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(M["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(M["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new M["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new z(this,Object(M["y"])(this._delegate,t))}catch(e){throw y(e,"collection()","Firestore.collection()")}}doc(t){try{return new w(this,Object(M["E"])(this._delegate,t))}catch(e){throw y(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new b(this,Object(M["z"])(this._delegate,t))}catch(e){throw y(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(M["db"])(this._delegate,e=>t(new d(this,e)))}batch(){return Object(M["K"])(this._delegate),new S(new M["l"](this._delegate,t=>Object(M["L"])(this._delegate,t)))}loadBundle(t){return Object(M["V"])(this._delegate,t)}namedQuery(t){return Object(M["W"])(this._delegate,t).then(t=>t?new b(this,t):null)}}class L extends M["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new I(new M["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return w.forKey(e,this.firestore,null)}}function j(t){Object(M["gb"])(t)}class d{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new L(t)}get(t){const e=f(t);return this._delegate.get(e).then(t=>new E(this._firestore,new M["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,i){const n=f(t);return i?(u("Transaction.set",i),this._delegate.set(n,e,i)):this._delegate.set(n,e),this}update(t,e,i,...n){const M=f(t);return 2===arguments.length?this._delegate.update(M,e):this._delegate.update(M,e,i,...n),this}delete(t){const e=f(t);return this._delegate.delete(e),this}}class S{constructor(t){this._delegate=t}set(t,e,i){const n=f(t);return i?(u("WriteBatch.set",i),this._delegate.set(n,e,i)):this._delegate.set(n,e),this}update(t,e,i,...n){const M=f(t);return 2===arguments.length?this._delegate.update(M,e):this._delegate.update(M,e,i,...n),this}delete(t){const e=f(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class h{constructor(t,e,i){this._firestore=t,this._userDataWriter=e,this._delegate=i}fromFirestore(t,e){const i=new M["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new m(this._firestore,i),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const i=h.INSTANCES;let n=i.get(t);n||(n=new WeakMap,i.set(t,n));let M=n.get(e);return M||(M=new h(t,new L(t),e),n.set(e,M)),M}}h.INSTANCES=new WeakMap;class w{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new L(t)}static forPath(t,e,i){if(t.length%2!==0)throw new M["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new w(e,new M["d"](e._delegate,i,new M["n"](t)))}static forKey(t,e,i){return new w(e,new M["d"](e._delegate,i,t))}get id(){return this._delegate.id}get parent(){return new z(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new z(this.firestore,Object(M["y"])(this._delegate,t))}catch(e){throw y(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(s["k"])(t),t instanceof M["d"]&&Object(M["cb"])(this._delegate,t)}set(t,e){e=u("DocumentReference.set",e);try{return e?Object(M["fb"])(this._delegate,t,e):Object(M["fb"])(this._delegate,t)}catch(i){throw y(i,"setDoc()","DocumentReference.set()")}}update(t,e,...i){try{return 1===arguments.length?Object(M["kb"])(this._delegate,t):Object(M["kb"])(this._delegate,t,e,...i)}catch(n){throw y(n,"updateDoc()","DocumentReference.update()")}}delete(){return Object(M["B"])(this._delegate)}onSnapshot(...t){const e=x(t),i=T(t,t=>new E(this.firestore,new M["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(M["X"])(this._delegate,e,i)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(M["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(M["O"])(this._delegate):Object(M["M"])(this._delegate),e.then(t=>new E(this.firestore,new M["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new w(this.firestore,t?this._delegate.withConverter(h.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function y(t,e,i){return t.message=t.message.replace(e,i),t}function x(t){for(const e of t)if("object"===typeof e&&!l(e))return e;return{}}function T(t,e){var i,n;let M;return M=l(t[0])?t[0]:l(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{M.next&&M.next(e(t))},error:null===(i=M.error)||void 0===i?void 0:i.bind(M),complete:null===(n=M.complete)||void 0===n?void 0:n.bind(M)}}class E{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new w(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(M["hb"])(this._delegate,t._delegate)}}class m extends E{data(t){const e=this._delegate.data(t);return Object(M["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class b{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new L(t)}where(t,e,i){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["mb"])(t,e,i)))}catch(n){throw y(n,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["Z"])(t,e)))}catch(i){throw y(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["T"])(t)))}catch(e){throw y(e,"limit()","Query.limit()")}}limitToLast(t){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["U"])(t)))}catch(e){throw y(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["jb"])(...t)))}catch(e){throw y(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["ib"])(...t)))}catch(e){throw y(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["J"])(...t)))}catch(e){throw y(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new b(this.firestore,Object(M["ab"])(this._delegate,Object(M["I"])(...t)))}catch(e){throw y(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(M["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(M["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(M["R"])(this._delegate):Object(M["P"])(this._delegate),e.then(t=>new C(this.firestore,new M["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=x(t),i=T(t,t=>new C(this.firestore,new M["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(M["X"])(this._delegate,e,i)}withConverter(t){return new b(this.firestore,t?this._delegate.withConverter(h.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class p{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new m(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new b(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new m(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new p(this._firestore,t))}forEach(t,e){this._delegate.forEach(i=>{t.call(e,new m(this._firestore,i))})}isEqual(t){return Object(M["hb"])(this._delegate,t._delegate)}}class z extends b{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new w(this.firestore,t):null}doc(t){try{return new w(this.firestore,void 0===t?Object(M["E"])(this._delegate):Object(M["E"])(this._delegate,t))}catch(e){throw y(e,"doc()","CollectionReference.doc()")}}add(t){return Object(M["u"])(this._delegate,t).then(t=>new w(this.firestore,t))}isEqual(t){return Object(M["cb"])(this._delegate,t._delegate)}withConverter(t){return new z(this.firestore,t?this._delegate.withConverter(h.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function f(t){return Object(M["p"])(t,M["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(...t){this._delegate=new M["f"](...t)}static documentId(){return new Y(M["o"].keyField().canonicalString())}isEqual(t){return t=Object(s["k"])(t),t instanceof M["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(M["eb"])();return t._methodName="FieldValue.serverTimestamp",new v(t)}static delete(){const t=Object(M["C"])();return t._methodName="FieldValue.delete",new v(t)}static arrayUnion(...t){const e=Object(M["w"])(...t);return e._methodName="FieldValue.arrayUnion",new v(e)}static arrayRemove(...t){const e=Object(M["v"])(...t);return e._methodName="FieldValue.arrayRemove",new v(e)}static increment(t){const e=Object(M["S"])(t);return e._methodName="FieldValue.increment",new v(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={Firestore:N,GeoPoint:M["h"],Timestamp:M["k"],Blob:I,Transaction:d,WriteBatch:S,DocumentReference:w,DocumentSnapshot:E,Query:b,QueryDocumentSnapshot:m,QuerySnapshot:C,CollectionReference:z,FieldPath:Y,FieldValue:v,setLogLevel:j,CACHE_SIZE_UNLIMITED:M["c"]};function U(t,e){t.INTERNAL.registerComponent(new a["a"]("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),n=t.getProvider("firestore").getImmediate();return e(i,n)},"PUBLIC").setServiceProps(Object.assign({},O)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){U(t,(t,e)=>new N(t,e,new D)),t.registerVersion(r,o)}k(n["a"])},"19aa":function(t,e,i){var n=i("da84"),M=i("3a9b"),s=n.TypeError;t.exports=function(t,e){if(M(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,i){var n=i("e330"),M=i("7b0b"),s=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(M(t),e)}},"1be4":function(t,e,i){var n=i("d066");t.exports=n("document","documentElement")},"1c7e":function(t,e,i){var n=i("b622"),M=n("iterator"),s=!1;try{var a=0,r={next:function(){return{done:!!a++}},return:function(){s=!0}};r[M]=function(){return this},Array.from(r,(function(){throw 2}))}catch(o){}t.exports=function(t,e){if(!e&&!s)return!1;var i=!1;try{var n={};n[M]=function(){return{next:function(){return{done:i=!0}}}},t(n)}catch(o){}return i}},"1cdc":function(t,e,i){var n=i("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},"1d2b":function(t,e,i){"use strict";t.exports=function(t,e){return function(){for(var i=new Array(arguments.length),n=0;n<i.length;n++)i[n]=arguments[n];return t.apply(e,i)}}},"1d80":function(t,e,i){var n=i("da84"),M=n.TypeError;t.exports=function(t){if(void 0==t)throw M("Can't call method on "+t);return t}},"1dde":function(t,e,i){var n=i("d039"),M=i("b622"),s=i("2d00"),a=M("species");t.exports=function(t){return s>=51||!n((function(){var e=[],i=e.constructor={};return i[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f5a":function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return Wt})),i.d(e,"c",(function(){return ue})),i.d(e,"d",(function(){return le})),i.d(e,"e",(function(){return De})),i.d(e,"f",(function(){return Ae})),i.d(e,"g",(function(){return Kt})),i.d(e,"h",(function(){return Ie})),i.d(e,"i",(function(){return fn})),i.d(e,"j",(function(){return FM})),i.d(e,"k",(function(){return o})),i.d(e,"l",(function(){return xn})),i.d(e,"m",(function(){return Le})),i.d(e,"n",(function(){return de})),i.d(e,"o",(function(){return Se})),i.d(e,"p",(function(){return w})),i.d(e,"q",(function(){return zt})),i.d(e,"r",(function(){return L})),i.d(e,"s",(function(){return vi})),i.d(e,"t",(function(){return E})),i.d(e,"u",(function(){return sM})),i.d(e,"v",(function(){return lt})),i.d(e,"x",(function(){return Pe})),i.d(e,"y",(function(){return pi})),i.d(e,"z",(function(){return PM})),i.d(e,"A",(function(){return zi})),i.d(e,"B",(function(){return Ve})),i.d(e,"C",(function(){return Qe})),i.d(e,"D",(function(){return Yt})),i.d(e,"F",(function(){return Fe})),i.d(e,"G",(function(){return I})),i.d(e,"H",(function(){return $e})),i.d(e,"I",(function(){return li})),i.d(e,"J",(function(){return Ni})),i.d(e,"K",(function(){return MM})),i.d(e,"L",(function(){return It})),i.d(e,"M",(function(){return nn})),i.d(e,"N",(function(){return He})),i.d(e,"O",(function(){return ve})),i.d(e,"P",(function(){return bn})),i.d(e,"Q",(function(){return Qn})),i.d(e,"R",(function(){return iM})),i.d(e,"S",(function(){return wi})),i.d(e,"T",(function(){return Oe})),i.d(e,"U",(function(){return pn})),i.d(e,"V",(function(){return Zn})),i.d(e,"W",(function(){return tM})),i.d(e,"X",(function(){return Ke})),i.d(e,"Y",(function(){return Ze})),i.d(e,"Z",(function(){return Xe})),i.d(e,"ab",(function(){return xe})),i.d(e,"bb",(function(){return Ye})),i.d(e,"cb",(function(){return ke})),i.d(e,"db",(function(){return Re})),i.d(e,"eb",(function(){return _e})),i.d(e,"fb",(function(){return mn})),i.d(e,"gb",(function(){return Jn})),i.d(e,"hb",(function(){return $n})),i.d(e,"ib",(function(){return be})),i.d(e,"jb",(function(){return ni})),i.d(e,"kb",(function(){return Mi})),i.d(e,"lb",(function(){return zn})),i.d(e,"mb",(function(){return ii})),i.d(e,"nb",(function(){return ti})),i.d(e,"ob",(function(){return Be})),i.d(e,"w",(function(){return ys})),i.d(e,"E",(function(){return hs}));var n=i("1fd5"),M=i("589b"),s=i("9ab4"),a=i("e691"),r=i("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function g(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I=c,l=g,A=new n["b"]("auth","Firebase",g()),D=new a["b"]("@firebase/auth");function N(t,...e){D.logLevel<=a["a"].ERROR&&D.error(`Auth (${M["SDK_VERSION"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,...e){throw h(t,...e)}function j(t,...e){return h(t,...e)}function d(t,e,i){const M=Object.assign(Object.assign({},l()),{[e]:i}),s=new n["b"]("auth","Firebase",M);return s.create(e,{appName:t.name})}function S(t,e,i){const n=i;if(!(e instanceof n))throw n.name!==e.constructor.name&&L(t,"argument-error"),d(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function h(t,...e){if("string"!==typeof t){const i=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(i,...n)}return A.create(t,...e)}function w(t,e,...i){if(!t)throw h(e,...i)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw N(e),new Error(e)}function x(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map;function E(t){x(t instanceof Function,"Expected a class definition");let e=T.get(t);return e?(x(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,T.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t,e){const i=(null===e||void 0===e?void 0:e.persistence)||[],n=(Array.isArray(i)?i:[i]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function p(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(p()||Object(n["n"])()||"connection"in navigator))||navigator.onLine}function f(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.shortDelay=t,this.longDelay=e,x(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(n["s"])()||Object(n["u"])()}get(){return z()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,e){x(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},k=new Y(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function G(t,e,i,M,s={}){return J(t,s,async()=>{let s={},a={};M&&("GET"===e?a=M:s={body:JSON.stringify(M)});const r=Object(n["x"])(Object.assign({key:t.config.apiKey},a)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),O.fetch()(Q(t,t.config.apiHost,i,r),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},s))})}async function J(t,e,i){t._canInitEmulator=!1;const M=Object.assign(Object.assign({},U),e);try{const e=new P(t),n=await Promise.race([i(),e.promise]);e.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const e=n.ok?s.errorMessage:s.error.message,[i,a]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw V(t,"email-already-in-use",s);const r=M[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw d(t,r,a);L(t,r)}}catch(s){if(s instanceof n["c"])throw s;L(t,"network-request-failed")}}async function Z(t,e,i,n,M={}){const s=await G(t,e,i,n,M);return"mfaPendingCredential"in s&&L(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Q(t,e,i,n){const M=`${e}${i}?${n}`;return t.config.emulator?v(t.config,M):`${t.config.apiScheme}://${M}`}class P{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(j(this.auth,"network-request-failed")),k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,i){const n={appName:t.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const M=j(t,e,n);return M.customData._tokenResponse=i,M}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return G(t,"POST","/v1/accounts:delete",e)}async function F(t,e){return G(t,"POST","/v1/accounts:update",e)}async function R(t,e){return G(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const i=Object(n["k"])(t),M=await i.getIdToken(e),s=q(M);w(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const a="object"===typeof s.firebase?s.firebase:void 0,r=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:s,token:M,authTime:X(_(s.auth_time)),issuedAtTime:X(_(s.iat)),expirationTime:X(_(s.exp)),signInProvider:r||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function _(t){return 1e3*Number(t)}function q(t){const[e,i,M]=t.split(".");if(void 0===e||void 0===i||void 0===M)return N("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(n["d"])(i);return t?JSON.parse(t):(N("Failed to decode base64 JWT payload"),null)}catch(s){return N("Caught error parsing JWT payload as JSON",s),null}}function $(t){const e=q(t);return w(e,"internal-error"),w("undefined"!==typeof e.exp,"internal-error"),w("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,i=!1){if(i)return e;try{return await e}catch(M){throw M instanceof n["c"]&&tt(M)&&t.auth.currentUser===t&&await t.auth.signOut(),M}}function tt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,i=t-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=X(this.lastLoginAt),this.creationTime=X(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t){var e;const i=t.auth,n=await t.getIdToken(),M=await K(t,R(i,{idToken:n}));w(null===M||void 0===M?void 0:M.users.length,i,"internal-error");const s=M.users[0];t._notifyReloadListener(s);const a=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?at(s.providerUserInfo):[],r=st(t.providerData,a),o=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===r||void 0===r?void 0:r.length),c=!!o&&u,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new it(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,g)}async function Mt(t){const e=Object(n["k"])(t);await nt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function st(t,e){const i=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...i,...e]}function at(t){return t.map(t=>{var{providerId:e}=t,i=Object(s["e"])(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){const i=await J(t,{},async()=>{const i=Object(n["x"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:M,apiKey:s}=t.config,a=Q(t,M,"/v1/token","key="+s),r=await t._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(a,{method:"POST",headers:r,body:i})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w("undefined"!==typeof t.idToken,"internal-error"),w("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):$(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return w(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:n,expiresIn:M}=await rt(t,e);this.updateTokensAndExpiration(i,n,Number(M))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(t,e){const{refreshToken:i,accessToken:n,expirationTime:M}=e,s=new ot;return i&&(w("string"===typeof i,"internal-error",{appName:t}),s.refreshToken=i),n&&(w("string"===typeof n,"internal-error",{appName:t}),s.accessToken=n),M&&(w("number"===typeof M,"internal-error",{appName:t}),s.expirationTime=M),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){w("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ct{constructor(t){var{uid:e,auth:i,stsTokenManager:n}=t,M=Object(s["e"])(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=M.displayName||null,this.email=M.email||null,this.emailVerified=M.emailVerified||!1,this.phoneNumber=M.phoneNumber||null,this.photoURL=M.photoURL||null,this.isAnonymous=M.isAnonymous||!1,this.tenantId=M.tenantId||null,this.metadata=new it(M.createdAt||void 0,M.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return w(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Mt(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await nt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,n,M,s,a,r,o,u;const c=null!==(i=e.displayName)&&void 0!==i?i:void 0,g=null!==(n=e.email)&&void 0!==n?n:void 0,I=null!==(M=e.phoneNumber)&&void 0!==M?M:void 0,l=null!==(s=e.photoURL)&&void 0!==s?s:void 0,A=null!==(a=e.tenantId)&&void 0!==a?a:void 0,D=null!==(r=e._redirectEventId)&&void 0!==r?r:void 0,N=null!==(o=e.createdAt)&&void 0!==o?o:void 0,L=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:j,emailVerified:d,isAnonymous:S,providerData:h,stsTokenManager:y}=e;w(j&&y,t,"internal-error");const x=ot.fromJSON(this.name,y);w("string"===typeof j,t,"internal-error"),ut(c,t.name),ut(g,t.name),w("boolean"===typeof d,t,"internal-error"),w("boolean"===typeof S,t,"internal-error"),ut(I,t.name),ut(l,t.name),ut(A,t.name),ut(D,t.name),ut(N,t.name),ut(L,t.name);const T=new ct({uid:j,auth:t,email:g,emailVerified:d,displayName:c,isAnonymous:S,photoURL:l,phoneNumber:I,tenantId:A,stsTokenManager:x,createdAt:N,lastLoginAt:L});return h&&Array.isArray(h)&&(T.providerData=h.map(t=>Object.assign({},t))),D&&(T._redirectEventId=D),T}static async _fromIdTokenResponse(t,e,i=!1){const n=new ot;n.updateFromServerResponse(e);const M=new ct({uid:e.localId,auth:t,stsTokenManager:n,isAnonymous:i});return await nt(M),M}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}gt.type="NONE";const It=gt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e,i){return`firebase:${t}:${e}:${i}`}class At{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:n,name:M}=this.auth;this.fullUserKey=lt(this.userKey,n.apiKey,M),this.fullPersistenceKey=lt("persistence",n.apiKey,M),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ct._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new At(E(It),t,i);const n=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let M=n[0]||E(It);const s=lt(i,t.config.apiKey,t.name);let a=null;for(const u of e)try{const e=await u._get(s);if(e){const i=ct._fromJSON(t,e);u!==M&&(a=i),M=u;break}}catch(o){}const r=n.filter(t=>t._shouldAllowMigration);return M._shouldAllowMigration&&r.length?(M=r[0],a&&await M._set(s,a.toJSON()),await Promise.all(e.map(async t=>{if(t!==M)try{await t._remove(s)}catch(o){}})),new At(M,t,i)):new At(M,t,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ht(e))return"Blackberry";if(wt(e))return"Webos";if(Lt(e))return"Safari";if((e.includes("chrome/")||jt(e))&&!e.includes("edge/"))return"Chrome";if(St(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(e);if(2===(null===i||void 0===i?void 0:i.length))return i[1]}return"Other"}function Nt(t=Object(n["l"])()){return/firefox\//i.test(t)}function Lt(t=Object(n["l"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jt(t=Object(n["l"])()){return/crios\//i.test(t)}function dt(t=Object(n["l"])()){return/iemobile/i.test(t)}function St(t=Object(n["l"])()){return/android/i.test(t)}function ht(t=Object(n["l"])()){return/blackberry/i.test(t)}function wt(t=Object(n["l"])()){return/webos/i.test(t)}function yt(t=Object(n["l"])()){return/iphone|ipad|ipod/i.test(t)}function xt(t=Object(n["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Tt(t=Object(n["l"])()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Et(){return Object(n["q"])()&&10===document.documentMode}function mt(t=Object(n["l"])()){return yt(t)||St(t)||wt(t)||ht(t)||/windows phone/i.test(t)||dt(t)}function bt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e=[]){let i;switch(t){case"Browser":i=Dt(Object(n["l"])());break;case"Worker":i=`${Dt(Object(n["l"])())}-${t}`;break;default:i=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${M["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ft(this),this.idTokenSubscription=new ft(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await At.create(this,t),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(M){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let i=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,M=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==M||!(null===s||void 0===s?void 0:s.user)||(i=s.user)}return i?i._redirectEventId?(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(i){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await nt(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=f()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(n["k"])(t):null;return e&&w(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new n["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return null===t?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;w(e,this,"argument-error"),this.redirectPersistenceManager=await At.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,n){if(this._deleted)return()=>{};const M="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return w(s,this,"internal-error"),s.then(()=>M(this.currentUser)),"function"===typeof e?t.addObserver(e,i,n):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function zt(t){return Object(n["k"])(t)}class ft{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(n["g"])(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Yt(t,e,i){const n=zt(t);w(n._canInitEmulator,n,"emulator-config-failed"),w(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const M=!!(null===i||void 0===i?void 0:i.disableWarnings),s=vt(e),{host:a,port:r}=Ot(e),o=null===r?"":":"+r;n.config.emulator={url:`${s}//${a}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:r,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:M})}),M||kt()}function vt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ot(t){const e=vt(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",M=/^(\[[^\]]+\])(:|$)/.exec(n);if(M){const t=M[1];return{host:t,port:Ut(n.substr(t.length+1))}}{const[t,e]=n.split(":");return{host:t,port:Ut(e)}}}function Ut(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return G(t,"POST","/v1/accounts:resetPassword",W(t,e))}async function Jt(t,e){return G(t,"POST","/v1/accounts:update",e)}async function Zt(t,e){return G(t,"POST","/v1/accounts:update",W(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(t,e){return Z(t,"POST","/v1/accounts:signInWithPassword",W(t,e))}async function Pt(t,e){return G(t,"POST","/v1/accounts:sendOobCode",W(t,e))}async function Vt(t,e){return Pt(t,e)}async function Bt(t,e){return Pt(t,e)}async function Ft(t,e){return Pt(t,e)}async function Rt(t,e){return Pt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e){return Z(t,"POST","/v1/accounts:signInWithEmailLink",W(t,e))}async function Ht(t,e){return Z(t,"POST","/v1/accounts:signInWithEmailLink",W(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Wt{constructor(t,e,i,n=null){super("password",i),this._email=t,this._password=e,this._tenantId=n}static _fromEmailAndPassword(t,e){return new _t(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new _t(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Qt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xt(t,{email:this._email,oobCode:this._password});default:L(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Jt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ht(t,{idToken:e,email:this._email,oobCode:this._password});default:L(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e){return Z(t,"POST","/v1/accounts:signInWithIdp",W(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="http://localhost";class Kt extends Wt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Kt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):L("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:i,signInMethod:n}=e,M=Object(s["e"])(e,["providerId","signInMethod"]);if(!i||!n)return null;const a=new Kt(i,n);return a.idToken=M.idToken||void 0,a.accessToken=M.accessToken||void 0,a.secret=M.secret,a.nonce=M.nonce,a.pendingToken=M.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return qt(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,qt(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,qt(t,e)}buildRequest(){const t={requestUri:$t,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(n["x"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return G(t,"POST","/v1/accounts:sendVerificationCode",W(t,e))}async function ee(t,e){return Z(t,"POST","/v1/accounts:signInWithPhoneNumber",W(t,e))}async function ie(t,e){const i=await Z(t,"POST","/v1/accounts:signInWithPhoneNumber",W(t,e));if(i.temporaryProof)throw V(t,"account-exists-with-different-credential",i);return i}const ne={["USER_NOT_FOUND"]:"user-not-found"};async function Me(t,e){const i=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Z(t,"POST","/v1/accounts:signInWithPhoneNumber",W(t,i),ne)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Wt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ie(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Me(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:i,verificationCode:n}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:i,code:n}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:M}=t;return i||e||n||M?new se({verificationId:e,verificationCode:i,phoneNumber:n,temporaryProof:M}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function re(t){const e=Object(n["y"])(Object(n["j"])(t))["link"],i=e?Object(n["y"])(Object(n["j"])(e))["deep_link_id"]:null,M=Object(n["y"])(Object(n["j"])(t))["deep_link_id"],s=M?Object(n["y"])(Object(n["j"])(M))["link"]:null;return s||M||i||e||t}class oe{constructor(t){var e,i,M,s,a,r;const o=Object(n["y"])(Object(n["j"])(t)),u=null!==(e=o["apiKey"])&&void 0!==e?e:null,c=null!==(i=o["oobCode"])&&void 0!==i?i:null,g=ae(null!==(M=o["mode"])&&void 0!==M?M:null);w(u&&c&&g,"argument-error"),this.apiKey=u,this.operation=g,this.code=c,this.continueUrl=null!==(s=o["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(a=o["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(r=o["tenantId"])&&void 0!==r?r:null}static parseLink(t){const e=re(t);try{return new oe(e)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return _t._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=oe.parseLink(e);return w(i,"argument-error"),_t._fromEmailAndCode(t,i.code,i.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends ce{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class Ie extends ge{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return w("providerId"in e&&"signInMethod"in e,"argument-error"),Kt._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return w(t.idToken||t.accessToken,"argument-error"),Kt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return Ie.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return Ie.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:n,pendingToken:M,nonce:s,providerId:a}=t;if(!i&&!n&&!e&&!M)return null;if(!a)return null;try{return new Ie(a)._credential({idToken:e,accessToken:i,nonce:s,pendingToken:M})}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends ge{constructor(){super("facebook.com")}static credential(t){return Kt._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return le.credentialFromTaggedObject(t)}static credentialFromError(t){return le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return le.credential(t.oauthAccessToken)}catch(e){return null}}}le.FACEBOOK_SIGN_IN_METHOD="facebook.com",le.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends ge{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Kt._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return Ae.credential(e,i)}catch(n){return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com",Ae.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends ge{constructor(){super("github.com")}static credential(t){return Kt._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return De.credentialFromTaggedObject(t)}static credentialFromError(t){return De.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return De.credential(t.oauthAccessToken)}catch(e){return null}}}De.GITHUB_SIGN_IN_METHOD="github.com",De.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ne="http://localhost";class Le extends Wt{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return qt(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,qt(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,qt(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:i,signInMethod:n,pendingToken:M}=e;return i&&n&&M&&i===n?new Le(i,M):null}static _create(t,e){return new Le(t,e)}buildRequest(){return{requestUri:Ne,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="saml.";class de extends ce{constructor(t){w(t.startsWith(je),"argument-error"),super(t)}static credentialFromResult(t){return de.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return de.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=Le.fromJSON(t);return w(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:i}=t;if(!e||!i)return null;try{return Le._create(i,e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends ge{constructor(){super("twitter.com")}static credential(t,e){return Kt._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return Se.credential(e,i)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function he(t,e){return Z(t,"POST","/v1/accounts:signUp",W(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se.TWITTER_SIGN_IN_METHOD="twitter.com",Se.PROVIDER_ID="twitter.com";class we{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,n=!1){const M=await ct._fromIdTokenResponse(t,i,n),s=ye(i),a=new we({user:M,providerId:s,_tokenResponse:i,operationType:e});return a}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const n=ye(i);return new we({user:t,providerId:n,_tokenResponse:i,operationType:e})}}function ye(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t){var e;const i=zt(t);if(await i._initializationPromise,null===(e=i.currentUser)||void 0===e?void 0:e.isAnonymous)return new we({user:i.currentUser,providerId:null,operationType:"signIn"});const n=await he(i,{returnSecureToken:!0}),M=await we._fromIdTokenResponse(i,"signIn",n,!0);return await i._updateCurrentUser(M.user),M}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends n["c"]{constructor(t,e,i,n){var M;super(e.code,e.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,Te.prototype),this.customData={appName:t.name,tenantId:null!==(M=t.tenantId)&&void 0!==M?M:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,n){return new Te(t,e,i,n)}}function Ee(t,e,i,n){const M="reauthenticate"===e?i._getReauthenticationResolver(t):i._getIdTokenResponse(t);return M.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw Te._fromErrorAndOperation(t,i,e,n);throw i})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return new Set(t.map(({providerId:t})=>t).filter(t=>!!t))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(t,e){const i=Object(n["k"])(t);await Ce(!0,i,e);const{providerUserInfo:M}=await F(i.auth,{idToken:await i.getIdToken(),deleteProvider:[e]}),s=me(M||[]);return i.providerData=i.providerData.filter(t=>s.has(t.providerId)),s.has("phone")||(i.phoneNumber=null),await i.auth._persistUserIfCurrent(i),i}async function pe(t,e,i=!1){const n=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return we._forOperation(t,"link",n)}async function Ce(t,e,i){await nt(e);const n=me(e.providerData),M=!1===t?"provider-already-linked":"no-such-provider";w(n.has(i)===t,e.auth,M)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(t,e,i=!1){const{auth:n}=t,M="reauthenticate";try{const s=await K(t,Ee(n,M,e,t),i);w(s.idToken,n,"internal-error");const a=q(s.idToken);w(a,n,"internal-error");const{sub:r}=a;return w(t.uid===r,n,"user-mismatch"),we._forOperation(t,M,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&L(n,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,e,i=!1){const n="signIn",M=await Ee(t,n,e),s=await we._fromIdTokenResponse(t,n,M);return i||await t._updateCurrentUser(s.user),s}async function Ye(t,e){return fe(zt(t),e)}async function ve(t,e){const i=Object(n["k"])(t);return await Ce(!1,i,e.providerId),pe(i,e)}async function Oe(t,e){return ze(Object(n["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(t,e){return Z(t,"POST","/v1/accounts:signInWithCustomToken",W(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t,e){const i=zt(t),n=await Ue(i,{token:e,returnSecureToken:!0}),M=await we._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(M.user),M}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?Ge._fromServerResponse(t,e):L(t,"internal-error")}}class Ge extends We{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new Ge(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e,i){var n;w((null===(n=i.url)||void 0===n?void 0:n.length)>0,t,"invalid-continue-uri"),w("undefined"===typeof i.dynamicLinkDomain||i.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=i.url,e.dynamicLinkDomain=i.dynamicLinkDomain,e.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(w(i.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=i.iOS.bundleId),i.android&&(w(i.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=i.android.installApp,e.androidMinimumVersionCode=i.android.minimumVersion,e.androidPackageName=i.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(t,e,i){const M=Object(n["k"])(t),s={requestType:"PASSWORD_RESET",email:e};i&&Je(M,s,i),await Bt(M,s)}async function Qe(t,e,i){await Gt(Object(n["k"])(t),{oobCode:e,newPassword:i})}async function Pe(t,e){await Zt(Object(n["k"])(t),{oobCode:e})}async function Ve(t,e){const i=Object(n["k"])(t),M=await Gt(i,{oobCode:e}),s=M.requestType;switch(w(s,i,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(M.newEmail,i,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(M.mfaInfo,i,"internal-error");default:w(M.email,i,"internal-error")}let a=null;return M.mfaInfo&&(a=We._fromServerResponse(zt(i),M.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===M.requestType?M.newEmail:M.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===M.requestType?M.email:M.newEmail)||null,multiFactorInfo:a},operation:s}}async function Be(t,e){const{data:i}=await Ve(Object(n["k"])(t),e);return i.email}async function Fe(t,e,i){const n=zt(t),M=await he(n,{returnSecureToken:!0,email:e,password:i}),s=await we._fromIdTokenResponse(n,"signIn",M);return await n._updateCurrentUser(s.user),s}function Re(t,e,i){return Ye(Object(n["k"])(t),ue.credential(e,i))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(t,e,i){const M=Object(n["k"])(t),s={requestType:"EMAIL_SIGNIN",email:e};w(i.handleCodeInApp,M,"argument-error"),i&&Je(M,s,i),await Ft(M,s)}function He(t,e){const i=oe.parseLink(e);return"EMAIL_SIGNIN"===(null===i||void 0===i?void 0:i.operation)}async function _e(t,e,i){const M=Object(n["k"])(t),s=ue.credentialWithLink(e,i||b());return w(s._tenantId===(M.tenantId||null),M,"tenant-id-mismatch"),Ye(M,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(t,e){return G(t,"POST","/v1/accounts:createAuthUri",W(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(t,e){const i=p()?b():"http://localhost",M={identifier:e,continueUri:i},{signinMethods:s}=await qe(Object(n["k"])(t),M);return s||[]}async function Ke(t,e){const i=Object(n["k"])(t),M=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:M};e&&Je(i.auth,s,e);const{email:a}=await Vt(i.auth,s);a!==t.email&&await t.reload()}async function ti(t,e,i){const M=Object(n["k"])(t),s=await t.getIdToken(),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};i&&Je(M.auth,a,i);const{email:r}=await Rt(M.auth,a);r!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t,e){return G(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,{displayName:e,photoURL:i}){if(void 0===e&&void 0===i)return;const M=Object(n["k"])(t),s=await M.getIdToken(),a={idToken:s,displayName:e,photoUrl:i,returnSecureToken:!0},r=await K(M,ei(M.auth,a));M.displayName=r.displayName||null,M.photoURL=r.photoUrl||null;const o=M.providerData.find(({providerId:t})=>"password"===t);o&&(o.displayName=M.displayName,o.photoURL=M.photoURL),await M._updateTokensIfNecessary(r)}function ni(t,e){return si(Object(n["k"])(t),e,null)}function Mi(t,e){return si(Object(n["k"])(t),null,e)}async function si(t,e,i){const{auth:n}=t,M=await t.getIdToken(),s={idToken:M,returnSecureToken:!0};e&&(s.email=e),i&&(s.password=i);const a=await K(t,Jt(n,s));await t._updateTokensIfNecessary(a,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){var e,i;if(!t)return null;const{providerId:n}=t,M=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!n&&(null===t||void 0===t?void 0:t.idToken)){const n=null===(i=null===(e=q(t.idToken))||void 0===e?void 0:e.firebase)||void 0===i?void 0:i["sign_in_provider"];if(n){const t="anonymous"!==n&&"custom"!==n?n:null;return new ri(s,t)}}if(!n)return null;switch(n){case"facebook.com":return new ui(s,M);case"github.com":return new ci(s,M);case"google.com":return new gi(s,M);case"twitter.com":return new Ii(s,M,t.screenName||null);case"custom":case"anonymous":return new ri(s,null);default:return new ri(s,n,M)}}class ri{constructor(t,e,i={}){this.isNewUser=t,this.providerId=e,this.profile=i}}class oi extends ri{constructor(t,e,i,n){super(t,e,i),this.username=n}}class ui extends ri{constructor(t,e){super(t,"facebook.com",e)}}class ci extends oi{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class gi extends ri{constructor(t,e){super(t,"google.com",e)}}class Ii extends oi{constructor(t,e,i){super(t,"twitter.com",e,i)}}function li(t){const{user:e,_tokenResponse:i}=t;return e.isAnonymous&&!i?{providerId:null,isNewUser:!1,profile:null}:ai(i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new Ai("enroll",t)}static _fromMfaPendingCredential(t){return new Ai("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,i;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return Ai._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(i=t.multiFactorSession)||void 0===i?void 0:i.idToken)return Ai._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,i){this.session=t,this.hints=e,this.signInResolver=i}static _fromError(t,e){const i=zt(t),n=e.customData._serverResponse,M=(n.mfaInfo||[]).map(t=>We._fromServerResponse(i,t));w(n.mfaPendingCredential,i,"internal-error");const s=Ai._fromMfaPendingCredential(n.mfaPendingCredential);return new Di(s,M,async t=>{const M=await t._process(i,s);delete n.mfaInfo,delete n.mfaPendingCredential;const a=Object.assign(Object.assign({},n),{idToken:M.idToken,refreshToken:M.refreshToken});switch(e.operationType){case"signIn":const t=await we._fromIdTokenResponse(i,e.operationType,a);return await i._updateCurrentUser(t.user),t;case"reauthenticate":return w(e.user,i,"internal-error"),we._forOperation(e.user,e.operationType,a);default:L(i,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function Ni(t,e){var i;const M=Object(n["k"])(t),s=e;return w(e.customData.operationType,M,"argument-error"),w(null===(i=s.customData._serverResponse)||void 0===i?void 0:i.mfaPendingCredential,M,"argument-error"),Di._fromError(M,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e){return G(t,"POST","/v2/accounts/mfaEnrollment:start",W(t,e))}function ji(t,e){return G(t,"POST","/v2/accounts/mfaEnrollment:finalize",W(t,e))}function di(t,e){return G(t,"POST","/v2/accounts/mfaEnrollment:withdraw",W(t,e))}class Si{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(e=>We._fromServerResponse(t.auth,e)))})}static _fromUser(t){return new Si(t)}async getSession(){return Ai._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const i=t,n=await this.getSession(),M=await K(this.user,i._process(this.user.auth,n,e));return await this.user._updateTokensIfNecessary(M),this.user.reload()}async unenroll(t){const e="string"===typeof t?t:t.uid,i=await this.user.getIdToken(),n=await K(this.user,di(this.user.auth,{idToken:i,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:t})=>t!==e),await this.user._updateTokensIfNecessary(n);try{await this.user.reload()}catch(M){if("auth/user-token-expired"!==M.code)throw M}}}const hi=new WeakMap;function wi(t){const e=Object(n["k"])(t);return hi.has(e)||hi.set(e,Si._fromUser(e)),hi.get(e)}const yi="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(yi,"1"),this.storage.removeItem(yi),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){const t=Object(n["l"])();return Lt(t)||yt(t)}const Ei=1e3,mi=10;class bi extends xi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ti()&&bt(),this.fallbackToPolling=mt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),n=this.localCache[e];i!==n&&t(e,n,i)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,i)=>{this.notifyListeners(t,i)});const i=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(t.newValue!==n)null!==t.newValue?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!e)return}const n=()=>{const t=this.storage.getItem(i);(e||this.localCache[i]!==t)&&this.notifyListeners(i,t)},M=this.storage.getItem(i);Et()&&M!==t.newValue&&t.newValue!==t.oldValue?setTimeout(n,mi):n()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const n of Array.from(i))n(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},Ei)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}bi.type="LOCAL";const pi=bi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends xi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ci.type="SESSION";const zi=Ci;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const i=new Yi(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:n,data:M}=e.data,s=this.handlersMap[n];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const a=Array.from(s).map(async t=>t(e.origin,M)),r=await fi(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:r})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vi(t="",e=10){let i="";for(let n=0;n<e;n++)i+=Math.floor(10*Math.random());return t+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yi.receivers=[];class Oi{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let M,s;return new Promise((a,r)=>{const o=vi("",20);n.port1.start();const u=setTimeout(()=>{r(new Error("unsupported_event"))},i);s={messageChannel:n,onMessage(t){const e=t;if(e.data.eventId===o)switch(e.data.status){case"ack":clearTimeout(u),M=setTimeout(()=>{r(new Error("timeout"))},3e3);break;case"done":clearTimeout(M),a(e.data.response);break;default:clearTimeout(u),clearTimeout(M),r(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:o,data:e},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return window}function ki(t){Ui().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){return"undefined"!==typeof Ui()["WorkerGlobalScope"]&&"function"===typeof Ui()["importScripts"]}async function Gi(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ji(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Zi(){return Wi()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="firebaseLocalStorageDb",Pi=1,Vi="firebaseLocalStorage",Bi="fbase_key";class Fi{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ri(t,e){return t.transaction([Vi],e?"readwrite":"readonly").objectStore(Vi)}function Xi(){const t=indexedDB.deleteDatabase(Qi);return new Fi(t).toPromise()}function Hi(){const t=indexedDB.open(Qi,Pi);return new Promise((e,i)=>{t.addEventListener("error",()=>{i(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Vi,{keyPath:Bi})}catch(n){i(n)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Vi)?e(i):(i.close(),await Xi(),e(await Hi()))})})}async function _i(t,e,i){const n=Ri(t,!0).put({[Bi]:e,value:i});return new Fi(n).toPromise()}async function qi(t,e){const i=Ri(t,!1).get(e),n=await new Fi(i).toPromise();return void 0===n?null:n.value}function $i(t,e){const i=Ri(t,!0).delete(e);return new Fi(i).toPromise()}const Ki=800,tn=3;class en{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Hi()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(i){if(e++>tn)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yi._getInstance(Zi()),this.receiver._subscribe("keyChanged",async(t,e)=>{const i=await this._poll();return{keyProcessed:i.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Gi(),!this.activeServiceWorker)return;this.sender=new Oi(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(t=i[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=i[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ji()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hi();return await _i(t,yi,"1"),await $i(t,yi),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>_i(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>qi(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>$i(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Ri(t,!1).getAll();return new Fi(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],i=new Set;for(const{fbase_key:n,value:M}of t)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(M)&&(this.notifyListeners(n,M),e.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!i.has(n)&&(this.notifyListeners(n,null),e.push(n));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const n of Array.from(i))n(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ki)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}en.type="LOCAL";const nn=en;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return G(t,"POST","/v2/accounts/mfaSignIn:start",W(t,e))}function sn(t,e){return G(t,"POST","/v2/accounts/mfaSignIn:finalize",W(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t){return(await G(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function on(t){return new Promise((e,i)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=t=>{const e=j("internal-error");e.customData=t,i(e)},n.type="text/javascript",n.charset="UTF-8",rn().appendChild(n)})}function un(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=500,gn=6e4,In=1e12;class ln{constructor(t){this.auth=t,this.counter=In,this._widgets=new Map}render(t,e){const i=this.counter;return this._widgets.set(i,new An(t,this.auth.name,e||{})),this.counter++,i}reset(t){var e;const i=t||In;null===(e=this._widgets.get(i))||void 0===e||e.delete(),this._widgets.delete(i)}getResponse(t){var e;const i=t||In;return(null===(e=this._widgets.get(i))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const i=t||In;return null===(e=this._widgets.get(i))||void 0===e||e.execute(),""}}class An{constructor(t,e,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"===typeof t?document.getElementById(t):t;w(n,"argument-error",{appName:e}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=Dn(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(i){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(i){}this.isVisible&&this.execute()},gn)},cn))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Dn(t){const e=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<t;n++)e.push(i.charAt(Math.floor(Math.random()*i.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=un("rcb"),Ln=new Y(3e4,6e4),jn="https://www.google.com/recaptcha/api.js?";class dn{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ui().grecaptcha}load(t,e=""){return w(Sn(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Ui().grecaptcha):new Promise((i,M)=>{const s=Ui().setTimeout(()=>{M(j(t,"network-request-failed"))},Ln.get());Ui()[Nn]=()=>{Ui().clearTimeout(s),delete Ui()[Nn];const n=Ui().grecaptcha;if(!n)return void M(j(t,"internal-error"));const a=n.render;n.render=(t,e)=>{const i=a(t,e);return this.counter++,i},this.hostLanguage=e,i(n)};const a=`${jn}?${Object(n["x"])({onload:Nn,render:"explicit",hl:e})}`;on(a).catch(()=>{clearTimeout(s),M(j(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Ui().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Sn(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class hn{async load(t){return new ln(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="recaptcha",yn={theme:"light",type:"image"};class xn{constructor(t,e=Object.assign({},yn),i){this.parameters=e,this.type=wn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=zt(i),this.isInvisible="invisible"===this.parameters.size,w("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"===typeof t?document.getElementById(t):t;w(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hn:new dn,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),i=e.getResponse(t);return i||new Promise(i=>{const n=t=>{t&&(this.tokenChangeListeners.delete(n),i(t))};this.tokenChangeListeners.add(n),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(t=>t(e)),"function"===typeof t)t(e);else if("string"===typeof t){const i=Ui()[t];"function"===typeof i&&i(e)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){w(p()&&!Wi(),this.auth,"internal-error"),await Tn(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await an(this.auth);w(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Tn(){let t=null;return new Promise(e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=se._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function mn(t,e,i){const M=zt(t),s=await Cn(M,e,Object(n["k"])(i));return new En(s,t=>Ye(M,t))}async function bn(t,e,i){const M=Object(n["k"])(t);await Ce(!1,M,"phone");const s=await Cn(M.auth,e,Object(n["k"])(i));return new En(s,t=>ve(M,t))}async function pn(t,e,i){const M=Object(n["k"])(t),s=await Cn(M.auth,e,Object(n["k"])(i));return new En(s,t=>Oe(M,t))}async function Cn(t,e,i){var n;const M=await i.verify();try{let s;if(w("string"===typeof M,t,"argument-error"),w(i.type===wn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){w("enroll"===e.type,t,"internal-error");const i=await Li(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:M}});return i.phoneSessionInfo.sessionInfo}{w("signin"===e.type,t,"internal-error");const i=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;w(i,t,"missing-multi-factor-info");const a=await Mn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:M}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:M});return e}}finally{i._reset()}}async function zn(t,e){await pe(Object(n["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.providerId=fn.PROVIDER_ID,this.auth=zt(t)}verifyPhoneNumber(t,e){return Cn(this.auth,t,Object(n["k"])(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return fn.credentialFromTaggedObject(e)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:i}=t;return e&&i?se._fromTokenResponse(e,i):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yn(t,e){return e?E(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn.PROVIDER_ID="phone",fn.PHONE_SIGN_IN_METHOD="phone";class vn extends Wt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return qt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return qt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function On(t){return fe(t.auth,new vn(t),t.bypassAuthState)}function Un(t){const{auth:e,user:i}=t;return w(i,e,"internal-error"),ze(i,new vn(t),t.bypassAuthState)}async function kn(t){const{auth:e,user:i}=t;return w(i,e,"internal-error"),pe(i,new vn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e,i,n,M=!1){this.auth=t,this.resolver=i,this.user=n,this.bypassAuthState=M,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:n,tenantId:M,error:s,type:a}=t;if(s)return void this.reject(s);const r={auth:this.auth,requestUri:e,sessionId:i,tenantId:M||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(r))}catch(o){this.reject(o)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return On;case"linkViaPopup":case"linkViaRedirect":return kn;case"reauthViaPopup":case"reauthViaRedirect":return Un;default:L(this.auth,"internal-error")}}resolve(t){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Y(2e3,1e4);async function Jn(t,e,i){const n=zt(t);S(t,e,ce);const M=Yn(n,i),s=new Pn(n,"signInViaPopup",e,M);return s.executeNotNull()}async function Zn(t,e,i){const M=Object(n["k"])(t);S(M.auth,e,ce);const s=Yn(M.auth,i),a=new Pn(M.auth,"reauthViaPopup",e,s,M);return a.executeNotNull()}async function Qn(t,e,i){const M=Object(n["k"])(t);S(M.auth,e,ce);const s=Yn(M.auth,i),a=new Pn(M.auth,"linkViaPopup",e,s,M);return a.executeNotNull()}class Pn extends Wn{constructor(t,e,i,n,M){super(t,e,n,M),this.provider=i,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){x(1===this.filter.length,"Popup operations only handle one event");const t=vi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(j(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(j(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;(null===(i=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(j(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,Gn.get())};t()}}Pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vn="pendingRedirect",Bn=new Map;class Fn extends Wn{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Bn.get(this.auth._key());if(!t){try{const e=await Rn(this.resolver,this.auth),i=e?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}Bn.set(this.auth._key(),t)}return this.bypassAuthState||Bn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rn(t,e){const i=qn(e),n=_n(t);if(!await n._isAvailable())return!1;const M="true"===await n._get(i);return await n._remove(i),M}async function Xn(t,e){return _n(t)._set(qn(e),"true")}function Hn(){Bn.clear()}function _n(t){return E(t._redirectPersistence)}function qn(t){return lt(Vn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e,i){return Kn(t,e,i)}async function Kn(t,e,i){const n=zt(t);S(t,e,ce);const M=Yn(n,i);return await Xn(M,n),M._openRedirect(n,e,"signInViaRedirect")}function tM(t,e,i){return eM(t,e,i)}async function eM(t,e,i){const M=Object(n["k"])(t);S(M.auth,e,ce);const s=Yn(M.auth,i);await Xn(s,M.auth);const a=await aM(M);return s._openRedirect(M.auth,e,"reauthViaRedirect",a)}function iM(t,e,i){return nM(t,e,i)}async function nM(t,e,i){const M=Object(n["k"])(t);S(M.auth,e,ce);const s=Yn(M.auth,i);await Ce(!1,M,e.providerId),await Xn(s,M.auth);const a=await aM(M);return s._openRedirect(M.auth,e,"linkViaRedirect",a)}async function MM(t,e){return await zt(t)._initializationPromise,sM(t,e,!1)}async function sM(t,e,i=!1){const n=zt(t),M=Yn(n,e),s=new Fn(n,M,i),a=await s.execute();return a&&!i&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}async function aM(t){const e=vi(t.uid+":::");return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=6e5;class oM{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!gM(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!cM(t)){const n=(null===(i=t.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";e.onError(j(this.auth,n))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=rM&&this.cachedEventUids.clear(),this.cachedEventUids.has(uM(t))}saveEventToCache(t){this.cachedEventUids.add(uM(t)),this.lastProcessedEventTime=Date.now()}}function uM(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function cM({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function gM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cM(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IM(t,e={}){return G(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AM=/^https?/;async function DM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IM(t);for(const n of e)try{if(NM(n))return}catch(i){}L(t,"unauthorized-domain")}function NM(t){const e=b(),{protocol:i,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const M=new URL(t);return""===M.hostname&&""===n?"chrome-extension:"===i&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===i&&M.hostname===n}if(!AM.test(i))return!1;if(lM.test(t))return n===t;const M=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+M+"|"+M+")$","i");return s.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=new Y(3e4,6e4);function jM(){const t=Ui().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}function dM(t){return new Promise((e,i)=>{var n,M,s;function a(){jM(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jM(),i(j(t,"network-request-failed"))},timeout:LM.get()})}if(null===(M=null===(n=Ui().gapi)||void 0===n?void 0:n.iframes)||void 0===M?void 0:M.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ui().gapi)||void 0===s?void 0:s.load)){const e=un("iframefcb");return Ui()[e]=()=>{gapi.load?a():i(j(t,"network-request-failed"))},on("https://apis.google.com/js/api.js?onload="+e).catch(t=>i(t))}a()}}).catch(t=>{throw SM=null,t})}let SM=null;function hM(t){return SM=SM||dM(t),SM}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=new Y(5e3,15e3),yM="__/auth/iframe",xM="emulator/auth/iframe",TM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mM(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?v(e,xM):`https://${t.config.authDomain}/${yM}`,s={apiKey:e.apiKey,appName:t.name,v:M["SDK_VERSION"]},a=EM.get(t.config.apiHost);a&&(s.eid=a);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${i}?${Object(n["x"])(s).slice(1)}`}async function bM(t){const e=await hM(t),i=Ui().gapi;return w(i,t,"internal-error"),e.open({where:document.body,url:mM(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TM,dontclear:!0},e=>new Promise(async(i,n)=>{await e.restyle({setHideOnLeave:!1});const M=j(t,"network-request-failed"),s=Ui().setTimeout(()=>{n(M)},wM.get());function a(){Ui().clearTimeout(s),i(e)}e.ping(a).then(a,()=>{n(M)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CM=500,zM=600,fM="_blank",YM="http://localhost";class vM{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function OM(t,e,i,M=CM,s=zM){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-M)/2,0).toString();let o="";const u=Object.assign(Object.assign({},pM),{width:M.toString(),height:s.toString(),top:a,left:r}),c=Object(n["l"])().toLowerCase();i&&(o=jt(c)?fM:i),Nt(c)&&(e=e||YM,u.scrollbars="yes");const g=Object.entries(u).reduce((t,[e,i])=>`${t}${e}=${i},`,"");if(Tt(c)&&"_self"!==o)return UM(e||"",o),new vM(null);const I=window.open(e||"",o,g);w(I,t,"popup-blocked");try{I.focus()}catch(l){}return new vM(I)}function UM(t,e){const i=document.createElement("a");i.href=t,i.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM="__/auth/handler",WM="emulator/auth/handler";function GM(t,e,i,s,a,r){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:s,v:M["SDK_VERSION"],eventId:a};if(e instanceof ce){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Object(n["p"])(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof ge){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const n of Object.keys(u))void 0===u[n]&&delete u[n];return`${JM(t)}?${Object(n["x"])(u).slice(1)}`}function JM({config:t}){return t.emulator?v(t,WM):`https://${t.authDomain}/${kM}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM="webStorageSupport";class QM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zi,this._completeRedirectFn=sM}async _openPopup(t,e,i,n){var M;x(null===(M=this.eventManagers[t._key()])||void 0===M?void 0:M.manager,"_initialize() not called before _openPopup()");const s=GM(t,e,i,b(),n);return OM(t,s,vi())}async _openRedirect(t,e,i,n){return await this._originValidation(t),ki(GM(t,e,i,b(),n)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:i}=this.eventManagers[e];return t?Promise.resolve(t):(x(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await bM(t),i=new oM(t);return e.register("authEvent",e=>{w(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const n=i.onEvent(e.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){const i=this.iframes[t._key()];i.send(ZM,{type:ZM},i=>{var n;const M=null===(n=null===i||void 0===i?void 0:i[0])||void 0===n?void 0:n[ZM];void 0!==M&&e(!!M),L(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=DM(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return mt()||Lt()||yt()}}const PM=QM;class VM{constructor(t){this.factorId=t}_process(t,e,i){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,i);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class BM extends VM{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new BM(t)}_finalizeEnroll(t,e,i){return ji(t,{idToken:e,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return sn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class FM{constructor(){}static assertion(t){return BM._fromCredential(t)}}FM.FACTOR_ID="phone";var RM="@firebase/auth",XM="0.19.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class HM{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var i;t((null===(i=e)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qM(t){Object(M["_registerComponent"])(new r["a"]("auth",(e,{options:i})=>{const n=e.getProvider("app").getImmediate(),{apiKey:M,authDomain:s}=n.options;return(e=>{w(M&&!M.includes(":"),"invalid-api-key",{appName:e.name}),w(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:M,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pt(t)},a=new Ct(e,n);return m(a,i),a})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{const n=t.getProvider("auth-internal");n.initialize()})),Object(M["_registerComponent"])(new r["a"]("auth-internal",t=>{const e=zt(t.getProvider("auth").getImmediate());return(t=>new HM(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(M["registerVersion"])(RM,XM,_M(t)),Object(M["registerVersion"])(RM,XM,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $M(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qM("Browser");const KM=2e3;async function ts(t,e,i){var n;const{BuildInfo:M}=$M();x(e.sessionId,"AuthEvent did not contain a session ID");const s=await ss(e.sessionId),a={};return yt()?a["ibi"]=M.packageName:St()?a["apn"]=M.packageName:L(t,"operation-not-supported-in-this-environment"),M.displayName&&(a["appDisplayName"]=M.displayName),a["sessionId"]=s,GM(t,i,e.type,void 0,null!==(n=e.eventId)&&void 0!==n?n:void 0,a)}async function es(t){const{BuildInfo:e}=$M(),i={};yt()?i.iosBundleId=e.packageName:St()?i.androidPackageName=e.packageName:L(t,"operation-not-supported-in-this-environment"),await IM(t,i)}function is(t){const{cordova:e}=$M();return new Promise(i=>{e.plugins.browsertab.isAvailable(n=>{let M=null;n?e.plugins.browsertab.openUrl(t):M=e.InAppBrowser.open(t,xt()?"_blank":"_system","location=yes"),i(M)})})}async function ns(t,e,i){const{cordova:n}=$M();let M=()=>{};try{await new Promise((s,a)=>{let r=null;function o(){var t;s();const e=null===(t=n.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===i||void 0===i?void 0:i.close)&&i.close()}function u(){r||(r=window.setTimeout(()=>{a(j(t,"redirect-cancelled-by-user"))},KM))}function c(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}e.addPassiveListener(o),document.addEventListener("resume",u,!1),St()&&document.addEventListener("visibilitychange",c,!1),M=()=>{e.removePassiveListener(o),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),r&&window.clearTimeout(r)}})}finally{M()}}function Ms(t){var e,i,n,M,s,a,r,o,u,c;const g=$M();w("function"===typeof(null===(e=null===g||void 0===g?void 0:g.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w("undefined"!==typeof(null===(i=null===g||void 0===g?void 0:g.BuildInfo)||void 0===i?void 0:i.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w("function"===typeof(null===(s=null===(M=null===(n=null===g||void 0===g?void 0:g.cordova)||void 0===n?void 0:n.plugins)||void 0===M?void 0:M.browsertab)||void 0===s?void 0:s.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w("function"===typeof(null===(o=null===(r=null===(a=null===g||void 0===g?void 0:g.cordova)||void 0===a?void 0:a.plugins)||void 0===r?void 0:r.browsertab)||void 0===o?void 0:o.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w("function"===typeof(null===(c=null===(u=null===g||void 0===g?void 0:g.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===c?void 0:c.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(t){const e=as(t),i=await crypto.subtle.digest("SHA-256",e),n=Array.from(new Uint8Array(i));return n.map(t=>t.toString(16).padStart(2,"0")).join("")}function as(t){if(x(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),i=new Uint8Array(e);for(let n=0;n<t.length;n++)i[n]=t.charCodeAt(n);return i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=20;class os extends oM{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(e=>e(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function us(t,e,i=null){return{type:e,eventId:i,urlResponse:null,sessionId:ls(),postBody:null,tenantId:t.tenantId,error:j(t,"no-auth-event")}}function cs(t,e){return As()._set(Ds(t),e)}async function gs(t){const e=await As()._get(Ds(t));return e&&await As()._remove(Ds(t)),e}function Is(t,e){var i,n;const M=Ls(e);if(M.includes("/__/auth/callback")){const e=js(M),s=e["firebaseError"]?Ns(decodeURIComponent(e["firebaseError"])):null,a=null===(n=null===(i=null===s||void 0===s?void 0:s["code"])||void 0===i?void 0:i.split("auth/"))||void 0===n?void 0:n[1],r=a?j(a):null;return r?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:r,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:M,postBody:null}}return null}function ls(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<rs;i++){const i=Math.floor(Math.random()*e.length);t.push(e.charAt(i))}return t.join("")}function As(){return E(pi)}function Ds(t){return lt("authEvent",t.config.apiKey,t.name)}function Ns(t){try{return JSON.parse(t)}catch(e){return null}}function Ls(t){const e=js(t),i=e["link"]?decodeURIComponent(e["link"]):void 0,n=js(i)["link"],M=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,s=js(M)["link"];return s||M||n||i||t}function js(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...i]=t.split("?");return Object(n["y"])(i.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=500;class Ss{constructor(){this._redirectPersistence=zi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sM}async _initialize(t){const e=t._key();let i=this.eventManagers.get(e);return i||(i=new os(t),this.eventManagers.set(e,i),this.attachCallbackListeners(t,i)),i}_openPopup(t){L(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,i,n){Ms(t);const M=await this._initialize(t);await M.initialized(),M.resetRedirect(),Hn(),await this._originValidation(t);const s=us(t,i,n);await cs(t,s);const a=await ts(t,s,e),r=await is(a);return ns(t,M,r)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=es(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:i,handleOpenURL:n,BuildInfo:M}=$M(),s=setTimeout(async()=>{await gs(t),e.onEvent(ws())},ds),a=async i=>{clearTimeout(s);const n=await gs(t);let M=null;n&&(null===i||void 0===i?void 0:i["url"])&&(M=Is(n,i["url"])),e.onEvent(M||ws())};"undefined"!==typeof i&&"function"===typeof i.subscribe&&i.subscribe(null,a);const r=n,o=M.packageName.toLowerCase()+"://";$M().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(o)&&a({url:t}),"function"===typeof r)try{r(t)}catch(e){console.error(e)}}}}const hs=Ss;function ws(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:j("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t,e){zt(t)._logFramework(e)}},"1fd5":function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return g})),i.d(e,"b",(function(){return E})),i.d(e,"c",(function(){return T})),i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return p})),i.d(e,"f",(function(){return I})),i.d(e,"g",(function(){return U})),i.d(e,"h",(function(){return z})),i.d(e,"i",(function(){return u})),i.d(e,"j",(function(){return O})),i.d(e,"k",(function(){return J})),i.d(e,"l",(function(){return l})),i.d(e,"m",(function(){return N})),i.d(e,"n",(function(){return L})),i.d(e,"o",(function(){return d})),i.d(e,"p",(function(){return C})),i.d(e,"q",(function(){return S})),i.d(e,"r",(function(){return y})),i.d(e,"s",(function(){return A})),i.d(e,"t",(function(){return D})),i.d(e,"u",(function(){return j})),i.d(e,"v",(function(){return w})),i.d(e,"w",(function(){return h})),i.d(e,"x",(function(){return Y})),i.d(e,"y",(function(){return v}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let M=t.charCodeAt(n);M<128?e[i++]=M:M<2048?(e[i++]=M>>6|192,e[i++]=63&M|128):55296===(64512&M)&&n+1<t.length&&56320===(64512&t.charCodeAt(n+1))?(M=65536+((1023&M)<<10)+(1023&t.charCodeAt(++n)),e[i++]=M>>18|240,e[i++]=M>>12&63|128,e[i++]=M>>6&63|128,e[i++]=63&M|128):(e[i++]=M>>12|224,e[i++]=M>>6&63|128,e[i++]=63&M|128)}return e},M=function(t){const e=[];let i=0,n=0;while(i<t.length){const M=t[i++];if(M<128)e[n++]=String.fromCharCode(M);else if(M>191&&M<224){const s=t[i++];e[n++]=String.fromCharCode((31&M)<<6|63&s)}else if(M>239&&M<365){const s=t[i++],a=t[i++],r=t[i++],o=((7&M)<<18|(63&s)<<12|(63&a)<<6|63&r)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(1023&o))}else{const s=t[i++],a=t[i++];e[n++]=String.fromCharCode((15&M)<<12|(63&s)<<6|63&a)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let M=0;M<t.length;M+=3){const e=t[M],s=M+1<t.length,a=s?t[M+1]:0,r=M+2<t.length,o=r?t[M+2]:0,u=e>>2,c=(3&e)<<4|a>>4;let g=(15&a)<<2|o>>6,I=63&o;r||(I=64,s||(g=64)),n.push(i[u],i[c],i[g],i[I])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):M(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let M=0;M<t.length;){const e=i[t.charAt(M++)],s=M<t.length,a=s?i[t.charAt(M)]:0;++M;const r=M<t.length,o=r?i[t.charAt(M)]:64;++M;const u=M<t.length,c=u?i[t.charAt(M)]:64;if(++M,null==e||null==a||null==o||null==c)throw Error();const g=e<<2|a>>4;if(n.push(g),64!==o){const t=a<<4&240|o>>2;if(n.push(t),64!==c){const t=o<<6&192|c;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=n(t);return s.encodeByteArray(e,!0)},r=function(t){return a(t).replace(/\./g,"")},o=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const i in e)e.hasOwnProperty(i)&&c(i)&&(t[i]=u(t[i],e[i]));return t}function c(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,i))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},n=e||"demo-project",M=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:M,exp:M+3600,auth_time:M,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),o="";return[r(JSON.stringify(i)),r(JSON.stringify(a)),o].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function A(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function D(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function N(){return"object"===typeof self&&self.self===self}function L(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function j(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return l().indexOf("Electron/")>=0}function S(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function h(){return l().indexOf("MSAppHost/")>=0}function w(){return!D()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function y(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x="FirebaseError";class T extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=x,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,M=this.errors[t],s=M?m(M,i):"Error",a=`${this.serviceName}: ${s} (${n}).`,r=new T(n,a,i);return r}}function m(t,e){return t.replace(b,(t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`})}const b=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function z(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const M of i){if(!n.includes(M))return!1;const i=t[M],s=e[M];if(f(i)&&f(s)){if(!z(i,s))return!1}else if(i!==s)return!1}for(const M of n)if(!i.includes(M))return!1;return!0}function f(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){const e=[];for(const[i,n]of Object.entries(t))Array.isArray(n)?n.forEach(t=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function v(t){const e={},i=t.replace(/^\?/,"").split("&");return i.forEach(t=>{if(t){const[i,n]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)}}),e}function O(t){const e=t.indexOf("?");if(!e)return"";const i=t.indexOf("#",e);return t.substring(e,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e){const i=new k(t,e);return i.subscribe.bind(i)}class k{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let n;if(void 0===t&&void 0===e&&void 0===i)throw new Error("Missing Observer.");n=W(t,["next","error","complete"])?t:{next:t,error:e,complete:i},void 0===n.next&&(n.next=G),void 0===n.error&&(n.error=G),void 0===n.complete&&(n.complete=G);const M=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}}),this.observers.push(n),M}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(i){"undefined"!==typeof console&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W(t,e){if("object"!==typeof t||null===t)return!1;for(const i of e)if(i in t&&"function"===typeof t[i])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(t){return t&&t._delegate?t._delegate:t}}).call(this,i("c8ba"))},2266:function(t,e,i){var n=i("da84"),M=i("0366"),s=i("c65b"),a=i("825a"),r=i("0d51"),o=i("e95a"),u=i("07fa"),c=i("3a9b"),g=i("9a1f"),I=i("35a1"),l=i("2a62"),A=n.TypeError,D=function(t,e){this.stopped=t,this.result=e},N=D.prototype;t.exports=function(t,e,i){var n,L,j,d,S,h,w,y=i&&i.that,x=!(!i||!i.AS_ENTRIES),T=!(!i||!i.IS_ITERATOR),E=!(!i||!i.INTERRUPTED),m=M(e,y),b=function(t){return n&&l(n,"normal",t),new D(!0,t)},p=function(t){return x?(a(t),E?m(t[0],t[1],b):m(t[0],t[1])):E?m(t,b):m(t)};if(T)n=t;else{if(L=I(t),!L)throw A(r(t)+" is not iterable");if(o(L)){for(j=0,d=u(t);d>j;j++)if(S=p(t[j]),S&&c(N,S))return S;return new D(!1)}n=g(t,L)}h=n.next;while(!(w=s(h,n)).done){try{S=p(w.value)}catch(C){l(n,"throw",C)}if("object"==typeof S&&S&&c(N,S))return S}return new D(!1)}},"22e5":function(t,e,i){"use strict";i.d(e,"a",(function(){return M})),i.d(e,"b",(function(){return u}));var n=i("1fd5");class M{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new n["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(i){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),n=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(M){if(n)return null;throw M}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(o(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,i]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});i.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[M,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(M);i===t&&s.resolve(n)}return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),M=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;M.add(t),this.onInitCallbacks.set(n,M);const s=this.instances.get(n);return s&&t(s,n),()=>{M.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const M of i)try{M(t,e)}catch(n){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:r(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(n){}return i||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function r(t){return t===s?void 0:t}function o(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,i){var n=i("5926"),M=Math.max,s=Math.min;t.exports=function(t,e){var i=n(t);return i<0?M(i+e,0):s(i,e)}},"23e7":function(t,e,i){var n=i("da84"),M=i("06cf").f,s=i("9112"),a=i("6eeb"),r=i("ce4e"),o=i("e893"),u=i("94ca");t.exports=function(t,e){var i,c,g,I,l,A,D=t.target,N=t.global,L=t.stat;if(c=N?n:L?n[D]||r(D,{}):(n[D]||{}).prototype,c)for(g in e){if(l=e[g],t.noTargetGet?(A=M(c,g),I=A&&A.value):I=c[g],i=u(N?g:D+(L?".":"#")+g,t.forced),!i&&void 0!==I){if(typeof l==typeof I)continue;o(l,I)}(t.sham||I&&I.sham)&&s(l,"sham",!0),a(c,g,l,t)}}},"241c":function(t,e,i){var n=i("ca84"),M=i("7839"),s=M.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,s)}},2444:function(t,e,i){"use strict";(function(e){var n=i("c532"),M=i("c8af"),s=i("387f"),a={"Content-Type":"application/x-www-form-urlencoded"};function r(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=i("b50d")),t}function u(t,e,i){if(n.isString(t))try{return(e||JSON.parse)(t),n.trim(t)}catch(M){if("SyntaxError"!==M.name)throw M}return(i||JSON.stringify)(t)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:o(),transformRequest:[function(t,e){return M(e,"Accept"),M(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)||e&&"application/json"===e["Content-Type"]?(r(e,"application/json"),u(t)):t}],transformResponse:[function(t){var e=this.transitional||c.transitional,i=e&&e.silentJSONParsing,M=e&&e.forcedJSONParsing,a=!i&&"json"===this.responseType;if(a||M&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(r){if(a){if("SyntaxError"===r.name)throw s(r,this,"E_JSON_PARSE");throw r}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(a)})),t.exports=c}).call(this,i("4362"))},"256a":function(t,e,i){"use strict";i("5994")},2626:function(t,e,i){"use strict";var n=i("d066"),M=i("9bf2"),s=i("b622"),a=i("83ab"),r=s("species");t.exports=function(t){var e=n(t),i=M.f;a&&e&&!e[r]&&i(e,r,{configurable:!0,get:function(){return this}})}},"29f3":function(t,e){var i=Object.prototype,n=i.toString;function M(t){return n.call(t)}t.exports=M},"2a62":function(t,e,i){var n=i("c65b"),M=i("825a"),s=i("dc4a");t.exports=function(t,e,i){var a,r;M(t);try{if(a=s(t,"return"),!a){if("throw"===e)throw i;return i}a=n(a,t)}catch(o){r=!0,a=o}if("throw"===e)throw i;if(r)throw a;return M(a),i}},"2b10":function(t,e){function i(t,e,i){var n=-1,M=t.length;e<0&&(e=-e>M?0:M+e),i=i>M?M:i,i<0&&(i+=M),M=e>i?0:i-e>>>0,e>>>=0;var s=Array(M);while(++n<M)s[n]=t[n+e];return s}t.exports=i},"2b3e":function(t,e,i){var n=i("585a"),M="object"==typeof self&&self&&self.Object===Object&&self,s=n||M||Function("return this")();t.exports=s},"2ba4":function(t,e,i){var n=i("40d5"),M=Function.prototype,s=M.apply,a=M.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(s):function(){return a.apply(s,arguments)})},"2cf4":function(t,e,i){var n,M,s,a,r=i("da84"),o=i("2ba4"),u=i("0366"),c=i("1626"),g=i("1a2d"),I=i("d039"),l=i("1be4"),A=i("f36a"),D=i("cc12"),N=i("1cdc"),L=i("605d"),j=r.setImmediate,d=r.clearImmediate,S=r.process,h=r.Dispatch,w=r.Function,y=r.MessageChannel,x=r.String,T=0,E={},m="onreadystatechange";try{n=r.location}catch(f){}var b=function(t){if(g(E,t)){var e=E[t];delete E[t],e()}},p=function(t){return function(){b(t)}},C=function(t){b(t.data)},z=function(t){r.postMessage(x(t),n.protocol+"//"+n.host)};j&&d||(j=function(t){var e=A(arguments,1);return E[++T]=function(){o(c(t)?t:w(t),void 0,e)},M(T),T},d=function(t){delete E[t]},L?M=function(t){S.nextTick(p(t))}:h&&h.now?M=function(t){h.now(p(t))}:y&&!N?(s=new y,a=s.port2,s.port1.onmessage=C,M=u(a.postMessage,a)):r.addEventListener&&c(r.postMessage)&&!r.importScripts&&n&&"file:"!==n.protocol&&!I(z)?(M=z,r.addEventListener("message",C,!1)):M=m in D("script")?function(t){l.appendChild(D("script"))[m]=function(){l.removeChild(this),b(t)}}:function(t){setTimeout(p(t),0)}),t.exports={set:j,clear:d}},"2d00":function(t,e,i){var n,M,s=i("da84"),a=i("342f"),r=s.process,o=s.Deno,u=r&&r.versions||o&&o.version,c=u&&u.v8;c&&(n=c.split("."),M=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!M&&a&&(n=a.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/),n&&(M=+n[1]))),t.exports=M},"2d83":function(t,e,i){"use strict";var n=i("387f");t.exports=function(t,e,i,M,s){var a=new Error(t);return n(a,e,i,M,s)}},"2e67":function(t,e,i){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,i){"use strict";var n=i("c532");function M(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,i){if(!e)return t;var s;if(i)s=i(e);else if(n.isURLSearchParams(e))s=e.toString();else{var a=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(M(e)+"="+M(t))})))})),s=a.join("&")}if(s){var r=t.indexOf("#");-1!==r&&(t=t.slice(0,r)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},"342f":function(t,e,i){var n=i("d066");t.exports=n("navigator","userAgent")||""},"35a1":function(t,e,i){var n=i("f5df"),M=i("dc4a"),s=i("3f8c"),a=i("b622"),r=a("iterator");t.exports=function(t){if(void 0!=t)return M(t,r)||M(t,"@@iterator")||s[n(t)]}},3729:function(t,e,i){var n=i("9e69"),M=i("00fd"),s=i("29f3"),a="[object Null]",r="[object Undefined]",o=n?n.toStringTag:void 0;function u(t){return null==t?void 0===t?r:a:o&&o in Object(t)?M(t):s(t)}t.exports=u},"37e8":function(t,e,i){var n=i("83ab"),M=i("aed9"),s=i("9bf2"),a=i("825a"),r=i("fc6a"),o=i("df75");e.f=n&&!M?Object.defineProperties:function(t,e){a(t);var i,n=r(e),M=o(e),u=M.length,c=0;while(u>c)s.f(t,i=M[c++],n[i]);return t}},"387f":function(t,e,i){"use strict";t.exports=function(t,e,i,n,M){return t.config=e,i&&(t.code=i),t.request=n,t.response=M,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},3934:function(t,e,i){"use strict";var n=i("c532");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");function M(t){var n=t;return e&&(i.setAttribute("href",n),n=i.href),i.setAttribute("href",n),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}return t=M(window.location.href),function(e){var i=n.isString(e)?M(e):e;return i.protocol===t.protocol&&i.host===t.host}}():function(){return function(){return!0}}()},"3a9b":function(t,e,i){var n=i("e330");t.exports=n({}.isPrototypeOf)},"3bbe":function(t,e,i){var n=i("da84"),M=i("1626"),s=n.String,a=n.TypeError;t.exports=function(t){if("object"==typeof t||M(t))return t;throw a("Can't set "+s(t)+" as a prototype")}},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,M=i("577e"),s=i("69f3"),a=i("7dd0"),r="String Iterator",o=s.set,u=s.getterFor(r);a(String,"String",(function(t){o(this,{type:r,string:M(t),index:0})}),(function(){var t,e=u(this),i=e.string,M=e.index;return M>=i.length?{value:void 0,done:!0}:(t=n(i,M),e.index+=t.length,{value:t,done:!1})}))},"3f4e":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("abc5");const M="devtools-plugin:setup",s="plugin:settings:set";class a{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const i={};if(t.settings)for(const s in t.settings){const e=t.settings[s];i[s]=e.defaultValue}const n="__vue-devtools-plugin-settings__"+t.id;let M=Object.assign({},i);try{const t=localStorage.getItem(n),e=JSON.parse(t);Object.assign(M,e)}catch(a){}this.fallbacks={getSettings(){return M},setSettings(t){try{localStorage.setItem(n,JSON.stringify(t))}catch(a){}M=t}},e&&e.on(s,(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(i=>{this.targetQueue.push({method:e,args:t,resolve:i})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function r(t,e){const i=Object(n["b"])(),s=Object(n["a"])(),r=n["c"]&&t.enableEarlyProxy;if(!s||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&r){const n=r?new a(t,s):null,M=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];M.push({pluginDescriptor:t,setupFn:e,proxy:n}),n&&e(n.proxiedTarget)}else s.emit(M,t,e)}},"3f8c":function(t,e){t.exports={}},"40d5":function(t,e,i){var n=i("d039");t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"428f":function(t,e,i){var n=i("da84");t.exports=n},4362:function(t,e,i){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=i("df7c")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},4413:function(t,e,i){},"44ad":function(t,e,i){var n=i("da84"),M=i("e330"),s=i("d039"),a=i("c6b6"),r=n.Object,o=M("".split);t.exports=s((function(){return!r("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?o(t,""):r(t)}:r},"44d2":function(t,e,i){var n=i("b622"),M=i("7c73"),s=i("9bf2"),a=n("unscopables"),r=Array.prototype;void 0==r[a]&&s.f(r,a,{configurable:!0,value:M(null)}),t.exports=function(t){r[a][t]=!0}},"44de":function(t,e,i){var n=i("da84");t.exports=function(t,e){var i=n.console;i&&i.error&&(1==arguments.length?i.error(t):i.error(t,e))}},"44e7":function(t,e,i){var n=i("861d"),M=i("c6b6"),s=i("b622"),a=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==M(t))}},"466d":function(t,e,i){"use strict";var n=i("c65b"),M=i("d784"),s=i("825a"),a=i("50c4"),r=i("577e"),o=i("1d80"),u=i("dc4a"),c=i("8aa5"),g=i("14c3");M("match",(function(t,e,i){return[function(e){var i=o(this),M=void 0==e?void 0:u(e,t);return M?n(M,e,i):new RegExp(e)[t](r(i))},function(t){var n=s(this),M=r(t),o=i(e,n,M);if(o.done)return o.value;if(!n.global)return g(n,M);var u=n.unicode;n.lastIndex=0;var I,l=[],A=0;while(null!==(I=g(n,M))){var D=r(I[0]);l[A]=D,""===D&&(n.lastIndex=c(M,a(n.lastIndex),u)),A++}return 0===A?null:l}]}))},"467f":function(t,e,i){"use strict";var n=i("2d83");t.exports=function(t,e,i){var M=i.config.validateStatus;i.status&&M&&!M(i.status)?e(n("Request failed with status code "+i.status,i.config,null,i.request,i)):t(i)}},"47e2":function(t,e,i){"use strict";i.d(e,"a",(function(){return qe}));var n=i("f83d");
/*!
  * message-compiler v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const M={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};M.EXPECTED_TOKEN,M.INVALID_TOKEN_IN_PLACEHOLDER,M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,M.UNKNOWN_ESCAPE_SEQUENCE,M.INVALID_UNICODE_ESCAPE_SEQUENCE,M.UNBALANCED_CLOSING_BRACE,M.UNTERMINATED_CLOSING_BRACE,M.EMPTY_PLACEHOLDER,M.NOT_ALLOW_NEST_PLACEHOLDER,M.INVALID_LINKED_FORMAT,M.MUST_HAVE_MESSAGES_IN_PLURAL,M.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.UNEXPECTED_EMPTY_LINKED_KEY,M.UNEXPECTED_LEXICAL_ANALYSIS;function s(t,e,i={}){const{domain:n,messages:M,args:s}=i,a=t,r=new SyntaxError(String(a));return r.code=t,e&&(r.location=e),r.domain=n,r}function a(t){throw t}function r(t,e,i){return{line:t,column:e,offset:i}}function o(t,e,i){const n={start:t,end:e};return null!=i&&(n.source=i),n}const u=" ",c="\r",g="\n",I=String.fromCharCode(8232),l=String.fromCharCode(8233);function A(t){const e=t;let i=0,n=1,M=1,s=0;const a=t=>e[t]===c&&e[t+1]===g,r=t=>e[t]===g,o=t=>e[t]===l,u=t=>e[t]===I,A=t=>a(t)||r(t)||o(t)||u(t),D=()=>i,N=()=>n,L=()=>M,j=()=>s,d=t=>a(t)||o(t)||u(t)?g:e[t],S=()=>d(i),h=()=>d(i+s);function w(){return s=0,A(i)&&(n++,M=0),a(i)&&i++,i++,M++,e[i]}function y(){return a(i+s)&&s++,s++,e[i+s]}function x(){i=0,n=1,M=1,s=0}function T(t=0){s=t}function E(){const t=i+s;while(t!==i)w();s=0}return{index:D,line:N,column:L,peekOffset:j,charAt:d,currentChar:S,currentPeek:h,next:w,peek:y,reset:x,resetPeek:T,skipToPeek:E}}const D=void 0,N="'",L="tokenizer";function j(t,e={}){const i=!1!==e.location,n=A(t),a=()=>n.index(),c=()=>r(n.line(),n.column(),n.index()),I=c(),l=a(),j={currentType:14,offset:l,startLoc:I,endLoc:I,lastType:14,lastOffset:l,lastStartLoc:I,lastEndLoc:I,braceNest:0,inLinked:!1,text:""},d=()=>j,{onError:S}=e;function h(t,e,i,...n){const M=d();if(e.column+=i,e.offset+=i,S){const i=o(M.startLoc,e),a=s(t,i,{domain:L,args:n});S(a)}}function w(t,e,n){t.endLoc=c(),t.currentType=e;const M={type:e};return i&&(M.loc=o(t.startLoc,t.endLoc)),null!=n&&(M.value=n),M}const y=t=>w(t,14);function x(t,e){return t.currentChar()===e?(t.next(),e):(h(M.EXPECTED_TOKEN,c(),0,e),"")}function T(t){let e="";while(t.currentPeek()===u||t.currentPeek()===g)e+=t.currentPeek(),t.peek();return e}function E(t){const e=T(t);return t.skipToPeek(),e}function m(t){if(t===D)return!1;const e=t.charCodeAt(0);return e>=97&&e<=122||e>=65&&e<=90||95===e}function b(t){if(t===D)return!1;const e=t.charCodeAt(0);return e>=48&&e<=57}function p(t,e){const{currentType:i}=e;if(2!==i)return!1;T(t);const n=m(t.currentPeek());return t.resetPeek(),n}function C(t,e){const{currentType:i}=e;if(2!==i)return!1;T(t);const n="-"===t.currentPeek()?t.peek():t.currentPeek(),M=b(n);return t.resetPeek(),M}function z(t,e){const{currentType:i}=e;if(2!==i)return!1;T(t);const n=t.currentPeek()===N;return t.resetPeek(),n}function f(t,e){const{currentType:i}=e;if(8!==i)return!1;T(t);const n="."===t.currentPeek();return t.resetPeek(),n}function Y(t,e){const{currentType:i}=e;if(9!==i)return!1;T(t);const n=m(t.currentPeek());return t.resetPeek(),n}function v(t,e){const{currentType:i}=e;if(8!==i&&12!==i)return!1;T(t);const n=":"===t.currentPeek();return t.resetPeek(),n}function O(t,e){const{currentType:i}=e;if(10!==i)return!1;const n=()=>{const e=t.currentPeek();return"{"===e?m(t.peek()):!("@"===e||"%"===e||"|"===e||":"===e||"."===e||e===u||!e)&&(e===g?(t.peek(),n()):m(e))},M=n();return t.resetPeek(),M}function U(t){T(t);const e="|"===t.currentPeek();return t.resetPeek(),e}function k(t,e=!0){const i=(e=!1,n="",M=!1)=>{const s=t.currentPeek();return"{"===s?"%"!==n&&e:"@"!==s&&s?"%"===s?(t.peek(),i(e,"%",!0)):"|"===s?!("%"!==n&&!M)||!(n===u||n===g):s===u?(t.peek(),i(!0,u,M)):s!==g||(t.peek(),i(!0,g,M)):"%"===n||e},n=i();return e&&t.resetPeek(),n}function W(t,e){const i=t.currentChar();return i===D?D:e(i)?(t.next(),i):null}function G(t){const e=t=>{const e=t.charCodeAt(0);return e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57||95===e||36===e};return W(t,e)}function J(t){const e=t=>{const e=t.charCodeAt(0);return e>=48&&e<=57};return W(t,e)}function Z(t){const e=t=>{const e=t.charCodeAt(0);return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102};return W(t,e)}function Q(t){let e="",i="";while(e=J(t))i+=e;return i}function P(t){let e="";while(1){const i=t.currentChar();if("{"===i||"}"===i||"@"===i||"|"===i||!i)break;if("%"===i){if(!k(t))break;e+=i,t.next()}else if(i===u||i===g)if(k(t))e+=i,t.next();else{if(U(t))break;e+=i,t.next()}else e+=i,t.next()}return e}function V(t){E(t);let e="",i="";while(e=G(t))i+=e;return t.currentChar()===D&&h(M.UNTERMINATED_CLOSING_BRACE,c(),0),i}function B(t){E(t);let e="";return"-"===t.currentChar()?(t.next(),e+="-"+Q(t)):e+=Q(t),t.currentChar()===D&&h(M.UNTERMINATED_CLOSING_BRACE,c(),0),e}function F(t){E(t),x(t,"'");let e="",i="";const n=t=>t!==N&&t!==g;while(e=W(t,n))i+="\\"===e?R(t):e;const s=t.currentChar();return s===g||s===D?(h(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,c(),0),s===g&&(t.next(),x(t,"'")),i):(x(t,"'"),i)}function R(t){const e=t.currentChar();switch(e){case"\\":case"'":return t.next(),"\\"+e;case"u":return X(t,e,4);case"U":return X(t,e,6);default:return h(M.UNKNOWN_ESCAPE_SEQUENCE,c(),0,e),""}}function X(t,e,i){x(t,e);let n="";for(let s=0;s<i;s++){const i=Z(t);if(!i){h(M.INVALID_UNICODE_ESCAPE_SEQUENCE,c(),0,`\\${e}${n}${t.currentChar()}`);break}n+=i}return`\\${e}${n}`}function H(t){E(t);let e="",i="";const n=t=>"{"!==t&&"}"!==t&&t!==u&&t!==g;while(e=W(t,n))i+=e;return i}function _(t){let e="",i="";while(e=G(t))i+=e;return i}function q(t){const e=(i=!1,n)=>{const M=t.currentChar();return"{"!==M&&"%"!==M&&"@"!==M&&"|"!==M&&M?M===u?n:M===g?(n+=M,t.next(),e(i,n)):(n+=M,t.next(),e(!0,n)):n};return e(!1,"")}function $(t){E(t);const e=x(t,"|");return E(t),e}function K(t,e){let i=null;const n=t.currentChar();switch(n){case"{":return e.braceNest>=1&&h(M.NOT_ALLOW_NEST_PLACEHOLDER,c(),0),t.next(),i=w(e,2,"{"),E(t),e.braceNest++,i;case"}":return e.braceNest>0&&2===e.currentType&&h(M.EMPTY_PLACEHOLDER,c(),0),t.next(),i=w(e,3,"}"),e.braceNest--,e.braceNest>0&&E(t),e.inLinked&&0===e.braceNest&&(e.inLinked=!1),i;case"@":return e.braceNest>0&&h(M.UNTERMINATED_CLOSING_BRACE,c(),0),i=tt(t,e)||y(e),e.braceNest=0,i;default:let n=!0,s=!0,a=!0;if(U(t))return e.braceNest>0&&h(M.UNTERMINATED_CLOSING_BRACE,c(),0),i=w(e,1,$(t)),e.braceNest=0,e.inLinked=!1,i;if(e.braceNest>0&&(5===e.currentType||6===e.currentType||7===e.currentType))return h(M.UNTERMINATED_CLOSING_BRACE,c(),0),e.braceNest=0,et(t,e);if(n=p(t,e))return i=w(e,5,V(t)),E(t),i;if(s=C(t,e))return i=w(e,6,B(t)),E(t),i;if(a=z(t,e))return i=w(e,7,F(t)),E(t),i;if(!n&&!s&&!a)return i=w(e,13,H(t)),h(M.INVALID_TOKEN_IN_PLACEHOLDER,c(),0,i.value),E(t),i;break}return i}function tt(t,e){const{currentType:i}=e;let n=null;const s=t.currentChar();switch(8!==i&&9!==i&&12!==i&&10!==i||s!==g&&s!==u||h(M.INVALID_LINKED_FORMAT,c(),0),s){case"@":return t.next(),n=w(e,8,"@"),e.inLinked=!0,n;case".":return E(t),t.next(),w(e,9,".");case":":return E(t),t.next(),w(e,10,":");default:return U(t)?(n=w(e,1,$(t)),e.braceNest=0,e.inLinked=!1,n):f(t,e)||v(t,e)?(E(t),tt(t,e)):Y(t,e)?(E(t),w(e,12,_(t))):O(t,e)?(E(t),"{"===s?K(t,e)||n:w(e,11,q(t))):(8===i&&h(M.INVALID_LINKED_FORMAT,c(),0),e.braceNest=0,e.inLinked=!1,et(t,e))}}function et(t,e){let i={type:14};if(e.braceNest>0)return K(t,e)||y(e);if(e.inLinked)return tt(t,e)||y(e);const n=t.currentChar();switch(n){case"{":return K(t,e)||y(e);case"}":return h(M.UNBALANCED_CLOSING_BRACE,c(),0),t.next(),w(e,3,"}");case"@":return tt(t,e)||y(e);default:if(U(t))return i=w(e,1,$(t)),e.braceNest=0,e.inLinked=!1,i;if(k(t))return w(e,0,P(t));if("%"===n)return t.next(),w(e,4,"%");break}return i}function it(){const{currentType:t,offset:e,startLoc:i,endLoc:M}=j;return j.lastType=t,j.lastOffset=e,j.lastStartLoc=i,j.lastEndLoc=M,j.offset=a(),j.startLoc=c(),n.currentChar()===D?w(j,14):et(n,j)}return{nextToken:it,currentOffset:a,currentPosition:c,context:d}}const d="parser",S=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function h(t,e,i){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const t=parseInt(e||i,16);return t<=55295||t>=57344?String.fromCodePoint(t):"�"}}}function w(t={}){const e=!1!==t.location,{onError:i}=t;function a(t,e,n,M,...a){const r=t.currentPosition();if(r.offset+=M,r.column+=M,i){const t=o(n,r),M=s(e,t,{domain:d,args:a});i(M)}}function r(t,i,n){const M={type:t,start:i,end:i};return e&&(M.loc={start:n,end:n}),M}function u(t,i,n,M){t.end=i,M&&(t.type=M),e&&t.loc&&(t.loc.end=n)}function c(t,e){const i=t.context(),n=r(3,i.offset,i.startLoc);return n.value=e,u(n,t.currentOffset(),t.currentPosition()),n}function g(t,e){const i=t.context(),{lastOffset:n,lastStartLoc:M}=i,s=r(5,n,M);return s.index=parseInt(e,10),t.nextToken(),u(s,t.currentOffset(),t.currentPosition()),s}function I(t,e){const i=t.context(),{lastOffset:n,lastStartLoc:M}=i,s=r(4,n,M);return s.key=e,t.nextToken(),u(s,t.currentOffset(),t.currentPosition()),s}function l(t,e){const i=t.context(),{lastOffset:n,lastStartLoc:M}=i,s=r(9,n,M);return s.value=e.replace(S,h),t.nextToken(),u(s,t.currentOffset(),t.currentPosition()),s}function A(t){const e=t.nextToken(),i=t.context(),{lastOffset:n,lastStartLoc:s}=i,o=r(8,n,s);return 12!==e.type?(a(t,M.UNEXPECTED_EMPTY_LINKED_MODIFIER,i.lastStartLoc,0),o.value="",u(o,n,s),{nextConsumeToken:e,node:o}):(null==e.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,i.lastStartLoc,0,y(e)),o.value=e.value||"",u(o,t.currentOffset(),t.currentPosition()),{node:o})}function D(t,e){const i=t.context(),n=r(7,i.offset,i.startLoc);return n.value=e,u(n,t.currentOffset(),t.currentPosition()),n}function N(t){const e=t.context(),i=r(6,e.offset,e.startLoc);let n=t.nextToken();if(9===n.type){const e=A(t);i.modifier=e.node,n=e.nextConsumeToken||t.nextToken()}switch(10!==n.type&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(n)),n=t.nextToken(),2===n.type&&(n=t.nextToken()),n.type){case 11:null==n.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(n)),i.key=D(t,n.value||"");break;case 5:null==n.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(n)),i.key=I(t,n.value||"");break;case 6:null==n.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(n)),i.key=g(t,n.value||"");break;case 7:null==n.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(n)),i.key=l(t,n.value||"");break;default:a(t,M.UNEXPECTED_EMPTY_LINKED_KEY,e.lastStartLoc,0);const s=t.context(),o=r(7,s.offset,s.startLoc);return o.value="",u(o,s.offset,s.startLoc),i.key=o,u(i,s.offset,s.startLoc),{nextConsumeToken:n,node:i}}return u(i,t.currentOffset(),t.currentPosition()),{node:i}}function L(t){const e=t.context(),i=1===e.currentType?t.currentOffset():e.offset,n=1===e.currentType?e.endLoc:e.startLoc,s=r(2,i,n);s.items=[];let o=null;do{const i=o||t.nextToken();switch(o=null,i.type){case 0:null==i.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(i)),s.items.push(c(t,i.value||""));break;case 6:null==i.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(i)),s.items.push(g(t,i.value||""));break;case 5:null==i.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(i)),s.items.push(I(t,i.value||""));break;case 7:null==i.value&&a(t,M.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,y(i)),s.items.push(l(t,i.value||""));break;case 8:const n=N(t);s.items.push(n.node),o=n.nextConsumeToken||null;break}}while(14!==e.currentType&&1!==e.currentType);const A=1===e.currentType?e.lastOffset:t.currentOffset(),D=1===e.currentType?e.lastEndLoc:t.currentPosition();return u(s,A,D),s}function w(t,e,i,n){const s=t.context();let o=0===n.items.length;const c=r(1,e,i);c.cases=[],c.cases.push(n);do{const e=L(t);o||(o=0===e.items.length),c.cases.push(e)}while(14!==s.currentType);return o&&a(t,M.MUST_HAVE_MESSAGES_IN_PLURAL,i,0),u(c,t.currentOffset(),t.currentPosition()),c}function x(t){const e=t.context(),{offset:i,startLoc:n}=e,M=L(t);return 14===e.currentType?M:w(t,i,n,M)}function T(i){const s=j(i,Object(n["a"])({},t)),o=s.context(),c=r(0,o.offset,o.startLoc);return e&&c.loc&&(c.loc.source=i),c.body=x(s),14!==o.currentType&&a(s,M.UNEXPECTED_LEXICAL_ANALYSIS,o.lastStartLoc,0,i[o.offset]||""),u(c,s.currentOffset(),s.currentPosition()),c}return{parse:T}}function y(t){if(14===t.type)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function x(t,e={}){const i={ast:t,helpers:new Set},n=()=>i,M=t=>(i.helpers.add(t),t);return{context:n,helper:M}}function T(t,e){for(let i=0;i<t.length;i++)E(t[i],e)}function E(t,e){switch(t.type){case 1:T(t.cases,e),e.helper("plural");break;case 2:T(t.items,e);break;case 6:const i=t;E(i.key,e),e.helper("linked");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function m(t,e={}){const i=x(t);i.helper("normalize"),t.body&&E(t.body,i);const n=i.context();t.helpers=Array.from(n.helpers)}function b(t,e){const{sourceMap:i,filename:n,breakLineCode:M,needIndent:s}=e,a={source:t.loc.source,filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:M,needIndent:s,indentLevel:0},r=()=>a;function o(t,e){a.code+=t}function u(t,e=!0){const i=e?M:"";o(s?i+"  ".repeat(t):i)}function c(t=!0){const e=++a.indentLevel;t&&u(e)}function g(t=!0){const e=--a.indentLevel;t&&u(e)}function I(){u(a.indentLevel)}const l=t=>"_"+t,A=()=>a.needIndent;return{context:r,push:o,indent:c,deindent:g,newline:I,helper:l,needIndent:A}}function p(t,e){const{helper:i}=t;t.push(i("linked")+"("),Y(t,e.key),e.modifier&&(t.push(", "),Y(t,e.modifier)),t.push(")")}function C(t,e){const{helper:i,needIndent:n}=t;t.push(i("normalize")+"(["),t.indent(n());const M=e.items.length;for(let s=0;s<M;s++){if(Y(t,e.items[s]),s===M-1)break;t.push(", ")}t.deindent(n()),t.push("])")}function z(t,e){const{helper:i,needIndent:n}=t;if(e.cases.length>1){t.push(i("plural")+"(["),t.indent(n());const M=e.cases.length;for(let i=0;i<M;i++){if(Y(t,e.cases[i]),i===M-1)break;t.push(", ")}t.deindent(n()),t.push("])")}}function f(t,e){e.body?Y(t,e.body):t.push("null")}function Y(t,e){const{helper:i}=t;switch(e.type){case 0:f(t,e);break;case 1:z(t,e);break;case 2:C(t,e);break;case 6:p(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${i("interpolate")}(${i("list")}(${e.index}))`,e);break;case 4:t.push(`${i("interpolate")}(${i("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:0}}const v=(t,e={})=>{const i=Object(n["q"])(e.mode)?e.mode:"normal",M=Object(n["q"])(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,a=null!=e.breakLineCode?e.breakLineCode:"arrow"===i?";":"\n",r=e.needIndent?e.needIndent:"arrow"!==i,o=t.helpers||[],u=b(t,{mode:i,filename:M,sourceMap:s,breakLineCode:a,needIndent:r});u.push("normal"===i?"function __msg__ (ctx) {":"(ctx) => {"),u.indent(r),o.length>0&&(u.push(`const { ${o.map(t=>`${t}: _${t}`).join(", ")} } = ctx`),u.newline()),u.push("return "),Y(u,t),u.deindent(r),u.push("}");const{code:c,map:g}=u.context();return{ast:t,code:c,map:g?g.toJSON():void 0}};function O(t,e={}){const i=Object(n["a"])({},e),M=w(i),s=M.parse(t);return m(s,i),v(s,i)}
/*!
  * devtools-if v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const U={I18nInit:"i18n:init",FunctionTranslate:"function:translate"},k=[];
/*!
  * core-base v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */k[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},k[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},k[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},k[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},k[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},k[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},k[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const W=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function G(t){return W.test(t)}function J(t){const e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?t:t.slice(1,-1)}function Z(t){if(void 0===t||null===t)return"o";const e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Q(t){const e=t.trim();return("0"!==t.charAt(0)||!isNaN(parseInt(t)))&&(G(e)?J(e):"*"+e)}function P(t){const e=[];let i,n,M,s,a,r,o,u=-1,c=0,g=0;const I=[];function l(){const e=t[u+1];if(5===c&&"'"===e||6===c&&'"'===e)return u++,M="\\"+e,I[0](),!0}I[0]=()=>{void 0===n?n=M:n+=M},I[1]=()=>{void 0!==n&&(e.push(n),n=void 0)},I[2]=()=>{I[0](),g++},I[3]=()=>{if(g>0)g--,c=4,I[0]();else{if(g=0,void 0===n)return!1;if(n=Q(n),!1===n)return!1;I[1]()}};while(null!==c)if(u++,i=t[u],"\\"!==i||!l()){if(s=Z(i),o=k[c],a=o[s]||o["l"]||8,8===a)return;if(c=a[0],void 0!==a[1]&&(r=I[a[1]],r&&(M=i,!1===r())))return;if(7===c)return e}}const V=new Map;function B(t,e){return Object(n["n"])(t)?t[e]:null}function F(t,e){if(!Object(n["n"])(t))return null;let i=V.get(e);if(i||(i=P(e),i&&V.set(e,i)),!i)return null;const M=i.length;let s=t,a=0;while(a<M){const t=s[i[a]];if(void 0===t)return null;s=t,a++}return s}const R=t=>t,X=t=>"",H="text",_=t=>0===t.length?"":t.join(""),q=n["s"];function $(t,e){return t=Math.abs(t),2===e?t?t>1?1:0:1:t?Math.min(t,2):0}function K(t){const e=Object(n["m"])(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Object(n["m"])(t.named.count)||Object(n["m"])(t.named.n))?Object(n["m"])(t.named.count)?t.named.count:Object(n["m"])(t.named.n)?t.named.n:e:e}function tt(t,e){e.count||(e.count=t),e.n||(e.n=t)}function et(t={}){const e=t.locale,i=K(t),M=Object(n["n"])(t.pluralRules)&&Object(n["q"])(e)&&Object(n["l"])(t.pluralRules[e])?t.pluralRules[e]:$,s=Object(n["n"])(t.pluralRules)&&Object(n["q"])(e)&&Object(n["l"])(t.pluralRules[e])?$:void 0,a=t=>t[M(i,t.length,s)],r=t.list||[],o=t=>r[t],u=t.named||{};Object(n["m"])(t.pluralIndex)&&tt(i,u);const c=t=>u[t];function g(e){const i=Object(n["l"])(t.messages)?t.messages(e):!!Object(n["n"])(t.messages)&&t.messages[e];return i||(t.parent?t.parent.message(e):X)}const I=e=>t.modifiers?t.modifiers[e]:R,l=Object(n["o"])(t.processor)&&Object(n["l"])(t.processor.normalize)?t.processor.normalize:_,A=Object(n["o"])(t.processor)&&Object(n["l"])(t.processor.interpolate)?t.processor.interpolate:q,D=(t,e)=>{const i=g(t)(L);return Object(n["q"])(e)?I(e)(i):i},N=Object(n["o"])(t.processor)&&Object(n["q"])(t.processor.type)?t.processor.type:H,L={["list"]:o,["named"]:c,["plural"]:a,["linked"]:D,["message"]:g,["type"]:N,["interpolate"]:A,["normalize"]:l};return L}let it=null;function nt(t){it=t}function Mt(t,e,i){it&&it.emit(U.I18nInit,{timestamp:Date.now(),i18n:t,version:e,meta:i})}const st=at(U.FunctionTranslate);function at(t){return e=>it&&it.emit(t,e)}const rt={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};rt.NOT_FOUND_KEY,rt.FALLBACK_TO_TRANSLATE,rt.CANNOT_FORMAT_NUMBER,rt.FALLBACK_TO_NUMBER_FORMAT,rt.CANNOT_FORMAT_DATE,rt.FALLBACK_TO_DATE_FORMAT;function ot(t,e,i){return[...new Set([i,...Object(n["h"])(e)?e:Object(n["n"])(e)?Object.keys(e):Object(n["q"])(e)?[e]:[i]])]}function ut(t,e,i){const M=Object(n["q"])(i)?i:Dt,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let a=s.__localeChainCache.get(M);if(!a){a=[];let t=[i];while(Object(n["h"])(t))t=ct(a,t,e);const r=Object(n["h"])(e)||!Object(n["o"])(e)?e:e["default"]?e["default"]:null;t=Object(n["q"])(r)?[r]:r,Object(n["h"])(t)&&ct(a,t,!1),s.__localeChainCache.set(M,a)}return a}function ct(t,e,i){let M=!0;for(let s=0;s<e.length&&Object(n["i"])(M);s++){const a=e[s];Object(n["q"])(a)&&(M=gt(t,e[s],i))}return M}function gt(t,e,i){let n;const M=e.split("-");do{const e=M.join("-");n=It(t,e,i),M.splice(-1,1)}while(M.length&&!0===n);return n}function It(t,e,i){let M=!1;if(!t.includes(e)&&(M=!0,e)){M="!"!==e[e.length-1];const s=e.replace(/!/g,"");t.push(s),(Object(n["h"])(i)||Object(n["o"])(i))&&i[s]&&(M=i[s])}return M}const lt="9.2.0-beta.35",At=-1,Dt="en-US",Nt="";function Lt(){return{upper:t=>Object(n["q"])(t)?t.toUpperCase():t,lower:t=>Object(n["q"])(t)?t.toLowerCase():t,capitalize:t=>Object(n["q"])(t)?`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`:t}}let jt,dt,St;function ht(t){jt=t}function wt(t){dt=t}function yt(t){St=t}let xt=null;const Tt=t=>{xt=t},Et=()=>xt;let mt=null;const bt=t=>{mt=t},pt=()=>mt;let Ct=0;function zt(t={}){const e=Object(n["q"])(t.version)?t.version:lt,i=Object(n["q"])(t.locale)?t.locale:Dt,M=Object(n["h"])(t.fallbackLocale)||Object(n["o"])(t.fallbackLocale)||Object(n["q"])(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:i,s=Object(n["o"])(t.messages)?t.messages:{[i]:{}},a=Object(n["o"])(t.datetimeFormats)?t.datetimeFormats:{[i]:{}},r=Object(n["o"])(t.numberFormats)?t.numberFormats:{[i]:{}},o=Object(n["a"])({},t.modifiers||{},Lt()),u=t.pluralRules||{},c=Object(n["l"])(t.missing)?t.missing:null,g=!Object(n["i"])(t.missingWarn)&&!Object(n["p"])(t.missingWarn)||t.missingWarn,I=!Object(n["i"])(t.fallbackWarn)&&!Object(n["p"])(t.fallbackWarn)||t.fallbackWarn,l=!!t.fallbackFormat,A=!!t.unresolving,D=Object(n["l"])(t.postTranslation)?t.postTranslation:null,N=Object(n["o"])(t.processor)?t.processor:null,L=!Object(n["i"])(t.warnHtmlMessage)||t.warnHtmlMessage,j=!!t.escapeParameter,d=Object(n["l"])(t.messageCompiler)?t.messageCompiler:jt,S=Object(n["l"])(t.messageResolver)?t.messageResolver:dt||B,h=Object(n["l"])(t.localeFallbacker)?t.localeFallbacker:St||ot,w=Object(n["n"])(t.fallbackContext)?t.fallbackContext:void 0,y=Object(n["l"])(t.onWarn)?t.onWarn:n["t"],x=t,T=Object(n["n"])(x.__datetimeFormatters)?x.__datetimeFormatters:new Map,E=Object(n["n"])(x.__numberFormatters)?x.__numberFormatters:new Map,m=Object(n["n"])(x.__meta)?x.__meta:{};Ct++;const b={version:e,cid:Ct,locale:i,fallbackLocale:M,messages:s,modifiers:o,pluralRules:u,missing:c,missingWarn:g,fallbackWarn:I,fallbackFormat:l,unresolving:A,postTranslation:D,processor:N,warnHtmlMessage:L,escapeParameter:j,messageCompiler:d,messageResolver:S,localeFallbacker:h,fallbackContext:w,onWarn:y,__meta:m};return b.datetimeFormats=a,b.numberFormats=r,b.__datetimeFormatters=T,b.__numberFormatters=E,__INTLIFY_PROD_DEVTOOLS__&&Mt(b,e,m),b}function ft(t,e,i,M,s){const{missing:a,onWarn:r}=t;if(null!==a){const M=a(t,i,e,s);return Object(n["q"])(M)?M:e}return e}function Yt(t,e,i){const n=t;n.__localeChainCache=new Map,t.localeFallbacker(t,i,e)}const vt=t=>t;let Ot=Object.create(null);function Ut(t,e={}){{const i=e.onCacheKey||vt,n=i(t),M=Ot[n];if(M)return M;let s=!1;const r=e.onError||a;e.onError=t=>{s=!0,r(t)};const{code:o}=O(t,e),u=new Function("return "+o)();return s?u:Ot[n]=u}}let kt=M.__EXTEND_POINT__;const Wt=()=>++kt,Gt={INVALID_ARGUMENT:kt,INVALID_DATE_ARGUMENT:Wt(),INVALID_ISO_DATE_ARGUMENT:Wt(),__EXTEND_POINT__:Wt()};function Jt(t){return s(t,null,void 0)}Gt.INVALID_ARGUMENT,Gt.INVALID_DATE_ARGUMENT,Gt.INVALID_ISO_DATE_ARGUMENT;const Zt=()=>"",Qt=t=>Object(n["l"])(t);function Pt(t,...e){const{fallbackFormat:i,postTranslation:M,unresolving:s,messageCompiler:a,fallbackLocale:r,messages:o}=t,[u,c]=Xt(...e),g=Object(n["i"])(c.missingWarn)?c.missingWarn:t.missingWarn,I=Object(n["i"])(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,l=Object(n["i"])(c.escapeParameter)?c.escapeParameter:t.escapeParameter,A=!!c.resolvedMessage,D=Object(n["q"])(c.default)||Object(n["i"])(c.default)?Object(n["i"])(c.default)?a?u:()=>u:c.default:i?a?u:()=>u:"",N=i||""!==D,L=Object(n["q"])(c.locale)?c.locale:t.locale;l&&Vt(c);let[j,d,S]=A?[u,L,o[L]||{}]:Bt(t,u,L,r,I,g),h=j,w=u;if(A||Object(n["q"])(h)||Qt(h)||N&&(h=D,w=h),!A&&(!Object(n["q"])(h)&&!Qt(h)||!Object(n["q"])(d)))return s?At:u;let y=!1;const x=()=>{y=!0},T=Qt(h)?h:Ft(t,u,d,h,w,x);if(y)return h;const E=_t(t,d,S,c),m=et(E),b=Rt(t,T,m),p=M?M(b):b;if(__INTLIFY_PROD_DEVTOOLS__){const e={timestamp:Date.now(),key:Object(n["q"])(u)?u:Qt(h)?h.key:"",locale:d||(Qt(h)?h.locale:""),format:Object(n["q"])(h)?h:Qt(h)?h.source:"",message:p};e.meta=Object(n["a"])({},t.__meta,Et()||{}),st(e)}return p}function Vt(t){Object(n["h"])(t.list)?t.list=t.list.map(t=>Object(n["q"])(t)?Object(n["b"])(t):t):Object(n["n"])(t.named)&&Object.keys(t.named).forEach(e=>{Object(n["q"])(t.named[e])&&(t.named[e]=Object(n["b"])(t.named[e]))})}function Bt(t,e,i,M,s,a){const{messages:r,onWarn:o,messageResolver:u,localeFallbacker:c}=t,g=c(t,M,i);let I,l={},A=null,D=i,N=null;const L="translate";for(let j=0;j<g.length;j++){I=N=g[j],l=r[I]||{};if(null===(A=u(l,e))&&(A=l[e]),Object(n["q"])(A)||Object(n["l"])(A))break;const i=ft(t,e,I,a,L);i!==e&&(A=i),D=N}return[A,I,l]}function Ft(t,e,i,n,M,s){const{messageCompiler:a,warnHtmlMessage:r}=t;if(Qt(n)){const t=n;return t.locale=t.locale||i,t.key=t.key||e,t}if(null==a){const t=()=>n;return t.locale=i,t.key=e,t}const o=a(n,Ht(t,i,M,n,r,s));return o.locale=i,o.key=e,o.source=n,o}function Rt(t,e,i){const n=e(i);return n}function Xt(...t){const[e,i,M]=t,s={};if(!Object(n["q"])(e)&&!Object(n["m"])(e)&&!Qt(e))throw Jt(Gt.INVALID_ARGUMENT);const a=Object(n["m"])(e)?String(e):(Qt(e),e);return Object(n["m"])(i)?s.plural=i:Object(n["q"])(i)?s.default=i:Object(n["o"])(i)&&!Object(n["k"])(i)?s.named=i:Object(n["h"])(i)&&(s.list=i),Object(n["m"])(M)?s.plural=M:Object(n["q"])(M)?s.default=M:Object(n["o"])(M)&&Object(n["a"])(s,M),[a,s]}function Ht(t,e,i,M,s,a){return{warnHtmlMessage:s,onError:t=>{throw a&&a(t),t},onCacheKey:t=>Object(n["d"])(e,i,t)}}function _t(t,e,i,M){const{modifiers:s,pluralRules:a,messageResolver:r,fallbackLocale:o,fallbackWarn:u,missingWarn:c,fallbackContext:g}=t,I=M=>{let s=r(i,M);if(null==s&&g){const[,,t]=Bt(g,M,e,o,u,c);s=r(t,M)}if(Object(n["q"])(s)){let i=!1;const n=()=>{i=!0},a=Ft(t,M,e,s,M,n);return i?Zt:a}return Qt(s)?s:Zt},l={locale:e,modifiers:s,pluralRules:a,messages:I};return t.processor&&(l.processor=t.processor),M.list&&(l.list=M.list),M.named&&(l.named=M.named),Object(n["m"])(M.plural)&&(l.pluralIndex=M.plural),l}const qt="undefined"!==typeof Intl;qt&&Intl.DateTimeFormat,qt&&Intl.NumberFormat;function $t(t,...e){const{datetimeFormats:i,unresolving:M,fallbackLocale:s,onWarn:a,localeFallbacker:r}=t,{__datetimeFormatters:o}=t;const[u,c,g,I]=Kt(...e),l=Object(n["i"])(g.missingWarn)?g.missingWarn:t.missingWarn,A=(Object(n["i"])(g.fallbackWarn)?g.fallbackWarn:t.fallbackWarn,!!g.part),D=Object(n["q"])(g.locale)?g.locale:t.locale,N=r(t,s,D);if(!Object(n["q"])(u)||""===u)return new Intl.DateTimeFormat(D).format(c);let L,j={},d=null,S=D,h=null;const w="datetime format";for(let T=0;T<N.length;T++){if(L=h=N[T],j=i[L]||{},d=j[u],Object(n["o"])(d))break;ft(t,u,L,l,w),S=h}if(!Object(n["o"])(d)||!Object(n["q"])(L))return M?At:u;let y=`${L}__${u}`;Object(n["k"])(I)||(y=`${y}__${JSON.stringify(I)}`);let x=o.get(y);return x||(x=new Intl.DateTimeFormat(L,Object(n["a"])({},d,I)),o.set(y,x)),A?x.formatToParts(c):x.format(c)}function Kt(...t){const[e,i,M,s]=t;let a,r={},o={};if(Object(n["q"])(e)){const t=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!t)throw Jt(Gt.INVALID_ISO_DATE_ARGUMENT);const i=t[3]?t[3].trim().startsWith("T")?`${t[1].trim()}${t[3].trim()}`:`${t[1].trim()}T${t[3].trim()}`:t[1].trim();a=new Date(i);try{a.toISOString()}catch(u){throw Jt(Gt.INVALID_ISO_DATE_ARGUMENT)}}else if(Object(n["j"])(e)){if(isNaN(e.getTime()))throw Jt(Gt.INVALID_DATE_ARGUMENT);a=e}else{if(!Object(n["m"])(e))throw Jt(Gt.INVALID_ARGUMENT);a=e}return Object(n["q"])(i)?r.key=i:Object(n["o"])(i)&&(r=i),Object(n["q"])(M)?r.locale=M:Object(n["o"])(M)&&(o=M),Object(n["o"])(s)&&(o=s),[r.key||"",a,r,o]}function te(t,e,i){const n=t;for(const M in i){const t=`${e}__${M}`;n.__datetimeFormatters.has(t)&&n.__datetimeFormatters.delete(t)}}function ee(t,...e){const{numberFormats:i,unresolving:M,fallbackLocale:s,onWarn:a,localeFallbacker:r}=t,{__numberFormatters:o}=t;const[u,c,g,I]=ie(...e),l=Object(n["i"])(g.missingWarn)?g.missingWarn:t.missingWarn,A=(Object(n["i"])(g.fallbackWarn)?g.fallbackWarn:t.fallbackWarn,!!g.part),D=Object(n["q"])(g.locale)?g.locale:t.locale,N=r(t,s,D);if(!Object(n["q"])(u)||""===u)return new Intl.NumberFormat(D).format(c);let L,j={},d=null,S=D,h=null;const w="number format";for(let T=0;T<N.length;T++){if(L=h=N[T],j=i[L]||{},d=j[u],Object(n["o"])(d))break;ft(t,u,L,l,w),S=h}if(!Object(n["o"])(d)||!Object(n["q"])(L))return M?At:u;let y=`${L}__${u}`;Object(n["k"])(I)||(y=`${y}__${JSON.stringify(I)}`);let x=o.get(y);return x||(x=new Intl.NumberFormat(L,Object(n["a"])({},d,I)),o.set(y,x)),A?x.formatToParts(c):x.format(c)}function ie(...t){const[e,i,M,s]=t;let a={},r={};if(!Object(n["m"])(e))throw Jt(Gt.INVALID_ARGUMENT);const o=e;return Object(n["q"])(i)?a.key=i:Object(n["o"])(i)&&(a=i),Object(n["q"])(M)?a.locale=M:Object(n["o"])(M)&&(r=M),Object(n["o"])(s)&&(r=s),[a.key||"",o,a,r]}function ne(t,e,i){const n=t;for(const M in i){const t=`${e}__${M}`;n.__numberFormatters.has(t)&&n.__numberFormatters.delete(t)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(n["e"])().__INTLIFY_PROD_DEVTOOLS__=!1);var Me=i("7a23");i("0026");i("16b3");
/*!
  * vue-devtools v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const se="9.2.0-beta.35";function ae(){let t=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(t=!0,Object(n["e"])().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(t=!0,Object(n["e"])().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(n["e"])().__INTLIFY_PROD_DEVTOOLS__=!1)}let re=rt.__EXTEND_POINT__;const oe=()=>++re,ue={FALLBACK_TO_ROOT:re,NOT_SUPPORTED_PRESERVE:oe(),NOT_SUPPORTED_FORMATTER:oe(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:oe(),NOT_SUPPORTED_GET_CHOICE_INDEX:oe(),COMPONENT_NAME_LEGACY_COMPATIBLE:oe(),NOT_FOUND_PARENT_SCOPE:oe()};ue.FALLBACK_TO_ROOT,ue.NOT_SUPPORTED_PRESERVE,ue.NOT_SUPPORTED_FORMATTER,ue.NOT_SUPPORTED_PRESERVE_DIRECTIVE,ue.NOT_SUPPORTED_GET_CHOICE_INDEX,ue.COMPONENT_NAME_LEGACY_COMPATIBLE,ue.NOT_FOUND_PARENT_SCOPE;let ce=M.__EXTEND_POINT__;const ge=()=>++ce,Ie={UNEXPECTED_RETURN_TYPE:ce,INVALID_ARGUMENT:ge(),MUST_BE_CALL_SETUP_TOP:ge(),NOT_INSLALLED:ge(),NOT_AVAILABLE_IN_LEGACY_MODE:ge(),REQUIRED_VALUE:ge(),INVALID_VALUE:ge(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:ge(),NOT_INSLALLED_WITH_PROVIDE:ge(),UNEXPECTED_ERROR:ge(),NOT_COMPATIBLE_LEGACY_VUE_I18N:ge(),BRIDGE_SUPPORT_VUE_2_ONLY:ge(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:ge(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:ge(),__EXTEND_POINT__:ge()};function le(t,...e){return s(t,null,void 0)}Ie.UNEXPECTED_RETURN_TYPE,Ie.INVALID_ARGUMENT,Ie.MUST_BE_CALL_SETUP_TOP,Ie.NOT_INSLALLED,Ie.UNEXPECTED_ERROR,Ie.NOT_AVAILABLE_IN_LEGACY_MODE,Ie.REQUIRED_VALUE,Ie.INVALID_VALUE,Ie.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,Ie.NOT_INSLALLED_WITH_PROVIDE,Ie.NOT_COMPATIBLE_LEGACY_VUE_I18N,Ie.BRIDGE_SUPPORT_VUE_2_ONLY,Ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,Ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;const Ae=Object(n["r"])("__transrateVNode"),De=Object(n["r"])("__datetimeParts"),Ne=Object(n["r"])("__numberParts"),Le=Object(n["r"])("__setPluralRules");Object(n["r"])("__intlifyMeta");const je=Object(n["r"])("__injectWithOption");function de(t){if(!Object(n["n"])(t))return t;for(const e in t)if(Object(n["f"])(t,e))if(e.includes(".")){const i=e.split("."),M=i.length-1;let s=t;for(let t=0;t<M;t++)i[t]in s||(s[i[t]]={}),s=s[i[t]];s[i[M]]=t[e],delete t[e],Object(n["n"])(s[i[M]])&&de(s[i[M]])}else Object(n["n"])(t[e])&&de(t[e]);return t}function Se(t,e){const{messages:i,__i18n:M,messageResolver:s,flatJson:a}=e,r=Object(n["o"])(i)?i:Object(n["h"])(M)?{}:{[t]:{}};if(Object(n["h"])(M)&&M.forEach(t=>{if("locale"in t&&"resource"in t){const{locale:e,resource:i}=t;e?(r[e]=r[e]||{},we(i,r[e])):we(i,r)}else Object(n["q"])(t)&&we(JSON.parse(t),r)}),null==s&&a)for(const o in r)Object(n["f"])(r,o)&&de(r[o]);return r}const he=t=>!Object(n["n"])(t)||Object(n["h"])(t);function we(t,e){if(he(t)||he(e))throw le(Ie.INVALID_VALUE);for(const i in t)Object(n["f"])(t,i)&&(he(t[i])||he(e[i])?e[i]=t[i]:we(t[i],e[i]))}function ye(t){return t.type}function xe(t,e,i){let M=Object(n["n"])(e.messages)?e.messages:{};"__i18nGlobal"in i&&(M=Se(t.locale.value,{messages:M,__i18n:i.__i18nGlobal}));const s=Object.keys(M);if(s.length&&s.forEach(e=>{t.mergeLocaleMessage(e,M[e])}),Object(n["n"])(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(i=>{t.mergeDateTimeFormat(i,e.datetimeFormats[i])})}if(Object(n["n"])(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(i=>{t.mergeNumberFormat(i,e.numberFormats[i])})}}function Te(t){return Object(Me["createVNode"])(Me["Text"],null,t,0)}const Ee="__INTLIFY_META__";let me=0;function be(t){return(e,i,n,M)=>t(i,n,Object(Me["getCurrentInstance"])()||void 0,M)}const pe=()=>{const t=Object(Me["getCurrentInstance"])();let e=null;return t&&(e=ye(t)[Ee])?{[Ee]:e}:null};function Ce(t={},e){const{__root:i}=t,M=void 0===i;let s=!Object(n["i"])(t.inheritLocale)||t.inheritLocale;const a=Object(Me["ref"])(i&&s?i.locale.value:Object(n["q"])(t.locale)?t.locale:Dt),r=Object(Me["ref"])(i&&s?i.fallbackLocale.value:Object(n["q"])(t.fallbackLocale)||Object(n["h"])(t.fallbackLocale)||Object(n["o"])(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:a.value),o=Object(Me["ref"])(Se(a.value,t)),u=Object(Me["ref"])(Object(n["o"])(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),c=Object(Me["ref"])(Object(n["o"])(t.numberFormats)?t.numberFormats:{[a.value]:{}});let g=i?i.missingWarn:!Object(n["i"])(t.missingWarn)&&!Object(n["p"])(t.missingWarn)||t.missingWarn,I=i?i.fallbackWarn:!Object(n["i"])(t.fallbackWarn)&&!Object(n["p"])(t.fallbackWarn)||t.fallbackWarn,l=i?i.fallbackRoot:!Object(n["i"])(t.fallbackRoot)||t.fallbackRoot,A=!!t.fallbackFormat,D=Object(n["l"])(t.missing)?t.missing:null,N=Object(n["l"])(t.missing)?be(t.missing):null,L=Object(n["l"])(t.postTranslation)?t.postTranslation:null,j=i?i.warnHtmlMessage:!Object(n["i"])(t.warnHtmlMessage)||t.warnHtmlMessage,d=!!t.escapeParameter;const S=i?i.modifiers:Object(n["o"])(t.modifiers)?t.modifiers:{};let h,w=t.pluralRules||i&&i.pluralRules;function y(){M&&bt(null);const e={version:se,locale:a.value,fallbackLocale:r.value,messages:o.value,modifiers:S,pluralRules:w,missing:null===N?void 0:N,missingWarn:g,fallbackWarn:I,fallbackFormat:A,unresolving:!0,postTranslation:null===L?void 0:L,warnHtmlMessage:j,escapeParameter:d,messageResolver:t.messageResolver,__meta:{framework:"vue"}};e.datetimeFormats=u.value,e.numberFormats=c.value,e.__datetimeFormatters=Object(n["o"])(h)?h.__datetimeFormatters:void 0,e.__numberFormatters=Object(n["o"])(h)?h.__numberFormatters:void 0;const i=zt(e);return M&&bt(i),i}function x(){return[a.value,r.value,o.value,u.value,c.value]}h=y(),Yt(h,a.value,r.value);const T=Object(Me["computed"])({get:()=>a.value,set:t=>{a.value=t,h.locale=a.value}}),E=Object(Me["computed"])({get:()=>r.value,set:t=>{r.value=t,h.fallbackLocale=r.value,Yt(h,a.value,t)}}),m=Object(Me["computed"])(()=>o.value),b=Object(Me["computed"])(()=>u.value),p=Object(Me["computed"])(()=>c.value);function C(){return Object(n["l"])(L)?L:null}function z(t){L=t,h.postTranslation=t}function f(){return D}function Y(t){null!==t&&(N=be(t)),D=t,h.missing=N}function v(t,e,s,a,r,o){let u;if(x(),__INTLIFY_PROD_DEVTOOLS__)try{Tt(pe()),M||(h.fallbackContext=i?pt():void 0),u=t(h)}finally{Tt(null),M||(h.fallbackContext=void 0)}else u=t(h);if(Object(n["m"])(u)&&u===At){const[t,n]=e();return i&&l?a(i):r(t)}if(o(u))return u;throw le(Ie.UNEXPECTED_RETURN_TYPE)}function O(...t){return v(e=>Reflect.apply(Pt,null,[e,...t]),()=>Xt(...t),"translate",e=>Reflect.apply(e.t,e,[...t]),t=>t,t=>Object(n["q"])(t))}function U(...t){const[e,i,M]=t;if(M&&!Object(n["n"])(M))throw le(Ie.INVALID_ARGUMENT);return O(e,i,Object(n["a"])({resolvedMessage:!0},M||{}))}function k(...t){return v(e=>Reflect.apply($t,null,[e,...t]),()=>Kt(...t),"datetime format",e=>Reflect.apply(e.d,e,[...t]),()=>Nt,t=>Object(n["q"])(t))}function W(...t){return v(e=>Reflect.apply(ee,null,[e,...t]),()=>ie(...t),"number format",e=>Reflect.apply(e.n,e,[...t]),()=>Nt,t=>Object(n["q"])(t))}function G(t){return t.map(t=>Object(n["q"])(t)?Te(t):t)}const J=t=>t,Z={normalize:G,interpolate:J,type:"vnode"};function Q(...t){return v(e=>{let i;const n=e;try{n.processor=Z,i=Reflect.apply(Pt,null,[n,...t])}finally{n.processor=null}return i},()=>Xt(...t),"translate",e=>e[Ae](...t),t=>[Te(t)],t=>Object(n["h"])(t))}function P(...t){return v(e=>Reflect.apply(ee,null,[e,...t]),()=>ie(...t),"number format",e=>e[Ne](...t),()=>[],t=>Object(n["q"])(t)||Object(n["h"])(t))}function V(...t){return v(e=>Reflect.apply($t,null,[e,...t]),()=>Kt(...t),"datetime format",e=>e[De](...t),()=>[],t=>Object(n["q"])(t)||Object(n["h"])(t))}function B(t){w=t,h.pluralRules=w}function F(t,e){const i=Object(n["q"])(e)?e:a.value,M=H(i);return null!==h.messageResolver(M,t)}function R(t){let e=null;const i=ut(h,r.value,a.value);for(let n=0;n<i.length;n++){const M=o.value[i[n]]||{},s=h.messageResolver(M,t);if(null!=s){e=s;break}}return e}function X(t){const e=R(t);return null!=e?e:i&&i.tm(t)||{}}function H(t){return o.value[t]||{}}function _(t,e){o.value[t]=e,h.messages=o.value}function q(t,e){o.value[t]=o.value[t]||{},we(e,o.value[t]),h.messages=o.value}function $(t){return u.value[t]||{}}function K(t,e){u.value[t]=e,h.datetimeFormats=u.value,te(h,t,e)}function tt(t,e){u.value[t]=Object(n["a"])(u.value[t]||{},e),h.datetimeFormats=u.value,te(h,t,e)}function et(t){return c.value[t]||{}}function it(t,e){c.value[t]=e,h.numberFormats=c.value,ne(h,t,e)}function nt(t,e){c.value[t]=Object(n["a"])(c.value[t]||{},e),h.numberFormats=c.value,ne(h,t,e)}me++,i&&n["g"]&&(Object(Me["watch"])(i.locale,t=>{s&&(a.value=t,h.locale=t,Yt(h,a.value,r.value))}),Object(Me["watch"])(i.fallbackLocale,t=>{s&&(r.value=t,h.fallbackLocale=t,Yt(h,a.value,r.value))}));const Mt={id:me,locale:T,fallbackLocale:E,get inheritLocale(){return s},set inheritLocale(t){s=t,t&&i&&(a.value=i.locale.value,r.value=i.fallbackLocale.value,Yt(h,a.value,r.value))},get availableLocales(){return Object.keys(o.value).sort()},messages:m,get modifiers(){return S},get pluralRules(){return w||{}},get isGlobal(){return M},get missingWarn(){return g},set missingWarn(t){g=t,h.missingWarn=g},get fallbackWarn(){return I},set fallbackWarn(t){I=t,h.fallbackWarn=I},get fallbackRoot(){return l},set fallbackRoot(t){l=t},get fallbackFormat(){return A},set fallbackFormat(t){A=t,h.fallbackFormat=A},get warnHtmlMessage(){return j},set warnHtmlMessage(t){j=t,h.warnHtmlMessage=t},get escapeParameter(){return d},set escapeParameter(t){d=t,h.escapeParameter=t},t:O,getLocaleMessage:H,setLocaleMessage:_,mergeLocaleMessage:q,getPostTranslationHandler:C,setPostTranslationHandler:z,getMissingHandler:f,setMissingHandler:Y,[Le]:B};return Mt.datetimeFormats=b,Mt.numberFormats=p,Mt.rt=U,Mt.te=F,Mt.tm=X,Mt.d=k,Mt.n=W,Mt.getDateTimeFormat=$,Mt.setDateTimeFormat=K,Mt.mergeDateTimeFormat=tt,Mt.getNumberFormat=et,Mt.setNumberFormat=it,Mt.mergeNumberFormat=nt,Mt[je]=t.__injectWithOption,Mt[Ae]=Q,Mt[De]=V,Mt[Ne]=P,Mt}function ze(t){const e=Object(n["q"])(t.locale)?t.locale:Dt,i=Object(n["q"])(t.fallbackLocale)||Object(n["h"])(t.fallbackLocale)||Object(n["o"])(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:e,M=Object(n["l"])(t.missing)?t.missing:void 0,s=!Object(n["i"])(t.silentTranslationWarn)&&!Object(n["p"])(t.silentTranslationWarn)||!t.silentTranslationWarn,a=!Object(n["i"])(t.silentFallbackWarn)&&!Object(n["p"])(t.silentFallbackWarn)||!t.silentFallbackWarn,r=!Object(n["i"])(t.fallbackRoot)||t.fallbackRoot,o=!!t.formatFallbackMessages,u=Object(n["o"])(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,g=Object(n["l"])(t.postTranslation)?t.postTranslation:void 0,I=!Object(n["q"])(t.warnHtmlInMessage)||"off"!==t.warnHtmlInMessage,l=!!t.escapeParameterHtml,A=!Object(n["i"])(t.sync)||t.sync;let D=t.messages;if(Object(n["o"])(t.sharedMessages)){const e=t.sharedMessages,i=Object.keys(e);D=i.reduce((t,i)=>{const M=t[i]||(t[i]={});return Object(n["a"])(M,e[i]),t},D||{})}const{__i18n:N,__root:L,__injectWithOption:j}=t,d=t.datetimeFormats,S=t.numberFormats,h=t.flatJson;return{locale:e,fallbackLocale:i,messages:D,flatJson:h,datetimeFormats:d,numberFormats:S,missing:M,missingWarn:s,fallbackWarn:a,fallbackRoot:r,fallbackFormat:o,modifiers:u,pluralRules:c,postTranslation:g,warnHtmlMessage:I,escapeParameter:l,messageResolver:t.messageResolver,inheritLocale:A,__i18n:N,__root:L,__injectWithOption:j}}function fe(t={},e){{const e=Ce(ze(t)),i={id:e.id,get locale(){return e.locale.value},set locale(t){e.locale.value=t},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(t){e.fallbackLocale.value=t},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(t){},get missing(){return e.getMissingHandler()},set missing(t){e.setMissingHandler(t)},get silentTranslationWarn(){return Object(n["i"])(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(t){e.missingWarn=Object(n["i"])(t)?!t:t},get silentFallbackWarn(){return Object(n["i"])(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(t){e.fallbackWarn=Object(n["i"])(t)?!t:t},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(t){e.fallbackFormat=t},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(t){e.setPostTranslationHandler(t)},get sync(){return e.inheritLocale},set sync(t){e.inheritLocale=t},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(t){e.warnHtmlMessage="off"!==t},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(t){e.escapeParameter=t},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(t){},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...t){const[i,M,s]=t,a={};let r=null,o=null;if(!Object(n["q"])(i))throw le(Ie.INVALID_ARGUMENT);const u=i;return Object(n["q"])(M)?a.locale=M:Object(n["h"])(M)?r=M:Object(n["o"])(M)&&(o=M),Object(n["h"])(s)?r=s:Object(n["o"])(s)&&(o=s),Reflect.apply(e.t,e,[u,r||o||{},a])},rt(...t){return Reflect.apply(e.rt,e,[...t])},tc(...t){const[i,M,s]=t,a={plural:1};let r=null,o=null;if(!Object(n["q"])(i))throw le(Ie.INVALID_ARGUMENT);const u=i;return Object(n["q"])(M)?a.locale=M:Object(n["m"])(M)?a.plural=M:Object(n["h"])(M)?r=M:Object(n["o"])(M)&&(o=M),Object(n["q"])(s)?a.locale=s:Object(n["h"])(s)?r=s:Object(n["o"])(s)&&(o=s),Reflect.apply(e.t,e,[u,r||o||{},a])},te(t,i){return e.te(t,i)},tm(t){return e.tm(t)},getLocaleMessage(t){return e.getLocaleMessage(t)},setLocaleMessage(t,i){e.setLocaleMessage(t,i)},mergeLocaleMessage(t,i){e.mergeLocaleMessage(t,i)},d(...t){return Reflect.apply(e.d,e,[...t])},getDateTimeFormat(t){return e.getDateTimeFormat(t)},setDateTimeFormat(t,i){e.setDateTimeFormat(t,i)},mergeDateTimeFormat(t,i){e.mergeDateTimeFormat(t,i)},n(...t){return Reflect.apply(e.n,e,[...t])},getNumberFormat(t){return e.getNumberFormat(t)},setNumberFormat(t,i){e.setNumberFormat(t,i)},mergeNumberFormat(t,i){e.mergeNumberFormat(t,i)},getChoiceIndex(t,e){return-1},__onComponentInstanceCreated(e){const{componentInstanceCreatedListener:n}=t;n&&n(e,i)}};return i}}const Ye={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>"parent"===t||"global"===t,default:"parent"},i18n:{type:Object}};function ve({slots:t},e){if(1===e.length&&"default"===e[0]){const e=t.default?t.default():[];return e.reduce((t,e)=>[...t,...Object(n["h"])(e.children)?e.children:[e]],[])}return e.reduce((e,i)=>{const n=t[i];return n&&(e[i]=n()),e},{})}function Oe(t){return Me["Fragment"]}const Ue={name:"i18n-t",props:Object(n["a"])({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Object(n["m"])(t)||!isNaN(t)}},Ye),setup(t,e){const{slots:i,attrs:M}=e,s=t.i18n||$e({useScope:t.scope,__useComponent:!0}),a=Object.keys(i).filter(t=>"_"!==t);return()=>{const i={};t.locale&&(i.locale=t.locale),void 0!==t.plural&&(i.plural=Object(n["q"])(t.plural)?+t.plural:t.plural);const r=ve(e,a),o=s[Ae](t.keypath,r,i),u=Object(n["a"])({},M),c=Object(n["q"])(t.tag)||Object(n["n"])(t.tag)?t.tag:Oe();return Object(Me["h"])(c,u,o)}}};function ke(t){return Object(n["h"])(t)&&!Object(n["q"])(t[0])}function We(t,e,i,M){const{slots:s,attrs:a}=e;return()=>{const e={part:!0};let r={};t.locale&&(e.locale=t.locale),Object(n["q"])(t.format)?e.key=t.format:Object(n["n"])(t.format)&&(Object(n["q"])(t.format.key)&&(e.key=t.format.key),r=Object.keys(t.format).reduce((e,M)=>i.includes(M)?Object(n["a"])({},e,{[M]:t.format[M]}):e,{}));const o=M(t.value,e,r);let u=[e.key];Object(n["h"])(o)?u=o.map((t,e)=>{const i=s[t.type],n=i?i({[t.type]:t.value,index:e,parts:o}):[t.value];return ke(n)&&(n[0].key=`${t.type}-${e}`),n}):Object(n["q"])(o)&&(u=[o]);const c=Object(n["a"])({},a),g=Object(n["q"])(t.tag)||Object(n["n"])(t.tag)?t.tag:Oe();return Object(Me["h"])(g,c,u)}}const Ge=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],Je={name:"i18n-n",props:Object(n["a"])({value:{type:Number,required:!0},format:{type:[String,Object]}},Ye),setup(t,e){const i=t.i18n||$e({useScope:"parent",__useComponent:!0});return We(t,e,Ge,(...t)=>i[Ne](...t))}},Ze=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],Qe={name:"i18n-d",props:Object(n["a"])({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ye),setup(t,e){const i=t.i18n||$e({useScope:"parent",__useComponent:!0});return We(t,e,Ze,(...t)=>i[De](...t))}};function Pe(t,e){const i=t;if("composition"===t.mode)return i.__getInstance(e)||t.global;{const n=i.__getInstance(e);return null!=n?n.__composer:t.global.__composer}}function Ve(t){const e=(e,{instance:i,value:n,modifiers:M})=>{if(!i||!i.$)throw le(Ie.UNEXPECTED_ERROR);const s=Pe(t,i.$);const a=Be(n);e.textContent=Reflect.apply(s.t,s,[...Fe(a)])};return{beforeMount:e,beforeUpdate:e}}function Be(t){if(Object(n["q"])(t))return{path:t};if(Object(n["o"])(t)){if(!("path"in t))throw le(Ie.REQUIRED_VALUE,"path");return t}throw le(Ie.INVALID_VALUE)}function Fe(t){const{path:e,locale:i,args:M,choice:s,plural:a}=t,r={},o=M||{};return Object(n["q"])(i)&&(r.locale=i),Object(n["m"])(s)&&(r.plural=s),Object(n["m"])(a)&&(r.plural=a),[e,o,r]}function Re(t,e,...i){const M=Object(n["o"])(i[0])?i[0]:{},s=!!M.useI18nComponentName,a=!Object(n["i"])(M.globalInstall)||M.globalInstall;a&&(t.component(s?"i18n":Ue.name,Ue),t.component(Je.name,Je),t.component(Qe.name,Qe)),t.directive("t",Ve(e))}function Xe(t,e,i){return{beforeCreate(){const n=Object(Me["getCurrentInstance"])();if(!n)throw le(Ie.UNEXPECTED_ERROR);const M=this.$options;if(M.i18n){const i=M.i18n;M.__i18n&&(i.__i18n=M.__i18n),i.__root=e,this===this.$root?this.$i18n=He(t,i):(i.__injectWithOption=!0,this.$i18n=fe(i))}else M.__i18n?this===this.$root?this.$i18n=He(t,M):this.$i18n=fe({__i18n:M.__i18n,__injectWithOption:!0,__root:e}):this.$i18n=t;M.__i18nGlobal&&xe(e,M,M),t.__onComponentInstanceCreated(this.$i18n),i.__setInstance(n,this.$i18n),this.$t=(...t)=>this.$i18n.t(...t),this.$rt=(...t)=>this.$i18n.rt(...t),this.$tc=(...t)=>this.$i18n.tc(...t),this.$te=(t,e)=>this.$i18n.te(t,e),this.$d=(...t)=>this.$i18n.d(...t),this.$n=(...t)=>this.$i18n.n(...t),this.$tm=t=>this.$i18n.tm(t)},mounted(){0},unmounted(){const t=Object(Me["getCurrentInstance"])();if(!t)throw le(Ie.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,i.__deleteInstance(t),delete this.$i18n}}}function He(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[Le](e.pluralizationRules||t.pluralizationRules);const i=Se(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(i).forEach(e=>t.mergeLocaleMessage(e,i[e])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const _e=Object(n["r"])("global-vue-i18n");function qe(t={},e){const i=__VUE_I18N_LEGACY_API__&&Object(n["i"])(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,M=!Object(n["i"])(t.globalInjection)||t.globalInjection,s=!__VUE_I18N_LEGACY_API__||!i||!!t.allowComposition,a=new Map,[r,o]=Ke(t,i),u=Object(n["r"])("");function c(t){return a.get(t)||null}function g(t,e){a.set(t,e)}function I(t){a.delete(t)}{const t={get mode(){return __VUE_I18N_LEGACY_API__&&i?"legacy":"composition"},get allowComposition(){return s},async install(e,...n){e.__VUE_I18N_SYMBOL__=u,e.provide(e.__VUE_I18N_SYMBOL__,t),!i&&M&&oi(e,t.global),__VUE_I18N_FULL_INSTALL__&&Re(e,t,...n),__VUE_I18N_LEGACY_API__&&i&&e.mixin(Xe(o,o.__composer,t));const s=e.unmount;e.unmount=()=>{t.dispose(),s()}},get global(){return o},dispose(){r.stop()},__instances:a,__getInstance:c,__setInstance:g,__deleteInstance:I};return t}}function $e(t={}){const e=Object(Me["getCurrentInstance"])();if(null==e)throw le(Ie.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&null!=e.appContext.app&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw le(Ie.NOT_INSLALLED);const i=ti(e),M=ii(i),s=ye(e),a=ei(t,s);if(__VUE_I18N_LEGACY_API__&&"legacy"===i.mode&&!t.__useComponent){if(!i.allowComposition)throw le(Ie.NOT_AVAILABLE_IN_LEGACY_MODE);return si(e,a,M,t)}if("global"===a)return xe(M,t,s),M;if("parent"===a){let n=ni(i,e,t.__useComponent);return null==n&&(n=M),n}const r=i;let o=r.__getInstance(e);if(null==o){const i=Object(n["a"])({},t);"__i18n"in s&&(i.__i18n=s.__i18n),M&&(i.__root=M),o=Ce(i),Mi(r,e,o),r.__setInstance(e,o)}return o}function Ke(t,e,i){const n=Object(Me["effectScope"])();{const i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>fe(t)):n.run(()=>Ce(t));if(null==i)throw le(Ie.UNEXPECTED_ERROR);return[n,i]}}function ti(t){{const e=Object(Me["inject"])(t.isCE?_e:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw le(t.isCE?Ie.NOT_INSLALLED_WITH_PROVIDE:Ie.UNEXPECTED_ERROR);return e}}function ei(t,e){return Object(n["k"])(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function ii(t){return"composition"===t.mode?t.global:t.global.__composer}function ni(t,e,i=!1){let n=null;const M=e.root;let s=e.parent;while(null!=s){const e=t;if("composition"===t.mode)n=e.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const t=e.__getInstance(s);null!=t&&(n=t.__composer,i&&n&&!n[je]&&(n=null))}if(null!=n)break;if(M===s)break;s=s.parent}return n}function Mi(t,e,i){Object(Me["onMounted"])(()=>{0},e),Object(Me["onUnmounted"])(()=>{t.__deleteInstance(e)},e)}function si(t,e,i,M={}){const s="local"===e,a=Object(Me["shallowRef"])(null);if(s&&t.proxy&&!t.proxy.$options.i18n)throw le(Ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const r=!Object(n["i"])(M.inheritLocale)||M.inheritLocale,o=Object(Me["ref"])(s&&r?i.locale.value:Object(n["q"])(M.locale)?M.locale:Dt),u=Object(Me["ref"])(s&&r?i.fallbackLocale.value:Object(n["q"])(M.fallbackLocale)||Object(n["h"])(M.fallbackLocale)||Object(n["o"])(M.fallbackLocale)||!1===M.fallbackLocale?M.fallbackLocale:o.value),c=Object(Me["ref"])(Se(o.value,M)),g=Object(Me["ref"])(Object(n["o"])(M.datetimeFormats)?M.datetimeFormats:{[o.value]:{}}),I=Object(Me["ref"])(Object(n["o"])(M.numberFormats)?M.numberFormats:{[o.value]:{}}),l=s?i.missingWarn:!Object(n["i"])(M.missingWarn)&&!Object(n["p"])(M.missingWarn)||M.missingWarn,A=s?i.fallbackWarn:!Object(n["i"])(M.fallbackWarn)&&!Object(n["p"])(M.fallbackWarn)||M.fallbackWarn,D=s?i.fallbackRoot:!Object(n["i"])(M.fallbackRoot)||M.fallbackRoot,N=!!M.fallbackFormat,L=Object(n["l"])(M.missing)?M.missing:null,j=Object(n["l"])(M.postTranslation)?M.postTranslation:null,d=s?i.warnHtmlMessage:!Object(n["i"])(M.warnHtmlMessage)||M.warnHtmlMessage,S=!!M.escapeParameter,h=s?i.modifiers:Object(n["o"])(M.modifiers)?M.modifiers:{},w=M.pluralRules||s&&i.pluralRules;function y(){return[o.value,u.value,c.value,g.value,I.value]}const x=Object(Me["computed"])({get:()=>a.value?a.value.locale.value:o.value,set:t=>{a.value&&(a.value.locale.value=t),o.value=t}}),T=Object(Me["computed"])({get:()=>a.value?a.value.fallbackLocale.value:u.value,set:t=>{a.value&&(a.value.fallbackLocale.value=t),u.value=t}}),E=Object(Me["computed"])(()=>a.value?a.value.messages.value:c.value),m=Object(Me["computed"])(()=>g.value),b=Object(Me["computed"])(()=>I.value);function p(){return a.value?a.value.getPostTranslationHandler():j}function C(t){a.value&&a.value.setPostTranslationHandler(t)}function z(){return a.value?a.value.getMissingHandler():L}function f(t){a.value&&a.value.setMissingHandler(t)}function Y(t){return y(),t()}function v(...t){return a.value?Y(()=>Reflect.apply(a.value.t,null,[...t])):Y(()=>"")}function O(...t){return a.value?Reflect.apply(a.value.rt,null,[...t]):""}function U(...t){return a.value?Y(()=>Reflect.apply(a.value.d,null,[...t])):Y(()=>"")}function k(...t){return a.value?Y(()=>Reflect.apply(a.value.n,null,[...t])):Y(()=>"")}function W(t){return a.value?a.value.tm(t):{}}function G(t,e){return!!a.value&&a.value.te(t,e)}function J(t){return a.value?a.value.getLocaleMessage(t):{}}function Z(t,e){a.value&&(a.value.setLocaleMessage(t,e),c.value[t]=e)}function Q(t,e){a.value&&a.value.mergeLocaleMessage(t,e)}function P(t){return a.value?a.value.getDateTimeFormat(t):{}}function V(t,e){a.value&&(a.value.setDateTimeFormat(t,e),g.value[t]=e)}function B(t,e){a.value&&a.value.mergeDateTimeFormat(t,e)}function F(t){return a.value?a.value.getNumberFormat(t):{}}function R(t,e){a.value&&(a.value.setNumberFormat(t,e),I.value[t]=e)}function X(t,e){a.value&&a.value.mergeNumberFormat(t,e)}const H={get id(){return a.value?a.value.id:-1},locale:x,fallbackLocale:T,messages:E,datetimeFormats:m,numberFormats:b,get inheritLocale(){return a.value?a.value.inheritLocale:r},set inheritLocale(t){a.value&&(a.value.inheritLocale=t)},get availableLocales(){return a.value?a.value.availableLocales:Object.keys(c.value)},get modifiers(){return a.value?a.value.modifiers:h},get pluralRules(){return a.value?a.value.pluralRules:w},get isGlobal(){return!!a.value&&a.value.isGlobal},get missingWarn(){return a.value?a.value.missingWarn:l},set missingWarn(t){a.value&&(a.value.missingWarn=t)},get fallbackWarn(){return a.value?a.value.fallbackWarn:A},set fallbackWarn(t){a.value&&(a.value.missingWarn=t)},get fallbackRoot(){return a.value?a.value.fallbackRoot:D},set fallbackRoot(t){a.value&&(a.value.fallbackRoot=t)},get fallbackFormat(){return a.value?a.value.fallbackFormat:N},set fallbackFormat(t){a.value&&(a.value.fallbackFormat=t)},get warnHtmlMessage(){return a.value?a.value.warnHtmlMessage:d},set warnHtmlMessage(t){a.value&&(a.value.warnHtmlMessage=t)},get escapeParameter(){return a.value?a.value.escapeParameter:S},set escapeParameter(t){a.value&&(a.value.escapeParameter=t)},t:v,getPostTranslationHandler:p,setPostTranslationHandler:C,getMissingHandler:z,setMissingHandler:f,rt:O,d:U,n:k,tm:W,te:G,getLocaleMessage:J,setLocaleMessage:Z,mergeLocaleMessage:Q,getDateTimeFormat:P,setDateTimeFormat:V,mergeDateTimeFormat:B,getNumberFormat:F,setNumberFormat:R,mergeNumberFormat:X};function _(t){t.locale.value=o.value,t.fallbackLocale.value=u.value,Object.keys(c.value).forEach(e=>{t.mergeLocaleMessage(e,c.value[e])}),Object.keys(g.value).forEach(e=>{t.mergeDateTimeFormat(e,g.value[e])}),Object.keys(I.value).forEach(e=>{t.mergeNumberFormat(e,I.value[e])}),t.escapeParameter=S,t.fallbackFormat=N,t.fallbackRoot=D,t.fallbackWarn=A,t.missingWarn=l,t.warnHtmlMessage=d}return Object(Me["onBeforeMount"])(()=>{if(null==t.proxy||null==t.proxy.$i18n)throw le(Ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const i=a.value=t.proxy.$i18n.__composer;"global"===e?(o.value=i.locale.value,u.value=i.fallbackLocale.value,c.value=i.messages.value,g.value=i.datetimeFormats.value,I.value=i.numberFormats.value):s&&_(i)}),H}const ai=["locale","fallbackLocale","availableLocales"],ri=["t","rt","d","n","tm"];function oi(t,e){const i=Object.create(null);ai.forEach(t=>{const n=Object.getOwnPropertyDescriptor(e,t);if(!n)throw le(Ie.UNEXPECTED_ERROR);const M=Object(Me["isRef"])(n.value)?{get(){return n.value.value},set(t){n.value.value=t}}:{get(){return n.get&&n.get()}};Object.defineProperty(i,t,M)}),t.config.globalProperties.$i18n=i,ri.forEach(i=>{const n=Object.getOwnPropertyDescriptor(e,i);if(!n||!n.value)throw le(Ie.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,"$"+i,n)})}if(ht(Ut),wt(F),yt(ut),ae(),__INTLIFY_PROD_DEVTOOLS__){const t=Object(n["e"])();t.__INTLIFY__=!0,nt(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},4840:function(t,e,i){var n=i("825a"),M=i("5087"),s=i("b622"),a=s("species");t.exports=function(t,e){var i,s=n(t).constructor;return void 0===s||void 0==(i=n(s)[a])?e:M(i)}},"485a":function(t,e,i){var n=i("da84"),M=i("c65b"),s=i("1626"),a=i("861d"),r=n.TypeError;t.exports=function(t,e){var i,n;if("string"===e&&s(i=t.toString)&&!a(n=M(i,t)))return n;if(s(i=t.valueOf)&&!a(n=M(i,t)))return n;if("string"!==e&&s(i=t.toString)&&!a(n=M(i,t)))return n;throw r("Can't convert object to primitive value")}},4930:function(t,e,i){var n=i("2d00"),M=i("d039");t.exports=!!Object.getOwnPropertySymbols&&!M((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"4a7b":function(t,e,i){"use strict";var n=i("c532");t.exports=function(t,e){e=e||{};var i={};function M(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function s(i){return n.isUndefined(e[i])?n.isUndefined(t[i])?void 0:M(void 0,t[i]):M(t[i],e[i])}function a(t){if(!n.isUndefined(e[t]))return M(void 0,e[t])}function r(i){return n.isUndefined(e[i])?n.isUndefined(t[i])?void 0:M(void 0,t[i]):M(void 0,e[i])}function o(i){return i in e?M(t[i],e[i]):i in t?M(void 0,t[i]):void 0}var u={url:a,method:a,data:a,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:o};return n.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||s,M=e(t);n.isUndefined(M)&&e!==o||(i[t]=M)})),i}},"4caa":function(t,e,i){var n=i("a919"),M=i("76dd"),s=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",u=a+r+o,c="["+u+"]",g=RegExp(c,"g");function I(t){return t=M(t),t&&t.replace(s,n).replace(g,"")}t.exports=I},"4d64":function(t,e,i){var n=i("fc6a"),M=i("23cb"),s=i("07fa"),a=function(t){return function(e,i,a){var r,o=n(e),u=s(o),c=M(a,u);if(t&&i!=i){while(u>c)if(r=o[c++],r!=r)return!0}else for(;u>c;c++)if((t||c in o)&&o[c]===i)return t||c||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"4dae":function(t,e,i){var n=i("da84"),M=i("23cb"),s=i("07fa"),a=i("8418"),r=n.Array,o=Math.max;t.exports=function(t,e,i){for(var n=s(t),u=M(e,n),c=M(void 0===i?n:i,n),g=r(o(c-u,0)),I=0;u<c;u++,I++)a(g,I,t[u]);return g.length=I,g}},"4de4":function(t,e,i){"use strict";var n=i("23e7"),M=i("b727").filter,s=i("1dde"),a=s("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return M(this,t,arguments.length>1?arguments[1]:void 0)}})},"4f60":function(t,e,i){"use strict";var n=i("7ded");i.d(e,"a",(function(){return n["a"]}));var M="firebase",s="9.6.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n["a"].registerVersion(M,s,"app-compat")},5087:function(t,e,i){var n=i("da84"),M=i("68ee"),s=i("0d51"),a=n.TypeError;t.exports=function(t){if(M(t))return t;throw a(s(t)+" is not a constructor")}},"50c4":function(t,e,i){var n=i("5926"),M=Math.min;t.exports=function(t){return t>0?M(n(t),9007199254740991):0}},5270:function(t,e,i){"use strict";var n=i("c532"),M=i("c401"),s=i("2e67"),a=i("2444"),r=i("7a77");function o(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new r("canceled")}t.exports=function(t){o(t),t.headers=t.headers||{},t.data=M.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||a.adapter;return e(t).then((function(e){return o(t),e.data=M.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(o(t),e&&e.response&&(e.response.data=M.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5319:function(t,e,i){"use strict";var n=i("2ba4"),M=i("c65b"),s=i("e330"),a=i("d784"),r=i("d039"),o=i("825a"),u=i("1626"),c=i("5926"),g=i("50c4"),I=i("577e"),l=i("1d80"),A=i("8aa5"),D=i("dc4a"),N=i("0cb2"),L=i("14c3"),j=i("b622"),d=j("replace"),S=Math.max,h=Math.min,w=s([].concat),y=s([].push),x=s("".indexOf),T=s("".slice),E=function(t){return void 0===t?t:String(t)},m=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,i){var s=b?"$":"$0";return[function(t,i){var n=l(this),s=void 0==t?void 0:D(t,d);return s?M(s,t,n,i):M(e,I(n),t,i)},function(t,M){var a=o(this),r=I(t);if("string"==typeof M&&-1===x(M,s)&&-1===x(M,"$<")){var l=i(e,a,r,M);if(l.done)return l.value}var D=u(M);D||(M=I(M));var j=a.global;if(j){var d=a.unicode;a.lastIndex=0}var m=[];while(1){var b=L(a,r);if(null===b)break;if(y(m,b),!j)break;var p=I(b[0]);""===p&&(a.lastIndex=A(r,g(a.lastIndex),d))}for(var C="",z=0,f=0;f<m.length;f++){b=m[f];for(var Y=I(b[0]),v=S(h(c(b.index),r.length),0),O=[],U=1;U<b.length;U++)y(O,E(b[U]));var k=b.groups;if(D){var W=w([Y],O,v,r);void 0!==k&&y(W,k);var G=I(n(M,void 0,W))}else G=N(Y,r,v,O,k,M);v>=z&&(C+=T(r,z,v)+G,z=v+Y.length)}return C+T(r,z)}]}),!p||!m||b)},5502:function(t,e,i){"use strict";i.d(e,"a",(function(){return H})),i.d(e,"b",(function(){return tt})),i.d(e,"c",(function(){return K})),i.d(e,"d",(function(){return $}));var n=i("7a23"),M=i("3f4e"),s="store";function a(t,e){Object.keys(t).forEach((function(i){return e(t[i],i)}))}function r(t){return null!==t&&"object"===typeof t}function o(t){return t&&"function"===typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function c(t,e){return function(){return t(e)}}function g(t,e,i){return e.indexOf(t)<0&&(i&&i.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function I(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var i=t.state;A(t,i,[],t._modules.root,!0),l(t,i,e)}function l(t,e,i){var M=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,r={};a(s,(function(e,i){r[i]=c(e,t),Object.defineProperty(t.getters,i,{get:function(){return r[i]()},enumerable:!0})})),t._state=Object(n["reactive"])({data:e}),t.strict&&S(t),M&&i&&t._withCommit((function(){M.data=null}))}function A(t,e,i,n,M){var s=!i.length,a=t._modules.getNamespace(i);if(n.namespaced&&(t._modulesNamespaceMap[a]&&console.error("[vuex] duplicate namespace "+a+" for the namespaced module "+i.join("/")),t._modulesNamespaceMap[a]=n),!s&&!M){var r=h(e,i.slice(0,-1)),o=i[i.length-1];t._withCommit((function(){o in r&&console.warn('[vuex] state field "'+o+'" was overridden by a module with the same name at "'+i.join(".")+'"'),r[o]=n.state}))}var u=n.context=D(t,a,i);n.forEachMutation((function(e,i){var n=a+i;L(t,n,e,u)})),n.forEachAction((function(e,i){var n=e.root?i:a+i,M=e.handler||e;j(t,n,M,u)})),n.forEachGetter((function(e,i){var n=a+i;d(t,n,e,u)})),n.forEachChild((function(n,s){A(t,e,i.concat(s),n,M)}))}function D(t,e,i){var n=""===e,M={dispatch:n?t.dispatch:function(i,n,M){var s=w(i,n,M),a=s.payload,r=s.options,o=s.type;if(r&&r.root||(o=e+o,t._actions[o]))return t.dispatch(o,a);console.error("[vuex] unknown local action type: "+s.type+", global type: "+o)},commit:n?t.commit:function(i,n,M){var s=w(i,n,M),a=s.payload,r=s.options,o=s.type;r&&r.root||(o=e+o,t._mutations[o])?t.commit(o,a,r):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+o)}};return Object.defineProperties(M,{getters:{get:n?function(){return t.getters}:function(){return N(t,e)}},state:{get:function(){return h(t.state,i)}}}),M}function N(t,e){if(!t._makeLocalGettersCache[e]){var i={},n=e.length;Object.keys(t.getters).forEach((function(M){if(M.slice(0,n)===e){var s=M.slice(n);Object.defineProperty(i,s,{get:function(){return t.getters[M]},enumerable:!0})}})),t._makeLocalGettersCache[e]=i}return t._makeLocalGettersCache[e]}function L(t,e,i,n){var M=t._mutations[e]||(t._mutations[e]=[]);M.push((function(e){i.call(t,n.state,e)}))}function j(t,e,i,n){var M=t._actions[e]||(t._actions[e]=[]);M.push((function(e){var M=i.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return o(M)||(M=Promise.resolve(M)),t._devtoolHook?M.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):M}))}function d(t,e,i,n){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return i(n.state,n.getters,t.state,t.getters)}}function S(t){Object(n["watch"])((function(){return t._state.data}),(function(){u(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function h(t,e){return e.reduce((function(t,e){return t[e]}),t)}function w(t,e,i){return r(t)&&t.type&&(i=e,e=t,t=t.type),u("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:i}}var y="vuex bindings",x="vuex:mutations",T="vuex:actions",E="vuex",m=0;function b(t,e){Object(M["a"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[y]},(function(i){i.addTimelineLayer({id:x,label:"Vuex Mutations",color:p}),i.addTimelineLayer({id:T,label:"Vuex Actions",color:p}),i.addInspector({id:E,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),i.on.getInspectorTree((function(i){if(i.app===t&&i.inspectorId===E)if(i.filter){var n=[];O(n,e._modules.root,i.filter,""),i.rootNodes=n}else i.rootNodes=[v(e._modules.root,"")]})),i.on.getInspectorState((function(i){if(i.app===t&&i.inspectorId===E){var n=i.nodeId;N(e,n),i.state=U(W(e._modules,n),"root"===n?e.getters:e._makeLocalGettersCache,n)}})),i.on.editInspectorState((function(i){if(i.app===t&&i.inspectorId===E){var n=i.nodeId,M=i.path;"root"!==n&&(M=n.split("/").filter(Boolean).concat(M)),e._withCommit((function(){i.set(e._state.data,M,i.state.value)}))}})),e.subscribe((function(t,e){var n={};t.payload&&(n.payload=t.payload),n.state=e,i.notifyComponentUpdate(),i.sendInspectorTree(E),i.sendInspectorState(E),i.addTimelineEvent({layerId:x,event:{time:Date.now(),title:t.type,data:n}})})),e.subscribeAction({before:function(t,e){var n={};t.payload&&(n.payload=t.payload),t._id=m++,t._time=Date.now(),n.state=e,i.addTimelineEvent({layerId:T,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:n}})},after:function(t,e){var n={},M=Date.now()-t._time;n.duration={_custom:{type:"duration",display:M+"ms",tooltip:"Action duration",value:M}},t.payload&&(n.payload=t.payload),n.state=e,i.addTimelineEvent({layerId:T,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:n}})}})}))}var p=8702998,C=6710886,z=16777215,f={label:"namespaced",textColor:z,backgroundColor:C};function Y(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function v(t,e){return{id:e||"root",label:Y(e),tags:t.namespaced?[f]:[],children:Object.keys(t._children).map((function(i){return v(t._children[i],e+i+"/")}))}}function O(t,e,i,n){n.includes(i)&&t.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:e.namespaced?[f]:[]}),Object.keys(e._children).forEach((function(M){O(t,e._children[M],i,n+M+"/")}))}function U(t,e,i){e="root"===i?e:e[i];var n=Object.keys(e),M={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(n.length){var s=k(e);M.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?Y(t):t,editable:!1,value:G((function(){return s[t]}))}}))}return M}function k(t){var e={};return Object.keys(t).forEach((function(i){var n=i.split("/");if(n.length>1){var M=e,s=n.pop();n.forEach((function(t){M[t]||(M[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),M=M[t]._custom.value})),M[s]=G((function(){return t[i]}))}else e[i]=G((function(){return t[i]}))})),e}function W(t,e){var i=e.split("/").filter((function(t){return t}));return i.reduce((function(t,n,M){var s=t[n];if(!s)throw new Error('Missing module "'+n+'" for path "'+e+'".');return M===i.length-1?s:s._children}),"root"===e?t:t.root._children)}function G(t){try{return t()}catch(e){return e}}var J=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=("function"===typeof i?i():i)||{}},Z={namespaced:{configurable:!0}};Z.namespaced.get=function(){return!!this._rawModule.namespaced},J.prototype.addChild=function(t,e){this._children[t]=e},J.prototype.removeChild=function(t){delete this._children[t]},J.prototype.getChild=function(t){return this._children[t]},J.prototype.hasChild=function(t){return t in this._children},J.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},J.prototype.forEachChild=function(t){a(this._children,t)},J.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},J.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},J.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(J.prototype,Z);var Q=function(t){this.register([],t,!1)};function P(t,e,i){if(R(t,i),e.update(i),i.modules)for(var n in i.modules){if(!e.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");P(t.concat(n),e.getChild(n),i.modules[n])}}Q.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Q.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,i){return e=e.getChild(i),t+(e.namespaced?i+"/":"")}),"")},Q.prototype.update=function(t){P([],this.root,t)},Q.prototype.register=function(t,e,i){var n=this;void 0===i&&(i=!0),R(t,e);var M=new J(e,i);if(0===t.length)this.root=M;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],M)}e.modules&&a(e.modules,(function(e,M){n.register(t.concat(M),e,i)}))},Q.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1],n=e.getChild(i);n?n.runtime&&e.removeChild(i):console.warn("[vuex] trying to unregister module '"+i+"', which is not registered")},Q.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1];return!!e&&e.hasChild(i)};var V={assert:function(t){return"function"===typeof t},expected:"function"},B={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},F={getters:V,mutations:V,actions:B};function R(t,e){Object.keys(F).forEach((function(i){if(e[i]){var n=F[i];a(e[i],(function(e,M){u(n.assert(e),X(t,i,M,e,n.expected))}))}}))}function X(t,e,i,n,M){var s=e+" should be "+M+' but "'+e+"."+i+'"';return t.length>0&&(s+=' in module "'+t.join(".")+'"'),s+=" is "+JSON.stringify(n)+".",s}function H(t){return new _(t)}var _=function t(e){var i=this;void 0===e&&(e={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof t,"store must be called with the new operator.");var n=e.plugins;void 0===n&&(n=[]);var M=e.strict;void 0===M&&(M=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var a=this,r=this,o=r.dispatch,c=r.commit;this.dispatch=function(t,e){return o.call(a,t,e)},this.commit=function(t,e,i){return c.call(a,t,e,i)},this.strict=M;var g=this._modules.root.state;A(this,g,[],this._modules.root),l(this,g),n.forEach((function(t){return t(i)}))},q={state:{configurable:!0}};_.prototype.install=function(t,e){t.provide(e||s,this),t.config.globalProperties.$store=this;var i=void 0===this._devtools||this._devtools;i&&b(t,this)},q.state.get=function(){return this._state.data},q.state.set=function(t){u(!1,"use store.replaceState() to explicit replace store state.")},_.prototype.commit=function(t,e,i){var n=this,M=w(t,e,i),s=M.type,a=M.payload,r=M.options,o={type:s,payload:a},u=this._mutations[s];u?(this._withCommit((function(){u.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(o,n.state)})),r&&r.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},_.prototype.dispatch=function(t,e){var i=this,n=w(t,e),M=n.type,s=n.payload,a={type:M,payload:s},r=this._actions[M];if(r){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,i.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var o=r.length>1?Promise.all(r.map((function(t){return t(s)}))):r[0](s);return new Promise((function(t,e){o.then((function(e){try{i._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,i.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{i._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,i.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+M)},_.prototype.subscribe=function(t,e){return g(t,this._subscribers,e)},_.prototype.subscribeAction=function(t,e){var i="function"===typeof t?{before:t}:t;return g(i,this._actionSubscribers,e)},_.prototype.watch=function(t,e,i){var M=this;return u("function"===typeof t,"store.watch only accepts a function."),Object(n["watch"])((function(){return t(M.state,M.getters)}),e,Object.assign({},i))},_.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},_.prototype.registerModule=function(t,e,i){void 0===i&&(i={}),"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),u(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),A(this,this.state,t,this._modules.get(t),i.preserveState),l(this,this.state)},_.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var i=h(e.state,t.slice(0,-1));delete i[t[t.length-1]]})),I(this)},_.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},_.prototype.hotUpdate=function(t){this._modules.update(t),I(this,!0)},_.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(_.prototype,q);var $=nt((function(t,e){var i={};return it(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var n=e.key,M=e.val;i[n]=function(){var e=this.$store.state,i=this.$store.getters;if(t){var n=Mt(this.$store,"mapState",t);if(!n)return;e=n.context.state,i=n.context.getters}return"function"===typeof M?M.call(this,e,i):e[M]},i[n].vuex=!0})),i})),K=(nt((function(t,e){var i={};return it(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var n=e.key,M=e.val;i[n]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var n=this.$store.commit;if(t){var s=Mt(this.$store,"mapMutations",t);if(!s)return;n=s.context.commit}return"function"===typeof M?M.apply(this,[n].concat(e)):n.apply(this.$store,[M].concat(e))}})),i})),nt((function(t,e){var i={};return it(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var n=e.key,M=e.val;M=t+M,i[n]=function(){if(!t||Mt(this.$store,"mapGetters",t)){if(M in this.$store.getters)return this.$store.getters[M];console.error("[vuex] unknown getter: "+M)}},i[n].vuex=!0})),i}))),tt=nt((function(t,e){var i={};return it(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var n=e.key,M=e.val;i[n]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var n=this.$store.dispatch;if(t){var s=Mt(this.$store,"mapActions",t);if(!s)return;n=s.context.dispatch}return"function"===typeof M?M.apply(this,[n].concat(e)):n.apply(this.$store,[M].concat(e))}})),i}));function et(t){return it(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function it(t){return Array.isArray(t)||r(t)}function nt(t){return function(e,i){return"string"!==typeof e?(i=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,i)}}function Mt(t,e,i){var n=t._modulesNamespaceMap[i];return n||console.error("[vuex] module namespace not found in "+e+"(): "+i),n}},5530:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("b64b"),i("a4d3"),i("4de4"),i("d3b7"),i("e439"),i("159b"),i("dbb4");var n=i("ade3");function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?M(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},5692:function(t,e,i){var n=i("c430"),M=i("c6cd");(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.3",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,i){var n=i("d066"),M=i("e330"),s=i("241c"),a=i("7418"),r=i("825a"),o=M([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=s.f(r(t)),i=a.f;return i?o(e,i(t)):e}},"577e":function(t,e,i){var n=i("da84"),M=i("f5df"),s=n.String;t.exports=function(t){if("Symbol"===M(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},"585a":function(t,e,i){(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.exports=i}).call(this,i("c8ba"))},"589b":function(t,e,i){"use strict";i.r(e),i.d(e,"SDK_VERSION",(function(){return H})),i.d(e,"_DEFAULT_ENTRY_NAME",(function(){return U})),i.d(e,"_addComponent",(function(){return J})),i.d(e,"_addOrOverwriteComponent",(function(){return Z})),i.d(e,"_apps",(function(){return W})),i.d(e,"_clearComponents",(function(){return B})),i.d(e,"_components",(function(){return G})),i.d(e,"_getProvider",(function(){return P})),i.d(e,"_registerComponent",(function(){return Q})),i.d(e,"_removeServiceInstance",(function(){return V})),i.d(e,"deleteApp",(function(){return K})),i.d(e,"getApp",(function(){return q})),i.d(e,"getApps",(function(){return $})),i.d(e,"initializeApp",(function(){return _})),i.d(e,"onLog",(function(){return et})),i.d(e,"registerVersion",(function(){return tt})),i.d(e,"setLogLevel",(function(){return it}));var n=i("22e5"),M=i("e691"),s=i("1fd5");i.d(e,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(r(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function r(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const o="@firebase/app",u="0.7.15",c=new M["b"]("@firebase/app"),g="@firebase/app-compat",I="@firebase/analytics-compat",l="@firebase/analytics",A="@firebase/app-check-compat",D="@firebase/app-check",N="@firebase/auth",L="@firebase/auth-compat",j="@firebase/database",d="@firebase/database-compat",S="@firebase/functions",h="@firebase/functions-compat",w="@firebase/installations",y="@firebase/installations-compat",x="@firebase/messaging",T="@firebase/messaging-compat",E="@firebase/performance",m="@firebase/performance-compat",b="@firebase/remote-config",p="@firebase/remote-config-compat",C="@firebase/storage",z="@firebase/storage-compat",f="@firebase/firestore",Y="@firebase/firestore-compat",v="firebase",O="9.6.5",U="[DEFAULT]",k={[o]:"fire-core",[g]:"fire-core-compat",[l]:"fire-analytics",[I]:"fire-analytics-compat",[D]:"fire-app-check",[A]:"fire-app-check-compat",[N]:"fire-auth",[L]:"fire-auth-compat",[j]:"fire-rtdb",[d]:"fire-rtdb-compat",[S]:"fire-fn",[h]:"fire-fn-compat",[w]:"fire-iid",[y]:"fire-iid-compat",[x]:"fire-fcm",[T]:"fire-fcm-compat",[E]:"fire-perf",[m]:"fire-perf-compat",[b]:"fire-rc",[p]:"fire-rc-compat",[C]:"fire-gcs",[z]:"fire-gcs-compat",[f]:"fire-fst",[Y]:"fire-fst-compat","fire-js":"fire-js",[v]:"fire-js-all"},W=new Map,G=new Map;function J(t,e){try{t.container.addComponent(e)}catch(i){c.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function Z(t,e){t.container.addOrOverwriteComponent(e)}function Q(t){const e=t.name;if(G.has(e))return c.debug(`There were multiple attempts to register component ${e}.`),!1;G.set(e,t);for(const i of W.values())J(i,t);return!0}function P(t,e){return t.container.getProvider(e)}function V(t,e,i=U){P(t,e).clearInstance(i)}function B(){G.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},R=new s["b"]("app","Firebase",F);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new n["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw R.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=O;function _(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:U,automaticDataCollectionEnabled:!1},e),M=i.name;if("string"!==typeof M||!M)throw R.create("bad-app-name",{appName:String(M)});const a=W.get(M);if(a){if(Object(s["h"])(t,a.options)&&Object(s["h"])(i,a.config))return a;throw R.create("duplicate-app",{appName:M})}const r=new n["b"](M);for(const n of G.values())r.addComponent(n);const o=new X(t,i,r);return W.set(M,o),o}function q(t=U){const e=W.get(t);if(!e)throw R.create("no-app",{appName:t});return e}function $(){return Array.from(W.values())}async function K(t){const e=t.name;W.has(e)&&(W.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,i){var M;let s=null!==(M=k[t])&&void 0!==M?M:t;i&&(s+="-"+i);const a=s.match(/\s|\//),r=e.match(/\s|\//);if(a||r){const t=[`Unable to register library "${s}" with version "${e}":`];return a&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&r&&t.push("and"),r&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void c.warn(t.join(" "))}Q(new n["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw R.create("invalid-log-argument");Object(M["d"])(t,e)}function it(t){Object(M["c"])(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){Q(new n["a"]("platform-logger",t=>new a(t),"PRIVATE")),tt(o,u,t),tt(o,u,"esm2017"),tt("fire-js","")}nt("")},5926:function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?n:i)(e)}},5994:function(t,e,i){"use strict";(function(t){var e=i("7ded"),n=i("1f5a"),M=i("22e5"),s=i("1fd5"),a="@firebase/auth-compat",r="0.2.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=1e3;function u(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function c(){return"http:"===u()||"https:"===u()}function g(t=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function I(){return Object(s["u"])()||Object(s["t"])()}function l(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function A(t=Object(s["l"])()){return/Edge\/\d+/.test(t)}function D(t=Object(s["l"])()){return l()||A(t)}function N(){try{const t=self.localStorage,e=n["s"]();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!D()||Object(s["r"])()}catch(t){return L()&&Object(s["r"])()}return!1}function L(){return"undefined"!==typeof t&&"WorkerGlobalScope"in t&&"importScripts"in t}function j(){return(c()||Object(s["n"])()||g())&&!I()&&N()&&!L()}function d(){return g()&&"undefined"!==typeof document}async function S(){return!!d()&&new Promise(t=>{const e=setTimeout(()=>{t(!1)},o);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})})}function h(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={LOCAL:"local",NONE:"none",SESSION:"session"},y=n["p"],x="persistence";function T(t,e){y(Object.values(w).includes(e),t,"invalid-persistence-type"),Object(s["u"])()?y(e!==w.SESSION,t,"unsupported-persistence-type"):Object(s["t"])()?y(e===w.NONE,t,"unsupported-persistence-type"):L()?y(e===w.NONE||e===w.LOCAL&&Object(s["r"])(),t,"unsupported-persistence-type"):y(e===w.NONE||N(),t,"unsupported-persistence-type")}async function E(t){await t._initializationPromise;const e=b(),i=n["v"](x,t.config.apiKey,t.name);e&&e.setItem(i,t._getPersistence())}function m(t,e){const i=b();if(!i)return[];const M=n["v"](x,t,e),s=i.getItem(M);switch(s){case w.NONE:return[n["L"]];case w.LOCAL:return[n["M"],n["A"]];case w.SESSION:return[n["A"]];default:return[]}}function b(){var t;try{return(null===(t=h())||void 0===t?void 0:t.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=n["p"];class C{constructor(){this.browserResolver=n["t"](n["z"]),this.cordovaResolver=n["t"](n["E"]),this.underlyingResolver=null,this._redirectPersistence=n["A"],this._completeRedirectFn=n["u"]}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,i,n)}async _openRedirect(t,e,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,i,n)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return d()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return p(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await S();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return t.unwrap()}function f(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return O(t)}function v(t,e){var i;const M=null===(i=e.customData)||void 0===i?void 0:i._tokenResponse;if("auth/multi-factor-auth-required"===e.code){const i=e;i.resolver=new W(t,n["J"](t,e))}else if(M){const t=O(e),i=e;t&&(i.credential=t,i.tenantId=M.tenantId||void 0,i.email=M.email||void 0,i.phoneNumber=M.phoneNumber||void 0)}}function O(t){const{_tokenResponse:e}=t instanceof s["c"]?t.customData:t;if(!e)return null;if(!(t instanceof s["c"])&&"temporaryProof"in e&&"phoneNumber"in e)return n["i"].credentialFromResult(t);const i=e.providerId;if(!i||i===n["k"].PASSWORD)return null;let M;switch(i){case n["k"].GOOGLE:M=n["f"];break;case n["k"].FACEBOOK:M=n["d"];break;case n["k"].GITHUB:M=n["e"];break;case n["k"].TWITTER:M=n["o"];break;default:const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:r,nonce:o}=e;return s||a||t||r?r?i.startsWith("saml.")?n["m"]._create(i,r):n["g"]._fromParams({providerId:i,signInMethod:i,pendingToken:r,idToken:t,accessToken:s}):new n["h"](i).credential({idToken:t,accessToken:s,rawNonce:o}):null}return t instanceof s["c"]?M.credentialFromError(t):M.credentialFromResult(t)}function U(t,e){return e.catch(e=>{throw e instanceof s["c"]&&v(t,e),e}).then(t=>{const e=t.operationType,i=t.user;return{operationType:e,credential:Y(t),additionalUserInfo:n["I"](t),user:G.getOrCreate(i)}})}async function k(t,e){const i=await e;return{verificationId:i.verificationId,confirm:e=>U(t,i.confirm(e))}}class W{constructor(t,e){this.resolver=e,this.auth=f(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return U(z(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this._delegate=t,this.multiFactor=n["S"](t)}static getOrCreate(t){return G.USER_MAP.has(t)||G.USER_MAP.set(t,new G(t)),G.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return U(this.auth,n["O"](this._delegate,t))}async linkWithPhoneNumber(t,e){return k(this.auth,n["P"](this._delegate,t,e))}async linkWithPopup(t){return U(this.auth,n["Q"](this._delegate,t,C))}async linkWithRedirect(t){return await E(n["q"](this.auth)),n["R"](this._delegate,t,C)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return U(this.auth,n["T"](this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return k(this.auth,n["U"](this._delegate,t,e))}reauthenticateWithPopup(t){return U(this.auth,n["V"](this._delegate,t,C))}async reauthenticateWithRedirect(t){return await E(n["q"](this.auth)),n["W"](this._delegate,t,C)}sendEmailVerification(t){return n["X"](this._delegate,t)}async unlink(t){return await n["ib"](this._delegate,t),this}updateEmail(t){return n["jb"](this._delegate,t)}updatePassword(t){return n["kb"](this._delegate,t)}updatePhoneNumber(t){return n["lb"](this._delegate,t)}updateProfile(t){return n["mb"](this._delegate,t)}verifyBeforeUpdateEmail(t,e){return n["nb"](this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}G.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=n["p"];class Z{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:i}=t.options;J(i,"invalid-api-key",{appName:t.name}),J(i,"invalid-api-key",{appName:t.name});const M="undefined"!==typeof window?C:void 0;this._delegate=e.initialize({options:{persistence:P(i,t.name),popupRedirectResolver:M}}),this._delegate._updateErrorMap(n["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?G.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){n["D"](this._delegate,t,e)}applyActionCode(t){return n["x"](this._delegate,t)}checkActionCode(t){return n["B"](this._delegate,t)}confirmPasswordReset(t,e){return n["C"](this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return U(this._delegate,n["F"](this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return n["H"](this._delegate,t)}isSignInWithEmailLink(t){return n["N"](this._delegate,t)}async getRedirectResult(){J(j(),this._delegate,"operation-not-supported-in-this-environment");const t=await n["K"](this._delegate,C);return t?U(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){n["w"](this._delegate,t)}onAuthStateChanged(t,e,i){const{next:n,error:M,complete:s}=Q(t,e,i);return this._delegate.onAuthStateChanged(n,M,s)}onIdTokenChanged(t,e,i){const{next:n,error:M,complete:s}=Q(t,e,i);return this._delegate.onIdTokenChanged(n,M,s)}sendSignInLinkToEmail(t,e){return n["Z"](this._delegate,t,e)}sendPasswordResetEmail(t,e){return n["Y"](this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(T(this._delegate,t),t){case w.SESSION:e=n["A"];break;case w.LOCAL:const t=await n["t"](n["M"])._isAvailable();e=t?n["M"]:n["y"];break;case w.NONE:e=n["L"];break;default:return n["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return U(this._delegate,n["ab"](this._delegate))}signInWithCredential(t){return U(this._delegate,n["bb"](this._delegate,t))}signInWithCustomToken(t){return U(this._delegate,n["cb"](this._delegate,t))}signInWithEmailAndPassword(t,e){return U(this._delegate,n["db"](this._delegate,t,e))}signInWithEmailLink(t,e){return U(this._delegate,n["eb"](this._delegate,t,e))}signInWithPhoneNumber(t,e){return k(this._delegate,n["fb"](this._delegate,t,e))}async signInWithPopup(t){return J(j(),this._delegate,"operation-not-supported-in-this-environment"),U(this._delegate,n["gb"](this._delegate,t,C))}async signInWithRedirect(t){return J(j(),this._delegate,"operation-not-supported-in-this-environment"),await E(this._delegate),n["hb"](this._delegate,t,C)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return n["ob"](this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Q(t,e,i){let n=t;"function"!==typeof t&&({next:n,error:e,complete:i}=t);const M=n,s=t=>M(t&&G.getOrCreate(t));return{next:s,error:e,complete:i}}function P(t,e){const i=m(t,e);if("undefined"===typeof self||i.includes(n["M"])||i.push(n["M"]),"undefined"!==typeof window)for(const M of[n["y"],n["A"]])i.includes(M)||i.push(M);return i.includes(n["L"])||i.push(n["L"]),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Z.Persistence=w;class V{constructor(){this.providerId="phone",this._delegate=new n["i"](z(e["a"].auth()))}static credential(t,e){return n["i"].credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}V.PHONE_SIGN_IN_METHOD=n["i"].PHONE_SIGN_IN_METHOD,V.PROVIDER_ID=n["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B=n["p"];class F{constructor(t,i,M=e["a"].app()){var s;B(null===(s=M.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:M.name}),this._delegate=new n["l"](t,i,M.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="auth-compat";function X(t){t.INTERNAL.registerComponent(new M["a"](R,t=>{const e=t.getProvider("app-compat").getImmediate(),i=t.getProvider("auth");return new Z(e,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:n["a"].EMAIL_SIGNIN,PASSWORD_RESET:n["a"].PASSWORD_RESET,RECOVER_EMAIL:n["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:n["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:n["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:n["a"].VERIFY_EMAIL}},EmailAuthProvider:n["c"],FacebookAuthProvider:n["d"],GithubAuthProvider:n["e"],GoogleAuthProvider:n["f"],OAuthProvider:n["h"],SAMLAuthProvider:n["n"],PhoneAuthProvider:V,PhoneMultiFactorGenerator:n["j"],RecaptchaVerifier:F,TwitterAuthProvider:n["o"],Auth:Z,AuthCredential:n["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(a,r)}X(e["a"])}).call(this,i("c8ba"))},"59ed":function(t,e,i){var n=i("da84"),M=i("1626"),s=i("0d51"),a=n.TypeError;t.exports=function(t){if(M(t))return t;throw a(s(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5cce":function(t,e){t.exports={version:"0.25.0"}},"5e77":function(t,e,i){var n=i("83ab"),M=i("1a2d"),s=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,r=M(s,"name"),o=r&&"something"===function(){}.name,u=r&&(!n||n&&a(s,"name").configurable);t.exports={EXISTS:r,PROPER:o,CONFIGURABLE:u}},"5f02":function(t,e,i){"use strict";var n=i("c532");t.exports=function(t){return n.isObject(t)&&!0===t.isAxiosError}},"605d":function(t,e,i){var n=i("c6b6"),M=i("da84");t.exports="process"==n(M.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,i){"use strict";var n=i("83ab"),M=i("e330"),s=i("c65b"),a=i("d039"),r=i("df75"),o=i("7418"),u=i("d1e7"),c=i("7b0b"),g=i("44ad"),I=Object.assign,l=Object.defineProperty,A=M([].concat);t.exports=!I||a((function(){if(n&&1!==I({b:1},I(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},i=Symbol(),M="abcdefghijklmnopqrst";return t[i]=7,M.split("").forEach((function(t){e[t]=t})),7!=I({},t)[i]||r(I({},e)).join("")!=M}))?function(t,e){var i=c(t),M=arguments.length,a=1,I=o.f,l=u.f;while(M>a){var D,N=g(arguments[a++]),L=I?A(r(N),I(N)):r(N),j=L.length,d=0;while(j>d)D=L[d++],n&&!s(l,N,D)||(i[D]=N[D])}return i}:I},6547:function(t,e,i){var n=i("e330"),M=i("5926"),s=i("577e"),a=i("1d80"),r=n("".charAt),o=n("".charCodeAt),u=n("".slice),c=function(t){return function(e,i){var n,c,g=s(a(e)),I=M(i),l=g.length;return I<0||I>=l?t?"":void 0:(n=o(g,I),n<55296||n>56319||I+1===l||(c=o(g,I+1))<56320||c>57343?t?r(g,I):n:t?u(g,I,I+2):c-56320+(n-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(t,e,i){var n=i("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},6747:function(t,e){var i=Array.isArray;t.exports=i},"68ee":function(t,e,i){var n=i("e330"),M=i("d039"),s=i("1626"),a=i("f5df"),r=i("d066"),o=i("8925"),u=function(){},c=[],g=r("Reflect","construct"),I=/^\s*(?:class|function)\b/,l=n(I.exec),A=!I.exec(u),D=function(t){if(!s(t))return!1;try{return g(u,c,t),!0}catch(e){return!1}},N=function(t){if(!s(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return A||!!l(I,o(t))}catch(e){return!0}};N.sham=!0,t.exports=!g||M((function(){var t;return D(D.call)||!D(Object)||!D((function(){t=!0}))||t}))?N:D},"69f3":function(t,e,i){var n,M,s,a=i("7f9a"),r=i("da84"),o=i("e330"),u=i("861d"),c=i("9112"),g=i("1a2d"),I=i("c6cd"),l=i("f772"),A=i("d012"),D="Object already initialized",N=r.TypeError,L=r.WeakMap,j=function(t){return s(t)?M(t):n(t,{})},d=function(t){return function(e){var i;if(!u(e)||(i=M(e)).type!==t)throw N("Incompatible receiver, "+t+" required");return i}};if(a||I.state){var S=I.state||(I.state=new L),h=o(S.get),w=o(S.has),y=o(S.set);n=function(t,e){if(w(S,t))throw new N(D);return e.facade=t,y(S,t,e),e},M=function(t){return h(S,t)||{}},s=function(t){return w(S,t)}}else{var x=l("state");A[x]=!0,n=function(t,e){if(g(t,x))throw new N(D);return e.facade=t,c(t,x,e),e},M=function(t){return g(t,x)?t[x]:{}},s=function(t){return g(t,x)}}t.exports={set:n,get:M,has:s,enforce:j,getterFor:d}},"6ac0":function(t,e){function i(t,e,i,n){var M=-1,s=null==t?0:t.length;n&&s&&(i=t[++M]);while(++M<s)i=e(i,t[M],M,t);return i}t.exports=i},"6b0d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const i=t.__vccOpts||t;for(const[n,M]of e)i[n]=M;return i}},"6c02":function(t,e,i){"use strict";i.d(e,"a",(function(){return Kt})),i.d(e,"b",(function(){return V}));var n=i("7a23");i("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const M="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=t=>M?Symbol(t):"_vr_"+t,a=s("rvlm"),r=s("rvd"),o=s("r"),u=s("rl"),c=s("rvl"),g="undefined"!==typeof window;function I(t){return t.__esModule||M&&"Module"===t[Symbol.toStringTag]}const l=Object.assign;function A(t,e){const i={};for(const n in e){const M=e[n];i[n]=Array.isArray(M)?M.map(t):t(M)}return i}const D=()=>{};const N=/\/$/,L=t=>t.replace(N,"");function j(t,e,i="/"){let n,M={},s="",a="";const r=e.indexOf("?"),o=e.indexOf("#",r>-1?r:0);return r>-1&&(n=e.slice(0,r),s=e.slice(r+1,o>-1?o:e.length),M=t(s)),o>-1&&(n=n||e.slice(0,o),a=e.slice(o,e.length)),n=E(null!=n?n:e,i),{fullPath:n+(s&&"?")+s+a,path:n,query:M,hash:a}}function d(t,e){const i=e.query?t(e.query):"";return e.path+(i&&"?")+i+(e.hash||"")}function S(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function h(t,e,i){const n=e.matched.length-1,M=i.matched.length-1;return n>-1&&n===M&&w(e.matched[n],i.matched[M])&&y(e.params,i.params)&&t(e.query)===t(i.query)&&e.hash===i.hash}function w(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i in t)if(!x(t[i],e[i]))return!1;return!0}function x(t,e){return Array.isArray(t)?T(t,e):Array.isArray(e)?T(e,t):t===e}function T(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,i)=>t===e[i]):1===t.length&&t[0]===e}function E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const i=e.split("/"),n=t.split("/");let M,s,a=i.length-1;for(M=0;M<n.length;M++)if(s=n[M],1!==a&&"."!==s){if(".."!==s)break;a--}return i.slice(0,a).join("/")+"/"+n.slice(M-(M===n.length?1:0)).join("/")}var m,b;(function(t){t["pop"]="pop",t["push"]="push"})(m||(m={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(b||(b={}));function p(t){if(!t)if(g){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),L(t)}const C=/^[^#]+#/;function z(t,e){return t.replace(C,"#")+e}function f(t,e){const i=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-i.left-(e.left||0),top:n.top-i.top-(e.top||0)}}const Y=()=>({left:window.pageXOffset,top:window.pageYOffset});function v(t){let e;if("el"in t){const i=t.el,n="string"===typeof i&&i.startsWith("#");0;const M="string"===typeof i?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!M)return;e=f(M,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function O(t,e){const i=history.state?history.state.position-e:-1;return i+t}const U=new Map;function k(t,e){U.set(t,e)}function W(t){const e=U.get(t);return U.delete(t),e}let G=()=>location.protocol+"//"+location.host;function J(t,e){const{pathname:i,search:n,hash:M}=e,s=t.indexOf("#");if(s>-1){let e=M.includes(t.slice(s))?t.slice(s).length:1,i=M.slice(e);return"/"!==i[0]&&(i="/"+i),S(i,"")}const a=S(i,t);return a+n+M}function Z(t,e,i,n){let M=[],s=[],a=null;const r=({state:s})=>{const r=J(t,location),o=i.value,u=e.value;let c=0;if(s){if(i.value=r,e.value=s,a&&a===o)return void(a=null);c=u?s.position-u.position:0}else n(r);M.forEach(t=>{t(i.value,o,{delta:c,type:m.pop,direction:c?c>0?b.forward:b.back:b.unknown})})};function o(){a=i.value}function u(t){M.push(t);const e=()=>{const e=M.indexOf(t);e>-1&&M.splice(e,1)};return s.push(e),e}function c(){const{history:t}=window;t.state&&t.replaceState(l({},t.state,{scroll:Y()}),"")}function g(){for(const t of s)t();s=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",c),{pauseListeners:o,listen:u,destroy:g}}function Q(t,e,i,n=!1,M=!1){return{back:t,current:e,forward:i,replaced:n,position:window.history.length,scroll:M?Y():null}}function P(t){const{history:e,location:i}=window,n={value:J(t,i)},M={value:e.state};function s(n,s,a){const r=t.indexOf("#"),o=r>-1?(i.host&&document.querySelector("base")?t:t.slice(r))+n:G()+t+n;try{e[a?"replaceState":"pushState"](s,"",o),M.value=s}catch(u){console.error(u),i[a?"replace":"assign"](o)}}function a(t,i){const a=l({},e.state,Q(M.value.back,t,M.value.forward,!0),i,{position:M.value.position});s(t,a,!0),n.value=t}function r(t,i){const a=l({},M.value,e.state,{forward:t,scroll:Y()});s(a.current,a,!0);const r=l({},Q(n.value,t,null),{position:a.position+1},i);s(t,r,!1),n.value=t}return M.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:n,state:M,push:r,replace:a}}function V(t){t=p(t);const e=P(t),i=Z(t,e.state,e.location,e.replace);function n(t,e=!0){e||i.pauseListeners(),history.go(t)}const M=l({location:"",base:t,go:n,createHref:z.bind(null,t)},e,i);return Object.defineProperty(M,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(M,"state",{enumerable:!0,get:()=>e.state.value}),M}function B(t){return"string"===typeof t||t&&"object"===typeof t}function F(t){return"string"===typeof t||"symbol"===typeof t}const R={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X=s("nf");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function _(t,e){return l(new Error,{type:t,[X]:!0},e)}function q(t,e){return t instanceof Error&&X in t&&(null==e||!!(t.type&e))}const $="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const i=l({},K,e),n=[];let M=i.start?"^":"";const s=[];for(const c of t){const t=c.length?[]:[90];i.strict&&!c.length&&(M+="/");for(let e=0;e<c.length;e++){const n=c[e];let a=40+(i.sensitive?.25:0);if(0===n.type)e||(M+="/"),M+=n.value.replace(tt,"\\$&"),a+=40;else if(1===n.type){const{value:t,repeatable:i,optional:r,regexp:o}=n;s.push({name:t,repeatable:i,optional:r});const g=o||$;if(g!==$){a+=10;try{new RegExp(`(${g})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${g}): `+u.message)}}let I=i?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;e||(I=r&&c.length<2?`(?:/${I})`:"/"+I),r&&(I+="?"),M+=I,a+=20,r&&(a+=-8),i&&(a+=-20),".*"===g&&(a+=-50)}t.push(a)}n.push(t)}if(i.strict&&i.end){const t=n.length-1;n[t][n[t].length-1]+=.7000000000000001}i.strict||(M+="/?"),i.end?M+="$":i.strict&&(M+="(?:/|$)");const a=new RegExp(M,i.sensitive?"":"i");function r(t){const e=t.match(a),i={};if(!e)return null;for(let n=1;n<e.length;n++){const t=e[n]||"",M=s[n-1];i[M.name]=t&&M.repeatable?t.split("/"):t}return i}function o(e){let i="",n=!1;for(const M of t){n&&i.endsWith("/")||(i+="/"),n=!1;for(const t of M)if(0===t.type)i+=t.value;else if(1===t.type){const{value:s,repeatable:a,optional:r}=t,o=s in e?e[s]:"";if(Array.isArray(o)&&!a)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(o)?o.join("/"):o;if(!u){if(!r)throw new Error(`Missing required param "${s}"`);M.length<2&&(i.endsWith("/")?i=i.slice(0,-1):n=!0)}i+=u}}return i}return{re:a,score:n,keys:s,parse:r,stringify:o}}function it(t,e){let i=0;while(i<t.length&&i<e.length){const n=e[i]-t[i];if(n)return n;i++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function nt(t,e){let i=0;const n=t.score,M=e.score;while(i<n.length&&i<M.length){const t=it(n[i],M[i]);if(t)return t;i++}return M.length-n.length}const Mt={type:0,value:""},st=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[Mt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${i})/"${u}": ${t}`)}let i=0,n=i;const M=[];let s;function a(){s&&M.push(s),s=[]}let r,o=0,u="",c="";function g(){u&&(0===i?s.push({type:0,value:u}):1===i||2===i||3===i?(s.length>1&&("*"===r||"+"===r)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:"*"===r||"+"===r,optional:"*"===r||"?"===r})):e("Invalid state to consume buffer"),u="")}function I(){u+=r}while(o<t.length)if(r=t[o++],"\\"!==r||2===i)switch(i){case 0:"/"===r?(u&&g(),a()):":"===r?(g(),i=1):I();break;case 4:I(),i=n;break;case 1:"("===r?i=2:st.test(r)?I():(g(),i=0,"*"!==r&&"?"!==r&&"+"!==r&&o--);break;case 2:")"===r?"\\"==c[c.length-1]?c=c.slice(0,-1)+r:i=3:c+=r;break;case 3:g(),i=0,"*"!==r&&"?"!==r&&"+"!==r&&o--,c="";break;default:e("Unknown state");break}else n=i,i=4;return 2===i&&e(`Unfinished custom RegExp for param "${u}"`),g(),a(),M}function rt(t,e,i){const n=et(at(t.path),i);const M=l(n,{record:t,parent:e,children:[],alias:[]});return e&&!M.record.aliasOf===!e.record.aliasOf&&e.children.push(M),M}function ot(t,e){const i=[],n=new Map;function M(t){return n.get(t)}function s(t,i,n){const M=!n,r=ct(t);r.aliasOf=n&&n.record;const u=At(e,t),c=[r];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)c.push(l({},r,{components:n?n.record.components:r.components,path:t,aliasOf:n?n.record:r}))}let g,I;for(const e of c){const{path:c}=e;if(i&&"/"!==c[0]){const t=i.record.path,n="/"===t[t.length-1]?"":"/";e.path=i.record.path+(c&&n+c)}if(g=rt(e,i,u),n?n.alias.push(g):(I=I||g,I!==g&&I.alias.push(g),M&&t.name&&!It(g)&&a(t.name)),"children"in r){const t=r.children;for(let e=0;e<t.length;e++)s(t[e],g,n&&n.children[e])}n=n||g,o(g)}return I?()=>{a(I)}:D}function a(t){if(F(t)){const e=n.get(t);e&&(n.delete(t),i.splice(i.indexOf(e),1),e.children.forEach(a),e.alias.forEach(a))}else{const e=i.indexOf(t);e>-1&&(i.splice(e,1),t.record.name&&n.delete(t.record.name),t.children.forEach(a),t.alias.forEach(a))}}function r(){return i}function o(t){let e=0;while(e<i.length&&nt(t,i[e])>=0)e++;i.splice(e,0,t),t.record.name&&!It(t)&&n.set(t.record.name,t)}function u(t,e){let M,s,a,r={};if("name"in t&&t.name){if(M=n.get(t.name),!M)throw _(1,{location:t});a=M.record.name,r=l(ut(e.params,M.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),s=M.stringify(r)}else if("path"in t)s=t.path,M=i.find(t=>t.re.test(s)),M&&(r=M.parse(s),a=M.record.name);else{if(M=e.name?n.get(e.name):i.find(t=>t.re.test(e.path)),!M)throw _(1,{location:t,currentLocation:e});a=M.record.name,r=l({},e.params,t.params),s=M.stringify(r)}const o=[];let u=M;while(u)o.unshift(u.record),u=u.parent;return{name:a,path:s,params:r,matched:o,meta:lt(o)}}return e=At({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>s(t)),{addRoute:s,resolve:u,removeRoute:a,getRoutes:r,getRecordMatcher:M}}function ut(t,e){const i={};for(const n of e)n in t&&(i[n]=t[n]);return i}function ct(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function gt(t){const e={},i=t.props||!1;if("component"in t)e.default=i;else for(const n in t.components)e[n]="boolean"===typeof i?i:i[n];return e}function It(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce((t,e)=>l(t,e.meta),{})}function At(t,e){const i={};for(const n in t)i[n]=n in e?e[n]:t[n];return i}const Dt=/#/g,Nt=/&/g,Lt=/\//g,jt=/=/g,dt=/\?/g,St=/\+/g,ht=/%5B/g,wt=/%5D/g,yt=/%5E/g,xt=/%60/g,Tt=/%7B/g,Et=/%7C/g,mt=/%7D/g,bt=/%20/g;function pt(t){return encodeURI(""+t).replace(Et,"|").replace(ht,"[").replace(wt,"]")}function Ct(t){return pt(t).replace(Tt,"{").replace(mt,"}").replace(yt,"^")}function zt(t){return pt(t).replace(St,"%2B").replace(bt,"+").replace(Dt,"%23").replace(Nt,"%26").replace(xt,"`").replace(Tt,"{").replace(mt,"}").replace(yt,"^")}function ft(t){return zt(t).replace(jt,"%3D")}function Yt(t){return pt(t).replace(Dt,"%23").replace(dt,"%3F")}function vt(t){return null==t?"":Yt(t).replace(Lt,"%2F")}function Ot(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ut(t){const e={};if(""===t||"?"===t)return e;const i="?"===t[0],n=(i?t.slice(1):t).split("&");for(let M=0;M<n.length;++M){const t=n[M].replace(St," "),i=t.indexOf("="),s=Ot(i<0?t:t.slice(0,i)),a=i<0?null:Ot(t.slice(i+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(a)}else e[s]=a}return e}function kt(t){let e="";for(let i in t){const n=t[i];if(i=ft(i),null==n){void 0!==n&&(e+=(e.length?"&":"")+i);continue}const M=Array.isArray(n)?n.map(t=>t&&zt(t)):[n&&zt(n)];M.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+i,null!=t&&(e+="="+t))})}return e}function Wt(t){const e={};for(const i in t){const n=t[i];void 0!==n&&(e[i]=Array.isArray(n)?n.map(t=>null==t?null:""+t):null==n?n:""+n)}return e}function Gt(){let t=[];function e(e){return t.push(e),()=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)}}function i(){t=[]}return{add:e,list:()=>t,reset:i}}function Jt(t,e,i,n,M){const s=n&&(n.enterCallbacks[M]=n.enterCallbacks[M]||[]);return()=>new Promise((a,r)=>{const o=t=>{!1===t?r(_(4,{from:i,to:e})):t instanceof Error?r(t):B(t)?r(_(2,{from:e,to:t})):(s&&n.enterCallbacks[M]===s&&"function"===typeof t&&s.push(t),a())},u=t.call(n&&n.instances[M],e,i,o);let c=Promise.resolve(u);t.length<3&&(c=c.then(o)),c.catch(t=>r(t))})}function Zt(t,e,i,n){const M=[];for(const s of t)for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Qt(a)){const r=a.__vccOpts||a,o=r[e];o&&M.push(Jt(o,i,n,s,t))}else{let r=a();0,M.push(()=>r.then(M=>{if(!M)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=I(M)?M.default:M;s.components[t]=a;const r=a.__vccOpts||a,o=r[e];return o&&Jt(o,i,n,s,t)()}))}}return M}function Qt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Pt(t){const e=Object(n["inject"])(o),i=Object(n["inject"])(u),M=Object(n["computed"])(()=>e.resolve(Object(n["unref"])(t.to))),s=Object(n["computed"])(()=>{const{matched:t}=M.value,{length:e}=t,n=t[e-1],s=i.matched;if(!n||!s.length)return-1;const a=s.findIndex(w.bind(null,n));if(a>-1)return a;const r=Xt(t[e-2]);return e>1&&Xt(n)===r&&s[s.length-1].path!==r?s.findIndex(w.bind(null,t[e-2])):a}),a=Object(n["computed"])(()=>s.value>-1&&Rt(i.params,M.value.params)),r=Object(n["computed"])(()=>s.value>-1&&s.value===i.matched.length-1&&y(i.params,M.value.params));function c(i={}){return Ft(i)?e[Object(n["unref"])(t.replace)?"replace":"push"](Object(n["unref"])(t.to)).catch(D):Promise.resolve()}return{route:M,href:Object(n["computed"])(()=>M.value.href),isActive:a,isExactActive:r,navigate:c}}const Vt=Object(n["defineComponent"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pt,setup(t,{slots:e}){const i=Object(n["reactive"])(Pt(t)),{options:M}=Object(n["inject"])(o),s=Object(n["computed"])(()=>({[Ht(t.activeClass,M.linkActiveClass,"router-link-active")]:i.isActive,[Ht(t.exactActiveClass,M.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const M=e.default&&e.default(i);return t.custom?M:Object(n["h"])("a",{"aria-current":i.isExactActive?t.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:s.value},M)}}}),Bt=Vt;function Ft(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Rt(t,e){for(const i in e){const n=e[i],M=t[i];if("string"===typeof n){if(n!==M)return!1}else if(!Array.isArray(M)||M.length!==n.length||n.some((t,e)=>t!==M[e]))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ht=(t,e,i)=>null!=t?t:null!=e?e:i,_t=Object(n["defineComponent"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:i}){const M=Object(n["inject"])(c),s=Object(n["computed"])(()=>t.route||M.value),o=Object(n["inject"])(r,0),u=Object(n["computed"])(()=>s.value.matched[o]);Object(n["provide"])(r,o+1),Object(n["provide"])(a,u),Object(n["provide"])(c,s);const g=Object(n["ref"])();return Object(n["watch"])(()=>[g.value,u.value,t.name],([t,e,i],[n,M,s])=>{e&&(e.instances[i]=t,M&&M!==e&&t&&t===n&&(e.leaveGuards.size||(e.leaveGuards=M.leaveGuards),e.updateGuards.size||(e.updateGuards=M.updateGuards))),!t||!e||M&&w(e,M)&&n||(e.enterCallbacks[i]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const M=s.value,a=u.value,r=a&&a.components[t.name],o=t.name;if(!r)return qt(i.default,{Component:r,route:M});const c=a.props[t.name],I=c?!0===c?M.params:"function"===typeof c?c(M):c:null,A=t=>{t.component.isUnmounted&&(a.instances[o]=null)},D=Object(n["h"])(r,l({},I,e,{onVnodeUnmounted:A,ref:g}));return qt(i.default,{Component:D,route:M})||D}}});function qt(t,e){if(!t)return null;const i=t(e);return 1===i.length?i[0]:i}const $t=_t;function Kt(t){const e=ot(t.routes,t),i=t.parseQuery||Ut,M=t.stringifyQuery||kt,s=t.history;const a=Gt(),r=Gt(),I=Gt(),N=Object(n["shallowRef"])(R);let L=R;g&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const S=A.bind(null,t=>""+t),w=A.bind(null,vt),y=A.bind(null,Ot);function x(t,i){let n,M;return F(t)?(n=e.getRecordMatcher(t),M=i):M=t,e.addRoute(M,n)}function T(t){const i=e.getRecordMatcher(t);i&&e.removeRoute(i)}function E(){return e.getRoutes().map(t=>t.record)}function b(t){return!!e.getRecordMatcher(t)}function p(t,n){if(n=l({},n||N.value),"string"===typeof t){const M=j(i,t,n.path),a=e.resolve({path:M.path},n),r=s.createHref(M.fullPath);return l(M,a,{params:y(a.params),hash:Ot(M.hash),redirectedFrom:void 0,href:r})}let a;if("path"in t)a=l({},t,{path:j(i,t.path,n.path).path});else{const e=l({},t.params);for(const t in e)null==e[t]&&delete e[t];a=l({},t,{params:w(t.params)}),n.params=w(n.params)}const r=e.resolve(a,n),o=t.hash||"";r.params=S(y(r.params));const u=d(M,l({},t,{hash:Ct(o),path:r.path})),c=s.createHref(u);return l({fullPath:u,hash:o,query:M===kt?Wt(t.query):t.query||{}},r,{redirectedFrom:void 0,href:c})}function C(t){return"string"===typeof t?j(i,t,N.value.path):l({},t)}function z(t,e){if(L!==t)return _(8,{from:e,to:t})}function f(t){return J(t)}function U(t){return f(l(C(t),{replace:!0}))}function G(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:i}=e;let n="function"===typeof i?i(t):i;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=C(n):{path:n},n.params={}),l({query:t.query,hash:t.hash,params:t.params},n)}}function J(t,e){const i=L=p(t),n=N.value,s=t.state,a=t.force,r=!0===t.replace,o=G(i);if(o)return J(l(C(o),{state:s,force:a,replace:r}),e||i);const u=i;let c;return u.redirectedFrom=e,!a&&h(M,n,i)&&(c=_(16,{to:u,from:n}),nt(n,n,!0,!1)),(c?Promise.resolve(c):Q(u,n)).catch(t=>q(t)?t:tt(t,u,n)).then(t=>{if(t){if(q(t,2))return J(l(C(t.to),{state:s,force:a,replace:r}),e||u)}else t=V(u,n,!0,r,s);return P(u,n,t),t})}function Z(t,e){const i=z(t,e);return i?Promise.reject(i):Promise.resolve()}function Q(t,e){let i;const[n,M,s]=ee(t,e);i=Zt(n.reverse(),"beforeRouteLeave",t,e);for(const a of n)a.leaveGuards.forEach(n=>{i.push(Jt(n,t,e))});const o=Z.bind(null,t,e);return i.push(o),te(i).then(()=>{i=[];for(const n of a.list())i.push(Jt(n,t,e));return i.push(o),te(i)}).then(()=>{i=Zt(M,"beforeRouteUpdate",t,e);for(const n of M)n.updateGuards.forEach(n=>{i.push(Jt(n,t,e))});return i.push(o),te(i)}).then(()=>{i=[];for(const n of t.matched)if(n.beforeEnter&&!e.matched.includes(n))if(Array.isArray(n.beforeEnter))for(const M of n.beforeEnter)i.push(Jt(M,t,e));else i.push(Jt(n.beforeEnter,t,e));return i.push(o),te(i)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),i=Zt(s,"beforeRouteEnter",t,e),i.push(o),te(i))).then(()=>{i=[];for(const n of r.list())i.push(Jt(n,t,e));return i.push(o),te(i)}).catch(t=>q(t,8)?t:Promise.reject(t))}function P(t,e,i){for(const n of I.list())n(t,e,i)}function V(t,e,i,n,M){const a=z(t,e);if(a)return a;const r=e===R,o=g?history.state:{};i&&(n||r?s.replace(t.fullPath,l({scroll:r&&o&&o.scroll},M)):s.push(t.fullPath,M)),N.value=t,nt(t,e,i,r),it()}let B;function X(){B=s.listen((t,e,i)=>{const n=p(t),M=G(n);if(M)return void J(l(M,{replace:!0}),n).catch(D);L=n;const a=N.value;g&&k(O(a.fullPath,i.delta),Y()),Q(n,a).catch(t=>q(t,12)?t:q(t,2)?(J(t.to,n).then(t=>{q(t,20)&&!i.delta&&i.type===m.pop&&s.go(-1,!1)}).catch(D),Promise.reject()):(i.delta&&s.go(-i.delta,!1),tt(t,n,a))).then(t=>{t=t||V(n,a,!1),t&&(i.delta?s.go(-i.delta,!1):i.type===m.pop&&q(t,20)&&s.go(-1,!1)),P(n,a,t)}).catch(D)})}let H,$=Gt(),K=Gt();function tt(t,e,i){it(t);const n=K.list();return n.length?n.forEach(n=>n(t,e,i)):console.error(t),Promise.reject(t)}function et(){return H&&N.value!==R?Promise.resolve():new Promise((t,e)=>{$.add([t,e])})}function it(t){H||(H=!0,X(),$.list().forEach(([e,i])=>t?i(t):e()),$.reset())}function nt(e,i,M,s){const{scrollBehavior:a}=t;if(!g||!a)return Promise.resolve();const r=!M&&W(O(e.fullPath,0))||(s||!M)&&history.state&&history.state.scroll||null;return Object(n["nextTick"])().then(()=>a(e,i,r)).then(t=>t&&v(t)).catch(t=>tt(t,e,i))}const Mt=t=>s.go(t);let st;const at=new Set,rt={currentRoute:N,addRoute:x,removeRoute:T,hasRoute:b,getRoutes:E,resolve:p,options:t,push:f,replace:U,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:a.add,beforeResolve:r.add,afterEach:I.add,onError:K.add,isReady:et,install(t){const e=this;t.component("RouterLink",Bt),t.component("RouterView",$t),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(n["unref"])(N)}),g&&!st&&N.value===R&&(st=!0,f(s.location).catch(t=>{0}));const i={};for(const s in R)i[s]=Object(n["computed"])(()=>N.value[s]);t.provide(o,e),t.provide(u,Object(n["reactive"])(i)),t.provide(c,N);const M=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(L=R,B&&B(),N.value=R,st=!1,H=!1),M()}}};return rt}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const i=[],n=[],M=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const s=e.matched[a];s&&(t.matched.find(t=>w(t,s))?n.push(s):i.push(s));const r=t.matched[a];r&&(e.matched.find(t=>w(t,r))||M.push(r))}return[i,n,M]}},"6da8":function(t,e){function i(t){return t.split("")}t.exports=i},"6eeb":function(t,e,i){var n=i("da84"),M=i("1626"),s=i("1a2d"),a=i("9112"),r=i("ce4e"),o=i("8925"),u=i("69f3"),c=i("5e77").CONFIGURABLE,g=u.get,I=u.enforce,l=String(String).split("String");(t.exports=function(t,e,i,o){var u,g=!!o&&!!o.unsafe,A=!!o&&!!o.enumerable,D=!!o&&!!o.noTargetGet,N=o&&void 0!==o.name?o.name:e;M(i)&&("Symbol("===String(N).slice(0,7)&&(N="["+String(N).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(i,"name")||c&&i.name!==N)&&a(i,"name",N),u=I(i),u.source||(u.source=l.join("string"==typeof N?N:""))),t!==n?(g?!D&&t[e]&&(A=!0):delete t[e],A?t[e]=i:a(t,e,i)):A?t[e]=i:r(e,i)})(Function.prototype,"toString",(function(){return M(this)&&g(this).source||o(this)}))},7156:function(t,e,i){var n=i("1626"),M=i("861d"),s=i("d2bb");t.exports=function(t,e,i){var a,r;return s&&n(a=e.constructor)&&a!==i&&M(r=a.prototype)&&r!==i.prototype&&s(t,r),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,i){var n=i("428f"),M=i("1a2d"),s=i("e538"),a=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});M(e,t)||a(e,t,{value:s.f(t)})}},7559:function(t,e){var i=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function n(t){return t.match(i)||[]}t.exports=n},"76dd":function(t,e,i){var n=i("ce86");function M(t){return null==t?"":n(t)}t.exports=M},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,i){var n=i("cc12"),M=n("span").classList,s=M&&M.constructor&&M.constructor.prototype;t.exports=s===Object.prototype?void 0:s},7948:function(t,e){function i(t,e){var i=-1,n=null==t?0:t.length,M=Array(n);while(++i<n)M[i]=e(t[i],i,t);return M}t.exports=i},"795b":function(t,e,i){"use strict";
/*!
 * maska v1.5.0
 * (c) 2019-2021 Alexander Shabunevich
 * Released under the MIT License.
 */function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var o={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function u(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return c(e).length>1?g(e)(t,e,i,n):I(t,e,i,n)}function c(t){try{return JSON.parse(t)}catch(M){return[t]}}function g(t){var e=c(t).sort((function(t,e){return t.length-e.length}));return function(t,n,M){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.map((function(e){return I(t,e,M,!1)})),r=a.pop();for(var o in e)if(i(r,e[o],M))return I(t,e[o],M,s);return""};function i(t,e,i){for(var n in i)i[n].escape&&(e=e.replace(new RegExp(n+".{1}","g"),""));return e.split("").filter((function(t){return i[t]&&i[t].pattern})).length>=t.length}}function I(t,e,i){for(var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],M=0,s=0,a="",r="";M<e.length&&s<t.length;){var o=e[M],u=t[s],c=i[o];if(c&&c.pattern)c.pattern.test(u)&&(a+=l(u,c),M++,n&&e[M]&&(i[e[M]]?i[e[M]]&&i[e[M]].escape&&(a+=e[M+1],M+=2):(a+=e[M],M++))),s++;else if(c&&c.repeat){var g=i[e[M-1]];g&&!g.pattern.test(u)?M++:M--}else c&&c.escape&&(o=e[++M]),n&&(a+=o),u===o&&s++,M++}for(;n&&M<e.length;){var I=e[M];if(i[I]){r="";break}r+=I,M++}return a+r}function l(t,e){return e.transform&&(t=e.transform(t)),e.uppercase?t.toLocaleUpperCase():e.lowercase?t.toLocaleLowerCase():t}function A(t){return t instanceof HTMLInputElement?t:t.querySelector("input")||t}function D(t){return"[object String]"===Object.prototype.toString.call(t)}var N,L=function(){function t(e){var i=this,M=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,t),!e)throw new Error("Maska: no element for mask");if(null!=M.preprocessor&&"function"!=typeof M.preprocessor)throw new Error("Maska: preprocessor must be a function");if(M.tokens)for(var s in M.tokens)M.tokens[s]=r({},M.tokens[s]),M.tokens[s].pattern&&D(M.tokens[s].pattern)&&(M.tokens[s].pattern=new RegExp(M.tokens[s].pattern));this._opts={mask:M.mask,tokens:r(r({},o),M.tokens),preprocessor:M.preprocessor},this._el=D(e)?document.querySelectorAll(e):e.length?e:[e],this.inputEvent=function(t){return i.updateValue(t.target,t)},this.init()}var e,i,s;return e=t,(i=[{key:"init",value:function(){for(var t=this,e=function(e){var i=A(t._el[e]);!t._opts.mask||i.dataset.mask&&i.dataset.mask===t._opts.mask||(i.dataset.mask=t._opts.mask),setTimeout((function(){return t.updateValue(i)}),0),i.dataset.maskInited||(i.dataset.maskInited=!0,i.addEventListener("input",t.inputEvent),i.addEventListener("beforeinput",t.beforeInput))},i=0;i<this._el.length;i++)e(i)}},{key:"destroy",value:function(){for(var t=0;t<this._el.length;t++){var e=A(this._el[t]);e.removeEventListener("input",this.inputEvent),e.removeEventListener("beforeinput",this.beforeInput),delete e.dataset.mask,delete e.dataset.maskInited}}},{key:"updateValue",value:function(t,e){if(t&&t.type){var i=t.type.match(/^number$/i)&&t.validity.badInput;if(!t.value&&!i||!t.dataset.mask)return t.dataset.maskRawValue="",void this.dispatch("maska",t,e);var n=t.selectionEnd,M=t.value,s=M[n-1];t.dataset.maskRawValue=u(t.value,t.dataset.mask,this._opts.tokens,!1);var a=t.value;this._opts.preprocessor&&(a=this._opts.preprocessor(a)),t.value=u(a,t.dataset.mask,this._opts.tokens),e&&"insertText"===e.inputType&&n===M.length&&(n=t.value.length),function(t,e,i){for(;e&&e<t.value.length&&t.value.charAt(e-1)!==i;)e++;(t.type?t.type.match(/^(text|search|password|tel|url)$/i):!t.type)&&t===document.activeElement&&(t.setSelectionRange(e,e),setTimeout((function(){t.setSelectionRange(e,e)}),0))}(t,n,s),this.dispatch("maska",t,e),t.value!==M&&this.dispatch("input",t,e)}}},{key:"beforeInput",value:function(t){t&&t.target&&t.target.type&&t.target.type.match(/^number$/i)&&t.data&&isNaN(t.target.value+t.data)&&t.preventDefault()}},{key:"dispatch",value:function(t,e,i){e.dispatchEvent(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=document.createEvent("Event");return i.initEvent(t,!0,!0),e&&(i.inputType=e),i}(t,i&&i.inputType||null))}}])&&M(e.prototype,i),s&&M(e,s),t}(),j=(N=new WeakMap,function(t,e){e.value&&(N.has(t)&&!function(t){return!(D(t.value)&&t.value===t.oldValue||Array.isArray(t.value)&&JSON.stringify(t.value)===JSON.stringify(t.oldValue)||t.value&&t.value.mask&&t.oldValue&&t.oldValue.mask&&t.value.mask===t.oldValue.mask)}(e)||N.set(t,new L(t,function(t){var e={};return t.mask?(e.mask=Array.isArray(t.mask)?JSON.stringify(t.mask):t.mask,e.tokens=t.tokens?r({},t.tokens):{},e.preprocessor=t.preprocessor):e.mask=Array.isArray(t)?JSON.stringify(t):t,e}(e.value))))});function d(t){t.directive("maska",j)}"undefined"!=typeof window&&window.Vue&&window.Vue.use&&window.Vue.use(d),e["a"]=d},"7a23":function(t,e,i){"use strict";i.r(e),i.d(e,"EffectScope",(function(){return a})),i.d(e,"ReactiveEffect",(function(){return x})),i.d(e,"customRef",(function(){return ie})),i.d(e,"effect",(function(){return E})),i.d(e,"effectScope",(function(){return r})),i.d(e,"getCurrentScope",(function(){return u})),i.d(e,"isProxy",(function(){return Gt})),i.d(e,"isReactive",(function(){return Ut})),i.d(e,"isReadonly",(function(){return kt})),i.d(e,"isRef",(function(){return Ft})),i.d(e,"isShallow",(function(){return Wt})),i.d(e,"markRaw",(function(){return Zt})),i.d(e,"onScopeDispose",(function(){return c})),i.d(e,"proxyRefs",(function(){return te})),i.d(e,"reactive",(function(){return zt})),i.d(e,"readonly",(function(){return Yt})),i.d(e,"ref",(function(){return Rt})),i.d(e,"shallowReactive",(function(){return ft})),i.d(e,"shallowReadonly",(function(){return vt})),i.d(e,"shallowRef",(function(){return Xt})),i.d(e,"stop",(function(){return m})),i.d(e,"toRaw",(function(){return Jt})),i.d(e,"toRef",(function(){return se})),i.d(e,"toRefs",(function(){return ne})),i.d(e,"triggerRef",(function(){return qt})),i.d(e,"unref",(function(){return $t})),i.d(e,"camelize",(function(){return n["e"]})),i.d(e,"capitalize",(function(){return n["f"]})),i.d(e,"normalizeClass",(function(){return n["I"]})),i.d(e,"normalizeProps",(function(){return n["J"]})),i.d(e,"normalizeStyle",(function(){return n["K"]})),i.d(e,"toDisplayString",(function(){return n["M"]})),i.d(e,"toHandlerKey",(function(){return n["N"]})),i.d(e,"BaseTransition",(function(){return ki})),i.d(e,"Comment",(function(){return pM})),i.d(e,"Fragment",(function(){return mM})),i.d(e,"KeepAlive",(function(){return _i})),i.d(e,"Static",(function(){return CM})),i.d(e,"Suspense",(function(){return li})),i.d(e,"Teleport",(function(){return jM})),i.d(e,"Text",(function(){return bM})),i.d(e,"callWithAsyncErrorHandling",(function(){return Ne})),i.d(e,"callWithErrorHandling",(function(){return De})),i.d(e,"cloneVNode",(function(){return qM})),i.d(e,"compatUtils",(function(){return ra})),i.d(e,"computed",(function(){return Js})),i.d(e,"createBlock",(function(){return JM})),i.d(e,"createCommentVNode",(function(){return ts})),i.d(e,"createElementBlock",(function(){return GM})),i.d(e,"createElementVNode",(function(){return RM})),i.d(e,"createHydrationRenderer",(function(){return aM})),i.d(e,"createPropsRestProxy",(function(){return Hs})),i.d(e,"createRenderer",(function(){return sM})),i.d(e,"createSlots",(function(){return rs})),i.d(e,"createStaticVNode",(function(){return KM})),i.d(e,"createTextVNode",(function(){return $M})),i.d(e,"createVNode",(function(){return XM})),i.d(e,"defineAsyncComponent",(function(){return Fi})),i.d(e,"defineComponent",(function(){return Vi})),i.d(e,"defineEmits",(function(){return Qs})),i.d(e,"defineExpose",(function(){return Ps})),i.d(e,"defineProps",(function(){return Zs})),i.d(e,"devtools",(function(){return Ve})),i.d(e,"getCurrentInstance",(function(){return ds})),i.d(e,"getTransitionRawChildren",(function(){return Pi})),i.d(e,"guardReactiveProps",(function(){return _M})),i.d(e,"h",(function(){return qs})),i.d(e,"handleError",(function(){return Le})),i.d(e,"initCustomFormatter",(function(){return ta})),i.d(e,"inject",(function(){return xi})),i.d(e,"isMemoSame",(function(){return ia})),i.d(e,"isRuntimeOnly",(function(){return Cs})),i.d(e,"isVNode",(function(){return ZM})),i.d(e,"mergeDefaults",(function(){return Xs})),i.d(e,"mergeProps",(function(){return Ms})),i.d(e,"nextTick",(function(){return fe})),i.d(e,"onActivated",(function(){return $i})),i.d(e,"onBeforeMount",(function(){return rn})),i.d(e,"onBeforeUnmount",(function(){return gn})),i.d(e,"onBeforeUpdate",(function(){return un})),i.d(e,"onDeactivated",(function(){return Ki})),i.d(e,"onErrorCaptured",(function(){return Nn})),i.d(e,"onMounted",(function(){return on})),i.d(e,"onRenderTracked",(function(){return Dn})),i.d(e,"onRenderTriggered",(function(){return An})),i.d(e,"onServerPrefetch",(function(){return ln})),i.d(e,"onUnmounted",(function(){return In})),i.d(e,"onUpdated",(function(){return cn})),i.d(e,"openBlock",(function(){return YM})),i.d(e,"popScopeId",(function(){return ei})),i.d(e,"provide",(function(){return yi})),i.d(e,"pushScopeId",(function(){return ti})),i.d(e,"queuePostFlushCb",(function(){return Ge})),i.d(e,"registerRuntimeCompiler",(function(){return ps})),i.d(e,"renderList",(function(){return as})),i.d(e,"renderSlot",(function(){return os})),i.d(e,"resolveComponent",(function(){return hM})),i.d(e,"resolveDirective",(function(){return xM})),i.d(e,"resolveDynamicComponent",(function(){return yM})),i.d(e,"resolveFilter",(function(){return aa})),i.d(e,"resolveTransitionHooks",(function(){return Gi})),i.d(e,"setBlockTracking",(function(){return kM})),i.d(e,"setDevtoolsHook",(function(){return Re})),i.d(e,"setTransitionHooks",(function(){return Qi})),i.d(e,"ssrContextKey",(function(){return $s})),i.d(e,"ssrUtils",(function(){return sa})),i.d(e,"toHandlers",(function(){return cs})),i.d(e,"transformVNodeArgs",(function(){return PM})),i.d(e,"useAttrs",(function(){return Fs})),i.d(e,"useSSRContext",(function(){return Ks})),i.d(e,"useSlots",(function(){return Bs})),i.d(e,"useTransitionState",(function(){return vi})),i.d(e,"version",(function(){return na})),i.d(e,"warn",(function(){return ue})),i.d(e,"watch",(function(){return pi})),i.d(e,"watchEffect",(function(){return Ti})),i.d(e,"watchPostEffect",(function(){return Ei})),i.d(e,"watchSyncEffect",(function(){return mi})),i.d(e,"withAsyncContext",(function(){return _s})),i.d(e,"withCtx",(function(){return ni})),i.d(e,"withDefaults",(function(){return Vs})),i.d(e,"withDirectives",(function(){return Rn})),i.d(e,"withMemo",(function(){return ea})),i.d(e,"withScopeId",(function(){return ii})),i.d(e,"Transition",(function(){return Xa})),i.d(e,"TransitionGroup",(function(){return Ar})),i.d(e,"VueElement",(function(){return Za})),i.d(e,"createApp",(function(){return Hr})),i.d(e,"createSSRApp",(function(){return _r})),i.d(e,"defineCustomElement",(function(){return Wa})),i.d(e,"defineSSRCustomElement",(function(){return Ga})),i.d(e,"hydrate",(function(){return Xr})),i.d(e,"initDirectivesForSSR",(function(){return Kr})),i.d(e,"render",(function(){return Rr})),i.d(e,"useCssModule",(function(){return Qa})),i.d(e,"useCssVars",(function(){return Pa})),i.d(e,"vModelCheckbox",(function(){return xr})),i.d(e,"vModelDynamic",(function(){return zr})),i.d(e,"vModelRadio",(function(){return Er})),i.d(e,"vModelSelect",(function(){return mr})),i.d(e,"vModelText",(function(){return yr})),i.d(e,"vShow",(function(){return Gr})),i.d(e,"withKeys",(function(){return Wr})),i.d(e,"withModifiers",(function(){return Ur})),i.d(e,"compile",(function(){return to}));var n=i("9ff4");let M;const s=[];class a{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&M&&(this.parent=M,this.index=(M.scopes||(M.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(s.push(this),M=this)}off(){this.active&&(s.pop(),M=s[s.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function r(t){return new a(t)}function o(t,e){e=e||M,e&&e.active&&e.effects.push(t)}function u(){return M}function c(t){M&&M.cleanups.push(t)}const g=t=>{const e=new Set(t);return e.w=0,e.n=0,e},I=t=>(t.w&j)>0,l=t=>(t.n&j)>0,A=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=j},D=t=>{const{deps:e}=t;if(e.length){let i=0;for(let n=0;n<e.length;n++){const M=e[n];I(M)&&!l(M)?M.delete(t):e[i++]=M,M.w&=~j,M.n&=~j}e.length=i}},N=new WeakMap;let L=0,j=1;const d=30,S=[];let h;const w=Symbol(""),y=Symbol("");class x{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],o(this,i)}run(){if(!this.active)return this.fn();if(!S.length||!S.includes(this))try{return S.push(h=this),z(),j=1<<++L,L<=d?A(this):T(this),this.fn()}finally{L<=d&&D(this),j=1<<--L,f(),S.pop();const t=S.length;h=t>0?S[t-1]:void 0}}stop(){this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(t){const{deps:e}=t;if(e.length){for(let i=0;i<e.length;i++)e[i].delete(t);e.length=0}}function E(t,e){t.effect&&(t=t.effect.fn);const i=new x(t);e&&(Object(n["h"])(i,e),e.scope&&o(i,e.scope)),e&&e.lazy||i.run();const M=i.run.bind(i);return M.effect=i,M}function m(t){t.effect.stop()}let b=!0;const p=[];function C(){p.push(b),b=!1}function z(){p.push(b),b=!0}function f(){const t=p.pop();b=void 0===t||t}function Y(t,e,i){if(!v())return;let n=N.get(t);n||N.set(t,n=new Map);let M=n.get(i);M||n.set(i,M=g());const s=void 0;O(M,s)}function v(){return b&&void 0!==h}function O(t,e){let i=!1;L<=d?l(t)||(t.n|=j,i=!I(t)):i=!t.has(h),i&&(t.add(h),h.deps.push(t))}function U(t,e,i,M,s,a){const r=N.get(t);if(!r)return;let o=[];if("clear"===e)o=[...r.values()];else if("length"===i&&Object(n["o"])(t))r.forEach((t,e)=>{("length"===e||e>=M)&&o.push(t)});else switch(void 0!==i&&o.push(r.get(i)),e){case"add":Object(n["o"])(t)?Object(n["s"])(i)&&o.push(r.get("length")):(o.push(r.get(w)),Object(n["t"])(t)&&o.push(r.get(y)));break;case"delete":Object(n["o"])(t)||(o.push(r.get(w)),Object(n["t"])(t)&&o.push(r.get(y)));break;case"set":Object(n["t"])(t)&&o.push(r.get(w));break}if(1===o.length)o[0]&&k(o[0]);else{const t=[];for(const e of o)e&&t.push(...e);k(g(t))}}function k(t,e){for(const i of Object(n["o"])(t)?t:[...t])(i!==h||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const W=Object(n["H"])("__proto__,__v_isRef,__isVue"),G=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(n["E"])),J=F(),Z=F(!1,!0),Q=F(!0),P=F(!0,!0),V=B();function B(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const i=Jt(this);for(let e=0,M=this.length;e<M;e++)Y(i,"get",e+"");const n=i[e](...t);return-1===n||!1===n?i[e](...t.map(Jt)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){C();const i=Jt(this)[e].apply(this,t);return f(),i}}),t}function F(t=!1,e=!1){return function(i,M,s){if("__v_isReactive"===M)return!t;if("__v_isReadonly"===M)return t;if("__v_isShallow"===M)return e;if("__v_raw"===M&&s===(t?e?bt:mt:e?Et:Tt).get(i))return i;const a=Object(n["o"])(i);if(!t&&a&&Object(n["k"])(V,M))return Reflect.get(V,M,s);const r=Reflect.get(i,M,s);if(Object(n["E"])(M)?G.has(M):W(M))return r;if(t||Y(i,"get",M),e)return r;if(Ft(r)){const t=!a||!Object(n["s"])(M);return t?r.value:r}return Object(n["v"])(r)?t?Yt(r):zt(r):r}}const R=H(),X=H(!0);function H(t=!1){return function(e,i,M,s){let a=e[i];if(kt(a)&&Ft(a)&&!Ft(M))return!1;if(!t&&!kt(M)&&(Wt(M)||(M=Jt(M),a=Jt(a)),!Object(n["o"])(e)&&Ft(a)&&!Ft(M)))return a.value=M,!0;const r=Object(n["o"])(e)&&Object(n["s"])(i)?Number(i)<e.length:Object(n["k"])(e,i),o=Reflect.set(e,i,M,s);return e===Jt(s)&&(r?Object(n["j"])(M,a)&&U(e,"set",i,M,a):U(e,"add",i,M)),o}}function _(t,e){const i=Object(n["k"])(t,e),M=t[e],s=Reflect.deleteProperty(t,e);return s&&i&&U(t,"delete",e,void 0,M),s}function q(t,e){const i=Reflect.has(t,e);return Object(n["E"])(e)&&G.has(e)||Y(t,"has",e),i}function $(t){return Y(t,"iterate",Object(n["o"])(t)?"length":w),Reflect.ownKeys(t)}const K={get:J,set:R,deleteProperty:_,has:q,ownKeys:$},tt={get:Q,set(t,e){return!0},deleteProperty(t,e){return!0}},et=Object(n["h"])({},K,{get:Z,set:X}),it=Object(n["h"])({},tt,{get:P}),nt=t=>t,Mt=t=>Reflect.getPrototypeOf(t);function st(t,e,i=!1,n=!1){t=t["__v_raw"];const M=Jt(t),s=Jt(e);e!==s&&!i&&Y(M,"get",e),!i&&Y(M,"get",s);const{has:a}=Mt(M),r=n?nt:i?Pt:Qt;return a.call(M,e)?r(t.get(e)):a.call(M,s)?r(t.get(s)):void(t!==M&&t.get(e))}function at(t,e=!1){const i=this["__v_raw"],n=Jt(i),M=Jt(t);return t!==M&&!e&&Y(n,"has",t),!e&&Y(n,"has",M),t===M?i.has(t):i.has(t)||i.has(M)}function rt(t,e=!1){return t=t["__v_raw"],!e&&Y(Jt(t),"iterate",w),Reflect.get(t,"size",t)}function ot(t){t=Jt(t);const e=Jt(this),i=Mt(e),n=i.has.call(e,t);return n||(e.add(t),U(e,"add",t,t)),this}function ut(t,e){e=Jt(e);const i=Jt(this),{has:M,get:s}=Mt(i);let a=M.call(i,t);a||(t=Jt(t),a=M.call(i,t));const r=s.call(i,t);return i.set(t,e),a?Object(n["j"])(e,r)&&U(i,"set",t,e,r):U(i,"add",t,e),this}function ct(t){const e=Jt(this),{has:i,get:n}=Mt(e);let M=i.call(e,t);M||(t=Jt(t),M=i.call(e,t));const s=n?n.call(e,t):void 0,a=e.delete(t);return M&&U(e,"delete",t,void 0,s),a}function gt(){const t=Jt(this),e=0!==t.size,i=void 0,n=t.clear();return e&&U(t,"clear",void 0,void 0,i),n}function It(t,e){return function(i,n){const M=this,s=M["__v_raw"],a=Jt(s),r=e?nt:t?Pt:Qt;return!t&&Y(a,"iterate",w),s.forEach((t,e)=>i.call(n,r(t),r(e),M))}}function lt(t,e,i){return function(...M){const s=this["__v_raw"],a=Jt(s),r=Object(n["t"])(a),o="entries"===t||t===Symbol.iterator&&r,u="keys"===t&&r,c=s[t](...M),g=i?nt:e?Pt:Qt;return!e&&Y(a,"iterate",u?y:w),{next(){const{value:t,done:e}=c.next();return e?{value:t,done:e}:{value:o?[g(t[0]),g(t[1])]:g(t),done:e}},[Symbol.iterator](){return this}}}}function At(t){return function(...e){return"delete"!==t&&this}}function Dt(){const t={get(t){return st(this,t)},get size(){return rt(this)},has:at,add:ot,set:ut,delete:ct,clear:gt,forEach:It(!1,!1)},e={get(t){return st(this,t,!1,!0)},get size(){return rt(this)},has:at,add:ot,set:ut,delete:ct,clear:gt,forEach:It(!1,!0)},i={get(t){return st(this,t,!0)},get size(){return rt(this,!0)},has(t){return at.call(this,t,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:It(!0,!1)},n={get(t){return st(this,t,!0,!0)},get size(){return rt(this,!0)},has(t){return at.call(this,t,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:It(!0,!0)},M=["keys","values","entries",Symbol.iterator];return M.forEach(M=>{t[M]=lt(M,!1,!1),i[M]=lt(M,!0,!1),e[M]=lt(M,!1,!0),n[M]=lt(M,!0,!0)}),[t,i,e,n]}const[Nt,Lt,jt,dt]=Dt();function St(t,e){const i=e?t?dt:jt:t?Lt:Nt;return(e,M,s)=>"__v_isReactive"===M?!t:"__v_isReadonly"===M?t:"__v_raw"===M?e:Reflect.get(Object(n["k"])(i,M)&&M in e?i:e,M,s)}const ht={get:St(!1,!1)},wt={get:St(!1,!0)},yt={get:St(!0,!1)},xt={get:St(!0,!0)};const Tt=new WeakMap,Et=new WeakMap,mt=new WeakMap,bt=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ct(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt(Object(n["P"])(t))}function zt(t){return kt(t)?t:Ot(t,!1,K,ht,Tt)}function ft(t){return Ot(t,!1,et,wt,Et)}function Yt(t){return Ot(t,!0,tt,yt,mt)}function vt(t){return Ot(t,!0,it,xt,bt)}function Ot(t,e,i,M,s){if(!Object(n["v"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const a=s.get(t);if(a)return a;const r=Ct(t);if(0===r)return t;const o=new Proxy(t,2===r?M:i);return s.set(t,o),o}function Ut(t){return kt(t)?Ut(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function kt(t){return!(!t||!t["__v_isReadonly"])}function Wt(t){return!(!t||!t["__v_isShallow"])}function Gt(t){return Ut(t)||kt(t)}function Jt(t){const e=t&&t["__v_raw"];return e?Jt(e):t}function Zt(t){return Object(n["g"])(t,"__v_skip",!0),t}const Qt=t=>Object(n["v"])(t)?zt(t):t,Pt=t=>Object(n["v"])(t)?Yt(t):t;function Vt(t){v()&&(t=Jt(t),t.dep||(t.dep=g()),O(t.dep))}function Bt(t,e){t=Jt(t),t.dep&&k(t.dep)}function Ft(t){return Boolean(t&&!0===t.__v_isRef)}function Rt(t){return Ht(t,!1)}function Xt(t){return Ht(t,!0)}function Ht(t,e){return Ft(t)?t:new _t(t,e)}class _t{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Jt(t),this._value=e?t:Qt(t)}get value(){return Vt(this),this._value}set value(t){t=this.__v_isShallow?t:Jt(t),Object(n["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Qt(t),Bt(this,t))}}function qt(t){Bt(t,void 0)}function $t(t){return Ft(t)?t.value:t}const Kt={get:(t,e,i)=>$t(Reflect.get(t,e,i)),set:(t,e,i,n)=>{const M=t[e];return Ft(M)&&!Ft(i)?(M.value=i,!0):Reflect.set(t,e,i,n)}};function te(t){return Ut(t)?t:new Proxy(t,Kt)}class ee{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:e,set:i}=t(()=>Vt(this),()=>Bt(this));this._get=e,this._set=i}get value(){return this._get()}set value(t){this._set(t)}}function ie(t){return new ee(t)}function ne(t){const e=Object(n["o"])(t)?new Array(t.length):{};for(const i in t)e[i]=se(t,i);return e}class Me{constructor(t,e,i){this._object=t,this._key=e,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}}function se(t,e,i){const n=t[e];return Ft(n)?n:new Me(t,e,i)}class ae{constructor(t,e,i,n){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new x(t,()=>{this._dirty||(this._dirty=!0,Bt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=i}get value(){const t=Jt(this);return Vt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function re(t,e,i=!1){let M,s;const a=Object(n["p"])(t);a?(M=t,s=n["d"]):(M=t.get,s=t.set);const r=new ae(M,s,a||!s,i);return r}Promise.resolve();const oe=[];function ue(t,...e){C();const i=oe.length?oe[oe.length-1].component:null,n=i&&i.appContext.config.warnHandler,M=ce();if(n)De(n,i,11,[t+e.join(""),i&&i.proxy,M.map(({vnode:t})=>`at <${Ws(i,t.type)}>`).join("\n"),M]);else{const i=["[Vue warn]: "+t,...e];M.length&&i.push("\n",...ge(M)),console.warn(...i)}f()}function ce(){let t=oe[oe.length-1];if(!t)return[];const e=[];while(t){const i=e[0];i&&i.vnode===t?i.recurseCount++:e.push({vnode:t,recurseCount:0});const n=t.component&&t.component.parent;t=n&&n.vnode}return e}function ge(t){const e=[];return t.forEach((t,i)=>{e.push(...0===i?[]:["\n"],...Ie(t))}),e}function Ie({vnode:t,recurseCount:e}){const i=e>0?`... (${e} recursive calls)`:"",n=!!t.component&&null==t.component.parent,M=" at <"+Ws(t.component,t.type,n),s=">"+i;return t.props?[M,...le(t.props),s]:[M+s]}function le(t){const e=[],i=Object.keys(t);return i.slice(0,3).forEach(i=>{e.push(...Ae(i,t[i]))}),i.length>3&&e.push(" ..."),e}function Ae(t,e,i){return Object(n["D"])(e)?(e=JSON.stringify(e),i?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?i?e:[`${t}=${e}`]:Ft(e)?(e=Ae(t,Jt(e.value),!0),i?e:[t+"=Ref<",e,">"]):Object(n["p"])(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Jt(e),i?e:[t+"=",e])}function De(t,e,i,n){let M;try{M=n?t(...n):t()}catch(s){Le(s,e,i)}return M}function Ne(t,e,i,M){if(Object(n["p"])(t)){const s=De(t,e,i,M);return s&&Object(n["y"])(s)&&s.catch(t=>{Le(t,e,i)}),s}const s=[];for(let n=0;n<t.length;n++)s.push(Ne(t[n],e,i,M));return s}function Le(t,e,i,n=!0){const M=e?e.vnode:null;if(e){let n=e.parent;const M=e.proxy,s=i;while(n){const e=n.ec;if(e)for(let i=0;i<e.length;i++)if(!1===e[i](t,M,s))return;n=n.parent}const a=e.appContext.config.errorHandler;if(a)return void De(a,null,10,[t,M,s])}je(t,i,M,n)}function je(t,e,i,n=!0){console.error(t)}let de=!1,Se=!1;const he=[];let we=0;const ye=[];let xe=null,Te=0;const Ee=[];let me=null,be=0;const pe=Promise.resolve();let Ce=null,ze=null;function fe(t){const e=Ce||pe;return t?e.then(this?t.bind(this):t):e}function Ye(t){let e=we+1,i=he.length;while(e<i){const n=e+i>>>1,M=Qe(he[n]);M<t?e=n+1:i=n}return e}function ve(t){he.length&&he.includes(t,de&&t.allowRecurse?we+1:we)||t===ze||(null==t.id?he.push(t):he.splice(Ye(t.id),0,t),Oe())}function Oe(){de||Se||(Se=!0,Ce=pe.then(Pe))}function Ue(t){const e=he.indexOf(t);e>we&&he.splice(e,1)}function ke(t,e,i,M){Object(n["o"])(t)?i.push(...t):e&&e.includes(t,t.allowRecurse?M+1:M)||i.push(t),Oe()}function We(t){ke(t,xe,ye,Te)}function Ge(t){ke(t,me,Ee,be)}function Je(t,e=null){if(ye.length){for(ze=e,xe=[...new Set(ye)],ye.length=0,Te=0;Te<xe.length;Te++)xe[Te]();xe=null,Te=0,ze=null,Je(t,e)}}function Ze(t){if(Ee.length){const t=[...new Set(Ee)];if(Ee.length=0,me)return void me.push(...t);for(me=t,me.sort((t,e)=>Qe(t)-Qe(e)),be=0;be<me.length;be++)me[be]();me=null,be=0}}const Qe=t=>null==t.id?1/0:t.id;function Pe(t){Se=!1,de=!0,Je(t),he.sort((t,e)=>Qe(t)-Qe(e));n["d"];try{for(we=0;we<he.length;we++){const t=he[we];t&&!1!==t.active&&De(t,null,14)}}finally{we=0,he.length=0,Ze(t),de=!1,Ce=null,(he.length||ye.length||Ee.length)&&Pe(t)}}new Set;new Map;let Ve,Be=[],Fe=!1;function Re(t,e){var i,n;if(Ve=t,Ve)Ve.enabled=!0,Be.forEach(({event:t,args:e})=>Ve.emit(t,...e)),Be=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(n=null===(i=window.navigator)||void 0===i?void 0:i.userAgent)||void 0===n?void 0:n.includes("jsdom"))){const t=e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[];t.push(t=>{Re(t,e)}),setTimeout(()=>{Ve||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Fe=!0,Be=[])},3e3)}else Fe=!0,Be=[]}function Xe(t,e,...i){const M=t.vnode.props||n["b"];let s=i;const a=e.startsWith("update:"),r=a&&e.slice(7);if(r&&r in M){const t=("modelValue"===r?"model":r)+"Modifiers",{number:e,trim:a}=M[t]||n["b"];a?s=i.map(t=>t.trim()):e&&(s=i.map(n["O"]))}let o;let u=M[o=Object(n["N"])(e)]||M[o=Object(n["N"])(Object(n["e"])(e))];!u&&a&&(u=M[o=Object(n["N"])(Object(n["l"])(e))]),u&&Ne(u,t,6,s);const c=M[o+"Once"];if(c){if(t.emitted){if(t.emitted[o])return}else t.emitted={};t.emitted[o]=!0,Ne(c,t,6,s)}}function He(t,e,i=!1){const M=e.emitsCache,s=M.get(t);if(void 0!==s)return s;const a=t.emits;let r={},o=!1;if(!Object(n["p"])(t)){const M=t=>{const i=He(t,e,!0);i&&(o=!0,Object(n["h"])(r,i))};!i&&e.mixins.length&&e.mixins.forEach(M),t.extends&&M(t.extends),t.mixins&&t.mixins.forEach(M)}return a||o?(Object(n["o"])(a)?a.forEach(t=>r[t]=null):Object(n["h"])(r,a),M.set(t,r),r):(M.set(t,null),null)}function _e(t,e){return!(!t||!Object(n["w"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(n["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(n["k"])(t,Object(n["l"])(e))||Object(n["k"])(t,e))}let qe=null,$e=null;function Ke(t){const e=qe;return qe=t,$e=t&&t.type.__scopeId||null,e}function ti(t){$e=t}function ei(){$e=null}const ii=t=>ni;function ni(t,e=qe,i){if(!e)return t;if(t._n)return t;const n=(...i)=>{n._d&&kM(-1);const M=Ke(e),s=t(...i);return Ke(M),n._d&&kM(1),s};return n._n=!0,n._c=!0,n._d=!0,n}function Mi(t){const{type:e,vnode:i,proxy:M,withProxy:s,props:a,propsOptions:[r],slots:o,attrs:u,emit:c,render:g,renderCache:I,data:l,setupState:A,ctx:D,inheritAttrs:N}=t;let L,j;const d=Ke(t);try{if(4&i.shapeFlag){const t=s||M;L=es(g.call(t,t,I,a,A,l,D)),j=u}else{const t=e;0,L=es(t.length>1?t(a,{attrs:u,slots:o,emit:c}):t(a,null)),j=e.props?u:ai(u)}}catch(h){zM.length=0,Le(h,t,1),L=XM(pM)}let S=L;if(j&&!1!==N){const t=Object.keys(j),{shapeFlag:e}=S;t.length&&7&e&&(r&&t.some(n["u"])&&(j=ri(j,r)),S=qM(S,j))}return i.dirs&&(S.dirs=S.dirs?S.dirs.concat(i.dirs):i.dirs),i.transition&&(S.transition=i.transition),L=S,Ke(d),L}function si(t){let e;for(let i=0;i<t.length;i++){const n=t[i];if(!ZM(n))return;if(n.type!==pM||"v-if"===n.children){if(e)return;e=n}}return e}const ai=t=>{let e;for(const i in t)("class"===i||"style"===i||Object(n["w"])(i))&&((e||(e={}))[i]=t[i]);return e},ri=(t,e)=>{const i={};for(const M in t)Object(n["u"])(M)&&M.slice(9)in e||(i[M]=t[M]);return i};function oi(t,e,i){const{props:n,children:M,component:s}=t,{props:a,children:r,patchFlag:o}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(i&&o>=0))return!(!M&&!r||r&&r.$stable)||n!==a&&(n?!a||ui(n,a,u):!!a);if(1024&o)return!0;if(16&o)return n?ui(n,a,u):!!a;if(8&o){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const i=t[e];if(a[i]!==n[i]&&!_e(u,i))return!0}}return!1}function ui(t,e,i){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let M=0;M<n.length;M++){const s=n[M];if(e[s]!==t[s]&&!_e(i,s))return!0}return!1}function ci({vnode:t,parent:e},i){while(e&&e.subTree===t)(t=e.vnode).el=i,e=e.parent}const gi=t=>t.__isSuspense,Ii={name:"Suspense",__isSuspense:!0,process(t,e,i,n,M,s,a,r,o,u){null==t?Di(e,i,n,M,s,a,r,o,u):Ni(t,e,i,n,M,a,r,o,u)},hydrate:ji,create:Li,normalize:di},li=Ii;function Ai(t,e){const i=t.props&&t.props[e];Object(n["p"])(i)&&i()}function Di(t,e,i,n,M,s,a,r,o){const{p:u,o:{createElement:c}}=o,g=c("div"),I=t.suspense=Li(t,M,n,e,g,i,s,a,r,o);u(null,I.pendingBranch=t.ssContent,g,null,n,I,s,a),I.deps>0?(Ai(t,"onPending"),Ai(t,"onFallback"),u(null,t.ssFallback,e,i,n,null,s,a),wi(I,t.ssFallback)):I.resolve()}function Ni(t,e,i,n,M,s,a,r,{p:o,um:u,o:{createElement:c}}){const g=e.suspense=t.suspense;g.vnode=e,e.el=t.el;const I=e.ssContent,l=e.ssFallback,{activeBranch:A,pendingBranch:D,isInFallback:N,isHydrating:L}=g;if(D)g.pendingBranch=I,QM(I,D)?(o(D,I,g.hiddenContainer,null,M,g,s,a,r),g.deps<=0?g.resolve():N&&(o(A,l,i,n,M,null,s,a,r),wi(g,l))):(g.pendingId++,L?(g.isHydrating=!1,g.activeBranch=D):u(D,M,g),g.deps=0,g.effects.length=0,g.hiddenContainer=c("div"),N?(o(null,I,g.hiddenContainer,null,M,g,s,a,r),g.deps<=0?g.resolve():(o(A,l,i,n,M,null,s,a,r),wi(g,l))):A&&QM(I,A)?(o(A,I,i,n,M,g,s,a,r),g.resolve(!0)):(o(null,I,g.hiddenContainer,null,M,g,s,a,r),g.deps<=0&&g.resolve()));else if(A&&QM(I,A))o(A,I,i,n,M,g,s,a,r),wi(g,I);else if(Ai(e,"onPending"),g.pendingBranch=I,g.pendingId++,o(null,I,g.hiddenContainer,null,M,g,s,a,r),g.deps<=0)g.resolve();else{const{timeout:t,pendingId:e}=g;t>0?setTimeout(()=>{g.pendingId===e&&g.fallback(l)},t):0===t&&g.fallback(l)}}function Li(t,e,i,M,s,a,r,o,u,c,g=!1){const{p:I,m:l,um:A,n:D,o:{parentNode:N,remove:L}}=c,j=Object(n["O"])(t.props&&t.props.timeout),d={vnode:t,parent:e,parentComponent:i,isSVG:r,container:M,hiddenContainer:s,anchor:a,deps:0,pendingId:0,timeout:"number"===typeof j?j:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:g,isUnmounted:!1,effects:[],resolve(t=!1){const{vnode:e,activeBranch:i,pendingBranch:n,pendingId:M,effects:s,parentComponent:a,container:r}=d;if(d.isHydrating)d.isHydrating=!1;else if(!t){const t=i&&n.transition&&"out-in"===n.transition.mode;t&&(i.transition.afterLeave=()=>{M===d.pendingId&&l(n,r,e,0)});let{anchor:e}=d;i&&(e=D(i),A(i,a,d,!0)),t||l(n,r,e,0)}wi(d,n),d.pendingBranch=null,d.isInFallback=!1;let o=d.parent,u=!1;while(o){if(o.pendingBranch){o.effects.push(...s),u=!0;break}o=o.parent}u||Ge(s),d.effects=[],Ai(e,"onResolve")},fallback(t){if(!d.pendingBranch)return;const{vnode:e,activeBranch:i,parentComponent:n,container:M,isSVG:s}=d;Ai(e,"onFallback");const a=D(i),r=()=>{d.isInFallback&&(I(null,t,M,a,n,null,s,o,u),wi(d,t))},c=t.transition&&"out-in"===t.transition.mode;c&&(i.transition.afterLeave=r),d.isInFallback=!0,A(i,n,null,!0),c||r()},move(t,e,i){d.activeBranch&&l(d.activeBranch,t,e,i),d.container=t},next(){return d.activeBranch&&D(d.activeBranch)},registerDep(t,e){const i=!!d.pendingBranch;i&&d.deps++;const n=t.vnode.el;t.asyncDep.catch(e=>{Le(e,t,0)}).then(M=>{if(t.isUnmounted||d.isUnmounted||d.pendingId!==t.suspenseId)return;t.asyncResolved=!0;const{vnode:s}=t;bs(t,M,!1),n&&(s.el=n);const a=!n&&t.subTree.el;e(t,s,N(n||t.subTree.el),n?null:D(t.subTree),d,r,u),a&&L(a),ci(t,s.el),i&&0===--d.deps&&d.resolve()})},unmount(t,e){d.isUnmounted=!0,d.activeBranch&&A(d.activeBranch,i,t,e),d.pendingBranch&&A(d.pendingBranch,i,t,e)}};return d}function ji(t,e,i,n,M,s,a,r,o){const u=e.suspense=Li(e,n,i,t.parentNode,document.createElement("div"),null,M,s,a,r,!0),c=o(t,u.pendingBranch=e.ssContent,i,u,s,a);return 0===u.deps&&u.resolve(),c}function di(t){const{shapeFlag:e,children:i}=t,n=32&e;t.ssContent=Si(n?i.default:i),t.ssFallback=n?Si(i.fallback):XM(pM)}function Si(t){let e;if(Object(n["p"])(t)){const i=UM&&t._c;i&&(t._d=!1,YM()),t=t(),i&&(t._d=!0,e=fM,vM())}if(Object(n["o"])(t)){const e=si(t);0,t=e}return t=es(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(e=>e!==t)),t}function hi(t,e){e&&e.pendingBranch?Object(n["o"])(t)?e.effects.push(...t):e.effects.push(t):Ge(t)}function wi(t,e){t.activeBranch=e;const{vnode:i,parentComponent:n}=t,M=i.el=e.el;n&&n.subTree===i&&(n.vnode.el=M,ci(n,M))}function yi(t,e){if(js){let i=js.provides;const n=js.parent&&js.parent.provides;n===i&&(i=js.provides=Object.create(n)),i[t]=e}else 0}function xi(t,e,i=!1){const M=js||qe;if(M){const s=null==M.parent?M.vnode.appContext&&M.vnode.appContext.provides:M.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return i&&Object(n["p"])(e)?e.call(M.proxy):e}else 0}function Ti(t,e){return Ci(t,null,e)}function Ei(t,e){return Ci(t,null,{flush:"post"})}function mi(t,e){return Ci(t,null,{flush:"sync"})}const bi={};function pi(t,e,i){return Ci(t,e,i)}function Ci(t,e,{immediate:i,deep:M,flush:s,onTrack:a,onTrigger:r}=n["b"]){const o=js;let u,c,g=!1,I=!1;if(Ft(t)?(u=()=>t.value,g=Wt(t)):Ut(t)?(u=()=>t,M=!0):Object(n["o"])(t)?(I=!0,g=t.some(Ut),u=()=>t.map(t=>Ft(t)?t.value:Ut(t)?Yi(t):Object(n["p"])(t)?De(t,o,2):void 0)):u=Object(n["p"])(t)?e?()=>De(t,o,2):()=>{if(!o||!o.isUnmounted)return c&&c(),Ne(t,o,3,[l])}:n["d"],e&&M){const t=u;u=()=>Yi(t())}let l=t=>{c=L.onStop=()=>{De(t,o,4)}};if(Ts)return l=n["d"],e?i&&Ne(e,o,3,[u(),I?[]:void 0,l]):u(),n["d"];let A=I?[]:bi;const D=()=>{if(L.active)if(e){const t=L.run();(M||g||(I?t.some((t,e)=>Object(n["j"])(t,A[e])):Object(n["j"])(t,A)))&&(c&&c(),Ne(e,o,3,[t,A===bi?void 0:A,l]),A=t)}else L.run()};let N;D.allowRecurse=!!e,N="sync"===s?D:"post"===s?()=>MM(D,o&&o.suspense):()=>{!o||o.isMounted?We(D):D()};const L=new x(u,N);return e?i?D():A=L.run():"post"===s?MM(L.run.bind(L),o&&o.suspense):L.run(),()=>{L.stop(),o&&o.scope&&Object(n["L"])(o.scope.effects,L)}}function zi(t,e,i){const M=this.proxy,s=Object(n["D"])(t)?t.includes(".")?fi(M,t):()=>M[t]:t.bind(M,M);let a;Object(n["p"])(e)?a=e:(a=e.handler,i=e);const r=js;Ss(this);const o=Ci(s,a.bind(M),i);return r?Ss(r):hs(),o}function fi(t,e){const i=e.split(".");return()=>{let e=t;for(let t=0;t<i.length&&e;t++)e=e[i[t]];return e}}function Yi(t,e){if(!Object(n["v"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Ft(t))Yi(t.value,e);else if(Object(n["o"])(t))for(let i=0;i<t.length;i++)Yi(t[i],e);else if(Object(n["B"])(t)||Object(n["t"])(t))t.forEach(t=>{Yi(t,e)});else if(Object(n["x"])(t))for(const i in t)Yi(t[i],e);return t}function vi(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return on(()=>{t.isMounted=!0}),gn(()=>{t.isUnmounting=!0}),t}const Oi=[Function,Array],Ui={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oi,onEnter:Oi,onAfterEnter:Oi,onEnterCancelled:Oi,onBeforeLeave:Oi,onLeave:Oi,onAfterLeave:Oi,onLeaveCancelled:Oi,onBeforeAppear:Oi,onAppear:Oi,onAfterAppear:Oi,onAppearCancelled:Oi},setup(t,{slots:e}){const i=ds(),n=vi();let M;return()=>{const s=e.default&&Pi(e.default(),!0);if(!s||!s.length)return;const a=Jt(t),{mode:r}=a;const o=s[0];if(n.isLeaving)return Ji(o);const u=Zi(o);if(!u)return Ji(o);const c=Gi(u,a,n,i);Qi(u,c);const g=i.subTree,I=g&&Zi(g);let l=!1;const{getTransitionKey:A}=u.type;if(A){const t=A();void 0===M?M=t:t!==M&&(M=t,l=!0)}if(I&&I.type!==pM&&(!QM(u,I)||l)){const t=Gi(I,a,n,i);if(Qi(I,t),"out-in"===r)return n.isLeaving=!0,t.afterLeave=()=>{n.isLeaving=!1,i.update()},Ji(o);"in-out"===r&&u.type!==pM&&(t.delayLeave=(t,e,i)=>{const M=Wi(n,I);M[String(I.key)]=I,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=i})}return o}}},ki=Ui;function Wi(t,e){const{leavingVNodes:i}=t;let n=i.get(e.type);return n||(n=Object.create(null),i.set(e.type,n)),n}function Gi(t,e,i,n){const{appear:M,mode:s,persisted:a=!1,onBeforeEnter:r,onEnter:o,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:g,onLeave:I,onAfterLeave:l,onLeaveCancelled:A,onBeforeAppear:D,onAppear:N,onAfterAppear:L,onAppearCancelled:j}=e,d=String(t.key),S=Wi(i,t),h=(t,e)=>{t&&Ne(t,n,9,e)},w={mode:s,persisted:a,beforeEnter(e){let n=r;if(!i.isMounted){if(!M)return;n=D||r}e._leaveCb&&e._leaveCb(!0);const s=S[d];s&&QM(t,s)&&s.el._leaveCb&&s.el._leaveCb(),h(n,[e])},enter(t){let e=o,n=u,s=c;if(!i.isMounted){if(!M)return;e=N||o,n=L||u,s=j||c}let a=!1;const r=t._enterCb=e=>{a||(a=!0,h(e?s:n,[t]),w.delayedLeave&&w.delayedLeave(),t._enterCb=void 0)};e?(e(t,r),e.length<=1&&r()):r()},leave(e,n){const M=String(t.key);if(e._enterCb&&e._enterCb(!0),i.isUnmounting)return n();h(g,[e]);let s=!1;const a=e._leaveCb=i=>{s||(s=!0,n(),h(i?A:l,[e]),e._leaveCb=void 0,S[M]===t&&delete S[M])};S[M]=t,I?(I(e,a),I.length<=1&&a()):a()},clone(t){return Gi(t,e,i,n)}};return w}function Ji(t){if(Xi(t))return t=qM(t),t.children=null,t}function Zi(t){return Xi(t)?t.children?t.children[0]:void 0:t}function Qi(t,e){6&t.shapeFlag&&t.component?Qi(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Pi(t,e=!1){let i=[],n=0;for(let M=0;M<t.length;M++){const s=t[M];s.type===mM?(128&s.patchFlag&&n++,i=i.concat(Pi(s.children,e))):(e||s.type!==pM)&&i.push(s)}if(n>1)for(let M=0;M<i.length;M++)i[M].patchFlag=-2;return i}function Vi(t){return Object(n["p"])(t)?{setup:t,name:t.name}:t}const Bi=t=>!!t.type.__asyncLoader;function Fi(t){Object(n["p"])(t)&&(t={loader:t});const{loader:e,loadingComponent:i,errorComponent:M,delay:s=200,timeout:a,suspensible:r=!0,onError:o}=t;let u,c=null,g=0;const I=()=>(g++,c=null,l()),l=()=>{let t;return c||(t=c=e().catch(t=>{if(t=t instanceof Error?t:new Error(String(t)),o)return new Promise((e,i)=>{const n=()=>e(I()),M=()=>i(t);o(t,n,M,g+1)});throw t}).then(e=>t!==c&&c?c:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),u=e,e)))};return Vi({name:"AsyncComponentWrapper",__asyncLoader:l,get __asyncResolved(){return u},setup(){const t=js;if(u)return()=>Ri(u,t);const e=e=>{c=null,Le(e,t,13,!M)};if(r&&t.suspense||Ts)return l().then(e=>()=>Ri(e,t)).catch(t=>(e(t),()=>M?XM(M,{error:t}):null));const n=Rt(!1),o=Rt(),g=Rt(!!s);return s&&setTimeout(()=>{g.value=!1},s),null!=a&&setTimeout(()=>{if(!n.value&&!o.value){const t=new Error(`Async component timed out after ${a}ms.`);e(t),o.value=t}},a),l().then(()=>{n.value=!0,t.parent&&Xi(t.parent.vnode)&&ve(t.parent.update)}).catch(t=>{e(t),o.value=t}),()=>n.value&&u?Ri(u,t):o.value&&M?XM(M,{error:o.value}):i&&!g.value?XM(i):void 0}})}function Ri(t,{vnode:{ref:e,props:i,children:n}}){const M=XM(t,i,n);return M.ref=e,M}const Xi=t=>t.type.__isKeepAlive,Hi={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const i=ds(),M=i.ctx;if(!M.renderer)return e.default;const s=new Map,a=new Set;let r=null;const o=i.suspense,{renderer:{p:u,m:c,um:g,o:{createElement:I}}}=M,l=I("div");function A(t){nn(t),g(t,i,o,!0)}function D(t){s.forEach((e,i)=>{const n=ks(e.type);!n||t&&t(n)||N(i)})}function N(t){const e=s.get(t);r&&e.type===r.type?r&&nn(r):A(e),s.delete(t),a.delete(t)}M.activate=(t,e,i,M,s)=>{const a=t.component;c(t,e,i,0,o),u(a.vnode,t,e,i,a,o,M,t.slotScopeIds,s),MM(()=>{a.isDeactivated=!1,a.a&&Object(n["n"])(a.a);const e=t.props&&t.props.onVnodeMounted;e&&ss(e,a.parent,t)},o)},M.deactivate=t=>{const e=t.component;c(t,l,null,1,o),MM(()=>{e.da&&Object(n["n"])(e.da);const i=t.props&&t.props.onVnodeUnmounted;i&&ss(i,e.parent,t),e.isDeactivated=!0},o)},pi(()=>[t.include,t.exclude],([t,e])=>{t&&D(e=>qi(t,e)),e&&D(t=>!qi(e,t))},{flush:"post",deep:!0});let L=null;const j=()=>{null!=L&&s.set(L,Mn(i.subTree))};return on(j),cn(j),gn(()=>{s.forEach(t=>{const{subTree:e,suspense:n}=i,M=Mn(e);if(t.type!==M.type)A(t);else{nn(M);const t=M.component.da;t&&MM(t,n)}})}),()=>{if(L=null,!e.default)return null;const i=e.default(),n=i[0];if(i.length>1)return r=null,i;if(!ZM(n)||!(4&n.shapeFlag)&&!(128&n.shapeFlag))return r=null,n;let M=Mn(n);const o=M.type,u=ks(Bi(M)?M.type.__asyncResolved||{}:o),{include:c,exclude:g,max:I}=t;if(c&&(!u||!qi(c,u))||g&&u&&qi(g,u))return r=M,n;const l=null==M.key?o:M.key,A=s.get(l);return M.el&&(M=qM(M),128&n.shapeFlag&&(n.ssContent=M)),L=l,A?(M.el=A.el,M.component=A.component,M.transition&&Qi(M,M.transition),M.shapeFlag|=512,a.delete(l),a.add(l)):(a.add(l),I&&a.size>parseInt(I,10)&&N(a.values().next().value)),M.shapeFlag|=256,r=M,n}}},_i=Hi;function qi(t,e){return Object(n["o"])(t)?t.some(t=>qi(t,e)):Object(n["D"])(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function $i(t,e){tn(t,"a",e)}function Ki(t,e){tn(t,"da",e)}function tn(t,e,i=js){const n=t.__wdc||(t.__wdc=()=>{let e=i;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(sn(e,n,i),i){let t=i.parent;while(t&&t.parent)Xi(t.parent.vnode)&&en(n,e,i,t),t=t.parent}}function en(t,e,i,M){const s=sn(e,t,M,!0);In(()=>{Object(n["L"])(M[e],s)},i)}function nn(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Mn(t){return 128&t.shapeFlag?t.ssContent:t}function sn(t,e,i=js,n=!1){if(i){const M=i[t]||(i[t]=[]),s=e.__weh||(e.__weh=(...n)=>{if(i.isUnmounted)return;C(),Ss(i);const M=Ne(e,i,t,n);return hs(),f(),M});return n?M.unshift(s):M.push(s),s}}const an=t=>(e,i=js)=>(!Ts||"sp"===t)&&sn(t,e,i),rn=an("bm"),on=an("m"),un=an("bu"),cn=an("u"),gn=an("bum"),In=an("um"),ln=an("sp"),An=an("rtg"),Dn=an("rtc");function Nn(t,e=js){sn("ec",t,e)}let Ln=!0;function jn(t){const e=wn(t),i=t.proxy,M=t.ctx;Ln=!1,e.beforeCreate&&Sn(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:r,watch:o,provide:u,inject:c,created:g,beforeMount:I,mounted:l,beforeUpdate:A,updated:D,activated:N,deactivated:L,beforeDestroy:j,beforeUnmount:d,destroyed:S,unmounted:h,render:w,renderTracked:y,renderTriggered:x,errorCaptured:T,serverPrefetch:E,expose:m,inheritAttrs:b,components:p,directives:C,filters:z}=e,f=null;if(c&&dn(c,M,f,t.appContext.config.unwrapInjectedRef),r)for(const v in r){const t=r[v];Object(n["p"])(t)&&(M[v]=t.bind(i))}if(s){0;const e=s.call(i,i);0,Object(n["v"])(e)&&(t.data=zt(e))}if(Ln=!0,a)for(const v in a){const t=a[v],e=Object(n["p"])(t)?t.bind(i,i):Object(n["p"])(t.get)?t.get.bind(i,i):n["d"];0;const s=!Object(n["p"])(t)&&Object(n["p"])(t.set)?t.set.bind(i):n["d"],r=Js({get:e,set:s});Object.defineProperty(M,v,{enumerable:!0,configurable:!0,get:()=>r.value,set:t=>r.value=t})}if(o)for(const n in o)hn(o[n],M,i,n);if(u){const t=Object(n["p"])(u)?u.call(i):u;Reflect.ownKeys(t).forEach(e=>{yi(e,t[e])})}function Y(t,e){Object(n["o"])(e)?e.forEach(e=>t(e.bind(i))):e&&t(e.bind(i))}if(g&&Sn(g,t,"c"),Y(rn,I),Y(on,l),Y(un,A),Y(cn,D),Y($i,N),Y(Ki,L),Y(Nn,T),Y(Dn,y),Y(An,x),Y(gn,d),Y(In,h),Y(ln,E),Object(n["o"])(m))if(m.length){const e=t.exposed||(t.exposed={});m.forEach(t=>{Object.defineProperty(e,t,{get:()=>i[t],set:e=>i[t]=e})})}else t.exposed||(t.exposed={});w&&t.render===n["d"]&&(t.render=w),null!=b&&(t.inheritAttrs=b),p&&(t.components=p),C&&(t.directives=C)}function dn(t,e,i=n["d"],M=!1){Object(n["o"])(t)&&(t=mn(t));for(const s in t){const i=t[s];let a;a=Object(n["v"])(i)?"default"in i?xi(i.from||s,i.default,!0):xi(i.from||s):xi(i),Ft(a)&&M?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[s]=a}}function Sn(t,e,i){Ne(Object(n["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,i)}function hn(t,e,i,M){const s=M.includes(".")?fi(i,M):()=>i[M];if(Object(n["D"])(t)){const i=e[t];Object(n["p"])(i)&&pi(s,i)}else if(Object(n["p"])(t))pi(s,t.bind(i));else if(Object(n["v"])(t))if(Object(n["o"])(t))t.forEach(t=>hn(t,e,i,M));else{const M=Object(n["p"])(t.handler)?t.handler.bind(i):e[t.handler];Object(n["p"])(M)&&pi(s,M,t)}else 0}function wn(t){const e=t.type,{mixins:i,extends:n}=e,{mixins:M,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,r=s.get(e);let o;return r?o=r:M.length||i||n?(o={},M.length&&M.forEach(t=>yn(o,t,a,!0)),yn(o,e,a)):o=e,s.set(e,o),o}function yn(t,e,i,n=!1){const{mixins:M,extends:s}=e;s&&yn(t,s,i,!0),M&&M.forEach(e=>yn(t,e,i,!0));for(const a in e)if(n&&"expose"===a);else{const n=xn[a]||i&&i[a];t[a]=n?n(t[a],e[a]):e[a]}return t}const xn={data:Tn,props:pn,emits:pn,methods:pn,computed:pn,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:pn,directives:pn,watch:Cn,provide:Tn,inject:En};function Tn(t,e){return e?t?function(){return Object(n["h"])(Object(n["p"])(t)?t.call(this,this):t,Object(n["p"])(e)?e.call(this,this):e)}:e:t}function En(t,e){return pn(mn(t),mn(e))}function mn(t){if(Object(n["o"])(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function bn(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?Object(n["h"])(Object(n["h"])(Object.create(null),t),e):e}function Cn(t,e){if(!t)return e;if(!e)return t;const i=Object(n["h"])(Object.create(null),t);for(const n in e)i[n]=bn(t[n],e[n]);return i}function zn(t,e,i,M=!1){const s={},a={};Object(n["g"])(a,VM,1),t.propsDefaults=Object.create(null),Yn(t,e,s,a);for(const n in t.propsOptions[0])n in s||(s[n]=void 0);i?t.props=M?s:ft(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function fn(t,e,i,M){const{props:s,attrs:a,vnode:{patchFlag:r}}=t,o=Jt(s),[u]=t.propsOptions;let c=!1;if(!(M||r>0)||16&r){let M;Yn(t,e,s,a)&&(c=!0);for(const a in o)e&&(Object(n["k"])(e,a)||(M=Object(n["l"])(a))!==a&&Object(n["k"])(e,M))||(u?!i||void 0===i[a]&&void 0===i[M]||(s[a]=vn(u,o,a,void 0,t,!0)):delete s[a]);if(a!==o)for(const t in a)e&&Object(n["k"])(e,t)||(delete a[t],c=!0)}else if(8&r){const i=t.vnode.dynamicProps;for(let M=0;M<i.length;M++){let r=i[M];const g=e[r];if(u)if(Object(n["k"])(a,r))g!==a[r]&&(a[r]=g,c=!0);else{const e=Object(n["e"])(r);s[e]=vn(u,o,e,g,t,!1)}else g!==a[r]&&(a[r]=g,c=!0)}}c&&U(t,"set","$attrs")}function Yn(t,e,i,M){const[s,a]=t.propsOptions;let r,o=!1;if(e)for(let u in e){if(Object(n["z"])(u))continue;const c=e[u];let g;s&&Object(n["k"])(s,g=Object(n["e"])(u))?a&&a.includes(g)?(r||(r={}))[g]=c:i[g]=c:_e(t.emitsOptions,u)||u in M&&c===M[u]||(M[u]=c,o=!0)}if(a){const e=Jt(i),M=r||n["b"];for(let r=0;r<a.length;r++){const o=a[r];i[o]=vn(s,e,o,M[o],t,!Object(n["k"])(M,o))}}return o}function vn(t,e,i,M,s,a){const r=t[i];if(null!=r){const t=Object(n["k"])(r,"default");if(t&&void 0===M){const t=r.default;if(r.type!==Function&&Object(n["p"])(t)){const{propsDefaults:n}=s;i in n?M=n[i]:(Ss(s),M=n[i]=t.call(null,e),hs())}else M=t}r[0]&&(a&&!t?M=!1:!r[1]||""!==M&&M!==Object(n["l"])(i)||(M=!0))}return M}function On(t,e,i=!1){const M=e.propsCache,s=M.get(t);if(s)return s;const a=t.props,r={},o=[];let u=!1;if(!Object(n["p"])(t)){const M=t=>{u=!0;const[i,M]=On(t,e,!0);Object(n["h"])(r,i),M&&o.push(...M)};!i&&e.mixins.length&&e.mixins.forEach(M),t.extends&&M(t.extends),t.mixins&&t.mixins.forEach(M)}if(!a&&!u)return M.set(t,n["a"]),n["a"];if(Object(n["o"])(a))for(let g=0;g<a.length;g++){0;const t=Object(n["e"])(a[g]);Un(t)&&(r[t]=n["b"])}else if(a){0;for(const t in a){const e=Object(n["e"])(t);if(Un(e)){const i=a[t],M=r[e]=Object(n["o"])(i)||Object(n["p"])(i)?{type:i}:i;if(M){const t=Gn(Boolean,M.type),i=Gn(String,M.type);M[0]=t>-1,M[1]=i<0||t<i,(t>-1||Object(n["k"])(M,"default"))&&o.push(e)}}}}const c=[r,o];return M.set(t,c),c}function Un(t){return"$"!==t[0]}function kn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function Wn(t,e){return kn(t)===kn(e)}function Gn(t,e){return Object(n["o"])(e)?e.findIndex(e=>Wn(e,t)):Object(n["p"])(e)&&Wn(e,t)?0:-1}const Jn=t=>"_"===t[0]||"$stable"===t,Zn=t=>Object(n["o"])(t)?t.map(es):[es(t)],Qn=(t,e,i)=>{const n=ni((...t)=>Zn(e(...t)),i);return n._c=!1,n},Pn=(t,e,i)=>{const M=t._ctx;for(const s in t){if(Jn(s))continue;const i=t[s];if(Object(n["p"])(i))e[s]=Qn(s,i,M);else if(null!=i){0;const t=Zn(i);e[s]=()=>t}}},Vn=(t,e)=>{const i=Zn(e);t.slots.default=()=>i},Bn=(t,e)=>{if(32&t.vnode.shapeFlag){const i=e._;i?(t.slots=Jt(e),Object(n["g"])(e,"_",i)):Pn(e,t.slots={})}else t.slots={},e&&Vn(t,e);Object(n["g"])(t.slots,VM,1)},Fn=(t,e,i)=>{const{vnode:M,slots:s}=t;let a=!0,r=n["b"];if(32&M.shapeFlag){const t=e._;t?i&&1===t?a=!1:(Object(n["h"])(s,e),i||1!==t||delete s._):(a=!e.$stable,Pn(e,s)),r=e}else e&&(Vn(t,e),r={default:1});if(a)for(const n in s)Jn(n)||n in r||delete s[n]};function Rn(t,e){const i=qe;if(null===i)return t;const M=i.proxy,s=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[t,i,r,o=n["b"]]=e[a];Object(n["p"])(t)&&(t={mounted:t,updated:t}),t.deep&&Yi(i),s.push({dir:t,instance:M,value:i,oldValue:void 0,arg:r,modifiers:o})}return t}function Xn(t,e,i,n){const M=t.dirs,s=e&&e.dirs;for(let a=0;a<M.length;a++){const r=M[a];s&&(r.oldValue=s[a].value);let o=r.dir[n];o&&(C(),Ne(o,i,8,[t.el,r,t,e]),f())}}function Hn(){return{app:null,config:{isNativeTag:n["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _n=0;function qn(t,e){return function(i,M=null){null==M||Object(n["v"])(M)||(M=null);const s=Hn(),a=new Set;let r=!1;const o=s.app={_uid:_n++,_component:i,_props:M,_container:null,_context:s,_instance:null,version:na,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&Object(n["p"])(t.install)?(a.add(t),t.install(o,...e)):Object(n["p"])(t)&&(a.add(t),t(o,...e))),o},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),o},component(t,e){return e?(s.components[t]=e,o):s.components[t]},directive(t,e){return e?(s.directives[t]=e,o):s.directives[t]},mount(n,a,u){if(!r){const c=XM(i,M);return c.appContext=s,a&&e?e(c,n):t(c,n,u),r=!0,o._container=n,n.__vue_app__=o,vs(c.component)||c.component.proxy}},unmount(){r&&(t(null,o._container),delete o._container.__vue_app__)},provide(t,e){return s.provides[t]=e,o}};return o}}function $n(t,e,i,M,s=!1){if(Object(n["o"])(t))return void t.forEach((t,a)=>$n(t,e&&(Object(n["o"])(e)?e[a]:e),i,M,s));if(Bi(M)&&!s)return;const a=4&M.shapeFlag?vs(M.component)||M.component.proxy:M.el,r=s?null:a,{i:o,r:u}=t;const c=e&&e.r,g=o.refs===n["b"]?o.refs={}:o.refs,I=o.setupState;if(null!=c&&c!==u&&(Object(n["D"])(c)?(g[c]=null,Object(n["k"])(I,c)&&(I[c]=null)):Ft(c)&&(c.value=null)),Object(n["p"])(u))De(u,o,12,[r,g]);else{const e=Object(n["D"])(u),M=Ft(u);if(e||M){const M=()=>{if(t.f){const i=e?g[u]:u.value;s?Object(n["o"])(i)&&Object(n["L"])(i,a):Object(n["o"])(i)?i.includes(a)||i.push(a):e?g[u]=[a]:(u.value=[a],t.k&&(g[t.k]=u.value))}else e?(g[u]=r,Object(n["k"])(I,u)&&(I[u]=r)):Ft(u)&&(u.value=r,t.k&&(g[t.k]=r))};r?(M.id=-1,MM(M,i)):M()}else 0}}let Kn=!1;const tM=t=>/svg/.test(t.namespaceURI)&&"foreignObject"!==t.tagName,eM=t=>8===t.nodeType;function iM(t){const{mt:e,p:i,o:{patchProp:M,nextSibling:s,parentNode:a,remove:r,insert:o,createComment:u}}=t,c=(t,e)=>{if(!e.hasChildNodes())return i(null,t,e),void Ze();Kn=!1,g(e.firstChild,t,null,null,null),Ze(),Kn&&console.error("Hydration completed but contains mismatches.")},g=(i,n,M,r,o,u=!1)=>{const c=eM(i)&&"["===i.data,L=()=>D(i,n,M,r,o,c),{type:j,ref:d,shapeFlag:S}=n,h=i.nodeType;n.el=i;let w=null;switch(j){case bM:3!==h?w=L():(i.data!==n.children&&(Kn=!0,i.data=n.children),w=s(i));break;case pM:w=8!==h||c?L():s(i);break;case CM:if(1===h){w=i;const t=!n.children.length;for(let e=0;e<n.staticCount;e++)t&&(n.children+=w.outerHTML),e===n.staticCount-1&&(n.anchor=w),w=s(w);return w}w=L();break;case mM:w=c?A(i,n,M,r,o,u):L();break;default:if(1&S)w=1!==h||n.type.toLowerCase()!==i.tagName.toLowerCase()?L():I(i,n,M,r,o,u);else if(6&S){n.slotScopeIds=o;const t=a(i);if(e(n,t,null,M,r,tM(t),u),w=c?N(i):s(i),Bi(n)){let e;c?(e=XM(mM),e.anchor=w?w.previousSibling:t.lastChild):e=3===i.nodeType?$M(""):XM("div"),e.el=i,n.component.subTree=e}}else 64&S?w=8!==h?L():n.type.hydrate(i,n,M,r,o,u,t,l):128&S&&(w=n.type.hydrate(i,n,M,r,tM(a(i)),o,u,t,g))}return null!=d&&$n(d,null,r,n),w},I=(t,e,i,s,a,o)=>{o=o||!!e.dynamicChildren;const{type:u,props:c,patchFlag:g,shapeFlag:I,dirs:A}=e,D="input"===u&&A||"option"===u;if(D||-1!==g){if(A&&Xn(e,null,i,"created"),c)if(D||!o||48&g)for(const e in c)(D&&e.endsWith("value")||Object(n["w"])(e)&&!Object(n["z"])(e))&&M(t,e,null,c[e],!1,void 0,i);else c.onClick&&M(t,"onClick",null,c.onClick,!1,void 0,i);let u;if((u=c&&c.onVnodeBeforeMount)&&ss(u,i,e),A&&Xn(e,null,i,"beforeMount"),((u=c&&c.onVnodeMounted)||A)&&hi(()=>{u&&ss(u,i,e),A&&Xn(e,null,i,"mounted")},s),16&I&&(!c||!c.innerHTML&&!c.textContent)){let n=l(t.firstChild,e,t,i,s,a,o);while(n){Kn=!0;const t=n;n=n.nextSibling,r(t)}}else 8&I&&t.textContent!==e.children&&(Kn=!0,t.textContent=e.children)}return t.nextSibling},l=(t,e,n,M,s,a,r)=>{r=r||!!e.dynamicChildren;const o=e.children,u=o.length;for(let c=0;c<u;c++){const e=r?o[c]:o[c]=es(o[c]);if(t)t=g(t,e,M,s,a,r);else{if(e.type===bM&&!e.children)continue;Kn=!0,i(null,e,n,null,M,s,tM(n),a)}}return t},A=(t,e,i,n,M,r)=>{const{slotScopeIds:c}=e;c&&(M=M?M.concat(c):c);const g=a(t),I=l(s(t),e,g,i,n,M,r);return I&&eM(I)&&"]"===I.data?s(e.anchor=I):(Kn=!0,o(e.anchor=u("]"),g,I),I)},D=(t,e,n,M,o,u)=>{if(Kn=!0,e.el=null,u){const e=N(t);while(1){const i=s(t);if(!i||i===e)break;r(i)}}const c=s(t),g=a(t);return r(t),i(null,e,g,c,n,M,tM(g),o),c},N=t=>{let e=0;while(t)if(t=s(t),t&&eM(t)&&("["===t.data&&e++,"]"===t.data)){if(0===e)return s(t);e--}return t};return[c,g]}function nM(){}const MM=hi;function sM(t){return rM(t)}function aM(t){return rM(t,iM)}function rM(t,e){nM();const i=Object(n["i"])();i.__VUE__=!0;const{insert:M,remove:s,patchProp:a,createElement:r,createText:o,createComment:u,setText:c,setElementText:g,parentNode:I,nextSibling:l,setScopeId:A=n["d"],cloneNode:D,insertStaticContent:N}=t,L=(t,e,i,n=null,M=null,s=null,a=!1,r=null,o=!!e.dynamicChildren)=>{if(t===e)return;t&&!QM(t,e)&&(n=X(t),P(t,M,s,!0),t=null),-2===e.patchFlag&&(o=!1,e.dynamicChildren=null);const{type:u,ref:c,shapeFlag:g}=e;switch(u){case bM:j(t,e,i,n);break;case pM:d(t,e,i,n);break;case CM:null==t&&S(e,i,n,a);break;case mM:Y(t,e,i,n,M,s,a,r,o);break;default:1&g?y(t,e,i,n,M,s,a,r,o):6&g?v(t,e,i,n,M,s,a,r,o):(64&g||128&g)&&u.process(t,e,i,n,M,s,a,r,o,_)}null!=c&&M&&$n(c,t&&t.ref,s,e||t,!e)},j=(t,e,i,n)=>{if(null==t)M(e.el=o(e.children),i,n);else{const i=e.el=t.el;e.children!==t.children&&c(i,e.children)}},d=(t,e,i,n)=>{null==t?M(e.el=u(e.children||""),i,n):e.el=t.el},S=(t,e,i,n)=>{[t.el,t.anchor]=N(t.children,e,i,n,t.el,t.anchor)},h=({el:t,anchor:e},i,n)=>{let s;while(t&&t!==e)s=l(t),M(t,i,n),t=s;M(e,i,n)},w=({el:t,anchor:e})=>{let i;while(t&&t!==e)i=l(t),s(t),t=i;s(e)},y=(t,e,i,n,M,s,a,r,o)=>{a=a||"svg"===e.type,null==t?T(e,i,n,M,s,a,r,o):b(t,e,M,s,a,r,o)},T=(t,e,i,s,o,u,c,I)=>{let l,A;const{type:N,props:L,shapeFlag:j,transition:d,patchFlag:S,dirs:h}=t;if(t.el&&void 0!==D&&-1===S)l=t.el=D(t.el);else{if(l=t.el=r(t.type,u,L&&L.is,L),8&j?g(l,t.children):16&j&&m(t.children,l,null,s,o,u&&"foreignObject"!==N,c,I),h&&Xn(t,null,s,"created"),L){for(const e in L)"value"===e||Object(n["z"])(e)||a(l,e,null,L[e],u,t.children,s,o,R);"value"in L&&a(l,"value",null,L.value),(A=L.onVnodeBeforeMount)&&ss(A,s,t)}E(l,t,t.scopeId,c,s)}h&&Xn(t,null,s,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&d&&!d.persisted;w&&d.beforeEnter(l),M(l,e,i),((A=L&&L.onVnodeMounted)||w||h)&&MM(()=>{A&&ss(A,s,t),w&&d.enter(l),h&&Xn(t,null,s,"mounted")},o)},E=(t,e,i,n,M)=>{if(i&&A(t,i),n)for(let s=0;s<n.length;s++)A(t,n[s]);if(M){let i=M.subTree;if(e===i){const e=M.vnode;E(t,e,e.scopeId,e.slotScopeIds,M.parent)}}},m=(t,e,i,n,M,s,a,r,o=0)=>{for(let u=o;u<t.length;u++){const o=t[u]=r?is(t[u]):es(t[u]);L(null,o,e,i,n,M,s,a,r)}},b=(t,e,i,M,s,r,o)=>{const u=e.el=t.el;let{patchFlag:c,dynamicChildren:I,dirs:l}=e;c|=16&t.patchFlag;const A=t.props||n["b"],D=e.props||n["b"];let N;i&&oM(i,!1),(N=D.onVnodeBeforeUpdate)&&ss(N,i,e,t),l&&Xn(e,t,i,"beforeUpdate"),i&&oM(i,!0);const L=s&&"foreignObject"!==e.type;if(I?p(t.dynamicChildren,I,u,i,M,L,r):o||G(t,e,u,null,i,M,L,r,!1),c>0){if(16&c)z(u,e,A,D,i,M,s);else if(2&c&&A.class!==D.class&&a(u,"class",null,D.class,s),4&c&&a(u,"style",A.style,D.style,s),8&c){const n=e.dynamicProps;for(let e=0;e<n.length;e++){const r=n[e],o=A[r],c=D[r];c===o&&"value"!==r||a(u,r,o,c,s,t.children,i,M,R)}}1&c&&t.children!==e.children&&g(u,e.children)}else o||null!=I||z(u,e,A,D,i,M,s);((N=D.onVnodeUpdated)||l)&&MM(()=>{N&&ss(N,i,e,t),l&&Xn(e,t,i,"updated")},M)},p=(t,e,i,n,M,s,a)=>{for(let r=0;r<e.length;r++){const o=t[r],u=e[r],c=o.el&&(o.type===mM||!QM(o,u)||70&o.shapeFlag)?I(o.el):i;L(o,u,c,null,n,M,s,a,!0)}},z=(t,e,i,M,s,r,o)=>{if(i!==M){for(const u in M){if(Object(n["z"])(u))continue;const c=M[u],g=i[u];c!==g&&"value"!==u&&a(t,u,g,c,o,e.children,s,r,R)}if(i!==n["b"])for(const u in i)Object(n["z"])(u)||u in M||a(t,u,i[u],null,o,e.children,s,r,R);"value"in M&&a(t,"value",i.value,M.value)}},Y=(t,e,i,n,s,a,r,u,c)=>{const g=e.el=t?t.el:o(""),I=e.anchor=t?t.anchor:o("");let{patchFlag:l,dynamicChildren:A,slotScopeIds:D}=e;D&&(u=u?u.concat(D):D),null==t?(M(g,i,n),M(I,i,n),m(e.children,i,I,s,a,r,u,c)):l>0&&64&l&&A&&t.dynamicChildren?(p(t.dynamicChildren,A,i,s,a,r,u),(null!=e.key||s&&e===s.subTree)&&uM(t,e,!0)):G(t,e,i,I,s,a,r,u,c)},v=(t,e,i,n,M,s,a,r,o)=>{e.slotScopeIds=r,null==t?512&e.shapeFlag?M.ctx.activate(e,i,n,a,o):O(e,i,n,M,s,a,o):U(t,e,o)},O=(t,e,i,n,M,s,a)=>{const r=t.component=Ls(t,n,M);if(Xi(t)&&(r.ctx.renderer=_),Es(r),r.asyncDep){if(M&&M.registerDep(r,k),!t.el){const t=r.subTree=XM(pM);d(null,t,e,i)}}else k(r,t,e,i,M,s,a)},U=(t,e,i)=>{const n=e.component=t.component;if(oi(t,e,i)){if(n.asyncDep&&!n.asyncResolved)return void W(n,e,i);n.next=e,Ue(n.update),n.update()}else e.component=t.component,e.el=t.el,n.vnode=e},k=(t,e,i,M,s,a,r)=>{const o=()=>{if(t.isMounted){let e,{next:i,bu:M,u:o,parent:u,vnode:c}=t,g=i;0,oM(t,!1),i?(i.el=c.el,W(t,i,r)):i=c,M&&Object(n["n"])(M),(e=i.props&&i.props.onVnodeBeforeUpdate)&&ss(e,u,i,c),oM(t,!0);const l=Mi(t);0;const A=t.subTree;t.subTree=l,L(A,l,I(A.el),X(A),t,s,a),i.el=l.el,null===g&&ci(t,l.el),o&&MM(o,s),(e=i.props&&i.props.onVnodeUpdated)&&MM(()=>ss(e,u,i,c),s)}else{let r;const{el:o,props:u}=e,{bm:c,m:g,parent:I}=t,l=Bi(e);if(oM(t,!1),c&&Object(n["n"])(c),!l&&(r=u&&u.onVnodeBeforeMount)&&ss(r,I,e),oM(t,!0),o&&$){const i=()=>{t.subTree=Mi(t),$(o,t.subTree,t,s,null)};l?e.type.__asyncLoader().then(()=>!t.isUnmounted&&i()):i()}else{0;const n=t.subTree=Mi(t);0,L(null,n,i,M,t,s,a),e.el=n.el}if(g&&MM(g,s),!l&&(r=u&&u.onVnodeMounted)){const t=e;MM(()=>ss(r,I,t),s)}256&e.shapeFlag&&t.a&&MM(t.a,s),t.isMounted=!0,e=i=M=null}},u=t.effect=new x(o,()=>ve(t.update),t.scope),c=t.update=u.run.bind(u);c.id=t.uid,oM(t,!0),c()},W=(t,e,i)=>{e.component=t;const n=t.vnode.props;t.vnode=e,t.next=null,fn(t,e.props,n,i),Fn(t,e.children,i),C(),Je(void 0,t.update),f()},G=(t,e,i,n,M,s,a,r,o=!1)=>{const u=t&&t.children,c=t?t.shapeFlag:0,I=e.children,{patchFlag:l,shapeFlag:A}=e;if(l>0){if(128&l)return void Z(u,I,i,n,M,s,a,r,o);if(256&l)return void J(u,I,i,n,M,s,a,r,o)}8&A?(16&c&&R(u,M,s),I!==u&&g(i,I)):16&c?16&A?Z(u,I,i,n,M,s,a,r,o):R(u,M,s,!0):(8&c&&g(i,""),16&A&&m(I,i,n,M,s,a,r,o))},J=(t,e,i,M,s,a,r,o,u)=>{t=t||n["a"],e=e||n["a"];const c=t.length,g=e.length,I=Math.min(c,g);let l;for(l=0;l<I;l++){const n=e[l]=u?is(e[l]):es(e[l]);L(t[l],n,i,null,s,a,r,o,u)}c>g?R(t,s,a,!0,!1,I):m(e,i,M,s,a,r,o,u,I)},Z=(t,e,i,M,s,a,r,o,u)=>{let c=0;const g=e.length;let I=t.length-1,l=g-1;while(c<=I&&c<=l){const n=t[c],M=e[c]=u?is(e[c]):es(e[c]);if(!QM(n,M))break;L(n,M,i,null,s,a,r,o,u),c++}while(c<=I&&c<=l){const n=t[I],M=e[l]=u?is(e[l]):es(e[l]);if(!QM(n,M))break;L(n,M,i,null,s,a,r,o,u),I--,l--}if(c>I){if(c<=l){const t=l+1,n=t<g?e[t].el:M;while(c<=l)L(null,e[c]=u?is(e[c]):es(e[c]),i,n,s,a,r,o,u),c++}}else if(c>l)while(c<=I)P(t[c],s,a,!0),c++;else{const A=c,D=c,N=new Map;for(c=D;c<=l;c++){const t=e[c]=u?is(e[c]):es(e[c]);null!=t.key&&N.set(t.key,c)}let j,d=0;const S=l-D+1;let h=!1,w=0;const y=new Array(S);for(c=0;c<S;c++)y[c]=0;for(c=A;c<=I;c++){const n=t[c];if(d>=S){P(n,s,a,!0);continue}let M;if(null!=n.key)M=N.get(n.key);else for(j=D;j<=l;j++)if(0===y[j-D]&&QM(n,e[j])){M=j;break}void 0===M?P(n,s,a,!0):(y[M-D]=c+1,M>=w?w=M:h=!0,L(n,e[M],i,null,s,a,r,o,u),d++)}const x=h?cM(y):n["a"];for(j=x.length-1,c=S-1;c>=0;c--){const t=D+c,n=e[t],I=t+1<g?e[t+1].el:M;0===y[c]?L(null,n,i,I,s,a,r,o,u):h&&(j<0||c!==x[j]?Q(n,i,I,2):j--)}}},Q=(t,e,i,n,s=null)=>{const{el:a,type:r,transition:o,children:u,shapeFlag:c}=t;if(6&c)return void Q(t.component.subTree,e,i,n);if(128&c)return void t.suspense.move(e,i,n);if(64&c)return void r.move(t,e,i,_);if(r===mM){M(a,e,i);for(let t=0;t<u.length;t++)Q(u[t],e,i,n);return void M(t.anchor,e,i)}if(r===CM)return void h(t,e,i);const g=2!==n&&1&c&&o;if(g)if(0===n)o.beforeEnter(a),M(a,e,i),MM(()=>o.enter(a),s);else{const{leave:t,delayLeave:n,afterLeave:s}=o,r=()=>M(a,e,i),u=()=>{t(a,()=>{r(),s&&s()})};n?n(a,r,u):u()}else M(a,e,i)},P=(t,e,i,n=!1,M=!1)=>{const{type:s,props:a,ref:r,children:o,dynamicChildren:u,shapeFlag:c,patchFlag:g,dirs:I}=t;if(null!=r&&$n(r,null,i,t,!0),256&c)return void e.ctx.deactivate(t);const l=1&c&&I,A=!Bi(t);let D;if(A&&(D=a&&a.onVnodeBeforeUnmount)&&ss(D,e,t),6&c)F(t.component,i,n);else{if(128&c)return void t.suspense.unmount(i,n);l&&Xn(t,null,e,"beforeUnmount"),64&c?t.type.remove(t,e,i,M,_,n):u&&(s!==mM||g>0&&64&g)?R(u,e,i,!1,!0):(s===mM&&384&g||!M&&16&c)&&R(o,e,i),n&&V(t)}(A&&(D=a&&a.onVnodeUnmounted)||l)&&MM(()=>{D&&ss(D,e,t),l&&Xn(t,null,e,"unmounted")},i)},V=t=>{const{type:e,el:i,anchor:n,transition:M}=t;if(e===mM)return void B(i,n);if(e===CM)return void w(t);const a=()=>{s(i),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(1&t.shapeFlag&&M&&!M.persisted){const{leave:e,delayLeave:n}=M,s=()=>e(i,a);n?n(t.el,a,s):s()}else a()},B=(t,e)=>{let i;while(t!==e)i=l(t),s(t),t=i;s(e)},F=(t,e,i)=>{const{bum:M,scope:s,update:a,subTree:r,um:o}=t;M&&Object(n["n"])(M),s.stop(),a&&(a.active=!1,P(r,t,e,i)),o&&MM(o,e),MM(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},R=(t,e,i,n=!1,M=!1,s=0)=>{for(let a=s;a<t.length;a++)P(t[a],e,i,n,M)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():l(t.anchor||t.el),H=(t,e,i)=>{null==t?e._vnode&&P(e._vnode,null,null,!0):L(e._vnode||null,t,e,null,null,null,i),Ze(),e._vnode=t},_={p:L,um:P,m:Q,r:V,mt:O,mc:m,pc:G,pbc:p,n:X,o:t};let q,$;return e&&([q,$]=e(_)),{render:H,hydrate:q,createApp:qn(H,q)}}function oM({effect:t,update:e},i){t.allowRecurse=e.allowRecurse=i}function uM(t,e,i=!1){const M=t.children,s=e.children;if(Object(n["o"])(M)&&Object(n["o"])(s))for(let n=0;n<M.length;n++){const t=M[n];let e=s[n];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[n]=is(s[n]),e.el=t.el),i||uM(t,e))}}function cM(t){const e=t.slice(),i=[0];let n,M,s,a,r;const o=t.length;for(n=0;n<o;n++){const o=t[n];if(0!==o){if(M=i[i.length-1],t[M]<o){e[n]=M,i.push(n);continue}s=0,a=i.length-1;while(s<a)r=s+a>>1,t[i[r]]<o?s=r+1:a=r;o<t[i[s]]&&(s>0&&(e[n]=i[s-1]),i[s]=n)}}s=i.length,a=i[s-1];while(s-- >0)i[s]=a,a=e[a];return i}const gM=t=>t.__isTeleport,IM=t=>t&&(t.disabled||""===t.disabled),lM=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,AM=(t,e)=>{const i=t&&t.to;if(Object(n["D"])(i)){if(e){const t=e(i);return t}return null}return i},DM={__isTeleport:!0,process(t,e,i,n,M,s,a,r,o,u){const{mc:c,pc:g,pbc:I,o:{insert:l,querySelector:A,createText:D,createComment:N}}=u,L=IM(e.props);let{shapeFlag:j,children:d,dynamicChildren:S}=e;if(null==t){const t=e.el=D(""),u=e.anchor=D("");l(t,i,n),l(u,i,n);const g=e.target=AM(e.props,A),I=e.targetAnchor=D("");g&&(l(I,g),a=a||lM(g));const N=(t,e)=>{16&j&&c(d,t,e,M,s,a,r,o)};L?N(i,u):g&&N(g,I)}else{e.el=t.el;const n=e.anchor=t.anchor,c=e.target=t.target,l=e.targetAnchor=t.targetAnchor,D=IM(t.props),N=D?i:c,j=D?n:l;if(a=a||lM(c),S?(I(t.dynamicChildren,S,N,M,s,a,r),uM(t,e,!0)):o||g(t,e,N,j,M,s,a,r,!1),L)D||NM(e,i,n,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=AM(e.props,A);t&&NM(e,t,null,u,0)}else D&&NM(e,c,l,u,1)}},remove(t,e,i,n,{um:M,o:{remove:s}},a){const{shapeFlag:r,children:o,anchor:u,targetAnchor:c,target:g,props:I}=t;if(g&&s(c),(a||!IM(I))&&(s(u),16&r))for(let l=0;l<o.length;l++){const t=o[l];M(t,e,i,!0,!!t.dynamicChildren)}},move:NM,hydrate:LM};function NM(t,e,i,{o:{insert:n},m:M},s=2){0===s&&n(t.targetAnchor,e,i);const{el:a,anchor:r,shapeFlag:o,children:u,props:c}=t,g=2===s;if(g&&n(a,e,i),(!g||IM(c))&&16&o)for(let I=0;I<u.length;I++)M(u[I],e,i,2);g&&n(r,e,i)}function LM(t,e,i,n,M,s,{o:{nextSibling:a,parentNode:r,querySelector:o}},u){const c=e.target=AM(e.props,o);if(c){const o=c._lpa||c.firstChild;16&e.shapeFlag&&(IM(e.props)?(e.anchor=u(a(t),e,r(t),i,n,M,s),e.targetAnchor=o):(e.anchor=a(t),e.targetAnchor=u(o,e,c,i,n,M,s)),c._lpa=e.targetAnchor&&a(e.targetAnchor))}return e.anchor&&a(e.anchor)}const jM=DM,dM="components",SM="directives";function hM(t,e){return TM(dM,t,!0,e)||t}const wM=Symbol();function yM(t){return Object(n["D"])(t)?TM(dM,t,!1)||t:t||wM}function xM(t){return TM(SM,t)}function TM(t,e,i=!0,M=!1){const s=qe||js;if(s){const i=s.type;if(t===dM){const t=ks(i);if(t&&(t===e||t===Object(n["e"])(e)||t===Object(n["f"])(Object(n["e"])(e))))return i}const a=EM(s[t]||i[t],e)||EM(s.appContext[t],e);return!a&&M?i:a}}function EM(t,e){return t&&(t[e]||t[Object(n["e"])(e)]||t[Object(n["f"])(Object(n["e"])(e))])}const mM=Symbol(void 0),bM=Symbol(void 0),pM=Symbol(void 0),CM=Symbol(void 0),zM=[];let fM=null;function YM(t=!1){zM.push(fM=t?null:[])}function vM(){zM.pop(),fM=zM[zM.length-1]||null}let OM,UM=1;function kM(t){UM+=t}function WM(t){return t.dynamicChildren=UM>0?fM||n["a"]:null,vM(),UM>0&&fM&&fM.push(t),t}function GM(t,e,i,n,M,s){return WM(RM(t,e,i,n,M,s,!0))}function JM(t,e,i,n,M){return WM(XM(t,e,i,n,M,!0))}function ZM(t){return!!t&&!0===t.__v_isVNode}function QM(t,e){return t.type===e.type&&t.key===e.key}function PM(t){OM=t}const VM="__vInternal",BM=({key:t})=>null!=t?t:null,FM=({ref:t,ref_key:e,ref_for:i})=>null!=t?Object(n["D"])(t)||Ft(t)||Object(n["p"])(t)?{i:qe,r:t,k:e,f:!!i}:t:null;function RM(t,e=null,i=null,M=0,s=null,a=(t===mM?0:1),r=!1,o=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&BM(e),ref:e&&FM(e),scopeId:$e,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:M,dynamicProps:s,dynamicChildren:null,appContext:null};return o?(ns(u,i),128&a&&t.normalize(u)):i&&(u.shapeFlag|=Object(n["D"])(i)?8:16),UM>0&&!r&&fM&&(u.patchFlag>0||6&a)&&32!==u.patchFlag&&fM.push(u),u}const XM=HM;function HM(t,e=null,i=null,M=0,s=null,a=!1){if(t&&t!==wM||(t=pM),ZM(t)){const n=qM(t,e,!0);return i&&ns(n,i),n}if(Gs(t)&&(t=t.__vccOpts),e){e=_M(e);let{class:t,style:i}=e;t&&!Object(n["D"])(t)&&(e.class=Object(n["I"])(t)),Object(n["v"])(i)&&(Gt(i)&&!Object(n["o"])(i)&&(i=Object(n["h"])({},i)),e.style=Object(n["K"])(i))}const r=Object(n["D"])(t)?1:gi(t)?128:gM(t)?64:Object(n["v"])(t)?4:Object(n["p"])(t)?2:0;return RM(t,e,i,M,s,r,a,!0)}function _M(t){return t?Gt(t)||VM in t?Object(n["h"])({},t):t:null}function qM(t,e,i=!1){const{props:M,ref:s,patchFlag:a,children:r}=t,o=e?Ms(M||{},e):M,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&BM(o),ref:e&&e.ref?i&&s?Object(n["o"])(s)?s.concat(FM(e)):[s,FM(e)]:FM(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mM?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qM(t.ssContent),ssFallback:t.ssFallback&&qM(t.ssFallback),el:t.el,anchor:t.anchor};return u}function $M(t=" ",e=0){return XM(bM,null,t,e)}function KM(t,e){const i=XM(CM,null,t);return i.staticCount=e,i}function ts(t="",e=!1){return e?(YM(),JM(pM,null,t)):XM(pM,null,t)}function es(t){return null==t||"boolean"===typeof t?XM(pM):Object(n["o"])(t)?XM(mM,null,t.slice()):"object"===typeof t?is(t):XM(bM,null,String(t))}function is(t){return null===t.el||t.memo?t:qM(t)}function ns(t,e){let i=0;const{shapeFlag:M}=t;if(null==e)e=null;else if(Object(n["o"])(e))i=16;else if("object"===typeof e){if(65&M){const i=e.default;return void(i&&(i._c&&(i._d=!1),ns(t,i()),i._c&&(i._d=!0)))}{i=32;const n=e._;n||VM in e?3===n&&qe&&(1===qe.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=qe}}else Object(n["p"])(e)?(e={default:e,_ctx:qe},i=32):(e=String(e),64&M?(i=16,e=[$M(e)]):i=8);t.children=e,t.shapeFlag|=i}function Ms(...t){const e={};for(let i=0;i<t.length;i++){const M=t[i];for(const t in M)if("class"===t)e.class!==M.class&&(e.class=Object(n["I"])([e.class,M.class]));else if("style"===t)e.style=Object(n["K"])([e.style,M.style]);else if(Object(n["w"])(t)){const i=e[t],s=M[t];!s||i===s||Object(n["o"])(i)&&i.includes(s)||(e[t]=i?[].concat(i,s):s)}else""!==t&&(e[t]=M[t])}return e}function ss(t,e,i,n=null){Ne(t,e,7,[i,n])}function as(t,e,i,M){let s;const a=i&&i[M];if(Object(n["o"])(t)||Object(n["D"])(t)){s=new Array(t.length);for(let i=0,n=t.length;i<n;i++)s[i]=e(t[i],i,void 0,a&&a[i])}else if("number"===typeof t){0,s=new Array(t);for(let i=0;i<t;i++)s[i]=e(i+1,i,void 0,a&&a[i])}else if(Object(n["v"])(t))if(t[Symbol.iterator])s=Array.from(t,(t,i)=>e(t,i,void 0,a&&a[i]));else{const i=Object.keys(t);s=new Array(i.length);for(let n=0,M=i.length;n<M;n++){const M=i[n];s[n]=e(t[M],M,n,a&&a[n])}}else s=[];return i&&(i[M]=s),s}function rs(t,e){for(let i=0;i<e.length;i++){const M=e[i];if(Object(n["o"])(M))for(let e=0;e<M.length;e++)t[M[e].name]=M[e].fn;else M&&(t[M.name]=M.fn)}return t}function os(t,e,i={},n,M){if(qe.isCE)return XM("slot","default"===e?null:{name:e},n&&n());let s=t[e];s&&s._c&&(s._d=!1),YM();const a=s&&us(s(i)),r=JM(mM,{key:i.key||"_"+e},a||(n?n():[]),a&&1===t._?64:-2);return!M&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),s&&s._c&&(s._d=!0),r}function us(t){return t.some(t=>!ZM(t)||t.type!==pM&&!(t.type===mM&&!us(t.children)))?t:null}function cs(t){const e={};for(const i in t)e[Object(n["N"])(i)]=t[i];return e}const gs=t=>t?ws(t)?vs(t)||t.proxy:gs(t.parent):null,Is=Object(n["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gs(t.parent),$root:t=>gs(t.root),$emit:t=>t.emit,$options:t=>wn(t),$forceUpdate:t=>()=>ve(t.update),$nextTick:t=>fe.bind(t.proxy),$watch:t=>zi.bind(t)}),ls={get({_:t},e){const{ctx:i,setupState:M,data:s,props:a,accessCache:r,type:o,appContext:u}=t;let c;if("$"!==e[0]){const o=r[e];if(void 0!==o)switch(o){case 1:return M[e];case 2:return s[e];case 4:return i[e];case 3:return a[e]}else{if(M!==n["b"]&&Object(n["k"])(M,e))return r[e]=1,M[e];if(s!==n["b"]&&Object(n["k"])(s,e))return r[e]=2,s[e];if((c=t.propsOptions[0])&&Object(n["k"])(c,e))return r[e]=3,a[e];if(i!==n["b"]&&Object(n["k"])(i,e))return r[e]=4,i[e];Ln&&(r[e]=0)}}const g=Is[e];let I,l;return g?("$attrs"===e&&Y(t,"get",e),g(t)):(I=o.__cssModules)&&(I=I[e])?I:i!==n["b"]&&Object(n["k"])(i,e)?(r[e]=4,i[e]):(l=u.config.globalProperties,Object(n["k"])(l,e)?l[e]:void 0)},set({_:t},e,i){const{data:M,setupState:s,ctx:a}=t;if(s!==n["b"]&&Object(n["k"])(s,e))s[e]=i;else if(M!==n["b"]&&Object(n["k"])(M,e))M[e]=i;else if(Object(n["k"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(a[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:M,appContext:s,propsOptions:a}},r){let o;return!!i[r]||t!==n["b"]&&Object(n["k"])(t,r)||e!==n["b"]&&Object(n["k"])(e,r)||(o=a[0])&&Object(n["k"])(o,r)||Object(n["k"])(M,r)||Object(n["k"])(Is,r)||Object(n["k"])(s.config.globalProperties,r)}};const As=Object(n["h"])({},ls,{get(t,e){if(e!==Symbol.unscopables)return ls.get(t,e,t)},has(t,e){const i="_"!==e[0]&&!Object(n["q"])(e);return i}});const Ds=Hn();let Ns=0;function Ls(t,e,i){const M=t.type,s=(e?e.appContext:t.appContext)||Ds,r={uid:Ns++,vnode:t,type:M,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:On(M,s),emitsOptions:He(M,s),emit:null,emitted:null,propsDefaults:n["b"],inheritAttrs:M.inheritAttrs,ctx:n["b"],data:n["b"],props:n["b"],attrs:n["b"],slots:n["b"],refs:n["b"],setupState:n["b"],setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Xe.bind(null,r),t.ce&&t.ce(r),r}let js=null;const ds=()=>js||qe,Ss=t=>{js=t,t.scope.on()},hs=()=>{js&&js.scope.off(),js=null};function ws(t){return 4&t.vnode.shapeFlag}let ys,xs,Ts=!1;function Es(t,e=!1){Ts=e;const{props:i,children:n}=t.vnode,M=ws(t);zn(t,i,M,e),Bn(t,n);const s=M?ms(t,e):void 0;return Ts=!1,s}function ms(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=Zt(new Proxy(t.ctx,ls));const{setup:M}=i;if(M){const i=t.setupContext=M.length>1?Ys(t):null;Ss(t),C();const s=De(M,t,0,[t.props,i]);if(f(),hs(),Object(n["y"])(s)){if(s.then(hs,hs),e)return s.then(i=>{bs(t,i,e)}).catch(e=>{Le(e,t,0)});t.asyncDep=s}else bs(t,s,e)}else zs(t,e)}function bs(t,e,i){Object(n["p"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(n["v"])(e)&&(t.setupState=te(e)),zs(t,i)}function ps(t){ys=t,xs=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,As))}}const Cs=()=>!ys;function zs(t,e,i){const M=t.type;if(!t.render){if(!e&&ys&&!M.render){const e=M.template;if(e){0;const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:r}=M,o=Object(n["h"])(Object(n["h"])({isCustomElement:i,delimiters:a},s),r);M.render=ys(e,o)}}t.render=M.render||n["d"],xs&&xs(t)}Ss(t),C(),jn(t),f(),hs()}function fs(t){return new Proxy(t.attrs,{get(e,i){return Y(t,"get","$attrs"),e[i]}})}function Ys(t){const e=e=>{t.exposed=e||{}};let i;return{get attrs(){return i||(i=fs(t))},slots:t.slots,emit:t.emit,expose:e}}function vs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(te(Zt(t.exposed)),{get(e,i){return i in e?e[i]:i in Is?Is[i](t):void 0}}))}const Os=/(?:^|[-_])(\w)/g,Us=t=>t.replace(Os,t=>t.toUpperCase()).replace(/[-_]/g,"");function ks(t){return Object(n["p"])(t)&&t.displayName||t.name}function Ws(t,e,i=!1){let n=ks(e);if(!n&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(n=t[1])}if(!n&&t&&t.parent){const i=t=>{for(const i in t)if(t[i]===e)return i};n=i(t.components||t.parent.type.components)||i(t.appContext.components)}return n?Us(n):i?"App":"Anonymous"}function Gs(t){return Object(n["p"])(t)&&"__vccOpts"in t}const Js=(t,e)=>re(t,e,Ts);function Zs(){return null}function Qs(){return null}function Ps(t){0}function Vs(t,e){return null}function Bs(){return Rs().slots}function Fs(){return Rs().attrs}function Rs(){const t=ds();return t.setupContext||(t.setupContext=Ys(t))}function Xs(t,e){const i=Object(n["o"])(t)?t.reduce((t,e)=>(t[e]={},t),{}):t;for(const M in e){const t=i[M];t?Object(n["o"])(t)||Object(n["p"])(t)?i[M]={type:t,default:e[M]}:t.default=e[M]:null===t&&(i[M]={default:e[M]})}return i}function Hs(t,e){const i={};for(const n in t)e.includes(n)||Object.defineProperty(i,n,{enumerable:!0,get:()=>t[n]});return i}function _s(t){const e=ds();let i=t();return hs(),Object(n["y"])(i)&&(i=i.catch(t=>{throw Ss(e),t})),[i,()=>Ss(e)]}function qs(t,e,i){const M=arguments.length;return 2===M?Object(n["v"])(e)&&!Object(n["o"])(e)?ZM(e)?XM(t,null,[e]):XM(t,e):XM(t,null,e):(M>3?i=Array.prototype.slice.call(arguments,2):3===M&&ZM(i)&&(i=[i]),XM(t,e,i))}const $s=Symbol(""),Ks=()=>{{const t=xi($s);return t||ue("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function ta(){return void 0}function ea(t,e,i,n){const M=i[n];if(M&&ia(M,t))return M;const s=e();return s.memo=t.slice(),i[n]=s}function ia(t,e){const i=t.memo;if(i.length!=e.length)return!1;for(let n=0;n<i.length;n++)if(i[n]!==e[n])return!1;return UM>0&&fM&&fM.push(t),!0}const na="3.2.29",Ma={createComponentInstance:Ls,setupComponent:Es,renderComponentRoot:Mi,setCurrentRenderingInstance:Ke,isVNode:ZM,normalizeVNode:es},sa=Ma,aa=null,ra=null,oa="http://www.w3.org/2000/svg",ua="undefined"!==typeof document?document:null,ca=ua&&ua.createElement("template"),ga={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,n)=>{const M=e?ua.createElementNS(oa,t):ua.createElement(t,i?{is:i}:void 0);return"select"===t&&n&&null!=n.multiple&&M.setAttribute("multiple",n.multiple),M},createText:t=>ua.createTextNode(t),createComment:t=>ua.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ua.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,i,n,M,s){const a=i?i.previousSibling:e.lastChild;if(M&&(M===s||M.nextSibling)){while(1)if(e.insertBefore(M.cloneNode(!0),i),M===s||!(M=M.nextSibling))break}else{ca.innerHTML=n?`<svg>${t}</svg>`:t;const M=ca.content;if(n){const t=M.firstChild;while(t.firstChild)M.appendChild(t.firstChild);M.removeChild(t)}e.insertBefore(M,i)}return[a?a.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}};function Ia(t,e,i){const n=t._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),null==e?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}function la(t,e,i){const M=t.style,s=Object(n["D"])(i);if(i&&!s){for(const t in i)Da(M,t,i[t]);if(e&&!Object(n["D"])(e))for(const t in e)null==i[t]&&Da(M,t,"")}else{const n=M.display;s?e!==i&&(M.cssText=i):e&&t.removeAttribute("style"),"_vod"in t&&(M.display=n)}}const Aa=/\s*!important$/;function Da(t,e,i){if(Object(n["o"])(i))i.forEach(i=>Da(t,e,i));else if(e.startsWith("--"))t.setProperty(e,i);else{const M=ja(t,e);Aa.test(i)?t.setProperty(Object(n["l"])(M),i.replace(Aa,""),"important"):t[M]=i}}const Na=["Webkit","Moz","ms"],La={};function ja(t,e){const i=La[e];if(i)return i;let M=Object(n["e"])(e);if("filter"!==M&&M in t)return La[e]=M;M=Object(n["f"])(M);for(let n=0;n<Na.length;n++){const i=Na[n]+M;if(i in t)return La[e]=i}return e}const da="http://www.w3.org/1999/xlink";function Sa(t,e,i,M,s){if(M&&e.startsWith("xlink:"))null==i?t.removeAttributeNS(da,e.slice(6,e.length)):t.setAttributeNS(da,e,i);else{const M=Object(n["C"])(e);null==i||M&&!Object(n["m"])(i)?t.removeAttribute(e):t.setAttribute(e,M?"":i)}}function ha(t,e,i,M,s,a,r){if("innerHTML"===e||"textContent"===e)return M&&r(M,s,a),void(t[e]=null==i?"":i);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=i;const n=null==i?"":i;return t.value===n&&"OPTION"!==t.tagName||(t.value=n),void(null==i&&t.removeAttribute(e))}if(""===i||null==i){const M=typeof t[e];if("boolean"===M)return void(t[e]=Object(n["m"])(i));if(null==i&&"string"===M)return t[e]="",void t.removeAttribute(e);if("number"===M){try{t[e]=0}catch(o){}return void t.removeAttribute(e)}}try{t[e]=i}catch(u){0}}let wa=Date.now,ya=!1;if("undefined"!==typeof window){wa()>document.createEvent("Event").timeStamp&&(wa=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ya=!!(t&&Number(t[1])<=53)}let xa=0;const Ta=Promise.resolve(),Ea=()=>{xa=0},ma=()=>xa||(Ta.then(Ea),xa=wa());function ba(t,e,i,n){t.addEventListener(e,i,n)}function pa(t,e,i,n){t.removeEventListener(e,i,n)}function Ca(t,e,i,n,M=null){const s=t._vei||(t._vei={}),a=s[e];if(n&&a)a.value=n;else{const[i,r]=fa(e);if(n){const a=s[e]=Ya(n,M);ba(t,i,a,r)}else a&&(pa(t,i,a,r),s[e]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function fa(t){let e;if(za.test(t)){let i;e={};while(i=t.match(za))t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[Object(n["l"])(t.slice(2)),e]}function Ya(t,e){const i=t=>{const n=t.timeStamp||wa();(ya||n>=i.attached-1)&&Ne(va(t,i.value),e,5,[t])};return i.value=t,i.attached=ma(),i}function va(t,e){if(Object(n["o"])(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const Oa=/^on[a-z]/,Ua=(t,e,i,M,s=!1,a,r,o,u)=>{"class"===e?Ia(t,M,s):"style"===e?la(t,i,M):Object(n["w"])(e)?Object(n["u"])(e)||Ca(t,e,i,M,r):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):ka(t,e,M,s))?ha(t,e,M,a,r,o,u):("true-value"===e?t._trueValue=M:"false-value"===e&&(t._falseValue=M),Sa(t,e,M,s))};function ka(t,e,i,M){return M?"innerHTML"===e||"textContent"===e||!!(e in t&&Oa.test(e)&&Object(n["p"])(i)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Oa.test(e)||!Object(n["D"])(i))&&e in t))))}function Wa(t,e){const i=Vi(t);class n extends Za{constructor(t){super(i,t,e)}}return n.def=i,n}const Ga=t=>Wa(t,Xr),Ja="undefined"!==typeof HTMLElement?HTMLElement:class{};class Za extends Ja{constructor(t,e={},i){super(),this._def=t,this._props=e,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,fe(()=>{this._connected||(Rr(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);new MutationObserver(t=>{for(const e of t)this._setAttr(e.attributeName)}).observe(this,{attributes:!0});const t=t=>{const{props:e,styles:i}=t,M=!Object(n["o"])(e),s=e?M?Object.keys(e):e:[];let a;if(M)for(const r in this._props){const t=e[r];(t===Number||t&&t.type===Number)&&(this._props[r]=Object(n["O"])(this._props[r]),(a||(a=Object.create(null)))[r]=!0)}this._numberProps=a;for(const n of Object.keys(this))"_"!==n[0]&&this._setProp(n,this[n],!0,!1);for(const r of s.map(n["e"]))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(t){this._setProp(r,t)}});this._applyStyles(i),this._update()},e=this._def.__asyncLoader;e?e().then(t):t(this._def)}_setAttr(t){let e=this.getAttribute(t);this._numberProps&&this._numberProps[t]&&(e=Object(n["O"])(e)),this._setProp(Object(n["e"])(t),e,!1)}_getProp(t){return this._props[t]}_setProp(t,e,i=!0,M=!0){e!==this._props[t]&&(this._props[t]=e,M&&this._instance&&this._update(),i&&(!0===e?this.setAttribute(Object(n["l"])(t),""):"string"===typeof e||"number"===typeof e?this.setAttribute(Object(n["l"])(t),e+""):e||this.removeAttribute(Object(n["l"])(t))))}_update(){Rr(this._createVNode(),this.shadowRoot)}_createVNode(){const t=XM(this._def,Object(n["h"])({},this._props));return this._instance||(t.ce=t=>{this._instance=t,t.isCE=!0,t.emit=(t,...e)=>{this.dispatchEvent(new CustomEvent(t,{detail:e}))};let e=this;while(e=e&&(e.parentNode||e.host))if(e instanceof Za){t.parent=e._instance;break}}),t}_applyStyles(t){t&&t.forEach(t=>{const e=document.createElement("style");e.textContent=t,this.shadowRoot.appendChild(e)})}}function Qa(t="$style"){{const e=ds();if(!e)return n["b"];const i=e.type.__cssModules;if(!i)return n["b"];const M=i[t];return M||n["b"]}}function Pa(t){const e=ds();if(!e)return;const i=()=>Va(e.subTree,t(e.proxy));Ei(i),on(()=>{const t=new MutationObserver(i);t.observe(e.subTree.el.parentNode,{childList:!0}),In(()=>t.disconnect())})}function Va(t,e){if(128&t.shapeFlag){const i=t.suspense;t=i.activeBranch,i.pendingBranch&&!i.isHydrating&&i.effects.push(()=>{Va(i.activeBranch,e)})}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)Ba(t.el,e);else if(t.type===mM)t.children.forEach(t=>Va(t,e));else if(t.type===CM){let{el:i,anchor:n}=t;while(i){if(Ba(i,e),i===n)break;i=i.nextSibling}}}function Ba(t,e){if(1===t.nodeType){const i=t.style;for(const t in e)i.setProperty("--"+t,e[t])}}const Fa="transition",Ra="animation",Xa=(t,{slots:e})=>qs(ki,Ka(t),e);Xa.displayName="Transition";const Ha={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_a=Xa.props=Object(n["h"])({},ki.props,Ha),qa=(t,e=[])=>{Object(n["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)},$a=t=>!!t&&(Object(n["o"])(t)?t.some(t=>t.length>1):t.length>1);function Ka(t){const e={};for(const n in t)n in Ha||(e[n]=t[n]);if(!1===t.css)return e;const{name:i="v",type:M,duration:s,enterFromClass:a=i+"-enter-from",enterActiveClass:r=i+"-enter-active",enterToClass:o=i+"-enter-to",appearFromClass:u=a,appearActiveClass:c=r,appearToClass:g=o,leaveFromClass:I=i+"-leave-from",leaveActiveClass:l=i+"-leave-active",leaveToClass:A=i+"-leave-to"}=t,D=tr(s),N=D&&D[0],L=D&&D[1],{onBeforeEnter:j,onEnter:d,onEnterCancelled:S,onLeave:h,onLeaveCancelled:w,onBeforeAppear:y=j,onAppear:x=d,onAppearCancelled:T=S}=e,E=(t,e,i)=>{nr(t,e?g:o),nr(t,e?c:r),i&&i()},m=(t,e)=>{nr(t,A),nr(t,l),e&&e()},b=t=>(e,i)=>{const n=t?x:d,s=()=>E(e,t,i);qa(n,[e,s]),Mr(()=>{nr(e,t?u:a),ir(e,t?g:o),$a(n)||ar(e,M,N,s)})};return Object(n["h"])(e,{onBeforeEnter(t){qa(j,[t]),ir(t,a),ir(t,r)},onBeforeAppear(t){qa(y,[t]),ir(t,u),ir(t,c)},onEnter:b(!1),onAppear:b(!0),onLeave(t,e){const i=()=>m(t,e);ir(t,I),cr(),ir(t,l),Mr(()=>{nr(t,I),ir(t,A),$a(h)||ar(t,M,L,i)}),qa(h,[t,i])},onEnterCancelled(t){E(t,!1),qa(S,[t])},onAppearCancelled(t){E(t,!0),qa(T,[t])},onLeaveCancelled(t){m(t),qa(w,[t])}})}function tr(t){if(null==t)return null;if(Object(n["v"])(t))return[er(t.enter),er(t.leave)];{const e=er(t);return[e,e]}}function er(t){const e=Object(n["O"])(t);return e}function ir(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function nr(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:i}=t;i&&(i.delete(e),i.size||(t._vtc=void 0))}function Mr(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sr=0;function ar(t,e,i,n){const M=t._endId=++sr,s=()=>{M===t._endId&&n()};if(i)return setTimeout(s,i);const{type:a,timeout:r,propCount:o}=rr(t,e);if(!a)return n();const u=a+"end";let c=0;const g=()=>{t.removeEventListener(u,I),s()},I=e=>{e.target===t&&++c>=o&&g()};setTimeout(()=>{c<o&&g()},r+1),t.addEventListener(u,I)}function rr(t,e){const i=window.getComputedStyle(t),n=t=>(i[t]||"").split(", "),M=n(Fa+"Delay"),s=n(Fa+"Duration"),a=or(M,s),r=n(Ra+"Delay"),o=n(Ra+"Duration"),u=or(r,o);let c=null,g=0,I=0;e===Fa?a>0&&(c=Fa,g=a,I=s.length):e===Ra?u>0&&(c=Ra,g=u,I=o.length):(g=Math.max(a,u),c=g>0?a>u?Fa:Ra:null,I=c?c===Fa?s.length:o.length:0);const l=c===Fa&&/\b(transform|all)(,|$)/.test(i[Fa+"Property"]);return{type:c,timeout:g,propCount:I,hasTransform:l}}function or(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,i)=>ur(e)+ur(t[i])))}function ur(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function cr(){return document.body.offsetHeight}const gr=new WeakMap,Ir=new WeakMap,lr={name:"TransitionGroup",props:Object(n["h"])({},_a,{tag:String,moveClass:String}),setup(t,{slots:e}){const i=ds(),n=vi();let M,s;return cn(()=>{if(!M.length)return;const e=t.moveClass||(t.name||"v")+"-move";if(!jr(M[0].el,i.vnode.el,e))return;M.forEach(Dr),M.forEach(Nr);const n=M.filter(Lr);cr(),n.forEach(t=>{const i=t.el,n=i.style;ir(i,e),n.transform=n.webkitTransform=n.transitionDuration="";const M=i._moveCb=t=>{t&&t.target!==i||t&&!/transform$/.test(t.propertyName)||(i.removeEventListener("transitionend",M),i._moveCb=null,nr(i,e))};i.addEventListener("transitionend",M)})}),()=>{const a=Jt(t),r=Ka(a);let o=a.tag||mM;M=s,s=e.default?Pi(e.default()):[];for(let t=0;t<s.length;t++){const e=s[t];null!=e.key&&Qi(e,Gi(e,r,n,i))}if(M)for(let t=0;t<M.length;t++){const e=M[t];Qi(e,Gi(e,r,n,i)),gr.set(e,e.el.getBoundingClientRect())}return XM(o,null,s)}}},Ar=lr;function Dr(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Nr(t){Ir.set(t,t.el.getBoundingClientRect())}function Lr(t){const e=gr.get(t),i=Ir.get(t),n=e.left-i.left,M=e.top-i.top;if(n||M){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${n}px,${M}px)`,e.transitionDuration="0s",t}}function jr(t,e,i){const n=t.cloneNode();t._vtc&&t._vtc.forEach(t=>{t.split(/\s+/).forEach(t=>t&&n.classList.remove(t))}),i.split(/\s+/).forEach(t=>t&&n.classList.add(t)),n.style.display="none";const M=1===e.nodeType?e:e.parentNode;M.appendChild(n);const{hasTransform:s}=rr(n);return M.removeChild(n),s}const dr=t=>{const e=t.props["onUpdate:modelValue"];return Object(n["o"])(e)?t=>Object(n["n"])(e,t):e};function Sr(t){t.target.composing=!0}function hr(t){const e=t.target;e.composing&&(e.composing=!1,wr(e,"input"))}function wr(t,e){const i=document.createEvent("HTMLEvents");i.initEvent(e,!0,!0),t.dispatchEvent(i)}const yr={created(t,{modifiers:{lazy:e,trim:i,number:M}},s){t._assign=dr(s);const a=M||s.props&&"number"===s.props.type;ba(t,e?"change":"input",e=>{if(e.target.composing)return;let M=t.value;i?M=M.trim():a&&(M=Object(n["O"])(M)),t._assign(M)}),i&&ba(t,"change",()=>{t.value=t.value.trim()}),e||(ba(t,"compositionstart",Sr),ba(t,"compositionend",hr),ba(t,"change",hr))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:i,trim:M,number:s}},a){if(t._assign=dr(a),t.composing)return;if(document.activeElement===t){if(i)return;if(M&&t.value.trim()===e)return;if((s||"number"===t.type)&&Object(n["O"])(t.value)===e)return}const r=null==e?"":e;t.value!==r&&(t.value=r)}},xr={deep:!0,created(t,e,i){t._assign=dr(i),ba(t,"change",()=>{const e=t._modelValue,i=pr(t),M=t.checked,s=t._assign;if(Object(n["o"])(e)){const t=Object(n["G"])(e,i),a=-1!==t;if(M&&!a)s(e.concat(i));else if(!M&&a){const i=[...e];i.splice(t,1),s(i)}}else if(Object(n["B"])(e)){const t=new Set(e);M?t.add(i):t.delete(i),s(t)}else s(Cr(t,M))})},mounted:Tr,beforeUpdate(t,e,i){t._assign=dr(i),Tr(t,e,i)}};function Tr(t,{value:e,oldValue:i},M){t._modelValue=e,Object(n["o"])(e)?t.checked=Object(n["G"])(e,M.props.value)>-1:Object(n["B"])(e)?t.checked=e.has(M.props.value):e!==i&&(t.checked=Object(n["F"])(e,Cr(t,!0)))}const Er={created(t,{value:e},i){t.checked=Object(n["F"])(e,i.props.value),t._assign=dr(i),ba(t,"change",()=>{t._assign(pr(t))})},beforeUpdate(t,{value:e,oldValue:i},M){t._assign=dr(M),e!==i&&(t.checked=Object(n["F"])(e,M.props.value))}},mr={deep:!0,created(t,{value:e,modifiers:{number:i}},M){const s=Object(n["B"])(e);ba(t,"change",()=>{const e=Array.prototype.filter.call(t.options,t=>t.selected).map(t=>i?Object(n["O"])(pr(t)):pr(t));t._assign(t.multiple?s?new Set(e):e:e[0])}),t._assign=dr(M)},mounted(t,{value:e}){br(t,e)},beforeUpdate(t,e,i){t._assign=dr(i)},updated(t,{value:e}){br(t,e)}};function br(t,e){const i=t.multiple;if(!i||Object(n["o"])(e)||Object(n["B"])(e)){for(let M=0,s=t.options.length;M<s;M++){const s=t.options[M],a=pr(s);if(i)Object(n["o"])(e)?s.selected=Object(n["G"])(e,a)>-1:s.selected=e.has(a);else if(Object(n["F"])(pr(s),e))return void(t.selectedIndex!==M&&(t.selectedIndex=M))}i||-1===t.selectedIndex||(t.selectedIndex=-1)}}function pr(t){return"_value"in t?t._value:t.value}function Cr(t,e){const i=e?"_trueValue":"_falseValue";return i in t?t[i]:e}const zr={created(t,e,i){fr(t,e,i,null,"created")},mounted(t,e,i){fr(t,e,i,null,"mounted")},beforeUpdate(t,e,i,n){fr(t,e,i,n,"beforeUpdate")},updated(t,e,i,n){fr(t,e,i,n,"updated")}};function fr(t,e,i,n,M){let s;switch(t.tagName){case"SELECT":s=mr;break;case"TEXTAREA":s=yr;break;default:switch(i.props&&i.props.type){case"checkbox":s=xr;break;case"radio":s=Er;break;default:s=yr}}const a=s[M];a&&a(t,e,i,n)}function Yr(){yr.getSSRProps=({value:t})=>({value:t}),Er.getSSRProps=({value:t},e)=>{if(e.props&&Object(n["F"])(e.props.value,t))return{checked:!0}},xr.getSSRProps=({value:t},e)=>{if(Object(n["o"])(t)){if(e.props&&Object(n["G"])(t,e.props.value)>-1)return{checked:!0}}else if(Object(n["B"])(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}}}const vr=["ctrl","shift","alt","meta"],Or={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>vr.some(i=>t[i+"Key"]&&!e.includes(i))},Ur=(t,e)=>(i,...n)=>{for(let t=0;t<e.length;t++){const n=Or[e[t]];if(n&&n(i,e))return}return t(i,...n)},kr={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wr=(t,e)=>i=>{if(!("key"in i))return;const M=Object(n["l"])(i.key);return e.some(t=>t===M||kr[t]===M)?t(i):void 0},Gr={beforeMount(t,{value:e},{transition:i}){t._vod="none"===t.style.display?"":t.style.display,i&&e?i.beforeEnter(t):Jr(t,e)},mounted(t,{value:e},{transition:i}){i&&e&&i.enter(t)},updated(t,{value:e,oldValue:i},{transition:n}){!e!==!i&&(n?e?(n.beforeEnter(t),Jr(t,!0),n.enter(t)):n.leave(t,()=>{Jr(t,!1)}):Jr(t,e))},beforeUnmount(t,{value:e}){Jr(t,e)}};function Jr(t,e){t.style.display=e?t._vod:"none"}function Zr(){Gr.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Qr=Object(n["h"])({patchProp:Ua},ga);let Pr,Vr=!1;function Br(){return Pr||(Pr=sM(Qr))}function Fr(){return Pr=Vr?Pr:aM(Qr),Vr=!0,Pr}const Rr=(...t)=>{Br().render(...t)},Xr=(...t)=>{Fr().hydrate(...t)},Hr=(...t)=>{const e=Br().createApp(...t);const{mount:i}=e;return e.mount=t=>{const M=qr(t);if(!M)return;const s=e._component;Object(n["p"])(s)||s.render||s.template||(s.template=M.innerHTML),M.innerHTML="";const a=i(M,!1,M instanceof SVGElement);return M instanceof Element&&(M.removeAttribute("v-cloak"),M.setAttribute("data-v-app","")),a},e},_r=(...t)=>{const e=Fr().createApp(...t);const{mount:i}=e;return e.mount=t=>{const e=qr(t);if(e)return i(e,!0,e instanceof SVGElement)},e};function qr(t){if(Object(n["D"])(t)){const e=document.querySelector(t);return e}return t}let $r=!1;const Kr=()=>{$r||($r=!0,Yr(),Zr())};const to=()=>{0}},"7a77":function(t,e,i){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},"7aac":function(t,e,i){"use strict";var n=i("c532");t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,i,M,s,a){var r=[];r.push(t+"="+encodeURIComponent(e)),n.isNumber(i)&&r.push("expires="+new Date(i).toGMTString()),n.isString(M)&&r.push("path="+M),n.isString(s)&&r.push("domain="+s),!0===a&&r.push("secure"),document.cookie=r.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7b0b":function(t,e,i){var n=i("da84"),M=i("1d80"),s=n.Object;t.exports=function(t){return s(M(t))}},"7c73":function(t,e,i){var n,M=i("825a"),s=i("37e8"),a=i("7839"),r=i("d012"),o=i("1be4"),u=i("cc12"),c=i("f772"),g=">",I="<",l="prototype",A="script",D=c("IE_PROTO"),N=function(){},L=function(t){return I+A+g+t+I+"/"+A+g},j=function(t){t.write(L("")),t.close();var e=t.parentWindow.Object;return t=null,e},d=function(){var t,e=u("iframe"),i="java"+A+":";return e.style.display="none",o.appendChild(e),e.src=String(i),t=e.contentWindow.document,t.open(),t.write(L("document.F=Object")),t.close(),t.F},S=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}S="undefined"!=typeof document?document.domain&&n?j(n):d():j(n);var t=a.length;while(t--)delete S[l][a[t]];return S()};r[D]=!0,t.exports=Object.create||function(t,e){var i;return null!==t?(N[l]=M(t),i=new N,N[l]=null,i[D]=t):i=S(),void 0===e?i:s.f(i,e)}},"7dd0":function(t,e,i){"use strict";var n=i("23e7"),M=i("c65b"),s=i("c430"),a=i("5e77"),r=i("1626"),o=i("9ed3"),u=i("e163"),c=i("d2bb"),g=i("d44e"),I=i("9112"),l=i("6eeb"),A=i("b622"),D=i("3f8c"),N=i("ae93"),L=a.PROPER,j=a.CONFIGURABLE,d=N.IteratorPrototype,S=N.BUGGY_SAFARI_ITERATORS,h=A("iterator"),w="keys",y="values",x="entries",T=function(){return this};t.exports=function(t,e,i,a,A,N,E){o(i,e,a);var m,b,p,C=function(t){if(t===A&&O)return O;if(!S&&t in Y)return Y[t];switch(t){case w:return function(){return new i(this,t)};case y:return function(){return new i(this,t)};case x:return function(){return new i(this,t)}}return function(){return new i(this)}},z=e+" Iterator",f=!1,Y=t.prototype,v=Y[h]||Y["@@iterator"]||A&&Y[A],O=!S&&v||C(A),U="Array"==e&&Y.entries||v;if(U&&(m=u(U.call(new t)),m!==Object.prototype&&m.next&&(s||u(m)===d||(c?c(m,d):r(m[h])||l(m,h,T)),g(m,z,!0,!0),s&&(D[z]=T))),L&&A==y&&v&&v.name!==y&&(!s&&j?I(Y,"name",y):(f=!0,O=function(){return M(v,this)})),A)if(b={values:C(y),keys:N?O:C(w),entries:C(x)},E)for(p in b)(S||f||!(p in Y))&&l(Y,p,b[p]);else n({target:e,proto:!0,forced:S||f},b);return s&&!E||Y[h]===O||l(Y,h,O,{name:A}),D[e]=O,b}},"7ded":function(t,e,i){"use strict";i.d(e,"a",(function(){return L}));var n=i("1fd5"),M=i("22e5"),s=i("589b"),a=i("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r{constructor(t,e){this._delegate=t,this.firebase=e,Object(s["_addComponent"])(t,new M["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(t,e=s["_DEFAULT_ENTRY_NAME"]){var i;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(t);return n.isInitialized()||"EXPLICIT"!==(null===(i=n.getComponent())||void 0===i?void 0:i.instantiationMode)||n.initialize(),n.getImmediate({identifier:e})}_removeServiceInstance(t,e=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(s["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new n["b"]("app-compat","Firebase",o);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(t){const e={},i={__esModule:!0,initializeApp:r,app:a,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:c,removeApp:M,useAsService:g,modularAPIs:s}};function M(t){delete e[t]}function a(t){if(t=t||s["_DEFAULT_ENTRY_NAME"],!Object(n["e"])(e,t))throw u.create("no-app",{appName:t});return e[t]}function r(M,a={}){const r=s["initializeApp"](M,a);if(Object(n["e"])(e,r.name))return e[r.name];const o=new t(r,i);return e[r.name]=o,o}function o(){return Object.keys(e).map(t=>e[t])}function c(e){const M=e.name,r=M.replace("-compat","");if(s["_registerComponent"](e)&&"PUBLIC"===e.type){const s=(t=a())=>{if("function"!==typeof t[r])throw u.create("invalid-app-argument",{appName:M});return t[r]()};void 0!==e.serviceProps&&Object(n["i"])(s,e.serviceProps),i[r]=s,t.prototype[r]=function(...t){const i=this._getService.bind(this,M);return i.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?i[r]:null}function g(t,e){if("serverAuth"===e)return null;const i=e;return i}return i["default"]=i,Object.defineProperty(i,"apps",{get:o}),a["App"]=t,i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){const t=c(r);function e(e){Object(n["i"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:g,extendNamespace:e,createSubscribe:n["g"],ErrorFactory:n["b"],deepExtend:n["i"]}),t}const I=g(),l=new a["b"]("@firebase/app-compat"),A="@firebase/app-compat",D="0.1.16";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){Object(s["registerVersion"])(A,D,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(n["m"])()&&void 0!==self.firebase){l.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&l.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const L=I;N()},"7e8e":function(t,e){var i=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function n(t){return i.test(t)}t.exports=n},"7f9a":function(t,e,i){var n=i("da84"),M=i("1626"),s=i("8925"),a=n.WeakMap;t.exports=M(a)&&/native code/.test(s(a))},8103:function(t,e,i){var n=i("d194"),M=n("toUpperCase");t.exports=M},"825a":function(t,e,i){var n=i("da84"),M=i("861d"),s=n.String,a=n.TypeError;t.exports=function(t){if(M(t))return t;throw a(s(t)+" is not an object")}},8264:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){var t="__v-click-outside",e="undefined"!=typeof window,i="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||i&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],M=function(t){var e=t.event,i=t.handler;(0,t.middleware)(e)&&i(e)},s=function(e,i){var s=function(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||function(t){return t},events:t.events||n,isActive:!(!1===t.isActive),detectIframe:!(!1===t.detectIframe),capture:Boolean(t.capture)}}(i.value),a=s.handler,r=s.middleware,o=s.detectIframe,u=s.capture;if(s.isActive){if(e[t]=s.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(t){var e=t.el,i=t.event,n=t.handler,s=t.middleware,a=i.path||i.composedPath&&i.composedPath();(a?a.indexOf(e)<0:!e.contains(i.target))&&M({event:i,handler:n,middleware:s})}({el:e,event:t,handler:a,middleware:r})},capture:u}})),o){var c={event:"blur",srcTarget:window,handler:function(t){return function(t){var e=t.el,i=t.event,n=t.handler,s=t.middleware;setTimeout((function(){var t=document.activeElement;t&&"IFRAME"===t.tagName&&!e.contains(t)&&M({event:i,handler:n,middleware:s})}),0)}({el:e,event:t,handler:a,middleware:r})},capture:u};e[t]=[].concat(e[t],[c])}e[t].forEach((function(i){var n=i.event,M=i.srcTarget,s=i.handler;return setTimeout((function(){e[t]&&M.addEventListener(n,s,u)}),0)}))}},a=function(e){(e[t]||[]).forEach((function(t){return t.srcTarget.removeEventListener(t.event,t.handler,t.capture)})),delete e[t]},r=e?{beforeMount:s,updated:function(t,e){var i=e.value,n=e.oldValue;JSON.stringify(i)!==JSON.stringify(n)&&(a(t),s(t,{value:i}))},unmounted:a}:{};return{install:function(t){t.directive("click-outside",r)},directive:r}}))},"83ab":function(t,e,i){var n=i("d039");t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"83b9":function(t,e,i){"use strict";var n=i("d925"),M=i("e683");t.exports=function(t,e){return t&&!n(e)?M(t,e):e}},8418:function(t,e,i){"use strict";var n=i("a04b"),M=i("9bf2"),s=i("5c6c");t.exports=function(t,e,i){var a=n(e);a in t?M.f(t,a,s(0,i)):t[a]=i}},"848b":function(t,e,i){"use strict";var n=i("5cce").version,M={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){M[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}}));var s={};function a(t,e,i){if("object"!==typeof t)throw new TypeError("options must be an object");var n=Object.keys(t),M=n.length;while(M-- >0){var s=n[M],a=e[s];if(a){var r=t[s],o=void 0===r||a(r,s,t);if(!0!==o)throw new TypeError("option "+s+" must be "+o)}else if(!0!==i)throw Error("Unknown option "+s)}}M.transitional=function(t,e,i){function M(t,e){return"[Axios v"+n+"] Transitional option '"+t+"'"+e+(i?". "+i:"")}return function(i,n,a){if(!1===t)throw new Error(M(n," has been removed"+(e?" in "+e:"")));return e&&!s[n]&&(s[n]=!0,console.warn(M(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(i,n,a)}},t.exports={assertOptions:a,validators:M}},"84b5":function(t,e,i){"use strict";var n=i("7a23");function M(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.config.globalProperties.$chartist=i("ba48"),t.component("Chartist",{compatConfig:{RENDER_FUNCTION:!1},props:{ratio:{type:String,default:"ct-square"},data:{type:Object,default:function(){return{series:[],labels:[]}}},options:{type:Object,default:function(){return{}}},type:{type:String,required:!0,validator:function(t){return"Pie"===t||"Line"===t||"Bar"===t}},eventHandlers:{type:Array,default:function(){return[]}},responsiveOptions:{type:Array,default:function(){return[]}},noData:{type:Object,default:function(){return{message:"",class:"ct-nodata"}}}},data:function(){return{chart:null,message:""}},watch:{ratio:"redraw",options:{handler:"redraw",deep:!0},responsiveOptions:{handler:"redraw",deep:!0},data:{handler:"redraw",deep:!0},type:"draw",eventHandlers:"resetEventHandlers",hasNoData:{immediate:!0,handler:function(t){t?this.setNoData():this.clear()}}},mounted:function(){this.draw()},computed:{hasNoData:function(){return!this.data||!this.data.series||this.data.series.length<1||"Pie"!==this.type&&!this.options.distributeSeries&&this.data.series.every((function(t){return Array.isArray(t)?!t.length:!t.data.length}))},noDataOptions:function(){return{message:e.messageNoData||this.noData.message,class:e.classNoData||this.noData.class}}},methods:{clear:function(){this.message=""},draw:function(){this.chart=this.hasNoData?null:new this.$chartist[this.type](this.$refs.chart,this.data,this.options,this.responsiveOptions),this.setEventHandlers()},redraw:function(){this.chart?this.chart.update(this.data,this.options):this.draw()},resetEventHandlers:function(t,e){if(this.chart){var i=!0,n=!1,M=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var r=s.value;this.chart.off(r.event,r.fn)}}catch(A){n=!0,M=A}finally{try{!i&&a.return&&a.return()}finally{if(n)throw M}}var o=!0,u=!1,c=void 0;try{for(var g,I=t[Symbol.iterator]();!(o=(g=I.next()).done);o=!0){var l=g.value;this.chart.on(l.event,l.fn)}}catch(A){u=!0,c=A}finally{try{!o&&I.return&&I.return()}finally{if(u)throw c}}}},setEventHandlers:function(){if(this.chart&&this.eventHandlers){var t=!0,e=!1,i=void 0;try{for(var n,M=this.eventHandlers[Symbol.iterator]();!(t=(n=M.next()).done);t=!0){var s=n.value;this.chart.on(s.event,s.fn)}}catch(a){e=!0,i=a}finally{try{!t&&M.return&&M.return()}finally{if(e)throw i}}}},setNoData:function(){this.message=this.noDataOptions.message}},render:function(){var t=this.message||this.$slots.default||[];return(0,n.h)("div",{ref:"chart",class:[this.ratio,M({},this.noDataOptions.class,this.hasNoData)]},t)}})}},"861d":function(t,e,i){var n=i("1626");t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},8925:function(t,e,i){var n=i("e330"),M=i("1626"),s=i("c6cd"),a=n(Function.toString);M(s.inspectSource)||(s.inspectSource=function(t){return a(t)}),t.exports=s.inspectSource},"8aa5":function(t,e,i){"use strict";var n=i("6547").charAt;t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},"8df4":function(t,e,i){"use strict";var n=i("7a77");function M(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var i=this;this.promise.then((function(t){if(i._listeners){var e,n=i._listeners.length;for(e=0;e<n;e++)i._listeners[e](t);i._listeners=null}})),this.promise.then=function(t){var e,n=new Promise((function(t){i.subscribe(t),e=t})).then(t);return n.cancel=function(){i.unsubscribe(e)},n},t((function(t){i.reason||(i.reason=new n(t),e(i.reason))}))}M.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},M.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},M.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},M.source=function(){var t,e=new M((function(e){t=e}));return{token:e,cancel:t}},t.exports=M},"8f6b":function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return bn})),i.d(e,"b",(function(){return Cn})),i.d(e,"c",(function(){return pn})),i.d(e,"d",(function(){return fn})),i.d(e,"e",(function(){return zn})),i.d(e,"f",(function(){return Yn})),i.d(e,"g",(function(){return vn})),i.d(e,"h",(function(){return En})),i.d(e,"i",(function(){return mn}));var n,M="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},a=a||{},r=M||self;function o(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function c(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,I)&&t[I]||(t[I]=++l)}var I="closure_uid_"+(1e9*Math.random()>>>0),l=0;function A(t,e,i){return t.call.apply(t.bind,arguments)}function D(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function N(t,e,i){return N=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A:D,N.apply(null,arguments)}function L(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function j(t,e){function i(){}i.prototype=e.prototype,t.Z=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,n){for(var M=Array(arguments.length-2),s=2;s<arguments.length;s++)M[s-2]=arguments[s];return e.prototype[i].apply(t,M)}}function d(){this.s=this.s,this.o=this.o}var S=0,h={};d.prototype.s=!1,d.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=g(this);delete h[t]}},d.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1},y=Array.prototype.forEach?function(t,e,i){Array.prototype.forEach.call(t,e,i)}:function(t,e,i){const n=t.length,M="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)s in M&&e.call(i,M[s],s,t)};function x(t){t:{var e=Zi;const i=t.length,n="string"===typeof t?t.split(""):t;for(let M=0;M<i;M++)if(M in n&&e.call(void 0,n[M],M,t)){e=M;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function T(t){return Array.prototype.concat.apply([],arguments)}function E(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function m(t){return/^[\s\xa0]*$/.test(t)}var b,p=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function z(t,e){return t<e?-1:t>e?1:0}t:{var f=r.navigator;if(f){var Y=f.userAgent;if(Y){b=Y;break t}}b=""}function v(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function O(t){const e={};for(const i in t)e[i]=t[i];return e}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(t,e){let i,n;for(let M=1;M<arguments.length;M++){for(i in n=arguments[M],n)t[i]=n[i];for(let e=0;e<U.length;e++)i=U[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function W(t){return W[" "](t),t}function G(t){var e=$;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}W[" "]=o;var J,Z=C(b,"Opera"),Q=C(b,"Trident")||C(b,"MSIE"),P=C(b,"Edge"),V=P||Q,B=C(b,"Gecko")&&!(C(b.toLowerCase(),"webkit")&&!C(b,"Edge"))&&!(C(b,"Trident")||C(b,"MSIE"))&&!C(b,"Edge"),F=C(b.toLowerCase(),"webkit")&&!C(b,"Edge");function R(){var t=r.document;return t?t.documentMode:void 0}t:{var X="",H=function(){var t=b;return B?/rv:([^\);]+)(\)|;)/.exec(t):P?/Edge\/([\d\.]+)/.exec(t):Q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):F?/WebKit\/(\S+)/.exec(t):Z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(H&&(X=H?H[1]:""),Q){var _=R();if(null!=_&&_>parseFloat(X)){J=String(_);break t}}J=X}var q,$={};function K(){return G((function(){let t=0;const e=p(String(J)).split("."),i=p("9").split("."),n=Math.max(e.length,i.length);for(let a=0;0==t&&a<n;a++){var M=e[a]||"",s=i[a]||"";do{if(M=/(\d*)(\D*)(.*)/.exec(M)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==M[0].length&&0==s[0].length)break;t=z(0==M[1].length?0:parseInt(M[1],10),0==s[1].length?0:parseInt(s[1],10))||z(0==M[2].length,0==s[2].length)||z(M[2],s[2]),M=M[3],s=s[3]}while(0==t)}return 0<=t}))}if(r.document&&Q){var tt=R();q=tt||(parseInt(J,10)||void 0)}else q=void 0;var et=q,it=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{r.addEventListener("test",o,e),r.removeEventListener("test",o,e)}catch(i){}return t}();function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Mt(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{W(e.nodeName);var M=!0;break t}catch(s){}M=!1}M||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mt.Z.h.call(this)}}nt.prototype.h=function(){this.defaultPrevented=!0},j(Mt,nt);var st={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var at="closure_listenable_"+(1e6*Math.random()|0),rt=0;function ot(t,e,i,n,M){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.ia=M,this.key=++rt,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ct(t){this.src=t,this.g={},this.h=0}function gt(t,e){var i=e.type;if(i in t.g){var n,M=t.g[i],s=w(M,e);(n=0<=s)&&Array.prototype.splice.call(M,s,1),n&&(ut(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function It(t,e,i,n){for(var M=0;M<t.length;++M){var s=t[M];if(!s.ca&&s.listener==e&&s.capture==!!i&&s.ia==n)return M}return-1}ct.prototype.add=function(t,e,i,n,M){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var a=It(t,e,n,M);return-1<a?(e=t[a],i||(e.fa=!1)):(e=new ot(e,this.src,s,!!n,M),e.fa=i,t.push(e)),e};var lt="closure_lm_"+(1e6*Math.random()|0),At={};function Dt(t,e,i,n,M){if(n&&n.once)return jt(t,e,i,n,M);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dt(t,e[s],i,n,M);return null}return i=Tt(i),t&&t[at]?t.N(e,i,c(n)?!!n.capture:!!n,M):Nt(t,e,i,!1,n,M)}function Nt(t,e,i,n,M,s){if(!e)throw Error("Invalid event type");var a=c(M)?!!M.capture:!!M,r=yt(t);if(r||(t[lt]=r=new ct(t)),i=r.add(e,i,n,a,s),i.proxy)return i;if(n=Lt(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)it||(M=a),void 0===M&&(M=!1),t.addEventListener(e.toString(),n,M);else if(t.attachEvent)t.attachEvent(ht(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function Lt(){function t(i){return e.call(t.src,t.listener,i)}var e=wt;return t}function jt(t,e,i,n,M){if(Array.isArray(e)){for(var s=0;s<e.length;s++)jt(t,e[s],i,n,M);return null}return i=Tt(i),t&&t[at]?t.O(e,i,c(n)?!!n.capture:!!n,M):Nt(t,e,i,!0,n,M)}function dt(t,e,i,n,M){if(Array.isArray(e))for(var s=0;s<e.length;s++)dt(t,e[s],i,n,M);else n=c(n)?!!n.capture:!!n,i=Tt(i),t&&t[at]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],i=It(s,i,n,M),-1<i&&(ut(s[i]),Array.prototype.splice.call(s,i,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=It(e,i,n,M)),(i=-1<t?e[t]:null)&&St(i))}function St(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[at])gt(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(ht(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=yt(e))?(gt(i,t),0==i.h&&(i.src=null,e[lt]=null)):ut(t)}}}function ht(t){return t in At?At[t]:At[t]="on"+t}function wt(t,e){if(t.ca)t=!0;else{e=new Mt(e,this);var i=t.listener,n=t.ia||t.src;t.fa&&St(t),t=i.call(n,e)}return t}function yt(t){return t=t[lt],t instanceof ct?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function Et(){d.call(this),this.i=new ct(this),this.P=this,this.I=null}function mt(t,e){var i,n=t.I;if(n)for(i=[];n;n=n.I)i.push(n);if(t=t.P,n=e.type||e,"string"===typeof e)e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var M=e;e=new nt(n,t),k(e,M)}if(M=!0,i)for(var s=i.length-1;0<=s;s--){var a=e.g=i[s];M=bt(a,n,!0,e)&&M}if(a=e.g=t,M=bt(a,n,!0,e)&&M,M=bt(a,n,!1,e)&&M,i)for(s=0;s<i.length;s++)a=e.g=i[s],M=bt(a,n,!1,e)&&M}function bt(t,e,i,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var M=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.ca&&a.capture==i){var r=a.listener,o=a.ia||a.src;a.fa&&gt(t.i,a),M=!1!==r.call(o,n)&&M}}return M&&!n.defaultPrevented}j(Et,d),Et.prototype[at]=!0,Et.prototype.removeEventListener=function(t,e,i,n){dt(this,t,e,i,n)},Et.prototype.M=function(){if(Et.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)ut(i[n]);delete e.g[t],e.h--}}this.I=null},Et.prototype.N=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},Et.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var pt=r.JSON.stringify;function Ct(){var t=Gt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zt{constructor(){this.h=this.g=null}add(t,e){const i=Yt.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}}var ft,Yt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vt,t=>t.reset());class vt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){r.setTimeout(()=>{throw t},0)}function Ut(t,e){ft||kt(),Wt||(ft(),Wt=!0),Gt.add(t,e)}function kt(){var t=r.Promise.resolve(void 0);ft=function(){t.then(Jt)}}var Wt=!1,Gt=new zt;function Jt(){for(var t;t=Ct();){try{t.h.call(t.g)}catch(i){Ot(i)}var e=Yt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wt=!1}function Zt(t,e){Et.call(this),this.h=t||1,this.g=e||r,this.j=N(this.kb,this),this.l=Date.now()}function Qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Pt(t,e,i){if("function"===typeof t)i&&(t=N(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=N(t.handleEvent,t)}return 2147483647<Number(e)?-1:r.setTimeout(t,e||0)}function Vt(t){t.g=Pt(()=>{t.g=null,t.i&&(t.i=!1,Vt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}j(Zt,Et),n=Zt.prototype,n.da=!1,n.S=null,n.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),mt(this,"tick"),this.da&&(Qt(this),this.start()))}},n.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Zt.Z.M.call(this),Qt(this),delete this.g};class Bt extends d{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}M(){super.M(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(t){d.call(this),this.h=t,this.g={}}j(Ft,d);var Rt=[];function Xt(t,e,i,n){Array.isArray(i)||(i&&(Rt[0]=i.toString()),i=Rt);for(var M=0;M<i.length;M++){var s=Dt(e,i[M],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ht(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&St(t)}),t),t.g={}}function _t(){this.g=!0}function qt(t,e,i,n,M,s){t.info((function(){if(t.g)if(s)for(var a="",r=s.split("&"),o=0;o<r.length;o++){var u=r[o].split("=");if(1<u.length){var c=u[0];u=u[1];var g=c.split("_");a=2<=g.length&&"type"==g[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+n+") [attempt "+M+"]: "+e+"\n"+i+"\n"+a}))}function $t(t,e,i,n,M,s,a){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+M+"]: "+e+"\n"+i+"\n"+s+" "+a}))}function Kt(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,i)+(n?" "+n:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var M=n[1];if(Array.isArray(M)&&!(1>M.length)){var s=M[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<M.length;a++)M[a]=""}}}return pt(i)}catch(r){return e}}Ft.prototype.M=function(){Ft.Z.M.call(this),Ht(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},_t.prototype.Aa=function(){this.g=!1},_t.prototype.info=function(){};var ie={},ne=null;function Me(){return ne=ne||new Et}function se(t){nt.call(this,ie.Ma,t)}function ae(t){const e=Me();mt(e,new se(e,t))}function re(t,e){nt.call(this,ie.STAT_EVENT,t),this.stat=e}function oe(t){const e=Me();mt(e,new re(e,t))}function ue(t,e){nt.call(this,ie.Na,t),this.size=e}function ce(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return r.setTimeout((function(){t()}),e)}ie.Ma="serverreachability",j(se,nt),ie.STAT_EVENT="statevent",j(re,nt),ie.Na="timingevent",j(ue,nt);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ie={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function le(){}function Ae(t){return t.h||(t.h=t.i())}function De(){}le.prototype.h=null;var Ne,Le={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function je(){nt.call(this,"d")}function de(){nt.call(this,"c")}function Se(){}function he(t,e,i,n){this.l=t,this.j=e,this.m=i,this.X=n||1,this.V=new Ft(this),this.P=ye,t=V?125:void 0,this.W=new Zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new we}function we(){this.i=null,this.g="",this.h=!1}j(je,nt),j(de,nt),j(Se,le),Se.prototype.g=function(){return new XMLHttpRequest},Se.prototype.i=function(){return{}},Ne=new Se;var ye=45e3,xe={},Te={};function Ee(t,e,i){t.K=1,t.v=qe(Be(e)),t.s=i,t.U=!0,me(t,null)}function me(t,e){t.F=Date.now(),ze(t),t.A=Be(t.v);var i=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),Ii(i.h,"t",n),t.C=0,i=t.l.H,t.h=new we,t.g=dn(t.l,i?e:null,!t.s),0<t.O&&(t.L=new Bt(N(t.Ia,t,t.g),t.O)),Xt(t.V,t.g,"readystatechange",t.gb),e=t.H?O(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ae(1),qt(t.j,t.u,t.A,t.m,t.X,t.s)}function be(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function pe(t,e,i){let n,M=!0;for(;!t.I&&t.C<i.length;){if(n=Ce(t,i),n==Te){4==e&&(t.o=4,oe(14),M=!1),Kt(t.j,t.m,null,"[Incomplete Response]");break}if(n==xe){t.o=4,oe(15),Kt(t.j,t.m,i,"[Invalid Chunk]"),M=!1;break}Kt(t.j,t.m,n,null),Ue(t,n)}be(t)&&n!=Te&&n!=xe&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,oe(16),M=!1),t.i=t.i&&M,M?0<i.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),gn(e),e.L=!0,oe(11))):(Kt(t.j,t.m,i,"[Invalid Chunked Response]"),Oe(t),ve(t))}function Ce(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?Te:(i=Number(e.substring(i,n)),isNaN(i)?xe:(n+=1,n+i>e.length?Te:(e=e.substr(n,i),t.C=n+i,e)))}function ze(t){t.Y=Date.now()+t.P,fe(t,t.P)}function fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ce(N(t.eb,t),e)}function Ye(t){t.B&&(r.clearTimeout(t.B),t.B=null)}function ve(t){0==t.l.G||t.I||An(t.l,t)}function Oe(t){Ye(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Qt(t.W),Ht(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ue(t,e){try{var i=t.l;if(0!=i.G&&(i.g==t||Si(i.i,t)))if(i.I=t.N,!t.J&&Si(i.i,t)&&3==i.G){try{var n=i.Ca.g.parse(e)}catch(u){n=null}if(Array.isArray(n)&&3==n.length){var M=n;if(0==M[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;ln(i),tn(i)}cn(i),oe(18)}}else i.ta=M[1],0<i.ta-i.U&&37500>M[2]&&i.N&&0==i.A&&!i.v&&(i.v=ce(N(i.ab,i),6e3));if(1>=di(i.i)&&i.ka){try{i.ka()}catch(u){}i.ka=void 0}}else Nn(i,11)}else if((t.J||i.g==t)&&ln(i),!m(e))for(M=i.Ca.g.parse(e),e=0;e<M.length;e++){let u=M[e];if(i.U=u[0],u=u[1],2==i.G)if("c"==u[0]){i.J=u[1],i.la=u[2];const e=u[3];null!=e&&(i.ma=e,i.h.info("VER="+i.ma));const M=u[4];null!=M&&(i.za=M,i.h.info("SVER="+i.za));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(n=1.5*c,i.K=n,i.h.info("backChannelRequestTimeoutMs_="+n)),n=i;const g=t.g;if(g){const t=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=n.i;!s.g&&(C(t,"spdy")||C(t,"quic")||C(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(hi(s,s.h),s.h=null))}if(n.D){const t=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.sa=t,_e(n.F,n.D,t))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-t.F,i.h.info("Handshake RTT: "+i.O+"ms")),n=i;var a=t;if(n.oa=jn(n,n.H?n.la:null,n.W),a.J){wi(n.i,a);var r=a,o=n.K;o&&r.setTimeout(o),r.B&&(Ye(r),ze(r)),n.g=a}else un(n);0<i.l.length&&Mn(i)}else"stop"!=u[0]&&"close"!=u[0]||Nn(i,7);else 3==i.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Nn(i,7):Ki(i):"noop"!=u[0]&&i.j&&i.j.wa(u),i.A=0)}ae(4)}catch(u){}}function ke(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}function We(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)y(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var i=t.T();else if(t.R&&"function"==typeof t.R)i=void 0;else if(u(t)||"string"===typeof t){i=[];for(var n=t.length,M=0;M<n;M++)i.push(M)}else for(M in i=[],n=0,t)i[n++]=M;n=ke(t),M=n.length;for(var s=0;s<M;s++)e.call(void 0,n[s],i&&i[s],t)}}function Ge(t,e){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof Ge)for(i=t.T(),n=0;n<i.length;n++)this.set(i[n],t.get(i[n]));else for(n in t)this.set(n,t[n])}function Je(t){if(t.i!=t.g.length){for(var e=0,i=0;e<t.g.length;){var n=t.g[e];Ze(t.h,n)&&(t.g[i++]=n),e++}t.g.length=i}if(t.i!=t.g.length){var M={};for(i=e=0;e<t.g.length;)n=t.g[e],Ze(M,n)||(t.g[i++]=n,M[n]=1),e++;t.g.length=i}}function Ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}n=he.prototype,n.setTimeout=function(t){this.P=t},n.gb=function(t){t=t.target;const e=this.L;e&&3==Ri(t)?e.l():this.Ia(t)},n.Ia=function(t){try{if(t==this.g)t:{const g=Ri(this.g);var e=this.g.Da();const I=this.g.ba();if(!(3>g)&&(3!=g||V||this.g&&(this.h.h||this.g.ga()||Xi(this.g)))){this.I||4!=g||7==e||ae(8==e||0>=I?3:2),Ye(this);var i=this.g.ba();this.N=i;e:if(be(this)){var n=Xi(this.g);t="";var M=n.length,s=4==Ri(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),ve(this);var a="";break e}this.h.i=new r.TextDecoder}for(e=0;e<M;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:s&&e==M-1});n.splice(0,M),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=200==i,$t(this.j,this.u,this.A,this.m,this.X,g,i),this.i){if(this.$&&!this.J){e:{if(this.g){var o,u=this.g;if((o=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(o)){var c=o;break e}}c=null}if(!(i=c)){this.i=!1,this.o=3,oe(12),Oe(this),ve(this);break t}Kt(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ue(this,i)}this.U?(pe(this,g,a),V&&this.i&&3==g&&(Xt(this.V,this.W,"tick",this.fb),this.W.start())):(Kt(this.j,this.m,a,null),Ue(this,a)),4==g&&Oe(this),this.i&&!this.I&&(4==g?An(this.l,this):(this.i=!1,ze(this)))}else 400==i&&0<a.indexOf("Unknown SID")?(this.o=3,oe(12)):(this.o=0,oe(13)),Oe(this),ve(this)}}}catch(g){}},n.fb=function(){if(this.g){var t=Ri(this.g),e=this.g.ga();this.C<e.length&&(Ye(this),pe(this,t,e),this.i&&4!=t&&ze(this))}},n.cancel=function(){this.I=!0,Oe(this)},n.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(ae(3),oe(17)),Oe(this),this.o=2,ve(this)):fe(this,this.Y-t)},n=Ge.prototype,n.R=function(){Je(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},n.T=function(){return Je(this),this.g.concat()},n.get=function(t,e){return Ze(this.h,t)?this.h[t]:e},n.set=function(t,e){Ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},n.forEach=function(t,e){for(var i=this.T(),n=0;n<i.length;n++){var M=i[n],s=this.get(M);t.call(e,s,M,this)}};var Qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Pe(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),M=null;if(0<=n){var s=t[i].substring(0,n);M=t[i].substring(n+1)}else s=t[i];e(s,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Ve(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ve){this.g=void 0!==e?e:t.g,Fe(this,t.j),this.s=t.s,Re(this,t.i),Xe(this,t.m),this.l=t.l,e=t.h;var i=new oi;i.i=e.i,e.g&&(i.g=new Ge(e.g),i.h=e.h),He(this,i),this.o=t.o}else t&&(i=String(t).match(Qe))?(this.g=!!e,Fe(this,i[1]||"",!0),this.s=ti(i[2]||""),Re(this,i[3]||"",!0),Xe(this,i[4]),this.l=ti(i[5]||"",!0),He(this,i[6]||"",!0),this.o=ti(i[7]||"")):(this.g=!!e,this.h=new oi(null,this.g))}function Be(t){return new Ve(t)}function Fe(t,e,i){t.j=i?ti(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Re(t,e,i){t.i=i?ti(e,!0):e}function Xe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function He(t,e,i){e instanceof oi?(t.h=e,Ai(t.h,t.g)):(i||(e=ei(e,ai)),t.h=new oi(e,t.g))}function _e(t,e,i){t.h.set(e,i)}function qe(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $e(t){return t instanceof Ve?Be(t):new Ve(t,void 0)}function Ke(t,e,i,n){var M=new Ve(null,void 0);return t&&Fe(M,t),e&&Re(M,e),i&&Xe(M,i),n&&(M.l=n),M}function ti(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ei(t,e,i){return"string"===typeof t?(t=encodeURI(t).replace(e,ii),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ii(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ei(e,ni,!0),":");var i=this.i;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ei(e,ni,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.m,null!=i&&t.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&t.push("/"),t.push(ei(i,"/"==i.charAt(0)?si:Mi,!0))),(i=this.h.toString())&&t.push("?",i),(i=this.o)&&t.push("#",ei(i,ri)),t.join("")};var ni=/[#\/\?@]/g,Mi=/[#\?:]/g,si=/[#\?]/g,ai=/[#\?@]/g,ri=/#/g;function oi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ui(t){t.g||(t.g=new Ge,t.h=0,t.i&&Pe(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function ci(t,e){ui(t),e=li(t,e),Ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Je(t)))}function gi(t,e){return ui(t),e=li(t,e),Ze(t.g.h,e)}function Ii(t,e,i){ci(t,e),0<i.length&&(t.i=null,t.g.set(li(t,e),E(i)),t.h+=i.length)}function li(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ai(t,e){e&&!t.j&&(ui(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(ci(this,e),Ii(this,i,t))}),t)),t.j=e}n=oi.prototype,n.add=function(t,e){ui(this),this.i=null,t=li(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},n.forEach=function(t,e){ui(this),this.g.forEach((function(i,n){y(i,(function(i){t.call(e,i,n,this)}),this)}),this)},n.T=function(){ui(this);for(var t=this.g.R(),e=this.g.T(),i=[],n=0;n<e.length;n++)for(var M=t[n],s=0;s<M.length;s++)i.push(e[n]);return i},n.R=function(t){ui(this);var e=[];if("string"===typeof t)gi(this,t)&&(e=T(e,this.g.get(li(this,t))));else{t=this.g.R();for(var i=0;i<t.length;i++)e=T(e,t[i])}return e},n.set=function(t,e){return ui(this),this.i=null,t=li(this,t),gi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},n.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),i=0;i<e.length;i++){var n=e[i],M=encodeURIComponent(String(n));n=this.R(n);for(var s=0;s<n.length;s++){var a=M;""!==n[s]&&(a+="="+encodeURIComponent(String(n[s]))),t.push(a)}}return this.i=t.join("&")};var Di=class{constructor(t,e){this.h=t,this.g=e}};function Ni(t){this.l=t||Li,r.PerformanceNavigationTiming?(t=r.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(r.g&&r.g.Ea&&r.g.Ea()&&r.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Li=10;function ji(t){return!!t.h||!!t.g&&t.g.size>=t.j}function di(t){return t.h?1:t.g?t.g.size:0}function Si(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function hi(t,e){t.g?t.g.add(e):t.h=e}function wi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function yi(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return E(t.i)}function xi(){}function Ti(){this.g=new xi}function Ei(t,e,i){const n=i||"";try{We(t,(function(t,i){let M=t;c(t)&&(M=pt(t)),e.push(n+i+"="+encodeURIComponent(M))}))}catch(M){throw e.push(n+"type="+encodeURIComponent("_badmap")),M}}function mi(t,e){const i=new _t;if(r.Image){const n=new Image;n.onload=L(bi,i,n,"TestLoadImage: loaded",!0,e),n.onerror=L(bi,i,n,"TestLoadImage: error",!1,e),n.onabort=L(bi,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=L(bi,i,n,"TestLoadImage: timeout",!1,e),r.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}function bi(t,e,i,n,M){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,M(n)}catch(s){}}function pi(t){this.l=t.$b||null,this.j=t.ib||!1}function Ci(t,e){Et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ni.prototype.cancel=function(){if(this.i=yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},xi.prototype.stringify=function(t){return r.JSON.stringify(t,void 0)},xi.prototype.parse=function(t){return r.JSON.parse(t,void 0)},j(pi,le),pi.prototype.g=function(){return new Ci(this.l,this.j)},pi.prototype.i=function(t){return function(){return t}}({}),j(Ci,Et);var zi=0;function fi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vi(t)}function vi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}n=Ci.prototype,n.open=function(t,e){if(this.readyState!=zi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vi(this)},n.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||r).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Yi(this)),this.readyState=zi},n.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof r.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},n.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yi(this):vi(this),3==this.readyState&&fi(this)}},n.Ua=function(t){this.g&&(this.response=this.responseText=t,Yi(this))},n.Ta=function(t){this.g&&(this.response=t,Yi(this))},n.ha=function(){this.g&&Yi(this)},n.setRequestHeader=function(t,e){this.v.append(t,e)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Oi=r.JSON.parse;function Ui(t){Et.call(this),this.headers=new Ge,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ki,this.K=this.L=!1}j(Ui,Et);var ki="",Wi=/^https?$/i,Gi=["POST","PUT"];function Ji(t){return Q&&K()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Zi(t){return"content-type"==t.toLowerCase()}function Qi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pi(t),Bi(t)}function Pi(t){t.D||(t.D=!0,mt(t,"complete"),mt(t,"error"))}function Vi(t){if(t.h&&"undefined"!=typeof a&&(!t.C[1]||4!=Ri(t)||2!=t.ba()))if(t.v&&4==Ri(t))Pt(t.Fa,0,t);else if(mt(t,"readystatechange"),4==Ri(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===a){var M=String(t.H).match(Qe)[1]||null;if(!M&&r.self&&r.self.location){var s=r.self.location.protocol;M=s.substr(0,s.length-1)}n=!Wi.test(M?M.toLowerCase():"")}i=n}if(i)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var o=2<Ri(t)?t.g.statusText:""}catch(u){o=""}t.j=o+" ["+t.ba()+"]",Pi(t)}}finally{Bi(t)}}}function Bi(t,e){if(t.g){Fi(t);const n=t.g,M=t.C[0]?o:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=M}catch(i){}}}function Fi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(r.clearTimeout(t.A),t.A=null)}function Ri(t){return t.g?t.g.readyState:0}function Xi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ki:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Hi(t){let e="";return v(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}function _i(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=Hi(i),"string"===typeof t?null!=i&&encodeURIComponent(String(i)):_e(t,e,i))}function qi(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function $i(t){this.za=0,this.l=[],this.h=new _t,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=qi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=qi("baseRetryDelayMs",5e3,t),this.$a=qi("retryDelaySeedMs",1e4,t),this.Ya=qi("forwardChannelMaxRetries",2,t),this.ra=qi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ni(t&&t.concurrentRequestLimit),this.Ca=new Ti,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ki(t){if(en(t),3==t.G){var e=t.V++,i=Be(t.F);_e(i,"SID",t.J),_e(i,"RID",e),_e(i,"TYPE","terminate"),rn(t,i),e=new he(t,t.h,e,void 0),e.K=2,e.v=qe(Be(i)),i=!1,r.navigator&&r.navigator.sendBeacon&&(i=r.navigator.sendBeacon(e.v.toString(),"")),!i&&r.Image&&((new Image).src=e.v,i=!0),i||(e.g=dn(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ze(e)}Ln(t)}function tn(t){t.g&&(gn(t),t.g.cancel(),t.g=null)}function en(t){tn(t),t.u&&(r.clearTimeout(t.u),t.u=null),ln(t),t.i.cancel(),t.m&&("number"===typeof t.m&&r.clearTimeout(t.m),t.m=null)}function nn(t,e){t.l.push(new Di(t.Za++,e)),3==t.G&&Mn(t)}function Mn(t){ji(t.i)||t.m||(t.m=!0,Ut(t.Ha,t),t.C=0)}function sn(t,e){return!(di(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ce(N(t.Ha,t,e),Dn(t,t.C)),t.C++,!0))}function an(t,e){var i;i=e?e.m:t.V++;const n=Be(t.F);_e(n,"SID",t.J),_e(n,"RID",i),_e(n,"AID",t.U),rn(t,n),t.o&&t.s&&_i(n,t.o,t.s),i=new he(t,t.h,i,t.C+1),null===t.o&&(i.H=t.s),e&&(t.l=e.D.concat(t.l)),e=on(t,i,1e3),i.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),hi(t.i,i),Ee(i,n,e)}function rn(t,e){t.j&&We({},(function(t,i){_e(e,i,t)}))}function on(t,e,i){i=Math.min(t.l.length,i);var n=t.j?N(t.j.Oa,t.j,t):null;t:{var M=t.l;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=M[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let a=!0;for(let r=0;r<i;r++){let i=M[r].h;const o=M[r].g;if(i-=e,0>i)e=Math.max(0,M[r].h-100),a=!1;else try{Ei(o,t,"req"+i+"_")}catch(s){n&&n(o)}}if(a){n=t.join("&");break t}}}return t=t.l.splice(0,i),e.D=t,n}function un(t){t.g||t.u||(t.Y=1,Ut(t.Ga,t),t.A=0)}function cn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ce(N(t.Ga,t),Dn(t,t.A)),t.A++,!0)}function gn(t){null!=t.B&&(r.clearTimeout(t.B),t.B=null)}function In(t){t.g=new he(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Be(t.oa);_e(e,"RID","rpc"),_e(e,"SID",t.J),_e(e,"CI",t.N?"0":"1"),_e(e,"AID",t.U),rn(t,e),_e(e,"TYPE","xmlhttp"),t.o&&t.s&&_i(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var i=t.g;t=t.la,i.K=1,i.v=qe(Be(e)),i.s=null,i.U=!0,me(i,t)}function ln(t){null!=t.v&&(r.clearTimeout(t.v),t.v=null)}function An(t,e){var i=null;if(t.g==e){ln(t),gn(t),t.g=null;var n=2}else{if(!Si(t.i,e))return;i=e.D,wi(t.i,e),n=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.F;var M=t.C;n=Me(),mt(n,new ue(n,i,e,M)),Mn(t)}else un(t);else if(M=e.o,3==M||0==M&&0<t.I||!(1==n&&sn(t,e)||2==n&&cn(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),M){case 1:Nn(t,5);break;case 4:Nn(t,10);break;case 3:Nn(t,6);break;default:Nn(t,2)}}function Dn(t,e){let i=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(i*=2),i*e}function Nn(t,e){if(t.h.info("Error code "+e),2==e){var i=null;t.j&&(i=null);var n=N(t.jb,t);i||(i=new Ve("//www.google.com/images/cleardot.gif"),r.location&&"http"==r.location.protocol||Fe(i,"https"),qe(i)),mi(i.toString(),n)}else oe(2);t.G=0,t.j&&t.j.va(e),Ln(t),en(t)}function Ln(t){t.G=0,t.I=-1,t.j&&(0==yi(t.i).length&&0==t.l.length||(t.i.i.length=0,E(t.l),t.l.length=0),t.j.ua())}function jn(t,e,i){let n=$e(i);if(""!=n.i)e&&Re(n,e+"."+n.i),Xe(n,n.m);else{const t=r.location;n=Ke(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,i)}return t.aa&&v(t.aa,(function(t,e){_e(n,e,t)})),e=t.D,i=t.sa,e&&i&&_e(n,e,i),_e(n,"VER",t.ma),rn(t,n),n}function dn(t,e,i){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=i&&t.Ba&&!t.qa?new Ui(new pi({ib:!0})):new Ui(t.qa),e.L=t.H,e}function Sn(){}function hn(){if(Q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function wn(t,e){Et.call(this),this.g=new $i(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!m(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!m(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Tn(this)}function yn(t){je.call(this);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function xn(){de.call(this),this.status=1}function Tn(t){this.g=t}n=Ui.prototype,n.ea=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ne.g(),this.C=this.u?Ae(this.u):Ae(Ne),this.g.onreadystatechange=N(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Qi(this,s)}t=i||"";const M=new Ge(this.headers);n&&We(n,(function(t,e){M.set(e,t)})),n=x(M.T()),i=r.FormData&&t instanceof r.FormData,!(0<=w(Gi,e))||n||i||M.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),M.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fi(this),0<this.B&&((this.K=Ji(this.g))?(this.g.timeout=this.B,this.g.ontimeout=N(this.pa,this)):this.A=Pt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Qi(this,s)}},n.pa=function(){"undefined"!=typeof a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))},n.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),Bi(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bi(this,!0)),Ui.Z.M.call(this)},n.Fa=function(){this.s||(this.F||this.v||this.l?Vi(this):this.cb())},n.cb=function(){Vi(this)},n.ba=function(){try{return 2<Ri(this)?this.g.status:-1}catch(t){return-1}},n.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},n.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Oi(e)}},n.Da=function(){return this.m},n.La=function(){return"string"===typeof this.j?this.j:String(this.j)},n=$i.prototype,n.ma=8,n.G=1,n.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},n.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const M=new he(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=O(s),k(s,this.P)):s=this.P),null===this.o&&(M.H=s),this.ja)t:{for(var e=0,i=0;i<this.l.length;i++){var n=this.l[i];if(n="__data__"in n.g&&(n=n.g.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(e+=n,4096<e){e=i;break t}if(4096===e||i===this.l.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=on(this,M,e),i=Be(this.F),_e(i,"RID",t),_e(i,"CVER",22),this.D&&_e(i,"X-HTTP-Session-Id",this.D),rn(this,i),this.o&&s&&_i(i,this.o,s),hi(this.i,M),this.Ra&&_e(i,"TYPE","init"),this.ja?(_e(i,"$req",e),_e(i,"SID","null"),M.$=!0,Ee(M,i,null)):Ee(M,i,e),this.G=2}}else 3==this.G&&(t?an(this,t):0==this.l.length||ji(this.i)||an(this))},n.Ga=function(){if(this.u=null,In(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ce(N(this.bb,this),t)}},n.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,oe(10),tn(this),In(this))},n.ab=function(){null!=this.v&&(this.v=null,tn(this),cn(this),oe(19))},n.jb=function(t){t?(this.h.info("Successfully pinged google.com"),oe(2)):(this.h.info("Failed to ping google.com"),oe(1))},n=Sn.prototype,n.xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Oa=function(){},hn.prototype.g=function(t,e){return new wn(t,e)},j(wn,Et),wn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,i=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ut(N(t.hb,t,e))),oe(0),t.W=e,t.aa=i||{},t.N=t.X,t.F=jn(t,null,t.W),Mn(t)},wn.prototype.close=function(){Ki(this.g)},wn.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,nn(this.g,e)}else this.v?(e={},e.__data__=pt(t),nn(this.g,e)):nn(this.g,t)},wn.prototype.M=function(){this.g.j=null,delete this.j,Ki(this.g),delete this.g,wn.Z.M.call(this)},j(yn,je),j(xn,de),j(Tn,Sn),Tn.prototype.xa=function(){mt(this.g,"a")},Tn.prototype.wa=function(t){mt(this.g,new yn(t))},Tn.prototype.va=function(t){mt(this.g,new xn(t))},Tn.prototype.ua=function(){mt(this.g,"b")},hn.prototype.createWebChannel=hn.prototype.g,wn.prototype.send=wn.prototype.u,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,Ie.COMPLETE="complete",De.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",Et.prototype.listen=Et.prototype.N,Ui.prototype.listenOnce=Ui.prototype.O,Ui.prototype.getLastError=Ui.prototype.La,Ui.prototype.getLastErrorCode=Ui.prototype.Da,Ui.prototype.getStatus=Ui.prototype.ba,Ui.prototype.getResponseJson=Ui.prototype.Qa,Ui.prototype.getResponseText=Ui.prototype.ga,Ui.prototype.send=Ui.prototype.ea;var En=s.createWebChannelTransport=function(){return new hn},mn=s.getStatEventTarget=function(){return Me()},bn=s.ErrorCode=ge,pn=s.EventType=Ie,Cn=s.Event=ie,zn=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fn=s.FetchXmlHttpFactory=pi,Yn=s.WebChannel=De,vn=s.XhrIo=Ui}).call(this,i("c8ba"))},"90e3":function(t,e,i){var n=i("e330"),M=0,s=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++M+s,36)}},9112:function(t,e,i){var n=i("83ab"),M=i("9bf2"),s=i("5c6c");t.exports=n?function(t,e,i){return M.f(t,e,s(1,i))}:function(t,e,i){return t[e]=i,t}},9263:function(t,e,i){"use strict";var n=i("c65b"),M=i("e330"),s=i("577e"),a=i("ad6d"),r=i("9f7f"),o=i("5692"),u=i("7c73"),c=i("69f3").get,g=i("fce3"),I=i("107c"),l=o("native-string-replace",String.prototype.replace),A=RegExp.prototype.exec,D=A,N=M("".charAt),L=M("".indexOf),j=M("".replace),d=M("".slice),S=function(){var t=/a/,e=/b*/g;return n(A,t,"a"),n(A,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),h=r.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],y=S||w||h||g||I;y&&(D=function(t){var e,i,M,r,o,g,I,y=this,x=c(y),T=s(t),E=x.raw;if(E)return E.lastIndex=y.lastIndex,e=n(D,E,T),y.lastIndex=E.lastIndex,e;var m=x.groups,b=h&&y.sticky,p=n(a,y),C=y.source,z=0,f=T;if(b&&(p=j(p,"y",""),-1===L(p,"g")&&(p+="g"),f=d(T,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==N(T,y.lastIndex-1))&&(C="(?: "+C+")",f=" "+f,z++),i=new RegExp("^(?:"+C+")",p)),w&&(i=new RegExp("^"+C+"$(?!\\s)",p)),S&&(M=y.lastIndex),r=n(A,b?i:y,f),b?r?(r.input=d(r.input,z),r[0]=d(r[0],z),r.index=y.lastIndex,y.lastIndex+=r[0].length):y.lastIndex=0:S&&r&&(y.lastIndex=y.global?r.index+r[0].length:M),w&&r&&r.length>1&&n(l,r[0],i,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r&&m)for(r.groups=g=u(null),o=0;o<m.length;o++)I=m[o],g[I[0]]=r[I[1]];return r}),t.exports=D},"94ca":function(t,e,i){var n=i("d039"),M=i("1626"),s=/#|\.prototype\./,a=function(t,e){var i=o[r(t)];return i==c||i!=u&&(M(e)?n(e):!!e)},r=a.normalize=function(t){return String(t).replace(s,".").toLowerCase()},o=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";t.exports=a},"9a1f":function(t,e,i){var n=i("da84"),M=i("c65b"),s=i("59ed"),a=i("825a"),r=i("0d51"),o=i("35a1"),u=n.TypeError;t.exports=function(t,e){var i=arguments.length<2?o(t):e;if(s(i))return a(M(i,t));throw u(r(t)+" is not iterable")}},"9ab4":function(t,e,i){"use strict";i.d(e,"c",(function(){return M})),i.d(e,"a",(function(){return s})),i.d(e,"e",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"d",(function(){return o})),i.d(e,"f",(function(){return u}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},n(t,e)};function M(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var s=function(){return s=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var M in e=arguments[i],e)Object.prototype.hasOwnProperty.call(e,M)&&(t[M]=e[M]);return t},s.apply(this,arguments)};function a(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var M=0;for(n=Object.getOwnPropertySymbols(t);M<n.length;M++)e.indexOf(n[M])<0&&Object.prototype.propertyIsEnumerable.call(t,n[M])&&(i[n[M]]=t[n[M]])}return i}function r(t,e,i,n){var M,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(M=t[r])&&(a=(s<3?M(a):s>3?M(e,i,a):M(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}function o(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}Object.create;function u(t,e,i){if(i||2===arguments.length)for(var n,M=0,s=e.length;M<s;M++)!n&&M in e||(n||(n=Array.prototype.slice.call(e,0,M)),n[M]=e[M]);return t.concat(n||Array.prototype.slice.call(e))}Object.create},"9bf2":function(t,e,i){var n=i("da84"),M=i("83ab"),s=i("0cfb"),a=i("aed9"),r=i("825a"),o=i("a04b"),u=n.TypeError,c=Object.defineProperty,g=Object.getOwnPropertyDescriptor,I="enumerable",l="configurable",A="writable";e.f=M?a?function(t,e,i){if(r(t),e=o(e),r(i),"function"===typeof t&&"prototype"===e&&"value"in i&&A in i&&!i[A]){var n=g(t,e);n&&n[A]&&(t[e]=i.value,i={configurable:l in i?i[l]:n[l],enumerable:I in i?i[I]:n[I],writable:!1})}return c(t,e,i)}:c:function(t,e,i){if(r(t),e=o(e),r(i),s)try{return c(t,e,i)}catch(n){}if("get"in i||"set"in i)throw u("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},"9e69":function(t,e,i){var n=i("2b3e"),M=n.Symbol;t.exports=M},"9ed3":function(t,e,i){"use strict";var n=i("ae93").IteratorPrototype,M=i("7c73"),s=i("5c6c"),a=i("d44e"),r=i("3f8c"),o=function(){return this};t.exports=function(t,e,i,u){var c=e+" Iterator";return t.prototype=M(n,{next:s(+!u,i)}),a(t,c,!1,!0),r[c]=o,t}},"9f7f":function(t,e,i){var n=i("d039"),M=i("da84"),s=M.RegExp,a=n((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),r=a||n((function(){return!s("a","y").sticky})),o=a||n((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:o,MISSED_STICKY:r,UNSUPPORTED_Y:a}},"9ff4":function(t,e,i){"use strict";(function(t){function n(t,e){const i=Object.create(null),n=t.split(",");for(let M=0;M<n.length;M++)i[n[M]]=!0;return e?t=>!!i[t.toLowerCase()]:t=>!!i[t]}i.d(e,"a",(function(){return T})),i.d(e,"b",(function(){return x})),i.d(e,"c",(function(){return m})),i.d(e,"d",(function(){return E})),i.d(e,"e",(function(){return $})),i.d(e,"f",(function(){return et})),i.d(e,"g",(function(){return st})),i.d(e,"h",(function(){return z})),i.d(e,"i",(function(){return ot})),i.d(e,"j",(function(){return nt})),i.d(e,"k",(function(){return v})),i.d(e,"l",(function(){return tt})),i.d(e,"m",(function(){return o})),i.d(e,"n",(function(){return Mt})),i.d(e,"o",(function(){return O})),i.d(e,"p",(function(){return G})),i.d(e,"q",(function(){return s})),i.d(e,"r",(function(){return L})),i.d(e,"s",(function(){return X})),i.d(e,"t",(function(){return U})),i.d(e,"u",(function(){return C})),i.d(e,"v",(function(){return Q})),i.d(e,"w",(function(){return p})),i.d(e,"x",(function(){return R})),i.d(e,"y",(function(){return P})),i.d(e,"z",(function(){return H})),i.d(e,"A",(function(){return j})),i.d(e,"B",(function(){return k})),i.d(e,"C",(function(){return r})),i.d(e,"D",(function(){return J})),i.d(e,"E",(function(){return Z})),i.d(e,"F",(function(){return S})),i.d(e,"G",(function(){return h})),i.d(e,"H",(function(){return n})),i.d(e,"I",(function(){return l})),i.d(e,"J",(function(){return A})),i.d(e,"K",(function(){return u})),i.d(e,"L",(function(){return f})),i.d(e,"M",(function(){return w})),i.d(e,"N",(function(){return it})),i.d(e,"O",(function(){return at})),i.d(e,"P",(function(){return F}));const M="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=n(M);const a="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r=n(a);function o(t){return!!t||""===t}function u(t){if(O(t)){const e={};for(let i=0;i<t.length;i++){const n=t[i],M=J(n)?I(n):u(n);if(M)for(const t in M)e[t]=M[t]}return e}return J(t)||Q(t)?t:void 0}const c=/;(?![^(]*\))/g,g=/:(.+)/;function I(t){const e={};return t.split(c).forEach(t=>{if(t){const i=t.split(g);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function l(t){let e="";if(J(t))e=t;else if(O(t))for(let i=0;i<t.length;i++){const n=l(t[i]);n&&(e+=n+" ")}else if(Q(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}function A(t){if(!t)return null;let{class:e,style:i}=t;return e&&!J(e)&&(t.class=l(e)),i&&(t.style=u(i)),t}const D="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",N="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",L=n(D),j=n(N);function d(t,e){if(t.length!==e.length)return!1;let i=!0;for(let n=0;i&&n<t.length;n++)i=S(t[n],e[n]);return i}function S(t,e){if(t===e)return!0;let i=W(t),n=W(e);if(i||n)return!(!i||!n)&&t.getTime()===e.getTime();if(i=O(t),n=O(e),i||n)return!(!i||!n)&&d(t,e);if(i=Q(t),n=Q(e),i||n){if(!i||!n)return!1;const M=Object.keys(t).length,s=Object.keys(e).length;if(M!==s)return!1;for(const i in t){const n=t.hasOwnProperty(i),M=e.hasOwnProperty(i);if(n&&!M||!n&&M||!S(t[i],e[i]))return!1}}return String(t)===String(e)}function h(t,e){return t.findIndex(t=>S(t,e))}const w=t=>null==t?"":O(t)||Q(t)&&(t.toString===V||!G(t.toString))?JSON.stringify(t,y,2):String(t),y=(t,e)=>e&&e.__v_isRef?y(t,e.value):U(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,i])=>(t[e+" =>"]=i,t),{})}:k(e)?{[`Set(${e.size})`]:[...e.values()]}:!Q(e)||O(e)||R(e)?e:String(e),x={},T=[],E=()=>{},m=()=>!1,b=/^on[^a-z]/,p=t=>b.test(t),C=t=>t.startsWith("onUpdate:"),z=Object.assign,f=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},Y=Object.prototype.hasOwnProperty,v=(t,e)=>Y.call(t,e),O=Array.isArray,U=t=>"[object Map]"===B(t),k=t=>"[object Set]"===B(t),W=t=>t instanceof Date,G=t=>"function"===typeof t,J=t=>"string"===typeof t,Z=t=>"symbol"===typeof t,Q=t=>null!==t&&"object"===typeof t,P=t=>Q(t)&&G(t.then)&&G(t.catch),V=Object.prototype.toString,B=t=>V.call(t),F=t=>B(t).slice(8,-1),R=t=>"[object Object]"===B(t),X=t=>J(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_=t=>{const e=Object.create(null);return i=>{const n=e[i];return n||(e[i]=t(i))}},q=/-(\w)/g,$=_(t=>t.replace(q,(t,e)=>e?e.toUpperCase():"")),K=/\B([A-Z])/g,tt=_(t=>t.replace(K,"-$1").toLowerCase()),et=_(t=>t.charAt(0).toUpperCase()+t.slice(1)),it=_(t=>t?"on"+et(t):""),nt=(t,e)=>!Object.is(t,e),Mt=(t,e)=>{for(let i=0;i<t.length;i++)t[i](e)},st=(t,e,i)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:i})},at=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rt;const ot=()=>rt||(rt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,i("c8ba"))},a04b:function(t,e,i){var n=i("c04e"),M=i("d9b5");t.exports=function(t){var e=n(t,"string");return M(e)?e:e+""}},a4b4:function(t,e,i){var n=i("342f");t.exports=/web0s(?!.*chrome)/i.test(n)},a4d3:function(t,e,i){"use strict";var n=i("23e7"),M=i("da84"),s=i("d066"),a=i("2ba4"),r=i("c65b"),o=i("e330"),u=i("c430"),c=i("83ab"),g=i("4930"),I=i("d039"),l=i("1a2d"),A=i("e8b5"),D=i("1626"),N=i("861d"),L=i("3a9b"),j=i("d9b5"),d=i("825a"),S=i("7b0b"),h=i("fc6a"),w=i("a04b"),y=i("577e"),x=i("5c6c"),T=i("7c73"),E=i("df75"),m=i("241c"),b=i("057f"),p=i("7418"),C=i("06cf"),z=i("9bf2"),f=i("37e8"),Y=i("d1e7"),v=i("f36a"),O=i("6eeb"),U=i("5692"),k=i("f772"),W=i("d012"),G=i("90e3"),J=i("b622"),Z=i("e538"),Q=i("746f"),P=i("d44e"),V=i("69f3"),B=i("b727").forEach,F=k("hidden"),R="Symbol",X="prototype",H=J("toPrimitive"),_=V.set,q=V.getterFor(R),$=Object[X],K=M.Symbol,tt=K&&K[X],et=M.TypeError,it=M.QObject,nt=s("JSON","stringify"),Mt=C.f,st=z.f,at=b.f,rt=Y.f,ot=o([].push),ut=U("symbols"),ct=U("op-symbols"),gt=U("string-to-symbol-registry"),It=U("symbol-to-string-registry"),lt=U("wks"),At=!it||!it[X]||!it[X].findChild,Dt=c&&I((function(){return 7!=T(st({},"a",{get:function(){return st(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=Mt($,e);n&&delete $[e],st(t,e,i),n&&t!==$&&st($,e,n)}:st,Nt=function(t,e){var i=ut[t]=T(tt);return _(i,{type:R,tag:t,description:e}),c||(i.description=e),i},Lt=function(t,e,i){t===$&&Lt(ct,e,i),d(t);var n=w(e);return d(i),l(ut,n)?(i.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),i=T(i,{enumerable:x(0,!1)})):(l(t,F)||st(t,F,x(1,{})),t[F][n]=!0),Dt(t,n,i)):st(t,n,i)},jt=function(t,e){d(t);var i=h(e),n=E(i).concat(yt(i));return B(n,(function(e){c&&!r(St,i,e)||Lt(t,e,i[e])})),t},dt=function(t,e){return void 0===e?T(t):jt(T(t),e)},St=function(t){var e=w(t),i=r(rt,this,e);return!(this===$&&l(ut,e)&&!l(ct,e))&&(!(i||!l(this,e)||!l(ut,e)||l(this,F)&&this[F][e])||i)},ht=function(t,e){var i=h(t),n=w(e);if(i!==$||!l(ut,n)||l(ct,n)){var M=Mt(i,n);return!M||!l(ut,n)||l(i,F)&&i[F][n]||(M.enumerable=!0),M}},wt=function(t){var e=at(h(t)),i=[];return B(e,(function(t){l(ut,t)||l(W,t)||ot(i,t)})),i},yt=function(t){var e=t===$,i=at(e?ct:h(t)),n=[];return B(i,(function(t){!l(ut,t)||e&&!l($,t)||ot(n,ut[t])})),n};if(g||(K=function(){if(L(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=G(t),i=function(t){this===$&&r(i,ct,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),Dt(this,e,x(1,t))};return c&&At&&Dt($,e,{configurable:!0,set:i}),Nt(e,t)},tt=K[X],O(tt,"toString",(function(){return q(this).tag})),O(K,"withoutSetter",(function(t){return Nt(G(t),t)})),Y.f=St,z.f=Lt,f.f=jt,C.f=ht,m.f=b.f=wt,p.f=yt,Z.f=function(t){return Nt(J(t),t)},c&&(st(tt,"description",{configurable:!0,get:function(){return q(this).description}}),u||O($,"propertyIsEnumerable",St,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!g,sham:!g},{Symbol:K}),B(E(lt),(function(t){Q(t)})),n({target:R,stat:!0,forced:!g},{for:function(t){var e=y(t);if(l(gt,e))return gt[e];var i=K(e);return gt[e]=i,It[i]=e,i},keyFor:function(t){if(!j(t))throw et(t+" is not a symbol");if(l(It,t))return It[t]},useSetter:function(){At=!0},useSimple:function(){At=!1}}),n({target:"Object",stat:!0,forced:!g,sham:!c},{create:dt,defineProperty:Lt,defineProperties:jt,getOwnPropertyDescriptor:ht}),n({target:"Object",stat:!0,forced:!g},{getOwnPropertyNames:wt,getOwnPropertySymbols:yt}),n({target:"Object",stat:!0,forced:I((function(){p.f(1)}))},{getOwnPropertySymbols:function(t){return p.f(S(t))}}),nt){var xt=!g||I((function(){var t=K();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:xt},{stringify:function(t,e,i){var n=v(arguments),M=e;if((N(e)||void 0!==t)&&!j(t))return A(e)||(e=function(t,e){if(D(M)&&(e=r(M,this,t,e)),!j(e))return e}),n[1]=e,a(nt,null,n)}})}if(!tt[H]){var Tt=tt.valueOf;O(tt,H,(function(t){return r(Tt,this)}))}P(K,R),W[F]=!0},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},a6e4:function(t,e,i){},a79d:function(t,e,i){"use strict";var n=i("23e7"),M=i("c430"),s=i("fea9"),a=i("d039"),r=i("d066"),o=i("1626"),u=i("4840"),c=i("cdf9"),g=i("6eeb"),I=!!s&&a((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(n({target:"Promise",proto:!0,real:!0,forced:I},{finally:function(t){var e=u(this,r("Promise")),i=o(t);return this.then(i?function(i){return c(e,t()).then((function(){return i}))}:t,i?function(i){return c(e,t()).then((function(){throw i}))}:t)}}),!M&&o(s)){var l=r("Promise").prototype["finally"];s.prototype["finally"]!==l&&g(s.prototype,"finally",l,{unsafe:!0})}},a919:function(t,e,i){var n=i("ddc6"),M={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},s=n(M);t.exports=s},aaec:function(t,e){var i="\\ud800-\\udfff",n="\\u0300-\\u036f",M="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",a=n+M+s,r="\\ufe0e\\ufe0f",o="\\u200d",u=RegExp("["+o+i+a+r+"]");function c(t){return u.test(t)}t.exports=c},ab36:function(t,e,i){var n=i("861d"),M=i("9112");t.exports=function(t,e){n(e)&&"cause"in e&&M(t,"cause",e.cause)}},abc5:function(t,e,i){"use strict";(function(t){function n(){return M().__VUE_DEVTOOLS_GLOBAL_HOOK__}function M(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return M})),i.d(e,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,i("c8ba"))},ac1f:function(t,e,i){"use strict";var n=i("23e7"),M=i("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==M},{exec:M})},ad6d:function(t,e,i){"use strict";var n=i("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ade3:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,"a",(function(){return n}))},ae27:function(t,e,i){t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var M=e[n]={i:n,l:!1,exports:{}};return t[n].call(M.exports,M,M.exports,i),M.l=!0,M.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var M in t)i.d(n,M,function(e){return t[e]}.bind(null,M));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s="fb15")}({8875:function(t,e,i){var n,M,s;(function(i,a){M=[],n=a,s="function"===typeof n?n.apply(e,M):n,void 0===s||(t.exports=s)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(l){var i,n,M,s=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,a=/@([^@]*):(\d+):(\d+)\s*$/gi,r=s.exec(l.stack)||a.exec(l.stack),o=r&&r[1]||!1,u=r&&r[2]||!1,c=document.location.href.replace(document.location.hash,""),g=document.getElementsByTagName("script");o===c&&(i=document.documentElement.outerHTML,n=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),M=i.replace(n,"$1").trim());for(var I=0;I<g.length;I++){if("interactive"===g[I].readyState)return g[I];if(g[I].src===o)return g[I];if(o===c&&g[I].innerHTML&&g[I].innerHTML.trim()===M)return g[I]}return null}}return t}))},"8bbf":function(t,e){t.exports=i("7a23")},"95e6":function(t,e){t.exports=i("ba30")},fb15:function(t,e,i){"use strict";if(i.r(e),"undefined"!==typeof window){var n=window.document.currentScript,M=i("8875");n=M(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:M});var s=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);s&&(i.p=s[1])}var a=i("8bbf"),r=i("95e6"),o=i.n(r);const u=["animationEnd","beforeMount","mounted","updated","click","mouseMove","legendClick","markerClick","selection","dataPointSelection","dataPointMouseEnter","dataPointMouseLeave","beforeZoom","beforeResetZoom","zoomed","scrolled","scrolled"],c=Object(a["defineComponent"])({name:"apexchart",props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0},width:{default:"100%"},height:{default:"auto"}},emits:u,setup(t,{emit:e}){const i=Object(a["ref"])(null),n=Object(a["ref"])(null),M=t=>t&&"object"===typeof t&&!Array.isArray(t)&&null!=t,s=(t,e)=>{"function"!==typeof Object.assign&&function(){Object.assign=function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");let e=Object(t);for(let i=1;i<arguments.length;i++){let t=arguments[i];if(void 0!==t&&null!==t)for(let i in t)t.hasOwnProperty(i)&&(e[i]=t[i])}return e}}();let i=Object.assign({},t);return M(t)&&M(e)&&Object.keys(e).forEach(n=>{M(e[n])?n in t?i[n]=s(t[n],e[n]):Object.assign(i,{[n]:e[n]}):Object.assign(i,{[n]:e[n]})}),i},r=async()=>{await Object(a["nextTick"])();const M={chart:{type:t.type||t.options.chart.type||"line",height:t.height,width:t.width,events:{}},series:t.series};u.forEach(t=>{let i=(...i)=>e(t,...i);M.chart.events[t]=i});const r=s(t.options,M);return n.value=new o.a(i.value,r),n.value.render()},c=()=>(g(),r()),g=()=>{n.value.destroy()},I=(t,e)=>n.value.updateSeries(t,e),l=(t,e,i,M)=>n.value.updateOptions(t,e,i,M),A=t=>n.value.toggleSeries(t),D=t=>{n.value.showSeries(t)},N=t=>{n.value.hideSeries(t)},L=(t,e)=>n.value.appendSeries(t,e),j=()=>{n.value.resetSeries()},d=(t,e)=>{n.value.toggleDataPointSelection(t,e)},S=t=>n.value.appendData(t),h=(t,e)=>n.value.zoomX(t,e),w=()=>n.value.dataURI(),y=(t,e)=>{n.value.addXaxisAnnotation(t,e)},x=(t,e)=>{n.value.addYaxisAnnotation(t,e)},T=(t,e)=>{n.value.addPointAnnotation(t,e)},E=(t,e)=>{n.value.removeAnnotation(t,e)},m=()=>{n.value.clearAnnotations()};Object(a["onBeforeMount"])(()=>{window.ApexCharts=o.a}),Object(a["onMounted"])(()=>{i.value=Object(a["getCurrentInstance"])().proxy.$el,r()}),Object(a["onBeforeUnmount"])(()=>{n.value&&g()});const b=Object(a["toRefs"])(t);return Object(a["watch"])(b.options,()=>{!n.value&&t.options?r():n.value.updateOptions(t.options)}),Object(a["watch"])(b.series,()=>{!n.value&&t.series?r():n.value.updateSeries(t.series)},{deep:!0}),Object(a["watch"])(b.type,()=>{c()}),Object(a["watch"])(b.width,()=>{c()}),Object(a["watch"])(b.height,()=>{c()}),{chart:n,init:r,refresh:c,destroy:g,updateOptions:l,updateSeries:I,toggleSeries:A,showSeries:D,hideSeries:N,resetSeries:j,zoomX:h,toggleDataPointSelection:d,appendData:S,appendSeries:L,addXaxisAnnotation:y,addYaxisAnnotation:x,addPointAnnotation:T,removeAnnotation:E,clearAnnotations:m,dataURI:w}},render(){return Object(a["h"])("div",{class:"vue-apexcharts"})}});var g=c;const I=t=>{t.component(g.name,g)};g.install=I;var l=g;e["default"]=l}})},ae93:function(t,e,i){"use strict";var n,M,s,a=i("d039"),r=i("1626"),o=i("7c73"),u=i("e163"),c=i("6eeb"),g=i("b622"),I=i("c430"),l=g("iterator"),A=!1;[].keys&&(s=[].keys(),"next"in s?(M=u(u(s)),M!==Object.prototype&&(n=M)):A=!0);var D=void 0==n||a((function(){var t={};return n[l].call(t)!==t}));D?n={}:I&&(n=o(n)),r(n[l])||c(n,l,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:A}},aed9:function(t,e,i){var n=i("83ab"),M=i("d039");t.exports=n&&M((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(t,e,i){"use strict";var n=i("00ee"),M=i("f5df");t.exports=n?{}.toString:function(){return"[object "+M(this)+"]"}},b20a:function(t,e,i){var n=i("6ac0"),M=i("4caa"),s=i("ea72"),a="['’]",r=RegExp(a,"g");function o(t){return function(e){return n(s(M(e).replace(r,"")),t,"")}}t.exports=o},b50d:function(t,e,i){"use strict";var n=i("c532"),M=i("467f"),s=i("7aac"),a=i("30b5"),r=i("83b9"),o=i("c345"),u=i("3934"),c=i("2d83"),g=i("2444"),I=i("7a77");t.exports=function(t){return new Promise((function(e,i){var l,A=t.data,D=t.headers,N=t.responseType;function L(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}n.isFormData(A)&&delete D["Content-Type"];var j=new XMLHttpRequest;if(t.auth){var d=t.auth.username||"",S=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";D.Authorization="Basic "+btoa(d+":"+S)}var h=r(t.baseURL,t.url);function w(){if(j){var n="getAllResponseHeaders"in j?o(j.getAllResponseHeaders()):null,s=N&&"text"!==N&&"json"!==N?j.response:j.responseText,a={data:s,status:j.status,statusText:j.statusText,headers:n,config:t,request:j};M((function(t){e(t),L()}),(function(t){i(t),L()}),a),j=null}}if(j.open(t.method.toUpperCase(),a(h,t.params,t.paramsSerializer),!0),j.timeout=t.timeout,"onloadend"in j?j.onloadend=w:j.onreadystatechange=function(){j&&4===j.readyState&&(0!==j.status||j.responseURL&&0===j.responseURL.indexOf("file:"))&&setTimeout(w)},j.onabort=function(){j&&(i(c("Request aborted",t,"ECONNABORTED",j)),j=null)},j.onerror=function(){i(c("Network Error",t,null,j)),j=null},j.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||g.transitional;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),i(c(e,t,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",j)),j=null},n.isStandardBrowserEnv()){var y=(t.withCredentials||u(h))&&t.xsrfCookieName?s.read(t.xsrfCookieName):void 0;y&&(D[t.xsrfHeaderName]=y)}"setRequestHeader"in j&&n.forEach(D,(function(t,e){"undefined"===typeof A&&"content-type"===e.toLowerCase()?delete D[e]:j.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(j.withCredentials=!!t.withCredentials),N&&"json"!==N&&(j.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&j.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&j.upload&&j.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(l=function(t){j&&(i(!t||t&&t.type?new I("canceled"):t),j.abort(),j=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l))),A||(A=null),j.send(A)}))}},b575:function(t,e,i){var n,M,s,a,r,o,u,c,g=i("da84"),I=i("0366"),l=i("06cf").f,A=i("2cf4").set,D=i("1cdc"),N=i("d4c3"),L=i("a4b4"),j=i("605d"),d=g.MutationObserver||g.WebKitMutationObserver,S=g.document,h=g.process,w=g.Promise,y=l(g,"queueMicrotask"),x=y&&y.value;x||(n=function(){var t,e;j&&(t=h.domain)&&t.exit();while(M){e=M.fn,M=M.next;try{e()}catch(i){throw M?a():s=void 0,i}}s=void 0,t&&t.enter()},D||j||L||!d||!S?!N&&w&&w.resolve?(u=w.resolve(void 0),u.constructor=w,c=I(u.then,u),a=function(){c(n)}):j?a=function(){h.nextTick(n)}:(A=I(A,g),a=function(){A(n)}):(r=!0,o=S.createTextNode(""),new d(n).observe(o,{characterData:!0}),a=function(){o.data=r=!r})),t.exports=x||function(t){var e={fn:t,next:void 0};s&&(s.next=e),M||(M=e,a()),s=e}},b622:function(t,e,i){var n=i("da84"),M=i("5692"),s=i("1a2d"),a=i("90e3"),r=i("4930"),o=i("fdbf"),u=M("wks"),c=n.Symbol,g=c&&c["for"],I=o?c:c&&c.withoutSetter||a;t.exports=function(t){if(!s(u,t)||!r&&"string"!=typeof u[t]){var e="Symbol."+t;r&&s(c,t)?u[t]=c[t]:u[t]=o&&g?g(e):I(e)}return u[t]}},b64b:function(t,e,i){var n=i("23e7"),M=i("7b0b"),s=i("df75"),a=i("d039"),r=a((function(){s(1)}));n({target:"Object",stat:!0,forced:r},{keys:function(t){return s(M(t))}})},b727:function(t,e,i){var n=i("0366"),M=i("e330"),s=i("44ad"),a=i("7b0b"),r=i("07fa"),o=i("65f0"),u=M([].push),c=function(t){var e=1==t,i=2==t,M=3==t,c=4==t,g=6==t,I=7==t,l=5==t||g;return function(A,D,N,L){for(var j,d,S=a(A),h=s(S),w=n(D,N),y=r(h),x=0,T=L||o,E=e?T(A,y):i||I?T(A,0):void 0;y>x;x++)if((l||x in h)&&(j=h[x],d=w(j,x,S),t))if(e)E[x]=d;else if(d)switch(t){case 3:return!0;case 5:return j;case 6:return x;case 2:u(E,j)}else switch(t){case 4:return!1;case 7:u(E,j)}return g?-1:M||c?c:E}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},b80d:function(t,e,i){"use strict";i.d(e,"a",(function(){return Ir}));var n=i("7a23"),M=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,i)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,g=(t,e)=>{for(var i in e||(e={}))o.call(e,i)&&c(t,i,e[i]);if(r)for(var i of r(e))u.call(e,i)&&c(t,i,e[i]);return t},I=(t,e)=>s(t,a(e));function l(t=""){return`__BVID__${Math.random().toString().substr(2,6)}___BV_${t}__`}function A(t,e){return Object(n["computed"])(()=>t||l(e))}const D=Symbol();var N=Object(n["defineComponent"])({name:"BAccordion",props:{flush:{type:Boolean,default:!1},free:{type:Boolean,default:!1},id:{type:String,default:void 0}},setup(t){const e=A(t.id,"accordion"),i=Object(n["computed"])(()=>({"accordion-flush":t.flush}));return t.free||Object(n["provide"])(D,""+e.value),{computedId:e,classes:i}}});const L=["id"];N.render=function(t,e,i,M,s,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{id:t.computedId,class:Object(n["normalizeClass"])(["accordion",t.classes])},[Object(n["renderSlot"])(t.$slots,"default")],10,L)};var j="top",d="bottom",S="right",h="left",w=[j,d,S,h],y="end",x=w.reduce((function(t,e){return t.concat([e+"-start",e+"-"+y])}),[]),T=[].concat(w,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-"+y])}),[]),E=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function m(t){return t?(t.nodeName||"").toLowerCase():null}function b(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function p(t){return t instanceof b(t).Element||t instanceof Element}function C(t){return t instanceof b(t).HTMLElement||t instanceof HTMLElement}function z(t){return"undefined"!=typeof ShadowRoot&&(t instanceof b(t).ShadowRoot||t instanceof ShadowRoot)}var f={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},M=e.elements[t];C(M)&&m(M)&&(Object.assign(M.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?M.removeAttribute(t):M.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],M=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});C(n)&&m(n)&&(Object.assign(n.style,s),Object.keys(M).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Y(t){return t.split("-")[0]}var v=Math.round;function O(t,e){void 0===e&&(e=!1);var i=t.getBoundingClientRect(),n=1,M=1;if(C(t)&&e){var s=t.offsetHeight,a=t.offsetWidth;a>0&&(n=i.width/a||1),s>0&&(M=i.height/s||1)}return{width:v(i.width/n),height:v(i.height/M),top:v(i.top/M),right:v(i.right/n),bottom:v(i.bottom/M),left:v(i.left/n),x:v(i.left/n),y:v(i.top/M)}}function U(t){var e=O(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function k(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&z(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function W(t){return b(t).getComputedStyle(t)}function G(t){return["table","td","th"].indexOf(m(t))>=0}function J(t){return((p(t)?t.ownerDocument:t.document)||window.document).documentElement}function Z(t){return"html"===m(t)?t:t.assignedSlot||t.parentNode||(z(t)?t.host:null)||J(t)}function Q(t){return C(t)&&"fixed"!==W(t).position?t.offsetParent:null}function P(t){for(var e=b(t),i=Q(t);i&&G(i)&&"static"===W(i).position;)i=Q(i);return i&&("html"===m(i)||"body"===m(i)&&"static"===W(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&C(t)&&"fixed"===W(t).position)return null;for(var i=Z(t);C(i)&&["html","body"].indexOf(m(i))<0;){var n=W(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function V(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var B=Math.max,F=Math.min,R=Math.round;function X(t,e,i){return B(t,F(e,i))}function H(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function _(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var q={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,M=t.options,s=i.elements.arrow,a=i.modifiersData.popperOffsets,r=Y(i.placement),o=V(r),u=[h,S].indexOf(r)>=0?"height":"width";if(s&&a){var c=function(t,e){return H("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:_(t,w))}(M.padding,i),g=U(s),I="y"===o?j:h,l="y"===o?d:S,A=i.rects.reference[u]+i.rects.reference[o]-a[o]-i.rects.popper[u],D=a[o]-i.rects.reference[o],N=P(s),L=N?"y"===o?N.clientHeight||0:N.clientWidth||0:0,y=A/2-D/2,x=c[I],T=L-g[u]-c[l],E=L/2-g[u]/2+y,m=X(x,E,T),b=o;i.modifiersData[n]=((e={})[b]=m,e.centerOffset=m-E,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&k(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function $(t){return t.split("-")[1]}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tt(t){var e,i=t.popper,n=t.popperRect,M=t.placement,s=t.variation,a=t.offsets,r=t.position,o=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,g=!0===c?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:R(R(e*n)/n)||0,y:R(R(i*n)/n)||0}}(a):"function"==typeof c?c(a):a,I=g.x,l=void 0===I?0:I,A=g.y,D=void 0===A?0:A,N=a.hasOwnProperty("x"),L=a.hasOwnProperty("y"),w=h,x=j,T=window;if(u){var E=P(i),m="clientHeight",p="clientWidth";E===b(i)&&"static"!==W(E=J(i)).position&&"absolute"===r&&(m="scrollHeight",p="scrollWidth"),E=E,M!==j&&(M!==h&&M!==S||s!==y)||(x=d,D-=E[m]-n.height,D*=o?1:-1),M!==h&&(M!==j&&M!==d||s!==y)||(w=S,l-=E[p]-n.width,l*=o?1:-1)}var C,z=Object.assign({position:r},u&&K);return o?Object.assign({},z,((C={})[x]=L?"0":"",C[w]=N?"0":"",C.transform=(T.devicePixelRatio||1)<=1?"translate("+l+"px, "+D+"px)":"translate3d("+l+"px, "+D+"px, 0)",C)):Object.assign({},z,((e={})[x]=L?D+"px":"",e[w]=N?l+"px":"",e.transform="",e))}var et={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,M=void 0===n||n,s=i.adaptive,a=void 0===s||s,r=i.roundOffsets,o=void 0===r||r,u={placement:Y(e.placement),variation:$(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:M};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,tt(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,tt(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},it={passive:!0},nt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,M=n.scroll,s=void 0===M||M,a=n.resize,r=void 0===a||a,o=b(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach((function(t){t.addEventListener("scroll",i.update,it)})),r&&o.addEventListener("resize",i.update,it),function(){s&&u.forEach((function(t){t.removeEventListener("scroll",i.update,it)})),r&&o.removeEventListener("resize",i.update,it)}},data:{}},Mt={left:"right",right:"left",bottom:"top",top:"bottom"};function st(t){return t.replace(/left|right|bottom|top/g,(function(t){return Mt[t]}))}var at={start:"end",end:"start"};function rt(t){return t.replace(/start|end/g,(function(t){return at[t]}))}function ot(t){var e=b(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ut(t){return O(J(t)).left+ot(t).scrollLeft}function ct(t){var e=W(t),i=e.overflow,n=e.overflowX,M=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+M+n)}function gt(t){return["html","body","#document"].indexOf(m(t))>=0?t.ownerDocument.body:C(t)&&ct(t)?t:gt(Z(t))}function It(t,e){var i;void 0===e&&(e=[]);var n=gt(t),M=n===(null==(i=t.ownerDocument)?void 0:i.body),s=b(n),a=M?[s].concat(s.visualViewport||[],ct(n)?n:[]):n,r=e.concat(a);return M?r:r.concat(It(Z(a)))}function lt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function At(t,e){return"viewport"===e?lt(function(t){var e=b(t),i=J(t),n=e.visualViewport,M=i.clientWidth,s=i.clientHeight,a=0,r=0;return n&&(M=n.width,s=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,r=n.offsetTop)),{width:M,height:s,x:a+ut(t),y:r}}(t)):C(e)?function(t){var e=O(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):lt(function(t){var e,i=J(t),n=ot(t),M=null==(e=t.ownerDocument)?void 0:e.body,s=B(i.scrollWidth,i.clientWidth,M?M.scrollWidth:0,M?M.clientWidth:0),a=B(i.scrollHeight,i.clientHeight,M?M.scrollHeight:0,M?M.clientHeight:0),r=-n.scrollLeft+ut(t),o=-n.scrollTop;return"rtl"===W(M||i).direction&&(r+=B(i.clientWidth,M?M.clientWidth:0)-s),{width:s,height:a,x:r,y:o}}(J(t)))}function Dt(t,e,i){var n="clippingParents"===e?function(t){var e=It(Z(t)),i=["absolute","fixed"].indexOf(W(t).position)>=0&&C(t)?P(t):t;return p(i)?e.filter((function(t){return p(t)&&k(t,i)&&"body"!==m(t)})):[]}(t):[].concat(e),M=[].concat(n,[i]),s=M[0],a=M.reduce((function(e,i){var n=At(t,i);return e.top=B(n.top,e.top),e.right=F(n.right,e.right),e.bottom=F(n.bottom,e.bottom),e.left=B(n.left,e.left),e}),At(t,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Nt(t){var e,i=t.reference,n=t.element,M=t.placement,s=M?Y(M):null,a=M?$(M):null,r=i.x+i.width/2-n.width/2,o=i.y+i.height/2-n.height/2;switch(s){case j:e={x:r,y:i.y-n.height};break;case d:e={x:r,y:i.y+i.height};break;case S:e={x:i.x+i.width,y:o};break;case h:e={x:i.x-n.width,y:o};break;default:e={x:i.x,y:i.y}}var u=s?V(s):null;if(null!=u){var c="y"===u?"height":"width";switch(a){case"start":e[u]=e[u]-(i[c]/2-n[c]/2);break;case y:e[u]=e[u]+(i[c]/2-n[c]/2)}}return e}function Lt(t,e){void 0===e&&(e={});var i=e,n=i.placement,M=void 0===n?t.placement:n,s=i.boundary,a=void 0===s?"clippingParents":s,r=i.rootBoundary,o=void 0===r?"viewport":r,u=i.elementContext,c=void 0===u?"popper":u,g=i.altBoundary,I=void 0!==g&&g,l=i.padding,A=void 0===l?0:l,D=H("number"!=typeof A?A:_(A,w)),N="popper"===c?"reference":"popper",L=t.rects.popper,h=t.elements[I?N:c],y=Dt(p(h)?h:h.contextElement||J(t.elements.popper),a,o),x=O(t.elements.reference),T=Nt({reference:x,element:L,strategy:"absolute",placement:M}),E=lt(Object.assign({},L,T)),m="popper"===c?E:x,b={top:y.top-m.top+D.top,bottom:m.bottom-y.bottom+D.bottom,left:y.left-m.left+D.left,right:m.right-y.right+D.right},C=t.modifiersData.offset;if("popper"===c&&C){var z=C[M];Object.keys(b).forEach((function(t){var e=[S,d].indexOf(t)>=0?1:-1,i=[j,d].indexOf(t)>=0?"y":"x";b[t]+=z[i]*e}))}return b}var jt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var M=i.mainAxis,s=void 0===M||M,a=i.altAxis,r=void 0===a||a,o=i.fallbackPlacements,u=i.padding,c=i.boundary,g=i.rootBoundary,I=i.altBoundary,l=i.flipVariations,A=void 0===l||l,D=i.allowedAutoPlacements,N=e.options.placement,L=Y(N),y=o||(L!==N&&A?function(t){if("auto"===Y(t))return[];var e=st(t);return[rt(t),e,rt(e)]}(N):[st(N)]),E=[N].concat(y).reduce((function(t,i){return t.concat("auto"===Y(i)?function(t,e){void 0===e&&(e={});var i=e,n=i.placement,M=i.boundary,s=i.rootBoundary,a=i.padding,r=i.flipVariations,o=i.allowedAutoPlacements,u=void 0===o?T:o,c=$(n),g=c?r?x:x.filter((function(t){return $(t)===c})):w,I=g.filter((function(t){return u.indexOf(t)>=0}));0===I.length&&(I=g);var l=I.reduce((function(e,i){return e[i]=Lt(t,{placement:i,boundary:M,rootBoundary:s,padding:a})[Y(i)],e}),{});return Object.keys(l).sort((function(t,e){return l[t]-l[e]}))}(e,{placement:i,boundary:c,rootBoundary:g,padding:u,flipVariations:A,allowedAutoPlacements:D}):i)}),[]),m=e.rects.reference,b=e.rects.popper,p=new Map,C=!0,z=E[0],f=0;f<E.length;f++){var v=E[f],O=Y(v),U="start"===$(v),k=[j,d].indexOf(O)>=0,W=k?"width":"height",G=Lt(e,{placement:v,boundary:c,rootBoundary:g,altBoundary:I,padding:u}),J=k?U?S:h:U?d:j;m[W]>b[W]&&(J=st(J));var Z=st(J),Q=[];if(s&&Q.push(G[O]<=0),r&&Q.push(G[J]<=0,G[Z]<=0),Q.every((function(t){return t}))){z=v,C=!1;break}p.set(v,Q)}if(C)for(var P=function(t){var e=E.find((function(e){var i=p.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return z=e,"break"},V=A?3:1;V>0;V--)if("break"===P(V))break;e.placement!==z&&(e.modifiersData[n]._skip=!0,e.placement=z,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function dt(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function St(t){return[j,S,d,h].some((function(e){return t[e]>=0}))}var ht={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,M=e.rects.popper,s=e.modifiersData.preventOverflow,a=Lt(e,{elementContext:"reference"}),r=Lt(e,{altBoundary:!0}),o=dt(a,n),u=dt(r,M,s),c=St(o),g=St(u);e.modifiersData[i]={referenceClippingOffsets:o,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:g},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":g})}},wt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,M=i.offset,s=void 0===M?[0,0]:M,a=T.reduce((function(t,i){return t[i]=function(t,e,i){var n=Y(t),M=[h,j].indexOf(n)>=0?-1:1,s="function"==typeof i?i(Object.assign({},e,{placement:t})):i,a=s[0],r=s[1];return a=a||0,r=(r||0)*M,[h,S].indexOf(n)>=0?{x:r,y:a}:{x:a,y:r}}(i,e.rects,s),t}),{}),r=a[e.placement],o=r.x,u=r.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=o,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=a}},yt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Nt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},xt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,M=i.mainAxis,s=void 0===M||M,a=i.altAxis,r=void 0!==a&&a,o=i.boundary,u=i.rootBoundary,c=i.altBoundary,g=i.padding,I=i.tether,l=void 0===I||I,A=i.tetherOffset,D=void 0===A?0:A,N=Lt(e,{boundary:o,rootBoundary:u,padding:g,altBoundary:c}),L=Y(e.placement),w=$(e.placement),y=!w,x=V(L),T="x"===x?"y":"x",E=e.modifiersData.popperOffsets,m=e.rects.reference,b=e.rects.popper,p="function"==typeof D?D(Object.assign({},e.rects,{placement:e.placement})):D,C={x:0,y:0};if(E){if(s||r){var z="y"===x?j:h,f="y"===x?d:S,v="y"===x?"height":"width",O=E[x],k=E[x]+N[z],W=E[x]-N[f],G=l?-b[v]/2:0,J="start"===w?m[v]:b[v],Z="start"===w?-b[v]:-m[v],Q=e.elements.arrow,R=l&&Q?U(Q):{width:0,height:0},H=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},_=H[z],q=H[f],K=X(0,m[v],R[v]),tt=y?m[v]/2-G-K-_-p:J-K-_-p,et=y?-m[v]/2+G+K+q+p:Z+K+q+p,it=e.elements.arrow&&P(e.elements.arrow),nt=it?"y"===x?it.clientTop||0:it.clientLeft||0:0,Mt=e.modifiersData.offset?e.modifiersData.offset[e.placement][x]:0,st=E[x]+tt-Mt-nt,at=E[x]+et-Mt;if(s){var rt=X(l?F(k,st):k,O,l?B(W,at):W);E[x]=rt,C[x]=rt-O}if(r){var ot="x"===x?j:h,ut="x"===x?d:S,ct=E[T],gt=ct+N[ot],It=ct-N[ut],lt=X(l?F(gt,st):gt,ct,l?B(It,at):It);E[T]=lt,C[T]=lt-ct}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function Tt(t,e,i){void 0===i&&(i=!1);var n,M,s=C(e),a=C(e)&&function(t){var e=t.getBoundingClientRect(),i=e.width/t.offsetWidth||1,n=e.height/t.offsetHeight||1;return 1!==i||1!==n}(e),r=J(e),o=O(t,a),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!i)&&(("body"!==m(e)||ct(r))&&(u=(n=e)!==b(n)&&C(n)?{scrollLeft:(M=n).scrollLeft,scrollTop:M.scrollTop}:ot(n)),C(e)?((c=O(e,!0)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=ut(r))),{x:o.left+u.scrollLeft-c.x,y:o.top+u.scrollTop-c.y,width:o.width,height:o.height}}function Et(t){var e=new Map,i=new Set,n=[];function M(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&M(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||M(t)})),n}var mt={placement:"bottom",modifiers:[],strategy:"absolute"};function bt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function pt(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,M=e.defaultOptions,s=void 0===M?mt:M;return function(t,e,i){void 0===i&&(i=s);var M,a,r={placement:"bottom",orderedModifiers:[],options:Object.assign({},mt,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],u=!1,c={state:r,setOptions:function(i){var M="function"==typeof i?i(r.options):i;g(),r.options=Object.assign({},s,r.options,M),r.scrollParents={reference:p(t)?It(t):t.contextElement?It(t.contextElement):[],popper:It(e)};var a,u,I=function(t){var e=Et(t);return E.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((a=[].concat(n,r.options.modifiers),u=a.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(u).map((function(t){return u[t]}))));return r.orderedModifiers=I.filter((function(t){return t.enabled})),r.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,M=t.effect;if("function"==typeof M){var s=M({state:r,name:e,instance:c,options:n}),a=function(){};o.push(s||a)}})),c.update()},forceUpdate:function(){if(!u){var t=r.elements,e=t.reference,i=t.popper;if(bt(e,i)){r.rects={reference:Tt(e,P(i),"fixed"===r.options.strategy),popper:U(i)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(t){return r.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var M=r.orderedModifiers[n],s=M.fn,a=M.options,o=void 0===a?{}:a,g=M.name;"function"==typeof s&&(r=s({state:r,options:o,name:g,instance:c})||r)}else r.reset=!1,n=-1}}},update:(M=function(){return new Promise((function(t){c.forceUpdate(),t(r)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(M())}))}))),a}),destroy:function(){g(),u=!0}};if(!bt(t,e))return c;function g(){o.forEach((function(t){return t()})),o=[]}return c.setOptions(i).then((function(t){!u&&i.onFirstUpdate&&i.onFirstUpdate(t)})),c}}var Ct=pt(),zt=pt({defaultModifiers:[nt,yt,et,f]}),ft=pt({defaultModifiers:[nt,yt,et,f,wt,jt,xt,q,ht]}),Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",popperGenerator:pt,detectOverflow:Lt,createPopperBase:Ct,createPopper:ft,createPopperLite:zt,top:j,bottom:d,right:S,left:h,auto:"auto",basePlacements:w,start:"start",end:y,clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:x,placements:T,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:E,applyStyles:f,arrow:q,computeStyles:et,eventListeners:nt,flip:jt,hide:ht,offset:wt,popperOffsets:yt,preventOverflow:xt});
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
/*!
 * ApexCharts v3.33.0
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
/*! svg.filter.js - v2.0.2 - 2016-02-24
* https://github.com/wout/svg.filter.js
* Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,n,M){return this.put(new SVG.DisplacementMapEffect(t,e,i,n,M))},specularLighting:function(t,e,i,n){return this.put(new SVG.SpecularLightingEffect(t,e,i,n))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,n,M){return this.put(new SVG.TurbulenceEffect(t,e,i,n,M))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,n){return this.parent()&&this.parent().displacementMap(this,t,e,i,n)},specularLighting:function(t,e,i,n){return this.parent()&&this.parent().specularLighting(t,e,i,n).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,n,M){return this.parent()&&this.parent().turbulence(t,e,i,n,M).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=M(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=M(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,n,M){this.attr({in:t,in2:e,scale:i,xChannelSelector:n,yChannelSelector:M})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",s(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,n,M){this.attr({numOctaves:e,seed:i,stitchTiles:n,baseFrequency:t,type:M})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each((function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))}))}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,n){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:n})}},n={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,n,M,s){this.attr({x:t,y:e,z:i,pointsAtX:n,pointsAtY:M,pointsAtZ:s})},mergeNode:function(t){this.attr("in",t)}};function M(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function s(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,n=[];e<i;e++)n.push(t[e]);return n.join(" ")}function a(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach((function(t){n["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}})),a(e,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})})),a(i,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})})),a(n,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})})),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,M,s,a,r,o,u){for(var c=t.slice(M,s||u),g=a.slice(r,o||u),I=0,l={pos:[0,0],start:[0,0]},A={pos:[0,0],start:[0,0]};;){if(c[I]=e.call(l,c[I]),g[I]=e.call(A,g[I]),c[I][0]!=g[I][0]||"M"==c[I][0]||"A"==c[I][0]&&(c[I][4]!=g[I][4]||c[I][5]!=g[I][5])?(Array.prototype.splice.apply(c,[I,1].concat(n.call(l,c[I]))),Array.prototype.splice.apply(g,[I,1].concat(n.call(A,g[I])))):(c[I]=i.call(l,c[I]),g[I]=i.call(A,g[I])),++I==c.length&&I==g.length)break;I==c.length&&c.push(["C",l.pos[0],l.pos[1],l.pos[0],l.pos[1],l.pos[0],l.pos[1]]),I==g.length&&g.push(["C",A.pos[0],A.pos[1],A.pos[0],A.pos[1],A.pos[0],A.pos[1]])}return{start:c,dest:g}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function n(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":t=(e=function(t,e){var i,n,M,s,a,r,o,u,c,g,I,l,A,D,N,L,j,d,S,h,w,y,x,T,E,m,b=Math.abs(e[1]),p=Math.abs(e[2]),C=e[3]%360,z=e[4],f=e[5],Y=e[6],v=e[7],O=new SVG.Point(t),U=new SVG.Point(Y,v),k=[];if(0===b||0===p||O.x===U.x&&O.y===U.y)return[["C",O.x,O.y,U.x,U.y,U.x,U.y]];for(i=new SVG.Point((O.x-U.x)/2,(O.y-U.y)/2).transform((new SVG.Matrix).rotate(C)),(n=i.x*i.x/(b*b)+i.y*i.y/(p*p))>1&&(b*=n=Math.sqrt(n),p*=n),M=(new SVG.Matrix).rotate(C).scale(1/b,1/p).rotate(-C),O=O.transform(M),U=U.transform(M),s=[U.x-O.x,U.y-O.y],r=s[0]*s[0]+s[1]*s[1],a=Math.sqrt(r),s[0]/=a,s[1]/=a,o=r<4?Math.sqrt(1-r/4):0,z===f&&(o*=-1),u=new SVG.Point((U.x+O.x)/2+o*-s[1],(U.y+O.y)/2+o*s[0]),c=new SVG.Point(O.x-u.x,O.y-u.y),g=new SVG.Point(U.x-u.x,U.y-u.y),I=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(I*=-1),l=Math.acos(g.x/Math.sqrt(g.x*g.x+g.y*g.y)),g.y<0&&(l*=-1),f&&I>l&&(l+=2*Math.PI),!f&&I<l&&(l-=2*Math.PI),D=Math.ceil(2*Math.abs(I-l)/Math.PI),L=[],j=I,A=(l-I)/D,N=4*Math.tan(A/4)/3,w=0;w<=D;w++)S=Math.cos(j),d=Math.sin(j),h=new SVG.Point(u.x+S,u.y+d),L[w]=[new SVG.Point(h.x+N*d,h.y-N*S),h,new SVG.Point(h.x-N*d,h.y+N*S)],j+=A;for(L[0][0]=L[0][1].clone(),L[L.length-1][2]=L[L.length-1][1].clone(),M=(new SVG.Matrix).rotate(C).scale(b,p).rotate(-C),w=0,y=L.length;w<y;w++)L[w][0]=L[w][0].transform(M),L[w][1]=L[w][1].transform(M),L[w][2]=L[w][2].transform(M);for(w=1,y=L.length;w<y;w++)x=(h=L[w-1][2]).x,T=h.y,E=(h=L[w][0]).x,m=h.y,Y=(h=L[w][1]).x,v=h.y,k.push(["C",x,T,E,m,Y,v]);return k}(this.pos,t))[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function M(t,e){if(!1===e)return!1;for(var i=e,n=t.length;i<n;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,n=this.parse(e),s=0,a=0,r=!1,o=!1;!1!==s||!1!==a;){var u;r=M(i,!1!==s&&s+1),o=M(n,!1!==a&&a+1),!1===s&&(s=0==(u=new SVG.PathArray(c.start).bbox()).height||0==u.width?i.push(i[0])-1:i.push(["M",u.x+u.width/2,u.y+u.height/2])-1),!1===a&&(a=0==(u=new SVG.PathArray(c.dest).bbox()).height||0==u.width?n.push(n[0])-1:n.push(["M",u.x+u.width/2,u.y+u.height/2])-1);var c=t(i,s,r,n,a,o);i=i.slice(0,s).concat(c.start,!1===r?[]:i.slice(r)),n=n.slice(0,a).concat(c.dest,!1===o?[]:n.slice(o)),s=!1!==r&&s+c.start.length,a=!1!==o&&a+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=n,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
* https://github.com/svgdotjs/svg.draggable.js
* Copyright (c) 2019 Wout Fierens; Licensed MIT */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var M;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(M||(M={}));const s={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},a=M.INFO,r={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},o=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),M=r[e];if(!M)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[M](`[${n}]  ${t.name}:`,...i)};class u{constructor(t){this.name=t,this._logLevel=a,this._logHandler=o,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}function c(t){n.forEach(e=>{e.setLogLevel(t)})}function g(t,e){for(const i of n){let n=null;e&&e.level&&(n=s[e.level]),i.userLogHandler=null===t?null:(e,i,...s)=>{const a=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");i>=(null!==n&&void 0!==n?n:e.logLevel)&&t({level:M[i].toLowerCase(),message:a,args:s,type:e.name})}}}},e6cf:function(t,e,i){"use strict";var n,M,s,a,r=i("23e7"),o=i("c430"),u=i("da84"),c=i("d066"),g=i("c65b"),I=i("fea9"),l=i("6eeb"),A=i("e2cc"),D=i("d2bb"),N=i("d44e"),L=i("2626"),j=i("59ed"),d=i("1626"),S=i("861d"),h=i("19aa"),w=i("8925"),y=i("2266"),x=i("1c7e"),T=i("4840"),E=i("2cf4").set,m=i("b575"),b=i("cdf9"),p=i("44de"),C=i("f069"),z=i("e667"),f=i("01b4"),Y=i("69f3"),v=i("94ca"),O=i("b622"),U=i("6069"),k=i("605d"),W=i("2d00"),G=O("species"),J="Promise",Z=Y.getterFor(J),Q=Y.set,P=Y.getterFor(J),V=I&&I.prototype,B=I,F=V,R=u.TypeError,X=u.document,H=u.process,_=C.f,q=_,$=!!(X&&X.createEvent&&u.dispatchEvent),K=d(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",it=0,nt=1,Mt=2,st=1,at=2,rt=!1,ot=v(J,(function(){var t=w(B),e=t!==String(B);if(!e&&66===W)return!0;if(o&&!F["finally"])return!0;if(W>=51&&/native code/.test(t))return!1;var i=new B((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))},M=i.constructor={};return M[G]=n,rt=i.then((function(){}))instanceof n,!rt||!e&&U&&!K})),ut=ot||!x((function(t){B.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!S(t)||!d(e=t.then))&&e},gt=function(t,e){var i,n,M,s=e.value,a=e.state==nt,r=a?t.ok:t.fail,o=t.resolve,u=t.reject,c=t.domain;try{r?(a||(e.rejection===at&&Nt(e),e.rejection=st),!0===r?i=s:(c&&c.enter(),i=r(s),c&&(c.exit(),M=!0)),i===t.promise?u(R("Promise-chain cycle")):(n=ct(i))?g(n,i,o,u):o(i)):u(s)}catch(I){c&&!M&&c.exit(),u(I)}},It=function(t,e){t.notified||(t.notified=!0,m((function(){var i,n=t.reactions;while(i=n.get())gt(i,t);t.notified=!1,e&&!t.rejection&&At(t)})))},lt=function(t,e,i){var n,M;$?(n=X.createEvent("Event"),n.promise=e,n.reason=i,n.initEvent(t,!1,!0),u.dispatchEvent(n)):n={promise:e,reason:i},!K&&(M=u["on"+t])?M(n):t===tt&&p("Unhandled promise rejection",i)},At=function(t){g(E,u,(function(){var e,i=t.facade,n=t.value,M=Dt(t);if(M&&(e=z((function(){k?H.emit("unhandledRejection",n,i):lt(tt,i,n)})),t.rejection=k||Dt(t)?at:st,e.error))throw e.value}))},Dt=function(t){return t.rejection!==st&&!t.parent},Nt=function(t){g(E,u,(function(){var e=t.facade;k?H.emit("rejectionHandled",e):lt(et,e,t.value)}))},Lt=function(t,e,i){return function(n){t(e,n,i)}},jt=function(t,e,i){t.done||(t.done=!0,i&&(t=i),t.value=e,t.state=Mt,It(t,!0))},dt=function(t,e,i){if(!t.done){t.done=!0,i&&(t=i);try{if(t.facade===e)throw R("Promise can't be resolved itself");var n=ct(e);n?m((function(){var i={done:!1};try{g(n,e,Lt(dt,i,t),Lt(jt,i,t))}catch(M){jt(i,M,t)}})):(t.value=e,t.state=nt,It(t,!1))}catch(M){jt({done:!1},M,t)}}};if(ot&&(B=function(t){h(this,F),j(t),g(n,this);var e=Z(this);try{t(Lt(dt,e),Lt(jt,e))}catch(i){jt(e,i)}},F=B.prototype,n=function(t){Q(this,{type:J,done:!1,notified:!1,parent:!1,reactions:new f,rejection:!1,state:it,value:void 0})},n.prototype=A(F,{then:function(t,e){var i=P(this),n=_(T(this,B));return i.parent=!0,n.ok=!d(t)||t,n.fail=d(e)&&e,n.domain=k?H.domain:void 0,i.state==it?i.reactions.add(n):m((function(){gt(n,i)})),n.promise},catch:function(t){return this.then(void 0,t)}}),M=function(){var t=new n,e=Z(t);this.promise=t,this.resolve=Lt(dt,e),this.reject=Lt(jt,e)},C.f=_=function(t){return t===B||t===s?new M(t):q(t)},!o&&d(I)&&V!==Object.prototype)){a=V.then,rt||(l(V,"then",(function(t,e){var i=this;return new B((function(t,e){g(a,i,t,e)})).then(t,e)}),{unsafe:!0}),l(V,"catch",F["catch"],{unsafe:!0}));try{delete V.constructor}catch(St){}D&&D(V,F)}r({global:!0,wrap:!0,forced:ot},{Promise:B}),N(B,J,!1,!0),L(J),s=c(J),r({target:J,stat:!0,forced:ot},{reject:function(t){var e=_(this);return g(e.reject,void 0,t),e.promise}}),r({target:J,stat:!0,forced:o||ot},{resolve:function(t){return b(o&&this===s?B:this,t)}}),r({target:J,stat:!0,forced:ut},{all:function(t){var e=this,i=_(e),n=i.resolve,M=i.reject,s=z((function(){var i=j(e.resolve),s=[],a=0,r=1;y(t,(function(t){var o=a++,u=!1;r++,g(i,e,t).then((function(t){u||(u=!0,s[o]=t,--r||n(s))}),M)})),--r||n(s)}));return s.error&&M(s.value),i.promise},race:function(t){var e=this,i=_(e),n=i.reject,M=z((function(){var M=j(e.resolve);y(t,(function(t){g(M,e,t).then(i.resolve,n)}))}));return M.error&&n(M.value),i.promise}})},e893:function(t,e,i){var n=i("1a2d"),M=i("56ef"),s=i("06cf"),a=i("9bf2");t.exports=function(t,e,i){for(var r=M(e),o=a.f,u=s.f,c=0;c<r.length;c++){var g=r[c];n(t,g)||i&&n(i,g)||o(t,g,u(e,g))}}},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e95a:function(t,e,i){var n=i("b622"),M=i("3f8c"),s=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(M.Array===t||a[s]===t)}},e9a7:function(t,e,i){var n=i("76dd"),M=i("8103");function s(t){return M(n(t).toLowerCase())}t.exports=s},e9c4:function(t,e,i){var n=i("23e7"),M=i("da84"),s=i("d066"),a=i("2ba4"),r=i("e330"),o=i("d039"),u=M.Array,c=s("JSON","stringify"),g=r(/./.exec),I=r("".charAt),l=r("".charCodeAt),A=r("".replace),D=r(1..toString),N=/[\uD800-\uDFFF]/g,L=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,d=function(t,e,i){var n=I(i,e-1),M=I(i,e+1);return g(L,t)&&!g(j,M)||g(j,t)&&!g(L,n)?"\\u"+D(l(t,0),16):t},S=o((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&n({target:"JSON",stat:!0,forced:S},{stringify:function(t,e,i){for(var n=0,M=arguments.length,s=u(M);n<M;n++)s[n]=arguments[n];var r=a(c,null,s);return"string"==typeof r?A(r,N,d):r}})},ea72:function(t,e,i){var n=i("7559"),M=i("7e8e"),s=i("76dd"),a=i("f4d9");function r(t,e,i){return t=s(t),e=i?void 0:e,void 0===e?M(t)?a(t):n(t):t.match(e)||[]}t.exports=r},f069:function(t,e,i){"use strict";var n=i("59ed"),M=function(t){var e,i;this.promise=new t((function(t,n){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=n})),this.resolve=n(e),this.reject=n(i)};t.exports.f=function(t){return new M(t)}},f36a:function(t,e,i){var n=i("e330");t.exports=n([].slice)},f4d9:function(t,e){var i="\\ud800-\\udfff",n="\\u0300-\\u036f",M="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",a=n+M+s,r="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",u="\\xac\\xb1\\xd7\\xf7",c="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",g="\\u2000-\\u206f",I=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="A-Z\\xc0-\\xd6\\xd8-\\xde",A="\\ufe0e\\ufe0f",D=u+c+g+I,N="['’]",L="["+D+"]",j="["+a+"]",d="\\d+",S="["+r+"]",h="["+o+"]",w="[^"+i+D+d+r+o+l+"]",y="\\ud83c[\\udffb-\\udfff]",x="(?:"+j+"|"+y+")",T="[^"+i+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",b="["+l+"]",p="\\u200d",C="(?:"+h+"|"+w+")",z="(?:"+b+"|"+w+")",f="(?:"+N+"(?:d|ll|m|re|s|t|ve))?",Y="(?:"+N+"(?:D|LL|M|RE|S|T|VE))?",v=x+"?",O="["+A+"]?",U="(?:"+p+"(?:"+[T,E,m].join("|")+")"+O+v+")*",k="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",W="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",G=O+v+U,J="(?:"+[S,E,m].join("|")+")"+G,Z=RegExp([b+"?"+h+"+"+f+"(?="+[L,b,"$"].join("|")+")",z+"+"+Y+"(?="+[L,b+C,"$"].join("|")+")",b+"?"+C+"+"+f,b+"+"+Y,W,k,d,J].join("|"),"g");function Q(t){return t.match(Z)||[]}t.exports=Q},f5df:function(t,e,i){var n=i("da84"),M=i("00ee"),s=i("1626"),a=i("c6b6"),r=i("b622"),o=r("toStringTag"),u=n.Object,c="Arguments"==a(function(){return arguments}()),g=function(t,e){try{return t[e]}catch(i){}};t.exports=M?a:function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=g(e=u(t),o))?i:c?a(e):"Object"==(n=a(e))&&s(e.callee)?"Arguments":n}},f6b4:function(t,e,i){"use strict";var n=i("c532");function M(){this.handlers=[]}M.prototype.use=function(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!i&&i.synchronous,runWhen:i?i.runWhen:null}),this.handlers.length-1},M.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},M.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=M},f772:function(t,e,i){var n=i("5692"),M=i("90e3"),s=n("keys");t.exports=function(t){return s[t]||(s[t]=M(t))}},f83d:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return D})),i.d(e,"b",(function(){return j})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return L})),i.d(e,"f",(function(){return S})),i.d(e,"g",(function(){return n})),i.d(e,"h",(function(){return h})),i.d(e,"i",(function(){return x})),i.d(e,"j",(function(){return g})),i.d(e,"k",(function(){return l})),i.d(e,"l",(function(){return w})),i.d(e,"m",(function(){return c})),i.d(e,"n",(function(){return T})),i.d(e,"o",(function(){return b})),i.d(e,"p",(function(){return I})),i.d(e,"q",(function(){return y})),i.d(e,"r",(function(){return r})),i.d(e,"s",(function(){return p})),i.d(e,"t",(function(){return A}));
/*!
  * shared v9.2.0-beta.35
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
//# sourceMappingURL=chunk-vendors.fc0dccb5.js.map