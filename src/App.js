// const MissionUtils = require('./MissionUtils');

// class App {
//   async play() {
// 	const game = new MissionUtils();
// 	game.start();
//   }
// }

// export default App;

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  printResult(strike, ball){
    if (strike == 0 && ball == 0) return "낫싱";
    else if (strike == 0) return  ball + "볼";
    else if (ball == 0) return strike + "스트라이크";
    else return  ball + "볼 " + strike + "스트라이크"
  }

  checkInput(input, answer) {
    let strike = 0;
    let ball = 0;
    let inputArr = input.split("").map(Number);

    answer = answer.map(Number);
    for (let i = 0; i < 3; i++) {
      if (inputArr[i] == answer[i])
        strike++;
      else if (answer.includes(inputArr[i]))
        ball++;
    }
    return [strike, ball]
  }

  setAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer
  }

  async gameRound() {
    let answer = this.setAnswer();
    while(true) {
      const inputNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      if(inputNum.length == 3) {
        const [strikeNum, ballNum] = this.checkInput(inputNum, answer);
        MissionUtils.Console.print(this.printResult(strikeNum, ballNum));
        if(strikeNum == 3) break;
      } else {
        console.error("숫자를 3개 입력해주세요.");
        throw new Error("[ERROR]")
      }
    }
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    const choice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    return choice
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")

    while(true) {
      const choice = await this.gameRound();

      if (choice == 2) break;
      else if (choice != 1 && choice != 2)
      {
        console.error("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
        throw new Error("[ERROR]")
      }
    }
  }
}

export default App;
