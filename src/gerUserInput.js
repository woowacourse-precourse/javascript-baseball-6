import { MissionUtils } from '@woowacourse/mission-utils';

const getUserInput = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ').then((input) => {return input});