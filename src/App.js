import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.LENGTH_OF_NUMBER = 3;
    this.ERROR_MESSAGE = '[ERROR] 숫자가 잘못된 형식입니다.';
    this.NOTHING = '낫싱';
    this.RESTART_MESSAGE =
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    this.START_MESSAGE = '숫자 야구 게임을 시작합니다.';
    this.INPUT_NUMBER_MESSAGE = '숫자를 입력해주세요 : ';
    this.ENDING_MESSAGE = '종료 완료';
    this.CORRECT_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    this.RESTART_MODE = '1';
    this.EXIT_MODE = '2';
  }

  static calculateResult(computerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < inputNumber.length; i += 1) {
      if (inputNumber[i] === computerNumber[i]) strike += 1;
      else if (computerNumber.includes(inputNumber[i])) ball += 1;
    }
    return { strike, ball };
  }

  printResult(strike, ball) {
    if (strike === 0 && ball === 0) Console.print(this.NOTHING);
    else
      Console.print(
        `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크 ` : ''}`,
      );
  }

  createComputerNumber() {
    let result = '';
    for (let i = 0; i < this.LENGTH_OF_NUMBER; i += 1)
      result += Random.pickNumberInRange(1, 9).toString();
    return result;
  }

  validateNumber(number) {
    if (Number.isNaN(number) || number.length !== this.LENGTH_OF_NUMBER)
      throw new Error(this.ERROR_MESSAGE);
    return number;
  }

  async restart() {
    const mode = await Console.readLineAsync(this.RESTART_MESSAGE);
    if (mode === this.RESTART_MODE) this.play();
    else if (mode === this.EXIT_MODE) Console.print(this.ENDING_MESSAGE);
    else throw new Error(this.ERROR_MESSAGE);
  }

  async guess(computerNumber) {
    const inputNumber = this.validateNumber(
      await Console.readLineAsync(this.INPUT_NUMBER_MESSAGE),
    );
    const { strike, ball } = App.calculateResult(computerNumber, inputNumber);
    this.printResult(strike, ball);
    if (strike === 3) Console.print(this.CORRECT_MESSAGE);
    else await this.guess(computerNumber);
  }

  async play() {
    const computerNumber = this.validateNumber(this.createComputerNumber());
    Console.print(this.START_MESSAGE);
    await this.guess(computerNumber);
    await this.restart();
  }
}
export default App;
