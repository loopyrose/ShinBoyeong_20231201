let walls=[];

let x,y;
let speed=5;
let playerS=60;
let hitboxS=50;

function setup() {
  createCanvas(2816,1536);

  x = width / 2;
  y = height /2 + 145;

  //벽 값 추가
  //외
  addWall(0,0,380,720);
  addWall(380,500,190,220);
  addWall(380,0,2140,90);
  addWall(2440,0,1096,730);
  addWall(2240,500,200,230);
  addWall(0,810,420,730);
  addWall(420,810,160,200);
  addWall(420,1450,2100,90);
  addWall(2390,810,500,800);
  addWall(2240,810,150,200);
  addWall(1370,90,80,180);
  //내1
  addWall(455,165,170,110);
  addWall(725,165,570,110);
  addWall(1520,165,570,110);
  addWall(2190,165,170,110);
  //내2
  addWall(455,365,170,60);
  addWall(690,365,280,60);
  addWall(690,425,70,150);
  addWall(1070,365,70,360);
  addWall(855,520,430,60);
  addWall(1220,365,370,60);
  addWall(1370,365,80,220);
  addWall(1680,365,70,360);
  addWall(1520,520,430,60);
  addWall(1840,365,280,60);
  addWall(2060,425,60,150);
  addWall(2200,365,170,60);
  //내3
  addWall(750,660,225,205);
  addWall(1220,660,370,200);
  addWall(1840,660,225,205);
  addWall(1070,810,70,200);
  addWall(1680,810,70,200);
  addWall(670,950,300,60);
  addWall(1220,950,370,60);
  addWall(1840,950,300,60);
  addWall(1390,1010,50,130);
  //내4
  addWall(515,1090,60,175);
  addWall(670,1090,160,50);
  addWall(920,1090,380,50);
  addWall(1520,1090,380,50);
  addWall(1980,1090,170,50);
  addWall(2240,1090,60,175);
  addWall(670,1140,100,230);
  addWall(2050,1140,100,230);
  addWall(835,1210,140,60);
  addWall(1070,1210,70,160);
  addWall(1220,1210,370,40);
  addWall(1390,1210,50,160);
  addWall(1680,1210,70,160);
  addWall(1840,1210,140,60);
  addWall(515, 1320,780,50);
}

function draw() {
  background(0,0,100);
  //시스템

  //배경&UI
  drawMap();

  //조작
  drawPlayer();
  movePlayer();
}

function addWall(wx,wy,ww,wh) {
  walls.push({
    x : wx,
    y : wy,
    w : ww,
    h : wh
  }) ;
}

function drawMap() {
  fill(0);
  noStroke();

  for(let wall of walls) {
    rect(
      wall.x,
      wall.y,
      wall.w,
      wall.h
    );
  }
  //외곽선 그리기
  noFill();
  stroke(100,200,230);
  strokeWeight(12);
  //외벽
  beginShape();
    vertex(0,720);
    vertex(580,720);
    vertex(580,500);
    vertex(380,500);
    vertex(380,90);
    vertex(1370,90);
    vertex(1370,270);
    vertex(1450,270);
    vertex(1450,90);
    vertex(2440,90);
    vertex(2440,500);
    vertex(2240,500);
    vertex(2240,720);
    vertex(2816,720);
  endShape();
  line(0,700,580,700);
  beginShape();
    vertex(580,520);
    vertex(360,520);
    vertex(360,70);
    vertex(2460,70);
    vertex(2460,520);
    vertex(2240,520);
  endShape();
  line(2240,700,2816,700);

  beginShape();
  vertex(0,810);
  vertex(580,810);
  vertex(580,1010);
  vertex(420,1010);
  vertex(420,1450);
  vertex(2390,1450);
  vertex(2390,1010);
  vertex(2240,1010);
  vertex(2240,810);
  vertex(2816,810);
  endShape();
  line(0,830,580,830);
  beginShape();
  vertex(580,990);
  vertex(400,990);
  vertex(400,1470);
  vertex(2410,1470);
  vertex(2410,990);
  vertex(2240,990);
  endShape();
  line(2240,830,2816,830);

  //내부
  rect(455,165,170,110);
  rect(725,165,570,110);
  rect(1520,165,580,110);
  rect(2190,165,170,110);
  rect(455,365,170,60);
  rect(2200,365,170,60);
  rect(750,660,225,205);
  line(925,660,925,865);
  rect(1220,660,370,200);
  rect(1840,660,225,205);
  line(1890,660,1890,865);
  rect(1070,810,70,200);
  rect(1680,810,70,200);
  rect(670,950,300,60);
  rect(1840,950,300,60);
  rect(515,1090,60,175);
  rect(920,1090,380,50);
  rect(1520,1090,380,50);
  rect(2240,1090,60,175);
  rect(835,1210,140,60);
  rect(1840,1210,140,60);

  beginShape();
    vertex(690,365);
    vertex(970,365);
    vertex(970,425);
    vertex(760,425);
    vertex(760,575);
    vertex(690,575);
    vertex(690,365);
  endShape();

  beginShape();
    vertex(1070,365);
    vertex(1140,365);
    vertex(1140,520);
    vertex(1285,520);
    vertex(1285,580);
    vertex(1140,580);
    vertex(1140,725);
    vertex(1070,725);
    vertex(1070,580);
    vertex(855,580);
    vertex(855,520);
    vertex(1070,520);
    vertex(1070,365);
  endShape();

  beginShape();
    vertex(1220,365);
    vertex(1590,365);
    vertex(1590,425);
    vertex(1450,425);
    vertex(1450,585);
    vertex(1370,585);
    vertex(1370,425);
    vertex(1220,425);
    vertex(1220,365);
  endShape();

  beginShape();
    vertex(1680,365);
    vertex(1750,365);
    vertex(1750,520);
    vertex(1950,520);
    vertex(1950,580);
    vertex(1750,580);
    vertex(1750,725);
    vertex(1680,725);
    vertex(1680,580);
    vertex(1520,580);
    vertex(1520,520);
    vertex(1680,520);
    vertex(1680,365);
  endShape();

  beginShape();
    vertex(1840,365);
    vertex(2120,365);
    vertex(2120,575);
    vertex(2060,575);
    vertex(2060,425);
    vertex(1840,425);
    vertex(1840,365);
  endShape();

  beginShape();
    vertex(1220,950);
    vertex(1590,950);
    vertex(1590,1010);
    vertex(1440,1010);
    vertex(1440,1140);
    vertex(1390,1140);
    vertex(1390,1010);
    vertex(1220,1010);
    vertex(1220,950);
  endShape();

  beginShape();
    vertex(670,1090);
    vertex(830,1090);
    vertex(830,1140);
    vertex(770,1140);
    vertex(770,1320);
    vertex(1070,1320);
    vertex(1070,1210);
    vertex(1140,1210);
    vertex(1295,1320);
    vertex(1295,1370);
    vertex(515,1370);
    vertex(515,1320);
    vertex(670,1320);
    vertex(670,1090);
  endShape();

  beginShape();
    vertex(1220,1210);
    vertex(1590,1210);
    vertex(1590,1250);
    vertex(1440,1250);
    vertex(1440,1370);
    vertex(1390,1370);
    vertex(1390,1250);
    vertex(1220,1250);
    vertex(1220,1210);
  endShape();

  beginShape();
    vertex(1980,1090);
    vertex(2150,1090);
    vertex(2150,1320);
    vertex(2300,1320);
    vertex(2300,1370);
    vertex(1520,1370);
    vertex(1520,1320);
    vertex(1680,1320);
    vertex(1680,1210);
    vertex(1750,1210);
    vertex(1750,1320);
    vertex(2050,1320);
    vertex(2050,1140);
    vertex(1980,1140);
    vertex(1980,1090);
  endShape();
}

function drawPlayer() {
  fill(255,255,0);
  noStroke();
  ellipse(x, y, playerS);

  fill(0,0,255,20);
  rect(x,y,hitboxS);
}

function hitCheck(nx,ny) {
  let r = hitboxS/2
  for(let wall of walls) {
    if(
      nx+r > wall.x &&
      nx-r < wall.x+wall.w &&
      ny+r > wall.y &&
      ny-r < wall.y+wall.h
    ){
      return true;
    }
  }
  return false;
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

  //충돌검사
  if(!hitCheck(x+dx,y)){
    
  }

  //화면 연결
  if (x>=2816) {
    x=1;
  }
  if (x<=0) {
    x=2815;
  }
}