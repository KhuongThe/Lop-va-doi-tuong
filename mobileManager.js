let mobile1 = new Mobile();
let mobile2 = new Mobile();

function pinleve(){
    let pinleve1 = mobile1.battery;
    let pinleve2 = mobile2.battery;
    document.getElementById("pinleve1").innerHTML = pinleve1;
    document.getElementById("pinleve2").innerHTML = pinleve2;
}
pinleve();

function checkStatus1(){
    let battery = mobile1.statusMobile();
    if(battery > 0){
        document.getElementById("mobileStatus1").innerHTML = "ON";
     }
     else{
        document.getElementById("mobileStatus1").innerHTML = "OFF";
     }
}

function checkStatus2(){
    let battery = mobile2.statusMobile();
    if(battery > 0){
        document.getElementById("mobileStatus2").innerHTML = "ON";
     }
     else{
        document.getElementById("mobileStatus2").innerHTML = "OFF";
     }
}



function showInbox(){
    let content1 ="";
    for (const iterator of mobile1.inbox) {
        content1 += "MOBILE2: " + iterator + "<br>";
    }
    document.getElementById("inbox1").innerHTML = content1;
    let content2 ="";
    for (const iterator of mobile2.inbox) {
        content2 += "MOBILE1: " + iterator + "<br>";
    }
    document.getElementById("inbox2").innerHTML = content2;
}

function showSent(){
    let content1 ="";
    for (const iterator of mobile1.sent) {
        content1 += "MOBILE1: " + iterator + "<br>";
    }
    document.getElementById("sent1").innerHTML = content1;
    let content2 ="";
    for (const iterator of mobile2.sent) {
        content2 += "MOBILE2: " + iterator + "<br>";
    }
    document.getElementById("sent2").innerHTML = content2;
}

function mobile1_Sent_mobile2(){
    mobile1.writeMessage(document.getElementById("input1").value);
    mobile1.sentMessage(mobile2);
    showInbox();
    showSent()
    pinleve();
    checkStatus1();
    checkStatus2();
}

function mobile2_Sent_mobile1(){
    mobile2.writeMessage(document.getElementById("input2").value);
    mobile2.sentMessage(mobile1);
    showInbox();
    showSent()
    pinleve();
    checkStatus2();
    checkStatus1();
}

function turnOnOffMobile1(){
    mobile1.turnOnOff();
    pinleve();
    checkStatus1();
}
function turnOnOffMobile2(){
    mobile2.turnOnOff();
    pinleve();
    checkStatus2();
}
function chargeMobile1(){
    mobile1.chargeBattery();
    pinleve();
    checkStatus1();
}
function chargeMobile2(){
    mobile2.chargeBattery();
    pinleve();
    checkStatus2();
}
