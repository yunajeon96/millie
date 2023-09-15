//메모장 가져오기

$(function () {
    $.get("./sub_txt/txt1.txt", function (data) {
      $(".introduce").html(data);
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

