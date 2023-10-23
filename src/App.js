import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  comNumberCreate() {
    this.comNumberCreate = [];

    while (this.comNumberCreate.length <= 2) {
      //컴퓨터가 숫자 3개를 고름
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.comNumberCreate.inCludes(num)) {
        continue;
      } else {
        this.comNumberCreate.push(num);
      }
    }
  }

  inputValidation(userNumber) {
    userNumber = new set(userNumber);

    if (userNumber.size !== 3) {
      return false;
    }

    for (let number of userNumber) {
      number = parseInt(number, 10);

      if (isNaN(number)) {
        return false;
      } else if (number < 1 || 9) {
        return false;
      }
    }
    return true;
  }
}

export default App;
