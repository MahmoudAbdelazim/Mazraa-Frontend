(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{785:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[id]",function(){return s(5563)}])},2820:function(t,e,s){"use strict";var r=s(5893),c=s(7294),i=s(9551),a=s(2349),n=s.n(a);e.Z=t=>{let{category:e}=t,[s,a]=(0,c.useState)([]),[o,d]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let t=async()=>{var t;d(!0);try{let s="https://amber-jellyfish-suit.cyclic.app/products/latestProducts";e&&(s="https://amber-jellyfish-suit.cyclic.app/products/categoryProducts/"+e.id);let r=await fetch(s,{method:"GET"});if(200===r.status){let e=await r.json();for(let s=0;s<(null===(t=e.products)||void 0===t?void 0:t.length);s++)e.products[s].productPhoto="data:image/png;base64,"+e.products[s].productPhoto;a(e.products)}}catch(t){console.error(t)}d(!1)};t()},[e]),(0,r.jsxs)("div",{className:n().products,children:[o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"loading-overlay"}),(0,r.jsx)("div",{className:"loading-overlay-image-container",children:(0,r.jsx)("img",{src:"/images/loading.gif",className:"loading-overlay-img",alt:"Loading GIF"})})]}),s.map(t=>(0,r.jsx)("a",{href:"/product/".concat(t.title.split(" ").join("-")+"--ID--"+t.id),children:(0,r.jsx)(i.Z,{product:t})},t.id))]})}},5563:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return l}});var r=s(5893),c=s(6666),i=s(458),a=s(4743),n=s(2820),o=s(9008),d=s.n(o);s(1163),s(7294);var l=!0;e.default=t=>{let{category:e}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:e.categoryNameArabic}),(0,r.jsx)("meta",{name:"description",content:e.categoryNameArabic+" بيع تسويق منتجات زراعية المزرعة زراعة "})]}),(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(a.Z,{}),(0,r.jsxs)("div",{style:{paddingTop:"30px",paddingRight:"50px",paddingLeft:"50px"},children:[(0,r.jsx)("h2",{children:e.categoryNameArabic}),(0,r.jsx)(n.Z,{category:e})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{style:{height:"60px",backgroundColor:"#007C21"}})]})]})}},2349:function(t){t.exports={products:"Products_products__tsqdp"}}},function(t){t.O(0,[445,617,115,774,888,179],function(){return t(t.s=785)}),_N_E=t.O()}]);