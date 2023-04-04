import{a as g}from"./axios-aba6f0e0.js";import{l as k,p as y,Z as v,s as l,q as s,y as z,z as N,B as f,E as B,G as P,h as c,F as R,o as D,r as V,b as E,c as O,d,w as u,e as h,_ as T}from"./index-51b823b5.js";import{u as H}from"./use-notification-1bcb86ab.js";import{N as L}from"./headers-94c1b548.js";import{_ as M}from"./Space-fa378203.js";import{_ as S}from"./text-1ad9e4f8.js";import{_ as W}from"./Input-1c07be01.js";import"./use-compitable-96053cce.js";import"./use-locale-e5897699.js";const j=i=>{const{textColor1:o,dividerColor:t,fontWeightStrong:r}=i;return{textColor:o,color:t,fontWeight:r}},F={name:"Divider",common:k,self:j},q=F,A=y("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[v("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[v("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),s("title-position-left",[l("line",[s("left",{width:"28px"})])]),s("title-position-right",[l("line",[s("right",{width:"28px"})])]),s("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),s("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),v("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),s("dashed",[l("line",{borderColor:"var(--n-color)"})]),s("vertical",{backgroundColor:"var(--n-color)"})]),G=Object.assign(Object.assign({},f.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),I=z({name:"Divider",props:G,setup(i){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=N(i),r=f("Divider","-divider",A,q,i,o),a=B(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:p,textColor:m,fontWeight:_}}=r.value;return{"--n-bezier":e,"--n-color":p,"--n-text-color":m,"--n-font-weight":_}}),n=t?P("divider",void 0,a,i):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var i;const{$slots:o,titlePlacement:t,vertical:r,dashed:a,cssVars:n,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),c("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:r,[`${e}-divider--no-title`]:!o.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${t}`]:o.default&&t}],style:n},r?null:c("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!r&&o.default?c(R,null,c("div",{class:`${e}-divider__title`},this.$slots),c("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),U={class:"p-8"},ie={__name:"Setting",setup(i){D(()=>{r()});const o=window.location.hostname,t=V("");function r(){g.get("//"+o+":8020/api/getNotice").then(e=>{t.value=e.data.Password})}const a=H();function n(){g.get("//"+o+":8020/api/updateNotice?content="+t.value).then(e=>{a.success({title:"成功",description:"公告更新成功！",duration:5e3,keepAliveOnHover:!0})})}return(e,p)=>{const m=L,_=I,x=S,b=W,C=T,w=M;return E(),O("div",U,[d(m,null,{default:u(()=>[h("系统设置")]),_:1}),d(_),d(w,{vertical:""},{default:u(()=>[d(x,{class:"text-lg"},{default:u(()=>[h("首页公告")]),_:1}),d(b,{placeholder:"留空则代表关闭公告",value:t.value,"onUpdate:value":p[0]||(p[0]=$=>t.value=$)},null,8,["value"]),d(C,{onClick:n},{default:u(()=>[h("保存")]),_:1})]),_:1})])}}};export{ie as default};
