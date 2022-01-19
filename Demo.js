var imgs=Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer=document.querySelector(".lightBoxContainer");
 var lightBoxItem=document.querySelector(".lightBoxItem");
 var next=document.getElementById("next");
 var close=document.getElementById("close");
 var prev=document.getElementById("prev");
 var  ImgIndex=0;
for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",(event) => {
      console.log(event);
      ImgIndex=imgs.indexOf(event.target);
      console.log(ImgIndex);
      
lightBoxContainer.style.display="flex";
        var src=event.target.src;
      lightBoxItem.style.backgroundImage="url("+src+")";
    })
}
next.addEventListener("click",nextBtn);
prev.addEventListener("click",prevBtn);
close.addEventListener("click",closeBtn);
function nextBtn(){
  ImgIndex++;
  if(ImgIndex==imgs.length){
    ImgIndex=0;
  }
  console.log(ImgIndex);
  var src= imgs[ImgIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage="url("+src+")";
}
function prevBtn(){
  ImgIndex--;
  if(ImgIndex < 0){
    ImgIndex=imgs.length-1;
  }
  var src= imgs[ImgIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage="url("+src+")";
}
function closeBtn(){
 lightBoxContainer.style.display="none";
}
document.addEventListener("keydown",(event) => {
  console.log(event);
  if(event.code=="ArrowRight"){
    nextBtn();
  }
  else if(event.code=="ArrowLeft"){
    prevBtn();
  }
  else if(event.code=="Escape"){
    closeBtn();
  }
})