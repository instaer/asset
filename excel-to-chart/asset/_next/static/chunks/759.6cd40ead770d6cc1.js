"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{9759:function(t,e,n){n.r(e),n.d(e,{Scatter:function(){return Scatter},default:function(){return ScatterChartPage}});var a=n(5893),r=n(7475),o=n(6550),i=n(7294),s=n(2734),c=n(7292),l=n(4033),u=n(4290),d=n(1828);function ScatterChartPage(){return(0,a.jsx)(r.Z,{CHART_TYPE:o.y[3],ChartComponent:t=>{let{dataset:e,chartOptions:n}=t;return(0,a.jsx)(Scatter,{dataset:e,chartOptions:n})}})}function Scatter(t){let{dataset:e,chartOptions:n}=t,r=(0,s.Z)(),o=(0,c.Z)(r.breakpoints.down("sm")),{dataColumns:x,dimensionColumn:f,colorStyle:p,chartWidth:h,marginConfig:m,legendConfig:g,showGridLine:b,axisRange:S,yAxisLabelConfig:y,xAxisLabelConfig:C}=n,_=i.useMemo(()=>{let t=(0,l.pQ)(e,x,f);return t.forEach((t,e)=>{t.$id=e}),t},[e,x,f]);if(!f)return null;let k=function(t,e,n){let a=t.filter(t=>t!==e),r=(0,l.Sk)(a.length,n);return a.map((t,n)=>({datasetKeys:{id:"$id",x:e,y:t},label:t,color:r[n]}))}(x,f,p),A=buildAxisProps(S,C,y);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.G,{margin:m,dataset:_,xAxis:[A.x],yAxis:[A.y],series:k,height:parseInt(r.spacing(o?32:36)),width:h,grid:{horizontal:b},slotProps:{legend:{hidden:g.hidden,direction:g.direction,position:g.position,padding:g.padding}},sx:{"&&":{touchAction:"auto"},[".".concat(d.x.left," .").concat(d.x.label)]:{transform:"translate(".concat(y.x_offset,"px, 0)")},[".".concat(d.x.bottom," .").concat(d.x.label)]:{transform:"translate(0, ".concat(C.y_offset,"px)")}}})})}let buildAxisProps=(t,e,n)=>({x:{valueFormatter:t=>t.toString(),label:e.text},y:{label:n.text,valueFormatter:l.gs,min:t.min,max:t.max||void 0}})}}]);