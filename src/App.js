
import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  constructor(){
    this.start = true // boolean
    this.computer; // [number]
  }

  async play() {
    if(this.start) {
      Console.print('숫자 야구 게임을 시작합니다.');
      this.start=false;
    }

    this.initialization();

    while(true){
      const userInput = await this.user_input();
      if(userInput === null) continue;
      const result = this.check_input(userInput);
      Console.print(result);
      if(result==='3스트라이크'){
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
      }
    }
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
    whi
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
    } else{
      Console.print('올바르지 않은 입력')
      return null
    }
  }

  async restart_input() {
    while(true){
      const input = await Console.readLineAsync('숫자를 입력해주세요')
      if(/^[12]$/.test(input)){
        
      }
    }
    
  }

  valid_input(input){
    // 아래 check들 정규표현식 처리
    const regex = /^(?!.*(.).*\1)^[1-9]{3}$/;
    return regex.test(input);
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
    console.log("same",same)
    return same;
  }

  check_strike(input){
    let strike=0;
    for(let i=0;i<3;i++){
      if(this.computer[i] === input[i]) strike++;
    }
    console.log("strike",strike)
    return strike;
  }
  
}

export default App;

