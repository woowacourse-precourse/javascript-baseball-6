import  Game  from "./game.model";

class App {
  async play() {
    const game = new Game();
    while (game.GAMEMODE == 1) {
      game.computerNumberSet();
      game.userNumberSet();
      game.numberCompare();
      game.result();
      game.end();
      game.restart();
    }
    
    


  }
}

export default App;
