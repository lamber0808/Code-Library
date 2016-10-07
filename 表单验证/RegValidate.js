
/*
* 注册验证
*/

$(function () {

    $("input[name='btnReg']").click(function () {
        if (validateSub())
            return true;
        else
            return false;
    });

});


function validateSub() {
    var txtNameObj = $("input[name='txtName']");
    var txtPwdObj = $("input[name='txtPwd']");
    var txtPwd2Obj = $("input[name='txtPwd2']");
    var txtCode = $("input[name='vcode']");
    var txttelcode = $("input[name='telcode']");
    if (emptyValidate(txtNameObj.val()) == false) {
        Base.Alert("用户名不能为空");
        return false;
    }
    if (lenVal(txtNameObj.val(), 6, 24) == false) {
        Base.Alert("用户名长度不匹配");
        return false;
    }
    if (emptyValidate(txtPwdObj.val()) == false) {
        Base.Alert("密码不能为空");
        return false;
    }
    if (lenVal(txtPwdObj.val(), 8, 20) == false) {
        Base.Alert("密码长度不匹配");
        return false;
    }
    if (repeatVal(txtPwdObj.val()) == false) {
        Base.Alert("密码不能使用超过三个相同的字符或数字");
        return false;
    }
    if (equalVal(txtNameObj.val(), txtPwdObj.val()) == true) {
        Base.Alert("用户名和密码不能相同");
        return false;
    }
    if (emptyValidate(txtPwd2Obj.val()) == false) {
        Base.Alert("确认密码不能为空");
        return false;
    }
    if (lenVal(txtPwd2Obj.val(), 8, 20) == false) {
        Base.Alert("确认密码长度不匹配");
        return false;
    }
    if (equalVal(txtPwdObj.val(), txtPwd2Obj.val()) == false) {
        Base.Alert("两次密码不一致");
        return false;
    }
    if (emptyValidate(txtCode.val()) == false) {
        Base.Alert("验证码不能为空");
        return false;
    }
//    if (emptyValidate(txttelcode.val()) == false) {
//        Base.Alert("手机验证码不能为空");
//        return false;
//    }
    return true;
}

//为空验证
function emptyValidate(obj) {
    obj = $.trim(obj);
    if (!obj)
        return false;
    else
        return true;
}

//长度验证
function lenVal(obj, minLeg, maxLeg) {
    if (obj.length > minLeg - 1 && obj.length < maxLeg + 1)
        return true;
    else
        return false;
}

//两值验证
function equalVal(obj, obj2) {
    if (obj != obj2)
        return false;
    else
        return true;

}

//规律验证，连续超过三个相同的字符返回false
function repeatVal(obj) {
    var arr = obj.split("");
    var before = "";
    var currCount = 1;  //重复次数
    var hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            hash[elem] = true;
            currCount = 1;
        } else {
            if (before == elem) {
                currCount++;
            }

        }
        before = elem;
        if (currCount > 3) {
            return false;
        }
    }
    return true;
}

