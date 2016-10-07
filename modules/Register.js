/**
 *
 * Created by Lam on 2016/9/26.
 * Judge方法(callback, text, isCheck)，jquery添加的属性；
 */
/*
* 怎么样验证和手机验证码是否正确
* */
define(function (require, exports, module) {
    var wait = 60; //时间
    var SnedOk = 0;
    var Register = {
        Load: function () {
            //1.0 小美服务条款弹窗
            $("#btnFu").on("click", function () {
                layer.open({
                    type: 2,
                    title: 'XX服务条款',
                    shadeClose: true,
                    shade: 0.3,
                    area: ['600px', '60%'],
                    content: '/terms.html' //iframe的url
                });
            });
            //2.0 点击一下就更换验证码；
            $(".i-fresh").click(function () {
                //发送请求；
                $(".code-css").attr("src", "/Models/ValidateCodeImg.ashx?sb=" + Math.random());
            });

            //3.0 点击获取获取手机验证码
            $("#sendsns").click(function () {
                SnedOk++;
                var issend = true;
                var isCode = true;
                var User_Phone = $("#User_Phone");
                var UserCode = $("#UserCode");

                //验证手机号码
                issend = User_Phone.Judge(function () {
                    if (!Util.isPhoneNum(User_Phone.val())) {
                        return false;
                    }
                }, "请输入正确的手机号码", true);

                //验证验证是否为零
                isCode = UserCode.Judge(function () {
                    if (UserCode.val().length == 0) {
                        return false;
                    }
                }, "请输入验证码", true);

                if (issend && isCode) {
                    $.ajax({
                        //发送ajax请求数据
                        url: "/Login/SendSMsProc/" + User_Phone.val(),
                        type: "post",
                        data: { username: $("#User_Name").val(), userCode: UserCode.val() },
                        dataType: "json",
                        //发送成功后的回调
                        success: function (ret) {
                            //0 表示发送成功；
                            if (ret.ret == 0) {
                                layer.msg("如果您在1分钟内没有收到验证码，请检查您填写的手机号码是否正确或重新发送");
                                //验证码和秒数
                                Register.SendSms($("#sendsns"));
                            } else {
                                layer.msg(ret.msg);
                            }
                        }
                    });
                } else {
                    layer.msg("请填写正确的手机号码");
                }

            });
            //4.0 点击立即注册
            $("#btnlogin").on("click", function () {
                //发送验证;
                var issubmit = Register.checkReg(true);
                if (issubmit) {
                    $("#froms").submit();
                }
            });
            // 当输入域发生变化时改变其颜色：
            $("form input").change(function () {
                Register.checkReg();
            });
        },

        //点击注册执行的验证方法；
        checkReg: function (isCheck) {
            //默认设置false ;
            var flag2 = false, flag3 = false; flag4 = false; flag5 = false, flag6 = false;

            //验证手机
            var User_Phone = $("#User_Phone");
            flag4 = User_Phone.Judge(function () {
                //验证手机的规则
                if (!Util.isPhoneNum(User_Phone.val())) {
                    return false;
                }
            }, "请输入正确的手机号码", isCheck);
            //验证码，
            var UserCode = $("#UserCode");
            flag6 = UserCode.Judge(function () {
                if (UserCode.val().length <= 0) {
                    return false;
                }
            }, "请输入验证码", isCheck);

            //验证手机验证码
            var SendValue = $("#SendValue");
            flag5 = SendValue.Judge(function () {
                if (SendValue.val().length <= 0 || SnedOk == 0) {
                    return false;
                }
            }, "请输入手机验证码");

            //第一次密码的验证
            var User_Pass = $("#User_Pass");
            flag2 = User_Pass.Judge(function () {
                if (User_Pass.val().length < 6) {
                    return false;
                }
            }, "请输入5位以上的密码", isCheck);
            //第二次密码的验证
            var User_Pass1 = $("#User_Pass1");
            flag3 = User_Pass1.Judge(function () {
                if (User_Pass1.val() != User_Pass.val() || User_Pass1.val().length <= 0) {
                    return false;
                }
            }, "两次密码不一致", isCheck);
            //验证成功；
            if (!flag2 || !flag3 || !flag4 || !flag5 || !flag6 || SnedOk == 0) {
                return false;
            } else {
                return true;
            }
        },
        //获取验证码和秒数方法；
        SendSms: function (o) {
            if (wait == 0) {
                o.text("点击发送验证码"); //改变按钮中value的值
                wait = 60;
            } else {
                o.text(wait + "秒后重新获取"); //改变按钮中value的值
                wait--;
                setTimeout(function () {
                    Register.SendSms(o); //循环调用
                }, 1000)
            }
        }
    };

    module.exports = { "bindEvent": Register.Load };  /*只把bindEvent函数暴露给外部*/
});
