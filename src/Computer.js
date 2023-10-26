import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  //생성된 랜덤 숫자가 들어갈 변수
  computerNumber;

  constructor() {
    this.computerNumber = this.createComNumber();
  }

  get computerInput() {
    return this.computerNumber;
  }

  //모듈을 사용해 랜덤 숫자를 생성
  createComNumber = () => {
    const comNumber = [];
    while (comNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!comNumber.includes(randomNumber)) {
        comNumber.push(randomNumber);
      }
    }
    return comNumber;
  };
  
}

export default Computer;