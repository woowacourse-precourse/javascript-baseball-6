import { Console } from '@woowacourse/mission-utils';

const printCorrectResult = async () => {
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  const userRestartAnswer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

  return userRestartAnswer === '1' ? 'Restart' : 'GameOver';
};

export const printResult = (ballCount, strikeCount) => {
  if (ballCount === 0 && strikeCount === 0) {
    return `낫싱`;
  }
  if (ballCount > 0 && strikeCount === 0) {
    return `${ballCount}볼`;
  }
  if (ballCount === 0 && strikeCount > 0) {
    return `${strikeCount}스트라이크`;
  }
  if (ballCount > 0 && strikeCount > 0) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
};
