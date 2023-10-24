import { Console } from '@woowacourse/mission-utils';

async function restartInput() {
  let input = '';
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
  input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

  if (input === '1' || input === '2') {
    return input;
  }
  
  throw Error('[ERROR] 1 혹은 2를 입력해 주세요');
}

export default restartInput;
