$(function () {
    $('m7_audio').click(function () {
        $('.m7_content>.m7_content_a').show();
        $('.m7_content>.view').hide()
    })

    $('.m7_viewer').click(function () {
        $('.m7_content>.view').show();
        $('.m7_content>.m7_content_a').hide();
    })
})


function slide() {
    var liwidth = $('.m7inner li').width();
    for(let i=1; i<5; i++){
        $(`.m7_btn:nth-of-type(${i})`).click(function () {
            $(this).css("background-color","#333").css("color","#fff").siblings().css("background-color","#f7f7f7").css("color","#333");
            $(`.m7_text1:nth-of-type(${i})`).show().siblings().hide();  
            $('.m7inner').stop().animate({ marginLeft:-liwidth }, 800, function () {
                $(`.m7inner>li:nth-of-type(${i})`).appendTo('.m7inner');
                $('.m7inner').css({ marginLeft: 0 });
            })
        })
    }
}
setInterval(slide,3000)

//qna
$(function(){
    $('#m8_wrap> .m8> .qna> .m8show img').click(function(){
        $(this).parent().sibilings().slideToggle("fast");
    })
})






