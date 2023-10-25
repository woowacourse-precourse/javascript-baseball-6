import { MissionUtils } from '@woowacourse/mission-utils';

export default async function enterAnswer(count) {
  const inputValue = await MissionUtils.Console.readLineAsync(
    '숫자를 입력해주세요: '
  );
  const inputValueToArray = inputValue.split('');

  validate(inputValue, inputValueToArray, count);

  return inputValueToArray;
}

function validate(target, targetArray, count) {
  const regExp = new RegExp(`^[1-9]{${count}}$`);

  if (target.length !== count) {
    throw new Error(`[ERROR] ${count}자리 숫자가 입력되지 않았습니다.`);
  } else if (!regExp.test(target)) {
    throw new Error(
      `[ERROR] 1부터 9까지의 ${count}자리 숫자가 입력되지 않았습니다.`
    );
  } else if (hasDuplicates(targetArray)) {
    throw new Error(`[ERROR] 중복되는 수가 있습니다.`);
  }
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
