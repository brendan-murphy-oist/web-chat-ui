(this["webpackJsonpminimizable-web-chat"]=this["webpackJsonpminimizable-web-chat"]||[]).push([[0],{1050:function(e,t){},1052:function(e,t){},1066:function(e,t){},1068:function(e,t){},1096:function(e,t){},1098:function(e,t){},1099:function(e,t){},1104:function(e,t){},1106:function(e,t){},1112:function(e,t){},1114:function(e,t){},1133:function(e,t){},1145:function(e,t){},1148:function(e,t){},167:function(e,t){},1743:function(e,t){},1860:function(e,t){},1881:function(e,t){},1883:function(e,t){},1886:function(e,t){},1887:function(e,t){},1888:function(e,t){},1889:function(e,t){},1890:function(e,t){},1894:function(e,t){},1992:function(e,t,n){},1993:function(e,t,n){},1994:function(e,t,n){},1995:function(e,t,n){},1998:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(239),i=n.n(o),r=(n(889),n(3)),l=n.n(r),u=n(497),s=n(206),m=n(22),f=n.n(m),b=n(162),h=n.n(b),E=(n(1992),function(e){var t=e.className,n=e.onFetchToken,o=e.store,i=e.token,r=Object(a.useMemo)((function(){return Object(b.createDirectLine)({token:i})}),[i]),l=Object(a.useMemo)((function(){return Object(b.createStyleSet)({backgroundColor:"Transparent"})}),[]);return Object(a.useEffect)((function(){n()}),[n]),i?c.a.createElement(h.a,{className:"".concat(t||""," web-chat"),directLine:r,store:o,styleSet:l}):c.a.createElement("div",{className:"".concat(t||""," connect-spinner")},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"icon"},c.a.createElement("span",{className:"material-Icon material-Icon--Loading"})),c.a.createElement("p",null,"Please wait while we connect you.")))}),d=(n(1993),n(1994),function(){var e=Object(a.useMemo)((function(){return Object(b.createStore)({},(function(e){var t=e.dispatch;return function(e){return function(n){return"DIRECT_LINE/CONNECT_FULFILLED"===n.type?t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:window.navigator.language}}}):"DIRECT_LINE/INCOMING_ACTIVITY"===n.type&&"bot"===n.payload.activity.from.role&&N(!0),e(n)}}}))}),[]),t=Object(a.useMemo)((function(){return Object(b.createStyleSet)({backgroundColor:"Transparent"})}),[]),n=Object(a.useState)(!1),o=Object(s.a)(n,2),i=o[0],r=o[1],m=Object(a.useState)(!0),h=Object(s.a)(m,2),d=h[0],p=h[1],O=Object(a.useState)(!1),j=Object(s.a)(O,2),w=j[0],N=j[1],k=Object(a.useState)("right"),I=Object(s.a)(k,2),v=I[0],C=I[1],g=Object(a.useState)(),S=Object(s.a)(g,2),y=S[0],T=S[1],x=Object(a.useCallback)(Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=9;break}return e.next=3,fetch("https://webchat-mockbot.azurewebsites.net/directline/token",{method:"POST"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.token,T(a);case 9:case"end":return e.stop()}}),e)}))),[T,y]),L=Object(a.useCallback)(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0),p(!1),N(!1);case 3:case"end":return e.stop()}}),e)}))),[p,N]),M=Object(a.useCallback)((function(){p(!0),N(!1)}),[p,N]),z=Object(a.useCallback)((function(){C("left"===v?"right":"left")}),[C,v]);return c.a.createElement("div",{className:"minimizable-web-chat"},d&&c.a.createElement("button",{className:"maximize",onClick:L},c.a.createElement("span",{className:y?"material-Icon material-Icon--MessageFill":"material-Icon material-Icon--Message"}),w&&c.a.createElement("span",{className:"material-Icon material-Icon--FilledCircle red-dot"})),i&&c.a.createElement("div",{className:f()("left"===v?"chat-box left":"chat-box right",d?"hide":"")},c.a.createElement("header",null,c.a.createElement("div",{className:"filler"}),c.a.createElement("button",{className:"switch",onClick:z},c.a.createElement("span",{className:"material-Icon material-Icon--Switch"})),c.a.createElement("button",{className:"minimize",onClick:M},c.a.createElement("span",{className:"material-Icon material-Icon--ChromeMinimize"}))),c.a.createElement(E,{className:"react-web-chat",onFetchToken:x,store:e,styleSet:t,token:y})))}),p=(n(1995),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},205:function(e,t){},867:function(e,t){},869:function(e,t){},870:function(e,t){},871:function(e,t){},872:function(e,t){},873:function(e,t){},874:function(e,t){},875:function(e,t){},889:function(e,t,n){}},[[1998,1,2]]]);
//# sourceMappingURL=main.818d5450.chunk.js.map