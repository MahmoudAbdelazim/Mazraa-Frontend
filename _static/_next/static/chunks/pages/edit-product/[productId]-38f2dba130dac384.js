(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{871:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-product/[productId]",function(){return a(1428)}])},6666:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var s=a(5893),l=a(5188),o=a.n(l),r=a(9583),i=()=>(0,s.jsxs)("div",{className:o().contactUs,children:[(0,s.jsx)("h2",{children:"تابعنا"}),(0,s.jsxs)("ul",{className:o().social,style:{paddingLeft:"80px"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://www.facebook.com/",children:(0,s.jsx)(r.tBk,{})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://www.instagram.com/",children:(0,s.jsx)(r.Zf_,{})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://youtube.com/",children:(0,s.jsx)(r.V2E,{})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://twitter.com/",children:(0,s.jsx)(r.fWC,{})})})]}),(0,s.jsxs)("ul",{className:o().download,children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://appgallery.huawei.com/",children:(0,s.jsx)("img",{src:"/images/app-gallery.png",alt:"app gallery"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://play.google.com/store/games",children:(0,s.jsx)("img",{src:"/images/google-play.png",alt:"Google play"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://www.apple.com/eg/app-store/",children:(0,s.jsx)("img",{src:"/images/app-store.png",alt:"App Store"})})})]})]}),c=a(165),n=a.n(c),d=a(4856),h=a.n(d),u=()=>(0,s.jsxs)("div",{className:h().footerInfo,children:[(0,s.jsx)("div",{children:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى من مولد النص العربى"}),(0,s.jsx)("div",{children:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى من مولد النص العربى"}),(0,s.jsx)("div",{children:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى من مولد النص العربى"}),(0,s.jsx)("div",{children:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى من مولد النص العربى"})]}),p=()=>(0,s.jsxs)("div",{className:n().footer,children:[(0,s.jsx)(u,{}),(0,s.jsx)(i,{})]})},458:function(e,t,a){"use strict";var s=a(5893),l=a(1163),o=a(7294),r=a(5533),i=a.n(r),c=a(8193);t.Z=()=>{let[e,t]=(0,o.useState)(!1),[a,r]=(0,o.useState)(null),[n,d]=(0,o.useState)(""),{push:h,reload:u}=(0,l.useRouter)();(0,o.useEffect)(()=>{if(localStorage.getItem("token")){t(!0);let e=async()=>{var e=new Headers;e.append("Authorization","Bearer "+localStorage.token);try{let t=await fetch("https://amber-jellyfish-suit.cyclic.app/users/profilePic",{method:"GET",headers:e,redirect:"follow"});if(200===t.status){let e=await t.json();if(e.profilePic){let t="data:image/jpeg;base64,"+e.profilePic;r(t)}}}catch(e){console.log(e)}};e()}else t(!1)},[]);let p=()=>{h("/search/"+n)};return(0,s.jsxs)("div",{className:i().searchDivWrapper,children:[(0,s.jsx)("div",{className:i().title,children:(0,s.jsx)("a",{href:"/",children:(0,s.jsxs)("p",{style:{color:"#009C41",fontSize:"40px",fontWeight:"bolder"},children:[" ","المزرعة"," "]})})}),(0,s.jsxs)("div",{className:i().search,children:[(0,s.jsx)("span",{className:i().searchButton,onClick:p,children:(0,s.jsx)(c.RB5,{style:{width:"5%",height:"50%",position:"absolute",left:"13%",top:"25%"}})}),(0,s.jsx)("input",{type:"text",className:i().searchInput,value:n,onChange:e=>d(e.target.value),placeholder:"إبحث عن منتج",onKeyUp:e=>{13===e.keyCode&&p()}})]}),(0,s.jsx)("div",{className:i().icon,children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"dropdown",children:[(0,s.jsx)("img",{src:a||"/images/user.png",style:{width:"50px",height:"50px",borderRadius:"50%"},alt:"Man",className:"dropdown-toggle",type:"button","data-bs-toggle":"dropdown"}),(0,s.jsxs)("ul",{className:"dropdown-menu ".concat(i().dropdown),children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"dropdown-item",href:"/profile",children:"الصفحة الشخصية"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"dropdown-item",href:"/my-products",children:"منتجاتى"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"dropdown-item",onClick:()=>{localStorage.clear(),h("/login")},children:"تسجيل الخروج"})})]})]}),(0,s.jsx)("a",{href:"/add-product",children:(0,s.jsx)("img",{className:i().plusSign,src:"/images/plus.png",alt:"Add Product"})})]}):(0,s.jsx)("a",{href:"/login",className:i().logout,children:"تسجيل الدخول"})})]})}},4743:function(e,t,a){"use strict";var s=a(5893),l=a(7294),o=a(1589),r=a.n(o);t.Z=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://amber-jellyfish-suit.cyclic.app/categories/allCategories",{method:"GET",redirect:"follow"});if(200===e.status){let a=await e.json();t(a.categories)}}catch(e){console.error(e)}};e()},[]),(0,s.jsx)("div",{className:r().navList,children:(0,s.jsx)("ul",{children:e.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/category/".concat(e.categoryNameArabic.split(" ").join("-")+"--ID--"+e.id),children:e.categoryNameArabic})},e.id))})})}},1428:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(5893),l=a(1163),o=a(7294),r=a(3649),i=a.n(r),c=a(6154),n=e=>{let{productDetails:t,setProductDetails:a}=e,[r,n]=(0,o.useState)([]),[d,h]=(0,o.useState)(t.productPhoto),[u,p]=(0,o.useState)(!1),[m,g]=(0,o.useState)(""),[x,j]=(0,o.useState)("red"),{push:f,reload:y}=(0,l.useRouter)();(0,o.useEffect)(()=>{N()},[]);let N=async()=>{p(!0);try{let e=await fetch("https://amber-jellyfish-suit.cyclic.app/categories/allCategories",{method:"GET",redirect:"follow"});if(200===e.status){let t=await e.json();n(t.categories)}}catch(e){console.error(e)}p(!1)},v=e=>new Promise((t,a)=>{let s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(s.result),s.onerror=a}),b=async e=>{p(!0),h(await v(e.target.files[0])),p(!1)},_=async()=>{p(!0);var e=new Headers;e.append("Authorization","Bearer "+localStorage.token);try{let a=await fetch("https://amber-jellyfish-suit.cyclic.app/products/product/"+t.id,{method:"DELETE",headers:e,redirect:"follow"});200===a.status&&(g("تــم حـــذف المنتـــج بنجــــاج"),j("green"),p(!1),setTimeout(()=>{f("/my-products")},1e3))}catch(e){console.error(e),g("حــدث خطـــأ مــا، لم يتم حـــذف المنتــــج"),j("red")}p(!1)},w=async()=>(j("red"),t.title)?t.details?t.price?t.location?t.phoneNumber?t.category&&"تصنيف المنتج"!==t.category?!!d||(g("برجـــاء رفـــع صـــورة للمنتـــج"),!1):(g("برجـــاء تحديـــد تصنيـــف المنتـــج"),!1):(g("برجـــاء إدخـــال رقـــم الهاتـــف"),!1):(g("برجـــاء إدخـــال عنـــوان (موقـــع) المنتـــج"),!1):(g("برجـــاء إدخـــال سعـــر المنتـــج"),!1):(g("برجــاء إدخـــال تفاصيـــل المنتـــج"),!1):(g("برجــاء إدخـــال عنـــوان المنتــــج"),!1),C=async()=>{if(p(!0),!await w()){p(!1);return}let e=JSON.stringify({id:t.id,title:t.title,details:t.details,price:t.price,location:t.location,phoneNumber:t.phoneNumber,category:t.category,productPhoto:d});try{let a={method:"put",url:"https://amber-jellyfish-suit.cyclic.app/products/product/"+t.id,headers:{Authorization:"Bearer "+localStorage.token,"Content-Type":"application/json"},data:e},s=await (0,c.Z)(a);200===s.status?(g("تــم تعديل المنتـــج بنجـــاج"),j("green"),p(!1),setTimeout(()=>{f("/my-products")},2e3)):(g("حـــدث خطـــأ مــا، برجـــاء المحاولـــة مــرة أخــرى"),j("red"))}catch(e){console.error(e),g("حـــدث خطـــأ مــا، برجـــاء المحاولـــة مــرة أخــرى"),j("red")}p(!1)};return(0,s.jsxs)("div",{className:i().EditProductDetails,children:[u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"loading-overlay"}),(0,s.jsx)("div",{className:"loading-overlay-image-container",children:(0,s.jsx)("img",{src:"/images/loading.gif",className:"loading-overlay-img",alt:"Loading GIF"})})]}),(0,s.jsx)("label",{htmlFor:"title",children:"عنوان المنتج"}),(0,s.jsx)("input",{type:"text",name:"title",id:"title",className:"form-control",value:t.title,onChange:e=>a({...t,title:e.target.value})}),(0,s.jsx)("label",{htmlFor:"details",children:"تفاصيل المنتج"}),(0,s.jsx)("textarea",{name:"details",id:"details",className:"form-control",value:t.details,onChange:e=>a({...t,details:e.target.value})}),(0,s.jsx)("label",{htmlFor:"price",children:" السعر (بالجنيه)"}),(0,s.jsx)("input",{type:"number",name:"price",id:"price",className:"form-control",value:t.price,onChange:e=>a({...t,price:e.target.value})}),(0,s.jsx)("label",{htmlFor:"category",children:"تصنيف المنتج"}),(0,s.jsxs)("select",{id:"category",className:"form-control",value:t.category,onChange:e=>a({...t,category:e.target.value}),children:[(0,s.jsx)("option",{value:null,children:"إختر التصنيف"}),r.map(e=>(0,s.jsx)("option",{value:e.id,children:e.categoryNameArabic},e.id))]}),(0,s.jsx)("label",{htmlFor:"location",children:"العنوان (الموقع)"}),(0,s.jsx)("input",{type:"location",name:"location",id:"location",className:"form-control",value:t.location,onChange:e=>a({...t,location:e.target.value})}),(0,s.jsx)("label",{htmlFor:"phone-number",children:"رقم الهاتف"}),(0,s.jsx)("input",{type:"text",name:"phone-number",id:"phone-number",className:"form-control",value:t.phoneNumber,onChange:e=>a({...t,phoneNumber:e.target.value})}),(0,s.jsx)("label",{htmlFor:"upload",className:i().upload,children:"صورة المنتج (اتركها فارغة اذا كنت لا تريد تعديل الصورة)"}),(0,s.jsx)("input",{type:"file",id:"upload",name:"upload",accept:"image/jpeg, image/png",className:"form-control",onChange:b}),(0,s.jsx)("button",{className:i().submit,onClick:C,children:"تعديــــل المنتـــج"}),(0,s.jsx)("button",{className:i().delete,onClick:()=>{document.getElementById("delete-product-modal-button").click()},children:"حــــذف المنتـــج"}),(0,s.jsx)("p",{style:{color:x,fontSize:"20px"},children:m}),(0,s.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",id:"delete-product-modal-button",hidden:!0,children:"Launch modal"}),(0,s.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsx)("div",{className:"modal-header",children:(0,s.jsx)("h1",{className:"modal-title fs-5",id:"exampleModalLabel",children:"تحذيــــــــر"})}),(0,s.jsx)("div",{className:"modal-body",children:"هل تريد بالفعل حذف هذا المنتج؟"}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg","data-bs-dismiss":"modal",children:"لا"}),(0,s.jsx)("button",{type:"button",className:"btn btn-danger btn-lg",onClick:_,children:"نعم"})]})]})})})]})},d=a(6666),h=a(458),u=a(4743),p=a(9008),m=a.n(p),g=()=>{let e=(0,l.useRouter)(),{productId:t}=e.query,[a,r]=(0,o.useState)(null),[i,c]=(0,o.useState)(!1),{push:p,reload:g}=(0,l.useRouter)();return(0,o.useEffect)(()=>{null==localStorage.getItem("token")&&p("/login")},[]),(0,o.useEffect)(()=>{let e=async()=>{c(!0);try{let e=await fetch("https://amber-jellyfish-suit.cyclic.app/products/product/"+t,{method:"GET",redirect:"follow"});if(200===e.status){let t=await e.json();t.product.productPhoto="data:image/png;base64,"+t.product.productPhoto,r(t.product)}}catch(e){console.error(e)}c(!1)};e()},[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m(),{children:(0,s.jsx)("title",{children:"تعديل منتج"})}),i&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"loading-overlay"}),(0,s.jsx)("div",{className:"loading-overlay-image-container",children:(0,s.jsx)("img",{src:"/images/loading.gif",className:"loading-overlay-img",alt:"Loading GIF"})})]}),(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)(h.Z,{}),(0,s.jsx)(u.Z,{}),(0,s.jsxs)("div",{style:{paddingTop:"30px",paddingRight:"50px",paddingLeft:"50px"},children:[(0,s.jsx)("h2",{children:"تعديـــل منتـــج"}),a&&(0,s.jsx)(n,{productDetails:a,setProductDetails:r})]}),(0,s.jsx)("hr",{}),(0,s.jsx)(d.Z,{}),(0,s.jsx)("div",{style:{height:"60px",backgroundColor:"#007C21"}})]})]})}},3649:function(e){e.exports={EditProductDetails:"EditProductDetails_EditProductDetails__czmMx",submit:"EditProductDetails_submit__NgaZy",delete:"EditProductDetails_delete__CNbBc"}},5188:function(e){e.exports={contactUs:"ContactUs_contactUs__mqkMo",social:"ContactUs_social__WoSS5",download:"ContactUs_download__GbXgB"}},165:function(e){e.exports={footer:"Footer_footer__1IwEk"}},4856:function(e){e.exports={footerInfo:"FooterInfo_footerInfo__549ci"}},5533:function(e){e.exports={searchDivWrapper:"NavBar_searchDivWrapper__0SlMw",title:"NavBar_title__suKCP",search:"NavBar_search___IMT9",searchInput:"NavBar_searchInput__aSTaK",icon:"NavBar_icon__r0iRw",logout:"NavBar_logout__LAmZa",plusSign:"NavBar_plusSign__ejm_l",dropdown:"NavBar_dropdown__dnDto",searchButton:"NavBar_searchButton__XdqwS"}},1589:function(e){e.exports={navList:"NavList_navList__oqC8t"}}},function(e){e.O(0,[445,617,835,774,888,179],function(){return e(e.s=871)}),_N_E=e.O()}]);