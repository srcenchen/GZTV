import{R as n,r as m,u,j as e,O as j,a as w}from"./index-ab6327af.js";import{H as g,D as x}from"./Headers-64bfd23b.js";import{a as N}from"./axios-345d0e8d.js";import{B as E,N as T}from"./index-db32171d.js";import{T as d}from"./Text-107dba71.js";import{T as L,a as S,V as b,L as H}from"./TabList-9e6ce225.js";import"./getSlots-cf716d81.js";import"./resolveShorthand-331be274.js";import"./useEventCallback-9d4fa581.js";import"./__resetStyles.esm-44af7e79.js";import"./useTextStyles-9017f7a8.js";import"./createFluentIcon-9d2eff3f.js";import"./mergeCallbacks-8b3c959f.js";import"./useTabsterAttributes-763c0f9e.js";function R(){const[i,s]=n.useState(window.innerWidth),[a,o]=n.useState("13.5rem"),c=()=>{s(window.innerWidth)};m.useEffect(()=>(window.addEventListener("resize",c),i<591?o("3.5rem"):o("13.5rem"),()=>{window.removeEventListener("resize",c)}),[]);const l=[{id:"/onlineVideo",name:"在线视频",icon:e.jsx(b,{})},{id:"/liveRoom",name:"直播大厅",icon:e.jsx(H,{})}];i<591&&l.forEach(t=>{t.name=""});const r=w(),[f,h]=n.useState(r.pathname);n.useEffect(()=>{h(r.pathname)},[r.pathname]);const p=u();return e.jsxs("div",{className:"flex-none lg:ml-32 ml-1 flex",style:{width:a},children:[e.jsx(L,{vertical:!0,defaultSelectedValue:f,className:"mt-2",size:"large",onTabSelect:(t,v)=>{p(v.value)},children:l.map(t=>e.jsx(S,{value:t.id,icon:t.icon,className:"lg:w-48 md:w-48",children:t.name},t.id))}),e.jsx(x,{vertical:!0})]})}function G(){const[i,s]=n.useState(window.innerHeight),a=()=>{s(window.innerHeight)};m.useEffect(()=>(document.title="赣中电视台",window.addEventListener("resize",a),a(),V(),()=>{window.removeEventListener("resize",a)}),[]);const o=u();return e.jsxs("div",{className:"flex flex-col",children:[e.jsx(g,{components:e.jsx(E,{appearance:"primary",onClick:()=>{o("login")},children:"后台管理"}),to:"/onlineVideo"}),e.jsxs("div",{className:"flex lg:mr-24 mr-2 flex-1 ",children:[e.jsx(R,{}),e.jsx("div",{className:"flex-1 h-auto",children:e.jsx("div",{className:"mt-4 overflow-auto",style:{height:i-141},children:e.jsx(j,{})})})]}),e.jsx(x,{}),e.jsxs("div",{className:"flex-none h-16 flex flex-col items-center justify-center",style:{background:"rgb(250, 250, 252)"},children:[e.jsx(d,{children:"本项目由伞恩晨同学开发维护并提供技术支持"}),e.jsx(d,{children:"主办方：江苏省赣榆高级中学经济开发区校区"})]})]})}function V(){N.get("/api/getNotice").then(i=>{const s=i.data.Value;s!==""&&T.success({title:"公告",content:s})})}export{G as default};
