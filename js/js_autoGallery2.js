'use strict';
//setTimeOut
const gallery=document.querySelector('.gallery');
const galleryLi=document.querySelectorAll('.gallery>ul>li');

let i=-1;
function autoGallery(){
  i++;
  console.log(`i -> ${i}`);

  const gap=galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
  const goto=(-i*gap)+'px';

  gallery.style.left=goto;
  gallery.style.transition='all 0.5s';
  
  if(i>=galleryLi.length-1) i=-1;

  setTimeout(autoGallery,3000);
}

//3초 마다 실행
//setInterval(autoGallery, 3000);


//3초 후 한번만 실행
/*
let j=-1;
setTimeout(()=>{
  j++;
  console.log(`j -> ${j}`)
},3000);
*/

(()=>{
  autoGallery(); //인자가 되는 함수 = 콜백함수
})();

