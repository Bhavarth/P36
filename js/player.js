class Player{
    constructor(){

    }
    getCount(){
        var ref1 = database.ref('playerCount')
        ref1.on("value",function(data){
            playerCount = data.val();
        })
         }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
            })
        }
        update(name1){
            var playerIndex = "player" + playerCount;
            database.ref(playerIndex).set({
                name: name1
            })
        }
}