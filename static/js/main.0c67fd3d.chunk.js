(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{33:function(e,s,c){},34:function(e,s,c){},60:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),l=c(26),n=c.n(l),i=(c(33),c(34),c(35),c(11)),r=c(10),d=c.p+"static/media/bootstrap-logo.b91717f3.svg",j=c(14),o=c.n(j),b=function(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null},m=c(0);o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var h=function(e){var s=Object(t.useState)(e),c=Object(r.a)(s,2),a=c[0],l=c[1];return{value:a,onChange:function(e){l(e.target.value)}}},O=function(e){var s=h(""),c=h(""),a=Object(t.useState)(null),l=Object(r.a)(a,2),n=l[0],j=l[1],O=Object(t.useState)(null),x=Object(r.a)(O,2),u=x[0],p=x[1],v=Object(t.useState)(null),N=Object(r.a)(v,2),f=N[0],g=N[1];return Object(m.jsx)("main",{className:"form-signin",children:Object(m.jsxs)("form",{className:"mt-5",children:[Object(m.jsx)("img",{className:"mb-4",src:d,alt:"logo",width:"72",height:"57"}),Object(m.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",Object(i.a)(Object(i.a)({type:"text",className:"form-control",id:"floatingInput"},s),{},{required:!0})),Object(m.jsx)("label",{htmlFor:"floatingInput",children:"Username"}),n?Object(m.jsx)("p",{className:"mt-2 mb-3 text-danger",children:"Username must be atleast 3 characters!"}):null]}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",Object(i.a)(Object(i.a)({type:"password",className:"form-control",id:"floatingPassword"},c),{},{required:!0})),Object(m.jsx)("label",{htmlFor:"floatingPassword",children:"Password"}),u?Object(m.jsx)("p",{className:"mt-2 mb-3 text-danger",children:"Password should be atleast 6 characters!"}):null]}),Object(m.jsxs)("button",{className:"w-100 btn btn-lg btn-primary",type:"button",onClick:function(){g(!0),function(e){return e.length>2?(j(!1),!0):(j(!0),!1)}(s.value)&&function(e){return e.length>5?(p(!1),!0):(p(!0),!1)}(c.value)?o.a.post("https://amber-s-api.herokuapp.com/users/login",{username:s.value,password:c.value}).then((function(s){g(!1);var c,t=s.data;if(Object.keys(t).length>0){var a=b();if(a)e.history.push({pathname:"/dash",state:{user:a}});else{c=s.data,sessionStorage.setItem("user",JSON.stringify(c));var l=b();e.history.push({pathname:"/dash",state:{user:l}})}}else alert("Invalid credentials! Please check your username and password.")})).catch((function(e){g(!1),alert("An error occured. Please try again later.")})):g(!1)},disabled:f,children:[f?"Loading... ":"Sign in ",f?Object(m.jsx)("span",{className:"spinner-border spinner-border float-end",role:"status","aria-hidden":"true"}):null]}),Object(m.jsxs)("div",{className:"row mt-3",children:[Object(m.jsx)("p",{className:"col-6 text-muted text-right",children:"tinykoala839"}),Object(m.jsx)("p",{className:"col-6 text-muted text-left",children:"wp2003wp"})]}),Object(m.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"\xa9 Amber Software Technical Assessment. 2021"})]})})};var x=function(e){sessionStorage.removeItem("user"),e.history.push("/")},u=function(e){var s=e.location.state.user;return Object(m.jsx)("div",{className:"bg-light w-100 h-100 dash-body",children:Object(m.jsx)("main",{className:"container",children:Object(m.jsx)("div",{className:"container emp-profile",children:Object(m.jsxs)("form",{method:"post",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("div",{className:"profile-img",children:Object(m.jsx)("img",{className:"rounded-circle",src:s.picture.large,alt:""})})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"profile-head",children:[Object(m.jsxs)("h5",{children:[s.name.title,"\xa0",s.name.first,"\xa0",s.name.last]}),Object(m.jsx)("h6",{children:s.login.uuid}),Object(m.jsxs)("p",{className:"proile-rating",children:["NATIONALITY : ",Object(m.jsxs)("span",{children:["\xa0",s.nat]})]}),Object(m.jsx)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true",children:"Profile"})})})]})}),Object(m.jsx)("div",{className:"col-md-2",children:Object(m.jsx)("input",{type:"button",className:"profile-edit-btn",name:"btnAddMore",value:"Logout",onClick:function(){return x(e)}})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"profile-work",children:[Object(m.jsx)("p",{children:"LOCATION"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Street:"}),"\xa0",s.location.street.number,"\xa0",s.location.street.name]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"City:"}),"\xa0",s.location.city]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"State:"}),"\xa0",s.location.state]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Country:"}),"\xa0",s.location.country]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Post code:"}),"\xa0",s.location.postcode]}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"TIMEZONE"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Offset:"}),"\xa0",s.location.timezone.offset]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Description:"}),"\xa0",s.location.timezone.description]})]})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsx)("div",{className:"tab-content profile-tab",id:"myTabContent",children:Object(m.jsxs)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Username"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.login.username})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Name"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("p",{children:[s.name.first,"\xa0",s.name.last]})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Gender"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.gender})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Email"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.email})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Phone number"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.phone})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Mobile phone number"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.cell})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Date of birth"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:new Date(s.dob.date).toString()})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Age"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.dob.age})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Registration date"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:new Date(s.registered.date).toString()})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("label",{children:"Number of years since"})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("p",{children:s.registered.age})})]})]})})})]})]})})})})},p=c(27),v=c(2);var N=function(){return Object(m.jsx)(p.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(v.c,{children:[Object(m.jsx)(v.a,{path:"/dash",component:u}),Object(m.jsx)(v.a,{path:"/",component:O})]})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,l=s.getLCP,n=s.getTTFB;c(e),t(e),a(e),l(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),f()}},[[60,1,2]]]);
//# sourceMappingURL=main.0c67fd3d.chunk.js.map