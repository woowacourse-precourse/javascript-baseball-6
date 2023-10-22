import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";

class BaseballGame {
  constructor() {
    this.computer = new Computer();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.startGame();
  }

  async startGame() {
    await this.getUserInput();
  }

  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      await this.duringGameInput(input);
  }

  async getRestartInput() {
    const input = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    return input;
  }

  async duringGameInput(input) {
    if (!this.computer.checkInputValid(input)) {
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }
    const hint = this.computer.setHint(input);
    MissionUtils.Console.print(hint);

    if (hint === '3스트라이크') {
      await this.restart();
      return;
    }
    await this.getUserInput();
  }

  async restart() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const input = await this.getRestartInput();
    if (input !== '1' && input !== '2') {
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }

    switch (input) {
      case '1':
        this.computer.initialAnswer();
        await this.getUserInput();
        break;
      case '2':
        break;
    }
  }
}

export default BaseballGame;