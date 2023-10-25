import { MissionUtils } from "@woowacourse/mission-utils";

const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const INPUT_MESSAGE = '숫자를 입력해주세요 : ';
const THREE_STRIKE_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const RETRY_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
const NOTHING = '낫싱';
const BALL = '볼';
const STRIKE = '스트라이크';

class App {
  async play() {
    MissionUtils.Console.print(`${START_MESSAGE}`);
    this.getGameResult();

    
  }

  async getGameResult() {
    while (true) {
      const answerNumber = await this.makeAnsNumber();
      console.log(answerNumber);
      let isThreeStrike = true;

      while (isThreeStrike) {
        let inputNumber = await this.makeInputNumber();
        let [strike, ball, out] = this.checkNumber(answerNumber, inputNumber);
        if (out === 3) MissionUtils.Console.print(`${NOTHING}`);
        else {
          if (ball > 0) MissionUtils.Console.print(ball + `${BALL}` + strike + `${STRIKE}`);
          else MissionUtils.Console.print(strike + `${STRIKE}`);
        }
        isThreeStrike = strike === 3 ? false : true;
      }

      MissionUtils.Console.print(`${THREE_STRIKE_MESSAGE}`);
      const retryNumber = await this.inputRetry();
      if (retryNumber === 2) break;
    }
  }

  async makeAnsNumber() {
    const numberArr = [];
    while (numberArr.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) {
        numberArr.push(number);
      }
    }
    return numberArr;
  }

  async makeInputNumber() {
    try {
      let number = await MissionUtils.Console.readLineAsync(`${INPUT_MESSAGE}`);
      number = [...number].map(el => +el);
      return number;

    } catch (error) {
    // reject 되는 경우
    }
  }

  async inputRetry() {
    try {
      let message = await MissionUtils.Console.readLineAsync(`${RETRY_MESSAGE}`);
      return +message;
    } catch (error) {
      
    }
  }

  checkNumber(answerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;
    let out = 0;
    inputNumber.map((num) => {
      let idx = inputNumber.indexOf(num);
      if (answerNumber.includes(num)) {
        if (answerNumber[idx] === num) strike++;
        else ball++;
      } else out++;
    })
    return [strike, ball, out];
  }

}
const a = new App();
a.play();
export default App;
