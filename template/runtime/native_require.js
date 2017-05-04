
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/dragonBones/dragonBones.js",
	"bin-debug/model/DataModel.js",
	"bin-debug/Screens/BaseScreen.js",
	"bin-debug/other/AssetAdapter.js",
	"bin-debug/Main.js",
	"bin-debug/model/DataDoor.js",
	"bin-debug/model/DataExport.js",
	"bin-debug/agf/List.js",
	"bin-debug/model/DataObstacle.js",
	"bin-debug/model/escapeOne.js",
	"bin-debug/model/Player.js",
	"bin-debug/model/Type.js",
	"bin-debug/agf/stopwatch.js",
	"bin-debug/other/LoadingUI.js",
	"bin-debug/other/ThemeAdapter.js",
	"bin-debug/agf/utils.js",
	"bin-debug/Screens/ScreenOne.js",
	"bin-debug/utils/CommonUtil.js",
	"bin-debug/utils/EgretUtil.js",
	"bin-debug/utils/GameUtil.js",
	"bin-debug/utils/JsUtil.js",
	"bin-debug/utils/ObjectPool.js",
	"bin-debug/utils/sha1.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};