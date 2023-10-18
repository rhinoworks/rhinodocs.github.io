"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[885],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>m});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(i),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return i?a.createElement(m,n(n({ref:t},h),{},{components:i})):a.createElement(m,n({ref:t},h))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,n=new Array(r);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var c=2;c<r;c++)n[c]=i[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},186:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(7462),o=(i(7294),i(3905));const r={sidebar_position:5},n="Risk Tab",s={unversionedId:"aegis-analytics/project-page/risk-tab",id:"aegis-analytics/project-page/risk-tab",title:"Risk Tab",description:"The Risk Tab has a focus on determining and tracking potential or identified risk factors to help the project team navigate this project to completion smoothly. We use a handful of metrics and methods to look at data for the project so far and can use that data (plus some schedule magic) to predict possible risk factors and delays.",source:"@site/docs/aegis-analytics/project-page/risk-tab.md",sourceDirName:"aegis-analytics/project-page",slug:"/aegis-analytics/project-page/risk-tab",permalink:"/docs/aegis-analytics/project-page/risk-tab",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"analyticsSidebar",previous:{title:"Schedules Tab",permalink:"/docs/aegis-analytics/project-page/schedules-tab"}},l={},c=[{value:"Common Components",id:"common-components",level:2},{value:"Index Trending",id:"index-trending",level:3},{value:"Critical Path Switch",id:"critical-path-switch",level:3},{value:"Critical Path Reliability",id:"critical-path-reliability",level:3},{value:"Monte Carlo - Performance Factor",id:"monte-carlo---performance-factor",level:2},{value:"Monte Carlo - Risk Register",id:"monte-carlo---risk-register",level:2},{value:"Risk Register",id:"risk-register",level:3},{value:"Monte Carlo Simulation Differences",id:"monte-carlo-simulation-differences",level:3}],h={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"risk-tab"},"Risk Tab"),(0,o.kt)("p",null,"The Risk Tab has a focus on determining and tracking potential or identified risk factors to help the project team navigate this project to completion smoothly. We use a handful of metrics and methods to look at data for the project so far and can use that data (plus some schedule magic) to predict possible risk factors and delays."),(0,o.kt)("p",null,"The components that appear on your project's risk tab are based on which ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#milestones-risk"},"risk calculation method")," is set for this project, similar to how the top row changes for Risk Register enabled projects. If you want to change the risk calculation method, open the ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#risk-tab"},"Project Settings")," window."),(0,o.kt)("h2",{id:"common-components"},"Common Components"),(0,o.kt)("p",null,"There are a few common components on the risk tab regardless of which risk calculation method is set for this project."),(0,o.kt)("h3",{id:"index-trending"},"Index Trending"),(0,o.kt)("p",null,"This component consists of 1 trend chart that tracks 2 metrics - Baseline Execution Index (BEI) and Critical Path Length Index (CPLI) - over each update. These metrics are used in several other calculations throughout the app, so they are pretty important. BEI tracks the number of completed activities to date against the number of activities which were projected to be completed in the baseline. CPLI indicates the probability of finishing a project on time."),(0,o.kt)("h3",{id:"critical-path-switch"},"Critical Path Switch"),(0,o.kt)("p",null,"The Critical Path Switch component charts the first three paths (the Critical Path, secondary path, and tertiary path) in the projects as a function of their Total Floats (TF) over time. Analyzing the Critical Path and sub-critical paths provides valuable trending and stability information. It provides the Project management team a tool to evaluate its current and future forecasts. With each update, the Project will be provided trends which will give the team the ability to understand and prepare for current and potential Critical Path risk factors."),(0,o.kt)("h3",{id:"critical-path-reliability"},"Critical Path Reliability"),(0,o.kt)("p",null,"Critical Path Reliability assesses the reliability of the critical path by measuring the consistency of the activities on the critical path and logic ties between them. The overall score for Critical Path Reliability is an average of the Activity Consistency and the Logic Consistency."),(0,o.kt)("p",null,"Activity Consistency gauges if critical activities remain critical, with a zero indicating a total path change and 100 indicating an identical path between the schedules, after correcting for completed activities."),(0,o.kt)("p",null,"Logic Consistency measures changes in the driving logic ties along the critical path of both the base schedule and the update. The values of the base logic and update logic are averaged for an overall Logic Consistency score."),(0,o.kt)("h2",{id:"monte-carlo---performance-factor"},"Monte Carlo - Performance Factor"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monte Carlo - Performance Factor",src:i(2925).Z,width:"3158",height:"958"})),(0,o.kt)("p",null,"For projects with Monte Carlo - Performance Factor selected as the Risk Calculation Method, an additional component is enabled on the Risk tab, titled 'Monte Carlo Simulation'. The Performance Factor utilizes as-built performance data to determine the likelihood of finishing on or before the schedule's current completion date. The standard metric used for this is the P85 date, which is the probabilistic date that predicts with an 85% certainty the project will finish on or before the determined date. You can view more probabilities and dates in the Monte Carlo Simulation as long as your project has 4+ Update schedules uploaded. You can also configure the pf codes on the right to include or exclude certain codes to get an updated p85 output based on the selected activity codes."),(0,o.kt)("p",null,"The P85 date comes from the probability line on the Monte Carlo simulation, which can be derived from the hits bars on the same chart. We run 10000 simulations for each Monte Carlo to determine the most accurate p85. The date chosen as the p85 will be highlighted with a blue column in the chart."),(0,o.kt)("p",null,"To the left of the chart you can compare this p85 date with the current completion date of the schedule. If these dates are far apart, you might want to take a further look at other risk factors in your project to see if they are going to play a larger role in shifting dates than you expected initially. There are also global impact settings in the header of this component which can be opened by pressing the gear icon button."),(0,o.kt)("h2",{id:"monte-carlo---risk-register"},"Monte Carlo - Risk Register"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monte Carlo - Risk Register",src:i(6101).Z,width:"3158",height:"1556"})),(0,o.kt)("p",null,"Monte Carlo - Risk Register risk calculation method projects get all the previously mentioned components with the addition of a new one called the '",(0,o.kt)("a",{parentName:"p",href:"#risk-register"},"Risk Register"),"'. The ",(0,o.kt)("a",{parentName:"p",href:"#monte-carlo-simulation-differences"},"Monte Carlo Simulation")," component also gets a few modifications for these projects."),(0,o.kt)("h3",{id:"risk-register"},"Risk Register"),(0,o.kt)("p",null,"The Risk Register allows the project team to log and track potential Risks to the project. To add a risk to the register, press the 'Add New Risk' button in the header and follow the workflow in the newly opened window. This workflow has many required fields and some optional ones are what determine their eligibility to be seen in the ",(0,o.kt)("a",{parentName:"p",href:"#monte-carlo-simulation-differences"},"Monte Carlo Simulation"),". Some dropdown fields allow you to create custom options on the spot. If you want to edit these custom options or create a bunch all at once for this project, go to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#risk-tab"},"Risk Settings")," tab in the Project Settings window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Schedule Tagging",src:i(2762).Z,width:"1998",height:"1520"})),(0,o.kt)("p",null,"In the last tab of the Risk Register form, you have the opportunity to tag a risk to specific activities. Utilize the filter system at the top to show only the activities you are interested in, then click in the \u2018Tag' column to tag this risk to that activity. Likewise, if you want to tag all activities that are currently showing in the grid, press the \u2018Tag All' button ('Untag All' does the reverse). To untag an activity click the Tag column again. The Risk ID is displayed in the 'Tag\u2019 column to identify activities with multiple Risks assigned. Once you have entered all required form fields, the save button will be enabled. Save the risk for it to show up in the Risk Register and, if applicable, in the Monte Carlo Simulation (requires risks with Pre-Mitigation Activity Impact, and tagged activities). If you are not finished with the form and would like to save your progress, simply save this risk as a draft. Draft risks will show up in the Risk register with a blue row and will be excluded from all calculations until they are completed."),(0,o.kt)("p",null,"Another option for getting your risks into the Risk Register is to import them. To do this, press the 'Import' button in the header and follow the directions in the import window."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"All imported risks will be marked as draft risks. Make sure to edit and save them to include them in calculations and possibly give them eligibility for Monte Carlo Simulations.")),(0,o.kt)("p",null,"You can edit an already created risk (draft or otherwise) by pressing the pencil icon in the Risk Register Actions column. In the same column there are options to create a new risk by duplicating this one (for fast creation of similar risks) or deleting a risk. Can't see enough risks on this page? Click the button in the top right of the component to expand the risk register to a fullscreen view. Since there is more screen real-estate, by default all columns are selected in fullscreen view. Press the button again to return to the default view."),(0,o.kt)("p",null,"The columns that appear in the Risk Register are the same ones from the form (and have similar header groupings to the tabs in the form), but they can be customized for this project by visiting the column selector in the header. You can also apply column level filters or utilize one of our provided quick filters (located in the header) to trim the list of risks temporarily. The current list of risks (including ones on other pages) can be exported to excel at any time by utilizing the 'Export Report' button in the header."),(0,o.kt)("h3",{id:"monte-carlo-simulation-differences"},"Monte Carlo Simulation Differences"),(0,o.kt)("p",null,"This component looks a bit different from the Performance Factor version. The main content differences are the Monte Carlo Simulation Chart is moved to the right, and data is now categorized by Pre- and Post-Mitigation. This difference allows the project team to easily see the difference their proposed mitigation strategies will make. By checking different combinations of risks and calculating, you can easily determine priorities for risks to focus on in order to complete the project by a target date."),(0,o.kt)("p",null,"Risks with an identified Activity Impact that are tagged to at least one activity in the schedule will be available for selection in the Monte Carlo simulation grid located in the middle of the component. The schedule impact and mitigation impact will only appear for the risks that were checked during the last calculation."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"With version 4.0 of Aegis Analytics, we have the fastest speeds yet for our Monte Carlo simulations. If your project still says it is calculating after 5-10 minutes, contact the project team to have it checked out or ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/introduction#provide-feedback"},"submit a ticket"),". Project with large activity counts (2500+) can take up to 5 minutes to calculate.")))}d.isMDXComponent=!0},2925:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ss-MC-PF-1ced26953a7c5d3d767dad03ae15bb50.png"},6101:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ss-MC-RR-681970bf46e2f99993755bee8f0a33b1.png"},2762:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ss-rr-form-tagging-361a6618d0310449fbbb9b386c75843e.png"}}]);