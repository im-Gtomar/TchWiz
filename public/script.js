var currentImg = 0;
var imgs = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
var interval = 3000;

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

var t1 = gsap.timeline();
t1.from("nav", {
  opacity:0,
  y:-50 ,
  duration:0.4,
  // delay:0.4,
 

})
t1.from(".container .item ", {
  opacity:0,
  y:-50 ,
  duration:0.8,
  delay:0.1,
  stagger:0.2,

})

