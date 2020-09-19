(this["webpackJsonpre-portfolio"]=this["webpackJsonpre-portfolio"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/portrait2.b8e91b4d.JPG"},function(e){e.exports=JSON.parse('[{"ProjectName":"Workday-Scheduler","imagePath":"/images/projects/5.jpg","githubRepo":"https://github.com/parkerrobison/work-day-planner","deployedApp":"https://parkerrobison.github.io/work-day-planner/"},{"ProjectName":"Swap-Squad","imagePath":"/images/projects/4.jpg","githubRepo":"https://github.com/parkerrobison/swap-squad","deployedApp":"https://obscure-reef-91673.herokuapp.com/"},{"ProjectName":"Run-Buddy","imagePath":"/images/projects/3.jpg","githubRepo":"https://github.com/parkerrobison/run-buddy","deployedApp":"https://parkerrobison.github.io/run-buddy/"},{"ProjectName":"Note-Taker","imagePath":"/images/projects/2.jpg","githubRepo":"https://github.com/parkerrobison/note-taker","deployedApp":"https://vast-citadel-37246.herokuapp.com/"},{"ProjectName":"Just-Breathe","imagePath":"/images/projects/1.jpg","githubRepo":"https://github.com/parkerrobison/just-breathe","deployedApp":"https://parkerrobison.github.io/just-breathe/"},{"ProjectName":"Git-it-Done","imagePath":"/images/projects/0.jpg","githubRepo":"https://github.com/parkerrobison/git-it-done","deployedApp":"https://parkerrobison.github.io/git-it-done/"}]')},function(e){e.exports=JSON.parse('[{"FileName":"Resume","filePath":"/files/ParkerRobisonResume.pdf"}]')},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(19),a(6));var c=function(e){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},[{name:"About Me"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}].map((function(t){return r.a.createElement("li",{className:"mx-1 ".concat(e.currentPage===t.name?"navActive":""),key:t.name},r.a.createElement("span",{onClick:function(){return e.handleSubmit(t.name)}},t.name))}))))};var m=function(e){return r.a.createElement("header",{className:"flex-row"},r.a.createElement("h1",null,"Parker Robison"),r.a.createElement(c,{handleSubmit:e.handleSubmit,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage}))},s=a(11),u=a.n(s);var p=function(){return r.a.createElement("section",{className:"my-5 section-wrapper"},r.a.createElement("h1",{id:"about"},"About Me"),r.a.createElement("div",{className:"image-cropper"},r.a.createElement("img",{src:u.a,className:"my-2 portrait",style:{width:"15%"},alt:"portrait"})),r.a.createElement("br",null),r.a.createElement("p",null,"Hello! My name is Parker Robison. I enjoy coding, being outdoors, photography, and being active. I graduated from USU with a Bachelors degree in Kinesiology. In desiring to further my education and expand my skills, I enrolled in the University of Utah's coding bootcamp. I will soon be graduating from the bootcamp and will continue developing my coding skills. As a full stack developer, I'm focused on developing inspiring and helpful applications and websites."))},d=a(12),g=a(24),h=a(25),E=a(26);var b=function(){return r.a.createElement(g.a,null,r.a.createElement(h.a,null,d.map((function(e,t){return r.a.createElement(E.a,{className:"project-wrapper",key:t,md:4},r.a.createElement("h2",null,e.ProjectName),r.a.createElement("img",{src:e.imagePath,alt:e.ProjectName,className:"img-thumbnail project-image mx-1"}),r.a.createElement("a",{href:e.githubRepo,target:"_blank",rel:"noopener noreferrer",className:"gh-link"},"GitHub"),r.a.createElement("a",{href:e.deployedApp,target:"_blank",rel:"noopener noreferrer",className:"site-link"},"Website"))}))))};var f=function(){return r.a.createElement("section",{className:"section-wrapper"},r.a.createElement("h1",null,"Portfolio"),r.a.createElement("div",null,r.a.createElement(b,null)))},k=a(7),v=a(8);var w=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=a.name,c=a.email,m=a.message,s=Object(n.useState)(""),u=Object(i.a)(s,2),p=u[0],d=u[1];function g(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));p||l(Object(v.a)(Object(v.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))}return r.a.createElement("section",{className:"contact-container section-wrapper"},r.a.createElement("h1",null,"Contact me"),r.a.createElement("p",null,"If you'd like to reach out to me please email me at parkerobison@gmail.com"),r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:o,onBlur:g})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:c,onBlur:g})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:g})),p&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},p)),r.a.createElement("button",{type:"submit"},"Submit")))},y=a(13);var j=function(){return r.a.createElement("section",{className:"section-wrapper"},r.a.createElement("h2",null,"Resume"),r.a.createElement("a",{className:"resume-download",href:y[0].filePath,download:!0},"Download my resume"),r.a.createElement("div",null,r.a.createElement("h4",null,"Front-end Experience"),r.a.createElement("ul",null,r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"Javascript"),r.a.createElement("li",null,"JQuery"),r.a.createElement("li",null,"Responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap"),r.a.createElement("li",null,"Materialize")),r.a.createElement("h4",null,"Back-end Experience"),r.a.createElement("ul",null,r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"NoSQL"))))};var N=function(){return r.a.createElement("footer",null,r.a.createElement("ul",{className:"profile-links flex-row"},r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{href:"https://github.com/parkerrobison",target:"_blank",rel:"noopener noreferrer"},"GitHub")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{href:"https://www.linkedin.com/in/parker-robison-690972139/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{href:"https://twitter.com/ParkerRobison2",target:"_blank",rel:"noopener noreferrer"},"Twitter"))))};var P=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(m,{handleSubmit:function(e){console.log(e),l(e)},currentPage:a,setCurrentPage:l}),r.a.createElement("main",null,"Contact"===a?r.a.createElement(w,null):"Portfolio"===a?r.a.createElement(f,null):"Resume"===a?r.a.createElement(j,null):r.a.createElement(p,null)),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.4798e5b4.chunk.js.map