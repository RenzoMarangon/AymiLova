const glidrModal = function(carrousel){
    new Glider(carrousel, {
        draggable: true,
        dots: `.carrousel-indicators__dropdown-7`,
        arrows: {
          next: `.carrousel__button-next__dropdown-7`,
          prev: `.carrousel__button-preview__dropdown-7`,
        },
        duration: 1,
        responsive: [
          {

            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });
}
