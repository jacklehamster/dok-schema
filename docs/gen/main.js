(()=>{var t={965:t=>{t.exports={FileUtils:class{constructor(t){this.XMLHttpRequest=t||globalThis.XMLHttpRequest,this.fileStock={}}async preload(...t){return Promise.all(t.map((async t=>await this.load(t))))}async load(t,e){return t?new Promise(((n,i)=>{const o=e||(t.match(/.(json)$/i)?"json":"blob"),s=[t,o].join("|");if(this.fileStock[s]){const{data:t,loaded:e,onLoadListeners:i}=this.fileStock[s];e?n(t):i.push(n)}else{const e=new this.XMLHttpRequest;this.fileStock[s]={data:null,url:t,progress:0,onLoadListeners:[]},e.open("GET",t),e.responseType=o,e.addEventListener("load",(o=>{if(200===e.status){const t=e.response;this.fileStock[s].progress=1,this.fileStock[s].loaded=!0,this.fileStock[s].data=t,this.fileStock[s].onLoadListeners.forEach((e=>e(t))),delete this.fileStock[s].onLoadListeners,n(t)}else i(new Error(`Url could not load: ${t}`))})),e.addEventListener("error",(t=>{i(new Error("Network Error"))})),e.addEventListener("progress",(t=>{this.fileStock[s].progress=t.loaded/t.total})),e.send()}})):Promise.resolve(null)}}}},847:t=>{t.exports={ImageLoader:class{constructor(t,e,n){this.preserve=t||{},this.XMLHttpRequest=e||globalThis.XMLHttpRequest,this.Image=n||globalThis.Image,this.imageStock={}}async getBlobUrl(t){return await this.loadImage(t),this.preserve[t]?this.imageStock[t]?.img.src:null}async preloadImages(...t){return Promise.all(t.map((async t=>await this.loadImage(t))))}async loadImage(t){return t?new Promise(((e,n)=>{if(this.imageStock[t]){const{img:n,loaded:i,onLoadListeners:o}=this.imageStock[t];i?e(n):o.push(e)}else{const i=new this.XMLHttpRequest,o=new this.Image;this.imageStock[t]={img:o,url:t,progress:0,onLoadListeners:[]},i.open("GET",t),i.responseType="blob",i.addEventListener("load",(o=>{if(200===i.status)if(t.match(/.(jpg|jpeg|png|gif)$/i)){const n=URL.createObjectURL(i.response),{img:o}=this.imageStock[t];o.addEventListener("load",(()=>{this.preserve[t]||URL.revokeObjectURL(n),this.imageStock[t].progress=1,this.imageStock[t].loaded=!0;const i=this.imageStock[t].onLoadListeners;delete this.imageStock[t].onLoadListeners,e(o),i.forEach((t=>t(o)))})),o.src=n}else n(new Error("Invalid image."));else n(new Error(`Url could not load: ${t}`))})),i.addEventListener("error",(t=>{n(new Error("Network Error"))})),i.addEventListener("progress",(e=>{this.imageStock[t].progress=e.loaded/e.total})),i.send()}})):Promise.resolve(null)}}}},128:(t,e,n)=>{const{FileUtils:i}=n(965),{ImageLoader:o}=n(847);t.exports={FileUtils:i,ImageLoader:o}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}(()=>{"use strict";var t=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{c(i.next(t))}catch(t){s(t)}}function a(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}c((i=i.apply(t,e||[])).next())}))};class e{onCreate(e,n){return t(this,void 0,void 0,(function*(){}))}onExit(){return t(this,void 0,void 0,(function*(){}))}}class i extends e{constructor(t){super(),this.name=t}process(t,e){return n=this,i=void 0,s=function*(){e[this.name]=t},new((o=void 0)||(o=Promise))((function(t,e){function r(t){try{c(s.next(t))}catch(t){e(t)}}function a(t){try{c(s.throw(t))}catch(t){e(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(r,a)}c((s=s.apply(n,i||[])).next())}));var n,i,o,s}}class o extends e{constructor(){super(...arguments),this.active=!1,this.refresh=()=>{}}process(t,e){return n=this,i=void 0,s=function*(){this.refresh=()=>{const n=this.render(t,e);this.active&&n&&requestAnimationFrame(this.refresh)},"object"==typeof t&&(null==t?void 0:t.initiallyInactive)||this.setActive(!0)},new((o=void 0)||(o=Promise))((function(t,e){function r(t){try{c(s.next(t))}catch(t){e(t)}}function a(t){try{c(s.throw(t))}catch(t){e(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(r,a)}c((s=s.apply(n,i||[])).next())}));var n,i,o,s}setActive(t){this.active=t,this.active&&requestAnimationFrame(this.refresh)}}var s=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{c(i.next(t))}catch(t){s(t)}}function a(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}c((i=i.apply(t,e||[])).next())}))};class r extends o{constructor(){super(...arguments),this.div=document.createElement("div")}onCreate(){return s(this,void 0,void 0,(function*(){document.body.appendChild(this.div),this.div.style.display="flex"}))}onExit(){return s(this,void 0,void 0,(function*(){document.body.removeChild(this.div),this.setActive(!1)}))}addLink(t,{box:e},n){const i=this.div.appendChild(document.createElement("div"));e&&(i.style.padding="5px",i.style.margin="5px",i.style.borderRadius="5px",i.style.height="50px",i.style.backgroundColor="silver"),i.style.color=n?"blue":"",i.style.textDecoration=n?"underline":"",i.style.cursor=n?"pointer":"",n&&i.addEventListener("mousedown",n),i.innerText=t}}class a extends r{onCreate(){return t=this,e=void 0,i=function*(){document.body.insertBefore(this.div,document.body.firstChild)},new((n=void 0)||(n=Promise))((function(o,s){function r(t){try{c(i.next(t))}catch(t){s(t)}}function a(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}c((i=i.apply(t,e||[])).next())}));var t,e,n,i}render(t,e){const n=[];for(let t=e;t;t=t.parent)n.unshift(t);const i=this.div;i.innerText="",i.style.display="flex",i.style.flexDirection="row";for(let o=0;o<n.length;o++)0!==o&&this.addSeparator(i,t),this.addComponent(n[o],n[o]!==e)}addSeparator(t,e){const n=t.appendChild(document.createElement("div"));n.style.margin="0 5px",n.innerText=e}addComponent(t,e){this.addLink(`${null==t?void 0:t.Id}`,{},e?()=>{var e;null===(e=this.engine)||void 0===e||e.process(t)}:void 0)}}class c extends r{constructor(t){super(),this.listProperty=t}getEntities(t){const e=t[this.listProperty];return Array.isArray(e)?e:[]}process(t,e){const n=Object.create(null,{process:{get:()=>super.process}});return i=this,o=void 0,r=function*(){yield n.process.call(this,t,e);const i=e;i.isContainer=()=>!0,i.getEntities=()=>this.getEntities(t),i.getActiveEntity=()=>{var t,n;return null===(t=i.getEntities)||void 0===t?void 0:t.call(i)[null!==(n=e.index)&&void 0!==n?n:-1]},i.setActiveEntity=t=>{var e,n;return i.index=null===(n=null===(e=i.getEntities)||void 0===e?void 0:e.call(i))||void 0===n?void 0:n.indexOf(t)},i.getEntities().forEach((t=>t.parent=e))},new((s=void 0)||(s=Promise))((function(t,e){function n(t){try{c(r.next(t))}catch(t){e(t)}}function a(t){try{c(r.throw(t))}catch(t){e(t)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof s?i:new s((function(t){t(i)}))).then(n,a)}c((r=r.apply(i,o||[])).next())}));var i,o,s,r}render(t,e){var n;this.div.innerText="";const i=e;null===(n=i.getEntities)||void 0===n||n.call(i).forEach((t=>{this.addLink(`${null==t?void 0:t.Id}`,{box:!0},(()=>{var e,n;null===(e=i.setActiveEntity)||void 0===e||e.call(i,t),null===(n=this.engine)||void 0===n||n.process(t)}))}))}}class l extends c{constructor(){super("apps")}}class d extends c{constructor(){super("scenes")}}class u extends e{process(t){return e=this,n=void 0,o=function*(){document.title=t},new((i=void 0)||(i=Promise))((function(t,s){function r(t){try{c(o.next(t))}catch(t){s(t)}}function a(t){try{c(o.throw(t))}catch(t){s(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,a)}c((o=o.apply(e,n||[])).next())}));var e,n,i,o}}class h extends r{render(t,e){const n=this.div;n.style.position="absolute",n.style.left="0px",n.style.backgroundColor="silver",n.style.width="100%",n.style.padding="10px",n.style.margin="0px",n.style.opacity=".8",n.textContent=`${t}`}}class v{constructor(t){this.registration={},this.engine=t,this.executeRegistration()}register(t,e){this.registration[t]=e,e.engine=this.engine}getProcessor(t){return this.registration[t]}executeRegistration(){this.register("Workspace",new l),this.register("Application",new d),this.register("Title",new u),this.register("Message",new h),this.register("Id",new i("id")),this.register("Breadcrumbs",new a)}}const p=/^[A-Z]/;class f{constructor(){this.registration=new v(this)}getEntries(t){return t?Object.entries(t).filter((([t])=>t.match(p))).sort((([t],[e])=>t.localeCompare(e))).map((([t,e])=>({name:t,auxiliary:e,processor:this.registration.getProcessor(t)}))):[]}process(t){var e,n,i,o,s,r;return i=this,o=void 0,r=function*(){if(!t)return void console.warn("No entity to process.");for(const{processor:t}of this.getEntries(this.entity))yield null===(e=null==t?void 0:t.onExit)||void 0===e?void 0:e.call(t);this.entity=t;const i=this.getEntries(t);for(const{name:t,processor:e}of i)e||console.warn(`No processor for auxiliary: ${t}`);for(const{processor:e,auxiliary:n}of i)yield null==e?void 0:e.onCreate(n,t);for(const{processor:e,auxiliary:o}of i)yield null===(n=null==e?void 0:e.process)||void 0===n?void 0:n.call(e,o,t)},new((s=void 0)||(s=Promise))((function(t,e){function n(t){try{c(r.next(t))}catch(t){e(t)}}function a(t){try{c(r.throw(t))}catch(t){e(t)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof s?i:new s((function(t){t(i)}))).then(n,a)}c((r=r.apply(i,o||[])).next())}))}}var g=n(128);const y={main:function(){return t=this,e=void 0,i=function*(){const t=new f,e=new g.FileUtils(XMLHttpRequest),n=yield e.load("samples/hello-world.json","json");yield t.process(n),globalThis.root=n,globalThis.engine=t},new((n=void 0)||(n=Promise))((function(o,s){function r(t){try{c(i.next(t))}catch(t){s(t)}}function a(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}c((i=i.apply(t,e||[])).next())}));var t,e,n,i}};globalThis.exports=y})()})();
//# sourceMappingURL=main.js.map