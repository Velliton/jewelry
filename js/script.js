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
        swipe: false,
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow:3
                }
            
            },
            {
                breakpoint: 900,
                settings:{
                    slidesToShow:2
                }
            
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow:1
                }
            
            }
        ]

    });

    $('.sale__item__slider').slick({
        arrows: false,
        dots: true,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight:true,        
    });
   
    $('.product__item__slider').slick({
        arrows: true,
        dots: false,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight:true,
          
    });
    $('.product__slider').slick({
        arrows: true,
        dots: false,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight:true,
        swipe: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
                
    });
})


