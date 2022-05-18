var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin: 80,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('prev.owl');
    } else {
        owl.trigger('next.owl');
    }
    e.preventDefault();
});