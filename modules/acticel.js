/**
 *
 * Created by Lam on 2016/10/7.
 */
$(function () {
    var el = $(".device");
    var w = $('.scroll li').width() + 16; // 一屏图片的宽度
    el.each(function () {
        var LiLength = $(this).find("ul li").length;
        if (LiLength > 3) {
            $(this).find(".next").show();
        }
    });

    //相册轮播图
    $(".next").click(function () {
        var length = ($(this).parent().next().children("ul").children("li").length - 3) * w;
        var thisLeft = parseInt($(this).parent().next().children("ul").css("left").replace("px", ""));
        $(this).parent().next().children("ul").animate({ left: thisLeft - w });

        if (thisLeft - w == -length) {
            $(this).hide();
        }

        $(this).parent().find(".pre").show();

    });
    $(".pre").click(function () {
        var thisLeft = parseInt($(this).parent().next().children("ul").css("left").replace("px", ""));
        $(this).parent().next().children("ul").animate({ left: thisLeft + w });
        if (thisLeft + w == 0) {
            $(this).hide();
        }
        $(this).parent().find(".next").show();
    });
})

