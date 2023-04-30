import{g as y,r as l,m,e as x,R as b,j as s}from"./index-ab6327af.js";import{a as g}from"./axios-345d0e8d.js";import{a as w}from"./useFieldControlProps-a945643b.js";import{r as j}from"./resolveShorthand-331be274.js";import{g as N,_ as h}from"./getSlots-cf716d81.js";import{B as q,M as v}from"./index-db32171d.js";import{T as z}from"./Title2-1f202403.js";import{T as R}from"./Textarea-9ae0f7cb.js";import"./useEventCallback-9d4fa581.js";import"./__resetStyles.esm-44af7e79.js";import"./createPreset-bd7079cf.js";import"./useTextStyles-9017f7a8.js";const S=e=>e<=0?1:e,P=(e,a)=>e===void 0?e:e<0?0:e>a?a:e,M=(e,a)=>{const r=w(),o=r==null?void 0:r.validationState,{color:t=o==="error"||o==="warning"||o==="success"?o:"brand",shape:i="rounded",thickness:d="medium"}=e;var n;const u=S((n=e.max)!==null&&n!==void 0?n:1),f=P(e.value,u),c=y("div",{ref:a,role:"progressbar","aria-valuemin":f!==void 0?0:void 0,"aria-valuemax":f!==void 0?u:void 0,"aria-valuenow":f,"aria-labelledby":r==null?void 0:r.labelId,...e});r&&(r.validationMessageId||r.hintId)&&(c["aria-describedby"]=[r==null?void 0:r.validationMessageId,r==null?void 0:r.hintId,c["aria-describedby"]].filter(Boolean).join(" "));const B=j(e.bar,{required:!0});return{color:t,max:u,shape:i,thickness:d,value:f,components:{root:"div",bar:"div"},root:c,bar:B}},_=e=>{const{slots:a,slotProps:r}=N(e);return l.createElement(a.root,r.root,a.bar&&l.createElement(a.bar,r.bar))},p={root:"fui-ProgressBar",bar:"fui-ProgressBar__bar"},D=.01,C=h({root:{mc9l5x:"ftgm304",De3pzq:"f18f03hv",a9b677:"fly5x3f",B68tc82:"f1p9o1ba",Bmxbyg5:"f1sil6mw",Bpep1pd:"fu42dvn"},rounded:{Bbmb7ep:["f1aa9q02","f16jpd5f"],Beyfa6y:["f16jpd5f","f1aa9q02"],B7oj6ja:["f1jar5jt","fyu767a"],Btl43ni:["fyu767a","f1jar5jt"]},square:{Bbmb7ep:["fzi6hpg","fyowgf4"],Beyfa6y:["fyowgf4","fzi6hpg"],B7oj6ja:["f3fg2lr","f13av6d4"],Btl43ni:["f13av6d4","f3fg2lr"]},medium:{Bqenvij:"f4t8t6x"},large:{Bqenvij:"f6ywr7j"}},{d:[".ftgm304{display:block;}",".f18f03hv{background-color:var(--colorNeutralBackground6);}",".fly5x3f{width:100%;}",".f1p9o1ba{overflow-x:hidden;}",".f1sil6mw{overflow-y:hidden;}",".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}",".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}",".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}",".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}",".fzi6hpg{border-bottom-right-radius:var(--borderRadiusNone);}",".fyowgf4{border-bottom-left-radius:var(--borderRadiusNone);}",".f3fg2lr{border-top-right-radius:var(--borderRadiusNone);}",".f13av6d4{border-top-left-radius:var(--borderRadiusNone);}",".f4t8t6x{height:2px;}",".f6ywr7j{height:4px;}"],m:[["@media screen and (forced-colors: active){.fu42dvn{background-color:CanvasText;}}",{m:"screen and (forced-colors: active)"}]]}),E=h({base:{Bpep1pd:"f1neahkh",Bbmb7ep:["f1d9uwra","fzibvwi"],Beyfa6y:["fzibvwi","f1d9uwra"],B7oj6ja:["fuoumxm","f1vtqnvc"],Btl43ni:["f1vtqnvc","fuoumxm"],Bqenvij:"f1l02sjl"},nonZeroDeterminate:{Bmy1vo4:"fjt6zfz",B3o57yi:"f1wofebd",Bkqvd7p:"fv71qf3"},indeterminate:{B2u0y6b:"fa0wk36",qhf8xq:"f10pi13n",Bcmaq0h:["fpo0yib","f1u5hf6c"],Bv12yb3:["fwd2bol","f14gig94"],vin17d:"f1a27w2r",Ezkn3b:"f452v7t",w3vfg9:"f1cpbl36",Gqtpxc:"f4akx1t",B3vm3ge:"f18p5put"},brand:{De3pzq:"ftywsgz"},error:{De3pzq:"fdl5y0r"},warning:{De3pzq:"f1s438gw"},success:{De3pzq:"flxk52p"}},{m:[["@media screen and (forced-colors: active){.f1neahkh{background-color:Highlight;}}",{m:"screen and (forced-colors: active)"}],["@media screen and (prefers-reduced-motion: reduce){.f4akx1t{-webkit-animation-duration:0.01ms;animation-duration:0.01ms;}}",{m:"screen and (prefers-reduced-motion: reduce)"}],["@media screen and (prefers-reduced-motion: reduce){.f18p5put{-webkit-animation-iteration-count:1;animation-iteration-count:1;}}",{m:"screen and (prefers-reduced-motion: reduce)"}]],d:[".f1d9uwra{border-bottom-right-radius:inherit;}",".fzibvwi{border-bottom-left-radius:inherit;}",".fuoumxm{border-top-right-radius:inherit;}",".f1vtqnvc{border-top-left-radius:inherit;}",".f1l02sjl{height:100%;}",".fjt6zfz{transition-property:width;}",".f1wofebd{transition-duration:0.3s;}",".fv71qf3{transition-timing-function:ease;}",".fa0wk36{max-width:33%;}",".f10pi13n{position:relative;}",`.fpo0yib{background-image:linear-gradient(
      to right,
      var(--colorNeutralBackground6) 0%,
      var(--colorTransparentBackground) 50%,
      var(--colorNeutralBackground6) 100%
    );}`,`.f1u5hf6c{background-image:linear-gradient(
      to left,
      var(--colorNeutralBackground6) 0%,
      var(--colorTransparentBackground) 50%,
      var(--colorNeutralBackground6) 100%
    );}`,".fwd2bol{-webkit-animation-name:f1keuaan;animation-name:f1keuaan;}",".f14gig94{-webkit-animation-name:f10x8f8u;animation-name:f10x8f8u;}",".f1a27w2r{-webkit-animation-duration:3s;animation-duration:3s;}",".f452v7t{-webkit-animation-timing-function:linear;animation-timing-function:linear;}",".f1cpbl36{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}",".ftywsgz{background-color:var(--colorCompoundBrandBackground);}",".fdl5y0r{background-color:var(--colorPaletteRedBackground3);}",".f1s438gw{background-color:var(--colorPaletteDarkOrangeBackground3);}",".flxk52p{background-color:var(--colorPaletteGreenBackground3);}"],k:["@-webkit-keyframes f1keuaan{0%{left:-33%;}100%{left:100%;}}","@-webkit-keyframes f10x8f8u{0%{right:-33%;}100%{right:100%;}}","@keyframes f1keuaan{0%{left:-33%;}100%{left:100%;}}","@keyframes f10x8f8u{0%{right:-33%;}100%{right:100%;}}"]}),T=e=>{const{color:a,max:r,shape:o,thickness:t,value:i}=e,d=C(),n=E();return e.root.className=m(p.root,d.root,d[o],d[t],e.root.className),e.bar&&(e.bar.className=m(p.bar,n.base,n.brand,i===void 0&&n.indeterminate,i!==void 0&&i>D&&n.nonZeroDeterminate,a&&i!==void 0&&n[a],e.bar.className)),e.bar&&i!==void 0&&(e.bar.style={width:Math.min(100,Math.max(0,i/r*100))+"%",...e.bar.style}),e},k=l.forwardRef((e,a)=>{const r=M(e,a);T(r);const{useProgressBarStyles_unstable:o}=x();return o(r),_(r)});k.displayName="ProgressBar";function W(){const[e,a]=b.useState(""),[r,o]=b.useState(!0);return l.useEffect(()=>{g.get("/api/getNotice").then(t=>{a(t.data.Value),o(!1)})},[]),s.jsxs("div",{className:"flex flex-col justify-center ml-2",children:[s.jsx(z,{className:"mb-2",children:"公告管理"}),s.jsx("div",{className:"flex flex-col mt-4",children:r?s.jsx(k,{}):s.jsx(R,{size:"large",value:e,onChange:t=>a(t.target.value)})}),s.jsx("div",{className:"mt-2"}),s.jsx(q,{className:"w-0",onClick:()=>{g.get("/api/updateNotice?content="+e).then(t=>{t.data.result?v.success("修改成功"):v.error("修改失败")})},children:"保存"})]})}export{W as default};
