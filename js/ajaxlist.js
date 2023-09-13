//m3
var search;
search = ['셀러', 2023, '전한길', '세계', '경제학', '여행', '선재국어']

for (var g = 0; g < search.length; g++) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
        async: false,
        data: { query: search[g], size: 7 }
    })
        .done(function (m3) {
            const boxs = document.getElementsByClassName('box');
            let origin = m3.documents;
            let data = origin.filter((val) => {
                return (val.thumbnail != "" || val.title !="");
            })

            $("#list_a >.box").eq(g).append("<img src=" + data[g].thumbnail + "/>");
            $("#list_a >.box").eq(g).append("<h3>" + data[g].title + "</h3>");
            $("#list_a >.box").eq(g).append("<h6>" + data[g].authors + "</h6>");
            $("#list_a >.box").eq(g).append("<h5>" + data[g].sale_price + "원</h5>")
        });
}

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '2023' && '최신' && '경제' }
})
    .done(function (m32) {
        let m3boxs = document.getElementsByClassName('box');
        let origin = m32.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title !="");
        })
        // let data2 = origin.filter((val)=>{
        //     return val.title !="";
        // })
        console.log(data)
        // console.log(data2)

        for (let b = 0; b < m3boxs.length; b++) {
            $("#list_b >.box").eq(b).append("<img src=" + data[b].thumbnail + "/>");
            $("#list_b>.box").eq(b).append("<h3>" + data[b].title + "</h3>");
            $("#list_b>.box").eq(b).append("<h6>" + data[b].authors + "</h6>");
            $("#list_b>.box").eq(b).append("<h5>" + data[b].sale_price + "원</h5>")
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '오디오북' }
})
    .done(function (m33) {
        console.log(m33)
        const m3boxs = document.getElementsByClassName('box');
        let origin = m33.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title !="");
        })
        for (let a = 0; a < m3boxs.length; a++) {
            $("#list_c>.box").eq(a).append("<img src=" + data[a].thumbnail + "/>");
            $("#list_c>.box").eq(a).append("<img src='img/mp3button.svg'>");
            $("#list_c>.box").eq(a).append("<h3>" + data[a].title + "</h3>");
            $("#list_c>.box").eq(a).append("<h6>" + data[a].authors + "</h6>");
            $("#list_c>.box").eq(a).append("<h5>" + data[a].sale_price + "원</h5>");
        }
    });



//m4
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: "주식" && "베스트" && "최신" && "투자" }
})
    .done(function (m41) {
        const m4boxs = document.getElementsByClassName('box');
        let origin = m41.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title !="");
        })

        for (let i = 0; i < m4boxs.length; i++) {
            // let str = m41.documents[i].title;
            // let str1 = str.substring(0, 21);
            // let str2=m41.documents[i].authors;
            // let str3=str2.substring(0,10);

            $("#m4>.r1 >.box").eq(i).append("<img src=" + data[i].thumbnail + "/>");
            $("#m4>.r1 >.box").eq(i).append("<h3>" + data[i].title + "</h3>");
            $("#m4>.r1 >.box").eq(i).append("<h6>" + data[i].authors + "</h6>");
            $("#m4>.r1 >.box").eq(i).append("<h5>" + data[i].sale_price + "원</h5>")
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: "영어" && "베스트" && "최신" && "기출" }
})
    .done(function (m42) {
        const m4boxs = document.getElementsByClassName('box');
        let origin = m42.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title !="");
        })

        for (let i = 0; i < m4boxs.length; i++) {
            // let str = m42.documents[i].title;
            // let str1 = str.substring(0, 21);

            $("#m4>.r2 >.box").eq(i).append("<img src=" + data[i].thumbnail + "/>");
            $("#m4>.r2 >.box").eq(i).append("<h3>" + data[i].title + "</h3>");
            $("#m4>.r2 >.box").eq(i).append("<h6>" + data[i].authors + "</h6>");
            $("#m4>.r2 >.box").eq(i).append("<h5>" + data[i].sale_price + "원</h5>")
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: "고전" && "인문" }
})
    .done(function (m43) {
        const m4boxs = document.getElementsByClassName('box');
        let origin = m43.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title !="");
        })

        for (let i = 0; i < m4boxs.length; i++) {
            // let str = m43.documents[i].title;
            // let str1 = str.substring(0, 21);

            $("#m4>.r3 >.box").eq(i).append("<img src=" + data[i].thumbnail + "/>");
            $("#m4>.r3 >.box").eq(i).append("<h3>" + data[i].title + "</h3>");
            $("#m4>.r3 >.box").eq(i).append("<h6>" + data[i].authors + "</h6>");
            $("#m4>.r3 >.box").eq(i).append("<h5>" + data[i].sale_price + "원</h5>")
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: "인테리어" }
})
    .done(function (m44) {
        const m4boxs = document.getElementsByClassName('box');
        let origin = m44.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title !="");
        })

        for (let i = 0; i < m4boxs.length; i++) {
            // let str = m44.documents[i].title[i];
            // // console.log(str);
            // let str1 = str.substring(0, 21);

            $("#m4>.r4 >.box").eq(i).append("<img src=" + data[i].thumbnail + "/>");
            $("#m4>.r4 >.box").eq(i).append("<h3>" + data[i].title + "</h3>");
            $("#m4>.r4 >.box").eq(i).append("<h6>" + data[i].authors + "</h6>");
            $("#m4>.r4 >.box").eq(i).append("<h5>" + data[i].sale_price + "원</h5>")
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: "다이어트" }
})
    .done(function (m45) {
        const m4boxs = document.getElementsByClassName('box');
        let origin = m45.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title !="");
        })

        for (let i = 0; i < m4boxs.length; i++) {

            // let str = m45.documents[i].title;
            // let str1 = str.substring(0, 21);

            $("#m4>.r5 >.box").eq(i).append("<img src=" + data[i].thumbnail + "/>");
            $("#m4>.r5 >.box").eq(i).append("<h3>" + data[i].title + "</h3>");
            $("#m4>.r5 >.box").eq(i).append("<h6>" + data[i].authors + "</h6>");
            $("#m4>.r5 >.box").eq(i).append("<h5>" + data[i].sale_price + "원</h5>")
        }
    });
