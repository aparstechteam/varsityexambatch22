var M=Object.defineProperty,H=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var T=(d,s,i)=>s in d?M(d,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[s]=i,p=(d,s)=>{for(var i in s||(s={}))N.call(s,i)&&T(d,i,s[i]);if(w)for(var i of w(s))D.call(s,i)&&T(d,i,s[i]);return d},x=(d,s)=>H(d,S(s));import{O as A,H as j,d as C,o as r,e as n,h as o,g as l,m as v,t as u,l as I,w as R,j as L,F as y,f as k,L as W,M as O,n as m}from"./index.2de45b3e.js";import{e as Q}from"./api.014cc687.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";const B={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(d,s,i){var t;if((t=JSON.parse(localStorage.getItem("varsityguccho_exam_22")))==null?void 0:t.reg){i();return}i({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let d=null;fetch(Q+"?type=examlist&id="+this.$route.params.id).then(s=>s.json()).then(s=>{if(new Date(s.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+s.exam.exam.substr(39,44),this.ended=new Date(s.exam.end_time).getTime(),this.timelimit=s.exam.timelimit*6e4,this.immediate=!s.exam.special,this.chapter=s.exam.chapter;let i=["Physics","Chemistry"];this.$route.query.s1&&this.$route.query.s2&&(i=[...i,this.$route.query.s1,this.$route.query.s2]),this.solutionpdf=s.exam.solve_sheet,d=s.exam.time;let b=JSON.parse(localStorage.getItem("varsityguccho_exam_22")).ttrx;fetch(this.url+"&type=check&phone="+b).then(t=>t.json()).then(t=>{t.message=="exists"||this.ended<Date.now()?(this.result=t.result?t.result:["","Time's up"],fetch(this.url+"&type=question").then(c=>c.json()).then(c=>{this.solution=c;let a=d;this.inttime=a*6e4,this.end=a*6e4}),this.unknown=!1,this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(c=>c.json()).then(c=>{let a=localStorage.getItem(`attempt${this.$route.params.id}`);a?localStorage.setItem(`attempt${this.$route.params.id}`,Number(a)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=c.map((e,h)=>x(p({},e),{id:h+1,selected:""})),this.chapter=="combined"&&(this.questions=this.questions.filter(e=>i.includes(e.subject))),this.starttime=Date.now();let _=d;this.inttime=_*6e4,this.end=_*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let d=this.solution.reduce((s,i)=>(i.correct==i.selected?(s+=1,this.status.Correct+=1):i.selected?(s-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,s),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${d}, Correct ${this.status.Correct} Wrong ${this.status.Wrong} Not Answered ${this.status.Not_Answered}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=d,this.solution=this.solution.map(s=>x(p({},s),{selected:""})),window.scroll(0,0)})},millisecToTime(d){var s=Math.floor(d/6e4),i=(d%6e4/1e3).toFixed(0);return s+":"+(i<10?"0":"")+i},submitAns(){let d=this.millisecToTime(Date.now()-this.starttime);this.eload=!0;let s=this.questions.reduce((a,_)=>(_.correct==_.selected?(a+=1,this.status.Correct+=1):_.selected?(a-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,a),0);clearTimeout(this.timing);let{ttrx:i,name:b,college:t}=JSON.parse(localStorage.getItem("varsityguccho_exam_22")),c=this.questions.map(a=>{let e=[a.a,a.b,a.c,a.d].indexOf(a.selected);return{id:a.id,s:e}}).filter(a=>a.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:i,name:b,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:s,college:t,duration:d,submission:JSON.stringify(c)})}).then(()=>{clearTimeout(this.timing);let a=s>=this.questions.length*.5;this.$swal({icon:a?"success":"error",title:a?"Well done!":"Sorry! You failed!",text:`You Scored ${s}, Correct: ${this.status.Correct}, Wrong: ${this.status.Wrong}, Not Answered: ${this.status.Not_Answered}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.viewDetails=!0,this.show=!1,this.score=s,window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace(`/ranking/${this.$route.params.id}`)},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(d){this.show=!0;const s=setInterval(()=>{const i=d-Date.now();if(i<0){clearInterval(s);return}const b=Math.floor(i/this._days),t=Math.floor(i%this._days/this._hours),c=Math.floor(i%this._hours/this._minutes),a=Math.floor(i%this._minutes/this._seconds);this.second=a<10?"0"+a:a,this.minute=c<10?"0"+c:c,this.hours=t<10?"0"+t:t,this.days=b<10?"0"+b:b},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:x(p({},A(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>j.state.currentTime})},f=d=>(W("data-v-5d28bc3d"),d=d(),O(),d),J={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},V={class:"py-3 text-center"},z={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},E={key:0},F={key:1,class:"text-center text-gray-900"},P={class:"py-5"},K=v(" View Solution "),G=["textContent"],U={key:0,class:"my-5 text-center"},Z={key:1,class:"text-center"},$=["textContent"],X={key:2,class:"text-center"},q=f(()=>o("button",{class:"btn loading btn-circle"},null,-1)),ee=[q],te={key:3,class:"my-4 font-semibold text-center text-gray-900"},se={key:1,class:"pb-10"},oe={class:"py-4 text-center"},re={class:"text-2xl font-bold text-gray-900"},ne=f(()=>o("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ie={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},le=["innerHTML"],de={class:"flex gap-3"},ce={class:"btn btn-sm"},ae={key:0,class:"btn btn-sm"},ue={class:"mt-3"},he=["innerHTML","onClick"],me=["innerHTML","onClick"],be=["innerHTML","onClick"],_e=["innerHTML","onClick"],ge={class:"mb-10 text-center"},pe={key:2,class:"pb-10"},xe={class:"py-4 text-center"},ye={class:"text-2xl font-bold text-gray-900"},ve=f(()=>o("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),fe={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},ke=["innerHTML"],we={class:"flex gap-3"},Te={class:"btn btn-sm"},Ce={key:0,class:"btn btn-sm"},Le={class:"mt-3"},Me=["innerHTML","onClick"],He=["innerHTML","onClick"],Se=["innerHTML","onClick"],Ne=["innerHTML","onClick"],De={key:0,class:"my-2 text-center"},Ae={key:1,class:"mb-10 text-center"},je=["disabled"],Ie={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},Re={class:"flex flex-wrap justify-center"},We={class:"w-full p-3 md:w-1/2"},Oe={class:"text-center"},Qe={class:"text-lg font-semibold text-gray-900"},Ye={class:"text-gray-600"},Be={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-gray-50"},Je={class:"text-gray-900"},Ve={class:"text-lg font-bold"},ze={class:"text-lg font-bold"},Ee={class:"text-lg font-bold"},Fe={class:"text-lg font-bold"},Pe=["innerHTML"],Ke={class:"flex gap-3"},Ge={class:"btn btn-sm"},Ue={key:0,class:"btn btn-sm"},Ze={class:"mt-3"},$e=["innerHTML"],Xe=["innerHTML"],qe=["innerHTML"],et=["innerHTML"],tt={key:0,class:"my-2 poppins"},st=["innerHTML"],ot={class:"material-icons"},rt={key:0,class:"my-2 text-center"},nt={key:1,class:"mb-10 text-center"},it=["disabled"],lt={key:3,class:"white--text fixed__timer"},dt={class:"text-white bg-blue-500 border border-white shadow"},ct={key:1,class:"flex items-center justify-center w-full h-screen"},at=f(()=>o("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[o("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),o("div",{class:"text-lg"},"Loading ...")],-1)),ut=[at];function ht(d,s,i,b,t,c){const a=C("router-link"),_=C("pie-chart");return t.loading?(r(),n("div",ct,ut)):(r(),n("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(r(),n("div",J,[o("div",V,[t.result[1]?(r(),n("h2",z,[t.result[1]!=="Time's up"?(r(),n("span",E,"You Scored:")):l("",!0),v(" "+u(t.result[1]),1)])):l("",!0),t.result[1]=="Time's up"?(r(),n("p",F,"But you can still give the exam. Click 'Test yourself again'.")):l("",!0),o("div",P,[this.ended<c.currentTime||t.immediate?(r(),I(a,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:R(()=>[K]),_:1},8,["to"])):(r(),n("button",{key:1,class:"btn btn-primary",onClick:s[0]||(s[0]=(...e)=>c.endalert&&c.endalert(...e)),textContent:u("View Solution")},null,8,G))])]),!t.retake&&t.solution.length>0?(r(),n("div",U,[L(a,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):l("",!0),!t.retake&&t.solution.length>0?(r(),n("div",Z,[o("button",{class:"mx-auto btn btn-primary",onClick:s[1]||(s[1]=(...e)=>c.startRetake&&c.startRetake(...e)),textContent:u("Test Yourself Again")},null,8,$)])):(r(),n("div",X,ee)),!t.retake&&t.solution.length>0?(r(),n("div",te," Retake exam score will not be recorded ")):l("",!0)])):l("",!0),t.retake?(r(),n("div",se,[o("div",oe,[o("h1",re," Retake Exam - "+u(this.$route.params.id),1),ne]),o("div",ie,[(r(!0),n(y,null,k(t.solution,(e,h)=>(r(),n("div",{key:h,class:m(["p-5 mx-auto my-3 text-lg text-gray-900 bg-white border-gray-300 rounded-md shadow-lg borderb kalpurush",{"stop-events":t.solution[h].selected}])},[o("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,le),o("div",de,[o("span",ce,"Q No. "+u(h+1),1),e.subject?(r(),n("span",ae,u(e.subject),1)):l("",!0)]),o("div",ue,[e.a?(r(),n("div",{key:0,innerHTML:e.a,onClick:g=>t.solution[h].selected=e.a,class:m(`border cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500  dark:bg-indigo-400 dark:border-indigo-500 ":" bg-white "}`)},null,10,he)):l("",!0),e.b?(r(),n("div",{key:1,innerHTML:e.b,onClick:g=>t.solution[h].selected=e.b,class:m(`border cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500  dark:bg-indigo-400 dark:border-indigo-500 ":" bg-white "}`)},null,10,me)):l("",!0),e.c?(r(),n("div",{key:2,innerHTML:e.c,onClick:g=>t.solution[h].selected=e.c,class:m(`border cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500  dark:bg-indigo-400 dark:border-indigo-500 ":" bg-white "}`)},null,10,be)):l("",!0),e.d?(r(),n("div",{key:3,innerHTML:e.d,onClick:g=>t.solution[h].selected=e.d,class:m(`border cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500  dark:bg-indigo-400 dark:border-indigo-500 ":" bg-white "}`)},null,10,_e)):l("",!0)])],2))),128)),o("div",ge,[o("button",{onClick:s[2]||(s[2]=(...e)=>c.retakeResult&&c.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):l("",!0),t.questions.length>0?(r(),n("div",pe,[o("div",xe,[o("h1",ye," Exam - "+u(this.$route.params.id),1),ve]),t.viewDetails?(r(),n("div",Ie,[o("div",null,[o("div",Re,[o("div",We,[o("div",Oe,[o("h3",Qe," You Scored: "+u(t.score),1),o("p",Ye," out of "+u(t.questions.length),1)])])])]),o("div",null,[o("div",Be,[o("div",null,[L(_,{data:t.status},null,8,["data"])]),o("div",Je,[o("p",Ve," Total: "+u(t.questions.length),1),o("p",ze," Correct: "+u(t.status.Correct),1),o("p",Ee," Incorrect: "+u(t.status.Wrong),1),o("p",Fe," Not Answered: "+u(t.status.Not_Answered),1)])])]),(r(!0),n(y,null,k(t.questions,(e,h)=>(r(),n("div",{key:h,class:"p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush"},[o("div",{class:"inline-flex mb-2 text-lg font-semibold",innerHTML:e.question},null,8,Pe),o("div",Ke,[o("span",Ge,"Q No. "+u(h+1),1),e.subject?(r(),n("span",Ue,u(e.subject),1)):l("",!0)]),o("div",Ze,[e.a?(r(),n("div",{key:0,innerHTML:e.a,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded   ${e.a==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":" bg-white border"} ${e.a==e.correct?"border-2 border-green-500 ":" bg-white border"}`)},null,10,$e)):l("",!0),e.b?(r(),n("div",{key:1,innerHTML:e.b,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":" bg-white "} ${e.b==e.correct?"border-2 border-green-500 ":" bg-white border"}`)},null,10,Xe)):l("",!0),e.c?(r(),n("div",{key:2,innerHTML:e.c,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":" bg-white "} ${e.c==e.correct?"border-2 border-green-500 ":" bg-white border"}`)},null,10,qe)):l("",!0),e.d?(r(),n("div",{key:3,innerHTML:e.d,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded   ${e.d==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":" bg-white border"} ${e.d==e.correct?"border-2 border-green-500 ":" bg-white "}`)},null,10,et)):l("",!0)]),e.explain?(r(),n("h2",tt,"Explain:")):l("",!0),e.explain?(r(),n("div",{key:1,class:"p-3 my-3 bg-white border border-green-500 rounded",innerHTML:e.explain},null,8,st)):l("",!0),o("div",{class:m(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[o("span",ot,u(e.correct==e.selected?"done":"close"),1),e.selected?(r(),n(y,{key:0},[v(u(e.correct==e.selected?"Correct":"Wrong"),1)],64)):l("",!0),v(" "+u(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(r(),n("div",rt,[o("button",{onClick:s[5]||(s[5]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(r(),n("div",nt,[o("button",{onClick:s[6]||(s[6]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,it)]))])):(r(),n("div",fe,[(r(!0),n(y,null,k(t.questions,(e,h)=>(r(),n("div",{key:h,class:m(["p-5 mx-auto my-3 text-lg bg-white border-gray-300 rounded-md shadow-lg borderborder kalpurush",{"stop-events":t.questions[h].selected}])},[o("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,ke),o("div",we,[o("span",Te,"Q No. "+u(h+1),1),e.subject?(r(),n("span",Ce,u(e.subject),1)):l("",!0)]),o("div",Le,[e.a?(r(),n("div",{key:0,innerHTML:e.a,onClick:g=>t.questions[h].selected=e.a,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500   ":" bg-white border"}`)},null,10,Me)):l("",!0),e.b?(r(),n("div",{key:1,innerHTML:e.b,onClick:g=>t.questions[h].selected=e.b,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500   ":" bg-white border"}`)},null,10,He)):l("",!0),e.c?(r(),n("div",{key:2,innerHTML:e.c,onClick:g=>t.questions[h].selected=e.c,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500   ":" bg-white border"}`)},null,10,Se)):l("",!0),e.d?(r(),n("div",{key:3,innerHTML:e.d,onClick:g=>t.questions[h].selected=e.d,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500   ":" bg-white border"}`)},null,10,Ne)):l("",!0)])],2))),128)),t.viewDetails?(r(),n("div",De,[o("button",{onClick:s[3]||(s[3]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(r(),n("div",Ae,[o("button",{onClick:s[4]||(s[4]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,je)]))]))])):l("",!0),t.show?(r(),n("div",lt,[o("div",dt,u(t.minute)+" : "+u(t.second),1)])):l("",!0)],32))}var pt=Y(B,[["render",ht],["__scopeId","data-v-5d28bc3d"]]);export{pt as default};
