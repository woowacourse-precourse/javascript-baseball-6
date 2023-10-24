import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.COMPUTER_NUMBER = this.setNumber(); 
  }

  setNumber () {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  
  async play() {
    MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
    await this.playGame();
  }

  async playGame() {
    const COMPUTER_NUMBER = this.COMPUTER_NUMBER; 
    const noDuplicate = (number) => {
      return new Set(number.split('')).size === 3;
    }
    const noZero = (number) => {
      return !(number.split('').includes('0'));
    }
    try {
      let USER_NUMBER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
      if (!(noZero(USER_NUMBER) &&
          USER_NUMBER !== '' &&
          USER_NUMBER.length === 3 &&
          noDuplicate(USER_NUMBER))) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      return Promise.resolve(this.compareNumber(COMPUTER_NUMBER, USER_NUMBER));

    } catch (error) {
      return Promise.reject(error);
    }
  }

  async compareNumber (answer, user) {
    let strike = 0;
    let ball = 0;
  
    user.split('').forEach((i, idx) => {
      if (answer.indexOf(i) === idx) {
        strike++;
      } else if (answer.indexOf(i) !== idx && answer.split('').includes(i)) {
        ball++;
      }
    });
  
    if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      this.playGame();
    } else if (strike === 3) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      this.restartGame();
    } else if (strike > 0 && strike <= 2) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      this.playGame();
    } else if (ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
      this.playGame();
    } else if (strike === 0 && ball === 0) {
      MissionUtils.Console.print(`낫싱`);
      this.playGame();
    }
  
    strike = 0;
    ball = 0;
  }

  async restartGame() {
    try {
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      const RESTART = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 :');

      if (RESTART === '1') {
        this.COMPUTER_NUMBER = this.setNumber();
        this.playGame();
      }
  
      if (RESTART === '2') {
        throw new Error('[ERROR] 게임 종료');
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}


export default App

const app = new App();
app.play();