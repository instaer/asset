(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wordle",function(){return n(4798)}])},4798:function(e,t,n){"use strict";n.r(t),n.d(t,{Wordle:function(){return Wordle},__N_SSP:function(){return O},default:function(){return WordlePage}});var i=n(5893),a=n(4993),s=n(4080),r=n(366),l=n(7294),o=n(6950),d=n(2734),c=n(1233),h=n(5616),u=n(5861),x=n(1519),p=n(9417),m=n(2280),g=n(8895),y=n(2797),f=n(8456),j=n(4558),w=n(6886),b=n(2180),Z=n(948),v=n(629),k=n(7285),D=n(3508),S=n(2961),C=n(2450),_=n(9217),H=n(2761),T=n(3328),W=n(3890),A=n(9606),F=n(3094),I=n(586),N=n(720),Y=n(6994),q=n(7484),E=n.n(q),P=n(1221);let M=o.K[1],B=[{q:"Where can I play ".concat(M.name,"?"),a:'Find the official game on <a style="color:#006BD6;font-weight:500;-webkit-text-decoration: underline;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(M.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(M.name,'</a>.<br><br>For those seeking an extra challenge or a helpful nudge, visit <a style="color:#006BD6;font-weight:500;-webkit-text-decoration: underline;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="').concat(s.e.url,'" target="_blank" rel="noopener">').concat(s.e.title," - ").concat(M.label,"</a> for game hints and strategies. Choose your path wisely!")},{q:"How to play ".concat(M.name,"?"),a:"You have 6 tries to guess a 5-letter word. Each guess must be a valid word. The color of the tiles changes to show how close your guess is to the word."},{q:"When do ".concat(M.name," hints update?"),a:"Hints refresh daily, typically just after midnight Eastern Time. The update process usually takes 5-10 minutes. Check back if not immediately available."},{q:"Is there a cost for ".concat(M.name," hints?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(M.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(M.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(M.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(M.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var O=!0;function WordlePage(e){let{latestData:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{url:s.e.url+M.url,title:M.label+" - "+s.e.title,description:M.description,keywords:M.keywords,imageUrl:s.e.logoUrl}),(0,i.jsx)(a.Z,{selectedTabValue:M.index,TabComponent:()=>(0,i.jsx)(Wordle,{tab:M,latestData:t})})]})}function Wordle(e){let{tab:t,latestData:n}=e,[a,s]=l.useState(null),[r,o]=l.useState(null),[f,j]=l.useState(null),[w,b]=l.useState({loading:!1,error:null,data:{}}),Z=(0,d.Z)();l.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),s(E()(n))},[]);let v=l.useMemo(()=>{switch(f){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[f]),formatSearchDate=e=>e?E()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(b(e=>({...e,loading:!0})),!r){b({loading:!1,error:"Please select a date to view hints",data:{}});return}if(f){b({loading:!1,error:v,data:{}});return}let e={gameType:t.gameType,printDate:formatSearchDate(r),timestamp:Date.now()},{encryptedContent:n,encryptedAesKey:i}=await (0,P.K)(JSON.stringify(e)),{result:a,error:s}=await (0,k.D2)("api/nyt-game-hint/search",{json:n,key:i});if(s){b({loading:!1,error:null==s?void 0:s.message,data:{}});return}let l=await (0,P.h)(null==a?void 0:a.body.json,null==a?void 0:a.body.key);if(a.body.gameData=JSON.parse(l),!a.body.gameData||(null==a?void 0:a.body.gameData.length)===0){b({loading:!1,error:"No hints found for this date",data:{}});return}b({loading:!1,error:null,data:null==a?void 0:a.body})};return(0,i.jsxs)(c.Z,{spacing:1,children:[(0,i.jsx)("header",{children:(0,i.jsxs)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(u.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:t.title}),(0,i.jsx)(u.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:t.subTitle}),(0,i.jsx)(c.Z,{spacing:2,sx:{width:"100%",[Z.breakpoints.up("sm")]:{width:"80%"},[Z.breakpoints.up("md")]:{width:"55%"}},children:(0,i.jsx)(x.Z,{})})]})}),(0,i.jsxs)("main",{children:[(0,i.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-today",children:(0,i.jsx)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,i.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[Z.breakpoints.up("sm")]:{width:"80%"},[Z.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(T.Z,{sx:{mr:1}}),"Hints for ",n.printDate]}),(0,i.jsx)(HintDisplay,{responseData:n,isArchivedHint:!1}),(0,i.jsx)(x.Z,{})]})})}),(0,i.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-archive-search",children:(0,i.jsxs)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,i.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[Z.breakpoints.up("sm")]:{width:"80%"},[Z.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(W.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,i.jsxs)(c.Z,{direction:"row",spacing:1,children:[(0,i.jsx)(h.Z,{sx:{width:"75%"},children:(0,i.jsx)(N._,{dateAdapter:I.y,children:(0,i.jsx)(Y.M,{label:"Select a date within the last year",value:r,onChange:e=>o(e),minDate:a,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>j(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,i.jsx)(h.Z,{sx:{width:"25%"},children:(0,i.jsx)(p.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:w.loading,children:(0,i.jsx)(H.Z,{})})})]})]}),(0,i.jsxs)(c.Z,{spacing:2,mt:2,sx:{width:"100%",[Z.breakpoints.up("sm")]:{width:"80%"},[Z.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsx)(SearchDisplay,{searchHints:w}),(0,i.jsx)(x.Z,{})]})]})}),(0,i.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-faq",children:(0,i.jsx)(h.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,i.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[Z.breakpoints.up("sm")]:{width:"80%"},[Z.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(u.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(A.Z,{sx:{mr:1}}),t.name," Hints FAQ"]}),(0,i.jsx)(c.Z,{spacing:0,children:B.map((e,t)=>(0,i.jsxs)(m.Z,{sx:{border:0},children:[(0,i.jsx)(g.Z,{expandIcon:(0,i.jsx)(D.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),children:(0,i.jsx)(u.Z,{component:"h4",children:e.q})}),(0,i.jsx)(y.Z,{children:(0,i.jsx)(u.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t}=e;return t.loading?(0,i.jsx)(h.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,i.jsx)(f.Z,{})}):t.error?(0,i.jsx)(u.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,i.jsx)(HintDisplay,{responseData:t.data,isArchivedHint:!0}):(0,i.jsx)(i.Fragment,{})}function HintDisplay(e){var t,n,a,s;let{responseData:r,isArchivedHint:o}=e,[c,x]=l.useState(null===(n=r.gameData)||void 0===n?void 0:null===(t=n.solution)||void 0===t?void 0:t.split("").map((e,t)=>0===t)),[f,Z]=l.useState(!1),v=(0,d.Z)(),k=(0,j.Z)(v.breakpoints.up("sm")),handleHintToggleVisibility=e=>{x(t=>{let n=t.map((t,n)=>n===e?!t:t),i=n.every(e=>!0===e);return Z(i),n})},setAllHintsVisibleStates=()=>{x(e=>{let t=Array(c.length).fill(!f);return Z(!f),t})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Z,{defaultExpanded:o,sx:{backgroundColor:"#C9B458","&.Mui-expanded":{backgroundColor:"#C9B458"}},children:[(0,i.jsx)(g.Z,{expandIcon:(0,i.jsx)(D.Z,{}),id:"panel-header","aria-controls":"panel-content",children:(0,i.jsxs)(u.Z,{children:[k?"Click":"Tap"," for a hint"]})}),(0,i.jsxs)(y.Z,{children:[(0,i.jsxs)(u.Z,{fontWeight:"bold",sx:{display:"flex",alignItems:"center",mb:2},children:[(0,i.jsx)(_.Z,{sx:{mr:1}}),"Guess a 5-letter word"]}),(0,i.jsx)(h.Z,{sx:{flexGrow:1},children:(0,i.jsx)(w.ZP,{container:!0,spacing:1,justifyContent:"center",children:null===(s=r.gameData)||void 0===s?void 0:null===(a=s.solution)||void 0===a?void 0:a.split("").map((e,t)=>(0,i.jsx)(w.ZP,{item:!0,onClick:()=>handleHintToggleVisibility(t),children:(0,i.jsx)(Q,{elevation:0,children:c[t]?(0,i.jsx)(u.Z,{sx:V,children:e}):(0,i.jsx)(F.Z,{sx:V})})},t))})})]}),(0,i.jsx)(b.Z,{children:(0,i.jsx)(p.Z,{variant:"outlined",startIcon:f?(0,i.jsx)(C.Z,{}):(0,i.jsx)(S.Z,{}),onClick:()=>setAllHintsVisibleStates(),children:f?"Hide Word":"Reveal Word"})})]})})}let V={lineHeight:1,color:"#FFFFFF",fontWeight:"bold",fontSize:"1.95rem",textTransform:"uppercase",padding:"0px 0px 1px 0px"},Q=(0,Z.ZP)(v.Z)(e=>{let{theme:t}=e;return{width:"2.4rem",height:"2.4rem",display:"flex",justifyContent:"center",alignItems:"center",border:0,borderRadius:0,boxShadow:"none",backgroundColor:"#6AAA64"}})}},function(e){e.O(0,[924,868,145,774,888,179],function(){return e(e.s=759)}),_N_E=e.O()}]);