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

const showModal = (url) =>{
    const modal = document.querySelector(".modal-container");
    let modalImage = modal.getElementsByTagName('img')[0]
    modalImage.src = url
    modal.style.display="flex";
}

const hiddenModal = function() {
    const modal = this.parentElement;
    modal.style.display="none"
}

const showImages = function(){
    //RECORTAR URL
    const image = this.getElementsByTagName('img')[0];
    let url = image.src.split('/');
    console.log(url[1])
    console.log(url[2])
    console.log(url[3])
    console.log(url[4])
    console.log(url[5])
    url = `${document.URL}img/${url[6]}`;
    console.log(url)
    showModal(url);
}

carrouselElements.forEach(e => {
    e.addEventListener('click',showImages);
})

const crossModal = document.querySelector('.modal__close-modal');

crossModal.addEventListener('click',hiddenModal);







