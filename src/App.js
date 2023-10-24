import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    
    while (true) {
      const secretNumber = this.generateRandomNumber();
      let attempts = 0;

      while (true) {
        const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
        const guess = input.split("").map(Number);

        if (guess.length !== 3 || guess.some(isNaN)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 게임 종료");
        }

        const [strikes, balls] = this.calculateScore(secretNumber, guess);

        if (strikes === 3) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }

        let feedback = "";
        if (strikes > 0) {
          feedback += `${strikes}스트라이크 `;
        }
        if (balls > 0) {
          feedback += `${balls}볼`;
        }
        if (strikes === 0 && balls === 0) {
          feedback += "낫싱";
        } 
        Console.print(feedback);

        attempts++;
      }

      const playAgain = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      if (playAgain === "2") {
        return;
      } else if (playAgain !== "1") {
        throw new Error("[ERROR] 1 또는 2를 입력하세요. 게임 종료");
      }
    }
  }



  generateRandomNumber() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    for (let i = 0; i < 3; i++) {
      const digit = Random.pickNumberInRange(1, numbers.length) - 1;
      result.push(numbers.splice(digit, 1)[0]);
    }
    return result;
  }

  calculateScore(secret, guess) {
    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < 3; i++) {
      if (secret[i] === guess[i]) {
        strikes++;
      } else if (secret.includes(guess[i])) {
        balls++;
      } else {
        continue;
      }
    }
    return [strikes, balls];
  }
}
export default App;
