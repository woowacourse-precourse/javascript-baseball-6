import { Console, Random } from "@woowacourse/mission-utils";

const getUserGuess = async () => {
  const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");

  if (!/^\d{3}$/.test(userInput)) {
    throw new Error("[ERROR] 서로 다른 3자리의 숫자만 입력할 수 있습니다.");
  }
  return userInput;
};

class App {
  #computer;

  generateComputerNumbers() {
    this.#computer = [];

    while (this.#computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(number)) {
        this.#computer.push(number);
      }
    }
    return this.#computer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let continuePlaying = true;

    while (continuePlaying) {
      const computer = this.generateComputerNumbers();

      let gameOver = false;

      while (!gameOver) {
        const userInput = await getUserGuess();

        const userNumbers = userInput.split("").map(Number);
        let strikes = 0;
        let balls = 0;

        for (let i = 0; i < 3; i += 1) {
          if (userNumbers[i] === computer[i]) {
            strikes += 1;
          } else if (computer.includes(userNumbers[i])) {
            balls += 1;
          }
        }

        if (strikes === 3) {
          Console.print(
            `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
          );
          gameOver = true;
        } else if (strikes > 0 || balls > 0) {
          Console.print(
            `${balls >= 1 ? `${balls}볼` : ""} ${
              strikes >= 1 ? `${strikes}스트라이크` : ""
            }`,
          );
        } else {
          Console.print("낫싱");
        }
      }

      const choice = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      );

      Console.print(`choice : ${choice}`);

      if (!/^[12]$/.test(choice)) {
        throw new Error("[ERROR] 재시작 여부는 1 또는 2를 입력해야 합니다.");
      }

      if (choice === "2") {
        continuePlaying = false;
        Console.print("게임 종료");
      }
    }
  }
}

export default App;
