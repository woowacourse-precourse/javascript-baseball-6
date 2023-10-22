import { MissionUtils } from "@woowacourse/mission-utils";

const { Random } = MissionUtils;

class Computer {
  constructor() {
    this.randomNumber = this.createRandomNumber();
  }

  //* [x, y, z]
  // 1~9 사이 서로 다른 임의의 3자리 수 생성
  createRandomNumber() {
    const number = [];

    while (number.length < 3) {
      const randomNum = Random.pickNumberInRange(1, 9);

      if (!number.includes(randomNum)) {
        number.push(randomNum);
      }
    }

    return number;
  }
}

export default Computer;
