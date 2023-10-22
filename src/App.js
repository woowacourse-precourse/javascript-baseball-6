import {MissionUtils} from "@woowacourse/mission-utils";
import * as CONSTANT from "./constants.js";
/*
기능 요구 사항
  기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

  같은 수가 같은 잘에 있으면 스트라이크, 
  다른 자리에 있으면 볼,
  같은 수가 전혀 없으면 낫싱,
  상대방-컴퓨터
  1~9까지 서로 다른 임의 숫자 3개 선택
  플레이어
  1~9까지 서로 다른 임의 숫자 3개 선택
  게임 결과 출력, 상대방 숫자 3개 모두 맞힐때 승리
 
  게임종료 후 다시 시작하거나 완전 종료 선택 가능 (1, 2로 선택)

  사용자가 잘못된 값을 입력시 예외 처리로 종료


 프로그래밍 요구 사항

 과제 진행 요국 사항
 */

class App {
  async play() {
    //게임시작
    let isEnd = false;
    MissionUtils.Console.print(CONSTANT.GAME_START_MESSAGE);
    while (!isEnd) {
      const computerNumberArray = createComputerNumbers();
      let isWin = false;
      while (!isWin) {
        let userNumber = await MissionUtils.Console.readLineAsync(CONSTANT.QUESTION_MESSAGE);
        checkUserNumber(userNumber);
        const userNumberArray = [...userNumber.split("")];
        const {ball, strike} = createGameScore(userNumberArray, computerNumberArray);
        const message = getMessage(ball, strike);
        MissionUtils.Console.print(message);
        if (strike === 3) {
          isWin = true;
          MissionUtils.Console.print(CONSTANT.WIN_MESSAGE);
        }
      }
      // 게임종료 확인
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

const checkUserNumber = (userNumber) => {
  if (userNumber === undefined || userNumber === null) throw Error(CONSTANT.ERROR_MESSAGE);
  if (typeof userNumber !== "string") throw Error(CONSTANT.ERROR_MESSAGE);
  if (userNumber.length !== 3) throw Error(CONSTANT.ERROR_MESSAGE);
  if ([...new Set(userNumber.split(""))].length !== 3) throw Error(CONSTANT.ERROR_MESSAGE);
};

const checkEndAnswer = (endAnswer) => {
  if (endAnswer === undefined || endAnswer === null) throw Error(CONSTANT.ERROR_MESSAGE);
  if (typeof endAnswer !== "string") throw Error(CONSTANT.ERROR_MESSAGE);
  if (endAnswer.length !== 1) throw Error(CONSTANT.ERROR_MESSAGE);
  if (endAnswer !== "1" && endAnswer !== "2") throw Error(CONSTANT.ERROR_MESSAGE);
};

const createComputerNumbers = () => {
  const computerNumbersArray = [];
  while (computerNumbersArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumbersArray.includes(number)) computerNumbersArray.push(number);
  }
  return computerNumbersArray;
};

const createGameScore = (userNumberArray, computerNumberArray) => {
  let ball = 0;
  let strike = 0;
  userNumberArray.forEach((number, index) => {
    const integerNumber = Number(number);
    if (integerNumber === computerNumberArray[index]) strike++;
    else if (computerNumberArray.includes(integerNumber)) ball++;
  });

  return {ball, strike};
};
