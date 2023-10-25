import { MissionUtils } from '@woowacourse/mission-utils';
import {
  setBallStrike, setAnswerNum, answerNum, userInputNum, strikeCnt,
} from './data';

const gameCase = async function gameCase(gameState) {
  switch (gameState) {
    case 1: {
      return await caseNum1();
    }
    case 2: {
      return await caseNum2();
    }
    case 3: {
      return await caseNum3();
    }
    default:
  }
  return 0;
};
export default gameCase;

const caseNum1 = async function caseNum1() {
  while (answerNum.length < 3) {
    setAnswerNum(MissionUtils.Random.pickNumberInRange(1, 9));
  }

  return 1;
};

const caseNum2 = function caseNum2() {
  return 2;
};

const caseNum3 = async function caseNum3() {
  for (let idx = 0; idx < 3; idx += 1) {
    if (answerNum[idx] === userInputNum[idx]) {
      setBallStrike(1);
      continue;
    }
    for (let compare = 0; compare < 3; compare += 1) {
      if (idx === compare) {
        continue;
      }
      if (answerNum[idx] === userInputNum[compare]) {
        setBallStrike(0);
      }
    }
  }

  if (strikeCnt === 3) {
    return 4;
  }
  return 3;
};
