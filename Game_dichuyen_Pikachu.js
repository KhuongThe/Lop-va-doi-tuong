/**
 * Created by nhatnk on 4/26/17.
 */
let XDistance = 80;
let YDistance = 80;

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return (
      '<img width="' +
      this.size +
      '"' +
      ' height="' +
      this.size +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  };

  this.moveRightLeft = function () {
    this.left += YDistance;
    console.log('ok: ' + this.left);
  }
  this.moveBottomTop = function () {
    this.top += XDistance;
    console.log('ok: ' + this.top);
  }
}

var hero = new Hero("./pikachu.png", 80, 80, 250);

function start() {
    if (hero.left <= window.innerWidth - hero.size && hero.left > 48) {
      hero.moveRightLeft();
    }
    else if(hero.top <= window.innerHeight - hero.size && hero.top > 48){
      hero.moveBottomTop();
    }
    else if (hero.left > window.innerWidth - hero.size) {
      YDistance = -YDistance;
      hero.moveRightLeft();
    }
    else if(hero.top > window.innerHeight - hero.size){
      XDistance = -XDistance;
      hero.moveBottomTop();
    }
    document.getElementById("game").innerHTML = hero.getHeroElement();
    
  }
  setInterval(start,250);

