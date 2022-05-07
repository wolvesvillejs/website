var nt=Object.defineProperty,rt=Object.defineProperties;var it=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var Le=(e,a,l)=>a in e?nt(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,D=(e,a)=>{for(var l in a||(a={}))Te.call(a,l)&&Le(e,l,a[l]);if(ce)for(var l of ce(a))Re.call(a,l)&&Le(e,l,a[l]);return e},pe=(e,a)=>rt(e,it(a));var fe=(e,a)=>{var l={};for(var o in e)Te.call(e,o)&&a.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&ce)for(var o of ce(e))a.indexOf(o)<0&&Re.call(e,o)&&(l[o]=e[o]);return l};import{o as w,c as F,a as p,d as U,b as m,w as _e,p as he,e as O,r as $,f as se,g as ke,u,i as xe,t as ee,h as ge,F as Y,j as Me,n as te,k as Ue,l as ze,m as Ke,q as ut,M as I,s as Q,v as dt,x as Ge,y as We,z as V,A as X,B as k,C as oe,D as G,E as ct,G as M,H as De,I as ne,J as pt,K as ft,L as vt,N as $e}from"./index.bd26cb08.js";import{u as Z,t as bt}from"./ReducedMotion.203aa2c2.js";import{_ as mt,a as gt}from"./chevron-right.a4d53b63.js";import{t as j,u as J,k as W,a as le,c as ht,l as ye,O as He,R as Ye,b as qe,p as xt,m as Ee,o as C,A as ve,G as be,J as me}from"./disclosure.c7e4a8e8.js";import{_ as yt}from"./Spinner.78eae331.js";const _t={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},kt=p("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m8 7l4-4m0 0l4 4m-4-4v18"},null,-1),wt=[kt];function St(e,a){return w(),F("svg",_t,wt)}var Ot={name:"heroicons-outline-arrow-narrow-up",render:St};const Lt={class:"fixed bottom-0 right-0 pb-4"},Tt={class:"px-6 lg:px-8"},Rt=U({setup(e){const a=()=>{var l;return(l=document.getElementById("container"))==null?void 0:l.scrollTo({top:0,behavior:Z.value?void 0:"smooth"})};return(l,o)=>{const t=Ot;return w(),F("div",Lt,[p("div",Tt,[p("button",{class:"bg-discord-blurple-500 hover:bg-discord-blurple-530 dark:hover:bg-discord-blurple-560 text-gray-200 hover:text-white rounded-md p-2 leading-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200",onClick:o[0]||(o[0]=i=>a())},[m(t,{class:"h-6 w-6"})])])])}}}),Dt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},$t=p("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 15l7-7l7 7"},null,-1),Et=[$t];function It(e,a){return w(),F("svg",Dt,Et)}var Ct={name:"heroicons-outline-chevron-up",render:It};function Nt(e){throw new Error("Unexpected object: "+e)}var B=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(B||{});function Pt(e,a){let l=a.resolveItems();if(l.length<=0)return null;let o=a.resolveActiveIndex(),t=o!=null?o:-1,i=(()=>{switch(e.focus){case 0:return l.findIndex(s=>!a.resolveDisabled(s));case 1:{let s=l.slice().reverse().findIndex((v,d,c)=>t!==-1&&c.length-d-1>=t?!1:!a.resolveDisabled(v));return s===-1?s:l.length-1-s}case 2:return l.findIndex((s,v)=>v<=t?!1:!a.resolveDisabled(s));case 3:{let s=l.slice().reverse().findIndex(v=>!a.resolveDisabled(v));return s===-1?s:l.length-1-s}case 4:return l.findIndex(s=>a.resolveId(s)===e.id);case 5:return null;default:Nt(e)}})();return i===-1?o:i}function jt(e){if(typeof window=="undefined")return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let a=j(e);if(a)return a.ownerDocument}return document}let Ie=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Vt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Vt||{}),Ft=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ft||{}),Bt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Bt||{}),Xe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Xe||{});function At(e,a=0){var l;return e===((l=jt(e))==null?void 0:l.body)?!1:J(a,{[0](){return e.matches(Ie)},[1](){let o=e;for(;o!==null;){if(o.matches(Ie))return!0;o=o.parentElement}return!1}})}function Mt(e,a=l=>l){return e.slice().sort((l,o)=>{let t=a(l),i=a(o);if(t===null||i===null)return 0;let s=t.compareDocumentPosition(i);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ce(e,a,l){typeof window!="undefined"&&_e(o=>{window.addEventListener(e,a,l),o(()=>window.removeEventListener(e,a,l))})}function Ut(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(a=>setTimeout(()=>{throw a}))}var zt=(e=>(e[e.None=1]="None",e[e.IgnoreScrollbars=2]="IgnoreScrollbars",e))(zt||{});function Kt(e,a,l=1){let o=!1;function t(i){if(o)return;o=!0,Ut(()=>{o=!1});let s=i.target;if(!s.ownerDocument.documentElement.contains(s))return;let v=function d(c){return typeof c=="function"?d(c()):Array.isArray(c)||c instanceof Set?c:[c]}(e);if((l&2)===2){let d=20,c=s.ownerDocument.documentElement;if(i.clientX>c.clientWidth-d||i.clientX<d||i.clientY>c.clientHeight-d||i.clientY<d)return}for(let d of v){if(d===null)continue;let c=d instanceof HTMLElement?d:j(d);if(c!=null&&c.contains(s))return}a(i,s)}Ce("pointerdown",t),Ce("mousedown",t)}let Je=U({name:"VisuallyHidden",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:a,attrs:l}){return()=>W({props:pe(D({},e),{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",display:"none"}}),slot:{},attrs:l,slots:a,name:"VisuallyHidden"})}});function Qe(e={},a=null,l=[]){for(let[o,t]of Object.entries(e))et(l,Ze(a,o),t);return l}function Ze(e,a){return e?e+"["+a+"]":a}function et(e,a,l){if(Array.isArray(l))for(let[o,t]of l.entries())et(e,Ze(a,o.toString()),t);else l instanceof Date?e.push([a,l.toISOString()]):typeof l=="boolean"?e.push([a,l?"1":"0"]):typeof l=="string"?e.push([a,l]):typeof l=="number"?e.push([a,`${l}`]):l==null?e.push([a,""]):Qe(l,a,e)}function Gt(e){var a;let l=(a=e==null?void 0:e.form)!=null?a:e.closest("form");if(l){for(let o of l.elements)if(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image"){o.click();return}}}let tt=Symbol("DescriptionContext");function Wt(){let e=xe(tt,null);if(e===null)throw new Error("Missing parent");return e}function Ht({slot:e=$({}),name:a="Description",props:l={}}={}){let o=$([]);function t(i){return o.value.push(i),()=>{let s=o.value.indexOf(i);s!==-1&&o.value.splice(s,1)}}return he(tt,{register:t,slot:e,name:a,props:l}),O(()=>o.value.length>0?o.value.join(" "):void 0)}let Gl=U({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(e,{attrs:a,slots:l}){let o=Wt(),t=`headlessui-description-${le()}`;return se(()=>ke(o.register(t))),()=>{let{name:i="Description",slot:s=$({}),props:v={}}=o,d=e,c=pe(D({},Object.entries(v).reduce((n,[r,L])=>Object.assign(n,{[r]:u(L)}),{})),{id:t});return W({props:D(D({},d),c),slot:s.value,attrs:a,slots:l,name:i})}}});var Yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Yt||{}),qt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(qt||{}),Xt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Xt||{});function Jt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let lt=Symbol("ListboxContext");function de(e){let a=xe(lt,null);if(a===null){let l=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,de),l}return a}let Ne=U({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:a,attrs:l,emit:o}){let t=$(1),i=$(null),s=$(null),v=$(null),d=$([]),c=$(""),n=$(null),r=$(1);function L(f=b=>b){let b=n.value!==null?d.value[n.value]:null,h=Mt(f(d.value.slice()),E=>j(E.dataRef.domRef)),_=b?h.indexOf(b):null;return _===-1&&(_=null),{options:h,activeOptionIndex:_}}let R=O(()=>e.modelValue),y=O(()=>e.multiple?1:0),g={listboxState:t,value:R,mode:y,orientation:O(()=>e.horizontal?"horizontal":"vertical"),labelRef:i,buttonRef:s,optionsRef:v,disabled:O(()=>e.disabled),options:d,searchQuery:c,activeOptionIndex:n,activationTrigger:r,closeListbox(){e.disabled||t.value!==1&&(t.value=1,n.value=null)},openListbox(){e.disabled||t.value!==0&&(t.value=0)},goToOption(f,b,h){if(e.disabled||t.value===1)return;let _=L(),E=Pt(f===B.Specific?{focus:B.Specific,id:b}:{focus:f},{resolveItems:()=>_.options,resolveActiveIndex:()=>_.activeOptionIndex,resolveId:z=>z.id,resolveDisabled:z=>z.dataRef.disabled});c.value="",n.value=E,r.value=h!=null?h:1,d.value=_.options},search(f){if(e.disabled||t.value===1)return;let b=c.value!==""?0:1;c.value+=f.toLowerCase();let h=(n.value!==null?d.value.slice(n.value+b).concat(d.value.slice(0,n.value+b)):d.value).find(E=>E.dataRef.textValue.startsWith(c.value)&&!E.dataRef.disabled),_=h?d.value.indexOf(h):-1;_===-1||_===n.value||(n.value=_,r.value=1)},clearSearch(){e.disabled||t.value!==1&&c.value!==""&&(c.value="")},registerOption(f,b){let h=L(_=>[..._,{id:f,dataRef:b}]);d.value=h.options,n.value=h.activeOptionIndex},unregisterOption(f){let b=L(h=>{let _=h.findIndex(E=>E.id===f);return _!==-1&&h.splice(_,1),h});d.value=b.options,n.value=b.activeOptionIndex,r.value=1},select(f){e.disabled||o("update:modelValue",J(y.value,{[0]:()=>f,[1]:()=>{let b=ee(g.value.value).slice(),h=ee(f),_=b.indexOf(h);return _===-1?b.push(h):b.splice(_,1),b}}))}};return Kt([s,v],(f,b)=>{var h;t.value===0&&(g.closeListbox(),At(b,Xe.Loose)||(f.preventDefault(),(h=j(s))==null||h.focus()))}),he(lt,g),ht(O(()=>J(t.value,{[0]:ye.Open,[1]:ye.Closed}))),()=>{let z=e,{name:f,modelValue:b,disabled:h}=z,_=fe(z,["name","modelValue","disabled"]),E={open:t.value===0,disabled:h};return ge(Y,[...f!=null&&b!=null?Qe({[f]:b}).map(([q,T])=>ge(Je,He({key:q,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:q,value:T}))):[],W({props:D(D({},l),Ye(_,["onUpdate:modelValue","horizontal","multiple"])),slot:E,slots:a,attrs:l,name:"Listbox"})])}}});U({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(e,{attrs:a,slots:l}){let o=de("ListboxLabel"),t=`headlessui-listbox-label-${le()}`;function i(){var s;(s=j(o.buttonRef))==null||s.focus({preventScroll:!0})}return()=>{let s={open:o.listboxState.value===0,disabled:o.disabled.value},v={id:t,ref:o.labelRef,onClick:i};return W({props:D(D({},e),v),slot:s,attrs:a,slots:l,name:"ListboxLabel"})}}});let Pe=U({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(e,{attrs:a,slots:l,expose:o}){let t=de("ListboxButton"),i=`headlessui-listbox-button-${le()}`;o({el:t.buttonRef,$el:t.buttonRef});function s(n){switch(n.key){case C.Space:case C.Enter:case C.ArrowDown:n.preventDefault(),t.openListbox(),te(()=>{var r;(r=j(t.optionsRef))==null||r.focus({preventScroll:!0}),t.value.value||t.goToOption(B.First)});break;case C.ArrowUp:n.preventDefault(),t.openListbox(),te(()=>{var r;(r=j(t.optionsRef))==null||r.focus({preventScroll:!0}),t.value.value||t.goToOption(B.Last)});break}}function v(n){switch(n.key){case C.Space:n.preventDefault();break}}function d(n){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),te(()=>{var r;return(r=j(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})})):(n.preventDefault(),t.openListbox(),Jt(()=>{var r;return(r=j(t.optionsRef))==null?void 0:r.focus({preventScroll:!0})})))}let c=qe(O(()=>({as:e.as,type:a.type})),t.buttonRef);return()=>{var n,r;let L={open:t.listboxState.value===0,disabled:t.disabled.value},R={ref:t.buttonRef,id:i,type:c.value,"aria-haspopup":!0,"aria-controls":(n=j(t.optionsRef))==null?void 0:n.id,"aria-expanded":t.disabled.value?void 0:t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(r=j(t.labelRef))==null?void 0:r.id,i].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:s,onKeyup:v,onClick:d};return W({props:D(D({},e),R),slot:L,attrs:a,slots:l,name:"ListboxButton"})}}}),je=U({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:a,slots:l,expose:o}){let t=de("ListboxOptions"),i=`headlessui-listbox-options-${le()}`,s=$(null);o({el:t.optionsRef,$el:t.optionsRef});function v(n){switch(s.value&&clearTimeout(s.value),n.key){case C.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case C.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeOptionIndex.value!==null){let r=t.options.value[t.activeOptionIndex.value];t.select(r.dataRef.value)}t.mode.value===0&&(t.closeListbox(),te(()=>{var r;return(r=j(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})}));break;case J(t.orientation.value,{vertical:C.ArrowDown,horizontal:C.ArrowRight}):return n.preventDefault(),n.stopPropagation(),t.goToOption(B.Next);case J(t.orientation.value,{vertical:C.ArrowUp,horizontal:C.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),t.goToOption(B.Previous);case C.Home:case C.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToOption(B.First);case C.End:case C.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToOption(B.Last);case C.Escape:n.preventDefault(),n.stopPropagation(),t.closeListbox(),te(()=>{var r;return(r=j(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case C.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(t.search(n.key),s.value=setTimeout(()=>t.clearSearch(),350));break}}let d=xt(),c=O(()=>d!==null?d.value===ye.Open:t.listboxState.value===0);return()=>{var n,r,L,R;let y={open:t.listboxState.value===0},g={"aria-activedescendant":t.activeOptionIndex.value===null||(n=t.options.value[t.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(R=(r=j(t.labelRef))==null?void 0:r.id)!=null?R:(L=j(t.buttonRef))==null?void 0:L.id,"aria-orientation":t.orientation.value,id:i,onKeydown:v,role:"listbox",tabIndex:0,ref:t.optionsRef};return W({props:D(D({},e),g),slot:y,attrs:a,slots:l,features:Ee.RenderStrategy|Ee.Static,visible:c.value,name:"ListboxOptions"})}}}),Ve=U({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{slots:a,attrs:l,expose:o}){let t=de("ListboxOption"),i=`headlessui-listbox-option-${le()}`,s=$(null);o({el:s,$el:s});let v=O(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===i:!1),d=O(()=>J(t.mode.value,{[0]:()=>ee(t.value.value)===ee(e.value),[1]:()=>ee(t.value.value).includes(ee(e.value))})),c=O(()=>J(t.mode.value,{[1]:()=>{var g;let f=ee(t.value.value);return((g=t.options.value.find(b=>f.includes(b.dataRef.value)))==null?void 0:g.id)===i},[0]:()=>d.value})),n=O(()=>({disabled:e.disabled,value:e.value,textValue:"",domRef:s}));se(()=>{var g,f;let b=(f=(g=j(s))==null?void 0:g.textContent)==null?void 0:f.toLowerCase().trim();b!==void 0&&(n.value.textValue=b)}),se(()=>t.registerOption(i,n)),ke(()=>t.unregisterOption(i)),se(()=>{Me([t.listboxState,d],()=>{t.listboxState.value===0&&(!d.value||J(t.mode.value,{[1]:()=>{c.value&&t.goToOption(B.Specific,i)},[0]:()=>{t.goToOption(B.Specific,i)}}))},{immediate:!0})}),_e(()=>{t.listboxState.value===0&&(!v.value||t.activationTrigger.value!==0&&te(()=>{var g,f;return(f=(g=j(s))==null?void 0:g.scrollIntoView)==null?void 0:f.call(g,{block:"nearest"})}))});function r(g){if(e.disabled)return g.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),te(()=>{var f;return(f=j(t.buttonRef))==null?void 0:f.focus({preventScroll:!0})}))}function L(){if(e.disabled)return t.goToOption(B.Nothing);t.goToOption(B.Specific,i)}function R(){e.disabled||v.value||t.goToOption(B.Specific,i,0)}function y(){e.disabled||!v.value||t.goToOption(B.Nothing)}return()=>{let{disabled:g}=e,f={active:v.value,selected:d.value,disabled:g},b={id:i,ref:s,role:"option",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,"aria-selected":d.value===!0?d.value:void 0,disabled:void 0,onClick:r,onFocus:L,onPointermove:R,onMousemove:R,onPointerleave:y,onMouseleave:y};return W({props:D(D({},Ye(e,["value","disabled"])),b),slot:f,attrs:l,slots:a,name:"ListboxOption"})}}}),at=Symbol("LabelContext");function ot(){let e=xe(at,null);if(e===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,ot),a}return e}function Qt({slot:e={},name:a="Label",props:l={}}={}){let o=$([]);function t(i){return o.value.push(i),()=>{let s=o.value.indexOf(i);s!==-1&&o.value.splice(s,1)}}return he(at,{register:t,slot:e,name:a,props:l}),O(()=>o.value.length>0?o.value.join(" "):void 0)}let Zt=U({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(e,{slots:a,attrs:l}){let o=ot(),t=`headlessui-label-${le()}`;return se(()=>ke(o.register(t))),()=>{let{name:i="Label",slot:s={},props:v={}}=o,L=e,{passive:d}=L,c=fe(L,["passive"]),n=pe(D({},Object.entries(v).reduce((R,[y,g])=>Object.assign(R,{[y]:u(g)}),{})),{id:t}),r=D(D({},c),n);return d&&delete r.onClick,W({props:r,slot:s,attrs:l,slots:a,name:i})}}}),st=Symbol("GroupContext"),Fe=U({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:a,attrs:l}){let o=$(null),t=Qt({name:"SwitchLabel",props:{onClick(){!o.value||(o.value.click(),o.value.focus({preventScroll:!0}))}}}),i=Ht({name:"SwitchDescription"});return he(st,{switchRef:o,labelledby:t,describedby:i}),()=>W({props:e,slot:{},slots:a,attrs:l,name:"SwitchGroup"})}}),Be=U({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(e,{emit:a,attrs:l,slots:o,expose:t}){let i=xe(st,null),s=`headlessui-switch-${le()}`;function v(){a("update:modelValue",!e.modelValue)}let d=$(null),c=i===null?d:i.switchRef,n=qe(O(()=>({as:e.as,type:l.type})),c);t({el:c,$el:c});function r(y){y.preventDefault(),v()}function L(y){y.key===C.Space?(y.preventDefault(),v()):y.key===C.Enter&&Gt(y.currentTarget)}function R(y){y.preventDefault()}return()=>{let E=e,{name:y,value:g,modelValue:f}=E,b=fe(E,["name","value","modelValue"]),h={checked:f},_={id:s,ref:c,role:"switch",type:n.value,tabIndex:0,"aria-checked":f,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:r,onKeyup:L,onKeypress:R};return ge(Y,[y!=null&&f!=null?ge(Je,He({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:f,name:y,value:g})):null,W({props:D(D(D({},l),b),_),slot:h,attrs:l,slots:o,name:"Switch"})])}}}),Ae=Zt;const el=["aria-expanded"],tl=p("span",{class:"sr-only"},"Open menu",-1),ll={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},al={class:"my-5 px-2 space-y-1 z-10"},ol={class:"pb-1"},sl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},nl=["aria-expanded"],rl={class:"sr-only"},il=ne(" Docs settings "),ul={class:"relative mt-1"},dl={class:"truncate"},cl={class:"truncate"},pl={class:"relative mt-1"},fl={class:"truncate"},vl={class:"truncate"},bl={class:"flex justify-between px-2"},ml=ne("Reduced Motion"),gl={class:"flex justify-between px-2"},hl=ne("Show privates"),xl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},yl=["aria-expanded"],_l={class:"sr-only"},kl={class:"truncate"},wl={class:"truncate"},Sl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Ol=["aria-expanded"],Ll={class:"sr-only"},Tl=ne(" Classes "),Rl={class:"truncate"},Dl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},$l=["aria-expanded"],El={class:"sr-only"},Il=ne(" Typedefs "),Cl={class:"truncate"},Nl=U({setup(e){var h,_,E,z,q;const a=Ue(),l=ze(),o=Ke(),i=ut(ct).greater("lg"),s=$(!1),v=$(),d=O(()=>o.state.sources),c=O(()=>o.state.source),n=O(()=>o.state.tag),r=O(()=>o.state.docs),L=O(()=>o.state.branches),R=O(()=>d.value.find(T=>l.params.source===T.id)),y=$({source:(_=(h=R.value)==null?void 0:h.source)!=null?_:I,name:(z=(E=R.value)==null?void 0:E.name)!=null?z:I.name}),g=$((q=l.params.tag)!=null?q:I.defaultTag),f=O(()=>{var T,x;return Q.value?(T=r.value)==null?void 0:T.classes:(x=r.value)==null?void 0:x.classes.filter(A=>A.access!=="private")}),b=O(()=>{var T,x;return Q.value?(T=r.value)==null?void 0:T.typedefs:(x=r.value)==null?void 0:x.typedefs.filter(A=>A.access!=="private")});return dt(v,()=>s.value=!1),Ge(i,()=>s.value=!1,{immediate:!0}),Me([y,g],async([T,x],[A,K])=>{if(T!==A)return g.value=T.source.defaultTag,a.push({name:"docs-source-tag-category-file",params:{source:T.source.id,tag:T.source.defaultTag,category:T.source.defaultFile.category,file:T.source.defaultFile.id}});if(x!==K)return a.push({name:"docs-source-tag-category-file",params:{source:T.source.id,tag:x,category:T.source.defaultFile.category,file:T.source.defaultFile.id}})}),(T,x)=>{var ie,ue,we;const A=mt,K=gt,re=Ct,ae=We("router-link");return w(),F(Y,null,[s.value?X("",!0):(w(),F("div",{key:0,class:V(["block fixed lg:hidden z-10 transition-transform transform-gpu",s.value?"translate-x-72 md:translate-x-80":null])},[p("button",{type:"button",class:"rounded-md rounded-l-none rounded-tr-none p-3 inline-flex items-center justify-center text-gray-200 bg-discord-blurple-600 hover:bg-discord-blurple-630 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"sidebar-menu","aria-expanded":s.value,onClick:x[0]||(x[0]=N=>s.value=!s.value)},[tl,m(A,{class:V(["h-6 w-6",{hidden:s.value,block:!s.value}]),"aria-hidden":"true"},null,8,["class"])],8,el)],2)),p("div",{ref_key:"sidebarElement",ref:v,class:V(["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",s.value?"translate-x-0":"-translate-x-full lg:translate-x-0"])},[p("div",ll,[p("nav",al,[p("ul",null,[p("li",ol,[m(u(ve),{"default-open":!0},{default:k(({open:N})=>[m(u(be),{class:"w-full focus:outline-none",tabindex:"-1"},{default:k(()=>[p("div",sl,[p("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":N},[p("span",rl,M(N?"Shrink":"Expand"),1),m(A,{class:V(["inline-block",{hidden:N}]),"aria-hidden":"true"},null,8,["class"]),m(K,{class:V(["inline-block",{hidden:!N}]),"aria-hidden":"true"},null,8,["class"])],8,nl),il])]),_:2},1024),m(u(me),{as:"ul",class:"px-2 space-y-3"},{default:k(()=>[p("li",null,[m(u(Ne),{modelValue:y.value,"onUpdate:modelValue":x[1]||(x[1]=S=>y.value=S)},{default:k(({open:S})=>[p("div",ul,[m(u(Pe),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:k(()=>[p("span",dl,M(y.value.name),1),S?X("",!0):(w(),G(K,{key:0})),S?(w(),G(re,{key:1})):X("",!0)]),_:2},1024),m(u(je),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:k(()=>[(w(!0),F(Y,null,oe(u(d),P=>(w(),G(u(Ve),{key:P.source.id,class:"cursor-default",value:P},{default:k(({active:H})=>[p("li",{class:V(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":H}])},[p("span",cl,M(P.name),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),p("li",null,[m(u(Ne),{modelValue:g.value,"onUpdate:modelValue":x[2]||(x[2]=S=>g.value=S)},{default:k(({open:S})=>[p("div",pl,[m(u(Pe),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:k(()=>[p("span",fl,M(g.value),1),S?X("",!0):(w(),G(K,{key:0})),S?(w(),G(re,{key:1})):X("",!0)]),_:2},1024),m(u(je),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:k(()=>[(w(!0),F(Y,null,oe(u(L),P=>(w(),G(u(Ve),{key:P,class:"cursor-default",value:P},{default:k(({active:H})=>[p("li",{class:V(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":H}])},[p("span",vl,M(P),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),p("li",null,[m(u(Fe),null,{default:k(()=>[p("div",bl,[m(u(Ae),{class:"mr-4 dark:text-gray-200"},{default:k(()=>[ml]),_:1}),m(u(Be),{modelValue:u(Z),"onUpdate:modelValue":x[3]||(x[3]=S=>De(Z)?Z.value=S:null),class:V(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",u(Z)?"bg-discord-blurple-500":"bg-gray-500"]),onClick:x[4]||(x[4]=S=>u(bt)(u(Z)))},{default:k(()=>[p("span",{class:V(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",u(Z)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})]),p("li",null,[m(u(Fe),null,{default:k(()=>[p("div",gl,[m(u(Ae),{class:"mr-4 dark:text-gray-200"},{default:k(()=>[hl]),_:1}),m(u(Be),{modelValue:u(Q),"onUpdate:modelValue":x[5]||(x[5]=S=>De(Q)?Q.value=S:null),class:V(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",u(Q)?"bg-discord-red-500":"bg-gray-500"])},{default:k(()=>[p("span",{class:V(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",u(Q)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})])]),_:1})]),_:1})]),(w(!0),F(Y,null,oe((ie=u(r))==null?void 0:ie.custom,(N,S)=>(w(),F("li",{key:S},[m(u(ve),{"default-open":!0},{default:k(({open:P})=>[m(u(be),{class:"w-full focus:outline-none",tabindex:"-1"},{default:k(()=>[p("div",xl,[p("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":P},[p("span",_l,M(P?"Shrink":"Expand"),1),m(A,{class:V(["inline-block",{hidden:P}]),"aria-hidden":"true"},null,8,["class"]),m(K,{class:V(["inline-block",{hidden:!P}]),"aria-hidden":"true"},null,8,["class"])],8,yl),p("span",kl,M(N.name),1)])]),_:2},1024),m(u(me),{as:"ul"},{default:k(()=>[(w(!0),F(Y,null,oe(N.files,(H,Se)=>{var Oe;return w(),F("li",{key:Se},[m(ae,{to:{name:"docs-source-tag-category-file",params:{source:(Oe=u(c))==null?void 0:Oe.id,tag:u(n),category:S,file:Se}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:x[6]||(x[6]=Fl=>s.value=!1)},{default:k(()=>[p("span",wl,M(typeof H=="object"?H.name:H),1)]),_:2},1032,["to"])])}),128))]),_:2},1024)]),_:2},1024)]))),128)),(ue=u(f))!=null&&ue.length?(w(),G(u(ve),{key:0,as:"li","default-open":!0},{default:k(({open:N})=>[m(u(be),{class:"w-full focus:outline-none",tabindex:"-1"},{default:k(()=>[p("div",Sl,[p("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":N},[p("span",Ll,M(N?"Shrink":"Expand"),1),m(A,{class:V(["inline-block",{hidden:N}]),"aria-hidden":"true"},null,8,["class"]),m(K,{class:V(["inline-block",{hidden:!N}]),"aria-hidden":"true"},null,8,["class"])],8,Ol),Tl])]),_:2},1024),m(u(me),{as:"ul"},{default:k(()=>[(w(!0),F(Y,null,oe(u(f),S=>{var P;return w(),F("li",{key:S.name},[m(ae,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:(P=u(c))==null?void 0:P.id,tag:u(n),class:S.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:x[7]||(x[7]=H=>s.value=!1)},{default:k(()=>[p("span",Rl,M(S.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):X("",!0),(we=u(b))!=null&&we.length?(w(),G(u(ve),{key:1,as:"li","default-open":!0},{default:k(({open:N})=>[m(u(be),{class:"w-full focus:outline-none",tabindex:"-1"},{default:k(()=>[p("div",Dl,[p("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":N},[p("span",El,M(N?"Shrink":"Expand"),1),m(A,{class:V(["inline-block",{hidden:N}]),"aria-hidden":"true"},null,8,["class"]),m(K,{class:V(["inline-block",{hidden:!N}]),"aria-hidden":"true"},null,8,["class"])],8,$l),Il])]),_:2},1024),m(u(me),{as:"ul"},{default:k(()=>[(w(!0),F(Y,null,oe(u(b),S=>{var P;return w(),F("li",{key:S.name},[m(ae,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:(P=u(c))==null?void 0:P.id,tag:u(n),typedef:S.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:x[8]||(x[8]=H=>s.value=!1)},{default:k(()=>[p("span",Cl,M(S.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):X("",!0)])])])],2)],64)}}}),Pl={class:"lg:flex mx-auto w-full max-w-screen-2xl"},jl={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Vl=ne(" Couldn't load the documentation data. "),Wl=U({setup(e){const a=Ue(),l=ze(),o=Ke(),{Ctrl_K:t}=pt({passive:!1,onEventFired(r){r.ctrlKey&&r.key==="k"&&r.type==="keydown"&&r.preventDefault()}}),i=ft({[I.id]:I,main:I}),s=$(!1),v=O(()=>o.state.source),d=O(()=>o.state.tag),c=O(()=>o.state.docs);se(()=>{const r=document.getElementById("container");vt(r,"scroll",()=>{r&&r.scrollTop>300?s.value=!0:s.value=!1})}),Ge(t,()=>{var r;(r=document.getElementById("search"))==null||r.focus()});const n=async()=>{var r,L,R,y,g,f,b,h,_,E,z,q,T,x,A,K,re,ae,ie,ue;if(l.path!=="/"){if(l.params.source&&l.params.tag&&(((r=c.value)==null?void 0:r.id)!==i[l.params.source].id||((L=c.value)==null?void 0:L.tag)!==l.params.tag)&&(await o.dispatch({type:"fetchDocs",inputSource:(R=i[l.params.source])!=null?R:I,inputTag:(y=l.params.tag)!=null?y:d.value}),await o.dispatch({type:"fetchTags",currentSource:(g=i[l.params.source])!=null?g:I})),l.params.source&&i[l.params.source])o.commit({type:"setSource",source:i[l.params.source]});else return a.replace({name:"docs-source-tag-category-file",params:{source:I.id,tag:I.defaultTag,category:I.defaultFile.category,file:I.defaultFile.id}});if(l.params.tag)o.commit({type:"setTag",tag:l.params.tag}),o.commit({type:"setSource",source:i[l.params.source]});else return a.replace({name:"docs-source-tag-category-file",params:{source:(b=(f=v.value)==null?void 0:f.id)!=null?b:I.id,tag:((h=v.value)==null?void 0:h.recentTag)||((_=v.value)==null?void 0:_.defaultTag),category:(z=(E=v.value)==null?void 0:E.defaultFile.category)!=null?z:I.defaultFile.category,file:(T=(q=v.value)==null?void 0:q.defaultFile.id)!=null?T:I.defaultFile.id}});if(!l.params.file&&!l.params.class&&!l.params.typedef&&l.name!=="docs-source-tag-search")return a.replace({name:"docs-source-tag-category-file",params:{source:(A=(x=v.value)==null?void 0:x.id)!=null?A:I.id,tag:(K=d.value)!=null?K:I.defaultTag,category:(ae=(re=v.value)==null?void 0:re.defaultFile.category)!=null?ae:I.defaultFile.category,file:(ue=(ie=v.value)==null?void 0:ie.defaultFile.id)!=null?ue:I.defaultFile.id}})}};return _e(()=>void n()),(r,L)=>{const R=We("router-view");return w(),F("div",null,[p("div",Pl,[m(Nl),u(c)?(w(),G(R,{key:r.$route.path})):u($e)?(w(),F("div",jl,[Vl,p("pre",null,M(u($e).toString()),1)])):(w(),G(yt,{key:2}))]),s.value?(w(),G(Rt,{key:0})):X("",!0)])}}});export{Wl as default};