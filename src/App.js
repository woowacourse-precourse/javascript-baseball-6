import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const computerNum = this.selectRandomNum();
    Console.print(computerNum);
    const playerNumStr = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const playerNum = [...playerInputNum].map(num => parseInt(num));
     
  }

  selectRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  inputPlayerNum() {
    
  }
}

export default App;

const app = new App();
app.play();