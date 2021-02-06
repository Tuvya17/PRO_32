const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0
function preload(){
  
    polygonimage = loadImage("polygon.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    var canvas = createCanvas(1200,400);
    
    ground = new Ground(600,380,1200,20);
    platform1 = new Ground(400, 260, 300, 10);
    platform2 = new Ground(1000, 260, 300, 10);

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    box9 = new Box(390,155,30,40);
    
    box11 = new Box(930,235,30,40);
    box12 = new Box(960,235,30,40);
    box13 = new Box(990,235,30,40);
    box14 = new Box(1020,235,30,40);
    box15 = new Box(1050,235,30,40);
    box16 = new Box(960,195,30,40);
    box17 = new Box(990,195,30,40);
    box18 = new Box(1020,195,30,40);
    box19 = new Box(990,155,30,40);
    
    ball = Bodies.circle(50,200,20)
    World.add(world, ball);

    slingshot = new SlingShot(this.ball,{x:100,y:200})

    
    
    
    
}

function draw(){
    background("black")
    textSize(40);
    fill("white")
    text("SCORE: "+score,750,40);
    
    
    fill("white")
    ground.display();
    fill("brown")
    platform1.display();
    platform2.display();
    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    fill("lightgreen");
    box6.display();
    box7.display();
    box8.display();
    fill("yellow");
    box9.display();
    fill("pink");
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    fill("lightpurple");
    box16.display();
    box17.display();
    box18.display();
    fill("yellow");
    box19.display();
    imageMode(CENTER);
    image(polygonimage,ball.position.x,ball.position.y,40,40);
    slingshot.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
}


function mouseDragged(){
    
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}



function mouseReleased(){

    slingshot.fly();
}


function keyPressed(){

    if(keyCode===32){
        slingshot.attach(this.ball);
    }
}




