/*
 *  ScreenOne.ts
 *  egret
 *  cardh5
 *
 *  Created by Liu Yang on 17/04/27.
 *  Copyright (c) 2017年 LiuYang Mobile. All rights reserved.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game;
(function (Game) {
    /** 主场景界面 */
    var ScreenOne = (function (_super) {
        __extends(ScreenOne, _super);
        function ScreenOne() {
            var _this = _super.call(this) || this;
            //data 
            _this.gridsData = []; //448
            _this.skinName = "MapScreenSkin";
            ScreenOne.instance = _this;
            return _this;
            // this.labelSign.text = "1";
        }
        ScreenOne.prototype.createChildren = function () {
            // 初始化地图中的结点
            for (var _i = 0, data_escapeOne_1 = Game.data_escapeOne; _i < data_escapeOne_1.length; _i++) {
                var a = data_escapeOne_1[_i];
                var preData = new Game.dataEscapeOne(a);
                var preScr = new ItemScreen(preData);
                this.GroupMapItem.addChild(preScr);
                this.gridsData.push(preScr);
            }
            // 监听点击事件，通知刷新界面
            Game.playerEvent.addEventListener(Game.PlayerEvent.PLAYERPASSGRIDS, this.onUpdateInfo, this);
        };
        /** 处理位置后所在位置关联区域的显示情况 */
        ScreenOne.prototype.onUpdateInfo = function () {
        };
        // 获取当前节点的元素，并判断是否可以通过，并进行换肤操作
        ScreenOne.prototype.JudgeIfCanAdvance = function (id) {
            if (this.gridsData.length == 0) {
                return false;
            }
            var itemScreen = this.gridsData[id - 1];
            if (itemScreen && itemScreen.data.advance == 1) {
                return true;
            }
            return false;
        };
        //得到当前块是否为门的标识
        ScreenOne.prototype.GetDoorType = function (id) {
            if (this.gridsData.length == 0) {
                return 0;
            }
            var itemScreen = this.gridsData[id - 1];
            if (itemScreen) {
                return itemScreen.data.type;
            }
        };
        ScreenOne.prototype.NotifyBlockUpdate = function (id) {
            //得到当前块关联块id
            var itemScreen = this.gridsData[id - 1];
            if (itemScreen) {
                var list = itemScreen.data.linkList;
                var isAdvance = Game.scrOne.JudgeIfCanAdvance(id);
                if ((list.length == 0) && (isAdvance == false) && (itemScreen.data.addGoods == 0)) {
                    itemScreen.data.isAccess = true;
                    return;
                }
                //先访问当前块
                if (itemScreen.data.isAccess == false) {
                    if (isAdvance == true) {
                        //先根据移动方向，设置通道图
                        itemScreen.imgBg.source = RES.getRes("main_json.pass");
                        if (itemScreen.data.addGoods != 0) {
                            this.SetObstacleImage(itemScreen);
                        }
                    }
                    else {
                        if (itemScreen.data.addGoods != 0) {
                            this.SetObstacleImage(itemScreen);
                        }
                    }
                    itemScreen.data.isAccess = true;
                }
                //再访问关联块
                if (list.length > 0) {
                    for (var i = 0; i < itemScreen.data.linkList.length; i++) {
                        var itemtemId = itemScreen.data.linkList[i];
                        var curItem = this.gridsData[itemtemId - 1];
                        var curAdvance = Game.scrOne.JudgeIfCanAdvance(itemtemId);
                        if (curItem.isAccess == false) {
                            if (curItem.isAdvance == true) {
                                // 先根据移动方向，设置通道图
                                curItem.imgBg.source = RES.getRes("main_json.pass");
                                if (curItem.addGoods != 0) {
                                    this.SetObstacleImage(curItem);
                                }
                            }
                            else {
                                if (curItem.addGoods != 0) {
                                    this.SetObstacleImage(curItem);
                                }
                            }
                            curItem.isAccess = true;
                        }
                    }
                }
            }
        };
        //设置障碍图
        ScreenOne.prototype.SetObstacleImage = function (item) {
            var Obstacle = Game.data_escapeObstacle[item.data.addGoods];
            item.imgBg.source = RES.getRes("main_json." + Obstacle.image);
        };
        ScreenOne.prototype.EncounteredObstacle = function (blockId) {
            var curItem = this.gridsData[blockId - 1];
            if (curItem) {
                if ((curItem.data.isAccess == true) && (curItem.data.isHas = true)) {
                    if (curItem.data.addGoods != 0) {
                        var Obstacle = Game.data_escapeObstacle[curItem.data.addGoods];
                        if (Obstacle) {
                            switch (Obstacle.id) {
                                case 1: //钻石
                                case 8: //白钥匙
                                case 9: //黄钥匙
                                case 10:
                                    this.FlowTextShow(Obstacle.id);
                                    curItem.imgBg.source = RES.getRes("main_json.pass");
                                    break;
                                case 2: //炸弹
                                case 24: //钢刺
                                case 15:
                                    break;
                            }
                        }
                        curItem.data.isHas = false;
                    }
                }
            }
        };
        ScreenOne.prototype.FlowTextShow = function (goodsId) {
            //生成容器
            this.container = new egret.DisplayObjectContainer();
            this.addChild(this.container);
            //设置容器坐标
            this.SetShowFlowTextPos(this.container);
            //生成图片
            var image = new eui.Image();
            var Obstacle = Game.data_escapeObstacle[goodsId];
            if (Obstacle) {
                image.source = RES.getRes("main_json." + Obstacle.image);
            }
            image.scale9Grid = new egret.Rectangle(10, 10, 10, 10);
            image.width = 60;
            image.height = 60;
            this.container.addChild(image);
            image.x = 0,
                image.y = 0;
            //生成label
            var label = new eui.Label();
            label.text = "+ 5";
            label.width = 100; //设置宽度
            label.height = 30; //设置高度
            label.fontFamily = "Tahoma"; //设置字体
            label.textColor = 0x00CD00; //设置颜色
            label.size = 25; //设置文本字号
            label.bold = true; //设置是否加粗
            label.italic = true; //设置是否斜体
            label.textAlign = "left"; //设置水平对齐方式
            label.verticalAlign = "middle"; //设置垂直对齐方式
            label.x = image.x + image.width;
            this.container.addChild(label);
            //设置容器大小
            this.container.width = (image.width > label.width) ? image.width : label.width;
            this.container.height = (image.height > label.height) ? image.height : label.height;
            //生成定时器
            var timer = new egret.Timer(0, 100);
            //注册事件侦听器
            timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
            //开始计时
            timer.start();
        };
        ScreenOne.prototype.timerFunc = function () {
            console.log("计时");
            this.container.y -= 1;
        };
        ScreenOne.prototype.timerComFunc = function () {
            console.log("计时结束");
            this.container.visible = false;
            this.container.del;
        };
        ScreenOne.prototype.SetShowFlowTextPos = function (container) {
            var curBlockId = Game.player.GetCurBlockId();
            var row = curBlockId / 16;
            var offsetRow = curBlockId % 16;
            var posX = 0;
            var posY = 1096;
            if (offsetRow == 0) {
                posX = 600;
                posY = row * 40 - 40;
            }
            else {
                posX = offsetRow * 40 - 40;
                posY = row * 40;
            }
            container.x = posX;
            container.y = posY;
        };
        return ScreenOne;
    }(Game.BaseScreen));
    Game.ScreenOne = ScreenOne;
    __reflect(ScreenOne.prototype, "Game.ScreenOne");
    /** ItemScreen */
    var ItemScreen = (function (_super) {
        __extends(ItemScreen, _super);
        function ItemScreen(data) {
            var _this = _super.call(this) || this;
            _this.skinName = "MapItemSkin";
            _this.data = data;
            return _this;
        }
        ItemScreen.prototype.createChildren = function () {
            // 初始化
            this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            if ((this.data.id == 433) || (this.data.id == 434) || (this.data.id == 417) || (this.data.id == 418)) {
                this.imgBg.source = RES.getRes("main_json.pass");
            }
        };
        // 点击响应
        ItemScreen.prototype.onTouch = function (e) {
            // 更新当前位置点
            Game.player.JudgeCurPlayerValue(e.stageX, e.stageY);
            // 换肤
            var curScreenId = Game.player.GetScreenId();
            var curBlockId = Game.player.GetCurBlockId();
            var isAdvance = false;
            var doorType = 0;
            // if (curScreenId == 1) {
            isAdvance = Game.scrOne.JudgeIfCanAdvance(curBlockId);
            doorType = Game.scrOne.GetDoorType(curBlockId);
            Game.scrOne.NotifyBlockUpdate(curBlockId);
            // } else if (curScreenId == 2) {
            // 	isAdvance = Game.scrTwo.JudgeIfCanAdvance(curBlockId);
            // 	doorType = Game.scrTwo.GetDoorType(curBlockId);
            // 	Game.scrTwo.NotifyBlockUpdate(curBlockId);
            // } 
            // else if (curScreenId == 3) {
            // 	isAdvance = Game.scrThree.JudgeIfCanAdvance(curBlockId);
            // 	Game.scrThree.NotifyBlockUpdate(curBlockId);
            // } else if (curScreenId == 4) {
            // 	isAdvance = Game.scrFour.JudgeIfCanAdvance(curBlockId);
            // 	Game.scrFour.NotifyBlockUpdate(curBlockId);
            // }
            if (isAdvance) {
                // 移动主角
                var moveDirection = Game.player.GetMoveDirection();
                if (moveDirection == 0 /* PLAYER_MOVE_LEFT */) {
                    Game.player.m_node.x = Game.player.m_node.x - 40;
                }
                else if (moveDirection == 1 /* PLAYER_MOVE_RIGHT */) {
                    Game.player.m_node.x = Game.player.m_node.x + 40;
                }
                else if (moveDirection == 2 /* PLAYER_MOVE_UP */) {
                    Game.player.m_node.y = Game.player.m_node.y - 40;
                }
                else if (moveDirection == 3 /* PLAYER_MOVE_DOWN */) {
                    Game.player.m_node.y = Game.player.m_node.y + 40;
                }
                //判断移动之后是否遇到障碍
                Game.scrOne.EncounteredObstacle(curBlockId);
            }
            else {
                // 恢复palyer当前位置
                var moveDirection = Game.player.GetMoveDirection();
                var curBlockId_1 = Game.player.GetCurBlockId();
                if (moveDirection == 0 /* PLAYER_MOVE_LEFT */) {
                    curBlockId_1 += 1;
                }
                else if (moveDirection == 1 /* PLAYER_MOVE_RIGHT */) {
                    curBlockId_1 -= 1;
                }
                else if (moveDirection == 2 /* PLAYER_MOVE_UP */) {
                    curBlockId_1 += 16;
                }
                else if (moveDirection == 3 /* PLAYER_MOVE_DOWN */) {
                    curBlockId_1 -= 16;
                }
                Game.player.SetCurBlockId(curBlockId_1);
            }
            // 切换界面 参数可以待定
            if (doorType > 0) {
                var doorData = Game.data_escapeDoor[doorType];
                Game.playerEvent.dispatchEventWith(Game.PlayerEvent.PLAYERCHANGEMAP, false, {
                    doorId: doorData.id,
                    nextScreen: doorData.screen,
                    nextScreenId: doorData.screen_id,
                });
            }
        };
        ItemScreen.prototype.dataChanged = function () {
            egret.log("datachanged");
        };
        return ItemScreen;
    }(Game.BaseScreen));
    Game.ItemScreen = ItemScreen;
    __reflect(ItemScreen.prototype, "Game.ItemScreen");
})(Game || (Game = {}));
//# sourceMappingURL=ScreenOne.js.map