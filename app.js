let sunucudandonen;

var baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
sunucudandonen=JSON.parse(baglanti.responseText)
sorugetir()
}
};
baglanti.open("GET", "data.json", true);
baglanti.send();

var question=document.getElementById("question");
var a_text=document.getElementById("a_text")
var b_text=document.getElementById("b_text")
var c_text=document.getElementById("c_text")
var d_text=document.getElementById("d_text")
var btn =document.getElementById("btn");
var secenekler=document.getElementsByName("answer");
var quiz=document.getElementById("quiz")
var list=document.getElementById("list")
var score=document.getElementById("score")
var time=document.getElementById("time")
let puan=0;
let sira=0;
let seconds =20;

function sorugetir(){
    secimsil()
console.log(sunucudandonen)
let siradakisoru=sunucudandonen.sorular[sira]

question.innerHTML=siradakisoru.soru
a_text.innerText=siradakisoru.a
b_text.innerText=siradakisoru.b
c_text.innerText=siradakisoru.c
d_text.innerText=siradakisoru.d
score.innerText=sira+"/6"
}

function secimsil(){
secenekler.forEach(secenek => {secenek.checked=false});
}
function secimal(){
let secim;
secenekler.forEach(secenek => {
if(secenek.checked==true){
secim=secenek.id

}
});
return secim
}

btn.addEventListener("click",()=>{
    time.innerHTML="00:00"
    seconds=20
const secimler=secimal()
if(secimler==sunucudandonen.sorular[sira].cavab){
    puan++;
}
sira++
if(sira<sunucudandonen.sorular.length){
    sorugetir()
}
else{
score.innerHTML=`
<h3>Question 6</h3> <br/>
Your score: ${puan}`
btn.innerHTML="Restart"
btn.style.background="red"
list.style.opacity="0"
question.style.display="none"
time.style.display="none"
btn.addEventListener('click',()=>{
location.reload();
})
}

})
var interval=setInterval(timer,1000);
function timer() {
time.innerHTML = "00"+":"+seconds;
 seconds--;

 seconds=seconds<10 ? '0'+seconds:seconds

 if(seconds==0){
 clearInterval(interval)
 time.innerHTML="00 : 00"
 score.innerHTML=`
 <h3>Question 6</h3> <br/>
 Your score: ${puan}`
 btn.innerHTML="Restart"
 btn.style.background="red"
 list.style.opacity="0"
question.style.display="none"
 time.style.display="none"
  btn.addEventListener('click',()=>{
 location.reload();
 })
 }

 }