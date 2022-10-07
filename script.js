var hit=document.querySelector("#hit .sqr");
var score=document.querySelector("#score .sqr");
var timer=document.querySelector("#timer .sqr");
var clutter="";
var count=0,i;
var time=60;
var t=0;
var c=0;
var username=document.getElementById('username');
var clutter2="";
function updateTime(){
    if(time === 0 || c === 3){
        timer.innerHTML=time;
        document.querySelector("#display").style.top="15%";
        document.querySelector("#Final-Score h5").innerHTML=count;
        clearInterval(x);
    }
    timer.innerHTML=time;
    time--;
}
function bubbleCreator(){
    clutter="";
 for(i=1; i<=119; i++){
     clutter +=`<div class="bubble"><h2>${Math.floor(Math.random()*10)}</h2></div>`;
     hit.innerHTML=Math.floor(Math.random()*10);
     document.querySelector("#bubble-cover").innerHTML=clutter;
  }
}
setTimeout(function(){
     document.querySelector("#main>img").style.marginTop="-100%";
     document.querySelector("#main>img").style.transition=" ease 6s";
},3000)

bubbleCreator()
document.querySelector("#main").addEventListener("click",function(dets){
    if(hit.innerHTML === dets.target.innerHTML)
    {
        count +=10;
        score.innerHTML=count;
        bubbleCreator();
    }
    else{
        c++;
        document.querySelector("#heart h6:nth-child("+c+")").style.display="none";
    }
})
document.querySelector("#start-again").addEventListener("click",function(){
    clutter="";
    count=0;
    time=60;
    c=0;
    for(var i=1; i<=3; i++){
        document.querySelector("#heart h6:nth-child("+i+")").style.display="block";
    }
    document.querySelector("#red").style.display="block";
    document.querySelector("#display").style.top="-100%";
    document.querySelector("#Final-Score h5").innerHTML=0;
    score.innerHTML=count;
    setInterval(updateTime,2000);
})
document.querySelector("#start").addEventListener("click",function(){
    setTimeout(function(){
        var x=setInterval(updateTime,1000);  
    },2000)
    document.querySelector("#display-name h1").innerHTML=username.value+"😎";
    document.querySelector("#line1").style.opacity=1
    document.querySelector("#line2").style.opacity=1
    var tl=gsap.timeline();
tl
.from("#main-cover #line1",{
    top:"-100%",
    duration:1.5,
    ease:Sine
},)
.from("#main-cover #line2",{
    bottom:"-100%",
    duration:1.5,
    ease:Sine
},"-=1.5")
.to("#main-cover",{
    delay:1,
    bottom:"-150%",
    duration:1.5,
    ease:Sine
   },)
})

