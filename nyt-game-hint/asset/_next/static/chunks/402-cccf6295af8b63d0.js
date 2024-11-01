"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402],{3094:function(e,t,n){var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893);t.Z=(0,a.default)((0,r.jsx)("path",{d:"M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2"}),"QuestionMark")},9217:function(e,t,n){var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893);t.Z=(0,a.default)((0,r.jsx)("path",{d:"M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"}),"TipsAndUpdates")},6748:function(e,t,n){n.r(t);var i=n(5893),a=n(7294),r=n(2280),s=n(8895),o=n(5861),l=n(2797),d=n(1233),c=n(7918),m=n(2180),h=n(9417),u=n(3508),p=n(3094),x=n(2450),g=n(2961);t.default=function(e){var t,n,f,y;let{responseData:b,isLargeScreenDevice:j}=e,[w,v]=a.useState(null===(t=b.gameData)||void 0===t?void 0:t.categories.map(()=>!1)),[Z,k]=a.useState(null===(n=b.gameData)||void 0===n?void 0:n.categories.map(e=>e.cards.map(()=>!1))),handleHintToggleVisibility=e=>{v(t=>{let n=!t[e];return k(t=>t.map((t,i)=>i===e?t.map(()=>n):t)),t.map((t,i)=>i===e?n:t)})},handleWordHintToggleVisibility=(e,t)=>{k(n=>{let i=n.map((n,i)=>i===e?n.map((e,n)=>n===t?!e:e):n),a=i[e].every(e=>!0===e),r=i[e].every(e=>!1===e);return v(t=>t.map((t,n)=>n===e?!!a||!r&&t:t)),i})};return(0,i.jsx)(i.Fragment,{children:null===(y=b.gameData)||void 0===y?void 0:null===(f=y.categories)||void 0===f?void 0:f.map((e,t)=>(0,i.jsxs)(r.Z,{sx:{backgroundColor:"#e6e6e6","&.Mui-expanded":{backgroundColor:"#e6e6e6"},borderRadius:"0.75rem !important",boxShadow:"0 0.25rem 0.375rem rgba(0, 0, 0, 0.08) !important","&:before":{display:"none"},"& .MuiCollapse-root":{borderBottomLeftRadius:"0.75rem",borderBottomRightRadius:"0.75rem"}},children:[(0,i.jsx)(s.Z,{expandIcon:(0,i.jsx)(u.Z,{}),id:"panel".concat(t+1,"-header"),"aria-controls":"panel".concat(t+1,"-content"),children:(0,i.jsxs)(o.Z,{sx:{fontWeight:500},children:[j?"Click":"Tap"," to reveal Group ",t+1]})}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(o.Z,{fontWeight:"bold",sx:{display:"flex",alignItems:"center",mb:2},children:e.title}),(0,i.jsx)(d.Z,{spacing:1,direction:"row",useFlexGap:!0,flexWrap:"wrap",children:null==e?void 0:e.cards.map((e,n)=>Z[t][n]?(0,i.jsx)(c.Z,{label:e.content,size:"medium",sx:{fontWeight:"bold"},onClick:()=>handleWordHintToggleVisibility(t,n)},n):(0,i.jsx)(c.Z,{label:(0,i.jsx)(p.Z,{fontSize:"small",sx:{color:"#FFFFFF"}}),size:"medium",onClick:()=>handleWordHintToggleVisibility(t,n)},n))})]}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(h.Z,{variant:"outlined",startIcon:w[t]?(0,i.jsx)(x.Z,{}):(0,i.jsx)(g.Z,{}),onClick:()=>handleHintToggleVisibility(t),children:w[t]?"Hide Answers":"Reveal Answers"})})]},t))})}},6402:function(e,t,n){n.r(t),n.d(t,{Connections:function(){return Connections},__N_SSP:function(){return P},default:function(){return ConnectionsPage}});var i=n(5893),a=n(4993),r=n(4080),s=n(366),o=n(7294),l=n(6950),d=n(2734),c=n(4558),m=n(1233),h=n(5616),u=n(5861),p=n(1519),x=n(3795),g=n(9417),f=n(2280),y=n(8895),b=n(2797),j=n(8456),w=n(7285),v=n(3508),Z=n(9217),k=n(2761),D=n(3328),S=n(3890),C=n(9606),T=n(1462),z=n(586),W=n(720),H=n(6994),I=n(7484),F=n.n(I),A=n(1221),L=n(6748),M=n(5152),N=n.n(M),Y=n(6195);let _=l.K[0],R=[{q:"What can ".concat(_.title," do?"),a:"View today's ".concat(_.name," hints, reveal puzzle answers progressively, and access an archive of past ").concat(_.name," hints.")},{q:"When do ".concat(_.title," update?"),a:'Hints refresh daily, typically just after midnight Eastern Time, syncing with <a style="color:#006BD6;font-weight:500;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(_.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(_.name," Puzzle</a>. The update process usually takes only a few minutes. Check back if not immediately available.")},{q:"Is there a cost for ".concat(_.title,"?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(_.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(_.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(_.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(_.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var P=!0;function ConnectionsPage(e){let{latestData:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{url:r.e.url+_.url,title:_.pageTitle,description:_.description,keywords:_.keywords,imageUrl:r.e.logoUrl}),(0,i.jsx)(a.Z,{selectedTabValue:_.index,TabComponent:()=>(0,i.jsx)(Connections,{tab:_,latestData:t})})]})}function Connections(e){var t,n;let{tab:a,latestData:r}=e,[s,l]=o.useState(null),[j,I]=o.useState(null),[L,M]=o.useState(null),[N,_]=o.useState({loading:!1,error:null,data:{}}),P=(0,d.Z)(),B=(0,c.Z)(P.breakpoints.up("sm"));o.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),l(F()(n))},[]);let U=o.useMemo(()=>{switch(L){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[L]),formatSearchDate=e=>e?F()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(_(e=>({...e,loading:!0})),!j){_({loading:!1,error:"Please select a date to view hints",data:{}});return}if(L){_({loading:!1,error:U,data:{}});return}let e={gameType:a.gameType,printDate:formatSearchDate(j),timestamp:Date.now()},{encryptedContent:t,encryptedAesKey:n}=await (0,A.K)(JSON.stringify(e)),{result:i,error:r}=await (0,w.D2)("api/nyt-game-hint/search",{json:t,key:n});if(r){_({loading:!1,error:null==r?void 0:r.message,data:{}});return}let s=await (0,A.h)(null==i?void 0:i.body.json,null==i?void 0:i.body.key);if(i.body.gameData=JSON.parse(s),!i.body.gameData||(null==i?void 0:i.body.gameData.length)===0){_({loading:!1,error:"No hints found for this date",data:{}});return}_({loading:!1,error:null,data:null==i?void 0:i.body})};return(0,i.jsxs)(m.Z,{spacing:1,children:[(0,i.jsx)("header",{children:(0,i.jsxs)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(u.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:a.title}),(0,i.jsx)(u.Z,{component:"h2",color:"text.secondary",gutterBottom:!0,sx:{fontSize:{xs:"1rem",sm:"1.1rem"}},children:a.subTitle}),(0,i.jsx)(m.Z,{spacing:2,sx:{width:"100%",[P.breakpoints.up("sm")]:{width:"80%"},[P.breakpoints.up("md")]:{width:"55%"}},children:(0,i.jsx)(p.Z,{})})]})}),(0,i.jsxs)("main",{children:[(0,i.jsx)("section",{id:"nytimes-"+a.lowerName+"-hint-today",children:(null===(t=r.gameData)||void 0===t?void 0:t.hintContent)&&(0,i.jsx)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,i.jsxs)(m.Z,{spacing:2,sx:{width:"100%",[P.breakpoints.up("sm")]:{width:"80%"},[P.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center",fontSize:{xs:"1rem",sm:"1.2rem"},flexWrap:"wrap"},children:[(0,i.jsx)(D.Z,{sx:{mr:1}}),"Hints for",(0,i.jsx)(x.Z,{sx:{ml:.5},href:a.archivedUrl((0,Y.XR)(r.printDate,0)),title:a.archivedPageTitle(r.printDate),children:r.printDate}),(0,i.jsx)(x.Z,{sx:{ml:1},href:a.archivedUrl((0,Y.XR)(r.printDate,1)),title:a.archivedPageTitle((0,Y.MY)(r.printDate,1)),children:(0,i.jsx)(T.Z,{sx:{verticalAlign:"middle",color:"rgba(25, 118, 210, 0.4)"}})})]}),(0,i.jsx)(h.Z,{sx:{backgroundColor:"#f9df6d",padding:{xs:"1rem",sm:"1.5rem"},borderRadius:"0.75rem",boxShadow:"0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",overflow:"hidden",maxWidth:"50rem",margin:"0 auto",position:"relative","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,height:"0.25rem",background:"linear-gradient(90deg, #f7c948, #ffeb99)"},"& p":{fontSize:{xs:"1rem",sm:"1.1rem"},lineHeight:1.6,color:"#2c2c2c",marginBottom:"1.5rem",fontFamily:'"Segoe UI", Roboto, "Helvetica Neue", sans-serif'},"& ul":{listStyle:"none",padding:0,margin:0},"& li":{fontSize:{xs:"0.9rem",sm:"1rem"},color:"#404040",padding:"0.15rem 0 0.15rem 1.5rem",position:"relative",marginBottom:"0.5rem",transition:"transform 0.2s ease","&::before":{content:'""',position:"absolute",left:0,top:{xs:"0.50rem",sm:"0.70rem"},width:"0.5rem",height:"0.5rem",backgroundColor:"#8B4513",borderRadius:"50%"}}},children:(0,i.jsx)(u.Z,{component:"div",sx:{"& *":{margin:0}},dangerouslySetInnerHTML:{__html:null===(n=r.gameData)||void 0===n?void 0:n.hintContent}})}),(0,i.jsx)(p.Z,{})]})})}),(0,i.jsx)("section",{id:"nytimes-"+a.lowerName+"-answer-today",children:(0,i.jsx)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,i.jsxs)(m.Z,{spacing:2,sx:{width:"100%",[P.breakpoints.up("sm")]:{width:"80%"},[P.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center",fontSize:{xs:"1rem",sm:"1.2rem"}},children:[(0,i.jsx)(Z.Z,{sx:{mr:1}}),"Hinted Answers: Peek or Reveal"]}),(0,i.jsx)(q,{responseData:r,isLargeScreenDevice:B}),(0,i.jsx)(p.Z,{})]})})}),(0,i.jsx)("section",{id:"nytimes-"+a.lowerName+"-hint-archive-search",children:(0,i.jsxs)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,i.jsxs)(m.Z,{spacing:2,sx:{width:"100%",[P.breakpoints.up("sm")]:{width:"80%"},[P.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center",fontSize:{xs:"1rem",sm:"1.2rem"}},children:[(0,i.jsx)(S.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,i.jsxs)(m.Z,{direction:"row",spacing:1,children:[(0,i.jsx)(h.Z,{sx:{width:"75%"},children:(0,i.jsx)(W._,{dateAdapter:z.y,children:(0,i.jsx)(H.M,{label:"Select a date within the last year",value:j,onChange:e=>I(e),minDate:s,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>M(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,i.jsx)(h.Z,{sx:{width:"25%"},children:(0,i.jsx)(g.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:N.loading,children:(0,i.jsx)(k.Z,{})})})]})]}),(0,i.jsxs)(m.Z,{spacing:2,mt:2,sx:{width:"100%",[P.breakpoints.up("sm")]:{width:"80%"},[P.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsx)(SearchDisplay,{searchHints:N,isLargeScreenDevice:B}),(0,i.jsx)(p.Z,{})]})]})}),(0,i.jsx)("section",{id:"nytimes-"+a.lowerName+"-hint-faq",children:(0,i.jsx)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,i.jsxs)(m.Z,{spacing:2,sx:{width:"100%",[P.breakpoints.up("sm")]:{width:"80%"},[P.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center",fontSize:{xs:"1rem",sm:"1.2rem"}},children:[(0,i.jsx)(C.Z,{sx:{mr:1}}),a.name," Hints FAQ"]}),(0,i.jsx)(m.Z,{spacing:0,children:R.map((e,t)=>(0,i.jsxs)(f.Z,{sx:{border:0,boxShadow:1,marginBottom:"1rem",borderRadius:"0.5rem",backgroundColor:"#f7f8fa","&:before":{display:"none"}},children:[(0,i.jsx)(y.Z,{expandIcon:(0,i.jsx)(v.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),sx:{backgroundColor:"#f7f8fa","&:hover":{backgroundColor:"#e0e0e0"},borderRadius:"0.5rem",padding:"0.75rem 1rem"},children:(0,i.jsx)(u.Z,{component:"h4",sx:{fontWeight:"bold",color:"#333",fontSize:{xs:"0.9rem",sm:"1.1rem"}},children:e.q})}),(0,i.jsx)(b.Z,{sx:{padding:"1rem",backgroundColor:"#fff"},children:(0,i.jsx)(u.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a},sx:{fontSize:{xs:"0.875rem",sm:"1rem"}}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t,isLargeScreenDevice:n}=e;return t.loading?(0,i.jsx)(h.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,i.jsx)(j.Z,{})}):t.error?(0,i.jsx)(u.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,i.jsx)(L.default,{responseData:t.data,isLargeScreenDevice:n}):(0,i.jsx)(i.Fragment,{})}let q=N()(()=>Promise.resolve().then(n.bind(n,6748)),{loadableGenerated:{webpack:()=>[6748]},loading:()=>(0,i.jsx)("p",{children:"Loading..."}),ssr:!0})}}]);