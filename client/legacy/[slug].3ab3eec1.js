import{N as t,O as n,_ as e,a as s,i as r,s as a,b as c,S as o,v as u,e as i,q as f,M as l,g as h,x as p,d as v,f as d,r as m,h as y,j as x,z as g,k as R,C as b,u as j,o as k,p as D}from"./client.9e254c7e.js";function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function H(t){var n,e,s,r,a,c,o=t[0].title+"",k=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),s=i("h1"),r=f(o),a=u(),c=i("div"),this.h()},l:function(t){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),e=p(t),s=v(t,"H1",{});var n=d(s);r=m(n,o),n.forEach(h),a=p(t),c=v(t,"DIV",{class:!0}),d(c).forEach(h),this.h()},h:function(){y(c,"class","content svelte-gnxal1")},m:function(t,n){x(t,e,n),x(t,s,n),g(s,r),x(t,a,n),x(t,c,n),c.innerHTML=k},p:function(t,e){var s=R(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&b(r,o),1&s&&k!==(k=t[0].html+"")&&(c.innerHTML=k)},i:j,o:j,d:function(t){t&&h(e),t&&h(s),t&&h(a),t&&h(c)}}}function M(t){return q.apply(this,arguments)}function q(){return(q=t(n.mark((function t(e){var s,r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function w(t,n,e){var s=n.post;return t.$set=function(t){"post"in t&&e(0,s=t.post)},[s]}var L=function(t){e(i,o);var n,u=(n=i,function(){var t,e=k(n);if(E()){var s=k(this).constructor;t=Reflect.construct(e,arguments,s)}else t=e.apply(this,arguments);return D(this,t)});function i(t){var n;return s(this,i),n=u.call(this),r(c(n),t,w,H,a,{post:0}),n}return i}();export default L;export{M as preload};
