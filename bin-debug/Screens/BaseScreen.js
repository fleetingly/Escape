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
    /**
     *
     * @author
     *
     */
    Game.MODAL_SOLID = { alpha: 1 };
    Game.MODAL_ALPHA = { alpha: 0.8, time: 0.2 };
    Game.MODAL_TRANSPARENT = { alpha: 0 };
    Game.ScreenInstances = {};
    var BaseScreen = (function (_super) {
        __extends(BaseScreen, _super);
        function BaseScreen() {
            var _this = _super.call(this) || this;
            _this.uiLayer = new eui.Component();
            _this.uiLayer.percentWidth = 100;
            _this.uiLayer.percentHeight = 100;
            _this.addChild(_this.uiLayer);
            Game.ScreenInstances[_this["__class__"]] = _this;
            return _this;
        }
        BaseScreen.prototype.onActive = function () {
        };
        BaseScreen.prototype.disableTouch = function () {
            this.touchEnabled = false;
            this.uiLayer.touchEnabled = false;
        };
        BaseScreen.prototype.createChildren = function () {
            var _this = this;
            _super.prototype.createChildren.call(this);
            if (this["buttonClose"]) {
                this["buttonClose"].addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    _this.removeSelf();
                }, this);
            }
        };
        /**
         * 显示模式窗口
         * 可设置模式窗口的透明度, 渐变时间, 是否前置蒙版
         * @param {ModalConfigType} [config]
         *
         * @memberOf BaseScreen
         */
        BaseScreen.prototype.showModal = function (config) {
            config = config || {
                alpha: 0.6,
                time: 0.2,
                atFront: false,
            };
            if (!this.modalLayer) {
                var modalLayer = new eui.Rect();
                modalLayer.name = "modalLayer";
                modalLayer.fillColor = 0;
                modalLayer.alpha = config.alpha || 0.6;
                modalLayer.percentWidth = 100;
                modalLayer.percentHeight = 100;
                this.addChildAt(modalLayer, 0);
                this.modalLayer = modalLayer;
            }
            // if (config.color){
            //     modalLayer.fillColor = config.color;
            // }
            if (config.atFront) {
                this.setChildIndex(this.modalLayer, 9999);
            }
            else {
                this.setChildIndex(this.modalLayer, 0);
            }
            this.modalLayer.visible = true;
            if (config.time && config.time > 0) {
                this.modalLayer.alpha = 0;
                var tw = egret.Tween.get(this.modalLayer);
                tw.to({ alpha: config.alpha || 0.6 }, config.time * 1000 || 200);
                if (config.cb) {
                    tw.call(config.cb, config.thisArg);
                }
            }
            else {
                this.modalLayer.alpha = config.alpha || 0.6;
                if (config.cb) {
                    config.cb.call(config.thisArg);
                }
            }
        };
        BaseScreen.prototype.hideModal = function (config) {
            config = config || {};
            var self = this;
            if (this.modalLayer) {
                egret.Tween.removeTweens(this.modalLayer);
                var tw = egret.Tween.get(this.modalLayer);
                if (config.delay) {
                    tw.wait(config.delay * 1000);
                }
                tw.to({ alpha: 0 }, config.time * 1000 || 200).call(function () {
                    if (!config.modal) {
                        self.modalLayer.visible = false;
                    }
                    config.cb && config.cb.call(config.thisArg);
                });
            }
        };
        BaseScreen.prototype.onRemove = function () {
            Game.ScreenInstances[this["__class__"]] = undefined;
        };
        BaseScreen.prototype.removeSelf = function (cb) {
            var self = this;
            this.dispatchEventWith("onRemove");
            this.onRemove();
            this.touchChildren = false;
            if (this.modalLayer) {
                egret.Tween.removeTweens(this.modalLayer);
                var tw = egret.Tween.get(this);
                tw.to({ alpha: 0 }, 200);
                setTimeout(function () {
                    if (self.parent) {
                        self.parent.removeChild(self);
                    }
                    if (cb) {
                        cb();
                    }
                    else {
                    }
                    // cb && cb();
                }, 200);
            }
            else {
                self.parent && self.parent.removeChild(self);
                cb && cb();
            }
        };
        BaseScreen.prototype.appendSubScreen = function (subScreen, modal) {
            subScreen.percentWidth = 100;
            subScreen.percentHeight = 100;
            // if(modal == MODAL_SOLID){
            //     subScreen.showModal({ alpha: 1 });
            // }else if (modal == Game.MODAL_ALPHA){
            //     subScreen.showModal({ alpha: 0.8, time : 0.2 });
            // } else if(modal == Game.MODAL_TRANSPARENT) {
            // } else{
            //     if (modal && typeof (modal) == "object"){
            //         subScreen.showModal(modal)
            //     }
            // }
            if (modal && modal !== Game.MODAL_TRANSPARENT) {
                subScreen.showModal(modal);
            }
            this.uiLayer.addChild(subScreen);
        };
        /**
         * 当点击屏幕空白位置时移除自身
         *
         * @param {()=>void} [cb]
         *
         * @memberOf BaseScreen
         */
        BaseScreen.prototype.removeOnTouch = function (cb) {
            var _this = this;
            if (!!this.modalLayer) {
                this.modalLayer.touchEnabled = true;
                this.modalLayer.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (cb) {
                        cb();
                    }
                    _this.removeSelf();
                }, this);
            }
        };
        return BaseScreen;
    }(eui.Component));
    Game.BaseScreen = BaseScreen;
    __reflect(BaseScreen.prototype, "Game.BaseScreen");
})(Game || (Game = {}));
//# sourceMappingURL=BaseScreen.js.map