import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    return this.getRandomNum();
  }

  async getRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return this.getUserNum();
  }

  async getUserNum() {
    const user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    await this.validCheckUserNum(user);
  }

  async validCheckUserNum(userNum) {
    if (!this.isCheckLength(userNum)) {
      throw new Error("[ERROR] 숫자의 길이는 3이어야합니다.");
    } else if (!this.isCheckDigit(userNum)) {
      throw new Error("[ERROR] 1~9사이의 숫자만 입력해야합니다.");
    } else if (!this.isCheckDuplicate(userNum)) {
      throw new Error("[ERROR] 중복되지 않은 숫자여야합니다.");
    }
  }

  isCheckLength(userNum) {
    return userNum.length === 3;
  }

  isCheckDigit(userNum) {
    return /^[1-9]+$/.test(userNum);
  }

  isCheckDuplicate(userNum) {
    return new Set(userNum).size === 3;
  }
}

export default App;