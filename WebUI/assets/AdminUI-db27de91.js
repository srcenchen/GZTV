import{y as N,b as v,c as h,f as s,u as m,r as f,o as R,a as A,d as e,w as n,e as g,h as o,R as u}from"./index-e71e6abe.js";import{_ as B,a as $,b as I,c as U,d as q,V as z,L as S}from"./Videocam-e6de6955.js";import{_ as j}from"./Image-dfc2d10b.js";import{_ as E}from"./text-c293800c.js";import{N as H}from"./Dropdown-102fb6a8.js";import"./use-locale-54d5474b.js";import"./use-compitable-d8259286.js";const K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},O=s("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),T=s("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1),W=[O,T],D=N({name:"Settings",render:function(t,l){return v(),h("svg",K,W)}}),F={class:"h-screen"},G={class:"flex items-center"},J={class:"flex flex-col justify-center items-center h-full"},oe={__name:"AdminUI",setup(w){const t=m().currentRoute.value.path,l=f(t),i=f(!1);R(()=>{i.value=window.innerWidth<768}),(t==="/admin"||t==="/admin/")&&(m().push("/admin/videoManage"),l.value="/admin/videoManage");function _(d){return()=>o(H,null,{default:()=>o(d)})}const x=[{label:()=>o(u,{to:"/admin/videoManage"},"视频管理"),key:"/admin/videoManage",icon:_(z)},{label:()=>o(u,{to:"/admin/liveManage"},"直播管理"),key:"/admin/liveManage",icon:_(S)},{label:()=>o(u,{to:"/admin/setting"},"系统设置"),key:"/admin/setting",icon:_(D)}];function y(){window.open("/onlineVideo","_self")}return(d,a)=>{const b=j,k=$,M=I,C=U,V=A("router-view"),c=B,p=E,L=q;return v(),h("div",F,[e(c,{position:"absolute"},{default:n(()=>[e(k,{style:{height:"64px",padding:"8px"},bordered:""},{default:n(()=>[s("div",G,[e(b,{src:"/logo.png",width:"256",class:"lg:ml-24 cursor-pointer",onClick:y,"preview-disabled":""})])]),_:1}),e(c,{"has-sider":"",position:"absolute",style:{top:"64px",bottom:"64px"},class:"lg:ml-24 lg:mr-24"},{default:n(()=>[e(C,{bordered:"","collapse-mode":"width",collapsed:i.value,"onUpdate:collapsed":a[1]||(a[1]=r=>i.value=r)},{default:n(()=>[e(M,{options:x,value:l.value,"onUpdate:value":a[0]||(a[0]=r=>l.value=r)},null,8,["value"])]),_:1},8,["collapsed"]),e(c,null,{default:n(()=>[e(V)]),_:1})]),_:1}),e(L,{bordered:"",position:"absolute",style:{height:"64px"}},{default:n(()=>[s("div",J,[e(p,null,{default:n(()=>[g("本项目由伞恩晨同学开发维护并提供技术支持")]),_:1}),e(p,null,{default:n(()=>[g("主办方：江苏省赣榆高级中学经济开发区校区")]),_:1})])]),_:1})]),_:1})])}}};export{oe as default};
