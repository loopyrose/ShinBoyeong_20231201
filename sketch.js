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

  //벽 값 추가
  //외
  rect(0,0,380,720);
  rect(380,500,190,220);
  rect(380,0,2140,90);
  rect(2440,0,1096,730);
  rect(2240,500,200,230);
  rect(0,810,420,730);
  rect(420,810,160,200);
  rect(420,1450,2100,90);
  rect(2390,810,500,800);
  rect(2240,810,150,200);
  rect(1370,90,80,180);

  //내1
  rect(455,165,170,110);
  rect(725,165,570,110);
  rect(1520,165,570,110);
  rect(2190,165,170,110);

  //내2
  rect();
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