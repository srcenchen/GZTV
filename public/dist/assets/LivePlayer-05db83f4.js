/* empty css              *//* empty css              */import{f as n}from"./flv-ccc55c46.js";import{j as r,o as m,c as p,b as e,a as d,t as _,u as f,F as u,I as v}from"./index-be962d38.js";const y={style:{}},h={class:"pt-4 flex flex-col items-center justify-center"},x={class:"xl:pl-64 xl:pr-64"},g={class:"flex flex-col text-xl items-center mt-4"},w=e("video",{autoplay:"",controls:"",id:"player",class:"w-screen mt-4"},null,-1),P=e("div",{class:"flex flex-col items-center justify-center m-2 mb-2"},[e("p",{class:"text-sm"},"本项目由伞恩晨同学开发维护并提供技术支持"),e("div"),e("p",{class:"text-sm"},"主办方：江苏省赣榆高级中学经济开发区校区")],-1),j={__name:"LivePlayer",setup(b){const s=new URLSearchParams(window.location.search),o=window.location.href.split(":")[0]+":"+window.location.href.split(":")[1]+":8021",a=s.get("id"),l=s.get("title");return document.title=l,r(()=>{function i(){return navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}if(i()){const t=document.getElementById("player");t.src=o+"/hls/live/"+a+".m3u8",t.type="application/vnd.apple.mpegurl",t.play()}else{const t=n.createPlayer({type:"flv",isLive:!0,url:o+"/live/"+a+".flv"});t.attachMediaElement(document.getElementById("player")),t.load(),t.play()}}),(i,t)=>{const c=v;return m(),p(u,null,[e("div",y,[e("div",h,[d(c,{src:"../src/assets/logo.png","preview-visible":!1})])]),e("div",x,[e("p",g,_(f(l)),1),w]),P],64)}}};export{j as default};
