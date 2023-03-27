import{e as O}from"./api.71b1c523.js";import{_ as H,Y as I,T as w,G as U,a as Y,Q,q as J,u as K}from"./ExamsList.77368c1b.js";import{u as X,c as W,r as u,a as Z,b as ee,d as te,o as s,e as n,F as j,f as T,g as d,h as e,i as l,t as c,j as m,w as _,k as se,n as $,l as C,m as y}from"./index.27b6ef2c.js";import"./plugin-vue_export-helper.21dcd24c.js";const ne={key:0,class:"container py-10 mx-auto dark:text-gray-900"},oe={key:0,class:"space-y-2"},ae={class:"absolute top-0 left-0 flex justify-between w-full"},le={class:"px-2 py-1 text-sm font-semibold text-white bg-gray-900 border rounded"},ie={class:"px-2 py-1 text-sm font-semibold text-white bg-gray-900 border rounded"},ce=e("div",{class:"h-3"},null,-1),re={key:0,class:"text-xl font-bold text-green-500"},de={key:1,class:"text-xl font-bold text-red-500 animate-pulse"},me={class:"py-2 text-2xl font-semibold text-red-500"},ue=["innerHTML"],_e=e("p",{class:"text-sm"},"\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0989\u0995\u09CD\u09A4 \u09B8\u09AE\u09DF \u098F\u09B0 \u09AE\u09BE\u099D\u09C7 MCQ \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09B2\u09C7 \u09A4\u09AC\u09C7\u0987 \u0995\u09C7\u09AC\u09B2 \u09B2\u09C0\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A8\u09BE\u09AE \u09AA\u09BE\u09AC\u09C7\u0964 ",-1),he={key:0,class:"p-2 border border-gray-600"},pe=e("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"MCQ",-1),ge={class:"py-2"},xe=e("p",{class:"font-semibold"},"Start Time",-1),be={class:"text-sm"},fe={class:"py-2"},ye={key:0,class:"font-semibold"},ve={class:"text-sm"},ke={key:1,class:"p-2 border border-gray-600"},we=e("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"Written",-1),je={class:"py-2"},Ce=e("p",{class:"font-semibold"},"Start Time",-1),Ee={class:"text-sm"},qe={class:"py-2"},De=e("p",{class:"font-semibold"}," End Time",-1),Te={class:"text-sm"},$e={key:2,class:"flex flex-col justify-center space-x-2"},Se=e("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),Me={key:3,class:"flex flex-col justify-center space-x-2"},Pe=e("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),Qe={key:4,class:"flex flex-col justify-center space-x-2"},We=e("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),Le={key:5,class:"flex flex-col justify-center space-x-2"},Be=e("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),Ae={class:"flex flex-wrap items-center justify-center gap-3"},Ne=["onClick"],Re=y("MCQ Solve "),Fe=y("MCQ Leaderboard "),ze={key:6,class:"flex flex-wrap items-center justify-center gap-3"},Ve=y("Written Exam "),Ge=["href"],Oe=y("Written Leaderboard "),He={key:1},Ie=e("div",{class:"my-3 text-center"},[e("h1",{class:"text-2xl font-bold"},"Previous Exams"),e("h2",{class:"text-lg font-semibold text-sky-500"},"Chapter Wise Exams")],-1),Ue={class:"grid w-full grid-cols-2 gap-3 md:grid-cols-3"},Ye=["onClick"],Je={class:"p-3 space-y-1 text-center border rounded-2xl border-slate-500 hover:scale-105 hover:cursor-pointer"},Ke=["src"],Xe={class:"text-lg font-bold"},Ze=e("div",{class:"my-3 text-center"},[e("h2",{class:"text-lg font-semibold text-sky-500"},"Specialized Exams")],-1),et={class:"grid w-full grid-cols-2 gap-3 md:grid-cols-3"},tt=["onClick"],st={class:"p-3 space-y-1 text-center border rounded-2xl border-slate-500 hover:scale-105 hover:cursor-pointer"},nt=["src"],ot={class:"text-lg font-bold"},at={key:2},lt=e("div",{class:"my-3 text-center"},[e("h1",{class:"text-2xl font-bold"},"Previous Exams"),e("h2",null,"Chapter Wise Exams")],-1),it=[lt],ct={key:3},rt={class:"pb-5 text-2xl"},dt={class:"text-2xl font-bold text-center"},mt={key:0,class:"grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"},ut={key:1,class:"my-5 text-3xl text-center"},_t=e("h1",null," Exam will be available soon. ",-1),ht=[_t],pt={key:1,class:"py-10 text-center"},gt=e("button",{class:"btn btn-primary btn-circle loading"},null,-1),xt=[gt],bt={class:"fixed inset-0 z-10 overflow-y-auto"},ft={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},yt=e("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),vt={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},kt={class:"mt-2"},wt={class:"text-sm text-gray-500"},$t={setup(jt){const L=X(),i=W(()=>L.state.currentTime),f=u({show:!1,title:"",message:""}),h=Z();localStorage.getItem("varsityguccho_exam_22")||h.replace({name:"Login"});function x(a,o){f.value={show:!0,title:`${a} will be available soon`,message:`We are working on ${a}. Please check back after the time ${o}.`}}function S(){f.value={show:!1,title:"",message:""}}const b=u([]);let E=[];const B=u(new Set),A=u("");u("");const q=u([]),v=u([]),N=u([]),R=ee(),F=u([]);(()=>{se.get(O+"?type=examlist").then(a=>{b.value=a.data.routines,b.value.forEach(o=>{o.subject&&B.value.add(o.subject),o.exam_category&&N.value.push(o.exam_category);let r=new Date(o.end_time)>(o.cq_end&&new Date(o.cq_end))?o.end_time:o.cq_end;new Date(r).getTime()>=i.value&&E.length<5&&E.push(o)}),q.value=E,b.value=b.value.reverse(),M(R.query.subject||"")}).catch(a=>{console.error(a)})})();const z=a=>{if(a=="paperfinal"){h.push("/paperfinal");return}if(a=="subjectfinal"){h.push("/subjectfinal");return}if(a="modeltest"){h.push("/modeltest");return}},M=a=>{A.value=a,h.push("/?subject="+a),v.value=b.value.filter(o=>o.subject.includes(a)),F.value=new Set(v.value.map(o=>o.chapter))},{formattedDate:k}=K(),P=(a,o)=>{if(o=="combined"){h.push(`/notice/${a}`);return}h.push(`/exam/${a}`)},D={"Physics 1st Paper":"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-physics-science-flaticons-lineal-color-flat-icons.png","Physics 2nd Paper":"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-physics-online-education-flaticons-lineal-color-flat-icons.png","Chemistry 1st Paper":"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-chemistry-bioengineering-flaticons-lineal-color-flat-icons.png","Chemistry 2nd Paper":"https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/55/null/external-Molecules-medical-and-healthcare-smashingstocks-isometric-smashing-stocks.png","Math 1st Paper":"https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/null/external-Math-school-smashingstocks-flat-smashing-stocks.png","Math 2nd Paper":"https://img.icons8.com/external-others-pike-picture/50/null/external-Math-geek-others-pike-picture.png","Biology 1st Paper":"https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/null/external-biology-ecology-environment-wanicon-lineal-color-wanicon.png","Biology 2nd Paper":"https://img.icons8.com/external-filled-line-gradient-andi-nur-abdillah/64/null/external-biology-human-organ-filled-line-gradient-filled-line-gradient-andi-nur-abdillah-2.png",Bangla:"https://img.icons8.com/external-flatarticons-blue-flatarticons/65/null/external-bangala-bangladesh-independence-day-flatarticons-blue-flatarticons.png",English:"https://img.icons8.com/fluency/48/null/brick.png"},V=[{name:"Paper Final",keyword:"paperfinal",icon:"https://img.icons8.com/color/48/null/book-shelf.png"},{name:"Subject Final",keyword:"subjectfinal",icon:"https://img.icons8.com/color/48/null/book-shelf.png"},{name:"Model Test",keyword:"modeltest",icon:"https://img.icons8.com/color/48/null/book-shelf.png"}],G=W(()=>{let a=[];return[...new Set(Object.keys(D).map(r=>r.split(" ")[0]))].forEach(r=>{let t=Object.keys(D).find(p=>p.includes(r));a.push({name:r,icon:D[t]})}),a});return(a,o)=>{const r=te("router-link");return s(),n(j,null,[b.value.length>0?(s(),n("div",ne,[q.value&&!a.$route.query.subject?(s(),n("div",oe,[(s(!0),n(j,null,T(q.value,(t,p)=>(s(),n("div",{key:p,class:"relative p-2 my-2 space-y-2 text-center shadow-sm bg-gray-50 rounded-xl"},[e("div",ae,[e("h1",le,c(t.subject),1),e("h2",ie,c(t.exam_category),1)]),ce,new Date(t.start_time).getTime()>l(i)?(s(),n("h1",re," Upcoming Exam... ")):new Date(t.end_time)>new Date?(s(),n("h1",de," Ongoing Exam... ")):d("",!0),e("h1",me,c(t.topic),1),e("p",{class:"text-sm",innerHTML:t.description},null,8,ue),_e,e("div",{class:$(["grid justify-center max-w-md grid-cols-1 gap-2 mx-auto",{"sm:grid-cols-2":t.cq_start&&t.start_time}])},[t.start_time?(s(),n("div",he,[pe,e("div",ge,[xe,e("p",be,c(l(k)(new Date(t.start_time))),1)]),e("div",fe,[t.end_time?(s(),n("p",ye," End Time")):d("",!0),e("p",ve,c(l(k)(new Date(t.end_time))),1)])])):d("",!0),t.cq_start?(s(),n("div",ke,[we,e("div",je,[Ce,e("p",Ee,c(l(k)(new Date(t.cq_start))),1)]),e("div",qe,[De,e("p",Te,c(l(k)(new Date(t.cq_end))),1)])])):d("",!0)],2),new Date(t.start_time).getTime()>l(i)?(s(),n("div",$e,[Se,m(w,{end:new Date(t.start_time)},null,8,["end"])])):new Date(t.end_time)>new Date(l(i))?(s(),n("div",Me,[Pe,m(w,{end:new Date(t.end_time)},null,8,["end"])])):new Date(t.cq_start)>new Date(l(i))?(s(),n("div",Qe,[We,m(w,{end:new Date(t.cq_start)},null,8,["end"])])):new Date(t.cq_end)>new Date(l(i))?(s(),n("div",Le,[Be,m(w,{end:new Date(t.cq_end)},null,8,["end"])])):d("",!0),e("div",Ae,[new Date(t.start_time).getTime()<l(i)?(s(),n("button",{key:0,class:"btn btn-sm",onClick:g=>P(t.id,t.chapter)}," MCQ Exam ",8,Ne)):(s(),n("button",{key:1,class:"btn btn-sm",onClick:o[0]||(o[0]=g=>x("MCQ Exam","starts"))}," MCQ Exam ")),new Date(t.end_time).getTime()<l(i)?(s(),C(r,{key:2,class:"btn btn-sm",to:`/solution/${t.id}`},{default:_(()=>[Re]),_:2},1032,["to"])):(s(),n("button",{key:3,class:"btn btn-sm",onClick:o[1]||(o[1]=g=>x("MCQ Solve","Ends"))}," MCQ Solve ")),new Date(t.start_time).getTime()<l(i)?(s(),C(r,{key:4,class:"mx-2 btn btn-sm",to:`/ranking/${t.id}`},{default:_(()=>[Fe]),_:2},1032,["to"])):(s(),n("button",{key:5,class:"mx-2 btn btn-sm",onClick:o[2]||(o[2]=g=>x("Leaderboard","Starts"))}," MCQ Leaderboard "))]),t.cq_link?(s(),n("div",ze,[new Date(t.cq_start).getTime()<l(i)&&t.cq_link?(s(),C(r,{key:0,class:"btn btn-sm",to:`/cq/${t.id}`},{default:_(()=>[Ve]),_:2},1032,["to"])):(s(),n("button",{key:1,class:"btn btn-sm",onClick:o[3]||(o[3]=g=>x("Written Exam","starts"))}," Written Exam ")),new Date(t.cq_end).getTime()<l(i)&&t.cq_solve?(s(),n("a",{key:2,class:"btn btn-sm",href:t.cq_solve,target:"_blank"},"Written Exam Solve",8,Ge)):(s(),n("button",{key:3,class:"btn btn-sm",onClick:o[4]||(o[4]=g=>x("Solution","Ends"))}," Written Exam Solve ")),t.cq_published?(s(),C(r,{key:4,class:"mx-2 btn btn-sm",to:`/cql/${t.id}`},{default:_(()=>[Oe]),_:2},1032,["to"])):d("",!0)])):d("",!0)]))),128))])):d("",!0),a.$route.query.subject?d("",!0):(s(),n("div",He,[Ie,e("div",Ue,[(s(!0),n(j,null,T(l(G),(t,p)=>(s(),n("div",{key:p,onClick:g=>M(t.name),class:$(["bg-gradient-to-tl",""])},[e("div",Je,[e("img",{src:t.icon,alt:"",class:"h-16 mx-auto"},null,8,Ke),e("p",Xe,c(t.name),1)])],8,Ye))),128))]),Ze,e("div",et,[(s(),n(j,null,T(V,(t,p)=>e("div",{key:p,onClick:g=>z(t.keyword),class:$(["bg-gradient-to-tl",""])},[e("div",st,[e("img",{src:t.icon,alt:"",class:"h-16 mx-auto"},null,8,nt),e("p",ot,c(t.name),1)])],8,tt)),64))])])),!a.$route.query.chapter&&a.$route.query.subject&&!(a.$route.query.subject==="Weekly"||a.$route.query.subject=="Monthly")?(s(),n("div",at,it)):d("",!0),a.$route.query.subject?(s(),n("div",ct,[e("div",rt,[e("h1",dt,c(a.$route.query.subject),1)]),v.value.length>0?(s(),n("div",mt,[m(H,{exams:v.value,onStartExam:P,onUpcomingAlert:x,currentTime:l(i)},null,8,["exams","currentTime"])])):(s(),n("div",ut,ht))])):d("",!0)])):(s(),n("div",pt,xt)),m(l(I),{appear:"",show:f.value.show,as:"template"},{default:_(()=>[m(l(U),{as:"div",onClose:S},{default:_(()=>[e("div",bt,[e("div",ft,[m(l(Q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[m(l(Y),{class:"fixed inset-0"})]),_:1}),yt,m(l(Q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:_(()=>[e("div",vt,[m(l(J),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:_(()=>[y(c(f.value.title),1)]),_:1}),e("div",kt,[e("p",wt,c(f.value.message),1)]),e("div",{class:"mt-4"},[e("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:S}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}};export{$t as default};
