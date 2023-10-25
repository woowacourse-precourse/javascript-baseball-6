import { MissionUtils } from "@woowacourse/mission-utils";

const generateComputerNumbers = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join(""); // 숫자로 된 문자열로 반환
};

export default generateComputerNumbers;
