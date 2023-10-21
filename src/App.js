import { Console } from "@woowacourse/mission-utils";
import { GameController } from "./GameController.js";
import { User } from "./User.js";

class App {
  constructor() {
    this.gameController = new GameController();
    this.user = new User();
  }
  async play() {
    this.user.inputAnswer();
  }
}
const app = new App();
app.play();
export default App;
