(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{7756:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[searchText]",function(){return s(8443)}])},8443:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var r=s(5893),n=s(6666),a=s(458),c=s(4743),d=s(7294),o=s(9551),i=s(6879),l=s.n(i),u=e=>{let{searchText:t}=e,[s,n]=(0,d.useState)([]),[a,c]=(0,d.useState)(!1),[i,u]=(0,d.useState)("");return(0,d.useEffect)(()=>{let e=async()=>{c(!0);var e,s=new Headers;s.append("Content-Type","application/json");var r=JSON.stringify({searchText:t});try{let t=await fetch("http://localhost:3001/products/searchProducts",{method:"POST",headers:s,body:r,redirect:"follow"});if(200===t.status){let s=await t.json();for(let t=0;t<(null===(e=s.products)||void 0===e?void 0:e.length);t++)s.products[t].productPhoto="data:image/png;base64,"+s.products[t].productPhoto;n(s.products),0===s.products.length?u("عفوًا، لا يوجد نتائج لهذا البحث"):u("")}}catch(e){console.error(e)}c(!1)};e()},[t]),(0,r.jsxs)("div",{className:l().products,children:[a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"loading-overlay"}),(0,r.jsx)("div",{className:"loading-overlay-image-container",children:(0,r.jsx)("img",{src:"/images/loading.gif",className:"loading-overlay-img",alt:"Loading GIF"})})]}),(0,r.jsx)("p",{children:i}),s.map(e=>(0,r.jsx)("a",{href:"/product/".concat(e.id),children:(0,r.jsx)(o.Z,{product:e})},e.id))]})},h=s(9008),p=s.n(h),x=s(1163),g=()=>{let e=(0,x.useRouter)(),{searchText:t}=e.query;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p(),{children:(0,r.jsx)("title",{children:"بحث - "+t})}),(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)("div",{style:{paddingTop:"30px",paddingRight:"50px",paddingLeft:"50px"},children:[(0,r.jsx)("h2",{children:"نتائج البحث"}),(0,r.jsx)(u,{searchText:t})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(n.Z,{}),(0,r.jsx)("div",{style:{height:"60px",backgroundColor:"#007C21"}})]})]})}},6879:function(e){e.exports={products:"SearchResults_products__lndWd"}}},function(e){e.O(0,[445,617,115,774,888,179],function(){return e(e.s=7756)}),_N_E=e.O()}]);