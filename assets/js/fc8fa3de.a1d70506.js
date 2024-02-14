"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[59],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||n;return a?i.createElement(m,s(s({ref:t},c),{},{components:a})):i.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var d=2;d<n;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=a(7462),o=(a(7294),a(3905));const n={sidebar_position:4},s="Schedules Tab",r={unversionedId:"aegis-analytics/project-page/schedules-tab",id:"aegis-analytics/project-page/schedules-tab",title:"Schedules Tab",description:"The Schedules Tab is the hub for all schedules for this project. From this tab you can manage the schedule files and related notes for every update uploaded to your project.",source:"@site/docs/aegis-analytics/project-page/schedules-tab.md",sourceDirName:"aegis-analytics/project-page",slug:"/aegis-analytics/project-page/schedules-tab",permalink:"/docs/aegis-analytics/project-page/schedules-tab",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"analyticsSidebar",previous:{title:"Quality Tab",permalink:"/docs/aegis-analytics/project-page/quality-tab"},next:{title:"Risk Tab",permalink:"/docs/aegis-analytics/project-page/risk-tab"}},l={},d=[{value:"Schedule Updates",id:"schedule-updates",level:2},{value:"Soft Add / Soft Delete",id:"soft-add--soft-delete",level:3},{value:"Edit Notes and Finish Milestone",id:"edit-notes-and-finish-milestone",level:3},{value:"Update Report",id:"update-report",level:3},{value:"Add Baseline Form",id:"add-baseline-form",level:2},{value:"Schedule Impact Analysis",id:"schedule-impact-analysis",level:2},{value:"Critical Path Comparison",id:"critical-path-comparison",level:2},{value:"Schedule Comparison",id:"schedule-comparison",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schedules-tab"},"Schedules Tab"),(0,o.kt)("p",null,"The Schedules Tab is the hub for all schedules for this project. From this tab you can manage the schedule files and related notes for every update uploaded to your project."),(0,o.kt)("h2",{id:"schedule-updates"},"Schedule Updates"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Schedules Grid",src:a(8439).Z,width:"3320",height:"486"})),(0,o.kt)("p",null,"This component houses a grid of schedule updates that have been uploaded to this project. You can customize the columns that show up in the grid by using the column selector button in the header. At any time, you can download the update file that was used for an upload by pressing the link to the file in the grid or you can download the grid in an excel report by pressing the 'Export Report' button in the header."),(0,o.kt)("p",null,"Clicking on a non-baseline row will open an expansion panel that gives some quick information about the progress and delays that happened during that update. The grid on the right displays specific activities that contributed to delays in the schedule. These activities can also be viewed in the ",(0,o.kt)("a",{parentName:"p",href:"#schedule-impact-analysis"},"Schedule Impact Analysis Component")),(0,o.kt)("h3",{id:"soft-add--soft-delete"},"Soft Add / Soft Delete"),(0,o.kt)("p",null,"By pressing the 'Add Schedule Updates' button in the header, you can 'soft add' 1-5 updates to this project. They will show up in the schedules grid with a green background color on the row. To 'soft delete' an update, press the trash icon at the end of the update's row in the schedules grid. This change will be denoted with a red background color in the row of the update you are deleting. To undo this action, press the undo button that has replaced the trash icon."),(0,o.kt)("p",null,"Soft added updates will be sorted into the grid based on the update's data date, so no need to worry about the order when adding multiple updates via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#add-update-xer"},"Bulk Add Update Form")," (which is opened by clicking the 'Add Schedule Updates' button). Once you are satisfied with the soft changes, press the blue save button in the top right corner of the component to commit these changes."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This means that replacing a schedule in the middle of the project is as easy as soft deleting the bad update, uploading a replacement file, and pressing save!")),(0,o.kt)("h3",{id:"edit-notes-and-finish-milestone"},"Edit Notes and Finish Milestone"),(0,o.kt)("p",null,"To edit the notes for an update, simply press the pencil icon in the schedules grid. A window will popup with some text areas to input critical path notes and/or Impacts  / Issues / TIA Notes. If you filled out the notes sections of the ",(0,o.kt)("a",{parentName:"p",href:"#add-baseline-form"},"Add Baseline Form"),", the ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#new-project-form"},"New Project Form"),", or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#add-update-xer"},"Bulk Upload Form")," for this update, those notes will show up here. Additionally, you may use the top dropdown to adjust the finish milestone for any update. "),(0,o.kt)("p",null,"Once you are satisfied with your notes and finish milestone edits, you must close the edit notes window by pressing 'Ok' and commit the changes by pressing the same blue save button you use to commit soft adds/deletes. If an update has notes attached to it already, the pencil icon will be blue."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you do not commit the changes via the blue save button, your notes and finish milestone changes will be lost!")),(0,o.kt)("h3",{id:"update-report"},"Update Report"),(0,o.kt)("p",null,"By clicking the icon in  the report column of the schedules grid, a window will pop up with a report of that update. If you clicked the wrong update's report icon, or with to view multiple in succession, utilize the arrow icons at the bottom of the report to cycle between updates."),(0,o.kt)("p",null,"The report consists of various numbers, dates, metrics, and charts from other tabs of the Project's detail page. The advantage of this is that you can gleam information about past updates in a consolidated form without having to check every component across the detail page and without having to remove updates to see certain values for past updates. The details of the baseline report differ slightly from the other updates' reports because some metrics used in non-baseline updates are not relevant in the baseline and some important points in the baseline no longer remain relevant at update 1 onwards."),(0,o.kt)("p",null,"You can export this report as a pdf by pressing the 'Export (.PDF)' button at the bottom of the report. You can also flip the report to see and edit the notes for this update without having to close the report. Simply press the flip button in the bottom left corner of the report."),(0,o.kt)("p",null,"When you upload updates to a project successfully, the update reports for those updates will open up regardless of what tab you are on for quick review."),(0,o.kt)("h2",{id:"add-baseline-form"},"Add Baseline Form"),(0,o.kt)("p",null,"If you delete all schedule files from a project, the ",(0,o.kt)("a",{parentName:"p",href:"#schedule-updates"},"Schedule Updates")," component will be replaced with a button that tells you to upload a baseline. Click the button and fill out the form to continue using this project's detail page. The add baseline form is similar to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#new-project-form"},"New Project Form"),"."),(0,o.kt)("h2",{id:"schedule-impact-analysis"},"Schedule Impact Analysis"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#",title:"![Schedules Grid](/img/analytics-screenshots/ss-schedules-grid-expanded-row.png)"},"//"),": # (",(0,o.kt)("img",{alt:"Schedule Impact Analysis",src:a(1952).Z,width:"3322",height:"332"}),")"),(0,o.kt)("p",null,"The Schedule Impact Analysis component lists the activities that contributed to delay in the schedule from each update. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"#",title:"![Schedules Grid](/img/analytics-screenshots/ss-schedules-grid-expanded-row.png)"},"//"),": # (",(0,o.kt)("img",{alt:"Critical Path Comparison",src:a(889).Z,width:"3332",height:"796"}),")\nTo visualize the delay, click on an activity in the grid. This activity will be selected and filtered for in the ",(0,o.kt)("a",{parentName:"p",href:"#critical-path-comparison"},"Critical Path Comparison")," gantt chart for the selected update as well as the previous update.")),(0,o.kt)("h2",{id:"critical-path-comparison"},"Critical Path Comparison"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#",title:"![Schedules Grid](/img/analytics-screenshots/ss-schedules-grid-expanded-row.png)"},"//"),": # (",(0,o.kt)("img",{alt:"Critical Path Comparison",src:a(605).Z,width:"3322",height:"312"}),")"),(0,o.kt)("p",null,"This component utilizes a gantt chart displaying the critical path for the project up until the finish milestone. By choosing 2 updates in the Update Selector located in the header, you can compare the critical path to see how it has changed. Clicking specific activities in the grid will filter the grid for only that activity and select it for viewing convenience. To undo this, click on the activity again. There is a toggle button located in the header that allows you to quickly expand/collapse all update bars. By default, the latest 2 updates will be selected (if the project is past the baseline)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the selected activity doesn't appear in the other update then it could be due to one of several factors including (but not limited to)"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"losing its criticality (Remember this gantt chart is only displaying activities on the critical path!)"),(0,o.kt)("li",{parentName:"ul"},"being given a new activity code (we use activity codes to match the activities between updates)"),(0,o.kt)("li",{parentName:"ul"},"the path changing"),(0,o.kt)("li",{parentName:"ul"},"activities being added to the schedule"))),(0,o.kt)("h2",{id:"schedule-comparison"},"Schedule Comparison"))}p.isMDXComponent=!0},889:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ss-critical-path-comparison-filtered-by-delay-c30a5d91950d67a07ba17c22d45a718d.png"},605:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ss-critical-path-comparison-bcfa237dbd0d040f74c4fe8a1caf497b.png"},1952:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ss-impact-analysis-f34ffa49cc61cf85df3c67ca99027bd1.png"},8439:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ss-schedules-grid-5b55fa95f8c982e9ec1775cb1be4201a.png"}}]);