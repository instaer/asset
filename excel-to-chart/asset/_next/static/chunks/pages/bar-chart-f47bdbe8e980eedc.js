(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248,517],{1957:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bar-chart",function(){return n(1517)}])},1517:function(t,e,n){"use strict";n.r(e),n.d(e,{Bar:function(){return Bar},__N_SSG:function(){return p},default:function(){return BarChartPage}});var a=n(5893),r=n(7294),i=n(5898),l=n(1828),o=n(2734),c=n(7292),s=n(5861),u=n(8503),d=n(6550),h=n(7475),x=n(143),f=n(2729),p=!0;function BarChartPage(){return(0,a.jsx)(h.Z,{CHART_TYPE:d.y[0],ChartComponent:Bar})}function Bar(t){let{dataset:e,chartOptions:n}=t,d=(0,o.Z)(),h=(0,c.Z)(d.breakpoints.down("sm")),{chartTitle:p,dataColumns:b,dimensionColumn:v,stackColumns:g,sortOption:m,filterOption:y,aggregationOption:_,sampleOption:k,colorStyle:S,chartWidth:w,marginConfig:C,legendConfig:A,barDirection:P,showGridLine:j,barLabelType:B,axisRange:E,yAxisLabelConfig:N,xAxisLabelConfig:T,referenceLineConfig:z}=n,O=(0,x.oy)(),{localDataset:Z,localDataColumns:M}=r.useMemo(()=>(0,u.pQ)(e,b,v,m,y,_,k),[e,b,v,m,y,_,k]);if(!v&&!Z)return null;let W=x.c3.includes(_.displayMethod)?t=>"".concat(t,"%"):t=>"".concat(t),F=function(t,e,n,a,r,i){if(!t.length)return[];let l=Object.keys(t[0]).filter(t=>t!==a&&e.includes(t)),o=(0,u.Sk)(l.length,r);return l.map((t,e)=>{let a={dataKey:t,label:t,color:o[e],valueFormatter:i};return n.length>=2&&n.includes(t)&&(a.stack=""),a})}(Z,M,g,v,S,W),K=buildAxisProps(v,P,E,T,N);return(0,a.jsxs)(a.Fragment,{children:[p&&(0,a.jsx)(s.Z,{variant:"h6",align:"center",sx:{fontWeight:600,fontSize:"1.2rem",color:"text.primary",mt:1},children:p}),(0,a.jsxs)(i.v,{margin:C,dataset:Z,xAxis:["vertical"===P?K.x:K.y],yAxis:["vertical"===P?K.y:K.x],series:F,height:parseInt(d.spacing(h?32:36)),width:w||O.minChartWidth,layout:P,grid:{vertical:j.vertical,horizontal:j.horizontal},barLabel:(t,e)=>(function(t,e,n,a){switch(t){case 0:default:return"";case 1:var r,i;return x.c3.includes(a.displayMethod)?(null===(r=e.value)||void 0===r?void 0:r.toString())+"%":null===(i=e.value)||void 0===i?void 0:i.toString()}})(B,t,0,_),slotProps:{legend:{hidden:A.hidden,direction:A.direction,position:A.position,padding:A.padding,labelStyle:{fontSize:"small"}}},sx:{"&&":{touchAction:"auto"},[".".concat(l.x.left," .").concat(l.x.label)]:{transform:"translate(".concat(N.x_offset,"px, 0)")},[".".concat(l.x.bottom," .").concat(l.x.label)]:{transform:"translate(0, ".concat(T.y_offset,"px)")}},children:["// 显示水平参考线",!z.hidden&&(0,a.jsx)(f.O,{..."x"===z.orientation?{x:z.value}:{y:z.value},label:z.labelText,labelStyle:{fontSize:"small"},labelAlign:z.labelAlign,lineStyle:{stroke:z.strokeColor,strokeWidth:1.5,strokeDasharray:"5 5"}})]})]})}let buildAxisProps=(t,e,n,a,r)=>({x:{scaleType:"band",dataKey:t,label:"vertical"===e?a.text:r.text},y:{label:"vertical"===e?r.text:a.text,min:n.min||void 0,max:n.max||void 0,valueFormatter:u.gs}})}},function(t){t.O(0,[886,452,181,13,526,844,475,546,774,888,179],function(){return t(t.s=1957)}),_N_E=t.O()}]);