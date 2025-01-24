(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3827)}])},1517:function(e,n,t){"use strict";t.r(n),t.d(n,{Bar:function(){return Bar},default:function(){return BarChartPage}});var r=t(5893),l=t(7294),o=t(5898),a=t(1828),i=t(2734),s=t(7292),c=t(8503),d=t(6550),m=t(7475),u=t(143);function BarChartPage(){return(0,r.jsx)(m.Z,{CHART_TYPE:d.y[0],ChartComponent:Bar})}function Bar(e){let{dataset:n,chartOptions:t}=e,d=(0,i.Z)(),m=(0,s.Z)(d.breakpoints.down("sm")),{dataColumns:x,dimensionColumn:h,stackColumns:f,sortOption:p,aggregationOption:g,sampleOption:b,colorStyle:j,chartWidth:C,marginConfig:S,legendConfig:y,barDirection:v,showGridLine:Z,barLabelType:k,axisRange:E,yAxisLabelConfig:F,xAxisLabelConfig:w}=t,{localDataset:z,localDataColumns:I}=l.useMemo(()=>(0,c.pQ)(n,x,h,p,g,b),[n,x,h,p,g,b]);if(!h)return null;let P=u.c3.includes(g.displayMethod)?e=>"".concat(e,"%"):e=>"".concat(e),T=function(e,n,t,r,l,o){let a=Object.keys(e[0]).filter(e=>e!==r&&n.includes(e)),i=(0,c.Sk)(a.length,l);return a.map((e,n)=>{let r={dataKey:e,label:e,color:i[n],valueFormatter:o};return t.length>=2&&t.includes(e)&&(r.stack=""),r})}(z,I,f,h,j,P),A=buildAxisProps(h,v,E,w,F);return(0,r.jsx)(o.v,{margin:S,dataset:z,xAxis:["vertical"===v?A.x:A.y],yAxis:["vertical"===v?A.y:A.x],series:T,height:parseInt(d.spacing(m?32:36)),width:C,layout:v,grid:"vertical"===v?{horizontal:Z}:{vertical:Z},barLabel:(e,n)=>(function(e,n,t,r){switch(e){case 0:default:return"";case 1:var l,o;return u.c3.includes(r.displayMethod)?(null===(l=n.value)||void 0===l?void 0:l.toString())+"%":null===(o=n.value)||void 0===o?void 0:o.toString()}})(k,e,0,g),slotProps:{legend:{hidden:y.hidden,direction:y.direction,position:y.position,padding:y.padding}},sx:{"&&":{touchAction:"auto"},[".".concat(a.x.left," .").concat(a.x.label)]:{transform:"translate(".concat(F.x_offset,"px, 0)")},[".".concat(a.x.bottom," .").concat(a.x.label)]:{transform:"translate(0, ".concat(w.y_offset,"px)")}}})}let buildAxisProps=(e,n,t,r,l)=>{let o={x:{scaleType:"band",dataKey:e,label:"vertical"===n?r.text:l.text},y:{label:"vertical"===n?l.text:r.text,valueFormatter:c.gs}};if(t){let e="vertical"===n?"y":"x";o[e]={...o[e],min:t.min||void 0,max:t.max||void 0}}return o}},3827:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return IndexPage}});var r=t(5893),l=t(7294),o=t(7027),a=t(4080),i=t(2734),s=t(4253),c=t(5861),d=t(9417),m=t(8456),u=t(4386),x=t(3946),h=t(657),f=t(6886),p=t(5395),g=t(7440),b=t(2177),j=t(8922),C=t(5343),S=t(6235),y=t(4005),v=t(2288),Z=t(8808),k=t(4254);t(1517);var E=t(8503),F=t(948),w=t(2280),z=t(8895),I=t(2797),P=t(3508);let T=(0,F.ZP)(e=>(0,r.jsx)(w.Z,{disableGutters:!0,elevation:0,...e}))(e=>{let{theme:n}=e;return{backgroundColor:"transparent",borderRadius:"8px",border:"1px solid rgba(0, 0, 0, 0.6)",width:"100%",boxSizing:"border-box","& .MuiCollapse-root":{borderTop:"1px solid rgba(0, 0, 0, 0.1)"},"& .MuiAccordionDetails-root":{borderTop:"none"},marginBottom:"12px",transition:"all 0.2s ease-in-out","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.01)"},"&::before":{display:"none"}}}),A=(0,F.ZP)(e=>(0,r.jsx)(z.Z,{expandIcon:(0,r.jsx)(P.Z,{sx:{fontSize:"1.2rem",color:"#666"}}),...e}))(e=>{let{theme:n}=e;return{minHeight:"56px",padding:"0 24px",backgroundColor:"transparent","& .MuiAccordionSummary-content":{margin:"12px 0"},"& .MuiAccordionSummary-expandIconWrapper":{transition:"transform 0.3s ease-in-out"},"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(180deg)"}}}),D=(0,F.ZP)(I.Z)(e=>{let{theme:n}=e;return{padding:"16px 24px 16px",borderTop:"1px solid #F5EDE4",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px",backgroundColor:"#f1e6d0"}}),_=(0,F.ZP)(c.Z)(e=>{let{theme:n}=e;return{fontSize:"0.95rem",fontWeight:500,color:"#0f0f0e","&.content":{color:"#141413",lineHeight:1.6,fontWeight:400,"& p":{margin:0,paddingBottom:"0.5rem",lineHeight:"inherit"},"& ul, & ol":{margin:"0.5em 0",paddingLeft:"1.5rem",listStylePosition:"outside"},"& li":{margin:"0.25em 0",padding:0,fontSize:"inherit",fontWeight:"inherit",color:"inherit",lineHeight:"inherit"},"& ol li::marker":{color:"inherit"},"& ul li::marker":{color:"inherit",fontSize:"0.8em"},"& ul ul, & ol ol, & ul ol, & ol ul":{margin:"0.25em 0"}}}});var components_CustomAccordion=e=>{let{id:n,title:t,content:l,className:o,titleClassName:a,contentClassName:i,expanded:s,onChange:c}=e;return(0,r.jsxs)(T,{className:o,...void 0!==s?{expanded:s}:{},...void 0!==c?{onChange:c}:{},children:[(0,r.jsx)(A,{"aria-controls":"".concat(n,"-content"),id:"".concat(n,"-header"),children:(0,r.jsx)(_,{className:a,children:t})}),(0,r.jsx)(D,{children:(0,r.jsx)(_,{component:"div",className:"content ".concat(i),dangerouslySetInnerHTML:{__html:l}})})]})},B=t(805),R=t(1120),q=t(7068),M=t(143);let O={0:l.lazy(()=>Promise.resolve().then(t.bind(t,1517)).then(e=>{let{Bar:n}=e;return{default:n}})),1:l.lazy(()=>Promise.all([t.e(536),t.e(235),t.e(861)]).then(t.bind(t,9861)).then(e=>{let{Line:n}=e;return{default:n}})),2:l.lazy(()=>Promise.all([t.e(625),t.e(948)]).then(t.bind(t,8948)).then(e=>{let{Pie:n}=e;return{default:n}})),3:l.lazy(()=>Promise.all([t.e(290),t.e(759)]).then(t.bind(t,9759)).then(e=>{let{Scatter:n}=e;return{default:n}})),4:l.lazy(()=>Promise.all([t.e(536),t.e(224)]).then(t.bind(t,6224)).then(e=>{let{Combo:n}=e;return{default:n}}))},L=l.lazy(()=>Promise.all([t.e(776),t.e(719)]).then(t.bind(t,1719))),W=l.lazy(()=>Promise.all([t.e(776),t.e(889)]).then(t.bind(t,5889)));function IndexPage(){return(0,r.jsx)(o.Z,{url:a.e.url,title:a.e.title,description:a.e.description,imageUrl:a.e.logoUrl,MainComponent:()=>(0,r.jsx)(IndexComponent,{})})}function IndexComponent(){(0,i.Z)();let[e,n]=l.useState(!1),[t,o]=l.useState(!1),[F,w]=l.useState(null),[z,I]=l.useState(null),[P,T]=l.useState(!1),[A,D]=l.useState(!1),[_,N]=l.useState(1),[H,U]=l.useState(null),[Q,X]=l.useState(0);l.useEffect(()=>{let handleFullScreenChange=()=>{D(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",handleFullScreenChange),document.addEventListener("webkitfullscreenchange",handleFullScreenChange),document.addEventListener("mozfullscreenchange",handleFullScreenChange),document.addEventListener("MSFullscreenChange",handleFullScreenChange),()=>{document.removeEventListener("fullscreenchange",handleFullScreenChange),document.removeEventListener("webkitfullscreenchange",handleFullScreenChange),document.removeEventListener("mozfullscreenchange",handleFullScreenChange),document.removeEventListener("MSFullscreenChange",handleFullScreenChange)}},[]);let[K,Y]=l.useState({file:{helperText:"Support .xlsx, .xls and .csv format.",error:""}}),handleFormStateChange=(e,n)=>{Y(t=>({...t,[e]:{...t[e],...n}}))},handleEnterFullScreen=async()=>{if(!A)try{document.documentElement.requestFullscreen?await document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?await document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen?await document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&await document.documentElement.msRequestFullscreen(),D(!0)}catch(e){console.error("Eneter fullscreen failed:",e)}},handleExitFullScreen=async()=>{if(A){N(1);try{document.exitFullscreen?await document.exitFullscreen():document.mozCancelFullScreen?await document.mozCancelFullScreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.msExitFullscreen&&await document.msExitFullscreen(),D(!1)}catch(e){console.error("Exit fullscreen failed:",e)}}},handleFaqsExpandChange=e=>(n,t)=>{U(!!t&&e)},G=(0,k.Pr)({showSelectChartType:!0,clearChart:()=>I(null)}),{chartType:J,sheetNum:V,setSheetNum:$,setAllSheets:ee,backgroundColorValue:en}=G;l.useEffect(()=>{J&&G.handleStyleDefaultOptionsByChartType()},[J]);let{sheetData:et,isPreLoading:er,handleSheetRead:el}=(0,B.U)({onFinish:e=>{console.info("read sheet finished."),ee(e),$(e.length&&"0"||""),handleOpenDataSelectionOptions()},onError:e=>{handleFormStateChange("file",{error:e}),ee([]),$("")}}),{excelData:eo,isLoading:ea,handleExcelRead:ei}=(0,q.r)({sheetNumber:V,onFinish:(e,n)=>{console.info("read file finished."),T(!0)},onError:e=>{handleFormStateChange("file",{error:e})}}),handleOpenDataSelectionOptions=()=>n(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{id:"site-introduction","aria-label":"Introduction of ".concat(a.e.name),children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mt:3,mb:3,children:[(0,r.jsx)(c.Z,{component:"h1",sx:{fontSize:{xs:"1.25rem",sm:"1.35rem"},color:"#0f0f0e",fontWeight:"bold"},children:a.e.h1}),(0,r.jsx)(c.Z,{component:"h2",sx:{fontSize:"1rem",color:"text.secondary",textAlign:"center"},children:a.e.h2})]})}),(0,r.jsx)("section",{id:"file-and-chart-selection","aria-label":"Select Excel File, Chart Type, and Create Chart",children:(0,r.jsxs)(s.Z,{display:"flex",justifyContent:"center",mb:3,sx:{gap:{xs:2,sm:4},flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center",sm:"stretch"}},children:[(0,r.jsx)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:(0,r.jsx)(E.un,{handleFileChange:e=>{let n=e.target.files[0];n&&(w(n),I(null),handleFormStateChange("file",{helperText:(0,E.yr)(n.name),error:null}),el(n).then(()=>{e.target.value=""}))},formState:K})}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:[(0,r.jsx)(d.Z,{variant:"outlined",onClick:handleOpenDataSelectionOptions,startIcon:er||ea?(0,r.jsx)(m.Z,{variant:"indeterminate",size:"1.75rem",color:"inherit",thickness:5,disableShrink:!0}):(0,r.jsx)(R.dn,{chartType:J,style:{fontSize:"1.75rem"}}),sx:{width:"13rem",height:"3.5rem",fontSize:"1rem",color:"#107c41",borderColor:"rgba(0, 0, 0, 0.23)","&:hover":{borderColor:"rgba(0, 0, 0, 0.87)",backgroundColor:"rgba(0, 0, 0, 0.04)"},"&:active":{borderColor:"primary.main",borderWidth:2},"&:focus":{borderColor:"primary.main",borderWidth:2}},children:"Configure Chart"}),(0,r.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary",fontSize:{xs:"0.7rem",sm:"0.75rem"},width:"13rem",textAlign:{xs:"center",sm:"center"}},children:"Click to customize data selection."}),e&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(E.mm,{}),children:(0,r.jsx)(L,{open:e,handleClose:()=>n(!1),chartType:J,chartOptions:G})})]}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:[(0,r.jsx)(d.Z,{variant:"contained",onClick:()=>{if(!ea){if(!F){handleFormStateChange("file",{error:"Please select an Excel file."});return}(0,E.xU)(F,handleFormStateChange)&&!K.file.error&&ei(F).then(()=>{let e=O[J];e&&I(e)})}},startIcon:er||ea?(0,r.jsx)(m.Z,{variant:"indeterminate",size:"1.75rem",color:"inherit",thickness:5,disableShrink:!0}):(0,r.jsx)(g.Z,{style:{fontSize:"1.75rem"}}),sx:{width:"13rem",height:"3.5rem",fontSize:"1rem"},children:"Create"}),(0,r.jsxs)(s.Z,{onClick:()=>o(!0),sx:{display:"flex",width:"13rem",justifyContent:{xs:"center",sm:"center"},alignItems:"center",cursor:"pointer",transition:"all 0.2s ease-in-out","&:hover":{transform:"translateY(-1px)"}},children:[(0,r.jsx)(p.Z,{sx:{color:"text.secondary",fontSize:{xs:"1.25rem",sm:"1.35rem"},marginRight:"0.35rem"}}),(0,r.jsx)(c.Z,{variant:"caption",sx:{color:"text.secondary",fontSize:{xs:"0.7rem",sm:"0.75rem"},fontWeight:600},children:"Customize Style"})]}),t&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(E.mm,{}),children:(0,r.jsx)(W,{open:t,handleClose:()=>o(!1),chartType:J,chartOptions:G,selectedTab:Q,setSelectedTab:X})})]})]})}),(0,r.jsxs)("section",{id:"display-created-chart","aria-label":"Display Created Chart",children:[(0,r.jsxs)(s.Z,{sx:{display:P&&z?"flex":"none",justifyContent:"flex-end",width:{xs:"100%",sm:"85%",md:"80%"},mr:"auto",ml:"auto",mb:1,gap:1},children:[(0,r.jsx)(u.Z,{title:"Enable fullscreen",children:(0,r.jsx)(x.Z,{onClick:handleEnterFullScreen,sx:{backgroundColor:"rgba(242, 247, 245, 0.8)","&:hover":{backgroundColor:"rgba(242, 247, 245, 1.0)"}},"aria-label":"enable fullscreen",children:(0,r.jsx)(C.Z,{})})}),(0,r.jsx)(u.Z,{title:"Save as image",children:(0,r.jsx)(x.Z,{onClick:()=>(0,E.cS)(M.bI[en].hex),sx:{backgroundColor:"rgba(242, 247, 245, 0.8)","&:hover":{backgroundColor:"rgba(242, 247, 245, 1.0)"}},"aria-label":"save as image",children:(0,r.jsx)(b.Z,{})})})]}),(0,r.jsxs)(s.Z,{justifyContent:"center",alignItems:"center",mb:3,sx:{display:P&&z?"flex":"none",flexDirection:"column",mr:"auto",ml:"auto",bgcolor:M.bI[en].hex,width:{xs:"100%",sm:"85%",md:"80%"},alignItems:"flex-start",padding:"1rem",borderRadius:"0.25rem",transition:"box-shadow 0.3s ease","&:hover":{boxShadow:"0 0.25rem 0.75rem rgba(45, 130, 89, 0.12)"},overflowX:"auto",WebkitOverflowScrolling:"touch","&::-webkit-scrollbar":{height:{xs:"0.75rem",sm:"0.95rem"},backgroundColor:"#f5f5f5"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#8e8e8e",borderRadius:"0.625rem","&:hover":{backgroundColor:"#747474"}},"&::-webkit-scrollbar-track":{backgroundColor:"#f5f5f5",borderRadius:"0.625rem"}},children:[A&&(0,r.jsx)(h.Z,{fullScreen:!0,open:A,onClose:()=>D(!1),PaperProps:{style:{backgroundColor:"#F1E6D0"}},children:(0,r.jsxs)("div",{style:{position:"relative",width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsxs)(s.Z,{sx:{position:"absolute",top:"1rem",right:"1rem",display:"flex",gap:2,zIndex:1},children:[(0,r.jsx)(u.Z,{title:"Zoom out",children:(0,r.jsx)(x.Z,{onClick:()=>{N(e=>Math.max(e-.25,.25))},disabled:_<=.5,"aria-label":"zoom out",children:(0,r.jsx)(v.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})}),(0,r.jsx)(u.Z,{title:"Zoom in",children:(0,r.jsx)(x.Z,{onClick:()=>{N(e=>Math.min(e+.25,3))},disabled:_>=3,"aria-label":"zoom in",children:(0,r.jsx)(y.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})}),(0,r.jsx)(u.Z,{title:"Exit fullscreen",children:(0,r.jsx)(x.Z,{onClick:handleExitFullScreen,"aria-label":"exit fullscreen",children:(0,r.jsx)(S.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})})]}),(0,r.jsx)("div",{id:"chart-container-fullscreen",style:{transform:"scale(".concat(_,")"),transition:"transform 0.3s ease"},children:z&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(z,{dataset:eo,chartOptions:G})})})]})}),(0,r.jsx)("div",{id:"chart-container",children:eo.length>0&&z&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(z,{dataset:eo,chartOptions:G})})})]})]}),(0,r.jsx)("section",{id:"excel-to-chart-features","aria-label":"Excel To Chart All Features",children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:3,sx:{bgcolor:"#EBDBBC",borderRadius:"0.25rem",padding:"1rem",mr:"auto",ml:"auto",width:{xs:"100%",sm:"85%",md:"80%"}},children:[(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,r.jsx)(j.Z,{sx:{fontSize:{xs:"1.75rem",sm:"1.95rem"},color:"#141413",opacity:.9}}),(0,r.jsx)(c.Z,{component:"h3",sx:{color:"#0f0f0e",fontWeight:500,fontSize:{xs:"1.15rem",sm:"1.25rem"},textAlign:"center"},children:"Excel To Chart Features"})]}),(0,r.jsx)(s.Z,{display:"flex",justifyContent:"center",sx:{alignItems:{xs:"center",sm:"stretch"}},children:(0,r.jsx)(f.ZP,{container:!0,spacing:3,sx:{py:2,px:{xs:2,sm:3}},children:E.t8.map((e,n)=>(0,r.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(E.Ue,{feature:e})},n))})})]})}),(0,r.jsx)("section",{id:"faqs-info","aria-label":"FAQs",children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:3,sx:{bgcolor:"#EBDBBC",borderRadius:"0.25rem",padding:"1rem",mr:"auto",ml:"auto",width:{xs:"100%",sm:"85%",md:"80%"}},children:[(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:1},children:[(0,r.jsx)(Z.Z,{sx:{fontSize:{xs:"1.75rem",sm:"1.95rem"},color:"#141413",opacity:.9}}),(0,r.jsx)(c.Z,{component:"h3",sx:{color:"#0f0f0e",fontWeight:500,fontSize:{xs:"1.15rem",sm:"1.25rem"},textAlign:"center"},children:"FAQs"})]}),(0,r.jsx)(s.Z,{display:"flex",justifyContent:"center",sx:{alignItems:{xs:"center",sm:"stretch"}},children:(0,r.jsx)(f.ZP,{container:!0,sx:{py:2,px:{xs:2,sm:3}},children:E.Ei.map((e,n)=>(0,r.jsx)(components_CustomAccordion,{id:"faqs-panel".concat(n),title:e.question,content:e.answer,expanded:H==="faqs-panel".concat(n),onChange:handleFaqsExpandChange("faqs-panel".concat(n))},n))})})]})})]})}}},function(e){e.O(0,[986,181,876,898,498,475,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);