import{r as ct,u as at,b as wt,c as ft,d as z,L as lt,f as tt,w as pt,_ as mt,e as At}from"./index-e71e6abe.js";import{a as Nt}from"./axios-aba6f0e0.js";import{_ as It}from"./Input-f2a65a52.js";import"./use-locale-54d5474b.js";const et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function V(i,t,n,e){let s,r,h;const w=t||[0],c=(n=n||0)>>>3,a=e===-1?3:0;for(s=0;s<i.length;s+=1)h=s+c,r=h>>>2,w.length<=r&&w.push(0),w[r]|=i[s]<<8*(a+e*(h%4));return{value:w,binLen:8*i.length+n}}function T(i,t,n){switch(t){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(i){case"HEX":return function(e,s,r){return function(h,w,c,a){let p,f,u,A;if(h.length%2!=0)throw new Error("String of HEX type must be in byte increments");const m=w||[0],N=(c=c||0)>>>3,I=a===-1?3:0;for(p=0;p<h.length;p+=2){if(f=parseInt(h.substr(p,2),16),isNaN(f))throw new Error("String of HEX type contains invalid characters");for(A=(p>>>1)+N,u=A>>>2;m.length<=u;)m.push(0);m[u]|=f<<8*(I+a*(A%4))}return{value:m,binLen:4*h.length+c}}(e,s,r,n)};case"TEXT":return function(e,s,r){return function(h,w,c,a,p){let f,u,A,m,N,I,d,R,v=0;const E=c||[0],b=(a=a||0)>>>3;if(w==="UTF8")for(d=p===-1?3:0,A=0;A<h.length;A+=1)for(f=h.charCodeAt(A),u=[],128>f?u.push(f):2048>f?(u.push(192|f>>>6),u.push(128|63&f)):55296>f||57344<=f?u.push(224|f>>>12,128|f>>>6&63,128|63&f):(A+=1,f=65536+((1023&f)<<10|1023&h.charCodeAt(A)),u.push(240|f>>>18,128|f>>>12&63,128|f>>>6&63,128|63&f)),m=0;m<u.length;m+=1){for(I=v+b,N=I>>>2;E.length<=N;)E.push(0);E[N]|=u[m]<<8*(d+p*(I%4)),v+=1}else for(d=p===-1?2:0,R=w==="UTF16LE"&&p!==1||w!=="UTF16LE"&&p===1,A=0;A<h.length;A+=1){for(f=h.charCodeAt(A),R===!0&&(m=255&f,f=m<<8|f>>>8),I=v+b,N=I>>>2;E.length<=N;)E.push(0);E[N]|=f<<8*(d+p*(I%4)),v+=2}return{value:E,binLen:8*v+a}}(e,t,s,r,n)};case"B64":return function(e,s,r){return function(h,w,c,a){let p,f,u,A,m,N,I,d=0;const R=w||[0],v=(c=c||0)>>>3,E=a===-1?3:0,b=h.indexOf("=");if(h.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(h=h.replace(/=/g,""),b!==-1&&b<h.length)throw new Error("Invalid '=' found in base-64 string");for(f=0;f<h.length;f+=4){for(m=h.substr(f,4),A=0,u=0;u<m.length;u+=1)p=et.indexOf(m.charAt(u)),A|=p<<18-6*u;for(u=0;u<m.length-1;u+=1){for(I=d+v,N=I>>>2;R.length<=N;)R.push(0);R[N]|=(A>>>16-8*u&255)<<8*(E+a*(I%4)),d+=1}}return{value:R,binLen:8*d+c}}(e,s,r,n)};case"BYTES":return function(e,s,r){return function(h,w,c,a){let p,f,u,A;const m=w||[0],N=(c=c||0)>>>3,I=a===-1?3:0;for(f=0;f<h.length;f+=1)p=h.charCodeAt(f),A=f+N,u=A>>>2,m.length<=u&&m.push(0),m[u]|=p<<8*(I+a*(A%4));return{value:m,binLen:8*h.length+c}}(e,s,r,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(e,s,r){return function(h,w,c,a){return V(new Uint8Array(h),w,c,a)}(e,s,r,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(e,s,r){return V(e,s,r,n)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function j(i,t,n,e){switch(i){case"HEX":return function(s){return function(r,h,w,c){const a="0123456789abcdef";let p,f,u="";const A=h/8,m=w===-1?3:0;for(p=0;p<A;p+=1)f=r[p>>>2]>>>8*(m+w*(p%4)),u+=a.charAt(f>>>4&15)+a.charAt(15&f);return c.outputUpper?u.toUpperCase():u}(s,t,n,e)};case"B64":return function(s){return function(r,h,w,c){let a,p,f,u,A,m="";const N=h/8,I=w===-1?3:0;for(a=0;a<N;a+=3)for(u=a+1<N?r[a+1>>>2]:0,A=a+2<N?r[a+2>>>2]:0,f=(r[a>>>2]>>>8*(I+w*(a%4))&255)<<16|(u>>>8*(I+w*((a+1)%4))&255)<<8|A>>>8*(I+w*((a+2)%4))&255,p=0;p<4;p+=1)m+=8*a+6*p<=h?et.charAt(f>>>6*(3-p)&63):c.b64Pad;return m}(s,t,n,e)};case"BYTES":return function(s){return function(r,h,w){let c,a,p="";const f=h/8,u=w===-1?3:0;for(c=0;c<f;c+=1)a=r[c>>>2]>>>8*(u+w*(c%4))&255,p+=String.fromCharCode(a);return p}(s,t,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(s){return function(r,h,w){let c;const a=h/8,p=new ArrayBuffer(a),f=new Uint8Array(p),u=w===-1?3:0;for(c=0;c<a;c+=1)f[c]=r[c>>>2]>>>8*(u+w*(c%4))&255;return p}(s,t,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(s){return function(r,h,w){let c;const a=h/8,p=w===-1?3:0,f=new Uint8Array(a);for(c=0;c<a;c+=1)f[c]=r[c>>>2]>>>8*(p+w*(c%4))&255;return f}(s,t,n)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}const l=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],S=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],K=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],B="Chosen SHA variant is not supported";function x(i,t){let n,e;const s=i.binLen>>>3,r=t.binLen>>>3,h=s<<3,w=4-s<<3;if(s%4!=0){for(n=0;n<r;n+=4)e=s+n>>>2,i.value[e]|=t.value[n>>>2]<<h,i.value.push(0),i.value[e+1]|=t.value[n>>>2]>>>w;return(i.value.length<<2)-4>=r+s&&i.value.pop(),{value:i.value,binLen:i.binLen+t.binLen}}return{value:i.value.concat(t.value),binLen:i.binLen+t.binLen}}function Z(i){const t={outputUpper:!1,b64Pad:"=",outputLen:-1},n=i||{},e="Output length must be a multiple of 8";if(t.outputUpper=n.outputUpper||!1,n.b64Pad&&(t.b64Pad=n.b64Pad),n.outputLen){if(n.outputLen%8!=0)throw new Error(e);t.outputLen=n.outputLen}else if(n.shakeLen){if(n.shakeLen%8!=0)throw new Error(e);t.outputLen=n.shakeLen}if(typeof t.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof t.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return t}function U(i,t,n,e){const s=i+" must include a value and format";if(!t){if(!e)throw new Error(s);return e}if(t.value===void 0||!t.format)throw new Error(s);return T(t.format,t.encoding||"UTF8",n)(t.value)}class P{constructor(t,n,e){const s=e||{};if(this.t=n,this.i=s.encoding||"UTF8",this.numRounds=s.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=t,this.h=[],this.u=0,this.l=!1,this.A=0,this.H=!1,this.S=[],this.p=[]}update(t){let n,e=0;const s=this.m>>>5,r=this.C(t,this.h,this.u),h=r.binLen,w=r.value,c=h>>>5;for(n=0;n<c;n+=s)e+this.m<=h&&(this.R=this.U(w.slice(n,n+s),this.R),e+=this.m);return this.A+=e,this.h=w.slice(e>>>5),this.u=h%this.m,this.l=!0,this}getHash(t,n){let e,s,r=this.v;const h=Z(n);if(this.K){if(h.outputLen===-1)throw new Error("Output length must be specified in options");r=h.outputLen}const w=j(t,r,this.T,h);if(this.H&&this.F)return w(this.F(h));for(s=this.g(this.h.slice(),this.u,this.A,this.B(this.R),r),e=1;e<this.numRounds;e+=1)this.K&&r%32!=0&&(s[s.length-1]&=16777215>>>24-r%32),s=this.g(s,r,0,this.L(this.o),r);return w(s)}setHMACKey(t,n,e){if(!this.M)throw new Error("Variant does not support HMAC");if(this.l)throw new Error("Cannot set MAC key after calling update");const s=T(n,(e||{}).encoding||"UTF8",this.T);this.k(s(t))}k(t){const n=this.m>>>3,e=n/4-1;let s;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.H)throw new Error("MAC key already set");for(n<t.binLen/8&&(t.value=this.g(t.value,t.binLen,0,this.L(this.o),this.v));t.value.length<=e;)t.value.push(0);for(s=0;s<=e;s+=1)this.S[s]=909522486^t.value[s],this.p[s]=1549556828^t.value[s];this.R=this.U(this.S,this.R),this.A=this.m,this.H=!0}getHMAC(t,n){const e=Z(n);return j(t,this.v,this.T,e)(this.Y())}Y(){let t;if(!this.H)throw new Error("Cannot call getHMAC without first setting MAC key");const n=this.g(this.h.slice(),this.u,this.A,this.B(this.R),this.v);return t=this.U(this.p,this.L(this.o)),t=this.g(n,this.v,this.m,t,this.v),t}}function C(i,t){return i<<t|i>>>32-t}function L(i,t){return i>>>t|i<<32-t}function nt(i,t){return i>>>t}function q(i,t,n){return i^t^n}function st(i,t,n){return i&t^~i&n}function it(i,t,n){return i&t^i&n^t&n}function dt(i){return L(i,2)^L(i,13)^L(i,22)}function g(i,t){const n=(65535&i)+(65535&t);return(65535&(i>>>16)+(t>>>16)+(n>>>16))<<16|65535&n}function vt(i,t,n,e){const s=(65535&i)+(65535&t)+(65535&n)+(65535&e);return(65535&(i>>>16)+(t>>>16)+(n>>>16)+(e>>>16)+(s>>>16))<<16|65535&s}function M(i,t,n,e,s){const r=(65535&i)+(65535&t)+(65535&n)+(65535&e)+(65535&s);return(65535&(i>>>16)+(t>>>16)+(n>>>16)+(e>>>16)+(s>>>16)+(r>>>16))<<16|65535&r}function gt(i){return L(i,7)^L(i,18)^nt(i,3)}function Et(i){return L(i,6)^L(i,11)^L(i,25)}function bt(i){return[1732584193,4023233417,2562383102,271733878,3285377520]}function ot(i,t){let n,e,s,r,h,w,c;const a=[];for(n=t[0],e=t[1],s=t[2],r=t[3],h=t[4],c=0;c<80;c+=1)a[c]=c<16?i[c]:C(a[c-3]^a[c-8]^a[c-14]^a[c-16],1),w=c<20?M(C(n,5),st(e,s,r),h,1518500249,a[c]):c<40?M(C(n,5),q(e,s,r),h,1859775393,a[c]):c<60?M(C(n,5),it(e,s,r),h,2400959708,a[c]):M(C(n,5),q(e,s,r),h,3395469782,a[c]),h=r,r=s,s=C(e,30),e=n,n=w;return t[0]=g(n,t[0]),t[1]=g(e,t[1]),t[2]=g(s,t[2]),t[3]=g(r,t[3]),t[4]=g(h,t[4]),t}function Ht(i,t,n,e){let s;const r=15+(t+65>>>9<<4),h=t+n;for(;i.length<=r;)i.push(0);for(i[t>>>5]|=128<<24-t%32,i[r]=4294967295&h,i[r-1]=h/4294967296|0,s=0;s<i.length;s+=16)e=ot(i.slice(s,s+16),e);return e}class Rt extends P{constructor(t,n,e){if(t!=="SHA-1")throw new Error(B);super(t,n,e);const s=e||{};this.M=!0,this.F=this.Y,this.T=-1,this.C=T(this.t,this.i,this.T),this.U=ot,this.B=function(r){return r.slice()},this.L=bt,this.g=Ht,this.R=[1732584193,4023233417,2562383102,271733878,3285377520],this.m=512,this.v=160,this.K=!1,s.hmacKey&&this.k(U("hmacKey",s.hmacKey,this.T))}}function D(i){let t;return t=i=="SHA-224"?S.slice():K.slice(),t}function G(i,t){let n,e,s,r,h,w,c,a,p,f,u;const A=[];for(n=t[0],e=t[1],s=t[2],r=t[3],h=t[4],w=t[5],c=t[6],a=t[7],u=0;u<64;u+=1)A[u]=u<16?i[u]:vt(L(m=A[u-2],17)^L(m,19)^nt(m,10),A[u-7],gt(A[u-15]),A[u-16]),p=M(a,Et(h),st(h,w,c),l[u],A[u]),f=g(dt(n),it(n,e,s)),a=c,c=w,w=h,h=g(r,p),r=s,s=e,e=n,n=g(p,f);var m;return t[0]=g(n,t[0]),t[1]=g(e,t[1]),t[2]=g(s,t[2]),t[3]=g(r,t[3]),t[4]=g(h,t[4]),t[5]=g(w,t[5]),t[6]=g(c,t[6]),t[7]=g(a,t[7]),t}class Lt extends P{constructor(t,n,e){if(t!=="SHA-224"&&t!=="SHA-256")throw new Error(B);super(t,n,e);const s=e||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=T(this.t,this.i,this.T),this.U=G,this.B=function(r){return r.slice()},this.L=D,this.g=function(r,h,w,c){return function(a,p,f,u,A){let m,N;const I=15+(p+65>>>9<<4),d=p+f;for(;a.length<=I;)a.push(0);for(a[p>>>5]|=128<<24-p%32,a[I]=4294967295&d,a[I-1]=d/4294967296|0,m=0;m<a.length;m+=16)u=G(a.slice(m,m+16),u);return N=A==="SHA-224"?[u[0],u[1],u[2],u[3],u[4],u[5],u[6]]:u,N}(r,h,w,c,t)},this.R=D(t),this.m=512,this.v=t==="SHA-224"?224:256,this.K=!1,s.hmacKey&&this.k(U("hmacKey",s.hmacKey,this.T))}}class o{constructor(t,n){this.N=t,this.I=n}}function J(i,t){let n;return t>32?(n=64-t,new o(i.I<<t|i.N>>>n,i.N<<t|i.I>>>n)):t!==0?(n=32-t,new o(i.N<<t|i.I>>>n,i.I<<t|i.N>>>n)):i}function y(i,t){let n;return t<32?(n=32-t,new o(i.N>>>t|i.I<<n,i.I>>>t|i.N<<n)):(n=64-t,new o(i.I>>>t|i.N<<n,i.N>>>t|i.I<<n))}function rt(i,t){return new o(i.N>>>t,i.I>>>t|i.N<<32-t)}function yt(i,t,n){return new o(i.N&t.N^i.N&n.N^t.N&n.N,i.I&t.I^i.I&n.I^t.I&n.I)}function St(i){const t=y(i,28),n=y(i,34),e=y(i,39);return new o(t.N^n.N^e.N,t.I^n.I^e.I)}function H(i,t){let n,e;n=(65535&i.I)+(65535&t.I),e=(i.I>>>16)+(t.I>>>16)+(n>>>16);const s=(65535&e)<<16|65535&n;return n=(65535&i.N)+(65535&t.N)+(e>>>16),e=(i.N>>>16)+(t.N>>>16)+(n>>>16),new o((65535&e)<<16|65535&n,s)}function Kt(i,t,n,e){let s,r;s=(65535&i.I)+(65535&t.I)+(65535&n.I)+(65535&e.I),r=(i.I>>>16)+(t.I>>>16)+(n.I>>>16)+(e.I>>>16)+(s>>>16);const h=(65535&r)<<16|65535&s;return s=(65535&i.N)+(65535&t.N)+(65535&n.N)+(65535&e.N)+(r>>>16),r=(i.N>>>16)+(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(s>>>16),new o((65535&r)<<16|65535&s,h)}function Ut(i,t,n,e,s){let r,h;r=(65535&i.I)+(65535&t.I)+(65535&n.I)+(65535&e.I)+(65535&s.I),h=(i.I>>>16)+(t.I>>>16)+(n.I>>>16)+(e.I>>>16)+(s.I>>>16)+(r>>>16);const w=(65535&h)<<16|65535&r;return r=(65535&i.N)+(65535&t.N)+(65535&n.N)+(65535&e.N)+(65535&s.N)+(h>>>16),h=(i.N>>>16)+(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(s.N>>>16)+(r>>>16),new o((65535&h)<<16|65535&r,w)}function k(i,t){return new o(i.N^t.N,i.I^t.I)}function Ct(i){const t=y(i,19),n=y(i,61),e=rt(i,6);return new o(t.N^n.N^e.N,t.I^n.I^e.I)}function Tt(i){const t=y(i,1),n=y(i,8),e=rt(i,7);return new o(t.N^n.N^e.N,t.I^n.I^e.I)}function Ft(i){const t=y(i,14),n=y(i,18),e=y(i,41);return new o(t.N^n.N^e.N,t.I^n.I^e.I)}const kt=[new o(l[0],3609767458),new o(l[1],602891725),new o(l[2],3964484399),new o(l[3],2173295548),new o(l[4],4081628472),new o(l[5],3053834265),new o(l[6],2937671579),new o(l[7],3664609560),new o(l[8],2734883394),new o(l[9],1164996542),new o(l[10],1323610764),new o(l[11],3590304994),new o(l[12],4068182383),new o(l[13],991336113),new o(l[14],633803317),new o(l[15],3479774868),new o(l[16],2666613458),new o(l[17],944711139),new o(l[18],2341262773),new o(l[19],2007800933),new o(l[20],1495990901),new o(l[21],1856431235),new o(l[22],3175218132),new o(l[23],2198950837),new o(l[24],3999719339),new o(l[25],766784016),new o(l[26],2566594879),new o(l[27],3203337956),new o(l[28],1034457026),new o(l[29],2466948901),new o(l[30],3758326383),new o(l[31],168717936),new o(l[32],1188179964),new o(l[33],1546045734),new o(l[34],1522805485),new o(l[35],2643833823),new o(l[36],2343527390),new o(l[37],1014477480),new o(l[38],1206759142),new o(l[39],344077627),new o(l[40],1290863460),new o(l[41],3158454273),new o(l[42],3505952657),new o(l[43],106217008),new o(l[44],3606008344),new o(l[45],1432725776),new o(l[46],1467031594),new o(l[47],851169720),new o(l[48],3100823752),new o(l[49],1363258195),new o(l[50],3750685593),new o(l[51],3785050280),new o(l[52],3318307427),new o(l[53],3812723403),new o(l[54],2003034995),new o(l[55],3602036899),new o(l[56],1575990012),new o(l[57],1125592928),new o(l[58],2716904306),new o(l[59],442776044),new o(l[60],593698344),new o(l[61],3733110249),new o(l[62],2999351573),new o(l[63],3815920427),new o(3391569614,3928383900),new o(3515267271,566280711),new o(3940187606,3454069534),new o(4118630271,4000239992),new o(116418474,1914138554),new o(174292421,2731055270),new o(289380356,3203993006),new o(460393269,320620315),new o(685471733,587496836),new o(852142971,1086792851),new o(1017036298,365543100),new o(1126000580,2618297676),new o(1288033470,3409855158),new o(1501505948,4234509866),new o(1607167915,987167468),new o(1816402316,1246189591)];function Q(i){return i==="SHA-384"?[new o(3418070365,S[0]),new o(1654270250,S[1]),new o(2438529370,S[2]),new o(355462360,S[3]),new o(1731405415,S[4]),new o(41048885895,S[5]),new o(3675008525,S[6]),new o(1203062813,S[7])]:[new o(K[0],4089235720),new o(K[1],2227873595),new o(K[2],4271175723),new o(K[3],1595750129),new o(K[4],2917565137),new o(K[5],725511199),new o(K[6],4215389547),new o(K[7],327033209)]}function W(i,t){let n,e,s,r,h,w,c,a,p,f,u,A;const m=[];for(n=t[0],e=t[1],s=t[2],r=t[3],h=t[4],w=t[5],c=t[6],a=t[7],u=0;u<80;u+=1)u<16?(A=2*u,m[u]=new o(i[A],i[A+1])):m[u]=Kt(Ct(m[u-2]),m[u-7],Tt(m[u-15]),m[u-16]),p=Ut(a,Ft(h),(I=w,d=c,new o((N=h).N&I.N^~N.N&d.N,N.I&I.I^~N.I&d.I)),kt[u],m[u]),f=H(St(n),yt(n,e,s)),a=c,c=w,w=h,h=H(r,p),r=s,s=e,e=n,n=H(p,f);var N,I,d;return t[0]=H(n,t[0]),t[1]=H(e,t[1]),t[2]=H(s,t[2]),t[3]=H(r,t[3]),t[4]=H(h,t[4]),t[5]=H(w,t[5]),t[6]=H(c,t[6]),t[7]=H(a,t[7]),t}class Mt extends P{constructor(t,n,e){if(t!=="SHA-384"&&t!=="SHA-512")throw new Error(B);super(t,n,e);const s=e||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=T(this.t,this.i,this.T),this.U=W,this.B=function(r){return r.slice()},this.L=Q,this.g=function(r,h,w,c){return function(a,p,f,u,A){let m,N;const I=31+(p+129>>>10<<5),d=p+f;for(;a.length<=I;)a.push(0);for(a[p>>>5]|=128<<24-p%32,a[I]=4294967295&d,a[I-1]=d/4294967296|0,m=0;m<a.length;m+=32)u=W(a.slice(m,m+32),u);return N=A==="SHA-384"?[u[0].N,u[0].I,u[1].N,u[1].I,u[2].N,u[2].I,u[3].N,u[3].I,u[4].N,u[4].I,u[5].N,u[5].I]:[u[0].N,u[0].I,u[1].N,u[1].I,u[2].N,u[2].I,u[3].N,u[3].I,u[4].N,u[4].I,u[5].N,u[5].I,u[6].N,u[6].I,u[7].N,u[7].I],N}(r,h,w,c,t)},this.R=Q(t),this.m=1024,this.v=t==="SHA-384"?384:512,this.K=!1,s.hmacKey&&this.k(U("hmacKey",s.hmacKey,this.T))}}const Bt=[new o(0,1),new o(0,32898),new o(2147483648,32906),new o(2147483648,2147516416),new o(0,32907),new o(0,2147483649),new o(2147483648,2147516545),new o(2147483648,32777),new o(0,138),new o(0,136),new o(0,2147516425),new o(0,2147483658),new o(0,2147516555),new o(2147483648,139),new o(2147483648,32905),new o(2147483648,32771),new o(2147483648,32770),new o(2147483648,128),new o(0,32778),new o(2147483648,2147483658),new o(2147483648,2147516545),new o(2147483648,32896),new o(0,2147483649),new o(2147483648,2147516424)],_t=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function O(i){let t;const n=[];for(t=0;t<5;t+=1)n[t]=[new o(0,0),new o(0,0),new o(0,0),new o(0,0),new o(0,0)];return n}function Yt(i){let t;const n=[];for(t=0;t<5;t+=1)n[t]=i[t].slice();return n}function Y(i,t){let n,e,s,r;const h=[],w=[];if(i!==null)for(e=0;e<i.length;e+=2)t[(e>>>1)%5][(e>>>1)/5|0]=k(t[(e>>>1)%5][(e>>>1)/5|0],new o(i[e+1],i[e]));for(n=0;n<24;n+=1){for(r=O(),e=0;e<5;e+=1)h[e]=(c=t[e][0],a=t[e][1],p=t[e][2],f=t[e][3],u=t[e][4],new o(c.N^a.N^p.N^f.N^u.N,c.I^a.I^p.I^f.I^u.I));for(e=0;e<5;e+=1)w[e]=k(h[(e+4)%5],J(h[(e+1)%5],1));for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)t[e][s]=k(t[e][s],w[e]);for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)r[s][(2*e+3*s)%5]=J(t[e][s],_t[e][s]);for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)t[e][s]=k(r[e][s],new o(~r[(e+1)%5][s].N&r[(e+2)%5][s].N,~r[(e+1)%5][s].I&r[(e+2)%5][s].I));t[0][0]=k(t[0][0],Bt[n])}var c,a,p,f,u;return t}function ht(i){let t,n,e=0;const s=[0,0],r=[4294967295&i,i/4294967296&2097151];for(t=6;t>=0;t--)n=r[t>>2]>>>8*t&255,n===0&&e===0||(s[e+1>>2]|=n<<8*(e+1),e+=1);return e=e!==0?e:1,s[0]|=e,{value:e+1>4?s:[s[0]],binLen:8+8*e}}function X(i){return x(ht(i.binLen),i)}function $(i,t){let n,e=ht(t);e=x(e,i);const s=t>>>2,r=(s-e.value.length%s)%s;for(n=0;n<r;n++)e.value.push(0);return e.value}class xt extends P{constructor(t,n,e){let s=6,r=0;super(t,n,e);const h=e||{};if(this.numRounds!==1){if(h.kmacKey||h.hmacKey)throw new Error("Cannot set numRounds with MAC");if(this.o==="CSHAKE128"||this.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(this.T=1,this.C=T(this.t,this.i,this.T),this.U=Y,this.B=Yt,this.L=O,this.R=O(),this.K=!1,t){case"SHA3-224":this.m=r=1152,this.v=224,this.M=!0,this.F=this.Y;break;case"SHA3-256":this.m=r=1088,this.v=256,this.M=!0,this.F=this.Y;break;case"SHA3-384":this.m=r=832,this.v=384,this.M=!0,this.F=this.Y;break;case"SHA3-512":this.m=r=576,this.v=512,this.M=!0,this.F=this.Y;break;case"SHAKE128":s=31,this.m=r=1344,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"SHAKE256":s=31,this.m=r=1088,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"KMAC128":s=4,this.m=r=1344,this.X(e),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"KMAC256":s=4,this.m=r=1088,this.X(e),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"CSHAKE128":this.m=r=1344,s=this.O(e),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"CSHAKE256":this.m=r=1088,s=this.O(e),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;default:throw new Error(B)}this.g=function(w,c,a,p,f){return function(u,A,m,N,I,d,R){let v,E,b=0;const F=[],_=I>>>5,ut=A>>>5;for(v=0;v<ut&&A>=I;v+=_)N=Y(u.slice(v,v+_),N),A-=I;for(u=u.slice(v),A%=I;u.length<_;)u.push(0);for(v=A>>>3,u[v>>2]^=d<<v%4*8,u[_-1]^=2147483648,N=Y(u,N);32*F.length<R&&(E=N[b%5][b/5|0],F.push(E.I),!(32*F.length>=R));)F.push(E.N),b+=1,64*b%I==0&&(Y(null,N),b=0);return F}(w,c,0,p,r,s,f)},h.hmacKey&&this.k(U("hmacKey",h.hmacKey,this.T))}O(t,n){const e=function(r){const h=r||{};return{funcName:U("funcName",h.funcName,1,{value:[],binLen:0}),customization:U("Customization",h.customization,1,{value:[],binLen:0})}}(t||{});n&&(e.funcName=n);const s=x(X(e.funcName),X(e.customization));if(e.customization.binLen!==0||e.funcName.binLen!==0){const r=$(s,this.m>>>3);for(let h=0;h<r.length;h+=this.m>>>5)this.R=this.U(r.slice(h,h+(this.m>>>5)),this.R),this.A+=this.m;return 4}return 31}X(t){const n=function(s){const r=s||{};return{kmacKey:U("kmacKey",r.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:U("Customization",r.customization,1,{value:[],binLen:0})}}(t||{});this.O(t,n.funcName);const e=$(X(n.kmacKey),this.m>>>3);for(let s=0;s<e.length;s+=this.m>>>5)this.R=this.U(e.slice(s,s+(this.m>>>5)),this.R),this.A+=this.m;this.H=!0}_(t){const n=x({value:this.h.slice(),binLen:this.u},function(e){let s,r,h=0;const w=[0,0],c=[4294967295&e,e/4294967296&2097151];for(s=6;s>=0;s--)r=c[s>>2]>>>8*s&255,r===0&&h===0||(w[h>>2]|=r<<8*h,h+=1);return h=h!==0?h:1,w[h>>2]|=h<<8*h,{value:h+1>4?w:[w[0]],binLen:8+8*h}}(t.outputLen));return this.g(n.value,n.binLen,this.A,this.B(this.R),t.outputLen)}}class Pt{constructor(t,n,e){if(t=="SHA-1")this.P=new Rt(t,n,e);else if(t=="SHA-224"||t=="SHA-256")this.P=new Lt(t,n,e);else if(t=="SHA-384"||t=="SHA-512")this.P=new Mt(t,n,e);else{if(t!="SHA3-224"&&t!="SHA3-256"&&t!="SHA3-384"&&t!="SHA3-512"&&t!="SHAKE128"&&t!="SHAKE256"&&t!="CSHAKE128"&&t!="CSHAKE256"&&t!="KMAC128"&&t!="KMAC256")throw new Error(B);this.P=new xt(t,n,e)}}update(t){return this.P.update(t),this}getHash(t,n){return this.P.getHash(t,n)}setHMACKey(t,n,e){this.P.setHMACKey(t,n,e)}getHMAC(t,n){return this.P.getHMAC(t,n)}}const Xt={class:"flex flex-col items-center"},Ot=tt("h1",{class:"text-2xl mt-4"},"身份验证",-1),qt={__name:"LoginAdmin",setup(i){const t=ct(""),n=at(),s="//"+window.location.hostname+":8020";sessionStorage.getItem("token")!=null&&n.push("/admin");function r(){const c={password:new Pt("SHA-224","TEXT",{encoding:"UTF8"}).update(t.value).getHash("HEX").toUpperCase()};Nt.post(s+"/api/verifyUser",c).then(a=>{a.data.result===!0?(sessionStorage.setItem("token","token"),n.push("/admin/videoManage")):(alert("密码错误！"),t.value="")})}return(h,w)=>{const c=It,a=mt;return wt(),ft("div",Xt,[Ot,z(c,{onKeyup:lt(r,["enter"]),class:"m-2",value:t.value,"onUpdate:value":w[0]||(w[0]=p=>t.value=p),style:{width:"320px"},type:"password",placeholder:"请输入管理员密码",autofocus:!0},null,8,["onKeyup","value"]),tt("div",null,[z(a,{onClick:r},{default:pt(()=>[At("验证")]),_:1})])])}}};export{qt as default};
