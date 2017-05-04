/*
 *  ScreenOne.ts
 *  egret
 *  cardh5
 *
 *  Created by Liu Yang on 17/04/27.
 *  Copyright (c) 2017年 LiuYang Mobile. All rights reserved.
 */

namespace Game {

	/** 主场景界面 */
	export class ScreenOne extends BaseScreen {
		//eui 
		static instance: ScreenOne;
		public GroupMapItem:eui.Group;
		public labelSign:eui.Label;
		private container;

		//data 
		public gridsData = []; //448

		public constructor() {
			super();
			this.skinName = "MapScreenSkin";
			ScreenOne.instance = this;
			// this.labelSign.text = "1";
		}

		protected createChildren(): void {
			// 初始化地图中的结点
			for(let a of data_escapeOne){
				let preData: dataEscapeOne = new dataEscapeOne(a);
				let preScr:ItemScreen = new ItemScreen(preData);
				this.GroupMapItem.addChild(preScr);
				this.gridsData.push(preScr);
			}

			// 监听点击事件，通知刷新界面
			Game.playerEvent.addEventListener(PlayerEvent.PLAYERPASSGRIDS,this.onUpdateInfo,this);
		}

		/** 处理位置后所在位置关联区域的显示情况 */
		private onUpdateInfo(){

		}

				// 获取当前节点的元素，并判断是否可以通过，并进行换肤操作
		public JudgeIfCanAdvance(id:number) : boolean {
			if (this.gridsData.length == 0) {
				return false;
			}
			let itemScreen = this.gridsData[id - 1];

			if (itemScreen && itemScreen.data.advance == 1) {
				return true;
			}
			return false;
		}

		//得到当前块是否为门的标识
		public GetDoorType(id : number) : number {
			if (this.gridsData.length == 0) {
				return 0;
			}
			let itemScreen = this.gridsData[id - 1];
			if (itemScreen) {
				return itemScreen.data.type;
			}
			
		}

		public NotifyBlockUpdate(id:number) : void {
			//得到当前块关联块id
			let itemScreen : ItemScreen = this.gridsData[id - 1];

			if(itemScreen) {
				let list:number[] = itemScreen.data.linkList;
				let isAdvance : boolean = Game.scrOne.JudgeIfCanAdvance(id);
				if ((list.length == 0) && (isAdvance == false) && (itemScreen.data.addGoods == 0)) { //表示当前块即不能通过，也没有关联项，也没有障碍
					itemScreen.data.isAccess = true;
					return;
				}

				//先访问当前块
				if(itemScreen.data.isAccess == false) {
					if (isAdvance == true) {   //能通过
						//先根据移动方向，设置通道图
						itemScreen.imgBg.source = RES.getRes("main_json.pass");
						if (itemScreen.data.addGoods != 0) {  //能通过，但是有障碍，如钻石，地雷，喷火...
							this.SetObstacleImage(itemScreen);
								//再设置障碍图
						}
					} else {  //不能通过
						if (itemScreen.data.addGoods != 0) {  //不能通过，但是有贴图，如树，墙，石头...
							this.SetObstacleImage(itemScreen);
							//设置障碍图
						}
					}
					itemScreen.data.isAccess = true;
				}
				
				//再访问关联块
				if (list.length > 0) {
					for (let i = 0; i < itemScreen.data.linkList.length; i++) {
						let itemtemId = itemScreen.data.linkList[i];
						let curItem = this.gridsData[itemtemId - 1];
						let curAdvance : boolean = Game.scrOne.JudgeIfCanAdvance(itemtemId);
						if (curItem.isAccess == false) {
							if (curItem.isAdvance == true) {   //能通过
								// 先根据移动方向，设置通道图
								curItem.imgBg.source = RES.getRes("main_json.pass");
								if (curItem.addGoods != 0) {  //能通过，但是有障碍，如钻石，地雷，喷火...
									this.SetObstacleImage(curItem);
										//再设置障碍图
								}
							} else {  //不能通过
								if (curItem.addGoods != 0) {  //不能通过，但是有贴图，如树，墙，石头...
									this.SetObstacleImage(curItem);
									//设置障碍图
								}
							}
							curItem.isAccess = true;
						}
					}
				}
			}

		}
				//设置障碍图
		private SetObstacleImage(item : ItemScreen) {
			let Obstacle = data_escapeObstacle[item.data.addGoods];
			item.imgBg.source = RES.getRes("main_json." + Obstacle.image);
		}

		public EncounteredObstacle(blockId : number) : void {
			let curItem = this.gridsData[blockId - 1];
			if (curItem) {
				if ((curItem.data.isAccess == true) && (curItem.data.isHas = true)) {
					if (curItem.data.addGoods != 0) {
						let Obstacle = data_escapeObstacle[curItem.data.addGoods];
						if (Obstacle) {
							switch (Obstacle.id) {
								case 1:     //钻石
								case 8:     //白钥匙
								case 9:     //黄钥匙
								case 10:    //蓝钥匙
									this.FlowTextShow(Obstacle.id);
									curItem.imgBg.source = RES.getRes("main_json.pass");

								break;

								case 2:      //炸弹
								case 24:     //钢刺
								case 15:     //死亡点

								break;
							}
						}
						curItem.data.isHas = false;
					}
				}
			}
		}
		private FlowTextShow(goodsId : number) : void {
			//生成容器
			this.container = new egret.DisplayObjectContainer();
            this.addChild(this.container);
			//设置容器坐标
			this.SetShowFlowTextPos(this.container);

			//生成图片
			let image = new  eui.Image();
			let Obstacle = data_escapeObstacle[goodsId];
			if (Obstacle) {
				image.source = RES.getRes("main_json." + Obstacle.image);
			}
			image.scale9Grid = new egret.Rectangle(10,10,10,10);
			image.width = 60;
			image.height = 60;
			this.container.addChild(image);
			image.x = 0,
			image.y = 0;

			//生成label
			let label:eui.Label = new eui.Label();
			label.text = "+ 5";
			label.width = 100;//设置宽度
			label.height = 30;//设置高度
			label.fontFamily = "Tahoma";//设置字体
			label.textColor = 0x00CD00;//设置颜色
			label.size = 25;//设置文本字号
			label.bold = true;//设置是否加粗
			label.italic = true;//设置是否斜体
			label.textAlign = "left";//设置水平对齐方式
			label.verticalAlign = "middle";//设置垂直对齐方式
			label.x = image.x + image.width;
			this.container.addChild(label);

			//设置容器大小
			this.container.width = (image.width > label.width) ? image.width : label.width;
			this.container.height = (image.height > label.height) ? image.height : label.height;

			//生成定时器
			var timer:egret.Timer = new egret.Timer(0,100);
			//注册事件侦听器
			timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
			timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
			//开始计时
			timer.start();
		}

		private timerFunc()
		{
			console.log("计时");
			this.container.y -= 1;
		}

		private timerComFunc()
		{
			console.log("计时结束");
			this.container.visible = false;
			this.container.del
		}

		private SetShowFlowTextPos(container : any) : void {
			let curBlockId : number = Game.player.GetCurBlockId();
			let row = curBlockId / 16
			let offsetRow = curBlockId % 16;
			let posX = 0;
			let posY = 1096;
			if (offsetRow == 0) {
				posX = 600;
				posY = row * 40 - 40;
			} else {
				posX = offsetRow * 40 - 40;
				posY = row * 40;
			}
			container.x = posX;
			container.y = posY;
		}
	}

	/** ItemScreen */
	export class ItemScreen extends BaseScreen{
		public imgBg:eui.Image;
		public data : Game.dataEscapeOne;
		public constructor(data:dataEscapeOne){
			super();
			this.skinName = "MapItemSkin";
			this.data = data;
		}

		protected createChildren(): void {
			// 初始化
			this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
			if ((this.data.id == 433) || (this.data.id == 434) || (this.data.id == 417) || (this.data.id == 418)) {
				this.imgBg.source = RES.getRes("main_json.pass");
			}
		} 

		// 点击响应
		private onTouch(e: egret.TouchEvent){
			// 更新当前位置点
			Game.player.JudgeCurPlayerValue(e.stageX, e.stageY);
			
			// 换肤
			let curScreenId : number = Game.player.GetScreenId();
			let curBlockId : number = Game.player.GetCurBlockId();
			let isAdvance : boolean = false;
			let doorType : number = 0;
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
				let moveDirection : number = Game.player.GetMoveDirection();
				if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT) {
					Game.player.m_node.x = Game.player.m_node.x - 40;
				} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT) {
					Game.player.m_node.x = Game.player.m_node.x + 40;
				} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP) {
					Game.player.m_node.y = Game.player.m_node.y - 40;
				} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN) {
					Game.player.m_node.y = Game.player.m_node.y + 40;
				}

				//判断移动之后是否遇到障碍
				Game.scrOne.EncounteredObstacle(curBlockId);

			} else {
			    // 恢复palyer当前位置
				let moveDirection : number = Game.player.GetMoveDirection();
				let curBlockId : number = Game.player.GetCurBlockId();
				if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT) {
					curBlockId += 1;
				} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT) {
					curBlockId -= 1;
				} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP) {
					curBlockId += 16;
				} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN) {
					curBlockId -= 16;
				}
				Game.player.SetCurBlockId(curBlockId);
			}

			// 切换界面 参数可以待定
			if (doorType > 0) { //表示当前块为门
				let doorData = data_escapeDoor[doorType];
				playerEvent.dispatchEventWith(PlayerEvent.PLAYERCHANGEMAP,false,{
						doorId:doorData.id,
						nextScreen:doorData.screen,
						nextScreenId:doorData.screen_id,
				})
			}
		}

		protected dataChanged(): void {
			egret.log("datachanged");
		} 
	}
}