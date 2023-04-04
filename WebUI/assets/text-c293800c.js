import{l as B,p as v,q as g,y as S,z,B as b,E as f,G as T,h as C,ak as W}from"./index-e71e6abe.js";import{u as P}from"./use-compitable-d8259286.js";const F={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},$=t=>{const{primaryColor:r,textColor2:o,borderColor:n,lineHeight:i,fontSize:e,borderRadiusSmall:l,dividerColor:d,fontWeightStrong:u,textColor1:a,textColor3:s,infoColor:c,warningColor:h,errorColor:x,successColor:p,codeColor:m}=t;return Object.assign(Object.assign({},F),{aTextColor:r,blockquoteTextColor:o,blockquotePrefixColor:n,blockquoteLineHeight:i,blockquoteFontSize:e,codeBorderRadius:l,liTextColor:o,liLineHeight:i,liFontSize:e,hrColor:d,headerFontWeight:u,headerTextColor:a,pTextColor:o,pTextColor1Depth:a,pTextColor2Depth:o,pTextColor3Depth:s,pLineHeight:i,pFontSize:e,headerBarColor:r,headerBarColorPrimary:r,headerBarColorInfo:c,headerBarColorError:x,headerBarColorWarning:h,headerBarColorSuccess:p,textColor:o,textColor1Depth:a,textColor2Depth:o,textColor3Depth:s,textColorPrimary:r,textColorInfo:c,textColorSuccess:p,textColorWarning:h,textColorError:x,codeTextColor:o,codeColor:m,codeBorder:"1px solid #0000"})},M={name:"Typography",common:B,self:$},D=M,R=v("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[g("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("italic",{fontStyle:"italic"}),g("underline",{textDecoration:"underline"}),g("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),k=Object.assign(Object.assign({},b.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),V=S({name:"Text",props:k,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=z(t),n=b("Typography","-text",R,D,t,r),i=f(()=>{const{depth:l,type:d}=t,u=d==="default"?l===void 0?"textColor":`textColor${l}Depth`:W("textColor",d),{common:{fontWeightStrong:a,fontFamilyMono:s,cubicBezierEaseInOut:c},self:{codeTextColor:h,codeBorderRadius:x,codeColor:p,codeBorder:m,[u]:y}}=n.value;return{"--n-bezier":c,"--n-text-color":y,"--n-font-weight-strong":a,"--n-font-famliy-mono":s,"--n-code-border-radius":x,"--n-code-text-color":h,"--n-code-color":p,"--n-code-border":m}}),e=o?T("text",f(()=>`${t.type[0]}${t.depth||""}`),i,t):void 0;return{mergedClsPrefix:r,compitableTag:P(t,["as","tag"]),cssVars:o?void 0:i,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t,r,o;const{mergedClsPrefix:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=[`${n}-text`,this.themeClass,{[`${n}-text--code`]:this.code,[`${n}-text--delete`]:this.delete,[`${n}-text--strong`]:this.strong,[`${n}-text--italic`]:this.italic,[`${n}-text--underline`]:this.underline}],e=(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r);return this.code?C("code",{class:i,style:this.cssVars},this.delete?C("del",null,e):e):this.delete?C("del",{class:i,style:this.cssVars},e):C(this.compitableTag||"span",{class:i,style:this.cssVars},e)}});export{V as _,D as t};
