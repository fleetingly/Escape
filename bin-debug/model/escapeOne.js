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
     * escapeOne
     */
    var dataEscapeOne = (function (_super) {
        __extends(dataEscapeOne, _super);
        function dataEscapeOne(data) {
            var _this = _super.call(this) || this;
            /** id */
            _this.id = 0;
            /** 能否通过 */
            _this.advance = 1;
            /** 门id */
            _this.type = 0;
            /** 包含物品 */
            _this.addGoods = 0;
            _this.linkNodeId = "";
            _this.linkList = [];
            _this.isAccess = false;
            _this.setData(data);
            _this.getLinks();
            return _this;
        }
        dataEscapeOne.prototype.getLinks = function () {
            if (this.linkNodeId.length > 0) {
                var a = this.linkNodeId.split(',');
                for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
                    var b = a_1[_i];
                    if (b == "0") {
                        break;
                    }
                    this.linkList.push(parseInt(b));
                }
            }
        };
        return dataEscapeOne;
    }(Game.DataModal));
    Game.dataEscapeOne = dataEscapeOne;
    __reflect(dataEscapeOne.prototype, "Game.dataEscapeOne");
    var dataEscapeTwo = (function (_super) {
        __extends(dataEscapeTwo, _super);
        function dataEscapeTwo(data) {
            var _this = _super.call(this) || this;
            /** id */
            _this.id = 0;
            /** 能否通过 */
            _this.advance = 1;
            /** 门id */
            _this.type = 0;
            /** 包含物品 */
            _this.addGoods = 0;
            _this.linkNodeId = "";
            _this.linkList = [];
            _this.isAccess = false;
            _this.isHas = true;
            _this.setData(data);
            _this.getLinks();
            return _this;
        }
        dataEscapeTwo.prototype.getLinks = function () {
            if (this.linkNodeId.length > 0) {
                var a = this.linkNodeId.split(',');
                for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
                    var b = a_2[_i];
                    this.linkList.push(parseInt(b));
                }
            }
        };
        return dataEscapeTwo;
    }(Game.DataModal));
    Game.dataEscapeTwo = dataEscapeTwo;
    __reflect(dataEscapeTwo.prototype, "Game.dataEscapeTwo");
})(Game || (Game = {}));
//# sourceMappingURL=escapeOne.js.map