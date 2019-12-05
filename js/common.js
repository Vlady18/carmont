$(function(){
    $('.hint ul li').on('click', function(){
        $('.hint ul li').removeClass('active_search');
        $(this).addClass('active_search');
        var newPlaceholder = $(this).data('place');
        $('.search_field input').attr('placeholder', newPlaceholder);
    });
    $('.say_wrap-review').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="slick-prev" src="..//img/prev_arrow.png">',
        nextArrow: '<img class="slick-next" src="..//img/next-arrow.png">',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});