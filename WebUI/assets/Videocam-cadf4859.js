import{y as _,h as u,M as fe,l as ge,N as _e,m as ve,O as ee,H as D,p as v,q as x,B as O,r as L,z as U,P as be,E as p,G as q,Q as pe,C as j,s,n as C,S as Ce,I as F,D as X,T as $,U as K,F as ke,V as re,W as Be,X as oe,Y as ie,Z as G,$ as $e,a0 as ue,b as xe,c as ye,f as Z}from"./index-51b823b5.js";import{d as Oe,C as Ee,a as Le,c as Fe}from"./Dropdown-b213b067.js";import{u as ne}from"./use-locale-e5897699.js";import{t as Me,f as te,N as je}from"./Image-1d56cfa5.js";import{u as Ke}from"./use-compitable-96053cce.js";const Ve=_({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),De=e=>{const{baseColor:t,textColor2:o,bodyColor:n,cardColor:c,dividerColor:l,actionColor:m,scrollbarColor:d,scrollbarColorHover:a,invertedColor:y}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:m,headerColor:c,headerColorInverted:y,footerColor:m,footerColorInverted:y,headerBorderColor:l,headerBorderColorInverted:y,footerBorderColor:l,footerBorderColorInverted:y,siderBorderColor:l,siderBorderColorInverted:y,siderColor:c,siderColorInverted:y,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ve(n,d),siderToggleBarColorHover:ve(n,a),__invertScrollbar:"true"}},Ue=fe({name:"Layout",common:ge,peers:{Scrollbar:_e},self:De}),Q=Ue;function qe(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const Ye=e=>{const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:c,textColor1:l,fontSize:m,dividerColor:d,hoverColor:a,primaryColorHover:y}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:a,itemColorActive:ee(n,{alpha:.1}),itemColorActiveHover:ee(n,{alpha:.1}),itemColorActiveCollapsed:ee(n,{alpha:.1}),itemTextColor:c,itemTextColorHover:c,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:c,itemTextColorHoverHorizontal:y,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:y,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:c,arrowColorHover:c,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:m,dividerColor:d},qe("#BBB",n,"#FFF","#AAA"))},Ge=fe({name:"Menu",common:ge,peers:{Tooltip:Me,Dropdown:Oe},self:Ye}),We=Ge,ze=D("n-layout-sider"),J={type:String,default:"static"},Xe=v("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ze={embedded:Boolean,position:J,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ie=D("n-layout");function Qe(e){return _({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},O.props),Ze),setup(t){const o=L(null),n=L(null),{mergedClsPrefixRef:c,inlineThemeDisabled:l}=U(t),m=O("Layout","-layout",Xe,Q,t,c);function d(I,S){if(t.nativeScrollbar){const{value:P}=o;P&&(S===void 0?P.scrollTo(I):P.scrollTo(I,S))}else{const{value:P}=n;P&&P.scrollTo(I,S)}}j(Ie,t);let a=0,y=0;const k=I=>{var S;const P=I.target;a=P.scrollLeft,y=P.scrollTop,(S=t.onScroll)===null||S===void 0||S.call(t,I)};be(()=>{if(t.nativeScrollbar){const I=o.value;I&&(I.scrollTop=y,I.scrollLeft=a)}});const A={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:d},N=p(()=>{const{common:{cubicBezierEaseInOut:I},self:S}=m.value;return{"--n-bezier":I,"--n-color":t.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),R=l?q("layout",p(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:c,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:A,mergedTheme:m,handleNativeElScroll:k,cssVars:l?void 0:N,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender},f)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const c=n?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return u("div",{class:l,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,c],onScroll:this.handleNativeElScroll},this.$slots):u(pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,c]}),this.$slots))}})}const No=Qe(!1),Je=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),x("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),eo={position:J,inverted:Boolean,bordered:{type:Boolean,default:!1}},_o=_({name:"LayoutHeader",props:Object.assign(Object.assign({},O.props),eo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=U(e),n=O("Layout","-layout-header",Je,Q,e,t),c=p(()=>{const{common:{cubicBezierEaseInOut:m},self:d}=n.value,a={"--n-bezier":m};return e.inverted?(a["--n-color"]=d.headerColorInverted,a["--n-text-color"]=d.textColorInverted,a["--n-border-color"]=d.headerBorderColorInverted):(a["--n-color"]=d.headerColor,a["--n-text-color"]=d.textColor,a["--n-border-color"]=d.headerBorderColor),a}),l=o?q("layout-header",p(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),oo=v("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),x("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),to=Object.assign(Object.assign({},O.props),{inverted:Boolean,position:J,bordered:Boolean}),ko=_({name:"LayoutFooter",props:to,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=U(e),n=O("Layout","-layout-footer",oo,Q,e,t),c=p(()=>{const{common:{cubicBezierEaseInOut:m},self:d}=n.value,a={"--n-bezier":m};return e.inverted?(a["--n-color"]=d.footerColorInverted,a["--n-text-color"]=d.textColorInverted,a["--n-border-color"]=d.footerBorderColorInverted):(a["--n-color"]=d.footerColor,a["--n-text-color"]=d.textColor,a["--n-border-color"]=d.footerBorderColor),a}),l=o?q("layout-footer",p(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),ro=v("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[x("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[x("bordered",[s("border",`
 right: 0;
 `)])]),x("right-placement",`
 justify-content: flex-start;
 `,[x("bordered",[s("border",`
 left: 0;
 `)]),x("collapsed",[v("layout-toggle-button",[v("base-icon",`
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",[C("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),v("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[v("base-icon",`
 transform: rotate(0);
 `)]),v("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[C("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),x("collapsed",[v("layout-toggle-bar",[C("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),v("layout-toggle-button",[v("base-icon",`
 transform: rotate(0);
 `)])]),v("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[v("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[s("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),s("bottom",`
 position: absolute;
 top: 34px;
 `),C("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),C("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),v("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),x("show-content",[v("layout-sider-scroll-container",{opacity:1})]),x("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),no=_({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(Ce,{clsPrefix:e},{default:()=>u(Ee,null)}))}}),io=_({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),lo={position:J,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Bo=_({name:"LayoutSider",props:Object.assign(Object.assign({},O.props),lo),setup(e){const t=F(Ie),o=L(null),n=L(null),c=p(()=>te(a.value?e.collapsedWidth:e.width)),l=p(()=>e.collapseMode!=="transform"?{}:{minWidth:te(e.width)}),m=p(()=>t?t.siderPlacement:"left"),d=L(e.defaultCollapsed),a=ne(X(e,"collapsed"),d);function y(H,z){if(e.nativeScrollbar){const{value:w}=o;w&&(z===void 0?w.scrollTo(H):w.scrollTo(H,z))}else{const{value:w}=n;w&&w.scrollTo(H,z)}}function k(){const{"onUpdate:collapsed":H,onUpdateCollapsed:z,onExpand:w,onCollapse:g}=e,{value:b}=a;z&&$(z,!b),H&&$(H,!b),d.value=!b,b?w&&$(w):g&&$(g)}let A=0,f=0;const N=H=>{var z;const w=H.target;A=w.scrollLeft,f=w.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,H)};be(()=>{if(e.nativeScrollbar){const H=o.value;H&&(H.scrollTop=f,H.scrollLeft=A)}}),j(ze,{collapsedRef:a,collapseModeRef:X(e,"collapseMode")});const{mergedClsPrefixRef:R,inlineThemeDisabled:I}=U(e),S=O("Layout","-layout-sider",ro,Q,e,R);function P(H){var z,w;H.propertyName==="max-width"&&(a.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const V={scrollTo:y},E=p(()=>{const{common:{cubicBezierEaseInOut:H},self:z}=S.value,{siderToggleButtonColor:w,siderToggleButtonBorder:g,siderToggleBarColor:b,siderToggleBarColorHover:r}=z,h={"--n-bezier":H,"--n-toggle-button-color":w,"--n-toggle-button-border":g,"--n-toggle-bar-color":b,"--n-toggle-bar-color-hover":r};return e.inverted?(h["--n-color"]=z.siderColorInverted,h["--n-text-color"]=z.textColorInverted,h["--n-border-color"]=z.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,h.__invertScrollbar=z.__invertScrollbar):(h["--n-color"]=z.siderColor,h["--n-text-color"]=z.textColor,h["--n-border-color"]=z.siderBorderColor,h["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),h}),B=I?q("layout-sider",p(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:R,mergedTheme:S,styleMaxWidth:c,mergedCollapsed:a,scrollContainerStyle:l,siderPlacement:m,handleNativeElScroll:N,handleTransitionend:P,handleTriggerClick:k,inlineThemeDisabled:I,cssVars:E,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},V)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:te(this.width)}]},this.nativeScrollbar?u("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?u(io,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(no,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),Y=D("n-menu"),le=D("n-submenu"),ae=D("n-menu-item-group"),W=8;function ce(e){const t=F(Y),{props:o,mergedCollapsedRef:n}=t,c=F(le,null),l=F(ae,null),m=p(()=>o.mode==="horizontal"),d=p(()=>m.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=p(()=>{var f;return Math.max((f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize,o.iconSize)}),y=p(()=>{var f;return!m.value&&e.root&&n.value&&(f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize}),k=p(()=>{if(m.value)return;const{collapsedWidth:f,indent:N,rootIndent:R}=o,{root:I,isGroup:S}=e,P=R===void 0?N:R;if(I)return n.value?f/2-a.value/2:P;if(l)return N/2+l.paddingLeftRef.value;if(c)return(S?N/2:N)+c.paddingLeftRef.value}),A=p(()=>{const{collapsedWidth:f,indent:N,rootIndent:R}=o,{value:I}=a,{root:S}=e;return m.value||!S||!n.value?W:(R===void 0?N:R)+I+W-(f+I)/2});return{dropdownPlacement:d,activeIconSize:y,maxIconSize:a,paddingLeft:k,iconMarginRight:A,NMenu:t,NSubmenu:c}}const de={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},we=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ao=_({name:"MenuOptionGroup",props:we,setup(e){j(le,null);const t=ce(e);j(ae,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=F(Y);return function(){const{value:c}=o,l=t.paddingLeft.value,{nodeProps:m}=n,d=m==null?void 0:m(e.tmNode.rawNode);return u("div",{class:`${c}-menu-item-group`,role:"group"},u("div",Object.assign({},d,{class:[`${c}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),K(e.title),e.extra?u(ke,null," ",K(e.extra)):null),u("div",null,e.tmNodes.map(a=>se(a,n))))}}}),Se=_({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=F(Y);return{menuProps:t,style:p(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:p(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:c}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:c,expandIcon:l}}=this,m=o?o(t.rawNode):K(this.icon);return u("div",{onClick:d=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},m&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[m]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):K(this.title),this.extra||c?u("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(t.rawNode):K(this.extra)):null),this.showArrow?u(Ce,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):u(Ve,null)}):null)}}),He=Object.assign(Object.assign({},de),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),co=_({name:"Submenu",props:He,setup(e){const t=ce(e),{NMenu:o,NSubmenu:n}=t,{props:c,mergedCollapsedRef:l,mergedThemeRef:m}=o,d=p(()=>{const{disabled:f}=e;return n!=null&&n.mergedDisabledRef.value||c.disabled?!0:f}),a=L(!1);j(le,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),j(ae,null);function y(){const{onClick:f}=e;f&&f()}function k(){d.value||(l.value||o.toggleExpand(e.internalKey),y())}function A(f){a.value=f}return{menuProps:c,mergedTheme:m,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:re(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:p(()=>c.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:p(()=>!d.value&&(c.mode==="horizontal"||l.value)),handlePopoverShowChange:A,handleClick:k}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,c=()=>{const{isHorizontal:m,paddingLeft:d,collapsed:a,mergedDisabled:y,maxIconSize:k,activeIconSize:A,title:f,childActive:N,icon:R,handleClick:I,menuProps:{nodeProps:S},dropdownShow:P,iconMarginRight:V,tmNode:E,mergedClsPrefix:B}=this,H=S==null?void 0:S(E.rawNode);return u("div",Object.assign({},H,{class:[`${B}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),u(Se,{tmNode:E,paddingLeft:d,collapsed:a,disabled:y,iconMarginRight:V,maxIconSize:k,activeIconSize:A,title:f,extra:this.extra,showArrow:!m,childActive:N,clsPrefix:B,icon:R,hover:P,onClick:I}))},l=()=>u(Be,null,{default:()=>{const{tmNodes:m,collapsed:d}=this;return d?null:u("div",{class:`${t}-submenu-children`,role:"menu"},m.map(a=>se(a,this.menuProps)))}});return this.root?u(Le,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),this.isHorizontal?null:l())}):u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),l())}}),Ae=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),so=_({name:"MenuOption",props:Ae,setup(e){const t=ce(e),{NSubmenu:o,NMenu:n}=t,{props:c,mergedClsPrefixRef:l,mergedCollapsedRef:m}=n,d=o?o.mergedDisabledRef:{value:!1},a=p(()=>d.value||e.disabled);function y(A){const{onClick:f}=e;f&&f(A)}function k(A){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),y(A))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:c,dropdownEnabled:re(()=>e.root&&m.value&&c.mode!=="horizontal"&&!a.value),selected:re(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:k}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:c}}=this,l=c==null?void 0:c(o.rawNode);return u("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),u(je,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):K(this.title),trigger:()=>u(Se,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),vo=_({name:"MenuDivider",setup(){const e=F(Y),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${t.value}-menu-divider`})}}),uo=ie(we),mo=ie(Ae),ho=ie(He);function Re(e){return e.type==="divider"||e.type==="render"}function fo(e){return e.type==="divider"}function se(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Re(o))return fo(o)?u(vo,Object.assign({key:e.key},o.props)):null;const{labelField:c}=t,{key:l,level:m,isGroup:d}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[c],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:m,root:m===0,isGroup:d});return e.children?e.isGroup?u(ao,oe(a,uo,{tmNode:e,tmNodes:e.children,key:l})):u(co,oe(a,ho,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):u(so,oe(a,mo,{key:l,tmNode:e}))}const me=[C("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],he=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],go=C([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[x("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),x("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[x("selected",[s("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),s("extra","color: var(--n-item-text-color-active-horizontal);")])]),x("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),s("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),G("disabled",[G("selected, child-active",[C("&:focus-within",he)]),x("selected",[M(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),x("child-active",[M(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),M("border-bottom: 2px solid var(--n-border-color-horizontal);",he)]),v("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),x("collapsed",[v("menu-item-content",[x("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),v("menu-item-content-header","opacity: 0;"),s("arrow","opacity: 0;"),s("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),x("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),x("collapsed",[s("arrow","transform: rotate(0);")]),x("selected",[C("&::before","background-color: var(--n-item-color-active);"),s("arrow","color: var(--n-arrow-color-active);"),s("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),s("extra","color: var(--n-item-text-color-active);")])]),x("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),s("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),s("arrow",`
 color: var(--n-arrow-color-child-active);
 `),s("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),G("disabled",[G("selected, child-active",[C("&:focus-within",me)]),x("selected",[M(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),x("child-active",[M(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),x("selected",[M(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),M(null,me)]),s("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),s("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),v("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),s("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[$e({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),v("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function M(e,t){return[x("hover",e,t),C("&:hover",e,t)]}const bo=Object.assign(Object.assign({},O.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),$o=_({name:"Menu",props:bo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=U(e),n=O("Menu","-menu",go,We,e,t),c=F(ze,null),l=p(()=>{var g;const{collapsed:b}=e;if(b!==void 0)return b;if(c){const{collapseModeRef:r,collapsedRef:h}=c;if(r.value==="width")return(g=h.value)!==null&&g!==void 0?g:!1}return!1}),m=p(()=>{const{keyField:g,childrenField:b,disabledField:r}=e;return Fe(e.items||e.options,{getIgnored(h){return Re(h)},getChildren(h){return h[b]},getDisabled(h){return h[r]},getKey(h){var T;return(T=h[g])!==null&&T!==void 0?T:h.name}})}),d=p(()=>new Set(m.value.treeNodes.map(g=>g.key))),{watchProps:a}=e,y=L(null);a!=null&&a.includes("defaultValue")?ue(()=>{y.value=e.defaultValue}):y.value=e.defaultValue;const k=X(e,"value"),A=ne(k,y),f=L([]),N=()=>{f.value=e.defaultExpandAll?m.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||m.value.getPath(A.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?ue(N):N();const R=Ke(e,["expandedNames","expandedKeys"]),I=ne(R,f),S=p(()=>m.value.treeNodes),P=p(()=>m.value.getPath(A.value).keyPath);j(Y,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:A,mergedExpandedKeysRef:I,activePathRef:P,mergedClsPrefixRef:t,isHorizontalRef:p(()=>e.mode==="horizontal"),invertedRef:X(e,"inverted"),doSelect:V,toggleExpand:B});function V(g,b){const{"onUpdate:value":r,onUpdateValue:h,onSelect:T}=e;h&&$(h,g,b),r&&$(r,g,b),T&&$(T,g,b),y.value=g}function E(g){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:r,onExpandedNamesChange:h,onOpenNamesChange:T}=e;b&&$(b,g),r&&$(r,g),h&&$(h,g),T&&$(T,g),f.value=g}function B(g){const b=Array.from(I.value),r=b.findIndex(h=>h===g);if(~r)b.splice(r,1);else{if(e.accordion&&d.value.has(g)){const h=b.findIndex(T=>d.value.has(T));h>-1&&b.splice(h,1)}b.push(g)}E(b)}const H=g=>{const b=m.value.getPath(g??A.value,{includeSelf:!1}).keyPath;if(!b.length)return;const r=Array.from(I.value),h=new Set([...r,...b]);e.accordion&&d.value.forEach(T=>{h.has(T)&&!b.includes(T)&&h.delete(T)}),E(Array.from(h))},z=p(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:b},self:r}=n.value,{borderRadius:h,borderColorHorizontal:T,fontSize:Pe,itemHeight:Te,dividerColor:Ne}=r,i={"--n-divider-color":Ne,"--n-bezier":b,"--n-font-size":Pe,"--n-border-color-horizontal":T,"--n-border-radius":h,"--n-item-height":Te};return g?(i["--n-group-text-color"]=r.groupTextColorInverted,i["--n-color"]=r.colorInverted,i["--n-item-text-color"]=r.itemTextColorInverted,i["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,i["--n-item-text-color-active"]=r.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=r.itemIconColorInverted,i["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=r.arrowColorInverted,i["--n-arrow-color-hover"]=r.arrowColorHoverInverted,i["--n-arrow-color-active"]=r.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=r.itemColorHoverInverted,i["--n-item-color-active"]=r.itemColorActiveInverted,i["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=r.groupTextColor,i["--n-color"]=r.color,i["--n-item-text-color"]=r.itemTextColor,i["--n-item-text-color-hover"]=r.itemTextColorHover,i["--n-item-text-color-active"]=r.itemTextColorActive,i["--n-item-text-color-child-active"]=r.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,i["--n-item-icon-color"]=r.itemIconColor,i["--n-item-icon-color-hover"]=r.itemIconColorHover,i["--n-item-icon-color-active"]=r.itemIconColorActive,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=r.arrowColor,i["--n-arrow-color-hover"]=r.arrowColorHover,i["--n-arrow-color-active"]=r.arrowColorActive,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,i["--n-arrow-color-child-active"]=r.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,i["--n-item-color-hover"]=r.itemColorHover,i["--n-item-color-active"]=r.itemColorActive,i["--n-item-color-active-hover"]=r.itemColorActiveHover,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),i}),w=o?q("menu",p(()=>e.inverted?"a":"b"),z,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:R,uncontrolledExpanededKeys:f,mergedExpandedKeys:I,uncontrolledValue:y,mergedValue:A,activePath:P,tmNodes:S,mergedTheme:n,mergedCollapsed:l,cssVars:o?void 0:z,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,showOption:H}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(c=>se(c,this.$props)))}}),po={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Co=Z("rect",{x:"32",y:"96",width:"448",height:"272",rx:"32.14",ry:"32.14",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),xo=Z("path",{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M128 416h256",fill:"currentColor"},null,-1),yo=[Co,xo],Oo=_({name:"TvOutline",render:function(t,o){return xe(),ye("svg",po,yo)}}),zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Io=Z("path",{d:"M464 384.39a32 32 0 0 1-13-2.77a15.77 15.77 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a15.77 15.77 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32z",fill:"currentColor"},null,-1),wo=Z("path",{d:"M268 400H84a68.07 68.07 0 0 1-68-68V180a68.07 68.07 0 0 1 68-68h184.48A67.6 67.6 0 0 1 336 179.52V332a68.07 68.07 0 0 1-68 68z",fill:"currentColor"},null,-1),So=[Io,wo],Eo=_({name:"Videocam",render:function(t,o){return xe(),ye("svg",zo,So)}});export{Oo as L,Eo as V,No as _,_o as a,$o as b,Bo as c,ko as d};
