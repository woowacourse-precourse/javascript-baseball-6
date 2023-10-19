const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');
const Computer = require('./Computer');

class BaseballGame {

  baseballNumber = [];

  // 랜덤수 생성후 사용자에게서 숫자 입력받기 시작
  start() {
    const computer = new Computer();
    Console.print(MESSAGE.startMessage);
    
    this.baseballNumber = computer.randomGenerator();
    Console.print(this.baseballNumber);
  };

  
}

module.exports = BaseballGame;
