import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const computerNum = this.selectRandomNum();
    const playerNumStr = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const playerNum = [...playerNumStr].map(num => parseInt(num));
    
    const result = this.checkAnswer(computerNum, playerNum);
    this.printHint(result.ball, result.strike);
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

  printHint(ball, strike) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if(strike !== 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if(strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`); 
    }

  }
}

export default App;

const app = new App();
app.play();