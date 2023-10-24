import { Random } from "@woowacourse/mission-utils";

class ComputerNumber {
  constructor() {
    this.computerNumber = this.createRandomNumber();
  }

  // 맞추어야 하는 3자리 랜덤 숫자 생성
  createRandomNumber() {
    const randomComputerNumber = [];
    while (randomComputerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomComputerNumber.includes(number)) {
        randomComputerNumber.push(number);
      }
    }
    return randomComputerNumber;
  }
}

export default ComputerNumber;
