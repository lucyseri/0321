'use strict';

const subCon=document.querySelector('.sub-con');

//id에 클릭 이벤트
const btn1=document.querySelector('#btn1');
btn1.addEventListener('click',(event)=>{
  console.log(event.type);
  subCon.style.width='400px';
  subCon.style.height='200px';
  subCon.style.border='1px solid #0000ff';
});

//class[0]에 더블클릭 이벤트
const btn2=document.querySelectorAll('.btn2');
btn2[0].addEventListener('dblclick',()=>{ //event없어도 돼
  console.log(event);
  console.log(event.type);
  subCon.style.lineHeight='200px';
  subCon.style.textAlign='center';
  subCon.innerText='SUBCON';
});


//mousedown: 눌렀을 때
btn2[1].addEventListener('mousedown',()=>{
  console.log(event.type);

});

//mouseup: 눌렀다가 뗏을때
btn2[1].addEventListener('mouseup',()=>{
  console.log(event.type);
  
});

//mouseover
btn2[2].addEventListener('mouseover',()=>{
  console.log(event.type);
  
});

//mouseout
btn2[2].addEventListener('mouseout',()=>{
  console.log(event.type);
  
});


const gnbLi=document.querySelectorAll('.gnb>ul>li')

gnbLi[0].addEventListener('mouseover',e=>{
  console.log(e.target.parentElement)
  
  const liTag=e.target.parentElement;
  console.log(liTag.children[1])
  
  liTag.children[1].style.display='block';
  
});


/*

*/


const btn=document.querySelector('button');
btn[4].addEventListener('mouseenter',()=>{
  console.log(event.type);

});
btn[4].addEventListener('mouseleave',()=>{
  console.log(event.type);

});
