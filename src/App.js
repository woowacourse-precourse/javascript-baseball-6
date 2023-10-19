import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let MATCH = true;

    while (MATCH) {
      const COMPUTER = [];
      while (COMPUTER.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(number)) {
          COMPUTER.push(number);
        }
      }

      const COMPUTER_NUMBER = COMPUTER.join("");
      let PLAYER_NUMBER = "";

      while (COMPUTER_NUMBER !== PLAYER_NUMBER) {
        PLAYER_NUMBER = await Console.readLineAsync(`숫자를 입력해주세요 : `);

        if (/^(?![0-9]{3}$)/.test(PLAYER_NUMBER)) {
          throw new Error("[ERROR]");
        }

        if (/(\d).*\1/.test(PLAYER_NUMBER)) {
          throw new Error("[ERROR]");
        }

        const HINT = [0, 0];
        let HINT_ANSWER = "";
        for (let i = 0; i < PLAYER_NUMBER.length; i++) {
          if (COMPUTER_NUMBER[i] === PLAYER_NUMBER[i]) {
            HINT[1]++;
          } else if (COMPUTER_NUMBER.includes(PLAYER_NUMBER[i])) {
            HINT[0]++;
          }
        }
        if (HINT[0] === 0 && HINT[1] === 0) {
          HINT_ANSWER = "낫싱";
        } else {
          HINT_ANSWER = `${HINT[0] === 0 ? "" : HINT[0] + "볼 "}${
            HINT[1] === 0 ? "" : HINT[1] + "스트라이크"
          }`;
        }

        Console.print(HINT_ANSWER);

        if (COMPUTER_NUMBER === PLAYER_NUMBER) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

          const RETRY = await Console.readLineAsync(
            `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
          );
          if (RETRY === "1") {
            MATCH = true;
          } else if (RETRY === "2") {
            MATCH = false;
          } else {
            throw new Error("[ERROR]");
          }
        }
      }
    }
  }
}

export default App;
