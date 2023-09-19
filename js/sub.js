//메모장 가져오기

$(function () {
    $.get("./sub_text/txt1.txt", function (data) {
      $(".introduce").html(data);
      $('#txt1_show').click(function () {
        if ($(this).children('span').text() == '더보기') {
          $(this).siblings('p').css({ 'height': 'auto' });
          $(this).children('span').text('접기').siblings('img').css({ 'transform': 'rotate(0deg)' })
        } else if ($(this).children('span').text() == '접기') {
          $(this).siblings('p').css({ 'height': '95px', 'overflow': 'hidden' });
          $(this).children('span').text('더보기').siblings('img').css({ 'transform': 'rotate(180deg)' })
        }})})

    $.get("./sub_text/txt2.txt", function(t2){
       $(".tx2box span").html(t2);
       $('#txt2_show').click(function () {
        if ($(this).children('span').text() == '더보기') {
          $(this).siblings('p').css({ 'height': 'auto' });
          $(this).children('span').text('접기').siblings('img').css({ 'transform': 'rotate(0deg)' })
        } else if ($(this).children('span').text() == '접기') {
          $(this).siblings('p').css({ 'height': '105px', 'overflow': 'hidden' });
          $(this).children('span').text('더보기').siblings('img').css({ 'transform': 'rotate(180deg)' })
        }})
    })


    $.get("./sub_text/txt3.txt", function(t3){
      $(".suggestion").html(t3);
      $('#txt3_show').click(function () { 
        if ($(this).children('span').text() == '더보기') {
          $(this).siblings('.hide').css({ 'height': 'auto' });
          $(this).children('span').text('접기').siblings('img').css({ 'transform': 'rotate(0deg)' })
        } else if ($(this).children('span').text() == '접기') {
          $(this).siblings('.hide').css({ 'height': '0px', 'overflow': 'hidden' });
          $(this).children('span').text('더보기').siblings('img').css({ 'transform': 'rotate(180deg)' })
        }})})

   $.get("./sub_text/txt4.txt", function (data) {
    $(".into_book").html(data);
    $('#txt4_show').click(function () { 
      if ($(this).children('span').text() == '더보기') {
        $(this).siblings('p').css({ 'height': 'auto' });
        $(this).children('span').text('접기').siblings('img').css({ 'transform': 'rotate(0deg)' })
      } else if ($(this).children('span').text() == '접기') {
        $(this).siblings('p').css({ 'height': '130px', 'overflow': 'hidden' });
        $(this).children('span').text('더보기').siblings('img').css({ 'transform': 'rotate(180deg)' })
      }})})

  $.get("./sub_text/txt5.txt", function (data) {
    $(".information").html(data);
    $('#txt5_show').click(function () { 
      if ($(this).children('span').text() == '더보기') {
        $(this).siblings('p').css({ 'height': 'auto' });
        $(this).children('span').text('접기').siblings('img').css({ 'transform': 'rotate(0deg)' })
      } else if ($(this).children('span').text() == '접기') {
        $(this).siblings('p').css({ 'height': '120px', 'overflow': 'hidden' });
        $(this).children('span').text('더보기').siblings('img').css({ 'transform': 'rotate(180deg)' })
      }})})

  $.get("./sub_text/txt6.txt", function (data) {
    $(".return").html(data);
  })})



// fixed 박스 계산식
$(function () {
  var price_sum =15300;

  $("#price_sum").append(price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");

  $("#plus").click(function () {
    $(".price_value").val(parseInt($(".price_value").val()) + 1);
    var sum = parseInt($(".price_value").val() * price_sum);
    $("#price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  });

  $('#minus').click(function () {
    if ($(".price_value").val() < 2) {
      alert("1개 이상 구매가 가능합니다.");
      $(".price_value").val(2);
    }
    $(".price_value").val(parseInt($(".price_value").val()) - 1);
    var sum = parseInt($(".price_value").val() * price_sum);
    $("#price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  })
});

//키워드 pick 슬라이드
$(function(){
   let sul=$('#pick_list li');
   let pick=$('.pick')
  
   sul.click(function(){
    let d=$(this).index();
    // console.log(d);
    sul.eq(d).css({'background':'#666','color':'#fff'});
    sul.eq(d).siblings().css({'background':'#f7f7f7','color':'#333'});
    pick.eq(d+1).show().siblings('.pick').hide();
  })
})



