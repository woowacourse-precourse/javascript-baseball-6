import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    const computer = this.getRandomComputerNumber();
    const user = await this.getUserNumber();
    console.log(computer, user);
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
    if (isNaN(user)) throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    const checkedNum = this.checkDifferentThreeDigits(user);
    const parsedNum = checkedNum.map((v) => parseInt(v));
    return parsedNum;
  }

  checkDifferentThreeDigits(user) {
    const array = user.split('');
    if (array.length > 3) throw new Error('[ERROR] 세 자리 수여야 합니다.');
    const dupCheck = array.filter((v, i) => user.indexOf(v) === i);
    if (dupCheck.length < 3)
      throw new Error('[ERROR] 각 자리 수는 모두 다른 수여야 합니다.');
    return dupCheck;
  }
}

const app = new App();
app.play();

export default App;
