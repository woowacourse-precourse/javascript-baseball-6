import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";

class Game {
  constructor() {
    this.computer;
  }

  gameStart() {
    this.computer = new Computer();
    //!Test
    //Console.print(this.computer.answer);
    this.getInput();
  }

  async getInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputController(input);
  }

  /**
   *
   * @param {string} input
   */
  inputController(input) {
    if (input.length !== 3) throw Error("[ERROR]");
    if (!/^[1-9]{3}$/.test(input)) throw Error("[ERROR]");

    const newInput = input.split("").map(Number);
    const result = this.computer.resultGenerator(newInput);

    this.getOutput(result);
  }

  getOutput(result) {
    if (result.strike == 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.gameSelector();
    }

    const printBall = result.ball ? `${result.ball}볼 ` : "";
    const printStrike = result.strike ? `${result.strike}스트라이크` : "";
    Console.print(
      result.strike + result.ball ? printBall + printStrike : "낫싱".trim()
    );

    this.getInput();
  }
  async gameSelector() {
    const isStart = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (isStart == 2) return;
    if (isStart == 1) this.gameStart();
  }
}

export default Game;
