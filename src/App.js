
import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  constructor(){
    this.start = true // boolean
    this.computer; // [number]
  }

  async play() {
    this.initialization();
    if(this.start) {
      Console.print('숫자 야구 게임을 시작합니다.');
      this.start=false;
    }
    while(1){
      const res = await this.user_input();
      console.log(res)
      
    }
    // while
    console.log(this.computer)
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
    console.log(input.length)
    console.log(this.check_input(input))
    if(!(this.check_number(input) && this.check_input_length(input) && this.check_duplicate(input))) return 0;
    console.log('통과')
  }

  check_input(input){
    // 아래 check들 정규표현식 처리
    const regex = /^(?!.*(.).*\1)^[1-9]{3}$/;
    return regex.test(input);
  }

  check_number(input){
    // 1~9가 아닌 문자 찾기
    // 숫자로만 이뤄져있으면 true
    // 아니면 false
    return /^[1-9]+$/.test(input)
  }

  check_duplicate(input){
    // 중복입력 체크
    return new Set(input).size === 3;
  }

  check_input_length(input){
    // 입력길이가 3이면 true
    // 아니면 false
    console.log(input.length)
    return input.length === 3;
  }

  check_strike(){

  }
  check_ball() {

  }
  check_nothing() {

  }
}

export default App;

