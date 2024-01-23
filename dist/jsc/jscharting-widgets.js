/*! JSCharting Widgets 1.0.0
(c) 2022-2023 Corporate Web Solutions Ltd.
All client side / JavaScript code may not be used in any way without a valid JSCharting license.
License holder usage is governed by the license.txt terms included with the distribution.
To license JSCharting for your own use, please visit jscharting.com */
var JSCWidgets;(()=>{"use strict";var e={657:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.BarColumn=void 0;var n=r(653),a=r(353),l=r(601),u=r(882),c=r(388),s={},d=function(e){function t(t,r,i){return e.call(this,t,r,i)||this}return o(t,e),t.prototype.options=function(t,r){return e.prototype.options.call(this,t,r)},t.prototype.normalizeOptions=function(t,r){var i=e.prototype.normalizeOptions.call(this,t,r),o=a.merge({xAxis:{defaultTick:{label:{style:(0,c.default)(this.styles.label,t.labelScaling)}}},yAxis:{visible:!!t.yAxis,scale:{range:{min:(0,u.vOrVi)(t.min),max:(0,u.vOrVi)(t.max)}},formatString:(0,u.vOrVi)(t.valueFormat),defaultTick:{label:{text:(0,u.vOrVi)(t.valueText)}}},defaultPoint:{tooltip:"<b>"+(0,u.vOrVi)(t.valueText)||0}},i);return t.horizontal&&(o.type="gauge linear horizontal"),a.merge(o,(0,u.options2Series)(t)),o.series&&a.merge(o.series[0],{attributes:{min:t.min,max:t.max}}),t.color&&(o.defaultSeries_palette=Array.isArray(t.color)?t.color:[t.color]),t.yAxis||(a.merge(o.yAxis,{visible:!1}),o.defaultSeries={mouseTracking_enabled:!1,defaultPoint:{label:a.merge({visible:!0,autoHide:!1,text:(0,u.vOrVi)(t.valueText)},t.horizontal?{alignSequence:[{align:"inleft",vAlign:"inmiddle"},{align:"outright",vAlign:"inmiddle"},{align:"outleft",vAlign:"inmiddle"}],offset:"5,0"}:{alignSequence:[{align:"incenter",vAlign:"inbottom"},{align:"incenter",vAlign:"outtop"},{align:"incenter",vAlign:"outbottom"}],offset:"0,-5"})}}),t.cultureName&&(o.defaultCultureName=t.cultureName),t.barBackgroundColor&&a.merge(o.xAxis,{defaultTick:{gridLine:{color:t.barBackgroundColor}}}),"number"==typeof t.barWidth&&a.merge(o.xAxis,{staticColumnWidth:t.barWidth}),(0,u.def)(t.barBackgroundWidth)&&a.merge(o.xAxis,{defaultTick:{gridLine:{width:t.barBackgroundWidth,center:!0}}}),!1===t.barRounded&&(o.defaultSeries.type="column"),a.merge(o,t.chartOptions),o},t.prototype.getDefaultOptions=function(){var t=e.prototype.getDefaultOptions.call(this);return Object.assign(t,s)},t.prototype.getInitConfig=function(){return{type:"gauge linear",defaultSeries:{type:"column roundCaps"},title:{label:{style:{fontWeight:"bold",color:l.mutedLabelColor,fontSize:16}}},box:{fill:"transparent"},defaultAxis:{defaultTick:{label:{color:"#9E9E9E",style:{}}}},yAxis:{scale:{maxTickCount:6},line:{visible:!1},defaultTick:{line:{length:0}}},xAxis:{defaultTick:{gridLine:{width:"column",color:"#eeeeee"},line:{visible:!1,length:5},label:{text:"%value"}},spacingPercentage:.3},defaultTooltip:{fill:"#263238",shadow:!1,outline_width:0,opacity:.9,padding:5,radius:4,label:{color:"white",style:{}},followCursor:!1},defaultPoint:{outline:{width:0},opacity:.8,label:{style:{}},focusGlow:{color:"%color",width:2}},legend:{visible:!1}}},t.prototype.getKind=function(){return"bar-column"},t}(n.Base);t.BarColumn=d},653:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Base=void 0;var i=r(353),o=r(99),n=r(989),a=r(414),l=r(5),u={title:void 0,label:void 0,labelStart:0,timeLabelFormat:void 0,value:void 0,valueFormat:"n",valueText:"%value",cultureName:"en-US",color:"#2c75ff",min:void 0,max:void 0,barBackgroundColor:"rgba(188,188,188,.33)",barWidth:void 0,barBackgroundWidth:void 0,barRounded:!0,labelScaling:1,chartOptions:{}},c=function(){function e(e,t,r){var n=this;if("string"==typeof e&&(n.targetDivId=e,null===(e=document.getElementById(e))))return l.default.error("The specified target div ID was not found: ".concat(n.targetDivId)),n;if(n.targetDiv=e,(0,o.default)()){n.currentOptions=Object.assign({},n.getDefaultOptions(),t),n.currentConfig=n.normalizeOptions(n.currentOptions),n.currentOptions.title||delete n.currentConfig.title;var a=n.getInitConfig();n.chart=new i.Chart(e,i.merge(a,n.currentConfig),(function(e){n.chart=e;var t=r&&r(n);"boolean"==typeof t&&!1===t||setTimeout((function(){n.refreshResponsive()}),200)}))}return n}return e.prototype.options=function(e,t){var r=this;if(void 0===typeof e)return r.currentOptions;if("string"==typeof e)return r.currentOptions[e];if(r.chart.isRendered){var o=r.currentOptions.title,n=Object.assign(r.currentOptions,e),a=r.normalizeOptions(n);if(r.currentOptions=n,n.title||o||delete a.title,!r.needChartRefresh(r.currentConfig,a))return r.chart.options(a,t);r.chart&&r.chart.destroy(),r.chart=new i.Chart(r.targetDiv,i.merge(r.getInitConfig(),a)),Object.assign(r.currentConfig,a)}else{setTimeout((function(){r.options(e,t)}),200);var u=r.targetDivId?"on the widget assigned to ".concat(r.targetDivId," "):"";l.default.warn("options() called "+u+"before the chart is rendered for the first time. Use the widget callback argument to update the widget immediately after rendering.")}},e.prototype.refresh=function(e){var t=this;t.chart.options(t.normalizeOptions(t.currentOptions),e||{animation:{duration:0}})},e.prototype.refreshResponsive=function(){var e=this,t=(0,n.default)(e.targetDiv,e.getKind());JSON.stringify(t)!==JSON.stringify(e.styles)&&e.chart.options(e.normalizeOptions(e.currentOptions,t),{animation:{duration:0}})},e.prototype.destroy=function(){var e=this;return e.chart&&e.chart.destroy(),e},e.prototype.normalizeOptions=function(e,t){var r={title:{label:{}}},o=t||(0,n.default)(this.targetDiv,this.getKind());return this.styles=o,e.title&&(r.title.label.text=e.title),i.merge(r,(0,a.default)(o,e.labelScaling)),r},e.prototype.getDefaultOptions=function(){return u},e.prototype.getInitConfig=function(){return{}},e.prototype.getKind=function(){return"base"},e.prototype.needChartRefresh=function(e,t){return e.series.length!==t.series.length},e}();t.Base=c},462:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.Circular=void 0;var n=r(653),a=r(353),l=r(601),u=r(882),c=r(487),s=r(388),d=r(5),f=function(e){return"function"==typeof e},g={prevValue:void 0,target:void 0,targetText:"%value",targetColor:"gray",icon:void 0,iconPosition:void 0,valuePosition:void 0,labelPosition:void 0,sweep:360},p=function(e){function t(t,r,i){return e.call(this,t,r,i)||this}return o(t,e),t.prototype.options=function(t,r){return e.prototype.options.call(this,t,r)},t.prototype.normalizeOptions=function(t,r){var i,o,n,g=this,p=e.prototype.normalizeOptions.call(this,t,r),v=a.merge({xAxis:{},defaultSeries:{}},p);t.title&&a.merge(v,{title:{margin_bottom:15}});var m=null===(n=null===(o=null===(i=t.chartOptions)||void 0===i?void 0:i.defaultSeries)||void 0===o?void 0:o.shape)||void 0===n?void 0:n.label;Array.isArray(t.value)||(0,u.def)(t.max)||d.default.warn("A single value ".concat(g.getKind()," widget without a maximum value. It is recommended that you set a maximum value for the widget to render a meaningful visualization.")),a.merge(v,(0,u.options2Series)(t,!0));var y=(0,u.def)(t.max)||Array.isArray(t.valueFormat)||!!t.target;t.barBackgroundColor&&a.merge(v.xAxis,{defaultTick:{gridLine:{color:t.barBackgroundColor}}}),"number"==typeof t.barWidth&&a.merge(v.xAxis,{staticColumnWidth:t.barWidth}),(0,u.def)(t.barBackgroundWidth)&&a.merge(v.xAxis,{defaultTick:{gridLine:{width:t.barBackgroundWidth}}}),!1===t.barRounded&&(v.defaultSeries.type="gauge column"),t.color&&(v.palette=Array.isArray(t.color)?t.color:[t.color]);var h=t.icon||[];return v.series.forEach((function(e,r){y&&(e.yAxis="yAxis"+(r+1));var i=(0,u.vOrVi)(t.valueText,r);if(f(i)||(i+=(0,u.getChangeText)(r,t)),e.shape_label=function(e,r,i,o,n){var c,d=t.labelScaling,p=function(e){return function(){return e(g,n)}},v=function(e){return e&&e!==h.color?e:"%color"},y={icon:{align:"center",verticalAlign:"middle",text:i||"%icon"},value:{align:"center",verticalAlign:"middle",text:f(r)?p(r):r+"%targetText",style:{color:"%color",fontSize:Math.round(28*(d||1))+"px"}},label:{align:"center",verticalAlign:"middle",text:o||"%name",style:{color:l.mutedLabelColor,fontSize:Math.round(18*(d||1))+"px"}}},h=g.styles;a.merge(y,{icon:{style:{color:v(h.icon.color)}},value:{style:a.merge((0,s.default)(h.value,d),{color:v(h.value.color)})},label:{style:(0,s.default)(h.label,d)}});var b=function(e,t){return t&&a.merge(e,(0,u.positionToAlignments)(t)),e};c=[b(y.icon,t.iconPosition),b(y.value,t.valuePosition),b(y.label,t.labelPosition)],m&&m.pop&&a.merge(c,m);Array.isArray(c)&&c.forEach((function(e){return x(e)}));""!==t.iconText&&(e||"%icon"!==t.iconText&&t.iconText)||(c=c.slice(1));return c;function x(e){"middle"===e.verticalAlign&&("right"===e.align?e.margin_left=10:"left"===e.align&&(e.margin_right=10))}}((0,u.vOrVi)(h,r),i,(0,u.vOrVi)(t.iconText,r),(0,u.vOrVi)(t.labelText,r),r),t.sweep){var o=(0,u.vOrVi)(t.sweep);e.angle={orientation:360===o?90:-90,sweep:o}}e.attributes={icon:b((0,u.vOrVi)(h,r)),max:(0,u.vOrVi)(t.max,r),min:(0,u.vOrVi)(t.min,r),label:"",targetText:""}})),v.yAxis=(0,u.yAxisConfig)(t.value,t,g.styles),a.merge(v,t.chartOptions),v;function b(e){var r=" ",i=Math.round(30*(t.labelScaling||1)),o="%color";return o=g.styles.color!==g.styles.icon.color?g.styles.icon.color:o,i=parseInt((0,c.default)(g.styles.icon["font-size"],t.labelScaling)),e&&(r=(0,u.toIconTag)(e,{size:i,fill:o,margin_right:2,opacity:1,verticalAlign:"bottom"},m)),r}},t.prototype.getDefaultOptions=function(){var t=e.prototype.getDefaultOptions.call(this);return Object.assign(t,g)},t.prototype.getInitConfig=function(){return{box:{fill:"transparent"},title:{label:{style:{color:l.mutedLabelColor}}},legend:{visible:!1},defaultAxis:{visible:!1},xAxis:{defaultTick:{gridLine:{color:"rgba(145,145,145,0.17)"}}},defaultSeries:{type:"gauge circle column roundcaps",mouseTracking:!1,shape:{innerSize:"80%",defaultLabel:{}},defaultPoint:{tooltip:"<b>%seriesName</b> %yValue% of Goal",altColor:"currentColor",outline:{width:0}}}}},t.prototype.getKind=function(){return"circular"},t}(n.Base);t.Circular=p},601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mutedLabelColor=void 0,t.mutedLabelColor="#95a0a6"},827:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.jscDefaults=void 0;var i=r(353);t.jscDefaults=function(e){return i.defaults(e)}},253:function(e,t,r){var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.Linear=void 0;var n=r(653),a=r(353),l=r(601),u=r(487),c=r(388),s=r(5),d=r(882),f=function(e){return"function"==typeof e},g={prevValue:void 0,target:void 0,targetText:"%value",targetColor:"gray",icon:void 0,iconPosition:void 0,valuePosition:void 0,labelPosition:void 0},p=function(e){function t(t,r,i){return e.call(this,t,r,i)||this}return o(t,e),t.prototype.options=function(t,r){return e.prototype.options.call(this,t,r)},t.prototype.normalizeOptions=function(t,r){var i,o,n,g=this,p=e.prototype.normalizeOptions.call(this,t,r),v=a.merge({xAxis:{defaultTick:{line:{length:8}}}},p),m=null===(n=null===(o=null===(i=t.chartOptions)||void 0===i?void 0:i.defaultSeries)||void 0===o?void 0:o.shape)||void 0===n?void 0:n.label;if(Array.isArray(t.value)||(0,d.def)(t.max)||s.default.warn("A single value ".concat(g.getKind()," widget without a maximum value. It is recommended that you set a maximum value for the widget to render a meaningful visualization.")),t.barBackgroundColor&&a.merge(v.xAxis,{defaultTick:{gridLine:{color:t.barBackgroundColor}}}),"number"==typeof t.barWidth&&a.merge(v.xAxis,{staticColumnWidth:t.barWidth}),(0,d.def)(t.barBackgroundWidth)){var y={value:0,line:{width:t.barBackgroundWidth},color:t.barBackgroundColor||"#e0e0e0"};Array.isArray(v.xAxis)||(v.xAxis.defaultTick.gridLine={width:0},v.xAxis.markers=[y])}!1===t.barRounded&&a.merge(v,{defaultSeries:{type:"gauge linear horizontal column"}}),a.merge(v,(0,d.options2Series)(t,!0)),t.color&&(v.palette=Array.isArray(t.color)?t.color:[t.color]);var h=(0,d.def)(t.max)||Array.isArray(t.valueFormat)||!!t.target;"number"==typeof t.visualPreset&&(1!==t.visualPreset||Array.isArray(v.xAxis)||(v.xAxis.defaultTick.gridLine={width:0},v.xAxis.markers=[{value:0,line:{width:2},color:"#e0e0e0"}]));var b=t.icon||[];return v.series.forEach((function(e,r){h&&(e.yAxis="yAxis"+(r+1));var i=(0,d.vOrVi)(t.valueText,r);f(i)||(i+=(0,d.getChangeText)(r,t)),e.shape_label=function(e,r,i,o,n){var u,s,p,v,m=function(e){return function(){return e(g,n)}},y=function(e){return e&&e!==b.color?e:"%color"},h={icon:{align:"left",verticalAlign:"top",text:i||"%icon",style:{color:"%color"}},value:{align:"right",verticalAlign:"top",text:f(r)?m(r):r+"%targetText",style:{color:"%color",fontSize:Math.round(28*(t.labelScaling||1))+"px"}},label:{align:"left",verticalAlign:"top",text:o||"%name",style:{color:l.mutedLabelColor,fontSize:Math.round(18*(t.labelScaling||1))+"px"}}},b=g.styles,x=t.labelScaling;a.merge(h,{icon:{id:"iconlabel",style:a.merge((0,c.default)(b.icon,x),{color:y(b.icon.color)})},value:{id:"valuelabel",style:a.merge((0,c.default)(b.value,x),{color:y(b.value.color)})},label:{id:"labellabel",style:(0,c.default)(b.label,x)}});var A=function(e,t){return t&&a.merge(e,(0,d.positionToAlignments)(t)),e};v=[A(h.icon,t.iconPosition),A(h.value,t.valuePosition),A(h.label,t.labelPosition)];var O=null===(p=null===(s=null===(u=t.chartOptions)||void 0===u?void 0:u.defaultSeries)||void 0===s?void 0:s.shape)||void 0===p?void 0:p.label;O&&O.pop&&a.merge(v,O);_(v[0]),C(v[0]),C(v[1]),C(v[2]),""!==t.iconText&&(e||"%icon"!==t.iconText&&t.iconText)||(v=v.slice(1));return v;function C(e){var r=(0,d.def)(t.barBackgroundWidth)&&(0,d.def)(t.barWidth)&&(t.barBackgroundWidth-t.barWidth)/2;r>0&&("bottom"===e.verticalAlign?e.margin_top=e.margin_top?e.margin_top+r:r:"top"===e.verticalAlign&&(e.margin_bottom=e.margin_bottom?e.margin_bottom+r:r))}function _(e){var r=!1!==t.barRounded?t.barWidth||8:0;(r&&"top"===e.verticalAlign||"bottom"===e.verticalAlign)&&"left"===e.align&&(e.margin_left=-r),"outside"===e.placement&&"middle"===e.verticalAlign&&"left"===e.align&&(e.offset="5,0")}}((0,d.vOrVi)(b,r),i,(0,d.vOrVi)(t.iconText,r),(0,d.vOrVi)(t.labelText,r),r),e.attributes={icon:x((0,d.vOrVi)(b,r)),max:(0,d.vOrVi)(t.max,r),min:(0,d.vOrVi)(t.min,r),label:"",targetText:""}})),v.yAxis=(0,d.yAxisConfig)(t.value,t,g.styles),t.cultureName&&(v.defaultCultureName=t.cultureName),a.merge(v,t.chartOptions),v;function x(e){var r=" ",i="%color",o=Math.floor(50*(t.labelScaling||1));return i=g.styles.color!==g.styles.icon.color?g.styles.icon.color:i,o=parseInt((0,u.default)(g.styles.icon["font-size"],t.labelScaling)),e&&(r=(0,d.toIconTag)(e,{size:o,fill:i,margin_right:2,opacity:1,verticalAlign:"bottom",outerShape:"square",padding:5,margin_bottom:2},m)),r}},t.prototype.getDefaultOptions=function(){var t=e.prototype.getDefaultOptions.call(this);return Object.assign(t,g)},t.prototype.getInitConfig=function(){return{title:{label:{style:{fontWeight:"bold",color:l.mutedLabelColor,fontSize:16}}},chartArea:{clipContent:!1},box:{fill:"transparent"},defaultSeries:{type:"gauge linear horizontal column roundCaps",mouseTracking:{enabled:!1},shape:{defaultLabel:{verticalAlign:"top",style:{fontSize:14}}}},defaultAxis:{line:{visible:!1}},xAxis:{staticColumnWidth:10,defaultTick:{gridLine:{color:"#ECEFF1"},line:{visible:!1}}},legend:{visible:!1},defaultPoint:{outline:{width:0}},toolbar:{visible:!1}}},t.prototype.getKind=function(){return"linear"},t}(n.Base);t.Linear=p},882:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.yAxisConfig=t.getChangeText=t.toIconTag=t.valuesVOrVi=t.vOrVi=t.positionToAlignments=t.def=t.options2Series=void 0;var i=r(353),o=r(388);function n(e){return void 0!==e}function a(e,t){return void 0===t&&(t=0),n(e)?e.pop?e[t%e.length]:e:void 0}function l(e,t){var r=n(e)?e.pop?e[t%e.length]:e:void 0;return Array.isArray(r)?r[1]:r}t.options2Series=function(e,t){var r,o={},a=e.label,l=e.value,u=a;if("string"==typeof a&&(r=/weekdays|quarters|months/i.test(a)),n(l)&&!Array.isArray(l)&&(l=[l]),n(a)&&!Array.isArray(a)&&(a=[a]),!n(l))return{series:[]};if(e.series)o.series=e.series;else{var c;if(Array.isArray(e.value)&&Array.isArray(e.value[0])&&2===e.value[0].length&&(a=[],l=[],Array.isArray(e.value)&&e.value.forEach((function(e){a.push(e[0]),l.push(e[1])}))),a)if(a.pop&&a.length&&"string"==typeof a[0]&&!r){var s=e.timeLabelFormat?function(t){return i.formatDate(new Date(t),e.timeLabelFormat,e.cultureName)}:function(e){return e};c=a.map(s)}else if(r){var d=u.toLowerCase(),f=e.labelStart;if("months"===d){var g="",p=1,v=2021;if("string"==typeof f){var m=new Date(f);f=m.getMonth(),p=m.getDate(),v=m.getFullYear(),g=e.timeLabelFormat}c=l.map((function(t,r){return i.formatDate(new Date(v,r+f,Math.min(p,new Date(v,r+f+1,0).getDate())),g||"MMM",e.cultureName)}))}else if("weekdays"===d){var y,h=2021,b=0,x=1,A="";"string"==typeof f&&(y=new Date(f),f=y.getDay()-1,x=y.getDate(),b=y.getMonth(),h=y.getFullYear(),A=e.timeLabelFormat),c=l.map((function(t,r){var o=y?new Date(h,b,x+r):new Date(h,b,r-3+f);return A?i.formatDate(o,A,e.cultureName):o.toLocaleString(e.cultureName,{weekday:"short"})}))}else"quarters"===d&&("string"==typeof f&&(f=Math.floor((new Date(f).getMonth()+3)/3)-1),c=l.map((function(e,t){return"Q"+((t+f)%4+1)})))}if(a)return t?o.series=l.map((function(e,t){return{id:"s"+t,name:c[t],points:[{id:"s"+t+"p",x:c[t],y:e}]}})):(o.xAxis={categories:c},o.series=[{points:l.map((function(e,t){return{id:"p"+t,y:e}}))}]),o;o.series=t?l.map((function(e,t){return{id:"s"+t,points:[{id:"s"+t+"p",x:" ",y:e}]}})):[{points:Array.isArray(e.value)&&e.value.map((function(e,t){return{id:"p"+t,x:String.fromCharCode(97+t),y:e}}))}]}return o},t.def=n,t.positionToAlignments=function(e){var t={},r=(e={center:"center middle",left:"outside left middle",right:"outside right middle"}[e.trim().toLowerCase()]||e).match(/left|center|right/gi),i=e.match(/top|middle|bottom/gi),o=e.match(/inside|outside/gi);return r&&r.length&&(t.align=r[0]),i&&i.length&&(t.verticalAlign=i[0]),o&&o.length&&(t.placement=o[0]),t},t.vOrVi=a,t.valuesVOrVi=l,t.toIconTag=function(e,t,r){var o=Array.isArray(r)&&r[0];o&&(t.color=o.color||t.color,t.size=o.style&&parseInt(o.style.fontSize+"")||t.size);var n=/^M-?\d/.test(e.trim());return/^.+(png|gif|jpg|jpeg)$/.test(e.trim())?"<img src=".concat(e," ").concat(a(t,!0),">"):"<icon ".concat(n?"path":"name","=").concat(e,"  ").concat(a(t),">");function a(e,t){return void 0===t&&(t=!1),t&&e.size&&(e.size&&i.merge(e,{width:e.size,height:e.size}),delete e.size,delete e.fill,delete e.opacity,delete e.color),Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join(" ")}},t.getChangeText=function(e,t,r){void 0===r&&(r=!1);var o="";if(t.prevValue){var u=a(t.prevValue,e),c=a(t.valueFormat,e);if(n(u)&&null!==u){var s=Math.round(8*(t.labelScaling||1)),d=Math.round(14*(t.labelScaling||1)),f=l(t.value,e),g=r?function(e,t){var r=100*(t/e-1),i=r>=0?Math.floor:Math.ceil;return r=i(10*r)/10}(u,f):Number((f-u).toFixed(16)),p=g<0,v=p?"#ef5350":"#43a047",m="<icon name=arrow-"+(p?"down":"up")+" size=".concat(s," color=").concat(v," verticalAlign=middle>");o="<br>".concat(m,'<span style="color:').concat(v,";font-size:").concat(d,'px;">')+i.formatNumber(g,c).replace("-","")+(r?"%":"")+"</span>"}}return o},t.yAxisConfig=function(e,t,r){e=n(e)&&Array.isArray(e)?e:[e];var i=[],u=n(t.max)||Array.isArray(t.valueFormat)||!!t.target;if(r.target.color&&r.target.color!==r.color&&r.target.color,!u){var c={visible:!0,defaultTick:{enabled:!1},line:{visible:!1},formatString:a(t.valueFormat,0)};if(!n(t.max)&&Array.isArray(t.value)){var s=e.map((function(e,t){return l(e,t)}));c.scale={range:{max:Math.max.apply(Math,s)}}}return c}return Array.isArray(e)&&e.forEach((function(e,u){var c,s=a(t.target,u);if(n(s)){c=a(t.targetColor,u);var d=l(t.value,u)>=a(t.target,u)?1:0;c=(c=Array.isArray(c)&&2===c.length?c[d]:c)&&c.replace("%color",a(t.color,u))}i.push({visible:!0,defaultTick_enabled:!1,line_visible:!1,id:"yAxis"+(u+1),scale_range:{min:a(t.min,u),max:a(t.max,u)},formatString:a(t.valueFormat,u),customTicks:n(s)?[{includeInScale:!0,value:a(t.target,u),label:{text:a(t.targetText,u),color:r.target.color,style:(0,o.default)(r.target,t.labelScaling)},line_length:0,gridLine:{onTop:!0,color:c,width:5,caps:{type:"circle",size:1}}}]:[]})})),i}},388:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=r(487);t.default=function(e,t){return void 0===t&&(t=1),{fontFamily:e["font-family"],fontSize:(0,i.default)(e["font-size"],t),fontWeight:e["font-weight"],fontStyle:e["font-style"],textDecoration:e["text-decoration"],cursor:e.cursor,color:e.color}}},989:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=r(487),o=["axis-ticks","tooltip","title","value","icon","label","target"],n=["font-family","font-size","font-weight","font-style","text-decoration","text-align","cursor","color"],a={"font-size":i.default,"text-decoration":function(e){return e.split(" ")[0]}};function l(e,t){var r=window.getComputedStyle(e),i={};return t.forEach((function(e){return i[e]=a[e]?a[e](r.getPropertyValue(e)):r.getPropertyValue(e)})),i}t.default=function(e,t){var r=document.createElement("div"),i=document.createElement("div");r.classList.add("jsc-widget"),i.classList.add(t),r.appendChild(i);var a={};o.forEach((function(e){var t=document.createElement("div");t.classList.add(e),i.appendChild(t),a[e]=t})),e.appendChild(r);var u=l(i,n);return o.forEach((function(e){u[e]=l(a[e],n)})),e.removeChild(r),u}},5:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r="JSCharting Widgets: ",i=function(){function e(){}return e.log=function(e){console.log(r+e)},e.warn=function(e){console.warn(r+e)},e.error=function(e){console.error(r+e)},e}();t.default=i},487:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===t&&(t=1);var r=parseInt(e),i=e.replace(r+"","");return"px"!==i&&"pt"!==i&&"em"===i&&(r=Math.round(16*r),i="px"),Math.round(r*t)+i}},609:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{start:"left",end:"right",justify:"center","justify-all":"center"}[e]||e}},414:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=r(388),o=r(609),n=r(353);t.default=function(e,t){var r;void 0===t&&(t=1);var a=e["font-family"],l=(0,o.default)(null===(r=e.title)||void 0===r?void 0:r["text-align"])||"left",u={};return a&&n.merge(u,{title:{position:l,label:{style:(0,i.default)(e.title,t)}},defaultAxis:{defaultTick:{label:{style:(0,i.default)(e["axis-ticks"],t)}}},defaultTooltip:{label:{style:(0,i.default)(e.tooltip,t)}},defaultSeries:{shape:{defaultLabel:{style:(0,i.default)(e,t)}}},defaultPoint:{label:{style:(0,i.default)(e.value,t)}}}),u.defaultAxis.defaultTick.label.color=u.defaultAxis.defaultTick.label.style.color,u.defaultPoint.label.style.color=e.value.color&&e.value.color!==e.color?e.value.color:void 0,u}},99:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=r(353),o=r(5),n="3.4".split("."),a=-1;t.default=function(){if(-1!==a)return 1===a;if(i){a=0;var e=i.getVersion().split(".");if(e[0]>=n[0]&&e[1]>=n[1])return a=1,!0;o.default.error("The JSCharting version must be at least ".concat(n.join("."),". Current version is ").concat(e.join(".")))}else o.default.error("JSCharting library not available.")}},353:e=>{e.exports=JSC}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,r),n.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.jscDefaults=e.Circular=e.Linear=e.BarColumn=void 0;var t=r(657);Object.defineProperty(e,"BarColumn",{enumerable:!0,get:function(){return t.BarColumn}});var o=r(253);Object.defineProperty(e,"Linear",{enumerable:!0,get:function(){return o.Linear}});var n=r(462);Object.defineProperty(e,"Circular",{enumerable:!0,get:function(){return n.Circular}});var a=r(827);Object.defineProperty(e,"jscDefaults",{enumerable:!0,get:function(){return a.jscDefaults}})})(),JSCWidgets=i})();