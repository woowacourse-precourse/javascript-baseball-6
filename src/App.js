import { Console, Random } from "@woowacourse/mission-utils";

// 입력받는 숫자 : 0 포함되는 지 확인 / 숫자인지 확인 / 길이가 3인지 확인

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    // 게임 시작
    Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }

  async playGame() {
    // 게임 진행
    this.inputNum();
  }

  confirmInput(userInput, randomNum) {
    if (isNaN(userInput)) {
      throw "숫자를 입력하세요";
    } else if (userInput.toString().length !== 3) {
      throw "3자리 숫자를 입력하세요";
    } else if (userInput.toString().includes(0)) {
      throw "0이 아닌 숫자를 입력하세요";
    } else {
      const changeInput = (arg) => Number(arg);
      const compareInput = Array.from(String(userInput), changeInput); //Number type input을 string으로 바꿔서 배열로 전환하고 Number로 재변경
      this.compareNum(compareInput, randomNum);
      //Console.print(compareInput);
    }
  }

  compareNum(compareInput, randomNum) {
    //userInput은 Number
    let ball = 0;
    let strike = 0;
    let result = "dkdk";

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
    // Console.print(ball);
    //Console.print(strike);

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
  }

  gameEnd() {
    Console.print("3스트라이크");
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  async inputNum() {
    //사용자로부터 입력 받기
    const randomNum = this.createRandom();
    Console.print(randomNum);

    try {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.confirmInput(Number(input), randomNum);
    } catch (err) {
      Console.print(err);
      //this.inputNum(); 종료 기능?
    }
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
