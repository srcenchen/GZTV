/* empty css              */import{a as d}from"./axios-3a3ab110.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{r as u,o as V,c as b,a as t,w as l,b as m,B as T,H as $,A as q,d as L,F as z,z as E,J as G,U as J,S as K,x as j,u as Q,K as W,I as X,N as Y,D as Z,P as ee,G as ae}from"./index-ef1f1ec4.js";const te={class:"ml-4 mt-4 mr-4"},oe=m("h1",{class:"text-xl"},"视频管理",-1),le=m("p",null,"视频上传：",-1),ie=m("p",null,"封面图上传 (最好为16:9的图，否则比例有点奇怪)",-1),ne=["src"],Ie={__name:"VideoManager",setup(se){const p=u([]),o=window.location.href.split(":")[0]+":"+window.location.href.split(":")[1]+":8020",I="/resource/upload/images/",v=u(!1),n=u(""),r=u(""),c=u(""),s=u(""),_=u([]),f=u([]);g();function g(){d.get(o+"/api/videoList").then(i=>{p.value=i.data,p.value=p.value.reverse()})}function x(i){d.get(o+"/api/deleteVideo?id="+i.Id+"&videoName="+i.VideoName+"&headImage="+i.HeadImage).then(a=>{g()})}function h(i){n.value=i.name}function k(i){s.value=i.name}function B(){n.value!==""&&d.get(o+"/api/deleteVideoFile?videoName="+n.value),s.value!==""&&d.get(o+"/api/deleteImageFile?imageName="+s.value),n.value="",s.value="",r.value="",c.value="",_.value=[],f.value=[]}async function U(){return n.value===""?(alert("视频还没有上传完吧，或者还没有上传视频。"),!1):s.value===""?(alert("未上传封面图。"),!1):r.value===""||c.value===""?(alert("视频标题和简介不能为空。"),!1):(await d.get(o+"/api/addVideo?videoName="+n.value+"&title="+r.value+"&description="+c.value+"&headImage="+s.value),g(),n.value="",s.value="",r.value="",c.value="",_.value=[],f.value=[],!0)}function y(){d.get(o+"/api/deleteVideoFile?videoName="+n.value)}function F(){d.get(o+"/api/deleteImageFile?imageName="+s.value)}return(i,a)=>{const S=T,N=G,w=J,R=K,D=$,H=X,O=Y,A=Z,C=ee,M=ae,P=q;return V(),b("div",te,[oe,t(S,{type:"primary",onClick:a[0]||(a[0]=e=>v.value=!v.value)},{default:l(()=>[L("发布视频")]),_:1}),t(D,{visible:v.value,"onUpdate:visible":a[5]||(a[5]=e=>v.value=e),onCancel:B,"on-before-ok":U,width:"auto"},{title:l(()=>[L(" 发布视频 ")]),default:l(()=>[m("div",null,[t(R,{direction:"vertical",class:"w-full"},{default:l(()=>[t(N,{placeholder:"视频标题",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e)},null,8,["modelValue"]),t(N,{placeholder:"视频简介 30字内",modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value=e),"max-length":"30"},null,8,["modelValue"]),le,t(w,{draggable:"",action:o+"/api/uploadVideo",accept:"video/*",limit:1,onSuccess:h,"file-list":_.value,"onUpdate:fileList":a[3]||(a[3]=e=>_.value=e),onOnBeforeRemove:y},null,8,["action","file-list"]),ie,t(w,{"list-type":"picture-card",action:o+"/api/uploadImage","image-preview":"",limit:1,accept:"image/*",onSuccess:k,"file-list":f.value,"onUpdate:fileList":a[4]||(a[4]=e=>f.value=e),onOnBeforeRemove:F},null,8,["action","file-list"])]),_:1})])]),_:1},8,["visible"]),t(P,{class:"mt-4"},{default:l(()=>[(V(!0),b(z,null,E(p.value,e=>(V(),j(M,{key:e.VideoName},{actions:l(()=>[t(C,{content:"您确定要删除此视频吗？",type:"error",onOk:ue=>x(e)},{default:l(()=>[t(Q(W))]),_:2},1032,["onOk"])]),default:l(()=>[t(A,{title:e.Title,description:e.Description},{avatar:l(()=>[t(O,{shape:"square"},{default:l(()=>[m("img",{alt:"avatar",src:o+I+e.HeadImage},null,8,ne)]),_:2},1024)]),default:l(()=>[t(H,{slot:"avatar",src:o+I+e.HeadImage,fit:"fill","preview-visible":!1,style:{cursor:"pointer"}},null,8,["src"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})])}}};export{Ie as default};
