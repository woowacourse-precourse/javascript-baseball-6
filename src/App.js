import * as MissionUtils from '@woowacourse/mission-utils';
const { Console, Random } = MissionUtils;

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }

  async gameStart(){
    await this.setComputer();
  }

  // 컴퓨터 숫자 생성
  async setComputer(){
    const NUMBERS = [];
    
    while(NUMBERS.length < 3){
      let num = Random.pickNumberInRange(1, 9);
      if(!NUMBERS.includes(`${num}`)){
        NUMBERS.push(`${num}`);
      }
    };

    this.#computer = NUMBERS;
  }

  // 사용자와 컴퓨터의 값 비교
  async compareAnswer(){
    const USER_ANSWER = await this.userAnswer();
    let strike = 0
    let ball = 0

    USER_ANSWER.split('').map((num, i) => {
      if(num === this.#computer[i]){
        strike++
      }else if(this.#computer.includes(num)){
        ball++
      }
    })
    
    if(strike !== 3){
      await this.giveHint(strike, ball)
      await this.compareAnswer()
    }else if(strike === 3){
      Console.print("3스트라이크")
      await this.restartOrEnd()
    }
    
  }

  // 사용자 입력값 받기
  async userAnswer(){
    const USER_ANSWER = await Console.readLineAsync('숫자를 입력해주세요 : ');
    await this.validateAnswer(USER_ANSWER)

    return USER_ANSWER
  }
  
    // 3가지 예외 처리
  async validateAnswer(answer){
    const NUMBERS = Random.pickUniqueNumbersInRange(1, 9, 9).toString();
    const ANSWER = answer.split('');

    ANSWER.map((num) => {
      if(!NUMBERS.includes(num)){
        throw new Error("[ERROR] 입력값이 숫자가 아닙니다.");
      }
    })

    if(ANSWER.length !== 3){
      throw new Error("[ERROR] 입력값이 3자리가 아닙니다.");
    }

    if(ANSWER[0] === ANSWER[1] || ANSWER[1] === ANSWER[2] || ANSWER[2] === ANSWER[0]){
      throw new Error("[ERROR] 중복된 값이 입력되었습니다.");
    }

  }

  // 정답이 아닐시 제공할 힌트
  async giveHint(strike, ball){

    if(strike === 0 && ball === 0){
      Console.print("낫싱");
    }else if(strike !== 0 && ball === 0){
      Console.print(`${strike}스트라이트`);
    }else if(strike === 0 && ball !== 0){
      Console.print(`${ball}볼`);
    }else{
      Console.print(`${strike}스트라이크 ${ball}볼`);
    }
  }

  // 게임 종료시 재시작 또는 종료 선택
  async restartOrEnd(){
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const SELETED = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.print(SELETED);
    if(SELETED === '1'){
      await this.gameStart();
    }else if(SELETED === '2'){
      return;
    }
  }
}

export default App;
