//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    /**
     * 加载进度界面
     * loading process interface
     */
    private loadingView: LoadingUI;
    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter",assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }
    private isThemeLoadEnd: boolean = false;
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the 
     */
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd){
            this.startCreateScene();
        }
    }
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    private textfield:egret.TextField;

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected startCreateScene(): void {
        // var sky:egret.Bitmap = this.createBitmapByName("bg_main_jpg");
        // this.addChild(sky);

        // 初始化游戏地图主界面
        Game.playerEvent = new Game.AllEvent();
        Game.scrOne = new Game.ScreenOne();
        this.addChild(Game.scrOne);

        Game.player  = Game.Player.GetInstance();
        // Game.player.m_node = this.createBitmapByName("main_json.player");
        Game.player.SetScreenId(1);
        Game.player.SetCurBlockId(433);
        this.createMotorcycleExp();
        this.addChild(Game.player.m_node);
        Game.player.m_node.x = 20;
        Game.player.m_node.y = 1096;
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerMove, this);

               Game.playerEvent.addEventListener(Game.PlayerEvent.PLAYERCHANGEMAP, (event: { data: { doorId:number, nextScreen:number ,nextScreenId:number} }) => {
            if (event.data) {
                let nextScreenNum = event.data.nextScreen;
                if (nextScreenNum){
                    Game.scrOne.visible = false;
                    switch(nextScreenNum){
                        case 1:
                            Game.scrOne.visible = true;
                            Game.player.SetScreenId(1);
                        break;
                    }  
                }

                let row = event.data.nextScreenId / 16
                let offsetRow = event.data.nextScreenId % 16;
                let posX = 0;
                let posY = 1096;
                if (offsetRow == 0) {
                    posX = 600;
                    posY = row * 40 - 40;
                } else {
                    posX = offsetRow * 40 - 40;
                    posY = row * 40;
                }
                Game.player.m_node.x = posX;
                Game.player.m_node.y = posY;
            }
        }, this);
        

        // var stageW:number = this.stage.stageWidth;
        // var stageH:number = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;

        // var topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // topMask.y = 33;
        // this.addChild(topMask);

        // var icon:egret.Bitmap = this.createBitmapByName("egret_icon_png");
        // this.addChild(icon);
        // icon.x = 26;
        // icon.y = 33;

        // var line = new egret.Shape();
        // line.graphics.lineStyle(2,0xffffff);
        // line.graphics.moveTo(0,0);
        // line.graphics.lineTo(0,117);
        // line.graphics.endFill();
        // line.x = 172;
        // line.y = 61;
        // this.addChild(line);


        // var colorLabel = new egret.TextField();
        // colorLabel.textColor = 0xffffff;
        // colorLabel.width = stageW - 172;
        // colorLabel.textAlign = "center";
        // colorLabel.text = "Hello Egret";
        // colorLabel.size = 24;
        // colorLabel.x = 172;
        // colorLabel.y = 80;
        // this.addChild(colorLabel);

        // var textfield = new egret.TextField();
        // this.addChild(textfield);
        // textfield.alpha = 0;
        // textfield.width = stageW - 172;
        // textfield.textAlign = egret.HorizontalAlign.CENTER;
        // textfield.size = 24;
        // textfield.textColor = 0xffffff;
        // textfield.x = 172;
        // textfield.y = 135;
        // this.textfield = textfield;

        // //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        // // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
        // RES.getResAsync("description_json", this.startAnimation, this);

        // var button = new eui.Button();
        // button.label = "Click!";
        // button.horizontalCenter = 0;
        // button.verticalCenter = 0;
        // this.addChild(button);
        // button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    // private startAnimation(result:Array<any>):void {
    //     var self:any = this;

    //     var parser = new egret.HtmlTextParser();
    //     var textflowArr:Array<Array<egret.ITextElement>> = [];
    //     for (var i:number = 0; i < result.length; i++) {
    //         textflowArr.push(parser.parser(result[i]));
    //     }

    //     var textfield = self.textfield;
    //     var count = -1;
    //     var change:Function = function () {
    //         count++;
    //         if (count >= textflowArr.length) {
    //             count = 0;
    //         }
    //         var lineArr = textflowArr[count];

    //         self.changeDescription(textfield, lineArr);

    //         var tw = egret.Tween.get(textfield);
    //         tw.to({"alpha": 1}, 200);
    //         tw.wait(2000);
    //         tw.to({"alpha": 0}, 200);
    //         tw.call(change, self);
    //     };

    //     change();
    // }
    /**
     * 切换描述内容
     * Switch to described content
     */
    // private changeDescription(textfield:egret.TextField, textFlow:Array<egret.ITextElement>):void {
    //     textfield.textFlow = textFlow;
    // }
    /**
     * 点击按钮
     * Click the button
     */
    // private onButtonClick(e: egret.TouchEvent) {
    //     var panel = new eui.Panel();
    //     panel.title = "Title";
    //     panel.horizontalCenter = 0;
    //     panel.verticalCenter = 0;
    //     this.addChild(panel);
    // }
    // private onPlayerMove(e: egret.TouchEvent) {
    //     let touchX : number = e.stageX;
    //     let touchY : number = e.stageY;
    //     // let moveDirection : number = Game.PLAYER_MOVE_RIGHT;
    //     let offsetX = touchX - Game.player.m_node.x;
    //     let offsetY = touchY - Game.player.m_node.y;
    //     if ((offsetX > 0) && (offsetX <= 40)) {
    //         offsetX = 0;
    //     }
    //     if ((offsetY > 0) && (offsetY <= 40)) {
    //         offsetY = 0;
    //     }
    //     if ((offsetX < 0)) { //left 
    //         if (offsetY == 0) {  
    //             //left
    //             Game.player.m_node.x = Game.player.m_node.x - 40;
    //         } else if (offsetY < 0) {
    //             if ((-offsetX) >= (-offsetY)) {
    //                 //left
    //             Game.player.m_node.x = Game.player.m_node.x - 40;
    //             } else { 
    //             Game.player.m_node.y = Game.player.m_node.y - 40;
    //                 //up
    //             }
    //         } else if (offsetY > 0) {
    //             if ((-offsetX) >= offsetY) {
    //                 //left
    //             Game.player.m_node.x = Game.player.m_node.x - 40;
    //             } else { 
    //             Game.player.m_node.y = Game.player.m_node.y + 40;
    //                 //down
    //             }
    //         }
    //         // console.log("    click left ");
    //     } else if (offsetX > 0) {        
    //         if (offsetY == 0) {  
    //             Game.player.m_node.x = Game.player.m_node.x + 40;
    //             //right
    //         } else if (offsetY < 0) {
    //             if ((offsetX) >= (-offsetY)) {
    //             Game.player.m_node.x = Game.player.m_node.x + 40;
    //                 //right
    //             } else { 
    //             Game.player.m_node.y = Game.player.m_node.y - 40;
    //                 //up
    //             }
    //         } else if (offsetY > 0) {
    //             if (offsetX >= offsetY) {
    //             Game.player.m_node.x = Game.player.m_node.x + 40;
    //                 //right
    //             } else { 
    //             Game.player.m_node.y = Game.player.m_node.y + 40;
    //                 //down
    //             }
    //         }
    //         // console.log(" click right  ");
    //     } else if (offsetX == 0) {
    //         if (offsetY == 0) {  
    //             //原地
    //         } else if (offsetY < 0) {
    //             Game.player.m_node.y = Game.player.m_node.y - 40;
    //             //up
    //         } else if (offsetY > 0) {
    //             Game.player.m_node.y = Game.player.m_node.y + 40;
    //             //down
    //         }
    //     }
        // Game.player.SetCurBlockId();
        // Game.player.SetMoveDirection();
    //}

            /**骨骼角色拥有的动作列表**/
        private actionArray;
        /**骨骼角色执行的当前动作索引**/
        private actionFlag;
        /**存放骨骼动画的容器**/
        private container;
        /**骨骼的实体数据**/
        private armature;
        /**骨骼的可视对象**/
        private armatureDisplay;
        /**创建骨骼模型**/
        private createMotorcycleExp():void
        {
            this.actionArray = ["player"]
            this.container = new egret.DisplayObjectContainer();

            this.addChild(this.container);
            this.container.x = 250;
            this.container.y = 350;

            //读取一个骨骼数据,并创建实例显示到舞台
            var skeletonData = RES.getRes("player_ske_json");
            var textureData = RES.getRes("player_tex_json");
            var texture = RES.getRes("player_tex_png");

            var factory = new dragonBones.EgretFactory();
            factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
            factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));

            this.armature = factory.buildArmature("Armature");
            this.armatureDisplay = this.armature.getDisplay();
            dragonBones.WorldClock.clock.add(this.armature);
            this.container.addChild(this.armatureDisplay);
            this.armatureDisplay.x = 0;
            this.armatureDisplay.y = 0;
            this.actionFlag = 0;
            //启动骨骼动画播放
            this.armature.animation.gotoAndPlay("player");

            this.addChild(this.armatureDisplay);
            egret.startTick(this.onTicker, this);

            Game.player.m_node = this.armatureDisplay;
        }
        
        private _time:number;

        private onTicker(timeStamp:number) {

            if(!this._time) {
                this._time = timeStamp;
            }

            var now = timeStamp;
            var pass = now - this._time;
            this._time = now;

            dragonBones.WorldClock.clock.advanceTime(pass / 1000);

            return false;
        }
}
