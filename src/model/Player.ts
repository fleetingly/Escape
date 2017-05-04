// TypeScript file
namespace Game{

    export class Player {
        private static m_pThis = null ;
        public m_node:egret.Bitmap;
	    private m_diamondNum = 0 ;
	    private m_boneNum = 0;
        private m_TotalKey = 0;
        private m_screenId = 0;
        private m_curBlockId = 433;
        private m_moveDirection = PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT;

        public constructor() {
        }

        public static GetInstance(): Player {
            if (Player.m_pThis === null) {
                Player.m_pThis = new Player();
            }
            return Player.m_pThis ;
        }

        public GetCurDiamondNum(): number {
            return this.m_diamondNum ; 
        }

        public GetCurBoneNum(): number {
            return this.m_boneNum;
        }

        public UpdateDiamondNum(num: number): void {
            this.m_diamondNum += num;
        }

        public UpdateBoneNum(num: number): void {
            this.m_boneNum += num;
        }

        public GetCurKeyNum(): number {
            return this.m_TotalKey;
        }

        public UpdateKeyNum(num: number): void {
            this.m_TotalKey += num;
        }

        public SetScreenId(id: number): void {
            this.m_screenId = id;
        }
        
        public GetScreenId() {
           return this.m_screenId;
        }

        public SetCurBlockId(id: number): void {
            this.m_curBlockId = id;
        }
        
        public GetCurBlockId() {
           return this.m_curBlockId;
        }

        public SetMoveDirection(direction: number): void {
            this.m_moveDirection = direction;
        }
        
        public GetMoveDirection() {
           return this.m_moveDirection;
        }

        public JudgeCurPlayerValue(touchX : number, touchY : number) : void {
            let moveDirection : number = Game.player.GetMoveDirection();
            let offsetX = touchX - Game.player.m_node.x;
            let offsetY = touchY - Game.player.m_node.y;
            if ((offsetX > 0) && (offsetX <= 40)) {
                offsetX = 0;
            }
            if ((offsetY > 0) && (offsetY <= 40)) {
                offsetY = 0;
            }
            if ((offsetX < 0)) { //left 
                if (offsetY == 0) {  
                    //left
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT;
                    // Game.player.m_node.x = Game.player.m_node.x - 40;
                } else if (offsetY < 0) {
                    if ((-offsetX) >= (-offsetY)) {
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT;
                        //left
                    // Game.player.m_node.x = Game.player.m_node.x - 40;
                    } else { 
                    // Game.player.m_node.y = Game.player.m_node.y - 40;
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP;
                        //up
                    }
                } else if (offsetY > 0) {
                    if ((-offsetX) >= offsetY) {
                        //left
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT;
                    // Game.player.m_node.x = Game.player.m_node.x - 40;
                    } else { 
                    // Game.player.m_node.y = Game.player.m_node.y + 40;
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN;
                        //down
                    }
                }
                // console.log("    click left ");
            } else if (offsetX > 0) {        
                if (offsetY == 0) {  
                    // Game.player.m_node.x = Game.player.m_node.x + 40;
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT;
                    //right
                } else if (offsetY < 0) {
                    if ((offsetX) >= (-offsetY)) {
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT;
                    // Game.player.m_node.x = Game.player.m_node.x + 40;
                        //right
                    } else { 
                    // Game.player.m_node.y = Game.player.m_node.y - 40;
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP;
                        //up
                    }
                } else if (offsetY > 0) {
                    if (offsetX >= offsetY) {
                    // Game.player.m_node.x = Game.player.m_node.x + 40;
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT;
                        //right
                    } else { 
                    // Game.player.m_node.y = Game.player.m_node.y + 40;
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN;
                        //down
                    }
                }
                // console.log(" click right  ");
            } else if (offsetX == 0) {
                if (offsetY == 0) {  
                    //原地
                } else if (offsetY < 0) {
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP;
                    // Game.player.m_node.y = Game.player.m_node.y - 40;
                    //up
                } else if (offsetY > 0) {
                    moveDirection = Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN;
                    // Game.player.m_node.y = Game.player.m_node.y + 40;
                    //down
                }
            }

            let curBlockId : number = Game.player.GetCurBlockId();
            if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT) {
                curBlockId -= 1;
            } else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT) {
                curBlockId += 1;
            } else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP) {
                curBlockId -= 16;
            } else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN) {
                curBlockId += 16;
            }
            Game.player.SetCurBlockId(curBlockId);
            Game.player.SetMoveDirection(moveDirection);
        }
    }
}