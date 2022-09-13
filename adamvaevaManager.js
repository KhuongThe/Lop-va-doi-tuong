apple = new Apple();
human1 = new Human("Adam","Nam",60);
human2 = new Human("Eva","Nữ",50);

function checkWeightApple(){
    let weightApple = apple.weight;
    document.getElementById("apple").innerHTML = "Quả táo có trọng lượng là: " + weightApple;
}
function checkHuman(){
    document.getElementById("human").innerHTML = "Tôi tên là: " + human1.getSayName() + "<br>" + "Cân nặng: " + human1.getSayWeight() + "<br>" + "Giới tính: " + human1.getSayGender();

}
let i=0;
function humanEatApple(){
    i ++;
    document.getElementById("eatapple").innerHTML = "Số lần ăn táo: " + i;
    if(apple.weight > 0){
        human1.getEat()
        apple.weight --;
    }
    
}