/**
 *
 * Created by Lam on 2016/10/7.
 */
define(function (require, exports, module) {
    var Design = {
        Load: function () {
            $(".tab-t").each(function (index) {
                var thisg = $(this);
                thisg.click(function () {
                    $(".tab-t").removeClass("xiao_now");
                    $(this).addClass("xiao_now");
                    $(".tab-box").hide();
                    $(".tab-box").eq(index).show();
                    $(".applyBtn").hide();
                    $(".applyBtn").eq(index).show();
                    $(".banner-box").attr("src", $(this).attr("dataid"));
                    $(".banner-box").attr("alt", $(this).attr("dataip"));
                });

            });
            $(".search-box0").click(function () {

                $("#form-box0").submit();
            });
            $(".search-box1").click(function () {
            })

        }
    };
    module.exports = { "BindEvent": Design.Load };  /*只把BindEvent函数暴露给外部*/
});
