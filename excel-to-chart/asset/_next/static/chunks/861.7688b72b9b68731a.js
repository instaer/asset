"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{9861:function(t,e,n){n.r(e),n.d(e,{Line:function(){return Line},default:function(){return LineChartPage}});var i=n(5893),a=n(2734),r=n(7292),o=n(8503),s=n(7294),l=n(2235),c=n(1828),u=n(7475),d=n(6550),p=n(143);function LineChartPage(){return(0,i.jsx)(u.Z,{CHART_TYPE:d.y[1],ChartComponent:t=>{let{dataset:e,chartOptions:n}=t;return(0,i.jsx)(Line,{dataset:e,chartOptions:n})}})}function Line(t){let{dataset:e,chartOptions:n}=t,u=(0,a.Z)(),d=(0,r.Z)(u.breakpoints.down("sm")),{dataColumns:f,dimensionColumn:x,sortOption:h,filterOption:m,aggregationOption:g,sampleOption:y,colorStyle:b,chartWidth:v,marginConfig:k,legendConfig:C,showGridLine:_,areaFill:w,lineStyle:A,axisRange:L,yAxisScaleType:P,yAxisLabelConfig:N,xAxisLabelConfig:j}=n,{localDataset:F,localDataColumns:T}=s.useMemo(()=>(0,o.pQ)(e,f,x,h,m,g,y),[e,f,x,h,m,g,y]);if(!x&&!F)return null;let E=p.c3.includes(g.displayMethod)?t=>"".concat(t,"%"):t=>"".concat(t),M=function(t,e,n,i,a,r,s){if(!t.length)return[];let l=Object.keys(t[0]).filter(t=>t!==n&&e.includes(t)),c=(0,o.Sk)(l.length,i);return l.map((t,e)=>({dataKey:t,label:t,color:c[e],showMark:!1,area:r,curve:a,valueFormatter:s}))}(F,T,x,b,A,w,E),Z=F.every(t=>{let e="string"==typeof x?t[x]:void 0;return"number"==typeof e&&Number.isFinite(e)||"string"==typeof e&&!isNaN(e)&&isFinite(e)})?"linear":"point",K=buildAxisProps(x,Z,L,P,j,N);return(0,i.jsx)(l.w,{margin:k,dataset:F,xAxis:[K.x],yAxis:[K.y],series:M,height:parseInt(u.spacing(d?32:36)),width:v,grid:{horizontal:_},slotProps:{legend:{hidden:C.hidden,direction:C.direction,position:C.position,padding:C.padding}},sx:{"&&":{touchAction:"auto"},[".".concat(c.x.left," .").concat(c.x.label)]:{transform:"translate(".concat(N.x_offset,"px, 0)")},[".".concat(c.x.bottom," .").concat(c.x.label)]:{transform:"translate(0, ".concat(j.y_offset,"px)")}}})}let buildAxisProps=(t,e,n,i,a,r)=>({x:{scaleType:e,dataKey:t,valueFormatter:t=>t.toString(),label:a.text},y:{label:r.text,min:n.min||void 0,max:n.max||void 0,scaleType:i,valueFormatter:"linear"===i?o.gs:void 0}})}}]);