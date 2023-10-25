import { Console, Random } from "@woowacourse/mission-utils";

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
    await this.game('playing');
  }

  async restart() {
    this.answer = this.createAnswer();
    await this.game('playing');
  }

  async game(status) {
    switch (status) {
      case 'playing': {
        const input = await Console.readLineAsync(
          '숫자를 입력해주세요 : '
        );
        this.isError(input);

        const result = this.createResult(input);
        if (result.strike === 3) {
          await this.game('correct');
        } else {
          const resultArr = this.printResult(result);
          Console.print(resultArr);
          await this.game('playing');
        }
        break;
      }
      case 'correct': {
        Console.print(
          `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        let input = null;
        while (input !== RESTART && input !== END) {
          input = await Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
          );
        }
        if (input === RESTART) {
          await this.restart();
        } else if (input === END) {
          await this.game('end');
        }
      }
      case 'end': {
        break;
      }
    }
  }

  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = String(Random.pickNumberInRange(1, 9));
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer.join("");
  }

  createResult(input) {
    const result = { 
      strike: 0, 
      ball: 0 };
    for (let i = 0; i < 3; i++) {
      const currentNumber = input[i];
      if (currentNumber === this.answer[i]) {
        result.strike++;
        continue;
      }
      if (this.answer.includes(currentNumber)) {
        result.ball++;
      }
    }
    return result;
  }

  printResult(result) {
    const { strike, ball } = result;
    const resultArr = [];
    if (ball > 0) {
      resultArr.push(`${ball}볼`);
    }
    if (strike > 0) {
      resultArr.push(`${strike}스트라이크`);
    }
    return resultArr.length === 0 ? '낫싱' : resultArr.join(' ');
  }

  isError(input) {
    if (
      input.length !== 3 ||
      new Set(input).size !== 3
    )
      throw new Error(
        `[ERROR] 0을 제외한 서로 다른 수로 이루어진 세 자리 숫자를 입력해야 합니다.`
      );
    if (!NUMBER_RANGE.test(input))
      throw new Error(`[ERROR] 1부터 9까지만 입력할 수 있습니다.`);
    if (input.includes(" "))
      throw new Error(`[ERROR] 공백 없이 숫자를 입력해야 합니다.`);
  }
}

export default App;