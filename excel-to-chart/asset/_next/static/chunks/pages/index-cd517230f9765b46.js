(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3827)}])},1517:function(e,n,t){"use strict";t.r(n),t.d(n,{Bar:function(){return Bar},__N_SSG:function(){return f},default:function(){return BarChartPage}});var r=t(5893),l=t(7294),a=t(5898),o=t(1828),i=t(2734),s=t(7292),c=t(5861),d=t(8503),u=t(6550),m=t(7475),x=t(143),h=t(2729),f=!0;function BarChartPage(){return(0,r.jsx)(m.Z,{CHART_TYPE:u.y[0],ChartComponent:Bar})}function Bar(e){let{dataset:n,chartOptions:t}=e,u=(0,i.Z)(),m=(0,s.Z)(u.breakpoints.down("sm")),{chartTitle:f,dataColumns:g,dimensionColumn:p,stackColumns:b,sortOption:S,filterOption:j,aggregationOption:y,sampleOption:C,colorStyle:v,chartWidth:Z,marginConfig:k,legendConfig:E,barDirection:F,showGridLine:w,barLabelType:_,axisRange:z,yAxisLabelConfig:I,xAxisLabelConfig:P,xReferenceLineConfig:q}=t,D=(0,x.oy)(),{localDataset:T,localDataColumns:A}=l.useMemo(()=>(0,d.pQ)(n,g,p,S,j,y,C),[n,g,p,S,j,y,C]);if(!p&&!T)return null;let B=x.c3.includes(y.displayMethod)?e=>"".concat(e,"%"):e=>"".concat(e),R=function(e,n,t,r,l,a){if(!e.length)return[];let o=Object.keys(e[0]).filter(e=>e!==r&&n.includes(e)),i=(0,d.Sk)(o.length,l);return o.map((e,n)=>{let r={dataKey:e,label:e,color:i[n],valueFormatter:a};return t.length>=2&&t.includes(e)&&(r.stack=""),r})}(T,A,b,p,v,B),O=buildAxisProps(p,F,z,P,I);return(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(c.Z,{variant:"h6",align:"center",sx:{fontWeight:600,fontSize:"1.2rem",color:"text.primary",mt:1},children:f}),(0,r.jsxs)(a.v,{margin:k,dataset:T,xAxis:["vertical"===F?O.x:O.y],yAxis:["vertical"===F?O.y:O.x],series:R,height:parseInt(u.spacing(m?32:36)),width:Z||D.minChartWidth,layout:F,grid:{vertical:w.vertical,horizontal:w.horizontal},barLabel:(e,n)=>(function(e,n,t,r){switch(e){case 0:default:return"";case 1:var l,a;return x.c3.includes(r.displayMethod)?(null===(l=n.value)||void 0===l?void 0:l.toString())+"%":null===(a=n.value)||void 0===a?void 0:a.toString()}})(_,e,0,y),slotProps:{legend:{hidden:E.hidden,direction:E.direction,position:E.position,padding:E.padding,labelStyle:{fontSize:"small"}}},sx:{"&&":{touchAction:"auto"},[".".concat(o.x.left," .").concat(o.x.label)]:{transform:"translate(".concat(I.x_offset,"px, 0)")},[".".concat(o.x.bottom," .").concat(o.x.label)]:{transform:"translate(0, ".concat(P.y_offset,"px)")}},children:["// 显示水平参考线",!q.hidden&&(0,r.jsx)(h.O,{..."vertical"===F?{y:q.value}:{x:q.value},label:q.labelText,labelStyle:{fontSize:"small"},labelAlign:q.labelAlign,lineStyle:{stroke:q.strokeColor,strokeWidth:1.5,strokeDasharray:"5 5"}})]})]})}let buildAxisProps=(e,n,t,r,l)=>({x:{scaleType:"band",dataKey:e,label:"vertical"===n?r.text:l.text},y:{label:"vertical"===n?l.text:r.text,min:t.min||void 0,max:t.max||void 0,valueFormatter:d.gs}})},3827:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return U},default:function(){return IndexPage}});var r=t(5893),l=t(7294),a=t(7027),o=t(4080),i=t(4253),s=t(5861),c=t(1057),d=t(8456),u=t(9200),m=t(4386),x=t(657),h=t(3946),f=t(6886),g=t(5395),p=t(7440),b=t(8922),S=t(5343),j=t(6235),y=t(4005),C=t(2288),v=t(8808),Z=t(4254);t(1517);var k=t(8503),E=t(948),F=t(7358),w=t(8895),_=t(2797),z=t(3508);let I=(0,E.ZP)(e=>(0,r.jsx)(F.Z,{disableGutters:!0,elevation:0,...e}))(e=>{let{theme:n}=e;return{backgroundColor:"transparent",borderRadius:"8px",border:"1px solid rgba(0, 0, 0, 0.6)",width:"100%",boxSizing:"border-box","& .MuiCollapse-root":{borderTop:"1px solid rgba(0, 0, 0, 0.1)"},"& .MuiAccordionDetails-root":{borderTop:"none"},marginBottom:"12px",transition:"all 0.2s ease-in-out","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.01)"},"&::before":{display:"none"}}}),P=(0,E.ZP)(e=>(0,r.jsx)(w.Z,{expandIcon:(0,r.jsx)(z.Z,{sx:{fontSize:"1.2rem",color:"#666"}}),...e}))(e=>{let{theme:n}=e;return{minHeight:"56px",padding:"0 24px",backgroundColor:"transparent","& .MuiAccordionSummary-content":{margin:"12px 0"},"& .MuiAccordionSummary-expandIconWrapper":{transition:"transform 0.3s ease-in-out"},"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(180deg)"}}}),q=(0,E.ZP)(_.Z)(e=>{let{theme:n}=e;return{padding:"16px 24px 16px",borderTop:"1px solid #F5EDE4",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px",backgroundColor:"#f1e6d0"}}),D=(0,E.ZP)(s.Z)(e=>{let{theme:n}=e;return{fontSize:"0.95rem",fontWeight:500,color:"#0f0f0e","&.content":{color:"#141413",lineHeight:1.6,fontWeight:400,"& p":{margin:0,paddingBottom:"0.5rem",lineHeight:"inherit"},"& ul, & ol":{margin:"0.5em 0",paddingLeft:"1.5rem",listStylePosition:"outside"},"& li":{margin:"0.25em 0",padding:0,fontSize:"inherit",fontWeight:"inherit",color:"inherit",lineHeight:"inherit"},"& ol li::marker":{color:"inherit"},"& ul li::marker":{color:"inherit",fontSize:"0.8em"},"& ul ul, & ol ol, & ul ol, & ol ul":{margin:"0.25em 0"}}}});var components_CustomAccordion=e=>{let{id:n,title:t,content:l,className:a,titleClassName:o,contentClassName:i,expanded:s,onChange:c}=e;return(0,r.jsxs)(I,{className:a,...void 0!==s?{expanded:s}:{},...void 0!==c?{onChange:c}:{},children:[(0,r.jsx)(P,{"aria-controls":"".concat(n,"-content"),id:"".concat(n,"-header"),children:(0,r.jsx)(D,{className:o,children:t})}),(0,r.jsx)(q,{children:(0,r.jsx)(D,{component:"div",className:"content ".concat(i),dangerouslySetInnerHTML:{__html:l}})})]})},T=t(805),A=t(1120),B=t(7068),R=t(143),O=t(8540),M=t(532),L=t(5152),W=t.n(L),N=t(1489);let G={0:l.lazy(()=>Promise.resolve().then(t.bind(t,1517)).then(e=>{let{Bar:n}=e;return{default:n}})),1:l.lazy(()=>Promise.all([t.e(890),t.e(235),t.e(861)]).then(t.bind(t,9861)).then(e=>{let{Line:n}=e;return{default:n}})),2:l.lazy(()=>Promise.all([t.e(625),t.e(948)]).then(t.bind(t,8948)).then(e=>{let{Pie:n}=e;return{default:n}})),3:l.lazy(()=>Promise.all([t.e(290),t.e(759)]).then(t.bind(t,9759)).then(e=>{let{Scatter:n}=e;return{default:n}})),4:l.lazy(()=>Promise.all([t.e(890),t.e(224)]).then(t.bind(t,6224)).then(e=>{let{Combo:n}=e;return{default:n}}))},H=W()(()=>Promise.all([t.e(776),t.e(719)]).then(t.bind(t,1719)),{loadableGenerated:{webpack:()=>[1719]},loading:()=>(0,r.jsx)(k.mm,{}),ssr:!1}),K=W()(()=>Promise.all([t.e(776),t.e(889)]).then(t.bind(t,5889)),{loadableGenerated:{webpack:()=>[5889]},loading:()=>(0,r.jsx)(k.mm,{}),ssr:!1});var U=!0;function IndexPage(){let{t:e}=(0,M.$G)("common");return(0,r.jsx)(a.Z,{url:o.e.url,title:e("index.title"),description:e("index.description"),imageUrl:o.e.logoUrl,MainComponent:IndexComponent})}function IndexComponent(){let{t:e}=(0,M.$G)(["common","faqs","features"]),t_faqs=(n,t)=>e(n,{...t,ns:"faqs"}),t_features=(n,t)=>e(n,{...t,ns:"features"}),[n,t]=l.useState(!1),[a,E]=l.useState(!1),[F,w]=l.useState(!1),[_,z]=l.useState(null),[I,P]=l.useState(null),[q,D]=l.useState(!1),[L,W]=l.useState(!1),[U,X]=l.useState(1),[Q,V]=l.useState(1),[Y,$]=l.useState(null),[J,ee]=l.useState(0);(0,N.G)(),l.useEffect(()=>{let handleFullScreenChange=()=>{W(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",handleFullScreenChange),document.addEventListener("webkitfullscreenchange",handleFullScreenChange),document.addEventListener("mozfullscreenchange",handleFullScreenChange),document.addEventListener("MSFullscreenChange",handleFullScreenChange),()=>{document.removeEventListener("fullscreenchange",handleFullScreenChange),document.removeEventListener("webkitfullscreenchange",handleFullScreenChange),document.removeEventListener("mozfullscreenchange",handleFullScreenChange),document.removeEventListener("MSFullscreenChange",handleFullScreenChange)}},[]);let[en,et]=l.useState({file:{helperText:e("index.select_file_button.text"),error:"",errorParams:{}}}),handleFormStateChange=(e,n)=>{et(t=>({...t,[e]:{...t[e],...n}}))},handleEnterFullScreen=async()=>{if(!L)try{document.documentElement.requestFullscreen?await document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?await document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen?await document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&await document.documentElement.msRequestFullscreen(),W(!0)}catch(e){console.error("Eneter fullscreen failed:",e)}},handleExitFullScreen=async()=>{if(L){X(1);try{document.exitFullscreen?await document.exitFullscreen():document.mozCancelFullScreen?await document.mozCancelFullScreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.msExitFullscreen&&await document.msExitFullscreen(),W(!1)}catch(e){console.error("Exit fullscreen failed:",e)}}},handleFaqsExpandChange=e=>(n,t)=>{$(!!t&&e)},er=(0,Z.Pr)({showSelectChartType:!0,clearChart:()=>P(null)}),{chartType:el,sheetNum:ea,setSheetNum:eo,setAllSheets:ei,backgroundColorValue:es}=er;l.useEffect(()=>{el&&er.handleStyleDefaultOptionsByChartType()},[el]);let{sheetData:ec,isPreLoading:ed,handleSheetRead:eu}=(0,T.U)({onFinish:e=>{console.info("read sheet finished."),ei(e),eo(e.length&&"0"||""),handleOpenDataSelectionOptions()},onError:e=>{handleFormStateChange("file",{error:e}),ei([]),eo("")}}),{excelData:em,isLoading:ex,handleExcelRead:eh}=(0,B.r)({sheetNumber:ea,onFinish:(e,n)=>{console.info("read file finished."),D(!0)},onError:e=>{handleFormStateChange("file",{error:e})}}),handleOpenDataSelectionOptions=()=>t(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{id:"site-introduction","aria-label":"Introduction of ".concat(o.e.name),children:(0,r.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mt:3,mb:3,children:[(0,r.jsx)(s.Z,{component:"h1",sx:{fontSize:{xs:"1.25rem",sm:"1.35rem"},color:"#0f0f0e",fontWeight:"bold"},children:e("index.h1")}),(0,r.jsx)(s.Z,{component:"h2",sx:{fontSize:"1rem",color:"text.secondary",textAlign:"center"},children:e("index.h2")})]})}),(0,r.jsx)("section",{id:"select-excel-file-and-create-chart","aria-label":"Select Excel File and Create Chart",children:(0,r.jsxs)(i.Z,{display:"flex",justifyContent:"center",mb:3,sx:{gap:{xs:2,sm:4},flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center",sm:"stretch"}},children:[(0,r.jsx)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:(0,r.jsx)(k.un,{label:e("index.select_file_button.label"),handleFileChange:e=>{let n=e.target.files[0];n&&(z(n),P(null),handleFormStateChange("file",{helperText:(0,k.yr)(n.name),error:""}),eu(n).then(()=>{e.target.value=""}))},formState:en})}),(0,r.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:[(0,r.jsx)(c.Z,{variant:"outlined",onClick:handleOpenDataSelectionOptions,startIcon:ed||ex?(0,r.jsx)(d.Z,{variant:"indeterminate",size:"1.75rem",thickness:5,disableShrink:!0,sx:{color:"#107c41"}}):(0,r.jsx)(A.dn,{chartType:el,style:{fontSize:"1.75rem"}}),sx:{width:"13rem",height:"3.5rem",fontSize:"1rem",color:"#141413",borderColor:"#141413","&:hover":{color:"#87867f",borderColor:"#87867f"}},children:e("index.configure_button")}),(0,r.jsx)(s.Z,{variant:"caption",sx:{color:"text.secondary",fontSize:{xs:"0.7rem",sm:"0.75rem"},width:"13rem",textAlign:{xs:"center",sm:"center"}},children:e("index.configure_button_text")}),n&&(0,r.jsx)(H,{open:n,handleClose:()=>t(!1),expanded:F,setExpanded:w,chartType:el,chartOptions:er})]}),(0,r.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:[(0,r.jsx)(c.Z,{variant:"contained",onClick:()=>{if(!ex){if(!_){handleFormStateChange("file",{error:"index.select_file_button.no_upload_error"});return}(0,k.xU)(_,handleFormStateChange)&&!en.file.error&&eh(_).then(()=>{let e=G[el];e&&P(e)})}},startIcon:ed||ex?(0,r.jsx)(d.Z,{variant:"indeterminate",size:"1.75rem",color:"inherit",thickness:5,disableShrink:!0}):(0,r.jsx)(p.Z,{style:{fontSize:"1.75rem"}}),sx:{width:"13rem",height:"3.5rem",fontSize:"1rem"},children:e("index.create_button")}),(0,r.jsxs)(i.Z,{onClick:()=>E(!0),sx:{display:"flex",width:"13rem",justifyContent:{xs:"center",sm:"center"},alignItems:"center",cursor:"pointer",transition:"all 0.2s ease-in-out","&:hover":{transform:"translateY(-1px)"}},children:[(0,r.jsx)(g.Z,{sx:{color:"#3d3d3a",fontSize:{xs:"1.25rem",sm:"1.35rem"},marginRight:"0.35rem"}}),(0,r.jsx)(s.Z,{sx:{color:"#3d3d3a",fontSize:{xs:"0.7rem",sm:"0.75rem"},fontWeight:600},children:e("index.customize_style_button")})]}),a&&(0,r.jsx)(K,{open:a,handleClose:()=>E(!1),chartType:el,chartOptions:er,selectedTab:J,setSelectedTab:ee})]})]})}),(0,r.jsxs)("section",{id:"display-created-chart","aria-label":"Display Created Chart",children:[(0,r.jsx)(i.Z,{sx:{display:q&&I?"flex":"none",justifyContent:"flex-end",width:{xs:"100%",sm:"85%",md:"80%"},mr:"auto",ml:"auto",mb:1,gap:1},children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(m.Z,{title:"Enable fullscreen",children:(0,r.jsx)(O.Z,{variant:"outlined",size:"small",children:(0,r.jsx)(c.Z,{onClick:handleEnterFullScreen,"aria-label":"enable fullscreen",sx:{backgroundColor:"#44B678",borderColor:"#44B678","&:hover":{backgroundColor:"#3da66c",borderColor:"#3da66c"},color:"white"},children:(0,r.jsx)(S.Z,{})})})}),(0,r.jsx)(k.JV,{backgroundColorValue:es,chartScale:Q,setChartScale:V})]})}),(0,r.jsxs)(i.Z,{justifyContent:"center",alignItems:"center",mb:3,sx:{display:q&&I?"flex":"none",flexDirection:"column",mr:"auto",ml:"auto",bgcolor:R.bI[es].hex,width:{xs:"100%",sm:"85%",md:"80%"},alignItems:"flex-start",padding:"1rem",borderRadius:"0.25rem",transition:"box-shadow 0.3s ease","&:hover":{boxShadow:"0 0.25rem 0.75rem rgba(45, 130, 89, 0.12)"},overflowX:"auto",WebkitOverflowScrolling:"touch","&::-webkit-scrollbar":{height:{xs:"0.75rem",sm:"0.95rem"},backgroundColor:"#f5f5f5"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#8e8e8e",borderRadius:"0.625rem","&:hover":{backgroundColor:"#747474"}},"&::-webkit-scrollbar-track":{backgroundColor:"#f5f5f5",borderRadius:"0.625rem"},..."transparent"===R.bI[es].hex&&{backgroundImage:"\n                            linear-gradient(45deg, rgba(200, 200, 200, 0.3) 25%, transparent 25%, transparent 75%, rgba(200, 200, 200, 0.3) 75%),\n                            linear-gradient(-45deg, rgba(200, 200, 200, 0.3) 25%, transparent 25%, transparent 75%, rgba(200, 200, 200, 0.3) 75%)\n                          ",backgroundSize:"16px 16px"}},children:[L&&(0,r.jsx)(x.Z,{fullScreen:!0,open:L,onClose:()=>W(!1),PaperProps:{style:{backgroundColor:"#F1E6D0"}},children:(0,r.jsxs)("div",{style:{position:"relative",width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsxs)(i.Z,{sx:{position:"absolute",top:"1rem",right:"1rem",display:"flex",gap:2,zIndex:1},children:[(0,r.jsx)(m.Z,{title:"Zoom out",children:(0,r.jsx)(h.Z,{onClick:()=>{X(e=>Math.max(e-.25,.25))},disabled:U<=.5,"aria-label":"zoom out",children:(0,r.jsx)(C.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})}),(0,r.jsx)(m.Z,{title:"Zoom in",children:(0,r.jsx)(h.Z,{onClick:()=>{X(e=>Math.min(e+.25,3))},disabled:U>=3,"aria-label":"zoom in",children:(0,r.jsx)(y.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})}),(0,r.jsx)(m.Z,{title:"Exit fullscreen",children:(0,r.jsx)(h.Z,{onClick:handleExitFullScreen,"aria-label":"exit fullscreen",children:(0,r.jsx)(j.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})})]}),(0,r.jsx)("div",{id:"chart-container-fullscreen",style:{transform:"scale(".concat(U,")"),transition:"transform 0.3s ease"},children:I&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(I,{dataset:em,chartOptions:er})})})]})}),(0,r.jsx)("div",{id:"chart-container",children:em.length>0&&I&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(I,{dataset:em,chartOptions:er})})})]})]}),(0,r.jsx)("section",{id:"exceltochart-key-features","aria-label":"ExcelToChart Key Features",children:(0,r.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:3,sx:{bgcolor:"#EBDBBC",borderRadius:"0.25rem",padding:"1rem",mr:"auto",ml:"auto",width:{xs:"100%",sm:"85%",md:"80%"}},children:[(0,r.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,r.jsx)(b.Z,{sx:{fontSize:{xs:"1.75rem",sm:"1.95rem"},color:"#141413",opacity:.9}}),(0,r.jsx)(s.Z,{component:"h3",sx:{color:"#0f0f0e",fontWeight:500,fontSize:{xs:"1.15rem",sm:"1.25rem"},textAlign:"center"},children:e("index.key_features_title",{name:o.e.name})})]}),(0,r.jsx)(i.Z,{display:"flex",justifyContent:"center",sx:{alignItems:{xs:"center",sm:"stretch"}},children:(0,r.jsx)(f.ZP,{container:!0,spacing:3,sx:{py:2,px:{xs:2,sm:3}},children:k.t8.map((e,n)=>(0,r.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(k.Ue,{feature:{...e,title:t_features("features.".concat(n,".title")),info:t_features("features.".concat(n,".info"))}})},n))})})]})}),(0,r.jsx)("section",{id:"faqs-info","aria-label":"FAQs",children:(0,r.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:3,sx:{bgcolor:"#EBDBBC",borderRadius:"0.25rem",padding:"1rem",mr:"auto",ml:"auto",width:{xs:"100%",sm:"85%",md:"80%"}},children:[(0,r.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:1},children:[(0,r.jsx)(v.Z,{sx:{fontSize:{xs:"1.75rem",sm:"1.95rem"},color:"#141413",opacity:.9}}),(0,r.jsx)(s.Z,{component:"h3",sx:{color:"#0f0f0e",fontWeight:500,fontSize:{xs:"1.15rem",sm:"1.25rem"},textAlign:"center"},children:e("index.faqs_title")})]}),(0,r.jsx)(i.Z,{display:"flex",justifyContent:"center",sx:{alignItems:{xs:"center",sm:"stretch"}},children:(0,r.jsx)(f.ZP,{container:!0,sx:{py:2,px:{xs:2,sm:3}},children:k.Ei.map((e,n)=>(0,r.jsx)(components_CustomAccordion,{id:"faqs-panel".concat(n),title:t_faqs("faqs.".concat(n,".").concat(e.questionKey)),content:t_faqs("faqs.".concat(n,".").concat(e.answerKey)),expanded:Y==="faqs-panel".concat(n),onChange:handleFaqsExpandChange("faqs-panel".concat(n))},n))})})]})})]})}}},function(e){e.O(0,[242,181,876,209,908,475,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);