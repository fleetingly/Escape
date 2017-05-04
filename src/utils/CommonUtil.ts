namespace Util{
    export function copyData(data, to?, exclude?, depth?) {
		to = to || {}
		exclude = exclude || {}
		if (!data || depth === 0)
			return
		for (var key in data) {
			if (typeof (data[key]) !== "object") {
				if (!exclude[key]) {
					to[key] = data[key]
				}
			} else {
				if (data[key] === null) {
					continue;
				}
				if (!to[key]) {
					if (typeof data[key].length == "number")
						to[key] = []
					else
						to[key] = {}
				}

				this.copyData(data[key], to[key], exclude, depth ? depth - 1 : depth)
			}
		}
		return to
	}

	
	/**
	 * 将时间差值转化为剩余时间格式
	 * 
	 * @export
	 * @param {any} time 要转化的时间差值
	 * @returns
	 */
	export function formatLeftTime(time) {
		time = Math.abs(Math.floor(time));
		var seconds = time % 60
		var hours = (time / 60 / 60) | 0
		var minutes = (time - hours * 60 * 60) / 60 | 0
		var str = ""
		if (Math.abs(hours) > 0)
			str += (hours < 10 ? "0" : "") + hours + ":"
		return str + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2)
	}

	/**
	 * 将时间差的相关值返回去，便于外部包装显示 【Liu Yang】
	 */
	export function GetLeftTime(time){
		time = Math.abs(Math.floor(time));
		let seconds = time % 60;
		let hours = (time / 60 / 60) | 0;
		let days = (time / 60 / 60 / 24 ) | 0;
		let minutes = (time - hours * 60 * 60) / 60 | 0;
		let hoursStr = "";
		
		if (Math.abs(hours) >= 0) {
			if (hours >= 24){
				hours = hours % 24;
			}
			
			hoursStr += (hours < 10 ? "0" : "") + hours;
		}
		
		let result = {
			days : (days < 10 ? "0" : "") + days,
			hours : hoursStr,
			minutes : ("0" + minutes).substr(-2),
			seconds : ("0" + seconds).substr(-2),
		}
		return result;
	}


	/**
	 * 创建唯一的UUID
	 * 
	 * @export
	 * @returns
	 */	
	export var createUUID = (function(uuidRegEx, uuidReplacer) {
		return function () {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
		};
	})(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0,
			v = c == "x" ? r : (r & 3 | 8);
		return v.toString(16);
	})

	/**
	 * 根据给定概率表随机挑选一个值
	 * 如: 给定rangeTable:{10,100,1000}, 则返回概率 0: 10/1110, 1: 100/1110, 2: 1000/1110
	 * @export
	 * @param {any} rangeTable 概率表
	 * @returns
	 */
	export function getRandomValueInRange(rangeTable) {
		var rangeValue = 0, range = 0
		for (var i = 0; i < rangeTable.length; i++) {
			if (rangeTable[i])
				range += Math.max(rangeTable[i], 0)
		}
		var rand = Math.random() * range
		for (var i = 0; i < rangeTable.length; i++) {
			if (rangeTable[i]) {
				rangeValue += Math.max(rangeTable[i], 0)
				if (rand < rangeValue) {
					return i
				}
			}
		}
	}

}