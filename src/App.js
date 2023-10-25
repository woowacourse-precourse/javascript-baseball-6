import { MissionUtils } from "@woowacourse/mission-utils";
import { AnswerMaker } from "./model/AnswerMaker.js";
//import { InputView } from "./InputView.js";
import { Validater } from "./utils/Validater.js";
import { Spliter } from "./utils/Spliter.js";
import { OutputView } from "./OutputView.js";
import { Storage } from "./model/Storage.js";

class App {
  async play() {
      await gameStart();
  }
}

export default App;

OutputView.printStartComment();
const app = new App();
app.play();

function gameStart() {
  Storage.strick = 0;
  Storage.ball = 0;
  AnswerMaker.generate();
  return gameContinue(Storage.answer); // list
}

async function gameContinue(answer) {
  const tryNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요:');
  Validater.validationCheck(tryNumber);
  gameResult(answer, tryNumber);

  if (Storage.strick !== 3) {
      gameContinue(answer);
  } else {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      gameRestart();
  }
}

function gameResult(answer, tryNumber) {
  const tryNumberSplit = Spliter.splitNumber(tryNumber);
  Storage.strick = 0;
  Storage.ball = 0;
  for (let i = 0; i < tryNumberSplit.length; i++) {
      if (tryNumberSplit[i] === answer[i]) {
        Storage.strick++;
      } else if (tryNumberSplit[i] !== answer[i] 
          && answer.includes(tryNumberSplit[i])) {
            Storage.ball++;
      } else {
          // 낫싱
      }
  }
  return OutputView.printResult(Storage.strick,Storage.ball);
}

//3스트라이크: 게임 다시하기
async function gameRestart() {
  MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  const restart = await MissionUtils.Console.readLineAsync('');
  if (restart === '1' || restart === '2') {
    //MissionUtils.Console.print(restart);
        userIntention(restart);
  } else {
    throw new Error("[ERROR]");
  }
}

function userIntention(select) {
  if (select === '1') {
      app.play();
  } else {
      process.exitCode = 0;
  }
}