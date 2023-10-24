import { Console } from "@woowacourse/mission-utils";
import * as messages from "./constants/messages";

async function startGame(computerNumber) {
  while (true) {
    const userInput = await getUserInput();
    const result = compareNumber(userInput, computerNumber);
    Console.print(getHint(result));
    // TODO: 상수로 빼기
    if (result.strikes === 3) {
      return 0;
    }
  }
}

async function getUserInput() {
  try {
    const userInput = await Console.readLineAsync(messages.INPUT_PROMPT);
    // TODO: 상수로 빼기
    if (!/^[1-9]{3}$/.test(userInput)) {
      throw new Error(messages.NUMBER_COUNT_ERROR);
    }
    const uniqueDigits = new Set(userInput);
    if (uniqueDigits.size !== 3) {
      throw new Error(messages.DUPLICATE_DIGIT_ERROR);
    }
    return userInput;
  } catch (error) {
    throw error;
  }
}

function compareNumber(userInput, computerNumber) {
  const result = { strikes: 0, balls: 0 };
  const userNumber = userInput.split("").map(Number);
  userNumber.forEach((number, i) => {
    if (computerNumber[i] === number) {
      result.strikes++;
    } else if (computerNumber.includes(number)) {
      result.balls++;
    }
  });
  return result;
}

function getHint(hint) {
  const strikes = hint.strikes;
  const balls = hint.balls;
  // TODO: 상수로 빼기
  if (strikes === 3) {
    return messages.CORRECT_ANSWER_MESSAGE;
  }
  if (strikes === 0 && balls === 0) {
    return messages.NOTHING_MESSAGE;
  }
  return messages.BALL_STRIKE_MESSAGE(balls, strikes);
}

export default startGame;
