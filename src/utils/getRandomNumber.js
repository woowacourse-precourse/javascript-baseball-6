import { MissionUtils } from "@woowacourse/mission-utils";

// 컴퓨터가 랜덤한 세 자리 숫자를 생성
export const getRandomNumber = () => {
  const computer = [];

   while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (computer.includes(number) === false) {
      computer.push(number);
    }
  }
  return computer;
}