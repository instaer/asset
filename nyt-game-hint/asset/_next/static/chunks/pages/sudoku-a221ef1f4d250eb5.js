(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{7351:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sudoku",function(){return n(1030)}])},1030:function(e,t,n){"use strict";n.r(t),n.d(t,{Sudoku:function(){return Sudoku},__N_SSP:function(){return B},default:function(){return SudokuPage}});var i=n(5893),a=n(4993),r=n(4080),s=n(366),l=n(7294),o=n(6950),d=n(2734),c=n(1233),u=n(5616),h=n(5861),p=n(1519),m=n(9417),x=n(2280),g=n(8895),y=n(2797),f=n(8456),j=n(4558),w=n(2180),b=n(7285),Z=n(3508),v=n(2961),k=n(2450),D=n(2761),S=n(3328),z=n(3890),P=n(9606),T=n(586),_=n(720),F=n(7610),C=n(7484),E=n.n(C),H=n(1221),I=n(948);let N=(0,I.ZP)(u.Z,{shouldForwardProp:e=>"isPrefilled"!==e&&"isHighlighted"!==e&&"isRightEdge"!==e&&"isBottomEdge"!==e&&"scaleFactor"!==e})(e=>{let{theme:t,isPrefilled:n,isHighlighted:i,isRightEdge:a,isBottomEdge:r,scaleFactor:s}=e;return{width:"".concat(3*s,"rem"),height:"".concat(3*s,"rem"),display:"flex",justifyContent:"center",alignItems:"center",fontSize:"".concat(1.7999999999999998*s,"rem"),fontWeight:"bold",backgroundColor:n?"#E6E6E6":i?"#FFDA00":"white",color:"black",borderRight:a?"".concat(.2*s,"rem solid #959595"):"".concat(.5*s,"px solid #959595"),borderBottom:r?"".concat(.2*s,"rem solid #959595"):"".concat(.5*s,"px solid #959595"),boxSizing:"border-box"}}),A=(0,I.ZP)(u.Z,{shouldForwardProp:e=>"scaleFactor"!==e})(e=>{let{scaleFactor:t}=e;return{width:"".concat(27*t,"rem"),height:"".concat(27*t,"rem"),display:"grid",gridTemplateColumns:"repeat(9, 1fr)",gridTemplateRows:"repeat(9, 1fr)",position:"relative",boxSizing:"content-box",border:"".concat(.2*t,"rem solid black")}}),Y=l.forwardRef((e,t)=>{let{puzzle:n,solution:a,isLargeScreenDevice:r}=e,[s,o]=(0,l.useState)("initial"),[d,c]=(0,l.useState)([]),u=r?.9:.55;(0,l.useEffect)(()=>{let e=n.map((e,t)=>3>Math.floor(t/9)&&t%9<3&&0===e?a[t]:e);c(e)},[n,a]),l.useImperativeHandle(t,()=>({displayPuzzle,displaySolution}));let displayPuzzle=()=>{o("puzzle"),c([...n])},displaySolution=()=>{o("solution"),c([...a])};return(0,i.jsx)(A,{scaleFactor:u,children:d.map((e,t)=>{let a=Math.floor(t/9),r=t%9,l=0!==n[t];return(0,i.jsx)(N,{isPrefilled:l,isHighlighted:!l&&0!==e&&("initial"!==s||a<3&&r<3),isRightEdge:(r+1)%3==0&&8!==r,isBottomEdge:(a+1)%3==0&&8!==a,scaleFactor:u,children:0!==e?e:""},t)})})}),M=o.K[4],W=["#f9df6d","#f7da21","#FB9B00"],q=[{q:"What can ".concat(M.title," do?"),a:"View today's ".concat(M.name," hints, reveal puzzle answers progressively, and access an archive of past ").concat(M.name," hints.")},{q:"When do ".concat(M.title," update?"),a:'Hints typically update after 10 PM ET (Sun-Thu) and 6 PM ET (Fri-Sat), syncing with <a style="color:#006BD6;font-weight:500;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(M.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(M.name," Puzzle</a>. The update process usually takes only a few minutes. Check back if not immediately available.")},{q:"Is there a cost for ".concat(M.title,"?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(M.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(M.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(M.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(M.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var B=!0;function SudokuPage(e){let{latestData:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{url:r.e.url+M.url,title:M.pageTitle,description:M.description,keywords:M.keywords,imageUrl:r.e.logoUrl}),(0,i.jsx)(a.Z,{selectedTabValue:M.index,TabComponent:()=>(0,i.jsx)(Sudoku,{tab:M,latestData:t})})]})}function Sudoku(e){let{tab:t,latestData:n}=e,[a,r]=l.useState(null),[s,o]=l.useState(null),[f,j]=l.useState(null),[w,v]=l.useState({loading:!1,error:null,data:{}}),k=(0,d.Z)();l.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),r(E()(n))},[]);let C=l.useMemo(()=>{switch(f){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[f]),formatSearchDate=e=>e?E()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(v(e=>({...e,loading:!0})),!s){v({loading:!1,error:"Please select a date to view hints",data:{}});return}if(f){v({loading:!1,error:C,data:{}});return}let e={gameType:t.gameType,printDate:formatSearchDate(s),timestamp:Date.now()},{encryptedContent:n,encryptedAesKey:i}=await (0,H.K)(JSON.stringify(e)),{result:a,error:r}=await (0,b.D2)("api/nyt-game-hint/search",{json:n,key:i});if(r){v({loading:!1,error:null==r?void 0:r.message,data:{}});return}let l=await (0,H.h)(null==a?void 0:a.body.json,null==a?void 0:a.body.key);if(a.body.gameData=JSON.parse(l),!a.body.gameData||(null==a?void 0:a.body.gameData.length)===0){v({loading:!1,error:"No hints found for this date",data:{}});return}v({loading:!1,error:null,data:null==a?void 0:a.body})};return(0,i.jsxs)(c.Z,{spacing:1,children:[(0,i.jsx)("header",{children:(0,i.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(h.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:t.title}),(0,i.jsx)(h.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:t.subTitle}),(0,i.jsx)(c.Z,{spacing:2,sx:{width:"100%",[k.breakpoints.up("sm")]:{width:"80%"},[k.breakpoints.up("md")]:{width:"55%"}},children:(0,i.jsx)(p.Z,{})})]})}),(0,i.jsxs)("main",{children:[(0,i.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-today",children:(0,i.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,i.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[k.breakpoints.up("sm")]:{width:"80%"},[k.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(S.Z,{sx:{mr:1}}),"Hints for ",n.printDate]}),(0,i.jsx)(HintDisplay,{responseData:n}),(0,i.jsx)(p.Z,{})]})})}),(0,i.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-archive-search",children:(0,i.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,i.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[k.breakpoints.up("sm")]:{width:"80%"},[k.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(z.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,i.jsxs)(c.Z,{direction:"row",spacing:1,children:[(0,i.jsx)(u.Z,{sx:{width:"75%"},children:(0,i.jsx)(_._,{dateAdapter:T.y,children:(0,i.jsx)(F.M,{label:"Select a date within the last year",value:s,onChange:e=>o(e),minDate:a,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>j(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,i.jsx)(u.Z,{sx:{width:"25%"},children:(0,i.jsx)(m.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:w.loading,children:(0,i.jsx)(D.Z,{})})})]})]}),(0,i.jsxs)(c.Z,{spacing:2,mt:2,sx:{width:"100%",[k.breakpoints.up("sm")]:{width:"80%"},[k.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsx)(SearchDisplay,{searchHints:w}),(0,i.jsx)(p.Z,{})]})]})}),(0,i.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-faq",children:(0,i.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,i.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[k.breakpoints.up("sm")]:{width:"80%"},[k.breakpoints.up("md")]:{width:"55%"}},children:[(0,i.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(P.Z,{sx:{mr:1}}),t.name," Hints FAQ"]}),(0,i.jsx)(c.Z,{spacing:0,children:q.map((e,t)=>(0,i.jsxs)(x.Z,{sx:{border:0},children:[(0,i.jsx)(g.Z,{expandIcon:(0,i.jsx)(Z.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),children:(0,i.jsx)(h.Z,{component:"h4",children:e.q})}),(0,i.jsx)(y.Z,{children:(0,i.jsx)(h.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t}=e;return t.loading?(0,i.jsx)(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,i.jsx)(f.Z,{})}):t.error?(0,i.jsx)(h.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,i.jsx)(HintDisplay,{responseData:t.data}):(0,i.jsx)(i.Fragment,{})}function HintDisplay(e){let{responseData:t}=e,n=["easy","medium","hard"],[a,r]=l.useState(n.map(()=>!1)),s=l.useRef(n.map(()=>l.createRef())),o=(0,d.Z)(),c=(0,j.Z)(o.breakpoints.up("sm")),displayPuzzle=e=>{s.current[e]&&s.current[e].current&&s.current[e].current.displayPuzzle()},displaySolution=e=>{s.current[e]&&s.current[e].current&&s.current[e].current.displaySolution()},handleHintToggleVisibility=e=>{r(t=>{let n=!t[e];return n?displaySolution(e):displayPuzzle(e),t.map((t,i)=>i===e?n:t)})};return(0,i.jsx)(i.Fragment,{children:n.map((e,n)=>{var r,l,o,d,p,f;return(0,i.jsxs)(x.Z,{slotProps:{transition:{unmountOnExit:!0}},sx:{backgroundColor:W[n],"&.Mui-expanded":{backgroundColor:W[n]}},children:[(0,i.jsx)(g.Z,{expandIcon:(0,i.jsx)(Z.Z,{}),id:"panel".concat(n+1,"-header"),"aria-controls":"panel".concat(n+1,"-content"),children:(0,i.jsxs)(h.Z,{children:[c?"Click":"Tap"," for a hint: ",e.charAt(0).toUpperCase()+e.slice(1)," puzzle"]})}),(0,i.jsx)(y.Z,{children:(0,i.jsx)(u.Z,{children:(0,i.jsx)(Y,{ref:s.current[n],puzzle:null==t?void 0:null===(o=t.gameData)||void 0===o?void 0:null===(l=o[e])||void 0===l?void 0:null===(r=l.puzzle_data)||void 0===r?void 0:r.puzzle,solution:null==t?void 0:null===(f=t.gameData)||void 0===f?void 0:null===(p=f[e])||void 0===p?void 0:null===(d=p.puzzle_data)||void 0===d?void 0:d.solution,isLargeScreenDevice:c})})}),(0,i.jsx)(w.Z,{children:(0,i.jsx)(m.Z,{variant:"outlined",startIcon:a[n]?(0,i.jsx)(k.Z,{}):(0,i.jsx)(v.Z,{}),onClick:()=>handleHintToggleVisibility(n),children:a[n]?"Hide Answers":"Reveal Answers"})})]},n)})})}}},function(e){e.O(0,[106,145,774,888,179],function(){return e(e.s=7351)}),_N_E=e.O()}]);