(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wordle",function(){return n(4798)}])},4798:function(e,t,n){"use strict";n.r(t),n.d(t,{Wordle:function(){return Wordle},__N_SSP:function(){return O},default:function(){return WordlePage}});var i=n(5893),a=n(4993),s=n(4080),r=n(366),l=n(7294),o=n(6950),d=n(2734),c=n(4558),h=n(1233),u=n(5616),x=n(5861),p=n(1519),m=n(2280),g=n(8895),y=n(2797),j=n(480),f=n(9653),w=n(9417),Z=n(8456),b=n(6886),v=n(2180),k=n(948),D=n(629),S=n(7285),C=n(3508),H=n(2961),A=n(2450),_=n(9217),I=n(2761),T=n(3328),W=n(3890),N=n(9606),F=n(3094),P=n(586),Y=n(720),M=n(7610),E=n(7484),q=n.n(E),z=n(1221);let L=o.K[1],V=[{q:"What can ".concat(L.title," do?"),a:"View today's ".concat(L.name," hints, reveal puzzle answers progressively, and access an archive of past ").concat(L.name," hints.")},{q:"When do ".concat(L.title," update?"),a:'Hints refresh daily, typically just after midnight Eastern Time, syncing with <a style="color:#006BD6;font-weight:500;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(L.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(L.name," Puzzle</a>. The update process usually takes only a few minutes. Check back if not immediately available.")},{q:"Is there a cost for ".concat(L.title,"?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(L.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(L.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(L.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(L.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var O=!0;function WordlePage(e){let{latestData:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{url:s.e.url+L.url,title:L.label+" - "+s.e.title,description:L.description,keywords:L.keywords,imageUrl:s.e.logoUrl}),(0,i.jsx)(a.Z,{selectedTabValue:L.index,TabComponent:()=>(0,i.jsx)(Wordle,{tab:L,latestData:t})})]})}function Wordle(e){var t,n,a;let{tab:s,latestData:r}=e,[o,Z]=l.useState(null),[b,v]=l.useState(null),[k,D]=l.useState(null),[H,A]=l.useState({loading:!1,error:null,data:{}}),[F,E]=l.useState(!0),L=(0,d.Z)(),O=(0,c.Z)(L.breakpoints.up("sm"));l.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),Z(q()(n))},[]);let B=l.useMemo(()=>{switch(k){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[k]),formatSearchDate=e=>e?q()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(A(e=>({...e,loading:!0})),!b){A({loading:!1,error:"Please select a date to view hints",data:{}});return}if(k){A({loading:!1,error:B,data:{}});return}let e={gameType:s.gameType,printDate:formatSearchDate(b),timestamp:Date.now()},{encryptedContent:t,encryptedAesKey:n}=await (0,z.K)(JSON.stringify(e)),{result:i,error:a}=await (0,S.D2)("api/nyt-game-hint/search",{json:t,key:n});if(a){A({loading:!1,error:null==a?void 0:a.message,data:{}});return}let r=await (0,z.h)(null==i?void 0:i.body.json,null==i?void 0:i.body.key);if(i.body.gameData=JSON.parse(r),!i.body.gameData||(null==i?void 0:i.body.gameData.length)===0){A({loading:!1,error:"No hints found for this date",data:{}});return}A({loading:!1,error:null,data:null==i?void 0:i.body})};return(0,i.jsxs)(h.Z,{spacing:1,children:[(0,i.jsx)("header",{children:(0,i.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(x.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:s.title}),(0,i.jsx)(x.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:s.subTitle}),(0,i.jsx)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:(0,i.jsx)(p.Z,{})})]})}),(0,i.jsxs)("main",{children:[(0,i.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-today",children:(null===(t=r.gameData)||void 0===t?void 0:t.hintContent)&&(0,i.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,i.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(x.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(T.Z,{sx:{mr:1}}),"Hints for ",r.printDate]}),(0,i.jsxs)(m.Z,{sx:{backgroundColor:"#f9df6d","&.Mui-expanded":{backgroundColor:"#f9df6d"}},children:[(0,i.jsx)(g.Z,{expandIcon:(0,i.jsx)(C.Z,{}),"aria-controls":"hint-detail",id:"hint-summary",children:(0,i.jsxs)(x.Z,{children:[O?"Click":"Tap"," for today's Hints"]})}),(0,i.jsxs)(y.Z,{children:[(0,i.jsx)(j.Z,{control:(0,i.jsx)(f.Z,{checked:F,onChange:e=>{E(e.target.checked)},inputProps:{"aria-label":"controlled"}}),label:(0,i.jsx)(x.Z,{sx:{fontWeight:"bold"},children:F?"Expert Mode":"Beginner Mode"})}),(0,i.jsx)(x.Z,{component:"div",dangerouslySetInnerHTML:{__html:F?null===(n=r.gameData)||void 0===n?void 0:n.proHintContent:null===(a=r.gameData)||void 0===a?void 0:a.hintContent}})]})]}),(0,i.jsx)(p.Z,{})]})})}),(0,i.jsx)("section",{id:"nytimes-"+s.lowerName+"-answer-today",children:(0,i.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,i.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(x.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(_.Z,{sx:{mr:1}}),"Hinted Answers: Peek or Reveal"]}),(0,i.jsx)(HintDisplay,{responseData:r,isArchivedHint:!1,isLargeScreenDevice:O}),(0,i.jsx)(p.Z,{})]})})}),(0,i.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-archive-search",children:(0,i.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,i.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(x.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(W.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,i.jsxs)(h.Z,{direction:"row",spacing:1,children:[(0,i.jsx)(u.Z,{sx:{width:"75%"},children:(0,i.jsx)(Y._,{dateAdapter:P.y,children:(0,i.jsx)(M.M,{label:"Select a date within the last year",value:b,onChange:e=>v(e),minDate:o,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>D(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,i.jsx)(u.Z,{sx:{width:"25%"},children:(0,i.jsx)(w.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:H.loading,children:(0,i.jsx)(I.Z,{})})})]})]}),(0,i.jsxs)(h.Z,{spacing:2,mt:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsx)(SearchDisplay,{searchHints:H,isLargeScreenDevice:O}),(0,i.jsx)(p.Z,{})]})]})}),(0,i.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-faq",children:(0,i.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,i.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(x.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(N.Z,{sx:{mr:1}}),s.name," Hints FAQ"]}),(0,i.jsx)(h.Z,{spacing:0,children:V.map((e,t)=>(0,i.jsxs)(m.Z,{sx:{border:0},children:[(0,i.jsx)(g.Z,{expandIcon:(0,i.jsx)(C.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),children:(0,i.jsx)(x.Z,{component:"h4",children:e.q})}),(0,i.jsx)(y.Z,{children:(0,i.jsx)(x.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t,isLargeScreenDevice:n}=e;return t.loading?(0,i.jsx)(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,i.jsx)(Z.Z,{})}):t.error?(0,i.jsx)(x.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,i.jsx)(HintDisplay,{responseData:t.data,isArchivedHint:!0,isLargeScreenDevice:n}):(0,i.jsx)(i.Fragment,{})}function HintDisplay(e){var t,n,a,s;let{responseData:r,isArchivedHint:o,isLargeScreenDevice:d}=e,[c,h]=l.useState(null===(n=r.gameData)||void 0===n?void 0:null===(t=n.solution)||void 0===t?void 0:t.split("").map((e,t)=>0===t)),[p,j]=l.useState(!1),handleHintToggleVisibility=e=>{h(t=>{let n=t.map((t,n)=>n===e?!t:t),i=n.every(e=>!0===e);return j(i),n})},setAllHintsVisibleStates=()=>{h(e=>{let t=Array(c.length).fill(!p);return j(!p),t})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Z,{defaultExpanded:o,sx:{backgroundColor:"#e6e6e6","&.Mui-expanded":{backgroundColor:"#e6e6e6"}},children:[(0,i.jsx)(g.Z,{expandIcon:(0,i.jsx)(C.Z,{}),id:"panel-header","aria-controls":"panel-content",children:(0,i.jsxs)(x.Z,{children:[d?"Click":"Tap"," to reveal answers"]})}),(0,i.jsxs)(y.Z,{children:[(0,i.jsx)(x.Z,{fontWeight:"bold",sx:{display:"flex",alignItems:"center",mb:2},children:"Guess a 5-letter word"}),(0,i.jsx)(u.Z,{sx:{flexGrow:1},children:(0,i.jsx)(b.ZP,{container:!0,spacing:1,justifyContent:"center",children:null===(s=r.gameData)||void 0===s?void 0:null===(a=s.solution)||void 0===a?void 0:a.split("").map((e,t)=>(0,i.jsx)(b.ZP,{item:!0,onClick:()=>handleHintToggleVisibility(t),children:(0,i.jsx)(Q,{elevation:0,children:c[t]?(0,i.jsx)(x.Z,{sx:B,children:e}):(0,i.jsx)(F.Z,{sx:B})})},t))})})]}),(0,i.jsx)(v.Z,{children:(0,i.jsx)(w.Z,{variant:"outlined",startIcon:p?(0,i.jsx)(A.Z,{}):(0,i.jsx)(H.Z,{}),onClick:()=>setAllHintsVisibleStates(),children:p?"Hide Answers":"Reveal Answers"})})]})})}let B={lineHeight:1,color:"#FFFFFF",fontWeight:"bold",fontSize:"1.95rem",textTransform:"uppercase",padding:"0px 0px 1px 0px"},Q=(0,k.ZP)(D.Z)(e=>{let{theme:t}=e;return{width:"2.4rem",height:"2.4rem",display:"flex",justifyContent:"center",alignItems:"center",border:0,borderRadius:0,boxShadow:"none",backgroundColor:"#6AAA64"}})}},function(e){e.O(0,[106,519,886,145,774,888,179],function(){return e(e.s=759)}),_N_E=e.O()}]);