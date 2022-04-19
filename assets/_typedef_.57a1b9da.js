import{o as n,c as t,a as o,d as P,u as q,e as z,f as D,h as y,r as K,t as _,p as A,b as u,x as w,s as M,q as e,F as B,n as F,m as c,Y as J,G as O}from"./index.d9a951e1.js";import{a as Q,i as U,r as W}from"./headlessui.esm.2ab1f941.js";import{c as G,d as X,t as H,_ as C,b as L,a as Z}from"./See.63bb507a.js";import{m as I,_ as ee}from"./markdown.9bec8d83.js";const se={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ne=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1),te=[ne];function oe(r,f){return n(),t("svg",se,te)}var ae={name:"heroicons-outline-minus",render:oe};const re={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},le=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1),ie=[le];function ce(r,f){return n(),t("svg",re,ie)}var ue={name:"heroicons-outline-plus",render:ce};const de={class:"flex gap-1 items-center -ml-1"},_e={class:"font-semibold"},me=["aria-expanded"],pe={class:"sr-only"},he=["innerHTML"],fe=P({props:["names","variable","nullable"],setup(r){var a;const f=r,x=q(),T=z(),$=D(),s=y(()=>$.state.docs),m=K((a=s.value)==null?void 0:a.typedefs.find(p=>p.name===f.names[0][0])),k=y(()=>{var p,h;return I((h=G((p=m.value)==null?void 0:p.description,s.value,x,T))!=null?h:"")});return(p,h)=>{const g=ue,b=ae;return m.value?(n(),_(e(W),{key:0,as:"div"},{default:A(({open:d})=>[u(e(Q),{as:"div",class:"focus:outline-none"},{default:A(()=>[o("div",de,[o("span",_e,w(r.nullable?"?":"")+w(r.variable?"...":""),1),(n(!0),t(B,null,M(r.names,l=>(n(),_(X,{key:e(H)(l),type:l},null,8,["type"]))),128)),o("button",{class:"leading-3 focus:outline-none","aria-expanded":d},[o("span",pe,w(d?"Shrink":"Expand"),1),u(g,{class:F(["inline-block",{hidden:d}]),"aria-hidden":"true"},null,8,["class"]),u(b,{class:F(["inline-block",{hidden:!d}]),"aria-hidden":"true"},null,8,["class"])],8,me)])]),_:2},1024),u(e(U),null,{default:A(()=>{var l,v;return[e(k)?(n(),t("div",{key:0,innerHTML:e(k)},null,8,he)):c("",!0),(l=m.value)!=null&&l.props?(n(),_(C,{key:1,parameters:(v=m.value)==null?void 0:v.props},null,8,["parameters"])):c("",!0)]}),_:1})]),_:1})):(n(),_(L,{key:1,names:r.names},null,8,["names"]))}}}),ke={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},ve={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},ye=["id"],xe=["innerHTML"],$e=o("h2",null,"Types",-1),ge={id:"typedef-types"},be={key:2},we=o("h2",null,"Properties",-1),Me={key:3},Be=o("h2",null,"Parameters",-1),He={key:4},Te=o("h2",null,"Returns",-1),Ae={key:0},Ce={key:1},Ne=P({setup(r){var k;const f=q(),x=z(),T=D(),$=y(()=>T.state.docs),s=(k=$.value)==null?void 0:k.typedefs.find(a=>a.name===x.params.typedef),m=y(()=>I(G(s==null?void 0:s.description,$.value,f,x)));return J({title:y(()=>{var a;return`discord.js | ${(a=s==null?void 0:s.name)!=null?a:""}`})}),O(()=>{const a=document.getElementById("container");a&&a.scrollTop>200&&a.scrollTo({top:0,behavior:"smooth"})}),(a,p)=>{var h,g,b,d,l,v,R,E,j,N,S,V,Y;return n(),t("div",ke,[u(ee,{class:"float-right mt-2",meta:(h=e(s))==null?void 0:h.meta},null,8,["meta"]),o("div",ve,[o("h1",{id:`doc-for-${(g=e(s))==null?void 0:g.name}`},w((b=e(s))==null?void 0:b.name),9,ye),(d=e(s))!=null&&d.description?(n(),t("p",{key:0,innerHTML:e(m)},null,8,xe)):c("",!0),(v=(l=e(s))==null?void 0:l.see)!=null&&v.length?(n(),_(Z,{key:1,see:(R=e(s))==null?void 0:R.see},null,8,["see"])):c("",!0),$e,o("ul",ge,[(n(!0),t(B,null,M((E=e(s))==null?void 0:E.type,i=>(n(),t("li",{key:e(H)(i)},[u(fe,{class:"!m-0",names:i},null,8,["names"])]))),128))]),((j=e(s))==null?void 0:j.props)&&((N=e(s))==null?void 0:N.props.length)?(n(),t("div",be,[we,u(C,{parameters:e(s).props},null,8,["parameters"])])):c("",!0),((S=e(s))==null?void 0:S.params)&&((V=e(s))==null?void 0:V.params.length)?(n(),t("div",Me,[Be,u(C,{parameters:e(s).params},null,8,["parameters"])])):c("",!0),(Y=e(s))!=null&&Y.returns?(n(),t("div",He,[Te,o("p",null,[e(s).returns&&Array.isArray(e(s).returns)?(n(),t("span",Ae,[(n(!0),t(B,null,M(e(s).returns,i=>(n(),_(L,{key:e(H)(i),names:i},null,8,["names"]))),128))])):e(s).returns&&!Array.isArray(e(s).returns)?(n(),t("span",Ce,[(n(!0),t(B,null,M(e(s).returns.types||e(s).returns,i=>(n(),_(L,{key:e(H)(i),names:i,variable:e(s).returns.variable,nullable:e(s).returns.nullable},null,8,["names","variable","nullable"]))),128))])):c("",!0)])])):c("",!0)])])}}});export{Ne as default};