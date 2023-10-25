import Player from "./Player.js";
class App {
  async play() {
    const player = new Player();
    await player.inputValue();
  }
}

const app = new App();
app.play();
export default App;
