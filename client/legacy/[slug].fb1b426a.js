import{M as t,N as n,_ as e,a as s,i as r,s as a,b as c,S as o,c as u,e as i,t as f,L as l,h,g as p,d as v,f as d,m,j as y,k as x,l as g,n as R,o as b,p as j,u as k,v as D}from"./client.d6e85aee.js";function E(t){return function(){var n,e=k(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var s=k(this).constructor;n=Reflect.construct(e,arguments,s)}else n=e.apply(this,arguments);return D(this,n)}}function H(t){var n,e,s,r,a,c,o=t[0].title+"",k=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),s=i("h1"),r=f(o),a=u(),c=i("div"),this.h()},l:function(t){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),e=p(t),s=v(t,"H1",{});var n=d(s);r=m(n,o),n.forEach(h),a=p(t),c=v(t,"DIV",{class:!0}),d(c).forEach(h),this.h()},h:function(){y(c,"class","content svelte-gnxal1")},m:function(t,n){x(t,e,n),x(t,s,n),g(s,r),x(t,a,n),x(t,c,n),c.innerHTML=k},p:function(t,e){var s=R(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&b(r,o),1&s&&k!==(k=t[0].html+"")&&(c.innerHTML=k)},i:j,o:j,d:function(t){t&&h(e),t&&h(s),t&&h(a),t&&h(c)}}}function L(t){return M.apply(this,arguments)}function M(){return(M=t(n.mark(function t(e){var s,r,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function w(t,n,e){var s=n.post;return t.$set=function(t){"post"in t&&e(0,s=t.post)},[s]}export default(function(t){e(u,o);var n=E(u);function u(t){var e;return s(this,u),e=n.call(this),r(c(e),t,w,H,a,{post:0}),e}return u}());export{L as preload};
