import { MissionUtils, Console } from "@woowacourse/mission-utils";

const INPUT_MAX_LENGTH = 3;

class App {
  async play() {}

  /**
   * 컴퓨터 수 random generate 함수
   * 1 ~ 9까지 number 3개를 랜덤으로 생성한다.
   * @returns {number[]}
   */
  generateComputerNumbers = () => {
    const numbers = [];
    while (numbers.length < INPUT_MAX_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

}

export default App;