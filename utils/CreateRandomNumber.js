import { MissionUtils } from "@woowacourse/mission-utils"

const createRandomNumber = () => {
  let computerNumber = []
  while (computerNumber.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number))
      computerNumber.push(number);
  }
  MissionUtils.Console.print("컴퓨터의 숫자: ", computerNumber);
}

module.exports = createRandomNumber;