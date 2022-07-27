(()=>{var e={138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createProject:()=>a,createTask:()=>l,getProjects:()=>r});const s=n(189),d=n(596);let c=localStorage.getItem("projectList");c=JSON.parse(c||JSON.stringify([]));let o=[];for(let e in c)a(c[e].title,c[e].desc,c[e].tasks);function a(e,t,n){const c=o.length,a=new s(e,t,c,n);o.push(a),d.renderProjectList(o),i()}function l(e,t,n){o[e].addTask(t,n),i()}function i(){localStorage.setItem("projectList",JSON.stringify(o))}function r(){return o}console.log(o),d.renderProjectList(o)},596:(e,t,n)=>{const s=n(138),d=(()=>{const e=function(e,t){const n=document.querySelector(".projectList"),s=document.createElement("li");s.dataset.index=t,s.classList.add("project"),s.textContent=e,n.appendChild(s)},t=function(e){document.querySelector(".selected")?(selected=document.querySelector(".selected"),selected.classList.toggle("selected"),e.target.classList.toggle("selected")):e.target.classList.toggle("selected"),d(),c(e.target.dataset.index)},n=function(){document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(e=>t(e)))}))},d=function(){document.querySelector(".project-content").innerHTML=""},c=function(e){const t=s.getProjects();console.log(t);const n=document.querySelector(".project-content"),d=document.createElement("div");d.classList.add("project-info"),n.appendChild(d);const c=document.createElement("div");c.classList.add("info"),d.appendChild(c);const l=document.createElement("p"),i=document.createElement("p");l.classList.add("info-title"),i.classList.add("info-desc"),l.textContent=t[e].title,i.textContent=t[e].desc,c.appendChild(l),c.appendChild(i);const r=document.createElement("div");r.classList.add("task-container");const u=document.createElement("div");u.classList.add("tasks"),r.appendChild(u),n.appendChild(r),o(t,e);const p=document.createElement("button");r.appendChild(p),p.classList.add("addTask"),p.innerHTML="<span id='plus'>+</span> Add Task",a(u,e),p.addEventListener("click",(()=>{taskForm=document.querySelector(".task.addTaskContainer"),taskForm.style.display="flex",p.style.display="none"}))},o=function(e,t){const n=e[t].tasks,s=document.querySelector(".tasks");for(task in n){console.log(task);const e=document.createElement("div");e.classList.add("task"),e.dataset.index=task,s.appendChild(e);const t=document.createElement("div");t.classList.add("task-info");const d=document.createElement("div");d.classList.add("checkbox"),n[task].finished&&d.classList.add("checked");const c=document.createElement("p");c.classList.add("taskName"),e.appendChild(t),t.appendChild(d),c.textContent=n[task].title,t.appendChild(c);const o=document.createElement("p");o.classList.add("timedue"),e.appendChild(o),o.textContent=n[task].dueDate}const d=document.querySelectorAll(".task");console.log(`TASK ELEMENTS: ${d}`),d.forEach((e=>{e.addEventListener("click",(function(){console.log(`HELLO ${e.dataset.index}`),n[e.dataset.index].finished=!n[e.dataset.index].finished,console.log(e.children[0].children[0].classList.toggle("checked"))}))}))},a=function(e,t){const n=document.createElement("div");n.classList.add("addTaskContainer","task"),e.appendChild(n);const s=document.createElement("form");n.appendChild(s),s.id="addTaskForm";const d=document.createElement("div");s.appendChild(d),d.classList.add("taskInputs");const c=document.createElement("input");c.type="text",c.classList.add("taskInputName"),c.id="inputName",c.placeholder="Name of Task",c.required=!0;const o=document.createElement("input");o.type="date",o.classList.add("taskInputDate"),o.id="inputDate",o.required=!0;const a=document.createElement("div"),i=document.createElement("button");i.id="submit-task",i.type="submit",i.textContent="Submit";const r=document.createElement("button");r.id="cancel-task",r.textContent="Cancel",r.type="button",s.appendChild(a),a.classList.add("taskButtons"),a.appendChild(i),a.appendChild(r),d.appendChild(c),d.appendChild(o);const u=document.querySelector(".addTask");s.addEventListener("submit",(e=>{e.preventDefault(),n.style.display="none",u.style.display="block",l(t,c.value,o.value)})),r.onclick=function(){n.style.display="none",u.style.display="block"}},l=function(e,t,n){const d=s.getProjects(),c=document.querySelector(".tasks");addTaskForm=function(){const e=document.querySelector(".tasks"),t=document.querySelector(".addTaskContainer.task");return e.innerHTML="",t}(),s.createTask(e,t,n),o(d,e),c.appendChild(addTaskForm)},i=document.querySelector(".modal"),r=document.getElementById("addModal"),u=document.getElementById("cancelModal"),p=document.getElementById("modalForm");return r.onclick=function(){i.style.display="flex"},u.onclick=function(){i.style.display="none"},p.addEventListener("submit",(e=>{const t=document.getElementById("titleInput").value,n=document.getElementById("descInput").value;var d,c;e.preventDefault(),i.style.display="none",d=t,c=n,s.createProject(d,c)})),{addProject:e,selectProject:t,getProjectElements:function(){return document.querySelectorAll(".project")},addProjectListener:n,renderProjectList:function(t){for(project in document.querySelector(".projectList").innerHTML="",t)e(t[project].title,t[project].index);n()},renderProject:c}})();e.exports=d},189:(e,t,n)=>{const s=n(507);e.exports=class{constructor(e,t,n,s=[]){this.title=e,this.desc=t,this.index=n,this.tasks=s}addTask(e,t){const n=new s(e,t);return this.tasks.push(n),n}}},507:e=>{e.exports=class{constructor(e,t){this.title=e,this.dueDate=t,this.finished=!1}}}},t={};function n(s){var d=t[s];if(void 0!==d)return d.exports;var c=t[s]={exports:{}};return e[s](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(138)})();