//m7
$(function () {
    $('.m7_audio').click(function () {
        $(this).css("background-color","#f7f7f7");
        $(this).siblings().css("background-color","#fff");
        $('.m7_content_a').show();
        $('.view').hide()
    })

    $('.m7_viewer').click(function () {
        $(this).css("background-color","#f7f7f7");
        $(this).siblings().css("background-color","#fff");
        $('.view').show();
        $('.m7_content_a').hide();
    })
})


function slide() {
    var liwidth = $('.m7inner li').width();
    for(let i=1; i<5; i++){
        $(`.m7_btn:nth-of-type(${i})`).click(function () {
            $(this).css("background-color","#333").css("color","#fff").siblings().css("background-color","#f7f7f7").css("color","#333");
            $(`.m7_text1:nth-of-type(${i})`).show().siblings().hide();  
            $('.m7inner').stop().animate({ marginLeft:-liwidth*(i-1) }, 800, 
            //     function () {
            //     $(`.m7inner>li:nth-of-type(${i})`).appendTo('.m7inner');
            //     $('.m7inner').css({ marginLeft: 0 });
            // }
            )
        })
    }
}
setInterval(slide,3000)


function slide2() {
    var liwidth = $('.m7inner1 li').width();
    for(let i=1; i<5; i++){
        $(`.m7_btn:nth-of-type(${i})`).click(function () {
            $(this).css("background-color","#333").css("color","#fff").siblings().css("background-color","#f7f7f7").css("color","#333");
            $(`.m7_text1:nth-of-type(${i})`).show().siblings().hide();  
            $('.m7inner1').stop().animate({ marginLeft:-liwidth*(i-1) }, 800
            //     , function () {
            //     $(`.m7inner1>li:nth-of-type(${i})`).appendTo('.m7inner1');
            //     $('.m7inner1').css({ marginLeft: 0 });
            // }
            )
        })
    }
}
setInterval(slide2,3000)


//m8
$(function(){
    $('.qna>li').click(function(){
        $(this).children('img').toggleClass('toggleclass')
        $('.answer').stop().slideUp();
        $(this).find('.answer').stop().slideToggle();
    })
})






