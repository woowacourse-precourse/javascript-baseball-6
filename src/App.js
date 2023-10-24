import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  
  constructor() {
    this.numbers = [];
  }

  /**
   * 1-9의 서로 다른 3자리 수 배열 반환한다.
   * @returns {Number[]} 서로 다른 3자리 숫자 배열
   */
  getRandomNumbers() {
    const numbers = new Set();
    
    while (numbers.size < 3) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    
    return [...numbers];
  }

  /**
   * 플레이어가 컴퓨터가 생성한 숫자를 맞출 떄까지 3자리 숫자를 입력받는다.
   */
  async inputNumbers() {
    const numericRegex = /^[0-9]+$/;

    while(1) {
      const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      
      if (input.length !== 3){ // 3자 이내의 숫자를 입력한 경우 오류 발생
        throw new Error("[ERROR] 세 자리의 숫자를 입력해야 합니다.");
      }
      if (!numericRegex.test(input)){ // 문자가 포함된 경우 오류 발생
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if (this.compareNumbers(input)){
        break;
      }
    }
  }

  /**
   * 플레이어 입력한 숫자를 컴퓨터가 생성한 숫자와 비교하여 힌트를 출력하고 게임 종료 여부를 반환합니다.
   * @param {string} inputNumbers 플레이어가 3자리 입력한 숫자
   * @returns {boolean} 게임 종료 여부
   */
  compareNumbers(inputNumbers) {
    const numbers = inputNumbers.split("");
    let strike = 0;
    let ball = 0;

    if (new Set(numbers).size !== 3){ // 중복된 숫자가 있는 경우
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }

    numbers.map((n, index) => {
      const number = parseInt(n);

      if (this.numbers.includes(number)) {
        if (this.numbers[index] === number) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    })

    if (strike === 3) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return true;
    }

    if (strike === 0) {
      if (ball === 0) {
        MissionUtils.Console.print("낫싱");
      } else {
        MissionUtils.Console.print(`${ball}볼`);
      }
    } else {
      if (ball === 0) {
        MissionUtils.Console.print(`${strike}스트라이크`);
      } else {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    }

    return false;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while(1) {
      this.numbers = this.getRandomNumbers(); // 랜덤 숫사 배열 생성
      
      await this.inputNumbers(); // 플레이어 숫자 입력
      
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

      if (input !== "1" && input !== "2") { // 1과 2외의 숫자나 문자르 입력한 경우 오류 발생
        throw new Error("[ERROR] 잘못된 입력값입니다.");
      }

      if (input === "2") { // 게임 종료
        break;
      }
    }
  }
}

export default App;
