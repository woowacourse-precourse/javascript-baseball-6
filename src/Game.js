import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";

class Game {
  constructor(computer = new Computer()) {
    this.computer = computer;
  }

  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.print(this.computer.answer);
    this.getInput();
  }

  async getInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputController(input);
  }

  inputController(input) {
    if (input.length !== 3)
      throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.");
    if (!/^[1-9]{3}$/.test(input))
      throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.");

    const newInput = input.split("").map(Number);
    const result = this.computer.resultGenerator(newInput);

    this.getOutput(result);
  }

  getOutput(result) {
    //test
    if (result.strike == 3) return;

    const printBall = result.ball ? `${result.ball}볼 ` : "";
    const printStrike = result.strike ? `${result.strike}스트라이크` : "";
    Console.print(printBall + printStrike);
    this.getInput();
  }
}

export default Game;
