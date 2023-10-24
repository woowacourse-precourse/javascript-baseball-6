import { Console, Random } from "@woowacourse/mission-utils";
import GameData from "./GameData.js";
import { validationNumbers } from "./Validation.js";
// const { Console, Random } = require('@woowacourse/mission-utils');
// const { validationNumbers } = require('./Validation.js');
// const GameData = require('./GameData.js');

// ball, strike 확인하는 함수
function setAnalysis(gameData, userInputs, randomNumbers) {
  // userInput과 비교해서 randomNumbers와 다른 값을 찾음
  const noStrikeNumbers = userInputs.filter((userInput, i) => 
    randomNumbers[i] !== userInput
  );
  // strike가 아닌 값들 중 randomNumbers에 포함되어있는 값을 찾음 === ball 개수
  const ballNumbers = noStrikeNumbers.filter((noStrikeNumber) => 
    randomNumbers.includes(noStrikeNumber)
  );
  const strike = 3 - noStrikeNumbers.length;
  const ball = ballNumbers.length;

  // 값 업데이트
  gameData.setBall(ball);
  gameData.setStrike(strike);
}

// 결과 출력하는 함수
function printResult(gameData) {
  const ball = gameData.getBall();
  const strike = gameData.getStrike();

  // 0볼 0스트라이크
  if (ball === 0 && strike === 0) {
    Console.print('낫싱');
    return
  } else if (ball === 0) { // 0볼 n스트라이크
    Console.print(`${strike}스트라이크`);
    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      gameData.setThreeStrike(true); // 삼진 = true
    }
    return
  } else if (strike === 0) { // n볼 0스트라이크
    Console.print(`${ball}볼`);
    return
  }
  // n볼 n스트라이크
  Console.print(`${ball}볼 ${strike}스트라이크`);
} 

// 게임 끝난 뒤 재시작 / 종료
async function continueOrEnd(gameData) {
  const inputNumber = await new Promise((resolve) => {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {resolve(input)}
    );
  });
  if (inputNumber !== '1' && inputNumber !== '2') {
    throw new Error('잘못된 값을 입력했습니다!');
  } else if (inputNumber === '2') { // 종료
    return gameData.setState(false);
  } else if (inputNumber === '1') { // 재시작
    gameData.setThreeStrike(false); // 삼진 상태를 false로 바꿔줌
  }
};

async function gameStart() {
  Console.print('숫자 야구 게임을 시작합니다.');
  const gameData = new GameData();

  // 랜덤 숫자
  const randomNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);

  // state가 true일 때 반복
  while (gameData.getState()) {
    // 사용자에게 값 받기
    // 프로미스 방식 -> 성공 : resolve, 실패 : reject
    const userInputs = await new Promise((resolve) => {
      Console.readLine("숫자를 입력해주세요 : ", (input) => {    
        resolve(input);
      });
    });
    // 잘못된 값을 입력했을 때 처리
    // validationNumbers가 false일 때
    if (!validationNumbers(userInputs.split(''))) {
      throw new Error('잘못된 값을 입력했습니다.');
    }
    // 제대로 된 값을 입력했다면 숫자로 변환
    const userInputsNumber = userInputs.split('').map((userInput) => parseInt(userInput, 10));

    setAnalysis(gameData, userInputsNumber, randomNumbers);
    printResult(gameData);

    if (gameData.getThreeStrike()) {
      await continueOrEnd(gameData);
    }
    
  }
}

export default gameStart;
// exports.gameStart = gameStart;