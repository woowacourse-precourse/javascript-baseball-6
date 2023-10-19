import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/constants.js';
import Computer from './Computer.js';
import ValidateCheck from './ValidateCheck.js';

class BaseballGame {

  baseballNumber = [];
  userNumber = [];

  // 랜덤수 생성후 사용자에게서 숫자 입력받기 시작
  start() {
    const computer = new Computer();
    Console.print(MESSAGE.startMessage);

    this.baseballNumber = computer.randomGenerator();
    console.log(this.baseballNumber);

    this.inputUserNumber();
  };

  async inputUserNumber() {
    try {
      let numbers = await Console.readLineAsync(MESSAGE.inputUserNumber);
      this.userNumber = numbers.split('').map(Number)

      
      console.log(this.userNumber);

      //유효성 검사 하기
    } catch (error) {
      // reject 되는 경우
      console.log(error);
    }
  }
  



}

export default BaseballGame;
