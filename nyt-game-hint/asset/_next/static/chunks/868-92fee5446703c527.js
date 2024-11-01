"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{3094:function(e,t,r){var i=r(4836);t.Z=void 0;var n=i(r(4938)),a=r(5893);t.Z=(0,n.default)((0,a.jsx)("path",{d:"M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2"}),"QuestionMark")},9217:function(e,t,r){var i=r(4836);t.Z=void 0;var n=i(r(4938)),a=r(5893);t.Z=(0,n.default)((0,a.jsx)("path",{d:"M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"}),"TipsAndUpdates")},6886:function(e,t,r){r.d(t,{ZP:function(){return w}});var i=r(3366),n=r(7462),a=r(7294),s=r(512),o=r(5408),l=r(9707),u=r(8510),p=r(948),c=r(8628),f=r(2734);let d=a.createContext();var m=r(1977),g=r(5463);function getGridUtilityClass(e){return(0,g.ZP)("MuiGrid",e)}let x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=(0,m.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...x.map(e=>`grid-xs-${e}`),...x.map(e=>`grid-sm-${e}`),...x.map(e=>`grid-md-${e}`),...x.map(e=>`grid-lg-${e}`),...x.map(e=>`grid-xl-${e}`)]);var h=r(5893);let b=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function getOffset(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function extractZeroValueBreakpointKeys({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(e=>{""===r&&0!==t[e]&&(r=e)});let i=Object.keys(e).sort((t,r)=>e[t]-e[r]);return i.slice(0,i.indexOf(r))}let v=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{container:i,direction:n,item:a,spacing:s,wrap:o,zeroMinWidth:l,breakpoints:u}=r,p=[];i&&(p=function(e,t,r={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]];let i=[];return t.forEach(t=>{let n=e[t];Number(n)>0&&i.push(r[`spacing-${t}-${String(n)}`])}),i}(s,u,t));let c=[];return u.forEach(e=>{let i=r[e];i&&c.push(t[`grid-${e}-${String(i)}`])}),[t.root,i&&t.container,a&&t.item,l&&t.zeroMinWidth,...p,"row"!==n&&t[`direction-xs-${String(n)}`],"wrap"!==o&&t[`wrap-xs-${String(o)}`],...c]}})(({ownerState:e})=>(0,n.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let r=(0,o.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,o.k9)({theme:e},r,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${$.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:r,rowSpacing:i}=t,n={};if(r&&0!==i){let t;let r=(0,o.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=extractZeroValueBreakpointKeys({breakpoints:e.breakpoints.values,values:r})),n=(0,o.k9)({theme:e},r,(r,i)=>{var n;let a=e.spacing(r);return"0px"!==a?{marginTop:`-${getOffset(a)}`,[`& > .${$.item}`]:{paddingTop:getOffset(a)}}:null!=(n=t)&&n.includes(i)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return n},function({theme:e,ownerState:t}){let{container:r,columnSpacing:i}=t,n={};if(r&&0!==i){let t;let r=(0,o.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=extractZeroValueBreakpointKeys({breakpoints:e.breakpoints.values,values:r})),n=(0,o.k9)({theme:e},r,(r,i)=>{var n;let a=e.spacing(r);return"0px"!==a?{width:`calc(100% + ${getOffset(a)})`,marginLeft:`-${getOffset(a)}`,[`& > .${$.item}`]:{paddingLeft:getOffset(a)}}:null!=(n=t)&&n.includes(i)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return n},function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((i,a)=>{let s={};if(t[a]&&(r=t[a]),!r)return i;if(!0===r)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let l=(0,o.P$)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"==typeof l?l[a]:l;if(null==u)return i;let p=`${Math.round(r/u*1e8)/1e6}%`,c={};if(t.container&&t.item&&0!==t.columnSpacing){let r=e.spacing(t.columnSpacing);if("0px"!==r){let e=`calc(${p} + ${getOffset(r)})`;c={flexBasis:e,maxWidth:e}}}s=(0,n.Z)({flexBasis:p,flexGrow:0,maxWidth:p},c)}return 0===e.breakpoints.values[a]?Object.assign(i,s):i[e.breakpoints.up(a)]=s,i},{})}),useUtilityClasses=e=>{let{classes:t,container:r,direction:i,item:n,spacing:a,wrap:s,zeroMinWidth:o,breakpoints:l}=e,p=[];r&&(p=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let r=[];return t.forEach(t=>{let i=e[t];if(Number(i)>0){let e=`spacing-${t}-${String(i)}`;r.push(e)}}),r}(a,l));let c=[];l.forEach(t=>{let r=e[t];r&&c.push(`grid-${t}-${String(r)}`)});let f={root:["root",r&&"container",n&&"item",o&&"zeroMinWidth",...p,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==s&&`wrap-xs-${String(s)}`,...c]};return(0,u.Z)(f,getGridUtilityClass,t)},k=a.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiGrid"}),{breakpoints:o}=(0,f.Z)(),u=(0,l.Z)(r),{className:p,columns:m,columnSpacing:g,component:x="div",container:$=!1,direction:k="row",item:w=!1,rowSpacing:S,spacing:Z=0,wrap:y="wrap",zeroMinWidth:M=!1}=u,N=(0,i.Z)(u,b),W=S||Z,L=g||Z,O=a.useContext(d),j=$?m||12:O,C={},z=(0,n.Z)({},N);o.keys.forEach(e=>{null!=N[e]&&(C[e]=N[e],delete z[e])});let G=(0,n.Z)({},u,{columns:j,container:$,direction:k,item:w,rowSpacing:W,columnSpacing:L,wrap:y,zeroMinWidth:M,spacing:Z},C,{breakpoints:o.keys}),E=useUtilityClasses(G);return(0,h.jsx)(d.Provider,{value:j,children:(0,h.jsx)(v,(0,n.Z)({ownerState:G,className:(0,s.Z)(E.root,p),as:x,ref:t},z))})});var w=k}}]);