import { MissionUtils } from '@woowacourse/mission-utils';

export default class Player {
  async enterAnswer(count) {
    this.inputValue = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요: '
    );

    validateArray(this.inputValue, count);

    return this.inputValue.split('').map((item) => parseInt(item));
  }
}

function validateArray(target, count) {
  const regExp = new RegExp(`^[1-9]{${count}}$`);

  if (target.length !== count) {
    throw new Error(`[ERROR] ${count}자리 숫자가 입력되지 않았습니다.`);
  } else if (!regExp.test(target)) {
    throw new Error(
      `[ERROR] 1부터 9까지의 ${count}자리 숫자가 입력되지 않았습니다.`
    );
  } else if (hasDuplicates(target)) {
    throw new Error(`[ERROR] 중복되는 수가 있습니다.`);
  }
}

function hasDuplicates(target) {
  const targetArray = target.split('');

  return new Set(targetArray).size !== targetArray.length;
}
