/**
 *
 * Created by Lam on 2016/9/27.
 */
define(function (require, exports, module) {
    var LoginLogin = {
        Load: function () {
            $(document).keyup(function (event) {
                if (event.keyCode == 13) {
                    LoginLogin.LoginEvent();
                }
            });
        },
        LoginEvent: function () {
            var flag1 = false, flag2 = false, flag3 = false;
            //获取用户名  trim去掉字符串首尾空格
            var UserName = $.trim($("#UserName").val());
            //获取用户名称
            var UserPwd = $.trim($("#UserPwd").val());
            var UserCode = $.trim($("#UserCode").val());
            var isRemeber = $("#isRemeber").is(":checked") ? 1 : 0;
            var returnUrl = $.trim($("#returnUrl").val());
            if (returnUrl == "")
                returnUrl = '/Users/Index.html';
            if (UserName.length == 0) {
                flag1 = false;
                $(".add_loginp_01").removeClass("add_loginp").addClass("add_loginp").html("<span class=\"icon_gant\"></span>请输入账号")
                return;
            }
            else {
                flag1 = true;
            }
            if (UserPwd.length == 0) {
                flag2 = false;
                $(".add_loginp_01").removeClass("add_loginp").addClass("add_loginp").html("<span class=\"icon_gant\"></span>请输入密码")
                return;
            }
            else {
                flag2 = true;
            }
            if (isUserCode) {
                if (UserPwd.length == 0) {
                    flag3 = false;

                    $(".add_loginp_01").removeClass("add_loginp").addClass("add_loginp").html("<span class=\"icon_gant\"></span>请输入验证码")
                    return;
                } else {
                    flag3 = true;
                }
            }
            else
                flag3 = !isUserCode;

            //如果有一个为false return出去，否则发送Ajax
            if (!flag1 || !flag2 || !flag3)
                return;
            $.post("/Login/CheckLogin", {
                'UserName': UserName,
                'UserPwd': UserPwd,
                'UserCode': UserCode,
                'isRemeber': isRemeber,
                't': Math.random()
            }, function (data) {
                if (data.ret == 0) {
                    //如果登录成功，则返回数据；
                    window.location.href = returnUrl;
                } else {
                    //layer.alert(data.msg);
                    $(".add_loginp_01").removeClass("add_loginp").addClass("add_loginp").html("<span class=\"icon_gant\"></span>" + data.msg)
                    if (data.ret == 1) {
                        $(".code-css").attr("src", "/Models/ValidateCodeImg.ashx?sb=" + Math.random());
                    }
                    if (data.ret == 2 && data.num >= EorrNum) {
                        isUserCode = true;
                        $(".is-user-code").show();
                    }
                }
            });
        },
    };
    module.exports = { "BindEvent": LoginLogin.Load };  /*只把BindEvent函数暴露给外部*/
});
