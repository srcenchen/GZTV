import{r,o as f}from"./index-184e6fdf.js";function i(t){return typeof t=="function"}const S=t=>{const e=d(t.state),s=typeof t.defaultState>"u"?t.initialState:t.defaultState,[c,l]=r.useState(s),a=e?t.state:c,n=r.useRef(a);r.useEffect(()=>{n.current=a},[a]);const o=r.useCallback(u=>{i(u)?n.current=u(n.current):n.current=u,l(n.current)},[]);return[a,o]},d=t=>{const[e]=r.useState(()=>t!==void 0);return e},b=t=>{const e=r.useRef(()=>{throw new Error("Cannot call an event handler while rendering")});return f(()=>{e.current=t},[t]),r.useCallback((...s)=>{const c=e.current;return c(...s)},[e])};export{S as a,b as u};
