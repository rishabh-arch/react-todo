(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),r=n.n(i),l=n(4),o=n(6),s=(n(12),n(0)),a=function(){var e=localStorage.getItem("key"),t=[];null!==e&&""!==e&&(t=e.split(","));var n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],a=i[1],j=Object(c.useState)(t),d=Object(o.a)(j,2),u=d[0],b=d[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"main_div",children:Object(s.jsxs)("div",{className:"center_div",children:[Object(s.jsx)("h1",{children:"ToDo List"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{id:"inp",children:[Object(s.jsx)("input",{type:"text",placeholder:"add an items",onChange:function(e){a(e.target.value)}}),Object(s.jsx)("button",{onClick:function(){b((function(e){if(""!==r&&-1===e.indexOf(r)){var t=[].concat(Object(l.a)(e),[r]),n=t.toString();return localStorage.setItem("key",n),t}if(e.length>0){n=Object(l.a)(e).toString();localStorage.setItem("key",n)}return Object(l.a)(e)}))},children:"+"})]}),Object(s.jsx)("ol",{children:u.map((function(e,t){return Object(s.jsxs)("div",{className:"todo_style",children:[Object(s.jsx)("i",{className:"cross","aria-hidden":"true",onClick:function(){!function(e){b((function(t){var n=t.filter((function(t,n){return n!==e})),c=n.toString();return localStorage.setItem("key",c),n}))}(t)},children:"X"}),Object(s.jsx)("li",{style:{listStyle:"none"},children:e})]},t)}))})]})})})};r.a.render(Object(s.jsx)(a,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d89a0dde.chunk.js.map