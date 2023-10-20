"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(d,n(n({ref:t},p),{},{components:r})):a.createElement(d,n({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const o={sidebar_position:4},n="Scores / KPIs",s={unversionedId:"aegis-analytics/scores-kpis",id:"aegis-analytics/scores-kpis",title:"Scores / KPIs",description:"KPIs",source:"@site/docs/aegis-analytics/scores-kpis.md",sourceDirName:"aegis-analytics",slug:"/aegis-analytics/scores-kpis",permalink:"/docs/aegis-analytics/scores-kpis",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"analyticsSidebar",previous:{title:"Navbar",permalink:"/docs/aegis-analytics/navbar"},next:{title:"Portfolio Page",permalink:"/docs/aegis-analytics/portfolio-page/"}},l={},c=[{value:"Project Score",id:"project-score",level:2},{value:"Progress Score",id:"progress-score",level:2},{value:"QC Score",id:"qc-score",level:2},{value:"Predictability Score",id:"predictability-score",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scores--kpis"},"Scores / KPIs"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KPIs",src:r(7608).Z,width:"990",height:"410"})),(0,i.kt)("p",null,"At Aegis, we have devised some simple Scores/KPIs for keeping track of on your projects. The screenshots above show how they look on the Portfolio and Project Pages respectively. These are designed to let you know the status of your projects at a glance."),(0,i.kt)("h2",{id:"project-score"},"Project Score"),(0,i.kt)("p",null,"The Project Score is the overall score, and is calculated as an average of three sub-scores: ",(0,i.kt)("a",{parentName:"p",href:"#progress-score"},"Progress Score"),", ",(0,i.kt)("a",{parentName:"p",href:"#qc-score"},"QC Score"),", and ",(0,i.kt)("a",{parentName:"p",href:"#predictability-score"},"Predictability Score"),"."),(0,i.kt)("h2",{id:"progress-score"},"Progress Score"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"project-page/project-tab"},"Project Tab")," houses the components that contribute to the Progress score which, like the name implies, is a measure of the progress of your project as of the current update. Some key contributors to this score are the ",(0,i.kt)("a",{parentName:"p",href:"project-page/project-tab#float-consumption"},"Float Consumption")," component (specifically the Baseline Variance and Previous Update Variance) and the ",(0,i.kt)("a",{parentName:"p",href:"project-page/project-tab#activity-completion"},"Activity Completion Ratios")," which are weighed by criticality."),(0,i.kt)("h2",{id:"qc-score"},"QC Score"),(0,i.kt)("p",null,"The QC Score focuses on the quality of the schedule. The maximum QC score is 100%, and points are deducted for potential schedule issues, which are located on the ",(0,i.kt)("a",{parentName:"p",href:"project-page/quality-tab"},"Quality Tab"),"."),(0,i.kt)("p",null,"Points are deducted from this score for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Relationship Density",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Relationships/Activities"))),(0,i.kt)("li",{parentName:"ul"},"Finish-to-Start (FS) with Lags",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"May overstate risk in the schedule"))),(0,i.kt)("li",{parentName:"ul"},"Missing Predecessors or Successors",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No deduction for start/finish milestones"))),(0,i.kt)("li",{parentName:"ul"},"Out of Sequence",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Activities completing or starting before predecessors"))),(0,i.kt)("li",{parentName:"ul"},"Negative Lags",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"May affect logic/critical path"))),(0,i.kt)("li",{parentName:"ul"},"Hard Constraints",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Overrules logic/scheduled dates, incompatible with Monte Carlo simulations"))),(0,i.kt)("li",{parentName:"ul"},"High Duration",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Activities with Original Duration > 44 Days"))),(0,i.kt)("li",{parentName:"ul"},"High Float",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Activities with Total Float > 44 Days")))),(0,i.kt)("h2",{id:"predictability-score"},"Predictability Score"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"project-page/risk-tab"},"Risk Tab")," encompasses the components that play a part in determining the Predictability Score. This score utilizes forward-looking components to give a warning of potential risks in the remainder of your project. The Predictability Score utilizes these four components by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CPLI"),(0,i.kt)("li",{parentName:"ul"},"BEI"),(0,i.kt)("li",{parentName:"ul"},"Critical Path Reliability"),(0,i.kt)("li",{parentName:"ul"},"Critical Path Risk")),(0,i.kt)("p",null,"and if the ",(0,i.kt)("a",{parentName:"p",href:"navbar#milestones--risk"},"Risk Calculation Method")," chosen for your project is either of the two Monte-Carlo methods, then the Monte-Carlo on-time probability joins the four aforementioned components in determining the Predictability Score."))}u.isMDXComponent=!0},7608:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ss-kpis-e94aa444ada3fbe246addc868f405756.png"}}]);