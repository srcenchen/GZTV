import{R as a,r as m,u,j as e,O as w,a as g}from"./index-ffd77a69.js";import{H as v,D as x}from"./Headers-080b57e4.js";import{a as N}from"./axios-345d0e8d.js";import{B as E,N as T}from"./index-b2297a26.js";import{T as d}from"./Text-cb2f445c.js";import{T as y,a as L,V as S,L as b}from"./TabList-e9fc2915.js";import"./getSlots-565e4835.js";import"./resolveShorthand-2006e5a9.js";import"./useEventCallback-38ffe7b3.js";import"./__resetStyles.esm-5459172f.js";import"./useTextStyles-29a546f5.js";import"./createFluentIcon-a6dbebf8.js";import"./mergeCallbacks-8b3c959f.js";import"./useTabsterAttributes-b857c51d.js";const H="/assets/upyun-ae098712.png";function R(){const[t,i]=a.useState(window.innerWidth),[n,r]=a.useState("13.5rem"),l=()=>{i(window.innerWidth)};m.useEffect(()=>(window.addEventListener("resize",l),t<591?r("3.5rem"):r("13.5rem"),()=>{window.removeEventListener("resize",l)}),[]);const c=[{id:"/onlineVideo",name:"在线视频",icon:e.jsx(S,{})},{id:"/liveRoom",name:"直播大厅",icon:e.jsx(b,{})}];t<591&&c.forEach(s=>{s.name=""});const o=g(),[f,h]=a.useState(o.pathname);a.useEffect(()=>{h(o.pathname)},[o.pathname]);const p=u();return e.jsxs("div",{className:"flex-none lg:ml-32 ml-1 flex",style:{width:n},children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(y,{vertical:!0,defaultSelectedValue:f,className:"mt-2 flex-1",size:"large",onTabSelect:(s,j)=>{p(j.value)},children:c.map(s=>e.jsx(L,{value:s.id,icon:s.icon,className:"lg:w-48 md:w-48",children:s.name},s.id))}),t>591?e.jsx("a",{href:"https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",children:e.jsx("img",{src:H,width:64,className:"flex-none"})}):e.jsx(e.Fragment,{})]}),e.jsx(x,{vertical:!0})]})}function J(){const[t,i]=a.useState(window.innerHeight),n=()=>{i(window.innerHeight)};m.useEffect(()=>(document.title="赣中电视台",window.addEventListener("resize",n),n(),V(),()=>{window.removeEventListener("resize",n)}),[]);const r=u();return e.jsxs("div",{className:"flex flex-col",children:[e.jsx(v,{components:e.jsx(E,{appearance:"primary",onClick:()=>{r("login")},children:"后台管理"}),to:"/onlineVideo"}),e.jsxs("div",{className:"flex lg:mr-24 mr-2 flex-1 ",children:[e.jsx(R,{}),e.jsx("div",{className:"flex-1 h-auto",children:e.jsx("div",{className:"mt-4 overflow-auto",style:{height:t-141},children:e.jsx(w,{})})})]}),e.jsx(x,{}),e.jsxs("div",{className:"flex-none h-16 flex flex-col items-center justify-center",style:{background:"rgb(250, 250, 252)"},children:[e.jsx(d,{children:"本项目由伞恩晨同学开发维护并提供技术支持"}),e.jsx(d,{children:"主办方：江苏省赣榆高级中学经济开发区校区"})]})]})}function V(){N.get("/api/getNotice").then(t=>{const i=t.data.Value;i!==""&&T.success({title:"公告",content:i})})}export{J as default};