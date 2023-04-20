const macA= {
    menuA:[
        "브랜드 스토리","메뉴","매장안내","창업안내",
        "커뮤니티"
    ],
    sub1A: [
        "인사말", "카페이야기", "로스팅이야기"
    ],
    sub2A: [
        "신메뉴", "커피&라떼", "스무디&에이드", "간단한 식사", "디저트"
    ],
    sub3A: [
        "매장소개", "오시는길"
    ],
    sub4A: [
        "경쟁력", "창업절차", "창업FAQ",
    ],
    sub5A: [
        "공지사항", "포토후기", "이벤트","고객의 소리"
    ]
}
    let i, no, str="", menu, sub1, sub2, sub3, sub4, sub5;
window.onload = function(){
    menu = document.querySelector(".menu").getElementsByTagName("li");
    li_sub1 = document.querySelector(".sub1").getElementsByTagName("li");
    li_sub2 = document.querySelector(".sub2").getElementsByTagName("li");
    li_sub3 = document.querySelector(".sub3").getElementsByTagName("li");
    li_sub4 = document.querySelector(".sub4").getElementsByTagName("li");
    li_sub5 = document.querySelector(".sub5").getElementsByTagName("li");
    macA.menuA.forEach((item, ind) => {
        menu[ind].innerHTML = macA.menuA[ind];
    })
    macA.sub1A.forEach((item, ind) => {
        li_sub1[ind].innerHTML = macA.sub1A[ind];
    })
    macA.sub2A.forEach((item, ind) => {
        li_sub2[ind].innerHTML = macA.sub2A[ind];
    })
    macA.sub3A.forEach((item, ind) => {
        li_sub3[ind].innerHTML = macA.sub3A[ind];
    })
    macA.sub4A.forEach((item, ind) => {
        li_sub4[ind].innerHTML = macA.sub4A[ind];
    })
    macA.sub5A.forEach((item, ind) => {
        li_sub5[ind].innerHTML = macA.sub5A[ind];
    })
    


}



$(function() {
    $(".menu").on("click", function(){
        $(".subbox").show();
        console.log($(".subbox").show());
    })


})