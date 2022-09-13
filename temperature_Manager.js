let temperature = new Temperature(+prompt("Nhập nhiệt độ C"));
document.getElementById("temperature_F").innerHTML = "Chuyển đổi sang do F la: " + temperature.convertTemperature_F() ;
document.getElementById("temperature_Kevin").innerHTML = "Chuyển đổi sang do Kevin la: " + temperature.convertTemperature_Kevin();

