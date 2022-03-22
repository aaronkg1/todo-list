(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n    font-size: 20px;\n    --primary-color: rgb(71, 250, 232);\n    --secondary-color: rgb(186, 240, 235);\n    --tertiary-color: rgb(232, 244, 242);\n}\n\n#main-container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n}\n\n\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2rem;\n}\n.header {\n    grid-column: 1 / 13;\n    grid-row: 1 / 2;\n    background-color: var(--primary-color);\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n    -webkit-box-shadow: 0px 7px 11px -10px rgba(0,0,0,0.76); \n    box-shadow: 0px 7px 11px -10px rgba(0,0,0,0.76);\n    z-index: 2;\n}\n\n.sidebar {\n    grid-column: 1 / 3;\n    grid-row: 2 / 13 ;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--secondary-color);\n    min-width: fit-content;\n    align-items: flex-start;\n    justify-content: flex-start;\n    padding-top: 30px;\n    padding-left: 30px;\n    gap: 10px;\n}\n\n.sidebar-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    justify-self: flex-start;\n    width: fit-content;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    padding-left: 20px;\n    gap: 10px;\n    justify-self: flex-start;\n    width: fit-content;\n}\n\n.project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n\n.subtask {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-display {\n    grid-column: 3 / 13;\n    grid-row: 2 / 13;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#new-task {\n    max-width: fit-content;\n}\n\n.project-table {\n    width: 100%;\n    table-layout: fixed;\n    text-align: center;\n    margin-top: 50px;\n}\n\n\n.project-table tr:nth-child(even) {\n    background-color: rgb(242, 241, 241);\n}\n\n.project-table caption {\n    background-color: var(--tertiary-color);\n    font-size: 3rem;\n    padding-bottom: 20px;\n}\n\n\n\n.project-table thead {\n    background-color: rgb(167, 233, 233);\n    font-size: 1.5rem;\n}\n\n.project-table tr {\n    min-height: fit-content; \n    box-shadow: 0px 5px 8px -10px rgba(0,0,0,0.76);\n}\n\n.project-table td {\n    font-size: 1.1rem;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    word-wrap: break-word;\n    \n    \n}\n\n.task-module-container {\n    background-color: rgba(245, 245, 220, 0.331);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n    \n}\n\n#task-module {\n    \n    background-color: lightgray;\n    padding: 10px;\n    height: fit-content;\n    width: fit-content;\n}\n\n.task-form {\n    margin-top: 20px;\n    display: flex;\n    gap: 20px;\n}\n\n\n.form-element {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 90%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    gap: 10px;\n}\n\n#description {\n    resize: vertical;\n    height: 113px;\n    max-height: 200px;\n}\n\n.form-control {\n    appearance: none;\n    height: 20px;\n    border-radius: 5px;\n    padding: 10px;\n    text-overflow: ellipsis;\n    font-size: inherit;\n\n}\n\n.form-buttons  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    align-content: flex-end;\n}\n\n.form-select {\n    vertical-align: middle;\n    height: calc(1.5em + 0.75rem + 2px);\n    font-size: inherit;\n}\n\n.hidden {\n   display: none;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),d=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=e=>{const t={subTasks:[]},n=(o=t,{addSubtask:(e,t,n,r)=>{const a=((e,t,n,o,r)=>{const a={},i=(c=a,{setTitle:e=>c.title=e,setDescription:e=>c.description=e,setDueDate:e=>c.dueDate=e,setPriority:e=>c.priority=e,getTitle:()=>c.title,getDescription:()=>c.description,getDueDate:()=>c.dueDate,getPriority:()=>c.priority,initCompleted:()=>c.completed=!1,toggleCompleted:()=>c.completed=!c.completed});var c;const d=Object.assign({},i);return d.setTitle(e),d.setDescription(t),d.setDueDate(n),d.setPriority(o),Object.assign(d,a)})(e,t,n,r);o.subTasks.push(a)},getSubtasks:()=>o.subTasks,setTitle:e=>o.title=e,getTitle:()=>o.title,removeSubtask:e=>{o.subTasks.forEach((t=>{if(t.getTitle()===e){let e=o.subTasks.indexOf(t);o.subTasks.splice(e,1)}}))}});var o;const r=Object.assign({},n);return r.setTitle(e),Object.assign(r,t)},g=document.querySelector(".projects"),x=document.querySelector("#expand");let b;const v=e=>{g.innerHTML="",b=e[0],e.forEach((t=>{const n=document.createElement("div");n.classList.add("project");const o=document.createElement("span");o.classList.add("material-icons-sharp"),o.classList.add("radio-button"),o.innerText="radio_button_unchecked";const r=document.createElement("p");r.textContent=t.getTitle(),n.appendChild(o),n.appendChild(r),g.appendChild(n),n.addEventListener("click",(()=>{document.querySelectorAll(".radio-button").forEach((e=>{e.innerText="radio_button_unchecked"}));const t=e.find((e=>e.getTitle()===r.textContent));o.innerText="radio_button_checked",b=t,y(b)}))}))},y=()=>{document.querySelector("#project-title").textContent=b.getTitle();const e=document.querySelector(".project-table");e.innerHTML="";const t=document.createElement("thead"),n=document.createElement("tr"),o=document.createElement("th");o.textContent="Task";const r=document.createElement("th");r.textContent="Description";const a=document.createElement("th");a.textContent="Date";const i=document.createElement("th");i.textContent="Priority";const c=document.createElement("th");c.textContent="Completed?",t.appendChild(n),n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(i),n.appendChild(c),e.appendChild(t),null!=b.getSubtasks()[0]&&b.getSubtasks().forEach((t=>{const n=document.createElement("tr"),o=document.createElement("td"),r=document.createElement("td"),a=document.createElement("td"),i=document.createElement("input");i.setAttribute("type","date"),i.classList.add("date-picker");const c=document.createElement("td"),d=document.createElement("select");d.setAttribute("name","priority"),d.setAttribute("id","lang");const s=document.createElement("option");s.textContent="Low",s.value="Low";const l=document.createElement("option");l.textContent="Medium",l.value="Medium";const p=document.createElement("option");p.textContent="High",p.value="High",d.appendChild(s),d.appendChild(l),d.appendChild(p),c.appendChild(d);const u=document.createElement("td"),m=document.createElement("input");m.setAttribute("type","checkbox"),m.setAttribute("name","subtask"),u.appendChild(m);const f=t.getTitle(),h=t.getDescription();a.appendChild(i);const g=t.getDueDate(),x=t.getPriority();o.textContent=f,r.textContent=h,i.value=g,d.value=x,n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(c),n.appendChild(u),e.appendChild(n),i.addEventListener("change",(()=>{t.setDueDate(i.value)})),c.addEventListener("change",(()=>{console.log(d.value),t.setPriority(d.value)}))}))},k=[];k.push(h("Default")),k.push(h("Beans")),k[0].addSubtask("Title","Description","12/11/2025","High","False"),k[0].addSubtask("Title","Description","12/11/2025","High","False"),k[1].addSubtask("Cook Beans","Cook Em","12/11/2025","Low","False"),v(k),(()=>{x.addEventListener("click",(()=>{"expand_less"===x.textContent?x.textContent="expand_more":x.textContent="expand_less",g.classList.toggle("hidden")})),document.querySelector("#add-project").addEventListener("click",(()=>{(e=>{const t=document.createElement("div");t.classList.add("project");const n=document.createElement("input");n.setAttribute("type","text"),t.appendChild(n),g.appendChild(t),t.addEventListener("keydown",(t=>{"Enter"===t.key&&(e.push(h(n.value)),v(e),console.log(e))})),g.classList.remove("hidden"),x.textContent="expand_more"})(k)}));const e=document.querySelector("#new-task"),t=document.querySelector(".task-module-container");e.addEventListener("click",(()=>{t.classList.remove("hidden")})),document.querySelector("#add-task").addEventListener("click",(()=>{(()=>{const e=document.querySelector("#title"),t=document.querySelector("#description"),n=document.querySelector("#due-date"),o=document.querySelector("#priority");b.addSubtask(`${e.value}`,`${t.value}`,`${n.value}`,`${o.value}`,"false"),console.log(`${e.value}`,`${t.value}`,`${n.value}`,`${o.value}`,"false"),e.value="",t.value="",n.value="",o.value=""})(),y(),t.classList.add("hidden")})),document.querySelector("#cancel").addEventListener("click",(()=>{t.classList.add("hidden")}))})()})()})();