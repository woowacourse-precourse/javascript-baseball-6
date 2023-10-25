import { Console } from '@woowacourse/mission-utils';
import { generateRandomBallNumber } from './Ball.js';
import { messages } from './Message.js';
import * as validation from './Validation.js';

class App {
  /**
   * 생성 시 this.ramdoms에 정답 저장
   */
  constructor() {
    this.randoms = generateRandomBallNumber();
  }
  async play() {
    Console.print(messages.GAME_START);
    await this.getInput();
    return;
  }

  /**
   * 사용자의 입력 값을 입력받은 후 출력
   */
  async getInput() {
    try {
      const input = await Console.readLineAsync(messages.INPUT_NUMBER);
      this.checkInputError(input);
      Console.print(`${messages.INPUT_NUMBER} : ${input}`);
      this.resultMessage(input);
    } catch (err) {
      throw err;
    }
  }

  /**
   * 입력 값이 입력되면 형식에 맞는지 확인
   * @param {String} input 
   */
  checkInputError(input) {
    validation.checkInputLen(input);
    validation.checkInputType(input);
    validation.checkInputSameNum(input);
  }

  /**
   * input을 randoms와 비교한 후 Ball,Strike 개수 반환
   * @param {String} input
   * @returns {[Number, Number]} Ball, Strike 개수
   */
  countBallStrike = (input) => {
    const countStrike = [...input].filter(
      (num, i) => ~~num === this.randoms[i]
    ).length;
    const countBall = [...input].filter((el) =>
      this.randoms.includes(~~el)
    ).length;
    return [countBall - countStrike, countStrike];
  };

  /**
   * 입력 값에 대한 결과 값 반환
   * @param {String} input
   */
  resultMessage = (input) => {
    let resultText = [];
    const [ball, strike] = this.countBallStrike(input);
    if (ball === 0 && strike === 0) resultText.push(messages.NOTHING);
    if (ball) resultText.push(`${ball}${messages.BALL}`);
    if (strike) resultText.push(`${strike}${messages.STRIKE}`);
    resultText = resultText.join(' ');
    this.checkSuccess(resultText);
  };

  /**
   * 결과가 '3 스트라이크'인지 확인 후 재시작 혹은 종료
   * @param {String} text
   */
  checkSuccess = (text) => {
    if (text === messages.SUCCESS) {
      Console.print(`${text}
${messages.GAME_FINISH}`);
      this.restart();
    } else if (text !== messages.SUCCESS) {
      Console.print(text);
      this.getInput();
    }
  };

  /**
   * 입력 값이 '1'이면 재시작, '2'이면 게임 종료 출력
   * 입력 값이 형식에 맞지 않으면 에러 발생
   */
  async restart() {
    try {
      const input = await Console.readLineAsync(messages.RESTART_GAME);
      if (input === '1') {
        this.randoms = generateRandomBallNumber();
        this.getInput();
        return;
      }
      if (input === '2') {
        Console.print(messages.END);
        return;
      }
      validation.checkRestartInput(input);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default App;
