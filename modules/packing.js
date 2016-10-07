/**
 *
 * Created by Lam on 2016/10/7.
 */
define(function (require, exports, module) {
    var Packing = {
        Load: function () {
            Packing.showall();
            $(".select-choosec").each(function () {
                $(this).find(".choosec ul li").each(function (i) {
                    $(this).click(function () {
                        $(this).parent().find("li").removeClass("selected")
                        $(this).addClass("selected")
                        var selectchoosec = $(this).parent().parent().parent();
                        var li = $(this);
                        Packing.showHide(selectchoosec, i, li)
                    });
                });
            });

        },
        //显示回到顶部
        showHide: function (selectchoosec, j, li) {
            var dataid = li.attr("data-id");
            if (dataid == 0) {
                var hi = $(window).scrollTop() + 1;
                $(window).scrollTop(hi)
                li.attr("data-id", "1")
            }
            selectchoosec.find(".selectc").hide();
            selectchoosec.find(".selectc").eq(j).show();
        },
        //tab栏
        showall: function () {
            $(".select-choosec").each(function () {
                $(this).find(".selectc").hide();
                $(this).find(".selectc").eq(0).show();
            })
        }
    };
    module.exports = { "BindEvent": Packing.Load };
});

