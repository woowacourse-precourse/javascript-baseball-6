import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import Referee from "./Refree.js";
import Player from "./Player.js";

const retryAnswer = Object.freeze({
  1: "1",
  2: "2",
});

export default class Game {
  #isGameFinished;
  constructor() {
    this.#isGameFinished = false;
  }

  start = async (isRetry = false) => {
    !isRetry && this.#printGameStartMessage();
    await this.#playGame();
  };

  #playGame = async () => {
    const [computer, refree, player] = this.#initializeGame();
    const computerBalls = computer.throwBalls(computer.ballNumbers);

    while (!this.#isGameFinished) {
      const playerBallsInput = await this.#promptPlayerBalls();
      const playerBalls = player.throwBalls(playerBallsInput);
      const result = refree.compareBalls(computerBalls, playerBalls);
      this.#processResult(result);
    }
    this.#promptRetry();
  };

  #initializeGame = () => {
    this.#isGameFinished = false;
    return [new Computer(), new Referee(), new Player()];
  };

  #promptRetry = async () => {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (answer !== retryAnswer[1] && answer !== retryAnswer[2]) {
      throw new Error("[ERROR] 1 또는 2만 입력할 수 있습니다.");
    }
    answer === retryAnswer[1] && this.start(true);
  };

  #promptPlayerBalls = async () => {
    try {
      const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
      return answer;
    } catch (error) {
      throw new Error("[ERROR] 다시 입력해주세요.");
    }
  };

  #processResult = (result) => {
    Console.print(result);
    if (result.includes("3스트라이크")) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.#isGameFinished = true;
    }
  };

  #printGameStartMessage = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  };
}
