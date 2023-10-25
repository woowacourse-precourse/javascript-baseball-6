import { MissionUtils } from '@woowacourse/mission-utils';
import { setUserInputNum } from '../model/data';

const gameContinueInputController = async function continueController(viewInput) {
  const stop = await MissionUtils.Console.readLineAsync(viewInput);
  try {
    if (parseInt(stop, 10) === 1) {
      return true;
    }
    if (parseInt(stop, 10) === 2) {
      return false;
    }
    throw new Error('[ERROR] 잘못된 입력입니다.');
  } catch (err) {
    throw new Error('[ERROR] 잘못된 입력입니다.');
  }
};

const getInputNum = async function getInputNum(viewText) {
  const answer = await MissionUtils.Console.readLineAsync(viewText);
  setUserInputNum(await answer);
};

const inputController = async function inputController(caseNum, viewText) {
  if (caseNum === 1 || caseNum === 3 || caseNum === 4) {
    MissionUtils.Console.print(viewText);
    return;
  }

  if (caseNum === 2) {
    await getInputNum(viewText);
  }
};

export { inputController, gameContinueInputController as continueController };
