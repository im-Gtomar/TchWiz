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



data = [
  {name: "Drafter", src: "https://www.kokuyocamlin.com/camlin/camel-access/image/catalog/assets/camlin/geometry-box/technical-instruments/student-mini-drafter/individual-instrument/2.JPG"},

  {name: "Chemistry Lab Coat", src: "https://campusstore.ucsb.edu/storeimages/108-984490-1.jpg"},
  {name: "Calculator", src: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbGN1bGF0b3J8ZW58MHx8MHx8fDA="},
  {name: "Table Lamp", src: "https://m.media-amazon.com/images/I/81lsXXUWzpL._SX679_.jpg"},
  {name: "Electrical Quantum 1st Year", src: "https://ahooza.com/wp-content/uploads/2022/09/a14-16.webp"},
  {name: "Mechanical Quantum 1st Year", src: "https://ahooza.com/wp-content/uploads/2023/10/1-10.webp"},
  {name: "Engineering Mathematics Vol 3 By HK Das", src: "https://m.media-amazon.com/images/I/71vbjZ-PWuL._AC_UF1000,1000_QL80_.jpg"},
  
  {name: "ENGINEERING Physics- II 2nd semester", src: "https://m.media-amazon.com/images/I/81VVAeVYJqL._AC_UF1000,1000_QL80_.jpg"},
 
  {name: "fancy trolley suitcase", src: "https://5.imimg.com/data5/ANDROID/Default/2022/12/LO/EX/OW/29789006/product-jpeg-500x500.jpg"},

  {name: "Backpack", src: "https://m.media-amazon.com/images/I/716lyn7UFdL._AC_UY1100_.jpg"},
  {name: "Study Table", src: "https://www.firstcrawl.in/cdn/shop/products/9992751c_800x.jpg?v=1664118349"},
  {name: "Chair", src: "https://5.imimg.com/data5/SELLER/Default/2022/1/UU/MQ/RW/33416508/second-hand-and-used-chair.JPG"},
  
  
]
document.querySelector(".people").innerHTML = pers;
var pers = "";

data.forEach(function(elem) {
  pers += `<div class="person">
                 <div class="img">
                  <img src="${elem.src}" alt="">
                 </div>
                  <h4>${elem.name}</h4>
            <button>BUY NOW</button>
              </div>`
  
});
document.querySelector(".people").innerHTML = pers;

document.querySelector("#input").addEventListener("#input", function(){
  var matching = data.filter(function(e){
     return e.name.startsWith(document.querySelector("#input").value)
  })
  var newusers = "";
  matching.forEach(function(elem) {
      newusers += `<div class="person">
                     <div class="img">
                      <img src="${elem.src}" alt="">
                     </div>
                      <h4>${elem.name}</h4>
            <button>BUY NOW</button>

                  </div>`
      
  });
  document.querySelector(".people").innerHTML = newusers;
})
var t1 = gsap.timeline();
t1.from("nav", {
  opacity:0,
  y:-50 ,
  duration:0.4,
  // delay:0.4,
 

})
t1.from(".person", {
  opacity:0,
  y:-50 ,
  duration:0.8,
  delay:0.1,
  stagger:0.2,

})