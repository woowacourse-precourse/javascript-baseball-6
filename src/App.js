import { Random, Console } from "@woowacourse/mission-utils";

export class App {
  getComputerNo() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let willPlay = true;
    while (willPlay) {
      // 1게임
      let computer = this.getComputerNo();
      //console.log(computer); // 없어져야하는줄

      while (true) {
        // 맞히기시도
        let strike = 0;
        let ball = 0;

        let numbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
        numbers = numbers.split("");
        if (numbers.length != 3)
          throw new Error("[ERROR] 입력 숫자의 길이는 3이어야 합니다.");
        if (new Set(numbers).size != 3)
          throw new Error(
            "[ERROR] 입력 숫자는 서로 다른 수로 이루어져 있어야합니다."
          );

        for (let i = 0; i < computer.length; i++) {
          const number = Number(numbers[i]);
          if (computer[i] == number) strike++;
          else if (computer.includes(number)) ball++;
        }

        Console.print(
          `${ball ? ball + "볼 " : ""}${strike ? strike + "스트라이크" : ""}`
        );
        if (ball === 0 && strike === 0) Console.print("낫싱");
        if (strike === 3) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const select = Number(
            await Console.readLineAsync(
              "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
            )
          );
          if (select === 2) willPlay = false;
          break;
        }
      }
    }
  }
}

export default App;
