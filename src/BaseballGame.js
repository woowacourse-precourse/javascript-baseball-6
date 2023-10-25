import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";
import Computer from "./Computer.js";

const { Console } = MissionUtils;

class BaseballGame extends Computer {
  #isPlaying;
  #isSuccess;
  #randomNumber;

  constructor() {
    super();
    this.#isPlaying;
    this.#isSuccess;
    this.#randomNumber;
  }

  // 게임 초기 세팅
  async init() {
    this.#isPlaying = false;
    Console.print(MESSAGES.game.start);
    this.start();
  }

  // 게임 시작
  async start() {
    this.#isPlaying = true;
    this.#isSuccess = false;
    this.#randomNumber = super.createRandomNumber();
    await this.getPlayerInput();
    await this.restart();
  }

  // 사용자 입력값 받기
  async getPlayerInput() {
    while (!this.#isSuccess) {
      try {
        const playerInput = await Console.readLineAsync(
          MESSAGES.game.playerInput
        );

        this.validationPlayerInput(playerInput);

        const strikeBall = super.countStrikeBall(
          this.#randomNumber,
          playerInput
        );

        const result = this.printStrikeBall(strikeBall);

        Console.print(result);

        // 3스트라이크로 정답 맞추었을 때
        if (result === MESSAGES.result.success) {
          Console.print(MESSAGES.game.success);
          this.#isSuccess = true;
        }
      } catch (error) {
        this.#isPlaying = false;
        throw error;
      }
    }
  }

  // 사용자 입력값 유효성 검사 (3자리의 숫자인지 확인)
  validationPlayerInput(playerInput) {
    const rInput = /^(?!.*(.).*\1)[1-9]{3}$/;

    if (!rInput.test(playerInput)) {
      this.#isPlaying = false;
      throw new Error(MESSAGES.errors.invalidNumber);
    } else return;
  }

  // 사용자 입력값과 정답(randomNumber) 비교
  printStrikeBall(strikeBall) {
    const [strike, ball] = strikeBall;

    let result = "";

    if (strike === 0 && ball === 0) {
      result = MESSAGES.result.nothing;
    } else if (strike > 0 && ball === 0) {
      result = `${strike}${MESSAGES.result.strike}`;
    } else if (strike === 0 && ball > 0) {
      result = `${ball}${MESSAGES.result.ball}`;
    } else if (strike > 0 && ball > 0) {
      result = `${ball}${MESSAGES.result.ball} ${strike}${MESSAGES.result.strike}`;
    }

    return result;
  }

  // 게임 재시작
  async restart() {
    try {
      const playerInput = await Console.readLineAsync(
        MESSAGES.game.restartOrDone
      );

      const choice = parseInt(playerInput, 10);

      switch (choice) {
        case 1:
          this.start();
          break;
        case 2:
          this.done();
          break;
        default:
          throw new Error(MESSAGES.errors.invalidChoice);
      }
    } catch (error) {
      throw error;
    }
  }

  // 게임 종료
  async done() {
    Console.print(MESSAGES.game.done);
  }
}

export default BaseballGame;
