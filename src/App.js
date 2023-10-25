import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    //난수 생성 -> 3자리 임의의 수 만들기
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    //플레이어 입력 받기
    let finished = false;

    while (!finished) {
      let userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      if (isNaN(userInput)) {
        MissionUtils.Console.print("[ERROR] 숫자를 입력해야 합니다.");
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
        finished = true;
      } else if (userInput.toString().length !== 3) {
        MissionUtils.Console.print("[ERROR] 세 자리 숫자를 입력해야 합니다.");
        throw new Error("[ERROR] 세 자리 숫자를 입력해야 합니다.");
        finished = true;
      } else {
        let countStrike = 0;
        let countBall = 0;
        userInput = String(userInput);
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (Number(computer[i]) === Number(userInput[j])) {
              if (i === j) {
                countStrike += 1;
              } else {
                countBall += 1;
              }
            }
          }
        }

        if (countStrike === 3) {
          //r게임 종료
          MissionUtils.Console.print("3스트라이크");

          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );

          let restartOrExit = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );

          if (restartOrExit === "1") {
            app.play();
            break;
          } else if (restartOrExit === "2") {
            //게임 종료
            MissionUtils.Console.print("게임을 완전히 종료합니다.");
            finished = true;
          }
        } else if (countStrike === 0 && countBall === 0) {
          MissionUtils.Console.print("낫싱");
        } else if (countStrike === 0) {
          MissionUtils.Console.print(`${countBall}볼`);
        } else if (countBall === 0) {
          MissionUtils.Console.print(`${countStrike}스트라이크`);
        } else {
          MissionUtils.Console.print(`${countBall}볼 ${countStrike}스트라이크`);
        }
      }
    }
  }
}

const app = new App();
app.play();
export default App;
