import { MissionUtils } from '@woowacourse/mission-utils';

// 컴퓨터 랜덤 숫자 생성
export const get3DigitRandom = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};
