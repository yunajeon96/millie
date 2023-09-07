//m1 슬라이드
var m1search;
m1search=["에세이","소설","부동산"]

for(m1se=0; m1se<m1search.length; m1se++){
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
    data: { query: m1search[m1se],size:50}
  })
    .done(function(mm) {
      var m1boxs=document.getElementsByClassName('m1_slide1');
      var m2boxs=document.getElementsByClassName('m1_slide2');
      var m3boxs=document.getElementsByClassName('m1_slide3');
      // var m1boxbox=m1boxs.append("<div class='box'></div'>")
      // console.log(m1boxbox); 

      for(var a=0; a<50; a++){      
        $(m1boxs).append('<div class="box_mini"></div>');
        $(m2boxs).append('<div class="box_mini"></div>');
        $(m3boxs).append('<div class="box_mini"></div>');
        $(".box_mini").eq(a).append("<img src="+mm.documents[a].thumbnail+"/>");
      }
    });
  }





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
      var str=m3.documents[0].title;
      var str1=str.substring(0,21);

      var str2=m3.documents[0].authors;
      var str3=str.substring(0,25);

      $(".list >.box").eq(i).append("<img src="+m3.documents[0].thumbnail+"/>");
      $(".list >.box").eq(i).append("<h3>"+str1+"</h3>");
      $(".list >.box").eq(i).append("<h6>"+str3+"</h6>");
      $(".list >.box").eq(i).append("<h5>"+m3.documents[0].sale_price+"원</h5>")
    // }
  });
}




// $.ajax({
//     method: "GET",
//     url: "https://dapi.kakao.com/v3/search/book",
//     headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
//     data: { query: "셀러"}
//   })
//     .done(function( msg ) {
//       var boxs=document.getElementsByClassName('box');
//       console.log(msg);
      

//       for(var i=0; i<boxs.length; i++){

//         var str=msg.documents[i].title;
//         var str1=str.substring(0,21);

//         var str2=msg.documents[i].authors;
//         var str3=str.substring(0,20);

//         $("#list_a >.box").eq(i).append("<img src="+msg.documents[i].thumbnail+"/>");
//         $("#list_a >.box").eq(i).append("<h3>"+str1+"</h3>");
//         $("#list_a >.box").eq(i).append("<h6>"+str3+"</h6>");
//         $("#list_a >.box").eq(i).append("<p>"+msg.documents[i].sale_price+"원</p>")
//       }
//     });

//     $.ajax({
//         method: "GET",
//         url: "https://dapi.kakao.com/v3/search/book",
//         headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
//         data: { query: "23"}
//       })
//         .done(function( msg ) {
//           var boxs=document.getElementsByClassName('box');
          
    
//           for(var i=0; i<boxs.length; i++){
    
//             var str=msg.documents[i].title;
//             var str1=str.substring(0,21);
    
//             var str2=msg.documents[i].authors;
//             var str3=str.substring(0,20);
    
//             $("#list_b >.box").eq(i).append("<img src="+msg.documents[i].thumbnail+"/>");
//             $("#list_b >.box").eq(i).append("<h3>"+str1+"</h3>");
//             $("#list_b >.box").eq(i).append("<h6>"+str3+"</h6>");
//             $("#list_b >.box").eq(i).append("<p>"+msg.documents[i].sale_price+"원</p>")
//           }
//         });

//         $.ajax({
//             method: "GET",
//             url: "https://dapi.kakao.com/v3/search/book",
//             headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
//             data: { query: "오디오북"}
//           })
//             .done(function( msg ) {
//               var boxs=document.getElementsByClassName('box');
              
        
//               for(var i=0; i<boxs.length; i++){
        
//                 var str=msg.documents[i].title;
//                 var str1=str.substring(0,21);
        
//                 var str2=msg.documents[i].authors;
//                 var str3=str.substring(0,20);
        
//                 $("#list_c >.box").eq(i).append("<img src="+msg.documents[i].thumbnail+"/>");
//                 $("#list_c >.box").eq(i).append("<h3>"+str1+"</h3>");
//                 $("#list_c >.box").eq(i).append("<h6>"+str3+"</h6>");
//                 $("#list_c >.box").eq(i).append("<p>"+msg.documents[i].sale_price+"원</p>")
//               }
//             });







//m4
// $.ajax({
//     method: "GET",
//     url: "https://dapi.kakao.com/v3/search/book",
//     headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
//     data: { query: "주식투자"}
//   })
//     .done(function( m4 ) {
//       var m4boxs=document.getElementsByClassName('box');
//       console.log(m4);

//       for(mf=0; mf<m4boxs.length; mf++){
//         var str4=m4.documents[mf].title;
//         var str5=str4.substring(0,25);
         
//       $(".recommend >.box").eq(mf).append("<img src="+m4.documents[mf].thumbnail+"/>");
//       $(".recommend >.box").eq(mf).append("<h3>"+str5+"</h3>");
//       $(".recommend >.box").eq(mf).append("<h6>"+m4.documents[mf].publisher+"</h6>");
//       $(".recommend >.box").eq(mf).append("<h5>"+m4.documents[mf].price+"</h5>");
//       $(".recommend >.box").eq(mf).append("<h4>"+m4.documents[mf].sale_price+"원</h4>")
//     }                                     
//     })     

var m4search=["주식투자","영어","고전","인테리어","다이어트"]
for(m4a=0; m4a<m4search.length; m4a++){
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers:{Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4"},
    data: { query: m4search[m4a]}
  })
    .done(function( m4 ) {
      var m4boxs=document.getElementsByClassName('box');
      console.log(m4);

      for(mf=0; mf<m4boxs.length; mf++){
        var str4=m4.documents[mf].title;
        var str5=str4.substring(0,25);
         
      $(".recommend >.box").eq(mf).append("<img src="+m4.documents[mf].thumbnail+"/>");
      $(".recommend >.box").eq(mf).append("<h3>"+str5+"</h3>");
      $(".recommend >.box").eq(mf).append("<h6>"+m4.documents[mf].publisher+"</h6>");
      $(".recommend >.box").eq(mf).append("<h5>"+m4.documents[mf].price+"</h5>");
      $(".recommend >.box").eq(mf).append("<h4>"+m4.documents[mf].sale_price+"원</h4>")
    }                                     
    })        
  }
  document.write(r[m4a])=m4search[m4a]
    