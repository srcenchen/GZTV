import{p as w,n as h,q as c,y as z,z as $,B as l,E as f,G as T,h as B,ak as i}from"./index-e71e6abe.js";import{t as R}from"./text-c293800c.js";const P=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[h("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),h("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),h("&::before",{backgroundColor:"var(--n-bar-color)"})])]),W=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),a=r=>z({name:`H${r}`,props:W,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=$(e),n=l("Typography","-h",P,R,e,o),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:m},self:{headerFontWeight:p,headerTextColor:b,[i("headerPrefixWidth",r)]:u,[i("headerFontSize",r)]:x,[i("headerMargin",r)]:C,[i("headerBarWidth",r)]:v,[i("headerBarColor",g)]:y}}=n.value;return{"--n-bezier":m,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":p,"--n-text-color":b,"--n-prefix-width":u}}),t=s?T(`h${r}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:o,cssVars:s?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:o,alignText:s,mergedClsPrefix:n,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),B(`h${r}`,{class:[`${n}-h`,`${n}-h${r}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:s}],style:d},t)}}),k=a("1");a("2");a("3");a("4");a("5");a("6");export{k as N};