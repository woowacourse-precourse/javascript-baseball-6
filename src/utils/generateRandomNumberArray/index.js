import { Random } from "@woowacourse/mission-utils";

/** 1부터 9까지의 숫자로 이루어진 랜덤한 숫자 배열을 리턴하는 함수 */
export const generateRandomNumberArray = ({ length }) => {
  const randomNumberArray = [];
  while (randomNumberArray.length < length) {
    const number = Random.pickNumberInRange(1, 9);
    if (!randomNumberArray.includes(number)) {
      randomNumberArray.push(number);
    }
  }

  return randomNumberArray;
};
