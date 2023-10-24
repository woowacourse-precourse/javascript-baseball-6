import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {

  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  //게임 실행
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.getComRandomNum();
    await this.getUserNum();
  }

  // com 3자리 서로다른 랜덤숫자뽑기
  getComRandomNum() {
    const com = [];
    while (com.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!com.includes(number)) {
        com.push(number);
      }
    }
    //생성자에 넣어주기
    this.computerNumber = [...com];
  }
  
  //유저 번호 입력
  async getUserNum() {
    const REGEX = /^[1-9]+$/;
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const setArr = [...new Set([...input])];

    //입력 조건 미충족
    if (input.length !== 3) throw new Error('[ERROR] 세자리 숫자를 입력해주세요.');
    if (!REGEX.test(input)) throw new Error('[ERROR] 1부터 9까지의 숫자를 입력해주세요.');
    if (input.length !== setArr.length) throw new Error('[ERROR] 서로 다른 숫자를 입력해주세요.');

    //입력받은 수 string -> arr
    this.userNumber = [...input].map(Number);
  }

  //결과
  async getResult() {
    const { computerNumber } = this;
    const { userNumber } = this;
    const result = { strike: 0, ball: 0 };
    
    userNumber.forEach((num, idx)=> {
      if(computerNumber[idx] === num) result.strike += 1;
      if(computerNumber[idx] !== num && computerNumber.includes(num)) result.ball += 1;
    })

    //결과 출력
    if (strike > 0 && ball > 0) Console.print(`${ball}볼 ${strike}스트라이크`);
    if (strike > 0 && ball === 0) Console.print(`${strike}스트라이크`);
    if (strike === 0 && ball > 0) Console.print(`${strike}스트라이크`);
    if (strike == 0 && ball == 0) Console.print('낫싱');
    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.restart();
    } else {
      this.getUserNum();
    }
  }

  //재시작
  async restart() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const input = await Console.readLineAsync();

    if (input === 1) await this.play();
    if (input === 2) Console.print('게임이 종료되었습니다.');
    if (input !== 1 && input !== 2) Console.print('[ERROR] 1과 2 중에 입력해주세요.');
  }
}

const app = new App();
app.play();

export default App;
