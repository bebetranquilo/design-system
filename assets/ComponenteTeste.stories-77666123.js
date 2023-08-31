import{r as g,R as h}from"./index-e03f90b5.js";import"./_commonjsHelpers-725317a4.js";var x={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function T(){if(O)return o;O=1;var c=h,p=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,f=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function _(a,r,d){var e,s={},l=null,y=null;d!==void 0&&(l=""+d),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(y=r.ref);for(e in r)t.call(r,e)&&!u.hasOwnProperty(e)&&(s[e]=r[e]);if(a&&a.defaultProps)for(e in r=a.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:p,type:a,key:l,ref:y,props:s,_owner:f.current}}return o.Fragment=i,o.jsx=_,o.jsxs=_,o}x.exports=T();var b=x.exports;const L="_botao_wngsi_2",N={botao:L},m={HOVERED:"hovered",NORMAL:"normal"};function j({page:c,children:p}){const[i,t]=g.useState(m.NORMAL),f=()=>{t(m.HOVERED)},u=()=>{t(m.NORMAL)};return console.log(i),b.jsx("a",{className:N.botao,href:c||"#",onMouseEnter:f,onMouseLeave:u,children:p})}const k={title:"Data display/Avatar",component:j,args:{page:"lala",children:"lala"},argTypes:{src:{control:{type:"text"}}}},n={};var E,v,R;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const w=["Primary"];export{n as Primary,w as __namedExportsOrder,k as default};
//# sourceMappingURL=ComponenteTeste.stories-77666123.js.map
