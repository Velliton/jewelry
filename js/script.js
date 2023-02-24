$(document).ready(function() {
    $('.main-slider').slick({
        arrows: true,
        dots: true,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight:true,        
    });

    $('.sale__slider').slick({
        arrows: true,
        dots: false,
        cssEase: 'linear',
        slidesToShow: 4,
        adaptiveHeight:true, 
        swipe: false       
    });

    $('.sale__item__slider').slick({
        arrows: false,
        dots: true,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight:true,        
    });

})


