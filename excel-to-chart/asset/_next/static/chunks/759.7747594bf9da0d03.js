"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{9759:function(t,e,a){a.r(e),a.d(e,{Scatter:function(){return Scatter},default:function(){return ScatterChartPage}});var n=a(5893),r=a(7475),i=a(6550),l=a(7294),o=a(2734),s=a(7292),c=a(5861),d=a(8503),x=a(4290),h=a(1828),u=a(143),f=a(2729);function ScatterChartPage(){return(0,n.jsx)(r.Z,{CHART_TYPE:i.y[3],ChartComponent:t=>{let{dataset:e,chartOptions:a}=t;return(0,n.jsx)(Scatter,{dataset:e,chartOptions:a})}})}function Scatter(t){let{dataset:e,chartOptions:a}=t,r=(0,o.Z)(),i=(0,s.Z)(r.breakpoints.down("sm")),{chartTitle:m,dataColumns:p,dimensionColumn:g,sortOption:b,filterOption:y,sampleOption:S,colorStyle:k,chartWidth:v,marginConfig:C,legendConfig:A,showGridLine:j,axisRange:_,yAxisLabelConfig:P,xAxisLabelConfig:w,xReferenceLineConfig:z}=a,E=(0,u.oy)(),Z=(0,u.jw)(),{localDataset:F,localDataColumns:O}=l.useMemo(()=>(0,d.pQ)(e,p,g,b,y,Z.aggregationOption,S),[e,p,g,b,y,S]);if(!g&&!F)return null;let T=function(t,e,a){let n=t.filter(t=>t!==e),r=(0,d.Sk)(n.length,a);return n.map((t,a)=>({datasetKeys:{id:"$id",x:e,y:t},label:t,color:r[a]}))}(O,g,k),W=buildAxisProps(_,w,P);return F.forEach((t,e)=>{t.$id=e}),(0,n.jsxs)(n.Fragment,{children:[m&&(0,n.jsx)(c.Z,{variant:"h6",align:"center",sx:{fontWeight:600,fontSize:"1.2rem",color:"text.primary",mt:1},children:m}),(0,n.jsxs)(x.G,{margin:C,dataset:F,xAxis:[W.x],yAxis:[W.y],series:T,height:parseInt(r.spacing(i?32:36)),width:v||E.minChartWidth,grid:{vertical:j.vertical,horizontal:j.horizontal},slotProps:{legend:{hidden:A.hidden,direction:A.direction,position:A.position,padding:A.padding,labelStyle:{fontSize:"small"}}},sx:{"&&":{touchAction:"auto"},[".".concat(h.x.left," .").concat(h.x.label)]:{transform:"translate(".concat(P.x_offset,"px, 0)")},[".".concat(h.x.bottom," .").concat(h.x.label)]:{transform:"translate(0, ".concat(w.y_offset,"px)")}},children:["// 显示水平参考线",!z.hidden&&(0,n.jsx)(f.O,{y:z.value,label:z.labelText,labelStyle:{fontSize:"small"},labelAlign:z.labelAlign,lineStyle:{stroke:z.strokeColor,strokeWidth:1.5,strokeDasharray:"5 5"}})]})]})}let buildAxisProps=(t,e,a)=>({x:{valueFormatter:t=>t.toString(),label:e.text},y:{label:a.text,min:t.min||void 0,max:t.max||void 0,valueFormatter:d.gs}})}}]);