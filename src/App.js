import { MissionUtils, Console } from "@woowacourse/mission-utils";

const INPUT_MAX_LENGTH = 3;

class App {
  async play() { }

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

  /**
   * strike, balls로 result text를 반환하는 함수 
   * @param {number} strikes 
   * @param {number} balls 
   * @returns {string} ex. 1볼 1스트라이크 | 낫싱 | 3볼 ...
   */
  getResultFromScore = (strikes, balls) => {
    if (strikes == 0 && balls == 0) return "낫싱";

    const result = [];

    if (balls > 0) result.push(`${balls}볼`);

    if (strikes > 0) result.push(`${strikes}스트라이크`);

    return result.join(" ");
  }

  /**
   * 입력값의 유효성을 체크하는 함수
   * @param {'1' | '2'} input 
   * @param {boolean} restart 
   * @returns 
   */
  isValid = (input, restart) => {
    // 게임 중인 경우
    if (restart) {
      // input이 number가 아닌 경우
      if (isNaN(input)) {
        throw new Error("[ERROR] 입력값이 숫자가 아닙니다.");
      }
      // input이 3자리 수가 아닌 경우
      if (input.length !== 3) {
        throw new Error("[ERROR] 입력값이 3자리 숫자가 아닙니다.");
      }
      return;
    }
    // 게임 종료인 경우. input은 종료 여부 입력값이다.
    // '1', '2'가 아닌 경우
    if (!['1', '2'].includes(input)) {
      throw new Error("[ERROR] 올바른 입력이 아닙니다.")
    }
    return;
  }
}

export default App;