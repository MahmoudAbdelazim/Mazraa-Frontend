(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(s,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(2410)}])},2820:function(s,t,e){"use strict";var a=e(5893),c=e(7294),r=e(9551),o=e(2349),l=e.n(o);t.Z=s=>{let{category:t}=s,[e,o]=(0,c.useState)([]),[i,n]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let s=async()=>{var s;n(!0);try{let e="https://amber-jellyfish-suit.cyclic.app/products/latestProducts";t&&(e="https://amber-jellyfish-suit.cyclic.app/products/categoryProducts/"+t.id);let a=await fetch(e,{method:"GET"});if(200===a.status){let t=await a.json();for(let e=0;e<(null===(s=t.products)||void 0===s?void 0:s.length);e++)t.products[e].productPhoto="data:image/png;base64,"+t.products[e].productPhoto;o(t.products)}}catch(s){console.error(s)}n(!1)};s()},[t]),(0,a.jsxs)("div",{className:l().products,children:[i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"loading-overlay"}),(0,a.jsx)("div",{className:"loading-overlay-image-container",children:(0,a.jsx)("img",{src:"/images/loading.gif",className:"loading-overlay-img",alt:"Loading GIF"})})]}),e.map(s=>(0,a.jsx)("a",{href:"/product/".concat(s.title.split(" ").join("-")+"--ID--"+s.id),children:(0,a.jsx)(r.Z,{product:s})},s.id))]})}},2410:function(s,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var a=e(5893),c=e(6666),r=e(458),o=e(4743),l=e(2820),i=e(7294),n=e(5404),d=e.n(n),u=()=>{let[s,t]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let s=async()=>{var s;try{let e=await fetch("https://amber-jellyfish-suit.cyclic.app/products/allProducts",{method:"GET"});if(200===e.status){let a=await e.json();for(let t=0;t<(null===(s=a.products)||void 0===s?void 0:s.length);t++)a.products[t].productPhoto="data:image/png;base64,"+a.products[t].productPhoto;t(a.products)}}catch(s){console.error(s)}};s()},[]),(0,a.jsx)("div",{className:d().slideshow,children:(0,a.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide","data-bs-ride":"carousel",children:[(0,a.jsx)("div",{className:"carousel-inner",children:s.map((s,t)=>(0,a.jsx)("div",{className:"carousel-item ".concat(0===t?"active":""),children:(0,a.jsx)("img",{src:s.productPhoto,className:"d-block w-100",alt:"..."})},s.id))}),(0,a.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[(0,a.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),(0,a.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),(0,a.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[(0,a.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),(0,a.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})},p=e(9008),h=e.n(p);function x(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h(),{children:[(0,a.jsx)("title",{children:"المزرعة"}),(0,a.jsx)("meta",{name:"description",content:"المزرعة هو موقع و تطبيق الكترونى لبيع و تسويق منتجات زراعية و الات زراعية و تسويق محاصيل و مشاركة محاصيل و حدائق ريفية"})]}),(0,a.jsxs)("div",{style:{textAlign:"center"},children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(u,{}),(0,a.jsxs)("div",{style:{paddingTop:"30px",paddingRight:"50px",paddingLeft:"50px"},children:[(0,a.jsx)("h2",{children:"نظرة عامة"}),(0,a.jsx)(l.Z,{})]}),(0,a.jsx)("hr",{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)("div",{style:{height:"60px",backgroundColor:"#007C21"}})]})]})}},2349:function(s){s.exports={products:"Products_products__tsqdp"}},5404:function(s){s.exports={slideshow:"Slideshow_slideshow__2Jt49"}}},function(s){s.O(0,[445,617,115,774,888,179],function(){return s(s.s=5557)}),_N_E=s.O()}]);