"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{6224:function(t,e,o){o.r(e),o.d(e,{Combo:function(){return Combo},default:function(){return ComboChartPage}});var a=o(5893),i=o(7475),n=o(6550),s=o(7294),r=o(2734),l=o(7292),c=o(1256),d=o(1828),u=o(9853),x=o(1526),p=o(7453),b=o(3137),f=o(5534),h=o(5125),C=o(2203),m=o(1333),y=o(9595),g=o(8503),j=o(143);function ComboChartPage(){return(0,a.jsx)(i.Z,{CHART_TYPE:n.y[4],ChartComponent:t=>{let{dataset:e,chartOptions:o}=t;return(0,a.jsx)(Combo,{dataset:e,chartOptions:o})}})}function Combo(t){let{dataset:e,chartOptions:o}=t,i=(0,r.Z)(),n=(0,l.Z)(i.breakpoints.down("sm")),{dataColumns:u,dimensionColumn:v,sortOption:k,aggregationOption:_,sampleOption:w,colorStyle:A,chartWidth:T,marginConfig:M,legendConfig:S,showGridLine:E,barLabelType:I,lineStyle:P,yAxisLabelConfig:K,xAxisLabelConfig:N}=o,{localDataset:O,localDataColumns:Z}=s.useMemo(()=>(0,g.pQ)(e,u,v,k,_,w),[e,u,v,k,_,w]);if(!v)return null;let F=j.c3.includes(_.displayMethod)?t=>"".concat(t,"%"):t=>"".concat(t),q=function(t,e,o,a,i,n){let s=Object.keys(t[0]).filter(t=>t!==o&&e.includes(t)),r=(0,g.Sk)(s.length,a);return s.flatMap((t,e)=>[{type:"bar",dataKey:t,label:t,color:r[e],valueFormatter:n,id:"bar-".concat(e)},{type:"line",dataKey:t,label:t,color:r[e],showMark:!0,curve:i,valueFormatter:n,id:"line-".concat(e)}])}(O,Z,v,A,P,F),z=Object.values(q).filter(t=>"bar"===t.type).map(t=>{var e;return{id:t.id,label:null!==(e=t.label)&&void 0!==e?e:String(t.id),color:t.color,type:"series"}});return(0,a.jsxs)(c.B,{margin:M,dataset:O,height:parseInt(i.spacing(n?32:36)),width:T,series:q,xAxis:[{id:"x-axis-id",dataKey:v,scaleType:"band",valueFormatter:t=>t.toString()}],yAxis:[{id:"y-axis-id",valueFormatter:g.gs}],sx:{"&&":{touchAction:"auto"},[".".concat(d.x.left," .").concat(d.x.label)]:{transform:"translate(".concat(K.x_offset,"px, 0)")},[".".concat(d.x.bottom," .").concat(d.x.label)]:{transform:"translate(0, ".concat(N.y_offset,"px)")}},children:[(0,a.jsx)(x.E,{barLabel:(t,e)=>(function(t,e,o,a){switch(t){case 0:default:return"";case 1:var i,n;return j.c3.includes(a.displayMethod)?(null===(i=e.value)||void 0===i?void 0:i.toString())+"%":null===(n=e.value)||void 0===n?void 0:n.toString()}})(I,t,0,_)}),(0,a.jsx)(p.e,{}),(0,a.jsx)(b.i,{}),(0,a.jsx)(f.U,{label:N.text,position:"bottom",axisId:"x-axis-id"}),(0,a.jsx)(h.N,{label:K.text,position:"left",axisId:"y-axis-id"}),(0,a.jsx)(C.G,{slotProps:{legend:{seriesToDisplay:z,hidden:S.hidden,direction:S.direction,position:S.position,padding:S.padding}}}),(0,a.jsx)(m.a,{trigger:"axis",slots:{axisContent:CustomChartsAxisTooltipContent}}),(0,a.jsx)(y.q,{horizontal:E})]})}let CustomChartsAxisTooltipContent=t=>{let{series:e,...o}=t,i=e.filter(t=>"bar"===t.type);return(0,a.jsx)(u.I,{...o,series:i})}}}]);