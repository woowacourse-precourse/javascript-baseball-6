import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

//겹치지 않는 숫자 생성하기
const makeRandomNumber = (length) => {
  const computer = [];

  while (computer.length < length) {
    let newNumber = Random.pickNumberInRange(1, 9);
    if (computer.indexOf(newNumber) == -1) {
      computer.push(newNumber);
    }
  }
  return computer;
};

const tryNumbers = async (computer) => {
  try {
    const userInput = await Console.readLineAsync("숫자를 입력해 주세요 : ");
    let user = [...userInput];
    user = user.map((num) => parseInt(num));
    return [computer, user];
  } catch (err) {
    throw err;
  }
};

const checkNumber = (computer, user) => {
  let result = {
    ball: 0,
    strike: 0,
  };
  user.map((num, idx) => {
    if (computer[idx] === num) {
      result.strike++;
    } else if (computer.includes(num)) {
      result.ball++;
    }
  });
  return result;
};

const checkEndGame = (result) => {
  if (result.strike === 3) {
    return true;
  }
  return false;
};

const makeText = (result) => {
  let answer = "";
  if (result.ball > 0) {
    answer += `${result.ball}볼`;
  }
  if (result.strike > 0) {
    answer += `${result.strike}스트라이크`;
  }
  if (!answer.length) {
    return "낫싱";
  } else {
    return answer;
  }
};

const runGame = async () => {
  let answer = false;
  const computer = makeRandomNumber(3);
  console.log(computer);
  while (!answer) {
    const numbers = await tryNumbers(computer);
    const result = checkNumber(numbers[0], numbers[1]);
    if (checkEndGame(result)) {
      answer = true;
    } else {
      Console.print(makeText(result));
    }
  }
  endGame();
};

const endGame = () => {
  const endChoice = Console.readLineAsync(
    "3개의 숫자를 모두 맞히셨습니다! 게임 종료/n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  if (endChoice === "1") {
    runGame();
  } else if (endChoice === "2") {
    return;
  }
};

const gameStart = async () => {
  Console.print("숫자 야구 게임을 시작합니다.");
  runGame();
};

console.log(gameStart());
