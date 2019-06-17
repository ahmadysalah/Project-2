
const msH=document.querySelector('#msHundreds');
const msT=document.querySelector('#msTens');
const secTen=document.querySelector('#secondTens');
const secOne=document.querySelector('#secondOnes');
const div=document.querySelectorAll('.digits');



div[0].style.cssText="'border:1px solid black;background-color:pink;width:50%'"
/// great start bttun ////

const btnstart = document.createElement('button');
btnstart.textContent="Start Counter";
btnstart.style.cssText="width:200px;padding:6px 11px;display: block;  margin-left: 5px;";
div[0].appendChild(btnstart);


let start=1;
let end=1;

/// creat reset button
const reset = document.createElement('button');
reset.textContent="Reset Counter";
reset.style.cssText="width:200px;padding:6px 11px;margin-left: 5px;";
div[0].appendChild(reset);

/// start event
    btnstart.addEventListener('click', () => {
   

let start=1;
let end=1;
 
    // start style 
    btnstart.style.cssText="width:200px;padding:6px 11px;display: block;  margin-left: 5px;cursor: not-allowed;"  
    btnstart.setAttribute('disabled','true');
    
    secTen.textContent=0;
    secOne.textContent=0;
    msT.textContent=0;
       

const ms=setInterval(function(){ 
    msH.textContent=start;
start++;
if(start==10){
    start=1
    }
}, 100);

const second=setInterval(function(){ 
    secOne.textContent=end;
    end++;
    if(end==11){
        secTen.textContent='';
        msH.textContent=0;
      /////// make it red
        div[0].style.cssText="color:red;"
        clearInterval(second);
        clearInterval(ms);   
        }
 }, 1000);

//// reset event
 reset.addEventListener('click', () => {
    msH.textContent=0;
    msT.textContent=0;
    secOne.textContent=0;
    secTen.textContent=0;
    btnstart.removeAttribute('disabled','true');
       btnstart.style.cssText="width:200px;padding:6px 11px;display: block;  margin-left: 5px;cursor: default;"  



    clearInterval(second);
    clearInterval(ms);

});
 
  });


  