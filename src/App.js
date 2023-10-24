import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  /**
   * 시작부터 게임 종료까지의 전체 게임 로직을 담당하는 함수입니다.
   */
  async play() {
    let isGameOver = true;

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (isGameOver) {
      const COM_NUMBER = this.createNumber();

      while (true) {
        try {
          if (await this.playRound(COM_NUMBER)) {
            isGameOver = await this.restartGameDecision();
            break;
          }
        } catch (error) {
          if (
            error.message ===
            '[ERROR] 문자가 포함된 입력입니다. 애플리케이션을 종료합니다.'
          ) {
            throw error;
          }
        }
      }
    }
  }

  /**
   * 한 라운드의 게임을 진행하고 결과를 반환하는 함수.
   */
  async playRound(COM_NUMBER) {
    const USER_NUMBER = await this.requestUserNumber();
    const { strikes, balls } = this.checkNumber(COM_NUMBER, USER_NUMBER);

    return this.determineGameResult(strikes, balls);
  }

  /**
   * 사용자에게 3자리 숫자를 입력 받는 함수. 
   * 입력 값은 서로 다른 숫자로 구성되어야 하며, 문자가 포함될 경우 오류를 발생시킨다.
   */
  async requestUserNumber() {
    return this.requestInput(
      '숫자를 입력해주세요 : ',
      (input) =>
        !isNaN(Number(input)) && input.length === 3 && new Set(input).size === 3
    );
  }

  /**
   * 스트라이크와 볼의 수를 기반으로 게임의 결과를 판단하고 출력하는 함수.
   * 3스트라이크일 경우 게임 종료 메시지를 출력하고 true를 반환한다.
   * 그 외의 경우, 현재의 스트라이크와 볼 수를 출력하고 false를 반환한다.
   */
  determineGameResult(strikes, balls) {
    if (strikes === 3) {
      MissionUtils.Console.print(
        '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
      );
      return true;
    }

    if (strikes === 0 && balls === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (strikes === 0 && balls > 0) {
      MissionUtils.Console.print(`${balls}볼`);
    } else if (strikes > 0 && balls === 0) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }

    return false;
  }

  /**
   * 사용자에게 게임을 재시작할 것인지 묻는 함수.
   * 사용자가 1을 입력하면 게임을 재시작하겠다는 의미로 true를 반환하고,
   * 2를 입력하면 게임을 종료하겠다는 의미로 false를 반환한다.
   */
  async restartGameDecision() {
    const ANSWER = await this.requestInput(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => input === "1" || input === "2"
    );

    return ANSWER === "1";
  }

  /**
   * 1부터 9 사이의 서로 다른 3개의 숫자를 랜덤으로 생성하는 함수.
   * 생성된 3개의 숫자는 문자열 형태로 반환된다.
   */
  createNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER.join('');
  }

  /**
   * 사용자로부터 입력을 비동기적으로 요청하고 그 값을 반환하는 함수.
   */
  async getUserInput(promptMessage) {
    return MissionUtils.Console.readLineAsync(promptMessage);
  }

  /**
   * 주어진 입력 값이 유효한지 검증하는 함수.
   */
  isValidInput(input, validation) {
    if (isNaN(Number(input))) {
      throw new Error(
        '[ERROR] 문자가 포함된 입력입니다. 애플리케이션을 종료합니다.'
      );
    }

    if (!validation(input)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return true;
  }

  /**
   * 주어진 에러 메시지를 출력하고 특정 에러 메시지의 경우 프로그램을 종료하는 함수.
   */
  printErrorMessage(error) {
    if (
      error.message ===
      '[ERROR] 문자가 포함된 입력입니다. 애플리케이션을 종료합니다.'
    ) {
      MissionUtils.Console.print(error.message);
      throw error;
    }

    MissionUtils.Console.print(error.message);
  }

  /**
   * 사용자로부터 입력을 받아서 주어진 검증 함수를 사용해 유효한 입력인지 확인하는 함수.
   * 유효하지 않은 입력이면 에러 메시지를 출력하고 다시 입력을 요청한다.
   */
  async requestInput(promptMessage, validation) {
    while (true) {
      try {
        const USER_INPUT = await this.getUserInput(promptMessage);
        this.isValidInput(USER_INPUT, validation);
        return USER_INPUT;
      } catch (error) {
        this.printErrorMessage(error);
      }
    }
  }

  /**
   * 컴퓨터의 숫자와 사용자의 숫자를 비교하여 스트라이크와 볼의 개수를 반환하는 함수.
   */
  checkNumber(COM_NUMBER, USER_NUMBER) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i += 1) {
      if (COM_NUMBER[i] === USER_NUMBER[i]) {
        strikes += 1;
      } else if (COM_NUMBER.includes(USER_NUMBER[i])) {
        balls += 1;
      }
    }

    return { strikes, balls };
  }
}

const app = new App();
app.play();

export default App;
