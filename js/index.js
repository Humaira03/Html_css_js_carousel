
let slideIndex = 0;


// Next/previous controls


function showSlides(n) {
  
  const slides = document.getElementsByClassName("slide");
  console.log(slides.length);
  if (n === slides.length-1) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length-1}
  for (let i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "flex";
  console.log(slideIndex);
}
$(function(){
  //   setInterval(function(){
  //  console.log(slideIndex);
     showSlides(slideIndex)
  //   },3000) 
       $("#left").click(function(){
         showSlides(slideIndex)
       }) 
     $("#right").click(function(){
         showSlides(slideIndex)
       }) 
     
})