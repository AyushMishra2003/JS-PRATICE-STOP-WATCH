let timeInterval
let hour=document.querySelector('#hour')
let min=document.querySelector('#min')
const sec=document.querySelector('#sec')
let second=0
let minute=0
let hr=0
const timeChanger=function(){
     if(second<60){
        second++
        sec.innerHTML=second
     }
     else{
        if(minute<60)
        {
            second=0
            minute++
            sec.innerHTML=second
            min.innerHTML=minute+":"
           // hour.innerHTML=hr
        }
        else
        {
            hr++
            second=0
            minute=0   
            sec.innerHTML='00'
            min.innerHTML='00'
            hour.innerHTML=hr+":"
        }
     }
}
document.querySelector('#start').addEventListener("click",function(){
     if(!timeInterval)
     {
        timeInterval=setInterval(timeChanger,1000)
     }
})
document.querySelector('#stop').addEventListener("click",function(){
    clearInterval(timeInterval)
    timeInterval=null
})
document.querySelector('#reset').addEventListener("click",function(){
    // timeInterval=null
    // clearInterval(timeInterval)
    // sec.innerHTML="00"
    // hour.innerHTML="00:"
    // min.innerHTML="00:"
    clearInterval(timeInterval)
    timeInterval=null
     sec.innerHTML="00"
    hour.innerHTML="00:"
    min.innerHTML="00:"
    second=0
    hr=0
    minute=0
})