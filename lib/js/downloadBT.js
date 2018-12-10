
$(".game-intro .read-more").on("click", function () {
    readMore(".game-intro");
})
$(".feature .read-more").on("click", function () {
    readMore(".feature");
})

function readMore(str1) {
    if ($(str1).hasClass("on")) {
        $(str1).removeClass("on");
        $(str1).find(".read-more p").html("查阅更多");
    } else {
        $(str1).addClass("on");
        $(str1).find(".read-more p").html("收起内容");
    }
}

var mySwiper1 = new Swiper('#swiper1', {
    freeMode: true,
    freeModeMomentumBounce: false,
    freeModeMomentumRatio : 0.5,
    slidesPerView: 'auto',
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: false,
    },
});

// 最新游戏
var mySwiper4 = new Swiper('#swiper4', {

    slidesPerView: 4,
    observer: true,
    observerParents:true,
})
var mySwiper5 = new Swiper('#swiper5', {

    slidesPerView: 4,
    observer: true,
    observerParents:true,
})
$(function () {
    $("#swiper5").css("display", "none");
    $(".on4").on("click", function () {
        $(".hd ul li").removeClass("on");
        $(this).addClass("on");
        $("#swiper5").hide();
        $("#swiper4").show();
    })
    $(".on5").on("click", function () {
        $(".hd ul li").removeClass("on");
        $(this).addClass("on");
        $("#swiper5").show();
        $("#swiper4").hide();
    })
})


//   tab
$(function () {
    $("#swiper3").hide();
})
$(".cur2").on("click", function () {
    $(".like-tab h4").removeClass("cur");
    $(this).addClass("cur");
    $("#swiper3").hide();
    $("#swiper2").show();
})
$(".cur3").on("click", function () {
    $(".like-tab h4").removeClass("cur");
    $(this).addClass("cur");
    $("#swiper3").show();
    $("#swiper2").hide();
})


//图片点击放大
$.fn.ImgZoomIn = function () {
    var window_h = $(window).height();
    var scroll_h = $(window).scrollTop();
    bgstr = '<div id="ImgZoomInBG" style="position: fixed;left:0;top:0;right:0;bottom:0;margin:auto;opacity:0;z-index: 10000;background-color: #000;width:0px;height:0;max-width:640px;"></div>';
    imgstr = '<img id="ImgZoomInImage" src="' + $(this).attr('src') + '" style="cursor:pointer; position:fixed; z-index:10001;left:0;top:0;right:0;bottom:0;margin:auto;width:0px;max-width:576px;opacity:0;" />';
    closestr = '<span id="close" style="position:absolute;left:50%;bottom:5px;margin-left:-20px;line-height:35px;text-align:center;opacity:1;display:block;z-index:10005;height:40px;width:40px;font-size:40px;background:#000;color:#fff;border-radius:50%;border:2px solid #fff;">×</span>'
    if ($('#ImgZoomInBG').length < 1) {
        $('body').append(bgstr);
        // $('#ImgZoomInBG').append(closestr);        
    }
    if ($('#ImgZoomInImage').length < 1) {
        $('body').append(imgstr);
    } else {
        $('#ImgZoomInImage').attr('src', $(this).attr('src'));
    }
    $('#ImgZoomInBG').animate({
        width: '100%',
        height: window_h + 'px',
        opacity: "0.7"
    }, 300);
    $('#ImgZoomInImage').animate({
        width: '90%',
        opacity: "1"
    }, 300);
    $('#ImgZoomInImage').css('top', 0 + 'px').css('left', 0 + 'px');
};
$(document).ready(function () {
    $(document).on('click', '#swiper1 img', function () {
        $(this).ImgZoomIn();
        $('body').css('overflow', 'hidden');
    });
    $(document).on('click', '#ImgZoomInImage', function () {
        $('#ImgZoomInBG').animate({
            width: '0',
            height: '0',
            opacity: "0"
        }, 300);
        $('#ImgZoomInImage').animate({
            width: '0',
            opacity: "0"
        }, 300);
        $('body').css('overflow', 'auto');
    });
});

$(function () {
    $(".more-show").on("click", function () {
        for (var i = 0; i < 5; i++) {
            $(".no").eq(0).removeClass("no");
        }
        if ($(".no").length == 0) {
            $(this).hide();
            $(".more-link").show();
        }
    })
})