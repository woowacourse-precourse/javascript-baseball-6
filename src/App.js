import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
  }
  async getUserNumber() {
    try {
      const number = await MissionUtils.Console.readLineAsync(
        "숫자를 입력하세요: "
      );

      if (isNaN(number)) return "[ERROR] 숫자가 잘못된 형식입니다.";
      if (number.length !== 3) return "[ERROR] 3자리 숫자를 입력해주세요.";
      if ([...new Set(number)].length !== 3)
        return "[ERROR] 중복된 숫자가 있습니다.";

      return number;
    } catch (error) {}
  }
}

export default App;
