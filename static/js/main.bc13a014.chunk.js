(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{33:function(e,s,c){},34:function(e,s,c){},60:function(e,s,c){"use strict";c.r(s);var a=c(1),l=c.n(a),t=c(25),i=c.n(t),r=(c(33),c(34),c(35),c(11)),n=c(10),j=c.p+"static/media/bootstrap-logo.b91717f3.svg",d=c(26),b=c.n(d),o=function(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null},h=c(0);var m=function(e){var s=Object(a.useState)(e),c=Object(n.a)(s,2),l=c[0],t=c[1];return{value:l,onChange:function(e){t(e.target.value)}}},O=function(e){var s=m(""),c=m(""),l=Object(a.useState)(null),t=Object(n.a)(l,2),i=t[0],d=t[1],O=Object(a.useState)(null),x=Object(n.a)(O,2),v=x[0],p=x[1],u=Object(a.useState)(null),N=Object(n.a)(u,2),f=N[0],g=N[1];return Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("img",{className:"mb-4",src:j,alt:"logo",width:"72",height:"57"}),Object(h.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(h.jsxs)("div",{className:"form-floating",children:[Object(h.jsx)("input",Object(r.a)(Object(r.a)({type:"text",className:"form-control",id:"floatingInput"},s),{},{required:!0})),Object(h.jsx)("label",{htmlFor:"floatingInput",children:"Username"}),i?Object(h.jsx)("p",{className:"mt-2 mb-3 text-danger",children:"Username must be atleast 3 characters!"}):null]}),Object(h.jsxs)("div",{className:"form-floating",children:[Object(h.jsx)("input",Object(r.a)(Object(r.a)({type:"password",className:"form-control",id:"floatingPassword"},c),{},{required:!0})),Object(h.jsx)("label",{htmlFor:"floatingPassword",children:"Password"}),v?Object(h.jsx)("p",{className:"mt-2 mb-3 text-danger",children:"Password should be atleast 6 characters!"}):null]}),Object(h.jsx)("div",{className:"checkbox mb-3",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(h.jsxs)("button",{class:"w-100 btn btn-lg btn-primary",type:"button",onClick:function(){g(!0),function(e){return e.length>2?(d(!1),!0):(d(!0),!1)}(s.value)&&function(e){return e.length>5?(p(!1),!0):(p(!0),!1)}(c.value)?b.a.post("https://amber-s-api.herokuapp.com/users/login",{username:s.value,password:c.value}).then((function(s){var c;g(!1),console.log(s),c=s.data,sessionStorage.setItem("user",JSON.stringify(c)),o?e.history.push("/dashboard"):alert("An error occured. Could not save user data.\nPlease try to sign in again.")})).catch((function(e){g(!1),console.log(e),alert("An error occured. Please try again later.")})):g(!1)},disabled:f,children:[f?"Loading... ":"Sign in ",f?Object(h.jsx)("span",{class:"spinner-border spinner-border float-end",role:"status","aria-hidden":"true"}):null]}),Object(h.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"\xa9 Amber Software Technical Assessment. 2021"})]})})};var x=function(e){sessionStorage.removeItem("user"),e.history.push("/")},v=function(e){var s=o();return Object(h.jsxs)("div",{className:"bg-light w-100 h-100 dash-body",children:[Object(h.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark","aria-label":"Main navigation",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Amber"}),Object(h.jsx)("button",{className:"navbar-toggler p-0 border-0",type:"button",id:"navbarSideCollapse","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"navbar-collapse offcanvas-collapse",id:"navbarsExampleDefault",children:[Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Dashboard"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)("p",{className:"lead",children:["Hi ",s.name.first,"!"]})})]}),Object(h.jsx)("div",{class:"d-flex",children:Object(h.jsx)("button",{class:"btn btn-outline-secondary",type:"button",onClick:x(e),children:"Logout"})})]})]})}),Object(h.jsx)("main",{className:"container",children:Object(h.jsx)("div",{className:"container emp-profile",children:Object(h.jsxs)("form",{method:"post",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"profile-img",children:[Object(h.jsx)("img",{className:"img-fluid",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog",alt:""}),Object(h.jsxs)("div",{className:"file btn btn-lg btn-primary",children:["Change Photo",Object(h.jsx)("input",{type:"file",name:"file"})]})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"profile-head",children:[Object(h.jsx)("h5",{children:"Kshiti Ghelani"}),Object(h.jsx)("h6",{children:"Web Developer and Designer"}),Object(h.jsxs)("p",{className:"proile-rating",children:["RANKINGS : ",Object(h.jsx)("span",{children:"8/10"})]}),Object(h.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true",children:"About"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false",children:"Timeline"})})]})]})}),Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)("input",{type:"submit",className:"profile-edit-btn",name:"btnAddMore",value:"Edit Profile"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"profile-work",children:[Object(h.jsx)("p",{children:"WORK LINK"}),Object(h.jsx)("a",{href:"",children:"Website Link"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"",children:"Bootsnipp Profile"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"",children:"Bootply Profile"}),Object(h.jsx)("p",{children:"SKILLS"}),Object(h.jsx)("a",{href:"",children:"Web Designer"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"",children:"Web Developer"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"",children:"WordPress"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"",children:"WooCommerce"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"",children:"PHP, .Net"}),Object(h.jsx)("br",{})]})}),Object(h.jsx)("div",{className:"col-md-8",children:Object(h.jsxs)("div",{className:"tab-content profile-tab",id:"myTabContent",children:[Object(h.jsxs)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"User Id"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"Kshiti123"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Name"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"Kshiti Ghelani"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Email"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"kshitighelani@gmail.com"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Phone"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"123 456 7890"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Profession"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"Web Developer and Designer"})})]})]}),Object(h.jsxs)("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Experience"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"Expert"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Hourly Rate"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"10$/hr"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Total Projects"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"230"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"English Level"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"Expert"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("label",{children:"Availability"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("p",{children:"6 months"})})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("label",{children:"Your Bio"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Your detail description"})]})})]})]})})]})]})})})]})},p=c(27),u=c(2);var N=function(){return Object(h.jsx)(p.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/dash",component:v}),Object(h.jsx)(u.a,{path:"/",component:O})]})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(s){var c=s.getCLS,a=s.getFID,l=s.getFCP,t=s.getLCP,i=s.getTTFB;c(e),a(e),l(e),t(e),i(e)}))};i.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),f()}},[[60,1,2]]]);
//# sourceMappingURL=main.bc13a014.chunk.js.map