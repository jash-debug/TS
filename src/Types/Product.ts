
class Product {

    static autoInc = 1;
    id: number;
    name: string;
    quantity: number;
    purchased: boolean;

    constructor(name:string, quantity:number, purchased:boolean){
        this.id = Product.autoInc++
        this.name = name
        this.quantity = quantity
        this.purchased = purchased
    }

    togglePurchased():void{
        this.purchased = !this.purchased
    }
}

export default Product;