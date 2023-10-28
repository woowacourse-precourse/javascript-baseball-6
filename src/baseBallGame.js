import { MissionUtils } from '@woowacourse/mission-utils';
import BASEBALL_CONSTANT from '../constants/BASEBALL_RULES';
import printMsg from '../utils/printMsg';

const BaseBallGame = {
  getRandomArray() {
    const random = [];
    while (random.length < BASEBALL_CONSTANT.gameRules.numberLength) {
      const number = MissionUtils.Random.pickNumberInRange(
        BASEBALL_CONSTANT.gameRules.minNumber,
        BASEBALL_CONSTANT.gameRules.maxNumber,
      );
      if (!random.includes(number)) {
        random.push(number);
      }
    }
    return random;
  },

  getBallAndStrikeCount(targetArray, number) {
    const count = { ball: 0, strike: 0 };

    if (!Array.isArray(targetArray)) {
      throw new Error('targetArray는 [1, 2, 3]과 같은 형태여야 합니다.');
    }

    const numberArray = Array.from(number, Number);
    numberArray.forEach((num, index) => {
      if (targetArray.includes(num)) {
        if (targetArray.indexOf(num) === index) {
          // 포함하면서 위치도 일치 : 스트라이크
          count.strike += 1;
          return;
        }
        // 포함하지만 위치는 불일치 : 볼
        count.ball += 1;
      }
    });
    return count;
  },

  printHint(countObject) {
    if (
      !Object.hasOwn(countObject, 'ball') ||
      !Object.hasOwn(countObject, 'strike')
    ) {
      throw new Error(
        "countObject는 'ball'과 'strike' 프로퍼티를 가져야합니다.",
      );
    }

    if (countObject.ball) {
      if (countObject.strike) {
        // 볼과 스트라이트 둘 다 count된 경우
        printMsg(`${countObject.ball}볼 ${countObject.strike}스트라이크`);
        return;
      }
      // 볼만 카운트된 경우
      printMsg(`${countObject.ball}볼`);
      return;
    }

    if (countObject.strike) {
      // 스트라이크만 카운트된 경우
      printMsg(`${countObject.strike}스트라이크`);

      // 3스트라이크일 경우
      if (countObject.strike === 3) {
        printMsg(BASEBALL_CONSTANT.gameMessage.end);
      }
      return;
    }
    // 아무 것도 카운트 되지 않은 경우
    printMsg(BASEBALL_CONSTANT.gameMessage.nothing);
  },

  checkValidInput(input) {
    // 문자열이 포함된 경우
    if (Number.isNaN(Number(input))) {
      throw new Error('숫자만을 포함하도록 입력해주세요.');
    }

    // 길이가 3이 아닌 경우
    if (input.length !== BASEBALL_CONSTANT.gameRules.numberLength)
      throw new Error(
        `[ERROR] 길이가 ${BASEBALL_CONSTANT.gameRules.numberLength}이여야 합니다.`,
      );

    [...input].forEach((num) => {
      // 게임 룰에서 숫자 범위에 벗어나는 숫자를 입력한 경우
      if (
        Number(num) < BASEBALL_CONSTANT.gameRules.minNumber ||
        Number(num) > BASEBALL_CONSTANT.gameRules.maxNumber
      )
        throw new Error(
          `[ERROR] ${BASEBALL_CONSTANT.gameRules.minNumber}~${BASEBALL_CONSTANT.gameRules.maxNumber} 범위의 숫자만을 포함해주세요.`,
        );

      // 중복된 숫자가 포함된 경우
      if (input.indexOf(num) !== input.lastIndexOf(num))
        throw new Error('중복된 숫자가 없도록 입력해주세요.');
    });

    return true;
  },
};

export default BaseBallGame;
