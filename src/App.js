import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameStart();
  }

  async gameStart() {
    const randomNum = this.createRandom();
    await this.inputNum(randomNum);
  }

  createRandom() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async inputNum(randomNum) {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.confirmInput(Number(input), randomNum);
  }

  confirmInput(userInput, randomNum) {
    Console.print([userInput]);
    if (isNaN(userInput)) {
      throw new Error("[ERROR] 숫자가 아닙니다.");
    } else if (userInput.toString().length !== 3) {
      throw new Error(" [ERROR] 3자리 숫자가 아닙니다.");
    } else if (userInput.toString().includes(0)) {
      throw new Error("[ERROR] 0이 포함되어 있습니다.");
    } else {
      const changeInput = (arg) => Number(arg);
      const compareInput = Array.from(String(userInput), changeInput);
      this.compareNum(compareInput, randomNum);
    }
  }

  compareNum(compareInput, randomNum) {
    let ball = 0;
    let strike = 0;
    let result = "";

    for (let r = 0; r < randomNum.length; r++) {
      for (let i = 0; i < compareInput.length; i++) {
        if (randomNum[r] == compareInput[i]) {
          if (r == i) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }

    if (ball == 0 && strike == 0) {
      result = "낫싱";
    } else if (ball != 0 && strike != 0) {
      result = `${ball}볼 ${strike}스트라이크`;
    } else if (ball != 0 && strike == 0) {
      result = `${ball}볼`;
    } else if (ball == 0 && strike != 0) {
      if (strike == 3) {
        return this.gameEnd();
      } else {
        result = `${strike}스트라이크`;
      }
    }
    Console.print(result);
    this.inputNum(randomNum);
  }

  gameEnd() {
    Console.print("3스트라이크");
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.gameRestart();
  }

  async gameRestart() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const isRestart = await Console.readLineAsync("");

    if (Number(isRestart) == 1) {
      this.gameStart();
    } else if (Number(isRestart) == 2) {
      return 0;
    } else {
      this.gameRestart();
    }
  }
}

//const start = new App();
//start.play();

export default App;
