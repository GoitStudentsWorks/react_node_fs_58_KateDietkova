"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{243:function(n,e,t){t.d(e,{U:function(){return x}});var r,o,i,c,s,a=t(168),l=t(4313),u=l.ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n"]))),d=l.ZP.h1(o||(o=(0,a.Z)(["\n  margin-top: 35px;\n  padding-bottom: 72px;\n  font-family: PoppinsSemiBold;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-top: 54px;\n    padding-bottom: 100px;\n    font-size: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-top: 84px;\n    font-size: 44px;\n  }\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.textTitleDark})),p=l.ZP.span(i||(i=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  top: -27px;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: -32px;\n    left: 187px;\n    width: 14px;\n    height: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    top: -47px;\n    left: 228px;\n  }\n"])),(function(n){return n.theme.colors.accent})),f=l.ZP.span(c||(c=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  left: 231px;\n  top: 27px;\n  width: 6px;\n  height: 6px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: 19px;\n    left: 405px;\n    width: 12px;\n    height: 12px;\n  }\n  @media screen and (min-width: 1280px) {\n    top: 36px;\n    left: 707px;\n  }\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.textTitleDark})),h=l.ZP.span(s||(s=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  top: 0px;\n  left: 333px;\n  width: 8px;\n  height: 8px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: -38px;\n    left: 694px;\n    width: 14px;\n    height: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    top: 34px;\n    left: 1150px;\n  }\n"])),(function(n){return n.theme.colors.accent})),m=t(184),x=function(n){var e=n.text;return(0,m.jsxs)(u,{children:[(0,m.jsx)(p,{}),(0,m.jsx)(f,{}),(0,m.jsx)(h,{}),(0,m.jsx)(d,{children:e})]})}},6073:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r=t(5861),o=t(4687),i=t.n(o),c=t(2791),s=t(1243),a=t(3241),l=t(243),u=t(1413),d="undefined"!==typeof window?c.useLayoutEffect:c.useEffect;function p(n,e){var t,r,o,i,s=void 0===e?{}:e,a=s.decayRate,l=void 0===a?.95:a,u=s.safeDisplacement,p=void 0===u?10:u,f=s.applyRubberBandEffect,h=void 0!==f&&f,m=s.activeMouseButton,x=void 0===m?"Left":m,g=s.isMounted,w=void 0===g||g,v=(0,c.useRef)({isMouseDown:!1,isDraggingX:!1,isDraggingY:!1,initialMouseX:0,initialMouseY:0,lastMouseX:0,lastMouseY:0,scrollSpeedX:0,scrollSpeedY:0,lastScrollX:0,lastScrollY:0}),b=!1,M=!1,y=0,Y=0,k=1/60*1e3;d((function(){w&&(b="scroll"===window.getComputedStyle(n.current).overflowX,M="scroll"===window.getComputedStyle(n.current).overflowY,y=n.current.scrollWidth-n.current.clientWidth,Y=n.current.scrollHeight-n.current.clientHeight,t=window.getComputedStyle(n.current).cursor,r=[],o=[],i=[],n.current.childNodes.forEach((function(n){r.push(window.getComputedStyle(n).cursor),o.push("none"===window.getComputedStyle(n).transform?"":window.getComputedStyle(n).transform),i.push("none"===window.getComputedStyle(n).transition?"":window.getComputedStyle(n).transition)})))}),[w]);var D,X,j,I=function(){var e=v.current.scrollSpeedX*k,t=v.current.scrollSpeedY*k,r=n.current.scrollLeft+e,o=n.current.scrollTop+t;n.current.scrollLeft=r,n.current.scrollTop=o,v.current.lastScrollX=r,v.current.lastScrollY=o},E=function(){n.current.childNodes.forEach((function(n,e){n.style.transform=o[e],n.style.transition=i[e]}))},Z=function(n){n.preventDefault(),n.stopImmediatePropagation()},S=function(e){var o=v.current.isDraggingX||v.current.isDraggingY,i=v.current.initialMouseX-e.clientX,c=v.current.initialMouseY-e.clientY,s=Math.abs(i)>p||Math.abs(c)>p,a=o&&s;a?n.current.childNodes.forEach((function(n){n.addEventListener("click",Z)})):n.current.childNodes.forEach((function(n){n.removeEventListener("click",Z)})),v.current.isMouseDown=!1,v.current.lastMouseX=0,v.current.lastMouseY=0,n.current.style.cursor=t,n.current.childNodes.forEach((function(n,e){n.style.cursor=r[e]})),a&&(X=setInterval((function(){var e=v.current.scrollSpeedX*l;v.current.scrollSpeedX=e;var t=n.current.scrollLeft<=0,r=n.current.scrollLeft>=y,o=t||r;I(),(Math.abs(e)<.05||v.current.isMouseDown||o)&&(v.current.scrollSpeedX=0,clearInterval(X))}),k),j=setInterval((function(){var e=v.current.scrollSpeedY*l;v.current.scrollSpeedY=e;var t=n.current.scrollTop<=0,r=n.current.scrollTop>=Y,o=t||r;I(),(Math.abs(e)<.05||v.current.isMouseDown||o)&&(v.current.scrollSpeedY=0,clearInterval(j))}),k),v.current.isDraggingX=!1,v.current.isDraggingY=!1,h&&(n.current.childNodes.forEach((function(n){n.style.transform="translate3d(0px, 0px, 0px)",n.style.transition="transform 250ms"})),D=setTimeout(E,250)))},C=function(e){if(v.current.isMouseDown){e.preventDefault();var t=v.current.lastMouseX-e.clientX;v.current.lastMouseX=e.clientX,v.current.scrollSpeedX=t/k,v.current.isDraggingX=!0;var r=v.current.lastMouseY-e.clientY;v.current.lastMouseY=e.clientY,v.current.scrollSpeedY=r/k,v.current.isDraggingY=!0,n.current.style.cursor="grabbing",n.current.childNodes.forEach((function(n){n.style.cursor="grabbing"}));var o=n.current.scrollLeft<=0&&b,i=n.current.scrollLeft>=y&&b,c=n.current.scrollTop<=0&&M,s=n.current.scrollTop>=Y&&M;(o||i||c||s)&&h&&function(e){var t=e.clientX-v.current.initialMouseX,r=e.clientY-v.current.initialMouseY,o=n.current,i=o.clientWidth,c=o.clientHeight,s=0,a=0;b&&M?(s=.3*i*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/i),a=.3*c*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/c)):b?s=.3*i*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/i):M&&(a=.3*c*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/c)),n.current.childNodes.forEach((function(n){n.style.transform="translate3d("+s+"px, "+a+"px, 0px)",n.style.transition="transform 0ms"}))}(e),I()}},N=function(){y=n.current.scrollWidth-n.current.clientWidth,Y=n.current.scrollHeight-n.current.clientHeight};return(0,c.useEffect)((function(){return w&&(window.addEventListener("mouseup",S),window.addEventListener("mousemove",C),window.addEventListener("resize",N)),function(){window.removeEventListener("mouseup",S),window.removeEventListener("mousemove",C),window.removeEventListener("resize",N),clearInterval(X),clearInterval(j),clearTimeout(D)}}),[w]),{events:{onMouseDown:function(n){var e;e=n.buttons,("Left"===x&&1===e||"Middle"===x&&4===e||"Right"===x&&2===e)&&(v.current.isMouseDown=!0,v.current.lastMouseX=n.clientX,v.current.lastMouseY=n.clientY,v.current.initialMouseX=n.clientX,v.current.initialMouseY=n.clientY)}}}}var f,h,m,x,g,w,v,b=t(168),M=t(4313),y=t(1087),Y=M.ZP.ul(f||(f=(0,b.Z)(["\n  list-style: none;\n  display: flex;\n  margin-bottom: 32px;\n  padding: 0 29px;\n  gap: 28px;\n  border-bottom: ",";\n  border-color: #e0e0e0;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 55px;\n    margin-bottom: 50px;\n    padding: 0 30px;\n    border-width: 1px;\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n"])),(function(n){return n.theme.borders.normal})),k=(0,M.ZP)(y.OL)(h||(h=(0,b.Z)(["\n  text-decoration: none;\n  position: relative;\n  display: block;\n  padding: 10px 0 32px;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1;\n  color: #e0e0e0;\n  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n  &::after {\n    position: absolute;\n    content: '';\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background-color: transparent;\n  }\n  &.active {\n    color: ",";\n    &::after {\n      background-color: ",";\n    }\n  }\n  &.active {\n    color: ",";\n  }\n  &:hover {\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    padding-bottom: 28px;\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),D=function(n){return n.categories},X=function(n){return n.categories.recipesByCategory},j=t(9434),I=t(6716),E=t(184),Z=function(){var n=(0,j.v9)(D).categories,e=(0,j.I0)();(0,c.useEffect)((function(){e((0,I.b)())}),[e]);var t=(0,c.useRef)(),r=p(t).events;return(0,E.jsx)(Y,(0,u.Z)((0,u.Z)({},r),{},{ref:t,children:n&&n.map((function(n){return(0,E.jsx)(k,{to:"/categories/".concat(n.toLowerCase()),children:n},n)}))}))},S=t(7689),C=M.ZP.ul(m||(m=(0,b.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 28px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 14px;\n    row-gap: 100px;\n  }\n"]))),N=M.ZP.li(x||(x=(0,b.Z)(["\n  overflow: hidden;\n  border-radius: 8px;\n  padding: 0;\n"]))),L=M.ZP.div(g||(g=(0,b.Z)(["\n  position: relative;\n"]))),T=M.ZP.div(w||(w=(0,b.Z)(["\n  position: absolute;\n  left: 18px;\n  bottom: 24px;\n  padding: 16px;\n  width: 307px;\n  background: #ffffff;\n  border-radius: 8px;\n\n  @media screen and (min-width: 768px) {\n    left: 16px;\n    width: 300px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 268px;\n  }\n"]))),z=M.ZP.img(v||(v=(0,b.Z)(["\n  width: 343px;\n  height: 323px;\n  object-fit: cover;\n  transition: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 299px;\n    gap: 14px;\n  }\n"])),(function(n){return n.theme.effects.mainEffect})),P=function(){var n=(0,j.v9)(X),e=(0,j.I0)(),t=(0,S.UO)().categoryName;return(0,c.useEffect)((function(){e((0,I.H)(t))}),[e,t]),(0,E.jsx)(C,{children:n&&n.map((function(n){var e=n._id,t=n.title,r=n.thumb;return(0,E.jsx)(N,{children:(0,E.jsxs)(L,{children:[(0,E.jsx)(T,{children:(0,E.jsx)("p",{children:t})}),(0,E.jsx)(z,{src:r,alt:t})]})},e)}))})},B=s.Z.create({baseURL:"https://so-yummy-api.herokuapp.com/api/",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU"}}),O=function(){return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.post("/auth/login",e);case 3:return t=n.sent,r=t.data,B.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU",n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();n()}),[]),(0,E.jsxs)(a.W,{children:[(0,E.jsx)(l.U,{text:"Categories"}),(0,E.jsx)(Z,{}),(0,E.jsx)(P,{})]})}}}]);
//# sourceMappingURL=73.21584a24.chunk.js.map