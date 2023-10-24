import * as MissionUtils from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {
  #computer;

  async play() {
    Console.log(print("게임을 시작합니다."));
    this.setComputer;

    return this.computerAnswer();
  }

  async setComputer() {
    const NUMBERS = [];
    while (NUMBERS.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!NUMBERS.includes(num)) {
        NUMBERS.push(num);
      }
    }

    this.#computer = NUMBERS;

    return;
  }
}

export default App;
