import{b,r as o,t as y,K as l,v as p,F as v}from"./index-229d3f21.js";import{u as L}from"./useTabsterAttributes-056b7130.js";const k=()=>{const t=L(),{targetDocument:e}=b(),r=o.useCallback((n,i)=>(t==null?void 0:t.focusable.findAll({container:n,acceptCondition:i}))||[],[t]),u=o.useCallback(n=>t==null?void 0:t.focusable.findFirst({container:n}),[t]),a=o.useCallback(n=>t==null?void 0:t.focusable.findLast({container:n}),[t]),s=o.useCallback((n,i={})=>{if(!t||!e)return null;const{container:c=e.body}=i;return t.focusable.findNext({currentElement:n,container:c})},[t,e]),F=o.useCallback((n,i={})=>{if(!t||!e)return null;const{container:c=e.body}=i;return t.focusable.findPrev({currentElement:n,container:c})},[t,e]);return{findAllFocusable:r,findFirstFocusable:u,findLastFocusable:a,findNextFocusable:s,findPrevFocusable:F}};function C(t,e){const r=y(e);r.subscribe(s=>{s||f(t)});const u=s=>{r.isNavigatingWithKeyboard()&&d(s.target)&&g(t)},a=s=>{(!s.relatedTarget||d(s.relatedTarget)&&!t.contains(s.relatedTarget))&&f(t)};return t.addEventListener(l,u),t.addEventListener("focusout",a),()=>{t.removeEventListener(l,u),t.removeEventListener("focusout",a),p(r)}}function g(t){t.setAttribute(v,"")}function f(t){t.removeAttribute(v)}function d(t){return t?!!(t&&typeof t=="object"&&"classList"in t&&"contains"in t):!1}function W(){const{targetDocument:t}=b(),e=o.useRef(null);return o.useEffect(()=>{if(t!=null&&t.defaultView&&e.current)return C(e.current,t.defaultView)},[e,t]),e}export{W as a,k as u};