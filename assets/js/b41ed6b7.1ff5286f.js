"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=n,g=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return a?i.createElement(g,r(r({ref:t},p),{},{components:a})):i.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:n,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},r="Project Tab",l={unversionedId:"aegis-analytics/project-page/project-tab",id:"aegis-analytics/project-page/project-tab",title:"Project Tab",description:"The Project Tab is the default selected tab when you visit a Project's detail page. The components on this page are centered around the status and progress of your project.",source:"@site/docs/aegis-analytics/project-page/project-tab.md",sourceDirName:"aegis-analytics/project-page",slug:"/aegis-analytics/project-page/project-tab",permalink:"/docs/aegis-analytics/project-page/project-tab",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"analyticsSidebar",previous:{title:"Project Page",permalink:"/docs/aegis-analytics/project-page/"},next:{title:"Quality Tab",permalink:"/docs/aegis-analytics/project-page/quality-tab"}},c={},s=[{value:"Project Completion Trending",id:"project-completion-trending",level:2},{value:"Progress Trending",id:"progress-trending",level:2},{value:"Schedule Lookahead",id:"schedule-lookahead",level:2},{value:"Float Consumption",id:"float-consumption",level:2},{value:"Activity Completion",id:"activity-completion",level:2},{value:"Activity Completion Trending",id:"activity-completion-trending",level:2}],p={toc:s};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"project-tab"},"Project Tab"),(0,n.kt)("p",null,"The Project Tab is the default selected tab when you visit a Project's detail page. The components on this page are centered around the status and progress of your project. "),(0,n.kt)("h2",{id:"project-completion-trending"},"Project Completion Trending"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project Completion Trending",src:a(4447).Z,width:"3164",height:"697"})),(0,n.kt)("p",null,"This chart plots the project's ",(0,n.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#start--finish"},"selected finish milestone's")," progress over time. The bars represent a difference in the current completion date of that update compared to the previous update's current completion date. The lines represent the current update's completion date compared to the baseline's current completion date. For all updates, 0 completion variance is on time (or no change if for bars), positive/green is ahead of the baseline completion date, and negative/red is behind the baseline completion date."),(0,n.kt)("h2",{id:"progress-trending"},"Progress Trending"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Progress Trending",src:a(2850).Z,width:"3322",height:"682"})),(0,n.kt)("p",null,"The Progress Trending Component has 2 related sections: the current update bullet charts and the Progress Trend chart. The bullet charts planned/actual progress show a percentage of all activities planned to have been completed in this updated and a percentage of all activities that actually completed in this update. The Trend chart to the right of them plot the values from the bullet chart on a per-update basis, allowing you to see which updates your project started to fall behind the plan and which updates your project got back on track (or got closer to it)."),(0,n.kt)("h2",{id:"schedule-lookahead"},"Schedule Lookahead"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Schedule Lookahead",src:a(5857).Z,width:"3164",height:"1028"})),(0,n.kt)("p",null,"This component lists the next activities planned to occur in the schedule. The default settings show the critical activities planned to occur in the next 30 days, but those can be changed on the fly via the toggle sliders on the right side of the Schedule Lookahead header. "),(0,n.kt)("p",null,"This chart is broken down into 2 panes, the activity information grid and the gantt bars that plot that activity's duration on the month-axis. You can adjust the sort order of the activities by clicking on the header you want to sort by in the left pane."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Clicking on a bar in the right pane or row in the left pane will select that activity. Try using this feature to highlight specific tasks for a helpful visual cue when communicating with others about these activities!")),(0,n.kt)("h2",{id:"float-consumption"},"Float Consumption"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Float Consumption",src:a(7935).Z,width:"3164",height:"1510"})),(0,n.kt)("p",null,"The Float Consumption component tracks the percentage of activities that fall into the following categories of float:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Negative Float: TF<0"),(0,n.kt)("li",{parentName:"ul"},"Critical Path Float: TF=0"),(0,n.kt)("li",{parentName:"ul"},"Near Critical Path Float: TF between 1-7"),(0,n.kt)("li",{parentName:"ul"},"Month Float: TF between 8-30"),(0,n.kt)("li",{parentName:"ul"},"Large Float: TF>30")),(0,n.kt)("p",null,"This information is plotted for each update in the trend chart. The activities that make up the percentage number for this update are detailed in the grid below the trend chart. Use the toggle buttons above the chart or the legend items below the chart to toggle which line is visible in the trend chart, and by extension which activities show up in the grid."),(0,n.kt)("h2",{id:"activity-completion"},"Activity Completion"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Activity Completion",src:a(561).Z,width:"3164",height:"766"})),(0,n.kt)("p",null,"This Component tracks planned activity completion and actual activity completion for this update. This information is broken down into four categories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Critical (Longest Path)"),(0,n.kt)("li",{parentName:"ul"},"Near Critical"),(0,n.kt)("li",{parentName:"ul"},"Non Critical"),(0,n.kt)("li",{parentName:"ul"},"Total")),(0,n.kt)("p",null,"Planned activities are defined as the activities that were incomplete in the previous update, and had an early finish date on or before the current update's data date."),(0,n.kt)("p",null,"The planned and actual number of activities for each category are plotted as bars on the Last Period chart on the right. This chart is only visible when the selected view on the left is 'Overview' (it is by default). The 4 boxes below 'Overview' give each category's planned activity completion vs actual activity completion as a percentage and if you click one of those boxes, it changes the view to that category."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Activity Completion - Data Table",src:a(5620).Z,width:"3172",height:"772"})),(0,n.kt)("p",null,"When the view is any one other than 'Overview' a grid replaces the Last Period chart. This grid outlines all activities that fall under the selected category that were planned to complete this update. This grid can be exported to excel via the 'Export Activities' button in the top right of the component."),(0,n.kt)("h2",{id:"activity-completion-trending"},"Activity Completion Trending"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Activity Completion Trending",src:a(1137).Z,width:"3164",height:"697"})),(0,n.kt)("p",null,"The Activity Completion Trending component plots the data from the 4 category boxes in the ",(0,n.kt)("a",{parentName:"p",href:"#activity-completion"},"Activity Completion")," component over each update. Clicking on a line in this chart's legend will hide all other category's lines and will select that category in the Activity Completion component. The reverse of this can be done by selecting a category in the Activity Completion component."),(0,n.kt)("p",null,"Activities in the longest path are the most critical activities in a schedule, so the goal of 100% activity completion has been plotted on this trend chart. Generally when the critical activity completion starts to fall behind this value, the entire project starts to fall behind schedule, which is why we place so much importance on these activities. Likewise, Near Critical activities are almost as important as Critical ones, so we placed an 80% target completion for these. "),(0,n.kt)("p",null,"If there were no activities planned to complete in an update for a category, there will be a gap in that category's line for that update. This way, no updates are getting 100% completion credit if they didn't plan on completing any activities in that category, and likewise no updates are getting the penalized with a 0% completion mark."))}h.isMDXComponent=!0},5620:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/activityCompletionGrid-9f6bb3558cfbf0c3aa7e44379e79ad76.png"},4447:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/projectTab_C1-b40f1ad18b39b60e0a95ae8ba068d214.png"},5857:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/projectTab_C2-3cc185faf6a0092c5b44383b74aea241.png"},7935:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/projectTab_C3-4db1ee824f9479bd03750a202f76ea13.png"},561:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/projectTab_C4-9039650042976d29f1a555188bc05a37.png"},1137:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/projectTab_C5-5dfcd5737392a1f056a456f056ca2eab.png"},2850:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ss-progress-trending-0acdfe9ed848ace93837d1aa85a823e6.png"}}]);