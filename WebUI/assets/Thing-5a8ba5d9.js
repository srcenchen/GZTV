import{l as $,m as b,n as v,p as l,q as f,s as d,v as T,x as B,y as C,z,A as y,B as x,C as H,D as M,E as w,G as R,h as o,H as O,I as F,J as V,F as W}from"./index-51b823b5.js";const K=r=>{const{textColor2:e,cardColor:i,modalColor:n,popoverColor:c,dividerColor:h,borderRadius:g,fontSize:s,hoverColor:a}=r;return{textColor:e,color:i,colorHover:a,colorModal:n,colorHoverModal:b(n,a),colorPopover:c,colorHoverPopover:b(c,a),borderColor:h,borderColorModal:b(n,h),borderColorPopover:b(c,h),borderRadius:g,fontSize:s}},q={name:"List",common:$,self:K},A=q,G=r=>{const{textColor1:e,textColor2:i,fontWeightStrong:n,fontSize:c}=r;return{fontSize:c,titleTextColor:e,textColor:i,titleFontWeight:n}},J={name:"Thing",common:$,self:G},N=J,Q=v([l("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[f("show-divider",[l("list-item",[v("&:not(:last-child)",[d("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),f("clickable",[l("list-item",`
 cursor: pointer;
 `)]),f("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),f("hoverable",[l("list-item",`
 border-radius: var(--n-border-radius);
 `,[v("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[d("divider",`
 background-color: transparent;
 `)])])]),f("bordered, hoverable",[l("list-item",`
 padding: 12px 20px;
 `),d("header, footer",`
 padding: 12px 20px;
 `)]),d("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[v("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),l("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[d("prefix",`
 margin-right: 20px;
 flex: 0;
 `),d("suffix",`
 margin-left: 20px;
 flex: 0;
 `),d("main",`
 flex: 1;
 `),d("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),T(l("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),B(l("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),U=Object.assign(Object.assign({},x.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),E=O("n-list"),ee=C({name:"List",props:U,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:i,mergedRtlRef:n}=z(r),c=y("List",n,e),h=x("List","-list",Q,A,r,e);H(E,{showDividerRef:M(r,"showDivider"),mergedClsPrefixRef:e});const g=w(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:m,textColor:t,color:u,colorModal:p,colorPopover:_,borderColor:P,borderColorModal:S,borderColorPopover:k,borderRadius:j,colorHover:D,colorHoverModal:I,colorHoverPopover:L}}=h.value;return{"--n-font-size":m,"--n-bezier":a,"--n-text-color":t,"--n-color":u,"--n-border-radius":j,"--n-border-color":P,"--n-border-color-modal":S,"--n-border-color-popover":k,"--n-color-modal":p,"--n-color-popover":_,"--n-color-hover":D,"--n-color-hover-modal":I,"--n-color-hover-popover":L}}),s=i?R("list",void 0,g,r):void 0;return{mergedClsPrefix:e,rtlEnabled:c,cssVars:i?void 0:g,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var r;const{$slots:e,mergedClsPrefix:i,onRender:n}=this;return n==null||n(),o("ul",{class:[`${i}-list`,this.rtlEnabled&&`${i}-list--rtl`,this.bordered&&`${i}-list--bordered`,this.showDivider&&`${i}-list--show-divider`,this.hoverable&&`${i}-list--hoverable`,this.clickable&&`${i}-list--clickable`,this.themeClass],style:this.cssVars},e.header?o("div",{class:`${i}-list__header`},e.header()):null,(r=e.default)===null||r===void 0?void 0:r.call(e),e.footer?o("div",{class:`${i}-list__footer`},e.footer()):null)}}),re=C({name:"ListItem",setup(){const r=F(E,null);return r||V("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:r.showDividerRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{$slots:r,mergedClsPrefix:e}=this;return o("li",{class:`${e}-list-item`},r.prefix?o("div",{class:`${e}-list-item__prefix`},r.prefix()):null,r.default?o("div",{class:`${e}-list-item__main`},r):null,r.suffix?o("div",{class:`${e}-list-item__suffix`},r.suffix()):null,this.showDivider&&o("div",{class:`${e}-list-item__divider`}))}}),X=l("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[l("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),l("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[l("thing-header-wrapper",`
 flex: 1;
 `)]),l("thing-main",`
 flex-grow: 1;
 `,[l("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[d("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),d("description",[v("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),d("content",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("footer",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("action",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),Y=Object.assign(Object.assign({},x.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),oe=C({name:"Thing",props:Y,setup(r,{slots:e}){const{mergedClsPrefixRef:i,inlineThemeDisabled:n,mergedRtlRef:c}=z(r),h=x("Thing","-thing",X,N,r,i),g=y("Thing",c,i),s=w(()=>{const{self:{titleTextColor:m,textColor:t,titleFontWeight:u,fontSize:p},common:{cubicBezierEaseInOut:_}}=h.value;return{"--n-bezier":_,"--n-font-size":p,"--n-text-color":t,"--n-title-font-weight":u,"--n-title-text-color":m}}),a=n?R("thing",void 0,s,r):void 0;return()=>{var m;const{value:t}=i,u=g?g.value:!1;return(m=a==null?void 0:a.onRender)===null||m===void 0||m.call(a),o("div",{class:[`${t}-thing`,a==null?void 0:a.themeClass,u&&`${t}-thing--rtl`],style:n?void 0:s.value},e.avatar&&r.contentIndented?o("div",{class:`${t}-thing-avatar`},e.avatar()):null,o("div",{class:`${t}-thing-main`},!r.contentIndented&&(e.header||r.title||e["header-extra"]||r.titleExtra||e.avatar)?o("div",{class:`${t}-thing-avatar-header-wrapper`},e.avatar?o("div",{class:`${t}-thing-avatar`},e.avatar()):null,e.header||r.title||e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header-wrapper`},o("div",{class:`${t}-thing-header`},e.header||r.title?o("div",{class:`${t}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null),e.description||r.description?o("div",{class:`${t}-thing-main__description`,style:r.descriptionStyle},e.description?e.description():r.description):null):null):o(W,null,e.header||r.title||e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header`},e.header||r.title?o("div",{class:`${t}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null):null,e.description||r.description?o("div",{class:`${t}-thing-main__description`,style:r.descriptionStyle},e.description?e.description():r.description):null),e.default||r.content?o("div",{class:`${t}-thing-main__content`,style:r.contentStyle},e.default?e.default():r.content):null,e.footer?o("div",{class:`${t}-thing-main__footer`},e.footer()):null,e.action?o("div",{class:`${t}-thing-main__action`},e.action()):null))}}});export{ee as _,oe as a,re as b};
