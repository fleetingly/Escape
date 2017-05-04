namespace Game {
    /**
     * 对象池. 支持对每个对象的取出和放入定制动作
     * 
     * @export
     * @class ObjectPool
     * @template T
     */
    export class ObjectPool<T> {
        private pool: T[] = [];
        public onRecycle : (object:T)=>void;
        public onNew : ()=>T;
        public onInitialize : (object:T)=>void;

        constructor(private clazz: { new (...args): T; }) {
        }

        get length():number{
            return this.pool.length;
        }

        public get(): T {
            var object = this.pool.shift();

            if (!object) {
                if (this.onNew) {
                    object = this.onNew();
                } else {
                    object = new this.clazz()
                }
            }else{
            }

            if (this.onInitialize){
                this.onInitialize(object);
            }
            return object;
        }

        public recycle(object: T) {
            if (!object){
                return
            }

            this.pool.push(object);

            if (this.onRecycle){
                this.onRecycle(object);
            }
        }
    }
}