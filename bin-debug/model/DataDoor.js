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
     * DataDoor
     */
    var DataDoor = (function (_super) {
        __extends(DataDoor, _super);
        function DataDoor(data) {
            var _this = _super.call(this) || this;
            /** id */
            _this.id = 0;
            /** 该门对应的界面 */
            _this.screen = 0;
            /** 改门在该界面中对应的块id */
            _this.screen_id = 0;
            /** 通过该门的条件 */
            _this.need = 0;
            _this.setData(data);
            return _this;
        }
        return DataDoor;
    }(Game.DataModal));
    Game.DataDoor = DataDoor;
    __reflect(DataDoor.prototype, "Game.DataDoor");
})(Game || (Game = {}));
//# sourceMappingURL=DataDoor.js.map