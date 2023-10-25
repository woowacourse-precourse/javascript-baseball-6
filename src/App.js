import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 랜덤으로 3자리 숫자를 생성
    function getRandomNumber() {
      const computer = new Set();
      while (computer.size < 3) {
        computer.add(Random.pickNumberInRange(1, 9));
      }
      return [...computer];
    }

    // 숫자를 입력
    async function inputNumber() {
      const input = await Console.readLineAsync();
      return input;
    }

    // 사용자가 입력한 숫자가 잘못된 형식인지 검사
    function checkInput(input) {
      if (
        isNaN(input) ||
        input.includes("0") ||
        input.length !== 3 ||
        input[0] == input[1] ||
        input[0] == input[2] ||
        input[1] == input[2]
      ) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    // 사용자가 입력한 숫자와 컴퓨터의 숫자를 비교
    function compareNumber(input, computer, hint) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (input[i] == computer[j]) {
            if (i == j) hint.strike_cnt++;
            else hint.ball_cnt++;
          }
        }
      }
    }

    // 입력한 숫자에 대한 결과를 출력
    async function printResult(hint) {
      if (hint.ball_cnt === 0 && hint.strike_cnt === 0) Console.print("낫싱");
      else {
        Console.print(
          hint.strike_cnt === 0
            ? `${hint.ball_cnt}볼`
            : hint.ball_cnt == 0
            ? `${hint.strike_cnt}스트라이크`
            : `${hint.ball_cnt}볼 ${hint.strike_cnt}스트라이크`
        );
      }
    }

    // 게임이 종료된 경우를 처리
    async function playAgain() {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      game_state = await Console.readLineAsync();
      if (game_state !== "1" && game_state !== "2")
        throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
      if (game_state === "1") return true;
      else return false;
    }

    // 게임 진행
    let game_state = "playing";
    let computer = getRandomNumber();
    Console.print("숫자 야구 게임을 시작합니다.");
    while (game_state === "playing") {
      const hint = { ball_cnt: 0, strike_cnt: 0 };
      Console.print("숫자를 입력해주세요 : ");
      const input = await inputNumber();
      checkInput(input);
      compareNumber(input, computer, hint);
      printResult(hint);
      if (hint.strike_cnt === 3) {
        if (await playAgain()) {
          game_state = "playing";
          computer = getRandomNumber();
        } else break;
      }
    }
  }
}

export default App;
