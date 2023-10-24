import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT, PROGRAM_STATUS } from "./constants.js"

class App {
  async play() {
    let code = PROGRAM_STATUS.START;
    while (code != PROGRAM_STATUS.END) {
      const computer = [];
      while (computer.length < 3) {
        const randomNumber = await MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(randomNumber)) {
          computer.push(randomNumber);
        }
      }
      console.log(computer); //DEBUG
      await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      try {
        code = await getUserInput(computer);
      } catch (error) {
        await throwException(error);
      }
    }
  }
}

async function getUserInput(computer) {
  let code = PROGRAM_STATUS.KEEP;
  while (code == PROGRAM_STATUS.KEEP) {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      await checkUserValidation(userInput);
      code = await checkInput(userInput, computer);
    } catch (error) {
      throw error;
    }
  }
  return code;
}

async function checkInput(userInput, computer) {
  try {
    const states = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (userInput[i] == computer[j]) {
          if (i == j) {
            states[TEXT.STRIKE]++;
          } else {
            states[TEXT.BALL]++;
          }
          break;
        }
        if (j == 2) {
          states[TEXT.NOTHING]++;
        }
      }
    }
    if (states[TEXT.NOTHING] == 3) {
      await MissionUtils.Console.print("낫싱");
      return 3;
    } else if (states[TEXT.STRIKE] == 3) {
      await MissionUtils.Console.print(`${states[0]}스트라이크`);
      await MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      const reGameCodeInput = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      await checkReGameValidation(reGameCodeInput);
      return reGameCodeInput;
    } else {
      if (states[TEXT.STRIKE] == 0) {
        await MissionUtils.Console.print(`${states[TEXT.BALL]}볼`);
      } else if (states[TEXT.BALL] == 0) {
        await MissionUtils.Console.print(`${states[TEXT.STRIKE]}스트라이크`);
      } else {
        await MissionUtils.Console.print(`${states[1]}볼 ${states[0]}스트라이크`);
      }
      return 3;
    }
  } catch (error) {
    throw error;
  }
}

async function checkUserValidation(userInput) {
  if (userInput.length > 3) {
    // await throwException(2);
    throw "2";
  }
  const checkNumber = new Map();
  for (let i = 0; i < 3; i++) {
    if (checkNumber.has(userInput[i])) {
      // await throwException(2);
      throw "2";
    } else if (userInput[i] >= "1" && userInput[i] <= "9") {
      checkNumber.set(userInput[i], 1);
    } else {
      // await throwException(2);
      throw "2";
    }
  }
}

async function checkReGameValidation(reGameCodeInput) {
  if (reGameCodeInput != 1 && reGameCodeInput != 2) {
    throw "1";
  }
}

async function throwException(errorCode) {
  if (errorCode == 1) {
    throw new Error("[ERROR] 1 또는 2를 입력하세요");
  } else {
    throw new Error(
      "[ERROR] 중복되지 않는 1 ~ 9 사이의 세자리 숫자를 입력해주세요."
    );
  }
}

const app = new App();
app.play();

export default App;
