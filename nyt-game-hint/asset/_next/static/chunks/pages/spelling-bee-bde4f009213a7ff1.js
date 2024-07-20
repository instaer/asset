(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795],{3094:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var i=a(n(4938)),r=n(5893);t.Z=(0,i.default)((0,r.jsx)("path",{d:"M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2"}),"QuestionMark")},1993:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spelling-bee",function(){return n(6153)}])},6153:function(e,t,n){"use strict";n.r(t),n.d(t,{SpellingBee:function(){return SpellingBee},__N_SSP:function(){return E},default:function(){return SpellingBeePage}});var a=n(5893),i=n(4993),r=n(4080),s=n(366),o=n(7294),l=n(6950),c=n(2734),d=n(1233),h=n(5616),u=n(5861),p=n(1519),m=n(9417),g=n(2280),x=n(8895),y=n(2797),f=n(8456),w=n(4558),j=n(7918),b=n(2180),Z=n(7285),k=n(3508),v=n(2961),D=n(2450),S=n(2761),T=n(3328),_=n(3890),C=n(9606),F=n(3094),H=n(586),W=n(720),P=n(6994),I=n(7484),N=n.n(I),A=n(1221);let M=l.K[3],Y=[{q:"Where can I play ".concat(M.name,"?"),a:'Find the official game on <a style="color:#006BD6;font-weight:500;-webkit-text-decoration: underline;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(M.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(M.name,'</a>.<br><br>For those seeking an extra challenge or a helpful nudge, visit <a style="color:#006BD6;font-weight:500;-webkit-text-decoration: underline;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="').concat(r.e.url,'" target="_blank" rel="noopener">').concat(r.e.title," - ").concat(M.label,"</a> for game hints and strategies. Choose your path wisely!")},{q:"How to play ".concat(M.name,"?"),a:"Create words using letters from the hive. Words must contain at least 4 letters and include the center letter. Letters can be reused in each word. Longer words earn more points and improve your ranking."},{q:"How are ".concat(M.name," points calculated?"),a:'4-letter words are worth 1 point each. Longer words earn 1 point per letter. Each puzzle includes at least one "pangram" which uses every letter. These are worth 7 extra points!<br>Finding pangrams is key to achieving a higher rank.'},{q:"When do ".concat(M.name," hints update?"),a:"Hints are typically updated daily after 3:00 AM Eastern Time. The update process usually takes 5-10 minutes. Check back if not immediately available."},{q:"Is there a cost for ".concat(M.name," hints?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(M.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(M.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(M.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(M.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var E=!0;function SpellingBeePage(e){let{latestData:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{url:r.e.url+M.url,title:M.label+" - "+r.e.title,description:M.description,keywords:M.keywords,imageUrl:r.e.logoUrl}),(0,a.jsx)(i.Z,{selectedTabValue:M.index,TabComponent:()=>(0,a.jsx)(SpellingBee,{tab:M,latestData:t})})]})}function SpellingBee(e){let{tab:t,latestData:n}=e,[i,r]=o.useState(null),[s,l]=o.useState(null),[f,w]=o.useState(null),[j,b]=o.useState({loading:!1,error:null,data:{}}),v=(0,c.Z)();o.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),r(N()(n))},[]);let D=o.useMemo(()=>{switch(f){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[f]),formatSearchDate=e=>e?N()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(b(e=>({...e,loading:!0})),!s){b({loading:!1,error:"Please select a date to view hints",data:{}});return}if(f){b({loading:!1,error:D,data:{}});return}let e={gameType:t.gameType,printDate:formatSearchDate(s),timestamp:Date.now()},{encryptedContent:n,encryptedAesKey:a}=await (0,A.K)(JSON.stringify(e)),{result:i,error:r}=await (0,Z.D2)("api/nyt-game-hint/search",{json:n,key:a});if(r){b({loading:!1,error:null==r?void 0:r.message,data:{}});return}let o=await (0,A.h)(null==i?void 0:i.body.json,null==i?void 0:i.body.key);if(i.body.gameData=JSON.parse(o),!i.body.gameData||(null==i?void 0:i.body.gameData.length)===0){b({loading:!1,error:"No hints found for this date",data:{}});return}b({loading:!1,error:null,data:null==i?void 0:i.body})};return(0,a.jsxs)(d.Z,{spacing:1,children:[(0,a.jsx)("header",{children:(0,a.jsxs)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,a.jsx)(u.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:t.title}),(0,a.jsx)(u.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:t.subTitle}),(0,a.jsx)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:(0,a.jsx)(p.Z,{})})]})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-today",children:(0,a.jsx)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,a.jsxs)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(T.Z,{sx:{mr:1}}),"Hints for ",n.printDate]}),(0,a.jsx)(HintDisplay,{responseData:n}),(0,a.jsx)(p.Z,{})]})})}),(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-archive-search",children:(0,a.jsxs)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,a.jsxs)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(_.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,a.jsxs)(d.Z,{direction:"row",spacing:1,children:[(0,a.jsx)(h.Z,{sx:{width:"75%"},children:(0,a.jsx)(W._,{dateAdapter:H.y,children:(0,a.jsx)(P.M,{label:"Select a date within the last year",value:s,onChange:e=>l(e),minDate:i,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>w(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,a.jsx)(h.Z,{sx:{width:"25%"},children:(0,a.jsx)(m.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:j.loading,children:(0,a.jsx)(S.Z,{})})})]})]}),(0,a.jsxs)(d.Z,{spacing:2,mt:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsx)(SearchDisplay,{searchHints:j}),(0,a.jsx)(p.Z,{})]})]})}),(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-faq",children:(0,a.jsx)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,a.jsxs)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(C.Z,{sx:{mr:1}}),t.name," Hints FAQ"]}),(0,a.jsx)(d.Z,{spacing:0,children:Y.map((e,t)=>(0,a.jsxs)(g.Z,{sx:{border:0},children:[(0,a.jsx)(x.Z,{expandIcon:(0,a.jsx)(k.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),children:(0,a.jsx)(u.Z,{component:"h4",children:e.q})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)(u.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t}=e;return t.loading?(0,a.jsx)(h.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(f.Z,{})}):t.error?(0,a.jsx)(u.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,a.jsx)(HintDisplay,{responseData:t.data}):(0,a.jsx)(a.Fragment,{})}function HintDisplay(e){var t;let{responseData:n}=e,i=groupWordsByScore(null===(t=n.gameData)||void 0===t?void 0:t.today),[r,s]=o.useState(i.map(()=>!1)),[l,h]=o.useState(i.map(e=>e.words.map((t,n)=>!e.isPangram&&e.words.length>1&&0===n))),p=(0,c.Z)(),f=(0,w.Z)(p.breakpoints.up("sm")),handleHintToggleVisibility=e=>{s(t=>{let n=!t[e];return h(t=>t.map((t,a)=>a===e?t.map(()=>n):t)),t.map((t,a)=>a===e?n:t)})},handleWordHintToggleVisibility=(e,t)=>{h(n=>{let a=n.map((n,a)=>a===e?n.map((e,n)=>n===t?!e:e):n),i=a[e].every(e=>!0===e),r=a[e].every(e=>!1===e);return s(t=>t.map((t,n)=>n===e?!!i||!r&&t:t)),a})};return(0,a.jsx)(a.Fragment,{children:i.map((e,t)=>(0,a.jsxs)(g.Z,{slotProps:{transition:{unmountOnExit:!0}},sx:{backgroundColor:e.isPangram?"#f7da21":"#e6e6e6","&.Mui-expanded":{backgroundColor:e.isPangram?"#f7da21":"#e6e6e6"}},children:[(0,a.jsx)(x.Z,{expandIcon:(0,a.jsx)(k.Z,{}),id:"panel".concat(t+1,"-header"),"aria-controls":"panel".concat(t+1,"-content"),children:(0,a.jsx)(u.Z,{children:(f?"Click":"Tap")+(e.isPangram?" for a hint on pangrams (7 bonus points)":" for a hint on ".concat(e.score,"-point words"))})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)(d.Z,{spacing:1,direction:"row",useFlexGap:!0,flexWrap:"wrap",children:null==e?void 0:e.words.map((e,n)=>l[t][n]?(0,a.jsx)(j.Z,{label:e,size:"medium",sx:{fontWeight:"bold"},onClick:()=>handleWordHintToggleVisibility(t,n)},n):(0,a.jsx)(j.Z,{label:(0,a.jsx)(F.Z,{fontSize:"small",sx:{color:"#FFFFFF"}}),size:"medium",onClick:()=>handleWordHintToggleVisibility(t,n)},n))})}),(0,a.jsx)(b.Z,{children:(0,a.jsx)(m.Z,{variant:"outlined",startIcon:r[t]?(0,a.jsx)(D.Z,{}):(0,a.jsx)(v.Z,{}),onClick:()=>handleHintToggleVisibility(t),children:r[t]?"Hide Answers":"Reveal Answers"})})]},t))})}let groupWordsByScore=e=>{let{answers:t=[],pangrams:n=[]}=e||{},a=new Map,calculateScore=e=>n.includes(e)?e.length+7:4===e.length?1:e.length,i=0;return n.forEach(e=>{let t=calculateScore(e);i=Math.max(i,t)}),n.length>0&&a.set(i,{score:i,words:n,isPangram:!0}),t.forEach(e=>{if(!n.includes(e)){let t=calculateScore(e);a.has(t)?a.get(t).words.push(e):a.set(t,{score:t,words:[e],isPangram:!1})}}),Array.from(a.values()).sort((e,t)=>e.isPangram?-1:t.isPangram?1:e.score-t.score)}}},function(e){e.O(0,[688,145,774,888,179],function(){return e(e.s=1993)}),_N_E=e.O()}]);