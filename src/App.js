import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  isValid(input) {
    // 입력값이 3자리 숫자로 이루어져 있는지 확인
    const numCheck = /^[1-9]{3}$/.test(input); //3자리 숫자 정규식
    if (!numCheck) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다."); //아닐 경우 예외 처리
    }
    return true;
  }
  rusultCheck(me, computer) {
    //나의 입력값과 컴퓨터의 값 비교
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      //같은 자리수에 같은 숫자가 있는 경우 strike 증가
      if (me[i] === computer[i]) {
        strikeCount++;
      } //같은 자리수는 아니지만 그 수를 포함하는 경우 ball 증가
      else if (computer.includes(me[i])) {
        ballCount++;
      }
    }
    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱";
    } else if (strikeCount === 3) {
      return "3스트라이크";
    } else {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  }
  async continueCheck() {
    // 계속할지 여부 체크
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    const next = await MissionUtils.Console.readLineAsync("");

    if (next === "1") {
      // 1인 경우 계속
      return false;
    } else if (next === "2") {
      //2인 경우 게임 종료
      return true;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다!");
      let finish = false; // 현재 게임 종료 여부
      let gameOver = false; //전체 게임 종료 여부

      while (!gameOver) {
        let computer = [];
        let me = [];

        //컴퓨터값 생성
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }
        while (!finish) {
          let userInput =
            await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");

          if (this.isValid(userInput) === true) {
            userInput = Number(userInput);

            for (let i = 0; i < 3; i++) {
              me.push(Math.floor(userInput / 10 ** (2 - i))); //첫 자리부터 push
              userInput = userInput % 10 ** (2 - i);
            }

            const result = this.rusultCheck(me, computer);
            MissionUtils.Console.print(result);

            if (result === "3스트라이크") {
              finish = await this.continueCheck();
              if (finish) {
                //게임 종료
                gameOver = true;
                break;
              } else if (!finish) {
                // 계속
                computer = [];
                break;
              }
            }
          }
          me = [];
        }
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
