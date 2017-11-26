/**
 * Created by wuqiongke703 on 16/9/5.
 */


var common = {};





common.delConfirm = function (msg) {
    return confirm(msg)
};

common.setCookie = function (name, value, expireDays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expireDays);
    var cookieData = name + "=" + escape(value) + ((expireDays == null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieData;
};

common.getCookie = function (name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + "=");
        if (start != -1) {
            start = start + name.length + 1;
            var end = document.cookie.indexOf(";", start);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(start, end));
        }
    }
};

common.deleteCookie = function (name) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() - 1);
    var value = common.getCookie(name);
    var cookieData = name + "=" + escape(value) + "; expires=" + exdate.toGMTString();
    document.cookie = cookieData;
};

common.trim = function (str) {
    if (str != undefined) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    } else {
        return str;
    }
};


common.isEmpty = function (str) {
    if (str == undefined || str == null || str == '') {
        return true;
    } else {
        return false;
    }
};

common.isNotEmpty = function (str) {
    if (str == undefined || str == null || str == '') {
        return false;
    } else {
        return true;
    }
};

common.isLegalVersion = function (version) {
    var str = version;
    var Expression = /^[1-9]\d*(\.\d+)*$/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
};

common.isInArray = function (array, obj) {
    for (var i = 0; i < array.length; i++) {
        if (obj == array[i]) {
            return true;
        }
    }
    return false;
};

common.add0 = function (num) {
    return num < 10 ? '0' + num : num;
};
common.getCurrentTime = function () {
    var time = new Date();
    return time.getFullYear() + '-' + common.add0(time.getMonth() + 1) + '-' + common.add0(time.getDate()) +
        ' ' + common.add0(time.getHours()) + ':' + common.add0(time.getMinutes()) + ':' + common.add0(time.getSeconds());
};

common.isPositiveInteger = function (num) {
    var r = /^\+?[1-9][0-9]*$/;　　//正整数
    return r.test(num);

}

export {common as default}
