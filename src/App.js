import { Console, Random } from '@woowacourse/mission-utils';

// rule
const RANGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// game guide messages
const GAME_START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const GAME_OVER_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const GAME_ONGOING_MESSAGE = '숫자를 입력해주세요 : ';
const RE_GAME_CHOICE_MESSAGE =
  '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ';
const CHOOSE_THE_NUMBER_MESSAGE =
  '0을 제외한 서로 다른 숫자를 3자리 입력해주세요: ';

// error messages
const DUPLICATE_NUMBER_ERROR = '[ERROR] 서로 다른 숫자를 입력해야 합니다.';
const OUT_OF_RANGE_ERROR = '[ERROR] 1~9 사이의 숫자를 입력해야 합니다.';
const OUT_OF_LENGTH_ERROR = '[ERROR] 3자리의 숫자를 입력해야 합니다.';
const SELECTION_ERROR = '[ERROR] 1 또는 2를 입력해야 합니다.';

class App {
  constructor() {
    this.computer = [];
    this.playSwitch = false;
    this.inputNumber = '';
    this.toArray = [];
    this.initialize();
  }

  initialize() {
    this.computer = [];
    this.playSwitch = false;
    this.inputNumber = '';
    this.toArray = [];
  }

  createRandomNumber() {
    let randomNumber = 0;
    while (this.computer.length < 3) {
      randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(randomNumber)) {
        this.computer.push(randomNumber);
      }
    }
  }

  parsing() {
    let arr = this.inputNumber.split('');
    for (let i = 0; i < 3; i++) {
      this.toArray.push(Number(arr[i]));
    }
  }

  validation() {
    for (let num of this.toArray) {
      let valid = RANGE_NUMBERS.includes(num);
      if (!valid) {
        throw new Error(OUT_OF_RANGE_ERROR);
      }
    }
    if (this.toArray.length !== 3) {
      throw new Error(OUT_OF_LENGTH_ERROR);
    }
    const deduplicateObj = new Set(this.toArray);
    if (deduplicateObj.size !== this.toArray.length) {
      throw new Error(DUPLICATE_NUMBER_ERROR);
    }
  }

  ballAndStrikeCount() {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computer[i] === this.toArray[i]) {
        strike += 1;
      } else if (this.computer.includes(this.inputNumber[i])) {
        ball += 1;
      }
    }
    if (ball === 0 && strike === 0) {
      Console.print('낫싱');
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
      if (strike === 3) {
        this.gameOver();
        return true;
      }
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async gameOver() {
    this.playSwitch = false;
    Console.print(GAME_OVER_MESSAGE);
    const reGameChoice = await Console.readLineAsync(RE_GAME_CHOICE_MESSAGE);
    if (reGameChoice === '1') {
      this.initialize();
      this.play();
    } else if (reGameChoice === '2') {
      return;
    } else {
      throw new Error(SELECTION_ERROR);
    }
  }

  async play() {
    this.playSwitch = true;
    while (this.playSwitch) {
      this.createRandomNumber();
      Console.print(this.computer); // 제출 전 지우기
      Console.print(GAME_START_MESSAGE);
      this.inputNumber = await Console.readLineAsync(CHOOSE_THE_NUMBER_MESSAGE);
      this.parsing();
      this.validation();

      while (this.playSwitch) {
        let result = this.ballAndStrikeCount();
        if (!result) {
          this.inputNumber = await Console.readLineAsync(GAME_ONGOING_MESSAGE);
          this.toArray = [];
          this.parsing();
          this.validation();
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
