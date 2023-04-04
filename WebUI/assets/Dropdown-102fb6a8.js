import{p as $e,f as Ee,V as Fe,h as Be,j as Me,r as He,e as je,g as xe}from"./Image-dfc2d10b.js";import{r as q,ag as ce,aR as Ge,aS as We,aT as Ue,ac as Ve,aD as Y,aU as qe,at as J,y as H,h,M as Ze,l as Se,O as Xe,p as $,q as E,n as G,B as oe,z as ke,E as N,G as Ce,aF as Pe,a6 as fe,H as pe,I as Z,aV as Ne,C as X,V as Q,ae as Ye,U as ee,F as Je,aW as Qe,aX as en,aY as nn,af as on,Z as ye,s as j,D as M,T as ie,ak as V,X as tn}from"./index-e71e6abe.js";import{u as rn}from"./use-locale-54d5474b.js";function ge(e,n){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[n]!==void 0)return!0;o=o.parentElement}return!1}function dn(e){return n=>{n?e.value=n.$el:e.value=null}}function an(e,n,o){if(!n)return e;const t=q(e.value);let r=null;return ce(e,i=>{r!==null&&window.clearTimeout(r),i===!0?o&&!o.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},n):t.value=!1}),t}function sn(e={},n){const o=Ge({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}t!==void 0&&Object.keys(t).forEach(l=>{if(l!==a.key)return;const u=t[l];if(typeof u=="function")u(a);else{const{stop:f=!1,prevent:w=!1}=u;f&&a.stopPropagation(),w&&a.preventDefault(),u.handler(a)}})},d=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(l=>{if(l!==a.key)return;const u=r[l];if(typeof u=="function")u(a);else{const{stop:f=!1,prevent:w=!1}=u;f&&a.stopPropagation(),w&&a.preventDefault(),u.handler(a)}})},s=()=>{(n===void 0||n.value)&&(J("keydown",document,i),J("keyup",document,d)),n!==void 0&&ce(n,a=>{a?(J("keydown",document,i),J("keyup",document,d)):(Y("keydown",document,i),Y("keyup",document,d))})};return We()?(Ue(s),Ve(()=>{(n===void 0||n.value)&&(Y("keydown",document,i),Y("keyup",document,d))})):s(),qe(o)}const ln=H({name:"ChevronRight",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function me(e){return Array.isArray(e)?e:[e]}const le={STOP:"STOP"};function Ie(e,n){const o=n(e);e.children!==void 0&&o!==le.STOP&&e.children.forEach(t=>Ie(t,n))}function un(e,n={}){const{preserveGroup:o=!1}=n,t=[],r=o?d=>{d.isLeaf||(t.push(d.key),i(d.children))}:d=>{d.isLeaf||(d.isGroup||t.push(d.key),i(d.children))};function i(d){d.forEach(r)}return i(e),t}function cn(e,n){const{isLeaf:o}=e;return o!==void 0?o:!n(e)}function fn(e){return e.children}function pn(e){return e.key}function hn(){return!1}function vn(e,n){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(n(e)))}function yn(e){return e.disabled===!0}function gn(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function de(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function ae(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function mn(e,n){const o=new Set(e);return n.forEach(t=>{o.has(t)||o.add(t)}),Array.from(o)}function bn(e,n){const o=new Set(e);return n.forEach(t=>{o.has(t)&&o.delete(t)}),Array.from(o)}function wn(e){return(e==null?void 0:e.type)==="group"}function oo(e){const n=new Map;return e.forEach((o,t)=>{n.set(o.key,t)}),o=>{var t;return(t=n.get(o))!==null&&t!==void 0?t:null}}class xn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Sn(e,n,o,t){return ne(n.concat(e),o,t,!1)}function kn(e,n){const o=new Set;return e.forEach(t=>{const r=n.treeNodeMap.get(t);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function Cn(e,n,o,t){const r=ne(n,o,t,!1),i=ne(e,o,t,!0),d=kn(e,o),s=[];return r.forEach(a=>{(i.has(a)||d.has(a))&&s.push(a)}),s.forEach(a=>r.delete(a)),r}function se(e,n){const{checkedKeys:o,keysToCheck:t,keysToUncheck:r,indeterminateKeys:i,cascade:d,leafOnly:s,checkStrategy:a,allowNotLoaded:l}=e;if(!d)return t!==void 0?{checkedKeys:mn(o,t),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:bn(o,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=n;let f;r!==void 0?f=Cn(r,o,n,l):t!==void 0?f=Sn(t,o,n,l):f=ne(o,n,l,!1);const w=a==="parent",R=a==="child"||s,b=f,O=new Set,P=Math.max.apply(null,Array.from(u.keys()));for(let K=P;K>=0;K-=1){const F=K===0,D=u.get(K);for(const c of D){if(c.isLeaf)continue;const{key:p,shallowLoaded:I}=c;if(R&&I&&c.children.forEach(x=>{!x.disabled&&!x.isLeaf&&x.shallowLoaded&&b.has(x.key)&&b.delete(x.key)}),c.disabled||!I)continue;let T=!0,L=!1,A=!0;for(const x of c.children){const z=x.key;if(!x.disabled){if(A&&(A=!1),b.has(z))L=!0;else if(O.has(z)){L=!0,T=!1;break}else if(T=!1,L)break}}T&&!A?(w&&c.children.forEach(x=>{!x.disabled&&b.has(x.key)&&b.delete(x.key)}),b.add(p)):L&&O.add(p),F&&R&&b.has(p)&&b.delete(p)}}return{checkedKeys:Array.from(b),indeterminateKeys:Array.from(O)}}function ne(e,n,o,t){const{treeNodeMap:r,getChildren:i}=n,d=new Set,s=new Set(e);return e.forEach(a=>{const l=r.get(a);l!==void 0&&Ie(l,u=>{if(u.disabled)return le.STOP;const{key:f}=u;if(!d.has(f)&&(d.add(f),s.add(f),gn(u.rawNode,i))){if(t)return le.STOP;if(!o)throw new xn}})}),s}function Pn(e,{includeGroup:n=!1,includeSelf:o=!0},t){var r;const i=t.treeNodeMap;let d=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:d};if(d!=null&&d.ignored)return s.treeNode=null,s;for(;d;)!d.ignored&&(n||!d.isGroup)&&s.treeNodePath.push(d),d=d.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(a=>a.key),s}function Nn(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function In(e,n){const o=e.siblings,t=o.length,{index:r}=e;return n?o[(r+1)%t]:r===o.length-1?null:o[r+1]}function be(e,n,{loop:o=!1,includeDisabled:t=!1}={}){const r=n==="prev"?Kn:In,i={reverse:n==="prev"};let d=!1,s=null;function a(l){if(l!==null){if(l===e){if(!d)d=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!l.disabled||t)&&!l.ignored&&!l.isGroup){s=l;return}if(l.isGroup){const u=he(l,i);u!==null?s=u:a(r(l,o))}else{const u=r(l,!1);if(u!==null)a(u);else{const f=Rn(l);f!=null&&f.isGroup?a(r(f,o)):o&&a(r(l,!0))}}}}return a(e),s}function Kn(e,n){const o=e.siblings,t=o.length,{index:r}=e;return n?o[(r-1+t)%t]:r===0?null:o[r-1]}function Rn(e){return e.parent}function he(e,n={}){const{reverse:o=!1}=n,{children:t}=e;if(t){const{length:r}=t,i=o?r-1:0,d=o?-1:r,s=o?-1:1;for(let a=i;a!==d;a+=s){const l=t[a];if(!l.disabled&&!l.ignored)if(l.isGroup){const u=he(l,n);if(u!==null)return u}else return l}}return null}const An={getChild(){return this.ignored?null:he(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return be(this,"next",e)},getPrev(e={}){return be(this,"prev",e)}};function Ln(e,n){const o=n?new Set(n):void 0,t=[];function r(i){i.forEach(d=>{t.push(d),!(d.isLeaf||!d.children||d.ignored)&&(d.isGroup||o===void 0||o.has(d.key))&&r(d.children)})}return r(e),t}function On(e,n){const o=e.key;for(;n;){if(n.key===o)return!0;n=n.parent}return!1}function Ke(e,n,o,t,r,i=null,d=0){const s=[];return e.forEach((a,l)=>{var u;const f=Object.create(t);if(f.rawNode=a,f.siblings=s,f.level=d,f.index=l,f.isFirstChild=l===0,f.isLastChild=l+1===e.length,f.parent=i,!f.ignored){const w=r(a);Array.isArray(w)&&(f.children=Ke(w,n,o,t,r,f,d+1))}s.push(f),n.set(f.key,f),o.has(d)||o.set(d,[]),(u=o.get(d))===null||u===void 0||u.push(f)}),s}function Tn(e,n={}){var o;const t=new Map,r=new Map,{getDisabled:i=yn,getIgnored:d=hn,getIsGroup:s=wn,getKey:a=pn}=n,l=(o=n.getChildren)!==null&&o!==void 0?o:fn,u=n.ignoreEmptyChildren?c=>{const p=l(c);return Array.isArray(p)?p.length?p:null:p}:l,f=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return cn(this.rawNode,u)},get shallowLoaded(){return vn(this.rawNode,u)},get ignored(){return d(this.rawNode)},contains(c){return On(this,c)}},An),w=Ke(e,t,r,f,u);function R(c){if(c==null)return null;const p=t.get(c);return p&&!p.isGroup&&!p.ignored?p:null}function b(c){if(c==null)return null;const p=t.get(c);return p&&!p.ignored?p:null}function O(c,p){const I=b(c);return I?I.getPrev(p):null}function P(c,p){const I=b(c);return I?I.getNext(p):null}function K(c){const p=b(c);return p?p.getParent():null}function F(c){const p=b(c);return p?p.getChild():null}const D={treeNodes:w,treeNodeMap:t,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(c){return Ln(w,c)},getNode:R,getPrev:O,getNext:P,getParent:K,getChild:F,getFirstAvailableNode(){return Nn(w)},getPath(c,p={}){return Pn(c,p,D)},getCheckedKeys(c,p={}){const{cascade:I=!0,leafOnly:T=!1,checkStrategy:L="all",allowNotLoaded:A=!1}=p;return se({checkedKeys:de(c),indeterminateKeys:ae(c),cascade:I,leafOnly:T,checkStrategy:L,allowNotLoaded:A},D)},check(c,p,I={}){const{cascade:T=!0,leafOnly:L=!1,checkStrategy:A="all",allowNotLoaded:x=!1}=I;return se({checkedKeys:de(p),indeterminateKeys:ae(p),keysToCheck:c==null?[]:me(c),cascade:T,leafOnly:L,checkStrategy:A,allowNotLoaded:x},D)},uncheck(c,p,I={}){const{cascade:T=!0,leafOnly:L=!1,checkStrategy:A="all",allowNotLoaded:x=!1}=I;return se({checkedKeys:de(p),indeterminateKeys:ae(p),keysToUncheck:c==null?[]:me(c),cascade:T,leafOnly:L,checkStrategy:A,allowNotLoaded:x},D)},getNonLeafKeys(c={}){return un(w,c)}};return D}const _n={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},Dn=e=>{const{primaryColor:n,textColor2:o,dividerColor:t,hoverColor:r,popoverColor:i,invertedColor:d,borderRadius:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:f,heightSmall:w,heightMedium:R,heightLarge:b,heightHuge:O,textColor3:P,opacityDisabled:K}=e;return Object.assign(Object.assign({},_n),{optionHeightSmall:w,optionHeightMedium:R,optionHeightLarge:b,optionHeightHuge:O,borderRadius:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:f,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:t,suffixColor:o,prefixColor:o,optionColorHover:r,optionColorActive:Xe(n,{alpha:.1}),groupHeaderTextColor:P,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:d,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:K})},zn=Ze({name:"Dropdown",common:Se,peers:{Popover:$e},self:Dn}),$n=zn,Re=H({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return h("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),En=e=>{const{textColorBase:n,opacity1:o,opacity2:t,opacity3:r,opacity4:i,opacity5:d}=e;return{color:n,opacity1Depth:o,opacity2Depth:t,opacity3Depth:r,opacity4Depth:i,opacity5Depth:d}},Fn={name:"Icon",common:Se,self:En},Bn=Fn,Mn=$("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[E("color-transition",{transition:"color .3s var(--n-bezier)"}),E("depth",{color:"var(--n-color)"},[G("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),G("svg",{height:"1em",width:"1em"})]),Hn=Object.assign(Object.assign({},oe.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),jn=H({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Hn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ke(e),t=oe("Icon","-icon",Mn,Bn,e,n),r=N(()=>{const{depth:d}=e,{common:{cubicBezierEaseInOut:s},self:a}=t.value;if(d!==void 0){const{color:l,[`opacity${d}Depth`]:u}=a;return{"--n-bezier":s,"--n-color":l,"--n-opacity":u}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=o?Ce("icon",N(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:N(()=>{const{size:d,color:s}=e;return{fontSize:Ee(d),color:s}}),cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:o,mergedClsPrefix:t,component:r,onRender:i,themeClass:d}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&Pe("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),h("i",fe(this.$attrs,{role:"img",class:[`${t}-icon`,d,{[`${t}-icon--depth`]:o,[`${t}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?h(r):this.$slots)}}),ve=pe("n-dropdown-menu"),te=pe("n-dropdown"),we=pe("n-dropdown-option");function ue(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Gn(e){return e.type==="group"}function Ae(e){return e.type==="divider"}function Wn(e){return e.type==="render"}const Le=H({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=Z(te),{hoverKeyRef:o,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:d,animatedRef:s,mergedShowRef:a,renderLabelRef:l,renderIconRef:u,labelFieldRef:f,childrenFieldRef:w,renderOptionRef:R,nodePropsRef:b,menuPropsRef:O}=n,P=Z(we,null),K=Z(ve),F=Z(Ne),D=N(()=>e.tmNode.rawNode),c=N(()=>{const{value:y}=w;return ue(e.tmNode.rawNode,y)}),p=N(()=>{const{disabled:y}=e.tmNode;return y}),I=N(()=>{if(!c.value)return!1;const{key:y,disabled:C}=e.tmNode;if(C)return!1;const{value:B}=o,{value:W}=t,{value:re}=r,{value:U}=i;return B!==null?U.includes(y):W!==null?U.includes(y)&&U[U.length-1]!==y:re!==null?U.includes(y):!1}),T=N(()=>t.value===null&&!s.value),L=an(I,300,T),A=N(()=>!!(P!=null&&P.enteringSubmenuRef.value)),x=q(!1);X(we,{enteringSubmenuRef:x});function z(){x.value=!0}function v(){x.value=!1}function k(){const{parentKey:y,tmNode:C}=e;C.disabled||a.value&&(r.value=y,t.value=null,o.value=C.key)}function m(){const{tmNode:y}=e;y.disabled||a.value&&o.value!==y.key&&k()}function g(y){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:C}=y;C&&!ge({target:C},"dropdownOption")&&!ge({target:C},"scrollbarRail")&&(o.value=null)}function _(){const{value:y}=c,{tmNode:C}=e;a.value&&!y&&!C.disabled&&(n.doSelect(C.key,C.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:l,renderIcon:u,siblingHasIcon:K.showIconRef,siblingHasSubmenu:K.hasSubmenuRef,menuProps:O,popoverBody:F,animated:s,mergedShowSubmenu:N(()=>L.value&&!A.value),rawNode:D,hasSubmenu:c,pending:Q(()=>{const{value:y}=i,{key:C}=e.tmNode;return y.includes(C)}),childActive:Q(()=>{const{value:y}=d,{key:C}=e.tmNode,B=y.findIndex(W=>C===W);return B===-1?!1:B<y.length-1}),active:Q(()=>{const{value:y}=d,{key:C}=e.tmNode,B=y.findIndex(W=>C===W);return B===-1?!1:B===y.length-1}),mergedDisabled:p,renderOption:R,nodeProps:b,handleClick:_,handleMouseMove:m,handleMouseEnter:k,handleMouseLeave:g,handleSubmenuBeforeEnter:z,handleSubmenuAfterEnter:v}},render(){var e,n;const{animated:o,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:d,siblingHasSubmenu:s,renderLabel:a,renderIcon:l,renderOption:u,nodeProps:f,props:w,scrollable:R}=this;let b=null;if(r){const F=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);b=h(Oe,Object.assign({},F,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const O={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},P=f==null?void 0:f(t),K=h("div",Object.assign({class:[`${i}-dropdown-option`,P==null?void 0:P.class],"data-dropdown-option":!0},P),h("div",fe(O,w),[h("div",{class:[`${i}-dropdown-option-body__prefix`,d&&`${i}-dropdown-option-body__prefix--show-icon`]},[l?l(t):ee(t.icon)]),h("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(t):ee((n=t[this.labelField])!==null&&n!==void 0?n:t.title)),h("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?h(jn,null,{default:()=>h(ln,null)}):null)]),this.hasSubmenu?h(Fe,null,{default:()=>[h(Be,null,{default:()=>h("div",{class:`${i}-dropdown-offset-container`},h(Me,{show:this.mergedShowSubmenu,placement:this.placement,to:R&&this.popoverBody||void 0,teleportDisabled:!R},{default:()=>h("div",{class:`${i}-dropdown-menu-wrapper`},o?h(Ye,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>b}):b)}))})]}):null);return u?u({node:K,option:t}):K}}),Un=H({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=Z(ve),{renderLabelRef:o,labelFieldRef:t,nodePropsRef:r,renderOptionRef:i}=Z(te);return{labelField:t,showIcon:e,hasSubmenu:n,renderLabel:o,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:o,showIcon:t,nodeProps:r,renderLabel:i,renderOption:d}=this,{rawNode:s}=this.tmNode,a=h("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),h("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},h("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,t&&`${n}-dropdown-option-body__prefix--show-icon`]},ee(s.icon)),h("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ee((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),h("div",{class:[`${n}-dropdown-option-body__suffix`,o&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:s}):a}}),Vn=H({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:o}=this,{children:t}=e;return h(Je,null,h(Un,{clsPrefix:o,tmNode:e,key:e.key}),t==null?void 0:t.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Ae(i)?h(Re,{clsPrefix:o,key:r.key}):r.isGroup?(Pe("dropdown","`group` node is not allowed to be put in `group` node."),null):h(Le,{clsPrefix:o,tmNode:r,parentKey:n,key:r.key})}))}}),qn=H({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return h("div",n,[e==null?void 0:e()])}}),Oe=H({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:o}=Z(te);X(ve,{showIconRef:N(()=>{const r=n.value;return e.tmNodes.some(i=>{var d;if(i.isGroup)return(d=i.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:N(()=>{const{value:r}=o;return e.tmNodes.some(i=>{var d;if(i.isGroup)return(d=i.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>ue(a,r));const{rawNode:s}=i;return ue(s,r)})})});const t=q(null);return X(Qe,null),X(en,null),X(Ne,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:n,scrollable:o}=this,t=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Wn(i)?h(qn,{tmNode:r,key:r.key}):Ae(i)?h(Re,{clsPrefix:n,key:r.key}):Gn(i)?h(Vn,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):h(Le,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:o})});return h("div",{class:[`${n}-dropdown-menu`,o&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},o?h(nn,{contentClass:`${n}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?He({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),Zn=$("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[on(),$("dropdown-option",`
 position: relative;
 `,[G("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[G("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),$("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[G("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ye("disabled",[E("pending",`
 color: var(--n-option-text-color-hover);
 `,[j("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),G("&::before","background-color: var(--n-option-color-hover);")]),E("active",`
 color: var(--n-option-text-color-active);
 `,[j("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),G("&::before","background-color: var(--n-option-color-active);")]),E("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[j("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),E("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),E("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[j("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[E("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),j("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[E("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),$("icon",`
 font-size: var(--n-option-icon-size);
 `)]),j("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),j("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[E("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),$("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("dropdown-menu","pointer-events: all;")]),$("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),$("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),$("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),G(">",[$("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ye("scrollable",`
 padding: var(--n-padding);
 `),E("scrollable",[j("content",`
 padding: var(--n-padding);
 `)])]),Xn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Yn=Object.keys(xe),Jn=Object.assign(Object.assign(Object.assign({},xe),Xn),oe.props),to=H({name:"Dropdown",inheritAttrs:!1,props:Jn,setup(e){const n=q(!1),o=rn(M(e,"show"),n),t=N(()=>{const{keyField:v,childrenField:k}=e;return Tn(e.options,{getKey(m){return m[v]},getDisabled(m){return m.disabled===!0},getIgnored(m){return m.type==="divider"||m.type==="render"},getChildren(m){return m[k]}})}),r=N(()=>t.value.treeNodes),i=q(null),d=q(null),s=q(null),a=N(()=>{var v,k,m;return(m=(k=(v=i.value)!==null&&v!==void 0?v:d.value)!==null&&k!==void 0?k:s.value)!==null&&m!==void 0?m:null}),l=N(()=>t.value.getPath(a.value).keyPath),u=N(()=>t.value.getPath(e.value).keyPath),f=Q(()=>e.keyboard&&o.value);sn({keydown:{ArrowUp:{prevent:!0,handler:p},ArrowRight:{prevent:!0,handler:c},ArrowDown:{prevent:!0,handler:I},ArrowLeft:{prevent:!0,handler:D},Enter:{prevent:!0,handler:T},Escape:F}},f);const{mergedClsPrefixRef:w,inlineThemeDisabled:R}=ke(e),b=oe("Dropdown","-dropdown",Zn,$n,e,w);X(te,{labelFieldRef:M(e,"labelField"),childrenFieldRef:M(e,"childrenField"),renderLabelRef:M(e,"renderLabel"),renderIconRef:M(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:d,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:l,activeKeyPathRef:u,animatedRef:M(e,"animated"),mergedShowRef:o,nodePropsRef:M(e,"nodeProps"),renderOptionRef:M(e,"renderOption"),menuPropsRef:M(e,"menuProps"),doSelect:O,doUpdateShow:P}),ce(o,v=>{!e.animated&&!v&&K()});function O(v,k){const{onSelect:m}=e;m&&ie(m,v,k)}function P(v){const{"onUpdate:show":k,onUpdateShow:m}=e;k&&ie(k,v),m&&ie(m,v),n.value=v}function K(){i.value=null,d.value=null,s.value=null}function F(){P(!1)}function D(){A("left")}function c(){A("right")}function p(){A("up")}function I(){A("down")}function T(){const v=L();v!=null&&v.isLeaf&&o.value&&(O(v.key,v.rawNode),P(!1))}function L(){var v;const{value:k}=t,{value:m}=a;return!k||m===null?null:(v=k.getNode(m))!==null&&v!==void 0?v:null}function A(v){const{value:k}=a,{value:{getFirstAvailableNode:m}}=t;let g=null;if(k===null){const _=m();_!==null&&(g=_.key)}else{const _=L();if(_){let y;switch(v){case"down":y=_.getNext();break;case"up":y=_.getPrev();break;case"right":y=_.getChild();break;case"left":y=_.getParent();break}y&&(g=y.key)}}g!==null&&(i.value=null,d.value=g)}const x=N(()=>{const{size:v,inverted:k}=e,{common:{cubicBezierEaseInOut:m},self:g}=b.value,{padding:_,dividerColor:y,borderRadius:C,optionOpacityDisabled:B,[V("optionIconSuffixWidth",v)]:W,[V("optionSuffixWidth",v)]:re,[V("optionIconPrefixWidth",v)]:U,[V("optionPrefixWidth",v)]:Te,[V("fontSize",v)]:_e,[V("optionHeight",v)]:De,[V("optionIconSize",v)]:ze}=g,S={"--n-bezier":m,"--n-font-size":_e,"--n-padding":_,"--n-border-radius":C,"--n-option-height":De,"--n-option-prefix-width":Te,"--n-option-icon-prefix-width":U,"--n-option-suffix-width":re,"--n-option-icon-suffix-width":W,"--n-option-icon-size":ze,"--n-divider-color":y,"--n-option-opacity-disabled":B};return k?(S["--n-color"]=g.colorInverted,S["--n-option-color-hover"]=g.optionColorHoverInverted,S["--n-option-color-active"]=g.optionColorActiveInverted,S["--n-option-text-color"]=g.optionTextColorInverted,S["--n-option-text-color-hover"]=g.optionTextColorHoverInverted,S["--n-option-text-color-active"]=g.optionTextColorActiveInverted,S["--n-option-text-color-child-active"]=g.optionTextColorChildActiveInverted,S["--n-prefix-color"]=g.prefixColorInverted,S["--n-suffix-color"]=g.suffixColorInverted,S["--n-group-header-text-color"]=g.groupHeaderTextColorInverted):(S["--n-color"]=g.color,S["--n-option-color-hover"]=g.optionColorHover,S["--n-option-color-active"]=g.optionColorActive,S["--n-option-text-color"]=g.optionTextColor,S["--n-option-text-color-hover"]=g.optionTextColorHover,S["--n-option-text-color-active"]=g.optionTextColorActive,S["--n-option-text-color-child-active"]=g.optionTextColorChildActive,S["--n-prefix-color"]=g.prefixColor,S["--n-suffix-color"]=g.suffixColor,S["--n-group-header-text-color"]=g.groupHeaderTextColor),S}),z=R?Ce("dropdown",N(()=>`${e.size[0]}${e.inverted?"i":""}`),x,e):void 0;return{mergedClsPrefix:w,mergedTheme:b,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&K()},doUpdateShow:P,cssVars:R?void 0:x,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const e=(t,r,i,d,s)=>{var a;const{mergedClsPrefix:l,menuProps:u}=this;(a=this.onRender)===null||a===void 0||a.call(this);const f=(u==null?void 0:u(void 0,this.tmNodes.map(R=>R.rawNode)))||{},w={ref:dn(r),class:[t,`${l}-dropdown`,this.themeClass],clsPrefix:l,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:s};return h(Oe,fe(this.$attrs,w,f))},{mergedTheme:n}=this,o={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return h(je,Object.assign({},tn(this.$props,Yn),o),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{ln as C,jn as N,to as a,oo as b,Tn as c,$n as d,dn as e,ge as h};
