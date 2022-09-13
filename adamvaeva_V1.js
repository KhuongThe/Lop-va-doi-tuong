class Apple{
    constructor(){
        this.weight = 10;
    }
    decreaseApple(){
        this.weight --;
    }
    isEmptyApple(){
        if(this.weight > 0){
            return true;
        }
        else{
            return false;
        }
    }
    getWeightApple(){
        return this.weight;
    }
}
class Human{
    constructor(name,gender,weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    checkApple(apple){
       let check = apple.getWeightApple();
       console.log(check);
    }
    eatApple(apple){
        if(apple.isEmptyApple){
           apple.decreaseApple();
        }
    }
}