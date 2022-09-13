let rectangle1 = new Rectangle(450, 300);
let dientich = rectangle1.getAreaRectangle();
let chuvi = rectangle1.getPerimeterRectangle();
document.getElementById("dientich").innerHTML = "dien tich la " + dientich;
document.getElementById("chuvi").innerHTML = "chuvi la " + chuvi;

rectangle1.setWidth(50);
dientich = rectangle1.getAreaRectangle();
chuvi = rectangle1.getPerimeterRectangle();
document.getElementById("dientich").innerHTML = "dien tich la " + dientich;
document.getElementById("chuvi").innerHTML = "chuvi la " + chuvi;
rectangle1.drawRectangle();