import { GameController } from "./GameController";
import { User } from "./User";

class App {
  constructor() {
    this.gameController = new GameController();
    this.user = new User();
  }
  async play() {}
}

export default App;
