import { Console, Random }  from "@woowacourse/mission-utils";
const ONLY_NUMBER = /^[1-9]+$/;

class App {

  constructor() {
    this.input = [];
    this.computer = [];
    this.computerRandomNumber();;
  }

  computerRandomNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.gameProcess();
  }

  gameProcess() {
    this.inputNumber();
    const score = this.checkScore(this.computer, this.input);
    this.answerScore(score);
  }

  async inputNumber() {
    const input = await Console.readLineAsync('숫자를 입력하세요: ');
    this.input = input.split('').map((i) => Number(i));
    this.checkValidation(this.input);
  }

  checkValidation(input) {
    if (input.length !== 3 || new Set(input).size !== 3 || !ONLY_NUMBER.test(input.join(''))) {
      throw Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

  checkScore(computer, input) {
    let score = [0,0];
    for (let i = 0 ; i < computer.length ; i++) {
      if (computer[i] === input[i]) score[1] += 1;
      else if (computer.includes(input[i])) score[0] += 1;
    }
    return score;
  }

  answerScore(score) {
    let ans = "";
    if (score[0] === 0 && score[1] === 0) ans += "낫싱";
    if (score[0] > 0) ans += `${score[0]}볼 `;
    if (score[1] > 0) ans += `${score[1]}스트라이크`;
  
    Console.print(ans);
  }
}

const app = new App();
app.play();


export default App;
