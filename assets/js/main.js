$( document ).ready(function() {
    $( ".login-button" ).on( "click", function() {
        $('.login-form').slideToggle(500);
    });
    $( ".menu-button" ).on( "click", function() {
        $('.nav-menu').slideToggle(500);
    });
        $('.more-details-button').on('click', function () {
        $(event.currentTarget).closest('.product-details').next().slideToggle(500);
    $(event.currentTarget).find('img').toggleClass('rotate');
    });

    $('.shoe-details li').on('click', function () {
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active');
        $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled');
    });
    $('.product-photo').on('mouseenter', function () {
        $(this).addClass('photo-active');
}).on('mouseleave', function() {
        $(this).removeClass('photo-active');
    });

});