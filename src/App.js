import {PLAY_GAME} from "./GameManager.js";
class App {
  async play() {
    await PLAY_GAME();
  }
}

//실행
const app = new App();
app.play();
export default App;


