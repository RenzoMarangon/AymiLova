const glidr = function(carrousel,i){
    new Glider(carrousel, {
        draggable: true,
        dots: `.carrousel-indicators__dropdown-${i}`,
        arrows: {
          next: `.carrousel__button-next__dropdown-${i}`,
          prev: `.carrousel__button-preview__dropdown-${i}`,
        },
        duration: 2
        ,
        responsive: [
          {
            // screens greater than >= 900px
            breakpoint: 900,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },{
            breakpoint: 450,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,            
            }
          },{
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });
}


const carrousels = document.querySelectorAll('.carrousel__list');

let i=1;
carrousels.forEach( carrousel => {
    glidr(carrousel,i) 
    i++;
})
