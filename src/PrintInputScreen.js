import {MissionUtils} from "@woowacourse/mission-utils";
export function printInputScreen() {
    return MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
}
