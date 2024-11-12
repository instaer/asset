"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{4993:function(e,t,n){n.d(t,{Z:function(){return GamePage}});var i=n(5893),s=n(1163),r=n(44),a=n(2734),o=n(4558),l=n(5582),c=n(5616),d=n(1233),u=n(3795),h=n(5861),p=n(7294),m=n(4080),g=n(2293),x=n(155),f=n(9661),components_NavigationBar=function(){let e=m.e.title;return(0,i.jsx)("nav",{children:(0,i.jsx)(c.Z,{sx:{flexGrow:1},children:(0,i.jsx)(g.Z,{position:"static",sx:{backgroundColor:"#C0DDD9"},children:(0,i.jsxs)(x.Z,{variant:"regular",sx:{paddingX:2},children:[(0,i.jsx)(f.Z,{variant:"rounded",src:m.e.logoSmallUrl,alt:m.e.title+" LOGO",sx:{width:32,height:32,mr:1}}),(0,i.jsx)(h.Z,{variant:"h5",color:"#EFC929",fontWeight:"bold",component:"a",href:"/",sx:{WebkitTextStroke:"1px black",textDecoration:"none"},children:e}),(0,i.jsx)(c.Z,{sx:{marginLeft:"auto",display:"flex",gap:3},children:[].map(e=>(0,i.jsx)(u.Z,{href:e.url,underline:"hover",color:"#000",children:e.name},e.name))})]})})})})},y=n(5670),w=n(313),T=n(5050),b=n(852),j=n(6950),v=n(9903);function samePageLinkNavigation(e){return!(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)}function LinkTab(e){let t=(0,s.useRouter)();return(0,i.jsx)(r.Z,{component:"a",onClick:n=>{samePageLinkNavigation(n)&&n.preventDefault(),t.push(e.href)},"aria-current":e.selected&&"page",...e})}function GamePage(e){let{selectedTabValue:t,TabComponent:n}=e,s=(0,a.Z)(),r=(0,o.Z)(s.breakpoints.up("sm")),[g,x]=p.useState(t);return(0,i.jsxs)(l.Z,{maxWidth:"false",children:[(0,i.jsx)(components_NavigationBar,{}),(0,i.jsx)(c.Z,{sx:{marginTop:2},children:(0,i.jsxs)(y.ZP,{value:g,children:[(0,i.jsx)(c.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,i.jsx)(w.Z,{onChange:(e,t)=>{("click"!==e.type||"click"===e.type&&samePageLinkNavigation(e))&&x(t)},"aria-label":"NYT Game Hint Tabs",role:"navigation",variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{["& .".concat(b.Z.scrollButtons)]:{"&.Mui-disabled":{opacity:.3}}},children:j.K.map((e,t)=>(0,i.jsx)(LinkTab,{value:String(t),label:r&&e.name,"aria-label":e.label,icon:e.icon,href:e.url,sx:{textTransform:"none",paddingInline:"1em",minWidth:{xs:"2em",sm:"5em",md:"8em",lg:"11em"},fontSize:{xs:"0.8em",sm:"0.9em",md:"1.0em",lg:"1.1em"}}},e.name))})}),(0,i.jsx)(T.Z,{value:t,children:(0,i.jsx)(n,{})})]})}),(0,i.jsx)("footer",{children:(0,i.jsx)(c.Z,{sx:{mt:-1,pt:3,borderTop:"1px solid",borderColor:"divider",bgcolor:"background.paper"},children:(0,i.jsx)(l.Z,{maxWidth:"sm",children:(0,i.jsxs)(d.Z,{spacing:2,sx:{pb:3,alignItems:"center"},children:[(0,i.jsxs)(u.Z,{href:"mailto:".concat(m.e.email),sx:{color:"text.primary",textDecoration:"none",display:"flex",alignItems:"center",gap:1,"&:hover":{color:"primary.main"}},children:[(0,i.jsx)(v.Z,{sx:{fontSize:"1.25rem"}}),(0,i.jsx)(h.Z,{variant:"body2",children:m.e.email})]}),(0,i.jsxs)(h.Z,{variant:"caption",color:"text.secondary",sx:{display:"flex",alignItems:"center",gap:.5},children:["Copyright \xa9 ",(0,i.jsx)(u.Z,{href:m.e.url,sx:{color:"inherit",textDecoration:"none","&:hover":{textDecoration:"underline"}},children:m.e.title}),new Date().getFullYear()]})]})})})})]})}},3641:function(e,t,n){var i=n(5893);t.Z=function(e){let{data:t}=e;return(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})}},366:function(e,t,n){var i=n(5893),s=n(9008),r=n.n(s);n(7294);var a=n(4080),o=n(1752),l=n.n(o);t.Z=function(e){let{url:t,title:n,description:s,keywords:o,imageUrl:c}=e,{publicRuntimeConfig:d}=l()();return(0,i.jsxs)(r(),{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,i.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),(0,i.jsx)("meta",{name:"google-adsense-account",content:a.e.googleAdsenseAccount}),(0,i.jsx)("title",{children:n}),(0,i.jsx)("meta",{name:"description",content:s}),(0,i.jsx)("meta",{name:"keywords",content:o}),(0,i.jsx)("link",{rel:"canonical",href:t}),(0,i.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,i.jsx)("meta",{property:"og:site_name",content:a.e.title}),(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"og:title",content:n}),(0,i.jsx)("meta",{property:"og:description",content:s}),(0,i.jsx)("meta",{property:"og:url",content:t}),(0,i.jsx)("meta",{property:"og:image",content:c}),(0,i.jsx)("meta",{property:"og:image:secure_url",content:c}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:n}),(0,i.jsx)("meta",{name:"twitter:description",content:s}),(0,i.jsx)("meta",{name:"twitter:image",content:c}),(0,i.jsx)("meta",{name:"excerpt",content:s}),(0,i.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fastly.jsdelivr.net"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://adservice.google.com/"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net/"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://pagead2.googlesyndication.com/"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://www.googletagservices.com/"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://tpc.googlesyndication.com/"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:d.publicResourcePrefix+"/icon/apple-touch-icon-76x76.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:d.publicResourcePrefix+"/icon/apple-touch-icon-120x120.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:d.publicResourcePrefix+"/icon/apple-touch-icon-152x152.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"167x167",href:d.publicResourcePrefix+"/icon/apple-touch-icon-167x167.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:d.publicResourcePrefix+"/icon/apple-touch-icon-180x180.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/favicon-16x16.png",sizes:"16x16"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/favicon-32x32.png",sizes:"32x32"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/android-chrome-96x96.png",sizes:"96x96"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/android-chrome-192x192.png",sizes:"192x192"}),(0,i.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})]})}},6950:function(e,t,n){n.d(t,{K:function(){return p}});var i=n(5893),s=n(7564),r={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/connections.c85a818a.svg",height:81,width:81,blurWidth:0,blurHeight:0},a={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/spelling-bee.446f5f4f.svg",height:81,width:81,blurWidth:0,blurHeight:0},o={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/strands.b499df80.svg",height:81,width:81,blurWidth:0,blurHeight:0},l={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/sudoku.9ebbac51.svg",height:80,width:80,blurWidth:0,blurHeight:0},c={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/wordle.7453d8d3.svg",height:81,width:81,blurWidth:0,blurHeight:0},d=n(5675),u=n.n(d);n(7294);var h=n(4080);let buildSubTitle=(e,t)=>"Today's NYT ".concat(e," Hints & Answers (").concat(t,")"),buildPageTitle=e=>"".concat(h.e.title,": Today's NYT ").concat(e," Hints & Answers"),buildArchivedPageTitle=(e,t)=>"".concat(h.e.title,": NYT ").concat(e," Hints & Answers for ").concat(t),p=[{index:"0",gameType:"connections",name:"Connections",lowerName:"connections",title:"NYT Connections Hints",label:"NY Times Connections Hints",subTitle:function(e){return buildSubTitle("Connections",e)},pageTitle:buildPageTitle("Connections"),archivedPageTitle:function(e){return buildArchivedPageTitle("Connections",e)},icon:(0,i.jsx)(e=>(0,i.jsx)(s.Z,{...e,children:(0,i.jsx)(u(),{src:r,height:24,width:24,alt:"NYT Connections Hint"})}),{sx:{fontSize:24}}),url:"/connections",archivedUrl:function(e){return"".concat(h.e.url,"/connections/").concat(e)},gameAddress:"https://www.nytimes.com/games/connections",keywords:"nyt connections hints, connections nyt hint, nyt connections game hints, nyt connections answers, nyt connections hints today, nyt connections puzzle, nyt connections archive",description:"Find daily NYT Connections game hints, answers, and strategies at NYT Game Hint. Get today's tips to solve your puzzle quickly and improve your skills!",archivedDescription:function(e){return"Find NYT Connections game hints and answers for ".concat(e,", at NYT Game Hint. Get today's tips to solve your puzzle quickly and improve your skills!")}},{index:"1",gameType:"wordle",name:"Wordle",lowerName:"wordle",title:"NYT Wordle Hints",label:"NY Times Wordle Hints",subTitle:function(e){return buildSubTitle("Wordle",e)},pageTitle:buildPageTitle("Wordle"),archivedPageTitle:function(e){return buildArchivedPageTitle("Wordle",e)},icon:(0,i.jsx)(e=>(0,i.jsx)(s.Z,{...e,children:(0,i.jsx)(u(),{src:c,height:24,width:24,alt:"NYT Wordle Hint"})}),{sx:{fontSize:24}}),url:"/wordle",archivedUrl:function(e){return"".concat(h.e.url,"/wordle/").concat(e)},gameAddress:"https://www.nytimes.com/games/wordle/index.html",keywords:"nyt wordle hint, nyt wordle answer, wordle nyt hint, nyt wordle hint today, wordle nyt answer, nyt wordle answer today, first wordle word nyt",description:"Get the latest NYT Wordle hints, answers, and first word suggestions for today's puzzle at NYT Game Hint. Solve Wordle faster with daily tips and strategies!",archivedDescription:function(e){return"Get NYT Wordle hints and answers for ".concat(e,", at NYT Game Hint. Solve today's Wordle with expert tips, strategies, and first word suggestions!")}},{index:"2",gameType:"strands",name:"Strands",lowerName:"strands",title:"NYT Strands Hints",label:"NY Times Strands Hints",subTitle:function(e){return buildSubTitle("Strands",e)},pageTitle:buildPageTitle("Strands"),archivedPageTitle:function(e){return buildArchivedPageTitle("Strands",e)},icon:(0,i.jsx)(e=>(0,i.jsx)(s.Z,{...e,children:(0,i.jsx)(u(),{src:o,height:24,width:24,alt:"NYT Strands Hint"})}),{sx:{fontSize:24}}),url:"/strands",archivedUrl:function(e){return"".concat(h.e.url,"/strands/").concat(e)},gameAddress:"https://www.nytimes.com/games/strands",keywords:"nyt game strands hints, strands nyt hint, nyt strands answers, strands answers nyt, strands nyt answers today, nyt strands hints today",description:"Get daily NYT Strands game hints, answers, and solutions at NYT Game Hint. Solve today's Strands puzzle quickly with expert tips and strategies!",archivedDescription:function(e){return"Find NYT Strands game hints and answers for ".concat(e,", at NYT Game Hint. Solve today's Strands puzzle quickly with expert tips and solutions!")}},{index:"3",gameType:"spelling_bee",name:"Spelling Bee",lowerName:"spelling-bee",title:"NYT Spelling Bee Hints",label:"NY Times Spelling Bee Hints",subTitle:function(e){return buildSubTitle("Spelling Bee",e)},pageTitle:buildPageTitle("Spelling Bee"),archivedPageTitle:function(e){return buildArchivedPageTitle("Spelling Bee",e)},icon:(0,i.jsx)(e=>(0,i.jsx)(s.Z,{...e,children:(0,i.jsx)(u(),{src:a,height:24,width:24,alt:"NYT Spelling Bee Hint"})}),{sx:{fontSize:24}}),url:"/spelling-bee",archivedUrl:function(e){return"".concat(h.e.url,"/spelling-bee/").concat(e)},gameAddress:"https://www.nytimes.com/puzzles/spelling-bee",keywords:"nyt spelling bee answers, spelling bee nyt answers, nyt spelling bee answers today, nyt spelling bee hints, spelling bee nyt hints, nyt spelling bee today, nyt spelling bee archive",description:"Find daily NYT Spelling Bee answers, hints, and solutions at NYT Game Hint. Get today's Spelling Bee tips to maximize your score and find all words!",archivedDescription:function(e){return"Find NYT Spelling Bee answers and hints for ".concat(e,", at NYT Game Hint. Get today's tips to maximize your score and find all words!")}},{index:"4",gameType:"sudoku",name:"Sudoku",lowerName:"sudoku",title:"NYT Sudoku Hints",label:"NY Times Sudoku Hints",subTitle:function(e){return buildSubTitle("Sudoku",e)},pageTitle:buildPageTitle("Sudoku"),archivedPageTitle:function(e){return buildArchivedPageTitle("Sudoku",e)},icon:(0,i.jsx)(e=>(0,i.jsx)(s.Z,{...e,children:(0,i.jsx)(u(),{src:l,height:24,width:24,alt:"NYT Sudoku Hint"})}),{sx:{fontSize:24}}),url:"/sudoku",archivedUrl:function(e){return"".concat(h.e.url,"/sudoku/").concat(e)},gameAddress:"https://www.nytimes.com/puzzles/sudoku",keywords:"nyt sudoku hints, nyt sudoku answers, sudoku nyt answers, nyt sudoku hard, nyt sudoku medium, nyt sudoku easy, nyt sudoku answers today",description:"Access daily NYT Sudoku hints, answers, and strategies for easy, medium, and hard puzzles at NYT Game Hint. Solve today's Sudoku faster with expert tips!",archivedDescription:function(e){return"Access NYT Sudoku hints and answers for ".concat(e,", at NYT Game Hint. Get expert strategies for easy, medium, and hard puzzles to solve today's Sudoku!")}}]},6195:function(e,t,n){n.d(t,{XR:function(){return formatNaturalToDash},fF:function(){return formatNaturalToISO},gw:function(){return formatNaturalWithWeekDay}});let formatNaturalToDash=(e,t)=>{let n=new Date(e+" UTC");return n.setDate(n.getDate()-t),n.toISOString().split("T")[0]},formatNaturalWithWeekDay=e=>{let t=new Date(e+" UTC");return t.toLocaleDateString("en-US",{year:"numeric",weekday:"short",month:"long",day:"numeric",timeZone:"UTC"})},formatNaturalToISO=e=>{let t=new Date(e+" UTC"),n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",timeZoneName:"short"}).formatToParts(t).find(e=>"timeZoneName"===e.type).value,i=t.getUTCFullYear(),s=String(t.getUTCMonth()+1).padStart(2,"0"),r=String(t.getUTCDate()).padStart(2,"0");return"".concat(i,"-").concat(s,"-").concat(r,"T00:00:00").concat("EST"===n?"-05:00":"-04:00")}}}]);