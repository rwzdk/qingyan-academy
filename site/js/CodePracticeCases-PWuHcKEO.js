var Ps=Object.defineProperty,Es=Object.defineProperties;var qs=Object.getOwnPropertyDescriptors;var $n=Object.getOwnPropertySymbols;var As=Object.prototype.hasOwnProperty,Ms=Object.prototype.propertyIsEnumerable;var Sn=(h,_,x)=>_ in h?Ps(h,_,{enumerable:!0,configurable:!0,writable:!0,value:x}):h[_]=x,ye=(h,_)=>{for(var x in _||(_={}))As.call(_,x)&&Sn(h,x,_[x]);if($n)for(var x of $n(_))Ms.call(_,x)&&Sn(h,x,_[x]);return h},Ye=(h,_)=>Es(h,qs(_));var X=(h,_,x)=>new Promise((K,D)=>{var te=j=>{try{Q(x.next(j))}catch(ve){D(ve)}},Y=j=>{try{Q(x.throw(j))}catch(ve){D(ve)}},Q=j=>j.done?K(j.value):Promise.resolve(j.value).then(te,Y);Q((x=x.apply(h,_)).next())});import{C as Ds,c as g,w as Ue,d as Tn,r as y,p as Rs,S as V,O as u,P as o,Q as t,W as S,U as d,u as r,_ as a,X as f,Z as v,ag as T,$ as w,aR as ot,bX as In,ad as q,aQ as On,aN as Ls,al as Ge,F as C,ar as I,V as Te,b4 as Ns,ay as zn,az as Ie,av as js,a4 as Oe,a2 as ue,a3 as pe,b1 as Bs,ax as Hs,n as Dt}from"./vendor-element-plus-Cb8mRXYr.js";import{b as Fs,e as Vs,I as E,_ as Ks}from"./bootstrap-CBSC6qi5.js";import Ys from"./GenerationState-vE8Hgkks.js";import{a as Us}from"./course-document-markdown-DhvYH2Ui.js";import{L as Gs}from"./use-learning-progress-BUz0yvVx.js";import{u as Ws}from"./useClipboard-BzCR1nCj.js";import{getAllPracticeAttempts as Js,createPracticeAttempts as Xs}from"./practice-attempts-D_m7iomQ.js";import"./vendor-shared-XbCbQuHZ.js";import"../jse/index-index-aPaky9zv.js";import"./marked.esm-CO_Vmz4B.js";import"./learning-progress-8Z8J1dSK.js";function Qs(h){const _=h.trim().toLowerCase();return["python","py","shell","bash"].includes(_)?"#":["sql","mysql","postgresql"].includes(_)?"--":"//"}function Zs(h,_){return h.map(x=>{const K=Qs(x.language||_),D=x.description?` - ${x.description}`:"";return`${K} ${x.name}${D}
${x.code||""}`}).join(`

`)}const ze="    ";function qn(h,_){return h.lastIndexOf(`
`,_-1)+1}function el(h,_,x,K){if(!h.slice(_,x).includes(`
`)&&!K)return{code:h.slice(0,_)+ze+h.slice(x),selectionStart:_+ze.length,selectionEnd:_+ze.length};const te=qn(h,_),Y=h.indexOf(`
`,x),Q=Y===-1?h.length:Y,j=h.slice(te,Q),he=j.split(`
`).map(Z=>K?Z.replace(/^ {1,4}/,""):ze+Z).join(`
`),fe=h.slice(0,te)+he+h.slice(Q),G=he.length-j.length;return{code:fe,selectionStart:K?Math.max(te,_-4):_+ze.length,selectionEnd:x+G}}function tl(h,_){const x=qn(h,_),K=h.slice(x,_),D=K.match(/^[ \t]*/);let te=D?D[0]:"";K.trimEnd().endsWith(":")&&(te+=ze);const Y=`
`+te;return{code:h.slice(0,_)+Y+h.slice(_),selectionStart:_+Y.length}}function nl(h,_){return h.filter(x=>!(_.difficulty&&_.difficulty!=="all"&&x.difficulty!==_.difficulty||_.category&&_.category!=="all"&&x.category!==_.category))}const ut=["字符串","数组","双指针","二分","条件分支","贪心","搜索","动态规划","数据结构","图论","数学"];function Pn(h){return/条件判断|条件分支|布尔值|分支选择|if\s*\/\s*elif|\belif\b|\belse\b/i.test(h)?"条件分支":/回文|字符|字符串|切片/.test(h)?"字符串":/双指针|窗口|连续|子数组|区间/.test(h)?"双指针":/二分|折半|查找插入位置/.test(h)?"二分":/贪心|排序|最优|选择/.test(h)?"贪心":/搜索|BFS|DFS|迷宫|网格/.test(h)?"搜索":/动态规划|递推|dp|台阶/.test(h)?"动态规划":/栈|队列|哈希|字典|堆/.test(h)?"数据结构":/图|最短路|节点|边/.test(h)?"图论":/数学|最大公约数|质数|取模/.test(h)?"数学":"数组"}const sl={class:"practice-page"},ll={class:"practice-toolbar"},al={class:"toolbar-brand"},il={class:"brand-icon"},ol={key:0,class:"toolbar-stats"},ul={key:1,class:"practice-top-actions"},rl={key:0,class:"practice-topic-brief"},cl={key:0,class:"personalized-generation-shell"},dl={key:1,class:"overview-layout"},pl={class:"overview-left"},vl={key:0,class:"panel generation-error",role:"alert"},fl={class:"panel creator-panel"},ml={class:"panel-header"},gl={class:"creator-mode-switch"},yl={key:0,class:"creator-form"},hl={class:"creator-field-row"},_l={class:"creator-chip-row"},bl=["onClick"],kl={class:"creator-chip-row compact"},Cl=["onClick"],xl={class:"creator-actions"},wl={key:1,class:"creator-form manual-creator-form"},$l={class:"creator-actions"},Sl={key:1,class:"panel"},Tl={class:"panel-header"},Il={class:"topic-grid"},Ol=["onClick"],zl={class:"topic-card-top"},Pl={class:"topic-card-meta"},El={class:"panel"},ql={class:"panel-header"},Al={class:"panel-actions"},Ml={class:"practice-filter-bar","data-testid":"practice-filter-bar"},Dl={class:"practice-filter-group"},Rl=["onClick"],Ll={key:0,class:"practice-filter-group"},Nl=["onClick"],jl={key:0,class:"topic-grid"},Bl=["onClick","onKeydown"],Hl={class:"topic-card-top"},Fl={class:"topic-card-tags"},Vl={class:"topic-card-meta"},Kl={class:"topic-card-actions"},Yl={key:2,class:"empty-note"},Ul={class:"panel"},Gl={class:"panel-header"},Wl={key:0,class:"saved-grid"},Jl=["onClick"],Xl={key:1,class:"empty-note"},Ql={class:"overview-right"},Zl={class:"panel progress-panel"},ea={class:"progress-body"},ta={class:"progress-ring-inner"},na={class:"progress-metrics"},sa={class:"progress-metric success"},la={class:"progress-metric danger"},aa={class:"progress-foot"},ia={class:"panel analysis-panel"},oa={class:"panel-header"},ua={class:"analysis-overview"},ra={class:"analysis-difficulty"},ca={class:"easy"},da={class:"medium"},pa={class:"hard"},va={class:"analysis-bubbles"},fa={key:1,class:"analysis-single-category"},ma={key:2,class:"analysis-empty"},ga={class:"analysis-summary"},ya={class:"panel"},ha={class:"panel-header"},_a={class:"panel-actions"},ba={class:"history-list"},ka=["onClick"],Ca={class:"history-card-head"},xa={class:"history-card-score"},wa={class:"history-card-tags"},$a={key:0,class:"history-stats"},Sa={class:"history-stat-head"},Ta={class:"history-stat-bar"},Ia={class:"panel"},Oa={key:1,class:"empty-note"},za={class:"problem-tabs",role:"tablist"},Pa=["onClick"],Ea={key:0,class:"problem-tab-badge"},qa={class:"problem-tabs-actions"},Aa={class:"problem-document"},Ma={class:"problem-title-row"},Da={class:"title-tags"},Ra={class:"problem-title-actions"},La=["title"],Na={class:"problem-summary"},ja={class:"doc-section"},Ba={class:"doc-section"},Ha={class:"sample-list"},Fa={class:"io-box"},Va={class:"io-box output"},Ka={class:"doc-section"},Ya={class:"hidden-note"},Ua={key:0,class:"doc-section"},Ga={class:"tag-row"},Wa={key:1,class:"doc-section"},Ja={class:"topic-pass-stats"},Xa={class:"problem-document"},Qa={class:"doc-section"},Za={class:"solution-header"},ei={class:"tag-row"},ti={class:"solution-lead"},ni={key:0,class:"solution-steps"},si={class:"solution-step-index"},li={key:1,class:"complexity-cards"},ai={class:"complexity-card"},ii={class:"complexity-card"},oi={key:2,class:"solution-points"},ui={class:"tag-row"},ri={key:0,class:"doc-section"},ci=["innerHTML"],di={class:"doc-section"},pi={class:"submission-code"},vi={class:"submission-code-head"},fi={class:"submission-code-body"},mi={class:"code-gutter","aria-hidden":"true"},gi={class:"code-view"},yi=["innerHTML"],hi={key:1,class:"doc-section"},_i={class:"solution-next"},bi=["onClick"],ki={class:"solution-next-main"},Ci={class:"problem-document"},xi={key:0,class:"submission-detail"},wi={key:0},$i={class:"submission-meta"},Si={key:0},Ti={key:0,class:"submission-error"},Ii={class:"submission-error-head"},Oi={key:1,class:"submission-case-list"},zi={class:"submission-case-name"},Pi={class:"submission-case-verdict"},Ei={class:"doc-section"},qi={class:"submission-code"},Ai={class:"submission-code-head"},Mi={key:0,class:"submission-code-body"},Di={class:"code-gutter","aria-hidden":"true"},Ri={class:"code-view"},Li=["innerHTML"],Ni={key:1,class:"empty-note",style:{padding:"14px"}},ji={key:1,class:"doc-section"},Bi={key:0,class:"submission-table"},Hi=["onClick"],Fi={class:"submission-table-time"},Vi={key:1,class:"empty-note"},Ki={class:"problem-document"},Yi={class:"doc-section"},Ui={key:0,class:"similar-grid"},Gi=["onClick"],Wi={class:"similar-card-head"},Ji={key:1,class:"empty-note"},Xi={class:"problem-document"},Qi={class:"doc-section notes-section"},Zi={class:"notes-head"},eo={class:"notes-status"},to={key:0,class:"notes-saved-at"},no={class:"console-tip"},so={class:"editor-card"},lo={class:"editor-toolbar"},ao={type:"button",class:"editor-lang",title:"判题语言固定为 Python"},io={class:"editor-actions"},oo=["disabled"],uo=["disabled"],ro=["disabled"],co=["disabled"],po=["title"],vo={class:"line-numbers"},fo={class:"editor-code-area"},mo=["innerHTML"],go={key:2,class:"reference-code"},yo=["innerHTML"],ho={class:"editor-statusbar"},_o={class:"console-card"},bo={class:"console-head"},ko={class:"console-tabs",role:"tablist"},Co=["onClick"],xo={class:"console-actions"},wo={class:"console-panel"},$o={class:"testcase-head"},So={class:"case-chips",role:"tablist"},To=["onClick"],Io={class:"testcase-label"},Oo={key:0,class:"case-expected-hint"},zo={class:"console-tip"},Po={class:"console-panel"},Eo={key:0,class:"submitting-placeholder"},qo={key:0},Ao={key:1,class:"run-summary-score"},Mo={class:"console-result"},Do={key:0,class:"run-case-list"},Ro={class:"io-box"},Lo={key:0,class:"io-box output"},No={key:1,class:"io-box error-output"},jo={key:0,class:"review-hint","data-testid":"review-hint"},Bo={key:1,class:"empty-hint"},Ho={class:"console-panel"},Fo={class:"ai-review"},Vo={class:"ai-review-actions"},Ko={key:0,class:"review-hint"},Yo={class:"review-grid"},Uo={class:"review-script"},Go={class:"review-script-section"},Wo={class:"review-script-section"},Jo={class:"review-script-section"},Xo={class:"tag-row"},Qo={class:"review-script-section"},Zo={class:"history-modal"},eu={class:"history-modal-list"},tu=["onClick"],nu={class:"history-card-head"},su={class:"history-card-score"},lu={class:"history-card-tags"},ee="Python",En=6,au=Ds({__name:"CodePracticeCases",props:{personalizedContext:{}},setup(h){const _=[{icon:"lucide:file-text",label:"题目描述",value:"description"},{icon:"lucide:book-marked",label:"题解",value:"solutions"},{icon:"lucide:history",label:"提交记录",value:"submissions"},{icon:"lucide:lightbulb",label:"相关推荐",value:"related"}],x=[{icon:"lucide:flask-conical",label:"测试用例",value:"testcase"},{icon:"lucide:terminal",label:"测试结果",value:"result"},{icon:"lucide:sparkles",label:"AI 点评",value:"review"}],K="/student-api",D=h,te=Fs(),Y=Vs(),{copyText:Q}=Ws(),j=g(()=>{var l,i;const n=(l=D.personalizedContext)==null?void 0:l.roundId,e=Number(((i=Y.userInfo)==null?void 0:i.id)||0);return n&&e?new Gs({resourceType:"CODE_PRACTICE",roundId:n,userId:e}):null});Ue(j,(n,e)=>{e==null||e.stopMonitoring(),n==null||n.startMonitoring()},{immediate:!0}),Tn(()=>{var n;(n=j.value)==null||n.stopMonitoring()});const ve=["基础","提升","挑战"],he=[{category:"字符串",criteria:["按原字符串判断回文","输出 YES 或 NO","处理单字符和普通字符串"],difficulty:"基础",favorite:!0,hiddenCases:[{expected:"YES",input:"a",name:"检测 1：单字符"},{expected:"NO",input:"Python",name:"检测 2：普通单词"}],historyCount:8,id:"palindrome",seedCode:`s = input().strip()
# TODO: 如果 s 是回文输出 YES，否则输出 NO
`,source:"力扣风格",summary:"判断字符串从左到右和从右到左是否一致。",tags:["字符串","切片"],task:`给定一个字符串 s，请判断它是否为回文字符串。

输入描述：
一行，一个字符串 s。

输出描述：
如果 s 是回文字符串，输出 YES；否则输出 NO。`,testCases:[{expected:"YES",input:"level",name:"样例 1：回文"},{expected:"NO",input:"hello",name:"样例 2：非回文"}],title:"回文字符串判断"},{category:"数组",criteria:["正确读取数组","输出最大值","支持负数和重复数字"],difficulty:"基础",favorite:!0,hiddenCases:[{expected:"42",input:"42",name:"检测 1：单个数字"},{expected:"-1",input:"-5 -10 -1 -3",name:"检测 2：全部为负数"}],historyCount:14,id:"max-number",seedCode:`nums = list(map(int, input().split()))
# TODO: 输出 nums 中的最大值
`,source:"牛客风格",summary:"输入若干整数，输出其中最大值。",tags:["数组","输入输出"],task:`给定一行整数，数字之间用空格分隔，请输出这些整数中的最大值。

输入描述：
一行，若干个整数。

输出描述：
一个整数，表示最大值。`,testCases:[{expected:"9",input:"3 9 2 7",name:"样例 1：普通数组"},{expected:"5",input:"5 5 5",name:"样例 2：重复数字"}],title:"求数组最大值"},{category:"双指针",criteria:["使用连续子段思想","找到长度不超过 k 的合法子段","找不到时输出 -1"],difficulty:"提升",favorite:!0,hiddenCases:[{expected:"1 2",input:`6 3
1 2 4 5 1 4`,name:"检测 1：存在合法子段"},{expected:"-1",input:`3 5
1 1 1`,name:"检测 2：不存在"}],historyCount:4,id:"subarray-multiple",seedCode:`n, k = map(int, input().split())
a = list(map(int, input().split()))
# TODO: 输出任意合法连续子段的左、右端点，找不到输出 -1
`,source:"洛谷风格",summary:"在数组中寻找长度受限、和满足整除条件的连续子段。",tags:["双指针","前缀和"],task:`给定一个长度为 n 的正整数数组 a1, a2, ..., an，以及一个正整数 k。
请问能否在数组中找到一个子段 [L, R]，满足：
- 该子段的长度不超过 k；
- 该子段内所有元素的和是 k 的倍数。

如果存在满足条件的子段，请输出任意一个合法子段的左右端点下标；如果无法找到，输出 -1。

输入描述：
第一行输入两个正整数 n, k，表示数组元素数量和目标参数。
第二行输入 n 个正整数，表示该数组。

输出描述：
如果存在合法连续子段，输出两个正整数 L R；如果不存在，输出 -1。`,testCases:[{expected:"1 2",input:`6 3
1 2 4 5 1 4`,name:"样例 1：存在合法子段"},{expected:"-1",input:`3 5
1 1 1`,name:"样例 2：不存在"}],title:"寻找合法连续子段"},{category:"贪心",criteria:["按结束时间排序选择区间","输出最多不重叠区间数量","处理无冲突和全冲突场景"],difficulty:"提升",hiddenCases:[{expected:"1",input:`3
1 5
2 6
3 7`,name:"检测 1：全部冲突"},{expected:"4",input:`4
1 2
3 4
5 6
7 8`,name:"检测 2：全部可选"}],historyCount:11,id:"interval-greedy",seedCode:`n = int(input())
intervals = [tuple(map(int, input().split())) for _ in range(n)]
# TODO: 输出最多能选择的不重叠区间数量
`,source:"洛谷风格",summary:"用贪心策略选择最多数量的不重叠区间。",tags:["贪心","排序"],task:`给定 n 个闭区间 [l, r]，请选择尽可能多的区间，使任意两个被选择的区间没有重叠。输出最多能选择的区间数量。

输入描述：
第一行一个整数 n。
接下来 n 行，每行两个整数 l r。

输出描述：
一个整数，表示最多能选择的区间数量。`,testCases:[{expected:"2",input:`3
1 3
2 4
4 6`,name:"样例 1：存在冲突"},{expected:"3",input:`3
1 2
3 4
5 6`,name:"样例 2：无冲突"}],title:"最多不重叠区间"},{category:"搜索",criteria:["使用 BFS 或 DFS 遍历网格","避开障碍","输出最短步数或 -1"],difficulty:"挑战",hiddenCases:[{expected:"-1",input:`2 2
S#
#T`,name:"检测 1：无法到达"},{expected:"4",input:`3 3
S..
.#.
..T`,name:"检测 2：绕开障碍"}],historyCount:6,id:"grid-bfs",seedCode:`from collections import deque

n, m = map(int, input().split())
grid = [input().strip() for _ in range(n)]
# TODO: 输出 S 到 T 的最短步数，无法到达输出 -1
`,source:"力扣风格",summary:"在网格中搜索从 S 到 T 的最短路径。",tags:["搜索","BFS"],task:`给定 n 行 m 列的网格，S 表示起点，T 表示终点，# 表示障碍，. 表示空地。每次可以上下左右移动一格，求从 S 到 T 的最短步数，无法到达输出 -1。

输入描述：
第一行两个整数 n m。
接下来 n 行，每行一个长度为 m 的字符串。

输出描述：
一个整数，表示最短步数；无法到达输出 -1。`,testCases:[{expected:"2",input:`2 2
S.
.T`,name:"样例 1：简单可达"},{expected:"3",input:`2 3
S..
##T`,name:"样例 2：沿边移动"}],title:"网格最短路"},{category:"数据结构",criteria:["正确统计频次","按数字升序输出","每行输出“数字 次数”"],difficulty:"提升",hiddenCases:[{expected:"8 4",input:`4
8 8 8 8`,name:"检测 1：单一数字"},{expected:`-2 2
0 1
3 2`,input:`5
3 -2 3 0 -2`,name:"检测 2：含负数"}],historyCount:9,id:"frequency-sort",seedCode:`n = int(input())
nums = list(map(int, input().split()))
# TODO: 按数字升序输出每个数字和出现次数
`,source:"牛客风格",summary:"统计整数出现次数，并按照数字升序输出。",tags:["字典","排序"],task:`第一行输入 n，第二行输入 n 个整数。请统计每个整数出现的次数，并按整数从小到大输出。

输入描述：
第一行一个整数 n。
第二行 n 个整数。

输出描述：
每行输出一个数字和它出现的次数，格式为：数字 次数。`,testCases:[{expected:`1 1
2 2
3 1`,input:`4
2 1 2 3`,name:"样例 1：基础统计"},{expected:`5 3
7 1`,input:`4
5 7 5 5`,name:"样例 2：重复较多"}],title:"数字频次统计"},{category:"二分",criteria:["使用二分查找","输出第一个不小于目标值的位置","找不到时输出 n + 1"],difficulty:"基础",hiddenCases:[{expected:"3",input:`4 6
1 2 8 10`,name:"检测 1：位于中间"},{expected:"1",input:`5 0
1 2 3 4 5`,name:"检测 2：小于首项"}],historyCount:0,id:"binary-search-left",seedCode:`n, x = map(int, input().split())
a = list(map(int, input().split()))
# TODO: 输出第一个不小于 x 的位置，找不到输出 n + 1
`,source:"牛客风格",summary:"在有序数组中快速定位目标值的插入位置。",tags:["二分","查找"],task:`给定一个长度为 n 的非递减数组 a 和一个整数 x，请输出数组中第一个满足 a[i] >= x 的位置（位置从 1 开始计数）。如果不存在这样的元素，输出 n + 1。

输入描述：
第一行两个整数 n, x。
第二行 n 个整数，表示数组 a。

输出描述：
一个整数，表示第一个满足条件的位置。`,testCases:[{expected:"4",input:`5 6
1 3 5 7 9`,name:"样例 1：命中中间位置"},{expected:"6",input:`5 10
1 3 5 7 9`,name:"样例 2：超出范围"}],title:"查找插入位置"},{category:"动态规划",criteria:["使用动态规划递推","正确处理 n=1 和 n=2","输出方案总数"],difficulty:"基础",hiddenCases:[{expected:"13",input:"6",name:"检测 1：中等规模"},{expected:"1",input:"1",name:"检测 2：最小规模"}],historyCount:0,id:"stairs-dp",seedCode:`n = int(input())
# TODO: 输出爬到第 n 级台阶的方案数（每次可走 1 或 2 级）
`,source:"力扣风格",summary:"典型的线性动态规划入门题。",tags:["动态规划","递推"],task:`有一段楼梯，共 n 级台阶。每次可以向上走 1 级或者 2 级，请问爬到第 n 级台阶共有多少种不同的走法？

输入描述：
一行一个整数 n。

输出描述：
一个整数，表示不同的走法数。`,testCases:[{expected:"8",input:"5",name:"样例 1：中等规模"},{expected:"2",input:"2",name:"样例 2：基础边界"}],title:"爬楼梯方案数"},{category:"数学",criteria:["正确读取两个整数","输出最大公约数","支持正整数输入"],difficulty:"基础",hiddenCases:[{expected:"1",input:"17 19",name:"检测 1：互质"},{expected:"12",input:"24 36",name:"检测 2：公共因子"}],historyCount:0,id:"gcd-basic",seedCode:`a, b = map(int, input().split())
# TODO: 输出 a 和 b 的最大公约数
`,source:"牛客风格",summary:"通过辗转相除法求两个数的最大公约数。",tags:["数学","gcd"],task:`给定两个正整数 a 和 b，请输出它们的最大公约数。

输入描述：
一行两个整数 a b。

输出描述：
一个整数，表示最大公约数。`,testCases:[{expected:"6",input:"12 18",name:"样例 1：普通输入"},{expected:"8",input:"8 32",name:"样例 2：倍数关系"}],title:"最大公约数"},{category:"数据结构",criteria:["使用单调队列或等价思想","输出每个窗口最大值","结果按空格分隔"],difficulty:"提升",hiddenCases:[{expected:"4 4 6 6",input:`6 3
4 4 4 1 6 2`,name:"检测 1：重复值"},{expected:"9 8 7",input:`5 3
9 8 7 6 5`,name:"检测 2：递减数组"}],historyCount:0,id:"deque-max",seedCode:`n, k = map(int, input().split())
a = list(map(int, input().split()))
# TODO: 输出每个长度为 k 的窗口最大值
`,source:"洛谷风格",summary:"经典的滑动窗口最大值题。",tags:["数据结构","单调队列"],task:`给定长度为 n 的数组 a 和窗口大小 k，请输出每个长度为 k 的连续窗口中的最大值。

输入描述：
第一行两个整数 n, k。
第二行 n 个整数。

输出描述：
一行整数，依次表示每个窗口的最大值。`,testCases:[{expected:"3 3 5 5 6 7",input:`8 3
1 3 -1 -3 5 3 6 7`,name:"样例 1：经典窗口"},{expected:"5 4 3",input:`5 3
5 4 3 2 1`,name:"样例 2：单调递减"}],title:"滑动窗口最大值"},{category:"搜索",criteria:["遍历网格连通块","统计四方向连通的岛屿数量","正确处理空地和障碍"],difficulty:"提升",hiddenCases:[{expected:"2",input:`3 3
110
010
001`,name:"检测 1：两个岛屿"},{expected:"1",input:`2 2
11
11`,name:"检测 2：单岛屿"}],historyCount:0,id:"island-count",seedCode:`from collections import deque

n, m = map(int, input().split())
grid = [input().strip() for _ in range(n)]
# TODO: 输出岛屿数量
`,source:"力扣风格",summary:"在网格中统计由 1 构成的连通块数量。",tags:["搜索","BFS"],task:`给定一个由 0 和 1 组成的网格，请统计其中岛屿的数量。岛屿是由上下左右相连的 1 组成的连通块。

输入描述：
第一行两个整数 n, m。
接下来 n 行，每行一个长度为 m 的字符串，只包含 0 和 1。

输出描述：
一个整数，表示岛屿数量。`,testCases:[{expected:"1",input:`3 3
111
010
111`,name:"样例 1：连成一片"},{expected:"3",input:`3 4
1001
0010
1000`,name:"样例 2：多个岛屿"}],title:"岛屿数量统计"},{category:"图论",criteria:["构建无向图","使用 BFS 求最短路","无法到达时输出 -1"],difficulty:"提升",hiddenCases:[{expected:"2",input:`5 5 1 5
1 2
2 3
3 5
1 4
4 5`,name:"检测 1：存在更短路径"},{expected:"-1",input:`4 2 1 4
1 2
2 3`,name:"检测 2：不可达"}],historyCount:0,id:"graph-shortest",seedCode:`from collections import deque

n, m, s, t = map(int, input().split())
# TODO: 读取无向图边并输出 s 到 t 的最短路长度
`,source:"洛谷风格",summary:"在无权无向图中求两点之间的最短路径。",tags:["图论","BFS"],task:`给定一个 n 个点、m 条边的无向无权图，求从起点 s 到终点 t 的最短路径长度。若无法到达，输出 -1。

输入描述：
第一行四个整数 n, m, s, t。
接下来 m 行，每行两个整数 u v，表示一条无向边。

输出描述：
一个整数，表示最短路径长度；无法到达输出 -1。`,testCases:[{expected:"2",input:`4 4 1 4
1 2
2 3
3 4
1 3`,name:"样例 1：两步可达"},{expected:"1",input:`3 2 1 2
1 2
2 3`,name:"样例 2：直接相连"}],title:"无权图最短路"}],fe=he[0],G=y([]);Rs(()=>X(null,null,function*(){var e;const n=Number(((e=Y.userInfo)==null?void 0:e.id)||0);if(n)try{const l=yield Js({source_type:"CODE_PRACTICE",user_id:n});G.value=l.map(i=>{const c=i.submission_snapshot||{};return{id:String(i.id),score:i.score,status:i.is_correct?"完成":"未通过",time:new Date(i.attempted_at).toLocaleString("zh-CN"),title:i.title,topicId:i.question_id||"",code:c.code,language:c.language,passedCaseCount:c.passed_case_count,totalCases:c.test_case_count,cases:Array.isArray(c.test_results)?c.test_results:void 0}})}catch(l){V.error((l==null?void 0:l.message)||"代码实操历史加载失败")}}));const Z=y("overview"),J=y(["palindrome","subarray-multiple","grid-bfs"]),rt=y([]),_e=y(!1),Pe=y(""),be=y([]),ct=y(null),z=y(fe.seedCode),ne=y([]),ae=y(0),Rt=g({get:()=>{var n,e;return(e=(n=ne.value[ae.value])==null?void 0:n.input)!=null?e:""},set:n=>{const e=ne.value[ae.value];e&&(e.input=n)}}),We=y(!1),ke=y(!1),Je=y(!1),Xe=y(!1),L=y(null),me=y(null),B=y(null),N=y(!1),Ee=y(!1),dt=y(!1),qe=y(""),Qe=y(""),pt=y(null),A=y(null),Ce=y(!1),Ze=y(""),vt=y(null),ft=y(1),mt=y(1),Ae=y("ai"),gt=y(""),yt=y(""),ht=y("数组"),_t=y("基础"),et=y(""),H=y("description"),se=y("testcase"),Lt=y(null),bt=y(.46),kt=y(!1),xe=y(0),$=g(()=>{var n;return((n=ct.value)==null?void 0:n.topic)||null}),F=g(()=>{var n;return((n=ct.value)==null?void 0:n.result)||Fe(fe)}),tt=g(()=>!!D.personalizedContext),we=g(()=>{const n=new Set;return[...be.value,...rt.value,...he].filter(e=>n.has(e.id)?!1:(n.add(e.id),!0))}),Nt=g(()=>we.value.filter(n=>J.value.includes(n.id))),Ct=g(()=>new Map(we.value.map(n=>[n.id,n]))),jt=g(()=>new Set(G.value.map(n=>n.topicId))),nt=y(0),Me=g(()=>{var l;const n=(l=$.value)==null?void 0:l.id,e=we.value.filter(i=>!J.value.includes(i.id)&&!jt.value.has(i.id)&&i.id!==n);return e.length?e:we.value.filter(i=>!J.value.includes(i.id)&&i.id!==n)}),An=g(()=>{const n=Me.value;if(!n.length)return[];const e=nt.value%n.length;return[...n.slice(e),...n.slice(0,e)].slice(0,En)}),De=y("all"),Re=y("all"),Bt=g(()=>{const n=new Set(Me.value.map(e=>e.category));return ut.filter(e=>n.has(e))}),Ht=g(()=>nl(An.value,{difficulty:De.value,category:Re.value})),Mn=g(()=>De.value!=="all"||Re.value!=="all");function Dn(){De.value="all",Re.value="all"}const W=g(()=>{const n=we.value.length,e=jt.value,l=new Set(G.value.filter(b=>{var P;return b.status==="完成"||((P=b.score)!=null?P:0)>=90}).map(b=>b.topicId)),i=new Set(G.value.filter(b=>{var P;return b.status==="未通过"||((P=b.score)!=null?P:0)<90&&b.score!==void 0}).map(b=>b.topicId)),c=G.value.reduce((b,P)=>b+(P.score||0),0),p=e.size,m=p?Math.round(l.size/p*100):0;return{averageScore:G.value.length?Math.round(c/G.value.length):0,failedCount:i.size,passRate:m,passedCount:l.size,submittedCount:p,totalTopics:n}}),Rn=g(()=>{const{failedCount:n,passedCount:e,submittedCount:l}=W.value;if(!l||!e&&!n)return{background:"var(--qc-hover)"};const i=Math.min(100,e/l*100),c=Math.min(100,i+n/l*100);return{background:`conic-gradient(#22c55e 0 ${i}%, #f97316 ${i}% ${c}%, var(--qc-hover) ${c}% 100%)`}}),le=g(()=>{const n=new Map;return G.value.forEach(e=>{const l=Ct.value.get(e.topicId);if(!l)return;const i=n.get(l.category)||{averageScore:0,category:l.category,count:0,latest:e.time};i.count+=1,i.averageScore+=e.score||0,i.latest=e.time,n.set(l.category,i)}),Array.from(n.values()).map(e=>Ye(ye({},e),{averageScore:e.count?Math.round(e.averageScore/e.count):0})).sort((e,l)=>l.count-e.count)}),ge=g(()=>G.value.map(n=>{const e=Ct.value.get(n.topicId);return Ye(ye({},n),{category:(e==null?void 0:e.category)||"算法",difficulty:(e==null?void 0:e.difficulty)||"基础"})})),Ln=g(()=>ge.value.slice(0,3)),re=g(()=>{const n=W.value.passedCount,e=W.value.submittedCount,l=le.value.filter(i=>i.averageScore<90).map(i=>i.category);return{coverageRate:(()=>{const i=new Set([...le.value.map(c=>c.category),...ge.value.map(c=>c.category)].filter(Boolean));return!i.size||!ut.length?0:Math.round(i.size/ut.length*100)})(),difficulty:{basic:ge.value.filter(i=>i.difficulty==="基础").length,challenge:ge.value.filter(i=>i.difficulty==="挑战").length,improve:ge.value.filter(i=>i.difficulty==="提升").length},solved:n,submitted:e,summary:e===0?"当前还没有提交记录，可以先从推荐题目开始建立刷题轨迹。":`最近提交 ${e} 道，已通过 ${n} 道，平均分 ${W.value.averageScore||0}。`,weakText:l.length?`建议先巩固：${l.slice(0,3).join("、")}。`:e?"目前记录中暂未发现需要优先补强的算法，可以继续拓展练习类别。":"完成练习后，这里会提示值得优先加强的算法类别。"}}),Le=g(()=>F.value.acceptance_criteria||[]),st=g(()=>F.value.knowledge_points||[]),Ft=g(()=>F.value.files||[]),xt=g(()=>Ve(F.value.test_cases||[])),Vt=g(()=>{var l;const n=new Set(xt.value.map(Qt)),e=Ve(F.value.hidden_test_cases||[]).filter(i=>!n.has(Qt(i)));return e.length?e:os(((l=$.value)==null?void 0:l.category)||fe.category)}),wt=g(()=>F.value.task_markdown||F.value.summary||""),Ne=g(()=>Zs(Ft.value,ee)),Nn=g(()=>zt(z.value)),Kt=g(()=>zt(Ne.value)),jn=g(()=>Ne.value.split(`
`).length),Bn=g(()=>{var n;return zt(((n=A.value)==null?void 0:n.code)||"")}),Hn=g(()=>{var n;return(((n=A.value)==null?void 0:n.code)||"").split(`
`).length}),Yt=g(()=>{var l,i,c;const n=(c=(i=(l=A.value)==null?void 0:l.cases)==null?void 0:i.find(p=>p.stderr))==null?void 0:c.stderr;return n?n.trim().split(`
`).slice(-2).join(`
`).trim():null}),Fn=g(()=>N.value?Ne.value:z.value),Vn=g(()=>{const n=Math.max(22,Fn.value.split(`
`).length);return Array.from({length:n},(e,l)=>l+1)}),lt=g(()=>{const n=$.value||fe,e=new Set(["输入输出","数组","字符串"]),l=new Set(n.tags.filter(i=>!e.has(i)));return he.filter(i=>i.id!==n.id).map(i=>{const c=i.tags.filter(b=>l.has(b)),p=i.category===n.category,m=(p?100:0)+c.length*16+(i.difficulty===n.difficulty?3:0)+(i.historyCount||0)*.1;return{item:i,sameCategory:p,sharedTags:c,score:m}}).filter(({sameCategory:i,sharedTags:c})=>i||c.length>0).sort((i,c)=>c.score-i.score).slice(0,4).map(({item:i})=>i)}),Kn=g(()=>B.value?B.value.teacher_comment||B.value.summary||F.value.summary||"提交后会基于检测样例给出平台式反馈。":"点击「生成点评」后，会结合题目要求和你当前提交的 Python 代码分析思路、边界和复杂度。"),$t=g(()=>{var e;return(((e=L.value)==null?void 0:e.cases)||[]).findIndex(l=>l.expected?!l.passed:!!(l.stderr||l.timeout))}),R=g(()=>{var l,i;const n=((l=L.value)==null?void 0:l.cases)||[];if(!n.length)return null;if(me.value==="custom"){const c=n.filter(p=>p.expected?p.passed:!p.stderr&&!p.timeout).length;return{mode:"custom",ok:c===n.length,passed:c,score:void 0,total:n.length}}const e=n.filter(c=>c.passed).length;return{mode:"submit",ok:e===n.length,passed:e,score:(i=L.value)==null?void 0:i.score,total:n.length}}),je=g(()=>{var e;const n=(e=$.value)==null?void 0:e.id;return n?ge.value.filter(l=>l.topicId===n):[]}),Yn=g(()=>({gridTemplateColumns:Ce.value?"42px 6px minmax(0, 1fr)":`${(bt.value*100).toFixed(2)}% 6px minmax(0, 1fr)`})),St=y(.62),Tt=y(!1),Un=g(()=>({gridTemplateRows:`${(St.value*100).toFixed(2)}% 6px minmax(0, 1fr)`})),Gn=g(()=>({"--qc-editor-font-size":`${13+xe.value}px`,"--qc-editor-line-height":`${22+xe.value*2}px`})),Ut=g(()=>{var e;const n=[...((e=$.value)==null?void 0:e.tags)||[],...st.value].map(l=>String(l).trim()).filter(Boolean);return[...new Set(n)].slice(0,10)}),It=g(()=>{const n=je.value;return{passed:n.filter(l=>l.status==="完成").length,total:n.length}}),Gt=g(()=>String(F.value.guide_markdown||"").trim()),Wt=g(()=>Gt.value?Us(Gt.value):""),Ot=g(()=>{var e;const n=(e=$.value)==null?void 0:e.id;return n&&Wn[n]||null}),Wn={palindrome:{space:"O(n)",time:"O(n)"},"max-number":{space:"O(1)",time:"O(n)"},"subarray-multiple":{space:"O(1)",time:"O(n·k)"},"interval-greedy":{space:"O(n)",time:"O(n log n)"},"grid-bfs":{space:"O(n·m)",time:"O(n·m)"},"frequency-sort":{space:"O(n)",time:"O(n log n)"},"binary-search-left":{space:"O(1)",time:"O(log n)"},"stairs-dp":{space:"O(1)",time:"O(n)"},"gcd-basic":{space:"O(1)",time:"O(log min(a, b))"},"deque-max":{space:"O(k)",time:"O(n)"},"island-count":{space:"O(n·m)",time:"O(n·m)"},"graph-shortest":{space:"O(n + m)",time:"O(n + m)"}};function Jt(){Ce.value=!Ce.value}Ue([$t,ke],([n,e])=>{n<0||e||Dt(()=>{var l,i;(i=(l=document.querySelector(".run-case.is-first-failure"))==null?void 0:l.scrollIntoView)==null||i.call(l,{behavior:"smooth",block:"center"})})});function Jn(n){if(n.key==="Tab"){n.preventDefault();const e=n.target,l=el(e.value,e.selectionStart,e.selectionEnd,n.shiftKey);z.value=l.code,Dt(()=>{e.selectionStart=l.selectionStart,e.selectionEnd=l.selectionEnd})}else if(n.key==="Enter"&&(n.ctrlKey||n.metaKey))n.preventDefault(),Mt();else if(n.key==="Enter"&&!n.shiftKey&&!n.ctrlKey&&!n.metaKey){const e=n.target;if(e.selectionStart!==e.selectionEnd)return;n.preventDefault();const l=tl(e.value,e.selectionStart);z.value=l.code,Dt(()=>{e.selectionStart=l.selectionStart,e.selectionEnd=l.selectionStart})}}function Xt(n){xe.value=Math.min(4,Math.max(-2,xe.value+n))}function Xn(){Q(z.value,"代码已复制")}function Qn(n){const e=ne.value.findIndex(l=>l.name===n.name);ae.value=e>=0?e:0,se.value="testcase"}let Be=null;function Zn(n){if(n.button!==0||Ce.value)return;const e=Lt.value;if(!e)return;n.preventDefault();const l=e.getBoundingClientRect();kt.value=!0,document.body.style.userSelect="none";const i=p=>{const m=(p.clientX-l.left)/l.width;bt.value=Math.min(.66,Math.max(.24,m))},c=()=>{kt.value=!1,document.body.style.userSelect="",window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",c),Be=null};window.addEventListener("mousemove",i),window.addEventListener("mouseup",c),Be=c}function es(){bt.value=.46}let He=null;function ts(n){var p;if(n.button!==0)return;const e=(p=n.currentTarget)==null?void 0:p.parentElement;if(!e)return;n.preventDefault();const l=e.getBoundingClientRect();Tt.value=!0,document.body.style.userSelect="none";const i=m=>{const b=(m.clientY-l.top)/l.height;St.value=Math.min(.78,Math.max(.3,b))},c=()=>{Tt.value=!1,document.body.style.userSelect="",window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",c),He=null};window.addEventListener("mousemove",i),window.addEventListener("mouseup",c),He=c}function ns(){St.value=.62}Tn(()=>{Be==null||Be(),He==null||He(),at(),Et()});function ss(){const n=D.personalizedContext;n!=null&&n.roundId&&te.push({path:"/learningResourceWorkshop",query:{personalized:"1",roundId:String(n.roundId),focusTopic:n.topic||"",tab:"knowledgeCard"}})}function ie(n){return n==="挑战"?"difficulty-tag hard":n==="提升"?"difficulty-tag medium":"difficulty-tag easy"}function Fe(n){return n.generatedResult?n.generatedResult:{acceptance_criteria:n.criteria,files:[{code:ls(n.id),description:"Python 参考答案",language:"python",name:"main.py"}],hidden_test_cases:n.hiddenCases,knowledge_points:n.tags,summary:n.summary,task_markdown:n.task,test_cases:n.testCases,title:n.title}}function ls(n){return{"binary-search-left":`n, x = map(int, input().split())
a = list(map(int, input().split()))
left, right = 0, n
while left < right:
    mid = (left + right) // 2
    if a[mid] >= x:
        right = mid
    else:
        left = mid + 1
print(left + 1 if left < n else n + 1)`,"deque-max":`from collections import deque

n, k = map(int, input().split())
a = list(map(int, input().split()))
q = deque()
ans = []
for i, num in enumerate(a):
    while q and q[0] <= i - k:
        q.popleft()
    while q and a[q[-1]] <= num:
        q.pop()
    q.append(i)
    if i >= k - 1:
        ans.append(str(a[q[0]]))
print(" ".join(ans))`,"gcd-basic":`from math import gcd

a, b = map(int, input().split())
print(gcd(a, b))`,"frequency-sort":`from collections import Counter

n = int(input())
nums = list(map(int, input().split()))
counts = Counter(nums)
for num in sorted(counts):
    print(num, counts[num])`,"grid-bfs":`from collections import deque

n, m = map(int, input().split())
grid = [input().strip() for _ in range(n)]
start = target = None
for i in range(n):
    for j in range(m):
        if grid[i][j] == "S":
            start = (i, j)
        elif grid[i][j] == "T":
            target = (i, j)

q = deque([(start[0], start[1], 0)])
seen = {start}
ans = -1
while q:
    x, y, d = q.popleft()
    if (x, y) == target:
        ans = d
        break
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] != "#" and (nx, ny) not in seen:
            seen.add((nx, ny))
            q.append((nx, ny, d + 1))
print(ans)`,"graph-shortest":`from collections import deque

n, m, s, t = map(int, input().split())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)
q = deque([(s, 0)])
seen = {s}
ans = -1
while q:
    node, dist = q.popleft()
    if node == t:
        ans = dist
        break
    for nxt in graph[node]:
        if nxt not in seen:
            seen.add(nxt)
            q.append((nxt, dist + 1))
print(ans)`,"interval-greedy":`n = int(input())
intervals = [tuple(map(int, input().split())) for _ in range(n)]
intervals.sort(key=lambda x: x[1])
count = 0
last_end = -10**30
for left, right in intervals:
    if left > last_end:
        count += 1
        last_end = right
print(count)`,"island-count":`from collections import deque

n, m = map(int, input().split())
grid = [input().strip() for _ in range(n)]
seen = [[False] * m for _ in range(n)]
count = 0
for i in range(n):
    for j in range(m):
        if grid[i][j] != "1" or seen[i][j]:
            continue
        count += 1
        seen[i][j] = True
        q = deque([(i, j)])
        while q:
            x, y = q.popleft()
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nx, ny = x + dx, y + dy
                if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == "1" and not seen[nx][ny]:
                    seen[nx][ny] = True
                    q.append((nx, ny))
print(count)`,"max-number":`nums = list(map(int, input().split()))
print(max(nums))`,"stairs-dp":`n = int(input())
if n <= 2:
    print(max(n, 1))
else:
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    print(b)`,palindrome:`s = input().strip()
print("YES" if s == s[::-1] else "NO")`,"subarray-multiple":`n, k = map(int, input().split())
a = list(map(int, input().split()))
for left in range(n):
    total = 0
    for right in range(left, min(n, left + k)):
        total += a[right]
        if total % k == 0:
            print(left + 1, right + 1)
            raise SystemExit
print(-1)`,"sum-one-to-n":`n = int(input())
print(n * (n + 1) // 2)`}[n]||'print("请根据题目要求完成代码")'}const as=new Set(["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"]),is=new Set(["abs","all","any","ascii","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","vars","zip"]);function ce(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zt(n){let e="",l=0,i=!1;const c=n.length;for(;l<c;){const p=n.slice(l),m=p[0];if(m==="#"){const O=p.indexOf(`
`),M=O===-1?p:p.slice(0,O);e+=`<span class="tok-comment">${ce(M)}</span>`,l+=M.length;continue}if(p.startsWith('"""')||p.startsWith("'''")){const O=p.slice(0,3),M=p.indexOf(O,3),de=M===-1?p:p.slice(0,M+3);e+=`<span class="tok-string">${ce(de)}</span>`,l+=de.length;continue}const b=/^(?:[rbfu]{0,2})(?:"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')/.exec(p);if(b&&/["']/.test(p.slice(0,2))){const O=b[0];e+=`<span class="tok-string">${ce(O)}</span>`,l+=O.length;continue}const P=/^[A-Za-z_]\w*/.exec(p);if(P){const O=P[0];let M="";i?(M="tok-def",i=!1):as.has(O)?(M="tok-keyword",(O==="def"||O==="class")&&(i=!0)):is.has(O)?M="tok-builtin":/^\s*\(/.test(p.slice(O.length))&&(M="tok-func"),e+=M?`<span class="${M}">${ce(O)}</span>`:ce(O),l+=O.length;continue}const U=/^\d[\w.]*/.exec(p);if(U){e+=`<span class="tok-number">${ce(U[0])}</span>`,l+=U[0].length;continue}if(m==="@"){const O=/^@[\w.]+/.exec(p);if(O){e+=`<span class="tok-decorator">${ce(O[0])}</span>`,l+=O[0].length;continue}}e+=ce(m!=null?m:""),l+=1}return`${e}
`}function Ve(n){return n.map((e,l)=>({expected:String(e.expected||"").trim(),input:String(e.input||"").trim(),name:String(e.name||`样例 ${l+1}`).trim()})).filter(e=>e.name&&(e.input||e.expected))}function Qt(n){return`${n.input.trim()}:::${n.expected.trim()}`}function os(n){return n==="二分"?[{expected:"3",input:`4 6
1 2 8 10`,name:"检测 1：位于中间"},{expected:"1",input:`5 0
1 2 3 4 5`,name:"检测 2：小于首项"}]:n==="动态规划"?[{expected:"13",input:"6",name:"检测 1：中等规模"},{expected:"1",input:"1",name:"检测 2：最小规模"}]:n==="数学"?[{expected:"1",input:"17 19",name:"检测 1：互质"},{expected:"12",input:"24 36",name:"检测 2：公共因子"}]:n==="数据结构"?[{expected:"4 4 6 6",input:`6 3
4 4 4 1 6 2`,name:"检测 1：重复值"},{expected:"9 8 7",input:`5 3
9 8 7 6 5`,name:"检测 2：递减数组"}]:n==="图论"?[{expected:"2",input:`5 5 1 5
1 2
2 3
3 5
1 4
4 5`,name:"检测 1：存在更短路径"},{expected:"-1",input:`4 2 1 4
1 2
2 3`,name:"检测 2：不可达"}]:n==="贪心"?[{expected:"1",input:`3
1 5
2 6
3 7`,name:"检测 1：全部冲突"},{expected:"4",input:`4
1 2
3 4
5 6
7 8`,name:"检测 2：全部可选"}]:n==="搜索"?[{expected:"-1",input:`2 2
S#
#T`,name:"检测 1：无法到达"},{expected:"4",input:`3 3
S..
.#.
..T`,name:"检测 2：绕开障碍"}]:n==="双指针"?[{expected:"1 1",input:`4 1
8 3 5 7`,name:"检测 1：长度限制"},{expected:"-1",input:`5 2
2 3 5 7 11`,name:"检测 2：无合法子段"}]:[{expected:"42",input:"42",name:"检测 1：单个数字"},{expected:"-1",input:"-5 -10 -1 -3",name:"检测 2：负数边界"}]}function Zt(n){return n.trim().toLowerCase().replace(/[^\da-z\u4e00-\u9fa5]+/gi,"-").replace(/^-+|-+$/g,"").slice(0,24)||"focus"}function en(n,e){const l=Ve(e.test_cases||n.testCases||[]),i=l.length?l.map(c=>ye({},c)):[{expected:"",input:"",name:"自定义"}];i.push({expected:"",input:"",name:"自定义"}),ne.value=i,ae.value=0}function Pt(n,e=Fe(n)){var l,i;at(),Et(),ct.value={topic:n,result:e},z.value=(l=ds(n.id))!=null?l:n.seedCode,en(n,e),L.value=null,B.value=null,me.value=null,N.value=!1,A.value=null,qe.value=cs(n.id),Qe.value="",Ze.value="",ft.value=1,mt.value=1,H.value="description",se.value="testcase",Z.value="practice",(i=j.value)==null||i.markStarted()}function us(){dt.value=!0,H.value="notes"}function tn(){dt.value=!1,H.value==="notes"&&(H.value="description")}function rs(){H.value==="notes"?tn():us()}function nn(n){var l;return`qc-code-practice-note:${Number(((l=Y.userInfo)==null?void 0:l.id)||0)}:${n}`}function cs(n){try{return localStorage.getItem(nn(n))||""}catch(e){return""}}function at(){$e&&(clearTimeout($e),$e=null);const n=pt.value;if(n){try{localStorage.setItem(nn(n),qe.value),Qe.value=new Date().toLocaleTimeString("zh-CN",{hour12:!1})}catch(e){}pt.value=null}}let $e=null;Ue(qe,()=>{var e;const n=(e=$.value)==null?void 0:e.id;n&&(pt.value=n,$e&&clearTimeout($e),$e=setTimeout(at,800))});function sn(n){var l;return`qc-code-practice-draft:${Number(((l=Y.userInfo)==null?void 0:l.id)||0)}:${n}`}function ds(n){try{return localStorage.getItem(sn(n))}catch(e){return null}}function Et(){Se&&(clearTimeout(Se),Se=null);const n=vt.value;if(n){try{localStorage.setItem(sn(n),z.value),Ze.value=new Date().toLocaleTimeString("zh-CN",{hour12:!1})}catch(e){}vt.value=null}}let Se=null;Ue(z,()=>{var e;const n=(e=$.value)==null?void 0:e.id;n&&(vt.value=n,Se&&clearTimeout(Se),Se=setTimeout(Et,600))});function ps(n){const e=n==null?void 0:n.target,l=e?e.selectionStart:0,p=(e?e.value:z.value).slice(0,l).split(`
`);ft.value=p.length,mt.value=(p[p.length-1]||"").length+1}const ln=y(null);function an(n){const e=n.target,l=ln.value;l&&(l.scrollTop=e.scrollTop,l.scrollLeft=e.scrollLeft)}function it(n){ps(n),an(n)}function vs(n){if(J.value.includes(n.id)){J.value=J.value.filter(e=>e!==n.id);return}J.value=[...J.value,n.id]}function oe(n){Pt(n,n.generatedResult||Fe(n))}function fs(){Z.value="overview"}let Ke=0;function on(n){return X(this,null,function*(){var l;const e=++Ke;_e.value=!0,Pe.value="",Z.value="overview";try{const i=Number(((l=Y.userInfo)==null?void 0:l.id)||0);if(!i)throw new Error("请先登录后再生成个性化代码实操");const c=yield fetch(`${K}/api/v1/student/resources/code-practice/generate`,{body:JSON.stringify({case_type:"算法",difficulty:"基础",education_level:"本科",language:ee,profile_hint:[n.profileHint,n.learningMaterial].filter(Boolean).join(`
`).slice(0,1e3),subject:n.course.slice(0,80),topic:n.topic.slice(0,160),user_id:i,weaknesses:(n.weaknesses||n.topic).slice(0,1e3)}),headers:{"Content-Type":"application/json"},method:"POST"}),p=yield qt(c);if(!c.ok||p.code!==0)throw new Error(pn(p,c.status,"代码实操生成失败"));const m=ms(n,p.data);if(e!==Ke)return;rt.value=[m,...rt.value.filter(b=>b.id!==m.id)],nt.value=0,Pt(m,m.generatedResult||Fe(m))}catch(i){if(e!==Ke)return;const c=i instanceof Error?i.message:"代码实操生成失败，请稍后重试";console.error(i),Pe.value=c,Z.value="overview",V.error(c)}finally{e===Ke&&(_e.value=!1)}})}function ms(n,e){if(!e||typeof e!="object")throw new Error("代码实操生成结果为空，请重试");const l=String(e.title||`${n.topic}实操练习`).trim(),i=String(e.task_markdown||e.summary||`请完成与「${n.topic}」相关的代码实操。`),c=String(e.summary||`围绕「${n.topic}」生成的代码实操。`),p=Ve(Array.isArray(e.test_cases)?e.test_cases:[]),m=Ve(Array.isArray(e.hidden_test_cases)?e.hidden_test_cases:[]),b=Array.isArray(e.knowledge_points)?e.knowledge_points.map(M=>String(M).trim()).filter(Boolean):[],P=Array.isArray(e.acceptance_criteria)?e.acceptance_criteria.map(M=>String(M).trim()).filter(Boolean):[],U=Ye(ye({},e),{acceptance_criteria:P,files:Array.isArray(e.files)?e.files:[],hidden_test_cases:m,knowledge_points:b,summary:c,task_markdown:i,test_cases:p,title:l}),O=[...new Set([n.topic,...b])];return{category:Pn(O.join(" ")),criteria:P,difficulty:"基础",generatedResult:U,hiddenCases:m,id:`personalized-${Zt(n.course)}-${Zt(n.topic)}`,seedCode:At(l),source:"阶段个性化生成",summary:c,tags:O,task:i,testCases:p,title:l}}Ue(()=>D.personalizedContext,n=>{if(!n){Ke+=1,_e.value=!1,Pe.value="";return}on(n)},{immediate:!0});function gs(){const n=Me.value.length;n&&(nt.value=(nt.value+En)%n)}function ys(n,e,l,i){const c=(i==null?void 0:i.cases)||[];G.value=[{id:`h-${Date.now()}`,score:l,status:e,time:"刚刚",title:n.title,topicId:n.id,code:i==null?void 0:i.code,language:ee,passedCaseCount:c.filter(p=>p.passed).length,totalCases:c.length,cases:i==null?void 0:i.cases},...G.value.slice(0,8)]}function hs(n,e){return X(this,null,function*(){if(!j.value)return;const l=n.cases||[];return j.value.submitCodeEvidence(e,{language:ee,passed:!!n.passed,passed_case_count:l.filter(i=>i.passed).length,test_case_count:l.length})})}function _s(n,e){return X(this,null,function*(){var p,m;const l=$.value,i=Number(((p=Y.userInfo)==null?void 0:p.id)||0);if(!l||!i)throw new Error("请先登录后再提交代码");const c=n.cases||[];yield Xs({user_id:i,attempts:[{attempt_key:`code:${l.id}:${Date.now()}`,analysis:n.passed?"检测样例全部通过":"仍有检测样例未通过",difficulty:l.difficulty,is_correct:!!n.passed,knowledge_point:l.category,max_score:100,question:l.task||l.title,question_id:l.id,question_type:"PROGRAMMING",resource_type:"CODE_PRACTICE",round_id:(m=D.personalizedContext)==null?void 0:m.roundId,score:e,source_type:"CODE_PRACTICE",submission_snapshot:{code:z.value,language:ee,passed_case_count:c.filter(b=>b.passed).length,test_case_count:c.length,test_results:c},title:l.title,user_answer:z.value}]})})}function bs(n){return Ct.value.get(n)||null}function qt(n){return X(this,null,function*(){const e=yield n.text();if(!e)return{};try{return JSON.parse(e)}catch(l){return{detail:e}}})}function At(n){return`# ${n}
# 请从标准输入读取数据，并按题目要求输出结果

def main():
    pass

if __name__ == '__main__':
    main()
`}function un(n,e){const l=e.trim().toLowerCase().replace(/[^\da-z\u4e00-\u9fa5]+/gi,"-").replace(/^-+|-+$/g,"").slice(0,28)||"practice";return`${n}-${l}-${Date.now()}`}function ks(n,e){var P;const l=n.trim()||((P=D.personalizedContext)==null?void 0:P.topic)||"数组遍历",i=e.trim()||"围绕当前薄弱点生成一道可直接判题的 Python 算法练习。",c=ht.value||Pn(`${l} ${i}`),p=_t.value,m=un("ai-created",l),b=[l,c,"AI 创建"];return c==="字符串"?{category:c,criteria:["正确读取字符串","统计目标字符出现次数","输出一个整数"],difficulty:p,hiddenCases:[{expected:"0",input:`algorithm
z`,name:"检测 1：不存在目标字符"}],id:m,seedCode:`s = input().strip()
target = input().strip()
# TODO: 输出 target 在 s 中出现的次数
`,source:"AI 创建",summary:`围绕“${l}”练习字符串读取、遍历和计数。`,tags:b,task:`给定一个字符串 s 和一个目标字符 target，请输出 target 在 s 中出现的次数。

创建要求：${i}

输入描述：
第一行输入字符串 s。
第二行输入一个字符 target。

输出描述：
输出一个整数，表示出现次数。`,testCases:[{expected:"2",input:`banana
a`,name:"样例 1：普通字符串"}],title:`${l}字符计数练习`}:c==="搜索"||c==="图论"?{category:c,criteria:["正确读取网格","从 S 出发搜索四连通空地","输出可到达格子数量"],difficulty:p,hiddenCases:[{expected:"1",input:`2 2
S#
##`,name:"检测 1：起点被围住"}],id:m,seedCode:`from collections import deque

n, m = map(int, input().split())
grid = [input().strip() for _ in range(n)]
# TODO: 输出从 S 出发能到达的非 # 格子数量
`,source:"AI 创建",summary:`围绕“${l}”练习网格搜索和访问标记。`,tags:b,task:`给定一个 n 行 m 列网格，# 表示障碍，. 表示空地，S 表示起点。请输出从 S 出发，按上下左右移动能够到达的非障碍格子数量。

创建要求：${i}

输入描述：
第一行输入 n m。
接下来 n 行输入网格。

输出描述：
输出一个整数。`,testCases:[{expected:"5",input:`3 3
S..
.#.
..#`,name:"样例 1：绕开障碍"}],title:`${l}网格可达练习`}:c==="动态规划"?{category:c,criteria:["建立递推关系","正确处理 n=1 和 n=2","输出方案数"],difficulty:p,hiddenCases:[{expected:"13",input:"6",name:"检测 1：中等规模"}],id:m,seedCode:`n = int(input())
# TODO: 每次可走 1 或 2 级，输出到达第 n 级台阶的方案数
`,source:"AI 创建",summary:`围绕“${l}”练习一维递推和边界初始化。`,tags:b,task:`有 n 级台阶，每次可以走 1 级或 2 级。请输出走到第 n 级台阶的不同方案数。

创建要求：${i}

输入描述：
一行，一个整数 n。

输出描述：
输出方案数。`,testCases:[{expected:"5",input:"4",name:"样例 1：基础递推"}],title:`${l}台阶递推练习`}:c==="数学"?{category:c,criteria:["正确读取两个整数","求最大公约数","输出一个整数"],difficulty:p,hiddenCases:[{expected:"1",input:"17 19",name:"检测 1：互质"}],id:m,seedCode:`a, b = map(int, input().split())
# TODO: 输出 a 和 b 的最大公约数
`,source:"AI 创建",summary:`围绕“${l}”练习取模、循环和数学基础。`,tags:b,task:`给定两个正整数 a 和 b，请输出它们的最大公约数。

创建要求：${i}

输入描述：
一行，两个正整数 a b。

输出描述：
输出最大公约数。`,testCases:[{expected:"6",input:"18 24",name:"样例 1：普通数据"}],title:`${l}最大公约数练习`}:{category:c,criteria:["正确读取 n 和数组","统计大于 k 的元素个数","输出一个整数"],difficulty:p,hiddenCases:[{expected:"0",input:`4 10
1 2 3 4`,name:"检测 1：没有元素满足"}],id:m,seedCode:`n, k = map(int, input().split())
nums = list(map(int, input().split()))
# TODO: 输出 nums 中大于 k 的元素个数
`,source:"AI 创建",summary:`围绕“${l}”练习数组遍历、条件判断和计数。`,tags:b,task:`给定一个长度为 n 的整数数组 nums 和整数 k，请输出数组中大于 k 的元素个数。

创建要求：${i}

输入描述：
第一行输入 n k。
第二行输入 n 个整数。

输出描述：
输出一个整数。`,testCases:[{expected:"2",input:`5 3
1 4 2 8 3`,name:"样例 1：普通数组"}],title:`${l}条件计数练习`}}function rn(n,e=!0){be.value=[n,...be.value],J.value=[n.id,...J.value.filter(l=>l!==n.id)],e&&oe(n)}function Cs(){return X(this,null,function*(){if(!Xe.value){Xe.value=!0;try{const n=ks(gt.value,yt.value);rn(n),V.success("AI 练习题已创建")}finally{Xe.value=!1}}})}function xs(){const n=et.value.trim();if(!n){V.warning("请填写题目名称");return}const e={category:"数组",criteria:["根据题目名称补充解题思路","使用自测输入验证程序","保存并提交当前代码"],difficulty:"基础",hiddenCases:[{expected:"",input:"",name:"检测 1：自定义空样例"}],id:un("manual-created",n),seedCode:At(n),source:"自己创建",summary:"自己创建的 Python 练习题，可先自测运行再保存提交。",tags:["自己创建"],task:`练习题目：${n}

请根据这个题目名称自行补充解题要求，并在编辑器中完成 Python 代码。可以先使用自测输入运行验证，再保存提交。`,testCases:[{expected:"",input:"",name:"样例 1：自测样例"}],title:n};rn(e),et.value="",V.success("自定义练习题已创建")}function ws(){const n=$.value||fe;z.value=At(F.value.title||n.title),en(n,F.value),L.value=null,B.value=null,me.value=null,N.value=!1}function cn(n){return X(this,null,function*(){const e=yield fetch(`${K}/api/v1/student/resources/code-practice/run`,{body:JSON.stringify({language:ee,submitted_code:z.value,test_cases:n}),headers:{"Content-Type":"application/json"},method:"POST"}),l=yield qt(e);if(!e.ok||l.code!==0)throw new Error(l.detail||l.message||`运行失败：HTTP ${e.status}`);return l.data})}function Mt(){return X(this,null,function*(){if(!z.value.trim()||!$.value){V.warning("请先进入一个题目并编写 Python 代码");return}if(ne.value.length){We.value=!0,B.value=null,me.value="custom",se.value="result";try{L.value=yield cn(ne.value.map(n=>ye({},n))),V.success("运行完成")}catch(n){console.error(n),V.error((n==null?void 0:n.message)||"自测运行失败")}finally{We.value=!1}}})}function dn(n){var c;const e=n.cases||[],l=e.length||1,i=e.filter(p=>p.passed).length;return{correct:!!n.passed,passed_tests:e.map(p=>({feedback:$s(p),name:p.name,passed:p.passed})),problems:e.filter(p=>!p.passed).map(p=>`${p.name} 未通过，请检查输入读取、边界条件和输出格式。`),score:(c=n.score)!=null?c:Math.round(i/l*100),suggestions:n.passed?["检测样例已通过，可以继续优化时间复杂度或整理函数结构。"]:["先对照失败用例的实际输出和期望输出，找出分歧点。","确认 print 没有多余提示文字、空格或空行。","检查单元素、重复元素、负数、无法到达等边界情况。"],summary:n.passed?"代码通过了本次检测样例，核心逻辑基本正确。":"代码没有完全通过检测样例，需要继续修改。",teacher_comment:n.passed?"核心流程正确，可以考虑进一步压缩代码结构并整理边界处理。":"本次提交存在可修正的边界问题，建议优先修复输出和输入解析。"}}function $s(n){return n.timeout?"运行超时，请检查是否存在死循环或阻塞输入。":n.stderr?`运行错误：${n.stderr}`:n.expected?`实际输出：${n.stdout||"无输出"}；期望输出：${n.expected}`:`实际输出：${n.stdout||"无输出"}`}function Ss(){var e,l,i;const n=((e=L.value)==null?void 0:e.cases)||[];return n.length?{passed:!!((l=L.value)!=null&&l.passed),score:(i=L.value)==null?void 0:i.score,cases:n.map(c=>({name:c.name,passed:c.passed,expected:c.expected,stdout:(c.stdout||"").slice(0,300),stderr:(c.stderr||"").slice(-400),timeout:c.timeout}))}:null}function Ts(){return X(this,null,function*(){var l;const n=yield fetch(`${K}/api/v1/student/resources/code-practice/evaluate`,{body:JSON.stringify({acceptance_criteria:F.value.acceptance_criteria||[],language:ee,reference_files:Ft.value,submitted_code:z.value,task_markdown:wt.value,test_cases:xt.value.map(i=>Ye(ye({},i),{name:`题面样例：${i.name}`})),title:F.value.title||((l=$.value)==null?void 0:l.title)||"Python 算法题",latest_run:Ss()}),headers:{"Content-Type":"application/json"},method:"POST"}),e=yield qt(n);if(!n.ok||e.code!==0)throw new Error(pn(e,n.status,"AI 点评失败"));return e.data})}function pn(n,e,l){var c,p,m,b,P,U,O,M,de;const i=(de=(M=(O=(U=(b=(p=(c=n==null?void 0:n.detail)==null?void 0:c.error)==null?void 0:p.message)!=null?b:(m=n==null?void 0:n.detail)==null?void 0:m.message)!=null?U:(P=n==null?void 0:n.error)==null?void 0:P.message)!=null?O:n==null?void 0:n.message)!=null?M:n==null?void 0:n.detail)!=null?de:"";return e===402||String(i).includes("Insufficient Balance")?"AI 模型额度不足，暂时无法调用在线点评。":i?String(i):`${l}：HTTP ${e}`}function Is(){var p;const n=((p=L.value)==null?void 0:p.cases)||[],e=[],l=[];if(n.forEach(m=>{var b;if(m.timeout){e.push(`${m.name} 运行超时：检查是否存在死循环、遗漏的 input() 或过重的循环。`),l.push(`${m.name} 超时通常因为程序在等待输入，确认读入格式与用例输入一致。`);return}if(m.stderr){const P=m.stderr.trim().split(`
`),U=((b=P[P.length-1])==null?void 0:b.trim())||"运行报错";e.push(`${m.name} 运行报错：${U}。请先修复这个错误再提交。`),l.push(`报错来自沙箱真实执行结果，优先定位 ${U.split(":")[0]||"该异常"} 对应的代码行。`);return}m.expected&&!m.passed&&(e.push(`${m.name} 输出不匹配：程序输出「${m.stdout||"无输出"}」，期望「${m.expected}」。`),l.push(`对照 ${m.name} 的期望输出检查计算逻辑与输出格式（分隔符、换行、多余文字）。`))}),!n.length){const m=z.value.trim(),b=/input\s*\(/.test(m),P=/print\s*\(/.test(m);b||e.push("暂未看到明确的 input() 读取，请确认程序能接收题目输入。"),P||e.push("暂未看到 print() 输出，请确认最终结果会被打印。"),l.push("先点「运行」验证样例，再保存并提交；有判题结果后点评会引用真实输出。")}e.length||e.push("未发现明显问题，可以继续优化时间复杂度或整理函数结构。");const i=L.value?dn(L.value):null,c=n.filter(m=>m.expected?!m.passed:!!(m.stderr||m.timeout)).length;return{correct:i==null?void 0:i.correct,passed_tests:i==null?void 0:i.passed_tests,problems:e.slice(0,4),score:i==null?void 0:i.score,suggestions:(l.length?l:["对照参考答案检查变量更新顺序、输出格式和极端数据。"]).slice(0,3),summary:c?`本地规则点评：最近一次运行有 ${c} 个用例未通过，按下面的问题逐条修复。`:"本地规则点评：基于当前代码和最近一次运行结果生成。",teacher_comment:(i==null?void 0:i.teacher_comment)||"当前点评来自本地规则，已引用沙箱真实报错与输出差异；在线 AI 恢复后会给出更完整的分析。"}}function vn(){return X(this,null,function*(){var n,e;if(!z.value.trim()||!$.value){V.warning("请先进入一个题目并编写 Python 代码");return}ke.value=!0,me.value="submit",se.value="result",B.value=null;try{const l=yield cn(Vt.value);L.value=l;const i=(e=(n=l.score)!=null?n:dn(l).score)!=null?e:0;yield _s(l,i),ys($.value,l.passed?"完成":"未通过",i,{cases:l.cases,code:z.value});const c=yield hs(l,i);(c==null?void 0:c.syncStatus)==="PENDING"?V.warning("判题结果已保存，资源进度同步中"):V.success("判题完成")}catch(l){console.error(l),V.error((l==null?void 0:l.message)||"提交检测失败")}finally{ke.value=!1}})}function fn(){return X(this,null,function*(){if(!z.value.trim()||!$.value){V.warning("请先进入一个题目并编写 Python 代码");return}const n=L.value,e=me.value;Je.value=!0,se.value="review";try{B.value=yield Ts(),V.success("AI 点评完成")}catch(l){console.error(l),B.value=Is();const i=String((l==null?void 0:l.message)||"");i.includes("额度不足")||i.includes("Insufficient Balance")?V.warning("AI 模型额度不足，已使用本地规则生成点评。"):V.warning("在线 AI 点评暂不可用，已使用本地规则生成点评。")}finally{L.value=n,me.value=e,Je.value=!1}})}function mn(n){const e=bs(n.topicId);e&&Pt(e,Fe(e))}function Os(){return Me.value.length?`${Me.value.length} 道待刷`:"暂无新题"}return(n,e)=>{var l,i,c,p,m,b,P,U,O,M,de,gn,yn,hn,_n,bn,kn,Cn,xn,wn;return o(),u("div",sl,[t("header",ll,[t("div",al,[t("span",il,[d(r(E),{icon:"lucide:code-2"})]),t("div",null,[t("h1",null,a(tt.value?"Python 专项代码实操":"Python 算法实操"),1),t("p",null,a(tt.value?`围绕「${((l=D.personalizedContext)==null?void 0:l.topic)||"当前薄弱点"}」练习、运行、判题和代码分析。`:"围绕 Python 算法题练习、运行、判题和 AI 代码分析。"),1)])]),Z.value==="overview"&&!_e.value?(o(),u("div",ol,[d(r(T),{effect:"plain"},{default:f(()=>[v("算法题库 "+a(we.value.length)+" 道",1)]),_:1}),d(r(T),{effect:"plain"},{default:f(()=>[v("已提交 "+a(W.value.submittedCount)+" 次",1)]),_:1})])):Z.value==="practice"?(o(),u("div",ul,[$.value?(o(),u("div",rl,[t("strong",null,a($.value.title),1),d(r(T),{size:"small",effect:"plain",class:w(ie($.value.difficulty))},{default:f(()=>[v(a($.value.difficulty),1)]),_:1},8,["class"]),d(r(T),{size:"small",effect:"plain"},{default:f(()=>[v(a($.value.category),1)]),_:1})])):S("",!0),d(r(q),{class:"run-button",type:"primary",plain:"",loading:We.value,disabled:!z.value.trim()||N.value,onClick:Mt},{default:f(()=>[d(r(ot),null,{default:f(()=>[d(r(In))]),_:1}),e[22]||(e[22]=v(" 运行 ",-1))]),_:1},8,["loading","disabled"]),d(r(q),{class:w(["submit-button",{"code-ready":z.value.trim()}]),type:"success",loading:ke.value,disabled:!z.value.trim(),onClick:vn},{default:f(()=>[d(r(ot),null,{default:f(()=>[d(r(On))]),_:1}),e[23]||(e[23]=v(" 保存并提交 ",-1))]),_:1},8,["class","loading","disabled"]),d(r(q),{icon:r(Ls),onClick:fs},{default:f(()=>[...e[24]||(e[24]=[v("返回题单",-1)])]),_:1},8,["icon"])])):S("",!0)]),_e.value?(o(),u("main",cl,[d(Ys,{title:"正在生成本节点代码实操",description:`正在围绕「${(i=D.personalizedContext)==null?void 0:i.topic}」准备题目和测试样例，完成后会直接打开练习。`,variant:"mountain",contained:""},null,8,["description"])])):Z.value==="overview"?(o(),u("main",dl,[t("section",pl,[Pe.value?(o(),u("article",vl,[t("div",null,[e[25]||(e[25]=t("h2",null,"个性化练习暂时没有生成",-1)),t("p",null,a(Pe.value),1)]),d(r(q),{type:"primary",loading:_e.value,onClick:e[0]||(e[0]=s=>D.personalizedContext&&on(D.personalizedContext))},{default:f(()=>[...e[26]||(e[26]=[v("重试生成",-1)])]),_:1},8,["loading"])])):S("",!0),t("article",fl,[t("div",ml,[e[27]||(e[27]=t("div",null,[t("h2",null,"创建练习题目"),t("p",null,"可以让 AI 围绕薄弱知识点生成，也可以手动录入自己的练习题。")],-1)),t("div",gl,[t("button",{type:"button",class:w({active:Ae.value==="ai"}),onClick:e[1]||(e[1]=s=>Ae.value="ai")}," AI 创建 ",2),t("button",{type:"button",class:w({active:Ae.value==="manual"}),onClick:e[2]||(e[2]=s=>Ae.value="manual")}," 自己创建 ",2)])]),Ae.value==="ai"?(o(),u("div",yl,[t("label",null,[e[28]||(e[28]=t("span",null,"练习知识点",-1)),d(r(Ge),{modelValue:gt.value,"onUpdate:modelValue":e[3]||(e[3]=s=>gt.value=s),placeholder:((c=D.personalizedContext)==null?void 0:c.topic)||"例如：列表索引、BFS、动态规划"},null,8,["modelValue","placeholder"])]),t("div",hl,[t("label",null,[e[29]||(e[29]=t("span",null,"算法分类",-1)),t("div",_l,[(o(!0),u(C,null,I(r(ut),s=>(o(),u("button",{key:s,type:"button",class:w({active:ht.value===s}),onClick:k=>ht.value=s},a(s),11,bl))),128))])]),t("label",null,[e[30]||(e[30]=t("span",null,"难度",-1)),t("div",kl,[(o(),u(C,null,I(ve,s=>t("button",{key:s,type:"button",class:w({active:_t.value===s}),onClick:k=>_t.value=s},a(s),11,Cl)),64))])])]),t("label",null,[e[31]||(e[31]=t("span",null,"生成要求",-1)),d(r(Ge),{modelValue:yt.value,"onUpdate:modelValue":e[4]||(e[4]=s=>yt.value=s),type:"textarea",rows:3,placeholder:"例如：题目不要太难，重点练习边界判断，并给出可直接判题的样例。"},null,8,["modelValue"])]),t("div",xl,[d(r(T),{effect:"plain"},{default:f(()=>[...e[32]||(e[32]=[v("生成后自动加入我的题单",-1)])]),_:1}),d(r(q),{type:"primary",loading:Xe.value,onClick:Cs},{default:f(()=>[...e[33]||(e[33]=[v(" 生成并开始练习 ",-1)])]),_:1},8,["loading"])])])):(o(),u("div",wl,[t("label",null,[e[34]||(e[34]=t("span",null,"题目名称",-1)),d(r(Ge),{modelValue:et.value,"onUpdate:modelValue":e[5]||(e[5]=s=>et.value=s),placeholder:"例如：统计大于 k 的数字"},null,8,["modelValue"])]),t("div",$l,[d(r(T),{effect:"plain"},{default:f(()=>[...e[35]||(e[35]=[v("取名后直接进入练习",-1)])]),_:1}),d(r(q),{type:"primary",onClick:xs},{default:f(()=>[...e[36]||(e[36]=[v("保存并开始练习",-1)])]),_:1})])]))]),be.value.length?(o(),u("article",Sl,[t("div",Tl,[e[37]||(e[37]=t("div",null,[t("h2",null,"我的创建题目"),t("p",null,"AI 创建和自己创建的题会保留在这里，方便继续练习。")],-1)),d(r(T),{effect:"plain"},{default:f(()=>[v(a(be.value.length)+" 道",1)]),_:1})]),t("div",Il,[(o(!0),u(C,null,I(be.value,s=>(o(),u("button",{key:s.id,class:"topic-card created-topic-card",type:"button",onClick:k=>oe(s)},[t("div",zl,[t("strong",null,a(s.title),1),d(r(T),{size:"small",effect:"plain"},{default:f(()=>[v(a(s.source),1)]),_:2},1024)]),t("p",null,a(s.summary),1),t("div",Pl,[t("span",null,a(s.category)+" · "+a(s.difficulty),1),t("span",null,a(s.tags.join(" / ")),1)])],8,Ol))),128))])])):S("",!0),t("article",El,[t("div",ql,[t("div",null,[e[38]||(e[38]=t("h2",null,"推荐题目",-1)),t("p",null,a(tt.value?"围绕当前首个薄弱知识点推荐真实可做的小题。":"只显示未收藏、未做过的题，点一下直接进入做题界面。"),1)]),t("div",Al,[d(r(T),{effect:"light"},{default:f(()=>[v(a(Os()),1)]),_:1}),d(r(q),{text:"",icon:r(Ns),onClick:gs},{default:f(()=>[...e[39]||(e[39]=[v("换一批",-1)])]),_:1},8,["icon"])])]),t("div",Ml,[t("div",Dl,[e[40]||(e[40]=t("span",{class:"practice-filter-label"},"难度",-1)),(o(!0),u(C,null,I(["all",...ve],s=>(o(),u("button",{key:s,type:"button",class:w(["practice-filter-chip",{active:De.value===s}]),onClick:k=>De.value=s},a(s==="all"?"全部":s),11,Rl))),128))]),Bt.value.length?(o(),u("div",Ll,[e[41]||(e[41]=t("span",{class:"practice-filter-label"},"分类",-1)),(o(!0),u(C,null,I(["all",...Bt.value],s=>(o(),u("button",{key:s,type:"button",class:w(["practice-filter-chip",{active:Re.value===s}]),onClick:k=>Re.value=s},a(s==="all"?"全部":s),11,Nl))),128))])):S("",!0)]),Ht.value.length?(o(),u("div",jl,[(o(!0),u(C,null,I(Ht.value,s=>(o(),u("article",{key:s.id,class:"topic-card",role:"button",tabindex:"0",onClick:k=>oe(s),onKeydown:[zn(Ie(k=>oe(s),["prevent"]),["enter"]),zn(Ie(k=>oe(s),["prevent"]),["space"])]},[t("div",Hl,[t("strong",null,a(s.title),1),d(r(T),{size:"small",effect:"plain",class:w(ie(s.difficulty))},{default:f(()=>[v(a(s.difficulty),1)]),_:2},1032,["class"])]),t("p",null,a(s.summary),1),t("div",Fl,[d(r(T),{size:"small",effect:"plain"},{default:f(()=>[...e[42]||(e[42]=[v("未收藏",-1)])]),_:1}),d(r(T),{size:"small",effect:"plain"},{default:f(()=>[...e[43]||(e[43]=[v("未做过",-1)])]),_:1})]),t("div",Vl,[t("span",null,a(s.category),1),t("span",null,a(s.tags.join(" / ")),1)]),t("div",Kl,[d(r(q),{text:"",size:"small",onClick:Ie(k=>vs(s),["stop"])},{default:f(()=>[v(a(J.value.includes(s.id)?"取消收藏":"收藏题目"),1)]),_:2},1032,["onClick"]),d(r(q),{text:"",size:"small",onClick:Ie(k=>oe(s),["stop"])},{default:f(()=>[...e[44]||(e[44]=[v(" 开始练习 ",-1)])]),_:1},8,["onClick"])])],40,Bl))),128))])):Mn.value?(o(),Te(r(js),{key:1,description:"没有符合筛选条件的题目","image-size":80},{default:f(()=>[d(r(q),{size:"small",onClick:Dn},{default:f(()=>[...e[45]||(e[45]=[v("清除筛选",-1)])]),_:1})]),_:1})):(o(),u("p",Yl,"当前没有可推荐的题目，点「换一批」试试。"))]),t("article",Ul,[t("div",Gl,[e[47]||(e[47]=t("div",null,[t("h2",null,"我的题单"),t("p",null,"收藏后会固定显示，便于反复刷同一类题。")],-1)),d(r(q),{text:"",onClick:e[6]||(e[6]=s=>J.value=[])},{default:f(()=>[...e[46]||(e[46]=[v("清空",-1)])]),_:1})]),Nt.value.length?(o(),u("div",Wl,[(o(!0),u(C,null,I(Nt.value,s=>(o(),u("button",{key:s.id,class:"saved-card",type:"button",onClick:k=>oe(s)},[t("div",null,[t("strong",null,a(s.title),1),t("span",null,a(s.category)+" · "+a(s.tags.join(" / ")),1)]),d(r(T),{size:"small",effect:"plain",class:w(ie(s.difficulty))},{default:f(()=>[v(a(s.difficulty),1)]),_:2},1032,["class"])],8,Jl))),128))])):(o(),u("p",Xl,"还没有收藏题目，先从推荐题里挑一个吧。"))])]),t("section",Ql,[t("article",Zl,[e[53]||(e[53]=t("div",{class:"panel-header"},[t("div",null,[t("h2",null,"做题进度"),t("p",null,"提交通过率和算法覆盖情况会在这里聚合展示。")])],-1)),t("div",ea,[t("div",{class:"progress-ring",style:Oe(Rn.value)},[t("div",ta,[t("strong",null,a(W.value.passRate)+"%",1),e[48]||(e[48]=t("span",null,"提交通过率",-1))])],4),t("div",na,[t("div",sa,[e[49]||(e[49]=t("span",null,"已通过题目",-1)),t("strong",null,a(W.value.passedCount),1)]),t("div",la,[e[50]||(e[50]=t("span",null,"未通过题目",-1)),t("strong",null,a(W.value.failedCount),1)])])]),t("div",aa,[t("div",null,[e[51]||(e[51]=t("span",null,"平均分",-1)),t("strong",null,a(W.value.averageScore||"--"),1)]),t("div",null,[e[52]||(e[52]=t("span",null,"提交总数",-1)),t("strong",null,a(W.value.submittedCount),1)])])]),t("article",ia,[t("div",oa,[e[54]||(e[54]=t("div",null,[t("h2",null,"进展分析"),t("p",null,"按最近提交、难度分布和算法覆盖看当前练习状态。")],-1)),d(r(T),{effect:"plain"},{default:f(()=>[v("覆盖 "+a(re.value.coverageRate)+"%",1)]),_:1})]),t("div",ua,[t("div",null,[e[55]||(e[55]=t("span",null,"解题总数",-1)),t("strong",null,a(re.value.solved),1),e[56]||(e[56]=t("em",null,"题",-1))]),t("div",null,[e[57]||(e[57]=t("span",null,"提交总数",-1)),t("strong",null,a(re.value.submitted),1),e[58]||(e[58]=t("em",null,"次",-1))]),t("div",null,[e[59]||(e[59]=t("span",null,"通过率",-1)),t("strong",null,a(W.value.passRate)+"%",1),e[60]||(e[60]=t("em",null,"提交",-1))])]),t("div",ra,[t("span",ca,"基础 "+a(re.value.difficulty.basic),1),t("span",da,"提升 "+a(re.value.difficulty.improve),1),t("span",pa,"挑战 "+a(re.value.difficulty.challenge),1)]),t("div",va,[le.value.length>1?(o(!0),u(C,{key:0},I(le.value.slice(0,6),s=>(o(),u("span",{key:s.category,style:Oe({width:`${58+s.count*14}px`,height:`${58+s.count*14}px`})},[t("strong",null,a(s.category),1),t("small",null,a(s.count)+" 次",1)],4))),128)):le.value.length===1?(o(),u("div",fa,[e[61]||(e[61]=t("span",null,"主要练习类别",-1)),t("strong",null,a((p=le.value[0])==null?void 0:p.category),1),t("small",null,a((m=le.value[0])==null?void 0:m.count)+" 次提交 · 均分 "+a((b=le.value[0])==null?void 0:b.averageScore)+" 分",1)])):(o(),u("p",ma,"完成练习后，这里会显示算法类别分布。"))]),t("div",ga,[e[62]||(e[62]=t("strong",null,"阶段结论",-1)),t("p",null,a(re.value.summary),1),t("p",null,a(re.value.weakText),1)])]),t("article",ya,[t("div",ha,[e[65]||(e[65]=t("div",null,[t("h2",null,"做题历史"),t("p",null,"最近的练习记录会留在这里，也会同步统计算法类型。")],-1)),t("div",_a,[d(r(T),{effect:"plain"},{default:f(()=>[...e[63]||(e[63]=[v("最近 3 题",-1)])]),_:1}),d(r(q),{text:"",onClick:e[7]||(e[7]=s=>Ee.value=!0)},{default:f(()=>[...e[64]||(e[64]=[v("查看全部",-1)])]),_:1})])]),t("div",ba,[(o(!0),u(C,null,I(Ln.value,s=>(o(),u("button",{key:s.id,class:"history-card",type:"button",onClick:k=>mn(s)},[t("div",Ca,[t("div",null,[t("strong",null,a(s.title),1),t("span",null,a(s.time)+" · "+a(s.category),1)]),t("div",xa,[d(r(T),{size:"small",type:s.status==="完成"?"success":s.status==="未通过"?"danger":"warning"},{default:f(()=>[v(a(s.status),1)]),_:2},1032,["type"]),t("strong",null,a(s.score!==void 0?`${s.score} 分`:"--"),1)])]),t("div",wa,[d(r(T),{size:"small",effect:"plain"},{default:f(()=>[v(a(s.category),1)]),_:2},1024),d(r(T),{size:"small",effect:"plain",class:w(ie(s.difficulty))},{default:f(()=>[v(a(s.difficulty),1)]),_:2},1032,["class"])])],8,ka))),128))]),le.value.length?(o(),u("div",$a,[(o(!0),u(C,null,I(le.value,s=>(o(),u("div",{key:s.category,class:"history-stat"},[t("div",Sa,[t("strong",null,a(s.category),1),t("span",null,a(s.count)+" 次 · 均分 "+a(s.averageScore),1)]),t("div",Ta,[t("i",{style:Oe({width:`${W.value.submittedCount?Math.max(s.count/W.value.submittedCount*100,8):0}%`})},null,4)])]))),128))])):S("",!0)]),t("article",Ia,[e[66]||(e[66]=t("div",{class:"panel-header"},[t("div",null,[t("h2",null,"继续上次练习"),t("p",null,"如果你刚做过一道题，可以直接回到做题界面。")])],-1)),$.value?(o(),u("button",{key:0,class:"resume-card",type:"button",onClick:e[8]||(e[8]=s=>Z.value="practice")},[t("div",null,[t("strong",null,a($.value.title),1),t("span",null,a($.value.category)+" · "+a($.value.tags.join(" / ")),1)]),d(r(T),{size:"small",effect:"plain",class:w(ie($.value.difficulty))},{default:f(()=>[v(a($.value.difficulty),1)]),_:1},8,["class"])])):(o(),u("p",Oa,"还没有开始新的题目。"))])])])):(o(),u("main",{key:2,ref_key:"judgeLayoutRef",ref:Lt,class:w(["judge-layout",{"is-resizing":kt.value}]),style:Oe(Yn.value)},[t("section",{class:w(["problem-pane",{"is-collapsed":Ce.value}])},[t("div",za,[Ce.value?(o(),u("button",{key:1,type:"button",class:"problem-pane-toggle is-rail",title:"展开题面面板",onClick:Jt},[d(r(E),{icon:"lucide:chevron-right"})])):(o(),u(C,{key:0},[(o(),u(C,null,I(_,s=>t("button",{key:s.value,type:"button",class:w(["problem-tab",{active:H.value===s.value}]),onClick:k=>H.value=s.value},[d(r(E),{icon:s.icon},null,8,["icon"]),v(" "+a(s.label)+" ",1),s.value==="submissions"&&je.value.length?(o(),u("span",Ea,a(je.value.length),1)):S("",!0)],10,Pa)),64)),dt.value?(o(),u("button",{key:0,type:"button",class:w(["problem-tab",{active:H.value==="notes"}]),onClick:e[9]||(e[9]=s=>H.value="notes")},[d(r(E),{icon:"lucide:notebook-pen"}),e[67]||(e[67]=v(" 笔记 ",-1)),t("span",{class:"problem-tab-close",title:"关闭笔记",onClick:Ie(tn,["stop"])},[d(r(E),{icon:"lucide:x"})])],2)):S("",!0),t("div",qa,[t("button",{type:"button",class:"problem-pane-toggle",title:"收起题面面板",onClick:Jt},[d(r(E),{icon:"lucide:chevron-left"})])])],64))]),ue(t("article",Aa,[t("div",Ma,[t("div",null,[t("div",Da,[d(r(T),{effect:"light"},{default:f(()=>{var s;return[v(a((s=$.value)==null?void 0:s.category),1)]}),_:1}),d(r(T),{effect:"plain",class:w(ie((P=$.value)==null?void 0:P.difficulty))},{default:f(()=>{var s;return[v(a((s=$.value)==null?void 0:s.difficulty),1)]}),_:1},8,["class"])]),t("h2",null,a(F.value.title||"请选择算法题"),1)]),t("div",Ra,[t("button",{type:"button",class:w(["title-note-toggle",{active:H.value==="notes"}]),title:H.value==="notes"?"收起笔记":"打开笔记",onClick:rs},[d(r(E),{icon:"lucide:notebook-pen"}),e[68]||(e[68]=v(" 笔记 ",-1))],10,La),d(r(q),{icon:r(Bs),onClick:e[10]||(e[10]=s=>r(Q)(wt.value,"已复制"))},{default:f(()=>[...e[69]||(e[69]=[v(" 复制题面 ",-1)])]),_:1},8,["icon"])])]),t("p",Na,a(F.value.summary),1),t("section",ja,[e[70]||(e[70]=t("h3",null,"题目描述",-1)),t("pre",null,a(wt.value),1)]),t("section",Ba,[e[74]||(e[74]=t("h3",null,"测评样例",-1)),t("div",Ha,[(o(!0),u(C,null,I(xt.value,s=>(o(),u("article",{key:s.name,class:"sample-card"},[t("header",null,[t("strong",null,a(s.name),1),d(r(q),{text:"",size:"small",onClick:k=>Qn(s)},{default:f(()=>[...e[71]||(e[71]=[v(" 载入控制台 ",-1)])]),_:1},8,["onClick"])]),t("div",Fa,[e[72]||(e[72]=t("span",null,"输入",-1)),t("pre",null,a(s.input||"无输入"),1)]),t("div",Va,[e[73]||(e[73]=t("span",null,"输出",-1)),t("pre",null,a(s.expected||"无固定输出"),1)])]))),128))])]),t("section",Ka,[e[75]||(e[75]=t("h3",null,"检测样例",-1)),t("p",Ya," 保存并提交时会使用 "+a(Vt.value.length)+" 组不同于测评样例的检测数据进行判题。 ",1)]),Ut.value.length?(o(),u("section",Ua,[e[76]||(e[76]=t("h3",null,"相关标签",-1)),t("div",Ga,[(o(!0),u(C,null,I(Ut.value,s=>(o(),Te(r(T),{key:`desc-tag-${s}`,effect:"plain",size:"small"},{default:f(()=>[v(a(s),1)]),_:2},1024))),128))])])):S("",!0),Le.value.length?(o(),u("section",Wa,[e[77]||(e[77]=t("h3",null,"提示",-1)),(o(!0),u(C,null,I(Le.value,(s,k)=>(o(),u("details",{key:`hint-${k}`,class:"hint-item"},[t("summary",null,[t("strong",null,"提示 "+a(k+1),1)]),t("p",null,a(s),1)]))),128))])):S("",!0),t("p",Ja,[d(r(E),{icon:"lucide:bar-chart-3"}),It.value.total?(o(),u(C,{key:0},[v(" 你已提交 "+a(It.value.total)+" 次，通过 "+a(It.value.passed)+" 次 ",1)],64)):(o(),u(C,{key:1},[v("你还没有提交过这道题")],64))])],512),[[pe,H.value==="description"]]),ue(t("article",Xa,[t("section",Qa,[t("div",Za,[e[78]||(e[78]=t("h3",null,"解题思路",-1)),t("div",ei,[d(r(T),{size:"small",effect:"plain",class:w(ie((U=$.value)==null?void 0:U.difficulty))},{default:f(()=>{var s;return[v(a((s=$.value)==null?void 0:s.difficulty),1)]}),_:1},8,["class"]),d(r(T),{size:"small",effect:"light"},{default:f(()=>{var s;return[v(a((s=$.value)==null?void 0:s.category),1)]}),_:1})])]),t("p",ti,a(F.value.summary),1),Le.value.length?(o(),u("div",ni,[(o(!0),u(C,null,I(Le.value,(s,k)=>(o(),u("div",{key:`sol-step-${k}`,class:"solution-step"},[t("span",si,a(k+1),1),t("p",null,a(s),1)]))),128))])):S("",!0),Ot.value?(o(),u("div",li,[t("div",ai,[d(r(E),{icon:"lucide:timer"}),t("div",null,[e[79]||(e[79]=t("span",null,"时间复杂度",-1)),t("strong",null,a(Ot.value.time),1)])]),t("div",ii,[d(r(E),{icon:"lucide:database"}),t("div",null,[e[80]||(e[80]=t("span",null,"空间复杂度",-1)),t("strong",null,a(Ot.value.space),1)])])])):S("",!0),st.value.length?(o(),u("div",oi,[e[81]||(e[81]=t("strong",null,"涉及考点",-1)),t("div",ui,[(o(!0),u(C,null,I(st.value,(s,k)=>(o(),Te(r(T),{key:`sol-point-tag-${k}`,effect:"plain",size:"small"},{default:f(()=>[v(a(s),1)]),_:2},1024))),128))])])):S("",!0)]),Wt.value?(o(),u("section",ri,[e[82]||(e[82]=t("h3",null,"完整题解",-1)),t("div",{class:"guide-markdown",innerHTML:Wt.value},null,8,ci)])):S("",!0),t("section",di,[e[84]||(e[84]=t("h3",null,"参考代码",-1)),t("div",pi,[t("div",vi,[t("strong",null,a(ee)),d(r(q),{text:"",size:"small",onClick:e[11]||(e[11]=s=>r(Q)(Ne.value,"代码已复制"))},{default:f(()=>[...e[83]||(e[83]=[v(" 复制代码 ",-1)])]),_:1})]),t("div",fi,[t("div",mi,[(o(!0),u(C,null,I(jn.value,s=>(o(),u("span",{key:`ref-line-${s}`},a(s),1))),128))]),t("pre",gi,[t("code",{innerHTML:Kt.value},null,8,yi)])])])]),lt.value.length?(o(),u("section",hi,[e[85]||(e[85]=t("h3",null,"继续练",-1)),t("div",_i,[(o(!0),u(C,null,I(lt.value.slice(0,3),s=>(o(),u("button",{key:`sol-next-${s.id}`,type:"button",onClick:k=>oe(s)},[t("div",ki,[t("strong",null,a(s.title),1),t("span",null,a(s.category)+" · "+a(s.difficulty),1)]),d(r(E),{icon:"lucide:arrow-right"})],8,bi))),128))])])):S("",!0)],512),[[pe,H.value==="solutions"]]),ue(t("article",Ci,[A.value?(o(),u("div",xi,[t("button",{type:"button",class:"submission-back",onClick:e[12]||(e[12]=s=>A.value=null)},[d(r(E),{icon:"lucide:chevron-left"}),e[86]||(e[86]=v(" 返回提交列表 ",-1))]),t("div",{class:w(["submission-verdict",A.value.status==="完成"?"passed":"failed"])},[d(r(E),{icon:A.value.status==="完成"?"lucide:circle-check-big":"lucide:circle-x"},null,8,["icon"]),t("strong",null,a(A.value.status==="完成"?"通过":"未通过"),1),A.value.score!==void 0?(o(),u("span",wi,a(A.value.score)+" 分 ",1)):S("",!0)],2),t("dl",$i,[t("div",null,[e[87]||(e[87]=t("dt",null,"提交时间",-1)),t("dd",null,a(A.value.time),1)]),t("div",null,[e[88]||(e[88]=t("dt",null,"语言",-1)),t("dd",null,a(A.value.language||ee),1)]),A.value.totalCases?(o(),u("div",Si,[e[89]||(e[89]=t("dt",null,"用例",-1)),t("dd",null,"通过 "+a((O=A.value.passedCaseCount)!=null?O:0)+"/"+a(A.value.totalCases),1)])):S("",!0)]),Yt.value?(o(),u("div",Ti,[t("div",Ii,[d(r(E),{icon:"lucide:octagon-alert"}),e[90]||(e[90]=t("strong",null,"执行出错",-1))]),t("pre",null,a(Yt.value),1)])):S("",!0),(M=A.value.cases)!=null&&M.length?(o(),u("div",Oi,[(o(!0),u(C,null,I(A.value.cases,s=>(o(),u("div",{key:`detail-${s.name}`,class:w(["submission-case-row",{passed:s.passed}])},[d(r(E),{icon:s.passed?"lucide:circle-check":"lucide:circle-x"},null,8,["icon"]),t("span",zi,a(s.name),1),t("span",Pi,a(s.passed?"通过":"未通过"),1)],2))),128))])):S("",!0),t("div",Ei,[e[92]||(e[92]=t("h3",null,"提交代码",-1)),t("div",qi,[t("div",Ai,[t("strong",null,a(A.value.language||ee),1),d(r(q),{text:"",size:"small",onClick:e[13]||(e[13]=s=>r(Q)(A.value.code||"","代码已复制"))},{default:f(()=>[...e[91]||(e[91]=[v(" 复制代码 ",-1)])]),_:1})]),A.value.code?(o(),u("div",Mi,[t("div",Di,[(o(!0),u(C,null,I(Hn.value,s=>(o(),u("span",{key:`sub-line-${s}`},a(s),1))),128))]),t("pre",Ri,[t("code",{innerHTML:Bn.value},null,8,Li)])])):(o(),u("p",Ni,"这条记录没有保留代码快照。"))])])])):(o(),u("section",ji,[e[94]||(e[94]=t("h3",null,"提交记录",-1)),e[95]||(e[95]=t("p",{class:"problem-summary"}," 每次「保存并提交」的判题结果都会记录在这里，点击记录可查看详情和当时的代码。 ",-1)),je.value.length?(o(),u("div",Bi,[e[93]||(e[93]=t("div",{class:"submission-table-head"},[t("span",null,"状态"),t("span",null,"时间"),t("span",null,"语言"),t("span",null,"用例")],-1)),(o(!0),u(C,null,I(je.value,s=>{var k;return o(),u("button",{key:`submission-${s.id}`,type:"button",class:"submission-table-row",onClick:zs=>A.value=s},[t("span",{class:w(["submission-table-status",s.status==="完成"?"passed":"failed"])},[d(r(E),{icon:s.status==="完成"?"lucide:circle-check":"lucide:circle-x"},null,8,["icon"]),v(" "+a(s.status==="完成"?"通过":"未通过"),1)],2),t("span",Fi,a(s.time),1),t("span",null,a(s.language||ee),1),t("span",{class:w(["submission-table-cases",s.status==="完成"?"passed":"failed"])},a(s.totalCases?`${(k=s.passedCaseCount)!=null?k:0}/${s.totalCases}`:"--"),3)],8,Hi)}),128))])):(o(),u("p",Vi,"还没有提交记录，完成一次「保存并提交」后会显示在这里。"))]))],512),[[pe,H.value==="submissions"]]),ue(t("article",Ki,[t("section",Yi,[e[96]||(e[96]=t("h3",null,"类似题目推荐",-1)),lt.value.length?(o(),u("div",Ui,[(o(!0),u(C,null,I(lt.value,s=>(o(),u("button",{key:s.id,type:"button",onClick:k=>oe(s)},[t("div",Wi,[t("strong",null,a(s.title),1),d(r(T),{size:"small",effect:"plain",class:w(ie(s.difficulty))},{default:f(()=>[v(a(s.difficulty),1)]),_:2},1032,["class"])]),t("span",null,a(s.category)+" / "+a(s.tags.join(" / ")),1)],8,Gi))),128))])):(o(),u("p",Ji,"暂无相同算法或做法的推荐题。"))])],512),[[pe,H.value==="related"]]),ue(t("article",Xi,[t("section",Qi,[t("div",Zi,[e[98]||(e[98]=t("h3",null,"笔记",-1)),t("div",eo,[Qe.value?(o(),u("span",to,"已保存 "+a(Qe.value),1)):S("",!0),d(r(q),{size:"small",type:"primary",onClick:at},{default:f(()=>[...e[97]||(e[97]=[v("保存笔记",-1)])]),_:1})])]),d(r(Ge),{modelValue:qe.value,"onUpdate:modelValue":e[14]||(e[14]=s=>qe.value=s),class:"notes-editor",type:"textarea",rows:16,resize:"vertical",placeholder:"记录这道题的思路、易错点和优化想法，会自动保存。"},null,8,["modelValue"]),t("p",no,[d(r(E),{icon:"lucide:info"}),e[99]||(e[99]=v(" 笔记按题目分别保存，内容仅保存在当前浏览器的本机存储中。 ",-1))])])],512),[[pe,H.value==="notes"]])],2),t("div",{class:"pane-divider",role:"separator","aria-orientation":"vertical",title:"拖动调整宽度，双击复位",onMousedown:Zn,onDblclick:es},[...e[100]||(e[100]=[t("span",{class:"pane-divider-grip"},null,-1)])],32),t("section",{class:w(["code-pane",{"is-resizing":Tt.value}]),style:Oe(Un.value)},[t("section",so,[t("div",lo,[e[101]||(e[101]=t("span",{class:"window-dot red"},null,-1)),e[102]||(e[102]=t("span",{class:"window-dot yellow"},null,-1)),e[103]||(e[103]=t("span",{class:"window-dot green"},null,-1)),t("button",ao,[v(a((N.value,"Python"))+" ",1),d(r(E),{icon:"lucide:chevron-down"})]),t("strong",null,a(N.value?"reference.py":"solution.py"),1),t("em",null,a(N.value?"参考答案":"智能模式"),1),t("div",io,[t("button",{type:"button",class:"editor-action",title:"缩小字号",disabled:xe.value<=-2,onClick:e[15]||(e[15]=s=>Xt(-1))}," A- ",8,oo),t("button",{type:"button",class:"editor-action",title:"放大字号",disabled:xe.value>=4,onClick:e[16]||(e[16]=s=>Xt(1))}," A+ ",8,uo),t("button",{type:"button",class:"editor-action",title:"复制当前代码",disabled:N.value,onClick:Xn},[d(r(E),{icon:"lucide:copy"})],8,ro),t("button",{type:"button",class:"editor-action",title:"重置代码",disabled:N.value,onClick:ws},[d(r(E),{icon:"lucide:rotate-ccw"})],8,co),t("button",{type:"button",class:w(["editor-action",{active:N.value}]),title:N.value?"返回作答":"查看参考答案",onClick:e[17]||(e[17]=s=>N.value=!N.value)},[d(r(E),{icon:"lucide:book-open"}),v(" "+a(N.value?"返回作答":"参考答案"),1)],10,po)])]),t("div",{class:"editor-body",style:Oe(Gn.value)},[t("div",vo,[(o(!0),u(C,null,I(Vn.value,s=>(o(),u("span",{key:s},a(s),1))),128))]),t("div",fo,[N.value?S("",!0):(o(),u("pre",{key:0,ref_key:"codeHighlightRef",ref:ln,class:"code-highlight","aria-hidden":"true"},[t("code",{innerHTML:Nn.value},null,8,mo)],512)),N.value?(o(),u("pre",go,[t("code",{innerHTML:Kt.value},null,8,yo)])):ue((o(),u("textarea",{key:1,"onUpdate:modelValue":e[18]||(e[18]=s=>z.value=s),spellcheck:"false",placeholder:"在这里编写 Python 代码，Ctrl + Enter 可快速运行",onKeydown:Jn,onKeyup:it,onClick:it,onSelect:it,onInput:it,onScroll:an},null,544)),[[Hs,z.value]])])],4),t("div",ho,[t("span",null,a(Ze.value?`已存储 ${Ze.value}`:"已存储"),1),t("span",null,"行 "+a(ft.value)+"，列 "+a(mt.value),1)])]),t("div",{class:"console-divider",role:"separator","aria-orientation":"horizontal",title:"拖动调整控制台高度，双击复位",onMousedown:ts,onDblclick:ns},[...e[104]||(e[104]=[t("span",{class:"console-divider-grip"},null,-1)])],32),t("section",_o,[t("div",bo,[t("div",ko,[(o(),u(C,null,I(x,s=>t("button",{key:s.value,type:"button",class:w(["console-tab",{active:se.value===s.value}]),onClick:k=>se.value=s.value},[d(r(E),{icon:s.icon},null,8,["icon"]),v(" "+a(s.label)+" ",1),s.value==="result"&&R.value&&R.value.total?(o(),u("span",{key:0,class:w(["console-tab-badge",R.value.ok?"passed":"failed"])},a(R.value.passed)+"/"+a(R.value.total),3)):S("",!0)],10,Co)),64))]),t("div",xo,[d(r(q),{class:"run-button",type:"primary",plain:"",loading:We.value,disabled:!z.value.trim()||N.value,onClick:Mt},{default:f(()=>[d(r(ot),null,{default:f(()=>[d(r(In))]),_:1}),e[105]||(e[105]=v(" 运行 ",-1))]),_:1},8,["loading","disabled"]),d(r(q),{class:w(["submit-button",{"code-ready":z.value.trim()}]),type:"success",loading:ke.value,disabled:!z.value.trim(),onClick:vn},{default:f(()=>[d(r(ot),null,{default:f(()=>[d(r(On))]),_:1}),e[106]||(e[106]=v(" 保存并提交 ",-1))]),_:1},8,["class","loading","disabled"])])]),ue(t("div",wo,[t("div",$o,[t("div",So,[(o(!0),u(C,null,I(ne.value,(s,k)=>(o(),u("button",{key:`case-chip-${k}-${s.name}`,type:"button",class:w(["case-chip",{active:ae.value===k}]),onClick:zs=>ae.value=k},a(k+1),11,To))),128))]),t("span",Io,a(((de=ne.value[ae.value])==null?void 0:de.name)||"自定义"),1),(gn=ne.value[ae.value])!=null&&gn.expected?(o(),u("span",Oo," 期望输出："+a((yn=ne.value[ae.value])==null?void 0:yn.expected),1)):S("",!0)]),d(r(Ge),{modelValue:Rt.value,"onUpdate:modelValue":e[19]||(e[19]=s=>Rt.value=s),class:"stdin-input",type:"textarea",rows:6,resize:"none",placeholder:"当前用例的输入，会传给 Python 程序的 stdin"},null,8,["modelValue"]),t("p",zo,[d(r(E),{icon:"lucide:corner-down-left"}),e[107]||(e[107]=v(" 点「运行」会执行全部用例；带期望输出的样例会判定通过/未通过，自定义用例只展示输出。编辑器内 Ctrl + Enter 快速运行。 ",-1))])],512),[[pe,se.value==="testcase"]]),ue(t("div",Po,[ke.value?(o(),u("div",Eo,[d(r(E),{icon:"lucide:loader-circle",class:"submitting-spinner"}),e[108]||(e[108]=v(" 正在提交判题，请稍候… ",-1))])):(o(),u(C,{key:1},[R.value?(o(),u("div",{key:0,class:w(["run-summary",R.value.ok?"passed":"failed"])},[d(r(E),{icon:R.value.ok?"lucide:circle-check-big":"lucide:circle-x"},null,8,["icon"]),t("strong",null,a(R.value.mode==="custom"?R.value.ok?"运行完成":"存在未通过的用例":R.value.ok?"检测样例全部通过":"存在未通过的检测样例"),1),R.value.total?(o(),u("span",qo," 通过 "+a(R.value.passed)+"/"+a(R.value.total)+" 个用例 ",1)):S("",!0),R.value.mode==="submit"&&R.value.score!==void 0?(o(),u("span",Ao,a(R.value.score)+" 分 ",1)):S("",!0)],2)):S("",!0),t("div",Mo,[(_n=(hn=L.value)==null?void 0:hn.cases)!=null&&_n.length?(o(),u("div",Do,[(o(!0),u(C,null,I(L.value.cases,(s,k)=>(o(),u("article",{key:s.name,class:w(["run-case",{passed:s.passed,"is-first-failure":k===$t.value,"is-output-only":!s.expected&&!s.stderr&&!s.timeout}])},[t("header",null,[t("strong",null,a(s.name),1),t("span",null,a(s.expected?s.passed?"通过":"未通过":s.stderr||s.timeout?"运行错误":"输出"),1)]),t("div",Ro,[e[109]||(e[109]=t("span",null,"实际输出",-1)),t("pre",null,a(s.stdout||"无输出"),1)]),s.expected?(o(),u("div",Lo,[e[110]||(e[110]=t("span",null,"期望输出",-1)),t("pre",null,a(s.expected),1)])):S("",!0),s.stderr?(o(),u("div",No,[e[111]||(e[111]=t("span",null,"错误信息",-1)),t("pre",null,a(s.stderr),1)])):S("",!0)],2))),128)),tt.value&&$t.value>=0?(o(),u("div",jo,[t("span",null,[e[112]||(e[112]=v(" 第一个失败用例对应薄弱点：",-1)),t("strong",null,a((bn=D.personalizedContext)==null?void 0:bn.topic),1)]),d(r(q),{size:"small",type:"primary",plain:"",onClick:ss},{default:f(()=>[...e[113]||(e[113]=[v(" 去复习知识卡片 ",-1)])]),_:1})])):S("",!0)])):(o(),u("p",Bo," 还没有运行结果，切到「测试用例」填写输入后点击「运行」。 "))])],64))],512),[[pe,se.value==="result"]]),ue(t("div",Ho,[t("section",Fo,[t("header",null,[e[114]||(e[114]=t("div",null,[t("h3",null,"AI 点评"),t("p",null,"更关注思路、边界和复杂度。")],-1)),t("div",Vo,[B.value?(o(),Te(r(T),{key:0,type:B.value.correct?"success":"warning"},{default:f(()=>{var s;return[v(a((s=B.value.score)!=null?s:0)+" 分 ",1)]}),_:1},8,["type"])):S("",!0),d(r(q),{text:"",type:"primary",loading:Je.value,disabled:!z.value.trim(),onClick:fn},{default:f(()=>[v(a(B.value?"重新点评":"生成点评"),1)]),_:1},8,["loading","disabled"])])]),R.value&&!R.value.ok&&!B.value&&!Je.value?(o(),u("div",Ko,[t("span",null," 最近一次判题有 "+a(R.value.total-R.value.passed)+" 个用例未通过，生成点评会结合真实报错和输出差异定位问题。 ",1),d(r(q),{size:"small",type:"primary",onClick:fn},{default:f(()=>[...e[115]||(e[115]=[v(" 一键生成点评 ",-1)])]),_:1})])):S("",!0),t("div",Yo,[t("article",Uo,[t("p",null,a(Kn.value),1),t("div",Go,[e[116]||(e[116]=t("strong",null,"1. 代码问题",-1)),(o(!0),u(C,null,I(((Cn=(kn=B.value)==null?void 0:kn.problems)==null?void 0:Cn.slice(0,3))||["点击「生成点评」后，会定位代码实现里的关键问题。"],s=>(o(),u("p",{key:s},a(s),1))),128))]),t("div",Wo,[e[117]||(e[117]=t("strong",null,"2. 优化建议",-1)),(o(!0),u(C,null,I(((wn=(xn=B.value)==null?void 0:xn.suggestions)==null?void 0:wn.slice(0,3))||["先完成题面要求，再让 AI 根据当前代码给出优化建议。"],s=>(o(),u("p",{key:s},a(s),1))),128))]),t("div",Jo,[e[118]||(e[118]=t("strong",null,"本题考点",-1)),t("div",Xo,[(o(!0),u(C,null,I(Le.value,(s,k)=>(o(),Te(r(T),{key:`criterion-${k}-${s}`,effect:"plain"},{default:f(()=>[v(a(s),1)]),_:2},1024))),128)),(o(!0),u(C,null,I(st.value,(s,k)=>(o(),Te(r(T),{key:`point-${k}-${s}`,effect:"plain"},{default:f(()=>[v(a(s),1)]),_:2},1024))),128))])]),t("div",Qo,[e[119]||(e[119]=t("strong",null,"优化参考代码",-1)),t("pre",null,[t("code",null,a(Ne.value),1)])])])])])],512),[[pe,se.value==="review"]])])],6)],6)),Ee.value?(o(),u("div",{key:3,class:"history-modal-mask",onClick:e[21]||(e[21]=Ie(s=>Ee.value=!1,["self"]))},[t("section",Zo,[t("header",null,[e[121]||(e[121]=t("div",null,[t("h2",null,"全部做题历史"),t("p",null,"按最近提交排序，点击任意记录可回到对应题目。")],-1)),d(r(q),{text:"",onClick:e[20]||(e[20]=s=>Ee.value=!1)},{default:f(()=>[...e[120]||(e[120]=[v("关闭",-1)])]),_:1})]),t("div",eu,[(o(!0),u(C,null,I(ge.value,s=>(o(),u("button",{key:`all-${s.id}`,class:"history-card",type:"button",onClick:k=>{mn(s),Ee.value=!1}},[t("div",nu,[t("div",null,[t("strong",null,a(s.title),1),t("span",null,a(s.time)+" · "+a(s.category),1)]),t("div",su,[d(r(T),{size:"small",type:s.status==="完成"?"success":s.status==="未通过"?"danger":"warning"},{default:f(()=>[v(a(s.status),1)]),_:2},1032,["type"]),t("strong",null,a(s.score!==void 0?`${s.score} 分`:"--"),1)])]),t("div",lu,[d(r(T),{size:"small",effect:"plain"},{default:f(()=>[v(a(s.category),1)]),_:2},1024),d(r(T),{size:"small",effect:"plain",class:w(ie(s.difficulty))},{default:f(()=>[v(a(s.difficulty),1)]),_:2},1032,["class"])])],8,tu))),128))])])])):S("",!0)])}}}),hu=Ks(au,[["__scopeId","data-v-b8655dbd"]]);export{hu as default};
