import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.infoPrint('숫자 야구 게임을 시작합니다.');
    const computerNumber = this.computerPick();
    const userPickValue = await this.userInput('숫자를 입력해주세요 : ');
    const userPickValidationResult = this.userPickValidation(userPickValue);
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
}

export default App;

const app = new App();
app.play();
