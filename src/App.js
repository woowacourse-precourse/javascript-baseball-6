import { MainGame } from "./MainGame.js";
class App {
  async play() {
    const game = new MainGame();
    await game.start();
  }
}
const app = new App();
app.play();
export default App;
