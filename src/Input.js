import { MissionUtils } from '@woowacourse/mission-utils';

export default async function inputValue(query) {
  return await MissionUtils.Console.readLineAsync(query);
}
