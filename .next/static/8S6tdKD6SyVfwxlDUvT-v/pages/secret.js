(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"2Eek":function(t,n,e){t.exports=e("W7oM")},"7m0m":function(t,n,e){var r=e("Y7ZC"),a=e("uplh"),c=e("NsO/"),u=e("vwuL"),o=e("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=c(t),s=u.f,i=a(r),f={},p=0;i.length>p;)void 0!==(e=s(r,n=i[p++]))&&o(f,n,e);return f}})},PLCo:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/secret",function(){return e("pg8L")}])},QIjs:function(t,n,e){"use strict";var r=e("q1tI"),a=e.n(r),c=e("1Yj4"),u=(e("kY+P"),a.a.createElement),o=function(t){var n=t.className,e=t.title,r=t.containerClass;return u("div",{className:"base-page ".concat(n)},u(c.a,{className:r},e&&u("div",{className:"page-header"}," ",u("h1",{className:"page-header-title"},e)," "),t.children))};o.defaultProps={className:"",containerClass:""},n.a=o},W7oM:function(t,n,e){e("nZgG");var r=e("WEpk").Object;t.exports=function(t,n){return r.defineProperties(t,n)}},XoMD:function(t,n,e){t.exports=e("hYAz")},dpnd:function(t,n,e){"use strict";e.d(n,"j",(function(){return v})),e.d(n,"i",(function(){return b})),e.d(n,"b",(function(){return w})),e.d(n,"h",(function(){return g})),e.d(n,"m",(function(){return x})),e.d(n,"d",(function(){return j})),e.d(n,"g",(function(){return m})),e.d(n,"f",(function(){return y})),e.d(n,"k",(function(){return O})),e.d(n,"a",(function(){return P})),e.d(n,"e",(function(){return k})),e.d(n,"l",(function(){return I})),e.d(n,"c",(function(){return S}));var r=e("ln6h"),a=e.n(r),c=e("eVuF"),u=e.n(c),o=e("vDqi"),s=e.n(o),i=e("p46w"),f=e.n(i),p=e("hw50"),l=s.a.create({baseURL:"http://localhost:3000/api/v1",timeout:3e3}),h=function(t){var n=t?Object(p.a)(t,"jwt"):f.a.getJSON("jwt");if(n)return{headers:{authorization:"Bearer ".concat(n)}}},d=function(t){var n={};return n=t&&t.response&&t.response.data?t.response.data:t,u.a.reject(n)},v=function(t){var n;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?"/secret":"/api/v1/secret",e.next=3,a.a.awrap(l.get(n,h(t)).then((function(t){return t.data})));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}))},b=function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"/portfolios",t.next=3,a.a.awrap(l.get("/portfolios").then((function(t){return t.data})));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}))},w=function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"/portfolios",n.next=3,a.a.awrap(l.post("/portfolios",t,h()).then((function(t){return t.data})).catch((function(t){return d(t)})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},g=function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(l.get("/portfolios/".concat(t)).then((function(t){return t.data})));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))},x=function(t){var n;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/portfolios/".concat(t._id),e.next=3,a.a.awrap(l.patch(n,t,h()).then((function(t){return t.data})).catch((function(t){return d(t)})));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}))},j=function(t){return l.delete("/portfolios/".concat(t),h()).then((function(t){return t.data}))},m=function(t){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(l.get("/blogs").then((function(t){return t.data})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},y=function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(l.get("/blogs/s/".concat(t)).then((function(t){return t.data})));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))},O=function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(l.get("/blogs/me",h(t)).then((function(t){return t.data})));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))},P=function(t,n){return l.post("/blogs?lockId=".concat(n),t,h()).then((function(t){return t.data})).catch((function(t){return d(t)}))},k=function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(l.get("/blogs/".concat(t)).then((function(t){return t.data})));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))},I=function(t,n){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.patch("/blogs/".concat(n),t,h()).then((function(t){return t.data})).catch((function(t){return d(t)})));case 1:case"end":return e.stop()}}))},S=function(t){return l.delete("/blogs/".concat(t),h()).then((function(t){return t.data})).catch((function(t){return d(t)}))}},hYAz:function(t,n,e){e("7m0m"),t.exports=e("WEpk").Object.getOwnPropertyDescriptors},"kY+P":function(t,n,e){},lxPV:function(t,n,e){"use strict";var r=e("hfKm"),a=e.n(r),c=e("2Eek"),u=e.n(c),o=e("XoMD"),s=e.n(o),i=e("Jo+v"),f=e.n(i),p=e("4mXO"),l=e.n(p),h=e("pLtp"),d=e.n(h),v=e("ln6h"),b=e.n(v),w=e("vYYK"),g=e("0iUn"),x=e("sLSF"),j=e("MI3g"),m=e("a7VT"),y=e("Tit0"),O=e("q1tI"),P=e.n(O),k=e("ZfN1"),I=e("QIjs"),S=P.a.createElement;function Y(t,n){var e=d()(t);if(l.a){var r=l()(t);n&&(r=r.filter((function(n){return f()(t,n).enumerable}))),e.push.apply(e,r)}return e}function D(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(e),!0).forEach((function(n){Object(w.a)(t,n,e[n])})):s.a?u()(t,s()(e)):Y(Object(e)).forEach((function(n){a()(t,n,f()(e,n))}))}return t}n.a=function(t){return function(n){return function(e){function r(){return Object(g.a)(this,r),Object(j.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(y.a)(r,e),Object(x.a)(r,[{key:"renderProtectedPage",value:function(){var e=this.props.auth,r=e.isAuthenticated,a=e.user,c=a&&a["".concat("http://angeloamadora.herokuapp.com","/role")],u=!1;return t?c&&c===t&&(u=!0):u=!0,r?u?S(n,this.props):S("div",null,S(k.a,this.props.auth,S(I.a,null,S("h1",null,"You're not Authroized, you dont have permission to access this page")))):S("div",null,S(k.a,this.props.auth,S(I.a,null,S("h1",null,"You're not isAuthenticated, please log in to access this page"))))}},{key:"render",value:function(){return this.renderProtectedPage()}}],[{key:"getInitialProps",value:function(t){var e;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.awrap(n.getInitialProps);case 2:if(r.t0=r.sent,!r.t0){r.next=7;break}return r.next=6,b.a.awrap(n.getInitialProps(t));case 6:r.t0=r.sent;case 7:return e=r.t0,r.abrupt("return",D({},e));case 9:case"end":return r.stop()}}))}}]),r}(P.a.Component)}}},nZgG:function(t,n,e){var r=e("Y7ZC");r(r.S+r.F*!e("jmDH"),"Object",{defineProperties:e("fpC5")})},pg8L:function(t,n,e){"use strict";e.r(n),e.d(n,"Secret",(function(){return w}));var r=e("ln6h"),a=e.n(r),c=e("0iUn"),u=e("MI3g"),o=e("a7VT"),s=e("sLSF"),i=e("Tit0"),f=e("q1tI"),p=e.n(f),l=(e("Sztk"),e("ZfN1")),h=e("QIjs"),d=e("lxPV"),v=e("dpnd"),b=p.a.createElement,w=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(u.a)(this,Object(o.a)(n).call(this))).state={secretData:[]},e}return Object(i.a)(n,t),Object(s.a)(n,null,[{key:"getInitialProps",value:function(t){var n,e;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.req,r.next=3,a.a.awrap(Object(v.j)(n));case 3:return e=r.sent,console.log(e),r.abrupt("return",{anotherSecretData:e});case 6:case"end":return r.stop()}}))}}]),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(Object(v.j)());case 2:t=n.sent,this.setState({secretData:t});case 4:case"end":return n.stop()}}),null,this)}},{key:"displaySecretData",value:function(){var t=this.state.secretData;return t&&t.length>0?t.map((function(t,n){return b("div",{key:n},b("a",null,t.title),b("a",null,t.description))})):null}},{key:"render",value:function(){var t=this.props.superSecret;return b("div",null,b(l.a,this.props.auth,b(h.a,null,b("h1",null,"I am Secret Page"),b("p",null,"Some secret content heere"),b("h2",null,t),this.displaySecretData())))}}]),n}(f.Component);n.default=Object(d.a)()(w)},uplh:function(t,n,e){var r=e("ar/p"),a=e("mqlF"),c=e("5K7Z"),u=e("5T2Y").Reflect;t.exports=u&&u.ownKeys||function(t){var n=r.f(c(t)),e=a.f;return e?n.concat(e(t)):n}},vYYK:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("hfKm"),a=e.n(r);function c(t,n,e){return n in t?a()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}}},[["PLCo",1,2,0,3,4]]]);