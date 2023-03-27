"use strict";(globalThis["webpackChunkfree_web_site"]=globalThis["webpackChunkfree_web_site"]||[]).push([[555],{53555:(e,t,l)=>{l.r(t),l.d(t,{default:()=>C});l(69665);var n=l(59835),r=l(60499),o=l(27712),a=l(52512),s=l(56682);const i=["innerHTML"];function u(e,t,l,r,o,a){return(0,n.wg)(),(0,n.iD)("div",{innerHTML:e.html},null,8,i)}const c=(0,n.aZ)({name:"HtmlContent",props:{html:String}});var d=l(11639);const h=(0,d.Z)(c,[["render",u]]),p=h;var f=l(86970);function m(e,t,l,r,o,a){const s=(0,n.up)("q-item"),i=(0,n.up)("q-scroll-area"),u=(0,n.up)("q-drawer");return(0,n.wg)(),(0,n.j4)(u,{"show-if-above":e.above,modelValue:e.openDrawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.openDrawer=t),side:"left",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"full-height"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.menus,((t,l)=>((0,n.wg)(),(0,n.j4)(s,{clickable:"",class:(0,f.C_)(`lv-${t.level||1} ${e.currentSelected===t.text?"text-primary":""}`),key:l,onClick:l=>e.toTitle(t)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,f.zw)(t.text||""),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1},8,["show-if-above","modelValue"])}const w=(0,n.aZ)({name:"FreeWebSiteDrawer",props:{above:Boolean,open:Boolean,menus:Array},data(){return{}},setup(e){const t=(0,r.iH)(e.open),l=(0,r.iH)(null);return(0,n.YP)((()=>e.open),(e=>{t.value=e})),{openDrawer:t,currentSelected:l,toTitle:e=>{if(e&&e.text){const t=document.getElementById(e.text);t&&(window.scroll({top:t.offsetTop-(window.scrollY>t.offsetTop?60:0),left:0,behavior:"smooth"}),l.value=e.text)}}}}});var v=l(10906),b=l(66663),g=l(490),T=l(69984),k=l.n(T);const x=(0,d.Z)(w,[["render",m],["__scopeId","data-v-c0b4b502"]]),_=x;k()(w,"components",{QDrawer:v.Z,QScrollArea:b.Z,QItem:g.Z});const C=(0,n.aZ)({name:"FreeWebsiteGuide",props:{target:{type:String,default:"fe"}},setup(e){const t=(0,o.QT)(),i=(0,r.iH)([]),u=(e,t)=>{i.value.push({level:t,text:e})},c=new a.TU.Renderer;c.heading=function(e,t,l){return u(e,t),`<a id=${e} class="anchor-point"></a><h${t}>${e}</h${t}>\n`};const d=function(e){return l(18661).highlightAuto(e).value};a.TU.setOptions({renderer:c,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:d});const h=(0,n.Fl)((()=>{const l=s["default"][t.locale?.value];return l?l[e.target]:""})),f=(0,r.iH)("");(0,n.m0)((()=>{i.value=[],f.value=(0,a.TU)(h.value)}));const m=(0,n.Fl)((()=>i.value));return()=>(0,n.h)("div",{class:"freeeis-docs theme-default-content full-width full-height q-pb-xl column"},[(0,n.h)("div",{class:"row full-width full-height no-wrap col"},[(0,n.h)(_,{menus:m.value,open:!0}),(0,n.h)(p,{html:f.value,class:"col"})]),(0,n.h)("div",{class:"contribute-info q-pa-md q-ma-lg text-center",style:"border: 1px solid #E1E1E1"},[t.t("Contribute1"),(0,n.h)("a",{href:"https://github.com/freeeis/free-website/issues"},"Github"),t.t("Contribute2")])])}})}}]);