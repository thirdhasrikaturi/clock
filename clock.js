const hourEl=document.getElementById("hour");
const minEl=document.getElementById("minute");
const secEl=document.getElementById("second");
const timeEl=document.getElementById("ampm");


function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";

    if (h>=12){
        
        ampm="PM";
        if(h>12) h=h-=12;
    }
    if(h===0){
        h=12;
    }
    hourEl.innerText = h < 10 ? "0" + h : h;
    minEl.innerText = m < 10 ? "0" + m : m;
    secEl.innerText = s < 10 ? "0" + s : s;
    timeEl.innerText = ampm;
  
}
updateClock();
setInterval(updateClock,1000);
