import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  constructor(){
    this.start = true
    this.computer; // [number]
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while(true){
      if(this.start) this.initialization();
      const USER_INPUT = await this.userInput();
      if(USER_INPUT === null) continue;
      const [STRIKE,BALL] = this.checkInput(USER_INPUT);
      const MESSAGE = this.returnMessage(STRIKE,BALL)
      Console.print(MESSAGE);
      // 스트라이크가 3이 아니면 continue
      if(STRIKE!==3) continue;
      // 3이면 아래 진행
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
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
    const input = await Console.readLineAsync('숫자를 입력해주세요')
    // 유효성 테스트 통과하면 배열 생성
    if(this.validInput(input)) return input.split('').map(item=>parseInt(item))
    // 못하면 에러 발생
    throw new Error("[ERROR]");
  }

  validInput(input){
    // 아래 check들 정규표현식 처리
    // 서로 다른 3자리의 숫자
    const REGEX = /^(?!.*(.).*\1)^[1-9]{3}$/;
    return REGEX.test(input);
  }

  async checkRestart() {
    const INPUT = await Console.readLineAsync('')
    // input이 1 혹은 2인지 검사
    if(/^[12]$/.test(INPUT)) return INPUT==='1'
    // 아니면 에러 발생
    throw new Error("[ERROR]");
  }
  
  checkInput(input){
    const STRIKE = this.checkStrike(input);
    // 볼 = 같은 수 - 스트라이크
    const BALL = this.checkSame(input) - STRIKE;
    return [STRIKE,BALL]
  }

  returnMessage(strike,ball){
    const messages = [];
    if (ball) messages.push(`${ball}볼`);
    if (strike) messages.push(`${strike}스트라이크`);
    // 메세지 배열이 비어있으면 낫싱 리턴
    return messages.length ? messages.join(' ') : '낫싱';
  }

  // 같은 수 갯수 구하기
  checkSame(input) {
    return input.filter(item=> this.computer.includes(item)).length;
  }

  // 스트라이크 수 구하기
  checkStrike(input){
    return input.filter((item,idx) => item === this.computer[idx]).length;
  }
}

export default App;