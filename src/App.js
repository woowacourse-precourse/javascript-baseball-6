import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.attempts = 0;
    this.isGameOver = false;

    this.generateComputerNumbers();
  }
}

export default App;
