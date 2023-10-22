const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, ERROR_MESSAGE } = require('./constants/Message');

class Control {
  static async askRestart(playCallback) {
    const userAnswer = await Console.readLineAsync(GAME_MESSAGE.GAME_RESTART);
    
    if (userAnswer === '1') {
      await playCallback();
    } else if (userAnswer === '2') {
      process.exit(); 
    } else {
      throw new Error(ERROR_MESSAGE.INVALID_CHOICE);
    }
  }
}

module.exports = Control;
