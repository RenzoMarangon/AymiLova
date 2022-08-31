const newModal = document.createElement('div');

newModal.className='modal-container';

newModal.innerHTML = `
<p class="modal__close-modal"><i class="fa-solid fa-circle-xmark"></i></p>

<carrousel class="body">
    <div class="carrousel-container">

        <button aria-label="Anterior" class="carrousel__button-preview carrousel__button-preview__dropdown-7">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

        <!-- FOTOS -->
        <div class="carrousel__list_Seminarios">
            <div class="carrousel__element">
                <img src="./img/Seminarios-1.jpg" alt="Seminarios" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Seminarios-2.jpg" alt="Seminarios" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Seminarios-3.jpg" alt="Seminarios" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Seminarios-4.jpg" alt="Seminarios" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Seminarios-5.jpg" alt="Seminarios" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Seminarios-6.jpg" alt="Seminarios" />
            </div>
        </div>

        <div class="carrousel__list_gestion">
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-1.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-2.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-3.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-4.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-5.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-6.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-7.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-8.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-9.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-10.jpg" alt="Gestión cultural" />
            </div>
            <div class="carrousel__element">
                <img src="./img/gestion-cultural-11.jpg" alt="Gestión cultural" />
            </div>
        </div>

        <div class="carrousel__list_colaboraciones">
            <div class="carrousel__element">
                <img src="./img/colaboraciones-1.jpg" alt="Colaboraciones" />
            </div>
            <div class="carrousel__element">
                <img src="./img/colaboraciones-2.jpg" alt="Colaboraciones" />
            </div>
            <div class="carrousel__element">
                <img src="./img/colaboraciones-3.jpg" alt="Colaboraciones" />
            </div>
            <div class="carrousel__element">
                <img src="./img/colaboraciones-4.jpg" alt="Colaboraciones" />
            </div>
            <div class="carrousel__element">
                <img src="./img/colaboraciones-5.jpg" alt="Colaboraciones" />
            </div>
            <div class="carrousel__element">
                <img src="./img/colaboraciones-6.jpg" alt="Colaboraciones" />
            </div>

        </div>

        <div class="carrousel__list_news">
            <div class="carrousel__element">
                <img src="./img/news-Converse-1.jpg" alt="Converse Argentina" />
            </div>
            <div class="carrousel__element">
                <img src="./img/news-Converse-2.jpg" alt="Converse Argentina" />
            </div>
            <div class="carrousel__element">
                <img src="./img/news-Converse-3.jpg" alt="Converse Argentina" />
            </div>
            <div class="carrousel__element">
                <img src="./img/news-Converse-4.jpg" alt="Converse Argentina" />
            </div>
            <div class="carrousel__element">										
                <img src="./img/news-Converse-5.jpg" alt="Converse Argentina" />
            </div>
            <div class="carrousel__element">
                <img src="./img/news-Converse-6.jpg" alt="Converse Argentina" />
            </div>
            <div class="carrousel__element">
                <img src="./img/news-Converse-7.jpg" alt="Converse Argentina" />
            </div>
        </div>


        <div class="carrousel__list_trabajos">
            <div class="carrousel__element">
                <img src="./img/trabajos-1.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-2.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-3.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-4.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-5.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-6.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-7.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-8.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-9.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-10.jpg" alt="Aymi Lova" />
            </div>
            <div class="carrousel__element">
                <img src="./img/trabajos-11.jpg" alt="Aymi Lova" />
            </div>

        </div>

        <div class="carrousel__list_Street">
            <div class="carrousel__element">
                <img src="./img/Street-Art-1.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-2.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-3.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-4.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-5.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-6.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-7.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-8.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-9.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-10.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-11.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-12.jpg" alt="Street Art" />
            </div>
            <div class="carrousel__element">
                <img src="./img/Street-Art-13.jpg" alt="Street Art" />
            </div>

        </div>

        <button aria-label="Anterior" class="carrousel__button-next carrousel__button-next__dropdown-7">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>

    <div role="tablist" class="carrousel-indicators__dropdown-7"></div>

</carrousel>
`

//MOSTRAR//OCULTAR FOTOS

const carrouselElements = [...document.querySelectorAll('.carrousel__element')];

const createCarrousel = () => {
    const modalCarrousel = document.createElement('div');

}



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


const hiddenModal = function( imgListContainer ) {

    let modal = document.querySelector(".modal-container");
    modal.style.height="0px"
    imgListContainer.style.height="0px"
    imgListContainer.style.overflow="hidden";

    modal.innerHTML = newModal.innerHTML;
    console.log(modal)

}


const showModal = function(){
    
    const modal = document.querySelector(".modal-container");
    
    //Busco el contenedor de imágenes y el lugar donde las voy a guardar
    const imgSrc = this.getElementsByTagName('img')[0].src;
    //Busco el nombre que este despues de './img/...' -> ej: Seminarios-3.jpg
    //Luego saco el guion y me quedo con 'Seminarios'
    let imgName = imgSrc.split('/')[imgSrc.split('/').length-1]
    imgName = imgName.split('-')[0]

    const imgListContainer = modal.querySelector(`.carrousel__list_${ imgName }`);
    imgListContainer.style.height="85vh";


    glidrModal(imgListContainer);

    
    const crossModal = modal.querySelector('.modal__close-modal');
    crossModal.addEventListener('click',()=>{hiddenModal(imgListContainer)});

    modal.style.height="100vh"
    
}




carrouselElements.forEach(e => {
    e.addEventListener('click',showModal);
})








