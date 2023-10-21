import { Console } from "@woowacourse/mission-utils";
import Human from "./Human";
import Computer from "./Computer";

export default class Game {
  isAllStrike;
  constructor() {
    this.isAllStrike = false;
  }

  askRetry = () => {
    const answer = Console.readLineAsycn("재시작할라면 1 아니면 2");
    if ((answer !== 1) | (answer !== 2)) {
      throw new Error("[ERROR] 1 또는 2만 입력할 수 있습니다.");
    }
    answer === 1 && this.gameInit();
  };

  getHumanBallNumbers = () => {
    const answer = Console.readLineAsycn("숫자를 입력해주세요 : ");
    return answer;
  };

  gameInit = () => {
    // this.isAllStrike = false;
    while (this.isAllStrike === false) {
      Console.print("숫자 야구 게임을 시작합니다.");
      const human = new Human();
      const computer = new Computer();
      computer.throwBall(computer.ballNumbers);
      human.throwBall(this.getHumanBallNumbers);
    }
    this.askRetry();
  };
}
