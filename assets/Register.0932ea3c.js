import{a as c,b as v,r as d,o as m,e as h,h as e,I as a,J as n,K as _,n as f,bw as b,as as g}from"./index.e7486f71.js";import{a as S}from"./api.71b1c523.js";const y={class:"container px-2 py-20 mx-auto"},x=["onSubmit"],C={class:"form-control"},N=e("label",{for:"name"},"Name",-1),V={class:"form-control"},q=e("label",{for:"phone"},"Phone",-1),U={class:"form-control"},j=e("label",{for:"reg"},"SSC/HSC roll",-1),B={class:"form-control"},M=e("label",{for:"reg"},"SSC/HSC registration No.",-1),k=e("p",{class:"text-sm"},"\u098F\u099F\u09BF \u09A6\u09BF\u09DF\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09B8\u0995\u09B2 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964",-1),w={class:"form-control"},H=e("label",{for:"reg"},"Board",-1),J=g('<option value="" selected disabled>Select board</option><option value="barisal">Barisal</option><option value="chittagong">Chittagong</option><option value="comilla">Comilla</option><option value="dhaka">Dhaka</option><option value="dinajpur">Dinajpur</option><option value="jessore">Jessore</option><option value="madrasah">Madrasah</option><option value="rajshahi">Rajshahi</option><option value="sylhet">Sylhet</option><option value="mymensingh">Mymensingh</option><option value="tec">Technical</option>',12),D=[J],I={class:"form-control"},O=e("label",{for:"college"},"Institution",-1),R={class:"text-center"},E={setup(T){const r=c(),i=v(),o=d({ttrx:"",name:"",phone:"+880",reg:"",college:"",board:"",roll:""});i.query.ttrx?o.value.ttrx=i.query.ttrx:r.replace("/login");const s=d(!1),p=()=>{s.value=!0,fetch(S,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(o.value)}).then(()=>{if(o.value.name){localStorage.setItem("varsityguccho_exam_22",JSON.stringify(o.value)),r.push("/"),s.value=!1;return}else alert("\u09B8\u09A0\u09BF\u0995 \u0997\u09CD\u09B0\u09C1\u09AA \u099C\u09DF\u09C7\u09A8\u09BF\u0982 \u0986\u0987\u09A1\u09BF \u09A6\u09BF\u09DF\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964"),s.value=!1}).catch(u=>{console.log(u),s.value=!1})};return(u,t)=>(m(),h("div",y,[e("form",{onSubmit:b(p,["prevent"]),class:"space-y-3"},[e("div",C,[N,a(e("input",{type:"text",required:"","onUpdate:modelValue":t[0]||(t[0]=l=>o.value.name=l),class:"input input-bordered"},null,512),[[n,o.value.name]])]),e("div",V,[q,a(e("input",{type:"tel",required:"","onUpdate:modelValue":t[1]||(t[1]=l=>o.value.phone=l),class:"input input-bordered"},null,512),[[n,o.value.phone]])]),e("div",U,[j,a(e("input",{type:"tel","onUpdate:modelValue":t[2]||(t[2]=l=>o.value.roll=l),class:"input input-bordered",placeholder:"HSC roll"},null,512),[[n,o.value.roll]])]),e("div",B,[M,k,a(e("input",{type:"tel",required:"","onUpdate:modelValue":t[3]||(t[3]=l=>o.value.reg=l),class:"input input-bordered",placeholder:"SSC/HSC registration No"},null,512),[[n,o.value.reg]])]),e("div",w,[H,a(e("select",{class:"select select-bordered",required:"","onUpdate:modelValue":t[4]||(t[4]=l=>o.value.board=l)},D,512),[[_,o.value.board]])]),e("div",I,[O,a(e("input",{type:"text",required:"","onUpdate:modelValue":t[5]||(t[5]=l=>o.value.college=l),placeholder:"College Name",class:"input input-bordered"},null,512),[[n,o.value.college]])]),e("div",R,[e("button",{type:"submit",class:f(["btn btn-primary",{loading:s.value}])},"Submit",2)])],40,x)]))}};export{E as default};
