import { Console, MissionUtils } from "@woowacourse/mission-utils"

const createRandomNum = () => {
  let comNum = []
  while (comNum.length < 3) {
    let num = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!comNum.includes(num))
      comNum.push(num);
  }
  Console.print("컴퓨터의 숫자: ", comNum);
}

module.exports = createRandomNum;