//m3

var search;
search=['셀러',2023,'전한길','정승제','경제학','여행','선재국어']

for(var i=0; i<search.length; i++){
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book",
  headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
  async: false,
  data: {query: search[i],size:7}
})
  .done(function( m3 ) {
    const boxs=document.getElementsByClassName('box');
    
    // for(var j=0; j<boxs.length; j++){
      let str=m3.documents[0].title;
      let str1=str.substring(0,21);

      let str2=m3.documents[0].authors;
      let str3=str.substring(0,25);

      $("#list_a >.box").eq(i).append("<img src="+m3.documents[0].thumbnail+"/>");
      $("#list_a >.box").eq(i).append("<h3>"+str1+"</h3>");
      $("#list_a >.box").eq(i).append("<h6>"+str3+"</h6>");
      $("#list_a >.box").eq(i).append("<h5>"+m3.documents[0].sale_price+"원</h5>")
    // }
  });
}

$.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book",
      headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
      data: { query:'2023'&&'최신'&&'경제'}
    })
      .done(function(m32) {
      let m3boxs=document.getElementsByClassName('box');
      for(let a=0; a<m3boxs.length; a++){      
        $("#list_b>.box").eq(a).append("<img src="+m32.documents[a].thumbnail+"/>");
        $("#list_b>.box").eq(a).append("<h3>"+m32.documents[a].title+"</h3>");
        $("#list_b>.box").eq(a).append("<h6>"+m32.documents[a].authors+"</h6>");
        $("#list_b>.box").eq(a).append("<h5>"+m32.documents[a].sale_price+"원</h5>")
        }
      });


      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
        data: { query:'2023'&&'오디오북'}
      })
        .done(function(m33) {
        const m3boxs=document.getElementsByClassName('box');
        // const mp3=document.getElementsByClassName('listbox2>img');
        for(let a=0; a<m3boxs.length; a++){    
          
          $("#list_c>.box").eq(a).append("<img src="+m33.documents[a].thumbnail+"/>");
          $("#list_c>.box").eq(a).append("<img src=img/mp3button.svg>");
          $("#list_c>.box").eq(a).append("<h3>"+m33.documents[a].title+"</h3>");
          $("#list_c>.box").eq(a).append("<h6>"+m33.documents[a].authors+"</h6>");
          $("#list_c>.box").eq(a).append("<h5>"+m33.documents[a].sale_price+"원</h5>");
          // $("#list_c>.box").eq(a).append("<img src="../img/12.png">")
          }
        });



//m4
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
    data: { query: "주식"&&"베스트"&&"최신"&&"투자"}
  })
    .done(function(m41) {
      const m4boxs=document.getElementsByClassName('box');
      
      for(let i=0; i<m4boxs.length; i++){
        let str=m41.documents[i].title;
        let str1=str.substring(0,21);
        // let str2=m41.documents[i].authors;
        // let str3=str2.substring(0,10);

        $("#m4>.r1 >.box").eq(i).append("<img src="+m41.documents[i].thumbnail+"/>");
        $("#m4>.r1 >.box").eq(i).append("<h3>"+str1+"</h3>");
        $("#m4>.r1 >.box").eq(i).append("<h6>"+m41.documents[i].authors+"</h6>");
        $("#m4>.r1 >.box").eq(i).append("<h5>"+m41.documents[i].sale_price+"원</h5>")
      }
    });


    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book",
      headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
      data: { query: "영어"&&"베스트"&&"최신"&&"기출"}
    })
      .done(function(m42) {
        const m4boxs=document.getElementsByClassName('box');
        
        for(let i=0; i<m4boxs.length; i++){
          let str=m42.documents[i].title;
          let str1=str.substring(0,21);
  
          $("#m4>.r2 >.box").eq(i).append("<img src="+m42.documents[i].thumbnail+"/>");
          $("#m4>.r2 >.box").eq(i).append("<h3>"+str1+"</h3>");
          $("#m4>.r2 >.box").eq(i).append("<h6>"+m42.documents[i].authors+"</h6>");
          $("#m4>.r2 >.box").eq(i).append("<h5>"+m42.documents[i].sale_price+"원</h5>")
        }
      });


      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
        data: { query:"고전"&&"인문"}
      })
        .done(function(m43) {
          const m4boxs=document.getElementsByClassName('box');
          
          for(let i=0; i<m4boxs.length; i++){
            let str=m43.documents[i].title;
            let str1=str.substring(0,21);
    
            $("#m4>.r3 >.box").eq(i).append("<img src="+m43.documents[i].thumbnail+"/>");
            $("#m4>.r3 >.box").eq(i).append("<h3>"+str1+"</h3>");
            $("#m4>.r3 >.box").eq(i).append("<h6>"+m43.documents[i].authors+"</h6>");
            $("#m4>.r3 >.box").eq(i).append("<h5>"+m43.documents[i].sale_price+"원</h5>")
          }
        });


        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book",
          headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
          data: { query:"인테리어"}
        })
          .done(function(m44) {
            const m4boxs=document.getElementsByClassName('box');
          
            for(let i=0; i<m4boxs.length; i++){
              let str=m44.documents[i].title;
              let str1=str.substring(0,21);
      
              $("#m4>.r4 >.box").eq(i).append("<img src="+m44.documents[i].thumbnail+"/>");
              $("#m4>.r4 >.box").eq(i).append("<h3>"+str1+"</h3>");
              $("#m4>.r4 >.box").eq(i).append("<h6>"+m44.documents[i].authors+"</h6>");
              $("#m4>.r4 >.box").eq(i).append("<h5>"+m44.documents[i].sale_price+"원</h5>")
            }
          });


          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
            data: { query:"다이어트"}
          })
            .done(function(m45) {
              const m4boxs=document.getElementsByClassName('box');
            
              for(let i=0; i<m4boxs.length; i++){
                let str=m45.documents[i].title;
                let str1=str.substring(0,21);
        
                $("#m4>.r5 >.box").eq(i).append("<img src="+m45.documents[i].thumbnail+"/>");
                $("#m4>.r5 >.box").eq(i).append("<h3>"+str1+"</h3>");
                $("#m4>.r5 >.box").eq(i).append("<h6>"+m45.documents[i].authors+"</h6>");
                $("#m4>.r5 >.box").eq(i).append("<h5>"+m45.documents[i].sale_price+"원</h5>")
              }
            });
  

// $(function(){
//   var c=$("#recommend_list>li")
//   for(let d=0; d<c.length; d++){
//     c[d].click(function(){
//       $(".recommend:nth-of-child(1)").show;
//       $(".reccommend:!nth-of-child(1)").hide;
//     })
//   }
//   $(this).css("background-color","black").css("color","#fff");
// })

//m4 page button
$(function(){
  $("#recommend_list>li:nth-of-type(2)").click(function(){
    $(this).css("background","#333").css("color","#fff")
    $(this).siblings().css("background","#fff").css("color","#333")
    $('.r2').show();
    $('.r1').hide();
    $('.r3').hide();
    $('.r4').hide();
    $('.r5').hide();
  })

  $("#recommend_list>li:nth-of-type(1)").click(function(){
    $(this).css("background","#333").css("color","#fff")
    $(this).siblings().css("background","#fff").css("color","#333")
    $('.r1').show();
    $('.r2').hide();
    $('.r3').hide();
    $('.r4').hide();
    $('.r5').hide();
  })

  $("#recommend_list>li:nth-of-type(3)").click(function(){
    $(this).css("background","#333").css("color","#fff")
    $(this).siblings().css("background","#fff").css("color","#333")
    $('.r3').show();
    $('.r2').hide();
    $('.r1').hide();
    $('.r4').hide();
    $('.r5').hide();
  })

  $("#recommend_list>li:nth-of-type(4)").click(function(){
    $(this).css("background","#333").css("color","#fff")
    $(this).siblings().css("background","#fff").css("color","#333")
    $('.r4').show();
    $('.r2').hide();
    $('.r3').hide();
    $('.r1').hide();
    $('.r5').hide();
  })

  $("#recommend_list>li:nth-of-type(5)").click(function(){
    $(this).css("background","#333").css("color","#fff")
    $(this).siblings().css("background","#fff").css("color","#333")
    $('.r5').show();
    $('.r2').hide();
    $('.r3').hide();
    $('.r4').hide();
    $('.r1').hide();
  })
})