import{S as t,i as e,s as n,c as s,e as l,a,b as c,d as r,f as o,g as i,h as m,j as f,t as p,k as d,l as $,m as h,n as u,o as g,p as v,q as y,r as E,u as x,v as k,w as I,x as w,y as N,z as D,A as b,B as A,C as T,D as z,E as V,F as C,G as j,H as M,I as L,J as O,K as P,L as R}from"./client.85eb1764.js";function S(t){let e,n;const u=t[1].default,g=s(u,t,t[0],null),v=g||function(t){let e;return{c(){e=$("N/A")},l(t){e=h(t,"N/A")},m(t,n){i(t,e,n)},d(t){t&&r(e)}}}();return{c(){e=l("div"),v&&v.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=c(e);v&&v.l(n),n.forEach(r),this.h()},h(){o(e,"class","grid-block svelte-1oll5e5")},m(t,s){i(t,e,s),v&&v.m(e,null),n=!0},p(t,[e]){g&&g.p&&1&e&&g.p(m(u,t,t[0],null),f(u,t[0],e,null))},i(t){n||(p(v,t),n=!0)},o(t){d(v,t),n=!1},d(t){t&&r(e),v&&v.d(t)}}}function q(t,e,n){let{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class B extends t{constructor(t){super(),e(this,t,q,S,n,{})}}function H(t){let e,n;const o=t[3].default,E=s(o,t,t[2],null),x=E||function(t){let e;return{c(){e=$("N/A")},l(t){e=h(t,"N/A")},m(t,n){i(t,e,n)},d(t){t&&r(e)}}}();let k=[{class:"grid-block-record "+t[0]},t[1]],I={};for(let t=0;t<k.length;t+=1)I=u(I,k[t]);return{c(){e=l("div"),x&&x.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=c(e);x&&x.l(n),n.forEach(r),this.h()},h(){g(e,I),v(e,"svelte-1a49c6p",!0)},m(t,s){i(t,e,s),x&&x.m(e,null),n=!0},p(t,[n]){E&&E.p&&4&n&&E.p(m(o,t,t[2],null),f(o,t[2],n,null)),g(e,y(k,[1&n&&{class:"grid-block-record "+t[0]},2&n&&t[1]])),v(e,"svelte-1a49c6p",!0)},i(t){n||(p(x,t),n=!0)},o(t){d(x,t),n=!1},d(t){t&&r(e),x&&x.d(t)}}}function F(t,e,n){const s=["className"];let l=E(e,s),{className:a=""}=e,{$$slots:c={},$$scope:r}=e;return t.$set=t=>{e=u(u({},e),x(t)),n(1,l=E(e,s)),"className"in t&&n(0,a=t.className),"$$scope"in t&&n(2,r=t.$$scope)},[a,l,r,c]}class G extends t{constructor(t){super(),e(this,t,F,H,n,{className:0})}}function U(t){let e,n;return{c(){e=l("img"),this.h()},l(t){e=a(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(n=t[0])&&o(e,"src",n),o(e,"alt",t[1]),o(e,"class","icon svelte-qt19gb")},m(t,n){i(t,e,n)},p(t,[s]){1&s&&e.src!==(n=t[0])&&o(e,"src",n),2&s&&o(e,"alt",t[1])},i:k,o:k,d(t){t&&r(e)}}}function _(t,e,n){let{src:s=""}=e,{alt:l=""}=e;return t.$set=t=>{"src"in t&&n(0,s=t.src),"alt"in t&&n(1,l=t.alt)},[s,l]}class J extends t{constructor(t){super(),e(this,t,_,U,n,{src:0,alt:1})}}function K(t,e,n){const s=t.slice();return s[1]=e[n].name,s[2]=e[n].url,s[3]=e[n].svg,s}function Q(t){let e,n,s,c,m,f,p,d,u,g,v,y,E,x,k,w,D,b=t[0].name.givenName+"",A=t[0].name.additionalName+"",T=t[0].name.familyName+"";return{c(){e=$(b),n=I(),s=$(A),c=I(),m=$(T),f=I(),p=l("meta"),u=I(),g=l("meta"),y=I(),E=l("meta"),k=I(),w=l("meta"),this.h()},l(t){e=h(t,b),n=N(t),s=h(t,A),c=N(t),m=h(t,T),f=N(t),p=a(t,"META",{itemprop:!0,content:!0,class:!0}),u=N(t),g=a(t,"META",{itemprop:!0,content:!0,class:!0}),y=N(t),E=a(t,"META",{itemprop:!0,content:!0,class:!0}),k=N(t),w=a(t,"META",{itemprop:!0,content:!0,class:!0}),this.h()},h(){o(p,"itemprop","givenName"),o(p,"content",d=t[0].name.givenName),o(p,"class","svelte-1itm47k"),o(g,"itemprop","additionalName"),o(g,"content",v=t[0].name.additionalName),o(g,"class","svelte-1itm47k"),o(E,"itemprop","familyName"),o(E,"content",x=t[0].name.familyName),o(E,"class","svelte-1itm47k"),o(w,"itemprop","birthDate"),o(w,"content",D=t[0].birthDate),o(w,"class","svelte-1itm47k")},m(t,l){i(t,e,l),i(t,n,l),i(t,s,l),i(t,c,l),i(t,m,l),i(t,f,l),i(t,p,l),i(t,u,l),i(t,g,l),i(t,y,l),i(t,E,l),i(t,k,l),i(t,w,l)},p(t,n){1&n&&b!==(b=t[0].name.givenName+"")&&z(e,b),1&n&&A!==(A=t[0].name.additionalName+"")&&z(s,A),1&n&&T!==(T=t[0].name.familyName+"")&&z(m,T),1&n&&d!==(d=t[0].name.givenName)&&o(p,"content",d),1&n&&v!==(v=t[0].name.additionalName)&&o(g,"content",v),1&n&&x!==(x=t[0].name.familyName)&&o(E,"content",x),1&n&&D!==(D=t[0].birthDate)&&o(w,"content",D)},d(t){t&&r(e),t&&r(n),t&&r(s),t&&r(c),t&&r(m),t&&r(f),t&&r(p),t&&r(u),t&&r(g),t&&r(y),t&&r(E),t&&r(k),t&&r(w)}}}function W(t){let e,n=t[0].address.addressLocality+"";return{c(){e=$(n)},l(t){e=h(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[0].address.addressLocality+"")&&z(e,n)},d(t){t&&r(e)}}}function X(t){let e,n=t[0].address.addressCountry+"";return{c(){e=$(n)},l(t){e=h(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[0].address.addressCountry+"")&&z(e,n)},d(t){t&&r(e)}}}function Y(t){let e,n=t[0].ContactPoint.email+"";return{c(){e=$(n)},l(t){e=h(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[0].ContactPoint.email+"")&&z(e,n)},d(t){t&&r(e)}}}function Z(t){let e,n,s,c,m,f,$;const h=new V({props:{href:"mailto:"+t[0].ContactPoint.email,$$slots:{default:[Y]},$$scope:{ctx:t}}});return{c(){w(h.$$.fragment),e=I(),n=l("meta"),c=I(),m=l("meta"),this.h()},l(t){D(h.$$.fragment,t),e=N(t),n=a(t,"META",{itemprop:!0,content:!0,class:!0}),c=N(t),m=a(t,"META",{itemprop:!0,content:!0,class:!0}),this.h()},h(){o(n,"itemprop","email"),o(n,"content",s=t[0].ContactPoint.email),o(n,"class","svelte-1itm47k"),o(m,"itemprop","telephone"),o(m,"content",f=t[0].ContactPoint.telephone),o(m,"class","svelte-1itm47k")},m(t,s){A(h,t,s),i(t,e,s),i(t,n,s),i(t,c,s),i(t,m,s),$=!0},p(t,e){const l={};1&e&&(l.href="mailto:"+t[0].ContactPoint.email),65&e&&(l.$$scope={dirty:e,ctx:t}),h.$set(l),(!$||1&e&&s!==(s=t[0].ContactPoint.email))&&o(n,"content",s),(!$||1&e&&f!==(f=t[0].ContactPoint.telephone))&&o(m,"content",f)},i(t){$||(p(h.$$.fragment,t),$=!0)},o(t){d(h.$$.fragment,t),$=!1},d(t){T(h,t),t&&r(e),t&&r(n),t&&r(c),t&&r(m)}}}function tt(t){let e,n,s,m;const f=new J({props:{src:t[3],alt:t[1]}});return{c(){e=l("a"),w(f.$$.fragment),n=I(),this.h()},l(t){e=a(t,"A",{class:!0,href:!0,target:!0});var s=c(e);D(f.$$.fragment,s),n=N(s),s.forEach(r),this.h()},h(){o(e,"class","a svelte-1itm47k"),o(e,"href",s=t[2]),o(e,"target","_blank")},m(t,s){i(t,e,s),A(f,e,null),b(e,n),m=!0},p(t,n){const l={};1&n&&(l.src=t[3]),1&n&&(l.alt=t[1]),f.$set(l),(!m||1&n&&s!==(s=t[2]))&&o(e,"href",s)},i(t){m||(p(f.$$.fragment,t),m=!0)},o(t){d(f.$$.fragment,t),m=!1},d(t){t&&r(e),T(f)}}}function et(t){let e,n,s=t[0].links,l=[];for(let e=0;e<s.length;e+=1)l[e]=tt(K(t,s,e));const a=t=>d(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=C()},l(t){for(let e=0;e<l.length;e+=1)l[e].l(t);e=C()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);i(t,e,s),n=!0},p(t,n){if(1&n){let c;for(s=t[0].links,c=0;c<s.length;c+=1){const a=K(t,s,c);l[c]?(l[c].p(a,n),p(l[c],1)):(l[c]=tt(a),l[c].c(),p(l[c],1),l[c].m(e.parentNode,e))}for(j(),c=s.length;c<l.length;c+=1)a(c);M()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)p(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)d(l[t]);n=!1},d(t){L(l,t),t&&r(e)}}}function nt(t){let e,n,s,m,f,$,h,u,g,v,y,E,x,k,z,V,C,j,M,L,O,P,R,S,q,B,H,F;const U=new G({props:{className:"display-flex justify-content-flex-end",$$slots:{default:[Q]},$$scope:{ctx:t}}}),_=new G({props:{className:"display-flex justify-content-flex-end",$$slots:{default:[W]},$$scope:{ctx:t}}}),J=new G({props:{className:"display-flex justify-content-flex-end",$$slots:{default:[X]},$$scope:{ctx:t}}}),K=new G({props:{className:"display-flex justify-content-flex-end",itemscope:!0,itemtype:"http://schema.org/ContactPoint",$$slots:{default:[Z]},$$scope:{ctx:t}}}),Y=new G({props:{className:"display-flex justify-content-flex-end social-network-icons",$$slots:{default:[et]},$$scope:{ctx:t}}});return{c(){e=l("article"),n=l("div"),s=l("img"),f=I(),$=l("meta"),h=I(),u=l("meta"),g=I(),v=l("meta"),E=I(),x=l("div"),w(U.$$.fragment),k=I(),z=l("span"),w(_.$$.fragment),V=I(),w(J.$$.fragment),C=I(),j=l("meta"),L=I(),O=l("meta"),R=I(),S=l("meta"),B=I(),w(K.$$.fragment),H=I(),w(Y.$$.fragment),this.h()},l(t){e=a(t,"ARTICLE",{class:!0,itemscope:!0,itemtype:!0});var l=c(e);n=a(l,"DIV",{class:!0,itemscope:!0,itemtype:!0});var o=c(n);s=a(o,"IMG",{src:!0,alt:!0,itemprop:!0,class:!0}),f=N(o),$=a(o,"META",{itemprop:!0,content:!0,class:!0}),h=N(o),u=a(o,"META",{itemprop:!0,content:!0,class:!0}),g=N(o),v=a(o,"META",{itemprop:!0,content:!0,class:!0}),o.forEach(r),E=N(l),x=a(l,"DIV",{class:!0});var i=c(x);D(U.$$.fragment,i),k=N(i),z=a(i,"SPAN",{itemscope:!0,itemtype:!0,class:!0});var m=c(z);D(_.$$.fragment,m),V=N(m),D(J.$$.fragment,m),C=N(m),j=a(m,"META",{itemprop:!0,content:!0,class:!0}),L=N(m),O=a(m,"META",{itemprop:!0,content:!0,class:!0}),R=N(m),S=a(m,"META",{itemprop:!0,content:!0,class:!0}),m.forEach(r),B=N(i),D(K.$$.fragment,i),H=N(i),D(Y.$$.fragment,i),i.forEach(r),l.forEach(r),this.h()},h(){s.src!==(m="/photos/me.jpg")&&o(s,"src","/photos/me.jpg"),o(s,"alt","me"),o(s,"itemprop","contentUrl"),o(s,"class","svelte-1itm47k"),o($,"itemprop","caption"),o($,"content","this is how I look like"),o($,"class","svelte-1itm47k"),o(u,"itemprop","representativeOfPage"),o(u,"content","true"),o(u,"class","svelte-1itm47k"),o(v,"itemprop","jobTitle"),o(v,"content",y=t[0].jobTitle),o(v,"class","svelte-1itm47k"),o(n,"class","contacts-photo svelte-1itm47k"),o(n,"itemscope",""),o(n,"itemtype","http://schema.org/ImageObject"),o(j,"itemprop","addressCountry"),o(j,"content",M=t[0].address.addressCountry),o(j,"class","svelte-1itm47k"),o(O,"itemprop","addressRegion"),o(O,"content",P=t[0].address.addressRegion),o(O,"class","svelte-1itm47k"),o(S,"itemprop","addressLocality"),o(S,"content",q=t[0].address.addressLocality),o(S,"class","svelte-1itm47k"),o(z,"itemscope",""),o(z,"itemtype","http://schema.org/PostalAddress"),o(z,"class","svelte-1itm47k"),o(x,"class","contacts-content svelte-1itm47k"),o(e,"class","contacts svelte-1itm47k"),o(e,"itemscope",""),o(e,"itemtype","http://schema.org/Person")},m(t,l){i(t,e,l),b(e,n),b(n,s),b(n,f),b(n,$),b(n,h),b(n,u),b(n,g),b(n,v),b(e,E),b(e,x),A(U,x,null),b(x,k),b(x,z),A(_,z,null),b(z,V),A(J,z,null),b(z,C),b(z,j),b(z,L),b(z,O),b(z,R),b(z,S),b(x,B),A(K,x,null),b(x,H),A(Y,x,null),F=!0},p(t,[e]){(!F||1&e&&y!==(y=t[0].jobTitle))&&o(v,"content",y);const n={};65&e&&(n.$$scope={dirty:e,ctx:t}),U.$set(n);const s={};65&e&&(s.$$scope={dirty:e,ctx:t}),_.$set(s);const l={};65&e&&(l.$$scope={dirty:e,ctx:t}),J.$set(l),(!F||1&e&&M!==(M=t[0].address.addressCountry))&&o(j,"content",M),(!F||1&e&&P!==(P=t[0].address.addressRegion))&&o(O,"content",P),(!F||1&e&&q!==(q=t[0].address.addressLocality))&&o(S,"content",q);const a={};65&e&&(a.$$scope={dirty:e,ctx:t}),K.$set(a);const c={};65&e&&(c.$$scope={dirty:e,ctx:t}),Y.$set(c)},i(t){F||(p(U.$$.fragment,t),p(_.$$.fragment,t),p(J.$$.fragment,t),p(K.$$.fragment,t),p(Y.$$.fragment,t),F=!0)},o(t){d(U.$$.fragment,t),d(_.$$.fragment,t),d(J.$$.fragment,t),d(K.$$.fragment,t),d(Y.$$.fragment,t),F=!1},d(t){t&&r(e),T(U),T(_),T(J),T(K),T(Y)}}}function st(t,e,n){let{data:s=null}=e;return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class lt extends t{constructor(t){super(),e(this,t,st,nt,n,{data:0})}}function at(t){let e,n;const $=t[1].default,h=s($,t,t[0],null);return{c(){e=l("article"),h&&h.c(),this.h()},l(t){e=a(t,"ARTICLE",{id:!0,class:!0});var n=c(e);h&&h.l(n),n.forEach(r),this.h()},h(){o(e,"id","foreword"),o(e,"class","svelte-13mi6q6")},m(t,s){i(t,e,s),h&&h.m(e,null),n=!0},p(t,[e]){h&&h.p&&1&e&&h.p(m($,t,t[0],null),f($,t[0],e,null))},i(t){n||(p(h,t),n=!0)},o(t){d(h,t),n=!1},d(t){t&&r(e),h&&h.d(t)}}}function ct(t,e,n){let{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class rt extends t{constructor(t){super(),e(this,t,ct,at,n,{})}}function ot(t,e,n){const s=t.slice();return s[11]=e[n],s}function it(t,e,n){const s=t.slice();return s[8]=e[n],s}function mt(t,e,n){const s=t.slice();return s[14]=e[n],s}function ft(t){let e,n;return{c(){e=l("h2"),n=$("stack"),this.h()},l(t){e=a(t,"H2",{class:!0});var s=c(e);n=h(s,"stack"),s.forEach(r),this.h()},h(){o(e,"class","stack-header svelte-1d6a5b7")},m(t,s){i(t,e,s),b(e,n)},d(t){t&&r(e)}}}function pt(t){let e,n,s,m,f=t[14]+"";return{c(){e=l("div"),n=$(f),this.h()},l(t){e=a(t,"DIV",{class:!0,"data-tag":!0});var s=c(e);n=h(s,f),s.forEach(r),this.h()},h(){o(e,"class","tag svelte-1d6a5b7"),o(e,"data-tag",s=t[14]),v(e,"currentTag",t[14]===t[2])},m(s,l,a){i(s,e,l),b(e,n),a&&m(),m=O(e,"click",t[3])},p(t,l){1&l&&f!==(f=t[14]+"")&&z(n,f),1&l&&s!==(s=t[14])&&o(e,"data-tag",s),5&l&&v(e,"currentTag",t[14]===t[2])},d(t){t&&r(e),m()}}}function dt(t){let e,n,s;return{c(){e=l("meta"),this.h()},l(t){e=a(t,"META",{itemprop:!0,content:!0}),this.h()},h(){o(e,"itemprop",n=t[11]),o(e,"content",s=t[1][t[8]].schema[t[11]])},m(t,n){i(t,e,n)},p(t,l){2&l&&n!==(n=t[11])&&o(e,"itemprop",n),2&l&&s!==(s=t[1][t[8]].schema[t[11]])&&o(e,"content",s)},d(t){t&&r(e)}}}function $t(t){let e,n="itemtype"!==t[11]&&dt(t);return{c(){n&&n.c(),e=C()},l(t){n&&n.l(t),e=C()},m(t,s){n&&n.m(t,s),i(t,e,s)},p(t,s){"itemtype"!==t[11]?n?n.p(t,s):(n=dt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&r(e)}}}function ht(t){let e,n,s,m,f,p,d=t[8]+"",u=Object.keys(t[1][t[8]].schema),g=[];for(let e=0;e<u.length;e+=1)g[e]=$t(ot(t,u,e));return{c(){e=l("div"),n=$(d),s=I();for(let t=0;t<g.length;t+=1)g[t].c();m=I(),this.h()},l(t){e=a(t,"DIV",{class:!0,"data-tags":!0,itemscope:!0,itemtype:!0});var l=c(e);n=h(l,d),s=N(l);for(let t=0;t<g.length;t+=1)g[t].l(l);m=N(l),l.forEach(r),this.h()},h(){o(e,"class","stack-item svelte-1d6a5b7"),o(e,"data-tags",f=t[4](t[8])),o(e,"itemscope",""),o(e,"itemtype",p=t[1][t[8]].schema.itemtype)},m(t,l){i(t,e,l),b(e,n),b(e,s);for(let t=0;t<g.length;t+=1)g[t].m(e,null);b(e,m)},p(t,s){if(2&s&&d!==(d=t[8]+"")&&z(n,d),2&s){let n;for(u=Object.keys(t[1][t[8]].schema),n=0;n<u.length;n+=1){const l=ot(t,u,n);g[n]?g[n].p(l,s):(g[n]=$t(l),g[n].c(),g[n].m(e,m))}for(;n<g.length;n+=1)g[n].d(1);g.length=u.length}2&s&&f!==(f=t[4](t[8]))&&o(e,"data-tags",f),2&s&&p!==(p=t[1][t[8]].schema.itemtype)&&o(e,"itemtype",p)},d(t){t&&r(e),L(g,t)}}}function ut(t){let e,n,s,m,f,p=Object.keys(t[1]).length>0,d=p&&ft(),$=t[0],h=[];for(let e=0;e<$.length;e+=1)h[e]=pt(mt(t,$,e));let u=Object.keys(t[1]),g=[];for(let e=0;e<u.length;e+=1)g[e]=ht(it(t,u,e));return{c(){e=l("article"),d&&d.c(),n=I(),s=l("section");for(let t=0;t<h.length;t+=1)h[t].c();m=I(),f=l("section");for(let t=0;t<g.length;t+=1)g[t].c();this.h()},l(t){e=a(t,"ARTICLE",{class:!0});var l=c(e);d&&d.l(l),n=N(l),s=a(l,"SECTION",{class:!0});var o=c(s);for(let t=0;t<h.length;t+=1)h[t].l(o);o.forEach(r),m=N(l),f=a(l,"SECTION",{class:!0});var i=c(f);for(let t=0;t<g.length;t+=1)g[t].l(i);i.forEach(r),l.forEach(r),this.h()},h(){o(s,"class","tags svelte-1d6a5b7"),o(f,"class","items svelte-1d6a5b7"),o(e,"class","stack svelte-1d6a5b7")},m(t,l){i(t,e,l),d&&d.m(e,null),b(e,n),b(e,s);for(let t=0;t<h.length;t+=1)h[t].m(s,null);b(e,m),b(e,f);for(let t=0;t<g.length;t+=1)g[t].m(f,null)},p(t,[l]){if(2&l&&(p=Object.keys(t[1]).length>0),p?d||(d=ft(),d.c(),d.m(e,n)):d&&(d.d(1),d=null),13&l){let e;for($=t[0],e=0;e<$.length;e+=1){const n=mt(t,$,e);h[e]?h[e].p(n,l):(h[e]=pt(n),h[e].c(),h[e].m(s,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=$.length}if(18&l){let e;for(u=Object.keys(t[1]),e=0;e<u.length;e+=1){const n=it(t,u,e);g[e]?g[e].p(n,l):(g[e]=ht(n),g[e].c(),g[e].m(f,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=u.length}},i:k,o:k,d(t){t&&r(e),d&&d.d(),L(h,t),L(g,t)}}}function gt(t,e,n){let{data:s=null}=e,l=[],a=[],c="all";const r=t=>{document.querySelectorAll(".items > .stack-item[data-tags]").forEach(e=>{-1!==e.dataset.tags.indexOf(t)?e.classList.add("highlighted-stack-item"):e.classList.remove("highlighted-stack-item")})};return P(()=>{n(2,c="all"),r(c)}),t.$set=t=>{"data"in t&&n(5,s=t.data)},t.$$.update=()=>{if(32&t.$$.dirty&&s&&(n(0,l=s.tags),n(1,a=s.items)),1&t.$$.dirty&&l&&n(0,l=Array.from(new Set(["all",...l]))),2&t.$$.dirty&&a){for(const t of Object.keys(a))n(1,a[t].tags=["all",...a[t].tags],a);n(1,a),n(5,s)}4&t.$$.dirty&&r(c)},[l,a,c,t=>{t.preventDefault(),t.stopPropagation(),t.srcElement.dataset.tag?n(2,c=t.srcElement.dataset.tag):n(2,c="all")},t=>a[t].tags.join(" "),s]}class vt extends t{constructor(t){super(),e(this,t,gt,ut,n,{data:5})}}function yt(t){let e,n;const o=t[2].default,E=s(o,t,t[1],null),x=E||function(t){let e;return{c(){e=$("N/A")},l(t){e=h(t,"N/A")},m(t,n){i(t,e,n)},d(t){t&&r(e)}}}();let k=[{class:"ul"},t[0]],I={};for(let t=0;t<k.length;t+=1)I=u(I,k[t]);return{c(){e=l("ul"),x&&x.c(),this.h()},l(t){e=a(t,"UL",{class:!0});var n=c(e);x&&x.l(n),n.forEach(r),this.h()},h(){g(e,I),v(e,"svelte-elhru4",!0)},m(t,s){i(t,e,s),x&&x.m(e,null),n=!0},p(t,[n]){E&&E.p&&2&n&&E.p(m(o,t,t[1],null),f(o,t[1],n,null)),g(e,y(k,[{class:"ul"},1&n&&t[0]])),v(e,"svelte-elhru4",!0)},i(t){n||(p(x,t),n=!0)},o(t){d(x,t),n=!1},d(t){t&&r(e),x&&x.d(t)}}}function Et(t,e,n){const s=[];let l=E(e,s),{$$slots:a={},$$scope:c}=e;return t.$set=t=>{e=u(u({},e),x(t)),n(0,l=E(e,s)),"$$scope"in t&&n(1,c=t.$$scope)},[l,c,a]}class xt extends t{constructor(t){super(),e(this,t,Et,yt,n,{})}}function kt(t,e,n){const s=t.slice();return s[4]=e[n],s}function It(t,e,n){const s=t.slice();return s[7]=e[n],s}function wt(t,e,n){const s=t.slice();return s[1]=e[n],s}function Nt(t){let e,n;return{c(){e=l("h2"),n=$("employement record"),this.h()},l(t){e=a(t,"H2",{class:!0});var s=c(e);n=h(s,"employement record"),s.forEach(r),this.h()},h(){o(e,"class","svelte-1g5srz6")},m(t,s){i(t,e,s),b(e,n)},d(t){t&&r(e)}}}function Dt(t){let e,n,s=t[1].info.company.description+"";return{c(){e=l("div"),n=$(s),this.h()},l(t){e=a(t,"DIV",{class:!0,itemprop:!0});var l=c(e);n=h(l,s),l.forEach(r),this.h()},h(){o(e,"class","timeline-item-info-company-description svelte-1g5srz6"),o(e,"itemprop","slogan")},m(t,s){i(t,e,s),b(e,n)},p(t,e){1&e&&s!==(s=t[1].info.company.description+"")&&z(n,s)},d(t){t&&r(e)}}}function bt(t){let e;const n=new xt({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1025&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function At(t){let e,n=t[1].info.role.responsibilities+"";return{c(){e=$(n)},l(t){e=h(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[1].info.role.responsibilities+"")&&z(e,n)},i:k,o:k,d(t){t&&r(e)}}}function Tt(t){let e,n,s=t[7]+"";return{c(){e=l("li"),n=$(s),this.h()},l(t){e=a(t,"LI",{class:!0});var l=c(e);n=h(l,s),l.forEach(r),this.h()},h(){o(e,"class","svelte-1g5srz6")},m(t,s){i(t,e,s),b(e,n)},p(t,e){1&e&&s!==(s=t[7]+"")&&z(n,s)},d(t){t&&r(e)}}}function zt(t){let e,n=t[1].info.role.responsibilities,s=[];for(let e=0;e<n.length;e+=1)s[e]=Tt(It(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=C()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=C()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);i(t,e,n)},p(t,l){if(1&l){let a;for(n=t[1].info.role.responsibilities,a=0;a<n.length;a+=1){const c=It(t,n,a);s[a]?s[a].p(c,l):(s[a]=Tt(c),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1);s.length=n.length}},d(t){L(s,t),t&&r(e)}}}function Vt(t){let e,n,s,m,f,p=t[1].info.stack,d=[];for(let e=0;e<p.length;e+=1)d[e]=Ct(kt(t,p,e));return{c(){e=l("div"),n=l("div"),s=$("stack"),m=I(),f=l("div");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var l=c(e);n=a(l,"DIV",{class:!0});var o=c(n);s=h(o,"stack"),o.forEach(r),m=N(l),f=a(l,"DIV",{class:!0});var i=c(f);for(let t=0;t<d.length;t+=1)d[t].l(i);i.forEach(r),l.forEach(r),this.h()},h(){o(n,"class","timeline-item-info-stack-header svelte-1g5srz6"),o(f,"class","timeline-item-info-stack-items svelte-1g5srz6"),o(e,"class","timeline-item-info-stack svelte-1g5srz6")},m(t,l){i(t,e,l),b(e,n),b(n,s),b(e,m),b(e,f);for(let t=0;t<d.length;t+=1)d[t].m(f,null)},p(t,e){if(1&e){let n;for(p=t[1].info.stack,n=0;n<p.length;n+=1){const s=kt(t,p,n);d[n]?d[n].p(s,e):(d[n]=Ct(s),d[n].c(),d[n].m(f,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=p.length}},d(t){t&&r(e),L(d,t)}}}function Ct(t){let e,n,s,m,f,p,d=t[4]+"";return{c(){e=l("div"),n=$(d),s=I(),m=l("meta"),p=I(),this.h()},l(t){e=a(t,"DIV",{class:!0,itemprop:!0,href:!0});var l=c(e);n=h(l,d),s=N(l),m=a(l,"META",{itemprop:!0,content:!0,class:!0}),p=N(l),l.forEach(r),this.h()},h(){o(m,"itemprop","tool"),o(m,"content",f=t[4]),o(m,"class","svelte-1g5srz6"),o(e,"class","stack-item svelte-1g5srz6"),o(e,"itemprop","additionalType"),o(e,"href","http://schema.org/instrument")},m(t,l){i(t,e,l),b(e,n),b(e,s),b(e,m),b(e,p)},p(t,e){1&e&&d!==(d=t[4]+"")&&z(n,d),1&e&&f!==(f=t[4])&&o(m,"content",f)},d(t){t&&r(e)}}}function jt(t){let e,n,s,m,f,u,g,v,y,E,x,k,w,D,A,T,V,C,L,O,P,R,S,q,B,H,F,G,U=t[1].started+"",_=t[1].ended+"",J=t[1].info.company.name+"",K=t[1].info.role.name+"",Q=t[1].info.company.description.length>0&&Dt(t);const W=[At,bt],X=[];function Y(t,e){return 1===t[1].info.role.responsibilities.length?0:1}q=Y(t),B=X[q]=W[q](t);let Z=t[1].info.stack.length>0&&Vt(t);return{c(){e=l("article"),n=l("div"),s=l("div"),m=$(U),f=I(),u=l("div"),g=$(_),v=I(),y=l("div"),E=l("div"),x=l("div"),k=$(J),w=I(),Q&&Q.c(),D=I(),A=l("div"),T=l("div"),V=$(K),C=I(),L=l("div"),O=l("div"),P=$("responsibilities"),R=I(),S=l("div"),B.c(),H=I(),Z&&Z.c(),F=I(),this.h()},l(t){e=a(t,"ARTICLE",{class:!0,itemscope:!0,itemprop:!0});var l=c(e);n=a(l,"DIV",{class:!0});var o=c(n);s=a(o,"DIV",{class:!0,itemprop:!0});var i=c(s);m=h(i,U),i.forEach(r),f=N(o),u=a(o,"DIV",{class:!0,itemprop:!0});var p=c(u);g=h(p,_),p.forEach(r),o.forEach(r),v=N(l),y=a(l,"DIV",{class:!0});var d=c(y);E=a(d,"DIV",{class:!0,itemprop:!0,href:!0});var $=c(E);x=a($,"DIV",{class:!0,itemprop:!0});var I=c(x);k=h(I,J),I.forEach(r),w=N($),Q&&Q.l($),$.forEach(r),D=N(d),A=a(d,"DIV",{class:!0});var b=c(A);T=a(b,"DIV",{class:!0,itemprop:!0});var z=c(T);V=h(z,K),z.forEach(r),C=N(b),L=a(b,"DIV",{class:!0});var j=c(L);O=a(j,"DIV",{class:!0});var M=c(O);P=h(M,"responsibilities"),M.forEach(r),R=N(j),S=a(j,"DIV",{class:!0,itemprop:!0,href:!0});var q=c(S);B.l(q),q.forEach(r),j.forEach(r),b.forEach(r),H=N(d),Z&&Z.l(d),d.forEach(r),F=N(l),l.forEach(r),this.h()},h(){o(s,"class","timeline-item-dates-started svelte-1g5srz6"),o(s,"itemprop","startDate"),o(u,"class","timeline-item-dates-ended svelte-1g5srz6"),o(u,"itemprop","endDate"),o(n,"class","timeline-item-dates svelte-1g5srz6"),o(x,"class","timeline-item-info-company-name svelte-1g5srz6"),o(x,"itemprop","legalName"),o(E,"class","timeline-item-info-company svelte-1g5srz6"),o(E,"itemprop","additionalType"),o(E,"href","http://schema.org/Organization"),o(T,"class","timeline-item-info-role-name svelte-1g5srz6"),o(T,"itemprop","roleName"),o(O,"class","timeline-item-info-role-responsibilities-header svelte-1g5srz6"),o(S,"class","timeline-item-info-role-responsibilities-items svelte-1g5srz6"),o(S,"itemprop","additionalType"),o(S,"href","responsibilities"),o(L,"class","timeline-item-info-role-responsibilities svelte-1g5srz6"),o(A,"class","timeline-item-info-role svelte-1g5srz6"),o(y,"class","timeline-item-info svelte-1g5srz6"),o(e,"class","timeline-item svelte-1g5srz6"),o(e,"itemscope",""),o(e,"itemprop","http://schema.org/EmployeeRole")},m(t,l){i(t,e,l),b(e,n),b(n,s),b(s,m),b(n,f),b(n,u),b(u,g),b(e,v),b(e,y),b(y,E),b(E,x),b(x,k),b(E,w),Q&&Q.m(E,null),b(y,D),b(y,A),b(A,T),b(T,V),b(A,C),b(A,L),b(L,O),b(O,P),b(L,R),b(L,S),X[q].m(S,null),b(y,H),Z&&Z.m(y,null),b(e,F),G=!0},p(t,e){(!G||1&e)&&U!==(U=t[1].started+"")&&z(m,U),(!G||1&e)&&_!==(_=t[1].ended+"")&&z(g,_),(!G||1&e)&&J!==(J=t[1].info.company.name+"")&&z(k,J),t[1].info.company.description.length>0?Q?Q.p(t,e):(Q=Dt(t),Q.c(),Q.m(E,null)):Q&&(Q.d(1),Q=null),(!G||1&e)&&K!==(K=t[1].info.role.name+"")&&z(V,K);let n=q;q=Y(t),q===n?X[q].p(t,e):(j(),d(X[n],1,1,()=>{X[n]=null}),M(),B=X[q],B||(B=X[q]=W[q](t),B.c()),p(B,1),B.m(S,null)),t[1].info.stack.length>0?Z?Z.p(t,e):(Z=Vt(t),Z.c(),Z.m(y,null)):Z&&(Z.d(1),Z=null)},i(t){G||(p(B),G=!0)},o(t){d(B),G=!1},d(t){t&&r(e),Q&&Q.d(),X[q].d(),Z&&Z.d()}}}function Mt(t){let e,n,s,m=t[0].length>0&&Nt(),f=t[0],$=[];for(let e=0;e<f.length;e+=1)$[e]=jt(wt(t,f,e));const h=t=>d($[t],1,1,()=>{$[t]=null});return{c(){e=l("article"),m&&m.c(),n=I();for(let t=0;t<$.length;t+=1)$[t].c();this.h()},l(t){e=a(t,"ARTICLE",{id:!0,class:!0});var s=c(e);m&&m.l(s),n=N(s);for(let t=0;t<$.length;t+=1)$[t].l(s);s.forEach(r),this.h()},h(){o(e,"id","timeline"),o(e,"class","svelte-1g5srz6")},m(t,l){i(t,e,l),m&&m.m(e,null),b(e,n);for(let t=0;t<$.length;t+=1)$[t].m(e,null);s=!0},p(t,[s]){if(t[0].length>0?m||(m=Nt(),m.c(),m.m(e,n)):m&&(m.d(1),m=null),1&s){let n;for(f=t[0],n=0;n<f.length;n+=1){const l=wt(t,f,n);$[n]?($[n].p(l,s),p($[n],1)):($[n]=jt(l),$[n].c(),p($[n],1),$[n].m(e,null))}for(j(),n=f.length;n<$.length;n+=1)h(n);M()}},i(t){if(!s){for(let t=0;t<f.length;t+=1)p($[t]);s=!0}},o(t){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)d($[t]);s=!1},d(t){t&&r(e),m&&m.d(),L($,t)}}}function Lt(t,e,n){let{data:s=null}=e;return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class Ot extends t{constructor(t){super(),e(this,t,Lt,Mt,n,{data:0})}}function Pt(t,e,n){const s=t.slice();return s[7]=e[n],s}function Rt(t,e,n){const s=t.slice();return s[4]=e[n],s}function St(t){let e,n;return{c(){e=l("h2"),n=$("education")},l(t){e=a(t,"H2",{});var s=c(e);n=h(s,"education"),s.forEach(r)},m(t,s){i(t,e,s),b(e,n)},d(t){t&&r(e)}}}function qt(t){let e,n,s,m,f,p=t[4].institution+"";return{c(){e=l("div"),n=$(p),s=I(),m=l("meta"),this.h()},l(t){e=a(t,"DIV",{class:!0});var l=c(e);n=h(l,p),s=N(l),m=a(l,"META",{itemprop:!0,content:!0}),l.forEach(r),this.h()},h(){o(m,"itemprop","name"),o(m,"content",f=t[4].institution),o(e,"class","education-record-info-institution svelte-uw12z6")},m(t,l){i(t,e,l),b(e,n),b(e,s),b(e,m)},p(t,e){1&e&&p!==(p=t[4].institution+"")&&z(n,p),1&e&&f!==(f=t[4].institution)&&o(m,"content",f)},d(t){t&&r(e)}}}function Bt(t){let e,n;const s=new xt({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}});return{c(){e=l("div"),w(s.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=c(e);D(s.$$.fragment,n),n.forEach(r),this.h()},h(){o(e,"class","education-record-info-certificates svelte-uw12z6")},m(t,l){i(t,e,l),A(s,e,null),n=!0},p(t,e){const n={};1025&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){t&&r(e),T(s)}}}function Ht(t){let e;const n=new V({props:{href:t[7].url,underline:!1,$$slots:{default:[Ft]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.href=t[7].url),1025&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function Ft(t){let e,n,s,m,f,p,d,u,g=t[7].name+"";return{c(){e=l("div"),n=$(g),s=I(),m=l("meta"),p=I(),d=l("meta"),this.h()},l(t){e=a(t,"DIV",{class:!0,itemprop:!0});var l=c(e);n=h(l,g),l.forEach(r),s=N(t),m=a(t,"META",{itemprop:!0,content:!0}),p=N(t),d=a(t,"META",{itemprop:!0,content:!0}),this.h()},h(){o(e,"class","education-record-info-certificate-name svelte-uw12z6"),o(e,"itemprop","name"),o(m,"itemprop","educationalCredentialAwarded"),o(m,"content",f=t[7].name),o(d,"itemprop","url"),o(d,"content",u=t[7].url)},m(t,l){i(t,e,l),b(e,n),i(t,s,l),i(t,m,l),i(t,p,l),i(t,d,l)},p(t,e){1&e&&g!==(g=t[7].name+"")&&z(n,g),1&e&&f!==(f=t[7].name)&&o(m,"content",f),1&e&&u!==(u=t[7].url)&&o(d,"content",u)},d(t){t&&r(e),t&&r(s),t&&r(m),t&&r(p),t&&r(d)}}}function Gt(t){let e;const n=new V({props:{href:t[7].url,underline:!1,$$slots:{default:[_t]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.href=t[7].url),1024&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function Ut(t){let e;const n=new V({props:{href:t[7].url,underline:!1,$$slots:{default:[Jt]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.href=t[7].url),1025&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function _t(t){let e,n;return{c(){e=l("div"),n=$("   "),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=c(e);n=h(s,"   "),s.forEach(r),this.h()},h(){o(e,"class","education-record-info-certificate-id svelte-uw12z6")},m(t,s){i(t,e,s),b(e,n)},d(t){t&&r(e)}}}function Jt(t){let e,n,s,m=t[7].id+"";return{c(){e=l("div"),n=$("ID: "),s=$(m),this.h()},l(t){e=a(t,"DIV",{class:!0});var l=c(e);n=h(l,"ID: "),s=h(l,m),l.forEach(r),this.h()},h(){o(e,"class","education-record-info-certificate-id svelte-uw12z6")},m(t,l){i(t,e,l),b(e,n),b(e,s)},p(t,e){1&e&&m!==(m=t[7].id+"")&&z(s,m)},d(t){t&&r(e)}}}function Kt(t){let e,n,s,m,f,$,h,u,g,v=t[7].name&&Ht(t);const y=[Ut,Gt],E=[];function x(t,e){return t[7].id?0:1}return $=x(t),h=E[$]=y[$](t),{c(){e=l("li"),n=l("meta"),m=I(),v&&v.c(),f=I(),h.c(),u=I(),this.h()},l(t){e=a(t,"LI",{class:!0,itemscope:!0,itemprop:!0,href:!0});var s=c(e);n=a(s,"META",{itemprop:!0,content:!0}),m=N(s),v&&v.l(s),f=N(s),h.l(s),u=N(s),s.forEach(r),this.h()},h(){o(n,"itemprop","endDate"),o(n,"content",s=t[0].dateIssued),o(e,"class","education-record-info-certificate svelte-uw12z6"),o(e,"itemscope",""),o(e,"itemprop","additionalType"),o(e,"href","http://schema.org/educationalCredentialAwarded")},m(t,s){i(t,e,s),b(e,n),b(e,m),v&&v.m(e,null),b(e,f),E[$].m(e,null),b(e,u),g=!0},p(t,l){(!g||1&l&&s!==(s=t[0].dateIssued))&&o(n,"content",s),t[7].name?v?(v.p(t,l),p(v,1)):(v=Ht(t),v.c(),p(v,1),v.m(e,f)):v&&(j(),d(v,1,1,()=>{v=null}),M());let a=$;$=x(t),$===a?E[$].p(t,l):(j(),d(E[a],1,1,()=>{E[a]=null}),M(),h=E[$],h||(h=E[$]=y[$](t),h.c()),p(h,1),h.m(e,u))},i(t){g||(p(v),p(h),g=!0)},o(t){d(v),d(h),g=!1},d(t){t&&r(e),v&&v.d(),E[$].d()}}}function Qt(t){let e,n,s=t[4].certificates,l=[];for(let e=0;e<s.length;e+=1)l[e]=Kt(Pt(t,s,e));const a=t=>d(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=C()},l(t){for(let e=0;e<l.length;e+=1)l[e].l(t);e=C()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);i(t,e,s),n=!0},p(t,n){if(1&n){let c;for(s=t[4].certificates,c=0;c<s.length;c+=1){const a=Pt(t,s,c);l[c]?(l[c].p(a,n),p(l[c],1)):(l[c]=Kt(a),l[c].c(),p(l[c],1),l[c].m(e.parentNode,e))}for(j(),c=s.length;c<l.length;c+=1)a(c);M()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)p(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)d(l[t]);n=!1},d(t){L(l,t),t&&r(e)}}}function Wt(t){let e,n,s,m,f,u,g,v,y=t[4].year+"";const E=new V({props:{href:t[4].url,target:"_blank",$$slots:{default:[qt]},$$scope:{ctx:t}}});let x=t[4].certificates&&t[4].certificates.length>0&&Bt(t);return{c(){e=l("div"),n=l("div"),s=$(y),m=I(),f=l("div"),w(E.$$.fragment),u=I(),x&&x.c(),g=I(),this.h()},l(t){e=a(t,"DIV",{class:!0,itemscope:!0,itemprop:!0});var l=c(e);n=a(l,"DIV",{class:!0,itemprop:!0});var o=c(n);s=h(o,y),o.forEach(r),m=N(l),f=a(l,"DIV",{class:!0});var i=c(f);D(E.$$.fragment,i),u=N(i),x&&x.l(i),i.forEach(r),g=N(l),l.forEach(r),this.h()},h(){o(n,"class","education-record-year svelte-uw12z6"),o(n,"itemprop","endDate"),o(f,"class","education-record-info svelte-uw12z6"),o(e,"class","education-record svelte-uw12z6"),o(e,"itemscope",""),o(e,"itemprop","http://schema.org/EducationalOccupationalProgram")},m(t,l){i(t,e,l),b(e,n),b(n,s),b(e,m),b(e,f),A(E,f,null),b(f,u),x&&x.m(f,null),b(e,g),v=!0},p(t,e){(!v||1&e)&&y!==(y=t[4].year+"")&&z(s,y);const n={};1&e&&(n.href=t[4].url),1025&e&&(n.$$scope={dirty:e,ctx:t}),E.$set(n),t[4].certificates&&t[4].certificates.length>0?x?(x.p(t,e),p(x,1)):(x=Bt(t),x.c(),p(x,1),x.m(f,null)):x&&(j(),d(x,1,1,()=>{x=null}),M())},i(t){v||(p(E.$$.fragment,t),p(x),v=!0)},o(t){d(E.$$.fragment,t),d(x),v=!1},d(t){t&&r(e),T(E),x&&x.d()}}}function Xt(t){let e,n,s,m=t[0].length>0&&St(),f=t[0],$=[];for(let e=0;e<f.length;e+=1)$[e]=Wt(Rt(t,f,e));const h=t=>d($[t],1,1,()=>{$[t]=null});return{c(){e=l("article"),m&&m.c(),n=I();for(let t=0;t<$.length;t+=1)$[t].c();this.h()},l(t){e=a(t,"ARTICLE",{id:!0,class:!0});var s=c(e);m&&m.l(s),n=N(s);for(let t=0;t<$.length;t+=1)$[t].l(s);s.forEach(r),this.h()},h(){o(e,"id","education-container"),o(e,"class","svelte-uw12z6")},m(t,l){i(t,e,l),m&&m.m(e,null),b(e,n);for(let t=0;t<$.length;t+=1)$[t].m(e,null);s=!0},p(t,[s]){if(t[0].length>0?m||(m=St(),m.c(),m.m(e,n)):m&&(m.d(1),m=null),1&s){let n;for(f=t[0],n=0;n<f.length;n+=1){const l=Rt(t,f,n);$[n]?($[n].p(l,s),p($[n],1)):($[n]=Wt(l),$[n].c(),p($[n],1),$[n].m(e,null))}for(j(),n=f.length;n<$.length;n+=1)h(n);M()}},i(t){if(!s){for(let t=0;t<f.length;t+=1)p($[t]);s=!0}},o(t){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)d($[t]);s=!1},d(t){t&&r(e),m&&m.d(),L($,t)}}}function Yt(t,e,n){let{data:s=null}=e;new Intl.DateTimeFormat(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language);return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class Zt extends t{constructor(t){super(),e(this,t,Yt,Xt,n,{data:0})}}function te(t){let e,n;const $=t[1].default,h=s($,t,t[0],null);return{c(){e=l("footer"),h&&h.c(),this.h()},l(t){e=a(t,"FOOTER",{class:!0});var n=c(e);h&&h.l(n),n.forEach(r),this.h()},h(){o(e,"class","svelte-b9m5ug")},m(t,s){i(t,e,s),h&&h.m(e,null),n=!0},p(t,[e]){h&&h.p&&1&e&&h.p(m($,t,t[0],null),f($,t[0],e,null))},i(t){n||(p(h,t),n=!0)},o(t){d(h,t),n=!1},d(t){t&&r(e),h&&h.d(t)}}}function ee(t,e,n){let{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class ne extends t{constructor(t){super(),e(this,t,ee,te,n,{})}}function se(t){let e,n,s,l,a,c,o=t[0].contacts&&le(t),m=t[0].foreword&&ce(t),f=t[0].stack&&ie(t),$=t[0].timeline&&fe(t),h=t[0].education&&de(t);const u=new ne({});return{c(){o&&o.c(),e=I(),m&&m.c(),n=I(),f&&f.c(),s=I(),$&&$.c(),l=I(),h&&h.c(),a=I(),w(u.$$.fragment)},l(t){o&&o.l(t),e=N(t),m&&m.l(t),n=N(t),f&&f.l(t),s=N(t),$&&$.l(t),l=N(t),h&&h.l(t),a=N(t),D(u.$$.fragment,t)},m(t,r){o&&o.m(t,r),i(t,e,r),m&&m.m(t,r),i(t,n,r),f&&f.m(t,r),i(t,s,r),$&&$.m(t,r),i(t,l,r),h&&h.m(t,r),i(t,a,r),A(u,t,r),c=!0},p(t,c){t[0].contacts?o?(o.p(t,c),p(o,1)):(o=le(t),o.c(),p(o,1),o.m(e.parentNode,e)):o&&(j(),d(o,1,1,()=>{o=null}),M()),t[0].foreword?m?(m.p(t,c),p(m,1)):(m=ce(t),m.c(),p(m,1),m.m(n.parentNode,n)):m&&(j(),d(m,1,1,()=>{m=null}),M()),t[0].stack?f?(f.p(t,c),p(f,1)):(f=ie(t),f.c(),p(f,1),f.m(s.parentNode,s)):f&&(j(),d(f,1,1,()=>{f=null}),M()),t[0].timeline?$?($.p(t,c),p($,1)):($=fe(t),$.c(),p($,1),$.m(l.parentNode,l)):$&&(j(),d($,1,1,()=>{$=null}),M()),t[0].education?h?(h.p(t,c),p(h,1)):(h=de(t),h.c(),p(h,1),h.m(a.parentNode,a)):h&&(j(),d(h,1,1,()=>{h=null}),M());const r={};2&c&&(r.$$scope={dirty:c,ctx:t}),u.$set(r)},i(t){c||(p(o),p(m),p(f),p($),p(h),p(u.$$.fragment,t),c=!0)},o(t){d(o),d(m),d(f),d($),d(h),d(u.$$.fragment,t),c=!1},d(t){o&&o.d(t),t&&r(e),m&&m.d(t),t&&r(n),f&&f.d(t),t&&r(s),$&&$.d(t),t&&r(l),h&&h.d(t),t&&r(a),T(u,t)}}}function le(t){let e;const n=new B({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function ae(t){let e;const n=new lt({props:{data:t[0].contacts}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].contacts),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function ce(t){let e;const n=new B({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function re(t){let e,n=t[0].foreword+"";return{c(){e=$(n)},l(t){e=h(t,n)},m(t,n){i(t,e,n)},p(t,s){1&s&&n!==(n=t[0].foreword+"")&&z(e,n)},d(t){t&&r(e)}}}function oe(t){let e;const n=new rt({props:{$$slots:{default:[re]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function ie(t){let e;const n=new B({props:{$$slots:{default:[me]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function me(t){let e;const n=new vt({props:{data:t[0].stack}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].stack),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function fe(t){let e;const n=new B({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function pe(t){let e;const n=new Ot({props:{data:t[0].timeline}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].timeline),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function de(t){let e;const n=new B({props:{$$slots:{default:[$e]},$$scope:{ctx:t}}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function $e(t){let e;const n=new Zt({props:{data:t[0].education}});return{c(){w(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){A(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.data=t[0].education),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function he(t){let e,n,s=t[0]&&se(t);return{c(){e=l("article"),s&&s.c(),this.h()},l(t){e=a(t,"ARTICLE",{id:!0,class:!0});var n=c(e);s&&s.l(n),n.forEach(r),this.h()},h(){o(e,"id","cv"),o(e,"class","svelte-ffibqk")},m(t,l){i(t,e,l),s&&s.m(e,null),n=!0},p(t,[n]){t[0]?s?(s.p(t,n),p(s,1)):(s=se(t),s.c(),p(s,1),s.m(e,null)):s&&(j(),d(s,1,1,()=>{s=null}),M())},i(t){n||(p(s),n=!0)},o(t){d(s),n=!1},d(t){t&&r(e),s&&s.d()}}}function ue(t,e,n){let{data:s=null}=e;return t.$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class ge extends t{constructor(t){super(),e(this,t,ue,he,n,{data:0})}}function ve(t){let e,n;const s=new ge({props:{data:t[0]}});return{c(){e=I(),w(s.$$.fragment),this.h()},l(t){R('[data-svelte="svelte-1bv9g0p"]',document.head).forEach(r),e=N(t),D(s.$$.fragment,t),this.h()},h(){document.title="Dmitry N. Medvedev"},m(t,l){i(t,e,l),A(s,t,l),n=!0},p(t,[e]){const n={};1&e&&(n.data=t[0]),s.$set(n)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){t&&r(e),T(s,t)}}}function ye(t,e,n){let s=null;return P(async()=>{n(0,s=await(await fetch("/data/cv.json")).json())}),[s]}export default class extends t{constructor(t){super(),e(this,t,ye,ve,n,{})}}