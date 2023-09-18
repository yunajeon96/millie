//메모장 가져오기

$(function () {
    $.get("./sub_text/txt1.txt", function (data) {
      $(".introduce").html(data);
    })

    $.get("./sub_text/txt2.txt", function(t2){
       $(".tx2box p").html(t2);
    })

    $.get("./sub_text/txt3.txt", function(t3){
      console.log(t3);
      $(".suggestion").html(t3);
   })

   $.get("./sub_text/txt4.txt", function (data) {
    $(".into_book").html(data);
  })

  $.get("./sub_text/txt5.txt", function (data) {
    $(".information").html(data);
  })

  $.get("./sub_text/txt6.txt", function (data) {
    $(".return").html(data);
  })
})

// fixed 박스 계산식
$(function () {
  var price_sum =15300;

  $("#price_sum").append(price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");

  $('.plus').click(function () {
    $("#price_value").val(parseInt($(".price_value").val()) + 1);
    var sum = parseInt($(".price_value").val() * price_sum);
    $("#price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  });

  $('.minus').click(function () {
    if ($(".price_value").val() < 2) {
      alert("1개 이상 구매가 가능합니다.");
      $(".price_value").val(2);
    }
    $(".price_value").val(parseInt($(".price_value").val()) - 1);
    var sum = parseInt($(".price_value").val() * price_sum);
    $("#price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  });
});

