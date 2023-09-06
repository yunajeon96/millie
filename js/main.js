//m1 슬라이드

// var search;
// search=["에세이","자기개발","추천"];

// for(m1=0; m1<search.length; m1++){
//     $.ajax({
//         method: "GET",
//         url: "https://dapi.kakao.com/v3/search/book",
//         headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
//         data: { query: search[m1]},
//         async:false
//       })
//         .done(function( msg ) {
            
//             for(var m12=0; m12<150; m12++){
//                 $('.m1_slide').eq(m1).append('<div class="boxs'+m1+'boxs"></div>');
//                 $('.boxs'+m1).eq(m12).append("<img src='"+msg.documents[m12].thumbnail+"'/>")
//             }
//         })
// }



//m6
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
    data: { query: "셀러"}
  })
    .done(function( msg ) {
      var boxs=document.getElementsByClassName('box');
      

      for(var i=0; i<boxs.length; i++){

        var str=msg.documents[i].title;
        var str1=str.substring(0,21);

        var str2=msg.documents[i].authors;
        var str3=str.substring(0,20);

        $("#list_a >.box").eq(i).append("<img src="+msg.documents[i].thumbnail+"/>");
        $("#list_a >.box").eq(i).append("<h3>"+str1+"</h3>");
        $("#list_a >.box").eq(i).append("<h6>"+str3+"</h6>");
        $("#list_a >.box").eq(i).append("<p>"+msg.documents[i].sale_price+"원</p>")
      }
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
        data: { query: "23"}
      })
        .done(function( msg ) {
          var boxs=document.getElementsByClassName('box');
          
    
          for(var i=0; i<boxs.length; i++){
    
            var str=msg.documents[i].title;
            var str1=str.substring(0,21);
    
            var str2=msg.documents[i].authors;
            var str3=str.substring(0,20);
    
            $("#list_b >.box").eq(i).append("<img src="+msg.documents[i].thumbnail+"/>");
            $("#list_b >.box").eq(i).append("<h3>"+str1+"</h3>");
            $("#list_b >.box").eq(i).append("<h6>"+str3+"</h6>");
            $("#list_b >.box").eq(i).append("<p>"+msg.documents[i].sale_price+"원</p>")
          }
        });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
            data: { query: "오디오북"}
          })
            .done(function( msg ) {
              var boxs=document.getElementsByClassName('box');
              
        
              for(var i=0; i<boxs.length; i++){
        
                var str=msg.documents[i].title;
                var str1=str.substring(0,21);
        
                var str2=msg.documents[i].authors;
                var str3=str.substring(0,20);
        
                $("#list_c >.box").eq(i).append("<img src="+msg.documents[i].thumbnail+"/>");
                $("#list_c >.box").eq(i).append("<h3>"+str1+"</h3>");
                $("#list_c >.box").eq(i).append("<h6>"+str3+"</h6>");
                $("#list_c >.box").eq(i).append("<p>"+msg.documents[i].sale_price+"원</p>")
              }
            });