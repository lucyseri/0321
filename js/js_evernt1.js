'use strict';
//UI이벤트
window.addEventListener('load', ()=>f1());
function f1(){
  console.log("load호출")
}

//unload : 권장X
window.addEventListener('beforeunload',()=>{
  alert("beforeunload 호출")
  console.log("beforeunload.");
});


window.addEventListener('unload',()=>{
  alert("unload 호출")
  console.log("unload 호출")
})

//error: 자바스크립트 객체(window) error를 발생시켰을 때
//resize: 
window.addEventListener('resize',(e)=>{
  console.log(e.target)
  console.log(e.target.innderWidth);

  if(e.target.innderWidth<=600){
    document.body.style.backgroundColor='#00ff00';
  }else{
    document.body.style.backgroundColor='#ffff00';
  }
});

//scroll event: 스크롤이 이동할 때 이벤트가 생김
window.addEventListener('scroll',(e)=>{
  const topscroll=document.documentElement.scrollTop;
  if(topscroll<=50){
    document.body.style.backgroundColor='#ffffff';
  }
  if(topscroll>50){
    console.log(topscroll)
    document.body.style.backgroundColor='#ffff00';

  }//여기에 else if를 쓰면 한번만 실행되고 안 됨
  if(topscroll>200){
    document.body.style.backgroundColor='#ff0000';
  }
});