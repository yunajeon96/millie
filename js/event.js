window.onload=function(){
    $("#m_top_wrap>.m_top img").eq(1).css("transform", "translateY(0px)").css("opacity", "1");
    $("#m_top_wrap>.m_top img").eq(2).css("transform", "translateY(0px)").css("opacity", "1");
}
$(function () {

    $(window).scroll(function () {
        let ws = $(this).scrollTop();
        let a = $("#m1").offset().top; //820
        let b=$("#m2").offset().top;   //1857
        let c=$("#m3").offset().top;   //2827
        let d=$("#m4").offset().top;   //4627
        let e=$("#m5_wrap").offset().top;  //5272
        let f=$("#m6_wrap").offset().top;  //6115
        let g=$("#m7").offset().top;      //6887
        let h=$("#m8_wrap").offset().top; //7821
        // let h2=document.getElementsByTagName('h2');
        // let p=document.getElementsByTagName('p');
        console.log(ws);
        console.log(h);
  
        if (ws < 50) {
            $("#m1>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m1>p").css("transform", "translateY(-80px)").css("opacity", "0");
        }
            //100>=820-720
        if (ws >= a - 720) {
            $("#m1>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $("#m1>p").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m2wrap>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m2wrap>p").css("transform", "translateY(-80px)").css("opacity", "0");
        }  //1169>=1857-657
        if (ws >= b - 657) {
            $("#m1>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m1>p").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m2wrap>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m2wrap>p").css("transform", "translateY(0px)").css("opacity", "1");
            $("#m3>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m3>p").css("transform", "translateY(-80px)").css("opacity", "0");
            
        }  //2095>=2827-732
        if (ws >= c - 732) {
            $(".m2wrap>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m2wrap>p").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m3>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $("#m3>p").css("transform", "translateY(0px)").css("opacity", "1");
            $("#m4>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m4>p").css("transform", "translateY(-80px)").css("opacity", "0");
        } //3846>=4627-781
        if (ws >= d - 781) {
            $("#m3>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m3>p").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m4>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $("#m4>p").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m5>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m5>p").css("transform", "translateY(-80px)").css("opacity", "0");
        }  //4404>=5272-870
        if (ws >= e - 870) {
            $("#m4>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m4>p").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m5>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m5>p").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m6>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m6_wrap>p").css("transform", "translateY(-80px)").css("opacity", "0");
        }   //5200>=6115-915
        if (ws >= f - 915) {
            $(".m5>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m5>p").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m6>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m6_wrap>p").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m7_content>.m7_content_a>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m7_content>.m7_content_a>p").css("transform", "translateY(-80px)").css("opacity", "0");
        }   //6390>=6992-600
        if (ws >= g - 600) {
            $(".m6>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m6_wrap>p").css("transform", "translateY(-80px)").css("opacity", "0");
            $("#m7>.m7_content>.m7_content_a>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $("#m7>.m7_content>.m7_content_a>p").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m8>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m8>p").css("transform", "translateY(-80px)").css("opacity", "0");
        }   //7175>=7926-750
        if (ws >= h - 750) {
            $(".m7_content>.m7_content_a>h2").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m7_content>.m7_content_a>p").css("transform", "translateY(-80px)").css("opacity", "0");
            $(".m8>h2").css("transform", "translateY(0px)").css("opacity", "1");
            $(".m8>p").css("transform", "translateY(0px)").css("opacity", "1");
        }


        
    })
})