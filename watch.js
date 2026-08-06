const timeEl=document.getElementById("timer");
const startEl=document.getElementById("start");
const stopEl=document.getElementById("stop");
const resetEl=document.getElementById("reset");


let startTime=0;
let elapsedTime=0;
let timeInterval;

 function start(){
    startTime=Date.now() - elapsedTime;
    timeInterval=setInterval(()=>{
       elapsedTime=Date.now()-startTime;
       timeEl.textContent=formatTime(elapsedTime);
    },10);
 }

 function formatTime(elapsedTime){
   const milliseconds=Math.floor((elapsedTime % 1000)/10);
   const seconds=Math.floor((elapsedTime%(1000*60))/1000);
   const minutes=Math.floor((elapsedTime % (1000*60*60))/(1000*60));
   const hours=Math.floor(elapsedTime/(1000 * 60* 60));
   return(
      
     (hours ? (hours >9 ? hours : "0" + hours) : "00")+
      " : " +
      (minutes ? (minutes >9 ? minutes : "0" + minutes) : "00")+
      " : " + 
      (seconds ? (seconds > 9 ? seconds : "0" +seconds) : "00")
       + "." +
      
      (milliseconds > 9 ? milliseconds:"0" + milliseconds));

 }
startEl.addEventListener("click",start);


function stop(){
   clearInterval(timeInterval);
}
stopEl.addEventListener("click",stop);


function reset(){
   clearInterval(timeInterval);

   elapsedTime=0;
   timeEl.textContent="00:00:00";
}
resetEl.addEventListener("click",reset);