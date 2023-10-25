import { MissionUtils } from '@woowacourse/mission-utils';
import { checkValidation } from './checkValidation';

// 사용자로부터 숫자를 입력받습니다.
const getUserInput = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 :',
    );
    return input;
  } catch (error) {
    new Error('[ERROR]');
  }
};

export default getUserInput;
