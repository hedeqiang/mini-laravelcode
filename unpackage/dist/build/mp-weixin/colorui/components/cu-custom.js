(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"4f0e":function(t,a,e){"use strict";e.r(a);var n=e("e827"),u=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=u.a},"591a":function(t,a,e){"use strict";e.r(a);var n=e("84e9"),u=e("4f0e");for(var o in u)"default"!==o&&function(t){e.d(a,t,function(){return u[t]})}(o);var r=e("2877"),c=Object(r["a"])(u["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports},"84e9":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},u=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return u})},e827:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,e=this.bgImage,n="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(n="".concat(n,"background-image:url(").concat(e,");")),n}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};a.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("591a"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);                
