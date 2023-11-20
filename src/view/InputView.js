import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  async readText(query) {
    const value = await MissionUtils.Console.readLineAsync(`\n${query}\n`);
    return value;
  },
};

export default InputView;
