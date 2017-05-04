
declare namespace eui {
	export interface TabBar {
		/**
		 * 为TabBar绑定ViewStack, 使之随TabBar选项而变化
		 * 
		 * @param {eui.ViewStack} viewStack 要绑定的viewStack
		 * 
		 * @memberOf TabBar
		 */
		bindViewStack(viewStack: eui.ViewStack);
		/**
		 * 选择某一项, 不会触发事件
		 * 
		 * @param {number} index
		 * 
		 * @memberOf TabBar
		 */
		select(index: number);
	}

	export interface DataGroup {
		getLastChild();
	}

	export interface Scroller {

		/**
		 * 为Scroller添加箭头显示
		 * 
		 * @param {string | egret.Texture} source 箭头图,默认朝上
		 * @param {*} config
		 */
		showArrow(source: string | egret.Texture, config?: {rotation?:number, offset?:number});
	}
}

declare namespace egret {
	export interface DisplayObject {
		translate();
		removeSelf();
	}

	export interface DisplayObjectContainer {
		getLastChild();		
	}

	export interface TextField {
		/**
		 * 使TextField显示html格式的富文本. 支持的标签有
		 * 字体颜色 <color=#xxxxxx>
		 * 字体大小 <size=xx>
		 * 描边 <stroke=xx>
		 * 更多标签参考GameUtil
		 * @param {string} text
		 * 
		 * @memberOf TextField
		 */
		setRichText(text: string);
	}

	export namespace Capabilities {
		/** 是否是微信环境 */
		var isWeiXin: boolean;
	}
	
	export interface EventDispatcher {
		removeAllEventListener(event : string, thisArg? : any);
	}
}

egret.DisplayObjectContainer.prototype.getLastChild = function () {
	return this.getChildAt(this.numChildren - 1);
}

eui.DataGroup.prototype.getLastChild = function () {
	return this.getElementAt(this.numElements - 1);
}

egret.TextField.prototype.setRichText = function (text : string){
	Util.createRichText({text : text}, this)
}

eui.TabBar.prototype.bindViewStack = function (viewStack: eui.ViewStack) {
	var self =this as eui.TabBar
	var selectViewStack = function (index: number) {
		viewStack.selectedIndex = index;
		var child = viewStack.getChildAt(index);
		if (child["onActive"] && typeof (child["onActive"]) == "function") {
			(child["onActive"] as Function).call(child);
		}
		var tapEvent = new eui.ItemTapEvent(eui.ItemTapEvent.ITEM_TAP,false,false,{});
		tapEvent.itemIndex = index;
		tapEvent.item = self.selectedItem;
		tapEvent.itemRenderer = self.getElementAt(index) as CustomItemRenderer;
		self.dispatchEvent(tapEvent)
	}
	var onItemTap = function (e: eui.ItemTapEvent) {
		if (e.itemIndex <= viewStack.length && e.itemIndex != viewStack.selectedIndex) {
			selectViewStack(e.itemIndex);
		}
	}
	this["select"] = function (index: number) {
		if (index <= this.numElements && index != this.selectedIndex) {
			this.selectedIndex = index;
			if (index <= viewStack.length && index != viewStack.selectedIndex) {
				selectViewStack(index);
			}
		}
	}
	this.addEventListener(eui.ItemTapEvent.ITEM_TAP, onItemTap, this);
}

eui.TabBar.prototype.select = function (index: number) {
	if (index <= this.numElements && index != this.selectedIndex) {
		this.selectedIndex = index;
	}
}

eui.ViewStack.prototype.getItemAt = function (index) {
	return this.getChildAt(index);
}

eui.Scroller.prototype.showArrow = function (source: string | egret.Texture, config: any = {}) {
	var self = this as eui.Scroller;
	config.rotation = config.rotation || 0	
	var arrowOffset = config.offset || 0;
	// up
	{
		let arrow = new eui.Image(source);
		arrow.anchorOffsetX = arrow.width / 2;
		arrow.anchorOffsetY = arrow.height / 2;
		arrow.horizontalCenter = 0
		arrow.top = arrowOffset; 
		arrow.rotation = - config.rotation
		egret.Tween.get(arrow, { loop: true })
			.to({ top: <number>arrow.top - 3 }, 400)
			.to({ top: arrow.top }, 10)
		self.addChild(arrow)
		self["arrowTop"] = arrow;
	}

	// down
	{
		let arrow = new eui.Image(source);
		arrow.anchorOffsetX = arrow.width / 2;
		arrow.anchorOffsetY = arrow.height / 2;
		arrow.horizontalCenter = 0
		arrow.bottom = arrowOffset;
		arrow.rotation = - config.rotation + 180
		egret.Tween.get(arrow, { loop: true })
			.to({ bottom: <number>arrow.bottom - 3 }, 400)
			.to({ bottom: arrow.bottom }, 10)
		self.addChild(arrow)
		self["arrowBottom"] = arrow;
	}

	// right
	{
		let arrow = new eui.Image(source);
		arrow.anchorOffsetX = arrow.width / 2;
		arrow.anchorOffsetY = arrow.height / 2;
		arrow.verticalCenter = 0
		arrow.right = arrowOffset;
		arrow.rotation = - config.rotation + 90
		egret.Tween.get(arrow, { loop: true })
			.to({ right: <number>arrow.right - 3 }, 400)
			.to({ right: arrow.right }, 10)
		self.addChild(arrow)
		self["arrowRight"] = arrow;
	}

	// left
	{
		let arrow = new eui.Image(source);
		arrow.anchorOffsetX = arrow.width / 2;
		arrow.anchorOffsetY = arrow.height / 2;
		arrow.verticalCenter = 0
		arrow.left = arrowOffset;
		arrow.rotation = - config.rotation - 90
		egret.Tween.get(arrow, { loop: true })
			.to({ left: <number>arrow.left - 3 }, 400)
			.to({ left: arrow.left }, 10)
		self.addChild(arrow)
		self["arrowLeft"] = arrow;
	}

	var adjustArrow = function () {
		self["arrowTop"].visible = self.viewport.scrollV > 0;
		self["arrowBottom"].visible = self.viewport.scrollV + self.height < self.viewport.contentHeight;
		self["arrowLeft"].visible = self.viewport.scrollH > 0;
		self["arrowRight"].visible = self.viewport.scrollH + self.width < self.viewport.contentWidth;
	}

	self.addEventListener(egret.Event.CHANGE, adjustArrow, self);
	if (self.viewport){
		self.viewport.$addListener(egret.Event.RESIZE,adjustArrow, self)
	}
	adjustArrow();
}

egret.DisplayObject.prototype.removeSelf = function () {
	if (this.parent && this.parent instanceof egret.DisplayObjectContainer) {
		this.parent.removeChild(this);
	}
}

Object.defineProperty(egret.Capabilities, "isWeiXin", {
	configurable: true,
	get() {
		if (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE) {
			return false;
		}
		return /micromessenger/.test(window.navigator.userAgent.toLowerCase()) && !/windowswechat/.test(window.navigator.userAgent.toLowerCase());
	}
})

egret.EventDispatcher.prototype.removeAllEventListener = function (type : string, thisObject? : any){
	var values = this.$EventDispatcher;
	for (var i= 1; i<=2; i++){
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

		list = list.filter(x=>!!x);
				
		if (list.length == 0) {
			eventMap[type] = null;
		}else{
			eventMap[type] = list;
		}
	}
}

class CustomItemRenderer extends eui.ItemRenderer {
	constructor() {
		super();
	}

	protected createChildren() {
		super.createChildren();
	}
}