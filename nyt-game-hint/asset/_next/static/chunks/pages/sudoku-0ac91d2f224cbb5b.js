(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{7351:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sudoku",function(){return n(1030)}])},1030:function(e,t,n){"use strict";n.r(t),n.d(t,{Sudoku:function(){return Sudoku},__N_SSP:function(){return B},default:function(){return SudokuPage}});var a=n(5893),i=n(4993),r=n(4080),o=n(366),l=n(7294),s=n(6950),c=n(2734),d=n(1233),u=n(5616),h=n(5861),p=n(1519),m=n(9417),x=n(2280),g=n(8895),y=n(2797),f=n(8456),j=n(4558),w=n(2180),b=n(7285),Z=n(3508),k=n(2961),v=n(2450),D=n(2761),S=n(3328),z=n(3890),F=n(9606),_=n(586),P=n(720),T=n(6994),C=n(7484),E=n.n(C),H=n(1221),I=n(948);let N=(0,I.ZP)(u.Z,{shouldForwardProp:e=>"isPrefilled"!==e&&"isHighlighted"!==e&&"isRightEdge"!==e&&"isBottomEdge"!==e&&"scaleFactor"!==e})(e=>{let{theme:t,isPrefilled:n,isHighlighted:a,isRightEdge:i,isBottomEdge:r,scaleFactor:o}=e;return{width:"".concat(3*o,"rem"),height:"".concat(3*o,"rem"),display:"flex",justifyContent:"center",alignItems:"center",fontSize:"".concat(1.7999999999999998*o,"rem"),fontWeight:"bold",backgroundColor:n?"#E6E6E6":a?"#FFDA00":"white",color:"black",borderRight:i?"".concat(.2*o,"rem solid #959595"):"".concat(.5*o,"px solid #959595"),borderBottom:r?"".concat(.2*o,"rem solid #959595"):"".concat(.5*o,"px solid #959595"),boxSizing:"border-box"}}),A=(0,I.ZP)(u.Z,{shouldForwardProp:e=>"scaleFactor"!==e})(e=>{let{scaleFactor:t}=e;return{width:"".concat(27*t,"rem"),height:"".concat(27*t,"rem"),display:"grid",gridTemplateColumns:"repeat(9, 1fr)",gridTemplateRows:"repeat(9, 1fr)",position:"relative",boxSizing:"content-box",border:"".concat(.2*t,"rem solid black")}}),Y=l.forwardRef((e,t)=>{let{puzzle:n,solution:i,isLargeScreenDevice:r}=e,[o,s]=(0,l.useState)("initial"),[c,d]=(0,l.useState)([]),u=r?.9:.55;(0,l.useEffect)(()=>{let e=n.map((e,t)=>3>Math.floor(t/9)&&t%9<3&&0===e?i[t]:e);d(e)},[n,i]),l.useImperativeHandle(t,()=>({displayPuzzle,displaySolution}));let displayPuzzle=()=>{s("puzzle"),d([...n])},displaySolution=()=>{s("solution"),d([...i])};return(0,a.jsx)(A,{scaleFactor:u,children:c.map((e,t)=>{let i=Math.floor(t/9),r=t%9,l=0!==n[t];return(0,a.jsx)(N,{isPrefilled:l,isHighlighted:!l&&0!==e&&("initial"!==o||i<3&&r<3),isRightEdge:(r+1)%3==0&&8!==r,isBottomEdge:(i+1)%3==0&&8!==i,scaleFactor:u,children:0!==e?e:""},t)})})}),M=s.K[4],q=["#f9df6d","#f7da21","#FB9B00"],W=[{q:"Where can I play ".concat(M.name,"?"),a:'Find the official game on <a style="color:#006BD6;font-weight:500;-webkit-text-decoration: underline;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(M.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(M.name,'</a>.<br><br>For those seeking an extra challenge or a helpful nudge, visit <a style="color:#006BD6;font-weight:500;-webkit-text-decoration: underline;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="').concat(r.e.url,'" target="_blank" rel="noopener">').concat(r.e.title," - ").concat(M.label,"</a> for game hints and strategies. Choose your path wisely!")},{q:"How to play ".concat(M.name,"?"),a:"Fill each 3 x 3 set with numbers 1-9. Numbers in sets, rows, or columns cannot repeat.<br><br><strong>Key tip</strong>: Each number can appear on the board only 9 times total."},{q:"When do ".concat(M.name," hints update?"),a:"Hints typically update after 10 PM ET (Sun-Thu) and 6 PM ET (Fri-Sat). Updates take about 5-10 minutes. Check back if not immediately available."},{q:"Is there a cost for ".concat(M.name," hints?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(M.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(M.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(M.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(M.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var B=!0;function SudokuPage(e){let{latestData:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{url:r.e.url+M.url,title:M.label+" - "+r.e.title,description:M.description,keywords:M.keywords,imageUrl:r.e.logoUrl}),(0,a.jsx)(i.Z,{selectedTabValue:M.index,TabComponent:()=>(0,a.jsx)(Sudoku,{tab:M,latestData:t})})]})}function Sudoku(e){let{tab:t,latestData:n}=e,[i,r]=l.useState(null),[o,s]=l.useState(null),[f,j]=l.useState(null),[w,k]=l.useState({loading:!1,error:null,data:{}}),v=(0,c.Z)();l.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),r(E()(n))},[]);let C=l.useMemo(()=>{switch(f){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[f]),formatSearchDate=e=>e?E()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(k(e=>({...e,loading:!0})),!o){k({loading:!1,error:"Please select a date to view hints",data:{}});return}if(f){k({loading:!1,error:C,data:{}});return}let e={gameType:t.gameType,printDate:formatSearchDate(o),timestamp:Date.now()},{encryptedContent:n,encryptedAesKey:a}=await (0,H.K)(JSON.stringify(e)),{result:i,error:r}=await (0,b.D2)("api/nyt-game-hint/search",{json:n,key:a});if(r){k({loading:!1,error:null==r?void 0:r.message,data:{}});return}let l=await (0,H.h)(null==i?void 0:i.body.json,null==i?void 0:i.body.key);if(i.body.gameData=JSON.parse(l),!i.body.gameData||(null==i?void 0:i.body.gameData.length)===0){k({loading:!1,error:"No hints found for this date",data:{}});return}k({loading:!1,error:null,data:null==i?void 0:i.body})};return(0,a.jsxs)(d.Z,{spacing:1,children:[(0,a.jsx)("header",{children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,a.jsx)(h.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:t.title}),(0,a.jsx)(h.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:t.subTitle}),(0,a.jsx)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:(0,a.jsx)(p.Z,{})})]})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-today",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,a.jsxs)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(S.Z,{sx:{mr:1}}),"Hints for ",n.printDate]}),(0,a.jsx)(HintDisplay,{responseData:n}),(0,a.jsx)(p.Z,{})]})})}),(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-archive-search",children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,a.jsxs)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(z.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,a.jsxs)(d.Z,{direction:"row",spacing:1,children:[(0,a.jsx)(u.Z,{sx:{width:"75%"},children:(0,a.jsx)(P._,{dateAdapter:_.y,children:(0,a.jsx)(T.M,{label:"Select a date within the last year",value:o,onChange:e=>s(e),minDate:i,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>j(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,a.jsx)(u.Z,{sx:{width:"25%"},children:(0,a.jsx)(m.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:w.loading,children:(0,a.jsx)(D.Z,{})})})]})]}),(0,a.jsxs)(d.Z,{spacing:2,mt:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsx)(SearchDisplay,{searchHints:w}),(0,a.jsx)(p.Z,{})]})]})}),(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-faq",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,a.jsxs)(d.Z,{spacing:2,sx:{width:"100%",[v.breakpoints.up("sm")]:{width:"80%"},[v.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(F.Z,{sx:{mr:1}}),t.name," Hints FAQ"]}),(0,a.jsx)(d.Z,{spacing:0,children:W.map((e,t)=>(0,a.jsxs)(x.Z,{sx:{border:0},children:[(0,a.jsx)(g.Z,{expandIcon:(0,a.jsx)(Z.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),children:(0,a.jsx)(h.Z,{component:"h4",children:e.q})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)(h.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t}=e;return t.loading?(0,a.jsx)(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(f.Z,{})}):t.error?(0,a.jsx)(h.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,a.jsx)(HintDisplay,{responseData:t.data}):(0,a.jsx)(a.Fragment,{})}function HintDisplay(e){let{responseData:t}=e,n=["easy","medium","hard"],[i,r]=l.useState(n.map(()=>!1)),o=l.useRef(n.map(()=>l.createRef())),s=(0,c.Z)(),d=(0,j.Z)(s.breakpoints.up("sm")),displayPuzzle=e=>{o.current[e]&&o.current[e].current&&o.current[e].current.displayPuzzle()},displaySolution=e=>{o.current[e]&&o.current[e].current&&o.current[e].current.displaySolution()},handleHintToggleVisibility=e=>{r(t=>{let n=!t[e];return n?displaySolution(e):displayPuzzle(e),t.map((t,a)=>a===e?n:t)})};return(0,a.jsx)(a.Fragment,{children:n.map((e,n)=>{var r,l,s,c,p,f;return(0,a.jsxs)(x.Z,{slotProps:{transition:{unmountOnExit:!0}},sx:{backgroundColor:q[n],"&.Mui-expanded":{backgroundColor:q[n]}},children:[(0,a.jsx)(g.Z,{expandIcon:(0,a.jsx)(Z.Z,{}),id:"panel".concat(n+1,"-header"),"aria-controls":"panel".concat(n+1,"-content"),children:(0,a.jsxs)(h.Z,{children:[d?"Click":"Tap"," for a hint: ",e.charAt(0).toUpperCase()+e.slice(1)," puzzle"]})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)(u.Z,{children:(0,a.jsx)(Y,{ref:o.current[n],puzzle:null==t?void 0:null===(s=t.gameData)||void 0===s?void 0:null===(l=s[e])||void 0===l?void 0:null===(r=l.puzzle_data)||void 0===r?void 0:r.puzzle,solution:null==t?void 0:null===(f=t.gameData)||void 0===f?void 0:null===(p=f[e])||void 0===p?void 0:null===(c=p.puzzle_data)||void 0===c?void 0:c.solution,isLargeScreenDevice:d})})}),(0,a.jsx)(w.Z,{children:(0,a.jsx)(m.Z,{variant:"outlined",startIcon:i[n]?(0,a.jsx)(v.Z,{}):(0,a.jsx)(k.Z,{}),onClick:()=>handleHintToggleVisibility(n),children:i[n]?"Hide Answers":"Reveal Answers"})})]},n)})})}}},function(e){e.O(0,[688,145,774,888,179],function(){return e(e.s=7351)}),_N_E=e.O()}]);