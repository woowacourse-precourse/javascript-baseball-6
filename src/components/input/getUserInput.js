import { MissionUtils } from '@woowacourse/mission-utils';
import { checkValidation } from '@components/checkValidation';
import { ERROR_MESSAGE } from '@/constants';

// 사용자로부터 숫자를 입력받습니다.
const getUserInput = () => {
  MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ', (input) => {
    let validation = checkValidation(input);
    validation ? MissionUtils.Console.print(input) : ERROR_MESSAGE;
  });
};

export default getUserInput;
