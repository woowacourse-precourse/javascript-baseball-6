import { Console, Random } from "@woowacourse/mission-utils";


class App {
playerInput;
randomnum;

  //정답 난수 생성
  setAnswer () {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
     }
    return answer;
   }

  //사용자 값 받기
  async getInput() {
    try {
      this.playerInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    } catch (error) {
    }
    this.checkValue(this.playerInput);
  }
  

  //사용자 값 유효성 체크
  checkValue(playerInput) {
    const inputToSet = new Set(playerInput.split('').map(Number));
    if (isNaN(playerInput)) throw new Error('숫자만 입력해주세요.');
    if (playerInput.includes(' ')) throw new Error('공백 없이 입력해주세요.');
    if (playerInput.length !== 3) throw new Error ('3자리 수로 입력해주세요.');
    if ([...inputToSet].length !== 3) throw new Error ('중복되지 않는 3자리의 수로 입력해주세요.');
    return this.showHint(playerInput, this.randomnum);
  }

  //스트라이크, 볼 개수 체크
  showHint(playerInput, randomnum) {
    
    let s = 0, b = 0;
    playerInput.split('').forEach((e,idx) => {
      if((randomnum).indexOf(Number(e)) === idx) s++;
      else if(randomnum.includes(Number(e))) b++;
    })
    return this.showResult(s,b);
  }
  
  //정답공개
  showResult(s,b) {
    if (s === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다!');
      Console.print('게임 종료');
      return this.getIntention();
      }
    if (s === 0 && b === 0) {
      Console.print('낫싱');
      return this.play();
    }
    if (s !== 0 || b !== 0) {
      Console.print(`${s}스트라이크 ${b}볼`);
      return this.play();
    }
  }

  //재시작 질문
  getIntention() {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (decision) => {
      if (decision === '1') {
        return this.reStart();
      } else if (decision === '2') {
        Console.print('게임종료');
      } else {
        return this.getIntention();
      }
    })
  }

  //재시작
  reStart() {
    this.randomnum = this.setAnswer();
    this.play();
  }

  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.')
    this.randomnum = this.setAnswer();
  }

  async play() {
    this.getInput()
  }
}

export default App;
