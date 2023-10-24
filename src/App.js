import { Random, Console } from '@woowacourse/mission-utils';
export const ErrorMessage = Object.freeze({
  oneOrTwo: '[ERROR] 1 또는 2만 입력 가능합니다.',
  onlyNumbers: '[ERROR] 숫자만 입력 가능합니다.',
  threeDigits: '[ERROR] 세 자리 수여야 합니다.',
  oneToNine: '[ERROR] 각 자리 수는 1~9 사이의 수여야 합니다.',
  differentDigits: '[ERROR] 각 자리 수는 모두 다른 수여야 합니다.',
});
class App {
  #computer;
  async play() {
    this.init();
    console.log(this.computer);
    this.playBaseball(this.computer);
  }

  init() {
    this.computer = this.getRandomComputerNumber();
  }

  async playBaseball(computer) {
    const user = await this.getUserNumber();
    const score = this.getScore(computer, user);
    const result = this.printResult(score);
    this.restartGame(result);
  }

  getRandomComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  async getUserNumber() {
    const user = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const checkedNum = this.checkDifferentThreeDigits(user.trim());
    const parsedNum = checkedNum.map((v) => parseInt(v));
    return parsedNum;
  }

  checkDifferentThreeDigits(user) {
    if (isNaN(user)) throw new Error(ErrorMessage.oneOrTwo);
    const array = user.split('');
    if (array.length > 3 || array.length < 3)
      throw new Error(ErrorMessage.threeDigits);
    const dupCheck = array.filter((v, i) => user.indexOf(v) === i);
    if (dupCheck.includes('0')) throw new Error(ErrorMessage.oneToNine);
    if (dupCheck.length < 3) throw new Error(ErrorMessage.differentDigits);
    return dupCheck;
  }

  getScore(computer, user) {
    const result = { strike: 0, ball: 0 };
    computer.forEach((v, i) => {
      if (v === user[i]) return result.strike++;
      if (v !== user[i] && user.includes(v)) return result.ball++;
    });
    return result;
  }

  printResult(score) {
    const { strike, ball } = score;
    if (strike && ball) Console.print(`${strike}스트라이크 ${ball}볼`);
    if (strike && !ball) Console.print(`${strike}스트라이크`);
    if (!strike && ball) Console.print(`${ball}볼`);
    if (!strike && !ball) Console.print('낫싱');
    if (strike === 3) return true;
    else return false;
  }

  restartGame(result) {
    if (result) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
      this.endGame();
    } else {
      this.playBaseball(this.computer);
    }
  }

  async endGame() {
    const num = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    this.checkEndNum(num);
  }

  checkEndNum(num) {
    const result = parseInt(num);
    if (result === 1) {
      this.play();
    } else if (result === 2) {
      return;
    } else {
      throw new Error(ErrorMessage.oneOrTwo);
    }
  }
}

const app = new App();
app.play();

export default App;
