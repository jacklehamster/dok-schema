(()=>{"use strict";const t=/^[A-Z]/;class n{constructor(){this.registration={}}register(t,n){this.registration[t]=n,n.engine=this}process(n){var e,o,s,i,r;return o=this,s=void 0,r=function*(){if(!n)return void console.log("No entity to process.");const o=Object.entries(n).filter((([n])=>n.match(t))).sort((([t],[n])=>t.localeCompare(n))).map((([t,n])=>({name:t,auxiliary:n,processor:this.registration[t]})));for(const{name:t,processor:s,auxiliary:i}of o)s||console.warn(`No processor for auxiliary: ${t}`),yield null===(e=null==s?void 0:s.process)||void 0===e?void 0:e.call(s,i,n)},new((i=void 0)||(i=Promise))((function(t,n){function e(t){try{a(r.next(t))}catch(t){n(t)}}function c(t){try{a(r.throw(t))}catch(t){n(t)}}function a(n){var o;n.done?t(n.value):(o=n.value,o instanceof i?o:new i((function(t){t(o)}))).then(e,c)}a((r=r.apply(o,s||[])).next())}))}}const e=JSON.parse('{"$schema":"../entity.json","Workspace":{"apps":[{"Title":"Hello World Application","Application":{"scenes":[{"Message":"Hello World"}]}}]}}');class o{}class s extends o{process(t){return n=this,e=void 0,s=function*(){document.title=t},new((o=void 0)||(o=Promise))((function(t,i){function r(t){try{a(s.next(t))}catch(t){i(t)}}function c(t){try{a(s.throw(t))}catch(t){i(t)}}function a(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,c)}a((s=s.apply(n,e||[])).next())}));var n,e,o,s}}class i extends o{process(t){return n=this,e=void 0,s=function*(){const n=document.createElement("div");n.style.position="absolute",n.style.top="0px",n.style.left="0px",n.style.backgroundColor="silver",n.style.width="100%",n.style.padding="5px",n.style.margin="0px",n.style.opacity=".8",n.style.cursor="pointer",n.addEventListener("mousedown",(()=>document.body.removeChild(n))),document.body.appendChild(n),n.textContent=`${t}`},new((o=void 0)||(o=Promise))((function(t,i){function r(t){try{a(s.next(t))}catch(t){i(t)}}function c(t){try{a(s.throw(t))}catch(t){i(t)}}function a(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,c)}a((s=s.apply(n,e||[])).next())}));var n,e,o,s}}class r extends o{constructor(t){super(),this.listProperty=t}process(t,n){var e,o,s,i,r,c;return s=this,i=void 0,c=function*(){const n=t[this.listProperty],s=(Array.isArray(n)?n:[])[null!==(e=t.index)&&void 0!==e?e:0];yield null===(o=this.engine)||void 0===o?void 0:o.process(s)},new((r=void 0)||(r=Promise))((function(t,n){function e(t){try{a(c.next(t))}catch(t){n(t)}}function o(t){try{a(c.throw(t))}catch(t){n(t)}}function a(n){var s;n.done?t(n.value):(s=n.value,s instanceof r?s:new r((function(t){t(s)}))).then(e,o)}a((c=c.apply(s,i||[])).next())}))}}class c extends r{constructor(){super("apps")}}class a extends r{constructor(){super("scenes")}}const l={main:function(){return t=this,o=void 0,l=function*(){const t=new n;t.register("Workspace",new c),t.register("Application",new a),t.register("Title",new s),t.register("Message",new i),yield t.process(e)},new((r=void 0)||(r=Promise))((function(n,e){function s(t){try{c(l.next(t))}catch(t){e(t)}}function i(t){try{c(l.throw(t))}catch(t){e(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,i)}c((l=l.apply(t,o||[])).next())}));var t,o,r,l}};globalThis.exports=l})();
//# sourceMappingURL=main.js.map