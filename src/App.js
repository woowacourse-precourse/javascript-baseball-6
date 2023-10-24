import Game from "./Class/Game"

class App {
  async play() {
    const game = new Game()
    game.welcomeMsg()
    
    while(true){
        game.playGame()
    }
  }
}

export default App;
