import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let gameStatus = 1; // 게임 진행 = 1, 게임 종료 = 2

    while (gameStatus === 1) {
      let answerNumberArray = generateAnswerNumber(); // 정답 숫자 생성
      while (true) {  // 맞출 때까지
        let userInputNumberArray = [];
        let ballStrikeCounts = [];

        let userInputNumber = await Console.readLineAsync('숫자를 입력해주세요: ');
        userInputNumberArray = stringToNumberArray(userInputNumber.trim());

        ballStrikeCounts = countBS(answerNumberArray, userInputNumberArray);  // 두 배열을 비교해서 ball, strike 개수 세기
        printBallStrike(ballStrikeCounts);

        if (ballStrikeCounts[1] === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }
      }

      if (gameStatus === 1) { // 게임 종료 상태가 아닌 경우에만 게임 진행 여부 입력 받기
        let startOrQuitInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        gameStatus = getGameStatusChoice(startOrQuitInput.trim());
      }
    }
  }
}

export default App;

function generateAnswerNumber() { // 정답 숫자 배열 생성
  let numbers = [];
  while (numbers.length < 3) {
    let n = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!numbers.includes(n)) {
      numbers.push(n)
    }
  }

  return numbers;
}

function stringToNumberArray(input) { // 입력값 예외 처리 후 숫자 배열로 만들어 리턴

  if (!input) {
    throw new Error('[ERROR] 입력값이 없습니다.');
  }

  if (input.length !== 3) {
    throw new Error('[ERROR] 입력값의 길이가 3이 아닙니다.');
  }

  if (!/^[1-9]+$/.test(input)) {
    throw new Error('[ERROR] 입력값에 0이 있거나 숫자가 아닌 값이 있습니다.');
  }

  let duplicateCheckSet = new Set(input.split(''));
  if (duplicateCheckSet.size !== 3) {
    throw new Error('[ERROR] 입력값 중 같은 숫자가 존재합니다.')
  }

  return input.split('').map(str => parseInt(str, 10));
}

function countBS(answerArray, inputArray) {  // [ball, strike] 개수를 세서 배열로 리턴
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < answerArray.length; i++) {
    if (inputArray[i] === answerArray[i]) { // strike
      strike++;
    } else if (answerArray.includes(inputArray[i])) {  // ball
      ball++;
    }
  }

  return [ball, strike];
}

function printBallStrike(bsArray) { // ball, strike 개수에 따른 결과값 출력
  if (bsArray[0] == 0 && bsArray[1] == 0) {
    Console.print('낫싱');
  } else if (bsArray[0] != 0 && bsArray[1] != 0) {
    Console.print(`${bsArray[0]}볼 ${bsArray[1]}스트라이크`);
  } else if (bsArray[0] == 0 && bsArray[1] != 0) {
    Console.print(`${bsArray[1]}스트라이크`);
  } else {
    Console.print(`${bsArray[0]}볼`);
  }
}

function getGameStatusChoice(input) {
  if (input != 1 && input != 2) {
    throw new Error('[ERROR] 1 또는 2가 아닌 값이 입력되었습니다.');
  }

  return parseInt(input, 10);
}

const app = new App();
app.play();