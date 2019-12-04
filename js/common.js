$(function(){
    $('.hint ul li').on('click', function(){
        $('.hint ul li').removeClass('active_search');
        $(this).addClass('active_search');
        var newPlaceholder = $(this).data('place');
        $('.search_field input').attr('placeholder', newPlaceholder);
    });
    $('.say_wrap-review').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
    });

});