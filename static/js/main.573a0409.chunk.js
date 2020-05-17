(this.webpackJsonpteach=this.webpackJsonpteach||[]).push([[0],{10:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/preface.56170283.txt"},22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),i=a.n(r),l=a(8),s=(a(27),a(1)),c=(a(10),a(11)),u=a(19);a(45);var m=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],i=a[1];return o.a.createElement(u.slide,{styles:{bmMenuWrap:{transition:"all 0.3s"}},isOpen:r,onStateChange:function(){return i(e.isOpen)}},o.a.createElement(l.c,{className:"menu-item",to:"/preface",onClick:function(){return i(!1)}},"Preface"),o.a.createElement(l.c,{className:"menu-item",to:"/prologue",onClick:function(){return i(!1)}},"Prologue"),o.a.createElement(l.c,{className:"menu-item",to:"/about",onClick:function(){return i(!1)}},"About"))},h=a(21),d=a.n(h);var f=function(e){return o.a.createElement("div",null,o.a.createElement("span",{style:{display:"block",flexDirection:"row",alignItems:"left",justifyContent:"start",fontSize:"calc(12px + 2vmin)",marginBlockStart:"auto",color:"rgb(184, 182, 182)",fontFamily:"Alegreya Sans SC , sans-serif",fontStyle:"italic"}},e.quote),o.a.createElement("span",{style:{display:"block",flexDirection:"row",alignItems:"left",justifyContent:"start",fontSize:"calc(6px + 2vmin)",marginBlockStart:"auto",color:"rgb(184, 182, 182)",fontWeight:"400",fontFamily:"Alegreya Sans SC , sans-serif",letterSpacing:"5px"}},e.author))};var b=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){var e=d.a;fetch(e).then((function(e){return e.text()})).then((function(e){return i(e.toString())}))}),[]),o.a.createElement("div",{className:"Post"},o.a.createElement("header",{className:"Header"},o.a.createElement("p",{className:"Title"},"Preface"),o.a.createElement(f,{quote:"i hate algebra",author:"John Conway"})),o.a.createElement("body",null,o.a.createElement("div",{className:"Body",dangerouslySetInnerHTML:{__html:r}})))};var w=function(e){return o.a.createElement("div",{className:"Post"},o.a.createElement("header",{className:"Header"},o.a.createElement("p",{className:"Title"},"About")),o.a.createElement("body",null,o.a.createElement("div",{className:"Body"},"Hello! my name is Emran Shafaq. I currently work as a software engineer at Microsoft under the Windows Security team. I graduated from the University of Texas at Austin with degrees in computer science and mathematics. I started this blog primarily to learn React, but ultimately to develop my skills as an instructor. If you found this blog useful please share it with others, or let me know! If you have a request for a topic, leave a comment! If you want more math learning tools, check out 3blue1brown on Youtube!")))};var y=function(e){var t={lineHeight:"1.5",color:"Note"===e.title?"#ba1626":"rgb(113, 22, 189)"},a={background:"Note"===e.title?"#ba1626":"rgb(113, 22, 189)",marginRight:"5px",display:"inline-block",lineHeight:"1.2",color:"white",padding:"3px 6px"};return o.a.createElement("div",null,o.a.createElement("span",{style:t},o.a.createElement("span",{style:a},e.title||"Definition")," ",e.children))},g=function(e){var t=e.id;return Object(n.useEffect)((function(){if(window){var e=window.document;return e.getElementById("commento")&&function(e,t,a){var n=window.document.createElement("script");n.async=!0,n.src=e,n.id=t,a.appendChild(n)}("https://cdn.commento.io/js/commento.js","commento-script",e.body),function(){return function(e,t){var a=window.document.getElementById(e);a&&t.removeChild(a)}("commento-script",e.body)}}}),[t]),o.a.createElement("div",{id:"commento"})};var p=function(e){return o.a.createElement("div",{className:"Post"},o.a.createElement("header",{className:"Header"},o.a.createElement("p",{className:"Title"},"Prologue"),o.a.createElement(f,{quote:"mathematics is the art of giving the same name to different things",author:"Henri Poincar\xe9"})),o.a.createElement("body",null,o.a.createElement("div",{className:"Body"},"In the following introductory lesson, I would like to go over how to think about mathematical concepts. My goal is to try and get you away from thinking about math as formulas and instead get you to develop natural intuitions for concepts.",o.a.createElement("br",null),o.a.createElement("br",null),"For the purposes of this project, our working definition of ",o.a.createElement("i",null,"mathematics")," is the process of finding meaningful patterns within abstractions.",o.a.createElement("br",null),o.a.createElement("br",null),"Now, this is by no means an end-all definition. Math is wonderfully complex, and many have offered their own interpretations of what it means. However, I want you to think of every concept we learn as an ",o.a.createElement("i",null,"abstraction"),". Defining and understanding what abstractions are will comprise the bulk of the rest of this section.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(y,null,"An ",o.a.createElement("i",null,"abstraction")," is a simplified model of a concept. It attempts to remove unnecessary features that complicate our understanding of how something works."),o.a.createElement("br",null),"Before I elaborate further, let\u2019s look at an example.",o.a.createElement("br",null),o.a.createElement("br",null),"If you were travelling through a city and wanted to draw a map of your surroundings to help you get around, you would probably trace out some roads, draw in some buildings, and add some names to streets. This map you\u2019ve now created is an abstraction of the city itself. Each feature you draw in is an abstraction of something in the city, or a representation of something real. For example, the lines in your drawing are an abstraction of the roads in real life. They are a simplified model of what we see.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(y,{title:"Note"},"Pause and ponder. Do you have a grasp on what abstractions are? What are other abstractions in our map? Can you think of other examples of abstractions?"),o.a.createElement("br",null),"Now, this map is pretty great for modelling your surroundings and it\u2019s particularly good at helping you navigate the city.",o.a.createElement("br",null),o.a.createElement("br",null),"But let\u2019s say over time you become more familiar with your surroundings. You don\u2019t necessarily need a detailed map to give you information about where you are. Instead, you\u2019re more interested in how points of interest in the city connect to each other. You only want to know if there is a path between landmarks and nothing else. We don\u2019t care about the shape of the roads, just whether there is a road that takes us from one building to the next. This task ",o.a.createElement("i",null,"can")," be accomplished with our original map, but there\u2019s unnecessary detail that impedes our new desires. These details were useful before when we were less familiar with the city, but now that we\u2019re experienced they can be disregarded.",o.a.createElement("br",null),o.a.createElement("br",null),"So let\u2019s try and construct a new model. Instead of drawings of buildings, let\u2019s just have a circle with the name of the building. Instead of having a detailed reconstruction of the roads of our city, let\u2019s just have a line connect two circles if there is a road connecting two buildings. Now our map looks quite different! To the untrained eye, it looks like a bunch of randomly connected circles. But we devised this new model with a specific goal in mind - to understand how buildings in our city are connected at a high level. We want to look at our map and instantly know if there is a way to get from one building to the next. The details of the route are not important anymore, we just want to know if it\u2019s possible. This new model has removed the details that were required for navigation because our goal has now shifted.",o.a.createElement("br",null),o.a.createElement("br",null),"The fact that we developed this new model not from looking at the city, but rather from looking at a ",o.a.createElement("i",null,"map")," of the city indicates something that is rather profound: abstractions can build upon existing abstractions. We took what we knew about maps and tried to minimize the number of details to look at our city in a new way. This concept alone is what makes math so vast and powerful. We can continually develop abstractions and gain even more insight as we go along.",o.a.createElement("br",null),o.a.createElement("br",null),"Though our new map fulfills its task of understanding proximity well, it fails miserably as a navigation tool. If we were to give our new map to a new resident of the city, they would probably look at us with confusion and ask us to leave them alone. But why are they behaving like this? It\u2019s because our new map lacks the necessary details for navigation and only really makes sense to someone who has already lived in the city. To a newcomer who still ",o.a.createElement("i",null,"needs")," the details, it doesn\u2019t do a great job.",o.a.createElement("br",null),o.a.createElement("br",null),"This paves the way for another key insight: abstraction is a spectrum. The more abstract our model, the more details we lose, but the more general our insights.",o.a.createElement("br",null),o.a.createElement("br",null),"[insert map abstraction] Abstractions are an extremely common tool used pretty much any time we want to represent something in the real world.",o.a.createElement("br",null),o.a.createElement("br",null),"Let\u2019s consider some mathematical abstractions. One of the most fundamental objects in math is the ",o.a.createElement("i",null,"set"),".",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(y,null,"A ",o.a.createElement("i",null,"set")," is  a collection of other objects. It is an abstraction of one\u2019s idea of a container, or a list."),o.a.createElement("br",null),"[set example] When we want to develop intuitions about how mathematical objects behave, we typically do so by analyzing sets. For example, we could spend our whole life studying the color blue, but that really doesn\u2019t help us understand color as a whole. We should instead look at the ",o.a.createElement("i",null,"set")," of all colors, of which blue is an ",o.a.createElement("i",null,"element"),". Now, anything we glean about this set applies not only to blue, but to ",o.a.createElement("i",null,"all")," colors, and our life has no longer been wasted! Sets are valuable because they are a natural generalization - we want to consider how ",o.a.createElement("i",null,"all")," objects of a certain type behave, not just the one.",o.a.createElement("br",null),o.a.createElement("br",null),"Another important mathematical concept is that of a ",o.a.createElement("i",null,"function"),".",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(y,null,"A ",o.a.createElement("i",null,"function")," is a mathematical object that takes in an input and assigns it uniquely to an output. It can be thought of as an abstraction of a machine; it takes something in and modifies it in a consistent way."),o.a.createElement("br",null),"While sets may be the most valuable structure in math, they are very static in nature. Once you define a set, there\u2019s nothing you can do to really ",o.a.createElement("i",null,"change")," the set. You can define a new set, but that doesn\u2019t change anything about the first one. But what if we want to look at how multiple sets interact with each other? What if we want to take some elements from one set and combine them with elements from a second set?",o.a.createElement("br",null),o.a.createElement("br",null),"These things are only possible with functions. Functions are the moving parts of math; they are the bridges that link sets. If sets are like nouns in our mathematical language, then functions are like verbs. They make things happen.",o.a.createElement("br",null),o.a.createElement("br",null),"We will go into greater detail on sets and functions and their many flavors in the future, but for now just try and develop a basic intuition for what they might mean to you.",o.a.createElement("br",null),o.a.createElement("br",null),"The topics covered in this section may be brand new or may not be completely intuitive. And that\u2019s fine! I\u2019m trying to get you to think in a completely new way, which may be uncomfortable at first. Like anything, it\u2019s a skill that is developed over time through continually engaging with the topic. Going forward, I want you to think about what kind of abstractions we\u2019re making when we cover new topics. What is the underlying structure this new object is trying to explain? How does this abstraction relate to others we\u2019ve seen before? What is the value in looking at an abstraction over what we are trying to model?",o.a.createElement("br",null),o.a.createElement("br",null),"Our next section will be the beginning of our first unit on vectors, but the topics here are instrumental to all future sections. If you need a refresher, feel free to come back here and reconsider the fundamentals. If something feels confusing in the text, feel free to reach out to me for clarifications. I\u2019ll also add links to other resources that I find very helpful.",o.a.createElement("br",null),o.a.createElement("br",null),"With that, our journey continues!"),o.a.createElement(g,{id:"Prologue"})))};var E=function(){return o.a.createElement("main",null,o.a.createElement(l.b,null,o.a.createElement(m,{pageWrapId:"page-wrap",outerContainerId:"App"}),o.a.createElement(s.a,{path:"/",component:b,exact:!0}),o.a.createElement(s.a,{path:"/preface",component:b}),o.a.createElement(s.a,{path:"/prologue",component:p}),o.a.createElement(s.a,{path:"/about",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(l.a,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.573a0409.chunk.js.map