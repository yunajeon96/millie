
$(function () {

    $(window).scroll(function () {
        let ws = $(this).scrollTop();
        let a = $("#m1").offset().top; //820
        let b=$("#m2").offset().top;   //1857
        let c=$("#m3").offset().top;   //2827
        let d=$("#m4").offset().top;   //4577
        let e=$("#m5_wrap").offset().top;  //5272
        let f=$("#m6_wrap").offset().top;  //6115
        let g=$("#m7").offset().top;      //6887
        let h=$("#m8_wrap").offset().top; //7821
        let h2=document.getElementsByTagName('h2');
        let p=document.getElementsByTagName('p');
        console.log(ws);
        
        
            //100>=820-720
        if (ws >= a - 720) {
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
        }  //1000>=1857-857
        if (ws >= b - 857) {
            $(a).css("transform","translateX(300px)").css("opacity","0");
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
            $(c).css("transform","translateY(-100px").css("opacity","0");
        }  //1900>=2827-930
        if (ws >= c - 930) {
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
        } //3700>=4577-877
        if (ws >= d - 877) {
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
        }  //4404>=5272-870
        if (ws >= e - 870) {
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
        }   //5200>=6115-915
        if (ws >= f - 915) {
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
        }   //5290>=6887-1597
        if (ws >= g - -1597) {
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
        }   //6210>=7821-1611
        if (ws >= h - 1611) {
            $(h2).css("transform", "translateY(0px)").css("opacity", "1");
            $(p).css("transform", "translateY(0px)").css("opacity", "1");
        }


        
    })
})