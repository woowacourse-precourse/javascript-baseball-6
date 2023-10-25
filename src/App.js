import { Console, Random } from "@woowacourse/mission-utils";

const ANSWER_LENGTH = 3;
const NUMBER_RANGE = /^[1-9]+$/;
const RESTART = '1';
const END = '2';

class App {
  constructor() {
    this.answer = null;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.createAnswer();
    await this.toggleGame('playing');
  }

  async restart() {
    this.answer = this.createAnswer();
    await this.toggleGame('playing');
  }

  async toggleGame(status) {
    switch (status) {
      case 'playing': {
        const inputNumber = await Console.readLineAsync(
          '숫자를 입력해주세요 : '
        );
        this.validateAndThrowError(inputNumber);

        const scoreInfo = this.createScore(inputNumber);
        if (scoreInfo.strike === ANSWER_LENGTH) {
          await this.toggleGame('clear');
        } else {
          const hintText = this.createHint(scoreInfo);
          Console.print(hintText);
          await this.toggleGame('playing');
        }
        break;
      }
      case 'clear': {
        Console.print(
          `${ANSWER_LENGTH}스트라이크\n${ANSWER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        let inputNumber = null;
        while (inputNumber !== RESTART && inputNumber !== END) {
          inputNumber = await Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
          );
        }
        if (inputNumber === RESTART) {
          await this.restart();
        } else if (inputNumber === END) {
          await this.toggleGame('end');
        }
      }
      case 'end': {
        break;
      }
    }
  }

  createAnswer() {
    const answer = [];
    while (answer.length < ANSWER_LENGTH) {
      const number = String(Random.pickNumberInRange(1, 9));
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer.join("");
  }

  createScore(inputNumber) {
    const scoreInfo = { strike: 0, ball: 0 };
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      const currentNumber = inputNumber[i];
      if (currentNumber === this.answer[i]) {
        scoreInfo.strike++;
        continue;
      }
      if (this.answer.includes(currentNumber)) {
        scoreInfo.ball++;
      }
    }
    return scoreInfo;
  }

  createHint(scoreInfo) {
    const { strike, ball } = scoreInfo;
    const hintArr = [];
    if (ball > 0) {
      hintArr.push(`${ball}볼`);
    }
    if (strike > 0) {
      hintArr.push(`${strike}스트라이크`);
    }
    return hintArr.length === 0 ? '낫싱' : hintArr.join(' ');
  }

  validateAndThrowError(inputNumber) {
    if (
      inputNumber.length !== ANSWER_LENGTH ||
      new Set(inputNumber).size !== ANSWER_LENGTH
    )
      throw new Error(
        `[ERROR] 1부터 9까지 서로 다른 수로 이루어진 ${ANSWER_LENGTH}자리 숫자를 입력해야 합니다.`
      );
    if (!NUMBER_RANGE.test(inputNumber))
      throw new Error(`[ERROR] 1부터 9까지의 수가 아닙니다.`);
    if (inputNumber.includes(" "))
      throw new Error(`[ERROR] 공백 없이 숫자를 입력해야 합니다.`);
  }
}

export default App;
