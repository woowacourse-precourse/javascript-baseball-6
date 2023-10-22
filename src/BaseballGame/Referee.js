import { print } from "../utils/console.js";
import { MESSAGE } from "../constants/message.js";

class Referee {
  judge(computerNumbers, userNumbers) {
    const judgementResult = {
      strikeCnt: 0,
      ballCnt: 0,
    };

    for (let i = 0; i < 3; i++) {
      if (this.#isStrike(computerNumbers, userNumbers, i)) {
        judgementResult.strikeCnt++;
      } else if (this.#isBall(computerNumbers, userNumbers, i)) {
        judgementResult.ballCnt++;
      }
    }

    this.#printJudgementResult(judgementResult);

    if (judgementResult.strikeCnt === 3) {
      return true;
    }

    return false;
  }

  #printJudgementResult(judgementResult) {
    if (judgementResult.strikeCnt === 0 && judgementResult.ballCnt === 0) {
      print(MESSAGE.JUDGE_NOTHING);
      return;
    }

    const ballMessage = `${judgementResult.ballCnt}${MESSAGE.JUDGE_BALL}`;
    const strikeMessage = `${judgementResult.strikeCnt}${MESSAGE.JUDGE_STRIKE}`;

    if (judgementResult.strikeCnt === 0) {
      print(ballMessage);
      return;
    }

    if (judgementResult.ballCnt === 0) {
      print(strikeMessage);
      return;
    }

    print(`${ballMessage} ${strikeMessage}`);
  }

  #isStrike(computerNumbers, userNumbers, idx) {
    return computerNumbers[idx] === userNumbers[idx] ? true : false;
  }

  #isBall(computerNumbers, userNumbers, idx) {
    return computerNumbers.includes(userNumbers[idx]) &&
      computerNumbers[idx] !== userNumbers[idx]
      ? true
      : false;
  }
}

export default Referee;
