import { MissionUtils } from '@woowacourse/mission-utils';

const printResult = (result) => {
  const { strike, ball } = result;
  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print('낫싱');
    return;
  }
  if (strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
    return;
  }
  if (ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    return;
  }
  MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
};

export default printResult;
