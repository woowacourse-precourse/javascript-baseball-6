import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await initGame();
  }
}

const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join('');
}

const initGame = async () => {
  const computerNumber = generateRandomNumber();
  await playGame(computerNumber);
}

const playGame = async (computerNumber) => {
  const userNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  if (!validateInput(userNumber)) {
    await playGame(computerNumber);
  } else {
    await gameProcess(computerNumber, userNumber);
  }
}

const validateInput = (userInput) => {
  if (userInput.length !== 3) {
    throw new Error('[ERROR] 3자리의 숫자를 입력해주세요.');
  }
  if (isNaN(Number(userInput))) {
    throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
  }
  if (userInput[0] === userInput[1] || userInput[1] === userInput[2] || userInput[2] === userInput[0]) {
    throw new Error('[ERROR] 모두 다른 숫자를 입력해주세요.');
  }
  return true;
};

const countScore = (computerNumber, userNumber) => {
  const result = {
    ball: 0,
    strike: 0,
  };
  const userNumberArray = userNumber.split('');
  userNumberArray.forEach((num, index) => {
    if (num === computerNumber[index]) {
      result.strike += 1;
    }
    else if (computerNumber.includes(num)) result.ball += 1;
  });
  return result;
}

const printScore = (ball, strike) => {
  const textArray = [];

  if (ball > 0) {
    textArray.push(`${ball}볼`);
  }
  if (strike > 0) {
    textArray.push(`${strike}스트라이크`);
  }
  if (textArray.length === 0)
    return '낫싱';
  return textArray.join(' ');
}

const gameProcess = async (computerNumber, userNumber) => {
  if (computerNumber === userNumber) {
    MissionUtils.Console.print('3스트라이크');
    return askReplay();
  } else {
    const {ball, strike} = countScore(computerNumber, userNumber);
    MissionUtils.Console.print(printScore(ball, strike));
    return playGame(computerNumber);
  }
};

const finishGame = () => {
  MissionUtils.Console.print('');
}

const askReplay = async () => {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  const replay = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  if (replay === "1") {
    await initGame();
  } else if (replay === "2") {
    finishGame();
  } else {
    MissionUtils.Console.print('[ERROR] 잘못된 입력');
    await askReplay();
  }
}

export default App;