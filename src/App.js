import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.getComputerResult();
    await this.getPersonResult(computer);
  }

  async getPersonResult(computer) {
    let Input = await MissionUtils.Console.readLineAsync("숫자를 입력 해 주세요 : ");
    let userInput = [...Input].map(Number);

    if (userInput.length === 3) {
      MissionUtils.Console.print("숫자를 입력 해 주세요 : " + userInput);
      this.compareToComputer(userInput, computer);
    } else {
      MissionUtils.Console.print("숫자를 입력 해 주세요 : " + userInput);
      throw new Error("[ERROR] 세자리 숫자를 입력 해 주세요");
    }
  }

  getComputerResult() {
    const computer = [];
    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  compareToComputer(person, computer) { 
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < computer.length; i++) {
      if (computer[i] == person[i]) {
        strike++;
      }
      for (let j = 0; j < computer.length; j++) {
        if (computer[i] == person[j] && i != j) {
          ball++;
        }
      }
    }

    console.log('person :: ', person, ' c :', computer, strike, ball);

    if (strike == 0 && ball == 0) {
      MissionUtils.Console.print('낫싱');
      this.getPersonResult(computer); 
    }

    if (strike != 0 && ball == 0) {
      MissionUtils.Console.print(strike + '스트라이크');
      if (strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.reStartGame();
      }
    }

    if (strike === 0 && ball != 0) {
      MissionUtils.Console.print(ball + '볼');
      this.getPersonResult(computer); 
    }

    if (strike != 0 && ball != 0) {
      MissionUtils.Console.print(ball + '볼 ' + strike + '스트라이크');
      this.getPersonResult(computer); 
    }
  }

  reStartGame() {
    MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n")
      .then((input) => {
        if (input === '1') {
          this.play();
        } else if (input === '2') {
          MissionUtils.Console.print("게임 종료");
        } else {
          throw new Error("[ERROR] 숫자를 다시 입력하여 주십시오. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        }
      })
  }
}

export default App;
