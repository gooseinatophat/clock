function openForm() {document.getElementById("myForm").style.display = "block";
}
function openIndex() {document.getElementById("iForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
function closeiForm() {
    document.getElementById("iForm").style.display = "none";
  }

let s= 0;
let min= 0;
let h=0;
let d= new Date();
let um= 27.5;let uh = um*4; let ut=um/15;

setInterval(
  function time () {
    d=new Date();
    s=d.getSeconds();
    min=d.getMinutes();
    h=d.getHours();
    um=27.5;
    uh=um*4;
    ut=um/15;
    document.getElementById("morning").style.width= min/15*um + uh*(h-6) + "px";
    document.getElementById("noon").style.height=  min/15*um + uh*(h-12)  + "px";    
    document.getElementById("eve").style.width=  min/15*um + uh*(h-18)  + "px";
    document.getElementById("night").style.height=  min/15*um + uh*(h-24) + "px";
    document.getElementById("seconds").innerHTML= d.getSeconds();
    document.getElementById("time").innerHTML= h + ":" + min;
  },100
);

if (new Date().getHours() > 12){document.getElementById("morning").style.width="660px";};
if (new Date().getHours() > 18){document.getElementById("noon").style.height="660px";};
if (new Date().getHours() > 24){document.getElementById("eve").style.width="660px";};
