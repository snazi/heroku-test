(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{THHX:function(t,e,n){"use strict";n.r(e),n.d(e,"BlogEditorUpdate",(function(){return O}));var a=n("ln6h"),r=n.n(a),s=n("0iUn"),i=n("MI3g"),o=n("a7VT"),c=n("AT/M"),u=n("sLSF"),l=n("Tit0"),p=n("q1tI"),b=n.n(p),d=(n("Sztk"),n("ZfN1")),v=n("QIjs"),g=n("lxPV"),f=(n("Kb2E"),n("r4ZA"),n("LmOk")),h=n("dpnd"),w=n("FGyW"),S=b.a.createElement,O=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(o.a)(e).call(this,t))).state={isSaving:!1},n.updateBlog=n.updateBlog.bind(Object(c.a)(n)),n}return Object(l.a)(e,t),Object(u.a)(e,null,[{key:"getInitialProps",value:function(t){var e,n,a;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=t.query,n=e.id,a={},s.prev=3,s.next=6,r.a.awrap(Object(h.e)(n));case 6:a=s.sent,s.next=12;break;case 9:s.prev=9,s.t0=s.catch(3),console.error(s.t0);case 12:return s.abrupt("return",{blog:a});case 13:case"end":return s.stop()}}),null,null,[[3,9]])}}]),Object(u.a)(e,[{key:"updateBlog",value:function(t,e){var n=this,a=this.props.blog,r={};r.title=t.title,r.subTitle=t.subtitle,r.story=e,this.setState({isSaving:!0}),Object(h.l)(r,a._id).then((function(t){w.b.success("Blog Saved Successfully"),n.setState({isSaving:!1})})).catch((function(t){n.setState({isSaving:!1});var e=t.message||"Server Error!";w.b.error(e),console.error(e)}))}},{key:"render",value:function(){var t=this.props.blog;console.log(t);var e=this.state.isSaving;return S("div",null,S(d.a,this.props.auth,S(v.a,{containerClass:"editor-wrapper",className:"blog-editor-page"},S(f.a,{initialValue:t.story,save:this.updateBlog,isSaving:e}))))}}]),e}(p.Component);e.default=Object(g.a)("siteOwner")(O)},eTZf:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogEditorUpdate",function(){return n("THHX")}])}},[["eTZf",1,2,0,3,4,8,10,7]]]);