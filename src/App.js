import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.strike = 0;
    this.ball = 0;
    this.computer = [];
  }

  setComputerNum() {
    this.computer = [];
    // 컴퓨터는 1부터 9까지 서로 다른 임의의 수 3개를 선택한다.
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }

    console.log('computer : ', this.computer);
  }

  print(){
    if (this.ball > 0 && this.strike === 0) MissionUtils.Console.print(`${this.ball}볼`);
    else if (this.ball > 0 && this.strike > 0) MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    else if (this.ball === 0 && this.strike > 0) MissionUtils.Console.print(`${this.strike}스트라이크`);
    else MissionUtils.Console.print(`낫싱`);
  }

  errorCheck(number) {
    if (isNaN(Number(number))) throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (number.length !== 3) throw new Error("[ERROR] 3자리 숫자를 입력해주세요.");
    if (number.includes(0)) throw new Error("[ERROR] 0은 입력할 수 없습니다.");
    if (number[0] === number[1] || number[1] === number[2] || number[2] === number[0]) throw new Error("[ERROR] 서로 다른 3개의 숫자를 입력해주세요.");
  }

  async play() {
    let gameNum = 0;
    let isEnd = false;

    // 컴퓨터 번호 다시 세팅
    this.setComputerNum();

    while(!isEnd) {

      this.strike = 0;
      this.ball = 0;
  
      const number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

      // 컴퓨터는 사용자가 입력한 수에 대한 결과를 낫싱과, 볼, 스트라이크 개수로 표시한다.
      this.num_list = [...number].map(v => +v);

      // 입력 확인
      this.errorCheck(number);

      this.computer.map((v, idx) => {
        // 다 같으면 스트라이크
        if (this.computer[idx] === this.num_list[idx]) {
          this.strike++;
        }
        // 들어는 있는데, 같은 자리가 아니라면, 볼
        else if (this.num_list.includes(v)) {
          this.ball++;
        }
      })

      // 출력
      this.print();
      if (this.strike === 3) {
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        gameNum = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        if (gameNum == 1) {
          isEnd = false;
          this.setComputerNum();
        }
        else if(gameNum == 2) isEnd = true;
      }

    } 
 
  }
}

const app = new App();
app.play();

export default App;
