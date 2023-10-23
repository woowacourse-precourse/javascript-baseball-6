import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.infoPrint('숫자 야구 게임을 시작합니다.');
    this.game();
  }

  infoPrint(message) {
    MissionUtils.Console.print(message);
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

  async userInput(message) {
    const inputValue = await MissionUtils.Console.readLineAsync(message);
    return inputValue;
  }

  userPickValidation(value) {
    if (value.length !== 3) return false;

    const valueArr = [
      ...new Set(
        value
          .split('')
          .map((element) => +element)
          .filter((element) => !isNaN(element))
          .filter((element) => element > 0 && element < 10),
      ),
    ];
    if (valueArr.length !== 3) return false;
    if (valueArr.length === 3) return true;
  }

  userRestartValidation(value) {
    if (value === '1' || value === '2') {
      return true;
    } else {
      return false;
    }
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
      const userPickValue = await this.userInput('숫자를 입력해주세요 : ');
      const userPickValidationResult = this.userPickValidation(userPickValue);
      if (!userPickValidationResult)
        this.throwError('[ERROR] 서로 다른 숫자 3개를 입력해주세요.');
      const userNumber = userPickValue.split('').map((element) => +element);
      judgeResult = this.judge(computerNumber, userNumber);
      this.infoPrint(judgeResult);
    }
    this.infoPrint('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const userRestartValue = await this.userInput(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
    );
    const userRestartValidationResult =
      this.userRestartValidation(userRestartValue);
    if (!userRestartValidationResult)
      this.throwError('[ERROR] 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (userRestartValue === '1') this.game();
    if (userRestartValue === '2') return;
  }
}

export default App;

const app = new App();
app.play();
