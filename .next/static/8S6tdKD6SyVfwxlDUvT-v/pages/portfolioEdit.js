(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{T2LJ:function(t,e,o){"use strict";o.r(e),o.d(e,"portfolioEdit",(function(){return T}));var r=o("9Jkg"),n=o.n(r),a=o("ln6h"),i=o.n(a),s=o("0iUn"),u=o("MI3g"),c=o("a7VT"),l=o("AT/M"),p=o("sLSF"),f=o("Tit0"),d=o("q1tI"),h=o.n(d),b=(o("Sztk"),o("ZfN1")),v=o("QIjs"),w=o("lxPV"),j=o("3P/n"),O=o("ok1R"),P=o("rhny"),g=o("dpnd"),k=o("8cHP"),m=h.a.createElement,T=function(t){function e(t){var o;return Object(s.a)(this,e),(o=Object(u.a)(this,Object(c.a)(e).call(this))).state={error:void 0},o.updatePortfolio=o.updatePortfolio.bind(Object(l.a)(o)),o}return Object(f.a)(e,t),Object(p.a)(e,null,[{key:"getInitialProps",value:function(t){var e,o;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.query,o={},r.prev=2,r.next=5,i.a.awrap(Object(g.h)(e.id));case 5:o=r.sent,r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),console.log(err);case 11:return r.abrupt("return",{portfolio:o});case 12:case"end":return r.stop()}}),null,null,[[2,8]])}}]),Object(p.a)(e,[{key:"updatePortfolio",value:function(t,e){var o=this,r=e.setSubmitting;alert(n()(t,null,2)),r(!0),Object(g.m)(t).then((function(t){r(!1),console.log(t),o.setState({error:void 0}),k.Router.pushRoute("/portfolios")})).catch((function(t){t.message;r(!1),o.setState({error:t.message})}))}},{key:"render",value:function(){var t=this.state.error,e=this.props.portfolio;return m("div",null,m(b.a,this.props.auth,m(v.a,{className:"portfolio-create-page",title:"Update Portfolio"},m(O.a,null,m(P.a,{md:"6"},m(j.a,{initialValues:e,error:t,onSubmit:this.updatePortfolio}))))))}}]),e}(d.Component);e.default=Object(w.a)("siteOwner")(T)},vsHN:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolioEdit",function(){return o("T2LJ")}])}},[["vsHN",1,2,6,0,3,4,5,12,13]]]);