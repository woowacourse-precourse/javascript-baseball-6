import {MissionUtils} from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answerNums = [0, 0, 0];
    this.strikeCount = 0;
    this.ballCount = 0;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setAnswer();
    this.play();
  }

  async play() {
    const line = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

    if (!this.isValidNum(line)) {
      throw new Error('[Error] 서로 다른 3자리 숫자를 입력해주세요.');
    }

    this.answerNums.forEach((num, i) => {
      if (num === Number(line[i])) {
        this.strikeCount += 1;
      } else if (
        line[i] === this.answerNums[(i + 1) % 3] ||
        line[i] === this.answerNums[(i + 2) % 3]
      ) {
        this.ballCount += 1;
      }
    });

    if (this.ballCount === 0 && this.strikeCount === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (this.ballCount > 0 && this.strikeCount > 0) {
      MissionUtils.Console.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`);
    } else if (this.ballCount > 0) {
      MissionUtils.Console.print(`${this.ballCount}볼`);
    } else if (this.strikeCount > 0) {
      MissionUtils.Console.print(`${this.strikeCount}스트라이크`);
    }

    if (this.strikeCount === 3) {
      this.endGame();
    } else {
      this.ballCount = 0;
      this.strikeCount = 0;
      this.play();
    }
  }

  setAnswer() {
    this.answerNums.forEach((_, i) => {
      const randNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answerNums.includes(randNumber)) {
        this.answerNums[i] = randNumber;
      }
    });
  }

  isValidNum(userInput) {
    if (
      !Number.isNaN(userInput) ||
      userInput.length !== 3 ||
      this.hasDuplicated(userInput) ||
      !userInput.includes(0)
    ) {
      return false;
    }

    return true;
  }

  hasDuplicated(val) {
    return val[0] === val[1] || val[1] === val[2] || val[0] === val[2];
  }

  async endGame() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const selectOff = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );
    if (selectOff === 1) {
      this.resetGame();
    } else if (selectOff === 2) {
      return;
    } else {
      throw new Error('[Error] 서로 다른 3자리 숫자를 입력해주세요.');
    }
  }

  resetGame() {
    this.strikeCount = 0;
    this.ballCount = 0;
    this.setAnswer();
    this.play();
  }
}

export default App;
