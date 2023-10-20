import { Console } from "@woowacourse/mission-utils";

async function startGame(computerNumber) {
  const userInput = await getUserInput();
  compareNumber(userInput, computerNumber);
}

async function getUserInput() {
  try {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 :");
    return userInput;
  } catch (error) {
    // TODO: reject 되는 경우
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
}

export default startGame;
