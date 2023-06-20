"use strict";(self.webpackChunkmixcraft_10_api_docs=self.webpackChunkmixcraft_10_api_docs||[]).push([[8328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,h=u["".concat(s,".").concat(k)]||u[k]||d[k]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i=void 0,l={unversionedId:"API Sections/Mixcraft",id:"API Sections/Mixcraft",title:"Mixcraft",description:"The `Mixcraft` section covers functions and properties that allow access to the transport controls in Mixcraft.",source:"@site/docs/API Sections/Mixcraft.md",sourceDirName:"API Sections",slug:"/API Sections/Mixcraft",permalink:"/controller-script-api-docs/docs/API Sections/Mixcraft",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Track",permalink:"/controller-script-api-docs/docs/API Sections/Track"},next:{title:"MIDI",permalink:"/controller-script-api-docs/docs/API Sections/MIDI"}},s={},p=[{value:"Seek properties",id:"seek-properties",level:2},{value:"SEEK_MAX",id:"seek_max",level:3},{value:"SEEK_NORMAL",id:"seek_normal",level:3},{value:"SEEK_TINY",id:"seek_tiny",level:3},{value:"Metronome properties",id:"metronome-properties",level:2},{value:"METRONOME_PLAYBACK",id:"metronome_playback",level:3},{value:"METRONOME_RECORDING",id:"metronome_recording",level:3},{value:"METRONOME_RECORDINGCOUNTIN",id:"metronome_recordingcountin",level:3},{value:"METRONOME_ALL",id:"metronome_all",level:3},{value:"Functions",id:"functions",level:2},{value:"AddMarker(time)",id:"addmarkertime",level:3},{value:"FastForward(seekAmount)",id:"fastforwardseekamount",level:3},{value:"GetKey()",id:"getkey",level:3},{value:"GetLoopStart()",id:"getloopstart",level:3},{value:"GetLoopLength()",id:"getlooplength",level:3},{value:"GetMarkerName(index)",id:"getmarkernameindex",level:3},{value:"GetPlayPercentage()",id:"getplaypercentage",level:3},{value:"GetProjectLength()",id:"getprojectlength",level:3},{value:"GetTempo()",id:"gettempo",level:3},{value:"GetTime()",id:"gettime",level:3},{value:"GetTimeSignatureDenominator()",id:"gettimesignaturedenominator",level:3},{value:"GetTimeSignatureNumerator()",id:"gettimesignaturenumerator",level:3},{value:"IsLoopOn()",id:"isloopon",level:3},{value:"IsMetronomeOn(metronomeType)",id:"ismetronomeonmetronometype",level:3},{value:"IsPlaying()",id:"isplaying",level:3},{value:"NumMarkers()",id:"nummarkers",level:3},{value:"Play()",id:"play",level:3},{value:"Record()",id:"record",level:3},{value:"Redo()",id:"redo",level:3},{value:"Rewind(seekAmount)",id:"rewindseekamount",level:3},{value:"Save()",id:"save",level:3},{value:"SeekToMarker(index)",id:"seektomarkerindex",level:3},{value:"SetKey(key (0-7)  )",id:"setkeykey-0-7--",level:3},{value:"SetLoopStart(start)",id:"setloopstartstart",level:3},{value:"SetLoopLength(length)",id:"setlooplengthlength",level:3},{value:"SetMetronome(metroType, state)",id:"setmetronomemetrotype-state",level:3},{value:"SetTempo(tempo)",id:"settempotempo",level:3},{value:"SetTime(time)",id:"settimetime",level:3},{value:"SetTimeSignature(numerator, denominator)",id:"settimesignaturenumerator-denominator",level:3},{value:"ShowLoop(bool)",id:"showloopbool",level:3},{value:"TogglePlay()",id:"toggleplay",level:3},{value:"Undo()",id:"undo",level:3}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Mixcraft")," section covers functions and properties that allow access to the transport controls in Mixcraft.  "),(0,o.kt)("h2",{id:"seek-properties"},"Seek properties"),(0,o.kt)("h3",{id:"seek_max"},"SEEK_MAX"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"used in ",(0,o.kt)("inlineCode",{parentName:"li"},"Rewind()  ")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"FastForward()  ")," for maximum speed  ")),(0,o.kt)("h3",{id:"seek_normal"},"SEEK_NORMAL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"used in ",(0,o.kt)("inlineCode",{parentName:"li"},"Rewind()  ")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"FastForward()  ")," for normal speed  ")),(0,o.kt)("h3",{id:"seek_tiny"},"SEEK_TINY"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"used in ",(0,o.kt)("inlineCode",{parentName:"li"},"Rewind()  ")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"FastForward()  ")," for slow speed  ")),(0,o.kt)("h2",{id:"metronome-properties"},"Metronome properties"),(0,o.kt)("h3",{id:"metronome_playback"},"METRONOME_PLAYBACK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"play the metronome only during playback")),(0,o.kt)("h3",{id:"metronome_recording"},"METRONOME_RECORDING"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"play the metronome only during recording")),(0,o.kt)("h3",{id:"metronome_recordingcountin"},"METRONOME_RECORDINGCOUNTIN"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"play the metronome only for count the defined count-in measures (measures defined via GUI dialog box)")),(0,o.kt)("h3",{id:"metronome_all"},"METRONOME_ALL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable all of the above metronome types")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"addmarkertime"},"AddMarker(time)"),(0,o.kt)("p",null,"This function adds a marker to the project at the specified time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"time")," (float): ",(0,o.kt)("em",{parentName:"li"},"the time (in milliseconds) to set the marker on the timeline"))),(0,o.kt)("h3",{id:"fastforwardseekamount"},"FastForward(seekAmount)"),(0,o.kt)("p",null,"This function forwards the playhead by the specified SeekAmount (see ",(0,o.kt)("a",{parentName:"p",href:"#seek-properties"},"seek properties")," above)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"seekAmount")," (float): ",(0,o.kt)("em",{parentName:"li"},"the amount of time (in seconds) to forward the playhead"))),(0,o.kt)("h3",{id:"getkey"},"GetKey()"),(0,o.kt)("p",null,"This function returns the current key of the project, represented by an integer between 0 and 7."),(0,o.kt)("h3",{id:"getloopstart"},"GetLoopStart()"),(0,o.kt)("p",null,"This function returns the loop start time."),(0,o.kt)("h3",{id:"getlooplength"},"GetLoopLength()"),(0,o.kt)("p",null,"This function returns the length of the loop."),(0,o.kt)("h3",{id:"getmarkernameindex"},"GetMarkerName(index)"),(0,o.kt)("p",null,"This function returns the name of the marker at the specified index."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"index")," (int): ",(0,o.kt)("em",{parentName:"li"},"the index of the marker to get the name of"))),(0,o.kt)("h3",{id:"getplaypercentage"},"GetPlayPercentage()"),(0,o.kt)("p",null,"This function returns an integer value between 1 and 100, representing the percentage of the project that has been played, calculated from the current playhead position."),(0,o.kt)("h3",{id:"getprojectlength"},"GetProjectLength()"),(0,o.kt)("p",null,"This function returns the total length of the project in beats or time."),(0,o.kt)("h3",{id:"gettempo"},"GetTempo()"),(0,o.kt)("p",null,"This function returns a float value of the project's tempo in beats per minute."),(0,o.kt)("h3",{id:"gettime"},"GetTime()"),(0,o.kt)("p",null,"This function returns the current playhead time in the project."),(0,o.kt)("h3",{id:"gettimesignaturedenominator"},"GetTimeSignatureDenominator()"),(0,o.kt)("p",null,"This function returns an int value of the project's time signature denominator."),(0,o.kt)("h3",{id:"gettimesignaturenumerator"},"GetTimeSignatureNumerator()"),(0,o.kt)("p",null,"This function returns an int value of the project's time signature numerator."),(0,o.kt)("h3",{id:"isloopon"},"IsLoopOn()"),(0,o.kt)("p",null,"This function returns a boolean value indicating whether the loop is enabled."),(0,o.kt)("h3",{id:"ismetronomeonmetronometype"},"IsMetronomeOn(metronomeType)"),(0,o.kt)("p",null,"This function returns a boolean value indicating whether the specified metronome type is enabled. (see metronome types above)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"metronomeType")," (string): ",(0,o.kt)("em",{parentName:"li"},"the type of metronome to check the status of"))),(0,o.kt)("h3",{id:"isplaying"},"IsPlaying()"),(0,o.kt)("p",null,"This function returns a boolean value that indicates whether the DAW is currently playing."),(0,o.kt)("h3",{id:"nummarkers"},"NumMarkers()"),(0,o.kt)("p",null,"This function returns the number of markers in the project."),(0,o.kt)("h3",{id:"play"},"Play()"),(0,o.kt)("p",null,"This function starts playback from the current playhead position."),(0,o.kt)("h3",{id:"record"},"Record()"),(0,o.kt)("p",null,"This function starts the recording process in Mixcraft."),(0,o.kt)("h3",{id:"redo"},"Redo()"),(0,o.kt)("p",null,"This function redoes the last action performed in Mixcraft."),(0,o.kt)("h3",{id:"rewindseekamount"},"Rewind(seekAmount)"),(0,o.kt)("p",null,"This function rewinds the playhead by the specified SeekAmount (see ",(0,o.kt)("a",{parentName:"p",href:"#seek-properties"},"seek properties")," above)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"seekAmount")," (float): ",(0,o.kt)("em",{parentName:"li"},"the amount of time (in seconds) to rewind the playhead"))),(0,o.kt)("h3",{id:"save"},"Save()"),(0,o.kt)("p",null,"This function saves the current state of the project."),(0,o.kt)("h3",{id:"seektomarkerindex"},"SeekToMarker(index)"),(0,o.kt)("p",null,"This function sets the playhead to the specified marker index."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"index")," (int): ",(0,o.kt)("em",{parentName:"li"},"the index of the marker to seek to"))),(0,o.kt)("h3",{id:"setkeykey-0-7--"},"SetKey(key (0-7)  )"),(0,o.kt)("p",null,"This function sets the project's key to the specified value, represented by an integer between 0 and 7."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"key")," (int): ",(0,o.kt)("em",{parentName:"li"},"an integer representing the key (0-7) to set for the project"))),(0,o.kt)("h3",{id:"setloopstartstart"},"SetLoopStart(start)"),(0,o.kt)("p",null,"This function sets the loop start time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"start")," (float): ",(0,o.kt)("em",{parentName:"li"},"a number representing the bar the loop starts on"))),(0,o.kt)("h3",{id:"setlooplengthlength"},"SetLoopLength(length)"),(0,o.kt)("p",null,"This function sets the length of the loop."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"length")," (float): ",(0,o.kt)("em",{parentName:"li"},"a number representing the number of bars the loop is set to"))),(0,o.kt)("h3",{id:"setmetronomemetrotype-state"},"SetMetronome(metroType, state)"),(0,o.kt)("p",null,"This function that sets the metronome type and toggles the on/off state."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"metroType")," (CONST): one of the available metronome types as listed above in ",(0,o.kt)("a",{parentName:"p",href:"#metronome-properties"},"metronome properties")," above.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"state")," (bool): the on or off state for the metronome."))),(0,o.kt)("h3",{id:"settempotempo"},"SetTempo(tempo)"),(0,o.kt)("p",null,"This function sets the tempo."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tempo")," (float): ",(0,o.kt)("em",{parentName:"li"},"a number representing the tempo in beats per minute"))),(0,o.kt)("h3",{id:"settimetime"},"SetTime(time)"),(0,o.kt)("p",null,"This function sets the location of the playhead on the timeline."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"time")," (float): ",(0,o.kt)("em",{parentName:"li"},"the location in milliseconds to set the time of the playhead"))),(0,o.kt)("h3",{id:"settimesignaturenumerator-denominator"},"SetTimeSignature(numerator, denominator)"),(0,o.kt)("p",null,"This function sets the location of the playhead on the timeline."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"numerator")," (int): ",(0,o.kt)("em",{parentName:"li"},"the numerator value of teh time signature")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"denominator")," (int): ",(0,o.kt)("em",{parentName:"li"},"the denominator value of teh time signature"))),(0,o.kt)("h3",{id:"showloopbool"},"ShowLoop(bool)"),(0,o.kt)("p",null,"This function toggles the loop GUI indicators."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bool")," (bool): ",(0,o.kt)("em",{parentName:"li"},"a true or false value that sets the state for the loop region indicator in the GUI"))),(0,o.kt)("h3",{id:"toggleplay"},"TogglePlay()"),(0,o.kt)("p",null,"This function toggles the play state between playing and stopped."),(0,o.kt)("h3",{id:"undo"},"Undo()"),(0,o.kt)("p",null,"This function reverts to the last undo state in memory."))}d.isMDXComponent=!0}}]);