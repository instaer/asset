(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738,861],{5605:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/line-chart",function(){return n(9861)}])},9861:function(t,e,n){"use strict";n.r(e),n.d(e,{Line:function(){return Line},__N_SSG:function(){return x},default:function(){return LineChartPage}});var r=n(5893),i=n(2734),a=n(7292),l=n(5861),o=n(8503),s=n(7294),c=n(2235),u=n(1828),f=n(7475),d=n(6550),h=n(143),m=n(2729),x=!0;function LineChartPage(){return(0,r.jsx)(f.Z,{CHART_TYPE:d.y[1],ChartComponent:t=>{let{dataset:e,chartOptions:n}=t;return(0,r.jsx)(Line,{dataset:e,chartOptions:n})}})}function Line(t){let{dataset:e,chartOptions:n}=t,f=(0,i.Z)(),d=(0,a.Z)(f.breakpoints.down("sm")),{chartTitle:x,dataColumns:p,dimensionColumn:g,sortOption:b,filterOption:y,aggregationOption:_,sampleOption:v,colorStyle:S,chartWidth:k,marginConfig:w,legendConfig:A,showGridLine:C,areaFill:E,lineStyle:N,axisRange:P,axisScaleTypeConfig:j,yAxisLabelConfig:T,xAxisLabelConfig:z,xReferenceLineConfig:L}=n,F=(0,h.oy)(),O=j.yAxis,{localDataset:M,localDataColumns:Z}=s.useMemo(()=>{var t,n;let r=(0,o.pQ)(e,p,g,b,y,_,v);return t=r.localDataset,n=r.localDataColumns,"log"===O&&t.forEach(t=>{n.forEach(e=>{if(e===g)return;let n=t[e];"number"==typeof n&&n<=0&&(t[e]=null)})}),r},[e,p,g,b,y,_,v,O]);if(!g&&!M)return null;let D=h.c3.includes(_.displayMethod)?t=>"".concat(t,"%"):t=>"".concat(t),W=function(t,e,n,r,i,a,l){if(!t.length)return[];let s=Object.keys(t[0]).filter(t=>t!==n&&e.includes(t)),c=(0,o.Sk)(s.length,r);return s.map((t,e)=>({dataKey:t,label:t,color:c[e],showMark:!1,connectNulls:!0,area:a,curve:i,valueFormatter:l}))}(M,Z,g,S,N,E,D),I=function(t,e,n){if("point"===t)return t;let r=!0,i=new Set;for(let t of e){let e=t[n],a=Number(e);if(!e||!String(e).trim()||!Number.isFinite(a))return"point";Number.isInteger(a)||(r=!1),i.add(a)}if("linear"===t)return t;if(r){let t=[...i].sort((t,e)=>t-e),e=new Set;for(let n=1;n<t.length;n++)e.add(t[n]-t[n-1]);if(e.size<=1||1===t.length)return"point"}return"linear"}(j.xAxis,M,g),K=buildAxisProps(M,Z,g,P,I,O,z,T);return(0,r.jsxs)(r.Fragment,{children:[x&&(0,r.jsx)(l.Z,{variant:"h6",align:"center",sx:{fontWeight:600,fontSize:"1.2rem",color:"text.primary",mt:1},children:x}),(0,r.jsxs)(c.w,{margin:w,dataset:M,xAxis:[K.x],yAxis:[K.y],series:W,height:parseInt(f.spacing(d?32:36)),width:k||F.minChartWidth,grid:{vertical:C.vertical,horizontal:C.horizontal},slotProps:{legend:{hidden:A.hidden,direction:A.direction,position:A.position,padding:A.padding,labelStyle:{fontSize:"small"}}},sx:{"&&":{touchAction:"auto"},[".".concat(u.x.left," .").concat(u.x.label)]:{transform:"translate(".concat(T.x_offset,"px, 0)")},[".".concat(u.x.bottom," .").concat(u.x.label)]:{transform:"translate(0, ".concat(z.y_offset,"px)")}},children:["// 显示水平参考线",!L.hidden&&(0,r.jsx)(m.O,{y:L.value,label:L.labelText,labelStyle:{fontSize:"small"},labelAlign:L.labelAlign,lineStyle:{stroke:L.strokeColor,strokeWidth:1.5,strokeDasharray:"5 5"}})]})]})}let buildAxisProps=(t,e,n,r,i,a,l,s)=>{let c={x:{scaleType:i,dataKey:n,valueFormatter:t=>t.toString(),label:l.text},y:{label:s.text,min:r.min||void 0,max:r.max||void 0,scaleType:a,valueFormatter:o.gs}};if("log"===a&&(c.y.valueFormatter=void 0,!r.min||r.min<=0)){let r;c.y.min=(r=1/0,t.forEach(t=>{e.forEach(e=>{if(e===n)return;let i=t[e];"number"==typeof i&&i>0&&(r=Math.min(r,i))})}),r===1/0?1:r)}return c}}},function(t){t.O(0,[242,181,890,235,361,475,774,888,179],function(){return t(t.s=5605)}),_N_E=t.O()}]);