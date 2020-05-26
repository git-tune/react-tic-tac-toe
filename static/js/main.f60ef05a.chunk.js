(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{17:function(n,e,t){n.exports=t(25)},22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),c=(t(22),t(14)),u=t(5),l=t(9),s=t(10),d=t(15),f=t(16),b=t(1),v=t(2);function m(){var n=Object(b.a)(["\n html {\n    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n    line-height: 1.5;\n    font-size: 15px;\n    font-weight: 400:\n  }\n  body {\n    padding: 0;\n    margin: 0;\n  }\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  h1 {\n    font-size: 1.2rem;\n  }\n"]);return m=function(){return n},n}var p=Object(v.a)(m()),h=function(){return a.a.createElement(p,null)};function x(){var n=Object(b.a)(["\n  width: 3rem;\n  height: 3rem;\n  font-size: 2rem;\n  text-align: center;\n  border-right: 1px solid black;\n  &:hover {\n    cursor: pointer;\n  }\n  &:last-child {\n    border-right: 0;\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(b.a)(["\n  display: flex;\n  border-bottom: 1px solid black;\n  &:last-child {\n    border-bottom: 0;\n  }\n"]);return g=function(){return n},n}function y(){var n=Object(b.a)(["\n  border: 1px solid black;\n"]);return y=function(){return n},n}var j=v.b.div(y()),k=v.b.div(g()),E=v.b.div(x()),O=function(n){var e=n.board,t=n.index,r=n.onClick;return a.a.createElement(k,null,new Array(3).fill("").map((function(n,i){var o=3*(t-1)+i;return a.a.createElement(E,{key:o,onClick:function(){return r(o)}},e[o])})))},w=function(n){var e=n.board,t=n.onClick;return a.a.createElement(j,null,a.a.createElement(O,{board:e,index:1,onClick:t}),a.a.createElement(O,{board:e,index:2,onClick:t}),a.a.createElement(O,{board:e,index:3,onClick:t}))};function C(){var n=Object(b.a)(["\n  padding: 8px 16px;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border-bottom: ",";\n"]);return C=function(){return n},n}function T(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n"]);return T=function(){return n},n}var S=v.b.div(T()),z=v.b.div(C(),(function(n){return n.isTurn?"3px solid black":"0"})),L=function(n){var e=n.turns,t=n.turn;return a.a.createElement(S,null,e.map((function(n){var e=n===t;return a.a.createElement(z,{key:n,isTurn:e},n)})))};function R(){var n=Object(b.a)(["\n  text-align: center;\n  padding: 8px;\n"]);return R=function(){return n},n}function A(){var n=Object(b.a)(["\n  display: inline-block;\n  text-align: center;\n  font-weight: bold;\n  border: 3px solid black;\n  border-radius: 6px;\n  padding: 4px 16px;\n  &:hover {\n    background: black;\n    color: white;\n    cursor: pointer;\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(b.a)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return B=function(){return n},n}function J(){var n=Object(b.a)([""]);return J=function(){return n},n}function W(){var n=Object(b.a)(["\n  text-align: center;\n"]);return W=function(){return n},n}function G(){var n=Object(b.a)(["\n  padding: 16px;\n"]);return G=function(){return n},n}function I(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]);return I=function(){return n},n}var M=v.b.div(I()),U=v.b.div(G()),$=v.b.h1(W()),q=v.b.div(J()),D=v.b.div(B()),F=v.b.a(A()),H=v.b.div(R()),K={circle:"\u25cb",cross:"\xd7"},N="win",P="draw",Q={winner:null,turn:K.circle,progress:!0,statusText:"progressing",handCount:0,isCircleTurn:!0,board:new Array(9)},V=function(n){Object(f.a)(t,n);var e=Object(d.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).onRestart=function(){r.setState(Object(u.a)({},Q))},r.onClick=function(n){var e=r.state,t=e.board,a=e.handCount,i=e.progress,o=e.turn;if(!t[n]&&i){var u=Object(c.a)(t);u[n]=o,r.setState({board:u,handCount:a,turn:o===K.circle?K.cross:K.circle}),X(u,o,n)?r.setState({progress:!1,winner:o,statusText:o+" "+N}):Y(u)&&r.setState({progress:!1,statusText:P})}},r.state=Object(u.a)({},Q),r}return Object(s.a)(t,[{key:"render",value:function(){var n=this.state,e=n.turn,t=n.board,r=n.statusText;return a.a.createElement(M,null,a.a.createElement(q,null,a.a.createElement(h,null),a.a.createElement(U,null,a.a.createElement($,null,"Tic Tac Toe"),a.a.createElement(L,{turns:Object.values(K),turn:e})),a.a.createElement(w,{board:t,onClick:this.onClick}),a.a.createElement(D,null,a.a.createElement(H,null,r),a.a.createElement(F,{onClick:this.onRestart},"Restart"))))}}]),t}(a.a.Component),X=function(n,e){return[0,1,2].every((function(t){return n[t]===e}))||[3,4,5].every((function(t){return n[t]===e}))||[6,7,8].every((function(t){return n[t]===e}))||[0,3,6].every((function(t){return n[t]===e}))||[1,4,7].every((function(t){return n[t]===e}))||[2,5,8].every((function(t){return n[t]===e}))||[0,4,8].every((function(t){return n[t]===e}))||[2,4,6].every((function(t){return n[t]===e}))},Y=function(n){return n.every((function(n){return n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f60ef05a.chunk.js.map