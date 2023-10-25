import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.strike = 0;
    this.ball = 0;
    this.computerNum = [];
    this.userNum = [];
  }

  setComputerNum() {
    this.computerNum = [];
    while (this.computerNum.length < 3) {
      const INPUT = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNum.includes(INPUT)) {
        this.computerNum.push(INPUT);
      }
    }
  }

  print(){
    if (this.ball > 0 && this.strike === 0) MissionUtils.Console.print(`${this.ball}볼`);
    else if (this.ball > 0 && this.strike > 0) MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    else if (this.ball === 0 && this.strike > 0) MissionUtils.Console.print(`${this.strike}스트라이크`);
    else MissionUtils.Console.print(`낫싱`);
  }

  inputStartErrorCheck() {
    if (isNaN(Number(this.userNum))) throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (this.userNum.length !== 3) throw new Error("[ERROR] 3자리 숫자를 입력해주세요.");
    if (this.userNum.includes(0)) throw new Error("[ERROR] 0은 입력할 수 없습니다.");
    if (this.userNum[0] === this.userNum[1] || this.userNum[1] === this.userNum[2] || this.userNum[2] === this.userNum[0]) throw new Error("[ERROR] 서로 다른 3개의 숫자를 입력해주세요.");
  }

  inputEndErrorCheck(input) {
    if (input != 1 && input != 2) throw new Error("[ERROR] 1 또는 2만 입력할 수 있습니다.");
  }

  async play() {
    let gameNum = 0;
    let isEnd = false;

    // 컴퓨터 번호 다시 세팅
    this.setComputerNum();

    while(!isEnd) {

      this.strike = 0;
      this.ball = 0;
  
      this.userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

      // 입력 확인
      this.inputStartErrorCheck();

      // 스트라이크, 볼 확인
      this.computerNum.map((v, idx) => {
        if (this.computerNum[idx] == this.userNum[idx]) this.strike++;
        else if (this.userNum.includes(v)) this.ball++;
      })

      // 출력
      this.print();

      // 게임 종료 확인
      if (this.strike === 3) {
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        gameNum = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        this.inputEndErrorCheck(gameNum);
        
        if (gameNum == 1) this.setComputerNum();
        else if(gameNum == 2) isEnd = true;
      }
    } 

  }
}

const app = new App();
app.play();

export default App;
