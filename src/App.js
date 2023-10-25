import { MissionUtils } from "@woowacourse/mission-utils";
import { AnswerMaker } from "./AnswerMaker.js";
//import { InputView } from "./InputView.js";
import { Validater } from "./Validater.js";

class App {
  async play() {
      await gameStart();
  }
}

export default App;

var results = {
    strick : 0,
    ball : 0
}

MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
const app = new App();
app.play();

function gameStart() {
  results.strick = 0;
  results.ball = 0;
  const answer = AnswerMaker.generate(); //list
  return gameContinue(answer);
}

async function gameContinue(answer) {
  const tryNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요:');
  Validater.validationCheck(tryNumber);
  gameResult(answer, tryNumber);

  if (results.strick !== 3) {
      gameContinue(answer);
  } else {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      gameRestart();
  }
}

function gameResult(answer, tryNumber) {
  const tryNumberSplit = splitNumber(tryNumber);
  results.strick = 0;
  results.ball = 0;
  for (let i = 0; i < tryNumberSplit.length; i++) {
      if (tryNumberSplit[i] === answer[i]) {
          results.strick++;
      } else if (tryNumberSplit[i] !== answer[i] 
          && answer.includes(tryNumberSplit[i])) {
              results.ball++;
      } else {
          // 낫싱
      }
  }
  return resultPrint(results.strick,results.ball);
}

function resultPrint(strick,ball) {
  if (strick !== 0 && ball !== 0) {
      return MissionUtils.Console.print(`${ball}볼 ${strick}스트라이크`);
  } else if (strick === 0 && ball!== 0) {
      return MissionUtils.Console.print(`${ball}볼`);
  } else if (strick!== 0 && ball === 0) {
      return MissionUtils.Console.print(`${strick}스트라이크`);
  } else {
      MissionUtils.Console.print('낫싱');
  }
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