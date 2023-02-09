const e=document.createElement("button");e.innerHTML="PEACE be with you",document.getElementById("main").appendChild(e),e.addEventListener("click",(()=>{const n=new XMLHttpRequest;n.onload=function(){e.innerHTML="check your console log.",console.log(JSON.parse(n.response))},n.open("GET","test",!0),n.send()}));
//# sourceMappingURL=index.cda32501.js.map
