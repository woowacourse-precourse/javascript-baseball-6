import { MissionUtils } from "@woowacourse/mission-utils";

export default function generateComputerNumber() {
  const NUMBER_LENGTH = 3;
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 9;
  const computer = [];

  while (computer.length < NUMBER_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(
      MIN_NUMBER,
      MAX_NUMBER
    );
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer.join("");
}
