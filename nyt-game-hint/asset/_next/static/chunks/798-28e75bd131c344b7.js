"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{8689:function(e,t,n){n.r(t);var r=n(5893),i=n(7294),a=n(948),s=n(629),o=n(2280),l=n(8895),d=n(5861),c=n(2797),h=n(5616),m=n(6886),u=n(2180),x=n(9417),p=n(3508),g=n(3094),f=n(2450),y=n(2961);let j={lineHeight:1,color:"#FFFFFF",fontWeight:"bold",fontSize:"1.95rem",textTransform:"uppercase",padding:"0px 0px 1px 0px"},b=(0,a.ZP)(s.Z)(e=>{let{theme:t}=e;return{width:"2.4rem",height:"2.4rem",display:"flex",justifyContent:"center",alignItems:"center",border:0,borderRadius:0,boxShadow:"none",backgroundColor:"#6AAA64"}});t.default=function(e){var t,n,a,s;let{responseData:w,isArchivedHint:Z,isLargeScreenDevice:v}=e,[k,D]=i.useState(null===(n=w.gameData)||void 0===n?void 0:null===(t=n.solution)||void 0===t?void 0:t.split("").map((e,t)=>0===t)),[S,C]=i.useState(!1),handleHintToggleVisibility=e=>{D(t=>{let n=t.map((t,n)=>n===e?!t:t),r=n.every(e=>!0===e);return C(r),n})},setAllHintsVisibleStates=()=>{D(e=>{let t=Array(k.length).fill(!S);return C(!S),t})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{defaultExpanded:Z,sx:{backgroundColor:"#e6e6e6","&.Mui-expanded":{backgroundColor:"#e6e6e6"},borderRadius:"0.75rem !important",boxShadow:"0 0.25rem 0.375rem rgba(0, 0, 0, 0.08) !important","&:before":{display:"none"},"& .MuiCollapse-root":{borderBottomLeftRadius:"0.75rem",borderBottomRightRadius:"0.75rem"}},children:[(0,r.jsx)(l.Z,{expandIcon:(0,r.jsx)(p.Z,{}),id:"panel-header","aria-controls":"panel-content",children:(0,r.jsxs)(d.Z,{sx:{fontWeight:500},children:[v?"Click":"Tap"," to reveal answers"]})}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{fontWeight:"bold",sx:{display:"flex",alignItems:"center",mb:2},children:"Guess a 5-letter word"}),(0,r.jsx)(h.Z,{sx:{flexGrow:1},children:(0,r.jsx)(m.ZP,{container:!0,spacing:1,justifyContent:"center",children:null===(s=w.gameData)||void 0===s?void 0:null===(a=s.solution)||void 0===a?void 0:a.split("").map((e,t)=>(0,r.jsx)(m.ZP,{item:!0,onClick:()=>handleHintToggleVisibility(t),children:(0,r.jsx)(b,{elevation:0,children:k[t]?(0,r.jsx)(d.Z,{sx:j,children:e}):(0,r.jsx)(g.Z,{sx:j})})},t))})})]}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(x.Z,{variant:"outlined",startIcon:S?(0,r.jsx)(f.Z,{}):(0,r.jsx)(y.Z,{}),onClick:()=>setAllHintsVisibleStates(),children:S?"Hide Answers":"Reveal Answers"})})]})})}},4798:function(e,t,n){n.r(t),n.d(t,{Wordle:function(){return Wordle},__N_SSP:function(){return q},default:function(){return WordlePage}});var r=n(5893),i=n(4993),a=n(4080),s=n(366),o=n(7294),l=n(6950),d=n(2734),c=n(4558),h=n(1233),m=n(5616),u=n(5861),x=n(1519),p=n(3795),g=n(9417),f=n(2280),y=n(8895),j=n(2797),b=n(8456),w=n(7285),Z=n(3508),v=n(9217),k=n(2761),D=n(3328),S=n(3890),C=n(9606),A=n(1462),W=n(586),I=n(720),T=n(6994),H=n(7484),F=n.n(H),N=n(1221),Y=n(5152),P=n.n(Y),R=n(8689),_=n(6195);let z=l.K[1],M=[{q:"What can ".concat(z.title," do?"),a:"View today's ".concat(z.name," hints, reveal puzzle answers progressively, and access an archive of past ").concat(z.name," hints.")},{q:"When do ".concat(z.title," update?"),a:'Hints refresh daily, typically just after midnight Eastern Time, syncing with <a style="color:#006BD6;font-weight:500;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(z.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(z.name," Puzzle</a>. The update process usually takes only a few minutes. Check back if not immediately available.")},{q:"Is there a cost for ".concat(z.title,"?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(z.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(z.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(z.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(z.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var q=!0;function WordlePage(e){let{latestData:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{url:a.e.url+z.url,title:z.pageTitle,description:z.description,keywords:z.keywords,imageUrl:a.e.logoUrl}),(0,r.jsx)(i.Z,{selectedTabValue:z.index,TabComponent:()=>(0,r.jsx)(Wordle,{tab:z,latestData:t})})]})}function Wordle(e){var t,n;let{tab:i,latestData:a}=e,[s,l]=o.useState(null),[b,H]=o.useState(null),[Y,P]=o.useState(null),[R,z]=o.useState({loading:!1,error:null,data:{}}),q=(0,d.Z)(),L=(0,c.Z)(q.breakpoints.up("sm"));o.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),l(F()(n))},[]);let E=o.useMemo(()=>{switch(Y){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[Y]),formatSearchDate=e=>e?F()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(z(e=>({...e,loading:!0})),!b){z({loading:!1,error:"Please select a date to view hints",data:{}});return}if(Y){z({loading:!1,error:E,data:{}});return}let e={gameType:i.gameType,printDate:formatSearchDate(b),timestamp:Date.now()},{encryptedContent:t,encryptedAesKey:n}=await (0,N.K)(JSON.stringify(e)),{result:r,error:a}=await (0,w.D2)("api/nyt-game-hint/search",{json:t,key:n});if(a){z({loading:!1,error:null==a?void 0:a.message,data:{}});return}let s=await (0,N.h)(null==r?void 0:r.body.json,null==r?void 0:r.body.key);if(r.body.gameData=JSON.parse(s),!r.body.gameData||(null==r?void 0:r.body.gameData.length)===0){z({loading:!1,error:"No hints found for this date",data:{}});return}z({loading:!1,error:null,data:null==r?void 0:r.body})};return(0,r.jsxs)(h.Z,{spacing:1,children:[(0,r.jsx)("header",{children:(0,r.jsxs)(m.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,r.jsx)(u.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:i.title}),(0,r.jsx)(u.Z,{component:"h2",color:"text.secondary",gutterBottom:!0,sx:{fontSize:{xs:"1rem",sm:"1.1rem"}},children:i.subTitle}),(0,r.jsx)(h.Z,{spacing:2,sx:{width:"100%",[q.breakpoints.up("sm")]:{width:"80%"},[q.breakpoints.up("md")]:{width:"55%"}},children:(0,r.jsx)(x.Z,{})})]})}),(0,r.jsxs)("main",{children:[(0,r.jsx)("section",{id:"nytimes-"+i.lowerName+"-hint-today",children:(null===(t=a.gameData)||void 0===t?void 0:t.hintContent)&&(0,r.jsx)(m.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,r.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[q.breakpoints.up("sm")]:{width:"80%"},[q.breakpoints.up("md")]:{width:"55%"}},children:[(0,r.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center",fontSize:{xs:"1rem",sm:"1.2rem"},flexWrap:"wrap"},children:[(0,r.jsx)(D.Z,{sx:{mr:1}}),"Hints for",(0,r.jsx)(p.Z,{sx:{ml:.5},href:i.archivedUrl((0,_.XR)(a.printDate,0)),title:i.archivedPageTitle(a.printDate),children:a.printDate}),(0,r.jsx)(p.Z,{sx:{ml:1},href:i.archivedUrl((0,_.XR)(a.printDate,1)),title:i.archivedPageTitle((0,_.MY)(a.printDate,1)),children:(0,r.jsx)(A.Z,{sx:{verticalAlign:"middle",color:"rgba(25, 118, 210, 0.4)"}})})]}),(0,r.jsx)(m.Z,{sx:{backgroundColor:"#f9df6d",padding:{xs:"1rem",sm:"1.5rem"},borderRadius:"0.75rem",boxShadow:"0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",overflow:"hidden",maxWidth:"50rem",margin:"0 auto",position:"relative","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,height:"0.25rem",background:"linear-gradient(90deg, #f7c948, #ffeb99)"},"& p":{fontSize:{xs:"1rem",sm:"1.1rem"},lineHeight:1.6,color:"#2c2c2c",marginBottom:"1.5rem",fontFamily:'"Segoe UI", Roboto, "Helvetica Neue", sans-serif'},"& ul":{listStyle:"none",padding:0,margin:0},"& li":{fontSize:{xs:"0.9rem",sm:"1rem"},color:"#404040",padding:"0.15rem 0 0.15rem 1.5rem",position:"relative",marginBottom:"0.5rem",transition:"transform 0.2s ease","&::before":{content:'""',position:"absolute",left:0,top:{xs:"0.50rem",sm:"0.70rem"},width:"0.5rem",height:"0.5rem",backgroundColor:"#8B4513",borderRadius:"50%"}}},children:(0,r.jsx)(u.Z,{component:"div",sx:{"& *":{margin:0}},dangerouslySetInnerHTML:{__html:null===(n=a.gameData)||void 0===n?void 0:n.hintContent}})}),(0,r.jsx)(x.Z,{})]})})}),(0,r.jsx)("section",{id:"nytimes-"+i.lowerName+"-answer-today",children:(0,r.jsx)(m.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,r.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[q.breakpoints.up("sm")]:{width:"80%"},[q.breakpoints.up("md")]:{width:"55%"}},children:[(0,r.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(v.Z,{sx:{mr:1}}),"Hinted Answers: Peek or Reveal"]}),(0,r.jsx)(B,{responseData:a,isArchivedHint:!1,isLargeScreenDevice:L}),(0,r.jsx)(x.Z,{})]})})}),(0,r.jsx)("section",{id:"nytimes-"+i.lowerName+"-hint-archive-search",children:(0,r.jsxs)(m.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,r.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[q.breakpoints.up("sm")]:{width:"80%"},[q.breakpoints.up("md")]:{width:"55%"}},children:[(0,r.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(S.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,r.jsxs)(h.Z,{direction:"row",spacing:1,children:[(0,r.jsx)(m.Z,{sx:{width:"75%"},children:(0,r.jsx)(I._,{dateAdapter:W.y,children:(0,r.jsx)(T.M,{label:"Select a date within the last year",value:b,onChange:e=>H(e),minDate:s,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>P(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,r.jsx)(m.Z,{sx:{width:"25%"},children:(0,r.jsx)(g.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:R.loading,children:(0,r.jsx)(k.Z,{})})})]})]}),(0,r.jsxs)(h.Z,{spacing:2,mt:2,sx:{width:"100%",[q.breakpoints.up("sm")]:{width:"80%"},[q.breakpoints.up("md")]:{width:"55%"}},children:[(0,r.jsx)(SearchDisplay,{searchHints:R,isLargeScreenDevice:L}),(0,r.jsx)(x.Z,{})]})]})}),(0,r.jsx)("section",{id:"nytimes-"+i.lowerName+"-hint-faq",children:(0,r.jsx)(m.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,r.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[q.breakpoints.up("sm")]:{width:"80%"},[q.breakpoints.up("md")]:{width:"55%"}},children:[(0,r.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(C.Z,{sx:{mr:1}}),i.name," Hints FAQ"]}),(0,r.jsx)(h.Z,{spacing:0,children:M.map((e,t)=>(0,r.jsxs)(f.Z,{sx:{border:0,boxShadow:1,marginBottom:"1rem",borderRadius:"0.5rem",backgroundColor:"#f7f8fa","&:before":{display:"none"}},children:[(0,r.jsx)(y.Z,{expandIcon:(0,r.jsx)(Z.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),sx:{backgroundColor:"#f7f8fa","&:hover":{backgroundColor:"#e0e0e0"},borderRadius:"0.5rem",padding:"0.75rem 1rem"},children:(0,r.jsx)(u.Z,{component:"h4",sx:{fontWeight:"bold",color:"#333",fontSize:{xs:"0.9rem",sm:"1.1rem"}},children:e.q})}),(0,r.jsx)(j.Z,{sx:{padding:"1rem",backgroundColor:"#fff"},children:(0,r.jsx)(u.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a},sx:{fontSize:{xs:"0.875rem",sm:"1rem"}}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t,isLargeScreenDevice:n}=e;return t.loading?(0,r.jsx)(m.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,r.jsx)(b.Z,{})}):t.error?(0,r.jsx)(u.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,r.jsx)(R.default,{responseData:t.data,isArchivedHint:!0,isLargeScreenDevice:n}):(0,r.jsx)(r.Fragment,{})}let B=P()(()=>Promise.resolve().then(n.bind(n,8689)),{loadableGenerated:{webpack:()=>[8689]},loading:()=>(0,r.jsx)("p",{children:"Loading..."}),ssr:!0})}}]);