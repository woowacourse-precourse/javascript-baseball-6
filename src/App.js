import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getRandomNumber() {
    let computerNum = [];
    let tempNum = 0;
    while (computerNum.length < 3) {
      tempNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(tempNum)) {
        computerNum.push(tempNum);
      }
    }
    return computerNum;
  }

  async getUserNum() {
    let userNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    userNum.split("").forEach((num, index) => {
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자를 입력해 주세요.");
      }

      if (num < 1 || num > 9) {
        throw new Error("[ERROR] 1 ~ 9 사이의 숫자를 입력해 주세요.");
      }

      if (userNum.includes(num) && userNum.indexOf(num) !== index) {
        throw new Error("[ERROR] 중복이 아닌 숫자를 입력해 주세요.");
      }

      if (userNum.length !== 3) {
        throw new Error("[ERROR] 3자리 숫자를 입력해 주세요.");
      }
    });
  }


  async play() {}
}

export default App;
