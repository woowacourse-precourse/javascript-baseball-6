const { startGame } = require("./modules/startGame");
const { playGame } = require("./modules/playGame");

class App {
  async play() {
    startGame();
    playGame();
  }
}
export default App;
