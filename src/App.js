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
  
  /**
   * 사용자 입력값과 컴퓨터 값을 계산하여 결과를 반환하는 함수
   * @param {string} userInput 
   * @param {number[]} computerNumbers 
   * @returns {string}
   */
  calculateResult = (userInput, computerNumbers) => {
    let strikes = 0;
    let balls = 0;

    const userInputList = userInput.split("").map(e => parseInt(e));

    userInputList.forEach((userNum, i) => {
      if (userNum == computerNumbers[i]) {
        strikes++;
        return;
      }
      if (computerNumbers.includes(userNum)) {
        balls++;
        return;
      }
    })

    return this.getResultFromScore(strikes, balls)
  }


}

export default App;