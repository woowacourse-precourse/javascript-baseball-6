//ES Modules 방식으로 woowacourse-projects/javascript-mission-utils 모듈 사용
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 랜덤 넘버 생성
    let computer_random_array = [];
    while (computer_random_array.length < 3) {
      let random_number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer_random_array.includes(random_number)) {
        computer_random_array.push(random_number);
      }
    }
    let computer_random_number = computer_random_array.join("");

    // 숫자 비교13
    function compareNumbers(computer_random_number, human_input) {
      let strike_number = 0;
      let ball_number = 0;
      for (let i = 0; i < 3; i++) {
        if (computer_random_number.toString()[i] == human_input[i]) {
          strike_number++;
        } else {
          if (
            computer_random_number
              .toString()
              .includes(human_input.toString()[i])
          ) {
            ball_number++;
          }
        }
      }

      if (ball_number == 0 && strike_number == 0) {
        MissionUtils.Console.print("낫싱");
      } else if (ball_number == 0) {
        MissionUtils.Console.print(strike_number + "스트라이크");
      } else if (strike_number == 0) {
        MissionUtils.Console.print(ball_number + "볼");
      } else if (strike_number == 3) {
        MissionUtils.Console.print(
          "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
        );
      } else {
        MissionUtils.Console.print(
          ball_number + "볼 " + strike_number + "스트라이크"
        );
      }
    }

    // 입력값 예외처리
    function checkInput(human_input) {
      if (isNaN(human_input) == true) {
        return "[ERROR] 숫자가 아닙니다";
      } else if (human_input.length > 3) {
        return "[ERROR] 세자리만 입력하십시오!";
      } else if (human_input.length < 3) {
        return "[ERROR] 세자리를 입력하십시오!";
      }
    }

    //게임 실행함수
    async function baseballGame() {
      let gameContinue = true;
      while (gameContinue) {
        let user_input = "";

        try {
          user_input = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요:"
          );
        } catch (error) {
          MissionUtils.Console.print(error);
        }
        const error = checkInput(user_input);
        if (error) {
          // test 돌릴때 요거 자꾸 이상함.
          throw new Error(error);

          // MissionUtils.Console.print(error);
        } else {
          // MissionUtils.Console.print(
          //   "!!!!!!컴퓨터에서 생성한 넘버!!!!!!!" + computer_random_number
          // );

          compareNumbers(computer_random_number, user_input);
          if (computer_random_number == user_input) {
            const restartOrExit = await MissionUtils.Console.readLineAsync(
              "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
            );

            if (restartOrExit === "1") {
              computer_random_number =
                MissionUtils.Random.pickNumberInRange(1, 9) * 100 +
                MissionUtils.Random.pickNumberInRange(1, 9) * 10 +
                MissionUtils.Random.pickNumberInRange(1, 9);
              continue; // 게임 재시작
            } else if (restartOrExit === "2") {
              MissionUtils.Console.print("게임 종료");

              gameContinue = false; // 게임 종료
            }
          }
        }
      }
    }

    //게임 시작
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await baseballGame();
  }
}

const app = new App();
app.play();

export default App;
