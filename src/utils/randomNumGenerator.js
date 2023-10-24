import { Random } from "@woowacourse/mission-utils";

/**
 *
 * @param {number} start
 * @param {number} end
 * @param {number} count
 * @returns number[]
 * @description 랜덤숫자 배열을 만들어주는 함수
 */
const randomNumGenerator = (start, end, count) => {
  const computer = [];
  while (computer.length < count) {
    const randomNum = Random.pickNumberInRange(start, end);
    if (!computer.includes(randomNum)) {
      computer.push(randomNum);
    }
  }
  return computer;
};

export default randomNumGenerator;
