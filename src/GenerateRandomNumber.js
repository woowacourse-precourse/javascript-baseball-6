import { Random } from "@woowacourse/mission-utils";

class GenerateRandomNumber {
  async generateRandomNumber(min, max) {
    let randomArr = [];
    let number = 0;
    while (randomArr.length < 3) {
      number = Random.pickNumberInRange(min, max);
      if (!randomArr.includes(number)) {
        randomArr.push(number);
      }
    }
    return randomArr;
  }
}

export default GenerateRandomNumber;
