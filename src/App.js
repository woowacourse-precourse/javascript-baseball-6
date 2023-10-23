import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getComNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  validationInput(userNumbers) {
    MissionUtils.Console.print("userNumbers");
    MissionUtils.Console.print(userNumbers);
    if (
      userNumbers.includes(NaN) ||
      userNumbers.includes(0) ||
      userNumbers.length !== 3 ||
      [...new Set(userNumbers)].length !== 3
    ) {
      throw new Error("[ERROR]");
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let userNumberstr = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    let userNumbers = [...userNumberstr].map(Number);
    this.validationInput(userNumbers);

    let comNumbers = this.getComNumbers();
    MissionUtils.Console.print("comNumbers");
    MissionUtils.Console.print(comNumbers);
  }
}

export default App;
