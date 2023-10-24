import { Console, Random } from "@woowacourse/mission-utils";

class App {
  /** 컴퓨터 값 설정 */
  getComputerInput = (choice, arr) => {
    if (choice == 1) {
      arr = [];
      while (arr.length < 3) {
        let number = Random.pickNumberInRange(1, 9);
        if (!arr.includes(number)) {
          arr.push(number);
        }
      }
      choice = 0;
    }
    return [choice, arr];
  }

  /** 유저 값 입력 */
  getUserInput = async (input) => {
    input = [];
    input = await Console.readLineAsync();
    input = input.toString().split('').map(a => +a);
    Console.print(`input = ${input}`);
    if (input.length != 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return input;
  }

  /** 값 비교 */
  compareValues = (strike, ball, computer, userInput) => {
    for (let i = 0; i < 3; i++) {
      if (computer[i] == userInput[i]) strike += 1;
      else if (computer.includes(userInput[i])) ball += 1;
    }

    return [strike, ball];
  }

  /** 종료 or 재시작 선택 */
  stopOrRestart = async (choice) => {
    choice = await Console.readLineAsync();
    return Number(choice);
  }

  /** 결과 출력 */
  getResult = async (strike, ball, choice) => {
    if (strike == 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

      choice = await Console.readLineAsync();
      choice = Number(choice);
    }

    if (strike + ball == 0) {
      Console.print("낫싱");
    } else {
      if (strike == 0) Console.print(`${ball}볼`);
      else if (ball == 0) Console.print(`${strike}스트라이크`);
      else Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return choice;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let computer = [];
    let gameChoice = 1;
    let userInput = [];

    while (true) {
      // 컴퓨터 값 추출
      [gameChoice, computer] = this.getComputerInput(gameChoice, computer);

      // 값 입력
      userInput = await this.getUserInput(userInput);

      // 값 비교
      let strike = 0;
      let ball = 0;
      [strike, ball] = this.compareValues(strike, ball, computer, userInput);

      // 출력
      gameChoice = await this.getResult(strike, ball, gameChoice);
      if (gameChoice == 1) continue;
      if (gameChoice == 2) break;

      continue;
    }

    return 0;
  }
}

export default App;