import {Game} from './module.js'

const game = new Game();
class App {
  async play() {
    game.Start()
    try{
      game.SetRandomNumber();
    }
    catch(e){
      throw(e)
    }
    game.GetUserInput();
  }
}

const app = new App();
app.play();

export default App;
