import * as MissionUtils from "@woowacourse/mission-utils";

export default class App {
  async play() {
    try {
      MissionUtils.Console.print("게임 시작");
      // this.getComputerInput();
      // await this.getUserInput();
      // this.checkAnswer();
      // MissionUtils.Console.print(result);
      const computerInput = this.getComputerInput();
      const playerInput = await this.getUserInput();
      const playerInputArray = [...playerInput].map((el) => Number(el));
      this.checkAnswer(playerInputArray, computerInput);
    } catch (err) {
      MissionUtils.Console.print(err);
    }
  }
  // 컴퓨터 랜덤 생성
  getComputerInput() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
    // MissionUtils.Console.print(computer);
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요."
    );

    if (userInput.length !== 3) {
      throw new Error(
        "1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요."
      );
    }
    return userInput;
  }

  async checkAnswer(playerInput, computerInput) {
    // console.log(userInputArray);
    let strikeCount = 0;
    let ballCount = 0;
    const strikeArray = [];
    const ballArray = [];

    MissionUtils.Console.print(playerInput);
    MissionUtils.Console.print(computerInput);
    // const userInputArray = [...getPlayerData].map((el) => Number(el));

    for (let i = 0; i < 3; i++) {
      if (playerInput[i] === computerInput[i]) {
        strikeCount += 1;
        strikeArray.push(strikeCount);

        // MissionUtils.Console.print(strikeArray.length);
        //   }
      } else if (computerInput.includes(playerInput[i])) {
        ballCount += 1;
        ballArray.push(ballCount);
        // MissionUtils.Console.print(ballArray.length);
      }
    }
    //   // playerScore index가 computer index와 일치하는 경우
    //   if (userInputArray[i] === computerInput[i]) {
    //     strikeCount += 1;
    //     strikeArray.push(strikeCount);
    //     MissionUtils.Console.print(strikeArray);
    //   } else if (this.getComputerInput.includes(userInputArray[i])) {
    //     this.ballCount += 1;
    //     // ballsArray.push(this.ballCount);

    //     // console.log("ballCount = ", ballsArray.length);
    //   }
    // }
  }
}

const app = new App();
app.play();
