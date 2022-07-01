/*! For license information please see 576.library.js.LICENSE.txt */
"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[576],{576:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>E});const r="-shadowcsshost",c=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+c,"gim"),n=new RegExp("(-shadowcsscontext"+c,"gim"),l=new RegExp("(-shadowcssslotted"+c,"gim"),a="-shadowcsshost-no-combinator",i=/-shadowcsshost-no-combinator([^\s]*)/,p=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,u=/:host/gim,g=/::slotted/gim,d=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,f=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,x=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,$=/([{}])/g,w=/(^.*?[^\\])??((:+)(.*)|$)/,_="%BLOCK%",b=(e,t)=>{const s=S(e);let r=0;return s.escapedString.replace(x,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{%BLOCK%")&&(o=s.blocks[r++],n=n.substring(_.length+1),l="{");const a=t({selector:c,content:o});return`${e[1]}${a.selector}${e[3]}${l}${a.content}${n}`}))},S=e=>{const t=e.split($),s=[],r=[];let c=0,o=[];for(let e=0;e<t.length;e++){const n=t[e];"}"===n&&c--,c>0?o.push(n):(o.length>0&&(r.push(o.join("")),s.push(_),o=[]),s.push(n)),"{"===n&&c++}return o.length>0&&(r.push(o.join("")),s.push(_)),{escapedString:s.join(""),blocks:r}},O=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(a,o,e[3]))}return r.join(",")}return a+e[3]})),W=(e,t,s)=>e+t.replace(r,"")+s,k=(e,t,s)=>t.indexOf(r)>-1?W(e,t,s):e+t+s+", "+t+" "+e+s,j=(e,t)=>e.replace(w,((e,s="",r,c="",o="")=>s+t+c+o)),C=(e,t,s,r,c)=>b(e,(e=>{let c=e.selector,o=e.content;return"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():((e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)})(e,t)?((e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),c=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(a)>-1)c=((e,t,s)=>{if(h.lastIndex=0,h.test(e)){const t=`.${s}`;return e.replace(i,((e,s)=>j(s,t))).replace(h,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(h,"");t.length>0&&(c=j(t,r))}return c},o=(e=>{const t=[];let s=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),placeholders:t}})(e);let n,l="",p=0;const u=/( |>|\+|~(?!=))\s*/g;let g=!((e=o.content).indexOf(a)>-1);for(;null!==(n=u.exec(e));){const t=n[1],s=e.slice(p,n.index).trim();g=g||s.indexOf(a)>-1,l+=`${g?c(s):s} ${t} `,p=u.lastIndex}const d=e.substring(p);return g=g||d.indexOf(a)>-1,l+=g?c(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>m[+t]));var m})(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=C(e.content,t,s,r)),{selector:c.replace(/\s{2,}/g," ").trim(),content:o}})),E=(e,t,s)=>{const c=t+"-h",i=t+"-s",h=e.match(f)||[];e=e.replace(m,"");const x=[];if(s){const t=e=>{const t=`/*!@___${x.length}___*/`,s=`/*!@${e.selector}*/`;return x.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=b(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=b(e.content,t),e):e))}const $=((e,t,s,c,i)=>{const h=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(l,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let t=e[4]-1;t>=0;t--){const s=e[5][t];if("}"===s||","===s)break;n=s+n}const l=n+o,a=`${n.trimRight()}${o.trim()}`;if(l.trim()!==a.trim()){const e=`${a}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return a+e[3]})),{selectors:r,cssText:e}})(e=(e=>O(e,n,k))(e=(e=>O(e,o,W))(e=e.replace(d,"-shadowcsscontext").replace(u,r).replace(g,"-shadowcssslotted"))),c);return e=(e=>p.reduce(((e,t)=>e.replace(t," ")),e))(e=h.cssText),t&&(e=C(e,t,s,c)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}})(e,t,c,i);return e=[$.cssText,...h].join("\n"),s&&x.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),$.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}]);