function getValueOrPlaceholderSelector(e){let t=document.querySelector(e);return""===t.value?t.placeholder:t.value}document.querySelector("p.search").addEventListener("click",(async e=>{let t=getValueOrPlaceholderSelector("#csub").toUpperCase(),r=getValueOrPlaceholderSelector("#cnum").toUpperCase();try{if(1!==(await(await fetch(`http://localhost:8000/subject/${t}/number/${r}`)).json()).length)return void new Swal({title:"Error!",text:"We couldn't find that course! Make sure you filled in both fields correctly.",icon:"error"});let e=new URLSearchParams;e.append("subj",t),e.append("num",r),window.open("/details.html?"+e.toString(),"_self")}catch(e){new Swal({title:"Error!",text:"Communicate with the server.",icon:"error"})}}));
//# sourceMappingURL=index.316e9429.js.map