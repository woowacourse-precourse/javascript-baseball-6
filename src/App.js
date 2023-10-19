import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  constructor(){
    this.computer; // [number]
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.initialization();

    while(true){
      const userInput = await this.user_input();
      if(userInput === null) continue;
      const result = this.check_input(userInput);
      Console.print(result);
      if(result==='3스트라이크'){
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
        const restart = await this.restart_input();
        if(restart){
          this.initialization();
        }
        break
      }
    }
  }

  initialization () {
    const computer = [];
    while(computer.length < 3){
      const number = MissionUtils.Random.pickNumberInRange(1,9)
      if (!computer.includes(number)) computer.push(number);
    }
    this.computer = computer;
  }

  async user_input(){
    const input = await Console.readLineAsync('숫자를 입력해주세요')
    if(this.valid_input(input)){
      return input.split('').map(item=>parseInt(item))
    } 
    throw new Error("[ERROR]");
  }
  valid_input(input){
    // 아래 check들 정규표현식 처리
    // 서로다른 3자리의 숫자
    const regex = /^(?!.*(.).*\1)^[1-9]{3}$/;
    return regex.test(input);
  }

  async restart_input() {
    const input = await Console.readLineAsync('')
    if(/^[12]$/.test(input)) {
      return input==='1'
    } 
    throw new Error("[ERROR]");
  }
  
  check_input(input){
    const strike = this.check_strike(input);
    const ball = this.check_same(input) - strike;
    
    let result_str = '';
    if(ball) result_str += `${ball}볼 `;
    if(strike) result_str += `${strike}스트라이크`
    if(ball===0 && strike===0) result_str += '낫싱'

    return result_str
  }

  check_same(input) {
    let same=0;
    for(let i=0;i<3;i++){
      if(this.computer.includes(input[i])) same++;
    }
    return same;
  }

  check_strike(input){
    let strike=0;
    for(let i=0;i<3;i++){
      if(this.computer[i] === input[i]) strike++;
    }
    return strike;
  }
  
}

export default App;