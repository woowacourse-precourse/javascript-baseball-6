import { MissionUtils } from "@woowacourse/mission-utils";

const THREE_STRIKES = "3스트라이크";
const NOTHINGS = "낫싱";
const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const GAME_OVER_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const USER_INPUT_PROMPT = "숫자를 입력해주세요 : ";
const RESTART_PROMPT = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";

class App {
  constructor() {
    this.computerNumbers = [];
    this.resetComputerNumbers();
  }

  resetComputerNumbers() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  async play() {
    MissionUtils.Console.print(GAME_START_MESSAGE);

    while (true) {
      try {
        const userNumbers = await this.getUserInput();

        if (userNumbers.length !== 3) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        const result = this.compareNumbers(userNumbers);

        MissionUtils.Console.print(result);

        if (result === THREE_STRIKES) {
          MissionUtils.Console.print(GAME_OVER_MESSAGE);
          const continuePlaying = await this.askForRestart();
          if (continuePlaying === "2") {
            break;
          } else if (continuePlaying === "1") {
            this.resetComputerNumbers();
            MissionUtils.Console.print(GAME_START_MESSAGE);
          }
        }
      } catch (error) {
        MissionUtils.Console.print(error.message);
        throw new Error("[ERROR]");
      }
    }
  }
}

export default App;
