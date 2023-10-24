import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.strike = 0;
    this.ball = 0;
    // 컴퓨터는 1부터 9까지 서로 다른 임의의 수 3개를 선택한다.
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    let gameNum = 0;
    let isEnd = false;
    while(!isEnd) {
      this.strike = 0;
      this.ball = 0;
      try {
        const number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        // 컴퓨터는 사용자가 입력한 수에 대한 결과를 낫싱과, 볼, 스트라이크 개수로 표시한다.
        this.num_list = [...number].map(v => +v);
        console.log('computer : ', this.computer);
        console.log('num_list : ', this.num_list);
  
        this.computer.map((v, idx) => {
          // 다 같으면 스트라이크
          // console.log('here!', this.computer[idx], this.num_list[idx])
          if (this.computer[idx] === this.num_list[idx]) {
            this.strike++;
            // console.log('스트라이크');
          }
          // 들어는 있는데, 같은 자리가 아니라면, 볼
          else if (this.num_list.includes(v)) {
            this.ball++;
            // console.log('볼')
          }
          // 아무것도 아닌 경우
          else {
            // console.log('낫싱');
          }
        })
  
        // 출력
        if (this.ball > 0 && this.strike === 0) {
          MissionUtils.Console.print(`${this.ball}볼`);
        } else if (this.ball > 0 && this.strike > 0) {
          MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
        } else if (this.ball === 0 && this.strike > 0) {
          MissionUtils.Console.print(`${this.strike}스트라이크`);
          MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
          gameNum = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
          if (gameNum == 1) isEnd = false;
          else if(gameNum == 2) isEnd = true;
          console.log('isEnd?: ', isEnd, 'gameNum', gameNum);
        } else {
          MissionUtils.Console.print(`낫싱`);
        }
      } catch (error) {
        // reject 되는 경우
        console.log('error:', error);
      }
    }
 
  }
}

const app = new App();
console.log(app.computer);
app.play();

export default App;
