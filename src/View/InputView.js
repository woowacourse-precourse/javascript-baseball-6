import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = '숫자를 입력해주세요 : ';

const InputView = {
  async readNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

    return numbers;
  },
};

export default InputView;
