import{S as t,i as e,s as n,c as s,e as l,a as c,b as r,d as a,f as o,g as i,h as f,j as $,t as u,k as h,l as m,m as d,n as p,o as g,p as v,q as E,r as x,u as y,v as w,w as I,x as k,A as D,y as b,z,B as V,C as N,D as A,E as j,F as T,G as L}from"./client.ac3997a4.js";function C(t){let e,n;const p=t[1].default,g=s(p,t,t[0],null),v=g||function(t){let e;return{c(){e=m("N/A")},l(t){e=d(t,"N/A")},m(t,n){i(t,e,n)},d(t){t&&a(e)}}}();return{c(){e=l("div"),v&&v.c(),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=r(e);v&&v.l(n),n.forEach(a),this.h()},h(){o(e,"class","grid-block svelte-1oll5e5")},m(t,s){i(t,e,s),v&&v.m(e,null),n=!0},p(t,[e]){g&&g.p&&1&e&&g.p(f(p,t,t[0],null),$(p,t[0],e,null))},i(t){n||(u(v,t),n=!0)},o(t){h(v,t),n=!1},d(t){t&&a(e),v&&v.d(t)}}}function O(t,e,n){let{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class R extends t{constructor(t){super(),e(this,t,O,C,n,{})}}function S(t){let e,n,p;const g=t[2].default,v=s(g,t,t[1],null),E=v||function(t){let e;return{c(){e=m("N/A")},l(t){e=d(t,"N/A")},m(t,n){i(t,e,n)},d(t){t&&a(e)}}}();return{c(){e=l("div"),E&&E.c(),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=r(e);E&&E.l(n),n.forEach(a),this.h()},h(){o(e,"class",n="grid-block-record "+t[0]+" svelte-1a49c6p")},m(t,n){i(t,e,n),E&&E.m(e,null),p=!0},p(t,[s]){v&&v.p&&2&s&&v.p(f(g,t,t[1],null),$(g,t[1],s,null)),(!p||1&s&&n!==(n="grid-block-record "+t[0]+" svelte-1a49c6p"))&&o(e,"class",n)},i(t){p||(u(E,t),p=!0)},o(t){h(E,t),p=!1},d(t){t&&a(e),E&&E.d(t)}}}function q(t,e,n){let{className:s=""}=e,{$$slots:l={},$$scope:c}=e;return t.$set=t=>{"className"in t&&n(0,s=t.className),"$$scope"in t&&n(1,c=t.$$scope)},[s,c,l]}class B extends t{constructor(t){super(),e(this,t,q,S,n,{className:0})}}function P(t){let e,n;return{c(){e=l("img"),this.h()},l(t){e=c(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(n=t[0])&&o(e,"src",n),o(e,"alt",t[1]),o(e,"class","icon svelte-qt19gb")},m(t,n){i(t,e,n)},p(t,[s]){1&s&&e.src!==(n=t[0])&&o(e,"src",n),2&s&&o(e,"alt",t[1])},i:p,o:p,d(t){t&&a(e)}}}function F(t,e,n){let{src:s=""}=e,{alt:l=""}=e;return t.$set=t=>{"src"in t&&n(0,s=t.src),"alt"in t&&n(1,l=t.alt)},[s,l]}class G extends t{constructor(t){super(),e(this,t,F,P,n,{src:0,alt:1})}}function H(t,e,n){const s=t.slice();return s[1]=e[n].name,s[2]=e[n].url,s[3]=e[n].svg,s}function M(t){let e,n,s=t[0].name+"";return{c(){e=l("span"),n=m(s),this.h()},l(t){e=c(t,"SPAN",{itemprop:!0});var l=r(e);n=d(l,s),l.forEach(a),this.h()},h(){o(e,"itemprop","name")},m(t,s){i(t,e,s),y(e,n)},p(t,e){1&e&&s!==(s=t[0].name+"")&&k(n,s)},d(t){t&&a(e)}}}function _(t){let e,n=t[0].city+"";return{c(){e=m(n)},l(t){e=d(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[0].city+"")&&k(e,n)},d(t){t&&a(e)}}}function U(t){let e,n=t[0].country+"";return{c(){e=m(n)},l(t){e=d(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[0].country+"")&&k(e,n)},d(t){t&&a(e)}}}function J(t){let e,n,s=t[0].email+"";return{c(){e=l("span"),n=m(s),this.h()},l(t){e=c(t,"SPAN",{itemprop:!0});var l=r(e);n=d(l,s),l.forEach(a),this.h()},h(){o(e,"itemprop","email")},m(t,s){i(t,e,s),y(e,n)},p(t,e){1&e&&s!==(s=t[0].email+"")&&k(n,s)},d(t){t&&a(e)}}}function K(t){let e;const n=new D({props:{href:"mailto:"+t[0].email,$$slots:{default:[J]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.href="mailto:"+t[0].email),65&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function Q(t){let e,n,s,f;const $=new G({props:{src:t[3],alt:t[1]}});return{c(){e=l("a"),v($.$$.fragment),n=g(),this.h()},l(t){e=c(t,"A",{class:!0,href:!0,target:!0});var s=r(e);x($.$$.fragment,s),n=E(s),s.forEach(a),this.h()},h(){o(e,"class","a svelte-10n8l1l"),o(e,"href",s=t[2]),o(e,"target","_blank")},m(t,s){i(t,e,s),w($,e,null),y(e,n),f=!0},p(t,n){const l={};1&n&&(l.src=t[3]),1&n&&(l.alt=t[1]),$.$set(l),(!f||1&n&&s!==(s=t[2]))&&o(e,"href",s)},i(t){f||(u($.$$.fragment,t),f=!0)},o(t){h($.$$.fragment,t),f=!1},d(t){t&&a(e),I($)}}}function W(t){let e,n,s=t[0].links,l=[];for(let e=0;e<s.length;e+=1)l[e]=Q(H(t,s,e));const c=t=>h(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=b()},l(t){for(let e=0;e<l.length;e+=1)l[e].l(t);e=b()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);i(t,e,s),n=!0},p(t,n){if(1&n){let r;for(s=t[0].links,r=0;r<s.length;r+=1){const c=H(t,s,r);l[r]?(l[r].p(c,n),u(l[r],1)):(l[r]=Q(c),l[r].c(),u(l[r],1),l[r].m(e.parentNode,e))}for(z(),r=s.length;r<l.length;r+=1)c(r);V()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)u(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)h(l[t]);n=!1},d(t){N(l,t),t&&a(e)}}}function X(t){let e,n,s,f,$,m,d,p,k,D,b;const z=new B({props:{className:"display-flex justify-content-flex-end",$$slots:{default:[M]},$$scope:{ctx:t}}}),V=new B({props:{className:"display-flex justify-content-flex-end",$$slots:{default:[_]},$$scope:{ctx:t}}}),N=new B({props:{className:"display-flex justify-content-flex-end",$$slots:{default:[U]},$$scope:{ctx:t}}}),A=new B({props:{className:"display-flex justify-content-flex-end",$$slots:{default:[K]},$$scope:{ctx:t}}}),j=new B({props:{className:"display-flex justify-content-flex-end social-network-icons",$$slots:{default:[W]},$$scope:{ctx:t}}});return{c(){e=l("article"),n=l("div"),s=l("img"),$=g(),m=l("div"),v(z.$$.fragment),d=g(),v(V.$$.fragment),p=g(),v(N.$$.fragment),k=g(),v(A.$$.fragment),D=g(),v(j.$$.fragment),this.h()},l(t){e=c(t,"ARTICLE",{class:!0});var l=r(e);n=c(l,"DIV",{class:!0});var o=r(n);s=c(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(a),$=E(l),m=c(l,"DIV",{class:!0});var i=r(m);x(z.$$.fragment,i),d=E(i),x(V.$$.fragment,i),p=E(i),x(N.$$.fragment,i),k=E(i),x(A.$$.fragment,i),D=E(i),x(j.$$.fragment,i),i.forEach(a),l.forEach(a),this.h()},h(){s.src!==(f="/photos/me.jpg")&&o(s,"src","/photos/me.jpg"),o(s,"alt","me"),o(s,"class","svelte-10n8l1l"),o(n,"class","contacts-photo svelte-10n8l1l"),o(m,"class","contacts-content svelte-10n8l1l"),o(e,"class","contacts svelte-10n8l1l")},m(t,l){i(t,e,l),y(e,n),y(n,s),y(e,$),y(e,m),w(z,m,null),y(m,d),w(V,m,null),y(m,p),w(N,m,null),y(m,k),w(A,m,null),y(m,D),w(j,m,null),b=!0},p(t,[e]){const n={};65&e&&(n.$$scope={dirty:e,ctx:t}),z.$set(n);const s={};65&e&&(s.$$scope={dirty:e,ctx:t}),V.$set(s);const l={};65&e&&(l.$$scope={dirty:e,ctx:t}),N.$set(l);const c={};65&e&&(c.$$scope={dirty:e,ctx:t}),A.$set(c);const r={};65&e&&(r.$$scope={dirty:e,ctx:t}),j.$set(r)},i(t){b||(u(z.$$.fragment,t),u(V.$$.fragment,t),u(N.$$.fragment,t),u(A.$$.fragment,t),u(j.$$.fragment,t),b=!0)},o(t){h(z.$$.fragment,t),h(V.$$.fragment,t),h(N.$$.fragment,t),h(A.$$.fragment,t),h(j.$$.fragment,t),b=!1},d(t){t&&a(e),I(z),I(V),I(N),I(A),I(j)}}}function Y(t,e,n){let{data:s=null}=e;return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class Z extends t{constructor(t){super(),e(this,t,Y,X,n,{data:0})}}function tt(t){let e,n;const m=t[1].default,d=s(m,t,t[0],null);return{c(){e=l("article"),d&&d.c(),this.h()},l(t){e=c(t,"ARTICLE",{id:!0,class:!0});var n=r(e);d&&d.l(n),n.forEach(a),this.h()},h(){o(e,"id","foreword"),o(e,"class","svelte-13mi6q6")},m(t,s){i(t,e,s),d&&d.m(e,null),n=!0},p(t,[e]){d&&d.p&&1&e&&d.p(f(m,t,t[0],null),$(m,t[0],e,null))},i(t){n||(u(d,t),n=!0)},o(t){h(d,t),n=!1},d(t){t&&a(e),d&&d.d(t)}}}function et(t,e,n){let{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class nt extends t{constructor(t){super(),e(this,t,et,tt,n,{})}}function st(t,e,n){const s=t.slice();return s[8]=e[n],s}function lt(t,e,n){const s=t.slice();return s[11]=e[n],s}function ct(t){let e,n;return{c(){e=l("h2"),n=m("stack"),this.h()},l(t){e=c(t,"H2",{class:!0});var s=r(e);n=d(s,"stack"),s.forEach(a),this.h()},h(){o(e,"class","stack-header svelte-1d6a5b7")},m(t,s){i(t,e,s),y(e,n)},d(t){t&&a(e)}}}function rt(t){let e,n,s,f,$=t[11]+"";return{c(){e=l("div"),n=m($),this.h()},l(t){e=c(t,"DIV",{class:!0,"data-tag":!0});var s=r(e);n=d(s,$),s.forEach(a),this.h()},h(){o(e,"class","tag svelte-1d6a5b7"),o(e,"data-tag",s=t[11]),A(e,"currentTag",t[11]===t[2])},m(s,l,c){i(s,e,l),y(e,n),c&&f(),f=j(e,"click",t[3])},p(t,l){1&l&&$!==($=t[11]+"")&&k(n,$),1&l&&s!==(s=t[11])&&o(e,"data-tag",s),5&l&&A(e,"currentTag",t[11]===t[2])},d(t){t&&a(e),f()}}}function at(t){let e,n,s,f,$=t[8]+"";return{c(){e=l("div"),n=m($),s=g(),this.h()},l(t){e=c(t,"DIV",{class:!0,"data-tags":!0});var l=r(e);n=d(l,$),s=E(l),l.forEach(a),this.h()},h(){o(e,"class","stack-item svelte-1d6a5b7"),o(e,"data-tags",f=t[4](t[8]))},m(t,l){i(t,e,l),y(e,n),y(e,s)},p(t,s){2&s&&$!==($=t[8]+"")&&k(n,$),2&s&&f!==(f=t[4](t[8]))&&o(e,"data-tags",f)},d(t){t&&a(e)}}}function ot(t){let e,n,s,f,$,u=Object.keys(t[1]).length>0,h=u&&ct(),m=t[0],d=[];for(let e=0;e<m.length;e+=1)d[e]=rt(lt(t,m,e));let v=Object.keys(t[1]),x=[];for(let e=0;e<v.length;e+=1)x[e]=at(st(t,v,e));return{c(){e=l("article"),h&&h.c(),n=g(),s=l("section");for(let t=0;t<d.length;t+=1)d[t].c();f=g(),$=l("section");for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(t){e=c(t,"ARTICLE",{class:!0});var l=r(e);h&&h.l(l),n=E(l),s=c(l,"SECTION",{class:!0});var o=r(s);for(let t=0;t<d.length;t+=1)d[t].l(o);o.forEach(a),f=E(l),$=c(l,"SECTION",{class:!0});var i=r($);for(let t=0;t<x.length;t+=1)x[t].l(i);i.forEach(a),l.forEach(a),this.h()},h(){o(s,"class","tags svelte-1d6a5b7"),o($,"class","items svelte-1d6a5b7"),o(e,"class","stack svelte-1d6a5b7")},m(t,l){i(t,e,l),h&&h.m(e,null),y(e,n),y(e,s);for(let t=0;t<d.length;t+=1)d[t].m(s,null);y(e,f),y(e,$);for(let t=0;t<x.length;t+=1)x[t].m($,null)},p(t,[l]){if(2&l&&(u=Object.keys(t[1]).length>0),u?h||(h=ct(),h.c(),h.m(e,n)):h&&(h.d(1),h=null),13&l){let e;for(m=t[0],e=0;e<m.length;e+=1){const n=lt(t,m,e);d[e]?d[e].p(n,l):(d[e]=rt(n),d[e].c(),d[e].m(s,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=m.length}if(18&l){let e;for(v=Object.keys(t[1]),e=0;e<v.length;e+=1){const n=st(t,v,e);x[e]?x[e].p(n,l):(x[e]=at(n),x[e].c(),x[e].m($,null))}for(;e<x.length;e+=1)x[e].d(1);x.length=v.length}},i:p,o:p,d(t){t&&a(e),h&&h.d(),N(d,t),N(x,t)}}}function it(t,e,n){let{data:s=null}=e,l=[],c=[],r="all";const a=t=>{document.querySelectorAll(".items > .stack-item[data-tags]").forEach(e=>{-1!==e.dataset.tags.indexOf(t)?e.classList.add("highlighted-stack-item"):e.classList.remove("highlighted-stack-item")})};return T(()=>{n(2,r="all"),a(r)}),t.$set=t=>{"data"in t&&n(5,s=t.data)},t.$$.update=()=>{if(32&t.$$.dirty&&s&&(n(0,l=s.tags),n(1,c=s.items)),1&t.$$.dirty&&l&&n(0,l=Array.from(new Set(["all",...l]))),2&t.$$.dirty&&c){for(const t of Object.keys(c))n(1,c[t].tags=["all",...c[t].tags],c);n(1,c),n(5,s)}4&t.$$.dirty&&a(r)},[l,c,r,t=>{t.preventDefault(),t.stopPropagation(),t.srcElement.dataset.tag?n(2,r=t.srcElement.dataset.tag):n(2,r="all")},t=>c[t].tags.join(" "),s]}class ft extends t{constructor(t){super(),e(this,t,it,ot,n,{data:5})}}function $t(t){let e,n;const p=t[1].default,g=s(p,t,t[0],null),v=g||function(t){let e;return{c(){e=m("N/A")},l(t){e=d(t,"N/A")},m(t,n){i(t,e,n)},d(t){t&&a(e)}}}();return{c(){e=l("ul"),v&&v.c(),this.h()},l(t){e=c(t,"UL",{class:!0});var n=r(e);v&&v.l(n),n.forEach(a),this.h()},h(){o(e,"class","ul svelte-1cxug4t")},m(t,s){i(t,e,s),v&&v.m(e,null),n=!0},p(t,[e]){g&&g.p&&1&e&&g.p(f(p,t,t[0],null),$(p,t[0],e,null))},i(t){n||(u(v,t),n=!0)},o(t){h(v,t),n=!1},d(t){t&&a(e),v&&v.d(t)}}}function ut(t,e,n){let{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class ht extends t{constructor(t){super(),e(this,t,ut,$t,n,{})}}function mt(t,e,n){const s=t.slice();return s[4]=e[n],s}function dt(t,e,n){const s=t.slice();return s[7]=e[n],s}function pt(t,e,n){const s=t.slice();return s[1]=e[n],s}function gt(t){let e,n;return{c(){e=l("h2"),n=m("employement record"),this.h()},l(t){e=c(t,"H2",{class:!0});var s=r(e);n=d(s,"employement record"),s.forEach(a),this.h()},h(){o(e,"class","svelte-1g5srz6")},m(t,s){i(t,e,s),y(e,n)},d(t){t&&a(e)}}}function vt(t){let e,n,s=t[1].info.company.description+"";return{c(){e=l("div"),n=m(s),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=r(e);n=d(l,s),l.forEach(a),this.h()},h(){o(e,"class","timeline-item-info-company-description svelte-1g5srz6")},m(t,s){i(t,e,s),y(e,n)},p(t,e){1&e&&s!==(s=t[1].info.company.description+"")&&k(n,s)},d(t){t&&a(e)}}}function Et(t){let e;const n=new ht({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1025&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function xt(t){let e,n=t[1].info.role.responsibilities+"";return{c(){e=m(n)},l(t){e=d(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[1].info.role.responsibilities+"")&&k(e,n)},i:p,o:p,d(t){t&&a(e)}}}function yt(t){let e,n,s=t[7]+"";return{c(){e=l("li"),n=m(s),this.h()},l(t){e=c(t,"LI",{class:!0});var l=r(e);n=d(l,s),l.forEach(a),this.h()},h(){o(e,"class","svelte-1g5srz6")},m(t,s){i(t,e,s),y(e,n)},p(t,e){1&e&&s!==(s=t[7]+"")&&k(n,s)},d(t){t&&a(e)}}}function wt(t){let e,n=t[1].info.role.responsibilities,s=[];for(let e=0;e<n.length;e+=1)s[e]=yt(dt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=b()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=b()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);i(t,e,n)},p(t,l){if(1&l){let c;for(n=t[1].info.role.responsibilities,c=0;c<n.length;c+=1){const r=dt(t,n,c);s[c]?s[c].p(r,l):(s[c]=yt(r),s[c].c(),s[c].m(e.parentNode,e))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}},d(t){N(s,t),t&&a(e)}}}function It(t){let e,n,s,f,$,u=t[1].info.stack,h=[];for(let e=0;e<u.length;e+=1)h[e]=kt(mt(t,u,e));return{c(){e=l("div"),n=l("div"),s=m("stack"),f=g(),$=l("div");for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){e=c(t,"DIV",{class:!0});var l=r(e);n=c(l,"DIV",{class:!0});var o=r(n);s=d(o,"stack"),o.forEach(a),f=E(l),$=c(l,"DIV",{class:!0});var i=r($);for(let t=0;t<h.length;t+=1)h[t].l(i);i.forEach(a),l.forEach(a),this.h()},h(){o(n,"class","timeline-item-info-stack-header svelte-1g5srz6"),o($,"class","timeline-item-info-stack-items svelte-1g5srz6"),o(e,"class","timeline-item-info-stack svelte-1g5srz6")},m(t,l){i(t,e,l),y(e,n),y(n,s),y(e,f),y(e,$);for(let t=0;t<h.length;t+=1)h[t].m($,null)},p(t,e){if(1&e){let n;for(u=t[1].info.stack,n=0;n<u.length;n+=1){const s=mt(t,u,n);h[n]?h[n].p(s,e):(h[n]=kt(s),h[n].c(),h[n].m($,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=u.length}},d(t){t&&a(e),N(h,t)}}}function kt(t){let e,n,s=t[4]+"";return{c(){e=l("div"),n=m(s),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=r(e);n=d(l,s),l.forEach(a),this.h()},h(){o(e,"class","stack-item svelte-1g5srz6")},m(t,s){i(t,e,s),y(e,n)},p(t,e){1&e&&s!==(s=t[4]+"")&&k(n,s)},d(t){t&&a(e)}}}function Dt(t){let e,n,s,f,$,p,v,x,w,I,D,b,N,A,j,T,L,C,O,R,S,q,B,P,F,G,H,M,_=t[1].started+"",U=t[1].ended+"",J=t[1].info.company.name+"",K=t[1].info.role.name+"",Q=t[1].info.company.description.length>0&&vt(t);const W=[xt,Et],X=[];function Y(t,e){return 1===t[1].info.role.responsibilities.length?0:1}P=Y(t),F=X[P]=W[P](t);let Z=t[1].info.stack.length>0&&It(t);return{c(){e=l("article"),n=l("div"),s=l("div"),f=m(_),$=g(),p=l("div"),v=m(U),x=g(),w=l("div"),I=l("div"),D=l("div"),b=m(J),N=g(),Q&&Q.c(),A=g(),j=l("div"),T=l("div"),L=m(K),C=g(),O=l("div"),R=l("div"),S=m("responsibilities"),q=g(),B=l("div"),F.c(),G=g(),Z&&Z.c(),H=g(),this.h()},l(t){e=c(t,"ARTICLE",{class:!0});var l=r(e);n=c(l,"DIV",{class:!0});var o=r(n);s=c(o,"DIV",{class:!0});var i=r(s);f=d(i,_),i.forEach(a),$=E(o),p=c(o,"DIV",{class:!0});var u=r(p);v=d(u,U),u.forEach(a),o.forEach(a),x=E(l),w=c(l,"DIV",{class:!0});var h=r(w);I=c(h,"DIV",{class:!0});var m=r(I);D=c(m,"DIV",{class:!0});var g=r(D);b=d(g,J),g.forEach(a),N=E(m),Q&&Q.l(m),m.forEach(a),A=E(h),j=c(h,"DIV",{class:!0});var y=r(j);T=c(y,"DIV",{class:!0});var k=r(T);L=d(k,K),k.forEach(a),C=E(y),O=c(y,"DIV",{class:!0});var z=r(O);R=c(z,"DIV",{class:!0});var V=r(R);S=d(V,"responsibilities"),V.forEach(a),q=E(z),B=c(z,"DIV",{class:!0});var P=r(B);F.l(P),P.forEach(a),z.forEach(a),y.forEach(a),G=E(h),Z&&Z.l(h),h.forEach(a),H=E(l),l.forEach(a),this.h()},h(){o(s,"class","timeline-item-dates-started svelte-1g5srz6"),o(p,"class","timeline-item-dates-ended svelte-1g5srz6"),o(n,"class","timeline-item-dates svelte-1g5srz6"),o(D,"class","timeline-item-info-company-name svelte-1g5srz6"),o(I,"class","timeline-item-info-company svelte-1g5srz6"),o(T,"class","timeline-item-info-role-name svelte-1g5srz6"),o(R,"class","timeline-item-info-role-responsibilities-header svelte-1g5srz6"),o(B,"class","timeline-item-info-role-responsibilities-items svelte-1g5srz6"),o(O,"class","timeline-item-info-role-responsibilities svelte-1g5srz6"),o(j,"class","timeline-item-info-role svelte-1g5srz6"),o(w,"class","timeline-item-info svelte-1g5srz6"),o(e,"class","timeline-item svelte-1g5srz6")},m(t,l){i(t,e,l),y(e,n),y(n,s),y(s,f),y(n,$),y(n,p),y(p,v),y(e,x),y(e,w),y(w,I),y(I,D),y(D,b),y(I,N),Q&&Q.m(I,null),y(w,A),y(w,j),y(j,T),y(T,L),y(j,C),y(j,O),y(O,R),y(R,S),y(O,q),y(O,B),X[P].m(B,null),y(w,G),Z&&Z.m(w,null),y(e,H),M=!0},p(t,e){(!M||1&e)&&_!==(_=t[1].started+"")&&k(f,_),(!M||1&e)&&U!==(U=t[1].ended+"")&&k(v,U),(!M||1&e)&&J!==(J=t[1].info.company.name+"")&&k(b,J),t[1].info.company.description.length>0?Q?Q.p(t,e):(Q=vt(t),Q.c(),Q.m(I,null)):Q&&(Q.d(1),Q=null),(!M||1&e)&&K!==(K=t[1].info.role.name+"")&&k(L,K);let n=P;P=Y(t),P===n?X[P].p(t,e):(z(),h(X[n],1,1,()=>{X[n]=null}),V(),F=X[P],F||(F=X[P]=W[P](t),F.c()),u(F,1),F.m(B,null)),t[1].info.stack.length>0?Z?Z.p(t,e):(Z=It(t),Z.c(),Z.m(w,null)):Z&&(Z.d(1),Z=null)},i(t){M||(u(F),M=!0)},o(t){h(F),M=!1},d(t){t&&a(e),Q&&Q.d(),X[P].d(),Z&&Z.d()}}}function bt(t){let e,n,s,f=t[0].length>0&&gt(),$=t[0],m=[];for(let e=0;e<$.length;e+=1)m[e]=Dt(pt(t,$,e));const d=t=>h(m[t],1,1,()=>{m[t]=null});return{c(){e=l("article"),f&&f.c(),n=g();for(let t=0;t<m.length;t+=1)m[t].c();this.h()},l(t){e=c(t,"ARTICLE",{id:!0,class:!0});var s=r(e);f&&f.l(s),n=E(s);for(let t=0;t<m.length;t+=1)m[t].l(s);s.forEach(a),this.h()},h(){o(e,"id","timeline"),o(e,"class","svelte-1g5srz6")},m(t,l){i(t,e,l),f&&f.m(e,null),y(e,n);for(let t=0;t<m.length;t+=1)m[t].m(e,null);s=!0},p(t,[s]){if(t[0].length>0?f||(f=gt(),f.c(),f.m(e,n)):f&&(f.d(1),f=null),1&s){let n;for($=t[0],n=0;n<$.length;n+=1){const l=pt(t,$,n);m[n]?(m[n].p(l,s),u(m[n],1)):(m[n]=Dt(l),m[n].c(),u(m[n],1),m[n].m(e,null))}for(z(),n=$.length;n<m.length;n+=1)d(n);V()}},i(t){if(!s){for(let t=0;t<$.length;t+=1)u(m[t]);s=!0}},o(t){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)h(m[t]);s=!1},d(t){t&&a(e),f&&f.d(),N(m,t)}}}function zt(t,e,n){let{data:s=null}=e;return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class Vt extends t{constructor(t){super(),e(this,t,zt,bt,n,{data:0})}}function Nt(t,e,n){const s=t.slice();return s[7]=e[n],s}function At(t,e,n){const s=t.slice();return s[4]=e[n],s}function jt(t){let e,n;return{c(){e=l("h2"),n=m("education")},l(t){e=c(t,"H2",{});var s=r(e);n=d(s,"education"),s.forEach(a)},m(t,s){i(t,e,s),y(e,n)},d(t){t&&a(e)}}}function Tt(t){let e,n,s=t[4].institution+"";return{c(){e=l("div"),n=m(s),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=r(e);n=d(l,s),l.forEach(a),this.h()},h(){o(e,"class","education-record-info-institution svelte-uw12z6")},m(t,s){i(t,e,s),y(e,n)},p(t,e){1&e&&s!==(s=t[4].institution+"")&&k(n,s)},d(t){t&&a(e)}}}function Lt(t){let e,n;const s=new ht({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}});return{c(){e=l("div"),v(s.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=r(e);x(s.$$.fragment,n),n.forEach(a),this.h()},h(){o(e,"class","education-record-info-certificates svelte-uw12z6")},m(t,l){i(t,e,l),w(s,e,null),n=!0},p(t,e){const n={};1025&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(u(s.$$.fragment,t),n=!0)},o(t){h(s.$$.fragment,t),n=!1},d(t){t&&a(e),I(s)}}}function Ct(t){let e;const n=new D({props:{href:t[7].url,underline:!1,$$slots:{default:[Ot]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.href=t[7].url),1025&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function Ot(t){let e,n,s=t[7].name+"";return{c(){e=l("div"),n=m(s),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=r(e);n=d(l,s),l.forEach(a),this.h()},h(){o(e,"class","education-record-info-certificate-name svelte-uw12z6")},m(t,s){i(t,e,s),y(e,n)},p(t,e){1&e&&s!==(s=t[7].name+"")&&k(n,s)},d(t){t&&a(e)}}}function Rt(t){let e;const n=new D({props:{href:t[7].url,underline:!1,$$slots:{default:[qt]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.href=t[7].url),1024&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function St(t){let e;const n=new D({props:{href:t[7].url,underline:!1,$$slots:{default:[Bt]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.href=t[7].url),1025&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function qt(t){let e,n;return{c(){e=l("div"),n=m("   "),this.h()},l(t){e=c(t,"DIV",{class:!0});var s=r(e);n=d(s,"   "),s.forEach(a),this.h()},h(){o(e,"class","education-record-info-certificate-id svelte-uw12z6")},m(t,s){i(t,e,s),y(e,n)},d(t){t&&a(e)}}}function Bt(t){let e,n,s,f=t[7].id+"";return{c(){e=l("div"),n=m("ID: "),s=m(f),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=r(e);n=d(l,"ID: "),s=d(l,f),l.forEach(a),this.h()},h(){o(e,"class","education-record-info-certificate-id svelte-uw12z6")},m(t,l){i(t,e,l),y(e,n),y(e,s)},p(t,e){1&e&&f!==(f=t[7].id+"")&&k(s,f)},d(t){t&&a(e)}}}function Pt(t){let e,n,s,f,$,m,d=t[7].name&&Ct(t);const p=[St,Rt],v=[];function x(t,e){return t[7].id?0:1}return s=x(t),f=v[s]=p[s](t),{c(){e=l("li"),d&&d.c(),n=g(),f.c(),$=g(),this.h()},l(t){e=c(t,"LI",{class:!0});var s=r(e);d&&d.l(s),n=E(s),f.l(s),$=E(s),s.forEach(a),this.h()},h(){o(e,"class","education-record-info-certificate svelte-uw12z6")},m(t,l){i(t,e,l),d&&d.m(e,null),y(e,n),v[s].m(e,null),y(e,$),m=!0},p(t,l){t[7].name?d?(d.p(t,l),u(d,1)):(d=Ct(t),d.c(),u(d,1),d.m(e,n)):d&&(z(),h(d,1,1,()=>{d=null}),V());let c=s;s=x(t),s===c?v[s].p(t,l):(z(),h(v[c],1,1,()=>{v[c]=null}),V(),f=v[s],f||(f=v[s]=p[s](t),f.c()),u(f,1),f.m(e,$))},i(t){m||(u(d),u(f),m=!0)},o(t){h(d),h(f),m=!1},d(t){t&&a(e),d&&d.d(),v[s].d()}}}function Ft(t){let e,n,s=t[4].certificates,l=[];for(let e=0;e<s.length;e+=1)l[e]=Pt(Nt(t,s,e));const c=t=>h(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=b()},l(t){for(let e=0;e<l.length;e+=1)l[e].l(t);e=b()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);i(t,e,s),n=!0},p(t,n){if(1&n){let r;for(s=t[4].certificates,r=0;r<s.length;r+=1){const c=Nt(t,s,r);l[r]?(l[r].p(c,n),u(l[r],1)):(l[r]=Pt(c),l[r].c(),u(l[r],1),l[r].m(e.parentNode,e))}for(z(),r=s.length;r<l.length;r+=1)c(r);V()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)u(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)h(l[t]);n=!1},d(t){N(l,t),t&&a(e)}}}function Gt(t){let e,n,s,f,$,p,b,N,A=t[4].year+"";const j=new D({props:{href:t[4].url,target:"_blank",$$slots:{default:[Tt]},$$scope:{ctx:t}}});let T=t[4].certificates&&t[4].certificates.length>0&&Lt(t);return{c(){e=l("div"),n=l("div"),s=m(A),f=g(),$=l("div"),v(j.$$.fragment),p=g(),T&&T.c(),b=g(),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=r(e);n=c(l,"DIV",{class:!0});var o=r(n);s=d(o,A),o.forEach(a),f=E(l),$=c(l,"DIV",{class:!0});var i=r($);x(j.$$.fragment,i),p=E(i),T&&T.l(i),i.forEach(a),b=E(l),l.forEach(a),this.h()},h(){o(n,"class","education-record-year svelte-uw12z6"),o($,"class","education-record-info svelte-uw12z6"),o(e,"class","education-record svelte-uw12z6")},m(t,l){i(t,e,l),y(e,n),y(n,s),y(e,f),y(e,$),w(j,$,null),y($,p),T&&T.m($,null),y(e,b),N=!0},p(t,e){(!N||1&e)&&A!==(A=t[4].year+"")&&k(s,A);const n={};1&e&&(n.href=t[4].url),1025&e&&(n.$$scope={dirty:e,ctx:t}),j.$set(n),t[4].certificates&&t[4].certificates.length>0?T?(T.p(t,e),u(T,1)):(T=Lt(t),T.c(),u(T,1),T.m($,null)):T&&(z(),h(T,1,1,()=>{T=null}),V())},i(t){N||(u(j.$$.fragment,t),u(T),N=!0)},o(t){h(j.$$.fragment,t),h(T),N=!1},d(t){t&&a(e),I(j),T&&T.d()}}}function Ht(t){let e,n,s,f=t[0].length>0&&jt(),$=t[0],m=[];for(let e=0;e<$.length;e+=1)m[e]=Gt(At(t,$,e));const d=t=>h(m[t],1,1,()=>{m[t]=null});return{c(){e=l("article"),f&&f.c(),n=g();for(let t=0;t<m.length;t+=1)m[t].c();this.h()},l(t){e=c(t,"ARTICLE",{id:!0,class:!0});var s=r(e);f&&f.l(s),n=E(s);for(let t=0;t<m.length;t+=1)m[t].l(s);s.forEach(a),this.h()},h(){o(e,"id","education-container"),o(e,"class","svelte-uw12z6")},m(t,l){i(t,e,l),f&&f.m(e,null),y(e,n);for(let t=0;t<m.length;t+=1)m[t].m(e,null);s=!0},p(t,[s]){if(t[0].length>0?f||(f=jt(),f.c(),f.m(e,n)):f&&(f.d(1),f=null),1&s){let n;for($=t[0],n=0;n<$.length;n+=1){const l=At(t,$,n);m[n]?(m[n].p(l,s),u(m[n],1)):(m[n]=Gt(l),m[n].c(),u(m[n],1),m[n].m(e,null))}for(z(),n=$.length;n<m.length;n+=1)d(n);V()}},i(t){if(!s){for(let t=0;t<$.length;t+=1)u(m[t]);s=!0}},o(t){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)h(m[t]);s=!1},d(t){t&&a(e),f&&f.d(),N(m,t)}}}function Mt(t,e,n){let{data:s=null}=e;new Intl.DateTimeFormat(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language);return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class _t extends t{constructor(t){super(),e(this,t,Mt,Ht,n,{data:0})}}function Ut(t){let e,n;const m=t[1].default,d=s(m,t,t[0],null);return{c(){e=l("footer"),d&&d.c(),this.h()},l(t){e=c(t,"FOOTER",{class:!0});var n=r(e);d&&d.l(n),n.forEach(a),this.h()},h(){o(e,"class","svelte-b9m5ug")},m(t,s){i(t,e,s),d&&d.m(e,null),n=!0},p(t,[e]){d&&d.p&&1&e&&d.p(f(m,t,t[0],null),$(m,t[0],e,null))},i(t){n||(u(d,t),n=!0)},o(t){h(d,t),n=!1},d(t){t&&a(e),d&&d.d(t)}}}function Jt(t,e,n){let{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class Kt extends t{constructor(t){super(),e(this,t,Jt,Ut,n,{})}}function Qt(t){let e,n,s,l,c,r,o=t[0].contacts&&Wt(t),f=t[0].foreword&&Yt(t),$=t[0].stack&&ee(t),m=t[0].timeline&&se(t),d=t[0].education&&ce(t);const p=new Kt({});return{c(){o&&o.c(),e=g(),f&&f.c(),n=g(),$&&$.c(),s=g(),m&&m.c(),l=g(),d&&d.c(),c=g(),v(p.$$.fragment)},l(t){o&&o.l(t),e=E(t),f&&f.l(t),n=E(t),$&&$.l(t),s=E(t),m&&m.l(t),l=E(t),d&&d.l(t),c=E(t),x(p.$$.fragment,t)},m(t,a){o&&o.m(t,a),i(t,e,a),f&&f.m(t,a),i(t,n,a),$&&$.m(t,a),i(t,s,a),m&&m.m(t,a),i(t,l,a),d&&d.m(t,a),i(t,c,a),w(p,t,a),r=!0},p(t,r){t[0].contacts?o?(o.p(t,r),u(o,1)):(o=Wt(t),o.c(),u(o,1),o.m(e.parentNode,e)):o&&(z(),h(o,1,1,()=>{o=null}),V()),t[0].foreword?f?(f.p(t,r),u(f,1)):(f=Yt(t),f.c(),u(f,1),f.m(n.parentNode,n)):f&&(z(),h(f,1,1,()=>{f=null}),V()),t[0].stack?$?($.p(t,r),u($,1)):($=ee(t),$.c(),u($,1),$.m(s.parentNode,s)):$&&(z(),h($,1,1,()=>{$=null}),V()),t[0].timeline?m?(m.p(t,r),u(m,1)):(m=se(t),m.c(),u(m,1),m.m(l.parentNode,l)):m&&(z(),h(m,1,1,()=>{m=null}),V()),t[0].education?d?(d.p(t,r),u(d,1)):(d=ce(t),d.c(),u(d,1),d.m(c.parentNode,c)):d&&(z(),h(d,1,1,()=>{d=null}),V());const a={};2&r&&(a.$$scope={dirty:r,ctx:t}),p.$set(a)},i(t){r||(u(o),u(f),u($),u(m),u(d),u(p.$$.fragment,t),r=!0)},o(t){h(o),h(f),h($),h(m),h(d),h(p.$$.fragment,t),r=!1},d(t){o&&o.d(t),t&&a(e),f&&f.d(t),t&&a(n),$&&$.d(t),t&&a(s),m&&m.d(t),t&&a(l),d&&d.d(t),t&&a(c),I(p,t)}}}function Wt(t){let e;const n=new R({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function Xt(t){let e;const n=new Z({props:{data:t[0].contacts}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].contacts),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function Yt(t){let e;const n=new R({props:{$$slots:{default:[te]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function Zt(t){let e,n=t[0].foreword+"";return{c(){e=m(n)},l(t){e=d(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[0].foreword+"")&&k(e,n)},d(t){t&&a(e)}}}function te(t){let e;const n=new nt({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function ee(t){let e;const n=new R({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function ne(t){let e;const n=new ft({props:{data:t[0].stack}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].stack),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function se(t){let e;const n=new R({props:{$$slots:{default:[le]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function le(t){let e;const n=new Vt({props:{data:t[0].timeline}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].timeline),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function ce(t){let e;const n=new R({props:{$$slots:{default:[re]},$$scope:{ctx:t}}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function re(t){let e;const n=new _t({props:{data:t[0].education}});return{c(){v(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,s){w(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].education),n.$set(s)},i(t){e||(u(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function ae(t){let e,n,s=t[0]&&Qt(t);return{c(){e=l("article"),s&&s.c(),this.h()},l(t){e=c(t,"ARTICLE",{id:!0,itemscope:!0,itemtype:!0,class:!0});var n=r(e);s&&s.l(n),n.forEach(a),this.h()},h(){o(e,"id","cv"),o(e,"itemscope",""),o(e,"itemtype","http://schema.org/Person"),o(e,"class","svelte-ffibqk")},m(t,l){i(t,e,l),s&&s.m(e,null),n=!0},p(t,[n]){t[0]?s?(s.p(t,n),u(s,1)):(s=Qt(t),s.c(),u(s,1),s.m(e,null)):s&&(z(),h(s,1,1,()=>{s=null}),V())},i(t){n||(u(s),n=!0)},o(t){h(s),n=!1},d(t){t&&a(e),s&&s.d()}}}function oe(t,e,n){let{data:s=null}=e;return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class ie extends t{constructor(t){super(),e(this,t,oe,ae,n,{data:0})}}function fe(t){let e,n;const s=new ie({props:{data:t[0]}});return{c(){e=g(),v(s.$$.fragment),this.h()},l(t){L('[data-svelte="svelte-1bv9g0p"]',document.head).forEach(a),e=E(t),x(s.$$.fragment,t),this.h()},h(){document.title="Dmitry N. Medvedev"},m(t,l){i(t,e,l),w(s,t,l),n=!0},p(t,[e]){const n={};1&e&&(n.data=t[0]),s.$set(n)},i(t){n||(u(s.$$.fragment,t),n=!0)},o(t){h(s.$$.fragment,t),n=!1},d(t){t&&a(e),I(s,t)}}}function $e(t,e,n){let s=null;return T(async()=>{n(0,s=await(await fetch("/data/cv.json")).json())}),[s]}export default class extends t{constructor(t){super(),e(this,t,$e,fe,n,{})}}