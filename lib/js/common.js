

// 隐藏快捷菜单
$(function () {
    var a = $(".nav li a"),
        c = $(".cover"),
        d = $(".hide-menu"),
        e = $(".top-more");
    $(".top-more").bind("click", function () {
            c.show(), d.removeClass("slidOut").addClass("slidIn"), e.addClass("menu-show")
        }),
        $(".cover,.hide-menu .hd em").bind("click", function () {
            d.removeClass("slidIn").addClass("slidOut"), c.hide(), e.removeClass("menu-show")
        }), c.css("height", $(document).height() + "px"), $(window).bind("resize", function () {
            c.css("height", $(document).height() + "px")
        }), d.bind("click", function (a) {
            a.stopPropagation()
        }), $(".cover,.hide-menu").bind("touchmove", function (a) {
            a.preventDefault()
        });
});
// 返回顶部
$(function(){
    var totop = $("<div class='totop' style='width: 40px; height: 40px; position: fixed; right: 15px; bottom: 70px; z-index: 999; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADX0lEQVRoQ+2YTehVVRTFf0slQ5SgaGAgNBFp0iQozQgimxRUkCAE2qhG2iDIWWjgsEGgoxqZYEQNTFCJjELpw0ENmjQISnBQEDQQiRBtyZJrPN//3Pvuux+IcPfkDe456+y19zlr7/3EXW66y/1nInCnMzhlYMpAzwhMV6hnAHtvHy0DtrcCbwEPAPsl/djb2wLAKARsPw98DqypzrwKPCfp3NAkBidgewdwCrhnztl/gGcl/TAkiUEJVNfma+DeGievANsl/TwUicEI2H4M+AZYv8C5v4GnJP0yBIlBCNh+BPgeuK+lU38BT0j6veX62mW9CdjeDHwLPFg45SKwFthY+Hapuk757Wy9CNjeBFyocfCPOFgpUR7u/TUEH5eUjHSyzgRsJ6rfAQ8XTs493yrp13yz/SgQCS1dsbyFvInsWdo6EbCdaCaquT7zVlSa6pGHxLrCnqhS1Cl7l7KlCdhOFONIojpvjVpv+2ngy0KNCE4CkjoRjNa2FAHbiV6cj2TOW6tqW1Xpk8DqAkawU7GD1cpaE7Cd4vQFkCjO23XgRUmn25xqexdwHFhVWB+MlyRda4PVioDt9DRngLQJ8/Yf8KqkT9oceGuN7d3ARzV7TgCvSAp2oy0kYDup/gx4uQZpj6Rjiw4qfbe9FzhcszeYr0lyE3YjAdv5/jGQlJdsn6QjXZyfycQB4GANxoeS3uhD4APg9RqAg5Le7eP8DIlkIdko2XuS3q47pzYDtptAj0jaN4TzMyTyHvIuSvaOpEOlD0UCtpvSekzSniGdD5btKFKUaanruoLAgocVpYniLFSHLgQrwUiNyERXshWCcRsB27nvufcliz5H66P5o5ntTHKp1qV6s0Ky/ydQFZcoTulaLV0h+zCsKv5XaQgLOLcVzZvO2o7GR+tL5b1Tj9KHQOVTJrvMGaWeK63GC5LOynZ69oyCt/5BmD27c5fYl0BFoqnr/Rd4JgQyCpZSlV4+PX2nPn0IAhWJprnjpxC4DGyYOzCj4JOSMlXdcWuY/P4MgU+BnTNexukM3L1m1aFZV7P3/Gh6NAQeqhqqdJrngTcl/Ta0A0Pg2d4CvA9sq1r7vQu70SEOHhNjIjBmdNtgTxloE6Ux10wZGDO6bbCnDLSJ0phrpgyMGd022DcAdWUS0h9E6KMAAAAASUVORK5CYII=) center center no-repeat;background-color:rgba(0,0,0,0.5); background-size: 70%; border-radius: 17%; display: none;'></div>");
    $("body").append(totop);
    $(document).on("scroll",function(){
        if($(document).scrollTop()>=300){
            totop.show();
        }else{
            totop.hide();
        }
    })
    totop.on("click",function(){
        $("html,body").animate({scrollTop:0},500);
    })
})


// $(function () {
//     $(".mar-out").marquee({
//         yScroll: "bottom",
//         showSpeed: 850, 
//         scrollSpeed: 8, 
//         pauseSpeed: 100, 
//         pauseOnHover: true, 
//         loop: -1,  
//         fxEasingShow: "swing", 
//         fxEasingScroll: "linear", 
//         cssShowing: "marquee-showing" 

//     });
// });
