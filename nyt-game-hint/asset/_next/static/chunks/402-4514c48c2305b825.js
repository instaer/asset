"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402],{6748:function(e,n,t){t.r(n);var a=t(5893),i=t(7294),s=t(2280),r=t(8895),l=t(5861),o=t(2797),d=t(1233),c=t(7918),h=t(2180),u=t(9417),m=t(3508),p=t(3094),x=t(2450),g=t(2961);n.default=function(e){var n,t,y,j;let{responseData:f,isLargeScreenDevice:w}=e,[b,Z]=i.useState(null===(n=f.gameData)||void 0===n?void 0:n.categories.map(()=>!1)),[v,k]=i.useState(null===(t=f.gameData)||void 0===t?void 0:t.categories.map(e=>e.cards.map(()=>!1))),handleHintToggleVisibility=e=>{Z(n=>{let t=!n[e];return k(n=>n.map((n,a)=>a===e?n.map(()=>t):n)),n.map((n,a)=>a===e?t:n)})},handleWordHintToggleVisibility=(e,n)=>{k(t=>{let a=t.map((t,a)=>a===e?t.map((e,t)=>t===n?!e:e):t),i=a[e].every(e=>!0===e),s=a[e].every(e=>!1===e);return Z(n=>n.map((n,t)=>t===e?!!i||!s&&n:n)),a})};return(0,a.jsx)(a.Fragment,{children:null===(j=f.gameData)||void 0===j?void 0:null===(y=j.categories)||void 0===y?void 0:y.map((e,n)=>(0,a.jsxs)(s.Z,{sx:{backgroundColor:"#e6e6e6","&.Mui-expanded":{backgroundColor:"#e6e6e6"}},children:[(0,a.jsx)(r.Z,{expandIcon:(0,a.jsx)(m.Z,{}),id:"panel".concat(n+1,"-header"),"aria-controls":"panel".concat(n+1,"-content"),children:(0,a.jsxs)(l.Z,{children:[w?"Click":"Tap"," to reveal Group ",n+1]})}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{fontWeight:"bold",sx:{display:"flex",alignItems:"center",mb:2},children:e.title}),(0,a.jsx)(d.Z,{spacing:1,direction:"row",useFlexGap:!0,flexWrap:"wrap",children:null==e?void 0:e.cards.map((e,t)=>v[n][t]?(0,a.jsx)(c.Z,{label:e.content,size:"medium",sx:{fontWeight:"bold"},onClick:()=>handleWordHintToggleVisibility(n,t)},t):(0,a.jsx)(c.Z,{label:(0,a.jsx)(p.Z,{fontSize:"small",sx:{color:"#FFFFFF"}}),size:"medium",onClick:()=>handleWordHintToggleVisibility(n,t)},t))})]}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(u.Z,{variant:"outlined",startIcon:b[n]?(0,a.jsx)(x.Z,{}):(0,a.jsx)(g.Z,{}),onClick:()=>handleHintToggleVisibility(n),children:b[n]?"Hide Answers":"Reveal Answers"})})]},n))})}},6402:function(e,n,t){t.r(n),t.d(n,{Connections:function(){return Connections},__N_SSP:function(){return z},default:function(){return ConnectionsPage}});var a=t(5893),i=t(4993),s=t(4080),r=t(366),l=t(7294),o=t(6950),d=t(2734),c=t(4558),h=t(1233),u=t(5616),m=t(5861),p=t(1519),x=t(480),g=t(9653),y=t(9417),j=t(2280),f=t(8895),w=t(2797),b=t(8456),Z=t(7285),v=t(3508),k=t(9217),D=t(2761),C=t(3328),S=t(3890),T=t(9606),I=t(586),W=t(720),F=t(7610),H=t(7484),A=t.n(H),N=t(1221),Y=t(6748),_=t(5152),M=t.n(_);let P=o.K[0],q=[{q:"What can ".concat(P.title," do?"),a:"View today's ".concat(P.name," hints, reveal puzzle answers progressively, and access an archive of past ").concat(P.name," hints.")},{q:"When do ".concat(P.title," update?"),a:'Hints refresh daily, typically just after midnight Eastern Time, syncing with <a style="color:#006BD6;font-weight:500;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(P.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(P.name," Puzzle</a>. The update process usually takes only a few minutes. Check back if not immediately available.")},{q:"Is there a cost for ".concat(P.title,"?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(P.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(P.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(P.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(P.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var z=!0;function ConnectionsPage(e){let{latestData:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{url:s.e.url+P.url,title:P.pageTitle,description:P.description,keywords:P.keywords,imageUrl:s.e.logoUrl}),(0,a.jsx)(i.Z,{selectedTabValue:P.index,TabComponent:()=>(0,a.jsx)(Connections,{tab:P,latestData:n})})]})}function Connections(e){var n,t,i;let{tab:s,latestData:r}=e,[o,b]=l.useState(null),[H,Y]=l.useState(null),[_,M]=l.useState(null),[P,z]=l.useState({loading:!1,error:null,data:{}}),[L,V]=l.useState(!0),B=(0,d.Z)(),Q=(0,c.Z)(B.breakpoints.up("sm"));l.useEffect(()=>{let e=new Date,n=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),t=new Date(n);t.setFullYear(n.getFullYear()-1),b(A()(t))},[]);let G=l.useMemo(()=>{switch(_){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[_]),formatSearchDate=e=>e?A()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(z(e=>({...e,loading:!0})),!H){z({loading:!1,error:"Please select a date to view hints",data:{}});return}if(_){z({loading:!1,error:G,data:{}});return}let e={gameType:s.gameType,printDate:formatSearchDate(H),timestamp:Date.now()},{encryptedContent:n,encryptedAesKey:t}=await (0,N.K)(JSON.stringify(e)),{result:a,error:i}=await (0,Z.D2)("api/nyt-game-hint/search",{json:n,key:t});if(i){z({loading:!1,error:null==i?void 0:i.message,data:{}});return}let r=await (0,N.h)(null==a?void 0:a.body.json,null==a?void 0:a.body.key);if(a.body.gameData=JSON.parse(r),!a.body.gameData||(null==a?void 0:a.body.gameData.length)===0){z({loading:!1,error:"No hints found for this date",data:{}});return}z({loading:!1,error:null,data:null==a?void 0:a.body})};return(0,a.jsxs)(h.Z,{spacing:1,children:[(0,a.jsx)("header",{children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,a.jsx)(m.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:s.title}),(0,a.jsx)(m.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:s.subTitle}),(0,a.jsx)(h.Z,{spacing:2,sx:{width:"100%",[B.breakpoints.up("sm")]:{width:"80%"},[B.breakpoints.up("md")]:{width:"55%"}},children:(0,a.jsx)(p.Z,{})})]})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-today",children:(null===(n=r.gameData)||void 0===n?void 0:n.hintContent)&&(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[B.breakpoints.up("sm")]:{width:"80%"},[B.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(m.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(C.Z,{sx:{mr:1}}),"Hints for ",r.printDate]}),(0,a.jsxs)(u.Z,{sx:{backgroundColor:"#f9df6d",padding:1,borderRadius:"4px 4px 0 0",boxShadow:1,overflow:"hidden"},children:[(0,a.jsx)(x.Z,{control:(0,a.jsx)(g.Z,{checked:L,onChange:e=>{V(e.target.checked)},inputProps:{"aria-label":"controlled"}}),label:(0,a.jsx)(m.Z,{sx:{fontWeight:"bold"},children:L?"Expert Mode":"Beginner Mode"}),labelPlacement:"start"}),(0,a.jsx)(m.Z,{component:"div",dangerouslySetInnerHTML:{__html:L?null===(t=r.gameData)||void 0===t?void 0:t.proHintContent:null===(i=r.gameData)||void 0===i?void 0:i.hintContent}})]}),(0,a.jsx)(p.Z,{})]})})}),(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-answer-today",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[B.breakpoints.up("sm")]:{width:"80%"},[B.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(m.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(k.Z,{sx:{mr:1}}),"Hinted Answers: Peek or Reveal"]}),(0,a.jsx)(E,{responseData:r,isLargeScreenDevice:Q}),(0,a.jsx)(p.Z,{})]})})}),(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-archive-search",children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[B.breakpoints.up("sm")]:{width:"80%"},[B.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(m.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(S.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,a.jsxs)(h.Z,{direction:"row",spacing:1,children:[(0,a.jsx)(u.Z,{sx:{width:"75%"},children:(0,a.jsx)(W._,{dateAdapter:I.y,children:(0,a.jsx)(F.M,{label:"Select a date within the last year",value:H,onChange:e=>Y(e),minDate:o,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>M(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,a.jsx)(u.Z,{sx:{width:"25%"},children:(0,a.jsx)(y.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:P.loading,children:(0,a.jsx)(D.Z,{})})})]})]}),(0,a.jsxs)(h.Z,{spacing:2,mt:2,sx:{width:"100%",[B.breakpoints.up("sm")]:{width:"80%"},[B.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsx)(SearchDisplay,{searchHints:P,isLargeScreenDevice:Q}),(0,a.jsx)(p.Z,{})]})]})}),(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-faq",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[B.breakpoints.up("sm")]:{width:"80%"},[B.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(m.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(T.Z,{sx:{mr:1}}),s.name," Hints FAQ"]}),(0,a.jsx)(h.Z,{spacing:0,children:q.map((e,n)=>(0,a.jsxs)(j.Z,{sx:{border:0},children:[(0,a.jsx)(f.Z,{expandIcon:(0,a.jsx)(v.Z,{}),"aria-controls":"QA-".concat(n,"-answer"),id:"QA-".concat(n,"-question"),children:(0,a.jsx)(m.Z,{component:"h4",children:e.q})}),(0,a.jsx)(w.Z,{children:(0,a.jsx)(m.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(n)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:n,isLargeScreenDevice:t}=e;return n.loading?(0,a.jsx)(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(b.Z,{})}):n.error?(0,a.jsx)(m.Z,{color:"error",children:n.error}):n.data&&0!==Object.keys(n.data).length?(0,a.jsx)(Y.default,{responseData:n.data,isLargeScreenDevice:t}):(0,a.jsx)(a.Fragment,{})}let E=M()(()=>Promise.resolve().then(t.bind(t,6748)),{loadableGenerated:{webpack:()=>[6748]},loading:()=>(0,a.jsx)("p",{children:"Loading..."}),ssr:!1})}}]);