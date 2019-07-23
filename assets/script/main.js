
$(document).ready(function(){

    // header stick to top on scroll

    $(window).scroll(function() {
        var distanceFromTop = $(this).scrollTop();
        if (distanceFromTop >= $('#header').height()) {
            $('#sticky').addClass('fixed');
        } else {
            $('#sticky').removeClass('fixed');
        }
    });

    //res
    $(window).scroll(function() {
        var distanceFromTop = $(this).scrollTop();
        if (distanceFromTop >= $('#header').height()) {
            $('#responsive-sticky').addClass('fixed');
        } else {
            $('#responsive-sticky').removeClass('fixed');
        }
    });

    // header stick to top on scroll --end


    // back to top btn

    $("#toTop").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
     });

     // back to top btn --end


     // scroll on element

     $("#ContactNav").click(function() {
        $('.active-header-link').removeClass('active-header-link');
        $('#ContactNav').addClass('active-header-link')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Contact").offset().top-60
        }, 500);
    });

     $("#NextDivArrow").click(function() {
        $('.active-header-link').removeClass('active-header-link');
        $('#ProjectsNav').addClass('active-header-link')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Projects").offset().top-60
        }, 500);
    });

    $("#ProjectsNav").click(function() {
        $('.active-header-link').removeClass('active-header-link');
        $('#ProjectsNav').addClass('active-header-link')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Projects").offset().top-60
        }, 500);
    });

    $("#AboutNav").click(function() {
        $('.active-header-link').removeClass('active-header-link');
        $('#AboutNav').addClass('active-header-link')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#About").offset().top-60
        }, 500);
    });

    //res

    $("#resContactNav").click(function() {
        $('.active-header-link').removeClass('active-header-link');
        $('#resContactNav').addClass('active-header-link')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Contact").offset().top-60
        }, 500);
    });

    $("#resProjectsNav").click(function() {
        $('.active-header-link').removeClass('active-header-link');
        $('#resProjectsNav').addClass('active-header-link')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Projects").offset().top-60
        }, 500);
    });

    $("#resAboutNav").click(function() {
        $('.active-header-link').removeClass('active-header-link');
        $('#resAboutNav').addClass('active-header-link')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#About").offset().top-60
        }, 500);
    });

    // scroll on element --end



    // swiper for projects-more.html

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 1
            },
            920: {
                slidesPerView: 2
            }
        }
    });

    // swiper for projects-more.html --end

});