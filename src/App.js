class App {
  async play() {
    class NumberBaseballGame {
      constructor() {
        this.answer = this.makeRandomNumber();
      }
      // 상대방의 숫자 랜덤 생성
      makeRandomNumber() {
        const computer = [];
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }
        return computer;
      }
      // 입력한 값 확인
      inputNumber(guess) {
        if (
          guess.length === 3 &&
          guess.every((num) => typeof num === "number")
        ) {
          let strike = 0;
          let ball = 0;

          for (let i = 0; i < 3; i++) {
            if (guess[i] === this.answer[i]) {
              strike++;
            } else if (this.answer.includes(guess[i])) {
              ball++;
            }
          }

          return { strike, ball };
        } else {
          throw new Error("잘못된 숫자입니다.");
        }
      }

      play() {
        const game = new NumberBaseballGame();

        console.log("숫자 야구 게임을 시작합니다.");

        while (true) {
          const guessNumber = Console.readLineAsync("숫자를 입력해주세요 : ");

          const checkResult = game.inputNumber(guessNumber);

          if (checkResult.strike === 3) {
            Console.print(`${result.strike}스트라이크`);
            Console.print(`3개의 숫자를 모두 맞히셨습니다!`);
            Console.print(`게임 종료`);
            break;
          }
          if (checkResult.strike === 0 && checkResult.ball === 0) {
            Console.print("낫싱");
          } else {
            Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
          }
        }

        const choice = Console.readLineAsync(
          `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
        );

        if (choice === "1") {
          this.answer = game.makeRandomNumber();
          this.attempts = 0;
          this.play();
        }
      }
    }
  }
}

export default App;
