import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame{
  constructor(){
    this.computer_num = '';
  }

  generateRandomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computer_num = computer;
  }

}

export default BaseballGame;