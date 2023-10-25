import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const PLAY_FLAG = {
      CONTINUE: "1",
      FINISH: "2",
    };
    const GAME_TEXT = {
      START: "숫자 야구 게임을 시작합니다.",
      INPUT: "숫자를 입력해주세요 : ",
      CHOOSE_GAME_CONTINUE_INPUT:
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      NOTHING: "낫싱",
      ALL_CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    };

    let playFlag = PLAY_FLAG.CONTINUE;

    // #1
    Console.print(GAME_TEXT.START);

    // #2
    let computer = this.generateComputerAnswer();

    // #3
    while (playFlag === PLAY_FLAG.CONTINUE) {
      try {
        const useGuessInput = this.validateAndConvertNumberUserGuessInput(
          await Console.readLineAsync(GAME_TEXT.INPUT)
        );
        const { ballCount, strikeCount } = this.checkInput(
          useGuessInput,
          computer
        );

        if (ballCount === 0 && strikeCount === 0) {
          Console.print(GAME_TEXT.NOTHING);
        } else {
          Console.print(this.getDisplayGameResult(ballCount, strikeCount));
        }

        if (strikeCount === 3) {
          Console.print(GAME_TEXT.ALL_CORRECT);
          Console.print(GAME_TEXT.CHOOSE_GAME_CONTINUE_INPUT);
          const userGameFlagInput = await Console.readLineAsync("");
          this.validateUserGameFlagInput(userGameFlagInput);
          playFlag = userGameFlagInput;
          if (playFlag === PLAY_FLAG.CONTINUE) {
            computer = this.generateComputerAnswer();
          }
        }
      } catch (e) {
        throw Error(`[ERROR] : ${e.message}`);
      }
    }
  }

  // ballCount 랑 strikeCount를 리턴
  checkInput(userInput, computer) {
    const user = [];
    user.push(Math.floor(Math.floor(userInput / 100)));
    user.push(Math.floor(Math.floor((userInput % 100) / 10)));
    user.push(Math.floor(userInput % 10));

    let strikeCount = 0;
    let ballCount = 0;

    user.forEach((digit, index) => {
      if (digit === computer[index]) {
        strikeCount += 1;
        return;
      }
      if (computer.includes(digit)) {
        ballCount += 1;
      }
    });
    return {
      ballCount,
      strikeCount,
    };
  }

  generateComputerAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!(number > 0 && number < 10)) throw new Error();
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    if (computer.length > 3) throw new Error();

    return computer;
  }

  validateAndConvertNumberUserGuessInput(userGuessInput) {
    if (userGuessInput.length !== 3) throw new Error("3자리 입력 되지 않음");
    let inputNumber = parseInt(userGuessInput);
    if (isNaN(inputNumber)) throw new Error("입력값이 숫자가 아님");
    return inputNumber;
  }

  validateUserGameFlagInput(userGameFlagInput) {
    if (userGameFlagInput === "1" || userGameFlagInput === "2")
      return userGameFlagInput;
    throw new Error("선택지 외 값 입력");
  }
  getDisplayGameResult(ballCount, strikeCount) {
    let ret = "";
    if (ballCount > 0) ret += `${ballCount}볼 `;
    if (strikeCount > 0) ret += `${strikeCount}스트라이크`;
    return ret;
  }
}

export default App;
