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
    const randomNum = this.createRandom();
    Console.print(randomNum);
    this.inputNum();
  }

  confirmInput(userInput) {
    if (isNaN(userInput)) {
      throw "숫자를 입력하세요";
    } else if (userInput.toString().length !== 3) {
      throw "3자리 숫자를 입력하세요";
    } else if (userInput.toString().includes(0)) {
      throw "0이 아닌 숫자를 입력하세요";
    }
  }

  async inputNum() {
    //사용자로부터 입력 받기
    try {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.confirmInput(Number(input));
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
