namespace Game{
    /**
     * escapeOne
     */
    export class dataEscapeOne extends DataModal{
        /** id */
        id:number = 0;  
        /** 能否通过 */
        advance:number = 1;
        /** 门id */
        type:number = 0 ;
        /** 包含物品 */
        addGoods:number = 0;
        linkNodeId:string = "";
        linkList:number[] = [];
        isAccess:boolean = false;

        public constructor(data?){
            super();
            this.setData(data);
            this.getLinks();
        }
        
        public getLinks(){
            if(this.linkNodeId.length >0){
                let a = this.linkNodeId.split(',');
                for(let b of a){
                    if (b == "0"){
                        break;
                    }
                    this.linkList.push(parseInt(b));
                }
            }
        }
    }

     export class dataEscapeTwo extends DataModal{
        /** id */
        id:number = 0;  
        /** 能否通过 */
        advance:number = 1;
        /** 门id */
        type:number = 0 ;
        /** 包含物品 */
        addGoods:number = 0;
        linkNodeId:string = "";
        linkList:number[] = [];
        isAccess:boolean = false;
        isHas:boolean = true;

        public constructor(data?){
            super();
            this.setData(data);
            this.getLinks();
        }
        
        public getLinks(){
            if(this.linkNodeId.length >0){
                let a = this.linkNodeId.split(',');
                for(let b of a){
                    this.linkList.push(parseInt(b));
                }
            }
        }
    }
}