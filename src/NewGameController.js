import GameConsole from "./GameConsole.js";

class NewGameController {
  constructor(app) {
    this.app = app;
  }

  async startOrExitGame() {
    const userInput = await GameConsole.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
    );

    if (userInput === "1") {
      await this.app.play();
    } else if (userInput === "2") {
      return false;
    } else {
      throw new Error("[ERROR] 1, 2중에서 입력해주세요.");
    }
  }
}

export default NewGameController;
