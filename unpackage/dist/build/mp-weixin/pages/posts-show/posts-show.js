(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/posts-show/posts-show"],{"0200":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"4e96":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("64ba")),o=u(e("5c52"));function u(t){return t&&t.__esModule?t:{default:t}}a.default.registerLanguage("javascript",o.default);var r={data:function(){return{post:[],body:","}},onLoad:function(n){var e=this;console.log(n),t.request({url:"https://laravelcode.info/api/posts/"+n.postid,method:"GET",data:{},success:function(t){console.log(t.data),e.post=t.data,e.body=marked(t.data.body)},fail:function(){},complete:function(){}})},methods:{}};n.default=r}).call(this,e("543d")["default"])},"76b6":function(t,n,e){"use strict";e.r(n);var a=e("0200"),o=e("f1aa");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);var r=e("2877"),c=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},f1aa:function(t,n,e){"use strict";e.r(n);var a=e("4e96"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a}},[["c123","common/runtime","common/vendor"]]]);