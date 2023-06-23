var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();
var rotation = 45; 

setInterval(
    function(){
        d = new Date
        second = d.getSeconds() * 3;
        minute = d.getMinutes() * 3;
        hour = d.getHours() * 15 + Math.round(minute /24);
        document.getElementById('hour-hand').style.transform ='rotate(' + hour + 'deg)';
    },1000

);