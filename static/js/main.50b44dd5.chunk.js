(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"/images/walter.jpg",name:"walter"},{id:2,image:"/images/skyler.jpg",name:"Skyler"},{id:3,image:"/images/flynn.jpg",name:"Flynn"},{id:4,image:"/images/hank.jpg",name:"Hank"},{id:5,image:"/images/marie.jpg",name:"Marie"},{id:6,image:"/images/jesse.jpg",name:"Jesse"},{id:7,image:"/images/jane.jpg",name:"Jane"},{id:8,image:"/images/saul.jpg",name:"Saul"},{id:9,image:"/images/lydia.jpg",name:"Lydia"},{id:10,image:"/images/todd.jpg",name:"Todd"},{id:11,image:"/images/gus.jpg",name:"Gus"},{id:12,image:"/images/tuco.jpg",name:"Tuco"}]},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(3),r=t.n(c),s=(t(15),t(4)),l=t(5),o=t(7),m=t(6),d=t(8);t(16),t(17);var g=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg bg-dark text-light"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("h5",null,"Current Score: ",e.score," ")),i.a.createElement("div",{className:"col-sm"},i.a.createElement("h4",null,e.title)),i.a.createElement("div",null,i.a.createElement("h5",null,"High Score: ",e.highScore)))},u=(t(18),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clicked(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),h=t(1),p=(t(19),function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg bg-dark text-light"},i.a.createElement("a",{href:"https://github.com/robertocastanon/clicky-game",className:"col-sm text-center"},i.a.createElement("h7",null,"Github Repo")))});function f(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}var v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={characters:h,score:0,highScore:0,beenClicked:[],displayLoss:0,displayWin:0},t.clicked=function(e){var a=t.state.beenClicked,n=t.state.score,i=t.state.highScore;t.setState({displayLoss:0}),-1===a.indexOf(e)?(a.push(e),console.log(a),t.handleScore(),t.createShuffle()):12===t.state.score?t.setState({displayWin:1,score:0,beenClicked:[]}):(t.setState({score:0,beenClicked:[]}),console.log("dupes"),t.setState({displayLoss:1})),n>i&&t.setState({highScore:n})},t.handleScore=function(){t.setState({score:t.state.score+1})},t.createShuffle=function(){t.setState({characters:f(h)})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,{score:this.state.score,title:"BB Game",highScore:this.state.highScore}),i.a.createElement("row",null,i.a.createElement("div",{className:"alert alert-danger text-center",style:{opacity:this.state.displayLoss}},"You clicked on a duplicate, click any card to try again!"),i.a.createElement("div",{className:"alert alert-success text-center",style:{opacity:this.state.displayWin}},"You got the highest score! Good Job!")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},this.state.characters.map(function(a){return i.a.createElement(u,{key:a.id,id:a.id,name:a.name,image:a.image,clicked:e.clicked})}))),i.a.createElement(p,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.50b44dd5.chunk.js.map