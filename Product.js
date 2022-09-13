//Khai bao lop
class Product{
    name;
    number;
    price;
    img;
    //Khoi tao thuoc tinh
    constructor(name, number, price, img){
        this.name = name;
        this.number = number;
        this.price = price;
        this.img = img;
    }
    //Khoi tao phương thuc
    getAmount(){
        let amount = this.number * this.price;
        return amount;
    }
}

