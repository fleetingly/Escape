namespace Game{
    /**
     * DataDoor
     */
    export class DataDoor extends DataModal{
        /** id */
        id:number = 0;  
        /** 该门对应的界面 */
        screen:number = 0;
        /** 改门在该界面中对应的块id */
        screen_id:number = 0;
        /** 通过该门的条件 */
        need:number = 0;

        public constructor(data?){
            super();
            this.setData(data);
        }
    }
}