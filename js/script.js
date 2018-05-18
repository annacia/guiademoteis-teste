$(document).ready(function(){
    $('.slider-unico').slick({
        dots: false,
        centerPadding: '0px',
        speed: 700,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        arrows: false
    });

    if(navigator.vendor!=='Google Inc.') {
        console.log("AAYTDYUASDGUY");
        $('#img-header').attr('style', 'height: 800px;');
    }
});
