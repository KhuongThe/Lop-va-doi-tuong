class Rectangle {
  height;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getWidth(){
    return this.width;
  }
  setWidth(newWidth){
    this.width = newWidth;
  }
  getHeight(){
    return this.height;
  }
  setHeight(newHeight){
    this.height = newHeight;
  }
  getAreaRectangle() {
    let area = this.getWidth() * this.getHeight();
    return area;
  }
  getPerimeterRectangle() {
    let perimeter = 2 * (this.getWidth() + this.getHeight());
    return perimeter;
  }
  drawRectangle() {
    
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(150, 150, this.getWidth(), this.getHeight());
  }
}
