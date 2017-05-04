namespace Game{
    export var data_escapeDoor : {
    	/** 目标id（公用门需要填写两条，因为对应的界面不一样） */
    	id? : number, 
    	/** 该门对应的界面 */
    	screen? : number, 
    	/** 该门在该界面中对应的块的id */
    	screen_id? : number, 
    	/** 通过该门的条件 */
    	need? : number, 
    }[] = [
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3,
            "screen": 2,
            "screen_id": 3,
            "need": 0
        },
        {
            "id": 4,
            "screen": 2,
            "screen_id": 4,
            "need": 0
        },
        {
            "id": 5,
            "screen": 1,
            "screen_id": 11,
            "need": 0
        },
        {
            "id": 6,
            "screen": 1,
            "screen_id": 48,
            "need": 0
        },
        {
            "id": 7,
            "screen": 1,
            "screen_id": 97,
            "need": 0
        }
    ];
    
    export var data_escapeObstacle : {
    	/** 目标id */
    	id? : number, 
    	/** （策划对照） */
    	name? : string, 
    	/** 图片名 */
    	image? : string, 
    }[] = [
        {
            "id": 1,
            "name": "钻石",
            "image": "diamond"
        },
        {
            "id": 2,
            "name": "炸弹",
            "image": "bomb"
        },
        {
            "id": 3,
            "name": "岩石",
            "image": "stone"
        },
        {
            "id": 4,
            "name": "炸弹NPC",
            "image": "bombMan"
        },
        {
            "id": 5,
            "name": "BOSS"
        },
        {
            "id": 6,
            "name": "白门",
            "image": "whiteDoor"
        },
        {
            "id": 7,
            "name": "黄门",
            "image": "yellowDoor"
        },
        {
            "id": 8,
            "name": "蓝门",
            "image": "buleDoor"
        },
        {
            "id": 9,
            "name": "白钥匙",
            "image": "whiteKey"
        },
        {
            "id": 10,
            "name": "黄钥匙",
            "image": "yellowKey"
        },
        {
            "id": 11,
            "name": "蓝钥匙",
            "image": "buleKey"
        },
        {
            "id": 12,
            "name": "巨石",
            "image": "stone"
        },
        {
            "id": 13,
            "name": "怪"
        },
        {
            "id": 14,
            "name": "死亡点"
        },
        {
            "id": 15,
            "name": "电梯"
        },
        {
            "id": 16,
            "name": "骨头"
        },
        {
            "id": 17,
            "name": "时效"
        },
        {
            "id": 18,
            "name": "缩小药水"
        },
        {
            "id": 19,
            "name": "无敌果实"
        },
        {
            "id": 20,
            "name": "探测器",
            "image": "detector"
        },
        {
            "id": 21,
            "name": "地雷"
        },
        {
            "id": 22,
            "name": "传送门",
            "image": "greenDoor"
        },
        {
            "id": 23,
            "name": "魔术帽"
        },
        {
            "id": 24,
            "name": "BOSS机关",
            "image": "bossTrap"
        },
        {
            "id": 25,
            "name": "岩浆",
            "image": "fire"
        },
        {
            "id": 26,
            "name": "洞穴"
        },
        {
            "id": 27,
            "name": "狗",
            "image": "dog"
        },
        {
            "id": 28,
            "name": "钢刺"
        },
        {
            "id": 29,
            "name": "向上阻挡",
            "image": "up"
        },
        {
            "id": 30,
            "name": "向下阻挡",
            "image": "down"
        },
        {
            "id": 31,
            "name": "向左阻挡",
            "image": "left"
        },
        {
            "id": 32,
            "name": "向右阻挡",
            "image": "right"
        },
        {
            "id": 33,
            "name": "中间横阻挡",
            "image": "horizen"
        },
        {
            "id": 34,
            "name": "中间竖阻挡",
            "image": "stright"
        },
        {
            "id": 35,
            "name": "单独阻挡",
            "image": "middle"
        },
        {
            "id": 36,
            "name": "右下拐角阻挡",
            "image": "downright"
        },
        {
            "id": 37,
            "name": "右上拐角阻挡",
            "image": "upright"
        },
        {
            "id": 38,
            "name": "左下拐角阻挡",
            "image": "downleft"
        },
        {
            "id": 39,
            "name": "左上拐角阻挡",
            "image": "upleft"
        },
        {
            "id": 40,
            "name": "道路",
            "image": "board"
        }
    ];
    
    export var data_escapeOne : {
    	/** 目标id */
    	id? : number, 
    	/** 能否通过 */
    	advance? : number, 
    	/** 门对应跳转的id */
    	type? : number, 
    	/** 包含障碍 */
    	addGoods? : number, 
    	/** 关联节点，主要是用与占用多个的情况 */
    	linkNodeld? : string | number[], 
    }[] = [
        {
            "id": 1,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 2,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 3,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                18,
                19,
                34,
                35
            ]
        },
        {
            "id": 4,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 5,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 6,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 7,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 8,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 9,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 10,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 11,
            "advance": 1,
            "type": 5,
            "addGoods": 0,
            "linkNodeld": [
                12,
                13,
                28,
                29
            ]
        },
        {
            "id": 12,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                13,
                28,
                29
            ]
        },
        {
            "id": 13,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                12,
                28,
                29
            ]
        },
        {
            "id": 14,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 15,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 16,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 17,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                18,
                19,
                34,
                35
            ]
        },
        {
            "id": 18,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                19,
                34,
                35
            ]
        },
        {
            "id": 19,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                18,
                34,
                35
            ]
        },
        {
            "id": 20,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                18,
                19,
                34,
                35
            ]
        },
        {
            "id": 21,
            "advance": 0,
            "type": 0,
            "addGoods": 39,
            "linkNodeld": "0"
        },
        {
            "id": 22,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 23,
            "advance": 1,
            "type": 0,
            "addGoods": 8,
            "linkNodeld": "0"
        },
        {
            "id": 24,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 25,
            "advance": 0,
            "type": 0,
            "addGoods": 36,
            "linkNodeld": "0"
        },
        {
            "id": 26,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 27,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                12,
                13,
                28,
                29
            ]
        },
        {
            "id": 28,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                12,
                13,
                29
            ]
        },
        {
            "id": 29,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                12,
                13,
                28
            ]
        },
        {
            "id": 30,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                12,
                13,
                28,
                29
            ]
        },
        {
            "id": 31,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 32,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 33,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 34,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                18,
                19,
                35
            ]
        },
        {
            "id": 35,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                18,
                19,
                34
            ]
        },
        {
            "id": 36,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                18,
                19,
                34,
                35
            ]
        },
        {
            "id": 37,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 38,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 39,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 40,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 41,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 42,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 43,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 44,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 45,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                12,
                13,
                28,
                29
            ]
        },
        {
            "id": 46,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 47,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 48,
            "advance": 1,
            "type": 6,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 49,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 50,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                18,
                19,
                34,
                35
            ]
        },
        {
            "id": 51,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 52,
            "advance": 1,
            "type": 0,
            "addGoods": 6,
            "linkNodeld": "0"
        },
        {
            "id": 53,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 54,
            "advance": 1,
            "type": 0,
            "addGoods": 7,
            "linkNodeld": "0"
        },
        {
            "id": 55,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 56,
            "advance": 1,
            "type": 0,
            "addGoods": 12,
            "linkNodeld": "0"
        },
        {
            "id": 57,
            "advance": 0,
            "type": 0,
            "addGoods": 39,
            "linkNodeld": "0"
        },
        {
            "id": 58,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 59,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 60,
            "advance": 1,
            "type": 0,
            "addGoods": 13,
            "linkNodeld": "0"
        },
        {
            "id": 61,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 62,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 63,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 64,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 65,
            "advance": 1,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 66,
            "advance": 0,
            "type": 0,
            "addGoods": 37,
            "linkNodeld": "0"
        },
        {
            "id": 67,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 68,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 69,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 70,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 71,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 72,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 73,
            "advance": 0,
            "type": 0,
            "addGoods": 36,
            "linkNodeld": "0"
        },
        {
            "id": 74,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 75,
            "advance": 1,
            "type": 0,
            "addGoods": 26,
            "linkNodeld": "0"
        },
        {
            "id": 76,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 77,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 78,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 79,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 80,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 81,
            "advance": 0,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 82,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 83,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                98,
                99
            ]
        },
        {
            "id": 84,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 85,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 86,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 87,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 88,
            "advance": 1,
            "type": 0,
            "addGoods": 11,
            "linkNodeld": "0"
        },
        {
            "id": 89,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 90,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 91,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 92,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 93,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                94,
                110
            ]
        },
        {
            "id": 94,
            "advance": 1,
            "type": 0,
            "addGoods": 15,
            "linkNodeld": "110"
        },
        {
            "id": 95,
            "advance": 1,
            "type": 0,
            "addGoods": 16,
            "linkNodeld": [
                94,
                110
            ]
        },
        {
            "id": 96,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 97,
            "advance": 1,
            "type": 7,
            "addGoods": 0,
            "linkNodeld": [
                98,
                99
            ]
        },
        {
            "id": 98,
            "advance": 1,
            "type": 0,
            "addGoods": 17,
            "linkNodeld": "99"
        },
        {
            "id": 99,
            "advance": 1,
            "type": 0,
            "addGoods": 17,
            "linkNodeld": "98"
        },
        {
            "id": 100,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                98,
                99
            ]
        },
        {
            "id": 101,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 102,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 103,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 104,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 105,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 106,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 107,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 108,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 109,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                94,
                110
            ]
        },
        {
            "id": 110,
            "advance": 1,
            "type": 0,
            "addGoods": 15,
            "linkNodeld": "94"
        },
        {
            "id": 111,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                94,
                110
            ]
        },
        {
            "id": 112,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 113,
            "advance": 0,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 114,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 115,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                98,
                99
            ]
        },
        {
            "id": 116,
            "advance": 0,
            "type": 0,
            "addGoods": 39,
            "linkNodeld": "0"
        },
        {
            "id": 117,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 118,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 119,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 120,
            "advance": 10,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 121,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 122,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 123,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 124,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 125,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                141,
                142,
                157,
                158
            ]
        },
        {
            "id": 126,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 127,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 128,
            "advance": 1,
            "type": 0,
            "addGoods": 10,
            "linkNodeld": "0"
        },
        {
            "id": 129,
            "advance": 1,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 130,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 131,
            "advance": 1,
            "type": 0,
            "addGoods": 18,
            "linkNodeld": "0"
        },
        {
            "id": 132,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 133,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 134,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 135,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 136,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 137,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 138,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 139,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 140,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                141,
                142,
                157,
                158
            ]
        },
        {
            "id": 141,
            "advance": 1,
            "type": 0,
            "addGoods": 20,
            "linkNodeld": [
                142,
                157,
                158
            ]
        },
        {
            "id": 142,
            "advance": 1,
            "type": 0,
            "addGoods": 20,
            "linkNodeld": [
                141,
                157,
                158
            ]
        },
        {
            "id": 143,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                141,
                142,
                157,
                158
            ]
        },
        {
            "id": 144,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 145,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 146,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 147,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 148,
            "advance": 0,
            "type": 0,
            "addGoods": 36,
            "linkNodeld": "0"
        },
        {
            "id": 149,
            "advance": 1,
            "type": 0,
            "addGoods": 19,
            "linkNodeld": "0"
        },
        {
            "id": 150,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 151,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 152,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 153,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 154,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 155,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 156,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                141,
                142,
                157,
                158
            ]
        },
        {
            "id": 157,
            "advance": 1,
            "type": 0,
            "addGoods": 20,
            "linkNodeld": [
                141,
                142,
                158
            ]
        },
        {
            "id": 158,
            "advance": 1,
            "type": 0,
            "addGoods": 20,
            "linkNodeld": [
                141,
                142,
                157
            ]
        },
        {
            "id": 159,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                141,
                142,
                157,
                158
            ]
        },
        {
            "id": 160,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 161,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 162,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 163,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 164,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 165,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 166,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 167,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 168,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 169,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 170,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 171,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 172,
            "advance": 1,
            "type": 0,
            "addGoods": 21,
            "linkNodeld": "0"
        },
        {
            "id": 173,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 174,
            "advance": 0,
            "type": 0,
            "addGoods": 37,
            "linkNodeld": "0"
        },
        {
            "id": 175,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 176,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 177,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 178,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 179,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 180,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 181,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 182,
            "advance": 0,
            "type": 0,
            "addGoods": 39,
            "linkNodeld": "0"
        },
        {
            "id": 183,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 184,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 185,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 186,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 187,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 188,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 189,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 190,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 191,
            "advance": 1,
            "type": 0,
            "addGoods": 7,
            "linkNodeld": "0"
        },
        {
            "id": 192,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 193,
            "advance": 1,
            "type": 0,
            "addGoods": 13,
            "linkNodeld": "0"
        },
        {
            "id": 194,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 195,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 196,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 197,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 198,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 199,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 200,
            "advance": 1,
            "type": 0,
            "addGoods": 8,
            "linkNodeld": "0"
        },
        {
            "id": 201,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 202,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 203,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 204,
            "advance": 0,
            "type": 0,
            "addGoods": 37,
            "linkNodeld": "0"
        },
        {
            "id": 205,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 206,
            "advance": 1,
            "type": 0,
            "addGoods": 18,
            "linkNodeld": "0"
        },
        {
            "id": 207,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 208,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 209,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 210,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 211,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 212,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                213,
                228,
                229
            ]
        },
        {
            "id": 213,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                212,
                228,
                229
            ]
        },
        {
            "id": 214,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 215,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 216,
            "advance": 1,
            "type": 0,
            "addGoods": 7,
            "linkNodeld": "0"
        },
        {
            "id": 217,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 218,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 219,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 220,
            "advance": 0,
            "type": 0,
            "addGoods": 38,
            "linkNodeld": "0"
        },
        {
            "id": 221,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 222,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 223,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 224,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 225,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 226,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 227,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                212,
                213,
                228,
                229
            ]
        },
        {
            "id": 228,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                212,
                213,
                229
            ]
        },
        {
            "id": 229,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                212,
                213,
                228
            ]
        },
        {
            "id": 230,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                212,
                213,
                228,
                229
            ]
        },
        {
            "id": 231,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 232,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 233,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 234,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 235,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 236,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 237,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 238,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 239,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 240,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 241,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 242,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 243,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 244,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 245,
            "advance": 0,
            "type": 0,
            "addGoods": 37,
            "linkNodeld": "0"
        },
        {
            "id": 246,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 247,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 248,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 249,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 250,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 251,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 252,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 253,
            "advance": 0,
            "type": 0,
            "addGoods": 37,
            "linkNodeld": "0"
        },
        {
            "id": 254,
            "advance": 1,
            "type": 0,
            "addGoods": 26,
            "linkNodeld": "0"
        },
        {
            "id": 255,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 256,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 257,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 258,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 259,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 260,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 261,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 262,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 263,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 264,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 265,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 266,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                267,
                282,
                283
            ]
        },
        {
            "id": 267,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                266,
                282,
                283
            ]
        },
        {
            "id": 268,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                266,
                267,
                282,
                283
            ]
        },
        {
            "id": 269,
            "advance": 0,
            "type": 0,
            "addGoods": 38,
            "linkNodeld": "0"
        },
        {
            "id": 270,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 271,
            "advance": 0,
            "type": 0,
            "addGoods": 37,
            "linkNodeld": "0"
        },
        {
            "id": 272,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 273,
            "advance": 1,
            "type": 0,
            "addGoods": 22,
            "linkNodeld": "0"
        },
        {
            "id": 274,
            "advance": 1,
            "type": 0,
            "addGoods": 23,
            "linkNodeld": "0"
        },
        {
            "id": 275,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 276,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 277,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 278,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 279,
            "advance": 0,
            "type": 0,
            "addGoods": 36,
            "linkNodeld": "0"
        },
        {
            "id": 280,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 281,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 282,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                266,
                267,
                283
            ]
        },
        {
            "id": 283,
            "advance": 1,
            "type": 0,
            "addGoods": 5,
            "linkNodeld": [
                266,
                267,
                282
            ]
        },
        {
            "id": 284,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                266,
                267,
                282,
                283
            ]
        },
        {
            "id": 285,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 286,
            "advance": 1,
            "type": 0,
            "addGoods": 24,
            "linkNodeld": "0"
        },
        {
            "id": 287,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 288,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 289,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 290,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 291,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 292,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 293,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 294,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 295,
            "advance": 1,
            "type": 0,
            "addGoods": 9,
            "linkNodeld": "0"
        },
        {
            "id": 296,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 297,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 298,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                314,
                315
            ]
        },
        {
            "id": 299,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                314,
                315
            ]
        },
        {
            "id": 300,
            "advance": 1,
            "type": 0,
            "addGoods": 13,
            "linkNodeld": "0"
        },
        {
            "id": 301,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 302,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 303,
            "advance": 0,
            "type": 0,
            "addGoods": 36,
            "linkNodeld": "0"
        },
        {
            "id": 304,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 305,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 306,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 307,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 308,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 309,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 310,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 311,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 312,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 313,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 314,
            "advance": 1,
            "type": 0,
            "addGoods": 25,
            "linkNodeld": "315"
        },
        {
            "id": 315,
            "advance": 1,
            "type": 0,
            "addGoods": 25,
            "linkNodeld": "314"
        },
        {
            "id": 316,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                314,
                315
            ]
        },
        {
            "id": 317,
            "advance": 1,
            "type": 0,
            "addGoods": 8,
            "linkNodeld": "0"
        },
        {
            "id": 318,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 319,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 320,
            "advance": 1,
            "type": 0,
            "addGoods": 26,
            "linkNodeld": "0"
        },
        {
            "id": 321,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                337,
                338
            ]
        },
        {
            "id": 322,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 323,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 324,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 325,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 326,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 327,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 328,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 329,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 330,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 331,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                314,
                315
            ]
        },
        {
            "id": 332,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 333,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 334,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 335,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 336,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 337,
            "advance": 1,
            "type": 0,
            "addGoods": 17,
            "linkNodeld": "338"
        },
        {
            "id": 338,
            "advance": 1,
            "type": 0,
            "addGoods": 17,
            "linkNodeld": "337"
        },
        {
            "id": 339,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 340,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 341,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 342,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 343,
            "advance": 1,
            "type": 0,
            "addGoods": 26,
            "linkNodeld": "0"
        },
        {
            "id": 344,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 345,
            "advance": 0,
            "type": 0,
            "addGoods": 39,
            "linkNodeld": "0"
        },
        {
            "id": 346,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 347,
            "advance": 0,
            "type": 0,
            "addGoods": 37,
            "linkNodeld": "0"
        },
        {
            "id": 348,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 349,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 350,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 351,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 352,
            "advance": 1,
            "type": 0,
            "addGoods": 6,
            "linkNodeld": "0"
        },
        {
            "id": 353,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 354,
            "advance": 1,
            "type": 0,
            "addGoods": 6,
            "linkNodeld": "0"
        },
        {
            "id": 355,
            "advance": 1,
            "type": 0,
            "addGoods": 6,
            "linkNodeld": "0"
        },
        {
            "id": 356,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 357,
            "advance": 0,
            "type": 0,
            "addGoods": 39,
            "linkNodeld": "0"
        },
        {
            "id": 358,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 359,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 360,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 361,
            "advance": 0,
            "type": 0,
            "addGoods": 36,
            "linkNodeld": "0"
        },
        {
            "id": 362,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 363,
            "advance": 0,
            "type": 0,
            "addGoods": 38,
            "linkNodeld": "0"
        },
        {
            "id": 364,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 365,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 366,
            "advance": 1,
            "type": 0,
            "addGoods": 12,
            "linkNodeld": "0"
        },
        {
            "id": 367,
            "advance": 1,
            "type": 0,
            "addGoods": 14,
            "linkNodeld": "0"
        },
        {
            "id": 368,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 369,
            "advance": 0,
            "type": 0,
            "addGoods": 38,
            "linkNodeld": "0"
        },
        {
            "id": 370,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 371,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 372,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 373,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 374,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 375,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 376,
            "advance": 1,
            "type": 0,
            "addGoods": 27,
            "linkNodeld": "0"
        },
        {
            "id": 377,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 378,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                393,
                394,
                395,
                409,
                410,
                411
            ]
        },
        {
            "id": 379,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 380,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 381,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 382,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 383,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 384,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 385,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 386,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 387,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 388,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 389,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 390,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 391,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 392,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                393,
                394,
                395,
                409,
                410,
                411
            ]
        },
        {
            "id": 393,
            "advance": 1,
            "type": 0,
            "addGoods": 28,
            "linkNodeld": [
                394,
                395,
                409,
                410,
                411
            ]
        },
        {
            "id": 394,
            "advance": 1,
            "type": 0,
            "addGoods": 28,
            "linkNodeld": [
                393,
                395,
                409,
                410,
                411
            ]
        },
        {
            "id": 395,
            "advance": 1,
            "type": 0,
            "addGoods": 28,
            "linkNodeld": [
                393,
                394,
                409,
                410,
                411
            ]
        },
        {
            "id": 396,
            "advance": 1,
            "type": 0,
            "addGoods": 11,
            "linkNodeld": [
                393,
                394,
                395,
                409,
                410,
                411
            ]
        },
        {
            "id": 397,
            "advance": 0,
            "type": 0,
            "addGoods": 29,
            "linkNodeld": "0"
        },
        {
            "id": 398,
            "advance": 1,
            "type": 0,
            "addGoods": 25,
            "linkNodeld": "0"
        },
        {
            "id": 399,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 400,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 401,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 402,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 403,
            "advance": 1,
            "type": 0,
            "addGoods": 12,
            "linkNodeld": "0"
        },
        {
            "id": 404,
            "advance": 1,
            "type": 0,
            "addGoods": 9,
            "linkNodeld": "0"
        },
        {
            "id": 405,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 406,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 407,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 408,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                393,
                394,
                395,
                409,
                410,
                411
            ]
        },
        {
            "id": 409,
            "advance": 1,
            "type": 0,
            "addGoods": 28,
            "linkNodeld": [
                393,
                394,
                395,
                410,
                411
            ]
        },
        {
            "id": 410,
            "advance": 1,
            "type": 0,
            "addGoods": 28,
            "linkNodeld": [
                393,
                394,
                395,
                409,
                411
            ]
        },
        {
            "id": 411,
            "advance": 1,
            "type": 0,
            "addGoods": 28,
            "linkNodeld": [
                393,
                394,
                395,
                409,
                410
            ]
        },
        {
            "id": 412,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": [
                393,
                394,
                395,
                409,
                410,
                411
            ]
        },
        {
            "id": 413,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 414,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 415,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 416,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 417,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 418,
            "advance": 1,
            "type": 0,
            "addGoods": 18,
            "linkNodeld": "0"
        },
        {
            "id": 419,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 420,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 421,
            "advance": 1,
            "type": 0,
            "addGoods": 13,
            "linkNodeld": "0"
        },
        {
            "id": 422,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 423,
            "advance": 0,
            "type": 0,
            "addGoods": 34,
            "linkNodeld": "0"
        },
        {
            "id": 424,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 425,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 426,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 427,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        },
        {
            "id": 428,
            "advance": 1,
            "type": 0,
            "addGoods": 9,
            "linkNodeld": "0"
        },
        {
            "id": 429,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 430,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 431,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 432,
            "advance": 1,
            "type": 0,
            "addGoods": 16,
            "linkNodeld": "0"
        },
        {
            "id": 433,
            "advance": 0,
            "type": 0,
            "addGoods": 35,
            "linkNodeld": "0"
        },
        {
            "id": 434,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 435,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 436,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 437,
            "advance": 1,
            "type": 0,
            "addGoods": 19,
            "linkNodeld": "0"
        },
        {
            "id": 438,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 439,
            "advance": 0,
            "type": 0,
            "addGoods": 30,
            "linkNodeld": "0"
        },
        {
            "id": 440,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 441,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 442,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 443,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 444,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeld": "0"
        },
        {
            "id": 445,
            "advance": 1,
            "type": 0,
            "addGoods": 27,
            "linkNodeld": "0"
        },
        {
            "id": 446,
            "advance": 0,
            "type": 0,
            "addGoods": 31,
            "linkNodeld": "0"
        },
        {
            "id": 447,
            "advance": 0,
            "type": 0,
            "addGoods": 33,
            "linkNodeld": "0"
        },
        {
            "id": 448,
            "advance": 0,
            "type": 0,
            "addGoods": 32,
            "linkNodeld": "0"
        }
    ];
    
    export var data_escapeTwo : {
    	/** 目标id */
    	id? : number, 
    	/** 能否通过 */
    	advance? : number, 
    	/** 门对应跳转的id */
    	type? : number, 
    	/** 包含障碍 */
    	addGoods? : number, 
    	/** 关联节点，主要是用于占多个的情况 */
    	linkNodeId? : string, 
    }[] = [
        {
            "id": 1,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 2,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 3,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 4,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 5,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 6,
            "advance": 1,
            "type": 3,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 7,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 8,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 9,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 10,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 11,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 12,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 13,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 14,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 15,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 16,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 17,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 18,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 19,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 20,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 21,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 22,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 23,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 24,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 25,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 26,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 27,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 28,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 29,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 30,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 31,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 32,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 33,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 34,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 35,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 36,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 37,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 38,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 39,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 40,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 41,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 42,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 43,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 44,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 45,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 46,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 47,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 48,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 49,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 50,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 51,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 52,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 53,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 54,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 55,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 56,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 57,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 58,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 59,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 60,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 61,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 62,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 63,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 64,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 65,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 66,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 67,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 68,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 69,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 70,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 71,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 72,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 73,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 74,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 75,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 76,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 77,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 78,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 79,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 80,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 81,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 82,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 83,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 84,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 85,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 86,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 87,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 88,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 89,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 90,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 91,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 92,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 93,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 94,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 95,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 96,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 97,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 98,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 99,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 100,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 101,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 102,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 103,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 104,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 105,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 106,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 107,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 108,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 109,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 110,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 111,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 112,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 113,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 114,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 115,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 116,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 117,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 118,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 119,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 120,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 121,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 122,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 123,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 124,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 125,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 126,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 127,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 128,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 129,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 130,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 131,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 132,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 133,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 134,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 135,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 136,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 137,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 138,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 139,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 140,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 141,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 142,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 143,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 144,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 145,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 146,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 147,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 148,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 149,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 150,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 151,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 152,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 153,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 154,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 155,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 156,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 157,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 158,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 159,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 160,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 161,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 162,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 163,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 164,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 165,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 166,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 167,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 168,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 169,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 170,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 171,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 172,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 173,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 174,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 175,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 176,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 177,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 178,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 179,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 180,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 181,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 182,
            "advance": 1,
            "type": 0,
            "addGoods": 4,
            "linkNodeId": "0"
        },
        {
            "id": 183,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 184,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 185,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 186,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 187,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 188,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 189,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 190,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 191,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 192,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 193,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 194,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 195,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 196,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 197,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 198,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 199,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 200,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 201,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 202,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 203,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 204,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 205,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 206,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 207,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 208,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 209,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 210,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 211,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 212,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 213,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 214,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 215,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 216,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 217,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 218,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 219,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 220,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 221,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 222,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 223,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 224,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 225,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 226,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 227,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 228,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 229,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 230,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 231,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 232,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 233,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 234,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 235,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 236,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 237,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 238,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 239,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 240,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 241,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 242,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 243,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 244,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 245,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 246,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 247,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 248,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 249,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 250,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 251,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 252,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 253,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 254,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 255,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 256,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 257,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 258,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 259,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 260,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 261,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 262,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 263,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 264,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 265,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 266,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 267,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 268,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 269,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 270,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 271,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 272,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 273,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 274,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 275,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 276,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 277,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 278,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 279,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 280,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 281,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 282,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 283,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 284,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 285,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 286,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 287,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 288,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 289,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 290,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 291,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 292,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 293,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 294,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 295,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 296,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 297,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 298,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 299,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 300,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 301,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 302,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 303,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 304,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 305,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 306,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 307,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 308,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 309,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 310,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 311,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 312,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 313,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 314,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 315,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 316,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 317,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 318,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 319,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 320,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 321,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 322,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 323,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 324,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 325,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 326,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 327,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 328,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 329,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 330,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 331,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 332,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 333,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 334,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 335,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 336,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 337,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 338,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 339,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 340,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 341,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 342,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 343,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 344,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 345,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 346,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 347,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 348,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 349,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 350,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 351,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 352,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 353,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 354,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 355,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 356,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 357,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 358,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 359,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 360,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 361,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 362,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 363,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 364,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 365,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 366,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 367,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 368,
            "advance": 1,
            "type": 4,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 369,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 370,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 371,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 372,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 373,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 374,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 375,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 376,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 377,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 378,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 379,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 380,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 381,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 382,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 383,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 384,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 385,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 386,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 387,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 388,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 389,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 390,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 391,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 392,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 393,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 394,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 395,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 396,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 397,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 398,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 399,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 400,
            "advance": 1,
            "type": 0,
            "addGoods": 1,
            "linkNodeId": "0"
        },
        {
            "id": 401,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 402,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 403,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 404,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 405,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 406,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 407,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 408,
            "advance": 0,
            "type": 0,
            "addGoods": 2,
            "linkNodeId": "0"
        },
        {
            "id": 409,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 410,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 411,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 412,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 413,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 414,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 415,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 416,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 417,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 418,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 419,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 420,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 421,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 422,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 423,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 424,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 425,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 426,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 427,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 428,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 429,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 430,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 431,
            "advance": 1,
            "type": 0,
            "addGoods": 0,
            "linkNodeId": "0"
        },
        {
            "id": 432,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 433,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 434,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 435,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 436,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 437,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 438,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 439,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 440,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 441,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 442,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 443,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 444,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 445,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 446,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 447,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        },
        {
            "id": 448,
            "advance": 0,
            "type": 0,
            "addGoods": 3,
            "linkNodeId": "0"
        }
    ];
}