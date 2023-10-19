import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.target;
    this.targetLength = 3;
    this.gameState = 0; // 0 - 시작 | 1 - 재시작 | 2 - 종료
    this.guess;

    this.strike;
    this.ball;
    this.out;
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

  initGame() {
    // 컴퓨터 내 랜덤 숫자 생성
    this.target = [];
    while (this.target.length < this.targetLength) {
      let number = Random.pickNumberInRange(1, 9);
      if (!this.target.includes(number)) this.target.push(number);
    }

    // 첫 게임일 경우 시작 멘트 발생
    // if (this.gameState == 0) Console.print("숫자 야구 게임을 시작합니다.");
    return;
  }

  async runSingleGuess() {
    await this.getGuess();
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

  async getGuess() {
    // 사용자 입력 받기, 비동기 처리 필요
    try {
      this.guess = await Console.readLineAsync(
        "숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : "
      );
    } catch (e) {
      Console.print(e);
    }
    return;
  }

  evalGuess() {
    // 결과값 초기화
    this.strike = 0;
    this.ball = 0;
    this.out = false;

    // 사용자 입력 평가
    let toNum;
    this.target.map((val, idx) => {
      toNum = parseInt(this.guess[idx]);
      if (val === toNum) this.strike++;
      else if (this.target.includes(toNum)) this.ball++;
    });

    if (this.strike + this.ball == 0) this.out = true;
  }

  tellResult() {
    let res = "";
    if (this.out) res += "낫싱";
    else {
      if (this.ball > 0) res += `${this.ball}볼 `;
      if (this.strike > 0) res += `${this.strike}스트라이크`;
    }
    Console.print(res);
  }

  async endGame() {
    Console.print(this.strike);
    if (this.strike != 3) return false; // 계속 질문하기
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
