import{R as n,r as b,j as e}from"./index-d28a4ff4.js";import{a as o}from"./axios-345d0e8d.js";import{M as r,B as i}from"./index-3cf3a9ca.js";import{T as M,a as O,b as v,c as A,d as z,e as d,D as x,f as c,g as h,h as j,i as u,j as g,L as F,k as f,S as H,U as V,l as q}from"./upload-fde8694d.js";import{c as D}from"./createFluentIcon-7bef37c8.js";import{T as G}from"./Title2-acee3842.js";import{B as p}from"./Badge-7cbb8a46.js";import{I as J}from"./Input-1d3b38cd.js";import{T as P}from"./Textarea-8732e304.js";import"./getSlots-be0295ac.js";import"./resolveShorthand-d25f9b7a.js";import"./useEventCallback-e920580b.js";import"./__resetStyles.esm-97b3b7fa.js";import"./useFocusWithin-57c2e6c6.js";import"./useTabsterAttributes-06a0aaff.js";import"./createPreset-7b5d31b4.js";import"./useTextStyles-9f167a2a.js";import"./useFieldControlProps-edf0dbd1.js";const Q=D("AppsListDetail24Filled","24",["M4.25 4C3.01 4 2 5 2 6.25v2.5C2 9.99 3 11 4.25 11h2.5C7.99 11 9 10 9 8.75v-2.5C9 5.01 8 4 6.75 4h-2.5Zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm-7 5C3.01 13 2 14 2 15.25v2.5C2 18.99 3 20 4.25 20h2.5C7.99 20 9 19 9 17.75v-2.5C9 14.01 8 13 6.75 13h-2.5Zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z"]),N=D("Copy24Regular","24",["M5.5 4.63V17.25c0 1.8 1.46 3.25 3.25 3.25h8.62c-.31.88-1.15 1.5-2.13 1.5H8.75A4.75 4.75 0 0 1 4 17.25V6.75c0-.98.63-1.81 1.5-2.12ZM17.75 2C18.99 2 20 3 20 4.25v13c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75v-13a.75.75 0 0 0-.75-.75Z"]);function ve(){const[a,s]=n.useState([]),t=n.useRef(null),[C,T]=n.useState(""),[S,y]=n.useState(""),[I,w]=n.useState(""),[L,R]=n.useState(!1),[B,E]=n.useState(!1),[Z,U]=n.useState(!1);b.useEffect(()=>{m(s)},[]);const k=[{columnKey:"Title",label:"标题"},{columnKey:"Description",label:"简介"},{columnKey:"state",label:"状态"},{columnKey:"date",label:"时间"},{columnKey:"action",label:"操作"}];return e.jsxs("div",{className:"flex flex-col justify-center ",children:[e.jsx(G,{className:"mb-2 ml-2",children:"直播管理"}),e.jsx(W,{setData:s,open:B,setOpen:E,title:S,setTitle:y,description:I,setDescription:w,imageRef:t,imageName:C,setImageName:T,uploading:L,setUploading:R,getData:m,imageSelected:Z,setImageSelected:U}),e.jsx("div",{className:"ml-4 mt-2",children:e.jsxs(M,{children:[e.jsx(O,{children:e.jsx(v,{children:k.map(l=>e.jsx(A,{children:l.label},l.columnKey))})}),e.jsx(z,{children:a.map((l,K)=>e.jsxs(v,{children:[e.jsx(d,{children:l.Title}),e.jsx(d,{children:l.Description}),e.jsx(d,{children:l.LiveState==="true"?e.jsx(p,{appearance:"filled",color:"success",children:"直播中"}):e.jsx(p,{appearance:"filled",color:"danger",children:"无信号"})}),e.jsx(d,{children:l.SubmitDate}),e.jsx(d,{role:"gridcell",children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx(_,{item:l}),e.jsx("div",{className:"ml-2"}),e.jsx(Y,{item:l,setData:s})]})})]},K))})]})})]})}function W(a){const s=()=>{if(a.title===""){r.error("请输入直播标题");return}if(a.description===""){r.error("请输入直播简介");return}if(!a.imageSelected){r.error("请选择封面");return}a.setUploading(!0),a.imageRef.current.submit()};return b.useEffect(()=>{a.imageName&&a.uploading&&o.post("/api/addLive",{title:a.title,description:a.description,cover:a.imageName}).then(t=>{t.data.message==="success"?(r.success("发布成功"),a.setOpen(!1),a.setUploading(!1),a.setTitle(""),a.setDescription(""),a.setImageName(""),a.setImageSelected(!1),m(a.setData)):(r.error("发布失败"),a.setUploading(!1))})},[a.imageName]),e.jsxs(x,{open:a.open,onOpenChange:()=>{a.setOpen(!0)},children:[e.jsx(c,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",className:"w-0",style:{marginTop:"6px",marginLeft:"8px"},children:"发起直播"})}),e.jsx(h,{children:e.jsxs(j,{children:[e.jsx(u,{action:null,children:"发布直播"}),e.jsx(g,{children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(J,{placeholder:"请输入直播标题",value:a.title,onChange:t=>{a.setTitle(t.target.value)}}),e.jsx("div",{className:"mt-2"}),e.jsx(P,{placeholder:"请输入直播简介",value:a.description,onChange:t=>{a.setDescription(t.target.value)}}),e.jsx(F,{className:"mt-2",children:"直播封面"}),e.jsx("div",{className:"mt-2 flex flex-row",children:e.jsx(X,{imageRef:a.imageRef,setImageSelected:a.setImageSelected,setImageName:a.setImageName})})]})}),e.jsxs(f,{children:[e.jsx(i,{appearance:"secondary",onClick:()=>{a.setOpen(!1),a.setTitle(""),a.setDescription(""),a.setImageName(""),a.setImageSelected(!1)},disabled:a.uploading,children:"取消"}),e.jsx(i,{appearance:"primary",onClick:s,disabled:a.uploading,children:a.uploading?e.jsx(H,{size:"small"}):"上传并发起"})]})]})})]})}function X(a){return e.jsx("div",{className:"flex flex-col",children:e.jsx(V,{action:"/api/uploadImage",ref:a.imageRef,listType:"picture-card",limit:1,autoUpload:!1,accept:"image/*",onChange:s=>{try{s[0].status==="done"&&a.setImageName(s[0].response.fileName)}catch{}a.setImageSelected(!0)}})})}function Y(a){return e.jsxs(x,{children:[e.jsx(c,{disableButtonEnhancement:!0,children:e.jsx(i,{icon:e.jsx(q,{})})}),e.jsx(h,{children:e.jsxs(j,{children:[e.jsx(u,{children:"删除警告"}),e.jsxs(g,{children:['将要删除标题为 "',a.item.Title,'" 的直播',e.jsx("br",{}),"此操作不可逆，确认删除？"]}),e.jsxs(f,{children:[e.jsx(c,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"secondary",children:"取消"})}),e.jsx(c,{children:e.jsx(i,{appearance:"primary",onClick:()=>{$(a.item.Id,a.setData)},children:"确认"})})]})]})})]})}function _(a){return e.jsxs(x,{children:[e.jsx(c,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",icon:e.jsx(Q,{})})}),e.jsx(h,{children:e.jsxs(j,{children:[e.jsx(u,{children:"直播详情"}),e.jsx(g,{children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row items-center mt-2",children:[e.jsx("div",{className:"w-1/4",children:"推流地址："}),e.jsx("div",{className:"w-3/4",children:"rtmp://"+window.location.hostname+":1936/gztv/"}),e.jsx(i,{appearance:"primary",icon:e.jsx(N,{}),onClick:()=>{navigator.clipboard.writeText("rtmp://"+window.location.hostname+":1936/gztv/")}})]}),e.jsxs("div",{className:"flex flex-row items-center mt-2",children:[e.jsx("div",{className:"w-1/4",children:"推流码："}),e.jsx("div",{className:"w-3/4",children:a.item.StreamName}),e.jsx(i,{appearance:"primary",icon:e.jsx(N,{}),onClick:()=>{navigator.clipboard.writeText(a.item.StreamName)}})]})]})}),e.jsx(f,{children:e.jsx(c,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",children:"关闭"})})})]})})]})}function m(a){o.get("/api/getLives").then(s=>{s.data.forEach(t=>{t.SubmitDate=t.SubmitDate.replace("T"," ").replace("Z"," ")}),s.data.reverse(),a(s.data)})}function $(a,s){o.get("/api/deleteLive?id="+a).then(()=>{m(s)})}export{ve as default};