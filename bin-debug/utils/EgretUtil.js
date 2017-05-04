var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
egret.DisplayObjectContainer.prototype.getLastChild = function () {
    return this.getChildAt(this.numChildren - 1);
};
eui.DataGroup.prototype.getLastChild = function () {
    return this.getElementAt(this.numElements - 1);
};
egret.TextField.prototype.setRichText = function (text) {
    Util.createRichText({ text: text }, this);
};
eui.TabBar.prototype.bindViewStack = function (viewStack) {
    var self = this;
    var selectViewStack = function (index) {
        viewStack.selectedIndex = index;
        var child = viewStack.getChildAt(index);
        if (child["onActive"] && typeof (child["onActive"]) == "function") {
            child["onActive"].call(child);
        }
        var tapEvent = new eui.ItemTapEvent(eui.ItemTapEvent.ITEM_TAP, false, false, {});
        tapEvent.itemIndex = index;
        tapEvent.item = self.selectedItem;
        tapEvent.itemRenderer = self.getElementAt(index);
        self.dispatchEvent(tapEvent);
    };
    var onItemTap = function (e) {
        if (e.itemIndex <= viewStack.length && e.itemIndex != viewStack.selectedIndex) {
            selectViewStack(e.itemIndex);
        }
    };
    this["select"] = function (index) {
        if (index <= this.numElements && index != this.selectedIndex) {
            this.selectedIndex = index;
            if (index <= viewStack.length && index != viewStack.selectedIndex) {
                selectViewStack(index);
            }
        }
    };
    this.addEventListener(eui.ItemTapEvent.ITEM_TAP, onItemTap, this);
};
eui.TabBar.prototype.select = function (index) {
    if (index <= this.numElements && index != this.selectedIndex) {
        this.selectedIndex = index;
    }
};
eui.ViewStack.prototype.getItemAt = function (index) {
    return this.getChildAt(index);
};
eui.Scroller.prototype.showArrow = function (source, config) {
    if (config === void 0) { config = {}; }
    var self = this;
    config.rotation = config.rotation || 0;
    var arrowOffset = config.offset || 0;
    // up
    {
        var arrow = new eui.Image(source);
        arrow.anchorOffsetX = arrow.width / 2;
        arrow.anchorOffsetY = arrow.height / 2;
        arrow.horizontalCenter = 0;
        arrow.top = arrowOffset;
        arrow.rotation = -config.rotation;
        egret.Tween.get(arrow, { loop: true })
            .to({ top: arrow.top - 3 }, 400)
            .to({ top: arrow.top }, 10);
        self.addChild(arrow);
        self["arrowTop"] = arrow;
    }
    // down
    {
        var arrow = new eui.Image(source);
        arrow.anchorOffsetX = arrow.width / 2;
        arrow.anchorOffsetY = arrow.height / 2;
        arrow.horizontalCenter = 0;
        arrow.bottom = arrowOffset;
        arrow.rotation = -config.rotation + 180;
        egret.Tween.get(arrow, { loop: true })
            .to({ bottom: arrow.bottom - 3 }, 400)
            .to({ bottom: arrow.bottom }, 10);
        self.addChild(arrow);
        self["arrowBottom"] = arrow;
    }
    // right
    {
        var arrow = new eui.Image(source);
        arrow.anchorOffsetX = arrow.width / 2;
        arrow.anchorOffsetY = arrow.height / 2;
        arrow.verticalCenter = 0;
        arrow.right = arrowOffset;
        arrow.rotation = -config.rotation + 90;
        egret.Tween.get(arrow, { loop: true })
            .to({ right: arrow.right - 3 }, 400)
            .to({ right: arrow.right }, 10);
        self.addChild(arrow);
        self["arrowRight"] = arrow;
    }
    // left
    {
        var arrow = new eui.Image(source);
        arrow.anchorOffsetX = arrow.width / 2;
        arrow.anchorOffsetY = arrow.height / 2;
        arrow.verticalCenter = 0;
        arrow.left = arrowOffset;
        arrow.rotation = -config.rotation - 90;
        egret.Tween.get(arrow, { loop: true })
            .to({ left: arrow.left - 3 }, 400)
            .to({ left: arrow.left }, 10);
        self.addChild(arrow);
        self["arrowLeft"] = arrow;
    }
    var adjustArrow = function () {
        self["arrowTop"].visible = self.viewport.scrollV > 0;
        self["arrowBottom"].visible = self.viewport.scrollV + self.height < self.viewport.contentHeight;
        self["arrowLeft"].visible = self.viewport.scrollH > 0;
        self["arrowRight"].visible = self.viewport.scrollH + self.width < self.viewport.contentWidth;
    };
    self.addEventListener(egret.Event.CHANGE, adjustArrow, self);
    if (self.viewport) {
        self.viewport.$addListener(egret.Event.RESIZE, adjustArrow, self);
    }
    adjustArrow();
};
egret.DisplayObject.prototype.removeSelf = function () {
    if (this.parent && this.parent instanceof egret.DisplayObjectContainer) {
        this.parent.removeChild(this);
    }
};
Object.defineProperty(egret.Capabilities, "isWeiXin", {
    configurable: true,
    get: function () {
        if (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE) {
            return false;
        }
        return /micromessenger/.test(window.navigator.userAgent.toLowerCase()) && !/windowswechat/.test(window.navigator.userAgent.toLowerCase());
    }
});
egret.EventDispatcher.prototype.removeAllEventListener = function (type, thisObject) {
    var values = this.$EventDispatcher;
    for (var i = 1; i <= 2; i++) {
        var eventMap = values[i /* captureEventsMap */];
        var list = eventMap[type];
        if (!list) {
            continue;
        }
        if (values[3 /* notifyLevel */] !== 0) {
            eventMap[type] = list = list.concat();
        }
        // this.$removeEventBin(list, listener, thisObject);
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var bin = list[i];
            if (!thisObject || (bin.thisObject == thisObject && bin.target == this)) {
                list[i] = null;
            }
        }
        list = list.filter(function (x) { return !!x; });
        if (list.length == 0) {
            eventMap[type] = null;
        }
        else {
            eventMap[type] = list;
        }
    }
};
var CustomItemRenderer = (function (_super) {
    __extends(CustomItemRenderer, _super);
    function CustomItemRenderer() {
        return _super.call(this) || this;
    }
    CustomItemRenderer.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    return CustomItemRenderer;
}(eui.ItemRenderer));
__reflect(CustomItemRenderer.prototype, "CustomItemRenderer");
//# sourceMappingURL=EgretUtil.js.map