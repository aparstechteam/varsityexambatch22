import{b as l,r as _,k as u,i as a,o,e as c,h as n}from"./index.e7486f71.js";import{e as m}from"./api.71b1c523.js";const d={key:0},p=["src"],h={key:1,class:"flex items-center justify-center min-h-screen"},f=n("button",{class:"btn btn-circle loading"},null,-1),g=[f],y={setup(x){const i=l();let t=_(""),e=localStorage.getItem("varsityguccho_exam_22");return e=JSON.parse(e),e.group&&u.get(`${m}?type=examlist&id=${i.params.id}`).then(r=>{let s=r.data.exam.cq_link.split(",");t.value=s[parseInt(e.group)-1]||s[s.length-1]}),(r,s)=>a(t)?(o(),c("div",d,[n("iframe",{src:a(t),frameborder:"0",class:"w-screen min-h-screen"},null,8,p)])):(o(),c("div",h,g))}};export{y as default};
