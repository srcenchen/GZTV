import{r as l,j as e,O as j,R as s,a as p,u as g}from"./index-184e6fdf.js";import{H as w,D as d}from"./Headers-27532b37.js";import{T as N,a as S,V as T,L as E,N as R}from"./TabList-03a1dcae.js";import{c as b}from"./createFluentIcon-6c3b03c5.js";import{T as c}from"./Text-959a0aea.js";import"./getSlots-504e8e8d.js";import"./resolveShorthand-d409517b.js";import"./useEventCallback-c6d905c8.js";import"./mergeCallbacks-8b3c959f.js";import"./useTabsterAttributes-2cad5257.js";import"./useTextStyles-3e4a8e13.js";const V=b("PersonAccounts24Regular","24",["M13 14.05V14H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.36 0 .7-.01 1.04-.03a2.5 2.5 0 0 1-.04-.47v-1.03c-.32.02-.65.03-1 .03-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h6.96A2.5 2.5 0 0 1 13 14.05ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM14 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H21v-1.25c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75V15Zm1.5-1.25c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25V15h-4v-1.25Z"]);function L(){const[a,m]=s.useState(window.innerWidth),[u,n]=s.useState("13.5rem"),r=()=>{m(window.innerWidth)};l.useEffect(()=>(window.addEventListener("resize",r),a<591?n("3.5rem"):n("13.5rem"),()=>{window.removeEventListener("resize",r)}),[]);const o=[{id:"/admin/videoManager",name:"视频管理",icon:e.jsx(T,{})},{id:"/admin/liveManager",name:"直播管理",icon:e.jsx(E,{})},{id:"/admin/noticePad",name:"公告管理",icon:e.jsx(R,{})},{id:"/admin/userSetting",name:"用户管理",icon:e.jsx(V,{})}];a<591&&o.forEach(t=>{t.name=""});const i=p(),[f,h]=s.useState(i.pathname);s.useEffect(()=>{h(i.pathname)},[i.pathname]);const x=g();return e.jsxs("div",{className:"flex-none lg:ml-32 ml-1 flex",style:{width:u},children:[e.jsx(N,{vertical:!0,defaultSelectedValue:f,className:"mt-2",size:"large",onTabSelect:(t,v)=>{x(v.value)},children:o.map(t=>e.jsx(S,{value:t.id,icon:t.icon,className:"lg:w-48 md:w-48",children:t.name},t.id))}),e.jsx(d,{vertical:!0})]})}function k(){return W(),l.useEffect(()=>{document.title="后台管理"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(w,{components:"",to:"/onlineVideo"}),e.jsxs("div",{className:"flex lg:mr-24 mr-2 flex-1 ",children:[e.jsx(L,{}),e.jsx("div",{className:"flex-1 h-auto",children:e.jsx("div",{className:"mt-4 overflow-auto",style:{height:window.innerHeight-146},children:e.jsx(j,{})})})]}),e.jsx(d,{}),e.jsxs("div",{className:"flex-none h-16 flex flex-col items-center justify-center",style:{background:"rgb(250, 250, 252)"},children:[e.jsx(c,{children:"本项目由伞恩晨同学开发维护并提供技术支持"}),e.jsx(c,{children:"主办方：江苏省赣榆高级中学经济开发区校区"})]})]})}function W(){sessionStorage.getItem("username")===null&&(window.location.href="/login")}export{k as default};
