class Form{
    constructor(){

    }
        display(){
            var title = createElement('h2')
            title.html("Car Racing Game");
            title.position(130, 0);
            
            var input = createInput("Name");
            var button = createButton('Play');
            
            input.position(400, 160);
            button.position(450, 200);
        
            button.mousePressed(function(){
              input.hide();
              button.hide();
        
              var name = input.value();
              
              playerCount+=1;
              player.update(name)
              player.updateCount(playerCount);
              var greeting = createElement('h3');
              greeting.html("Hello " + name )
              greeting.position(500, 160)
            });
        
          
    }
}