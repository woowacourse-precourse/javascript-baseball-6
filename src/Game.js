import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
class Game {
  constructor(computer, result) {
    this.computer = computer;
    this.isStart = 1;
    this.isSuccess = false;
    this.result = result;
  }

  async gameStart() {
    this.computer = new Computer();
    while (this.isSuccess == false) {
      await this.getInput();
      await this.getOutput(this.result);
    }
  }

  async getInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputController(input);
  }

  inputController(input) {
    if (input.length !== 3)
      throw new Error(
        "[ERROR]{1 - 9}의 중복되지 않는 3자리 숫자를 입력해주세요."
      );
    if (!/^[1-9]{3}$/.test(input))
      throw new Error(
        "[ERROR]{1 - 9}의 중복되지 않는 3자리 숫자를 입력해주세요."
      );
    if (new Set(input.split("")).size !== 3)
      throw new Error(
        "[ERROR]1 - 9의 중복되지 않는 3자리 숫자를 입력해주세요."
      );

    const newInput = input.split("").map(Number);
    const result = this.computer.resultGenerator(newInput);

    this.result = result;
  }

  async getOutput(result) {
    if (result.strike == 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      const endSelector = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (endSelector != "1" && endSelector != "2")
        throw new Error("[ERROE]1 또는 2를 입력해주세요.");
      else {
        this.isStart = endSelector;
        this.isSuccess = true;
        return;
      }
    }
    const printBall = result.ball ? `${result.ball}볼 ` : "";
    const printStrike = result.strike ? `${result.strike}스트라이크` : "";
    Console.print(
      result.strike + result.ball ? printBall + printStrike : "낫싱"
    );
  }
}

export default Game;
