async function populate(){const e=new URLSearchParams(new URL(window.location.href).search),t=e.get("subj"),a=e.get("num");let o={faculty:"Science",subject:"CMPUT",course_num:"401",average_overall:4.5,average_workload:3.1,average_interest:4.5,average_usefulness:5,average_difficulty:2,assignedProfs:"TBA",hasLab:!1};o=await(await fetch(`http://localhost:8000/subject/${t}/number/${a}`)).json(),console.log();const r={type:"doughnut",data:{datasets:[{data:[o.average_overall,5-o.average_overall],backgroundColor:["rgb(39, 93, 56)","rgba(255, 255, 255, 0)"],hoverOffset:4}]},options:{plugins:{tooltip:{enabled:!1}},events:[],cutout:"65%"}};new Chart(document.getElementById("doughnutChart"),r);document.querySelector("p.back").addEventListener("click",(e=>{window.open("/","_self")})),document.querySelector("#title").innerHTML=`${o.subject} ${o.course_num}`,document.querySelector("#fac").innerHTML=`Faculty of ${o.faculty}`,document.querySelector("#overallRating").innerHTML=`${o.average_overall.toFixed(1)}`,document.querySelector("#diff").innerHTML=`${o.average_difficulty.toFixed(1)}`,document.querySelector("#use").innerHTML=`${o.average_usefulness.toFixed(1)}`,document.querySelector("#work").innerHTML=`${o.average_workload.toFixed(1)}`,document.querySelector("#interest").innerHTML=`${o.average_interest.toFixed(1)}`}populate();
//# sourceMappingURL=details.e3d3ac2f.js.map