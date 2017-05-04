/*
 *  stopwatch.ts
 *  egret
 *  Anansi Game Framework
 *
 *  Created by Chen Zhen on 17/01/17.
 *  Copyright (c) 2016年 Anansi Mobile. All rights reserved.
 */
var agf;
(function (agf) {
    /** 秒表，用于记录游戏时间。 */
    var stopwatch;
    (function (stopwatch) {
        var _now = 0;
        var lastTick = 0;
        /** 开始计时 */
        function start(t) {
            // stop first
            stop();
            _now = t;
            lastTick = egret.getTimer();
            egret.startTick(onTick, null);
        }
        stopwatch.start = start;
        /** 停止计时 */
        function stop() {
            egret.stopTick(onTick, null);
        }
        stopwatch.stop = stop;
        function onTick(t) {
            var dt = t - lastTick;
            _now += dt;
            lastTick = t;
            return false;
        }
        /** 当前游戏时间戳，秒 */
        function now() {
            return Math.floor(_now / 1000);
        }
        stopwatch.now = now;
        /** 当前游戏时间戳，毫秒 */
        function nowMS() {
            return Math.floor(_now);
        }
        stopwatch.nowMS = nowMS;
    })(stopwatch = agf.stopwatch || (agf.stopwatch = {}));
})(agf || (agf = {}));
//# sourceMappingURL=stopwatch.js.map