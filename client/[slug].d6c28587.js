import{S as t,i as s,s as a,r as e,e as n,l as o,F as i,d as r,v as l,a as c,b as u,m as h,f,g as p,x as m,z as d,p as v}from"./client.8f3b48fa.js";function g(t){let s,a,g,x,b,j,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),x=o(y),b=e(),j=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),g=c(t,"H1",{});var s=u(g);x=h(s,y),s.forEach(r),b=l(t),j=c(t,"DIV",{class:!0}),u(j).forEach(r),this.h()},h(){f(j,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,g,s),m(g,x),p(t,b,s),p(t,j,s),j.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&d(x,y),1&a&&E!==(E=t[0].html+"")&&(j.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(b),t&&r(j)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function b(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,b,g,a,{post:0})}}export{x as preload};