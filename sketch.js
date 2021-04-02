var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3"); 
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,330,30);
    block1.shapeColor = "blue";


    block2 = createSprite(275,580,200,30);
    block2.shapeColor = "orange";
 //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(485,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 5;
    ball.velocityY = 5;
   
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.pause();
    }
    if(ball.bounceOff(block1)){
        music.play();
     }


    
    if(block2.isTouching(ball)){
            ball.shapeColor = "orange";
            music.pause();
    }
    if(ball.bounceOff(block2)){
        music.play();
    }

    if(block3.isTouching(ball)){
      ball.shapeColor = "red";
         music.pause();
    }
    if(ball.bounceOff(block3)){
         music.play();
    }

    if(block4.isTouching(ball)){
            ball.shapeColor = "green";
            music.pause();
    if(ball.bounceOff(block4)){
          music.play();

        

        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
}

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4


    drawSprites();
}

function bounceOff(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2)
{
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
 }
 if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
{
     object1.velocityY = object1.velocityY * (-1);
     object2.velocityY = object2.velocityY * (-1);

}
}

function isTouching(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.width/2 + object1.width/2
    && object2.y - object1.y< object2.width/2 + object1.width/2)
    {
         return true;
    }else
    {
        return false;
    }
    }
      







    

