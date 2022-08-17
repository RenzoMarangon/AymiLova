const dropdowns = document.querySelectorAll('.dropdown');

const showContent = function() {
    const body = this.querySelector('.dropdown__body')
    console.log(body)
    const currentHeight = body.offsetHeight;
    const height = body.scrollHeight;

    if(currentHeight === 0){
        body.style.background = "#fff";
        console.log('siuuu')
        body.style.height = height+"px";
    }else{
        body.style.height = 0;
        console.log('niuuu')
    }

}

dropdowns.forEach(e => {
    e.addEventListener('click',showContent);
})

if(window.innerWidth < 900 ){
    const mancha = document.getElementsByClassName('mancha-cruz-contacto');
    mancha[0].src = '../img/cruz-roja-contacto.png'
}


