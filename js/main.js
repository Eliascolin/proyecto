
var nome = window.prompt("Qual e teu nome?");
window.alert (`bem-vindo ao meu site ${nome} aqui poderá ver algum dos meus projetos como desenvolvedor web para ver mais projetos pode visitar meu git hub`);

var oNome = window.document.getElementById('o-nome')

oNome.innerText =  nome


var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
    breakpoints:{
     320:{
      slidesPerView: 1.3,
      
     },

     768:{
      slidesPerView: 2.3
     }, 


     991:{
      slidesPerView: 2.8,
      
     },
     1200:{
      slidesPerView: 3.5,
      
     },

    }
   
  });


  AOS.init({
    duration: 1000,
    once: true,
  });



 

 
