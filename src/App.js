import { MissionUtils } from '@woowacourse/mission-utils';
import View from './View.js';

class App {
  constructor() {
    this.view = new View();
    this.view.infoPrint('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    try {
      await this.game();
    } catch (error) {
      this.view.infoPrint(error.message);
      throw error;
    }
  }

  computerPick() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  userPickValidation(value) {
    if (value === undefined || value.length !== 3) {
      throw new Error('[ERROR] 서로 다른 숫자 3개를 입력해주세요.');
    }

    const valueArr = [
      ...new Set(
        value
          .split('')
          .map((element) => +element)
          .filter((element) => !isNaN(element))
          .filter((element) => element > 0 && element < 10),
      ),
    ];
    if (valueArr.length !== 3) {
      throw new Error('[ERROR] 서로 다른 숫자 3개를 입력해주세요.');
    }
  }

  userRestartValidation(value) {
    if (!(value === '1' || value === '2'))
      throw new Error('[ERROR] 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }

  throwError(message) {
    throw new Error(message);
  }

  judge(computer, user) {
    let strike = 0;
    let ball = 0;

    computer.map((number, index) => {
      if (number === user[index]) {
        strike += 1;
      } else {
        if (user.includes(number)) {
          ball += 1;
        }
      }
    });

    if (ball === 0 && strike === 0) return '낫싱';
    if (ball > 0 && strike === 0) return `${ball}볼`;
    if (strike > 0 && ball === 0) return `${strike}스트라이크`;
    if (ball > 0 && strike > 0) return `${ball}볼 ${strike}스트라이크`;
  }

  async game() {
    let judgeResult = '';
    const computerNumber = this.computerPick();
    while (judgeResult !== '3스트라이크') {
      const userPickValue = await this.view.userInput('숫자를 입력해주세요 : ');
      this.userPickValidation(userPickValue);
      const userNumber = userPickValue.split('').map((element) => +element);
      judgeResult = this.judge(computerNumber, userNumber);
      this.view.infoPrint(judgeResult);
    }
    this.view.infoPrint('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const userRestartValue = await this.view.userInput(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
    );
    this.userRestartValidation(userRestartValue);
    if (userRestartValue === '1') this.game();
    if (userRestartValue === '2') {
      this.view.infoPrint('숫자 야구 게임을 종료합니다.');
      return;
    }
  }
}

export default App;

const app = new App();
app.play();
