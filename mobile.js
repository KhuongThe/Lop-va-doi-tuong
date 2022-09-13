class Mobile{
    battery;
    draft;
    inbox;
    sent;
    constructor(){
        this.battery = 10;
        this.draft = "";
        this.inbox = [];
        this.sent = [];
    }
    statusMobile(){
       return this.battery;
    }
    turnOnOff(){
        if(this.battery > 0){
            this.battery = 0;
            return this.battery;
        }
        else{
           this.battery = 10;
           return this.battery;
        }
    }
    chargeBattery(){
        this.battery = 10;
    }
    writeMessage(messager){
        this.draft = messager;
        this.battery --;
    }
    sentMessage(mobile){
        let draft = this.draft;
        mobile.inbox.push(draft);
        this.sent.push(draft);
        this.draft ="";
        this.battery--;
        mobile.battery--;
    }
}