import Player from "./Player.js";
class App {
  async play() {
    const player = new Player();
    await player.startGame();
  }
}

const app = new App();
app.play();
export default App;
