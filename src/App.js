import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {}
  constructor() {
    this.computerNumber = [];
  }

  /**
   * 컴퓨터 번호 랜덤 생성
   */
  makeComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    this.computerNumber = [...computer];
  }

  /**
   * 사용자 입력 받아 오기
   * @returns {number[]}
   */
  async getUserInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const inputArr = Array.from(input);

    this.isInputVaild(inputArr);

    return inputArr.map(Number);
  }

  /**
   * 사용자 입력에 대한 유효성 검사
   * @param {string[]} inputArr
   */
  isInputVaild(inputArr) {
    if (inputArr.length !== 3)
      throw new Error("[ERROR] 3자리만 입력 가능해요.");

    inputArr.forEach((number) => {
      if (isNaN(number)) throw new Error("[ERROR] 숫자만 입력 가능해요.");
      if (number === "0")
        throw new Error("[ERROR] 1 ~ 9사이의 숫자만 입력 가능해요.");
    });

    if (new Set(inputArr).size !== 3)
      throw new Error("[ERROR] 서로 다른 숫자만 입력 가능해요.");
  }

  /**
   * 입력한 숫자에 대한 결과 계산
   * @returns {boolean}
   */
  calcResult(userNumber) {
    const computerNumber = [...this.computerNumber];
    let ball = 0;
    let strike = 0;

    userNumber.forEach((num, idx) => {
      if (num === computerNumber[idx]) strike += 1;
      else if (computerNumber.includes(num)) ball += 1;
    });

    return [ball, strike];
  }

  /**
   * 계산한 결과 출력
   * @param {number} ball
   * @param {number} strike
   * @returns {boolean}
   **/
  printResult(ball, strike) {
    if (!ball && !strike) Console.print("낫싱");
    else if (ball && !strike) Console.print(`${ball}볼`);
    else if (!ball && strike) Console.print(`${strike}스트라이크`);
    else Console.print(`${ball}볼 ${strike}스트라이크`);

    if (strike !== 3) return false;
    else return true;
  }

  /**
   * 사용자의 입력을 받고 정답인지 유무 판단하는 과정
   */
  async isAnswer() {
    const userNumber = await this.getUserInput();
    const [ball, strike] = this.calcResult(userNumber);
    const isEnd = this.printResult(ball, strike);

    if (isEnd) this.isContinue();
    else await this.isAnswer();
  }

  /**
   * 첫 게임 시작
   */
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.makeComputerNumber();
    await this.isAnswer();
  }
}

export default App;
