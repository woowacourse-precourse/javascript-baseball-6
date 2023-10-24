import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
  // 3개 숫자 선택
  pickRandNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  // 입력이 숫자인지 확인
  checkUserInputNumber(input) {
    const numInput = parseInt(input, 10);
    if (isNaN(numInput)) {
      return false;
    }
    return true;
  }
  // 입력된 숫자가 3자리인지 확인
  checkUserInputLength(input) {
    if (input.length !== 3) {
      return false;
    }
    return true;
  }
  // 입력된 숫자가 중복안되는지 확인
  checkUserInputDup(input) {
    const inputSet = new Set(input);
    if (inputSet.size !== input.length) {
      return false;
    }
    return true;
  }
}

const app = new App();
app.play();
export default App;
