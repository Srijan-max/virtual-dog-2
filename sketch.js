//Create variables here
var dog, happyDog, database, foodS, foodStock
var img1, img2;
var database;
var bgImg;
var score = 20;

function preload(){
  img1 = loadImage("dog1.png");
  img2 = loadImage("HappyDog.png");
  bgImg = loadImage("bg.jpg");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250, 350, 50, 50);
  dog.addImage(img1);
  dog.scale = 0.25;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function draw() { 
  background(bgImg); 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2);
    if(score>=1){
    score = score - 1
    }
    else{
      score = 0
    }
  }
  drawSprites();
  //add styles here
  textSize(16);
  stroke(0);
  fill(0);
  text("𝗣𝗿𝗲𝘀𝘀 𝗨𝗣 𝗔𝗥𝗥𝗢𝗪 𝗸𝗲𝘆 𝗳𝗼𝗿 𝗳𝗲𝗲𝗱𝗶𝗻𝗴 𝗧𝗼𝗺𝗺𝘆 𝗺𝗶𝗹𝗸.", 100, 50)
  text("𝓕𝓸𝓸𝓭 𝓢𝓽𝓸𝓬𝓴 𝓵𝓮𝓯𝓽: "+ score, 100, 100)
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function readStock(data){
  foodS=data.val();
}


