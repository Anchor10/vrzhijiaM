$(function () {
    var iobox = 'http://xapi.3733.com/mobile.php/Mobile/Game/sub/appid/6043.html';
    var azbox = 'http://www.apk8.com/gourl.php?gtype=box';
    var ucbox = 'http://down2.uc.cn/ucbrowser/v2/down.php?pub=ctt89318@yueyouwq1&id=145';
    var iogame = 'http://xapi.3733.com/mobile.php/Mobile/Game/sub/appid/6043.html';
    var azgame = 'http://app.ercy.vip/direct/csandroid_zuiben';
    var ua = navigator.userAgent.toLowerCase();
    var platform = {
        ios: function () {
            return (/iphone|ipad|ipod|ios/i.test(ua));
        },
        android: function () {
            return (/android/i.test(ua));
        }
    }
    if (platform.ios()) {
        var sys = 1;
        $("#url").attr("href", iobox);
        $("#boxurl").attr("href", iobox);
    } else {
        if (azgame.indexOf("www.apk8.com/gourl.php?gtype=box") !== -1 || azgame.indexOf("xiazai.3733.com") !== -1) {
            $("#url").attr("href", azbox);
        } else {
            $("#url").attr("href", ucbox);
        }
        $("#boxurl").attr("href", azbox);
    }
    $(".pgx").on('click', function () {
        if ($(this).attr("data-value") == 1) {
            $(this).attr("data-value", '2');
            $("input:radio[name='syb']").attr("checked", "checked");
            $("#url").find("em").html('高速下载');
            if (sys == 1) {
                $("#url").attr("href", iobox);
            } else {
                $("#url").attr("href", azbox);
            }
            // $("#url").removeClass("tc");
            
        } else {
            $(this).attr("data-value", '1');
            $("input:radio[name='syb']").attr("checked", false);
            $("#url").find('em').html("普通下载");
            // $("#url").addClass("tc");
            if (sys == 666) {
                $("#url").attr("href", iogame);
            } else {
                $("#url").attr("href", azgame);
            }
            
        }
    });
})