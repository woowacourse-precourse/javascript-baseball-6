import { MissionUtils } from "@woowacourse/mission-utils"

const INTRO_SENTENCE = "숫자 야구 게임을 시작합니다.\n";
const NUMBER_LENGTH = 3;

class App {
  constructor() {
    this.computer = [];
  }

  async play() {
    MissionUtils.Console.print(INTRO_SENTENCE);

    this.setComputer();
  }

  setComputer() {
    const numbers = [];

    while (numbers.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.computer = [...numbers];
  }
}

export default App;
