import{g as s,p as a}from"./marked.esm-CO_Vmz4B.js";import{r as c,s as l}from"./course-document-markdown-DhvYH2Ui.js";const o=e=>a.sanitize(e,{FORBID_ATTR:["class","id","style","target"]});function p(e,t={}){var i;if(!e.trim())return"";const r=t.streaming?c(e):e,n=s.parse(r,{async:!1,breaks:!0,gfm:!0});return l(n,(i=t.sanitizer)!=null?i:o)}function h(e){var n;const t=p(e).replace(/<br\s*\/?>/gi,`
`).replace(/<\/t[dh]>\s*(?=<t[dh]\b)/gi,"</td> ").replace(/<\/(?:blockquote|div|h[1-6]|li|ol|p|pre|table|tr|ul)>/gi,`
`),r=document.createElement("div");return r.innerHTML=t,((n=r.textContent)!=null?n:"").replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim()}export{p as r,h as t};
