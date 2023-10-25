import { MissionUtils } from "@woowacourse/mission-utils";

const randomNumber = () => {
    let computer = [];
    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
};

export default randomNumber;