(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{575:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("b-jumbotron",{staticClass:"lb-container"},[e("b-container",{staticClass:"lb-cointainer-fluid"},[e("lebab-readme")],1)],1)};r._withStripped=!0;var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.$md.render(this.model))}})};a._withStripped=!0;var i={data:function(){return{model:""}},created:function(){var t=this;this.$axios.$get("https://raw.githubusercontent.com/lebab/lebab/master/README.md").then(function(e){e=e.replace(/http:/g,"https:"),t.model=e})}},s=n(25),l={components:{LebabReadme:Object(s.a)(i,a,[],!1,null,null,null).exports}},o=Object(s.a)(l,r,[],!1,null,null,null);e.default=o.exports}}]);