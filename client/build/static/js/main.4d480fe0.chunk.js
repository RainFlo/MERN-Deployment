(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),i=c(17),s=c.n(i),o=(c(24),c(25),c(4)),j=c(2),l=c(5),b=c.n(l),h=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)(!1),s=Object(j.a)(i,2),l=s[0],h=s[1];Object(r.useEffect)((function(){b.a.get("http://localhost:8000/api/pirates").then((function(e){a(e.data),h(!0)}))}),[c]);return l?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Pirate Crew"}),Object(n.jsx)("button",{onClick:function(){return Object(o.c)("/pirate/new")},children:"Add Pirate"}),c.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.pirateName}),Object(n.jsx)("img",{src:e.pirateUrl,alt:e.pirateName,width:"150"}),Object(n.jsx)("button",{onClick:function(){return Object(o.c)("/pirate/".concat(e._id))},children:"View Pirate"}),Object(n.jsx)("button",{onClick:function(){return t=e._id,void b.a.delete("http://localhost:8000/api/pirates/".concat(t,"/delete")).then((function(e){console.log(e),a(c.filter((function(e){return e._id!==t})))}));var t},children:"Walk The Plank"})]})}))]}):"Loading..."},u=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)(""),s=Object(j.a)(i,2),l=s[0],h=s[1],u=Object(r.useState)(""),d=Object(j.a)(u,2),O=d[0],p=d[1],x=Object(r.useState)(""),g=Object(j.a)(x,2),f=g[0],v=g[1],P=Object(r.useState)(""),k=Object(j.a)(P,2),C=k[0],y=k[1],m=Object(r.useState)(!0),S=Object(j.a)(m,2),w=S[0],N=S[1],H=Object(r.useState)(!0),L=Object(j.a)(H,2),F=L[0],M=L[1],T=Object(r.useState)(!0),q=Object(j.a)(T,2),B=q[0],E=q[1],U=Object(r.useState)(""),A=Object(j.a)(U,2),I=A[0],Y=A[1],_=Object(r.useState)(""),D=Object(j.a)(_,2),J=D[0],Q=D[1],R=Object(r.useState)(""),V=Object(j.a)(R,2),W=V[0],z=V[1],G=Object(r.useState)(""),K=Object(j.a)(G,2),X=K[0],Z=K[1],$=Object(r.useState)(""),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],ne=Object(r.useState)([]),re=Object(j.a)(ne,2),ae=re[0],ie=re[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Add Pirate"}),Object(n.jsx)("button",{onClick:function(){return Object(o.c)("/pirates")},children:"Crew Board"}),ae.map((function(e,t){return Object(n.jsx)("p",{style:{color:"red"},children:e},t)})),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("http://localhost:8000/api/pirates/new",{pirateName:c,pirateUrl:l,treasure:O,catchPhrase:f,crewPosition:C,pegLeg:w,eyePatch:F,hookHand:B}).then((function(e){console.log(e),Object(o.c)("/")})).catch((function(e){for(var t=e.response.data.errors,c=[],n=0,r=Object.keys(t);n<r.length;n++){var a=r[n];c.push(t[a].message)}ie(c)}))},children:[Object(n.jsxs)("div",{children:[I?Object(n.jsx)("p",{style:{color:"red"},children:I}):"",Object(n.jsx)("label",{children:"Pirate Name:"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){a(e.target.value),e.target.value.length<1?Y("Pirate Name is required!"):Y("")}})]}),Object(n.jsxs)("div",{children:[J?Object(n.jsx)("p",{style:{color:"red"},children:J}):"",Object(n.jsx)("label",{children:"Image Url:"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){h(e.target.value),e.target.value.length<1?Q("Image Url is required!Pirates need to be handsome!"):Q("")}})]}),Object(n.jsxs)("div",{children:[W?Object(n.jsx)("p",{style:{color:"red"},children:W}):"",Object(n.jsx)("label",{children:"# of Treasure Chests:"}),Object(n.jsx)("input",{type:"number",onChange:function(e){p(e.target.value),e.target.value.length<1?z("Pirate treasure is required!"):z("")}})]}),Object(n.jsxs)("div",{children:[X?Object(n.jsx)("p",{style:{color:"red"},children:X}):"",Object(n.jsx)("label",{children:"Pirate Catch Phrase:"}),Object(n.jsx)("input",{type:"text",onChange:function(e){v(e.target.value),e.target.value.length<1?Z("Pirate catch phrase is required!"):Z("")}})]}),Object(n.jsxs)("div",{children:[te?Object(n.jsx)("p",{style:{color:"red"},children:te}):"",Object(n.jsx)("label",{children:"Crew Position:"}),Object(n.jsx)("br",{}),Object(n.jsxs)("select",{value:C,onChange:function(e){y(e.target.value),e.target.value.length<1?ce("Pirate position is required!"):ce("")},children:[Object(n.jsx)("option",{children:"Select Crew Position"}),Object(n.jsx)("option",{value:"Captain",children:"Captain"}),Object(n.jsx)("option",{value:"First Mate",children:"First Mate"}),Object(n.jsx)("option",{value:"Quarter Master",children:"Quarter Master"}),Object(n.jsx)("option",{value:"Bootswain",children:"Bootswain"}),Object(n.jsx)("option",{value:"Powder Monkey",children:"Powder Monkey"})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",checked:w,onChange:function(e){return N(e.target.checked)}}),"Peg Leg"]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",checked:F,onChange:function(e){return M(e.target.checked)}}),"Eye Patch"]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",checked:B,onChange:function(e){return E(e.target.checked)}}),"Hook Hand"]})]}),Object(n.jsx)("button",{children:"Add Pirate"})]})]})},d=function(e){var t=e.id,c=Object(r.useState)(null),a=Object(j.a)(c,2),i=a[0],s=a[1];Object(r.useEffect)((function(){b.a.get("http://localhost:8000/api/pirates/".concat(t)).then((function(e){return s(e.data)}))}),[i]);return Object(n.jsx)(n.Fragment,{children:null!=i?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:i.pirateName}),Object(n.jsx)("img",{src:i.pirateUrl,alt:i.pirateName,width:"500"}),Object(n.jsxs)("h2",{children:['"',i.catchPhrase,'"']}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"About"}),Object(n.jsxs)("p",{children:["Position: ",i.crewPosition]}),Object(n.jsxs)("p",{children:["Treasure: ",i.treasure]}),Object(n.jsxs)("p",{children:["Peg Leg: ",i.pegLeg?"Yes":"No"]}),Object(n.jsx)("button",{onClick:function(){return function(e){var c=e;c.pegLeg=!c.pegLeg,s(c),b.a.put("http://localhost:8000/api/pirates/".concat(t,"/update"),e).then((function(e){return console.log(e)}))}(i)},children:"Change Pegs"}),Object(n.jsxs)("p",{children:["Eye Patch: ",i.eyePatch?"Yes":"No"]}),Object(n.jsx)("button",{onClick:function(){return function(e){var c=e;c.eyePatch=!c.eyePatch,s(c),b.a.put("http://localhost:8000/api/pirates/".concat(t,"/update"),e).then((function(e){return console.log(e)}))}(i)},children:"Change Patch"}),Object(n.jsxs)("p",{children:["Hook Hand: ",i.hookHand?"Yes":"No"]}),Object(n.jsx)("button",{onClick:function(){return function(e){var c=e;c.hookHand=!c.hookHand,s(c),b.a.put("http://localhost:8000/api/pirates/".concat(t,"/update"),e).then((function(e){return console.log(e)}))}(i)},children:"Change Hook"})]}),Object(n.jsx)("button",{onClick:function(){return Object(o.c)("/pirates")},children:"Return to dashboard"})]}):""})};var O=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(o.b,{children:[Object(n.jsx)(o.a,{from:"/",to:"/pirates",noThrow:!0}),Object(n.jsx)(h,{path:"/pirates"}),Object(n.jsx)(u,{path:"/pirate/new"}),Object(n.jsx)(d,{path:"/pirate/:id"})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),p()}},[[50,1,2]]]);
//# sourceMappingURL=main.4d480fe0.chunk.js.map