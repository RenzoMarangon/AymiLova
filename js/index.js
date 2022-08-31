
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


//MOSTRAR//OCULTAR FOTOS

const carrouselElements = [...document.querySelectorAll('.carrousel__element')];

const hiddenModal = function(carrousel,carrouselParent) {
    const modal = document.querySelector(".modal-container");
    carrouselParent.append(carrousel);

    modal.innerHTML='<p class="modal__close-modal"><i class="fa-solid fa-circle-xmark"></i></p>'
    modal.style.height="0px"

    carrouselElements.forEach(e => {
        e.addEventListener('click',showModal);
    })
}

const eliminateEvent = (carrouselElements) =>{
    carrouselElements.forEach(e => e.removeEventListener('click',showModal))
}

const showModal = function(){
    eliminateEvent(carrouselElements)

    const modal = document.querySelector(".modal-container");

    const carrousel = this.parentElement.parentElement.parentElement.parentElement;
    const carrouselParent = carrousel.parentElement;
    
    modal.append(carrousel)

    modal.style.height="100vh";

    const crossModal = modal.querySelector('.modal__close-modal');
    crossModal.addEventListener('click',()=>{hiddenModal(carrousel,carrouselParent)});

    
}


carrouselElements.forEach(e => {
    e.addEventListener('click',showModal);
})











