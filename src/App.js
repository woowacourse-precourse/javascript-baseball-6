import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { validateInput } from './validation.js'; 
import { NUM_DIGITS, RESTART_GAME, GAME_OVER_MESSAGE,GAME_END_INSTRUCTION,STRIKE_TEXT,BALL_TEXT,NOTHING_TEXT } from "./Constants.js";

class App {
  async play() {
    startGameTitle();
    await gamePlay(createComputerNumber());
  }
}

function processGame(userNumber,computerNumber) {
  countResult(userNumber,computerNumber);
  return numbersEqual(userNumber,computerNumber);
}

async function gamePlay(computerNumber) {
  const userNumber = await createUserNumber();
  const isEqual = processGame(userNumber,computerNumber);

  if(!isEqual) return gamePlay(computerNumber);
  await gamePlayResult();
}

async function gamePlayResult() {
  Console.print(GAME_OVER_MESSAGE);
  const gameEnd = await Console.readLineAsync(GAME_END_INSTRUCTION);
  if(gameEnd === RESTART_GAME) {
    return gamePlay(createComputerNumber());
  }
}

function numbersEqual(userNumber, computerNumber) {
  return userNumber.length === computerNumber.length && userNumber.every((number, index) => number === computerNumber[index]);
}

function startGameTitle() {
  return Console.print("숫자 야구 게임을 시작합니다.");
}

function createComputerNumber() {
  const computer = [];
  while (computer.length < NUM_DIGITS) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
  }
}
  return computer;
}

async function createUserNumber() {
  const createNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
  validateInput(createNumber);
  const userNumber = Array.from(createNumber).map((value) => Number(value));

  return userNumber;
}

function countStrike(userNumber,computerNumber) {
  const length = computerNumber.length;
  let strike = 0;
  for(let i = 0; i < length; i++) {
    if(computerNumber[i] === userNumber[i]) {
      strike++;
    }
  }
  return strike;
}

function countBall(userNumber,computerNumber) {
  const length = computerNumber.length;
  let ball = 0;
  const userNmberSet = new Set(userNumber);
  for(let i = 0; i < length; i++) {
    if(computerNumber[i] !== userNumber[i] && userNmberSet.has(computerNumber[i])) {
      ball++;
    }
  }
  return ball;
}

function countResult(userNumber, computerNumber) {
  const strike = countStrike(userNumber, computerNumber);
  const ball = countBall(userNumber, computerNumber);

  if (strike > 0 && ball > 0) {
    Console.print(`${ball}${BALL_TEXT} ${strike}${STRIKE_TEXT}`);
  } else if (strike > 0) {
    Console.print(`${strike}${STRIKE_TEXT}`);
  } else if (ball > 0) {
    Console.print(`${ball}${BALL_TEXT}`);
  } else {
    Console.print(NOTHING_TEXT);
  }
}

const app = new App();
app.play();
export default App;
