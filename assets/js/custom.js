$(document).ready(function(){

    $('.menu-icon').click(function(){
        $('.menu-items').slideToggle();
    })


    // contact slider//

    $('.contact-slider').owlCarousel({
        responsive: {
            0 : {
                items: 2
            },
            767 : {
                items: 3
            },
            1200 : {
                items: 4
            },
        }
    });





})