(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(6),s=t.n(r),l=(t(13),t(7)),o=t(4),m=t(1),i=(t(14),function(e){var a=e.task,t=e.toggleTask;return c.a.createElement("tr",{key:a.name,className:"row"},c.a.createElement("td",{className:"row-td"},c.a.createElement("i",{className:"far fa-check-square row-icon"}),a.name),c.a.createElement("td",{className:"row-td2"},c.a.createElement("input",{className:"row-inp",type:"checkbox",checked:a.done,onChange:function(){return t(a)}})))}),u=(t(15),function(e){var a=e.username,t=e.taskItems;return c.a.createElement("div",{className:"banner"},c.a.createElement("h4",{className:"banner-title"},a," Todo App ",""),c.a.createElement("p",{className:"banner-text"},"Tasks To Do: ",t.filter((function(e){return!e.done})).length,c.a.createElement("i",{className:"fas fa-tasks banner-text-icon",onClick:function(){alert("Did you discover a secret :D")}})))}),d=(t(16),function(e){var a=e.callback,t=Object(n.useState)(""),r=Object(m.a)(t,2),s=r[0],l=r[1],o=function(){console.log(s),a(s),l("")};return c.a.createElement("div",{className:"task-creator"},c.a.createElement("input",{className:"creator-inp",type:"text",value:s,onChange:function(e){return l(e.target.value)},placeholder:"Add a New Task...",autoFocus:!0}),c.a.createElement("button",{className:"creator-btn",onClick:o,onSubmit:o},c.a.createElement("i",{className:"fas fa-angle-right creator-btn-icon"}),"Add Task"))}),f=(t(17),function(e){var a=e.isChecked,t=e.description,n=e.callback;return c.a.createElement("div",{className:"ctrl"},c.a.createElement("input",{type:"checkbox",className:"ctrl-inp",checked:a,onChange:function(e){return n(e.target.checked)}}),c.a.createElement("label",{className:"ctrl-label",htmlFor:"form-check-label"},"Show ",t,c.a.createElement("i",{className:"far fa-calendar-check ctrl-task-icon"})))});t(18);var b=function(){var e=Object(n.useState)("React"),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)([{name:"task",done:!1},{name:"task2",done:!1},{name:"task3",done:!0}]),b=Object(m.a)(s,2),p=b[0],E=b[1];Object(n.useEffect)((function(){var e=localStorage.getItem("tasks");null!=e?E(JSON.parse(e)):(r("React"),E([{name:"To-do App created by mrLuisFer",done:!1}]),g(!0))}),[]),Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(p))}),[p]);var k=Object(n.useState)(!0),h=Object(m.a)(k,2),N=h[0],g=h[1],v=function(e){return E(p.map((function(a){return a.name===e.name?Object(o.a)(Object(o.a)({},a),{},{done:!a.done}):a})))},O=function(e){return p.filter((function(a){return a.done===e})).map((function(e){return c.a.createElement(i,{className:"table-row",task:e,key:e.name,toggleTask:v})}))};return c.a.createElement("div",{className:"App"},c.a.createElement(u,{username:t,taskItems:p}),c.a.createElement(d,{callback:function(e){!p.find((function(a){return a.name===e}))&&e.length>1&&E([].concat(Object(l.a)(p),[{name:e,done:!1}]))}}),c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"thead"},c.a.createElement("tr",{className:"thead-tr"},c.a.createElement("th",{className:"app-desc"},c.a.createElement("i",{className:"fas fa-clipboard-list thead-icon"}),"Description"),c.a.createElement("th",{className:"app-done"},c.a.createElement("i",{className:"fas fa-check-double thead-icon"}),"Done"))),c.a.createElement("tbody",{className:"tbody"},O(!1))),c.a.createElement("div",{className:"control"},c.a.createElement(f,{description:"Completed Task",iChecked:N,callback:function(e){return g(e)}})),N&&c.a.createElement("table",{className:"table table-complete"},c.a.createElement("thead",{className:"thead"},c.a.createElement("tr",{className:"thead-tr"},c.a.createElement("th",{className:"app-desc"},c.a.createElement("i",{className:"fas fa-clipboard-list thead-icon"}),"Description"),c.a.createElement("th",{className:"app-done"},c.a.createElement("i",{className:"fas fa-check-double thead-icon"}),"Done"))),c.a.createElement("tbody",{className:"tbody "},O(!0))))};s.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7247d556.chunk.js.map