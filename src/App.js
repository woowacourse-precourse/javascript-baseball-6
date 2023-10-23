import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #CONTINUE_TYPES = ["1", "2"];
  #computer_number = []; // 컴퓨터가 생성한 값 - Array<int>
  user_answer = ""; // 사용자가 입력한 정답
  is_continue = true; // 게임 진행 여부
  strikes = 0; // 현재 진행중인 게임의 스트라이크 수
  balls = 0; // 현재 진행중인 게임의 볼 수

  async play() {
    // * 1. 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");

    // * 2. 컴퓨터가 랜덤한 숫자를 설정
    this.#setRandomNumber();

    while (this.is_continue) {
      // * 3. 사용자 입력
      MissionUtils.Console.print("숫자를 입력해주세요 : ");
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
        MissionUtils.Console.print(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        // * 7. 사용자 입력
        let user_continue_input = await MissionUtils.Console.readLineAsync();

        // * 7-1. 사용자 입력 값 검증
        this.#verifyUserContinue(user_continue_input);

        this.is_continue = user_continue_input === "1";
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
    try {
      if (isNaN(this.user_answer) || this.user_answer.length !== 3) {
        throw new Error("숫자가 잘못된 형식입니다.");
      }

      // ? 서로 다른 세 자리 숫자로 구성되어 있는지 확인
      let num_count = new Array(10); // 0 ~ 9 까지의 숫자가 몇 번 등장했는지
      num_count.fill(0);

      const NUM_ARRAY = this.user_answer.split(""); // 숫자 문자열을 배열 형태로 변환

      // ? 각 자릿수에 대해서 서로 중복되는지 확인한다.
      NUM_ARRAY.forEach((num) => {
        if (num_count[parseInt(num)] > 0) {
          throw new Error("중복되는 숫자가 존재합니다.");
        }
        num_count[parseInt(num)]++;
      });
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  /**
   * 사용자가 입력한 값이 CONTINUE_TYPES 에 포함된 값인지 검증한다.
   * 만약 검증에 실패한다면 오류를 발생시키고 프로그램을 종료한다.
   * @param {string} inputString
   */
  #verifyUserContinue(inputString) {
    try {
      if (!inputString || this.#CONTINUE_TYPES.indexOf(inputString) < 0) {
        throw new Error("1 혹은 2만 입력할 수 있습니다.");
      }
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
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
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n"
      );
      this.is_continue = false;
      return;
    }

    MissionUtils.Console.print(`${this.balls}볼 ${this.strikes}스트라이크\n`);
  }
}

export default App;
