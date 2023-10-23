import { Console } from "@woowacourse/mission-utils";

class Game {
  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.getInput();
  }

  async getInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputValidator(input);
  }

  inputController = (input) => {
    if (input.length !== 3)
      throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.");
    if (!/^[1-9]{3}$/.test(input))
      throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.");
    this.getInput();
  };
}

export default Game;
