import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import Referee from "./Refree.js";
import Player from "./Player.js";
import { PromptMessage, errorMessage } from "./Message.js";

const retryAnswer = Object.freeze({
  1: "1",
  2: "2",
});

export default class Game {
  #isGameFinished;
  #THREE_STRIKE = "3스트라이크";

  constructor() {
    this.#isGameFinished = false;
    this.refree = new Referee();
  }

  start = async (isRetry = false) => {
    !isRetry && this.#printGameStartMessage();
    await this.#playGame();
  };

  #playGame = async () => {
    const [computer, player] = this.#initializeGame();
    const computerBalls = computer.throwBalls(computer.ballNumbers);

    while (!this.#isGameFinished) {
      const playerBallsInput = await this.#promptPlayerBalls();
      const playerBalls = player.throwBalls(playerBallsInput);
      const result = this.refree.compareBalls(computerBalls, playerBalls);
      this.#processResult(result);
    }
    this.#promptRetry();
  };

  #initializeGame = () => {
    this.#isGameFinished = false;
    return [new Computer(), new Player()];
  };

  #promptRetry = async () => {
    const answer = await Console.readLineAsync(PromptMessage.GAME_START_OR_END);
    if (answer !== retryAnswer[1] && answer !== retryAnswer[2]) {
      throw new Error(errorMessage.INVALID_INPUT);
    }
    answer === retryAnswer[1] && this.start(true);
  };

  #promptPlayerBalls = async () => {
    try {
      const answer = await Console.readLineAsync(PromptMessage.ENTER_NUMBERS);
      return answer;
    } catch (error) {
      throw new Error(errorMessage.RE_PROMPT);
    }
  };

  #processResult = (result) => {
    Console.print(result);
    if (result.includes(this.#THREE_STRIKE)) {
      Console.print(PromptMessage.GAME_END);
      this.#isGameFinished = true;
    }
  };

  #printGameStartMessage = () => {
    Console.print(PromptMessage.GAME_START);
  };
}
