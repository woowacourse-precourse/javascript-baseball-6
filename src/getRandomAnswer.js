import { MissionUtils } from "@woowacourse/mission-utils";

export default function getRandomAnswer() {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(number)) {
      COMPUTER.push(number);
    }
  }

  //Question : 왜 아래 코드는 random = NaN이 나올까...
  // let answer = 0;

  // for (let i = 1; i <= 100; i * 10) {
  //   answer += MissionUtils.Random.pickNumberInRange(1, 9);
  //   MissionUtils.Console.print("random: " + answer);
  // }

  return COMPUTER;
}
