var Util;
(function (Util) {
    /** 全局变量，用于调试时开启快速通关模式。 */
    Util.global_cfg_skip_fight = false;
    /** 全局变量，用于控制测试时开启boss战功能。 */
    Util.global_cfg_enable_boss = false;
    function createRichText(config, label) {
        var html = config.text || "";
        var list = html.match(/<.+?>[^<]*/g);
        var curFont = config;
        if (label) {
            curFont.size = curFont.size || label.size;
            curFont.textColor = curFont.textColor || label.textColor;
            curFont.stroke = curFont.stroke || label.stroke;
            curFont.strokeColor = curFont.strokeColor || label.strokeColor || 0;
            curFont.bold = label.bold;
        }
        var fonts = [];
        var tag = 0;
        fonts.push(curFont);
        var richText = label || new eui.Label();
        // if (curFont.boundingWidth) {
        // 	richText.width = curFont.boundingWidth;
        // }
        var textFlow = [];
        var text = html.substr(0, list ? html.indexOf("<") : html.length);
        text = text.replace(/\\n/g, "\n");
        var richElement = { text: htmldecode(text), style: curFont };
        textFlow.push(richElement);
        if (!list || list.length <= 0) {
            richText.textFlow = textFlow;
            return richText;
        }
        var handleSpecialTag = function (tag) {
            var font = Util.copyData(curFont);
            var fontColor = {
                blue: 0x4CC5FF,
                red: 0xD73826,
                yellow: 0xFFDB00,
                green: 0x23F024,
                smoke: 0xC2C2C2,
            };
            for (var key in fontColor) {
                if (fontColor.hasOwnProperty(key)) {
                    if (new RegExp("<" + key + ">").test(tag)) {
                        font.textColor = fontColor[key];
                        curFont = font;
                        fonts.push(curFont);
                        return true;
                    }
                }
            }
            if (new RegExp("<name>").test(tag)) {
                font.textColor = 0x4CC5FF;
                curFont = font;
                fonts.push(curFont);
                return true;
            }
            if (new RegExp("<s>").test(tag)) {
                font.stroke = Math.round(font.size / 10);
                font.strokeColor = 0x0;
                curFont = font;
                fonts.push(curFont);
                return true;
            }
        };
        for (var i = 0; i < list.length; i++) {
            var func = list[i].match(/<.+>/)[0];
            if (func.indexOf("/") > 0) {
                if (fonts.length > 1) {
                    fonts.pop();
                }
                curFont = fonts[fonts.length - 1];
            }
            else if (/image=/.test(func)) {
                var p = func.split("=");
                p[1] = p[1].replace(/[\"'>]/g, "");
            }
            else if (handleSpecialTag(func)) {
            }
            else {
                curFont = Util.copyData(curFont);
                var configs = func.match(/[^<\s]+=.+?(?=[\s>])/g);
                if (configs && configs.length > 0) {
                    for (var j = 0; j < configs.length; j++) {
                        var p = configs[j].split("=");
                        p[1] = p[1].replace("\"", "").replace("'", "");
                        if (p[0].toLowerCase() == "fontsize" || p[0].toLowerCase() == "size") {
                            curFont.size = parseInt(p[1]);
                        }
                        else if (p[0].toLowerCase() == "fontname") {
                            curFont.fontFamily = (p[1]);
                        }
                        else if (p[0].toLowerCase() == "color") {
                            curFont.textColor = parseInt("0x" + p[1].replace("#", "").replace("0x", ""));
                        }
                        else if (p[0].toLowerCase() == "stroke") {
                            curFont.stroke = parseInt(p[1]);
                        }
                        else if (p[0].toLowerCase() == "strokeColor") {
                            curFont.strokeColor = parseInt(p[1].replace("#", "").replace("0x", ""));
                        }
                    }
                    fonts.push(curFont);
                }
            }
            text = list[i].substr(func.indexOf(">") + 1);
            text = text.replace(/\\n/g, "\n");
            var lines = text.split('\n');
            for (var k = 0; k < lines.length; k++) {
                if (lines[k].length > 0) {
                    var richElement_1 = { text: htmldecode(lines[k]), style: curFont };
                    textFlow.push(richElement_1);
                }
                if (k < lines.length - 1) {
                    var richElement_2 = { text: "\n", style: curFont };
                    textFlow.push(richElement_2);
                }
            }
        }
        richText.textFlow = textFlow;
        return richText;
    }
    Util.createRichText = createRichText;
    /**
     * 解析数据表中出现的"a-Ra,b-Rb"的概率值
     *
     * @export
     * @param {string} rangeStr
     * @returns
     */
    function getRandomValueFromRangeString(rangeStr) {
        var pool = [];
        var poolRange = [];
        rangeStr.split(',').forEach(function (x) {
            var v = x.split('-');
            pool.push(v[0]);
            poolRange.push(v[1] || 0);
        });
        var index = Util.getRandomValueInRange(poolRange);
        return pool[index];
    }
    Util.getRandomValueFromRangeString = getRandomValueFromRangeString;
})(Util || (Util = {}));
//# sourceMappingURL=GameUtil.js.map