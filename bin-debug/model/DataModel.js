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
    var DataModal = (function (_super) {
        __extends(DataModal, _super);
        function DataModal(data) {
            if (data === void 0) { data = {}; }
            var _this = _super.call(this) || this;
            _this._properties = [];
            _this.setData(data);
            return _this;
        }
        DataModal.prototype.setData = function (data) {
            if (!data)
                return;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    this[key] = data[key];
                }
            }
        };
        /**
         * 为数据绑定提供显示转换
         *
         * @param {string} name
         * @param {(string|Function)} [valueConverter] 属性的转换
         * @param {Function} [displayConverter] 属性名+Display 的转换
         * @returns
         *
         * @memberOf DataModal
         */
        DataModal.prototype.defineProperty = function (name, valueConverter, displayConverter) {
            var pName = "_" + name;
            var oldValue = this[name];
            if (typeof (valueConverter) == "string") {
                pName = valueConverter;
                oldValue = this[pName];
            }
            var displayProperty = name + "Display";
            var propertyChanged = false;
            if (displayConverter) {
                Object.defineProperty(this, name + "Display", {
                    configurable: true,
                    get: function () {
                        if (typeof (valueConverter) == "function") {
                            return displayConverter.call(this, this[name]);
                        }
                        return displayConverter.call(this, this[pName]);
                    },
                    set: function (value) {
                        this.displayProperty = null;
                    }
                });
            }
            Object.defineProperty(this, name, {
                configurable: true,
                get: function () {
                    if (typeof (valueConverter) == "function") {
                        return valueConverter.call(this, this[pName]);
                    }
                    return this[pName];
                },
                set: function (value) {
                    var oldValue = this[pName];
                    this[pName] = value;
                    this.dispatchEventWith("onPropertyChanged", false, { name: name, value: value, oldValue: oldValue });
                    this.dispatchEventWith(name + "Changed", false, { name: name, value: value, oldValue: oldValue });
                    if (displayConverter) {
                        this[displayProperty] = null;
                    }
                }
            });
            this[name] = oldValue;
            this._properties.push({ name: name, virtual: typeof (valueConverter) == "function" });
        };
        DataModal.prototype.updateAllProperties = function () {
            for (var _i = 0, _a = this._properties; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.virtual) {
                    this[p.name] = null;
                }
            }
            this.dispatchEventWith("propertiesChanged");
        };
        return DataModal;
    }(egret.EventDispatcher));
    Game.DataModal = DataModal;
    __reflect(DataModal.prototype, "Game.DataModal");
    var AllEvent = (function (_super) {
        __extends(AllEvent, _super);
        function AllEvent() {
            return _super.call(this) || this;
        }
        return AllEvent;
    }(DataModal));
    Game.AllEvent = AllEvent;
    __reflect(AllEvent.prototype, "Game.AllEvent");
})(Game || (Game = {}));
//# sourceMappingURL=DataModel.js.map