/*
 *  HttpClient.ts
 *  egret
 *  Anansi Game Framework
 *
 *  Created by Chen Zhen on 16/09/22.
 *  Copyright (c) 2016年 Anansi Mobile. All rights reserved.
 */
var agf;
(function (agf) {
    var device_id = null;
    /**
     * 检查设备id。
     */
    function checkDeviceId() {
        if (device_id != null && device_id.length > 0)
            return;
        device_id = egret.localStorage.getItem('device_id');
        if (device_id == null || device_id.length <= 0) {
            device_id = generateDeviceId();
            egret.localStorage.setItem('device_id', device_id);
        }
    }
    function generateDeviceId() {
        return uuid();
    }
    /**
     * 生成一个uuid
     */
    function uuid() {
        // RFC4122规范( https://tools.ietf.org/html/rfc4122 )，这里暂时就完全随机。[zhen.chen]
        var s = [];
        var hex = '0123456789abcdef';
        for (var i = 0; i < 36; ++i) {
            s[i] = hex.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[8] = s[13] = s[18] = s[23] = '-';
        return s.join('');
    }
    /**
     * 获取设备id
     * 这里所说的设备id，目前的实现方式是使用egret.localStorage保存一个随机生成的uuid
     */
    function getDeviceId() {
        checkDeviceId();
        return device_id;
    }
    agf.getDeviceId = getDeviceId;
    /**
     * 格式化字符串，{key}的替换形式
     */
    function format(fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var k in args) {
            fmt = fmt.replace('{' + k + '}', String(args[k]));
        }
        return fmt;
    }
    agf.format = format;
    /**
     * 格式化时间，00:00
     */
    function tformat2(t) {
        var t1 = Math.floor(t / 60);
        var t2 = Math.floor(t % 60);
        return numberpad(t1, 2) + ':' + numberpad(t2, 2);
    }
    agf.tformat2 = tformat2;
    /**
     * 格式化时间，00:00:00
     */
    function tformat3(t) {
        var t1 = Math.floor(t / 3600);
        var t2 = Math.floor((t % 3600) / 60);
        var t3 = Math.floor((t % 3600) % 60);
        return numberpad(t1, 2) + ':' + numberpad(t2, 2) + ':' + numberpad(t3, 2);
    }
    agf.tformat3 = tformat3;
    var MAX_NUM_PADDING = 10;
    /**
     * 整数补位，最多支持10位
     * n: 整数
     * p: 位数
     */
    function numberpad(n, p) {
        if (p <= 1 || p > MAX_NUM_PADDING)
            return String(n);
        var pad = '';
        for (var i = p; i > 1; --i) {
            if (n < Math.pow(10, (i - 1)))
                pad += '0';
        }
        return pad + n;
    }
    agf.numberpad = numberpad;
    var NUM_UNIT = ['', 'K', 'M', 'B', 'T', 'Q',];
    /**
     * 格式化数值，会在数值较大时使用K/M/B/T/Q代替。
     * ref: https://zh.wikipedia.org/wiki/%E8%A5%BF%E6%96%B9%E7%9A%84%E6%95%B0%E5%AD%97%E5%91%BD%E5%90%8D%E6%B3%95
     */
    function largeNum(n) {
        var uid = 0;
        for (var i = 1; i <= NUM_UNIT.length; ++i) {
            if (n < Math.pow(1000, i))
                break;
            uid++;
        }
        if (uid == NUM_UNIT.length) {
            uid--;
        }
        return String(Math.floor(n / (Math.pow(1000, (uid - 1))) / 10) / 100) + NUM_UNIT[uid];
    }
    agf.largeNum = largeNum;
    /** 计算两个矢量的夹角 */
    function calcVectorAngle(v1, v2) {
        var dot = v1.x * v2.x + v1.y * v2.y;
        var len1 = Math.sqrt(Math.pow(v1.x, 2) + Math.pow(v1.y, 2));
        var len2 = Math.sqrt(Math.pow(v2.x, 2) + Math.pow(v2.y, 2));
        return Math.acos(dot / (len1 * len2));
    }
    agf.calcVectorAngle = calcVectorAngle;
})(agf || (agf = {}));
//# sourceMappingURL=utils.js.map