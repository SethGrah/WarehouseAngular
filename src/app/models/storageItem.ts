export class storageItem{
    id:number=0;
    itemName:string;
    itemSize:number;
    quantity:number;
    itemDesc:string;
    constructor(itemName:string,itemSize:number,quantity:number,itemDesc:string){
        
        this.itemName=itemName;
        this.itemSize=itemSize;
        this.quantity=quantity;
        this.itemDesc=itemDesc;
    }

}