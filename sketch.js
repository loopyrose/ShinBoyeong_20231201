let map;
let x,y;
let speed=5;

function preload() {
  map=loadImage("Map.png"); //2816*1536
}

function setup() {
  createCanvas(2816,1536);

  x = width / 2;
  y = height /2;
}

function draw() {
  image(map,0,0);
}

function movePlayer() {
  let dx=0;
  let dy=0;
  
  //키보드 조작
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
    y -= speed;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    y += speed;
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }

  //화면 연결
  if (x>=2816) {
    x=1;
  }
  if (x<=0) {
    x=2815;
  }
}