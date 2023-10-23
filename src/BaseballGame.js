import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";

class BaseballGame {
  constructor() {
    this.computer = new Computer();
  }

  async startGame() {
    await this.getGameNumberInput();
  }

  async getGameNumberInput() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    await this.judgeGameNumber(input);
  }

  async getRestartNumberInput() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    return input;
  }

  async judgeGameNumber(input) {
    if (!this.computer.checkInputValid(input)) {
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }
    const hint = this.computer.createHint(input);
    Console.print(hint);

    if (hint === '3스트라이크') {
      await this.restart();
      return;
    }
    await this.getGameNumberInput();
  }

  async restart() {
    const input = await this.getRestartNumberInput();
    if (input !== '1' && input !== '2') {
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }

    switch (input) {
      case '1':
        this.computer.initAnswer();
        await this.getGameNumberInput();
        break;
      case '2':
        break;
    }
  }
}

export default BaseballGame;