import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computerValue = this.getComputerValue();
    this.playGame = true;
  }

  /**
   * getComputerValue(): 컴퓨터 숫자를 랜덤으로 생성해 주는 메소드
   * 랜덤으로 생성된 3자리 숫자 배열 반환
   */
  getComputerValue = () => {
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }

    return COMPUTER;
  }

  /**
   * isValidInput(): 사용자 입력 검증 메소드 (0~9까지 3자리 수)
   * 입력 검증 후 true 또는 false 반환
   */
  isValidInput = (userInput) => {
    const INPUT_REGEX = /^[0-9]{3}$/.test(userInput);
    return INPUT_REGEX;
  }

  /**
   * getUserValue(): 사용자의 입력을 받는 메소드 (0~9까지 3자리 수)
   * 잘못된 값을 입력했을 시 throw 사용해 예외 처리
   * 사용자에게 입력 받은 값 배열 반환
   */
  getUserValue = async () => {
    const USER_INPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');
    
    if (!this.isValidInput(USER_INPUT)) {
      throw new Error('[ERROR] 서로 다른 숫자 3개만 입력 가능합니다.');
    }

    const USER_VALUE = [...USER_INPUT].map((value) => Number(value));
    return USER_VALUE;
  }

  /**
   * getHint(): 판단에 따른 힌트를 출력하는 메소드
   * 모든 숫자를 맞히고 종료될 경우 재시작 여부를 묻기 위한 문자열 반환
   */
  getHint = (userValue) => {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < userValue.length; i++) {
      if (userValue[i] === this.computerValue[i]) {
        strikeCount += 1;
      } else if (this.computerValue.includes(userValue[i])) {
        ballCount += 1;
      }
    }

    if (strikeCount === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return 'restart';
    } else if (strikeCount && ballCount) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    } else if (strikeCount) {
      Console.print(`${strikeCount}스트라이크`);
    } else if (ballCount) {
      Console.print(`${ballCount}볼`);
    } else {
      Console.print('낫싱');
    }
  }

  /**
   * exitGame(): 재시작 여부를 입력받고 입력 여부에 따라 재시작 또는 종료를 수행하는 메소드
   * 1 또는 2가 아닌 숫자를 입력했을 시 throw 사용해 예외 처리
   */
  exitGame = async (userValue) => {
    const RESULT = this.getHint(userValue);

    if (RESULT) {
      const RESTART = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );

      if (RESTART === '1') {
        this.computerValue = this.getComputerValue();
      } else if (RESTART === '2') {
        this.playGame = false;
      } else {
        throw new Error('[ERROR] 1 또는 2의 숫자만 입력해주세요.');
      }
    }
  }

  /**
   * play(): 게임을 실행하는 메소드
   */
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (this.playGame) {
      const USER_VALUE = await this.getUserValue();
      await this.exitGame(USER_VALUE);
    }
  }
}

export default App;
