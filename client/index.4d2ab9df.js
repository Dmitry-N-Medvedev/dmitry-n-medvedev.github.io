import{S as t,i as e,s,c as a,e as n,a as l,b as r,d as c,f as o,g as i,h as d,j as u,t as f,k as h,o as m,l as $,m as g,n as p,p as v,q as E,r as y,u as k,v as A,w,x,y as b,z as j,A as z,B as I,C as N,D as O,E as T,F as C}from"./client.f554c920.js";function S(t){let e,s;const m=t[3].default,$=a(m,t,t[2],null);return{c(){e=n("article"),$&&$.c(),this.h()},l(t){e=l(t,"ARTICLE",{id:!0,class:!0});var s=r(e);$&&$.l(s),s.forEach(c),this.h()},h(){o(e,"id","foreword"),o(e,"class","svelte-kq7bwz")},m(t,a){i(t,e,a),$&&$.m(e,null),s=!0},p(t,[e]){$&&$.p&&4&e&&$.p(d(m,t,t[2],null),u(m,t[2],e,null))},i(t){s||(f($,t),s=!0)},o(t){h($,t),s=!1},d(t){t&&c(e),$&&$.d(t)}}}function D(t,e,s){let{gridArea:a=null}=e,n=null;m(()=>{(n=document.documentElement).style.setProperty("--foreword-grid-area",a)});let{$$slots:l={},$$scope:r}=e;return t.$set=(t=>{"gridArea"in t&&s(0,a=t.gridArea),"$$scope"in t&&s(2,r=t.$$scope)}),[a,n,r,l]}class L extends t{constructor(t){super(),e(this,t,D,S,s,{gridArea:0})}}const P="all";function q(t){let e,s;const m=t[3].default,$=a(m,t,t[2],null);return{c(){e=n("span"),$&&$.c(),this.h()},l(t){e=l(t,"SPAN",{itemscope:!0});var s=r(e);$&&$.l(s),s.forEach(c),this.h()},h(){o(e,"itemscope","")},m(a,n){i(a,e,n),$&&$.m(e,null),t[4](e),s=!0},p(t,e){$&&$.p&&4&e&&$.p(d(m,t,t[2],null),u(m,t[2],e,null))},i(t){s||(f($,t),s=!0)},o(t){h($,t),s=!1},d(s){s&&c(e),$&&$.d(s),t[4](null)}}}function R(t){let e,s,a=t[0]&&q(t);return{c(){a&&a.c(),e=$()},l(t){a&&a.l(t),e=$()},m(t,n){a&&a.m(t,n),i(t,e,n),s=!0},p(t,[s]){t[0]?a?(a.p(t,s),f(a,1)):((a=q(t)).c(),f(a,1),a.m(e.parentNode,e)):a&&(g(),h(a,1,1,()=>{a=null}),p())},i(t){s||(f(a),s=!0)},o(t){h(a),s=!1},d(t){a&&a.d(t),t&&c(e)}}}function B(t,e,s){let a,{schema:n}=e;m(()=>{Object.keys(n).forEach(t=>{a.setAttribute(t,n[t])})});let{$$slots:l={},$$scope:r}=e;return t.$set=(t=>{"schema"in t&&s(0,n=t.schema),"$$scope"in t&&s(2,r=t.$$scope)}),[n,a,r,l,function(t){v[t?"unshift":"push"](()=>{s(1,a=t)})}]}class V extends t{constructor(t){super(),e(this,t,B,R,s,{schema:0})}}function F(t,e,s){const a=t.slice();return a[10]=e[s],a}function M(t,e,s){const a=t.slice();return a[13]=e[s],a}function G(t){let e,s,a,d,u=t[13]+"";return{c(){e=n("div"),s=E(u),this.h()},l(t){e=l(t,"DIV",{class:!0,"data-tag":!0});var a=r(e);s=y(a,u),a.forEach(c),this.h()},h(){o(e,"class","tag svelte-17t06z3"),o(e,"data-tag",a=t[13]),k(e,"currentTag",t[13]===t[2])},m(a,n,l){i(a,e,n),A(e,s),l&&d(),d=w(e,"click",t[3])},p(t,n){1&n&&u!==(u=t[13]+"")&&x(s,u),1&n&&a!==(a=t[13])&&o(e,"data-tag",a),5&n&&k(e,"currentTag",t[13]===t[2])},d(t){t&&c(e),d()}}}function H(t){let e,s=t[10]+"";return{c(){e=E(s)},l(t){e=y(t,s)},m(t,s){i(t,e,s)},p(t,a){2&a&&s!==(s=t[10]+"")&&x(e,s)},d(t){t&&c(e)}}}function J(t){let e,s,a,d;const u=new V({props:{schema:t[1][t[10]].schema,$$slots:{default:[H]},$$scope:{ctx:t}}});return{c(){e=n("div"),b(u.$$.fragment),s=j(),this.h()},l(t){e=l(t,"DIV",{class:!0,"data-tags":!0});var a=r(e);z(u.$$.fragment,a),s=I(a),a.forEach(c),this.h()},h(){o(e,"class","stack-item svelte-17t06z3"),o(e,"data-tags",a=t[4](t[10]))},m(t,a){i(t,e,a),N(u,e,null),A(e,s),d=!0},p(t,s){const n={};2&s&&(n.schema=t[1][t[10]].schema),65538&s&&(n.$$scope={dirty:s,ctx:t}),u.$set(n),(!d||2&s&&a!==(a=t[4](t[10])))&&o(e,"data-tags",a)},i(t){d||(f(u.$$.fragment,t),d=!0)},o(t){h(u.$$.fragment,t),d=!1},d(t){t&&c(e),O(u)}}}function K(t){let e,s,a,d,u,m=t[0],$=[];for(let e=0;e<m.length;e+=1)$[e]=G(M(t,m,e));let v=Object.keys(t[1]),E=[];for(let e=0;e<v.length;e+=1)E[e]=J(F(t,v,e));const y=t=>h(E[t],1,1,()=>{E[t]=null});return{c(){e=n("article"),s=n("section");for(let t=0;t<$.length;t+=1)$[t].c();a=j(),d=n("section");for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){e=l(t,"ARTICLE",{id:!0,class:!0});var n=r(e);s=l(n,"SECTION",{id:!0,class:!0});var o=r(s);for(let t=0;t<$.length;t+=1)$[t].l(o);o.forEach(c),a=I(n),d=l(n,"SECTION",{id:!0,class:!0});var i=r(d);for(let t=0;t<E.length;t+=1)E[t].l(i);i.forEach(c),n.forEach(c),this.h()},h(){o(s,"id","tags"),o(s,"class","svelte-17t06z3"),o(d,"id","items"),o(d,"class","svelte-17t06z3"),o(e,"id","stack"),o(e,"class","svelte-17t06z3")},m(t,n){i(t,e,n),A(e,s);for(let t=0;t<$.length;t+=1)$[t].m(s,null);A(e,a),A(e,d);for(let t=0;t<E.length;t+=1)E[t].m(d,null);u=!0},p(t,[e]){if(13&e){let a;for(m=t[0],a=0;a<m.length;a+=1){const n=M(t,m,a);$[a]?$[a].p(n,e):($[a]=G(n),$[a].c(),$[a].m(s,null))}for(;a<$.length;a+=1)$[a].d(1);$.length=m.length}if(18&e){let s;for(v=Object.keys(t[1]),s=0;s<v.length;s+=1){const a=F(t,v,s);E[s]?(E[s].p(a,e),f(E[s],1)):(E[s]=J(a),E[s].c(),f(E[s],1),E[s].m(d,null))}for(g(),s=v.length;s<E.length;s+=1)y(s);p()}},i(t){if(!u){for(let t=0;t<v.length;t+=1)f(E[t]);u=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)h(E[t]);u=!1},d(t){t&&c(e),T($,t),T(E,t)}}}function Q(t,e,s){let{gridArea:a=null}=e,{data:n=null}=e,l=null,r=[],c=[],o=P;const i=t=>{document.querySelectorAll("#items > .stack-item[data-tags]").forEach(e=>{-1!==e.dataset.tags.indexOf(t)?e.classList.add("highlighted-stack-item"):e.classList.remove("highlighted-stack-item")})};return m(()=>{(l=document.documentElement).style.setProperty("--stack-grid-area",a),s(2,o=P),i(o)}),t.$set=(t=>{"gridArea"in t&&s(5,a=t.gridArea),"data"in t&&s(6,n=t.data)}),t.$$.update=(()=>{if(64&t.$$.dirty&&n&&(s(0,r=n.tags),s(1,c=n.items)),1&t.$$.dirty&&r&&s(0,r=Array.from(new Set([P,...r]))),2&t.$$.dirty&&c){for(const t of Object.keys(c))s(1,c[t].tags=[P,...c[t].tags],c);s(1,c),s(6,n)}4&t.$$.dirty&&i(o)}),[r,c,o,t=>{t.preventDefault(),t.stopPropagation(),t.srcElement.dataset.tag?s(2,o=t.srcElement.dataset.tag):s(2,o=P)},t=>c[t].tags.join(" "),a,n]}class U extends t{constructor(t){super(),e(this,t,Q,K,s,{gridArea:5,data:6})}}function W(t){let e,s,a,n=t[0].foreword&&X(t),l=t[0].stack&&Z(t);return{c(){n&&n.c(),e=j(),l&&l.c(),s=$()},l(t){n&&n.l(t),e=I(t),l&&l.l(t),s=$()},m(t,r){n&&n.m(t,r),i(t,e,r),l&&l.m(t,r),i(t,s,r),a=!0},p(t,a){t[0].foreword?n?(n.p(t,a),f(n,1)):((n=X(t)).c(),f(n,1),n.m(e.parentNode,e)):n&&(g(),h(n,1,1,()=>{n=null}),p()),t[0].stack?l?(l.p(t,a),f(l,1)):((l=Z(t)).c(),f(l,1),l.m(s.parentNode,s)):l&&(g(),h(l,1,1,()=>{l=null}),p())},i(t){a||(f(n),f(l),a=!0)},o(t){h(n),h(l),a=!1},d(t){n&&n.d(t),t&&c(e),l&&l.d(t),t&&c(s)}}}function X(t){let e;const s=new L({props:{gridArea:"foreword",$$slots:{default:[Y]},$$scope:{ctx:t}}});return{c(){b(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,a){N(s,t,a),e=!0},p(t,e){const a={};3&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){e||(f(s.$$.fragment,t),e=!0)},o(t){h(s.$$.fragment,t),e=!1},d(t){O(s,t)}}}function Y(t){let e,s=t[0].foreword+"";return{c(){e=E(s)},l(t){e=y(t,s)},m(t,s){i(t,e,s)},p(t,a){1&a&&s!==(s=t[0].foreword+"")&&x(e,s)},d(t){t&&c(e)}}}function Z(t){let e;const s=new U({props:{gridArea:"stack",data:t[0].stack}});return{c(){b(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,a){N(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.data=t[0].stack),s.$set(a)},i(t){e||(f(s.$$.fragment,t),e=!0)},o(t){h(s.$$.fragment,t),e=!1},d(t){O(s,t)}}}function _(t){let e,s,a=t[0]&&W(t);return{c(){e=n("article"),a&&a.c(),this.h()},l(t){e=l(t,"ARTICLE",{id:!0,class:!0});var s=r(e);a&&a.l(s),s.forEach(c),this.h()},h(){o(e,"id","cv"),o(e,"class","svelte-1b42myu")},m(t,n){i(t,e,n),a&&a.m(e,null),s=!0},p(t,[s]){t[0]?a?(a.p(t,s),f(a,1)):((a=W(t)).c(),f(a,1),a.m(e,null)):a&&(g(),h(a,1,1,()=>{a=null}),p())},i(t){s||(f(a),s=!0)},o(t){h(a),s=!1},d(t){t&&c(e),a&&a.d()}}}function tt(t,e,s){let{data:a=null}=e;return t.$set=(t=>{"data"in t&&s(0,a=t.data)}),[a]}class et extends t{constructor(t){super(),e(this,t,tt,_,s,{data:0})}}function st(t){let e,s;const a=new et({props:{data:t[0]}});return{c(){e=j(),b(a.$$.fragment),this.h()},l(t){C('[data-svelte="svelte-1bv9g0p"]',document.head).forEach(c),e=I(t),z(a.$$.fragment,t),this.h()},h(){document.title="Dmitry N. Medvedev"},m(t,n){i(t,e,n),N(a,t,n),s=!0},p(t,[e]){const s={};1&e&&(s.data=t[0]),a.$set(s)},i(t){s||(f(a.$$.fragment,t),s=!0)},o(t){h(a.$$.fragment,t),s=!1},d(t){t&&c(e),O(a,t)}}}function at(t,e,s){let a=null;return m(async()=>{s(0,a=await(await fetch("/data/cv.json")).json())}),[a]}export default class extends t{constructor(t){super(),e(this,t,at,st,s,{})}}
