import { MissionUtils } from '@woowacourse/mission-utils';

const Message = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_MESSAGE: '숫자를 입력해주세요 : ',

  INPUT_MESSAGE_ERROR: '3자리 숫자를 입력해야 합니다.',
};

class App {
  computer = [];
  userInput;

  printStartMessage() {
    MissionUtils.Console.print(Message.START);
  }

  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync(
      Message.INPUT_MESSAGE
    );

    if (!Number.isInteger(+input)) {
      throw new Error(Message.INPUT_MESSAGE_ERROR);
    } else if (
      input.length === 3 &&
      input[0] !== '0' &&
      input[1] !== '0' &&
      input[2] !== '0'
    ) {
      this.userInput = input;
    } else {
      throw new Error(Message.INPUT_MESSAGE_ERROR);
    }

    if (input.length === 3 && Number.isInteger(+input)) {
      this.userInput = input;
    } else {
      throw new Error(Message.INPUT_MESSAGE_ERROR);
    }
  }

  pickComputerNumbers() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    this.printStartMessage();
    this.pickComputerNumbers();
    await this.getUserInput();
    console.log(this.computer, this.userInput);
  }
}

const app = new App();
app.play();

export default App;
