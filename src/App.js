import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.isContinue = true;
    this.computerInput = this.randomNumberGenerator();
  }

  randomNumberGenerator() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  validateInput(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error("[ERROR] 숫자 형식이 잘못되었습니다.");
    } else if (userInput.length !== 3) {
      throw new Error("[ERROR] 숫자 길이가 잘못되었습니다.");
    } else if (userInput.includes(0)) {
      throw new Error("[ERROR] 0을 포함하고 있습니다.");
    } else {
      return true;
    }
  }

  calcStrike(userInput, computerInput) {
    return userInput.filter((el, i) => computerInput[i] === el).length;
  }

  async play() {}
}

export default App;
