import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './utils/constants.js';
import Computer from './Computer.js';
import ValidateCheck from './ValidateCheck.js';

class BaseballGame {

  baseballNumber = [];
  userNumber = [];
  strikeBallCount = [];
  validateCheck;

  constructor() {
    this.validateCheck = new ValidateCheck();
  };

  // 랜덤수 생성후 사용자에게서 숫자 입력받기 시작
  start() {
    const computer = new Computer();
    Console.print(MESSAGE.startMessage);

    this.baseballNumber = computer.randomGenerator();
    Console.print(this.baseballNumber);

    this.inputUserNumber();
  };

  // 사용자 숫자 입력받기
  async inputUserNumber() {
    try {
      let numbers = await Console.readLineAsync(MESSAGE.inputUserNumber);
      this.userNumber = this.validateCheck.inputCheck(numbers);
      Console.print(this.userNumber);
      this.countResult();
    } catch (error) {
      Console.print(error);
    };
  };
  
  // 스트라이크와 볼 개수 계산
  countResult() {
    this.strikeBallCount = this.validateCheck.countCheck(this.baseballNumber,this.userNumber);
    Console.print(this.strikeBallCount);
  };




}

export default BaseballGame;
