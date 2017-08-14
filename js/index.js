'use strict';

$(document).ready(function(){
    document.body.style.visibility = "visible";
    $("body").hide().fadeIn(300);
    setTimeout(function(){
        setTimeout(function(){
            for (var x = 0; x < 3; x++) {
                (document.getElementsByClassName("intro_button"))[x].style.visibility = "visible";
            }
            $("i#intro_facebook").hide().slideDown(2000);
            $("i#intro_twitter").hide().slideDown(2000);
            $("i#intro_insta").hide().slideDown(2000);
        }, 3000);
        document.getElementById("thirsty_souls_text").style.visibility = "visible";
        $("#thirsty_souls_text").hide().fadeIn(4000);
    }, 1000);

    // slick
    $('.carousel').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
