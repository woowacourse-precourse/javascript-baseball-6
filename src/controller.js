import { MissionUtils } from "@woowacourse/mission-utils";
import { generateRandomNumber, countScore, printScore } from "./game.js";
import { validateInput } from "./validator.js"


export const initGame = async () => {
  const computerNumber = generateRandomNumber();
  await startGame(computerNumber);
}

const gameProcess = async (computerNumber, userNumber) => {
  if (computerNumber === userNumber) {
    MissionUtils.Console.print('3스트라이크');
    return askReplay();
  }
  const {ball, strike} = countScore(computerNumber, userNumber);
  MissionUtils.Console.print(printScore(ball, strike));
  return startGame(computerNumber);
};

const startGame = async (computerNumber) => {
  const userNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  if (!validateInput(userNumber)) {
    return await startGame(computerNumber);
  }
  return await gameProcess(computerNumber, userNumber);
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
