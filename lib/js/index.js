 // 首页大轮播
 let mySwiper = new Swiper("#indexPage-slide", {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
    },
})

// 福利游戏VR游戏
$(".game-title").on("click","h3",function(){
    $(".game-title h3").removeClass("on");
    $(this).addClass("on");
    $(".game-more").hide();
    $(".game-more").eq($(this).index()).show();
    $(".top3-list").hide();
    $(".top3-list").eq($(this).index()).show();
    $(".game-list").hide();
    $(".game-list").eq($(this).index()).show();

})

// 资讯列表tab
$(".tab5").on("click",function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".content5").eq($(this).index()).addClass("on").siblings().removeClass("on");
})


    
