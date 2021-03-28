var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisions, plinkos, particles;
var particle;
var count = 0
var divisionHeight=300;
var score =0;
var gameState = "PLAY"
//var gameState = "end";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
  fill("white")
  textSize(30)
  text("Score : "+score,400,450);
  textSize(20)
  text("500:", 20, 620);
  textSize(20)
  text("450:", 100, 620);
  textSize(20)
  text("400:", 180, 620);
  textSize(20)
  text("350:", 260, 620);
  textSize(20)
  text("0:", 350, 620);
  textSize(20)
  text("350:", 420, 620);
  textSize(20)
  text("400:", 500, 620);
  textSize(20)
  text("450:", 580, 620);
  textSize(20)
  text("500:", 660, 620);
  textSize(20)
  text("550:", 740, 620);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score = score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gameState !== "START")
  {
    particle = new Particle(mouseX, 10, 10, 10);
  }
  if(gameState === "END")
  {
    
  }

  if(count>=5)
  {
    gameState = "END"
  }
}



