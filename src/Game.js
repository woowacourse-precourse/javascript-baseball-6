import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import Referee from "./Refree.js";
import Player from "./Player.js";

const retryAnswer = Object.freeze({
  1: "1",
  2: "2",
});

export default class Game {
  isAllStrike;

  constructor() {
    this.isAllStrike = false;
  }

  askRetry = async () => {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (answer !== retryAnswer[1] && answer !== retryAnswer[2]) {
      throw new Error("[ERROR] 1 또는 2만 입력할 수 있습니다.");
    }
    answer === retryAnswer[1] && this.initGame(true);
  };

  getPlayerBallNumbers = async () => {
    try {
      const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
      return answer;
    } catch (error) {
      throw new Error("[ERROR] 다시 입력해주세요.");
    }
  };

  resetGame = () => {
    this.isAllStrike = false;
    const computer = new Computer();
    const refree = new Referee();
    const player = new Player();
    return [computer, refree, player];
  };

  initGame = async (isRetry = false) => {
    !isRetry && Console.print("숫자 야구 게임을 시작합니다.");
    const [computer, refree, player] = this.resetGame();

    const computerBalls = computer.throwBalls(computer.ballNumbers);

    while (this.isAllStrike === false) {
      const playerBallNumbers = await this.getPlayerBallNumbers();
      const playerBalls = player.throwBalls(playerBallNumbers);
      console.log("playerBalls : ", playerBalls);

      refree.getHint(computerBalls, playerBalls);
      if (refree.isThreeStrikes()) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.isAllStrike = true;
      }
    }
    this.askRetry();
  };
}
