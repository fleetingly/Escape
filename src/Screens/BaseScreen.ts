namespace Game {
	/**
	 *
	 * @author 
	 *
	 */
    export const MODAL_SOLID = { alpha: 1 };
    export const MODAL_ALPHA = { alpha: 0.8, time : 0.2 };
    export const MODAL_TRANSPARENT = { alpha: 0};

    export var ScreenInstances = {};

    export type ModalConfigType = {
        alpha ? : number,
        time? : number,
        atFront? : boolean,
        cb? : ()=>void,
        thisArg? : any,
    }
    
    export class BaseScreen extends eui.Component {
        protected modalLayer: eui.Rect;
        uiLayer: eui.Component;
		public constructor() {
            super();
            this.uiLayer = new eui.Component();
            this.uiLayer.percentWidth = 100;
            this.uiLayer.percentHeight = 100;
            this.addChild(this.uiLayer);

            ScreenInstances[this["__class__"]] = this;
        }
        
        onActive() {
            
        }

        public disableTouch(): void {
            this.touchEnabled = false;
            this.uiLayer.touchEnabled = false;
        }

        protected createChildren(){
            super.createChildren();

            if (this["buttonClose"]){
                this["buttonClose"].addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
                    this.removeSelf();
                },this);
            }
        }
		
        /**
         * 显示模式窗口
         * 可设置模式窗口的透明度, 渐变时间, 是否前置蒙版
         * @param {ModalConfigType} [config]
         * 
         * @memberOf BaseScreen
         */
        public showModal(config?: ModalConfigType):void{
            config = config || {
                alpha : 0.6, 
                time : 0.2,
                atFront : false,
            }
            if(!this.modalLayer){
                var modalLayer = new eui.Rect();
                modalLayer.name = "modalLayer";
                modalLayer.fillColor = 0;
                modalLayer.alpha = config.alpha || 0.6;
                modalLayer.percentWidth = 100;
                modalLayer.percentHeight = 100;
                this.addChildAt(modalLayer,0);
                this.modalLayer = modalLayer;
            }

            // if (config.color){
            //     modalLayer.fillColor = config.color;
            // }
            
            if (config.atFront) {
                this.setChildIndex(this.modalLayer,9999);
            }else{
                this.setChildIndex(this.modalLayer, 0);
            }

            this.modalLayer.visible = true;
            if (config.time && config.time > 0){
                this.modalLayer.alpha = 0;
                var tw = egret.Tween.get(this.modalLayer);
                tw.to({ alpha: config.alpha || 0.6 }, config.time * 1000 || 200)
                if (config.cb){
                    tw.call(config.cb, config.thisArg);
                }
            }else{
                this.modalLayer.alpha = config.alpha || 0.6;
                if (config.cb){
                    config.cb.call(config.thisArg);
                }
            }
		}
		
        public hideModal(config?: any) {
            config = config || {}
            var self = this;
            if(this.modalLayer) {
                egret.Tween.removeTweens(this.modalLayer);
                var tw = egret.Tween.get(this.modalLayer);
                if (config.delay){
                    tw.wait(config.delay * 1000);
                }
                tw.to({ alpha: 0 }, config.time*1000 || 200).call(function() {
                    if (!config.modal) {
                        self.modalLayer.visible = false;
                    }
                    config.cb && config.cb.call(config.thisArg);
                });
            }
        }

        onRemove(){
            ScreenInstances[this["__class__"]] = undefined;
        }
		
		public removeSelf(cb? : Function) : void {
            var self = this;
            this.dispatchEventWith("onRemove")
            this.onRemove();
            this.touchChildren = false;
		    if (this.modalLayer){
                egret.Tween.removeTweens(this.modalLayer);
                var tw = egret.Tween.get(this);
                tw.to({ alpha: 0 },200);
                setTimeout(()=> {
                    if(self.parent){
                        self.parent.removeChild(self);
                    }
                    if (cb){
                        cb()
                    }else{

                    }
                    // cb && cb();
                },200)
		    }else{
                self.parent && self.parent.removeChild(self);
                cb && cb();
		    }
		}
		
		public appendSubScreen (subScreen : Game.BaseScreen, modal? : ModalConfigType) : void {
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
            if (modal && modal !== Game.MODAL_TRANSPARENT){
                subScreen.showModal(modal)
            }
            this.uiLayer.addChild(subScreen);
		}

        /**
         * 当点击屏幕空白位置时移除自身
         * 
         * @param {()=>void} [cb]
         * 
         * @memberOf BaseScreen
         */
        public removeOnTouch(cb? : ()=>void){
            if(!!this.modalLayer){
                this.modalLayer.touchEnabled = true;
                this.modalLayer.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
                    if (cb){
                        cb();        
                    }
                    this.removeSelf();
                }, this);
            }
        }
	}
}
