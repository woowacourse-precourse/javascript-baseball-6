import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../utils/message.js";
import { isValidBaseballInput } from "../utils/validation.js";

const gameStart = async (computerNumber) => {
  try {
    while (true) {
      const userNumber = await getNumberInput();
      const { ball, strike } = checkNumberMatch(computerNumber, userNumber);
      const text = countBallStrike(ball, strike);
      MissionUtils.Console.print(text);
      if (text === "3스트라이크") {
        break;
      }
    }
  } catch (error) {
    throw new Error("[ERROR]");
  }
};

const getNumberInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGES.ENTER_NUMBER
    );
    if (!isValidBaseballInput(userInput)) {
      throw new Error(ERROR_MESSAGES.IS_INVALID_INPUT);
    }
    return userInput;
  } catch (error) {
    throw new Error("[ERROR]");
  }
};

const checkNumberMatch = (computerNumber, userNumber) => {
  let ball = 0, strike = 0;

  for (let index = 0; index < 3; index++) {
    if (computerNumber[index] === userNumber[index]) {
      strike++;
    } else if (computerNumber.includes(userNumber[index])) {
      ball++;
    }
  }

  return { ball, strike };
};

const countBallStrike = (ball, strike) => {
  const ballText = ball > 0 ? `${ball}볼` : "";
  const strikeText = strike > 0 ? `${strike}스트라이크` : "";
  const result = ballText + (ballText && strikeText ? " " : "") + strikeText || "낫싱";

  return result;
};

export default gameStart;
