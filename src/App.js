import { MissionUtils } from "@woowacourse/mission-utils";
import {
  CONTINUE_ERROR_MESSAGES,
  CONTINUE_OPTIONS,
  INFO,
  INPUT_ERROR_MESSAGES,
} from "./constant";

class App {
  #computer_number = []; // 컴퓨터가 생성한 값 - Array<int>
  user_answer = ""; // 사용자가 입력한 정답
  is_continue = true; // 게임 진행 여부
  strikes = 0; // 현재 진행중인 게임의 스트라이크 수
  balls = 0; // 현재 진행중인 게임의 볼 수

  async play() {
    // * 1. 시작 문구 출력
    MissionUtils.Console.print(INFO.START_COMMENT);

    // * 2. 컴퓨터가 랜덤한 숫자를 설정
    this.#setRandomNumber();

    while (this.is_continue) {
      // * 3. 사용자 입력
      MissionUtils.Console.print(INFO.USER_INPUT_COMMENT);
      this.user_answer = await MissionUtils.Console.readLineAsync();

      // * 3-1. 사용자 입력 값 검증
      this.#verifyUserAnswerNumber();

      // * 4. 스트라이크 / 볼 판단
      this.#setStrikes();
      this.#setBalls();

      // * 5. 결과 판별 및 문구 출력
      this.#printResult();

      // * 6. 게임이 종료된 경우 처리
      if (this.strikes === 3) {
        MissionUtils.Console.print(INFO.IS_CONTINUE_COMMENT);
        // * 7. 사용자 입력
        let user_continue_input = await MissionUtils.Console.readLineAsync();

        // * 7-1. 사용자 입력 값 검증
        this.#verifyUserContinue(user_continue_input);

        this.is_continue = user_continue_input === CONTINUE_OPTIONS.START;
        // 게임을 새로 시작하는 경우, 랜덤 숫자를 재설정
        if (this.is_continue) {
          this.#setRandomNumber();
        }
      }
    }
  }

  /**
   * 정답 숫자를 뽑아서 computer_number 프로퍼티에 setting하는 메서드
   */
  #setRandomNumber() {
    // ? 컴퓨터가 뽑은 각 자릿수 배열 (len == 3)
    this.#computer_number = [];
    while (this.#computer_number.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#computer_number.includes(NUMBER)) {
        this.#computer_number.push(NUMBER);
      }
    }
  }

  /**
   * 사용자가 입력한 값을 통해 스트라이크가 몇 번인지 계산하여 반환한다.
   * @returns {int} strikes
   */
  #setStrikes() {
    let strikes = 0;
    // 컴퓨터가 설정한 값의 각 자릿수 값와 위치(index)가 모두 일치하는지 확인
    this.#computer_number.forEach((num, index) => {
      if (num == this.user_answer.charAt(index)) strikes++;
    });
    this.strikes = strikes;
  }

  /**
   * 사용자가 입력한 값을 통해 볼이 몇 번인지 계산하여 반환한다.
   * @returns {int} balls
   */
  #setBalls() {
    let balls = 0;

    this.#computer_number.forEach((num, index) => {
      // 순서는 일치하지 않지만 숫자가 존재하는 경우
      if (
        index !== this.user_answer.indexOf(`${num}`) &&
        this.user_answer.includes(`${num}`)
      )
        balls++;
    });

    this.balls = balls;
  }

  /**
   * 사용자가 입력한 값이 조건에 맞는 값인지 검증한다.
   *
   * 만약 조건에 맞지 않는 값이라면 오류를 발생시키고 프로그램을 종료한다.
   */
  #verifyUserAnswerNumber() {
    if (isNaN(this.user_answer)) {
      throw new Error(INPUT_ERROR_MESSAGES.IS_NAN);
    }

    if (this.user_answer.length !== 3) {
      throw new Error(INPUT_ERROR_MESSAGES.WRONG_LENGTH);
    }

    // ? 서로 다른 세 자리 숫자로 구성되어 있는지 확인
    let num_set = new Set();

    for (let i = 0; i < this.user_answer.length; ++i) {
      if (num_set.has(this.user_answer[i]))
        throw new Error(INPUT_ERROR_MESSAGES.IS_DUPLICATE);
    }
  }

  /**
   * 사용자가 입력한 값이 CONTINUE_TYPES 에 포함된 값인지 검증한다.
   * 만약 검증에 실패한다면 오류를 발생시키고 프로그램을 종료한다.
   * @param {string} INPUT_STRING
   */
  #verifyUserContinue(INPUT_STRING) {
    if (
      !INPUT_STRING ||
      Object.values(CONTINUE_OPTIONS).indexOf(INPUT_STRING) < 0
    ) {
      throw new Error(CONTINUE_ERROR_MESSAGES.NOT_IN_OPTIONS);
    }
  }

  /**
   * 스트라이크, 볼 횟수에 따라 콘솔 결과를 출력하는 메서드
   */
  #printResult() {
    if (this.strikes === 0 && this.balls === 0) {
      MissionUtils.Console.print("낫싱");
      return;
    }

    if (this.strikes === 3) {
      MissionUtils.Console.print(INFO.CORRECT_COMMENT);
      this.is_continue = false;
      return;
    }

    MissionUtils.Console.print(`${this.balls}볼 ${this.strikes}스트라이크\n`);
  }
}

export default App;
