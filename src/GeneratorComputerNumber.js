import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MAX_LENGTH } from "./static";

  /**
   * 컴퓨터 수 random generate 함수
   * 1 ~ 9까지 number 3개를 랜덤으로 생성한다.
   * @returns {number[]}
   */
  export const generateComputerNumbers = () => {
    const numbers = [];
    while (numbers.length < INPUT_MAX_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }