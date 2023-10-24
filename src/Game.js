import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
class Game {
  constructor(computer) {
    this.computer = computer;
    this.isStart = 1;
    this.isSuccess = false;
  }

  async gameStart() {
    this.computer = new Computer();
    while (this.isSuccess == false) await this.getInput();
  }

  async getInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputController(input);
    return;
  }

  inputController(input) {
    if (input.length !== 3) throw new Error("[ERROR]game", input.value);
    if (!/^[1-9]{3}$/.test(input)) throw new Error("[ERROR]game");

    const newInput = input.split("").map(Number);
    const result = this.computer.resultGenerator(newInput);

    this.getOutput(result);
  }

  async getOutput(result) {
    if (result.strike == 3) {
      Console.print("3스트라이크");
      const endSelector = await Console.readLineAsync(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (endSelector != "1" && endSelector != "2")
        throw new Error("[ERROE]end");
      this.isStart = endSelector;
      this.isSuccess = true;
      return;
    } else {
      const printBall = result.ball ? `${result.ball}볼 ` : "";
      const printStrike = result.strike ? `${result.strike}스트라이크` : "";
      Console.print(
        result.strike + result.ball ? printBall + printStrike : "낫싱".trim()
      );
    }
  }
}

export default Game;
