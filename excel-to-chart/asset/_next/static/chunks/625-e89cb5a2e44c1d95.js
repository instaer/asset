"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{8625:function(e,t,i){i.d(t,{u:function(){return W}});var n=i(7462),r=i(3366),a=i(7294),s=i(2056),l=i(1657),o=i(4522),u=i(779),d=i(4143),c=i(6866),h=i(2203),g=i(9339),p=i(4184),f=i(4869),x=i(309),y=i(1978),A=i(2882);function arcInnerRadius(e){return e.innerRadius}function arcOuterRadius(e){return e.outerRadius}function arcStartAngle(e){return e.startAngle}function arcEndAngle(e){return e.endAngle}function arcPadAngle(e){return e&&e.padAngle}function cornerTangents(e,t,i,n,r,a,s){var l=e-i,o=t-n,u=(s?a:-a)/(0,y._b)(l*l+o*o),d=u*o,c=-u*l,h=e+d,g=t+c,p=i+d,f=n+c,x=(h+p)/2,A=(g+f)/2,R=p-h,m=f-g,_=R*R+m*m,$=r-a,P=h*f-p*g,b=(m<0?-1:1)*(0,y._b)((0,y.Fp)(0,$*$*_-P*P)),v=(P*m-R*b)/_,Z=(-P*R-m*b)/_,L=(P*m+R*b)/_,M=(-P*R+m*b)/_,C=v-x,k=Z-A,H=L-x,T=M-A;return C*C+k*k>H*H+T*T&&(v=L,Z=M),{cx:v,cy:Z,x01:-d,y01:-c,x11:v*(r/$-1),y11:Z*(r/$-1)}}function arc(){var e=arcInnerRadius,t=arcOuterRadius,i=(0,x.Z)(0),n=null,r=arcStartAngle,a=arcEndAngle,s=arcPadAngle,l=null,o=(0,A.d)(arc);function arc(){var u,d,c=+e.apply(this,arguments),h=+t.apply(this,arguments),g=r.apply(this,arguments)-y.ou,p=a.apply(this,arguments)-y.ou,f=(0,y.Wn)(p-g),x=p>g;if(l||(l=u=o()),h<c&&(d=h,h=c,c=d),h>y.Ho){if(f>y.BZ-y.Ho)l.moveTo(h*(0,y.mC)(g),h*(0,y.O$)(g)),l.arc(0,0,h,g,p,!x),c>y.Ho&&(l.moveTo(c*(0,y.mC)(p),c*(0,y.O$)(p)),l.arc(0,0,c,p,g,x));else{var A,R,m=g,_=p,$=g,P=p,b=f,v=f,Z=s.apply(this,arguments)/2,L=Z>y.Ho&&(n?+n.apply(this,arguments):(0,y._b)(c*c+h*h)),M=(0,y.VV)((0,y.Wn)(h-c)/2,+i.apply(this,arguments)),C=M,k=M;if(L>y.Ho){var H=(0,y.ZR)(L/c*(0,y.O$)(Z)),T=(0,y.ZR)(L/h*(0,y.O$)(Z));(b-=2*H)>y.Ho?(H*=x?1:-1,$+=H,P-=H):(b=0,$=P=(g+p)/2),(v-=2*T)>y.Ho?(T*=x?1:-1,m+=T,_-=T):(v=0,m=_=(g+p)/2)}var j=h*(0,y.mC)(m),I=h*(0,y.O$)(m),V=c*(0,y.mC)(P),w=c*(0,y.O$)(P);if(M>y.Ho){var N,O=h*(0,y.mC)(_),E=h*(0,y.O$)(_),F=c*(0,y.mC)($),U=c*(0,y.O$)($);if(f<y.pi){if(N=function(e,t,i,n,r,a,s,l){var o=i-e,u=n-t,d=s-r,c=l-a,h=c*o-d*u;if(!(h*h<y.Ho))return h=(d*(t-a)-c*(e-r))/h,[e+h*o,t+h*u]}(j,I,F,U,O,E,V,w)){var S=j-N[0],q=I-N[1],W=O-N[0],z=E-N[1],D=1/(0,y.O$)((0,y.Kh)((S*W+q*z)/((0,y._b)(S*S+q*q)*(0,y._b)(W*W+z*z)))/2),B=(0,y._b)(N[0]*N[0]+N[1]*N[1]);C=(0,y.VV)(M,(c-B)/(D-1)),k=(0,y.VV)(M,(h-B)/(D+1))}else C=k=0}}v>y.Ho?k>y.Ho?(A=cornerTangents(F,U,j,I,h,k,x),R=cornerTangents(O,E,V,w,h,k,x),l.moveTo(A.cx+A.x01,A.cy+A.y01),k<M?l.arc(A.cx,A.cy,k,(0,y.fv)(A.y01,A.x01),(0,y.fv)(R.y01,R.x01),!x):(l.arc(A.cx,A.cy,k,(0,y.fv)(A.y01,A.x01),(0,y.fv)(A.y11,A.x11),!x),l.arc(0,0,h,(0,y.fv)(A.cy+A.y11,A.cx+A.x11),(0,y.fv)(R.cy+R.y11,R.cx+R.x11),!x),l.arc(R.cx,R.cy,k,(0,y.fv)(R.y11,R.x11),(0,y.fv)(R.y01,R.x01),!x))):(l.moveTo(j,I),l.arc(0,0,h,m,_,!x)):l.moveTo(j,I),c>y.Ho&&b>y.Ho?C>y.Ho?(A=cornerTangents(V,w,O,E,c,-C,x),R=cornerTangents(j,I,F,U,c,-C,x),l.lineTo(A.cx+A.x01,A.cy+A.y01),C<M?l.arc(A.cx,A.cy,C,(0,y.fv)(A.y01,A.x01),(0,y.fv)(R.y01,R.x01),!x):(l.arc(A.cx,A.cy,C,(0,y.fv)(A.y01,A.x01),(0,y.fv)(A.y11,A.x11),!x),l.arc(0,0,c,(0,y.fv)(A.cy+A.y11,A.cx+A.x11),(0,y.fv)(R.cy+R.y11,R.cx+R.x11),x),l.arc(R.cx,R.cy,C,(0,y.fv)(R.y11,R.x11),(0,y.fv)(R.y01,R.x01),!x))):l.arc(0,0,c,P,$,x):l.lineTo(V,w)}}else l.moveTo(0,0);if(l.closePath(),u)return l=null,u+""||null}return arc.centroid=function(){var i=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,n=(+r.apply(this,arguments)+ +a.apply(this,arguments))/2-y.pi/2;return[(0,y.mC)(n)*i,(0,y.O$)(n)*i]},arc.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:(0,x.Z)(+t),arc):e},arc.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:(0,x.Z)(+e),arc):t},arc.cornerRadius=function(e){return arguments.length?(i="function"==typeof e?e:(0,x.Z)(+e),arc):i},arc.padRadius=function(e){return arguments.length?(n=null==e?null:"function"==typeof e?e:(0,x.Z)(+e),arc):n},arc.startAngle=function(e){return arguments.length?(r="function"==typeof e?e:(0,x.Z)(+e),arc):r},arc.endAngle=function(e){return arguments.length?(a="function"==typeof e?e:(0,x.Z)(+e),arc):a},arc.padAngle=function(e){return arguments.length?(s="function"==typeof e?e:(0,x.Z)(+e),arc):s},arc.context=function(e){return arguments.length?(l=null==e?null:e,arc):l},arc}var R=i(4780),m=i(4867),_=i(948),$=i(1588),P=i(5607),b=i(5893);let v=["classes","color","cornerRadius","dataIndex","endAngle","id","innerRadius","isFaded","isHighlighted","onClick","outerRadius","paddingAngle","startAngle","highlightScope"];function getPieArcUtilityClass(e){return(0,m.ZP)("MuiPieArc",e)}(0,$.Z)("MuiPieArc",["root","highlighted","faded"]);let useUtilityClasses=e=>{let{classes:t,id:i,isFaded:n,isHighlighted:r}=e,a={root:["root",`series-${i}`,r&&"highlighted",n&&"faded"]};return(0,R.Z)(a,getPieArcUtilityClass,t)},Z=(0,_.ZP)(f.q.path,{name:"MuiPieArc",slot:"Root",overridesResolver:(e,t)=>t.arc})(({theme:e})=>({stroke:(e.vars||e).palette.background.paper,strokeWidth:1,strokeLinejoin:"round"}));function PieArc(e){let{classes:t,color:i,cornerRadius:a,dataIndex:s,endAngle:l,id:o,innerRadius:u,isFaded:d,isHighlighted:c,onClick:h,outerRadius:g,paddingAngle:p,startAngle:x}=e,y=(0,r.Z)(e,v),A={id:o,dataIndex:s,classes:t,color:i,isFaded:d,isHighlighted:c},R=useUtilityClasses(A),m=(0,P.J)();return(0,b.jsx)(Z,(0,n.Z)({d:(0,f.to)([x,l,p,u,g,a],(e,t,i,n,r,a)=>arc().cornerRadius(a)({padAngle:i,startAngle:e,endAngle:t,innerRadius:n,outerRadius:r})),visibility:(0,f.to)([x,l],(e,t)=>e===t?"hidden":"visible"),onClick:h,cursor:h?"pointer":"unset",ownerState:A,className:R.root},y,m({type:"pie",seriesId:o,dataIndex:s})))}let L={keys:e=>e.id,from:({innerRadius:e,outerRadius:t,cornerRadius:i,startAngle:n,endAngle:r,paddingAngle:a,color:s,isFaded:l})=>({innerRadius:e,outerRadius:(e+t)/2,cornerRadius:i,startAngle:(n+r)/2,endAngle:(n+r)/2,paddingAngle:a,fill:s,opacity:l?.3:1}),leave:({innerRadius:e,startAngle:t,endAngle:i})=>({innerRadius:e,outerRadius:e,startAngle:(t+i)/2,endAngle:(t+i)/2}),enter:({innerRadius:e,outerRadius:t,startAngle:i,endAngle:n})=>({innerRadius:e,outerRadius:t,startAngle:i,endAngle:n}),update:({innerRadius:e,outerRadius:t,cornerRadius:i,startAngle:n,endAngle:r,paddingAngle:a,color:s,isFaded:l})=>({innerRadius:e,outerRadius:t,cornerRadius:i,startAngle:n,endAngle:r,paddingAngle:a,fill:s,opacity:l?.3:1}),config:{tension:120,friction:14,clamp:!0}},M={keys:e=>e.id,from:({innerRadius:e,outerRadius:t,arcLabelRadius:i,cornerRadius:n,startAngle:r,endAngle:a,paddingAngle:s})=>({innerRadius:e,outerRadius:(e+t)/2,cornerRadius:n,arcLabelRadius:i,startAngle:(r+a)/2,endAngle:(r+a)/2,paddingAngle:s,opacity:0}),leave:({innerRadius:e,startAngle:t,endAngle:i})=>({innerRadius:e,outerRadius:e,arcLabelRadius:e,startAngle:(t+i)/2,endAngle:(t+i)/2,opacity:0}),enter:({innerRadius:e,outerRadius:t,startAngle:i,endAngle:n,arcLabelRadius:r})=>({innerRadius:e,outerRadius:t,startAngle:i,endAngle:n,arcLabelRadius:r,opacity:1}),update:({innerRadius:e,outerRadius:t,cornerRadius:i,startAngle:n,endAngle:r,paddingAngle:a,arcLabelRadius:s})=>({innerRadius:e,outerRadius:t,cornerRadius:i,startAngle:n,endAngle:r,paddingAngle:a,arcLabelRadius:s,opacity:1}),config:{tension:120,friction:14,clamp:!0}};var C=i(717);function useTransformData(e){let{id:t,data:i,faded:r,highlighted:s,paddingAngle:l=0,innerRadius:o=0,arcLabelRadius:u,outerRadius:d,cornerRadius:c=0}=e,{isFaded:h,isHighlighted:g}=(0,C.j)(),p=a.useMemo(()=>i.map((e,i)=>{let a={seriesId:t,dataIndex:i},p=g(a),f=!p&&h(a),x=(0,n.Z)({additionalRadius:0},f&&r||p&&s||{}),y=Math.max(0,Math.PI*(x.paddingAngle??l)/180),A=Math.max(0,x.innerRadius??o),R=Math.max(0,x.outerRadius??d+x.additionalRadius),m=x.cornerRadius??c,_=x.arcLabelRadius??u??(A+R)/2;return(0,n.Z)({},e,x,{isFaded:f,isHighlighted:p,paddingAngle:y,innerRadius:A,outerRadius:R,cornerRadius:m,arcLabelRadius:_})}),[c,o,d,l,u,i,r,s,h,g,t]);return p}let k=["slots","slotProps","innerRadius","outerRadius","cornerRadius","paddingAngle","id","highlighted","faded","data","onItemClick","skipAnimation"],H=["startAngle","endAngle","paddingAngle","innerRadius","arcLabelRadius","outerRadius","cornerRadius"];function PieArcPlot(e){let{slots:t,slotProps:i,innerRadius:a=0,outerRadius:s,cornerRadius:l=0,paddingAngle:o=0,id:u,highlighted:d,faded:c={additionalRadius:-5},data:h,onItemClick:g,skipAnimation:p}=e,x=(0,r.Z)(e,k),y=useTransformData({innerRadius:a,outerRadius:s,cornerRadius:l,paddingAngle:o,id:u,highlighted:d,faded:c,data:h}),A=(0,f.Yz)(y,(0,n.Z)({},L,{immediate:p})),{highlightScope:R}=(0,C.j)();if(0===h.length)return null;let m=t?.pieArc??PieArc;return(0,b.jsx)("g",(0,n.Z)({},x,{children:A((e,t,a,s)=>{let{startAngle:l,endAngle:o,paddingAngle:d,innerRadius:c,outerRadius:h,cornerRadius:p}=e,f=(0,r.Z)(e,H);return(0,b.jsx)(m,(0,n.Z)({startAngle:l,endAngle:o,paddingAngle:d,innerRadius:c,outerRadius:h,cornerRadius:p,style:f,id:u,color:t.color,dataIndex:s,highlightScope:R,isFaded:t.isFaded,isHighlighted:t.isHighlighted,onClick:g&&(e=>{g(e,{type:"pie",seriesId:u,dataIndex:s},t)})},i?.pieArc))})}))}let T=["id","classes","color","startAngle","endAngle","paddingAngle","arcLabelRadius","innerRadius","outerRadius","cornerRadius","formattedArcLabel","isHighlighted","isFaded","style"];function getPieArcLabelUtilityClass(e){return(0,m.ZP)("MuiPieArcLabel",e)}(0,$.Z)("MuiPieArcLabel",["root","highlighted","faded"]);let PieArcLabel_useUtilityClasses=e=>{let{classes:t,id:i,isFaded:n,isHighlighted:r}=e,a={root:["root",`series-${i}`,r&&"highlighted",n&&"faded"]};return(0,R.Z)(a,getPieArcLabelUtilityClass,t)},j=(0,_.ZP)(f.q.text,{name:"MuiPieArcLabel",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fill:(e.vars||e).palette.text.primary,textAnchor:"middle",dominantBaseline:"middle",pointerEvents:"none"})),getLabelPosition=(e,t)=>(i,n,r,a,s)=>{if(!e)return 0;let[l,o]=arc().cornerRadius(s).centroid({padAngle:r,startAngle:i,endAngle:n,innerRadius:a,outerRadius:a});return"x"===t?l:o};function PieArcLabel(e){let{id:t,classes:i,color:a,startAngle:s,endAngle:l,paddingAngle:o,arcLabelRadius:u,cornerRadius:d,formattedArcLabel:c,isHighlighted:h,isFaded:g,style:p}=e,x=(0,r.Z)(e,T),y=PieArcLabel_useUtilityClasses({id:t,classes:i,color:a,isFaded:g,isHighlighted:h});return(0,b.jsx)(j,(0,n.Z)({className:y.root},x,{style:(0,n.Z)({x:(0,f.to)([s,l,o,u,d],getLabelPosition(c,"x")),y:(0,f.to)([s,l,o,u,d],getLabelPosition(c,"y"))},p),children:c}))}var I=i(3033);let V=["arcLabel","arcLabelMinAngle","arcLabelRadius","cornerRadius","data","faded","highlighted","id","innerRadius","outerRadius","paddingAngle","skipAnimation","slotProps","slots"],w=["startAngle","endAngle","paddingAngle","innerRadius","outerRadius","arcLabelRadius","cornerRadius"],N=180/Math.PI;function PieArcLabelPlot(e){let{arcLabel:t,arcLabelMinAngle:i=0,arcLabelRadius:a,cornerRadius:s=0,data:l,faded:o={additionalRadius:-5},highlighted:u,id:d,innerRadius:c,outerRadius:h,paddingAngle:g=0,skipAnimation:p,slotProps:x,slots:y}=e,A=(0,r.Z)(e,V),R=useTransformData({innerRadius:c,outerRadius:h,arcLabelRadius:a,cornerRadius:s,paddingAngle:g,id:d,highlighted:u,faded:o,data:l}),m=(0,f.Yz)(R,(0,n.Z)({},M,{immediate:p}));if(0===l.length)return null;let _=y?.pieArcLabel??PieArcLabel;return(0,b.jsx)("g",(0,n.Z)({},A,{children:m((e,a)=>{let{startAngle:s,endAngle:l,paddingAngle:o,innerRadius:u,outerRadius:c,arcLabelRadius:h,cornerRadius:g}=e,p=(0,r.Z)(e,w);return(0,b.jsx)(_,(0,n.Z)({startAngle:s,endAngle:l,paddingAngle:o,innerRadius:u,outerRadius:c,arcLabelRadius:h,cornerRadius:g,style:p,id:d,color:a.color,isFaded:a.isFaded,isHighlighted:a.isHighlighted,formattedArcLabel:function(e,t,i){if(!e)return null;let r=(i.endAngle-i.startAngle)*N;if(r<t)return null;switch(e){case"label":return(0,I.i)(i.label,"arc");case"value":return i.value?.toString();case"formattedValue":return i.formattedValue;default:return e((0,n.Z)({},i,{label:(0,I.i)(i.label,"arc")}))}}(t,i,a)},x?.pieArcLabel))})}))}function getPercentageValue(e,t){if("number"==typeof e)return e;if("100%"===e)return t;if(e.endsWith("%")){let i=Number.parseFloat(e.slice(0,e.length-1));if(!Number.isNaN(i))return i*t/100}if(e.endsWith("px")){let t=Number.parseFloat(e.slice(0,e.length-2));if(!Number.isNaN(t))return t}throw Error(`MUI X: Received an unknown value "${e}". It should be a number, or a string with a percentage value.`)}function getPieCoordinates(e,t){let{height:i,width:n}=t,{cx:r,cy:a}=e,s=Math.min(n,i)/2,l=getPercentageValue(r??"50%",n),o=getPercentageValue(a??"50%",i);return{cx:l,cy:o,availableRadius:s}}var O=i(9439),E=i(4340);function PiePlot(e){let{skipAnimation:t,slots:i,slotProps:n,onItemClick:r}=e,s=(0,O.aH)(),{left:l,top:o,width:u,height:d}=a.useContext(p.SV),c=(0,E.r)(t);if(void 0===s)return null;let{series:h,seriesOrder:g}=s;return(0,b.jsxs)("g",{children:[g.map(e=>{let{innerRadius:t,outerRadius:a,cornerRadius:s,paddingAngle:g,data:p,cx:f,cy:x,highlighted:y,faded:A}=h[e],{cx:R,cy:m,availableRadius:_}=getPieCoordinates({cx:f,cy:x},{width:u,height:d}),$=getPercentageValue(a??_,_),P=getPercentageValue(t??0,_);return(0,b.jsx)("g",{transform:`translate(${l+R}, ${o+m})`,children:(0,b.jsx)(PieArcPlot,{innerRadius:P,outerRadius:$,cornerRadius:s,paddingAngle:g,id:e,data:p,skipAnimation:c,highlighted:y,faded:A,onItemClick:r,slots:i,slotProps:n})},e)}),g.map(e=>{let{innerRadius:t,outerRadius:r,arcLabelRadius:a,cornerRadius:s,paddingAngle:g,arcLabel:p,arcLabelMinAngle:f,data:x,cx:y,cy:A}=h[e],{cx:R,cy:m,availableRadius:_}=getPieCoordinates({cx:y,cy:A},{width:u,height:d}),$=getPercentageValue(r??_,_),P=getPercentageValue(t??0,_),v=void 0===a?($+P)/2:getPercentageValue(a,_);return(0,b.jsx)("g",{transform:`translate(${l+R}, ${o+m})`,children:(0,b.jsx)(PieArcLabelPlot,{innerRadius:P,outerRadius:$??_,arcLabelRadius:v,cornerRadius:s,paddingAngle:g,id:e,data:x,skipAnimation:c,arcLabel:p,arcLabelMinAngle:f,slots:i,slotProps:n})},e)})]})}var F=i(3556);let U=["xAxis","yAxis","series","width","height","margin","colors","sx","tooltip","axisHighlight","skipAnimation","legend","topAxis","leftAxis","rightAxis","bottomAxis","children","slots","slotProps","onItemClick","loading","highlightedItem","onHighlightChange","className"],S={top:5,bottom:5,left:5,right:100},q={top:5,bottom:5,left:100,right:5},W=a.forwardRef(function(e,t){let i=(0,l.Z)({props:e,name:"MuiPieChart"}),{xAxis:a,yAxis:p,series:f,width:x,height:y,margin:A,colors:R,sx:m,tooltip:_={trigger:"item"},axisHighlight:$={x:"none",y:"none"},skipAnimation:P,legend:v,topAxis:Z=null,leftAxis:L=null,rightAxis:M=null,bottomAxis:C=null,children:k,slots:H,slotProps:T,onItemClick:j,loading:I,highlightedItem:V,onHighlightChange:w,className:N}=i,O=(0,r.Z)(i,U),E=(0,s.V)(),W=(0,n.Z)({},E?q:S,A),z=(0,n.Z)({direction:"column",position:{vertical:"middle",horizontal:E?"left":"right"}},v);return(0,b.jsxs)(o.D,(0,n.Z)({},O,{ref:t,series:f.map(e=>(0,n.Z)({type:"pie"},e)),width:x,height:y,margin:W,xAxis:a??[{id:d.nk,scaleType:"point",data:[...Array(Math.max(...f.map(e=>e.data.length)))].map((e,t)=>t)}],yAxis:p,colors:R,sx:m,disableAxisListener:_?.trigger!=="axis"&&$?.x==="none"&&$?.y==="none",highlightedItem:V,onHighlightChange:w,className:N,skipAnimation:P,children:[(0,b.jsx)(u.q,{topAxis:Z,leftAxis:L,rightAxis:M,bottomAxis:C,slots:H,slotProps:T}),(0,b.jsx)(PiePlot,{slots:H,slotProps:T,onItemClick:j}),(0,b.jsx)(F.I,{loading:I,slots:H,slotProps:T}),(0,b.jsx)(h.G,(0,n.Z)({},z,{slots:H,slotProps:T})),(0,b.jsx)(g.qe,(0,n.Z)({},$)),!I&&(0,b.jsx)(c.a,(0,n.Z)({},_,{slots:H,slotProps:T})),k]}))})},2882:function(e,t,i){i.d(t,{d:function(){return withPath}});let n=Math.PI,r=2*n,a=r-1e-6;function append(e){this._+=e[0];for(let t=1,i=e.length;t<i;++t)this._+=arguments[t]+e[t]}let Path=class Path{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?append:function(e){let t=Math.floor(e);if(!(t>=0))throw Error(`invalid digits: ${e}`);if(t>15)return append;let i=10**t;return function(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=Math.round(arguments[t]*i)/i+e[t]}}(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,i,n){this._append`Q${+e},${+t},${this._x1=+i},${this._y1=+n}`}bezierCurveTo(e,t,i,n,r,a){this._append`C${+e},${+t},${+i},${+n},${this._x1=+r},${this._y1=+a}`}arcTo(e,t,i,r,a){if(e=+e,t=+t,i=+i,r=+r,(a=+a)<0)throw Error(`negative radius: ${a}`);let s=this._x1,l=this._y1,o=i-e,u=r-t,d=s-e,c=l-t,h=d*d+c*c;if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;else if(h>1e-6){if(Math.abs(c*o-u*d)>1e-6&&a){let g=i-s,p=r-l,f=o*o+u*u,x=Math.sqrt(f),y=Math.sqrt(h),A=a*Math.tan((n-Math.acos((f+h-(g*g+p*p))/(2*x*y)))/2),R=A/y,m=A/x;Math.abs(R-1)>1e-6&&this._append`L${e+R*d},${t+R*c}`,this._append`A${a},${a},0,0,${+(c*g>d*p)},${this._x1=e+m*o},${this._y1=t+m*u}`}else this._append`L${this._x1=e},${this._y1=t}`}}arc(e,t,i,s,l,o){if(e=+e,t=+t,o=!!o,(i=+i)<0)throw Error(`negative radius: ${i}`);let u=i*Math.cos(s),d=i*Math.sin(s),c=e+u,h=t+d,g=1^o,p=o?s-l:l-s;null===this._x1?this._append`M${c},${h}`:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-h)>1e-6)&&this._append`L${c},${h}`,i&&(p<0&&(p=p%r+r),p>a?this._append`A${i},${i},0,1,${g},${e-u},${t-d}A${i},${i},0,1,${g},${this._x1=c},${this._y1=h}`:p>1e-6&&this._append`A${i},${i},0,${+(p>=n)},${g},${this._x1=e+i*Math.cos(l)},${this._y1=t+i*Math.sin(l)}`)}rect(e,t,i,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${i=+i}v${+n}h${-i}Z`}toString(){return this._}};function withPath(e){let t=3;return e.digits=function(i){if(!arguments.length)return t;if(null==i)t=null;else{let e=Math.floor(i);if(!(e>=0))throw RangeError(`invalid digits: ${i}`);t=e}return e},()=>new Path(t)}Path.prototype}}]);