//Engine/World/Bodies--Matter .js
//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engineV,worldV;
var groundV,box1,box2;


function setup() {
  createCanvas(400,400);
  //craetes the physics engine
  engineV = Engine.create();
  //Adding the engine to the world
  worldV = engineV.world;
  
  groundV=new ground(200,390,400,20);

box1=new boxClass(200,300,50,50);
box2=new boxClass(240,100,50,100);

}

function draw() {
  background("red"); 
  //Update the engine for every Draw call
  Engine.update(engineV);
   
 box1.display();
 box2.display();
 groundV.display();

 
}