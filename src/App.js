import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {

    Console.print("숫자 야구 게임을 시작합니다.");

    let computer = [];
    let gameChoice = 1;
    let input;

    while (true) {

      // 컴퓨터 값 추출
      if (gameChoice == 1) {
        computer = [];
        while (computer.length < 3) {
          let number = Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }
        gameChoice = 0;
      }
      // Console.print(`gamechoice = ${gameChoice}, computer = ${computer}`);

      // 값 입력
      Console.print("숫자를 입력해주세요 : ");
      input = [];
      input = await Console.readLineAsync();
      input = input.toString().split('').map(a => +a);
      Console.print(`input = ${input}`);
      if (input.length != 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      // Console.print(`input = ${input}`);



      // 값 비교
      let strike = 0;
      let ball = 0;
      for (let i = 0; i < 3; i++) {
        if (computer[i] == input[i]) strike += 1;
        else if (computer.includes(input[i])) ball += 1;
      }

      // 출력
      if (strike == 3) {
        Console.print("3스트라이크");
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

        gameChoice = await Console.readLineAsync();
        gameChoice = Number(gameChoice);
        Console.print(`gamechoice = ${gameChoice}`);

        if (gameChoice == 1) continue;
        if (gameChoice == 2) break;
      }

      if (strike + ball == 0) {
        Console.print("낫싱");
      } else {
        if (strike == 0) Console.print(`${ball}볼`);
        else if (ball == 0) Console.print(`${strike}스트라이크`);
        else Console.print(`${ball}볼 ${strike}스트라이크`);
      }

      continue;
    }

    return 0;
  }
}

export default App;