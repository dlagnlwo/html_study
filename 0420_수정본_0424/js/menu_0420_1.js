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
    maejangA: [
        "매장소개", "오시는길"
    ],
    changA: [
        "경쟁력", "창업절차", "창업FAQ", "창업상담"
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
    ],
    left_top_menuA: [
        "브랜드 스토리", "메뉴", "매장안내", "창업안내", "커뮤니티"
    ],
    right_top_menuA: [
        "로그인", "회원가입"
    ],
    right_bottom_menuA: [
        "공지사항", "홈페이지 이용시 주의사항 안내", "불량회원 제재 안내", "서버 정기점검 안내",
        "고객성원 이벤트를 안내해 드립니다.", "카드사 무이자 할부 변경"
    ]
}
    let i, no, str="", menu, brand, menubar, mae, chang, comu;
window.onload = function(){
    menu = document.querySelector(".menu").getElementsByTagName("a");
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
    //left_top_menu
    let left_top_menu = document.querySelector(".left_menu").getElementsByTagName("a");
    macA.left_top_menuA.forEach((item, ind) => {
        left_top_menu[ind].innerHTML = macA.left_top_menuA[ind];
    })
    //right_top_menu
    let right_top_menu = document.querySelector(".right_menu").getElementsByTagName("a");
    macA.right_top_menuA.forEach((item, ind) => {
        right_top_menu[ind].innerHTML = macA.right_top_menuA[ind];
    })
    //left_botttom_menu
    let left_botttom_menu = document.querySelector(".left_bottom_menu").getElementsByTagName("li");
    macA.ul_mid_textA.forEach((item, ind) => {
        left_botttom_menu[ind].innerHTML = macA.ul_mid_textA[ind];
    })
    //right_bottom_menu
    let right_bottom_menu = document.querySelector(".right_bottom_menu").getElementsByTagName("a");
    macA.right_bottom_menuA.forEach((item, ind) => {
        right_bottom_menu[ind].innerHTML = macA.right_bottom_menuA[ind];
    })
    //submenu 나오기
    let sub_brand = document.querySelector(".sub_0").getElementsByTagName("div");
    macA.brandA.forEach((item, ind) => {
        sub_brand[ind].innerHTML = macA.brandA[ind];
    })
    let sub_menu = document.querySelector(".sub_1").getElementsByTagName("div");
    macA.menubarA.forEach((item, ind) => {
        sub_menu[ind].innerHTML = macA.menubarA[ind];
    })
    let sub_maejang = document.querySelector(".sub_2").getElementsByTagName("div");
    macA.maejangA.forEach((item, ind) => {
        sub_maejang[ind].innerHTML = macA.maejangA[ind];
    })
    let sub_cang = document.querySelector(".sub_3").getElementsByTagName("div");
    macA.changA.forEach((item, ind) => {
        sub_cang[ind].innerHTML = macA.changA[ind];
    })
    let sub_comu = document.querySelector(".sub_4").getElementsByTagName("div");
    macA.comuA.forEach((item, ind) => {
        sub_comu[ind].innerHTML = macA.comuA[ind];
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
    //큰 이미지 라디오 버튼 누르면 자동넘김 멈춤
    $(".img5Box").hover(function() {
        clearInterval( timer );
    }, function() {
        timer=setInterval("show()", 3000);
    })

    //메뉴바 마우스 대면 보이고 때면 안보이게
    $(".submenu").hide();
    $(".menu a").hover(function(){
        $(".submenu").show(400);
    });
    $(".submenu").mouseleave(function(){
        $(".submenu").hide();
    });

    $(".sub_0").hover(function(){
        $(this).css("speech Bubbles", "Bubble Top");
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


    // 큰 이미지 왼쪽으로 자동넘김
    $(".arrow p").on("click", function() {
        no = $(this).index();
        count = no;
        pos = -1667 * count;
        // console.log(count, pos);
        $(".mid_img").animate({"left":  pos + "px"},500);
    });

    // left_menu 버튼 누르면 나오고 닫기 누르면 숨겨짐
    $(".top_nav div:first-child").on("click", function(){
        $(".left_menu").animate({"left": "0px"});
    });
    $(".exit1 i").on("click", function(){
        $(".left_menu").animate({"left": "-250px"})
    })

    $(".top_nav div:nth-child(2)").on("click", function(){
        $(".right_menu").animate({"left": "1700px"});
    });
    $(".exit2 i").on("click", function(){
        $(".right_menu").animate({"left": "1950px"})
    })
    


})
