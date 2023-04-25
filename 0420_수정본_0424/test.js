const macA= {
    menuA:[
        "브랜드 스토리","메뉴","매장안내"
    ],
}
let i, no, ss;
window.onload=function() {
    // ss=document.querySelector(".brand_sub").getElementsByTagName("div");
    // macA.menuA.forEach((item, ind) => {
    //     ss[ind].innerHTML =macA.menuA[ind] ;
    // });

    bottom_nav=document.querySelector(".bottom_nav");
    menu=bottom_nav.querySelector(".brand");
    brand=menu.querySelector(".brand_sub").getElementsByTagName("p");

    macA.menuA.forEach((item, ind) => {
       brand[ind].innerHTML =macA.menuA[ind] ;
    });

    // ss=document.querySelector(".brand_sub").getElementsByTagName("div");
    // macA.menuA.forEach((item, ind) => {
    //     ss[ind].innerHTML =macA.menuA[ind] ;
    // });
}

$(function() {
    // macA.menuA.forEach((item, ind) => {
    //     // $(".bottom_nav .brand .brand_sub div:eq(" + ind + ")").text(macA.menuA[ind]);
    //     $(".bottom_nav .brand .brand_sub li:eq(" + ind + ")").text(macA.menuA[ind]);
    // })
    
})