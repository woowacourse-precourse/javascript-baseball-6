import { MissionUtils } from '@woowacourse/mission-utils';

export default function getResult(computerNumbers, playerNumbers) {
  const computerArr = Array.from(computerNumbers + '');
  const playerArr = Array.from(playerNumbers + '');

  const hasNothing = getNothing(computerArr, playerArr);

  let ball, strike;
  if (!hasNothing) {
    ball = getBall(computerArr, playerArr);
    strike = getStrike(computerArr, playerArr);
  }

  const result = (ball ? ball : '') + (strike ? strike : '');
  result !== '' && MissionUtils.Console.print(result);

  if (result === '3스트라이크') {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return result;
  }
}

const getNothing = (computerNum, playerNum) => {
  const nothingArr = computerNum.filter((item) => !playerNum.includes(item));
  if (nothingArr.length === 3) {
    MissionUtils.Console.print('낫싱');
    return 1;
  } else {
    return 0;
  }
};

const getBall = (computerNum, playerNum) => {
  const result = computerNum.map(
    (item, index) =>
      playerNum.includes(item) && playerNum.indexOf(item) !== index
  );
  const ballCount = result.filter((item) => item).length;

  if (ballCount) {
    return ballCount + '볼 ';
  }
};

const getStrike = (computerNum, playerNum) => {
  const result = computerNum.map(
    (item, index) =>
      playerNum.includes(item) && playerNum.indexOf(item) === index
  );
  const strikeCount = result.filter((item) => item).length;

  if (strikeCount) {
    return strikeCount + '스트라이크';
  }
};
