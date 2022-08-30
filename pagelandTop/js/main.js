let loader = document.getElementById("content-loader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});


/** Scrolltop */
let link = $(".navbar-nav a");
let topo = $(".scrolltop");
let navlink = $(".display-ul li a");
let scrollEx = $("#contact-form");
let scrollDex = $(".direct-contact-container");
let scrollBex = $(".footer");

$(window).scroll(function() {
    let minhaposicao = $(this).scrollTop();
    if(minhaposicao >= 3000) {
        document.querySelector('form#contact-form.form-horizontal').classList.add('slide-in-left');
        scrollEx.fadeIn();        
    }else {
        document.querySelector('form#contact-form.form-horizontal').classList.remove('slide-in-left');
        scrollEx.fadeOut();
    }
});

$(window).scroll(function() {
    let minhaposicao = $(this).scrollTop();
    if(minhaposicao >= 3000) {
        document.querySelector('.direct-contact-container').classList.add('slide-in-right');
        scrollDex.fadeIn();        
    }else {
        document.querySelector('.direct-contact-container').classList.remove('slide-in-right');
        scrollDex.fadeOut();
    }
});

$(window).scroll(function() {
    let minhaposicao = $(this).scrollTop();
    if(minhaposicao >= 3535) {
        document.querySelector('.footer').classList.add('slide-in-top');
        scrollBex.fadeIn();        
    }else if(minhaposicao < 3535)   {
        document.querySelector('.footer').classList.remove('slide-in-top');
        scrollBex.fadeOut();
    }
});


$(window).scroll(function() {
    let minhaposicao = $(this).scrollTop();
    if(minhaposicao >= 1200){
        document.querySelector('a#scroll-top.scrolltop').classList.add('tracking-in-contract');
        topo.fadeIn();
    }else {        
        topo.fadeOut();
    }
});

link.on("click", function() {
    let seletor = $(this).attr("href");
    let posicao = $(seletor).offset().top;
    $("html, body").animate({scrollTop: posicao-70},1500);
});

topo.on("click", function() {
    $("html, body").animate({scrollTop: 0},500);
});

navlink.on("click", function () {
    let seletor = $(this).attr("href");
    let posicao = $(seletor).offset().top;
    $("html, body").animate({scrollTop: posicao-70},1500);
});



/*	gallery */
$(document).ready(function() {

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});


/* contato */

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
