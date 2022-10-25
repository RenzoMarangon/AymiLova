


//MOSTRAR//OCULTAR FOTOS

const carrouselElements = [...document.querySelectorAll('.carrousel__element')];



const eliminateEvent = (carrouselElements) =>{
    carrouselElements.forEach(e => e.removeEventListener('click',showModal))
}

const addImageToCarrousel = ( imgContainer, carrousel ) =>{

    //Busco las imagenes del carrousel especifico
    const imgs = [...imgContainer.getElementsByTagName('img')];

    const imgElementContainer = document.createElement('div');
     
    //Por cada imagen devuelvo la propiedad 'src' y creo un contenedor con la imagen
    imgs.forEach( img => {
        //Busco la propiedad 'src' y la recorto, se la agrego al elemento 'img' recien creado
        const imgSrc = document.createElement('img')
        imgSrc.src= `./img/${ img.src.split('/')[4] }`;
        imgSrc.alt=`${img.src.split('/')[4].split('-')[0]}`
        //le agrego la propiedad a la imagen y la agrego al contenedor
        const imgElement = document.createElement('div');
        imgElement.className='carrousel__element'
        imgElement.append(imgSrc);
        imgElementContainer.append(imgElement)
    })

    carrousel.append(imgElementContainer)

}

const createModal = () => {
    const modal = document.querySelector('.modal-container');

    modal.innerHTML =
    `
    <p class="modal__close-modal"><i class="fa-solid fa-circle-xmark"></i></p>

    <carrousel class="body">
        <div class="carrousel-container">

            <button aria-label="Anterior" class="carrousel__button-preview carrousel__button-preview__dropdown-7">
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <div class="carrousel-listx">
            </div>					


            <button aria-label="Anterior" class="carrousel__button-next carrousel__button-next__dropdown-7">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>

        <div role="tablist" class="carrousel-indicators__dropdown-7"></div>

    </carrousel>
    `
}

const hiddenModal = function( imgListContainer ) {

    let modal = document.querySelector(".modal-container");
    modal.style.height="0px"
    modal.innerHTML = '';

}


const showModal = function(){
    
    createModal();

    const modal = document.querySelector(".modal-container");
    const carrousel_list = modal.querySelector(".carrousel-listx");
    
    //Busco el nombre de cada imágen 
    const imgSrc = this.getElementsByTagName('img')[0].src;

    //pregunto si contienen una palabra clave y segun la palabra le agrego el contenido
    if(imgSrc.includes('Seminarios'))     carrousel_list.innerHTML = carrousel_list_seminarios;
    if(imgSrc.includes('gestion'))        carrousel_list.innerHTML = carrousel_list_gestion;
    if(imgSrc.includes('colaboraciones')) carrousel_list.innerHTML = carrousel_list_colaboraciones;
    if(imgSrc.includes('Converse'))       carrousel_list.innerHTML = carrousel_list_converse;
    if(imgSrc.includes('trabajos'))       carrousel_list.innerHTML = carrousel_list_trabajos;
    if(imgSrc.includes('Street'))         carrousel_list.innerHTML = carrousel_list_street;

    //Creo que glidr y muestro el modal
    glidrModal(carrousel_list);
    modal.style.height="100vh"

    //Boton X (para cerrar el modal)
    const crossModal = modal.querySelector('.modal__close-modal');
    crossModal.addEventListener('click',()=>{hiddenModal(carrousel_list)});
}




carrouselElements.forEach(e => {
    e.addEventListener('click',showModal);
})

const soyunsorete = 'eeee';








