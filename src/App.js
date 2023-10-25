import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answers = [];
  }

  generateRandomAnswer() {
    this.answers = new Set();

    while (this.answers.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      this.answers.add(number);
    }

    this.answers = Array.from(this.answers);
  }

  async handleGameRestart() {
    let input;

    while (true) {
      input = await MissionUtils.Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );
      if (input == '2') return;
      if (input == '1') {
        this.init();
        return;
      }
    }
  }

  convertNumberToArray(number) {
    const arr = number.split('');
    const set = new Set(arr);
    return [...set];
  }

  async waitGuessNumberInput() {
    while (true) {
      const input = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요: '
      );

      const guess = this.checkThreeUniqueDigits(input);
      const answerString = this.compareWithAnswer(guess, this.answers);
      MissionUtils.Console.print(answerString);

      if (answerString === '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        return this.handleGameRestart();
      }
    }
  }

  checkThreeUniqueDigits(number) {
    const stringToNumber = parseInt(number);

    if (isNaN(stringToNumber)) {
      throw Error('[ERROR] 숫자를 입력해주세요!');
    }

    if (stringToNumber < 100 || 999 < stringToNumber) {
      throw Error('[ERROR] 자리수가 다른 세자리 수를 입력해주세요!');
    }

    const ret = this.convertNumberToArray(number);

    if (ret.length != 3) {
      throw Error('[ERROR] 자리수가 다른 세자리 수를 입력해주세요!');
    }

    return ret.map((item) => parseInt(item));
  }

  compareWithAnswer(guess, answers) {
    let ball = 0;
    let strike = 0;

    answers.forEach((answerItem, answerIndex) => {
      guess.forEach((guessItem, guessIndex) => {
        if (guessItem == answerItem) {
          answerIndex == guessIndex ? strike++ : ball++;
        }
      });
    });

    if (ball === 0 && strike === 0) return '낫싱';

    return `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`;
  }

  async init() {
    this.generateRandomAnswer();
    await this.waitGuessNumberInput();
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.init();
  }
}

export default App;
