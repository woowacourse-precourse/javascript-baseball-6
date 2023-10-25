import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      let playAgain = true; //초기에 게임을 다시 시작할 것으로 설정
      while (playAgain) {
        //다시 게임하기(1번을 누를 경우 게임 반복)
        //컴퓨터는 1~9까지 랜덤으로 숫자 3개 정하기.
        const computer = [];
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }

        //사용자는 숫자 3개 입력
        let userSelectedNum;
        //게임 반복
        while (true) {
          let isUserInputValid = false; // 유효한 입력 여부를 나타내는 변수

          while (!isUserInputValid) {
            const answer = await MissionUtils.Console.readLineAsync(
              "숫자 세개를 맞춰보세요: "
            );
            const answerNum = Number(answer);
            if (!isNaN(answerNum) && answerNum >= 100 && answerNum <= 999) {
              // 입력이 유효한 경우
              userSelectedNum = answerNum.toString().split("").map(Number);
              isUserInputValid = true;
            } else {
              throw new Error(
                "유효하지 않은 입력입니다. 재시작 후 숫자 세개를 입력하세요."
              );
            }
          }

          // 컴퓨터는 사용자가 입력한 숫자에 대한 결과값 출력
          let strike = 0;
          let ball = 0;
          let nothing = 0;
          for (let i = 0; i < userSelectedNum.length; i++) {
            if (computer[i] === userSelectedNum[i]) {
              strike += 1;
            } else if (
              computer.includes(userSelectedNum[i]) &&
              computer[i] !== userSelectedNum[i]
            ) {
              ball += 1;
            } else {
              nothing += 1;
            }
          }

          if (strike > 0) {
            MissionUtils.Console.print(`${strike}스트라이크`);
          }

          if (ball > 0) {
            MissionUtils.Console.print(`${ball}볼`);
          }

          if (nothing === 3) {
            MissionUtils.Console.print(`낫싱`);
          }

          if (strike === 3) {
            MissionUtils.Console.print(
              `정답입니다! 게임을 다시 시작하려면 1, 완전히 종료하려면 2를 입력하세요:`
            );
            const restartOrExit = await MissionUtils.Console.readLineAsync(
              "1(다시시작) or 2(게임종료) 입력: "
            );
            if (restartOrExit === "2") {
              playAgain = false; // 완전히 종료
              break;
            }
          }
        }
      }
    } catch (error) {
      console.error("[ERROR]: ", error);
      playAgain = false; // 완전히 종료
    }
  }
}

const app = new App();
app
  .play()
  .then(() => {
    console.log("게임이 종료되었습니다.");
  })
  .catch((error) => {
    console.error("[ERROR]:", error);
  });

export default App;
