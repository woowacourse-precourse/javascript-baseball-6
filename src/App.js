import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.GAME_FLAG = true;
    this.GAME_ING = true;
  }
  async play() {
    // 1. 게임 시작
    // 2. 랜덤 숫자 생성
    // 3. 유저 인풋 받기
    // 4. 값 비교 및 콘솔 처리 - 맞출 때까지
    // 3,4 while문
    // 5. 재시작 확인 1-4 while문
    while (this.GAME_FLAG) {
      this.GAME_ING = true;
      Console.print('숫자 야구 게임을 시작합니다.');
      const COMPUTER_NUM = this.createRandomNum();

      while (this.GAME_ING) {
        const USER_NUM = await this.getUserInput();
        const GAME_RESULT = this.compareNum(USER_NUM, COMPUTER_NUM);
        this.resultConsole(GAME_RESULT);
      }
      await this.restartGame(); 
    }
  }

  // 랜덤 숫자 생성
  createRandomNum() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER.join('');
  }

  // 게임 로직 
  async baseballGame(COMPUTER_NUM) {
    while (this.GAME_ING) {
    const USER_NUM = await this.getUserInput();
    const GAME_RESULT = this.compareNum(USER_NUM, COMPUTER_NUM);
    this.resultConsole(GAME_RESULT);
    }
    this.GAME_ING = true;
    this.restartGame();
  }

  // 유저 인풋 받기
  async getUserInput() {
    const USER_INPUT_REGX = /^(?!.*(.).*\1)[1-9]{3}$/;
    try {
      const USER_NUM = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if (USER_INPUT_REGX.test(USER_NUM)) {
        return USER_NUM;
      } else {
        throw new Error('[ERROR] 1부터 9까지의 서로 다른 수로 이루어진 3자리의 수를 입력해주세요');
      }
    } catch (error) {
      throw error;
    }
  }

  // 숫자 비교
  compareNum(userNum, comNum) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (comNum[i] === userNum[i]) {
        strike += 1;
      } else if (comNum.includes(userNum[i])) {
        ball += 1;
      }
    }
    return [ball, strike];
  }

  // 콘솔 처리
  resultConsole(gameResult) {
    let [ball, strike] = gameResult;
    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.GAME_ING = false;
    } else if (ball === 0 && strike === 0) {
      Console.print('낫싱');
    } else if (ball !== 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else if (ball === 0 && strike !== 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  // 재시작
  async restartGame() {
    const RESTART_REGX = /^[12]$/;
    try {
      const RESTART_INPUT = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if (RESTART_REGX.test(RESTART_INPUT)) {
        if (RESTART_INPUT === '1') {
          this.GAME_FLAG = true;
        } else {
          this.GAME_FLAG = false;
        }
      } else {
        throw new Error('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      }
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
