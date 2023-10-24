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

  // 사용자 입력값 받기
  async getPlayerInput() {
    try {
      const playerInput = await Console.readLineAsync(
        MESSAGES.game.playerInput
      );

      this.validationPlayerInput(playerInput);
    } catch (error) {
      throw error;
    }
  }

  // 사용자 입력값 유효성 검사 (3자리의 숫자인지 확인)
  async validationPlayerInput(playerInput) {
    const rInput = /^(?!.*(.).*\1)[1-9]{3}$/;

    if (rInput.test(playerInput)) {
      const strikeBall = super.countStrikeBall(this.randomNumber, playerInput);

      this.printStrikeBall(strikeBall);
    } else {
      throw new Error(MESSAGES.errors.invalidNumber);
    }
  }
}

export default BaseballGame;
