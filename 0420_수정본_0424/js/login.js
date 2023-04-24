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
    left_top_menuA: [
        "브랜드 스토리", "메뉴", "매장안내", "창업안내", "커뮤니티"
    ],
    right_top_menuA: [
        "로그인", "회원가입"
    ],
    right_bottom_menuA: [
        "공지사항", "홈페이지 이용시 주의사항 안내", "불량회원 제재 안내", "서버 정기점검 안내",
        "고객성원 이벤트를 안내해 드립니다.", "카드사 무이자 할부 변경"
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
    menu = document.querySelector(".menu").getElementsByTagName("a");
    // 메뉴바
    macA.menuA.forEach((item, ind) => {
        menu[ind].innerHTML = macA.menuA[ind];
    });

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
};

$(function(){
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

     // left_menu 버튼 누르면 나오고 닫기 누르면 숨겨짐
    $(".top_nav div:first-child").on("click", function(){
        $(".left_menu").animate({"left": "0px"});
    });
    $(".exit1 i").on("click", function(){
        $(".left_menu").animate({"left": "-250px"})
    })

    // right_menu 버튼 누르면 나오고 닫기 누르면 숨겨짐
    $(".top_nav div:nth-child(2)").on("click", function(){
        $(".right_menu").animate({"left": "1660px"});
    });
    $(".exit2 i").on("click", function(){
        $(".right_menu").animate({"left": "1910px"})
    })
})