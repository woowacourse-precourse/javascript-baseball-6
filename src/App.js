// 게임 시작
const app = new App();
app.play();


class App {
  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    
    let playAgain = true;

    while (playAgain) {
      // 랜덤한 3자리 숫자 생성
      const SECRET_NUMBER = this.generateRandomNumber();

      while (true) {
        try {
          const userInput = Console.readLineAsync("숫자를 입력해주세요 : ");
          if (!this.isValidInput(userInput)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
          }

    generateRandomNumber() {
        const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let randomDigits = [];

        while (randomDigits.length < 3) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        const randomDigit = digits.splice(randomIndex, 1)[0];
      randomDigits.push(randomDigit);
    }

    return randomDigits.join('');
  }

  isValidInput(input) {
    return /^[1-9]{3}$/.test(input) && new Set(input).size === 3;
  }

          const result = this.checkGuess(userInput, SECRET_NUMBER);
          Console.print(result);
          if (result === "3스트라이크") {
            console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            break;
          }
        } catch (error) {
          console.log(error.message);
          console.log("[ERROR] 게임을 종료합니다.");
          return;
        }
      }

      // 게임 재시작 여부 확인
      const choice = Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (choice === "2") {
        playAgain = false;
        console.log("게임을 종료합니다.");
      }
    }
  }


  checkGuess(guess, secret) {
    let strike = 0;
    let ball = 0;
    let nothing = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] === secret[i]) {
        strike++;
      } else if (secret.includes(guess[i])) {
        ball++;
      } else {
        nothing++;
      }
    }

    let result = "";
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }
    if (ball > 0) {
      result += (result === "") ? `${ball}볼` : ` ${ball}볼`;
    }
    if (nothing === 3) {
      result = "낫싱";
    }

    return result;
  }
}

class Random {
  static pickNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class Console {
  static readLineAsync(prompt) {
    return new Promise((resolve) => {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question(prompt, (input) => {
        readline.close();
        resolve(input);
      });
    });
  }

  static print(message) {
    console.log(message);
  }
}
