import { MissionUtils } from "@woowacourse/mission-utils"

const createRandomNumber = () => {
  let computerNumber = []
  while (computerNumber.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number))
      computerNumber.push(number);
  }
  return computerNumber;
}

export default createRandomNumber;
