(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(34),o=a(25),i=a.n(o),l=a(160),s=a.n(l),u=a(52),d=a.n(u),m=a(161),p=a.n(m),f=a(163),h=a.n(f),b=a(162),v=a.n(b),y=a(164),O=a.n(y);function g(e){var t=e.classes,a=e.children,n=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(i.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(d.a,{variant:"h6",color:"inherit"},n),r.a.createElement(i.a,{item:!0},r.a.createElement(v.a,{title:"Code"},r.a.createElement(h.a,{color:"inherit",component:"a",href:"https://github.com/lili668668/gh-search"},r.a.createElement(O.a,null))))))),r.a.createElement(i.a,{container:!0},r.a.createElement(i.a,{xs:1,sm:2,md:3,item:!0}),r.a.createElement(i.a,{xs:10,sm:8,md:6,item:!0,className:t.root},a),r.a.createElement(i.a,{xs:1,sm:2,md:3,item:!0})))}g.defaultProps={title:""},t.a=Object(c.withStyles)(function(e){return{root:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(g)},155:function(e,t,a){"use strict";var n=a(76),r=a(154),c=a(385);var o=a(33);a.d(t,"a",function(){return i});var i=function(e){var t=Object(r.a)(e,4),a=t[0],o=t[1],i=t[2],l=t[3],s=function(e){return Object(n.a)({},e,{action:"fetch"})},u=Object(c.a)(a,function(e){return e});return u.request=Object(c.a)(o,function(e){return null},s),u.success=Object(c.a)(i,function(e,t){return t},s),u.failure=Object(c.a)(l,function(e,t){return t},s),u}(Object.values(o.a))},189:function(e,t,a){e.exports=a(379)},33:function(e,t,a){"use strict";var n=a(24);a.d(t,"a",function(){return r});var r=function(e,t){var a,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).namespace,c=void 0!==r?"".concat(r.toUpperCase(),"/"):"",o=e.toUpperCase(),i=t.toUpperCase(),l="".concat(c).concat(o,"_").concat(i),s="".concat(c).concat(o,"_").concat(i,"_REQUEST"),u="".concat(c).concat(o,"_").concat(i,"_SUCCESS"),d="".concat(c).concat(o,"_").concat(i,"_FAILURE");return a={},Object(n.a)(a,e,l),Object(n.a)(a,"request",s),Object(n.a)(a,"success",u),Object(n.a)(a,"failure",d),a}("fetch","repositories",{namespace:"search"})},379:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=a(387),l=a(54),s=a(169),u=a.n(s),d=a(58),m=a(114),p=a(157),f=a(158),h=a(172),b=a(159),v=a(171),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e),console.log(t)}},{key:"render",value:function(){var e=this.props.errorPage;return this.state.hasError?r.a.createElement(e,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),O=a(34),g=a(135),j=a.n(g),E=a(25),w=a.n(E),S=a(115);var _=Object(O.withStyles)(function(e){return{root:{minHeight:400}}})(function(e){var t=e.classes;return r.a.createElement(S.a,null,r.a.createElement(w.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:t.root},r.a.createElement(j.a,{disableShrink:!0,color:"secondary"})))}),k=a(15),N=a.n(k),T=a(165),U=a.n(T),x=a(52),C=a.n(x);var P=Object(O.withStyles)(function(e){return{root:{minHeight:400},icon:{width:60,height:60},error:{color:e.palette.error.main},anchor:{color:e.palette.error.dark}}})(function(e){var t=e.classes;return r.a.createElement(w.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:t.root},r.a.createElement(U.a,{className:N()(t.icon,t.error)}),r.a.createElement(C.a,{className:t.error,variant:"body1"},"An unexpected error has occurred."),r.a.createElement(C.a,{className:t.error,variant:"body1"},"Please contact author: ",r.a.createElement("a",{href:"mailTo:lili668668@gmail.com",className:t.anchor},"lili668668@mgmail.com")))}),I=a(39),q=a(389),A=Object(n.lazy)(function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,463))}),B=[r.a.createElement(q.a,{key:"search",exact:!0,path:"/",component:function(){return r.a.createElement(A,null)}})],D=Object(I.a)(B),F=a(27),J=a(384),R=a(153),z=a(170),H=Object(z.a)(),L=a(24),W=a(107),X=a.n(W),K=a(90),M=a.n(K);var Q,V=a(33),$=[V.a.request],G=[V.a.success],Y=[V.a.failure],Z=Object(F.c)({entity:(Q="repositories",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.payload&&t.payload.entities&&t.payload.entities[Q]?M()({},e,Object(L.a)({},Q,t.payload.entities[Q])):e}),meta:function(e,t){var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;switch(a.meta.action){case"fetch":return a.meta.id===n&&a.payload&&a.payload.result&&a.payload.result[e]?X()([].concat(Object(I.a)(t),Object(I.a)(a.payload.result[e]))):t;case"update":case"add":return a.payload&&a.payload.result&&a.payload.result[e]?X()([].concat(Object(I.a)(a.payload.result[e]),Object(I.a)(t))):t;case"delete":return a.payload&&a.payload.result&&a.payload.result[e]?t.filter(function(t){return!a.payload.result[e].includes(t)}):t;default:return t}},n=t.requestTypes,r=t.successTypes,c=t.failureTypes,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return t.meta.id!==a?e:n.includes(t.type)?"loading":r.includes(t.type)?"success":c.includes(t.type)?"failure":e},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return t.meta.id!==a?e:t.payload&&t.payload.pagination?Object.assign({},e,t.payload.pagination):e};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(!n.meta)return t;var r=Object.assign({},t[e]),c=M()(r,Object(L.a)({},n.meta.id,{}));return c=Object.keys(c).map(function(e){var t={id:n.meta.id,status:o(c[e].status,n,e),ids:a(c[e].ids,n,e),pagination:i(c[e].pagination,n,e)};return Object(L.a)({},e,t)}).reduce(function(e,t){return Object.assign({},e,t)},{}),M()({},t,Object(L.a)({},e,c))}}("repositories",{requestTypes:$,successTypes:G,failureTypes:Y})}),ee=Object(F.c)({router:Object(l.b)(H),search:Z}),te=a(388),ae=a(76),ne=a(108),re=a(167),ce=a.n(re),oe=a(55),ie=a.n(oe),le=a(86),se=a(390),ue=a(382),de=a(45),me=a(383),pe=a(386),fe=a(173);var he=a(155),be="https://api.github.com/search/repositories",ve=function(e){var t=e.baseUrl,a=e.type,n=e.fetchAction,r=e.getPayload;return function(e){return e.pipe(Object(fe.a)(a),Object(ue.a)(function(e){var a="",c="?";e.payload&&e.payload.fetchByUrl?(c=e.payload.metaId,a=e.payload.url):(c="?".concat(ie.a.stringify(e.payload)),a="".concat(t).concat(c));var o={id:c};return se.a.getJSON(a).pipe(Object(de.a)(function(e){return n.success(o,r(e,a))}),Object(me.a)(function(e){return Object(le.a)(n.failure(o,e))}),Object(pe.a)(n.request(o)))}))}}({baseUrl:be,type:V.a.fetch,fetchAction:he.a,getPayload:function(e,t){var a=new ne.b.Entity("repositories"),n=Object(ne.a)(e,{items:[a]}),r=ce.a.camelizeKeys(n.entities),c={repositories:n.result.items},o=t.indexOf("?")>=0?t.slice(t.indexOf("?")):"",i=ie.a.parse(o),l=Object(ae.a)({},i);return i.page?l.page=Number(i.page)+1:l.page=2,{entities:r,result:c,pagination:{nextUrl:"".concat(be,"?").concat(ie.a.stringify(l))}}}}),ye=Object(te.a)(ve),Oe=Object(te.a)(ye),ge=Object(J.a)(),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,Ee=Object(F.e)(ee,je(Object(F.a)(ge,Object(R.a)(H))));ge.run(Oe);var we=Ee;var Se=function(e){return r.a.createElement(m.a.Provider,{value:we},r.a.createElement(d.a,{store:we},r.a.createElement(u.a,null),r.a.createElement(l.a,{history:H},r.a.createElement(y,{errorPage:P},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(_,null)},r.a.createElement(i.a,null,D))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[189,1,2]]]);
//# sourceMappingURL=main.6318af33.chunk.js.map