import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const computerNum = this.selectRandomNum();
    const playerNumStr = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const playerNum = [...playerNumStr].map(num => parseInt(num));
    
    const result = this.checkAnswer(computerNum, playerNum);
    Console.print(result);
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

  checkAnswer(computerNum, playerNum) {
    const result = {
      ball: 0,
      strike: 0
    };

    computerNum.forEach((computerNumElement, computerNumIndex) => {
      playerNum.forEach((playerNumElement, playerNumIndex) => {
        if (computerNumElement === playerNumElement) {
          if (computerNumIndex === playerNumIndex) {
            result.strike++;
          } else {
            result.ball++;
          }
        }
      })
    })

    return result;
  }
}

export default App;

const app = new App();
app.play();