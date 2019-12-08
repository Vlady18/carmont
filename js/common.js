
$(function(){
    $('.continue_step').click(function(e){
        e.preventDefault();
        $('#vl_form .wrap_form .second_step').addClass('dbbl')
        $('.dark_overlay').addClass('dbbl');
    })
    $('.hint ul li a').on('click', function(e){
        e.preventDefault();
    })
    $('.relet_inp a.how').click(function(e){
        e.preventDefault();
    })
    $('.steps_form-search_page').click(function(){
        $('.dark_overlay').addClass('dbbl')
        $('header.search_head .main_head .search_repair .zayavka').addClass('dbbl')
    })
    $('.hint ul li').on('click', function(){
        $('.search_field').css('display', 'flex')
        $('#banner_main .zayavka').removeClass('dbbl');
        $('.relet_inp a.how').removeClass('dbbl');
        $('.hint ul li').removeClass('active_search');
        $(this).addClass('active_search');
        var newPlaceholder = $(this).data('place');
        $('.search_field input').attr('placeholder', newPlaceholder);
    });
    $('.hint ul li.steps_form').on('click', function () {
        $('.zayavka').addClass('dbbl');
        $('.search_field').css('display', 'none')
    })

    $('.hint ul li.VIN').on('click', function(){
        // if($(this).parent().hasClass('active_search')){}
        $('.relet_inp a.how').addClass('dbbl');
    });
    $('.zayavka .select').click(function(){
        $('.transparent_overlay').addClass('dbbl')
        if($(this).find('.option_wrapper').hasClass('dbbl')){
            $(this).find('.option_wrapper').removeClass('dbbl');
        }
        else{
            $('.option_wrapper').removeClass('dbbl');
            $(this).find('.option_wrapper').addClass('dbbl');
        }
    })
    $('.transparent_overlay').click(function(){
        $('.option_wrapper').removeClass('dbbl');
        $(this).removeClass('dbbl');
    })
    $('.option_wrapper ul li').click(function(){
        let currentVar = $(this).text();
        $(this).parent().parent().siblings('input').val(currentVar);
        $(this).addClass('active_li');
        $(this).parent().parent().siblings('.title_select').html(currentVar);
        // $(this).parent().parent().removeClass('dbbl');
        // $('.option_wrapper').removeClass('dbbl');
    });

    $('.mobile_bars').click(function(){
        $('.overlay').toggleClass('add_block');
        $('header .top_head nav').toggleClass('add_block');
    })
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
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});