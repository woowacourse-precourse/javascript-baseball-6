import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let gamestate = true;

    while (gamestate) {
      const computer = [];

      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      let score = [0, 0];
      let user = [];

      try {
        while (score[0] < 3) {
          const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요. : ");
          if (input.length !== 3 || isNaN(Number(input))) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
          } else {
            user = Array.from(input).map(Number);
          }

          score = [0, 0];
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (user[i] === computer[j]) {
                if (i === j) {
                  score[0]++;
                } else {
                  score[1]++;
                }
              }
            }
          }

          if (score[0] !== 0 && score[1] !== 0) {
            MissionUtils.Console.print(score[1] + "볼 " + score[0] + "스트라이크");
          } else {
            if (score[1] !== 0) {
              MissionUtils.Console.print(score[1] + "볼");
            } else if (score[0] !== 0) {
              MissionUtils.Console.print(score[0] + "스트라이크");
            } else {
              MissionUtils.Console.print("낫싱");
            }
          }
        }

        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하시려면 1, 종료하려면 2를 입력하세요.\n");
        if (input === "1") {
          gamestate = true;
        } else if (input === "2") {
          gamestate = false;
          MissionUtils.Console.print("게임 종료");
        } else {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      } catch (error) {
        console.error(error.message);
        gamestate = false;
        throw error;
      }
    }
  }
}

export default App;
