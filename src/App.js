import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { INPUT_LENGTH, MAX_NUMBER, MIN_NUMBER, STRIKE_END_POINTS } from './lib/constants.js';
import { INPUT_REGEX1, INPUT_REGEX2 } from './lib/reg.js';
import { LOGS } from './lib/logs.js';

class App {
  constructor(){
    this.isStart = true; // 시작 여부 : boolean
    this.computer = []; // 정답 배열 : [number]
  }

  // 게임 시작 메서드
  async play() {
    Console.print(LOGS.GAME_START);
    while(true){
      if(this.isStart) this.initialization();
      const USER_INPUT = await this.userInput();
      const [STRIKE,BALL] = this.checkInput(USER_INPUT);
      const SCORE = this.returnScore(STRIKE,BALL)
      Console.print(SCORE);
      // 스트라이크가 3이 아니면 continue
      if(STRIKE!==STRIKE_END_POINTS) continue;
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

  // 게임 초기화
  initialization () {
    const computer = [];
    while(computer.length < INPUT_LENGTH){
      const NUMBER = MissionUtils.Random.pickNumberInRange(MIN_NUMBER,MAX_NUMBER)
      if (!computer.includes(NUMBER)) computer.push(NUMBER);
    }
    this.computer = computer;
    this.isStart = false;
    return ;
  }

  // 유저 입력
  async userInput(){
    const input = await Console.readLineAsync(LOGS.INPUT_PROMPT)
    // 서로 다른 3자리의 숫자 정규식 정의
    // 유효성 테스트 통과하면 배열 생성
    if(INPUT_REGEX1.test(input)) return input.split('').map(item=>parseInt(item))
    // 아니면 에러 발생
    throw new Error(LOGS.INVALID_INPUT1);
  }


  // 재시작 여부 묻기
  async checkRestart() {
    const INPUT = await Console.readLineAsync(LOGS.INPUT_PROMPT2)
    // input이 1 혹은 2 정규식
    // 유효성 테스트 통과하면 1인지 boolean 반환
    if(INPUT_REGEX2.test(INPUT)) return INPUT==='1'
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