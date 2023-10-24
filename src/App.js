import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  //게임 실행
  async play() {
    this.getComRandomNum();
    await this.getUserNum();
  }

  // com 3자리 서로다른 랜덤숫자뽑기
  getComRandomNum() {
    const com = [];
    while (com.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!com.includes(number)) {
        com.push(number);
      }
    }
    //생성자에 넣어주기
    this.computerNumber = [...com];
  }
  
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
}


export default App;
