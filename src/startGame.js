import { Console } from "@woowacourse/mission-utils";

async function startGame(computerNumber) {
  while (true) {
    const userInput = await getUserInput();
    const result = compareNumber(userInput, computerNumber);
    Console.print(getHint(result));
    // TODO: 상수로 빼기
    if (result.strikes === 3) {
      break;
    }
  }
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
  return result;
}

function getHint(hint) {
  const strikes = hint.strikes;
  const balls = hint.balls;
  // TODO: 상수로 빼기
  if (strikes === 3) {
    return "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  }
  if (strikes === 0 && balls === 0) {
    return "낫싱";
  }
  return `${balls}볼 ${strikes}스트라이크`;
}

export default startGame;
