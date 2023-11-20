import { Console, MissionUtils } from "@woowacourse/mission-utils";
import BaseballController from "./controller/BaseballController.js";

class App {
  #controller;
  constructor() {
    this.#controller = new BaseballController();
  }
  async play() {
    try {
      await this.#controller.gameStart();
    } catch (error) {
      console.log(error.message);
    }
  }
}
export default App;
