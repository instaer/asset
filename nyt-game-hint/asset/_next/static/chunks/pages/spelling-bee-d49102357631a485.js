(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795],{1993:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spelling-bee",function(){return t(6153)}])},8795:function(e,n,t){"use strict";t.r(n);var a=t(5893),i=t(7294),s=t(2280),r=t(8895),l=t(5861),o=t(2797),d=t(1233),c=t(7918),h=t(2180),u=t(9417),p=t(3508),m=t(3094),g=t(2450),x=t(2961);let groupWordsByScore=e=>{let{answers:n=[],pangrams:t=[]}=e||{},a=new Map,calculateScore=e=>t.includes(e)?e.length+7:4===e.length?1:e.length,i=0;return t.forEach(e=>{let n=calculateScore(e);i=Math.max(i,n)}),t.length>0&&a.set(i,{score:i,words:t,isPangram:!0}),n.forEach(e=>{if(!t.includes(e)){let n=calculateScore(e);a.has(n)?a.get(n).words.push(e):a.set(n,{score:n,words:[e],isPangram:!1})}}),Array.from(a.values()).sort((e,n)=>e.isPangram?-1:n.isPangram?1:e.score-n.score)};n.default=function(e){var n;let{responseData:t,isLargeScreenDevice:y}=e,f=groupWordsByScore(null===(n=t.gameData)||void 0===n?void 0:n.today),[j,w]=i.useState(f.map(()=>!1)),[b,Z]=i.useState(f.map(e=>e.words.map((n,t)=>!e.isPangram&&e.words.length>1&&0===t))),handleHintToggleVisibility=e=>{w(n=>{let t=!n[e];return Z(n=>n.map((n,a)=>a===e?n.map(()=>t):n)),n.map((n,a)=>a===e?t:n)})},handleWordHintToggleVisibility=(e,n)=>{Z(t=>{let a=t.map((t,a)=>a===e?t.map((e,t)=>t===n?!e:e):t),i=a[e].every(e=>!0===e),s=a[e].every(e=>!1===e);return w(n=>n.map((n,t)=>t===e?!!i||!s&&n:n)),a})};return(0,a.jsx)(a.Fragment,{children:f.map((e,n)=>(0,a.jsxs)(s.Z,{slotProps:{transition:{unmountOnExit:!0}},sx:{backgroundColor:e.isPangram?"#f7da21":"#e6e6e6","&.Mui-expanded":{backgroundColor:e.isPangram?"#f7da21":"#e6e6e6"}},children:[(0,a.jsx)(r.Z,{expandIcon:(0,a.jsx)(p.Z,{}),id:"panel".concat(n+1,"-header"),"aria-controls":"panel".concat(n+1,"-content"),children:(0,a.jsx)(l.Z,{children:(y?"Click":"Tap")+(e.isPangram?" to reveal for pangrams (7 bonus points)":" to reveal for ".concat(e.score,"-point words"))})}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(d.Z,{spacing:1,direction:"row",useFlexGap:!0,flexWrap:"wrap",children:null==e?void 0:e.words.map((e,t)=>b[n][t]?(0,a.jsx)(c.Z,{label:e,size:"medium",sx:{fontWeight:"bold"},onClick:()=>handleWordHintToggleVisibility(n,t)},t):(0,a.jsx)(c.Z,{label:(0,a.jsx)(m.Z,{fontSize:"small",sx:{color:"#FFFFFF"}}),size:"medium",onClick:()=>handleWordHintToggleVisibility(n,t)},t))})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(u.Z,{variant:"outlined",startIcon:j[n]?(0,a.jsx)(g.Z,{}):(0,a.jsx)(x.Z,{}),onClick:()=>handleHintToggleVisibility(n),children:j[n]?"Hide Answers":"Reveal Answers"})})]},n))})}},6153:function(e,n,t){"use strict";t.r(n),t.d(n,{SpellingBee:function(){return SpellingBee},__N_SSP:function(){return B},default:function(){return SpellingBeePage}});var a=t(5893),i=t(4993),s=t(4080),r=t(366),l=t(7294),o=t(6950),d=t(2734),c=t(4558),h=t(1233),u=t(5616),p=t(5861),m=t(1519),g=t(480),x=t(9653),y=t(9417),f=t(2280),j=t(8895),w=t(2797),b=t(8456),Z=t(7285),v=t(3508),k=t(9217),D=t(2761),S=t(3328),T=t(3890),C=t(9606),P=t(586),_=t(720),W=t(7610),I=t(7484),F=t.n(I),H=t(1221),N=t(5152),A=t.n(N),M=t(8795);let Y=o.K[3],E=[{q:"What can ".concat(Y.title," do?"),a:"View today's ".concat(Y.name," hints, reveal puzzle answers progressively, and access an archive of past ").concat(Y.name," hints.")},{q:"When do ".concat(Y.title," update?"),a:'Hints are typically updated daily after 3:00 AM Eastern Time, syncing with <a style="color:#006BD6;font-weight:500;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(Y.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(Y.name," Puzzle</a>. The update process usually takes only a few minutes. Check back if not immediately available.")},{q:"Is there a cost for ".concat(Y.title,"?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(Y.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(Y.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(Y.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(Y.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var B=!0;function SpellingBeePage(e){let{latestData:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{url:s.e.url+Y.url,title:Y.pageTitle,description:Y.description,keywords:Y.keywords,imageUrl:s.e.logoUrl}),(0,a.jsx)(i.Z,{selectedTabValue:Y.index,TabComponent:()=>(0,a.jsx)(SpellingBee,{tab:Y,latestData:n})})]})}function SpellingBee(e){var n,t,i;let{tab:s,latestData:r}=e,[o,b]=l.useState(null),[I,N]=l.useState(null),[A,M]=l.useState(null),[Y,B]=l.useState({loading:!1,error:null,data:{}}),[z,V]=l.useState(!0),L=(0,d.Z)(),O=(0,c.Z)(L.breakpoints.up("sm"));l.useEffect(()=>{let e=new Date,n=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),t=new Date(n);t.setFullYear(n.getFullYear()-1),b(F()(t))},[]);let Q=l.useMemo(()=>{switch(A){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[A]),formatSearchDate=e=>e?F()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(B(e=>({...e,loading:!0})),!I){B({loading:!1,error:"Please select a date to view hints",data:{}});return}if(A){B({loading:!1,error:Q,data:{}});return}let e={gameType:s.gameType,printDate:formatSearchDate(I),timestamp:Date.now()},{encryptedContent:n,encryptedAesKey:t}=await (0,H.K)(JSON.stringify(e)),{result:a,error:i}=await (0,Z.D2)("api/nyt-game-hint/search",{json:n,key:t});if(i){B({loading:!1,error:null==i?void 0:i.message,data:{}});return}let r=await (0,H.h)(null==a?void 0:a.body.json,null==a?void 0:a.body.key);if(a.body.gameData=JSON.parse(r),!a.body.gameData||(null==a?void 0:a.body.gameData.length)===0){B({loading:!1,error:"No hints found for this date",data:{}});return}B({loading:!1,error:null,data:null==a?void 0:a.body})};return(0,a.jsxs)(h.Z,{spacing:1,children:[(0,a.jsx)("header",{children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,a.jsx)(p.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:s.title}),(0,a.jsx)(p.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:s.subTitle}),(0,a.jsx)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:(0,a.jsx)(m.Z,{})})]})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-today",children:(null===(n=r.gameData)||void 0===n?void 0:n.hintContent)&&(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(p.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(S.Z,{sx:{mr:1}}),"Hints for ",r.printDate]}),(0,a.jsxs)(u.Z,{sx:{backgroundColor:"#f9df6d",padding:1,borderRadius:"4px 4px 0 0",boxShadow:1,overflow:"hidden"},children:[(0,a.jsx)(g.Z,{control:(0,a.jsx)(x.Z,{checked:z,onChange:e=>{V(e.target.checked)},inputProps:{"aria-label":"controlled"}}),label:(0,a.jsx)(p.Z,{sx:{fontWeight:"bold"},children:z?"Expert Mode":"Beginner Mode"}),labelPlacement:"start"}),(0,a.jsx)(p.Z,{component:"div",dangerouslySetInnerHTML:{__html:z?null===(t=r.gameData)||void 0===t?void 0:t.proHintContent:null===(i=r.gameData)||void 0===i?void 0:i.hintContent}})]}),(0,a.jsx)(m.Z,{})]})})}),(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-answer",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(p.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(k.Z,{sx:{mr:1}}),"Hinted Answers: Peek or Reveal"]}),(0,a.jsx)(q,{responseData:r,isLargeScreenDevice:O}),(0,a.jsx)(m.Z,{})]})})}),(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-archive-search",children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(p.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(T.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,a.jsxs)(h.Z,{direction:"row",spacing:1,children:[(0,a.jsx)(u.Z,{sx:{width:"75%"},children:(0,a.jsx)(_._,{dateAdapter:P.y,children:(0,a.jsx)(W.M,{label:"Select a date within the last year",value:I,onChange:e=>N(e),minDate:o,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>M(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,a.jsx)(u.Z,{sx:{width:"25%"},children:(0,a.jsx)(y.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:Y.loading,children:(0,a.jsx)(D.Z,{})})})]})]}),(0,a.jsxs)(h.Z,{spacing:2,mt:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsx)(SearchDisplay,{searchHints:Y}),(0,a.jsx)(m.Z,{})]})]})}),(0,a.jsx)("section",{id:"nytimes-"+s.lowerName+"-hint-faq",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,a.jsxs)(h.Z,{spacing:2,sx:{width:"100%",[L.breakpoints.up("sm")]:{width:"80%"},[L.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(p.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(C.Z,{sx:{mr:1}}),s.name," Hints FAQ"]}),(0,a.jsx)(h.Z,{spacing:0,children:E.map((e,n)=>(0,a.jsxs)(f.Z,{sx:{border:0},children:[(0,a.jsx)(j.Z,{expandIcon:(0,a.jsx)(v.Z,{}),"aria-controls":"QA-".concat(n,"-answer"),id:"QA-".concat(n,"-question"),children:(0,a.jsx)(p.Z,{component:"h4",children:e.q})}),(0,a.jsx)(w.Z,{children:(0,a.jsx)(p.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(n)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:n,isLargeScreenDevice:t}=e;return n.loading?(0,a.jsx)(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(b.Z,{})}):n.error?(0,a.jsx)(p.Z,{color:"error",children:n.error}):n.data&&0!==Object.keys(n.data).length?(0,a.jsx)(M.default,{responseData:n.data,isLargeScreenDevice:t}):(0,a.jsx)(a.Fragment,{})}let q=A()(()=>Promise.resolve().then(t.bind(t,8795)),{loadableGenerated:{webpack:()=>[8795]},loading:()=>(0,a.jsx)("p",{children:"Loading..."}),ssr:!1})}},function(e){e.O(0,[587,519,145,774,888,179],function(){return e(e.s=1993)}),_N_E=e.O()}]);