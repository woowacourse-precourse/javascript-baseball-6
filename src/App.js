import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  constructor(){
    this.start = true
    this.computer; // [number]
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while(true){
      if(this.start){
        this.initialization();
      }
      const USER_INPUT = await this.userInput();
      if(USER_INPUT === null) continue;
      const [STRIKE,BALL] = this.checkInput(USER_INPUT);
      const MESSAGE = this.returnMessage(STRIKE,BALL)
      Console.print(MESSAGE);
      if(STRIKE===3){
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
        const IS_RESTART = await this.checkRestart();
        if(!IS_RESTART) break;
        this.start = true
      }
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
    if(this.validInput(input)) return input.split('').map(item=>parseInt(item))
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
    if(/^[12]$/.test(INPUT)) return INPUT==='1'
    throw new Error("[ERROR]");
  }
  
  checkInput(input){
    const STRIKE = this.checkStrike(input);
    // 같은 수 - 스트라이크 = 볼
    const BALL = this.checkSame(input) - STRIKE;

    return [STRIKE,BALL]
  }

  returnMessage(strike,ball){
    const messages = [];
    if (ball) messages.push(`${ball}볼`);
    if (strike) messages.push(`${strike}스트라이크`);
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