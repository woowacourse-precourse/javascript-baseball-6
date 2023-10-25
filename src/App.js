import GameUtil from './Util';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, GAME } from './constant';
// Constants

class App extends GameUtil {
  constructor() {
    super();
    this.init();
  }

  // 게임을 초기화하는 함수
  init() {
    this.randomNumber = super.generateRandomNumber(); // 랜덤 숫자 생성
    this.userInput = ''; // 사용자 입력
    this.isGameRunning = true; // 게임 진행 여부
  }

  // 사용자 입력을 받는 함수
  async isUserInput() {
    this.userInput = await MissionUtils.Console.readLineAsync(GAME.INPUT_PROMPT);
    this.validateInput();
  }

  // 게임을 실행하는 함수
  async play() {
    MissionUtils.Console.print(GAME.GAME_START_MESSAGE);
    // 게임이 진행중인 동안 반복
    while (this.isGameRunning) {
      // 사용자 입력을 받음
      await this.isUserInput();

      // 사용자 입력과 랜덤 숫자를 비교하여 결과를 출력
      const result = this.calculateResult(this.userInput, this.randomNumber);
      MissionUtils.Console.print(result);

      // 3스트라이크인 경우
      if (result === GAME.STRIKE_MESSAGE) {
        MissionUtils.Console.print(GAME.GAME_END_MESSAGE);
        await this.isContinue();
      }
    }
  }

  // 사용자 입력이 유효한지 검증하는 함수
  validateInput() {
    // 숫자가 아닌 경우
    if (isNaN(+this.userInput)) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }
    // 3자리가 아닌 경우
    if (this.userInput.length !== 3) {
      throw new Error(ERROR.NOT_THREE_DIGITS);
    }
    // 중복된 숫자가 있는 경우
    if (new Set(this.userInput).size !== 3) {
      throw new Error(ERROR.DUPLICATE_DIGITS);
    }
    // 1~9가 아닌 경우
    if (this.userInput.split('').some((number) => number < 1 || number > 9)) {
      throw new Error(ERROR.NOT_IN_RANGE);
    }
  }

  // 사용자 입력과 랜덤 숫자를 비교하여 결과를 반환하는 함수
  calculateResult(userInput, randomNumber) {
    let strike = 0; // 스트라이크의 개수
    let ball = 0; // 볼의 개수

    // 스트라이크와 볼의 개수를 구함
    for (let i = 0; i < 3; i++) {
      if (userInput[i] === randomNumber[i]) {
        strike++;
      } else if (randomNumber.includes(userInput[i])) {
        ball++;
      }
    }
    // 스트라이크와 볼의 개수에 따라 결과를 반환
    if (strike === 3) {
      return GAME.STRIKE_MESSAGE;
    }
    if (strike > 0 || ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }

    return '낫싱';
  }

  // 게임을 계속할지 종료할지 입력받는 함수
  async isContinue() {
    const restartOrExit = await MissionUtils.Console.readLineAsync(GAME.RESTART_OR_EXIT_MESSAGE);
    if (restartOrExit === GAME.EXIT_OPTION) {
      this.isGameRunning = false;
    }
    if (restartOrExit !== GAME.RESTART_OPTION && restartOrExit !== GAME.EXIT_OPTION) {
      throw new Error(ERROR.NOT_VALID_OPTION);
    }
    if (restartOrExit === GAME.RESTART_OPTION) {
      this.init();
    }
  }
}

const app = new App();
app.play();

export default App;
