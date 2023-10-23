import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Game from "./Game.js";

class App {
  async play() {
    Console.print(Messages.MSG_START);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.startGame();
        if (result === typeof Error) {
          Console.print(result.message);
          reject(result);
        } else if (result === 2) {
          resolve();
        } else if (result === 1) {
          resolve(this.startGame());
        }
      } catch (e) {
        Console.print(e.message);
        reject(e);
    }
  });
  }

  async startGame() {
    return new Promise(async (resolve, reject) => {
      try {
        const game = new Game();
        const result = await game.round();
        if (!result) {
          reject(new Error(Messages.ERROR_INPUT));
        } else if (result) {
          const choosen = await game.menu();
          if (choosen === 2) {
            resolve(2);
          } else if (choosen === 0) {
            reject(new Error(Messages.ERROR_MENU));
          } else if (choosen === 1) {
            resolve(1);
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}

// const app = new App();
// app.play();

export default App;
