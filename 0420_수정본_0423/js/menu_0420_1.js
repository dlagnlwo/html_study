const macA= {
    menuA:[
        "브랜드 스토리","메뉴","매장안내","창업안내",
        "커뮤니티"
    ],
    brandA: [
        "인사말", "카페이야기", "로스팅이야기"
    ],
    menubarA: [
        "신메뉴", "커피&라떼", "스무디&에이드", "간단한 식사", "디저트"
    ],
    maeA: [
        "매장소개", "오시는길"
    ],
    changA: [
        "경쟁력", "창업절차", "창업FAQ",
    ],
    comuA: [
        "공지사항", "포토후기", "이벤트","고객의 소리"
    ],
    imgA: [
        "img1.jpg","img2.jpg","img3.jpg"
    ],
    imgbox_imgA: [
        "imgbox0_1.jpg","imgbox0_2.jpg", "imgbox0_3.jpg"
    ],
    imgbox_imgB: [
        "imgbox1_1.jpg", "imgbox1_2.jpg"
    ],
    imgbox_imgC: [
        "imgbox6_1.jpg"
    ],
    imgbox7_imgA: [
        "imgbox7_1.jpg","imgbox7_2.jpg", "imgbox7_3.jpg", "imgbox7_4.jpg"
    ],
    imgbox7_textA: [
        "달콤한 카페라떼", "치즈케이크", "카푸치노", "쿠키앤크림 라떼"
    ],
    imgbox8_textA: [
        "미니 과일케이크", "녹차라떼", "자몽에이드", "캬라멜 마끼아또"
    ],
    imgbox8_imgA: [
        "imgbox8_1.jpg", "imgbox8_2.jpg", "imgbox8_3.jpg", "imgbox8_4.jpg"
    ],
    ul_top_textA: [
        "개인정보처리방침", "이용약관"
    ],
    ul_mid_textA: [
        "The Cafe", "대표: 홍길동", "서울특별시 서울 마포구 신촌로 176 중앙빌딩 (이대역)",
        "고객샌터: 070-1234-6789", "사업자등록번호:000-00-00000"
    ],
    ul_bottom_textA: [
        "Copyright The Cafe.", "All rights reserved."
    ]
}
    let i, no, str="", menu, brand, menubar, mae, chang, comu;
window.onload = function(){
    menu = document.querySelector(".menu").getElementsByTagName("li");
    brand = document.querySelector(".brand").getElementsByTagName("div");
    menubar = document.querySelector(".menubar").getElementsByTagName("div");
    mae = document.querySelector(".mae").getElementsByTagName("div");
    chang = document.querySelector(".chang").getElementsByTagName("div");
    comu = document.querySelector(".comu").getElementsByTagName("div");

    // 메뉴바
    macA.menuA.forEach((item, ind) => {
        menu[ind].innerHTML = macA.menuA[ind];
    })




    // 큰 사진
    let mid_img=document.querySelector(".mid_img").getElementsByTagName("li");
    macA.imgA.forEach((item, ind) => {
        mid_img[ind].style.background="url(img/"+macA.imgA[ind]+")";
        mid_img[ind].style.backgroundSize="100% 100%";
    })
    //밑 사진
    let imgA = document.querySelector(".first_area").getElementsByClassName("box");
    macA.imgbox_imgA.forEach((item,ind) => {
        imgA[ind].style.background="url(img/"+macA.imgbox_imgA[ind]+")";
        imgA[ind].style.backgroundSize="100% 100%";
    })
    let imgB = document.querySelector(".second_area").getElementsByClassName("box");
    macA.imgbox_imgB.forEach((item,ind) => {
        imgB[ind].style.background="url(img/"+macA.imgbox_imgB[ind]+")";
        imgB[ind].style.backgroundSize="100% 100%";
    })
    let imgC = document.querySelector(".third_area").getElementsByClassName("box");
    macA.imgbox_imgC.forEach((item,ind) => {
        imgC[ind].style.background="url(img/"+macA.imgbox_imgC[ind]+")";
        imgC[ind].style.backgroundSize="100% 100%";
    })

    //imgbox7 작은사진 4개
    let imgbox7_img = document.querySelector(".imgbox7").getElementsByTagName("div");
    macA.imgbox7_imgA.forEach((item, ind) => {
        imgbox7_img[ind].style.background="url(img/"+macA.imgbox7_imgA[ind]+")";
        imgbox7_img[ind].style.backgroundSize="100% 100%";
    })
    //imgbox8 작은사진 4개
    let imgbox8_img = document.querySelector(".imgbox8").getElementsByTagName("div");
    macA.imgbox8_imgA.forEach((item, ind) => {
        imgbox8_img[ind].style.background="url(img/"+macA.imgbox8_imgA[ind]+")";
        imgbox8_img[ind].style.backgroundSize="100% 100%";
    })
    //imgbox7 호버 텍스트
    // let imgbox7_text = document.querySelector(".imgbox7_text").getElementsByTagName("span");
    let imgbox7_text = document.querySelectorAll(".imgbox7_text > span");
    macA.imgbox7_textA.forEach((item, ind) => {
        imgbox7_text[ind].innerText = macA.imgbox7_textA[ind];
    })
    //imgbox8 호버 텍스트
    let imgbox8_text = document.querySelectorAll(".imgbox8_text > span");
    macA.imgbox8_textA.forEach((item, ind) => {
        imgbox8_text[ind].innerText = macA.imgbox8_textA[ind];
    })

    //footer ul_top_text
    let ul_top_text = document.querySelector(".ul_top_text").getElementsByTagName("li");
    macA.ul_top_textA.forEach((item, ind) => {
        ul_top_text[ind].innerHTML = macA.ul_top_textA[ind];
    })

    //footer ul_mid_text
    let ul_mid_text = document.querySelector(".ul_mid_text").getElementsByTagName("li");
    macA.ul_mid_textA.forEach((item, ind) => {
        ul_mid_text[ind].innerHTML = macA.ul_mid_textA[ind];
    })
    //footer ul_bottom_text
    let ul_bottom_text = document.querySelector(".ul_bottom_text").getElementsByTagName("li");
    macA.ul_bottom_textA.forEach((item, ind) => {
        ul_bottom_text[ind].innerHTML = macA.ul_bottom_textA[ind];
    })

}

// 이미지 자동 넘김
let timer=setInterval("show()", 3000);
    let count=0;
    function show() {
        if(count < 2)
            count++;
        else
            count=0;
        
        $(".btn p").css("color", "white");
        $(".btn p:eq(" + count + ")").css("color", "red");
        $(".mid_img").animate({"left":"-=1666px"}, 1000, function() {
            $(".mid_img li:first").appendTo(".mid_img");
            $(".mid_img").css("left", "+=100%");   
        });
    }


$(function() {
    $(".menu li").on("click", function(){
        $(".sub li").show();
        console.log($(".subbox").show());
    })

 //라디오 버튼 누르면 이미지 이동
    $(".btn p").on("click", function(){
        no=$(this).index();
        count=no;
        $(".btn p").css("color", "white");
        $(".btn p:eq(" + count + ")").css("color", "black");

        pos= -1667 * count;
        // console.log(no, pos);
        $(".mid_img").animate({"left":  pos + "px"},500);
    })


    $(".arrow p").on("click", function() {
        no = $(this).index();
        count = no;
        pos = -1667 * count;
        // console.log(count, pos);
        $(".mid_img").animate({"left":  pos + "px"},500);
    })


})
