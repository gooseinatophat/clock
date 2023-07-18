function openForm() {document.getElementById("myForm").style.display = "block";}
function closeForm() {document.getElementById("myForm").style.display = "none";}

function openInfo() {document.getElementById("iForm").style.display = "block";}
function closeInfo() {document.getElementById("iForm").style.display = "none";}

function openDescript(){document.getElementById("slot").style.display="block";}
function closeIt(){document.getElementById("slot").style.display="none";}

function openWork(){document.getElementById("workSlot").style.display="block";}
function closeWork(){document.getElementById("workSlot").style.display="none";}

function openFuel(){document.getElementById("fuelSlot").style.display="block";}
function closeFuel(){document.getElementById("fuelSlot").style.display="none";}

function openBreak(){document.getElementById("breakSlot").style.display="block";}
function closeBreak(){document.getElementById("breakSlot").style.display="none";}

function openCommute(){document.getElementById("commuteSlot").style.display="block";}
function closeCommute(){document.getElementById("commuteSlot").style.display="none";}

function openNap(){document.getElementById("napSlot").style.display="block";}
function closeNap(){document.getElementById("napSlot").style.display="none";}

function openSleep(){document.getElementById("sleepSlot").style.display="block";}
function closeSleep(){document.getElementById("sleepSlot").style.display="none";}

function openOther(){document.getElementById("otherSlot").style.display="block";}
function closeOther(){document.getElementById("otherSlot").style.display="none";}

function turnOn(){
document.getElementById("workOnAm").style.display="block";
document.getElementById("workOnPm").style.display="block";
document.getElementById("lunch").style.display="block";
document.getElementById("breakfast").style.display="block";
document.getElementById("commute").style.display="block";
document.getElementById("commuteFrom").style.display="block";
document.getElementById("dinner").style.display="block";
document.getElementById("nap").style.display="block";
document.getElementById("breakAm").style.display="block";
document.getElementById("breakPm").style.display="block";
}

function turnOff(){
document.getElementById("workOnAm").style.display="none";
document.getElementById("workOnPm").style.display="none";
document.getElementById("lunch").style.display="none";
document.getElementById("breakfast").style.display="none";
document.getElementById("commute").style.display="none";
document.getElementById("commuteFrom").style.display="none";
document.getElementById("dinner").style.display="none";
document.getElementById("nap").style.display="none";
document.getElementById("breakAm").style.display="none";
document.getElementById("breakPm").style.display="none";
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
    if (h > 12){document.getElementById("morning").style.width="660px";};
    if (h > 18){document.getElementById("noon").style.height="660px";};
    if (h > 24){document.getElementById("eve").style.width="660px";};
  },100
);