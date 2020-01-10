(this["webpackJsonpcolor-game"]=this["webpackJsonpcolor-game"]||[]).push([[0],{10:function(e,t,a){e.exports=a(26)},15:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),l=a.n(c),o=(a(15),a(1)),s=a(2),u={gameStarted:!1,selectedLevel:!1,startError:!1,openModal:!1,colorsArray:[],clicks:0,time:{},gameFinished:!1},m=Object(r.createContext)(u),i=m.Provider,d=function(){var e=Object(r.useContext)(m).dispatch,t=Object(r.useContext)(m).state.selectedLevel,a=function(t){var a=t.target.value;e({type:"SELECT_LEVEL",selectedLevel:a}),e({type:"START_ERROR",startError:!1})},c=function(e){return e===t?"selected":""};return n.a.createElement("div",{className:"menu__difficulty"},n.a.createElement("h2",null,"Select Level of Difficulty"),n.a.createElement("div",{className:"menu__levels"},n.a.createElement("button",{className:"btn btn__level--easy ".concat(c("EASY")),value:"EASY",onClick:function(e){return a(e)}},"EASY"),n.a.createElement("button",{className:"btn btn__level--medium ".concat(c("MEDIUM")),value:"MEDIUM",onClick:function(e){return a(e)}},"MEDIUM"),n.a.createElement("button",{className:"btn btn__level--hard ".concat(c("HARD")),value:"HARD",onClick:function(e){return a(e)}},"HARD")))},E=function(e){var t=e.msg,a=e.class_Name;return n.a.createElement("div",{className:a},t)},b=a(5),f=a.n(b),v={content:{top:"50%",left:"50%",width:"80%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"0.25rem solid #470100",borderRadius:"1rem",backgroundColor:"#ad343e"}};f.a.setAppElement("#root");var _=function(){var e=Object(r.useContext)(m).dispatch,t=Object(r.useContext)(m).state.openModal;return n.a.createElement(f.a,{isOpen:t,style:v,contentLabel:"Example Modal"},n.a.createElement("div",{className:"modal"},n.a.createElement("h2",{className:"modal__title"},"Welcome to my color-game!"),n.a.createElement("p",{className:"modal__text--body"},"I created this simple game to practise context state managment in React. To start the game you have to choose the level of difficulty and press the start button. Then you will see colorful blocks. Your task is to set the same color on each block as quick as possible. You can change color of a block by clicking on it."," "),n.a.createElement("button",{className:"modal__btn",onClick:function(){return e({type:"OPEN_MODAL",openModal:!1})}},"GOT IT!")))},h=function(){var e=Object(r.useContext)(m).dispatch,t=Object(r.useContext)(m).state,a=t.selectedLevel,c=t.startError;return n.a.createElement("div",{className:"menu"},n.a.createElement("div",{className:"menu__wrapper"},n.a.createElement("div",{className:"menu__header"},n.a.createElement("h1",null,"Color Game")),n.a.createElement(d,null),c&&n.a.createElement(E,{msg:"You have to select level of difficulty before start.",class_Name:"menu__error"}),n.a.createElement("div",{className:"menu__start"},n.a.createElement("button",{className:"btn__start",onClick:function(){return e(!1===a?{type:"START_ERROR",startError:!0}:{type:"START_GAME"})}},"START"))),n.a.createElement("div",{className:"menu__info",onClick:function(){return e({type:"OPEN_MODAL",openModal:!0})}},"?"),n.a.createElement(_,null))},O=function(){var e=Object(r.useContext)(m).dispatch,t=Object(r.useContext)(m).state.clicks,a=Object(r.useState)(0),c=Object(s.a)(a,2),l=c[0],o=c[1],u=Object(r.useState)(0),i=Object(s.a)(u,2),d=i[0],E=i[1],b=Object(r.useState)(0),f=Object(s.a)(b,2),v=f[0],_=f[1];Object(r.useEffect)((function(){var e=setTimeout((function(){_(v+10)}),10);return function(){return clearInterval(e)}})),Object(r.useEffect)((function(){e({type:"SET_TIME",time:{minutes:l,seconds:d,miliSeconds:v}})}),[t]);return n.a.createElement("div",{className:"game__timer"},n.a.createElement("div",{className:"game__timer--top"},l<10?"0".concat(l):l,":",(v>1e3&&(_(0),E(d+1)),d<10?"0".concat(d):d>59?(E(0),o(l+1),"00"):d)))},g=function(){var e=Object(r.useContext)(m).dispatch,t=Object(r.useContext)(m).state.time;return n.a.createElement("div",{className:"summary"},n.a.createElement("div",{className:"summary__wrapper"},n.a.createElement("div",{className:"summary__heading"},n.a.createElement("h1",null,"Congratulations!"),n.a.createElement("h2",null,"You Won!")),n.a.createElement("div",{className:"summary__time"},n.a.createElement("div",{className:"time__heading"},"Your Time"),n.a.createElement("div",{className:"time__timer"},function(){var e=t.minutes,a=t.seconds,r=t.miliSeconds;return e<10&&(e="0".concat(e)),a<10&&(a="0".concat(a)),"".concat(e,":").concat(a,":").concat(r)}())),n.a.createElement("button",{onClick:function(){return e({type:"RESET_GAME"})}},"TRY AGAIN")))},p=function(e){var t=e.cardNum,a=e.colors,c=Object(r.useContext)(m).dispatch,l=Object(r.useContext)(m).state.colorsArray,o=Object(r.useState)(""),u=Object(s.a)(o,2),i=u[0],d=u[1];Object(r.useEffect)((function(){d(a[Math.floor(Math.random()*a.length)])}),[]),Object(r.useEffect)((function(){if(""!==i){var e=l;e[t-1]?e[t-1]={id:t,color:i}:e.push({id:t,color:i}),c({type:"SET_COLORS_ARRAY",colorsArray:e})}}),[i]);return n.a.createElement("div",{onClick:function(e){!function e(t){var r=a[Math.floor(Math.random()*a.length)];r===t.style.backgroundColor?e(t):d(r)}(e.target),c({type:"ADD_CLICK"})},style:{background:i},className:"card card__card".concat(t)})},N=function(e){var t=e.data,a=e.level;return n.a.createElement("div",{className:"level game__".concat(a)},function(){for(var e=t.cardsNum,a=t.colors,r=[],c=1;c<=e;c++)r.push(n.a.createElement(p,{key:c,cardNum:c,colors:a}));return r}())},j={cardsNum:6,colors:["darkred","darkblue","darkgreen","gold","darkorange"]},y={cardsNum:10,colors:["darkred","darkblue","darkgreen","gold","darkorange"]},A={cardsNum:20,colors:["darkred","darkblue","darkgreen","gold","darkorange"]},k=function(){var e=Object(r.useContext)(m).dispatch,t=Object(r.useContext)(m).state,a=t.selectedLevel,c=t.colorsArray,l=t.clicks,o=t.gameFinished;Object(r.useEffect)((function(){s()}),[l]);var s=function(){var t=[];c.length&&(c.forEach((function(e){var a=e.color;t.push(a)})),1===new Set(t).size&&e({type:"FINISH_GAME",gameFinished:!0}))};return n.a.createElement("div",null,o?n.a.createElement(g,null):n.a.createElement("div",{className:"game"},n.a.createElement(O,null),function(){switch(a){case"EASY":return n.a.createElement(N,{data:j,level:"easy"});case"MEDIUM":return n.a.createElement(N,{data:y,level:"medium"});case"HARD":return n.a.createElement(N,{data:A,level:"hard"});default:return n.a.createElement(E,{msg:"Something went wrong..."})}}()))},C=function(){var e=Object(r.useContext)(m).state.gameStarted;return n.a.createElement(n.a.Fragment,null,e?n.a.createElement(k,null):n.a.createElement(h,null))};l.a.render(n.a.createElement((function(e){var t=e.children,a=Object(r.useReducer)((function(e,t){switch(t.type){case"START_GAME":return Object(o.a)({},e,{gameStarted:!0});case"START_ERROR":return Object(o.a)({},e,{startError:t.startError});case"OPEN_MODAL":return Object(o.a)({},e,{openModal:t.openModal});case"SELECT_LEVEL":return Object(o.a)({},e,{selectedLevel:t.selectedLevel});case"SET_COLORS_ARRAY":return Object(o.a)({},e,{colorsArray:t.colorsArray});case"ADD_CLICK":return Object(o.a)({},e,{clicks:e.clicks+1});case"FINISH_GAME":return Object(o.a)({},e,{gameFinished:t.gameFinished});case"SET_TIME":return Object(o.a)({},e,{time:t.time});case"RESET_GAME":return{gameStarted:!1,selectedLevel:!1,startError:!1,openModal:!1,colorsArray:[],clicks:0,time:0,gameFinished:!1};default:throw new Error}}),u),c=Object(s.a)(a,2),l=c[0],m=c[1];return n.a.createElement(i,{value:{state:l,dispatch:m}},t)}),null,n.a.createElement(C,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9e013209.chunk.js.map