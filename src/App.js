import {MissionUtils} from "@woowacourse/mission-utils";
import * as CONSTANT from "./constants.js";
/*
  기능 목록
  [x] 컴퓨터는 상대방이고 랜덤한 중복되지 않는 세자리 수를 가진다.
  [x] 플레이어는 서로 다른 3자리 숫자를 입력받는다.
  [x] 상대방 숫자와, 플레이어 숫자를 비교 했을때, 같은 수가 같은 자리에 있다면 strike, 다른 자리에 있다면 ball, 같은 수가 전혀 없다면 낫싱이다. 
  [x] 게임은 3 strike가 나올때까지 반복, 3 strike이면 플레이어의 승리, 게임이 종료된다. 
  [x] 종료시 플레이어에게 완전 종료와 다시 시작을 여부를 물어보고, 1 또는 2를 입력받는다. 
  [x] 사용자 입력이 잘못되었을때 throw 롤 에러 던지고 애플리케이션 종료   
 */

class App {
  async play() {
    let isEnd = false;
    MissionUtils.Console.print(CONSTANT.GAME_START_MESSAGE);
    while (!isEnd) {
      const computerNumberArray = createComputerNumbers();
      let isWin = false;
      while (!isWin) {
        const userNumberAnswer = await MissionUtils.Console.readLineAsync(CONSTANT.QUESTION_MESSAGE);
        checkUserNumber(userNumberAnswer);
        const userNumberArray = [...userNumberAnswer.split("")];
        const {ball, strike} = countGameScore(userNumberArray, computerNumberArray);
        const message = getMessage(ball, strike);
        MissionUtils.Console.print(message);
        if (strike === 3) {
          isWin = true;
          MissionUtils.Console.print(CONSTANT.WIN_MESSAGE);
        }
      }
      const endAnswer = await MissionUtils.Console.readLineAsync(CONSTANT.GAME_END_QUESTION_MESSAGE);
      checkEndAnswer(endAnswer);
      isEnd = endAnswer === "2";
    }
  }
}

export default App;

const getMessage = (ball = 0, strike = 0) => {
  return ball === 0 && strike === 0 ? "낫싱" : `${ball}볼 ${strike}스트라이크`;
};

const checkInputType = (input) => {
  if (input === undefined || input === null) throw Error(CONSTANT.ERROR_TYPE_MESSAGE);
  if (typeof input !== "string" || Number.isNaN(input)) throw Error(CONSTANT.ERROR_TYPE_MESSAGE);
};

const checkUserNumber = (userNumber) => {
  checkInputType(userNumber);
  if (userNumber.length !== 3) throw Error(CONSTANT.ERROR_LENGTH_MESSAGE);
  if ([...new Set(userNumber.split(""))].length !== 3) throw Error(CONSTANT.ERROR_DUPLICATION_MESSAGE);
};

const checkEndAnswer = (endAnswer) => {
  checkInputType(endAnswer);
  if (endAnswer.length !== 1) throw Error(CONSTANT.ERROR_LENGTH_MESSAGE);
  if (endAnswer !== "1" && endAnswer !== "2") throw Error(CONSTANT.ERROR_RANGE_MESSAGE);
};

const createComputerNumbers = () => {
  const computerNumbersArray = [];
  while (computerNumbersArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumbersArray.includes(number)) computerNumbersArray.push(number);
  }
  return computerNumbersArray;
};

const countGameScore = (userNumberArray, computerNumberArray) => {
  let ball = 0;
  let strike = 0;
  userNumberArray.forEach((number, index) => {
    const integerNumber = Number(number);
    if (integerNumber === computerNumberArray[index]) strike++;
    else if (computerNumberArray.includes(integerNumber)) ball++;
  });
  return {ball, strike};
};
