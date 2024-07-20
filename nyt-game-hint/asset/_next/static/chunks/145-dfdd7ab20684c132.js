"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{4993:function(e,t,n){n.d(t,{Z:function(){return GamePage}});var s=n(5893),i=n(1163),r=n(44),o=n(2734),l=n(4558),a=n(5582),c=n(5616),d=n(1519),u=n(5861),p=n(3795),h=n(7294),g=n(4080),m=n(2293),y=n(155),x=n(9661),components_NavigationBar=function(){let e=g.e.title;return(0,s.jsx)("nav",{children:(0,s.jsx)(c.Z,{sx:{flexGrow:1},children:(0,s.jsx)(m.Z,{position:"static",sx:{backgroundColor:"#C0DDD9"},children:(0,s.jsxs)(y.Z,{variant:"regular",sx:{paddingX:2},children:[(0,s.jsx)(x.Z,{variant:"rounded",src:g.e.logoSmallUrl,alt:g.e.title+" LOGO",sx:{width:32,height:32,mr:1}}),(0,s.jsx)(u.Z,{variant:"h5",color:"#EFC929",fontWeight:"bold",component:"a",href:"/",sx:{WebkitTextStroke:"1px black",textDecoration:"none"},children:e}),(0,s.jsx)(c.Z,{sx:{marginLeft:"auto",display:"flex",gap:3},children:[].map(e=>(0,s.jsx)(p.Z,{href:e.url,underline:"hover",color:"#000",children:e.name},e.name))})]})})})})},f=n(5670),w=n(313),b=n(5050),k=n(852),j=n(6950);function samePageLinkNavigation(e){return!(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)}function LinkTab(e){let t=(0,i.useRouter)();return(0,s.jsx)(r.Z,{component:"a",onClick:n=>{samePageLinkNavigation(n)&&n.preventDefault(),t.push(e.href)},"aria-current":e.selected&&"page",...e})}function GamePage(e){let{selectedTabValue:t,TabComponent:n}=e,i=(0,o.Z)(),r=(0,l.Z)(i.breakpoints.up("sm")),[m,y]=h.useState(t);return(0,s.jsxs)(a.Z,{maxWidth:"false",children:[(0,s.jsx)(components_NavigationBar,{}),(0,s.jsx)(c.Z,{sx:{marginTop:2},children:(0,s.jsxs)(f.ZP,{value:m,children:[(0,s.jsx)(c.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,s.jsx)(w.Z,{onChange:(e,t)=>{("click"!==e.type||"click"===e.type&&samePageLinkNavigation(e))&&y(t)},"aria-label":"NYT Game Hint Tabs",role:"navigation",variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{["& .".concat(k.Z.scrollButtons)]:{"&.Mui-disabled":{opacity:.3}}},children:j.K.map((e,t)=>(0,s.jsx)(LinkTab,{value:String(t),label:r&&e.name,"aria-label":e.label,icon:e.icon,href:e.url,sx:{textTransform:"none",paddingInline:"1em",minWidth:{xs:"2em",sm:"6em",md:"10em",lg:"14em"}}},e.name))})}),(0,s.jsx)(b.Z,{value:t,children:(0,s.jsx)(n,{})})]})}),(0,s.jsx)("footer",{children:(0,s.jsxs)(c.Z,{mt:-1,children:[(0,s.jsx)(d.Z,{}),(0,s.jsxs)(u.Z,{variant:"subtitle1",align:"center",color:"text.secondary",gutterBottom:!0,sx:{pt:1,pb:1},children:["Copyright \xa9 ",(0,s.jsx)(p.Z,{color:"inherit",href:g.e.url,underline:"hover",children:g.e.title})," ",new Date().getFullYear(),"."]})]})})]})}},366:function(e,t,n){var s=n(5893),i=n(9008),r=n.n(i);n(7294);var o=n(4080),l=n(1752),a=n.n(l);t.Z=function(e){let{url:t,title:n,description:i,keywords:l,imageUrl:c}=e,{publicRuntimeConfig:d}=a()();return(0,s.jsxs)(r(),{children:[(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,s.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),(0,s.jsx)("meta",{name:"google-adsense-account",content:o.e.googleAdsenseAccount}),(0,s.jsx)("title",{children:n}),(0,s.jsx)("meta",{name:"description",content:i}),(0,s.jsx)("meta",{name:"keywords",content:l}),(0,s.jsx)("link",{rel:"canonical",href:t}),(0,s.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,s.jsx)("meta",{property:"og:site_name",content:o.e.title}),(0,s.jsx)("meta",{property:"og:type",content:"article"}),(0,s.jsx)("meta",{property:"og:title",content:n}),(0,s.jsx)("meta",{property:"og:description",content:i}),(0,s.jsx)("meta",{property:"og:url",content:t}),(0,s.jsx)("meta",{property:"og:image",content:c}),(0,s.jsx)("meta",{property:"og:image:secure_url",content:c}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:title",content:n}),(0,s.jsx)("meta",{name:"twitter:description",content:i}),(0,s.jsx)("meta",{name:"twitter:image",content:c}),(0,s.jsx)("meta",{name:"excerpt",content:i}),(0,s.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://cdn.jsdelivr.net"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://adservice.google.com/"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net/"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://pagead2.googlesyndication.com/"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://www.googletagservices.com/"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://tpc.googlesyndication.com/"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:d.publicResourcePrefix+"/icon/apple-touch-icon-76x76.png"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:d.publicResourcePrefix+"/icon/apple-touch-icon-120x120.png"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:d.publicResourcePrefix+"/icon/apple-touch-icon-152x152.png"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"167x167",href:d.publicResourcePrefix+"/icon/apple-touch-icon-167x167.png"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:d.publicResourcePrefix+"/icon/apple-touch-icon-180x180.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/favicon-16x16.png",sizes:"16x16"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/favicon-32x32.png",sizes:"32x32"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/android-chrome-96x96.png",sizes:"96x96"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",href:d.publicResourcePrefix+"/icon/android-chrome-192x192.png",sizes:"192x192"}),(0,s.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})]})}},6950:function(e,t,n){n.d(t,{K:function(){return p}});var s=n(5893),i=n(7564),r={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/connections.c85a818a.svg",height:81,width:81,blurWidth:0,blurHeight:0},o={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/spelling-bee.446f5f4f.svg",height:81,width:81,blurWidth:0,blurHeight:0},l={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/strands.b499df80.svg",height:81,width:81,blurWidth:0,blurHeight:0},a={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/sudoku.9ebbac51.svg",height:80,width:80,blurWidth:0,blurHeight:0},c={src:"https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/static/media/wordle.7453d8d3.svg",height:81,width:81,blurWidth:0,blurHeight:0},d=n(5675),u=n.n(d);n(7294);let buildSubTitle=e=>"Fresh Daily: New York Times ".concat(e," Game Hints Updated"),p=[{index:"0",gameType:"connections",name:"Connections",lowerName:"connections",title:"NYT Connections Hint",label:"NY Times Connections Hint",subTitle:buildSubTitle("Connections"),icon:(0,s.jsx)(e=>(0,s.jsx)(i.Z,{...e,children:(0,s.jsx)(u(),{src:r,height:24,width:24,alt:"NYT Connections Hint"})}),{sx:{fontSize:24}}),url:"/connections",gameAddress:"https://www.nytimes.com/games/connections",keywords:"nyt connections hints, connections nyt hint, nyt connections game hints, nyt connections answers, nyt connections hints today, nyt connections puzzle, nyt connections archive",description:"Get daily NYT Connections hints, answers. Our expert tips for the New York Times Connections game help you solve today's puzzle and improve your skills."},{index:"1",gameType:"wordle",name:"Wordle",lowerName:"wordle",title:"NYT Wordle Hint",label:"NY Times Wordle Hint",subTitle:buildSubTitle("Wordle"),icon:(0,s.jsx)(e=>(0,s.jsx)(i.Z,{...e,children:(0,s.jsx)(u(),{src:c,height:24,width:24,alt:"NYT Wordle Hint"})}),{sx:{fontSize:24}}),url:"/wordle",gameAddress:"https://www.nytimes.com/games/wordle/index.html",keywords:"nyt wordle hint, nyt wordle answer, wordle nyt hint, nyt wordle hint today, wordle nyt answer, nyt wordle answer today, first wordle word nyt",description:"Get daily NYT Wordle hints, answers. Our expert tips for the New York Times Wordle game help you solve today's puzzle and improve your skills."},{index:"2",gameType:"strands",name:"Strands",lowerName:"strands",title:"NYT Strands Hint",label:"NY Times Strands Hint",subTitle:buildSubTitle("Strands"),icon:(0,s.jsx)(e=>(0,s.jsx)(i.Z,{...e,children:(0,s.jsx)(u(),{src:l,height:24,width:24,alt:"NYT Strands Hint"})}),{sx:{fontSize:24}}),url:"/strands",gameAddress:"https://www.nytimes.com/games/strands",keywords:"nyt game strands hints, strands nyt hint, nyt strands answers, strands answers nyt, strands nyt answers today, nyt strands hints today",description:"Get daily NYT Strands hints, answers. Our expert tips for the New York Times Strands game help you solve today's puzzle and improve your skills."},{index:"3",gameType:"spelling_bee",name:"Spelling Bee",lowerName:"spelling-bee",title:"NYT Spelling Bee Hint",label:"NY Times Spelling Bee Hint",subTitle:buildSubTitle("Spelling Bee"),icon:(0,s.jsx)(e=>(0,s.jsx)(i.Z,{...e,children:(0,s.jsx)(u(),{src:o,height:24,width:24,alt:"NYT Spelling Bee Hint"})}),{sx:{fontSize:24}}),url:"/spelling-bee",gameAddress:"https://www.nytimes.com/puzzles/spelling-bee",keywords:"nyt spelling bee answers, spelling bee nyt answers, nyt spelling bee answers today, nyt spelling bee hints, spelling bee nyt hints, nyt spelling bee today, nyt spelling bee archive",description:"Get daily NYT Spelling Bee answers, hints. Our expert tips for the New York Times Spelling Bee game help you solve today's puzzle and improve your skills."},{index:"4",gameType:"sudoku",name:"Sudoku",lowerName:"sudoku",title:"NYT Sudoku Hint",label:"NY Times Sudoku Hint",subTitle:buildSubTitle("Sudoku"),icon:(0,s.jsx)(e=>(0,s.jsx)(i.Z,{...e,children:(0,s.jsx)(u(),{src:a,height:24,width:24,alt:"NYT Sudoku Hint"})}),{sx:{fontSize:24}}),url:"/sudoku",gameAddress:"https://www.nytimes.com/puzzles/sudoku",keywords:"nyt sudoku hints, nyt sudoku answers, sudoku nyt answers, nyt sudoku hard, nyt sudoku medium, nyt sudoku easy, nyt sudoku answers today",description:"Get daily NYT Sudoku hints, answers. Our expert tips for the New York Times Sudoku game help you solve today's puzzle and improve your skills."}]},4080:function(e,t,n){n.d(t,{e:function(){return o}}),n(7294);var s=n(1752),i=n.n(s);let{publicRuntimeConfig:r}=i()(),o={title:"NYTGameHint",url:"https://www.nytgamehint.com",email:"contact@nytgamehint.com",description:"Get daily NYT Game hints! Expert tips for Connections, Wordle, Strands, Spelling Bee, and Sudoku. Boost your skills and conquer New York Times puzzles with our up-to-date hints.",keywords:"nyt game hint today, nyt answer today, nyt connections hints, nyt wordle hint, nyt game strands hints, nyt spelling bee answers, nyt game archive",logoUrl:"".concat(r.publicResourcePrefix,"/image/logo.png"),logoSmallUrl:"".concat(r.publicResourcePrefix,"/image/logo-small.png"),googleAdsenseAccount:"ca-pub-6232783881632642"}},1221:function(e,t,n){n.d(t,{K:function(){return handleEncrypt},h:function(){return handleDecrypt}});let handleEncrypt=async e=>{let t;let s={},i=(await Promise.all([n.e(354),n.e(480)]).then(n.t.bind(n,1354,23))).default;i&&(t=i.lib.WordArray.random(16).toString().substr(0,16),s.encryptedContent=i.AES.encrypt(e,i.enc.Utf8.parse(t),{mode:i.mode.ECB,padding:i.pad.Pkcs7}).toString());let r=(await n.e(361).then(n.bind(n,8361))).default;if(r){let e=new r({default_key_size:1024});e.setPublicKey("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnMiwNDjR26QCz38//JpbH3b2HdRTCX5VlMn4hlaVl96gV/7XE6yQGR4xGlDQGQ0ClP1o/5BsKPLHsyaQZHrOEFs0BOIGEHAuDctk/LP1oAbtl0yJo5y5rd0CKrZJkQ5AP+6EQp9uxwTbhuUaX1eSNikFwyUBl8BZMEfR18qq7bz6/CCir40rta4SVpXWXtp/XVEg7QybYN4z9ANjMzAaLxudtnOigVl6PkRZiYFXflJEGEeI3LfiA4htE2Jmel2+tknJwt7JNb1JMAarcn68pQ9zuAYLxr5WQKopJzCagqkp8sp/QcqdVJJfTgTFdRL65sVSuptJHIF1dRE7hVzfGwIDAQAB"),s.encryptedAesKey=e.encrypt(t)}return s},handleDecrypt=async(e,t)=>{let s;let i=(await n.e(361).then(n.bind(n,8361))).default;if(i){let e=new i({default_key_size:1024});e.setPrivateKey("MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChFizyjDQo0Brbz+3PMmoEGSD76grXIbNtfrKhsJ4qJBVskLuM52cPkCnIufpNN0PH+sjIyc+p+4Y2JIoppV28O2O3/CbF1jiAipvzkzpI7H2SYOc18dxjYLxzC54ezkkBUWcNRR2zdczWu0LeAhGs3JQD0JLHdudYh2LRN0H5HcB3uFs4ubofI/Idz64OXX3g3vLprnf9tGvGulSmJR2bDsmb85AXYPiu7KN/O3PaCAT3CrGM/Hu2gvnmY/TYihDXgyr7Nulu9wFP1ulcc/8JKYmAi59mfWSprEzWJ3iJOW/iUvNybg3mvcjs1Zr+R8jpeN2HndPM2sBWL+PauyE3AgMBAAECggEBAIIXhZ8wKWOYhUhmCRkfDs1WefPYVH7fIafY/WxlVaaU05SE4mJt8yZ3d7c6svEvI5daalL14LbXgdEx+z6c5TGCCQtqIOn/EkyFJGM20IhaLSNNDQzc0e6UDj0e8cjRMdZVplLqMY1gIlh8jQj8RMgEr6jRBej+luFBHUX3SVlkKa1kv9HGAyxs/wh/2lJ5ICxMp9n2Wd5zt1WVPVKuJAyBpt8FqNJ2yFS66DX/WfQquy72p/1pOOcOADMvmAM1C2u29mCVKk/RR/EAHF+RnkQZWEXgrYnGxYtlkT9kf4oWQeEO3ezT/IEV6k/mXUhie7Eh7ggp0WBdNTM76kHUnxECgYEA6HkMPGi6sHdY8B3pwDD7ZewuWhBW2iBAis+qqa6E65OoWFfyAzpPdywjD3SA6FWKONL3OrmlDyD+ewAcW9rct19yW95Dyw9OxEUYo02AXzHYUPp4c95q1kjOMVxT75vs48knDCwWrPFtTCmNAJMH7cxnkKd+rnD7g0xXcpAetIkCgYEAsWOjuPmTGoivt1D0ZGedBcvVcsP2X2IxPhUq9m/jEPJRWhlFGP3JaKbegfPaPblV5Ec9n1Q6YJoRyxupAEwe9FOoJhir2SEfnjBSDB1OtnbjCRjqxUm5VsI1bIM+sNe3zLyJkHRsJEjSEwe4xhKev+1uZ28l573JUecJ+DKBN78CgYAlZ7y5R5yqYjm0QQvoebkpuCvpH/HpnQDllO5/6O3IPfT7agMt08cPhNGLXhKTz5ey9vcCwvY1DfkEb4sgmIGlG7153LSJysfAuuFw/TpnlsyYkwSomCQWoJZUyOdUiYE/UZFv2vQ3FY2hkJn4eq/u6lHLq7etd85wXOtBKsFWCQKBgBUdcCqfgpQg+xGOEFk3QCild7Xef6Ag9w2VxXRqIxQsU+Sup1vvMZ9EZa4AUdURD5lJpZsmkoBXNpD/rOE9Ll4U6yoFu8bvu2zAAbQxdOIhSqsVjTSIrwgVu/g7syWnt9gmBRXt1cWH6YGcZLEnHEBqSb8EKvXn0GPwZW5mzJzPAoGBAMOYbFfwQM31577pHGUAa5GEHzrSlPphj/lM/VFyDJI9QoBZ5+JaRUMxct61WgdH/IdS3GXRSO2vUAtFFWj/v7xOYm+jJlBNB8angx1c/4WNRxWtfri7Z/26Bn0ErVmFn+aFFb5PSYQUgEObhgp2qCTIkXwo5MyP7QM73dNcrDJB"),s=e.decrypt(t)}let r=(await Promise.all([n.e(354),n.e(480)]).then(n.t.bind(n,1354,23))).default;return r?r.AES.decrypt(e,r.enc.Utf8.parse(s),{mode:r.mode.ECB,padding:r.pad.Pkcs7}).toString(r.enc.Utf8):null}},7285:function(e,t,n){n.d(t,{D2:function(){return sendPost}});async function sendPost(e,t,n){let s,i;try{var r;s=await (r=Array.isArray(t)?t.map(e=>Object.entries(e).reduce((e,t)=>{let[n,s]=t;return null!=s&&""!==s&&(e[n]=s),e},{})):Object.entries(t).reduce((e,t)=>{let[n,s]=t;return null!=s&&""!==s&&(e[n]=s),e},{}),async()=>{let t=await fetch("".concat("https://api.instaer.me","/").concat(e),{method:"POST",headers:{"Content-Type":"application/json",...n||{}},body:JSON.stringify(r)}),s=await t.json();if("SUCCESS"!==s.code){let e=Error(s.message);throw e.status=500,e}return s})()}catch(e){i={status:e.status,message:e.message}}return{result:s,error:i}}}}]);