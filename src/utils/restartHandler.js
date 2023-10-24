import { Console } from '@woowacourse/mission-utils';

const restartHandler = async () => {
  let answer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

  answer = parseInt(answer);
  if (![1, 2].includes(answer)) {
    throw new Error('[ERROR] 1 또는 2를 입력해 주세요.');
  }

  return answer;
};

export { restartHandler };
