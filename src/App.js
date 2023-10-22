import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    function setNumbers() {
      try {
        const computer = [];
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }
        return computer;
      } catch (error) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    async function getInput() {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        if (
          input &&
          input.length === 3 &&
          !isNaN(Number(input[0])) &&
          !isNaN(Number(input[1])) &&
          !isNaN(Number(input[2])) &&
          input[0] != input[1] &&
          input[0] != input[2] &&
          input[1] != input[2] &&
          Number(input[0]) &&
          Number(input[1]) &&
          Number(input[2])
        ) {
          const inputarr = [];
          let idx = 0;
          while (inputarr.length < 3) {
            const number = input[idx];
            inputarr.push(Number(number));
            idx++;
          }
          return inputarr;
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
        const answer = await setNumbers();
        let correct = false;
        while (!correct) {
          let strike = 0;
          let ball = 0;
          try {
            const userinput = await getInput();
            for (let i = 0; i < 3; i++) {
              if (userinput[i] === answer[i]) {
                strike++;
              } else if (answer.includes(userinput[i])) {
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
            MissionUtils.Console.print(answer);
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
