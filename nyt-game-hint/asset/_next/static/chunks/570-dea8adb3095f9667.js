"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[570],{889:function(e,t,n){n.r(t),n.d(t,{default:function(){return SudokuHintDisplay}});var a=n(5893),i=n(7294),r=n(2734),l=n(4558),s=n(2280),o=n(8895),d=n(5861),c=n(2797),u=n(5616),h=n(2180),p=n(9417),m=n(3508),x=n(948);let g=(0,x.ZP)(u.Z,{shouldForwardProp:e=>"isPrefilled"!==e&&"isHighlighted"!==e&&"isRightEdge"!==e&&"isBottomEdge"!==e&&"scaleFactor"!==e})(e=>{let{theme:t,isPrefilled:n,isHighlighted:a,isRightEdge:i,isBottomEdge:r,scaleFactor:l}=e;return{width:"".concat(3*l,"rem"),height:"".concat(3*l,"rem"),display:"flex",justifyContent:"center",alignItems:"center",fontSize:"".concat(1.7999999999999998*l,"rem"),fontWeight:"bold",backgroundColor:n?"#E6E6E6":a?"#FFDA00":"white",color:"black",borderRight:i?"".concat(.2*l,"rem solid #959595"):"".concat(.5*l,"px solid #959595"),borderBottom:r?"".concat(.2*l,"rem solid #959595"):"".concat(.5*l,"px solid #959595"),boxSizing:"border-box"}}),y=(0,x.ZP)(u.Z,{shouldForwardProp:e=>"scaleFactor"!==e})(e=>{let{scaleFactor:t}=e;return{width:"".concat(27*t,"rem"),height:"".concat(27*t,"rem"),display:"grid",gridTemplateColumns:"repeat(9, 1fr)",gridTemplateRows:"repeat(9, 1fr)",position:"relative",boxSizing:"content-box",border:"".concat(.2*t,"rem solid black")}}),f=i.forwardRef((e,t)=>{let{puzzle:n,solution:r,isLargeScreenDevice:l}=e,[s,o]=(0,i.useState)("initial"),[d,c]=(0,i.useState)([]),u=l?.9:.55;(0,i.useEffect)(()=>{let e=n.map((e,t)=>3>Math.floor(t/9)&&t%9<3&&0===e?r[t]:e);c(e)},[n,r]),i.useImperativeHandle(t,()=>({displayPuzzle,displaySolution}));let displayPuzzle=()=>{o("puzzle"),c([...n])},displaySolution=()=>{o("solution"),c([...r])};return(0,a.jsx)(y,{scaleFactor:u,children:d.map((e,t)=>{let i=Math.floor(t/9),r=t%9,l=0!==n[t];return(0,a.jsx)(g,{isPrefilled:l,isHighlighted:!l&&0!==e&&("initial"!==s||i<3&&r<3),isRightEdge:(r+1)%3==0&&8!==r,isBottomEdge:(i+1)%3==0&&8!==i,scaleFactor:u,children:0!==e?e:""},t)})})});var j=n(2450),w=n(2961);let b=["#f9df6d","#f7da21","#FB9B00"];var SudokuHintDisplay=function(e){let{responseData:t}=e,n=["easy","medium","hard"],[x,g]=i.useState(n.map(()=>!1)),y=i.useRef(n.map(()=>i.createRef())),Z=(0,r.Z)(),v=(0,l.Z)(Z.breakpoints.up("sm")),displayPuzzle=e=>{y.current[e]&&y.current[e].current&&y.current[e].current.displayPuzzle()},displaySolution=e=>{y.current[e]&&y.current[e].current&&y.current[e].current.displaySolution()},handleHintToggleVisibility=e=>{g(t=>{let n=!t[e];return n?displaySolution(e):displayPuzzle(e),t.map((t,a)=>a===e?n:t)})};return(0,a.jsx)(a.Fragment,{children:n.map((e,n)=>{var i,r,l,g,Z,k;return(0,a.jsxs)(s.Z,{slotProps:{transition:{unmountOnExit:!0}},sx:{backgroundColor:b[n],"&.Mui-expanded":{backgroundColor:b[n]}},children:[(0,a.jsx)(o.Z,{expandIcon:(0,a.jsx)(m.Z,{}),id:"panel".concat(n+1,"-header"),"aria-controls":"panel".concat(n+1,"-content"),children:(0,a.jsxs)(d.Z,{children:[v?"Click":"Tap"," for a hint: ",e.charAt(0).toUpperCase()+e.slice(1)," puzzle"]})}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{children:(0,a.jsx)(f,{ref:y.current[n],puzzle:null==t?void 0:null===(l=t.gameData)||void 0===l?void 0:null===(r=l[e])||void 0===r?void 0:null===(i=r.puzzle_data)||void 0===i?void 0:i.puzzle,solution:null==t?void 0:null===(k=t.gameData)||void 0===k?void 0:null===(Z=k[e])||void 0===Z?void 0:null===(g=Z.puzzle_data)||void 0===g?void 0:g.solution,isLargeScreenDevice:v})})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(p.Z,{variant:"outlined",startIcon:x[n]?(0,a.jsx)(j.Z,{}):(0,a.jsx)(w.Z,{}),onClick:()=>handleHintToggleVisibility(n),children:x[n]?"Hide Answers":"Reveal Answers"})})]},n)})})}},8570:function(e,t,n){n.r(t),n.d(t,{Sudoku:function(){return Sudoku},__N_SSP:function(){return N},default:function(){return SudokuPage}});var a=n(5893),i=n(4993),r=n(4080),l=n(366),s=n(7294),o=n(6950),d=n(2734),c=n(1233),u=n(5616),h=n(5861),p=n(1519),m=n(3795),x=n(9417),g=n(2280),y=n(8895),f=n(2797),j=n(8456),w=n(7285),b=n(3508),Z=n(2761),v=n(3328),k=n(3890),D=n(9606),S=n(1462),z=n(586),P=n(720),T=n(7610),F=n(7484),C=n.n(F),I=n(1221),A=n(889),E=n(5152),H=n.n(E),Y=n(6195);let _=o.K[4],M=[{q:"What can ".concat(_.title," do?"),a:"View today's ".concat(_.name," hints, reveal puzzle answers progressively, and access an archive of past ").concat(_.name," hints.")},{q:"When do ".concat(_.title," update?"),a:'Hints typically update after 10 PM ET (Sun-Thu) and 6 PM ET (Fri-Sat), syncing with <a style="color:#006BD6;font-weight:500;text-decoration:underline;text-decoration-color: hsla(210, 100%, 45%, 0.4);" href="'.concat(_.gameAddress,'" target="_blank" rel="noopener nofollow">The New York Times - ').concat(_.name," Puzzle</a>. The update process usually takes only a few minutes. Check back if not immediately available.")},{q:"Is there a cost for ".concat(_.title,"?"),a:"Absolutely free! Created by fellow game enthusiasts to enhance your experience. No hidden charges or paid features - just enjoy the help!"},{q:"Can I access past ".concat(_.name," hints?"),a:'Yes! Explore the "Find archived hints" section to uncover hints from previous days. Note: Archives currently cover the past year only.'},{q:"How to use ".concat(_.name," hints without spoiling the fun?"),a:"Treat hints as gentle nudges, not direct answers. Challenge yourself first, then peek if stumped. This approach sharpens your skills while keeping the game exciting."},{q:"When should I use ".concat(_.name," hints?"),a:"Consider hints when you're stuck after multiple attempts, short on time, new to the game, or simply want a more relaxed solving experience. They're here to help!"},{q:"Does using ".concat(_.name," hints count as completing the game?"),a:"Absolutely! While it may be less challenging, using hints still provides valuable gameplay and learning. As you gain experience, you'll likely rely on them less. Keep playing and watch your skills grow!"}];var N=!0;function SudokuPage(e){let{latestData:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{url:r.e.url+_.url,title:_.pageTitle,description:_.description,keywords:_.keywords,imageUrl:r.e.logoUrl}),(0,a.jsx)(i.Z,{selectedTabValue:_.index,TabComponent:()=>(0,a.jsx)(Sudoku,{tab:_,latestData:t})})]})}function Sudoku(e){let{tab:t,latestData:n}=e,[i,r]=s.useState(null),[l,o]=s.useState(null),[j,F]=s.useState(null),[A,E]=s.useState({loading:!1,error:null,data:{}}),H=(0,d.Z)();s.useEffect(()=>{let e=new Date,t=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),n=new Date(t);n.setFullYear(t.getFullYear()-1),r(C()(n))},[]);let _=s.useMemo(()=>{switch(j){case"maxDate":case"minDate":return"Please select a date within the last year";case"invalidDate":return"Your date is not valid";default:return""}},[j]),formatSearchDate=e=>e?C()(e).format("YYYYMMDD"):"",handleSearchHints=async()=>{if(E(e=>({...e,loading:!0})),!l){E({loading:!1,error:"Please select a date to view hints",data:{}});return}if(j){E({loading:!1,error:_,data:{}});return}let e={gameType:t.gameType,printDate:formatSearchDate(l),timestamp:Date.now()},{encryptedContent:n,encryptedAesKey:a}=await (0,I.K)(JSON.stringify(e)),{result:i,error:r}=await (0,w.D2)("api/nyt-game-hint/search",{json:n,key:a});if(r){E({loading:!1,error:null==r?void 0:r.message,data:{}});return}let s=await (0,I.h)(null==i?void 0:i.body.json,null==i?void 0:i.body.key);if(i.body.gameData=JSON.parse(s),!i.body.gameData||(null==i?void 0:i.body.gameData.length)===0){E({loading:!1,error:"No hints found for this date",data:{}});return}E({loading:!1,error:null,data:null==i?void 0:i.body})};return(0,a.jsxs)(c.Z,{spacing:1,children:[(0,a.jsx)("header",{children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,a.jsx)(h.Z,{variant:"h5",fontWeight:"bold",component:"h1",gutterBottom:!0,children:t.title}),(0,a.jsx)(h.Z,{variant:"subtitle1",component:"h2",color:"text.secondary",gutterBottom:!0,children:t.subTitle}),(0,a.jsx)(c.Z,{spacing:2,sx:{width:"100%",[H.breakpoints.up("sm")]:{width:"80%"},[H.breakpoints.up("md")]:{width:"55%"}},children:(0,a.jsx)(p.Z,{})})]})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-today",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,a.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[H.breakpoints.up("sm")]:{width:"80%"},[H.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(v.Z,{sx:{mr:1}}),"Hints for",(0,a.jsx)(m.Z,{sx:{ml:.5},href:t.archivedUrl((0,Y.XR)(n.printDate,0)),title:t.archivedPageTitle(n.printDate),children:n.printDate}),(0,a.jsx)(m.Z,{sx:{ml:1},href:t.archivedUrl((0,Y.XR)(n.printDate,1)),title:t.archivedPageTitle((0,Y.MY)(n.printDate,1)),children:(0,a.jsx)(S.Z,{sx:{verticalAlign:"middle",color:"rgba(25, 118, 210, 0.4)"}})})]}),(0,a.jsx)(W,{responseData:n}),(0,a.jsx)(p.Z,{})]})})}),(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-archive-search",children:(0,a.jsxs)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:[(0,a.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[H.breakpoints.up("sm")]:{width:"80%"},[H.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(k.Z,{sx:{mr:1}}),"Find archived hints"]}),(0,a.jsxs)(c.Z,{direction:"row",spacing:1,children:[(0,a.jsx)(u.Z,{sx:{width:"75%"},children:(0,a.jsx)(P._,{dateAdapter:z.y,children:(0,a.jsx)(T.M,{label:"Select a date within the last year",value:l,onChange:e=>o(e),minDate:i,views:["year","month","day"],format:"YYYY-MM-DD",disableFuture:!0,onError:e=>F(e),slotProps:{textField:{fullWidth:!0,size:"small"}}})})}),(0,a.jsx)(u.Z,{sx:{width:"25%"},children:(0,a.jsx)(x.Z,{variant:"outlined",size:"large",fullWidth:!0,onClick:()=>handleSearchHints(),disabled:A.loading,children:(0,a.jsx)(Z.Z,{})})})]})]}),(0,a.jsxs)(c.Z,{spacing:2,mt:2,sx:{width:"100%",[H.breakpoints.up("sm")]:{width:"80%"},[H.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsx)(SearchDisplay,{searchHints:A}),(0,a.jsx)(p.Z,{})]})]})}),(0,a.jsx)("section",{id:"nytimes-"+t.lowerName+"-hint-faq",children:(0,a.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:1,children:(0,a.jsxs)(c.Z,{spacing:2,sx:{width:"100%",[H.breakpoints.up("sm")]:{width:"80%"},[H.breakpoints.up("md")]:{width:"55%"}},children:[(0,a.jsxs)(h.Z,{component:"h3",fontWeight:"bold",color:"primary",sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(D.Z,{sx:{mr:1}}),t.name," Hints FAQ"]}),(0,a.jsx)(c.Z,{spacing:0,children:M.map((e,t)=>(0,a.jsxs)(g.Z,{sx:{border:0},children:[(0,a.jsx)(y.Z,{expandIcon:(0,a.jsx)(b.Z,{}),"aria-controls":"QA-".concat(t,"-answer"),id:"QA-".concat(t,"-question"),children:(0,a.jsx)(h.Z,{component:"h4",children:e.q})}),(0,a.jsx)(f.Z,{children:(0,a.jsx)(h.Z,{component:"p",color:"text.secondary",dangerouslySetInnerHTML:{__html:e.a}})})]},"QA-".concat(t)))})]})})})]})]})}function SearchDisplay(e){let{searchHints:t}=e;return t.loading?(0,a.jsx)(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(j.Z,{})}):t.error?(0,a.jsx)(h.Z,{color:"error",children:t.error}):t.data&&0!==Object.keys(t.data).length?(0,a.jsx)(A.default,{responseData:t.data}):(0,a.jsx)(a.Fragment,{})}let W=H()(()=>Promise.resolve().then(n.bind(n,889)),{loadableGenerated:{webpack:()=>[889]},loading:()=>(0,a.jsx)("p",{children:"Loading..."}),ssr:!0})}}]);