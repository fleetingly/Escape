/*
 *  HttpClient.ts
 *  egret
 *  Anansi Game Framework
 *
 *  Created by Chen Zhen on 16/09/22.
 *  Copyright (c) 2016年 Anansi Mobile. All rights reserved.
 */

module agf {

    let device_id:string = null;
    
    /**
     * 检查设备id。
     */
    function checkDeviceId(): void {
        if (device_id != null && device_id.length > 0) return;

        device_id = egret.localStorage.getItem('device_id');
        if (device_id == null || device_id.length <= 0) {
            device_id = generateDeviceId();
            egret.localStorage.setItem('device_id', device_id);
        }
    }

    function generateDeviceId(): string {
        return uuid();
    }

    /**
     * 生成一个uuid
     */
    function uuid(): string {
         // RFC4122规范( https://tools.ietf.org/html/rfc4122 )，这里暂时就完全随机。[zhen.chen]
        let s = [];
        let hex = '0123456789abcdef';
        for (let i = 0; i < 36; ++i) {
            s[i] = hex.substr(Math.floor(Math.random() * 0x10), 1);
        }

        s[8] = s[13] = s[18] = s[23] = '-';
        return s.join('');
    }

    /**
     * 获取设备id
     * 这里所说的设备id，目前的实现方式是使用egret.localStorage保存一个随机生成的uuid
     */
    export function getDeviceId(): string {
        checkDeviceId();
        return device_id;
    }

    /**
     * 格式化字符串，{key}的替换形式
     */
    export function format(fmt:string, ...args:any[]): string {
        for (let k in args) {
            fmt = fmt.replace('{' + k + '}', String(args[k]));
        }
        return fmt;
    }

    /**
     * 格式化时间，00:00
     */
    export function tformat2(t:number): string {
        let t1 = Math.floor(t / 60);
        let t2 = Math.floor(t % 60);
        return numberpad(t1, 2) + ':' + numberpad(t2, 2);
    }

    /**
     * 格式化时间，00:00:00
     */
    export function tformat3(t:number): string {
        let t1 = Math.floor(t / 3600);
        let t2 = Math.floor((t % 3600) / 60);
        let t3 = Math.floor((t % 3600) % 60);
        return numberpad(t1, 2) + ':' + numberpad(t2, 2) + ':' + numberpad(t3, 2);
    }

    const MAX_NUM_PADDING = 10;

    /**
     * 整数补位，最多支持10位
     * n: 整数
     * p: 位数
     */
    export function numberpad(n:number, p:number): string {

        if (p <= 1 || p > MAX_NUM_PADDING) return String(n);

        let pad = '';

        for (let i = p; i > 1; --i) {
            if (n < 10 ** (i - 1)) pad += '0';
        }

        return pad + n;
    }

    const NUM_UNIT = [ '', 'K', 'M', 'B', 'T', 'Q', ];

    /**
     * 格式化数值，会在数值较大时使用K/M/B/T/Q代替。
     * ref: https://zh.wikipedia.org/wiki/%E8%A5%BF%E6%96%B9%E7%9A%84%E6%95%B0%E5%AD%97%E5%91%BD%E5%90%8D%E6%B3%95
     */
    export function largeNum(n:number): string {
        let uid = 0;
        for (let i = 1; i <= NUM_UNIT.length; ++i) {
            if (n < 1000 ** i) break;
            uid++;
        }

        if (uid == NUM_UNIT.length) { // 大到超出了范围
            uid--;
        }

        return String(Math.floor(n / (1000 ** (uid - 1)) / 10) / 100) + NUM_UNIT[uid];
    }

    /** 计算两个矢量的夹角 */
    export function calcVectorAngle(v1, v2: any): number {
        let dot = v1.x * v2.x + v1.y * v2.y;
        let len1 = Math.sqrt(v1.x ** 2 + v1.y ** 2);
        let len2 = Math.sqrt(v2.x ** 2 + v2.y ** 2);
        return Math.acos(dot / (len1 * len2))
    }
}