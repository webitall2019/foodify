(this.webpackJsonpfoodify=this.webpackJsonpfoodify||[]).push([[0],{10:function(e,t,a){e.exports={cardImageWrap:"random_cardImageWrap__2ASfZ",image:"random_image__2CQ1w",buttonsBox:"random_buttonsBox__X0k4V"}},11:function(e,t,a){e.exports={addNewReceiptBtn:"favourites_addNewReceiptBtn__254PD",main:"favourites_main__3XKrf",card:"favourites_card__18Hf4",container:"favourites_container__1kzaw"}},15:function(e,t,a){e.exports={header:"App_header__3ZZ1n",header__list:"App_header__list__l8Zoz"}},17:function(e,t,a){e.exports={modal:"modal_modal__FaOf0",formBox:"modal_formBox__2sE4s",fromButton:"modal_fromButton__1BzcB"}},22:function(e,t,a){e.exports={container:"container_container__3XEwH"}},23:function(e,t,a){e.exports={card:"card_card__2ZfGK"}},24:function(e,t,a){e.exports={button:"button_button__1yKPU"}},31:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(20),i=a.n(s),r=(a(31),a(15)),o=a.n(r),l=a(12),h=a(2),b=a(16),d=a.n(b),u=a(21),j=a(7),m=a(22),A=a.n(m),f=a(1),O=function(e){return Object(f.jsx)("div",{className:A.a.container,children:e.children})},v=a(23),w=a.n(v);var x=function(e){var t=100/e.cardCount;return Object(f.jsx)("div",{className:w.a.card,style:{maxWidth:t-3+"%"},children:e.children})},N=a(24),Y=a.n(N);var p=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){s(e.isDisabled)}),[e.isDisabled]),Object(f.jsx)("button",{onClick:function(){("Like"===e.btnName?e.onLike:e.onSkip)()},className:Y.a.button,disabled:c,children:e.btnName})},y=a(10),G=a.n(y),g="data:image/png;base64,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";var E=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(j.a)(s,2),r=i[0],o=i[1],l=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 3:t=e.sent,t.json().then((function(e){c(e.meals[0])})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:o(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);var h={};return Object(f.jsx)(O,{children:Object(f.jsxs)(x,{size:100,children:[Object(f.jsx)("div",{className:G.a.cardImageWrap,children:Object(f.jsx)("img",{src:a.strMealThumb?a.strMealThumb:g,alt:"meals-thumb",className:G.a.image})}),Object(f.jsxs)("div",{className:"meal-info",children:[Object(f.jsx)("h3",{className:"meal-title",children:a.strMeal}),Object(f.jsx)("p",{className:"meal-receipt",children:a.strInstructions})]}),Object(f.jsxs)("div",{className:G.a.buttonsBox,children:[Object(f.jsx)(p,{btnName:"Skip",onSkip:function(){l()}}),Object(f.jsx)(p,{btnName:"Like",onLike:function(){h.img=a.strMealThumb,h.title=a.strMeal,h.receipt=a.strInstructions,h.isDisabled=!0,h=JSON.stringify(h),localStorage.setItem("".concat(100*Math.random().toFixed(2)),h),o(!0),console.log("saved receipt")},isDisabled:r})]})]})})},I=a(11),D=a.n(I),S=a(17),Z=a.n(S);var z=function(e){var t=Object(n.useState)(e.isOpen),a=Object(j.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),r=Object(j.a)(i,2),o=r[0],l=r[1],h=Object(n.useState)(""),b=Object(j.a)(h,2),d=b[0],u=b[1];Object(n.useEffect)((function(){s(e.isOpen)}),[e.isOpen]);var m={},A=function(){s(!e.isOpen)};return e.isOpen?Object(f.jsx)("div",{className:Z.a.modal,onClick:function(e){e.target.classList.contains("modal_modal__FaOf0")&&A()},style:{display:c?"block":"none"},children:Object(f.jsxs)("div",{className:Z.a.formBox,children:[Object(f.jsx)("h3",{children:"Add custom dish"}),Object(f.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),m.title=o,m.receipt=d,o.length>10&&d.length>30?(m=JSON.stringify(m),localStorage.setItem("".concat("newReceiptId"+100*Math.random().toFixed(2)),m),alert("New receipt created"),A()):(alert("Please fill out all areas"),A())}(e)},children:[Object(f.jsx)("input",{type:"text",placeholder:"Dish title",required:!0,onChange:function(e){l(e.target.value)}}),Object(f.jsx)("textarea",{placeholder:"Dish description ...",required:!0,onChange:function(e){u(e.target.value)}}),Object(f.jsx)("button",{style:{fontWeight:"500"},children:"Add custom dish"})]})]})}):null};var B=function(e){var t=Object(n.useState)(),a=Object(j.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),r=Object(j.a)(i,2),o=r[0],l=r[1];Object(n.useEffect)((function(){l(!0)}),[o]);var h=[];for(var b in localStorage)null!==localStorage.getItem(b)&&h.push(JSON.parse(localStorage.getItem(b)));return Object(f.jsxs)("div",{className:D.a.main,children:[Object(f.jsx)("button",{className:D.a.addNewReceiptBtn,onClick:function(){s(!0)},children:"add custom dish"}),Object(f.jsx)(O,{children:h.length?h.map((function(e,t){return Object(f.jsxs)(x,{size:"28%",cardCount:h.length,children:[Object(f.jsx)("div",{style:{maxWidth:"400px",margin:"0 auto"},children:Object(f.jsx)("img",{style:{maxWidth:"100%"},src:e.img?e.img:g,alt:"meals-thumb",className:D.a.image})}),Object(f.jsxs)("div",{className:"meal-info",children:[Object(f.jsx)("h3",{className:"meal-title",children:e.title}),Object(f.jsx)("p",{className:"meal-receipt",children:e.receipt})]})]},t)})):Object(f.jsx)("p",{style:{fontSize:"50px",margin:"50px auto"},children:"nothing to show"})}),Object(f.jsx)(z,{isOpen:c})]})};var M=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)("nav",{className:o.a.header,children:Object(f.jsxs)("ul",{className:o.a.header__list,children:[Object(f.jsx)("li",{children:Object(f.jsx)(l.b,{to:"./main",children:"Random dish"})}),Object(f.jsx)("li",{children:Object(f.jsx)(l.b,{to:"/favorites",children:"Favourites"})})]})}),Object(f.jsx)(h.a,{path:"/main",component:E}),Object(f.jsx)(h.a,{path:"/favorites",component:B})]})})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a9fd40c8.chunk.js.map