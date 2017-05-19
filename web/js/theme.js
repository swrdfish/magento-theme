define([
    'jquery',
    'domReady!'
], function($) {

    /* Sticky Navigation
    -------------------------------------------------------*/
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50 && $('.navbar-toggle').is(":hidden")){
            $('.navigation-overlay, .navigation').addClass("sticky");
            $('.logo-wrap').addClass("shrink");
            $('.nav-left .logo-wrap').removeClass("shrink");
        } else {
            $('.navigation-overlay, .navigation').removeClass("sticky");
            $('.logo-wrap').removeClass("shrink");
        }

        if ($(window).scrollTop() > 200 && $('.navbar-toggle').is(":hidden")){
            $('.navigation').addClass("offset");
        } else {
            $('.navigation').removeClass("offset");
        }

        if ($(window).scrollTop() > 500 && $('.navbar-toggle').is(":hidden")){
            $('.navigation').addClass("scrolling");
        } else {
            $('.navigation').removeClass("scrolling");
        }
    });
});