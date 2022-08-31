
//DROPDOWNS
const dropdowns = document.querySelectorAll('.dropdown__title');

const showContent = function() {

    const dropdown = this.parentElement;
    const body =  dropdown.querySelector('.dropdown__body')
    const currentHeight = body.offsetHeight;
    const height = body.scrollHeight;

    if(currentHeight === 0){
        body.style.background = "#fff";
        body.style.height = height+"px";
    }else{
        body.style.height = 0;
    }

}

dropdowns.forEach(e => {
    e.addEventListener('click',showContent);
})


//MENU DESPLEGABLE MOBILE
const menuHamburguesa = document.querySelector('.header-container__hamburguer');
let links = document.querySelector('.header-container__links').getElementsByTagName('li');
links = [...links]

const showHiddenLinks = ()=>{
    const linksContainer = document.querySelector('.header-container__links');
    const lnksContainerWidth = linksContainer.clientWidth;
    

    if (lnksContainerWidth == 0 ){
        //SI ESTÁ CERRADO QUE LO MUESTRE
        linksContainer.style.width = "100%";
        document.body.style.height="100vh"
        document.body.style.overflow="hidden";
    }else{
        //OCULTO EL MENU
        linksContainer.style.width = "0";
        document.body.style.height="100%"
        document.body.style.overflow="visible";

    }  
}

//PARA QUE AL APRETAR EL CONTENEDOR DEL LINK, TE LLEVE IGUAL
const createButtonLinks = ( link )=>{
    const btn = link.querySelector('a');
    link.addEventListener('click',()=>{
        btn.click();
    })
    
}

//Responsive
if(document.body.clientWidth <= 900){
    menuHamburguesa.addEventListener('click', showHiddenLinks);
    
    links.forEach(e => {
        e.addEventListener('click',showHiddenLinks);
        createButtonLinks(e);
    })
}















