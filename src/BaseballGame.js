const { Console } = require('@woowacourse/mission-utils');
const { checkValidNumber } = require('./Validation');
const Computer = require('./Computer');
const { getHintToUser } = require('./Hint');

class BaseballGame {
  constructor() {
    this.computer = new Computer();
  }

  startGame() {
    this.getUserInput();
  }

  getUserInput() {
    Console.readLineAsync('숫자를 입력해주세요 : ', (input) => {
      this.handleUserInputDuringGame(input);
    });
  }

  recommendRestart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {
        this.handleUserInputEndGame(input);
      },
    );
  }

  handleUserInputDuringGame(input) {
    if (!checkValidNumber(input)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    const hintMessage = getHintToUser(this.computer.computerNumber, input);
    Console.print(hintMessage);

    if (hintMessage === '3스트라이크') {
      this.recommendRestart();
      return;
    }
    this.getUserInput();
  }

  handleUserInputEndGame(input) {
    const correctInputDigits = ['1', '2'];

    if (!correctInputDigits.includes(input)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    // TODO: 주석 삭제 필요
    // eslint-disable-next-line default-case
    switch (input) {
      case '1':
        this.restartGame();
        break;
      case '2':
        Console.close();
        break;
    }
  }

  restartGame() {
    this.computer.generateNewRandomNumber();
    this.startGame();
  }
}

module.exports = BaseballGame;
