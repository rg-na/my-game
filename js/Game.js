class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
    //console.log(gameState)
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  update(state){
    console.log("bob")
    database.ref("/").update({
    gameState:state  
    })
  
    }
}
