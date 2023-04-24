import{t as i,x as s,q as u,e as f,_ as l}from"./useGlobalIcon-6f4b87c8.js";import{R as p}from"./index-184e6fdf.js";/**
 * tdesign v1.1.3
 * (c) 2023 tdesign
 * @license MIT
 */function y(n){if(Array.isArray(n))return s(n)}function b(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(n){return y(n)||b(n)||i(n)||O()}/**
 * tdesign v1.1.3
 * (c) 2023 tdesign
 * @license MIT
 */var o=new Set,m={warn:function(e,r){console.warn("TDesign ".concat(e," Warn: ").concat(r))},warnOnce:function(e,r){var t="TDesign ".concat(e," Warn: ").concat(r);o.has(t)||(o.add(t),console.warn(t))},error:function(e,r){console.error("TDesign ".concat(e," Error: ").concat(r))},errorOnce:function(e,r){var t="TDesign ".concat(e," Error: ").concat(r);o.has(t)||(o.add(t),console.error(t))},info:function(e,r){console.info("TDesign ".concat(e," Info: ").concat(r))}};/**
 * tdesign v1.1.3
 * (c) 2023 tdesign
 * @license MIT
 */function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),r.push.apply(r,t)}return r}function g(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?a(Object(r),!0).forEach(function(t){l(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function _(n,e,r){var t=null;return typeof n=="function"?t=n(e):n===!0?t=r:t=n??r,t}function h(n,e){if(u(n))return n(e);if(!n||["string","number","boolean"].includes(f(n)))return n;try{return p.cloneElement(n,g({},e))}catch{return m.warn("parseContentTNode","".concat(n," is not a valid ReactNode")),null}}export{T as _,h as a,b,m as l,_ as p};
