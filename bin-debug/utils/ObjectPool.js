var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Game;
(function (Game) {
    /**
     * 对象池. 支持对每个对象的取出和放入定制动作
     *
     * @export
     * @class ObjectPool
     * @template T
     */
    var ObjectPool = (function () {
        function ObjectPool(clazz) {
            this.clazz = clazz;
            this.pool = [];
        }
        Object.defineProperty(ObjectPool.prototype, "length", {
            get: function () {
                return this.pool.length;
            },
            enumerable: true,
            configurable: true
        });
        ObjectPool.prototype.get = function () {
            var object = this.pool.shift();
            if (!object) {
                if (this.onNew) {
                    object = this.onNew();
                }
                else {
                    object = new this.clazz();
                }
            }
            else {
            }
            if (this.onInitialize) {
                this.onInitialize(object);
            }
            return object;
        };
        ObjectPool.prototype.recycle = function (object) {
            if (!object) {
                return;
            }
            this.pool.push(object);
            if (this.onRecycle) {
                this.onRecycle(object);
            }
        };
        return ObjectPool;
    }());
    Game.ObjectPool = ObjectPool;
    __reflect(ObjectPool.prototype, "Game.ObjectPool");
})(Game || (Game = {}));
//# sourceMappingURL=ObjectPool.js.map