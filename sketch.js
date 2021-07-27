var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  bl=loadImage("blue_balloon0.png")
  gr=loadImage("green_balloon0.png")  
  pn=loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  score=0 
  
  bb= new Group()
  rb= new Group()
  gb= new Group()
  pb= new Group()
  arrowg=new Group()
   
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

   if(World.frameCount%100===0){
    score+=1
}
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if(select_balloon==2){
    blueBalloon()
  }
  if(select_balloon==3){
    greenBalloon()
  }
  else{
   pinkBalloon()
  }
  }
 
  

 
 
 
  
  if(arrowg.isTouching(bb)){
    bb.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  
  if(arrowg.isTouching(rb)){
    rb.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  
  if(arrowg.isTouching(pb)){
    pb.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  
  if(arrowg.isTouching(gb)){
    gb.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  drawSprites();
  textSize(20)
  text ("Score"+score,270,30)
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowg.add(arrow)
  arrow.debug=true
  arrow.setCollider("rectangle",0,0,60,40)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  rb.add(red)

}

function blueBalloon() {
    //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20,370)))
  blue.addImage(bl)
  blue.lifetime=150
  blue.scale=0.1
  blue.velocityX=3
  bb.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20,370)))
  green.addImage(gr)
  green.lifetime=150
  green.scale=0.1
  green.velocityX=3
  gb.add(green)
}


function pinkBalloon() {
  //write code for spwaning pink balloons
 pink = createSprite(0,Math.round(random(20,300)))
  pink.addImage(pn)
  pink.lifetime=150
  pink.scale=1.3
  pink.velocityX=3
  pb.add(pink)
}
