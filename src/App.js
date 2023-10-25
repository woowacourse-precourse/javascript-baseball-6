import { MissionUtils } from '@woowacourse/mission-utils';
import createRandomArray from './createRandomArray.js';
import enterAnswer from './enterAnswer.js';
import { compareArrays, Computer } from './compareArrays.js';

const NUMBER_OF_DIGITS = 3;
const CONTINUE_GAME = 1;
const END_GAME = 2;
let gameStatus;

class App {
  async play() {
    gameStatus = CONTINUE_GAME;

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while (gameStatus == CONTINUE_GAME) {
      const randomArray = createRandomArray(NUMBER_OF_DIGITS);

      while (!Computer.isGameOver) {
        const answerArray = await enterAnswer(NUMBER_OF_DIGITS);
        const count = compareArrays(randomArray, answerArray);
        printCount(count[0], count[1], count[2]);
      }

      await checkRestart();
    }
  }
}

function printCount(strike, ball, nothing) {
  if (strike && !ball) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike == 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
  } else if (!strike && ball) {
    MissionUtils.Console.print(`${ball}볼`);
  } else if (strike && ball) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (nothing) {
    MissionUtils.Console.print('낫싱');
  }
}

async function checkRestart() {
  gameStatus = await MissionUtils.Console.readLineAsync(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
  );

  const isCorrectInput = gameStatus == CONTINUE_GAME || gameStatus == END_GAME;

  if (!isCorrectInput) {
    throw new Error('[ERROR] 1 또는 2가 입력되지 않았습니다.');
  }

  Computer.setIsGameOver(false);
}

const app = new App();
app.play();

export default App;
