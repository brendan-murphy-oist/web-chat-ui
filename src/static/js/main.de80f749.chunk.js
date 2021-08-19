(this["webpackJsonpsample-customization-minimizable-web-chat"]=this["webpackJsonpsample-customization-minimizable-web-chat"]||[]).push([[0],{1050:function(e,t){},1052:function(e,t){},1066:function(e,t){},1068:function(e,t){},1096:function(e,t){},1098:function(e,t){},1099:function(e,t){},1104:function(e,t){},1106:function(e,t){},1112:function(e,t){},1114:function(e,t){},1133:function(e,t){},1145:function(e,t){},1148:function(e,t){},167:function(e,t){},1743:function(e,t){},1860:function(e,t){},1881:function(e,t){},1883:function(e,t){},1886:function(e,t){},1887:function(e,t){},1888:function(e,t){},1889:function(e,t){},1890:function(e,t){},1894:function(e,t){},1992:function(e,t,n){},1993:function(e,t,n){},1994:function(e,t,n){},1995:function(e,t,n){},1998:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(239),i=n.n(o),s=(n(889),n(3)),r=n.n(s),u=n(497),l=n(206),m=n(22),f=n.n(m),b=n(162),h=n.n(b),E=(n(1992),function(e){var t=e.className,n=e.onFetchToken,o=e.store,i=e.token,s=Object(c.useMemo)((function(){return Object(b.createDirectLine)({token:i})}),[i]),r=Object(c.useMemo)((function(){return Object(b.createStyleSet)({backgroundColor:"Transparent"})}),[]);return Object(c.useEffect)((function(){n()}),[n]),i?a.a.createElement(h.a,{className:"".concat(t||""," web-chat"),directLine:s,store:o,styleSet:r}):a.a.createElement("div",{className:"".concat(t||""," connect-spinner")},a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"icon"},a.a.createElement("span",{className:"ms-Icon ms-Icon--Robot"})),a.a.createElement("p",null,"Please wait while we are connecting.")))}),p=(n(1993),n(1994),function(){var e=Object(c.useMemo)((function(){return Object(b.createStore)({},(function(e){var t=e.dispatch;return function(e){return function(n){return"DIRECT_LINE/CONNECT_FULFILLED"===n.type?t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:window.navigator.language}}}):"DIRECT_LINE/INCOMING_ACTIVITY"===n.type&&"bot"===n.payload.activity.from.role&&N(!0),e(n)}}}))}),[]),t=Object(c.useMemo)((function(){return Object(b.createStyleSet)({backgroundColor:"Transparent"})}),[]),n=Object(c.useState)(!1),o=Object(l.a)(n,2),i=o[0],s=o[1],m=Object(c.useState)(!0),h=Object(l.a)(m,2),p=h[0],d=h[1],O=Object(c.useState)(!1),j=Object(l.a)(O,2),w=j[0],N=j[1],k=Object(c.useState)("right"),I=Object(l.a)(k,2),v=I[0],C=I[1],g=Object(c.useState)(),S=Object(l.a)(g,2),y=S[0],T=S[1],z=Object(c.useCallback)(Object(u.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=9;break}return e.next=3,fetch("https://webchat-mockbot.azurewebsites.net/directline/token",{method:"POST"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.token,T(c);case 9:case"end":return e.stop()}}),e)}))),[T,y]),x=Object(c.useCallback)(Object(u.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),d(!1),N(!1);case 3:case"end":return e.stop()}}),e)}))),[d,N]),M=Object(c.useCallback)((function(){d(!0),N(!1)}),[d,N]),L=Object(c.useCallback)((function(){C("left"===v?"right":"left")}),[C,v]);return a.a.createElement("div",{className:"minimizable-web-chat"},p&&a.a.createElement("button",{className:"maximize",onClick:x},a.a.createElement("span",{className:y?"ms-Icon ms-Icon--MessageFill":"ms-Icon ms-Icon--Message"}),w&&a.a.createElement("span",{className:"ms-Icon ms-Icon--CircleShapeSolid red-dot"})),i&&a.a.createElement("div",{className:f()("left"===v?"chat-box left":"chat-box right",p?"hide":"")},a.a.createElement("header",null,a.a.createElement("div",{className:"filler"}),a.a.createElement("button",{className:"switch",onClick:L},a.a.createElement("span",{className:"ms-Icon ms-Icon--Switch"})),a.a.createElement("button",{className:"minimize",onClick:M},a.a.createElement("span",{className:"ms-Icon ms-Icon--ChromeMinimize"}))),a.a.createElement(E,{className:"react-web-chat",onFetchToken:z,store:e,styleSet:t,token:y})))}),d=(n(1995),function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},205:function(e,t){},867:function(e,t){},869:function(e,t){},870:function(e,t){},871:function(e,t){},872:function(e,t){},873:function(e,t){},874:function(e,t){},875:function(e,t){},889:function(e,t,n){}},[[1998,1,2]]]);
//# sourceMappingURL=main.de80f749.chunk.js.map