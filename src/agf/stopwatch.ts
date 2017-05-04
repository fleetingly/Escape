/*
 *  stopwatch.ts
 *  egret
 *  Anansi Game Framework
 *
 *  Created by Chen Zhen on 17/01/17.
 *  Copyright (c) 2016年 Anansi Mobile. All rights reserved.
 */

module agf {

    /** 秒表，用于记录游戏时间。 */
    export namespace stopwatch {
        let _now:number = 0;
        let lastTick:number = 0;
        
        /** 开始计时 */
        export function start(t:number): void {
            // stop first
            stop();

            _now = t;
            lastTick = egret.getTimer();
            egret.startTick(onTick, null);
        }

        /** 停止计时 */
        export function stop(): void {
            egret.stopTick(onTick, null);
        }

        function onTick(t:number):boolean {
            let dt = t - lastTick;
            _now += dt;
            lastTick = t;
            return false;
        }

        /** 当前游戏时间戳，秒 */
        export function now():number {
            return Math.floor(_now / 1000);
        }

        /** 当前游戏时间戳，毫秒 */
        export function nowMS():number {
            return Math.floor(_now);
        }
    }
}