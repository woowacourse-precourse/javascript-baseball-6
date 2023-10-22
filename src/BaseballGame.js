const { Console } = require('@woowacourse/mission-utils');
const { checkValidNumberDuringGame } = require('./Validation');

class UserInputHandler {
  async handleUserInputDuringGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const userNumber = await Console.readLineAsync('숫자를 입력하세요: ');

    const userInput = userNumber.join('');
    checkValidNumberDuringGame(userInput);
  }
}

module.exports = UserInputHandler;
