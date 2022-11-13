// abre e fecha o menu quando clicar no icone
const nav = document.querySelector("#header nav") /*a const vai buscar o seletor do css*/
const toggle = document.querySelectorAll ("nav .toggle")

for(const element of toggle) {/*constante chamada element para cada toggle, ele imprime quantos toggles tiver*/
    element.addEventListener('click', function() /*add um evento ouvinte*/ {
        nav.classList.toggle('show')/*toggle = troca (quando clicar no elemento toggle ira mudar para o show, definido no css)*/
    })
}

//quando clicar no item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a') //procura todos os seletores e atribui a const

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show') //classlist = a lista de classe que eu dei
    })
}

//mudar o header da página quando der o scroll não ta funcionando essa bosta
 const header = document.querySelector('#header')
 const navHeight = header.offsetHeigth //deslocamento da altura 
function changeHeaderWhenScroll() {
     if(window.scrollY >= navHeight){
         //scroll é maior que altura do header
         header.classList.add('scroll')
     } else {
        //menor que a altura do header 
        header.classList.remove('scroll')
     }
 }

/* Testimonials carousel slider swiper*/ 
const swiper = new Swiper('.swiper', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

/*ScrollReveal: Mostrar elementos quando der scroll na página*/ 
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: 'true'
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testmonials,
    #contact .text, #contact .links, footer .brand, footer .social`, {interval: 100})
    

 /*Botão voltar para o topo*/ 
 const backToTopButton = document.querySelector(".top")
 window.addEventListener("scroll", function() {
    if (window.scrollY >= 560) {
            backToTopButton.classList.add('show')
        }else {
            backToTopButton.classList.remove('show')
        }
    
 })
