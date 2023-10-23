import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    const computer = this.getRandomComputerNumber();
    const user = await this.getUserNumber();
    console.log(computer, user);
    const result = this.calculator(computer, user);
    console.log(result);
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
    if (isNaN(user)) throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    const array = user.split('');
    if (array.length > 3 || array.length < 3)
      throw new Error('[ERROR] 세 자리 수여야 합니다.');
    const dupCheck = array.filter((v, i) => user.indexOf(v) === i);
    if (dupCheck.length < 3)
      throw new Error('[ERROR] 각 자리 수는 모두 다른 수여야 합니다.');
    return dupCheck;
  }

  calculator(computer, user) {
    const result = { strike: 0, ball: 0 };
    computer.forEach((v, i) => {
      if (v === user[i]) return result.strike++;
      if (v !== user[i] && user.includes(v)) return result.ball++;
    });
    return result;
  }
}

const app = new App();
app.play();

export default App;
