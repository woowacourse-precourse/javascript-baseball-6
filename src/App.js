import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.target; // 생성된 랜덤 숫자
    this.targetLength = 3; // 랜덤 숫자의 길이
    this.gameState = 0; // 0 - 시작 | 1 - 재시작 | 2 - 종료
    this.guess; // 사용자가 추측한 숫자

    this.strike; // 스트라이크 수
    this.ball; // 볼 수
    this.out; // out 여부
  }

  async play() {
    while (this.gameState != 2) {
      this.initGame();
      // Console.print(this.target); // 정답 출력
      while (true) {
        try {
          let flag = await this.runSingleGuess();
          if (!flag) throw new Error("[ERROR]");
        } catch (err) {
          throw err;
        }
        if (await this.endGame()) break;
      }
    }
    Console.print("게임 종료");
  }

  /*
    @initGame
      #1 랜덤 숫자를 생성한다
  */
  initGame() {
    // #1
    this.target = [];
    while (this.target.length < this.targetLength) {
      let number = Random.pickNumberInRange(1, 9);
      if (!this.target.includes(number)) this.target.push(number);
    }
    return;
  }

  /*
    @runSingleGuess
      #0 사용자의 한번의 guess에 대한 입력부터 출력이 이루어진다
      #1 입력 길이에 대한 예외를 처리한다
  */
  async runSingleGuess() {
    await this.getGuess();
    // #1
    try {
      if (this.guess.length > 3)
        throw new Error("[Error] 입력의 길이는 3 자리이여야 합니다.");
    } catch (err) {
      return false;
    }
    this.evalGuess();
    this.tellResult();
    return true;
  }

  /*
    @getGuess
      #0 비동기 처리가 필요하다
      #1 사용자로부터 입력을 받는다
  */
  async getGuess() {
    // #1
    try {
      this.guess = await Console.readLineAsync(
        "숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : "
      );
    } catch (e) {
      Console.print(e);
    }
    return;
  }

  /*
    @evalGuess
      #1 결과값을 초기화 한다
      #2 사용자의 입력을 평가한다
  */
  evalGuess() {
    // #1
    this.strike = 0;
    this.ball = 0;
    this.out = false;

    // #2
    let toNum;
    this.target.map((val, idx) => {
      toNum = parseInt(this.guess[idx]);
      if (val === toNum) this.strike++;
      else if (this.target.includes(toNum)) this.ball++;
    });

    if (this.strike + this.ball == 0) this.out = true;
  }

  /*
    @tellResult
      #1 입력결과를 평가한다
  */
  tellResult() {
    let res = "";
    if (this.out) res += "낫싱";
    else {
      if (this.ball > 0) res += `${this.ball}볼 `;
      if (this.strike > 0) res += `${this.strike}스트라이크`;
    }
    Console.print(res);
  }

  /*
    @endGame
      #1 정답을 맞추었는지 확인한다
      #2 정답 문구를 출력한다
      #3 게임을 종료하거나 다시 시작한다
  */
  async endGame() {
    // #1
    if (this.strike != 3) return false;

    // #2 #3
    try {
      this.gameState = await Console.readLineAsync(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n" +
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
    } catch (e) {
      Console.print(e);
    }
    return true;
  }
}

// const game = new App();
// game.play();

export default App;
