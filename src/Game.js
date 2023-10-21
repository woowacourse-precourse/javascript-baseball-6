import { Console } from "@woowacourse/mission-utils";
import Human from "./Human.js";
import Computer from "./Computer.js";
import Hint from "./Hint.js";

export default class Game {
  isAllStrike;
  constructor() {
    this.isAllStrike = false;
  }

  askRetry = async () => {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (answer !== "1" && answer !== "2") {
      throw new Error("[ERROR] 1 또는 2만 입력할 수 있습니다.");
    }
    answer === "1" && this.gameInit();
  };

  getHumanBallNumbers = async () => {
    try {
      const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
      return answer;
    } catch (error) {
      throw new Error("[ERROR] 다시 입력해주세요.");
    }
  };

  gameInit = async () => {
    this.isAllStrike = false;
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = new Computer();
    const human = new Human();
    const compureBalls = computer.throwBalls(computer.ballNumbers);
    // console.log(compureBalls);

    while (this.isAllStrike === false) {
      const dd = await this.getHumanBallNumbers();
      const humanBalls = human.throwBalls(dd);
      this.isAllStrike = new Hint().getHint(compureBalls, humanBalls);
      if (this.isAllStrike)
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    await this.askRetry();
  };
}
