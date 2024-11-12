"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{2961:function(e,t,i){var o=i(4836);t.Z=void 0;var r=o(i(4938)),n=i(5893);t.Z=(0,r.default)((0,n.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},2450:function(e,t,i){var o=i(4836);t.Z=void 0;var r=o(i(4938)),n=i(5893);t.Z=(0,r.default)((0,n.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff")},2180:function(e,t,i){i.d(t,{Z:function(){return h}});var o=i(7462),r=i(3366),n=i(7294),l=i(512),a=i(8510),s=i(948),c=i(8628),d=i(1977),u=i(5463);function getAccordionActionsUtilityClass(e){return(0,u.ZP)("MuiAccordionActions",e)}(0,d.Z)("MuiAccordionActions",["root","spacing"]);var p=i(5893);let m=["className","disableSpacing"],useUtilityClasses=e=>{let{classes:t,disableSpacing:i}=e;return(0,a.Z)({root:["root",!i&&"spacing"]},getAccordionActionsUtilityClass,t)},f=(0,s.ZP)("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,!i.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",variants:[{props:e=>!e.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),g=n.forwardRef(function(e,t){let i=(0,c.i)({props:e,name:"MuiAccordionActions"}),{className:n,disableSpacing:a=!1}=i,s=(0,r.Z)(i,m),d=(0,o.Z)({},i,{disableSpacing:a}),u=useUtilityClasses(d);return(0,p.jsx)(f,(0,o.Z)({className:(0,l.Z)(u.root,n),ref:t,ownerState:d},s))});var h=g},889:function(e,t,i){i.r(t),i.d(t,{default:function(){return SudokuHintDisplay}});var o=i(5893),r=i(7294),n=i(2734),l=i(4558),a=i(2280),s=i(8895),c=i(5861),d=i(2797),u=i(5616),p=i(2180),m=i(9417),f=i(3508),g=i(948);let h=(0,g.ZP)(u.Z,{shouldForwardProp:e=>"isPrefilled"!==e&&"isHighlighted"!==e&&"isRightEdge"!==e&&"isBottomEdge"!==e&&"scaleFactor"!==e})(e=>{let{theme:t,isPrefilled:i,isHighlighted:o,isRightEdge:r,isBottomEdge:n,scaleFactor:l}=e;return{width:"".concat(3*l,"rem"),height:"".concat(3*l,"rem"),display:"flex",justifyContent:"center",alignItems:"center",fontSize:"".concat(1.7999999999999998*l,"rem"),fontWeight:"bold",backgroundColor:i?"#E6E6E6":o?"#FFDA00":"white",color:"black",borderRight:r?"".concat(.2*l,"rem solid #959595"):"".concat(.5*l,"px solid #959595"),borderBottom:n?"".concat(.2*l,"rem solid #959595"):"".concat(.5*l,"px solid #959595"),boxSizing:"border-box"}}),v=(0,g.ZP)(u.Z,{shouldForwardProp:e=>"scaleFactor"!==e})(e=>{let{scaleFactor:t}=e;return{width:"".concat(27*t,"rem"),height:"".concat(27*t,"rem"),display:"grid",gridTemplateColumns:"repeat(9, 1fr)",gridTemplateRows:"repeat(9, 1fr)",position:"relative",boxSizing:"content-box",border:"".concat(.2*t,"rem solid black")}}),x=r.forwardRef((e,t)=>{let{puzzle:i,solution:n,isLargeScreenDevice:l}=e,[a,s]=(0,r.useState)("initial"),[c,d]=(0,r.useState)([]),u=l?.9:.55;(0,r.useEffect)(()=>{let e=i.map((e,t)=>3>Math.floor(t/9)&&t%9<3&&0===e?n[t]:e);d(e)},[i,n]),r.useImperativeHandle(t,()=>({displayPuzzle,displaySolution}));let displayPuzzle=()=>{s("puzzle"),d([...i])},displaySolution=()=>{s("solution"),d([...n])};return(0,o.jsx)(v,{scaleFactor:u,children:c.map((e,t)=>{let r=Math.floor(t/9),n=t%9,l=0!==i[t];return(0,o.jsx)(h,{isPrefilled:l,isHighlighted:!l&&0!==e&&("initial"!==a||r<3&&n<3),isRightEdge:(n+1)%3==0&&8!==n,isBottomEdge:(r+1)%3==0&&8!==r,scaleFactor:u,children:0!==e?e:""},t)})})});var b=i(2450),y=i(2961);let Z=["#f9df6d","#f7da21","#FB9B00"];var SudokuHintDisplay=function(e){let{responseData:t}=e,i=["easy","medium","hard"],[g,h]=r.useState(i.map(()=>!1)),v=r.useRef(i.map(()=>r.createRef())),z=(0,n.Z)(),S=(0,l.Z)(z.breakpoints.up("sm")),displayPuzzle=e=>{v.current[e]&&v.current[e].current&&v.current[e].current.displayPuzzle()},displaySolution=e=>{v.current[e]&&v.current[e].current&&v.current[e].current.displaySolution()},handleHintToggleVisibility=e=>{h(t=>{let i=!t[e];return i?displaySolution(e):displayPuzzle(e),t.map((t,o)=>o===e?i:t)})};return(0,o.jsx)(o.Fragment,{children:i.map((e,i)=>{var r,n,l,h,z,j;return(0,o.jsxs)(a.Z,{slotProps:{transition:{unmountOnExit:!0}},sx:{backgroundColor:Z[i],"&.Mui-expanded":{backgroundColor:Z[i]},borderRadius:"0.75rem !important",boxShadow:"0 0.25rem 0.375rem rgba(0, 0, 0, 0.08) !important","&:before":{display:"none"},"& .MuiCollapse-root":{borderBottomLeftRadius:"0.75rem",borderBottomRightRadius:"0.75rem"}},children:[(0,o.jsx)(s.Z,{expandIcon:(0,o.jsx)(f.Z,{}),id:"panel".concat(i+1,"-header"),"aria-controls":"panel".concat(i+1,"-content"),children:(0,o.jsxs)(c.Z,{sx:{fontWeight:500,fontSize:{xs:"1rem",sm:"1.1rem"}},children:[S?"Click":"Tap"," for a hint: ",e.charAt(0).toUpperCase()+e.slice(1)," puzzle"]})}),(0,o.jsx)(d.Z,{children:(0,o.jsx)(u.Z,{children:(0,o.jsx)(x,{ref:v.current[i],puzzle:null==t?void 0:null===(l=t.gameData)||void 0===l?void 0:null===(n=l[e])||void 0===n?void 0:null===(r=n.puzzle_data)||void 0===r?void 0:r.puzzle,solution:null==t?void 0:null===(j=t.gameData)||void 0===j?void 0:null===(z=j[e])||void 0===z?void 0:null===(h=z.puzzle_data)||void 0===h?void 0:h.solution,isLargeScreenDevice:S})})}),(0,o.jsx)(p.Z,{children:(0,o.jsx)(m.Z,{variant:"outlined",startIcon:g[i]?(0,o.jsx)(b.Z,{}):(0,o.jsx)(y.Z,{}),onClick:()=>handleHintToggleVisibility(i),children:g[i]?"Hide Answers":"Reveal Answers"})})]},i)})})}}}]);