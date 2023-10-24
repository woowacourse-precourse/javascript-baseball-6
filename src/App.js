import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.computer = [];
    this.player = [];
  }

  /**
   * 1-9의 서로 다른 3자리 수 배열을 생성한다.
   */
  getRandomNumbers() {
    const numbers = new Set();

    while (numbers.size < 3) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    this.computer = [...numbers];
  }

  /**
   * 플레이어가 숫자를 맞출 떄까지 숫자를 입력받고 비교한다.
   */
  async guessNumber() {
    while (true) {
      await this.inputNumbers();

      if (this.compareNumbers()) {
        break;
      }
    }

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  /**
   * 플레이어에게 3자리 숫자를 입력받는다.
   */
  async inputNumbers() {
    const numericRegex = /^[0-9]+$/;

    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const numbers = input.split("");

    if (input.length !== 3) { // 3자 이내의 숫자를 입력한 경우 오류 발생
      throw new Error("[ERROR] 세 자리의 숫자를 입력해야 합니다.");
    }
    if (!numericRegex.test(input)) { // 문자가 포함된 경우 오류 발생
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (new Set(numbers).size !== 3) { // 중복된 숫자가 있는 경우
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }

    this.player = numbers.map(n => parseInt(n));
  }

  /**
   * 플레이어 입력한 숫자를 컴퓨터가 생성한 숫자와 비교하여 게임 종료 여부를 반환합니다.
   * @returns {boolean} 게임 종료 여부
   */
  compareNumbers() {
    let strike = 0;
    let ball = 0;

    this.player.forEach((n, index) => {
      if (this.computer.includes(n)) {
        if (this.computer[index] === n) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    })

    this.printHint(strike, ball);

    if (strike === 3) {
      return true;
    }

    return false;
  }

  /**
   * 비교 결과 힌트를 출력합니다.
   * @param {Number} strike 
   * @param {Number} ball 
   */
  printHint(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print(`${strike}스트라이크`);
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
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      this.getRandomNumbers(); // 랜덤 숫사 배열 생성

      await this.guessNumber(); // 숫자 맞추기

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
