(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{3402:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-products",function(){return s(9143)}])},9143:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return g}});var r=s(5893),o=s(6666),d=s(1163),n=s(7294),a=s(9551),c=s(1832),i=s.n(c),l=()=>{let[t,e]=(0,n.useState)([]),[s,o]=(0,n.useState)(!1),[c,l]=(0,n.useState)(""),{push:u,reload:p}=(0,d.useRouter)();(0,n.useEffect)(()=>{h()},[]);let h=async()=>{o(!0);var t,s=new Headers;s.append("Authorization","Bearer "+localStorage.token);try{let r=await fetch("http://localhost:3001/products/myProducts",{method:"GET",headers:s,redirect:"follow"});if(200===r.status){let s=await r.json();for(let e=0;e<(null===(t=s.products)||void 0===t?void 0:t.length);e++)s.products[e].productPhoto="data:image/png;base64,"+s.products[e].productPhoto;0===s.products.length&&l("لا يوجـــد لديـــك أى منتجـــات علــى المزرعــــة"),e(s.products)}}catch(t){console.error(t)}o(!1)};return(0,r.jsxs)("div",{className:i().products,children:[s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"loading-overlay"}),(0,r.jsx)("div",{className:"loading-overlay-image-container",children:(0,r.jsx)("img",{src:"/images/loading.gif",className:"loading-overlay-img",alt:"Loading GIF"})})]}),(0,r.jsx)("p",{children:c}),(0,r.jsx)("button",{className:i().addProduct,onClick:()=>u("/add-product"),children:"إضافـــة منتــــج جديـــد"}),(0,r.jsx)("div",{className:i().productsContainer,children:t.map(t=>(0,r.jsx)("a",{href:"/edit-product/".concat(t.id),children:(0,r.jsx)(a.Z,{product:t})},t.id))})]})},u=s(458),p=s(4743),h=s(9008),x=s.n(h),g=()=>{let{push:t,reload:e}=(0,d.useRouter)();return(0,n.useEffect)(()=>{null==localStorage.getItem("token")&&t("/login")},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x(),{children:(0,r.jsx)("title",{children:"المزرعة - منتجاتى"})}),(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)(u.Z,{}),(0,r.jsx)(p.Z,{}),(0,r.jsxs)("div",{style:{paddingTop:"30px",paddingRight:"50px",paddingLeft:"50px"},children:[(0,r.jsx)("h2",{children:"منتجاتــــــــى"}),(0,r.jsx)(l,{})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(o.Z,{}),(0,r.jsx)("div",{style:{height:"60px",backgroundColor:"#007C21"}})]})]})}},1832:function(t){t.exports={products:"MyProductsDetails_products__NaD1s",productsContainer:"MyProductsDetails_productsContainer__RlZIf",addProduct:"MyProductsDetails_addProduct__KbMB7"}}},function(t){t.O(0,[445,617,115,774,888,179],function(){return t(t.s=3402)}),_N_E=t.O()}]);