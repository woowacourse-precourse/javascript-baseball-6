import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let is_game_playing = true;
    while (is_game_playing) {
      const COMPUTER = [];

      while (COMPUTER.length < 3) {
        const NUMBER = Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(NUMBER)) {
          COMPUTER.push(NUMBER);
        }
      }

      // 게임종료까지 반복
      let gameOver = false;
      while (!gameOver) {
        const NUMBER = await Console.readLineAsync("숫자를 입력해주세요 : ");

        // 사용자 입력 숫자의 길이 확인
        if (NUMBER.length !== 3) {
          throw new Error("[ERROR] 세자리 숫자만 사용 가능합니다.");
        }
        const USER = NUMBER.split("").map(Number);

        // 사용자 입력 숫자 중 중복된 값 확인
        for (let i = 0; i < USER.length; i++) {
          // 사용자 입력 숫자 중 숫자 외 값 확인
          if (Number.isNaN(USER[i])) {
            throw new Error("[ERROR] 숫자만 입력 가능합니다.");
          }

          for (let j = i + 1; j < USER.length; j++) {
            if (USER[i] === USER[j]) {
              throw new Error("[ERROR] 중복되지 않는 숫자만 입력 가능합니다.");
            }
          }
        }

        let ballCount = 0;
        let strikeCount = 0;

        // 상대방 입력 숫자와 사용자 입력 숫자 비교
        for (let i = 0; i < USER.length; i++) {
          for (let j = 0; j < COMPUTER.length; j++) {
            if (i === j && USER[i] === COMPUTER[j]) {
              strikeCount++;
            } else if (USER[i] === COMPUTER[j]) {
              ballCount++;
            }
          }
        }

        // 비교 결과 출력
        if (ballCount > 0 && strikeCount > 0) {
          Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
        } else if (ballCount > 0) {
          Console.print(`${ballCount}볼`);
        } else if (strikeCount > 0 && strikeCount < 3) {
          Console.print(`${strikeCount}스트라이크`);
        } else if (ballCount === 0 && strikeCount === 0) {
          Console.print("낫싱");
        } else if (strikeCount === 3) {
          Console.print(`3스트라이크`);
          Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
          gameOver = true;
        }
      }

      // 게임 종료 후 재시작 여부 확인
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      const WANNA_NEW_GAME = await Console.readLineAsync("");

      if (+WANNA_NEW_GAME !== 1 && +WANNA_NEW_GAME !== 2) {
        throw new Error("[ERROR] 1,2 이외의 값은 입력 불가합니다.");
      }

      if (+WANNA_NEW_GAME === 2) {
        is_game_playing = false;
      }
    }
  }
}

export default App;
