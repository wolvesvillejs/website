import{c as E,a as S,_ as j,d as G,t as y,b as f}from"./See.8edc379e.js";import{d as I,e as d,T as K,f as q,o as t,c as n,b as N,u as s,a as i,G as z,A as l,D as c,F as o,C as k,k as J,l as O,m as Q}from"./index.e43e531a.js";import{m as V,_ as U}from"./markdown.9c47aff2.js";import{u as W}from"./ReducedMotion.142f3a32.js";const X={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},Y={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},Z=["id"],ee=["innerHTML"],se=i("h2",null,"Parameters",-1),te=i("h2",null,"Returns",-1),ae={key:0},re={class:"mt-3"},ne=["innerHTML"],me=I({setup(oe){var b,g;const h=J(),p=O(),F=Q(),u=d(()=>F.state.docs),e=(g=(b=u.value)==null?void 0:b.functions)==null?void 0:g.find(a=>a.name===p.params.function),P=d(()=>V(E(e==null?void 0:e.description,u.value,h,p))),v=d(()=>{var a,_,m;return V((m=E((_=(a=e.returns)==null?void 0:a[0])==null?void 0:_.description,u.value,h,p))!=null?m:"")});return K({title:d(()=>{var a;return`wolvesville.js | ${(a=e==null?void 0:e.name)!=null?a:""}`})}),q(()=>{const a=document.getElementById("container");a&&a.scrollTop>200&&a.scrollTo({top:0,behavior:W.value?void 0:"smooth"})}),(a,_)=>{var x,T,L,$,w,M,A,B,H,R,C;const m=G;return t(),n("div",X,[N(U,{class:"float-right mt-2",meta:(x=s(e))==null?void 0:x.meta},null,8,["meta"]),i("div",Y,[i("h1",{id:`doc-for-${(T=s(e))==null?void 0:T.name}`},z((L=s(e))==null?void 0:L.name),9,Z),($=s(e))!=null&&$.description?(t(),n("p",{key:0,innerHTML:s(P)},null,8,ee)):l("",!0),(M=(w=s(e))==null?void 0:w.see)!=null&&M.length?(t(),c(S,{key:1,see:(A=s(e))==null?void 0:A.see},null,8,["see"])):l("",!0),((B=s(e))==null?void 0:B.params)&&((H=s(e))==null?void 0:H.params.length)?(t(),n(o,{key:2},[se,N(j,{parameters:s(e).params},null,8,["parameters"])],64)):l("",!0),(R=s(e))!=null&&R.returns?(t(),n(o,{key:3},[te,s(e).returns&&Array.isArray(s(e).returns)?(t(),n("span",ae,[s(u).meta.format>=30?(t(),n(o,{key:0},[Array.isArray((C=s(e).returns)==null?void 0:C[0])?(t(!0),n(o,{key:0},k(s(e).returns.flat(),r=>(t(),c(f,{key:s(y)(r),names:r},null,8,["names"]))),128)):(t(!0),n(o,{key:1},k(s(e).returns.flat(),r=>{var D;return t(),c(f,{key:s(y)(r),names:(D=r.types)==null?void 0:D.flat(),variable:r.variable,nullable:r.nullable},null,8,["names","variable","nullable"])}),128))],64)):(t(!0),n(o,{key:1},k(s(e).returns,r=>(t(),c(f,{key:s(y)(r),names:r},null,8,["names"]))),128))])):(t(),c(m,{key:1,type:["void"]})),i("div",re,[s(v)?(t(),n("p",{key:0,class:"noprose",innerHTML:s(v)},null,8,ne)):l("",!0)])],64)):l("",!0)])])}}});export{me as default};
