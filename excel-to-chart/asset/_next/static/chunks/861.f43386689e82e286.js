"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{9861:function(e,t,n){n.r(t),n.d(t,{Line:function(){return Line},default:function(){return LineChartPage}});var r=n(5893),i=n(2734),a=n(7292),l=n(5861),o=n(8503),s=n(7294),c=n(2235),u=n(1828),f=n(7475),d=n(6550),h=n(143),m=n(2729);function LineChartPage(){return(0,r.jsx)(f.Z,{CHART_TYPE:d.y[1],ChartComponent:e=>{let{dataset:t,chartOptions:n}=e;return(0,r.jsx)(Line,{dataset:t,chartOptions:n})}})}function Line(e){let{dataset:t,chartOptions:n}=e,f=(0,i.Z)(),d=(0,a.Z)(f.breakpoints.down("sm")),{chartTitle:x,dataColumns:p,dimensionColumn:g,sortOption:b,filterOption:y,aggregationOption:v,sampleOption:k,colorStyle:S,chartWidth:A,marginConfig:C,legendConfig:w,showGridLine:j,areaFill:E,lineStyle:_,axisRange:z,axisScaleTypeConfig:L,yAxisLabelConfig:N,xAxisLabelConfig:P,xReferenceLineConfig:F}=n,T=(0,h.oy)(),M=L.yAxis,{localDataset:Z,localDataColumns:D}=s.useMemo(()=>{var e,n;let r=(0,o.pQ)(t,p,g,b,y,v,k);return e=r.localDataset,n=r.localDataColumns,"log"===M&&e.forEach(e=>{n.forEach(t=>{if(t===g)return;let n=e[t];"number"==typeof n&&n<=0&&(e[t]=null)})}),r},[t,p,g,b,y,v,k,M]);if(!g&&!Z)return null;let O=h.c3.includes(v.displayMethod)?e=>"".concat(e,"%"):e=>"".concat(e),W=function(e,t,n,r,i,a,l){if(!e.length)return[];let s=Object.keys(e[0]).filter(e=>e!==n&&t.includes(e)),c=(0,o.Sk)(s.length,r);return s.map((e,t)=>({dataKey:e,label:e,color:c[t],showMark:!1,connectNulls:!0,area:a,curve:i,valueFormatter:l}))}(Z,D,g,S,_,E,O),I=function(e,t,n){if("point"===e)return e;let r=!0,i=new Set;for(let e of t){let t=e[n],a=Number(t);if(!t||!String(t).trim()||!Number.isFinite(a))return"point";Number.isInteger(a)||(r=!1),i.add(a)}if("linear"===e)return e;if(r){let e=[...i].sort((e,t)=>e-t),t=new Set;for(let n=1;n<e.length;n++)t.add(e[n]-e[n-1]);if(t.size<=1||1===e.length)return"point"}return"linear"}(L.xAxis,Z,g),K=buildAxisProps(Z,D,g,z,I,M,P,N);return(0,r.jsxs)(r.Fragment,{children:[x&&(0,r.jsx)(l.Z,{variant:"h6",align:"center",sx:{fontWeight:600,fontSize:"1.2rem",color:"text.primary",mt:1},children:x}),(0,r.jsxs)(c.w,{margin:C,dataset:Z,xAxis:[K.x],yAxis:[K.y],series:W,height:parseInt(f.spacing(d?32:36)),width:A||T.minChartWidth,grid:{vertical:j.vertical,horizontal:j.horizontal},slotProps:{legend:{hidden:w.hidden,direction:w.direction,position:w.position,padding:w.padding,labelStyle:{fontSize:"small"}}},sx:{"&&":{touchAction:"auto"},[".".concat(u.x.left," .").concat(u.x.label)]:{transform:"translate(".concat(N.x_offset,"px, 0)")},[".".concat(u.x.bottom," .").concat(u.x.label)]:{transform:"translate(0, ".concat(P.y_offset,"px)")}},children:["// 显示水平参考线",!F.hidden&&(0,r.jsx)(m.O,{y:F.value,label:F.labelText,labelStyle:{fontSize:"small"},labelAlign:F.labelAlign,lineStyle:{stroke:F.strokeColor,strokeWidth:1.5,strokeDasharray:"5 5"}})]})]})}let buildAxisProps=(e,t,n,r,i,a,l,s)=>{let c={x:{scaleType:i,dataKey:n,valueFormatter:e=>e.toString(),label:l.text},y:{label:s.text,min:r.min||void 0,max:r.max||void 0,scaleType:a,valueFormatter:o.gs}};if("log"===a&&(c.y.valueFormatter=void 0,!r.min||r.min<=0)){let r;c.y.min=(r=1/0,e.forEach(e=>{t.forEach(t=>{if(t===n)return;let i=e[t];"number"==typeof i&&i>0&&(r=Math.min(r,i))})}),r===1/0?1:r)}return c}}}]);