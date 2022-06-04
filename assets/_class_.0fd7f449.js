import{d as S,k as R,l as z,m as F,e as f,y as G,o as e,c as n,a as r,b as u,B as M,I as y,G as x,A as l,u as t,D as _,F as k,r as N,W as ke,X as xe,_ as $e,Y as Te,C as H,z as j,q as we,s as P,x as Me,E as Ce,T as Le,f as He,j as Ee}from"./index.0ba2aa76.js";import{m as B,_ as J,H as X}from"./SourceButton.390821c6.js";import{c as Z,_ as O,a as Q,p as De,t as I,b as q,d as Y}from"./See.21b8e06a.js";import{_ as je,a as Ae}from"./chevron-right.b8a1bdd5.js";import{u as V}from"./ReducedMotion.26bff78e.js";import{A as K,G as U,J as W}from"./disclosure.3f50a488.js";const Be=["id"],Ze={class:"flex items-center"},qe={class:"inline-block mr-2"},Se={class:"text-gray-200 text-sm font-semibold uppercase pt-6"},Pe={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Ie=["innerHTML"],Ve={class:"grid pl-2.5"},Ne=["innerHTML"],Re=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),ze=S({props:{event:null},setup(s){const d=s,v=R(),$=z(),C=F(),g=f(()=>C.state.docs),o=f(()=>B(Z(d.event.description,g.value,v,$))),T=f(()=>typeof d.event.deprecated=="string"?B(Z(d.event.deprecated,g.value,v,$)):"");return(E,p)=>{var L;const m=G("router-link");return e(),n(k,null,[r("div",{id:`doc-for-e-${s.event.name}`,class:"scroll-to mb-8"},[u(J,{class:"float-right mt-8",meta:s.event.meta},null,8,["meta"]),r("div",Ze,[r("h3",qe,[u(m,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${s.event.name}`}}},{default:M(()=>[y(x(s.event.name),1)]),_:1},8,["to"])]),r("span",Se,[s.event.deprecated?(e(),n("span",Pe,"Deprecated")):l("",!0)])]),s.event.deprecated&&t(T)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(T)},null,8,Ie)):l("",!0),r("div",Ve,[r("p",{class:"noprose",innerHTML:t(o)},null,8,Ne),s.event.params&&s.event.params.length?(e(),_(O,{key:0,parameters:s.event.params},null,8,["parameters"])):l("",!0),(L=s.event.see)!=null&&L.length?(e(),_(Q,{key:1,see:s.event.see},null,8,["see"])):l("",!0)])],8,Be),Re],64)}}}),Fe={class:"grid"},Ge={class:"overflow-x-auto lg:custom-scroll"},Je={class:"relative"},Oe={class:"my-0 javascript"},Ke=["innerHTML"],Ue=S({props:{code:null},setup(s){const d=s,v=N(),$=N(!1),C=ke(E=>{E(),$.value=!1},1e3),{show:g,hide:o}=xe(v,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),T=async()=>{try{await navigator.clipboard.writeText(d.code),g()}catch{}$.value=!0,C(o)};return(E,p)=>{const m=$e,L=Te;return e(),n("div",Fe,[r("div",Ge,[r("div",Je,[r("pre",Oe,[r("code",{innerHTML:t(X).highlight(s.code,{language:"javascript"}).value},null,8,Ke)]),r("button",{ref_key:"copyButton",ref:v,class:"absolute right-0 top-0 mt-4 mr-4 inline-block hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200","aria-label":"Copy code"},[$.value?(e(),_(L,{key:1,class:"fill-current text-discord-green-600 dark:text-discord-green-500","aria-hidden":"true",onClick:T})):(e(),_(m,{key:0,class:"fill-current text-gray-700 dark:text-gray-200","aria-hidden":"true",onClick:T}))],512)])])])}}});const We=["id"],Xe={class:"flex items-center"},Ye={class:"inline-block mr-2"},Qe=y(") "),et={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},tt={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},st={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},nt={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ot={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},rt=["innerHTML"],lt={class:"grid pl-2.5"},ct=["innerHTML"],at={class:"font-semibold mt-3"},it=y(" Returns: "),dt={key:0},ut={key:1},mt={class:"mt-3"},pt=["innerHTML"],ht={key:1,class:"font-semibold"},_t=y(" Throws: "),ft={key:2,class:"font-semibold"},yt=y(" Emits: "),vt={key:0},gt={key:3,class:"font-semibold mt-3"},bt=y(" Examples: "),kt=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),xt=S({props:{method:null},setup(s){const d=s,v=R(),$=z(),C=F(),g=f(()=>C.state.docs),o=f(()=>{var b;return B(Z((b=d.method.description)!=null?b:"No description.",g.value,v,$))}),T=f(()=>typeof d.method.deprecated=="string"?B(Z(d.method.deprecated,g.value,v,$)):""),E=f(()=>{var b;return B(Z((b=d.method.returns.description)!=null?b:d.method.returnsDescription,g.value,v,$))}),p=f(()=>d.method.params?d.method.params.filter(b=>!b.name.includes(".")):null),m=f(()=>d.method.emits?d.method.emits.map(b=>De(b,g.value)):null),L=f(()=>`${d.method.scope==="static"?"s-":""}${d.method.name}`);return(b,a)=>{var c,D;const i=G("router-link");return e(),n(k,null,[r("div",{id:`doc-for-${t(L)}`,class:"scroll-to mb-8"},[u(J,{class:"float-right mt-9",meta:s.method.meta},null,8,["meta"]),r("div",Xe,[r("h3",Ye,[u(i,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(L)}}},{default:M(()=>[y(" ."+x(s.method.name)+"(",1),(e(!0),n(k,null,H(t(p),h=>(e(),n("span",{key:h.name,class:j(["method-param text-discord-blurple-560 dark:text-discord-blurple-300 opacity-90 dark:opacity-75",h.optional?"optional":""])},x(h.variable?"...":"")+x(h.name),3))),128)),Qe]),_:1},8,["to"])]),r("span",et,[s.method.scope==="static"?(e(),n("span",tt,"Static")):l("",!0),s.method.abstract?(e(),n("span",st,"Abstract")):l("",!0),s.method.deprecated?(e(),n("span",nt,"Deprecated")):l("",!0),s.method.access==="private"?(e(),n("span",ot,"Private")):l("",!0)])]),s.method.deprecated&&t(T)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(T)},null,8,rt)):l("",!0),r("div",lt,[r("p",{class:"noprose",innerHTML:t(o)},null,8,ct),s.method.params?(e(),_(O,{key:0,parameters:s.method.params},null,8,["parameters"])):l("",!0),r("div",at,[it,s.method.returns&&Array.isArray(s.method.returns)?(e(),n("span",dt,[(e(!0),n(k,null,H(s.method.returns,h=>(e(),_(q,{key:t(I)(h),names:h},null,8,["names"]))),128))])):s.method.returns&&!Array.isArray(s.method.returns)?(e(),n("span",ut,[(e(!0),n(k,null,H(s.method.returns.types||s.method.returns,h=>(e(),_(q,{key:t(I)(h),names:h,variable:s.method.returns.variable,nullable:s.method.returns.nullable},null,8,["names","variable","nullable"]))),128))])):(e(),_(Y,{key:2,type:["void"]})),r("div",mt,[s.method.returns&&!Array.isArray(s.method.returns)&&s.method.returns.description||s.method.returnsDescription?(e(),n("p",{key:0,class:"noprose",innerHTML:t(E)},null,8,pt)):l("",!0)])]),s.method.throws?(e(),n("div",ht,[_t,(e(!0),n(k,null,H(s.method.throws,h=>(e(),_(q,{key:h,names:h},null,8,["names"]))),128))])):l("",!0),t(m)&&t(m).length?(e(),n("div",ft,[yt,t(m).length>1?(e(),n("ul",vt,[(e(!0),n(k,null,H(t(m),h=>(e(),n("li",{key:h.text},[u(i,{to:h.link},{default:M(()=>[y(x(h.text),1)]),_:2},1032,["to"])]))),128))])):(e(),_(i,{key:1,to:t(m)[0].link},{default:M(()=>[y(x(t(m)[0].text),1)]),_:1},8,["to"]))])):l("",!0),(c=s.method.examples)!=null&&c.length?(e(),n("div",gt,[bt,(e(!0),n(k,null,H(s.method.examples,h=>(e(),_(Ue,{key:h,code:h.trim()},null,8,["code"]))),128))])):l("",!0),(D=s.method.see)!=null&&D.length?(e(),_(Q,{key:4,see:s.method.see},null,8,["see"])):l("",!0)])],8,We),kt],64)}}});function A(s){return`${s.scope==="static"?"s-":""}${s.name}`}const $t={key:0},Tt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},wt=["aria-expanded"],Mt={class:"sr-only"},Ct=y(" Properties "),Lt=["onClick"],Ht={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Et={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},Dt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},jt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},At={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Bt={key:1},Zt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},qt=["aria-expanded"],St={class:"sr-only"},Pt=y(" Methods "),It=["onClick"],Vt={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Nt={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},Rt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},zt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Ft={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Gt={key:2},Jt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Ot=["aria-expanded"],Kt={class:"sr-only"},Ut=y(" Events "),Wt=["onClick"],Xt={key:0,class:"text-gray-200 text-sm font-semibold uppercase inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Yt=S({props:{properties:null,methods:null,events:null},setup(s){const d=s,$=we(Ce).greater("lg"),C=N(!1),g=f(()=>{var p;return P.value?d.properties:(p=d.properties)==null?void 0:p.filter(m=>m.access!=="private")}),o=f(()=>{var p;return P.value?d.methods:(p=d.methods)==null?void 0:p.filter(m=>m.access!=="private")}),T=f(()=>{var p;return P.value?d.events:(p=d.events)==null?void 0:p.filter(m=>m.access!=="private")}),E=p=>{const m=document.getElementById(`doc-for-${p}`);m==null||m.scrollIntoView({behavior:V.value?void 0:"smooth",block:"start"})};return Me($,()=>C.value=!0,{immediate:!0}),(p,m)=>{const L=je,b=Ae,a=G("router-link");return e(),n("div",{class:j(["grid sm:grid-cols-2 mb-10",s.events&&s.events.length?"md:grid-cols-3":null])},[t(g)&&t(g).length?(e(),n("div",$t,[u(t(K),{"default-open":C.value},{default:M(({open:i})=>[u(t(U),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",Tt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Mt,x(i?"Shrink":"Expand"),1),u(L,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(b,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,wt),Ct])]),_:2},1024),u(t(W),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(k,null,H(t(g),c=>(e(),n("li",{key:t(A)(c),class:"cursor-pointer mb-14 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:D=>E(t(A)(c))},[u(a,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(A)(c)}},class:"mx-2"},{default:M(()=>[y(x(c.name),1)]),_:2},1032,["to"]),r("span",Ht,[c.scope==="static"?(e(),n("span",Et,"S")):l("",!0),c.abstract?(e(),n("span",Dt,"A")):l("",!0),c.deprecated?(e(),n("span",jt,"D")):l("",!0),c.access==="private"?(e(),n("span",At,"P")):l("",!0)])],8,Lt))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0),t(o)&&t(o).length?(e(),n("div",Bt,[u(t(K),{"default-open":C.value},{default:M(({open:i})=>[u(t(U),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",Zt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",St,x(i?"Shrink":"Expand"),1),u(L,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(b,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,qt),Pt])]),_:2},1024),u(t(W),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(k,null,H(t(o),c=>(e(),n("li",{key:t(A)(c),class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:D=>E(t(A)(c))},[u(a,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(A)(c)}},class:"mx-2"},{default:M(()=>[y(x(c.name),1)]),_:2},1032,["to"]),r("span",Vt,[c.scope==="static"?(e(),n("span",Nt,"S")):l("",!0),c.abstract?(e(),n("span",Rt,"A")):l("",!0),c.deprecated?(e(),n("span",zt,"D")):l("",!0),c.access==="private"?(e(),n("span",Ft,"P")):l("",!0)])],8,It))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0),t(T)&&t(T).length?(e(),n("div",Gt,[u(t(K),{"default-open":C.value},{default:M(({open:i})=>[u(t(U),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",Jt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Kt,x(i?"Shrink":"Expand"),1),u(L,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(b,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Ot),Ut])]),_:2},1024),u(t(W),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(k,null,H(t(T),c=>(e(),n("li",{key:c.name,class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:D=>E(`e-${c.name}`)},[u(a,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${c.name}`}},class:"mx-2"},{default:M(()=>[y(x(c.name),1)]),_:2},1032,["to"]),c.deprecated?(e(),n("span",Xt,"D")):l("",!0)],8,Wt))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0)],2)}}}),Qt=["id"],es={class:"flex items-center"},ts={class:"inline-block mr-2"},ss={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},ns={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},os={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},rs={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ls={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},cs=["innerHTML"],as={class:"grid pl-2.5"},is=["innerHTML"],ds={class:"font-semibold mt-3"},us=y(" Type: "),ms={key:1,class:"mt-3"},ps=y(" Default: "),hs=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),_s=S({props:{prop:null},setup(s){const d=s,v=R(),$=z(),C=F(),g=f(()=>C.state.docs),o=f(()=>{var p;return B((p=Z(d.prop.description,g.value,v,$))!=null?p:"")}),T=f(()=>typeof d.prop.deprecated=="string"?B(Z(d.prop.deprecated,g.value,v,$)):""),E=f(()=>`${d.prop.scope==="static"?"s-":""}${d.prop.name}`);return(p,m)=>{var b;const L=G("router-link");return e(),n(k,null,[r("div",{id:`doc-for-${t(E)}`,class:"scroll-to mb-8"},[u(J,{class:"float-right mt-8",meta:s.prop.meta},null,8,["meta"]),r("div",es,[r("h3",ts,[u(L,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(E)}}},{default:M(()=>[y("."+x(s.prop.name),1)]),_:1},8,["to"])]),r("span",ss,[s.prop.scope==="static"?(e(),n("span",ns,"Static")):l("",!0),s.prop.readonly?(e(),n("span",os,"Read-only")):l("",!0),s.prop.deprecated?(e(),n("span",rs,"Deprecated")):l("",!0),s.prop.access==="private"?(e(),n("span",ls,"Private")):l("",!0)])]),s.prop.deprecated&&t(T)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(T)},null,8,cs)):l("",!0),r("div",as,[r("p",{class:"noprose",innerHTML:t(o)},null,8,is),s.prop.props&&s.prop.props.length>0?(e(),_(O,{key:0,parameters:s.prop.props},null,8,["parameters"])):l("",!0),r("div",ds,[us,(e(!0),n(k,null,H(s.prop.type,a=>(e(),_(q,{key:t(I)(a),names:a,nullable:s.prop.nullable},null,8,["names","nullable"]))),128))]),s.prop.default?(e(),n("div",ms,[ps,r("code",null,x(s.prop.default),1)])):l("",!0),(b=s.prop.see)!=null&&b.length?(e(),_(Q,{key:2,see:s.prop.see},null,8,["see"])):l("",!0)])],8,Qt),hs],64)}}}),fs={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},ys={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},vs=["id"],gs={class:"font-bold !mt-3"},bs={key:0},ks=y(" extends "),xs={key:1},$s=y(" implements "),Ts=["innerHTML"],ws={key:1,class:"grid"},Ms=r("h2",{class:"!mt-3"},"Constructor",-1),Cs=y(");"),Ls={key:2,class:"!mt-4"},Hs={key:3},Es={key:4},Ss=S({setup(s){var b;X.configure({ignoreUnescapedHTML:!0});const d=R(),v=z(),$=F(),C=N(),g=f(()=>$.state.docs),o=(b=g.value)==null?void 0:b.classes.find(a=>a.name===v.params.class),T=f(()=>B(Z(o==null?void 0:o.description,g.value,d,v))),E=f(()=>!(o!=null&&o.construct)||!o.construct.params?null:o.construct.params.filter(a=>!a.name.includes("."))),p=f(()=>{if(!(o!=null&&o.props))return null;let a=o.props;return P.value||(a=a.filter(i=>i.access!=="private")),a.sort((i,c)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${c.scope==="static"?"ZZZ":""}${c.name}`))}),m=f(()=>{if(!(o!=null&&o.methods))return null;let a=o.methods;return P.value||(a=a.filter(i=>i.access!=="private")),a.sort((i,c)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${c.scope==="static"?"ZZZ":""}${c.name}`))}),L=a=>a;return Le({title:f(()=>{var a;return`wolvesville.js | ${(a=o==null?void 0:o.name)!=null?a:""}`})}),He(()=>{const a=document.getElementById(`doc-for-${v.query.scrollTo}`);a==null||a.scrollIntoView({behavior:V.value?void 0:"smooth",block:"start"});const i=document.getElementById("container");!v.query.scrollTo&&i&&i.scrollTop>200&&i.scrollTo({top:0,behavior:V.value?void 0:"smooth"}),C.value&&X.highlightElement(C.value)}),Ee(()=>v.query.scrollTo,()=>{const a=document.getElementById(`doc-for-${v.query.scrollTo}`);a==null||a.scrollIntoView({behavior:V.value?void 0:"smooth",block:"start"})}),(a,i)=>{var c,D,h,ee,te,se,ne,oe,re,le,ce,ae,ie,de,ue,me,pe,he,_e,fe,ye;return e(),n("div",fs,[u(J,{class:"float-right mt-2",meta:(c=t(o))==null?void 0:c.meta},null,8,["meta"]),r("div",ys,[r("h1",{id:`doc-for-${(D=t(o))==null?void 0:D.name}`,class:"!mb-3"},x((h=t(o))==null?void 0:h.name),9,vs),r("p",gs,[(ee=t(o))!=null&&ee.extends?(e(),n("span",bs,[ks,typeof((te=t(o))==null?void 0:te.extends[0])=="string"?(e(),_(Y,{key:0,type:L((se=t(o))==null?void 0:se.extends)},null,8,["type"])):(e(!0),n(k,{key:1},H((ne=t(o))==null?void 0:ne.extends,w=>(e(),_(q,{key:t(I)(w),names:w},null,8,["names"]))),128))])):l("",!0),(oe=t(o))!=null&&oe.implements?(e(),n("span",xs,[$s,typeof((re=t(o))==null?void 0:re.implements[0])=="string"?(e(),_(Y,{key:0,type:L((le=t(o))==null?void 0:le.implements)},null,8,["type"])):(e(!0),n(k,{key:1},H((ce=t(o))==null?void 0:ce.implements,w=>(e(),_(q,{key:t(I)(w),names:w},null,8,["names"]))),128))])):l("",!0)]),(ae=t(o))!=null&&ae.description?(e(),n("p",{key:0,class:"!mb-2",innerHTML:t(T)},null,8,Ts)):l("",!0),(ie=t(o))!=null&&ie.construct?(e(),n("div",ws,[Ms,r("pre",{ref_key:"codeblock",ref:C,class:"javascript"},[r("code",null,[y("new "+x((de=t(g))==null?void 0:de.global)+"."+x((ue=t(o))==null?void 0:ue.name)+"(",1),(e(!0),n(k,null,H(t(E),(w,be)=>{var ve,ge;return e(),n("span",{key:w.name},x(w.name)+x(((ge=(ve=t(E))==null?void 0:ve.length)!=null?ge:1)-1!==be?", ":""),1)}),128)),Cs])],512),t(o).construct.params?(e(),_(O,{key:0,parameters:t(o).construct.params},null,8,["parameters"])):l("",!0)])):l("",!0),u(Yt,{class:"mt-3",properties:(me=t(o))==null?void 0:me.props,methods:(pe=t(o))==null?void 0:pe.methods,events:(he=t(o))==null?void 0:he.events},null,8,["properties","methods","events"]),t(p)&&t(p).length?(e(),n("h2",Ls,"Properties")):l("",!0),(e(!0),n(k,null,H(t(p),w=>(e(),_(_s,{key:t(A)(w),prop:w},null,8,["prop"]))),128)),t(m)&&t(m).length?(e(),n("h2",Hs,"Methods")):l("",!0),(e(!0),n(k,null,H(t(m),w=>(e(),_(xt,{key:t(A)(w),method:w},null,8,["method"]))),128)),((_e=t(o))==null?void 0:_e.events)&&((fe=t(o))==null?void 0:fe.events.length)?(e(),n("h2",Es,"Events")):l("",!0),(e(!0),n(k,null,H((ye=t(o))==null?void 0:ye.events,w=>(e(),_(ze,{key:`e-${w.name}`,event:w},null,8,["event"]))),128))])])}}});export{Ss as default};
