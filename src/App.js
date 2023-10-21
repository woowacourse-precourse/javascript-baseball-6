import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async play() {
    let replay = true;
    const baseBallGame = new BaseBallGame();
    while (replay) {
      baseBallGame.reset();
      await baseBallGame.begin();
    }
  }
}

class BaseBallGame {
  constructor() {
    this.answer = "";
    this.reset();
  }

  /**
   * 게임을 초기화한다.
   * 랜덤한 세 자리 숫자를 새로 생성한다.
   */
  reset() {
    this.answer = "";
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer += number;
      }
    }
  }

  async begin() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let userAnswer = "";
    while (userAnswer !== this.answer) {
      userAnswer = await this.getUserGuessInput();
      MissionUtils.Console.print(userAnswer);
    }
    MissionUtils.Console.print("성공");
  }


  /**
   * 유저로부터 문자열을 입력받고 입력 조건 검증을 거친 후 반환한다.
   * @returns {String}
   */
  async getUserGuessInput() {
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (this.validateUserGuessInput(userInput)) {
      return userInput;
    }
  }

  /**
   * 유저가 입력한 값이 입력 조건에 맞는지 확인한다.
   * @param {string} userInput - 사용자부터 입력받은 값. 1~9로 이루어진 서로 다른 세 자리의 숫자 문자열이어야 합니다.
   * @throws {Error} 입력값이 유효하지 않을 때 예외를 발생시킵니다
   * @returns {boolean} 입력값이 유효할 경우 true를 반환합니다.
   */
  validateUserGuessInput(userInput) {
    if (!(/^[1-9]{3}$/).test(userInput)) {
      throw new Error("[ERROR] 입력값은 1~9의 세 자리 숫자여야 합니다.");
    }
    if (new Set(userInput).size !== 3) {
      throw new Error("[ERROR] 입력값은 서로 다른 숫자로 이루어진 세 자리 숫자여야 합니다.");
    }
    return true;
  }
}

export default App;