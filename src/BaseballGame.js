import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";
import Computer from "./Computer.js";

const { Console } = MissionUtils;

class BaseballGame extends Computer {
  constructor() {
    super();
    this.randomNumber;
  }

  // 게임 초기 세팅
  async init() {
    Console.print(MESSAGES.game.start);
    this.start();
  }

  // 게임 시작
  async start() {
    this.randomNumber = super.createRandomNumber();
    await this.getPlayerInput();
  }
}

export default BaseballGame;
