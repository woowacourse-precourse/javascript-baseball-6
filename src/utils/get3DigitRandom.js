import { MissionUtils } from '@woowacourse/mission-utils';

// 컴퓨터 랜덤 숫자 생성
export const get3DigitRandom = () => {
  const computer = new Set();
  while (computer.size < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    computer.add(number);
  }
  return Array.from(computer);
};
