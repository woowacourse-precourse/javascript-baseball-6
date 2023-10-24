import { MissionUtils } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, ERROR_MESSAGE, EXIT_COMMAND, NUMBER_LENGTH } from './Constants';

class App {
  constructor() {
    this.computerNumber = [];
    this.exitNumber = EXIT_COMMAND.RESTART;
  }
  //상대방 숫자 랜덤 생성
  generateRandomNumber() {
    while (this.computerNumber.length < NUMBER_LENGTH) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(NUMBER)) {
        this.computerNumber.push(NUMBER);
      }
    }
  }
  //스트라이크 볼 개수 결과 출력
  showResults(strikeNumbers, ballNumbers) {
    if (strikeNumbers === 0 && ballNumbers === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }
    const ballOutput = ballNumbers !== 0 ? `${ballNumbers}볼 ` : '';
    const strikeOutput = strikeNumbers !== 0 ? `${strikeNumbers}스트라이크` : '';
    MissionUtils.Console.print(`${ballOutput}${strikeOutput}`);
  }
  //유저의 숫자와 컴퓨터의 숫자 비교
  compareNumbers(guessNumber) {
    let strikeNumbers = 0,
      ballNumbers = 0;
    for (let i = 0; i < NUMBER_LENGTH; i++) {
      if (Number(guessNumber[i]) === this.computerNumber[i]) {
        strikeNumbers += 1;
      } else if (this.computerNumber.includes(Number(guessNumber[i]))) {
        ballNumbers += 1;
      }
    }
    this.showResults(strikeNumbers, ballNumbers);
    return strikeNumbers;
  }
  //각자리 숫자들이 서로 다른지 검증
  verifyDigit(guessNumber) {
    const digit1 = Math.floor(guessNumber / 100);
    const digit2 = Math.floor((guessNumber % 100) / 10);
    const digit3 = guessNumber % 10;
    return !(digit1 !== digit2 && digit1 !== digit3 && digit2 !== digit3);
  }
  //유저의 입력값 검증
  verityUserNumber(guessNumber) {
    if (
      guessNumber.length !== NUMBER_LENGTH ||
      !guessNumber ||
      isNaN(guessNumber) ||
      this.verifyDigit(guessNumber)
    ) {
      throw new Error(ERROR_MESSAGE);
    }
  }
  // 유저가 게임을 시작할 것인지 여부를 물어보는 숫자 입력
  async askExitNumber() {
    MissionUtils.Console.print(CONSOLE_MESSAGE.CORRECT);
    this.exitNumber = await MissionUtils.Console.readLineAsync(
      CONSOLE_MESSAGE.IS_RESTART
    );
    this.gameExiter();
  }
  //유저의 입력값에 따라 재시작 or 종료
  async gameExiter() {
    if (this.exitNumber === EXIT_COMMAND.RESTART) {
      this.computerNumber.length = 0;
      this.startGame();
      return;
    } else if (this.exitNumber === EXIT_COMMAND.END) {
      MissionUtils.Console.print(CONSOLE_MESSAGE.END);
      return;
    }
    throw new Error(ERROR_MESSAGE);
  }
  //유저가 숫자 입력
  async askNumber() {
    const guessNumber = await MissionUtils.Console.readLineAsync(
      CONSOLE_MESSAGE.INPUT_NUMBER
    );
    this.verityUserNumber(guessNumber);
    if (this.compareNumbers(guessNumber) === NUMBER_LENGTH) {
      this.askExitNumber();
      return;
    }
    await this.askNumber();
  }
  //게임 시작할시 필요한 메소드들
  async startGame() {
    this.generateRandomNumber();
    await this.askNumber();
  }

  async play() {
    await this.startGame();
  }
}

export default App;
