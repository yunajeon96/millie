//m2
$(function(){
  $(".m2btn").click(function(){
    $(this).hide();
    $(".m2image").hide();
    $("video").show();
  })

  $("video").click(function(){
    $(this).siblings().show();
  })
})





//m4 
$(function () {
  var ul = $('#recommend_list li');
  var re = $('.recommend');

  ul.click(function () {
    let i = $(this).index();
    ul.eq(i).css("background", "#333").css("color", "#fff");
    ul.eq(i).siblings().css("background", "#fff").css("color", "#333");
    re.eq(i).show().siblings('.recommend').hide();
  })
})




//m8
$(function(){
  $('.qna>li').click(function(){
      $(this).children('img').toggleClass('toggleclass')
      $('.answer').stop().slideUp();
      $(this).find('.answer').stop().slideToggle();
  })
})

