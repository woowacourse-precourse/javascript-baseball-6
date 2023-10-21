import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      await this.baseball();
      const input = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (input !== "1" && input !== "2") {
        throw new Error("[ERROR] 숫자 1 아니면 2를 입력하셔야 합니다.");
        // throw new Error("잘못 입력하셨습니다.");
      } else if (+input === 2) {
        return;
      }
    }
  }

  getComputer() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  async baseball() {
    const computer = this.getComputer();
    while (true) {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const input_array = input.split('')
      if (!/^\d{3}$/.test(input) || new Set(input_array).size !== 3) {
        // throw new Error("잘못 입력하셨습니다.");
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if (computer === input) {
        Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return;
      }

      let strike = 0;
      let ball = 0;

      input_array.forEach((v, i) => {
        if (computer[i] === v) {
          strike += 1;
        } else if (computer.includes(v)) {
          ball += 1;
        }
      });

      if (strike + ball === 0) {
        Console.print("낫싱");
      } else {
        let message = "";
        if (ball > 0) {
          message += `${ball}볼`;
        }

        if (strike > 0) {
          message += `${message?.length > 0 ? " ":""}${strike}스트라이크`;
        }

        Console.print(message);
      }
    }
  }
}

export default App;
