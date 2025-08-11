
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

//  ScrollReveal({
//     reset: false ,
//     distance:'40px',
//     duration:2500,
    
//    });

//    ScrollReveal().reveal('.content,.c2',{delay:200,origin:'bottom'});
//    ScrollReveal().reveal('.s-text h1,.s-text p,.projects h1',{delay:200,origin:'bottom'});
//    ScrollReveal().reveal('.s1,.c1',{delay:200,distance:'70px',origin:'left'});
//    ScrollReveal().reveal('.s2,.c3',{delay:200,distance:'70px',origin:'right'});
   


const type=new Typed(".typed",{
   strings:["Wedding Card", "Invitation card","Packaging Item","Booklets and Brochures","Letterheads","Business cards"],
   typeSpeed:50,
   backSpeed:10,
   loop:true
});

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
   spaceBetween:50,
   slidesPerGroup: 1,
   centeredSlides: true,
   loopFillGroupWithBlank: true,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

function Mail(){
   let name=document.getElementById("name").value;
   let email=document.getElementById("email").value;
   let msg=document.getElementById("msg").value;
   Email.send({
      SecureToken: "c6c0381a-3899-40f7-b358-e4bca5206f0b",
      To : 'utkarshmaan91@gmail.com',
      From : "utkarshmaan.cse19@jimsgn.org",
      Subject : "New Message on Website",
      Body : "Name: "+ name + "<br/>Email: " +email +
      "<br/>Message: " +msg,
  }).then(
    message => alert(message)
  );
}