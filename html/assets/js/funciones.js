/*var slideRight = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-right',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

jQuery(document).on('click', '#c-button--slide-right', function(e) {
    e.preventDefault;
    slideRight.open();
});*/
var altocabecera = "";

function arreglarinicio()
{
    altocabecera = jQuery("header.cabecera").innerHeight();
    jQuery(".seccion-principal").css({"padding-top":altocabecera});
}

jQuery(window).on("load",function() {
    arreglarinicio();
	jQuery(".overlay").fadeOut("slow",function(){
		jQuery("body").removeClass("preloader");
	});
});

jQuery(window).resize(function() {
    arreglarinicio();
});

jQuery(document).ready(function(){

    jQuery(".btn-menu").click(function(e){
        e.preventDefault();
        cerrar()
    });

    jQuery(".btn-cerrar").click(function(e){
        e.preventDefault();
        cerrar();
        jQuery('li.menu-item-has-children span').closest("li").find("ul.sub-menu").slideUp();
        jQuery('li.menu-item-has-children span i').removeClass( "fa-chevron-up" );
    });

    jQuery('li.menu-item-has-children span').click(function(e){
        jQuery(this).closest("li").find("ul.sub-menu").first().stop().slideToggle();
        jQuery(this).find("i").toggleClass( "fa-chevron-up" );
    });

    if(window.location.hash)
    {

        var tag = window.location.hash;

        if(jQuery(tag).length > 0)
        {

            jQuery('html,body').animate({
            scrollTop: jQuery(tag).offset().top 
            },1000, 'swing',function(){
               /* jQuery('nav#submenu a').removeClass('active');
                jQuery('nav#submenu a').each(function () {
                    var tagsecundario =  jQuery(this).attr("href");
                    if(tag === tagsecundario)
                    {
                       jQuery(this).addClass('active') 
                    }
                })*/
            });
        }
    }


	jQuery('nav#c-menu--slide-right a[href^="#"],.menu-principal a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        /*jQuery('header a').each(function () {
            jQuery(this).closest( "li" ).removeClass('active');
        });

        jQuery(this).closest( "li" ).addClass('active') */       
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 
            jQuery('html, body').stop().animate({
                'scrollTop': target.offset().top}, 700, 'swing', function () {
                window.location.hash = menu;
            });
        }
    });

    jQuery(".btn-verinformacion").click(function(e){
        e.preventDefault(); 
        jQuery(this).slideUp("fast",function(){
            jQuery(".bloque-proyecto-detalle").slideDown("fast");
        });
    });

    jQuery(".btn-ocultar").click(function(e){
        e.preventDefault(); 
        jQuery(".bloque-proyecto-detalle").slideUp("slow",function(){
            jQuery(".btn-verinformacion").slideDown("slow");
        });
    });

    jQuery('.proyecto-redes a').click(function(e) {
        e.preventDefault();
        var url = jQuery(this).attr("href");
        var left = Number((screen.width / 2) - (700 / 2));
        var top = Number((screen.height / 2) - (500 / 2));
        window.open(url, "", 'height=500,width=500,top=' + top + ',left=' + left);
    });

    jQuery('.lista-banner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    jQuery('.lista-imagenes').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: jQuery('.prev'),
        nextArrow: jQuery('.next'),
        responsive: [
            
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.slider-nav',
        prevArrow: jQuery('.prev'),
        nextArrow: jQuery('.next'),
    });

    jQuery('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
    });
});

function cerrar()
{
    jQuery(".menu").toggleClass("open");
    jQuery("body").toggleClass("open");
}