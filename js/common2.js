$(function() {
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $( "#datepicker" ).datepicker();

});
$(document).ready(function(){
    // $(".vl_header").on("click",".request", function (event) {
    //     //отменяем стандартную обработку нажатия по ссылке
    //     event.preventDefault();
    //
    //     //забираем идентификатор бока с атрибута href
    //     var id  = $(this).attr('href'),
    //
    //         //узнаем высоту от начала страницы до блока на который ссылается якорь
    //         top = $(id).offset().top;
    //
    //     //анимируем переход на расстояние - top за 1500 мс
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });




    $("#vl_form").on("click",".back_first", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $( ".select_li" ).click(function() {
        $( '.category' ).toggleClass('dbbl');
        $(this).toggleClass('open');
        $(this).parent().toggleClass('bdr')
    });
    $( ".category > li" ).click(function() {
        $(this).find('ul.subcategory').toggleClass('dbbl');
        $(this).toggleClass('open');
    });
    $( ".check_but" ).click(function(event) {
        event.preventDefault()
        $('#vl_form .wrap_form .second_step').toggleClass('dbbl')
        $('#vl_form .wrap_form .first_step').toggleClass('dbbl')
    });
    $( ".back_first" ).click(function(event) {
        event.preventDefault()
        $('#vl_form .wrap_form .second_step').toggleClass('dbbl');
        $('#vl_form .wrap_form .first_step').toggleClass('dbbl');
    });
    $("#vl_form").on("click",".img_form-a", function (event) {
        event.preventDefault()
    });
    $("#vl_form .wrap_form .second_step ").on("click",".spares_auto .main_list .category .subcategory button", function (event) {
        event.preventDefault()
    });

    $('#checkbox').click(function() {
        if ($(this).is(':checked')) {
            $("#vl_form .wrap_form .second_step .spare_ob").addClass('dbbl')
        } else if(!$(this).is(':checked')){
            $("#vl_form .wrap_form .second_step .spare_ob").removeClass('dbbl')
        }
    });
    $('#checkbox2').click(function() {
        if ($(this).is(':checked')) {
            $("#vl_form .wrap_form .second_step .work_ob").addClass('dbbl')
        } else if(!$(this).is(':checked')){
            $("#vl_form .wrap_form .second_step .work_ob").removeClass('dbbl')
        }
    });

    $(".need_spare-check .checkbox").checked
    var i_count = 0;
    $( ".add_spare" ).click(function(event) {
        i_count++;
        event.preventDefault()
        var list = $("<div class=\"spares_txt\">\n" +
            "                                    <div class=\"spare_input\">\n" +
            "                                        <input name=" + i_count + "spare\" type=\"text\" placeholder=\"Наименование запчасти\">\n" +
            "                                    </div>\n" +
            "                                    <div class=\"spare_input\">\n" +
            "                                        <input name=" + i_count + "nomer\" type=\"text\" placeholder=\"Оригинальный номер\">\n" +
            "                                    </div>\n" +
            "                                    <div class=\"check-material\">\n" +
            "                                        <div class=\"spare_radio-item\">\n" +
            "                                            <input type=\"radio\" checked name=" + i_count + "state\" id=" + i_count + "different\">\n" +
            "                                            <label for=" + i_count + "different\">Любая</label>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"spare_radio-item\">\n" +
            "                                            <input type=\"radio\" name=" + i_count + "state\" id=" + i_count + "new\">\n" +
            "                                            <label for=" + i_count + "new\">Только новая</label>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"spare_radio-item\">\n" +
            "                                            <input type=\"radio\" name=" + i_count + "state\" id=" + i_count + "old\">\n" +
            "                                            <label for=" + i_count + "old\">Только б/у</label>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div> ");
        $(".list_spares-all").append(list);
    });

    var fileSelect = document.getElementById("fileSelect"),
        fileElem = document.getElementById("fileElem");

    fileSelect.addEventListener("click", function (e) {
        if (fileElem) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"
    }, false);

//$("#other").click(function() {
//  $("#target").click();
//});

    var validatedFiles = [];
    $('#fileElem').change(function()
    {
        validatedFiles = $('input#fileElem')[0].files;
        handleFiles(this.files);
    });


    function bytesToSize(bytes) {
        var kilobyte = 1024;
        var megabyte = kilobyte * 1024;
        var gigabyte = megabyte * 1024;
        var terabyte = gigabyte * 1024;

        if ((bytes >= 0) && (bytes < kilobyte)) {
            return bytes;

        } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
            return (bytes / kilobyte).toFixed(0) + 'K';

        } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
            return (bytes / megabyte).toFixed(1) + 'M';

        } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
            return (bytes / gigabyte).toFixed(2) + 'G';

        } else if (bytes >= terabyte) {
            return (bytes / terabyte).toFixed(2) + 'T';

        }
    }


    function handleFiles(files) {
        var list = $("<ul></ul>");
        $("#filelist").append(list);

        for (var i = 0, f; f = files[i]; i++) {

            var reader = new FileReader();

            reader.onload = (function(f) {
                return function(e) {
                    var li = $("<li id='1'></li>");
                    $(list).append(li);

                    var a = $("<a href='#' class='img_form-a'></a>");
                    $(li).append(a);

                    $(a).append("<img src='"+e.target.result +"'/>");

                    $(a).append("<span class='name'>" + f.name + "</span>");

                    $(a).append("<span class='size'>" + bytesToSize(f.size) + "</span>");

                    $(li).append("<a href='#remove' class='remove'><img src='../img/im_rem.png' alt=''></a>");
                };

            })(f);

            reader.readAsDataURL(f);

        }
    }

    // $('.remove').live("click", function(event) {
    //     event.preventDefault();
    //     alert("Handler for .click() called.");
    //     // console.log($('#fileElem'))
    // });

    $("#filelist").on("click",".remove", function (event) {
        // console.log('this-', $(this).parent().find('span.name')[0].innerText);
        // console.log($('input#fileElem')[0].files)
        // $("input#fileElem")[0].files.empty();
        $(this).parent().remove();
        // Object.keys($('input#fileElem')[0].files).map((el, id)=>{
        //     if($(this).parent().find('span.name')[0].innerText === $('input#fileElem')[0].files[el].name){
        //         $("input#fileElem")[0].files[el].empty();
        //     }
        // });


        // console.log($(this).parent().find('span.name')[0].innerText);
    });

});