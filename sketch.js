var bg, sleep, brush, gym, eat, bath, move;
var astronaut;







function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","imges/bath2.png","images/bath2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");


}





function setup() {
  createCanvas(600, 500);
   
  

  astronaut = createSprite(300, 230);
  astronuat.addAnimation("sleeping" , sleep);
  astronaut.scale = 0.1;

  
}

function draw(){
  background(bg);
  drawSprites();
  
 textSize(20);
 fill("white")
 text("Instructions:", 20, 35)

 textSize(15);
 text("UP ARROW = Brushing");
 text("DOWN ARROW = Gymming", 20, 70);
 text("LEFT ARROW = Eating", 20, 85);
 text("RIGHT ARROW = Bathing", 20, 100);
 text("m ARROW = Moving", 20, 115);

 edges = createEdgesSprites();
 astronaut.bounceOff(edges);


if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}



if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bath");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 20;
  astronaut.velocityY = -10
  
}

}