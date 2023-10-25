import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #answer = [];

  constructor() {
    this.#init();
  }

  async play() {
    while (true) {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.#validateInput(input);
      const [strikes, balls] = this.#createResponse(input);

      if (strikes === 0 && balls === 0) {
        Console.print("낫싱");
        continue;
      }

      const strikesString = strikes === 0 ? '' : `${strikes}스트라이크`
      const ballsString = balls === 0 ? '' : `${balls}볼 `
      const response = `${ballsString}${strikesString}`;
      Console.print(response);

      if (strikes < 3) {
        continue;
      }

      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      const command = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (command === '1') {
        this.#init();
        continue;
      }
      return;
    }
  }

  #init() {
    this.#answer = this.#generateAnswer();
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  #validateInput(input) {
    if (input.length !== 3) {
      throw new Error("[ERROR] 3글자가 아닌 입력입니다.");
    }
    for (const char of input) {
      if (char < '1' || char > '9') {
        throw new Error("[ERROR] 숫자가 아닌 입력이 포함되어 있습니다.");
      }
    }
  }

  /**
   * @param {string} input 
   */
  #createResponse(input) {
    const [ a, b, c ] = this.#answer.map(Number);
    const [ x, y, z ] = [ ...input ].map(Number);

    let strikes = 0;
    let balls = 0;

    if (a === x) {
      strikes++;
    }
    if (b === y) {
      strikes++;
    }
    if (c === z) {
      strikes++;
    }

    if (a === y) {
      balls++;
    }
    if (a === z) {
      balls++;
    }
    if (b === x) {
      balls++;
    }
    if (b === z) {
      balls++;
    }
    if (c === x) {
      balls++;
    }
    if (c === y) {
      balls++;
    }
    return [strikes, balls];
  }

  #generateAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

}

export default App;
