import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() { // 게임 실행
    Console.print("숫자 야구 게임을 시작합니다. ");

    while ( 
      await this.startGame(this.getRandomNum())
    );
  }

  async startGame(answer) {}
  
  getRandomNum() { // 서로 다른 임의의 수 생성
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)){
        computer.push(number);
      }
    }
    return computer;
  }

  async getUserNum() {
    const input = await Console.readLineasync('숫자를 입력해주세요 : ');

    if (input.length !== 3) throw new Error('세 자리 숫자를 입력해주세요.');
    
  }
}

const app = new App();
Console.log(app.computer);
app.play();

export default App;
