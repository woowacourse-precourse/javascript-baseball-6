import { Console } from '@woowacourse/mission-utils';

async function inputGuess() {
  let input = '';
  input = await Console.readLineAsync('숫자를 입력해주세요 : ');

  if (Number.isNaN(input) || input.length !== 3 || isDuplicated(input)) {
    throw Error('[ERROR]서로 다른 3자리의 수를 입력해 주세요');
  }

  return input;
}

function isDuplicated(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      return true;
    }
  }

  return false;
}

export default inputGuess;
