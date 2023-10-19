import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { LOGS } from './logs.js';

class App {
  constructor(){
    this.start = true;
    this.computer; // [number]
  }

  async play() {
    Console.print(LOGS.GAME_START);

    while(true){
      if(this.start) this.initialization();
      const USER_INPUT = await this.userInput();
      if(USER_INPUT === null) continue;
      const [STRIKE,BALL] = this.checkInput(USER_INPUT);
      const SCORE = this.returnScore(STRIKE,BALL)
      Console.print(SCORE);
      // 스트라이크가 3이 아니면 continue
      if(STRIKE!==3) continue;
      // 3이면 아래 진행
      Console.print(LOGS.GAME_END);
      Console.print(LOGS.RESTART_PROMPT)
      const IS_RESTART = await this.checkRestart();
      // restart 하지 않겠다고 하면 while문 종료
      if(!IS_RESTART) break;
      // this.start true로 초기화 하여 initialization 재실행
      this.start = true
    }
  }

  initialization () {
    const computer = [];
    while(computer.length < 3){
      const NUMBER = MissionUtils.Random.pickNumberInRange(1,9)
      if (!computer.includes(NUMBER)) computer.push(NUMBER);
    }
    this.computer = computer;
    this.start = false;
    return ;
  }

  async userInput(){
    const input = await Console.readLineAsync(LOGS.INPUT_PROMPT)
    // 유효성 테스트 통과하면 배열 생성
    if(this.validInput(input)) return input.split('').map(item=>parseInt(item))
    // 못하면 에러 발생
    throw new Error(LOGS.INVALID_INPUT);
  }

  validInput(input){
    // 아래 check들 정규표현식 처리
    // 서로 다른 3자리의 숫자
    const REGEX = /^(?!.*(.).*\1)^[1-9]{3}$/;
    return REGEX.test(input);
  }

  async checkRestart() {
    const INPUT = await Console.readLineAsync(LOGS.INPUT_PROMPT2)
    // input이 1 혹은 2인지 검사
    if(/^[12]$/.test(INPUT)) return INPUT==='1'
    // 아니면 에러 발생
    throw new Error(LOGS.INVALID_INPUT);
  }
  
  checkInput(input){
    const STRIKE = this.checkStrike(input);
    // 볼 = 같은 수 - 스트라이크
    const BALL = this.checkSame(input) - STRIKE;
    return [STRIKE,BALL]
  }

  // 같은 수 갯수 구하기
  checkSame(input) {
    return input.filter(item=> this.computer.includes(item)).length;
  }

  // 스트라이크 수 구하기
  checkStrike(input){
    return input.filter((item,idx) => item === this.computer[idx]).length;
  }

  returnScore(strike,ball){
    const messages = [];
    if (ball) messages.push(`${ball}볼`);
    if (strike) messages.push(`${strike}스트라이크`);
    // 메세지 배열이 비어있으면 낫싱 리턴
    return messages.length ? messages.join(' ') : LOGS.NOTHING;
  }
}

export default App;