import { MissionUtils } from '@woowacourse/mission-utils';

const Message = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_MESSAGE: '숫자를 입력해주세요 : ',
  GAME_FINISH: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',

  INPUT_MESSAGE_ERROR: '[ERROR] 서로 다른 3자리 숫자를 입력해야 합니다.',
};

class App {
  computer = [];
  userInput = [];
  restart = '1';
  isAnswer = false;

  printStartMessage() {
    MissionUtils.Console.print(Message.START);
  }

  async getUserInput() {
    this.userInput = [];
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
      this.userInput = +input;
    } else {
      throw new Error(Message.INPUT_MESSAGE_ERROR);
    }

    if (input.length === 3 && Number.isInteger(+input)) {
      this.userInput = [...input];
      this.userInput = this.userInput.map((item) => +item);

      const userInputSet = new Set(this.userInput);
      if (userInputSet.size !== 3) {
        throw new Error(Message.INPUT_MESSAGE_ERROR);
      }
    } else {
      throw new Error(Message.INPUT_MESSAGE_ERROR);
    }
  }

  compareInput() {
    let strikeNum = 0;
    let ballNum = 0;
    this.userInput.forEach((item, index) => {
      if (this.computer[index] === item) {
        strikeNum += 1;
      } else if (this.computer.includes(item)) {
        ballNum += 1;
      }
    });

    if (strikeNum === 0 && ballNum === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (strikeNum === 0 && ballNum !== 0) {
      MissionUtils.Console.print(`${ballNum}볼`);
    } else if (ballNum === 0 && strikeNum !== 0) {
      MissionUtils.Console.print(`${strikeNum}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ballNum}볼 ${strikeNum}스트라이크`);
    }

    if (strikeNum === 3) {
      this.isAnswer = true;
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

    while (this.restart === '1') {
      this.isAnswer = false;
      this.pickComputerNumbers();
      console.log(this.computer);

      while (!this.isAnswer) {
        await this.getUserInput();
        this.compareInput();
      }

      MissionUtils.Console.print(Message.GAME_FINISH);
      MissionUtils.Console.print(Message.GAME_RESTART);
      this.restart = await MissionUtils.Console.readLineAsync('');
    }
  }
}

const app = new App();
app.play();

export default App;
