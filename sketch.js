let map;
let x,y;
let speed=5;
let playerS=60;

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
  //시스템

  //배경&UI

  //조작
  drawPlayer();
  movePlayer();
}

function drawMap(){
  fill(255,0,0,100);
  noStroke();
  rect(0,0,380,720);
  rect(380,500,190,220);
  rect(380,0,2140,90);
  rect(2440,);
}

function drawPlayer(){
  fill(255,255,0);
  noStroke();
  ellipse(x, y, playerS);
}

function movePlayer() {
  let dx=0;
  let dy=0;

  //키보드 조작
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
    dy -= speed;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    dy += speed;
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    dx -= speed;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    dx += speed;
  }

  //화면 연결
  if (x>=2816) {
    x=1;
  }
  if (x<=0) {
    x=2815;
  }
}