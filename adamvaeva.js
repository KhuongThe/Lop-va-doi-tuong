class Apple{
    constructor(){
        this.weight = 10;
    }
}

class Human{
    constructor(name,gender,weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getSayName(){
        return this.name;
    }
    getSayGender(){
        return this.gender;
    }
    getSayWeight(){
        return this.weight;
    }
    
    getEat(){
        this.weight += 1;
        return this.weight;
        
    }
}