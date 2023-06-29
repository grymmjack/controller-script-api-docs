"use strict";(self.webpackChunkmixcraft_10_api_docs=self.webpackChunkmixcraft_10_api_docs||[]).push([[5312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const l={sidebar_position:6},i="Perform",a={unversionedId:"API Sections/Perform",id:"API Sections/Perform",title:"Perform",description:"The `Perform` section covers functions and properties that allow access to the performance panel and controls available in Mixcraft.",source:"@site/docs/API Sections/Perform.md",sourceDirName:"API Sections",slug:"/API Sections/Perform",permalink:"/controller-script-api-docs/docs/API Sections/Perform",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"MIDI",permalink:"/controller-script-api-docs/docs/API Sections/MIDI"},next:{title:"notificationType",permalink:"/controller-script-api-docs/docs/API Sections/MM"}},s={},u=[{value:"Slot state properties",id:"slot-state-properties",level:2},{value:"Performance play properties",id:"performance-play-properties",level:2},{value:"Functions",id:"functions",level:2},{value:"ArmRow(row, bool)",id:"armrowrow-bool",level:3},{value:"CanMoveGridDown()",id:"canmovegriddown",level:3},{value:"CanMoveGridLeft()",id:"canmovegridleft",level:3},{value:"CanMoveGridRight()",id:"canmovegridright",level:3},{value:"CanMoveGridUp()",id:"canmovegridup",level:3},{value:"GetGridSetOffset()",id:"getgridsetoffset",level:3},{value:"GetGridTrackOffset()",id:"getgridtrackoffset",level:3},{value:"GetPan(row)",id:"getpanrow",level:3},{value:"GetSlotState(row, col)",id:"getslotstaterow-col",level:3},{value:"GetTrackID(row)",id:"gettrackidrow",level:3},{value:"GetTrackIndex(row)",id:"gettrackindexrow",level:3},{value:"GetVolume(row)",id:"getvolumerow",level:3},{value:"IsArmed()",id:"isarmed",level:3},{value:"IsShowing()",id:"isshowing",level:3},{value:"IsRowArmed(row)",id:"isrowarmedrow",level:3},{value:"MoveGridDown()",id:"movegriddown",level:3},{value:"MoveGridLeft()",id:"movegridleft",level:3},{value:"MoveGridRight()",id:"movegridright",level:3},{value:"MoveGridUp()",id:"movegridup",level:3},{value:"NumColumns()",id:"numcolumns",level:3},{value:"NumRows()",id:"numrows",level:3},{value:"Playing()",id:"playing",level:3},{value:"Record()",id:"record",level:3},{value:"SetGridSetOffset(setIndex)",id:"setgridsetoffsetsetindex",level:3},{value:"SetGridTrackOffset(trackIndex)",id:"setgridtrackoffsettrackindex",level:3},{value:"SetIsButtonController()",id:"setisbuttoncontroller",level:3},{value:"SetSize(numCols, numRows)",id:"setsizenumcols-numrows",level:3},{value:"Show(bool)",id:"showbool",level:3},{value:"StopAll()",id:"stopall",level:3},{value:"StopRow(rowIndex)",id:"stoprowrowindex",level:3},{value:"StopSlot(row, col)",id:"stopslotrow-col",level:3},{value:"TriggerSet(col)",id:"triggersetcol",level:3},{value:"TriggerSlot(row, col, bButtonDown)",id:"triggerslotrow-col-bbuttondown",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"perform"},"Perform"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Perform")," section covers functions and properties that allow access to the performance panel and controls available in Mixcraft."),(0,n.kt)("h2",{id:"slot-state-properties"},"Slot state properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SLOT States"),(0,n.kt)("li",{parentName:"ul"},"SS_EMPTY (0)"),(0,n.kt)("li",{parentName:"ul"},"SS_READY (1)"),(0,n.kt)("li",{parentName:"ul"},"SS_QUEING (2)"),(0,n.kt)("li",{parentName:"ul"},"SS_PLAYING (3)"),(0,n.kt)("li",{parentName:"ul"},"SS_STOPPING (4)"),(0,n.kt)("li",{parentName:"ul"},"SS_ARMED (5)"),(0,n.kt)("li",{parentName:"ul"},"SS_QUEUED_FOR_RECORDING (6)"),(0,n.kt)("li",{parentName:"ul"},"SS_RECORDING (7)  ")),(0,n.kt)("h2",{id:"performance-play-properties"},"Performance play properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PP_Instant"),(0,n.kt)("li",{parentName:"ul"},"PP_8_MEASURES"),(0,n.kt)("li",{parentName:"ul"},"PP_4_MEASURES"),(0,n.kt)("li",{parentName:"ul"},"PP_2_MEASURES"),(0,n.kt)("li",{parentName:"ul"},"PP_2_MEASURE"),(0,n.kt)("li",{parentName:"ul"},"PP_1_2_NOTE"),(0,n.kt)("li",{parentName:"ul"},"PP_1_4_NOTE"),(0,n.kt)("li",{parentName:"ul"},"PP_1_8_NOTE")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"armrowrow-bool"},"ArmRow(row, bool)"),(0,n.kt)("p",null,"This function arms or disarms a specified row for recording based on the boolean value."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) to arm or disarm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bool")," (bool): ",(0,n.kt)("em",{parentName:"li"},"indicates whether to arm (true) or disarm (false) the specified row"))),(0,n.kt)("h3",{id:"canmovegriddown"},"CanMoveGridDown()"),(0,n.kt)("p",null,"This function returns a boolean indicating if the grid can be shifted downwards."),(0,n.kt)("h3",{id:"canmovegridleft"},"CanMoveGridLeft()"),(0,n.kt)("p",null,"This function returns a boolean indicating if the grid can be shifted to the left."),(0,n.kt)("h3",{id:"canmovegridright"},"CanMoveGridRight()"),(0,n.kt)("p",null,"This function returns a boolean indicating if the grid can be shifted to the right."),(0,n.kt)("h3",{id:"canmovegridup"},"CanMoveGridUp()"),(0,n.kt)("p",null,"This function returns a boolean indicating if the grid can be shifted upwards."),(0,n.kt)("h3",{id:"getgridsetoffset"},"GetGridSetOffset()"),(0,n.kt)("p",null,"This function returns the current set offset of the grid controller."),(0,n.kt)("h3",{id:"getgridtrackoffset"},"GetGridTrackOffset()"),(0,n.kt)("p",null,"This function returns the current track offset of the grid controller."),(0,n.kt)("h3",{id:"getpanrow"},"GetPan(row)"),(0,n.kt)("p",null,"This function returns the current pan for the specified row (track)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) to get the pan location of"))),(0,n.kt)("h3",{id:"getslotstaterow-col"},"GetSlotState(row, col)"),(0,n.kt)("p",null,"This function returns the current state of the specified slot (row, col)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) of the slot state to return")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"col")," (int): ",(0,n.kt)("em",{parentName:"li"},"the column number (starting from 0) of the slot state to return"))),(0,n.kt)("h3",{id:"gettrackidrow"},"GetTrackID(row)"),(0,n.kt)("p",null,"This function returns the track ID for the specified row."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) to return the track ID of"))),(0,n.kt)("h3",{id:"gettrackindexrow"},"GetTrackIndex(row)"),(0,n.kt)("p",null,"This function returns the track index for the specified row."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) of the track to get the index for"))),(0,n.kt)("h3",{id:"getvolumerow"},"GetVolume(row)"),(0,n.kt)("p",null,"This function returns the current volume for the specified row (track)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) to get the volume of"))),(0,n.kt)("h3",{id:"isarmed"},"IsArmed()"),(0,n.kt)("p",null,"This function returns a boolean indicating if the selected track is armed for recording."),(0,n.kt)("h3",{id:"isshowing"},"IsShowing()"),(0,n.kt)("p",null,"This function returns a boolean indicating if the performance panel is open or not."),(0,n.kt)("h3",{id:"isrowarmedrow"},"IsRowArmed(row)"),(0,n.kt)("p",null,"This function returns a boolean indicating if the specified row is armed for recording."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) to check the armed state of"))),(0,n.kt)("h3",{id:"movegriddown"},"MoveGridDown()"),(0,n.kt)("p",null,"This function shifts the grid controller view one row down."),(0,n.kt)("h3",{id:"movegridleft"},"MoveGridLeft()"),(0,n.kt)("p",null,"This function shifts the grid controller view one column to the left."),(0,n.kt)("h3",{id:"movegridright"},"MoveGridRight()"),(0,n.kt)("p",null,"This function shifts the grid controller view one column to the right."),(0,n.kt)("h3",{id:"movegridup"},"MoveGridUp()"),(0,n.kt)("p",null,"This function shifts the grid controller view one row up."),(0,n.kt)("h3",{id:"numcolumns"},"NumColumns()"),(0,n.kt)("p",null,"This function returns the number of columns in the grid controller as an int value."),(0,n.kt)("h3",{id:"numrows"},"NumRows()"),(0,n.kt)("p",null,"This function returns the number of rows in the grid controller as an int value."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"col")," (int): ",(0,n.kt)("em",{parentName:"li"},"the column number (starting from 0) to start playback on"))),(0,n.kt)("h3",{id:"playing"},"Playing()"),(0,n.kt)("p",null,"This function starts playback of the currently selected track."),(0,n.kt)("h3",{id:"record"},"Record()"),(0,n.kt)("p",null,"This function starts or stops recording for the selected track, depending on the current record state."),(0,n.kt)("h3",{id:"setgridsetoffsetsetindex"},"SetGridSetOffset(setIndex)"),(0,n.kt)("p",null,"This function sets the grid controller's offset to the specified set index."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"index")," (int): ",(0,n.kt)("em",{parentName:"li"},"the index in which to apply to the controller's grid offset value"))),(0,n.kt)("h3",{id:"setgridtrackoffsettrackindex"},"SetGridTrackOffset(trackIndex)"),(0,n.kt)("p",null,"This function sets the grid controller's track offset to the specified track index."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"index")," (int): ",(0,n.kt)("em",{parentName:"li"},"the index in which to apply to the controller's track offset value"))),(0,n.kt)("h3",{id:"setisbuttoncontroller"},"SetIsButtonController()"),(0,n.kt)("p",null,"This function sets whether the control surface is a button controller (e.g., grid controller) based on a boolean input."),(0,n.kt)("h3",{id:"setsizenumcols-numrows"},"SetSize(numCols, numRows)"),(0,n.kt)("p",null,"This function sets the size of the grid controller with the specified number of columns (numCols) and rows (numRows)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"numCols")," (int): ",(0,n.kt)("em",{parentName:"li"},"the number of columns available on the grid controller")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"numRows")," (int): ",(0,n.kt)("em",{parentName:"li"},"the number of rows available on the grid controller"))),(0,n.kt)("h3",{id:"showbool"},"Show(bool)"),(0,n.kt)("p",null,"This function will show or hide the performance panel based on teh supplied bool value."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bool")," (bool): ",(0,n.kt)("em",{parentName:"li"},"determines whether to open or close the performance panel"))),(0,n.kt)("h3",{id:"stopall"},"StopAll()"),(0,n.kt)("p",null,"This function stops playback and recording for all tracks."),(0,n.kt)("h3",{id:"stoprowrowindex"},"StopRow(rowIndex)"),(0,n.kt)("p",null,"This function stops playback and recording for the specified row."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rowIndex")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) to stop playback and recording on"))),(0,n.kt)("h3",{id:"stopslotrow-col"},"StopSlot(row, col)"),(0,n.kt)("p",null,"This function stops playback for the specified slot (row, col)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) of the slot to stop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"col")," (int): ",(0,n.kt)("em",{parentName:"li"},"the column number (starting from 0) of the slot to stop"))),(0,n.kt)("h3",{id:"triggersetcol"},"TriggerSet(col)"),(0,n.kt)("p",null,"This function starts playback for all tracks in the specified column (set)."),(0,n.kt)("h3",{id:"triggerslotrow-col-bbuttondown"},"TriggerSlot(row, col, bButtonDown)"),(0,n.kt)("p",null,"This function triggers the specified slot (row, col) to play or stop based on the boolean value bButtonDown."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"row")," (int): ",(0,n.kt)("em",{parentName:"li"},"the row number (starting from 0) of the slot to trigger")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"col")," (int): ",(0,n.kt)("em",{parentName:"li"},"the column number (starting from 0) of the slot to trigger")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bButtonDown")," (bool): ",(0,n.kt)("em",{parentName:"li"},"indicates whether to play (true) or stop (false) the specified slot"))))}d.isMDXComponent=!0}}]);