import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const computer = this.#getComputerChoice();
      while (true) {
        const user = await Console.readLineAsync("숫자를 입력해주세요 : ");
        if (!this.#checkUser(user)) {
          throw new Error("[ERROR]");
        }
        if (this.#checkAnswer(computer, user)) {
          break;
        }
      }
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      const retry = await Console.readLineAsync("");
      if (retry !== "1") {
        break;
      }
    }
  }

  #getComputerChoice() {
    const computer = [];
    while (computer.length < 3) {
      const number = +Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  #checkAnswer(computer, user) {
    if (computer === user) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }

    const a = [];
    const b = [];

    for (let i = 0; i < 3; i++) {
      a[i] = computer.includes(user[i]);
      b[i] = user[i] === computer[i];
    }
    if (a.filter((e) => e === false).length === 3) {
      Console.print("낫싱");
    } else {
      let c = 0;
      for (let i = 0; i < 3; i++) {
        if (a[i] && !b[i]) {
          c++;
        }
      }
      const d = b.filter((e) => e === true).length;
      const result =
        (c > 0 ? `${c}볼` : "") +
        (c > 0 && d > 0 ? " " : "") +
        (d > 0 ? `${d}스트라이크` : "");
      Console.print(result);
    }
    return false;
  }

  #checkUser(user) {
    return typeof user === "string" && user.length === 3 && !isNaN(user);
  }
}

export default App;
