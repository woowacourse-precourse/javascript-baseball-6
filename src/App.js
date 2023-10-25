import { Console, Random } from '@woowacourse/mission-utils';

const GAME_START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const ASK_NEW_GAME_MESSAGE =
  '3개의 숫자를 모두 맞히셨습니다! 게임 종료.\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
const ASK_ENTER_INPUT_MESSAGE = '숫자를 입력해주세요 : ';
const ERROR_MESSAGE = '[ERROR] 잘못된 입력입니다.';

const checkGameIsEnd = (userInput) => {
  if (userInput === '1') {
    return false;
  }
  if (userInput === '2') {
    return true;
  }

  return { isError: true };
};

const printScore = (scoreBoard) => {
  const returnString =
    scoreBoard.strike !== 0 || scoreBoard.ball !== 0
      ? `${scoreBoard.ball === 0 ? '' : `${scoreBoard.ball}볼`} ${
          scoreBoard.strike === 0 ? '' : `${scoreBoard.strike}스트라이크`
        }`.trim()
      : '낫싱';

  return returnString;
};

const getUserInputForGameSet = async (scoreBoard) => {
  Console.print(printScore(scoreBoard));
  Console.print(ASK_NEW_GAME_MESSAGE);
  const userInput = await Console.readLineAsync('');

  return checkGameIsEnd(userInput);
};

const makeRandomNumber = () => {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }

  return randomNumber;
};

const checkIsNumber = (userInput) => {
  const input = userInput.filter((number) => Number.isNaN(number));

  return input.length === 0;
};

const checkIsNonDuplicated = (userInput) => {
  const input = userInput
    .sort()
    .reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);

  return input.length === 3;
};

const checkIncludeZero = (userInput) => {
  const input = userInput.includes(0);

  return input;
};

const checkInputIsValid = (userInput) => {
  const input = [...userInput];

  const isNumber = checkIsNumber(input);
  const isNonDuplicated = checkIsNonDuplicated(input);
  const isIncludeZero = checkIncludeZero(input);

  return isNumber && isNonDuplicated && !isIncludeZero ? true : false;
};

const calculateScore = (userInput, randomNumber) => {
  const socreBoard = { strike: 0, ball: 0 };

  randomNumber.forEach((number, randomIndex) => {
    const userInputIndex = userInput.findIndex(
      (inputNum) => inputNum === number
    );

    if (userInputIndex === randomIndex) {
      socreBoard.strike += 1;
    } else if (userInputIndex !== -1) {
      socreBoard.ball += 1;
    }
  });

  return socreBoard;
};

const getUserInput = async () => {
  const userInput = await Console.readLineAsync(ASK_ENTER_INPUT_MESSAGE);
  const input = Array.from(userInput, (number) => Number.parseInt(number, 10));

  return input;
};

const playBaseBall = async () => {
  let randomNumber = makeRandomNumber();
  let isEnd = false;

  Console.print(GAME_START_MESSAGE);
  while (!isEnd) {
    const userInput = await getUserInput();
    const inputIsValid = checkInputIsValid(userInput);

    if (inputIsValid === false) {
      throw new Error(ERROR_MESSAGE);
    }

    const scoreBoard = calculateScore(userInput, randomNumber);

    if (scoreBoard.strike === 3) {
      isEnd = await getUserInputForGameSet(scoreBoard);

      if (isEnd.isError) {
        throw new Error(ERROR_MESSAGE);
      }

      if (isEnd) {
        return;
      }
      randomNumber = makeRandomNumber();
    }

    Console.print(printScore(scoreBoard));
  }
};

class App {
  async play() {
    await playBaseBall();
  }
}

export default App;
