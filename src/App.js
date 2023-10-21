import { Console, MissionUtils } from "@woowacourse/mission-utils";

class GameConsole {
  static print(message) {
    Console.print(message);
  }

  static async readLineAsync(text) {
    return await Console.readLineAsync(text);
  }
}

class Cpu {
  cpuPickNum() {
    const cpuNumber = [];

    while (cpuNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!new Set(cpuNumber).has(number)) {
        cpuNumber.push(number);
      }
    }
    console.log(cpuNumber);
    return cpuNumber;
  }
}

class User {
  async userPickNum() {
    const userNum = await GameConsole.readLineAsync("숫자를 입력해주세요 : ");

    this.checkUserNum(userNum);
    const numArr = userNum.split("");

    const userNumArr = numArr.map(function (e) {
      return Number(e);
    });

    return userNumArr;
  }

  checkUserNum(user) {
    const setUserNum = new Set(user);
    if (user.length !== 3) {
      throw new Error("[ERROR] 3자리의 숫자를 입력해주세요.");
    }
    if (parseInt(user, 10) !== Number(user)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (setUserNum.has("0")) {
      throw new Error("[ERROR] 1~9까지의 숫자만 입력해주세요");
    }
  }
}

class ReturnGameResult {
  getStrikeBallCount(cpu, user) {
    return {
      strike: this.countStrike(cpu, user),
      ball: this.countBall(cpu, user),
    };
  }

  countStrike(cpu, user) {
    let strike = 0;
    for (let i = 0; i < cpu.length; i++) {
      if (cpu[i] === user[i]) {
        strike++;
      }
    }
    return strike;
  }

  countBall(cpu, user) {
    let ball = 0;
    let cpuSet = new Set(cpu);
    for (let i = 0; i < cpu.length; i++) {
      if (cpu[i] !== user[i] && cpuSet.has(user[i])) {
        ball++;
      }
    }
    return ball;
  }
}

class PrintGameMessage {
  compareResult(strike, ball) {
    let message;
    if (strike > 0 && ball > 0) {
      message = `${ball}볼 ${strike}스트라이크`;
    } else if (ball > 0) {
      message = `${ball}볼`;
    } else if (strike > 0) {
      message = `${strike}스트라이크`;
    } else {
      message = "낫싱";
    }
    GameConsole.print(message);
  }
}

class NewGameController {
  constructor(app) {
    this.app = app;
  }

  async startOrExitGame() {
    const userInput = await GameConsole.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
    );

    if (userInput === "1") {
      await this.app.play();
    } else if (userInput === "2") {
      return false;
    } else {
      throw new Error("[ERROR] 1, 2중에서 입력해주세요.");
    }
  }
}

class App {
  constructor() {
    this.cpu = new Cpu();
    this.user = new User();
    this.returnGameResult = new ReturnGameResult();
    this.printGameMessage = new PrintGameMessage();
    this.newGameController = new NewGameController(this);
  }
  async play() {
    GameConsole.print("숫자 야구 게임을 시작합니다.");
    const cpuNum = this.cpu.cpuPickNum();
    let result;
    do {
      const userNum = await this.user.userPickNum();
      result = this.returnGameResult.getStrikeBallCount(cpuNum, userNum);
      this.printGameMessage.compareResult(result.strike, result.ball);
    } while (result.strike !== 3);

    GameConsole.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    await this.newGameController.startOrExitGame();
  }
}

const app = new App();

app.play();

export default App;
