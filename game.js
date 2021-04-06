class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }

      P1 = createSprite(displayWidth/20,displayHeight/2-50,30,300);
      P1.shapeColor = ("red");
      P2 = createSprite(displayWidth-90,displayHeight/2-50,30,300);
      P2.shapeColor = ("green");
      P3 = createSprite(displayWidth/2,displayHeight/20,300,30);
      P3.shapeColor = ("yellow");
      P4 = createSprite(displayWidth/2,displayHeight-100,300,30);
      P4.shapeColor = ("aqua");
      Paddles = [P1,P2,P3,P4];
      ball=createSprite(displayWidth/2,displayHeight/2,25,25);
       ball.addImage(ballimg); ball.scale = 0.1;
      ball.x=displayWidth/2;
      // ball.y=displayHeigth/2;
      ball.velocityY = 5;
      ball.velocityX = 5;  
    


     /* car1 = createSprite(100,200);
      car1.addImage("car1",car1_img);
      car2 = createSprite(300,200);
      car2.addImage("car2",car2_img);
      car3 = createSprite(500,200);
      car3.addImage("car3",car3_img);
      car4 = createSprite(700,200);
      car4.addImage("car4",car4_img);
      cars = [car1, car2, car3, car4];*/
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
     // player.getCarsAtEnd();
      if(allPlayers !== undefined){
       background(0);
       // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
       // var x = 175 ;
        //var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
         // x = x + 200;
          //use data form the database to display the cars in y direction
          //y = displayHeight - allPlayers[plr].distance;
          /*cars[index-1].x = x;
          cars[index-1].y = y;*/
         // console.log(index, player.index)
   
      

         
 /*ball.bounceOff(P1);
 ball.bounceOff(P2);
 ball.bounceOff(P3);
 ball.bounceOff(P4);*/
if (plr==="player"+player.index){
  if(player.index===1){
    Paddles[index-1].y=World.mouseY;
  }
  else if(player.index === 2){
    Paddles[index-1].y=World.mouseY;
  }
  else if(player.index === 3){
    Paddles[index-1].x=World.mouseX;
  }
  else if(player.index === 4){
    Paddles[index-1].x=World.mouseX;
   
  }

 /*if(P4.y-ball.y<P4.height/2+ball.height/2
  &&ball.y-P4.y<ball.height/2+P4.height/2){
   ball.velocityY  = (-1)*ball.velocityY;
 }*/
 
 

  
}
ball.depth = P1.depth;
ball.depth = P2.depth;
ball.depth = P3.depth;
ball.depth = P4.depth;




   /* if(keyDown("SPACE")){
      ball.velocityY = Math.round(random(-10,10));
      ball.velocityX = Math.round(random(-10,10));
    }*/

   
          // if (index === player.index ){
          //   Paddles[index-2].y = World.mouseY;
          //   Paddles[index-1].x = World.mouseX;
         /*   if(player.index===2){ 
               Paddles[index-1].position.y = World.mouseY;}*/

 
//  Paddles[index-3].position.y = World.mouseX;
  




            //  Paddles[index-1].position.y = World.mouseY;
            //  Paddles[index-2].position.y = World.mouseY;
           // Paddles[index-1].
           /* stroke(10);
            fill("red");
            ellipse(x,y,60,60);*/

            /*cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;*/
          // }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
    /*  if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
     }
  
      if(player.distance > 4300){
        gameState = 2;
        player.rank = player.rank +1;
        Player.updateCarsAtEnd(player.rank);
      }*/
      ball.bounceOff(P1);
      ball.bounceOff(P2);
       ball.bounceOff(P3);
        ball.bounceOff(P4);
     ball.bounceOff(edges);
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      console.log(player.rank);
    }
  }
  