import { MissionUtils, Console } from "@woowacourse/mission-utils";

const INPUT_MAX_LENGTH = 3;

class App {
  async play() {
    // (1) 사용자에게 게임을 시작한다는 메시지를 표시한다.
    Console.print("숫자 야구 게임을 시작합니다.");

    let restart = false;

    while (!restart) {
      // (2) 컴퓨터가 1에서 9까지 서로 다른 임의의 숫자 3개를 선택한다. 

      const computerNumbers = this.generateComputerNumbers();
      while (true) {

        // (3) 사용자의 서로 다른 3자리의 숫자를 입력받는다.
        const userInput = await Console.readLineAsync("입력해주세요 : ");

        // (4) 입력값에 대한 유효성을 체크한다.
        this.isValid(userInput, !restart);

        // (5) 입력 값에 대한 결과를 계산한다.
        const result = this.calculateResult(userInput, computerNumbers);

        // (6) 결과를 사용자에게 표시한다 (스트라이크, 볼, 낫싱 등).
        Console.print(result);

        // (7) 만약 3스트라이크가 나온다면, "3개의 숫자를 모두 맞히셨습니다! 게임 종료" 메시지를 표시하고 게임을 종료한다.
        if (result == "3스트라이크") {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      }

      // (8) 게임 종료 후 "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요" 메시지를 표시하고 사용자로부터 재시작 또는 종료 여부를 입력받는다.
      if (!restart) {
        const restartInput = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");

        // (9) 입력값에 대한 유효성을 체크한다.
        this.isValid(restartInput, restart);

        // (10) 사용자 입력에 따라 게임을 다시 시작하거나 완전히 종료한다.
        restart = restartInput == "2"; // 입력값이 2이면 종료
      }
    }
  }

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