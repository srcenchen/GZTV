import{u as d,r as n,j as o}from"./index-ab6327af.js";import{H as f}from"./Headers-64bfd23b.js";import{a as x}from"./axios-345d0e8d.js";import{M as g}from"./md5-b5efbca3.js";import{I as m}from"./Input-14dcf81a.js";import{B as w,M as i}from"./index-db32171d.js";import"./getSlots-cf716d81.js";import"./resolveShorthand-331be274.js";import"./useFieldControlProps-a945643b.js";import"./useEventCallback-9d4fa581.js";import"./__resetStyles.esm-44af7e79.js";let l;function K(){l=d(),n.useEffect(()=>{document.title="后台管理",h()},[]);const[s,a]=n.useState(""),[e,r]=n.useState("");return o.jsxs("div",{children:[o.jsx(f,{components:"",to:"/"}),o.jsxs("div",{className:"flex flex-col items-center mt-4",children:[o.jsx("label",{className:"text-2xl",children:"身份验证"}),o.jsx(m,{className:"w-64 mt-4 mb-2",placeholder:"请输入用户名",value:s,onChange:t=>a(t.target.value),onKeyDown:t=>c(t,s,e)}),o.jsx(m,{className:"w-64 mb-2",placeholder:"请输入管理员密码",type:"password",value:e,onChange:t=>r(t.target.value),onKeyDown:t=>c(t,s,e)}),o.jsx(w,{className:"w-64",appearance:"primary",onClick:()=>{p(s,e)},children:"验证"})]})]})}function c(s,a,e){s.key==="Enter"&&p(a,e)}function p(s,a){const e=g.hashStr(a);console.log(e);const r={username:s,password:e};x.post("/api/verifyUser",r).then(t=>{t.data.result?(sessionStorage.setItem("username",s),sessionStorage.setItem("password",e),i.success("Welcome"),u()):i.error("用户名或密码错误")})}function h(){sessionStorage.getItem("username")!==null&&(i.success("Welcome"),u())}function u(){l("/admin")}export{K as default};
