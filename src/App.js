import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    var gaming = true;
    while (gaming) {
      var idx;
      var correctCheck = true;
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      while (correctCheck) {
        const stringUser = await Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        const resultCount = [0, 0];
        var notingCheck = true;
        // index 0번이 볼갯수 1번이 스트라이크 갯수
        //사용자 데이터 검증 (차후 추가)
        if (stringUser.length > 3) {
          throw new Error("[ERROR]");
        }
        // ex) 숫자가 아니거나 3자리가 아니거나 0이 포함되거나
        for (idx = 0; idx < 3; idx++) {
          if (Number(stringUser[idx]) === computer[idx]) {
            resultCount[1] = resultCount[1] + 1;
          } else if (computer.includes(Number(stringUser[idx]))) {
            resultCount[0] = resultCount[0] + 1;
          } else {
            console.log(Number(stringUser[idx]));
            continue;
          }
        }
        for (idx = 0; idx < resultCount.length; idx++) {
          if (resultCount[idx] !== 0) {
            switch (idx) {
              case 0:
                notingCheck = false;
                if (resultCount[idx + 1] !== 0) {
                  Console.print(
                    resultCount[idx] +
                      "볼 " +
                      resultCount[idx + 1] +
                      "스트라이크"
                  );
                } else if (resultCount[idx + 1] == 0) {
                  Console.print(resultCount[idx] + "볼");
                }
                break;
              case 1:
                notingCheck = false;
                if (resultCount[idx - 1] == 0) {
                  Console.print(resultCount[idx] + "스트라이크");
                  if (resultCount[idx] === 3) {
                    correctCheck = false;
                  }
                }
                break;
            }
          }
        }
        if (notingCheck) {
          Console.print("낫싱");
        }
      }
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const restartOptionNumber = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      //사용자 입력 검증
      if (Number(restartOptionNumber) === 1) {
        continue;
      } else if (Number(restartOptionNumber) === 2) {
        gaming = false;
      } else {
        throw "[ERROR] 숫자가 잘못된 형식입니다.";
      }
    }
  }
}
const app = new App();
app.play();

export default App;
