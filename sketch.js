let map;

function preload() {
  map=loadImage("Map.png"); //2816*1536
}

function setup() {
  createCanvas(2816,1536);
}

function draw() {
  image(map,0,0);
}
