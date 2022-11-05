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