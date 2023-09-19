//event
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '기욤뮈소' }
})
    .done(function (s) {
        let sboxs = document.querySelectorAll('.sublist1 .box');
        let origin = s.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "" || val.title != "");
        })

        for (let sw = 0; sw < sboxs.length; sw++) {
            $(".sublist1 .box").eq(sw).append("<img src=" + data[sw].thumbnail + "/>");
            $(".sublist1 .box").eq(sw).append("<h3>" + data[sw].title + "</h3>");
            $(".sublist1 .box").eq(sw).append("<h6>" + data[sw].authors + "</h6>");
            $(".sublist1 .box").eq(sw).append("<h5>" + data[sw].sale_price + "원</h5>")
        }
    });

//pick
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '사랑' && 'love' }
})
    .done(function (s) {
        let sboxs = document.querySelectorAll('.love> .box');
        let origin = s.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "");
        })

        for (let sp = 0; sp < sboxs.length; sp++) {
            $(".love> .box").eq(sp).append("<img src=" + data[sp].thumbnail + "/>");
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '환상' && '판타지' }
})
    .done(function (s) {
        let sboxs = document.querySelectorAll('.magic> .box');
        let origin = s.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "");
        })

        for (let sp = 0; sp < sboxs.length; sp++) {
            $(".magic> .box").eq(sp).append("<img src=" + data[sp].thumbnail + "/>");
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '인물' }
})
    .done(function (s) {
        let sboxs = document.querySelectorAll('.person> .box');
        let origin = s.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "");
        })

        for (let sp = 0; sp < sboxs.length; sp++) {
            $(".person> .box").eq(sp).append("<img src=" + data[sp].thumbnail + "/>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '프랑스' }
})
    .done(function (s) {
        let sboxs = document.querySelectorAll('.france> .box');
        let origin = s.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "");
        })

        for (let sp = 0; sp < sboxs.length; sp++) {
            $(".france> .box").eq(sp).append("<img src=" + data[sp].thumbnail + "/>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
    data: { query: '서스펜스' }
})
    .done(function (s) {
        let sboxs = document.querySelectorAll('.suspend> .box');
        let origin = s.documents;
        let data = origin.filter((val) => {
            return (val.thumbnail != "");
        })

        for (let sp = 0; sp < sboxs.length; sp++) {
            $(".suspend> .box").eq(sp).append("<img src=" + data[sp].thumbnail + "/>");
        }
    });


//작가정보 
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
        data: { query: '귀욤' && '뮈소' }
    })
        .done(function (s) {
            let sboxs = document.querySelectorAll('.author_list .box');
            let origin = s.documents;
            let data = origin.filter((val) => {
                return (val.thumbnail != "" || val.title != "");
            })
    
            for (let sw = 0; sw < sboxs.length; sw++) {
                $(".author_list .box").eq(sw).append("<img src=" + data[sw].thumbnail + "/>");
                $(".author_list .box").eq(sw).append("<h3>" + data[sw].title + "</h3>");
            }
        });


//side bar
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
            data: { query: '일본' && '소설' &&'에세이' }
        })
            .done(function (s) {
                console.log(s);
                let sboxs = document.querySelectorAll('.side_best .box');
                let origin = s.documents;
                let data = origin.filter((val) => {
                    return (val.thumbnail != "" || val.title != ""); });
                
                for (let sw = 0; sw < sboxs.length; sw++) {
                    let str=data[sw].title;
                    let str2=str.substring(0,15)
                    $(".side_best .box").eq(sw).append("<img src=" + data[sw].thumbnail + "/>");
                    $(".side_best .box").eq(sw).append("<div class=ranking>" + (sw+1)+ "</div>");
                    $(".side_best .box").eq(sw).append("<h3>" + str2 + "</h3>");
                    $(".side_best .box").eq(sw).append("<h6>" + data[sw].authors[0] + "</h6>");
                    $(".side_best .box").eq(sw).append("<h5>" + '<span>10%</span>'+data[sw].price + "원</h5>");
                }
            });


            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book",
                headers: { Authorization: "KakaoAK 44e3b7255d8b6fc8d9d4c7f62ab7e2e4" },
                data: { query: 'new' && '소설' && '사랑'}
            })
                .done(function (s) {
                    console.log(s);
                    let sboxs = document.querySelectorAll('.side_new .box');
                    let origin = s.documents;
                    let data = origin.filter((val) => {
                        return (val.thumbnail != "" || val.title != ""); });
                    
                    for (let sw = 0; sw < sboxs.length; sw++) {
                        let str=data[sw].title;
                        let str2=str.substring(0,15)
                        $(".side_new .box").eq(sw).append("<img src=" + data[sw].thumbnail + "/>");
                        $(".side_new .box").eq(sw).append("<div class=ranking>" + (sw+1) + "</div>");
                        $(".side_new .box").eq(sw).append("<h3>" + str2 + "</h3>");
                        $(".side_new .box").eq(sw).append("<h6>" + data[sw].authors[0] + "</h6>");
                        $(".side_new .box").eq(sw).append("<h5>" + '<span>10%</span>'+data[sw].price + "원</h5>");
                    }
                });