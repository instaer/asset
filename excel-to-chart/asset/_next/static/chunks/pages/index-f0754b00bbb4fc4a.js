(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3827)}])},1517:function(e,t,n){"use strict";n.r(t),n.d(t,{Bar:function(){return Bar},default:function(){return BarChartPage}});var r=n(5893),l=n(7294),o=n(746),i=n(1828),a=n(2734),s=n(7292),c=n(4033),d=n(6550),u=n(7475);function BarChartPage(){return(0,r.jsx)(u.Z,{CHART_TYPE:d.y[0],ChartComponent:Bar})}function Bar(e){let{dataset:t,chartOptions:n}=e,d=(0,a.Z)(),u=(0,s.Z)(d.breakpoints.down("sm")),{dataColumns:m,dimensionColumn:x,stackColumns:h,colorStyle:f,chartWidth:p,marginConfig:g,legendConfig:y,barDirection:b,showGridLine:j,barLabelType:C,axisRange:v,yAxisLabelConfig:S,xAxisLabelConfig:Z}=n,w=l.useMemo(()=>(0,c.pQ)(t,m,x),[t,m,x]);if(!x)return null;let F=function(e,t,n,r,l,o){let i=(0,c.Sk)(e.length,l),a=Object.keys(e[0]).filter(e=>e!==r&&t.includes(e));return a.map((e,t)=>{let r={dataKey:e,label:e,color:i[t],valueFormatter:void 0};return n.length>=2&&n.includes(e)&&(r.stack=""),r})}(t,m,h,x,f),E=buildAxisProps(x,b,v,Z,S);return(0,r.jsx)(o.v,{margin:g,dataset:w,xAxis:["vertical"===b?E.x:E.y],yAxis:["vertical"===b?E.y:E.x],series:F,height:parseInt(d.spacing(u?32:36)),width:p,layout:b,grid:"vertical"===b?{horizontal:j}:{vertical:j},barLabel:(e,t)=>(function(e,t,n){switch(e){case 0:default:return"";case 1:var r;return null===(r=t.value)||void 0===r?void 0:r.toString()}})(C,e,0),slotProps:{legend:{hidden:y.hidden,direction:y.direction,position:y.position,padding:y.padding}},sx:{"&&":{touchAction:"auto"},[".".concat(i.x.left," .").concat(i.x.label)]:{transform:"translate(".concat(S.x_offset,"px, 0)")},[".".concat(i.x.bottom," .").concat(i.x.label)]:{transform:"translate(0, ".concat(Z.y_offset,"px)")}}})}let buildAxisProps=(e,t,n,r,l)=>{let o={x:{scaleType:"band",dataKey:e,label:r.text},y:{label:l.text,valueFormatter:c.gs}};if(n){let e="vertical"===t?"y":"x";o[e]={...o[e],min:n.min,max:n.max||void 0}}return o}},3827:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return IndexPage}});var r=n(5893),l=n(7294),o=n(7027),i=n(4080),a=n(6550),s=n(2734),c=n(4253),d=n(5861),u=n(315),m=n(9840),x=n(9417),h=n(8456),f=n(4386),p=n(3946),g=n(657),y=n(6886),b=n(4229),j=n(7440),C=n(2177),v=n(5498),S=n(5343),Z=n(6235),w=n(4005),F=n(2288),E=n(9217),k=n(9606),z=n(4254);n(1517);var I=n(4033),A=n(948),P=n(2280),T=n(8895),D=n(2797),_=n(3508);let B=(0,A.ZP)(e=>(0,r.jsx)(P.Z,{disableGutters:!0,elevation:0,...e}))(e=>{let{theme:t}=e;return{backgroundColor:"transparent",borderRadius:"8px",border:"1px solid rgba(0, 0, 0, 0.6)","& .MuiCollapse-root":{borderTop:"1px solid rgba(0, 0, 0, 0.1)"},"& .MuiAccordionDetails-root":{borderTop:"none"},marginBottom:"12px",transition:"all 0.2s ease-in-out","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.01)"},"&::before":{display:"none"}}}),L=(0,A.ZP)(e=>(0,r.jsx)(T.Z,{expandIcon:(0,r.jsx)(_.Z,{sx:{fontSize:"1.2rem",color:"#666"}}),...e}))(e=>{let{theme:t}=e;return{minHeight:"56px",padding:"0 24px",backgroundColor:"transparent","& .MuiAccordionSummary-content":{margin:"12px 0"},"& .MuiAccordionSummary-expandIconWrapper":{transition:"transform 0.3s ease-in-out"},"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(180deg)"}}}),O=(0,A.ZP)(D.Z)(e=>{let{theme:t}=e;return{padding:"16px 24px 24px",borderTop:"1px solid rgba(0, 0, 0, 0.08)",backgroundColor:"rgba(0, 0, 0, 0.01)"}}),R=(0,A.ZP)(d.Z)(e=>{let{theme:t}=e;return{fontSize:"0.95rem",fontWeight:500,color:"#141413","&.content":{color:"#3d3d3a",lineHeight:1.6,fontWeight:400,"& p":{margin:0,padding:0,lineHeight:"inherit"},"& ul, & ol":{margin:"0.5em 0",paddingLeft:"1.5em",listStylePosition:"outside"},"& li":{margin:"0.25em 0",padding:0,fontSize:"inherit",fontWeight:"inherit",color:"inherit",lineHeight:"inherit"},"& ol li::marker":{color:"inherit"},"& ul li::marker":{color:"inherit",fontSize:"0.8em"},"& ul ul, & ol ol, & ul ol, & ol ul":{margin:"0.25em 0"}}}});var components_CustomAccordion=e=>{let{id:t,title:n,content:l,className:o,titleClassName:i,contentClassName:a}=e;return(0,r.jsxs)(B,{className:o,children:[(0,r.jsx)(L,{"aria-controls":"".concat(t,"-content"),id:"".concat(t,"-header"),children:(0,r.jsx)(R,{className:i,children:n})}),(0,r.jsx)(O,{children:(0,r.jsx)(R,{component:"div",className:"content ".concat(a),dangerouslySetInnerHTML:{__html:l}})})]})},M=n(9434);let q={0:l.lazy(()=>Promise.resolve().then(n.bind(n,1517)).then(e=>{let{Bar:t}=e;return{default:t}})),1:l.lazy(()=>Promise.all([n.e(200),n.e(861)]).then(n.bind(n,9861)).then(e=>{let{Line:t}=e;return{default:t}})),2:l.lazy(()=>Promise.all([n.e(625),n.e(948)]).then(n.bind(n,8948)).then(e=>{let{Pie:t}=e;return{default:t}})),3:l.lazy(()=>Promise.all([n.e(290),n.e(759)]).then(n.bind(n,9759)).then(e=>{let{Scatter:t}=e;return{default:t}}))},W=l.lazy(()=>Promise.all([n.e(776),n.e(889)]).then(n.bind(n,5889)));function IndexPage(){return(0,r.jsx)(o.Z,{url:i.e.url,title:i.e.title,description:i.e.description,imageUrl:i.e.logoUrl,MainComponent:()=>(0,r.jsx)(IndexComponent,{})})}function IndexComponent(){(0,s.Z)();let[e,t]=l.useState(""),[n,o]=l.useState(!1),[A,P]=l.useState(null),[T,D]=l.useState(null),[_,B]=l.useState(!1),[L,O]=l.useState(!1),[R,H]=l.useState(1);l.useEffect(()=>{let handleFullScreenChange=()=>{O(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",handleFullScreenChange),document.addEventListener("webkitfullscreenchange",handleFullScreenChange),document.addEventListener("mozfullscreenchange",handleFullScreenChange),document.addEventListener("MSFullscreenChange",handleFullScreenChange),()=>{document.removeEventListener("fullscreenchange",handleFullScreenChange),document.removeEventListener("webkitfullscreenchange",handleFullScreenChange),document.removeEventListener("mozfullscreenchange",handleFullScreenChange),document.removeEventListener("MSFullscreenChange",handleFullScreenChange)}},[]);let[N,Y]=l.useState({file:{helperText:"Support .xlsx, .xls and .csv format.",error:""},chartType:{helperText:"Choose a chart type for your data.",error:""}}),handleFormStateChange=(e,t)=>{Y(n=>({...n,[e]:{...n[e],...t}}))},handleEnterFullScreen=async()=>{if(!L)try{document.documentElement.requestFullscreen?await document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?await document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen?await document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&await document.documentElement.msRequestFullscreen(),O(!0)}catch(e){console.error("Eneter fullscreen failed:",e)}},handleExitFullScreen=async()=>{if(L){H(1);try{document.exitFullscreen?await document.exitFullscreen():document.mozCancelFullScreen?await document.mozCancelFullScreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.msExitFullscreen&&await document.msExitFullscreen(),O(!1)}catch(e){console.error("Exit fullscreen failed:",e)}}},U=(0,z.P)(e),{setAllColumns:Q}=U;l.useEffect(()=>{e&&U.handleChartTypeDefaultOptions()},[e]);let{excelData:X,sheetInfo:G,isLoading:K,handleExcelRead:V}=(0,M._)({onFinish:(e,t)=>{console.info("read file finished."),B(!0),Q(Object.keys(e[0]))},onError:e=>{handleFormStateChange("file",{error:e})}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{id:"site-introduction","aria-label":"Introduction of ".concat(i.e.name),children:(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mt:3,mb:3,children:[(0,r.jsx)(d.Z,{component:"h1",sx:{fontSize:{xs:"1.25rem",sm:"1.35rem"},color:"#0f0f0e",fontWeight:"bold"},children:i.e.h1}),(0,r.jsx)(d.Z,{component:"h2",sx:{fontSize:"1rem",color:"text.secondary",textAlign:"center"},children:i.e.h2})]})}),(0,r.jsx)("section",{id:"file-and-chart-selection","aria-label":"Select Excel File, Chart Type, and Create Chart",children:(0,r.jsxs)(c.Z,{display:"flex",justifyContent:"center",mb:3,sx:{gap:{xs:2,sm:4},flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center",sm:"stretch"}},children:[(0,r.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:(0,r.jsx)(I.un,{handleFileChange:e=>{let t=e.target.files[0];t&&(P(t),D(null),handleFormStateChange("file",{helperText:(0,I.yr)(t.name),error:null}),(0,I.xU)(t,handleFormStateChange)&&V(t).then(),e.target.value="")},formState:N})}),(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:[(0,r.jsxs)(u.Z,{id:"chart-type-select",value:e,onChange:e=>{t(e.target.value),D(null),handleFormStateChange("chartType",{error:null})},displayEmpty:!0,"aria-label":"Select Chart Type",sx:{width:"13rem",height:"3.5rem",fontSize:"1rem"},children:[(0,r.jsx)(m.Z,{value:"",disabled:!0,children:"Select Chart Type"}),a.y.map(e=>(0,r.jsx)(m.Z,{value:e.index,children:e.name},e.name))]}),(0,r.jsx)(d.Z,{variant:"caption",sx:{color:N.chartType.error?"error.main":"text.secondary",fontSize:{xs:"0.7rem",sm:"0.75rem"},width:"13rem",textAlign:{xs:"center",sm:"center"}},children:N.chartType.error||N.chartType.helperText})]}),(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",sm:"flex-start"},gap:1},children:[(0,r.jsx)(x.Z,{variant:"contained",onClick:()=>{if(K)return;if(!A){handleFormStateChange("file",{error:"Please select an Excel file."});return}if(!e){handleFormStateChange("chartType",{error:"Select a chart type to continue."});return}if(!(0,I.xU)(A,handleFormStateChange))return;let t=q[e];t&&D(t)},startIcon:K?(0,r.jsx)(h.Z,{variant:"indeterminate",size:"1.75rem",color:"inherit",thickness:5,disableShrink:!0}):(0,r.jsx)(j.Z,{style:{fontSize:"1.75rem"}}),sx:{width:"13rem",height:"3.5rem",fontSize:"1rem"},children:"Create"}),(0,r.jsxs)(c.Z,{onClick:()=>o(!0),sx:{display:"flex",width:"13rem",justifyContent:{xs:"center",sm:"center"},alignItems:"center",cursor:"pointer",transition:"all 0.2s ease-in-out","&:hover":{transform:"translateY(-1px)"}},children:[(0,r.jsx)(b.Z,{sx:{color:"text.secondary",fontSize:{xs:"1.25rem",sm:"1.35rem"},marginRight:"0.35rem"}}),(0,r.jsx)(d.Z,{variant:"caption",sx:{color:"text.secondary",fontSize:{xs:"0.7rem",sm:"0.75rem"}},children:"Advanced Options"})]}),n&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(I.mm,{}),children:(0,r.jsx)(W,{open:n,handleClose:()=>o(!1),chartType:e,chartOptions:U})})]})]})}),(0,r.jsxs)("section",{id:"display-created-chart","aria-label":"Display Created Chart",children:[(0,r.jsxs)(c.Z,{sx:{display:_&&T?"flex":"none",justifyContent:"flex-end",width:{xs:"100%",sm:"85%",md:"80%"},mr:"auto",ml:"auto",mb:1,gap:1},children:[(0,r.jsx)(f.Z,{title:"Enable fullscreen",children:(0,r.jsx)(p.Z,{onClick:handleEnterFullScreen,sx:{backgroundColor:"rgba(242, 247, 245, 0.8)","&:hover":{backgroundColor:"rgba(242, 247, 245, 1.0)"}},"aria-label":"enable fullscreen",children:(0,r.jsx)(S.Z,{})})}),(0,r.jsx)(f.Z,{title:"Save as image",children:(0,r.jsx)(p.Z,{onClick:I.cS,sx:{backgroundColor:"rgba(242, 247, 245, 0.8)","&:hover":{backgroundColor:"rgba(242, 247, 245, 1.0)"}},"aria-label":"save as image",children:(0,r.jsx)(C.Z,{})})})]}),(0,r.jsxs)(c.Z,{justifyContent:"center",alignItems:"center",mb:3,sx:{display:_&&T?"flex":"none",flexDirection:"column",mr:"auto",ml:"auto",bgcolor:"#F1E6D0",width:{xs:"100%",sm:"85%",md:"80%"},alignItems:"flex-start",padding:"1rem",borderRadius:"0.25rem",transition:"box-shadow 0.3s ease","&:hover":{boxShadow:"0 0.25rem 0.75rem rgba(45, 130, 89, 0.12)"},overflowX:"auto",WebkitOverflowScrolling:"touch","&::-webkit-scrollbar":{height:{xs:"0.75rem",sm:"0.95rem"},backgroundColor:"#f5f5f5"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#8e8e8e",borderRadius:"0.625rem","&:hover":{backgroundColor:"#747474"}},"&::-webkit-scrollbar-track":{backgroundColor:"#f5f5f5",borderRadius:"0.625rem"}},children:[L&&(0,r.jsx)(g.Z,{fullScreen:!0,open:L,onClose:()=>O(!1),PaperProps:{style:{backgroundColor:"#F1E6D0"}},children:(0,r.jsxs)("div",{style:{position:"relative",width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsxs)(c.Z,{sx:{position:"absolute",top:"1rem",right:"1rem",display:"flex",gap:2,zIndex:1},children:[(0,r.jsx)(f.Z,{title:"Zoom out",children:(0,r.jsx)(p.Z,{onClick:()=>{H(e=>Math.max(e-.25,.25))},disabled:R<=.5,"aria-label":"zoom out",children:(0,r.jsx)(F.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})}),(0,r.jsx)(f.Z,{title:"Zoom in",children:(0,r.jsx)(p.Z,{onClick:()=>{H(e=>Math.min(e+.25,3))},disabled:R>=3,"aria-label":"zoom in",children:(0,r.jsx)(w.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})}),(0,r.jsx)(f.Z,{title:"Exit fullscreen",children:(0,r.jsx)(p.Z,{onClick:handleExitFullScreen,"aria-label":"exit fullscreen",children:(0,r.jsx)(Z.Z,{sx:{fontSize:{xs:"1.5rem",sm:"2rem"}}})})})]}),(0,r.jsx)("div",{id:"chart-container-fullscreen",style:{transform:"scale(".concat(R,")"),transition:"transform 0.3s ease"},children:T&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(T,{dataset:X,chartOptions:U})})})]})}),(0,r.jsx)("div",{id:"chart-container",children:T&&(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(T,{dataset:X,chartOptions:U})})})]})]}),(0,r.jsx)("section",{id:"chart-types-info","aria-label":"Chart Types Information and Links",children:(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:3,sx:{bgcolor:"#EBDBBC",borderRadius:"0.25rem",padding:"1rem",mr:"auto",ml:"auto",width:{xs:"100%",sm:"85%",md:"80%"}},children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,r.jsx)(v.Z,{sx:{fontSize:{xs:"1.75rem",sm:"1.95rem"},color:"#0f0f0e",opacity:.9}}),(0,r.jsx)(d.Z,{component:"h3",sx:{color:"#0f0f0e",fontWeight:500,fontSize:{xs:"1.15rem",sm:"1.25rem"},textAlign:"center"},children:"Available Excel to Chart Types"})]}),(0,r.jsx)(c.Z,{display:"flex",justifyContent:"center",sx:{alignItems:{xs:"center",sm:"stretch"}},children:(0,r.jsx)(y.ZP,{container:!0,spacing:3,sx:{py:2,px:{xs:2,sm:3}},children:a.y.map(e=>(0,r.jsx)(y.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(I.wD,{chart:e})},e.index))})})]})}),(0,r.jsx)("section",{id:"tips-and-best-practices-info","aria-label":"Tips and Best Practices",children:(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:3,sx:{bgcolor:"#EBDBBC",borderRadius:"0.25rem",padding:"1rem",mr:"auto",ml:"auto",width:{xs:"100%",sm:"85%",md:"80%"}},children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:1},children:[(0,r.jsx)(E.Z,{sx:{fontSize:{xs:"1.75rem",sm:"1.95rem"},color:"#0f0f0e",opacity:.9}}),(0,r.jsx)(d.Z,{component:"h3",sx:{color:"#0f0f0e",fontWeight:500,fontSize:{xs:"1.15rem",sm:"1.25rem"},textAlign:"center"},children:"Tips & Best Practices"})]}),(0,r.jsx)(c.Z,{display:"flex",justifyContent:"center",sx:{alignItems:{xs:"center",sm:"stretch"}},children:(0,r.jsxs)(y.ZP,{container:!0,sx:{py:2,px:{xs:2,sm:3}},children:[(0,r.jsx)(components_CustomAccordion,{id:"tips-panel1",title:"Advanced Options for Real-time Preview",content:'"Advanced Options" dialog under the "Create" button to modify default chart settings. All changes provide instant preview. Drag the dialog header to move it away from the chart area for better visualization of your adjustments.'}),(0,r.jsx)(components_CustomAccordion,{id:"tips-panel2",title:"Optimizing Chart Layout for Complex Data",content:'For excel files with extensive data, increase the "Chart Width" value in "Advanced Options" to prevent overcrowding. If legend overlaps with chart elements, adjust "Legend Settings" including "Layout Direction" and "Horizontal Alignment" for better presentation.'}),(0,r.jsx)(components_CustomAccordion,{id:"tips-panel3",title:"Fullscreen Mode & Interactive Features",content:"View charts in fullscreen mode, perfect for presentations and large displays. Zoom in/out functionality is available in fullscreen view. Hover over data points to display tooltips with detailed information."})]})})]})}),(0,r.jsx)("section",{id:"faqs-info","aria-label":"FAQs",children:(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:3,sx:{bgcolor:"#EBDBBC",borderRadius:"0.25rem",padding:"1rem",mr:"auto",ml:"auto",width:{xs:"100%",sm:"85%",md:"80%"}},children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:1},children:[(0,r.jsx)(k.Z,{sx:{fontSize:{xs:"1.75rem",sm:"1.95rem"},color:"#0f0f0e",opacity:.9}}),(0,r.jsx)(d.Z,{component:"h3",sx:{color:"#0f0f0e",fontWeight:500,fontSize:{xs:"1.15rem",sm:"1.25rem"},textAlign:"center"},children:"FAQs"})]}),(0,r.jsx)(c.Z,{display:"flex",justifyContent:"center",sx:{alignItems:{xs:"center",sm:"stretch"}},children:(0,r.jsxs)(y.ZP,{container:!0,sx:{py:2,px:{xs:2,sm:3}},children:[(0,r.jsx)(components_CustomAccordion,{id:"faqs-panel1",title:"Is my Excel file and data secure when using this tool?",content:"Yes, absolutely. Our tool processes your Excel file entirely in your browser - no data is ever uploaded to our servers. The file parsing and chart generation happen locally on your device, ensuring complete privacy and security of your sensitive data."}),(0,r.jsx)(components_CustomAccordion,{id:"faqs-panel2",title:"What is a Dimension Column and how do I choose one?",content:"<p>A Dimension Column is used to categorize or group your data in charts. Good candidates for dimension columns include:</p><ul><li>Category/Label columns (e.g., regions, product categories)</li><li>Time-based columns (e.g., years, quarters)</li><li>Any column you want to use for grouping your data analysis</li></ul><p>Choose your dimension column based on how you want to analyze and visualize your data. For example, if you want to compare sales across regions, select the region column as your dimension.</p>"}),(0,r.jsx)(components_CustomAccordion,{id:"faqs-panel3",title:"Why isn't my chart displaying correctly?",content:'<p>If your chart isn\'t displaying properly, check these common issues:</p><ul><li>Ensure your data format is correct (e.g., for bar charts, Y-axis columns should contain numerical values)</li><li>By default, the tool uses all columns from the first sheet of your Excel file</li><li>The first column is set as the default dimension column</li><li>You can adjust these settings through the "Data Columns" and "Dimension Column" options available in "Advanced Options"</li></ul>'})]})})]})})]})}}},function(e){e.O(0,[908,746,704,475,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);