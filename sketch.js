var rocket,satellitesGroup,asteroidGroup;
var building;
var gameState="start";
var distance=0;

function setup() {
  createCanvas(400,800);
  rocket=createSprite(200,700,30,80);
  satellitesGroup=new Group();
  asteroidGroup=new Group();
  building=createSprite(200,700,100,200);
  building.shapeColor="white";
  
}
 
function draw() {
  background("navy"); 
  if(mousePressedOver(building)){
    gameState="playEarth";
    rocket.y=500;
    building.velocityY=5;
    building.lifetime=100;
  }
  if (gameState==="playEarth"){
    rocket.x=mouseX;
    distance=Math.round(frameCount/5);
  }
  console.log(distance);
if(distance>100){
  background("black");
}

  
  spawnSatellites();
  spawnAsteroids();
  drawSprites();
}


function spawnSatellites(){
  if(frameCount%84===0){
    var satellites=createSprite(100,0,10,10);
    satellites.shapeColor="Green";
    satellites.velocityY=5;
    satellites.x=random(10,390);
    satellites.lifetime=200;
  }
}
function spawnAsteroids(){
  if(frameCount%84===0){
    var asteroids =createSprite(100,0,10,10);
    asteroids.shapeColor="Brown";
    asteroids.velocityY=5;
    asteroids.x=random(10,390);
    asteroids.lifetime=200;
  }
}


