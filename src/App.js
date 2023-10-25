import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");

    // 사용자 입력받는 함수
    async function getAnswer() {
      const answer = await MissionUtils.Console.readLineAsync(
        "서로 다른 3자리의 수 입력 : "
      );
      const answerList = answer.split("").map(Number);

      if (answerList.length !== 3) {
        throw new Error("[ERROR]: 3자리의 수를 입력해주세요");
      } else if (answerList.some((element) => isNaN(element))) {
        throw new Error("[ERROR]: 문자는 포함하지 마세요");
      } else if (
        (answerList[0] === answerList[1]) |
        (answerList[1] === answerList[2]) |
        (answerList[2] === answerList[0])
      ) {
        throw new Error("[ERROR]: 각 자리의 숫자는 서로 달라야 합니다");
      } else {
        return answerList;
      }
    }
    try {
      while (true) {
        // 컴퓨터 수 생성
        const coumputerList = [];
        while (coumputerList.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!coumputerList.includes(number)) {
            coumputerList.push(number);
          }
        }

        // MissionUtils.Console.print(coumputerList);

        // 맞출때까지 반복
        while (true) {
          // 계산
          var answerList = await getAnswer();
          let strike = 0;
          let ball = 0;
          let nothing = 0;
          for (let i = 0; i < 3; i++) {
            if (answerList[i] === coumputerList[i]) {
              strike++;
            } else if (coumputerList.includes(answerList[i])) {
              ball++;
            } else {
              nothing++;
            }
          }
          // 결과 출력
          var result = "";
          if (strike === 3) {
            MissionUtils.Console.print(
              "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
            );
            break;
          } else {
            if (ball > 0) result += `${ball}볼`;
            if (strike > 0) result += ` ${strike}스트라이크`;
            if (nothing === 3) result = "낫싱";
            result = result.trim();
            MissionUtils.Console.print(result);
          }
        }
        let retry = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (Number(retry) === 2) {
          break;
        }
      }
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();

app.play().catch((error) => MissionUtils.Console.print(error.message));

export default App;
