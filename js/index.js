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

if(window.innerWidth < 900 ){
    const mancha = document.getElementsByClassName('mancha-cruz-contacto');
    mancha[0].src = '../img/cruz-roja-contacto.png'
}


