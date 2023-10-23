import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const randomNum = this.createRandom();
    Console.print(randomNum);
    await this.inputNum(randomNum);
  }

  async confirmInput(userInput, randomNum) {
    if (isNaN(userInput)) {
      throw new Error("[ERROR] 숫자를 입력하세요");
    } else if (userInput.toString().length !== 3) {
      throw new Error(" [ERROR] 3자리 숫자를 입력하세요");
    } else if (userInput.toString().includes(0)) {
      throw new Error("[ERROR] 0이 아닌 숫자를 입력하세요");
    } else {
      const changeInput = (arg) => Number(arg);
      const compareInput = Array.from(String(userInput), changeInput); //Number type input을 string으로 바꿔서 배열로 전환하고 Number로 재변경
      this.compareNum(compareInput, randomNum);
    }
  }

  compareNum(compareInput, randomNum) {
    //userInput은 Number
    let ball = 0;
    let strike = 0;
    let result = "";

    for (let r = 0; r < randomNum.length; r++) {
      // 값 비교
      for (let i = 0; i < compareInput.length; i++) {
        if (randomNum[r] == compareInput[i]) {
          // 값이 같다면
          if (r == i) {
            // 같은 위치에 있다면
            strike++;
          } else {
            // 다른 위치에 있다면
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
    this.inputNum(randomNum); // 모두 맞을 때까지 다시 인풋 받기
  }

  gameEnd() {
    Console.print("3스트라이크");
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.gameRestart();
  }

  async gameRestart() {
    //다시 시작 or 종료
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const isRestart = await Console.readLineAsync("");

    //try {
    if (Number(isRestart) == 1) {
      const randomNum = this.createRandom();
      Console.print(randomNum);
      this.inputNum(randomNum);
    } else if (Number(isRestart) == 2) {
      return 0;
    } else {
      this.gameRestart();
    }
    //} catch (err) {
    //Console.print(err);
    //}
  }

  async inputNum(randomNum) {
    //사용자로부터 입력 받기

    //try {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    await this.confirmInput(Number(input), randomNum);
    //} catch (err) {
    //await Console.print(err);
    //
  }

  createRandom() {
    // 컴퓨터 랜덤 3자리 수 생성
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const start = new App();
start.play();

export default App;
