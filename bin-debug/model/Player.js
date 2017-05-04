var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Game;
(function (Game) {
    var Player = (function () {
        function Player() {
            this.m_diamondNum = 0;
            this.m_boneNum = 0;
            this.m_TotalKey = 0;
            this.m_screenId = 0;
            this.m_curBlockId = 433;
            this.m_moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
        }
        Player.GetInstance = function () {
            if (Player.m_pThis === null) {
                Player.m_pThis = new Player();
            }
            return Player.m_pThis;
        };
        Player.prototype.GetCurDiamondNum = function () {
            return this.m_diamondNum;
        };
        Player.prototype.GetCurBoneNum = function () {
            return this.m_boneNum;
        };
        Player.prototype.UpdateDiamondNum = function (num) {
            this.m_diamondNum += num;
        };
        Player.prototype.UpdateBoneNum = function (num) {
            this.m_boneNum += num;
        };
        Player.prototype.GetCurKeyNum = function () {
            return this.m_TotalKey;
        };
        Player.prototype.UpdateKeyNum = function (num) {
            this.m_TotalKey += num;
        };
        Player.prototype.SetScreenId = function (id) {
            this.m_screenId = id;
        };
        Player.prototype.GetScreenId = function () {
            return this.m_screenId;
        };
        Player.prototype.SetCurBlockId = function (id) {
            this.m_curBlockId = id;
        };
        Player.prototype.GetCurBlockId = function () {
            return this.m_curBlockId;
        };
        Player.prototype.SetMoveDirection = function (direction) {
            this.m_moveDirection = direction;
        };
        Player.prototype.GetMoveDirection = function () {
            return this.m_moveDirection;
        };
        Player.prototype.JudgeCurPlayerValue = function (touchX, touchY) {
            var moveDirection = Game.player.GetMoveDirection();
            var offsetX = touchX - Game.player.m_node.x;
            var offsetY = touchY - Game.player.m_node.y;
            if ((offsetX > 0) && (offsetX <= 40)) {
                offsetX = 0;
            }
            if ((offsetY > 0) && (offsetY <= 40)) {
                offsetY = 0;
            }
            if ((offsetX < 0)) {
                if (offsetY == 0) {
                    //left
                    moveDirection = 0 /* PLAYER_MOVE_LEFT */;
                }
                else if (offsetY < 0) {
                    if ((-offsetX) >= (-offsetY)) {
                        moveDirection = 0 /* PLAYER_MOVE_LEFT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y - 40;
                        moveDirection = 2 /* PLAYER_MOVE_UP */;
                    }
                }
                else if (offsetY > 0) {
                    if ((-offsetX) >= offsetY) {
                        //left
                        moveDirection = 0 /* PLAYER_MOVE_LEFT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y + 40;
                        moveDirection = 3 /* PLAYER_MOVE_DOWN */;
                    }
                }
            }
            else if (offsetX > 0) {
                if (offsetY == 0) {
                    // Game.player.m_node.x = Game.player.m_node.x + 40;
                    moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
                }
                else if (offsetY < 0) {
                    if ((offsetX) >= (-offsetY)) {
                        moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y - 40;
                        moveDirection = 2 /* PLAYER_MOVE_UP */;
                    }
                }
                else if (offsetY > 0) {
                    if (offsetX >= offsetY) {
                        // Game.player.m_node.x = Game.player.m_node.x + 40;
                        moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y + 40;
                        moveDirection = 3 /* PLAYER_MOVE_DOWN */;
                    }
                }
            }
            else if (offsetX == 0) {
                if (offsetY == 0) {
                }
                else if (offsetY < 0) {
                    moveDirection = 2 /* PLAYER_MOVE_UP */;
                }
                else if (offsetY > 0) {
                    moveDirection = 3 /* PLAYER_MOVE_DOWN */;
                }
            }
            var curBlockId = Game.player.GetCurBlockId();
            if (moveDirection == 0 /* PLAYER_MOVE_LEFT */) {
                curBlockId -= 1;
            }
            else if (moveDirection == 1 /* PLAYER_MOVE_RIGHT */) {
                curBlockId += 1;
            }
            else if (moveDirection == 2 /* PLAYER_MOVE_UP */) {
                curBlockId -= 16;
            }
            else if (moveDirection == 3 /* PLAYER_MOVE_DOWN */) {
                curBlockId += 16;
            }
            Game.player.SetCurBlockId(curBlockId);
            Game.player.SetMoveDirection(moveDirection);
        };
        return Player;
    }());
    Player.m_pThis = null;
    Game.Player = Player;
    __reflect(Player.prototype, "Game.Player");
})(Game || (Game = {}));
//# sourceMappingURL=Player.js.map