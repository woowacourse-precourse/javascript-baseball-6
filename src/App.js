import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  createRandomThree() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number.toString())) {
        computer.push(number.toString());
      }
    }
    return computer;
  }

  async getUserInput() {
    const userInputValue = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    return userInputValue;
  }

  compare(input) {
    let [ball, strike] = [0, 0];
    input.forEach((v, i) => {
      if (this.TARGET_NUMBER.includes(v)) {
        if (this.TARGET_NUMBER.indexOf(v) === i) {
          strike++;
        } else {
          ball++;
        }
      }
    })
    return [ball, strike];
  }

  getEndMessage(ball, strike) {
    const message = ball + strike == 0 ? '낫싱' :
      ball == 0 ? `${strike}스트라이크` :
        strike == 0 ? `${ball}볼` :
          `${ball}볼 ${strike}스트라이크`;

    return message;
  }

  async startTrial(input) {
    const [ball, strike] = this.compare(input);
    MissionUtils.Console.print(this.getEndMessage(ball, strike));
    return strike === 3 ? 'clear' : 'fail';
  }

  async startRound() {
    let userTrial = await this.getUserInput();
    userTrial = userTrial.toString();
    const regExpNum = /^[1-9]+$/g;
    const regExpSame = /(\d).*\1/g;
    if (!userTrial.match(regExpNum) || userTrial.length !== 3 || userTrial.match(regExpSame)) {
      throw new Error('[error] 숫자가 잘못된 형식입니다.');
    } else {
      userTrial = userTrial.split('');
    }

    const result = await this.startTrial(userTrial);

    if (result === 'fail') {
      return await this.startRound();
    } else if (result === 'clear') {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      const restart = await this.getUserInput();
      return restart;
    }
  }

  async startNewGame () {
    this.TARGET_NUMBER = this.createRandomThree();
      // console.log(this.TARGET_NUMBER)
      const restart = await this.startRound();
      if (restart === '1') {
        return this.startNewGame();
      } else if (restart === '2') {
        MissionUtils.Console.print('게임종료')
        return;
      }
  }

  async play() {
    try {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
      this.startNewGame();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const app = new App();
app.play();

export default App;