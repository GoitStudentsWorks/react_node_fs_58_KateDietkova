"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[127],{243:function(n,e,t){t.d(e,{U:function(){return x}});var r,o,i,c,s,a=t(168),l=t(4313),u=l.ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n"]))),d=l.ZP.h1(o||(o=(0,a.Z)(["\n  margin-top: 35px;\n  margin-bottom: 0;\n  padding-bottom: 72px;\n  font-family: PoppinsSemiBold;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-top: 54px;\n    padding-bottom: 100px;\n    font-size: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-top: 84px;\n    font-size: 44px;\n  }\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.textTitleDark})),p=l.ZP.span(i||(i=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  top: -27px;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: -32px;\n    left: 187px;\n    width: 14px;\n    height: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    top: -47px;\n    left: 228px;\n  }\n"])),(function(n){return n.theme.colors.accent})),h=l.ZP.span(c||(c=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  left: 231px;\n  top: 27px;\n  width: 6px;\n  height: 6px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: 19px;\n    left: 405px;\n    width: 12px;\n    height: 12px;\n  }\n  @media screen and (min-width: 1280px) {\n    top: 36px;\n    left: 707px;\n  }\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.textTitleDark})),f=l.ZP.span(s||(s=(0,a.Z)(["\n  display: block;\n  position: absolute;\n  top: 0px;\n  left: 333px;\n  width: 8px;\n  height: 8px;\n  background-color: ",";\n  border-radius: 3px;\n  transform: rotate(-25deg);\n\n  @media screen and (min-width: 768px) {\n    top: -38px;\n    left: 694px;\n    width: 14px;\n    height: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    top: -34px;\n    left: 1150px;\n  }\n"])),(function(n){return n.theme.colors.accent})),m=t(184),x=function(n){var e=n.text;return(0,m.jsxs)(u,{children:[(0,m.jsx)(p,{}),(0,m.jsx)(h,{}),(0,m.jsx)(f,{}),(0,m.jsx)(d,{children:e})]})}},4127:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r=t(243),o=t(1413),i=t(2791),c="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;function s(n,e){var t,r,o,s,a=void 0===e?{}:e,l=a.decayRate,u=void 0===l?.95:l,d=a.safeDisplacement,p=void 0===d?10:d,h=a.applyRubberBandEffect,f=void 0!==h&&h,m=a.activeMouseButton,x=void 0===m?"Left":m,g=a.isMounted,w=void 0===g||g,v=(0,i.useRef)({isMouseDown:!1,isDraggingX:!1,isDraggingY:!1,initialMouseX:0,initialMouseY:0,lastMouseX:0,lastMouseY:0,scrollSpeedX:0,scrollSpeedY:0,lastScrollX:0,lastScrollY:0}),b=!1,M=!1,y=0,k=0,Z=1/60*1e3;c((function(){w&&(b="scroll"===window.getComputedStyle(n.current).overflowX,M="scroll"===window.getComputedStyle(n.current).overflowY,y=n.current.scrollWidth-n.current.clientWidth,k=n.current.scrollHeight-n.current.clientHeight,t=window.getComputedStyle(n.current).cursor,r=[],o=[],s=[],n.current.childNodes.forEach((function(n){r.push(window.getComputedStyle(n).cursor),o.push("none"===window.getComputedStyle(n).transform?"":window.getComputedStyle(n).transform),s.push("none"===window.getComputedStyle(n).transition?"":window.getComputedStyle(n).transition)})))}),[w]);var X,Y,S,E=function(){var e=v.current.scrollSpeedX*Z,t=v.current.scrollSpeedY*Z,r=n.current.scrollLeft+e,o=n.current.scrollTop+t;n.current.scrollLeft=r,n.current.scrollTop=o,v.current.lastScrollX=r,v.current.lastScrollY=o},j=function(){n.current.childNodes.forEach((function(n,e){n.style.transform=o[e],n.style.transition=s[e]}))},D=function(n){n.preventDefault(),n.stopImmediatePropagation()},L=function(e){var o=v.current.isDraggingX||v.current.isDraggingY,i=v.current.initialMouseX-e.clientX,c=v.current.initialMouseY-e.clientY,s=Math.abs(i)>p||Math.abs(c)>p,a=o&&s;a?n.current.childNodes.forEach((function(n){n.addEventListener("click",D)})):n.current.childNodes.forEach((function(n){n.removeEventListener("click",D)})),v.current.isMouseDown=!1,v.current.lastMouseX=0,v.current.lastMouseY=0,n.current.style.cursor=t,n.current.childNodes.forEach((function(n,e){n.style.cursor=r[e]})),a&&(Y=setInterval((function(){var e=v.current.scrollSpeedX*u;v.current.scrollSpeedX=e;var t=n.current.scrollLeft<=0,r=n.current.scrollLeft>=y,o=t||r;E(),(Math.abs(e)<.05||v.current.isMouseDown||o)&&(v.current.scrollSpeedX=0,clearInterval(Y))}),Z),S=setInterval((function(){var e=v.current.scrollSpeedY*u;v.current.scrollSpeedY=e;var t=n.current.scrollTop<=0,r=n.current.scrollTop>=k,o=t||r;E(),(Math.abs(e)<.05||v.current.isMouseDown||o)&&(v.current.scrollSpeedY=0,clearInterval(S))}),Z),v.current.isDraggingX=!1,v.current.isDraggingY=!1,f&&(n.current.childNodes.forEach((function(n){n.style.transform="translate3d(0px, 0px, 0px)",n.style.transition="transform 250ms"})),X=setTimeout(j,250)))},T=function(e){if(v.current.isMouseDown){e.preventDefault();var t=v.current.lastMouseX-e.clientX;v.current.lastMouseX=e.clientX,v.current.scrollSpeedX=t/Z,v.current.isDraggingX=!0;var r=v.current.lastMouseY-e.clientY;v.current.lastMouseY=e.clientY,v.current.scrollSpeedY=r/Z,v.current.isDraggingY=!0,n.current.style.cursor="grabbing",n.current.childNodes.forEach((function(n){n.style.cursor="grabbing"}));var o=n.current.scrollLeft<=0&&b,i=n.current.scrollLeft>=y&&b,c=n.current.scrollTop<=0&&M,s=n.current.scrollTop>=k&&M;(o||i||c||s)&&f&&function(e){var t=e.clientX-v.current.initialMouseX,r=e.clientY-v.current.initialMouseY,o=n.current,i=o.clientWidth,c=o.clientHeight,s=0,a=0;b&&M?(s=.3*i*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/i),a=.3*c*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/c)):b?s=.3*i*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/i):M&&(a=.3*c*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/c)),n.current.childNodes.forEach((function(n){n.style.transform="translate3d("+s+"px, "+a+"px, 0px)",n.style.transition="transform 0ms"}))}(e),E()}},P=function(){y=n.current.scrollWidth-n.current.clientWidth,k=n.current.scrollHeight-n.current.clientHeight};return(0,i.useEffect)((function(){return w&&(window.addEventListener("mouseup",L),window.addEventListener("mousemove",T),window.addEventListener("resize",P)),function(){window.removeEventListener("mouseup",L),window.removeEventListener("mousemove",T),window.removeEventListener("resize",P),clearInterval(Y),clearInterval(S),clearTimeout(X)}}),[w]),{events:{onMouseDown:function(n){var e;e=n.buttons,("Left"===x&&1===e||"Middle"===x&&4===e||"Right"===x&&2===e)&&(v.current.isMouseDown=!0,v.current.lastMouseX=n.clientX,v.current.lastMouseY=n.clientY,v.current.initialMouseX=n.clientX,v.current.initialMouseY=n.clientY)}}}}var a,l,u,d,p,h,f,m,x,g=t(168),w=t(4313),v=t(1087),b=w.ZP.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  margin-bottom: 32px;\n  padding: 0 29px;\n  gap: 28px;\n  border-bottom: ",";\n  border-color: #e0e0e0;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 55px;\n    margin-bottom: 50px;\n    padding: 0 30px;\n    border-width: 1px;\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n"])),(function(n){return n.theme.borders.normal})),M=(0,w.ZP)(v.OL)(l||(l=(0,g.Z)(["\n  text-decoration: none;\n  position: relative;\n  display: block;\n  padding: 10px 0 32px;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1;\n  color: ",";\n  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n  &::after {\n    position: absolute;\n    content: '';\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background-color: transparent;\n  }\n  &.active {\n    color: ",";\n    &::after {\n      background-color: ",";\n    }\n  }\n  &.active {\n    color: ",";\n  }\n  &:hover {\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    padding-bottom: 28px;\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.textGray}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),y=t(2816),k=t(9434),Z=t(4994),X=t(184),Y=function(){var n=(0,k.v9)(y.u).categories,e=(0,k.I0)();(0,i.useEffect)((function(){e((0,Z.b)())}),[e]);var t=(0,i.useRef)(),r=s(t).events;return(0,X.jsx)(b,(0,o.Z)((0,o.Z)({},r),{},{ref:t,children:n.length>0&&n.map((function(n){return(0,X.jsx)(M,{to:"/categories/".concat(n.toLowerCase()),children:n},n)}))}))},S=t(7689),E=w.ZP.ul(u||(u=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 28px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 14px;\n    row-gap: 100px;\n  }\n"]))),j=w.ZP.li(d||(d=(0,g.Z)(["\n  overflow: hidden;\n  border-radius: 8px;\n  padding: 0;\n"]))),D=w.ZP.div(p||(p=(0,g.Z)(["\n  position: relative;\n"]))),L=w.ZP.div(h||(h=(0,g.Z)(["\n  position: absolute;\n  left: 18px;\n  bottom: 24px;\n  padding: 16px;\n  width: 307px;\n  background: ",";\n  color: ",";\n  border-radius: 8px;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    left: 16px;\n    width: 300px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 268px;\n  }\n  p {\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.25;\n    letter-spacing: -0.24px;\n    text-align: left;\n  }\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.bgdarkTheme:n.theme.colors.textWhite}),(function(n){return n.theme.darkTheme?n.theme.colors.textWhite:n.theme.colors.bgdarkTheme}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.m})),T=w.ZP.img(f||(f=(0,g.Z)(["\n  width: 343px;\n  height: 323px;\n  object-fit: cover;\n  transition: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 299px;\n    gap: 14px;\n  }\n"])),(function(n){return n.theme.effects.mainEffect})),P=(0,w.ZP)(v.OL)(m||(m=(0,g.Z)(["\n  text-decoration: none;\n"]))),W=function(n){var e=n.recipes;return(0,X.jsx)(E,{children:e&&e.map((function(n){var e=n._id,t=n.title,r=n.thumb;return(0,X.jsx)(j,{children:(0,X.jsx)(P,{to:"/recipe/".concat(e),children:(0,X.jsxs)(D,{children:[(0,X.jsx)(L,{children:(0,X.jsx)("p",{children:t})}),(0,X.jsx)(T,{src:r,loading:"lazy",alt:t})]})})},e)}))})},C=function(){var n=(0,k.v9)(y.d),e=(0,k.I0)(),t=(0,S.UO)().categoryName;return(0,i.useEffect)((function(){e((0,Z.H)(t))}),[e,t]),(0,X.jsx)(X.Fragment,{children:n.length>0&&(0,X.jsx)(W,{recipes:n})})},z=t(3241),I=(0,w.ZP)(z.W)(x||(x=(0,g.Z)(["\n  background-color: ",";\n"])),(function(n){return n.theme.darkTheme?n.theme.colors.bgdarkTheme:n.theme.colors.textWhite})),N=function(){return(0,X.jsxs)(I,{children:[(0,X.jsx)(r.U,{text:"Categories"}),(0,X.jsx)(Y,{}),(0,X.jsx)(C,{})]})}},2816:function(n,e,t){t.d(e,{d:function(){return o},u:function(){return r}});var r=function(n){return n.categories},o=function(n){return n.categories.recipesByCategory}}}]);
//# sourceMappingURL=127.dc2d4245.chunk.js.map