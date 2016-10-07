var ConfigCdn="http://cdn.xiaomeij.com";

var Cookie = {};
Cookie.get = function (sName, sDefaultValue) { var sRE = "(?:; |^)" + sName + "=([^;]*);?"; var oRE = new RegExp(sRE); if (oRE.test(document.cookie)) { return unescape(RegExp["$1"]); } else { return sDefaultValue || null; } };
Cookie.set = function (sName, sValue, iExpireSec, sDomain, sPath, bSecure) { if (!sName) { return; } if (!sValue) { sValue = ""; } var str = sName + "=" + escape(sValue) + "; "; if (!isNaN(iExpireSec)) { var oDate = new Date(); oDate.setTime(oDate.getTime() + iExpireSec * 1000); str += "expires=" + oDate.toGMTString() + "; "; } if (sDomain) { str += "domain=" + sDomain + "; "; } if (sPath) { str += "path=" + sPath + "; "; } else { str += "path=/; "; } if (bSecure) { str += "secure"; } document.cookie = str; };
Cookie.clear = function (sName) { Cookie.set(sName, "", new Date(0)); };

var Util = {};

Util.encodeHtml = function (s) { /*消除XSS*/
    REGX_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
    return (typeof s != "string") ? s : s.replace(REGX_HTML_ENCODE, function ($0) {
        var c = $0.charCodeAt(0), r = ["&#"];
        c = (c == 0x20) ? 0xA0 : c;
        r.push(c);
        r.push(";");
        return r.join("");
    });
};
Util.intToData = function (num) { //num形式为：201502131019
    var unixTimestamp = new Date(num * 1000);
    var commonTime = unixTimestamp.toLocaleString()
    return commonTime;
};

Util.confirm = function (text, callback) {
    layer.confirm(text, {
        btn: ['确定', '取消'],
        shade: false,
        offset: '25%'
    }, callback);

}
Util.alert = function (text) {
    layer.alert(text, { offset: '25%' });

}

Util.isEmail = function (str) { /*是否是合法的email*/
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return reg.test(str);
};

Util.isPhoneNum = function (str) { /*是否是合法的电话号码*/
    return /^(0[0-9]{2,3}[-]?)?[0-9]{7,8}(-[0-9]{1,8})?$/.test(str) || /^1[3578]{1}[0-9]{9}$/.test(str);
};
Util.isPhone = function (str) { /*是否是合法的电话号码*/
    return /^1[3578]{1}[0-9]{9}$/.test(str);
};
Util.isPositiveInt = function (str) {/*是否是正整数*/
    var reg = /^[0-9]*[1-9][0-9]*$/;
    return reg.test(str);
};

Util.isNum = function (str) {/*是否是数字*/
    var reg = /^[0-9][0-9]*(\.[0-9]+)?$/;
    return reg.test(str);
};
Util.isZipcode = function (str) {/*是否是邮编*/
    var reg = /^[1-9][0-9]{5}$/;
    return reg.test(str);
}
Util.addToken = function (param) { /*除登录页外，其他页面的所有请求都必须用Util.addToken加上token参数*/
    if (!this.token)
        this.token = 0;
    if ("string" == typeof (param)) {
        if (-1 != param.indexOf("="))
            param += "&token=" + this.token;
        else
            param += "?token=" + this.token;
    }
    else if ("object" == typeof (param)) {
        if (null == param)
            param = {};
        param.token = this.token;
    }
    return param;
};
Util.isLeapYear = function (Year) {
    if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0))
        return true;
    else
        return false;
};
Util.formatSTR = function (t_t) {
    return t_t > 9 ? t_t : "0" + t_t;
};
Util.IntToDate = function (str) {/*时间戳转换成时间*/
    var newDate = new Date();
    newDate.setTime(str * 1000);
    return newDate.format('yyyy-MM-dd h:m:s');
};
 


Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}


$.fn.Judge = function (callback, text, isCheck) { /*输入判断*/
    var isOk = callback();
    if (this.val().length == 0 && !isCheck) {
        return;
    }
    var isTrue = false;
    this.parent().parent().find(".i-tip,.tips-error").remove();

    if (this.attr("type") == "text")
        this.parent().parent().find("input").removeClass("input-focus");
    if (typeof (isOk) == "boolean" && !isOk) {
        var eml = this;
        this.parent().append('<i class="i-tip i-error">');
        this.parent().parent().append('<p class="tips-error">' + text + '</p>');
        if (this.attr("type") == "text")
            this.addClass("input-focus");
    } else {
        isTrue = true;
        this.parent().append('<i class="i-tip i-ok"></i>');
    }
    return isTrue;
};
/*
* common.js==main.js
* */

/*seajs配置*/
(function () {
    seajs.config({
        //base: 'http://cdn.xiaomeij.com/Scripts/View/',
        //base(基本路径):设定一个统一的基本路径。在seajs.use()的时候可以省略掉，达到了代码的精简
        base: ConfigCdn + '/Scripts/View/',
        //设置别名，用前面的替代后面的；
        alias: { /*alias下指定的js文件的路径之前会加上base配置的值，注意加上版本号v*/
            'lib_Default_Index': 'Default/index.js?v=20150811',
            'lib_Product_Index': 'Product/index.js?v=20150811',
            //注册模块
            'lib_Login_Register': 'Login/Register.js?v=20160526',
            //登录模块
            'lib_Login_Login': 'Login/Login.js?v=20151023',
            //个人中心模块
            'lib_Users_Index': 'Users/Index.js?v=20160126',
            'lib_Users_UserOrders': 'Users/UserOrders.js?v=20160126',
            'lib_Integral_Index': 'Users/IntegralIndex.js?v=20150820',
            'lib_Favor_Index': 'Users/FavorIndex.js?v=20150918',
            'lib_Address_Index': 'Users/AddressIndex.js?v=20150821',
            'lib_Balance_Index': 'Users/BalanceIndex.js?v=20150822',
            'lib_Password_Modify': 'Users/PasswordModify.js?v=20151007',
            'lib_Email_Modify': 'Users/EmailModify.js?v=20150928',
            'lib_Phone_Modify': 'Users/PhoneModify.js?v=20150928',
            'lib_Product_Item': 'Product/Item.js?v=20150824',
            'lib_Product_DiyItem': 'Product/DiyItem.js?v=20160422',
            'lib_Product_Customize': 'Product/Customize.js?v=20150904',
            'lib_UserInfor_Index': 'Users/UserInforIndex.js?v=20160107',
            'lib_Order_Detail': 'Users/OrderDetail.js?v=20151102',
            'lib_Cart_Index': 'Cart/Index.js?v=20150825',
            'lib_Cart_Settlement': 'Cart/Settlement.js?v=20160520',
 	        'lib_Cart_SaoYiSao': 'Cart/SaoYiSao.js?v=20160525',
            'lib_Cart_Address': 'Cart/Address.js?v=20151105',
            'lib_User_Work': 'Users/UserWork.js?v=20150827',
            'lib_Discount_Index': 'Discount/Index.js?v=20150831',
            'lib_Login_FindPwd': 'Login/FindPwd.js?v=20151007',
            'lib_Login_CheckUserAction': 'Login/CheckUserAction.js?v=20160606',
            'lib_Cart_AddOrder': 'Cart/AddOrder.js?v=20150905',
            'lib_UserOrders_Evaluation': 'Users/Evaluation.js?v=20151106',
            'lib_ApplyDesigner': 'Users/ApplyDesigner.js?v=20150910',
            'lib_DesigerIndex': 'Users/DesigerIndex.js?v=20150911',
            'lib_ModifyDesigner': 'Users/ModifyDesigner.js?v=20150924',
            'lib_Designer': 'Designer/Home.js?v=20150926',
            'lib_AddWork': 'Designer/AddWork.js?v=20150929',
            'lib_EditWork': 'Designer/EditWork.js?v=20160108',
            'lib_Recharge': 'Users/Recharge.js?v=20151009',
            'lib_ManuApply': 'Designer/ManuApply.js?v=20151127',
            //招商加盟
            'lib_Design': 'Designer/Design.js?v=20151128',
            'lib_Manufacture': 'Designer/Manufacture.js?v=20151201',
            'lib_AddCooperativeCase': 'Designer/AddCooperativeCase.js?v=20151203',
            'lib_EditCooperativeCase': 'Designer/EditCooperativeCase.js?v=20160109',
            'lib_EditManuInfor': 'Designer/EditManuInfor.js?v=20151212',
            'lib_UserOrders_ExchangeGoods': 'Users/ExchangeGoods.js?v=20160114',
            'lib_Login_LoginBox': 'Login/LoginBox.js?v=20160121',
            //小美包装
            'lib_Index_Packing': 'Index/Packing.js?v=20160419'

        }
    });
})();

window.onscroll = function () {
    if (document.getElementById("tops") != null && typeof document.getElementById("tops") != "undefined") {

        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
            document.getElementById("tops").style.display = "block";
        }
        else {
            document.getElementById("tops").style.display = "none";
        }

    }
}

$(function () {
    $(".pack_class").pin();
    //会员中心导航
    $(".nav li h4").click(function () {
        $(this).parent("li").toggleClass("fold");
    });
    $(".kefuqq").click(function () {
        $(".home-wrap").append('<iframe  src="http://wpa.qq.com/msgrd?v=3&uin=2409246178&site=qq&menu=yes" WIDTH="0px" HEIGHT="0px" class="openQq"></iframe>');
        return false;
    });
    $("img.lazy").lazyload({ effect: "fadeIn" });
    //头部购物车
    $(".J-my-cart").hover(function () {
        $(this).addClass("my-cart-hover")
            .find(".J-goods-list").show();
    }, function () {
        $(this).removeClass("my-cart-hover")
            .find(".J-goods-list").hide();
    });
    //配送地址
    if ($(".address_addr").length > 0) {

        var UserProvinceID = Cookie.get("UserProvinceID");

        var address_addr = '';
        var curraddress = '';
        for (var i in area_array) {
            if (i != 0) {
                if (UserProvinceID == i) {
                    curraddress = area_array[i];
                    address_addr += "<a href='javascript:void(0);' rel='" + i + "' class='selectaddress address_now'>" + area_array[i] + "</a>";
                } else {
                    address_addr += "<a href='javascript:void(0);' rel='" + i + "' class='selectaddress'>" + area_array[i] + "</a>";
                }

            }
        }
        $("#curraddress").text(curraddress);
        $(".address_addr").html(address_addr);
        selectaddress();

    }
});

function selectaddress() {
    $(".selectaddress").click(function () {
        var province = $(this).attr("rel");
        Cookie.set("UserProvinceID", province);
        location.reload();
    });
}