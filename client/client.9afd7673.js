function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function y(){return $("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r||n[r]&&n[r].set?t[r]=e[r]:_(t,r,e[r])}function x(t){return Array.from(t.childNodes)}function S(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):g(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function A(t){return w(t," ")}function P(t,e){e=""+e,t.data!==e&&(t.data=e)}function L(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}class k{constructor(t,e=null){this.e=g("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)h(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(d)}}let C;function j(t){C=t}function N(){if(!C)throw new Error("Function called outside component initialization");return C}function O(t){N().$$.on_mount.push(t)}const q=[],U=[],D=[],H=[],I=Promise.resolve();let T=!1;function V(t){D.push(t)}let B=!1;const J=new Set;function M(){if(!B){B=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];j(e),z(e.$$)}for(q.length=0;U.length;)U.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];J.has(e)||(J.add(e),e())}D.length=0}while(q.length);for(;H.length;)H.pop()();T=!1,B=!1,J.clear()}}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const K=new Set;let F;function G(){F={r:0,c:[],p:F}}function W(){F.r||o(F.c),F=F.p}function X(t,e){t&&t.i&&(K.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),F.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Q(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;void 0!==o&&(c=c.slice(),c[o]=s);const a=t&&(e.current=t)(c);let i=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==r&&t&&(G(),Y(t,1,1,()=>{e.blocks[n]=null}),W())}):e.block.d(1),a.c(),X(a,1),a.m(e.mount(),e.anchor),i=!0),e.block=a,e.blocks&&(e.blocks[r]=a),i&&M()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=N();if(t.then(t=>{j(n),r(e.then,1,e.value,t),j(null)},t=>{j(n),r(e.catch,2,e.error,t),j(null)}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function Z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function tt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function nt(t,e){t&&t.l(e)}function rt(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),V(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(V)}function ot(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(q.push(t),T||(T=!0,I.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,n,s,c,a,i,l=[-1]){const u=C;j(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&st(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=x(n.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&X(e.$$.fragment),rt(e,n.target,n.anchor),M()}j(u)}class at{$destroy(){ot(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const it=[];function lt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!it.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),it.push(n,e)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ut={},ft=()=>({});function pt(t){let n,r,o;const s=t[6].default,c=a(s,t,t[5],null),u=c||function(t){let e;return{c(){e=$("N/A")},l(t){e=w(t,"N/A")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}();let f=[{href:t[0]},{target:t[1]},t[4]],p={};for(let t=0;t<f.length;t+=1)p=e(p,f[t]);return{c(){n=g("a"),u&&u.c(),this.h()},l(t){n=S(t,"A",{href:!0,target:!0});var e=x(n);u&&u.l(e),e.forEach(d),this.h()},h(){E(n,p),L(n,"underline",t[2]),L(n,"svelte-vu8bx3",!0)},m(e,s,c){h(e,n,s),u&&u.m(n,null),r=!0,c&&o(),o=b(n,"click",t[3])},p(t,[e]){c&&c.p&&32&e&&c.p(i(s,t,t[5],null),l(s,t[5],e,null)),E(n,Z(f,[1&e&&{href:t[0]},2&e&&{target:t[1]},16&e&&t[4]])),L(n,"underline",t[2]),L(n,"svelte-vu8bx3",!0)},i(t){r||(X(u,t),r=!0)},o(t){Y(u,t),r=!1},d(t){t&&d(n),u&&u.d(t),o()}}}function ht(t,n,r){const o=["href","target","underline"];let s=f(n,o),{href:c=null}=n,{target:a="_blank"}=n,{underline:i=!0}=n;let{$$slots:l={},$$scope:p}=n;return t.$set=t=>{n=e(e({},n),u(t)),r(4,s=f(n,o)),"href"in t&&r(0,c=t.href),"target"in t&&r(1,a=t.target),"underline"in t&&r(2,i=t.underline),"$$scope"in t&&r(5,p=t.$$scope)},[c,a,i,t=>{const{protocol:e,pathname:n}=t.srcElement;console.debug("A on:click",e,n)},s,p,l]}class dt extends at{constructor(t){super(),ct(this,t,ht,pt,c,{href:0,target:1,underline:2})}}function mt(t){let e;return{c(){e=$("CV")},l(t){e=w(t,"CV")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function gt(t){let e,n,r,o,s;const c=new dt({props:{"aria-current":void 0===t[0]?"page":void 0,href:".",$$slots:{default:[mt]},$$scope:{ctx:t}}});return{c(){e=g("nav"),n=g("ul"),r=g("li"),o=g("h2"),et(c.$$.fragment),this.h()},l(t){e=S(t,"NAV",{});var s=x(e);n=S(s,"UL",{class:!0});var a=x(n);r=S(a,"LI",{class:!0});var i=x(r);o=S(i,"H2",{});var l=x(o);nt(c.$$.fragment,l),l.forEach(d),i.forEach(d),a.forEach(d),s.forEach(d),this.h()},h(){_(r,"class","svelte-107m5zp"),_(n,"class","svelte-107m5zp")},m(t,a){h(t,e,a),p(e,n),p(n,r),p(r,o),rt(c,o,null),s=!0},p(t,[e]){const n={};1&e&&(n["aria-current"]=void 0===t[0]?"page":void 0),2&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){s||(X(c.$$.fragment,t),s=!0)},o(t){Y(c.$$.fragment,t),s=!1},d(t){t&&d(e),ot(c)}}}function $t(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class vt extends at{constructor(t){super(),ct(this,t,$t,gt,c,{segment:0})}}function yt(t){let e,n,r;const o=new vt({props:{segment:t[0]}}),s=t[2].default,c=a(s,t,t[1],null);return{c(){et(o.$$.fragment),e=v(),n=g("main"),c&&c.c(),this.h()},l(t){nt(o.$$.fragment,t),e=A(t),n=S(t,"MAIN",{id:!0});var r=x(n);c&&c.l(r),r.forEach(d),this.h()},h(){_(n,"id","main")},m(t,s){rt(o,t,s),h(t,e,s),h(t,n,s),c&&c.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),c&&c.p&&2&e&&c.p(i(s,t,t[1],null),l(s,t[1],e,null))},i(t){r||(X(o.$$.fragment,t),X(c,t),r=!0)},o(t){Y(o.$$.fragment,t),Y(c,t),r=!1},d(t){ot(o,t),t&&d(e),t&&d(n),c&&c.d(t)}}}function bt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class _t extends at{constructor(t){super(),ct(this,t,bt,yt,c,{segment:0})}}function Et(t){let e,n,r=t[1].stack+"";return{c(){e=g("pre"),n=$(r)},l(t){e=S(t,"PRE",{});var o=x(e);n=w(o,r),o.forEach(d)},m(t,r){h(t,e,r),p(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&P(n,r)},d(t){t&&d(e)}}}function xt(e){let n,r,o,s,c,a,i,l,u,f=e[1].message+"";document.title=n=e[0];let m=e[2]&&e[1].stack&&Et(e);return{c(){r=v(),o=g("h1"),s=$(e[0]),c=v(),a=g("p"),i=$(f),l=v(),m&&m.c(),u=y(),this.h()},l(t){R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),r=A(t),o=S(t,"H1",{class:!0});var n=x(o);s=w(n,e[0]),n.forEach(d),c=A(t),a=S(t,"P",{class:!0});var p=x(a);i=w(p,f),p.forEach(d),l=A(t),m&&m.l(t),u=y(),this.h()},h(){_(o,"class","svelte-8od9u6"),_(a,"class","svelte-8od9u6")},m(t,e){h(t,r,e),h(t,o,e),p(o,s),h(t,c,e),h(t,a,e),p(a,i),h(t,l,e),m&&m.m(t,e),h(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&P(s,t[0]),2&e&&f!==(f=t[1].message+"")&&P(i,f),t[2]&&t[1].stack?m?m.p(t,e):(m=Et(t),m.c(),m.m(u.parentNode,u)):m&&(m.d(1),m=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),t&&d(c),t&&d(a),t&&d(l),m&&m.d(t),t&&d(u)}}}function St(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class wt extends at{constructor(t){super(),ct(this,t,St,xt,c,{status:0,error:1})}}function At(t){let n,r;const o=[t[4].props];var s=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var a=new s(c());return{c(){a&&et(a.$$.fragment),n=y()},l(t){a&&nt(a.$$.fragment,t),n=y()},m(t,e){a&&rt(a,t,e),h(t,n,e),r=!0},p(t,e){const r=16&e?Z(o,[tt(t[4].props)]):{};if(s!==(s=t[4].component)){if(a){G();const t=a;Y(t.$$.fragment,1,0,()=>{ot(t,1)}),W()}s?(et((a=new s(c())).$$.fragment),X(a.$$.fragment,1),rt(a,n.parentNode,n)):a=null}else s&&a.$set(r)},i(t){r||(a&&X(a.$$.fragment,t),r=!0)},o(t){a&&Y(a.$$.fragment,t),r=!1},d(t){t&&d(n),a&&ot(a,t)}}}function Pt(t){let e;const n=new wt({props:{error:t[0],status:t[1]}});return{c(){et(n.$$.fragment)},l(t){nt(n.$$.fragment,t)},m(t,r){rt(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){ot(n,t)}}}function Lt(t){let e,n,r,o;const s=[Pt,At],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){c[e].m(t,n),h(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(G(),Y(c[i],1,1,()=>{c[i]=null}),W(),n=c[e],n||(n=c[e]=s[e](t),n.c()),X(n,1),n.m(r.parentNode,r))},i(t){o||(X(n),o=!0)},o(t){Y(n),o=!1},d(t){c[e].d(t),t&&d(r)}}}function Rt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Lt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new _t({props:o});return{c(){et(s.$$.fragment)},l(t){nt(s.$$.fragment,t)},m(t,e){rt(s,t,e),n=!0},p(t,[e]){const n=12&e?Z(r,[4&e&&{segment:t[2][0]},8&e&&tt(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){ot(s,t)}}}function kt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e;var l,u;return l=ut,u=r,N().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1)},[o,s,c,a,i,r]}class Ct extends at{constructor(t){super(),ct(this,t,kt,Rt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const jt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Nt=[{js:()=>import("./index.dccd2249.js"),css:[]},{js:()=>import("./about.c4b8dad6.js"),css:[]},{js:()=>import("./index.0d1c8127.js"),css:[]},{js:()=>import("./[slug].14ef4e0d.js"),css:[]}],Ot=(qt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:qt(t[1])})}]}]);var qt;const Ut="undefined"!=typeof __SAPPER__&&__SAPPER__;let Dt,Ht,It,Tt=!1,Vt=[],Bt="{}";const Jt={page:lt({}),preloading:lt(null),session:lt(Ut&&Ut.session)};let Mt,zt;Jt.session.subscribe(async t=>{if(Mt=t,!Tt)return;zt=!0;const e=Zt(new URL(location.href)),n=Ht={},{redirect:r,props:o,branch:s}=await re(e);n===Ht&&await ne(r,s,o,e.page)});let Kt,Ft=null;let Gt,Wt=1;const Xt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Yt={};function Qt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ut.baseUrl))return null;let e=t.pathname.slice(Ut.baseUrl.length);if(""===e&&(e="/"),!jt.some(t=>t.test(e)))for(let n=0;n<Ot.length;n+=1){const r=Ot[n],o=r.pattern.exec(e);if(o){const n=Qt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function te(){return{x:pageXOffset,y:pageYOffset}}async function ee(t,e,n,r){if(e)Gt=e;else{const t=te();Yt[Gt]=t,e=Gt=++Wt,Yt[Gt]=n?t:{x:0,y:0}}Gt=e,Dt&&Jt.preloading.set(!0);const o=Ft&&Ft.href===t.href?Ft.promise:re(t);Ft=null;const s=Ht={},{redirect:c,props:a,branch:i}=await o;if(s===Ht&&(await ne(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Yt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Yt[Gt]=t,t&&scrollTo(t.x,t.y)}}async function ne(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Zt(new URL(t,document.baseURI));return n?(Xt[e.replaceState?"replaceState":"pushState"]({id:Gt},"",t),ee(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Jt.page.set(r),Jt.preloading.set(!1),Dt)Dt.$set(n);else{n.stores={page:{subscribe:Jt.page.subscribe},preloading:{subscribe:Jt.preloading.subscribe},session:Jt.session},n.level0={props:await It};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)se(t.nextSibling);se(t),se(e)}Dt=new Ct({target:Kt,props:n,hydrate:!0})}Vt=e,Bt=JSON.stringify(r.query),Tt=!0,zt=!1}async function re(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;It||(It=Ut.preloaded[0]||ft.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Mt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Bt)return!0;const o=Vt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!zt&&!u&&Vt[a]&&Vt[a].part===e.i)return Vt[a];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(oe);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Nt[e.i]);let m;return m=Tt||!Ut.preloaded[a+1]?d?await d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Mt):{}:Ut.preloaded[a+1],s[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function oe(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function se(t){t.parentNode.removeChild(t)}function ce(t){const e=Zt(new URL(t,document.baseURI));if(e)return Ft&&t===Ft.href||function(t,e){Ft={href:t,promise:e}}(t,re(e)),Ft.promise}let ae;function ie(t){clearTimeout(ae),ae=setTimeout(()=>{le(t)},20)}function le(t){const e=fe(t.target);e&&"prefetch"===e.rel&&ce(e.href)}function ue(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=fe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Zt(o);if(s){ee(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Xt.pushState({id:Gt},"",o.href)}}function fe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function pe(t){if(Yt[Gt]=te(),t.state){const e=Zt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else Wt=Wt+1,function(t){Gt=t}(Wt),Xt.replaceState({id:Gt},"",location.href)}var he;he={target:document.querySelector("#sapper")},"scrollRestoration"in Xt&&(Xt.scrollRestoration="manual"),function(t){Kt=t}(he.target),addEventListener("click",ue),addEventListener("popstate",pe),addEventListener("touchstart",le),addEventListener("mousemove",ie),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Xt.replaceState({id:Wt},"",e);const n=new URL(location.href);if(Ut.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=Ut;It||(It=s&&s[0]),ne(null,[],{error:a,status:c,session:o,level0:{props:It},level1:{props:{status:c,error:a},component:wt},segments:s},{host:e,path:n,query:Qt(r),params:{}})}();const r=Zt(n);return r?ee(r,Wt,!0,t):void 0});export{p as A,rt as B,ot as C,P as D,dt as E,y as F,G,W as H,m as I,b as J,O as K,Q as L,k as M,R as N,at as S,S as a,x as b,a as c,d,g as e,_ as f,h as g,i as h,ct as i,l as j,Y as k,$ as l,w as m,e as n,E as o,L as p,Z as q,f as r,c as s,X as t,u,t as v,v as w,et as x,A as y,nt as z};
