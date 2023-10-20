import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './utils/constants.js';
import Computer from './Computer.js';
import ValidateCheck from './ValidateCheck.js';

class BaseballGame {

  baseballNumber = [];
  userNumber = [];
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
    const strikeBallCount = this.validateCheck.countCheck(this.baseballNumber,this.userNumber);
    Console.print(strikeBallCount);
    this.strikeBall(strikeBallCount[0], strikeBallCount[1]);
  };

  //스트라이크와 볼 개수 출력
  strikeBall(strike, ball) {
    let answer = '';
    
    if (ball > 0) answer += `${ball}볼 `;
    if (strike > 0) answer += `${strike}스트라이크`;
    if (ball + strike === 0) answer = `낫싱`;
    console.log(answer)

    if (strike === 3) {
      // 정답 출력 후 재시작 묻기 루틴
    }
    
    this.inputUserNumber();
    
  }





}

export default BaseballGame;
