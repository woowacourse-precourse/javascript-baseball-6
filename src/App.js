import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { LOGS } from './logs.js';

class App {
  constructor(){
    this.isStart = true;
    this.computer = []; // [number]
  }

  async play() {
    Console.print(LOGS.GAME_START);

    while(true){
      if(this.isStart) this.initialization();
      const USER_INPUT = await this.userInput();
      const [STRIKE,BALL] = this.checkInput(USER_INPUT);
      const SCORE = this.returnScore(STRIKE,BALL)
      Console.print(SCORE);
      // 스트라이크가 3이 아니면 continue
      if(STRIKE!==3) continue;
      Console.print(LOGS.GAME_END);
      Console.print(LOGS.RESTART_PROMPT)
      // 재시작 여부 묻기
      const IS_RESTART = await this.checkRestart();
      // restart 하지 않겠다고 하면 while문 종료
      if(!IS_RESTART) break;
      // 재시작 : this.isStart true로 초기화 하여 initialization 재실행
      this.isStart = true
    }
  }

  initialization () {
    const computer = [];
    while(computer.length < 3){
      const NUMBER = MissionUtils.Random.pickNumberInRange(1,9)
      if (!computer.includes(NUMBER)) computer.push(NUMBER);
    }
    this.computer = computer;
    this.isStart = false;
    return ;
  }

  async userInput(){
    const input = await Console.readLineAsync(LOGS.INPUT_PROMPT)
    // 서로 다른 3자리의 숫자 정규식
    const REGEX = /^(?!.*(.).*\1)^[1-9]{3}$/;
    // 유효성 테스트 통과하면 배열 생성
    if(REGEX.test(input)) return input.split('').map(item=>parseInt(item))
    // 아니면 에러 발생
    throw new Error(LOGS.INVALID_INPUT1);
  }


  // 재시작 여부 묻기
  async checkRestart() {
    const INPUT = await Console.readLineAsync(LOGS.INPUT_PROMPT2)
    // input이 1 혹은 2 정규식
    const REGEX = /^[12]$/
    // 유효성 테스트 통과하면 1인지 boolean 반환
    if(REGEX.test(INPUT)) return INPUT==='1'
    // 아니면 에러 발생
    throw new Error(LOGS.INVALID_INPUT2);
  }
  
  // 입력값 처리
  checkInput(input){
    const USER_INPUT = input;
    const SAME = USER_INPUT.filter(item=> this.computer.includes(item)).length;
    const STRIKE = USER_INPUT.filter((item,idx) => item === this.computer[idx]).length;
    // 볼 = 같은 수 - 스트라이크
    const BALL = SAME - STRIKE;
    return [STRIKE,BALL]
  }

  // 채점후 메세지 반환
  returnScore(strike,ball){
    const messages = [];
    if (ball) messages.push(`${ball}볼`);
    if (strike) messages.push(`${strike}스트라이크`);
    // 메세지 배열이 비어있으면 낫싱 리턴
    return messages.length ? messages.join(' ') : LOGS.NOTHING;
  }
}

export default App;