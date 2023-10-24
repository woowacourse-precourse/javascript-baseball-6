import { MissionUtils } from '@woowacourse/mission-utils';
import printMsg from '../utils/printMsg';

const BaseBallGame = {
  getRandomArray() {
    const random = [];
    while (random.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
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
        printMsg('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      }
      return;
    }
    // 아무 것도 카운트 되지 않은 경우
    printMsg('낫싱');
  },

  checkValidInput(input) {
    // 문자열이 포함된 경우
    if (Number.isNaN(Number(input))) {
      throw new Error('숫자만을 포함하도록 입력해주세요.');
    }

    // 0이 포함된 경우
    if (input.includes('0'))
      throw new Error('[ERROR] 1~9(0 제외)로 이루어진 숫자를 입력해야 합니다.');

    // 길이가 3이 아닌 경우
    if (input.length !== 3) throw new Error('[ERROR] 길이가 3이여야 합니다.');

    // 중복된 숫자가 포함된 경우
    [...input].forEach((num) => {
      if (input.indexOf(num) !== input.lastIndexOf(num))
        throw new Error('중복된 숫자가 없도록 입력해주세요.');
    });

    return true;
  },
};

export default BaseBallGame;
