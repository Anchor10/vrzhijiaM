
// 专题介绍
$(function(){
    $(".spread").on("click",function(){
        if($(this).hasClass("rotated")){
            $(this).removeClass("rotated");
            $(".topic-intro p").removeClass("p-auto");
        }else{
            $(this).addClass("rotated");
            $(".topic-intro p").addClass("p-auto");
        }
    })
})

// 游戏列表切换
$(function(){
    $(".tab-list").on("click",".tab-item",function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab-game").eq($(this).index()).show().siblings().hide();
    })
})