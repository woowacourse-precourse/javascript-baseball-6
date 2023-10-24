import * as MissionUtils from '@woowacourse/mission-utils';
const { Console, Random } = MissionUtils;

class App {

  #computer

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputer();

    return this.compareAnswer();
  }

  // 컴퓨터 숫자 생성
  async setComputer(){
    const NUMBERS = [];
    
    while(NUMBERS.length < 3){
      let num = Random.pickNumberInRange(1, 9);
      if(!NUMBERS.includes(num)){
        NUMBERS.push(num);
      }
    };

    this.#computer = NUMBERS;

    return;
  }

  // 사용자 입력값 받기
  async userAnswer(){
    const INPUT_ANSWER = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const TURN_INTO_NUMBER = INPUT_ANSWER.split('').map(Number);
    await this.validateAnswer(TURN_INTO_NUMBER);

    return TURN_INTO_NUMBER;
  }
  
    // 3가지 예외 처리
  async validateAnswer(answer){
    const NUMBERS = Random.pickUniqueNumbersInRange(1, 9, 9);
    
    answer.map((num) => {
      if(!NUMBERS.includes(num)){
        throw new Error("[ERROR] 입력값이 숫자가 아닙니다.");
      }
    })

    if(answer.length !== 3){
      throw new Error("[ERROR] 입력값이 3자리가 아닙니다.");
    }

    if(answer[0] === answer[1] || answer[1] === answer[2] || answer[2] === answer[0]){
      throw new Error("[ERROR] 중복된 값이 입력되었습니다.");
    }

    return;
  }

  // 사용자와 컴퓨터의 값 비교
  async compareAnswer(){
    const USER_ANSWER = await this.userAnswer();
    let strike = 0
    let ball = 0

    USER_ANSWER.map((num, i) => {
      if(num === this.#computer[i]){
        strike++
      }else if(this.#computer.includes(num)){
        ball++
      }
    })

    this.giveHint(strike, ball)

    if(strike !== 3){
      return this.compareAnswer();
    }else if(strike === 3){
      return this.restartOrEnd();
    }
    
  }

  // 정답이 아닐시 제공할 힌트
  async giveHint(strike, ball){

    if(strike === 0 && ball === 0){
      Console.print("낫싱");
    }else if(strike !== 0 && ball === 0){
      Console.print(`${strike}스트라이크`);
    }else if(strike === 0 && ball !== 0){
      Console.print(`${ball}볼`);
    }else{
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    
    return;
  }

  // 게임 종료시 재시작 또는 종료 선택
  async restartOrEnd(){
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

    const SELETED = await Console.readLineAsync('');
    if(SELETED === '1'){
      this.setComputer();
      return this.compareAnswer();
    }else if(SELETED === '2'){
      Console.print("게임 종료")
      return;
    }else{
      throw new Error("[ERROR] 입력된 값이 1 또는 2가 아닙니다.")
    }
  }
}

const app = new App()
app.play()

export default App;
