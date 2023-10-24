import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    function setNumbers() {
      try {
        const COMPUTER = [];
        while (COMPUTER.length < 3) {
          const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!COMPUTER.includes(NUMBER)) {
            COMPUTER.push(NUMBER);
          }
        }
        return COMPUTER;
      } catch (error) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    async function getInput() {
      try {
        const INPUT = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        if (
          INPUT &&
          INPUT.length === 3 &&
          !isNaN(Number(INPUT[0])) &&
          !isNaN(Number(INPUT[1])) &&
          !isNaN(Number(INPUT[2])) &&
          INPUT[0] != INPUT[1] &&
          INPUT[0] != INPUT[2] &&
          INPUT[1] != INPUT[2] &&
          Number(INPUT[0]) &&
          Number(INPUT[1]) &&
          Number(INPUT[2])
        ) {
          const INPUTARR = [];
          let idx = 0;
          while (INPUTARR.length < 3) {
            const INPUTNUM = INPUT[idx];
            INPUTARR.push(Number(INPUTNUM));
            idx++;
          }
          return INPUTARR;
        } else {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      } catch (error) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      let finish = false;
      while (!finish) {
        const ANSWER = await setNumbers();
        let correct = false;
        while (!correct) {
          let strike = 0;
          let ball = 0;
          try {
            const USERINPUT = await getInput();
            for (let i = 0; i < 3; i++) {
              if (USERINPUT[i] === ANSWER[i]) {
                strike++;
              } else if (ANSWER.includes(USERINPUT[i])) {
                ball++;
              }
            }

            let result = "";
            if (!ball && !strike) {
              result = "낫싱";
            } else {
              if (ball) {
                result = `${ball}볼`;
              }
              if (strike) {
                if (result) {
                  result = result + " " + `${strike}스트라이크`;
                } else {
                  result = `${strike}스트라이크`;
                }
                if (strike === 3) {
                  correct = true;
                }
              }
            }
            MissionUtils.Console.print(result);
          } catch (error) {
            throw error;
          }
        }
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        let retry = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (retry === "2") {
          finish = true;
        } else if (retry === "1") {
          // retry
        } else {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
