import { Random, Console } from "@woowacourse/mission-utils";

/**
 * 야구 게임 앱
 */
class App {
  #target_length = 0;
  #target = [];

  /**
   * target_length : 숫자 야구게임 번호 길이 (기본값 : 3)
   * @param {number} target_length
   */
  constructor(target_length = 3) {
    this.target_length = target_length;
    this.initializeTargetNumber();
  }

  /**
   * 정답 숫자 초기화
   */
  initializeTargetNumber() {
    let targetNumbers = [];

    while (targetNumbers.length < this.target_length) {
      const candidate = Random.pickNumberInRange(1, 9);
      if (!targetNumbers.includes(candidate)) {
        targetNumbers.push(candidate);
      }
    }
    this.target = targetNumbers;
    // 개발 버전 : 정답 공개 용
    Console.print(targetNumbers);
  }

  /**
   * 사용자 입력 값이 유효한지 체크
   * @param {string} input_numbers
   * @returns {boolean}
   */
  verifyUserInput(input_numbers) {
    const isUniqString = (numbers) => {
      const origin_length = numbers.length;
      const setNums = new Set(numbers);
      const set_length = [...setNums].length;
      return origin_length === set_length ? true : false;
    };

    const isLengthCorrect = (numbers) => {
      return !numbers || numbers.length !== this.target_length ? false : true;
    };

    const isNumberString = (numbers) => {
      for (let i = 0; i < numbers.length; i++) {
        const NUM_TO_ASCII = numbers.charCodeAt(i);
        if (NUM_TO_ASCII > 48 && 57 < NUM_TO_ASCII) {
          return false;
        }
      }
      return true;
    };

    if (
      isLengthCorrect(input_numbers) &&
      isUniqString(input_numbers) &&
      isNumberString(input_numbers)
    ) {
      return true;
    }

    return false;
  }

  /**
   * 사용자 입력값을 체크하여 결과를 출력
   * @param {string} input_numbers
   */
  checkUserInput(input_numbers) {
    const answer = input_numbers.split("").map(Number);
    let [strike, ball] = [0, 0];
    for (let i = 0; i < this.target.length; i++) {
      if (this.target[i] === answer[i]) {
        strike++;
        continue;
      }
      if (this.target.includes(answer[i])) {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike) {
      Console.print(`${strike}스트라이크`);
    } else if (ball) {
      Console.print(`${ball}볼`);
    }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.\n");

    while (true) {
      const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");

      if (answer === "") continue;
      if (!this.verifyUserInput(answer)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      this.checkUserInput(answer);

      if (answer === this.target.join("")) {
        Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        const retry = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (retry === "") continue;
        if (retry === "1") {
          this.initializeTargetNumber();
        } else if (retry === "2") {
          return;
        } else {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    }
  }
}
export default App;
