namespace Game{
    export var playerEvent:Game.AllEvent;
    export var player:Game.Player;
    export var scrOne:Game.ScreenOne;
    export class DataModal extends egret.EventDispatcher {
        _properties = [];

        constructor(data = {}) {
            super();
            this.setData(data);
        }
        
        public setData(data){
            if (!data)
                return ;
            for (var key in data){
                if (data.hasOwnProperty(key)){
                    this[key] = data[key];
                }
            }
        }
        
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
        public defineProperty(name:string, valueConverter?: string|Function, displayConverter?:Function){
            var pName = "_" + name;
            var oldValue = this[name];
            if (typeof(valueConverter) == "string"){
                pName = <string> valueConverter;
                oldValue = this[pName];
            }
            var displayProperty = name+"Display";
            var propertyChanged = false
            
            if (displayConverter){
                Object.defineProperty(this,name+"Display",{
                    configurable : true, 
                    get (){
                         if (typeof(valueConverter) == "function"){
                            return displayConverter.call(this,this[name]);
                        }
                        return displayConverter.call(this,this[pName]);
                    },
                    set(value){
                        this.displayProperty = null;
                    }
                });
            }
            Object.defineProperty(this,name,{
                configurable : true, 
                get(){
                    if (typeof(valueConverter) == "function"){
                        return (<Function>valueConverter).call(this,this[pName]);
                    }
                    return this[pName];
                },
                set(value){
                    var oldValue = this[pName]
                    this[pName] = value;
                    this.dispatchEventWith("onPropertyChanged",false,{name : name, value : value, oldValue : oldValue})
                    this.dispatchEventWith(name+"Changed",false,{name : name, value : value, oldValue : oldValue})
                    if (displayConverter){
                        this[displayProperty] = null;
                    }
                }
            })
            this[name] = oldValue;
            this._properties.push({ name : name, virtual : typeof(valueConverter) == "function" });
        }

        public updateAllProperties(){
            for(var p of this._properties){
                if (p.virtual){
                    this[p.name] = null;
                }
            }
            this.dispatchEventWith("propertiesChanged");
        }
        
    }

    export class AllEvent extends DataModal{
        constructor(){
            super();
        }
    }
}