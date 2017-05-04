String.prototype.format = function (args) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] !== undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    var reg = new RegExp("(%[sd])");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};
Number.prototype.toShort = function (fix, min) {
    if (fix === void 0) { fix = 2; }
    if (min === void 0) { min = 10000; }
    if ((this < min && (this + min) > 0)) {
        return this.toFixed(0) + "";
    }
    var v = this;
    var unit = ["", "K", "M", "B", "T", "Q"]; //,"q","Q","s","S","O","N",'d','U','D'
    var counter = 0;
    while (v >= 1000 || v < -1000) {
        v /= 1000;
        counter++;
    }
    if (counter < unit.length) {
        return v.toFixed(fix) + unit[counter];
    }
    counter *= 3;
    while (v > 10) {
        v /= 10;
        counter++;
    }
    return v.toFixed(fix) + "E" + counter;
};
Number.prototype.limit = function (min, max) {
    return Math.max(Math.min(max, this), min);
};
Math.rand = function (min, max) {
    if (typeof (min) === "object") {
        var pool = [];
        for (var i = 0; i < min.length; i++)
            pool.push(i);
        return min[pool[Math.rand(0, pool.length - 1)]];
    }
    if (max !== undefined) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    else if (min !== undefined) {
        return Math.floor(Math.random() * min);
    }
    else {
        return Math.random();
    }
};
// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.format = function (fmt, useUTC) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
var g_time_offset = 0;
Date.timeS = function () {
    return Math.round(Date.timeMS() / 1000);
};
Date.timeMS = function () {
    return new Date().getTime() + g_time_offset;
};
function htmlencode(str) {
    var s = "";
    if (str.length === 0)
        return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/\'/g, "'");
    s = s.replace(/\"/g, "&quot;");
    // s = s.replace(/\n/g,"<br>");
    return s;
}
function htmldecode(str) {
    var s = "";
    if (str.length === 0)
        return "";
    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/'/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}
//# sourceMappingURL=JsUtil.js.map