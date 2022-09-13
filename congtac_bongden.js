class ElectricLamp{
    constructor(){
        this.status = Boolean;
    }
    turnOn(){
        this.status = true;
        alert("Đèn sáng");
    }
    turnOff(){
        this.status = false;
        alert("Đèn tắt");
    }
}
class SwitchButton{
    constructor(electriclamp){
        this.status = Boolean;
        this.lamp = electriclamp;
    }
}