import{_ as t,a as n,i as r,s as e,b as s,S as o,e as a,q as c,d as f,f as u,r as i,g as l,h,j as p,F as v,I as g,B as d,R as m,D as R,k as y,A as b,N as E,o as j,p as x}from"./client.a68e26bd.js";function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function q(t,n,r){var e=t.slice();return e[1]=n[r],e}function A(t){var n,r,e,s,o=t[1].title+"";return{c:function(){n=a("li"),r=a("a"),e=c(o),this.h()},l:function(t){n=f(t,"LI",{});var s=u(n);r=f(s,"A",{rel:!0,href:!0});var a=u(r);e=i(a,o),a.forEach(l),s.forEach(l),this.h()},h:function(){h(r,"rel","prefetch"),h(r,"href",s="blog/"+t[1].slug)},m:function(t,s){p(t,n,s),v(n,r),v(r,e)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&g(e,o),1&n&&s!==(s="blog/"+t[1].slug)&&h(r,"href",s)},d:function(t){t&&l(n)}}}function B(t){for(var n,r,e,s,o,g=t[0],j=[],x=0;x<g.length;x+=1)j[x]=A(q(t,g,x));return{c:function(){n=d(),r=a("h1"),e=c("Recent posts"),s=d(),o=a("ul");for(var t=0;t<j.length;t+=1)j[t].c();this.h()},l:function(t){m('[data-svelte="svelte-hfp9t8"]',document.head).forEach(l),n=R(t),r=f(t,"H1",{});var a=u(r);e=i(a,"Recent posts"),a.forEach(l),s=R(t),o=f(t,"UL",{class:!0});for(var c=u(o),h=0;h<j.length;h+=1)j[h].l(c);c.forEach(l),this.h()},h:function(){document.title="Blog",h(o,"class","svelte-1frg2tf")},m:function(t,a){p(t,n,a),p(t,r,a),v(r,e),p(t,s,a),p(t,o,a);for(var c=0;c<j.length;c+=1)j[c].m(o,null)},p:function(t,n){var r=y(n,1)[0];if(1&r){var e;for(g=t[0],e=0;e<g.length;e+=1){var s=q(t,g,e);j[e]?j[e].p(s,r):(j[e]=A(s),j[e].c(),j[e].m(o,null))}for(;e<j.length;e+=1)j[e].d(1);j.length=g.length}},i:b,o:b,d:function(t){t&&l(n),t&&l(r),t&&l(s),t&&l(o),E(j,t)}}}function I(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function L(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var S=function(a){t(u,o);var c,f=(c=u,function(){var t,n=j(c);if(D()){var r=j(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return x(this,t)});function u(t){var o;return n(this,u),o=f.call(this),r(s(o),t,L,B,e,{posts:0}),o}return u}();export default S;export{I as preload};
