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

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  } else {
    currentImg = (currentImg + 1) % imgs.length;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

data = [
  {name: "Drafter", src: "https://www.kokuyocamlin.com/camlin/camel-access/image/catalog/assets/camlin/geometry-box/technical-instruments/student-mini-drafter/individual-instrument/2.JPG", price: 120 , des: "A drafter is a crucial tool for graphical students. It combines the functions of a T-square, protractor, and set squares, allowing for precise technical drawings and designs" },

  {name: "Chemistry Lab Coat", src: "https://campusstore.ucsb.edu/storeimages/108-984490-1.jpg", price: 160},
  {name: "Calculator", src: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbGN1bGF0b3J8ZW58MHx8MHx8fDA=", price: 490},
  {name: "Table Lamp", src: "https://m.media-amazon.com/images/I/81lsXXUWzpL.SX679.jpg", price: 200},
  {name: "Electrical Quantum", src: "https://ahooza.com/wp-content/uploads/2022/09/a14-16.webp", price: 150},
  {name: "Mechanical Quantum", src: "https://ahooza.com/wp-content/uploads/2023/10/1-10.webp", price: 150},
  {name: "Mathematics Vol 3", src: "https://m.media-amazon.com/images/I/71vbjZ-PWuL.AC_UF1000,1000_QL80.jpg", price: 100},
  
  {name: "Physics- II 2nd sem", src: "https://m.media-amazon.com/images/I/81VVAeVYJqL.AC_UF1000,1000_QL80.jpg", price: 180},
 
  {name: "Fancy trolley suitcase", src: "https://5.imimg.com/data5/ANDROID/Default/2022/12/LO/EX/OW/29789006/product-jpeg-500x500.jpg", price: 550},

  {name: "Backpack", src: "https://m.media-amazon.com/images/I/716lyn7UFdL.AC_UY1100.jpg", price: 780},
  {name: "Study Table", src: "https://www.firstcrawl.in/cdn/shop/products/9992751c_800x.jpg?v=1664118349", price: 420},
  {name: "Chair", src: "https://5.imimg.com/data5/SELLER/Default/2022/1/UU/MQ/RW/33416508/second-hand-and-used-chair.JPG", price: 360},
  
];

var pers = '';
data.forEach(function(elem) {
  pers += `<div class="person">
                 <div class="img">
                  <img src="${elem.src}" alt="">
                 </div>
                  <h4>${elem.name}</h4>
                  <h3>${elem.price}</h3>
                   
                  

            <button class="buy-now">BUY NOW</button>
              </div>`;
});

document.querySelector(".people").innerHTML = pers;

const persons = document.querySelectorAll('.person')

persons.forEach(function(person) {
  person.querySelector('.buy-now').addEventListener('click', function() {
    document.querySelector('#description').style.display = 'block';
    // console.log(person.querySelector('img').src);
    const descriptionImg = document.querySelector('#abs');
    if (descriptionImg) {
      descriptionImg.src = person.querySelector('img').src;
      document.querySelector('h4').textContent = person.querySelector('h4').textContent;
    // console.log(person.querySelector('h4').textContent);
    document.querySelector('h3').textContent = "price: " + person.querySelector('h3').textContent+ "rs";
    document.querySelector('p').textContent = "Description: " + person.querySelector('p').textContent;
{/* <p>${elem.des}</p> */}

    }
  });
});
document.querySelector("#close").addEventListener('click',function(){
  document.querySelector('#description').style.display = 'none';

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

