//이벤트 네비 찾아가기
$(function () {
    $('.list p').eq(0).click(function () {
        $('html,body').animate({ scrollTop: 1280 }, 500);
    })
    $('.list p').eq(1).click(function () {
        $('html,body').animate({ scrollTop: 2500 }, 500);
    })
    $('.list p').eq(2).click(function () {
        $('html,body').animate({ scrollTop: 4663 }, 500);
    })
    $('.list p').eq(3).click(function () {
        $('html,body').animate({ scrollTop: 5056 }, 500);
    })
});

//sub bottom fix-bar 이벤트
$(function () {
    $(window).scroll(function () {
        let ws = $(this).scrollTop();
        if (ws >= 4200) {
            $('#purchase_box').css("display", "none");
        } else {
            $('#purchase_box').css("display", "flex");
        }
    })
})
