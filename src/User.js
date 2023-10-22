import { MissionUtils } from "@woowacourse/mission-utils";
export default class User {
    returnUserInput() {
        return MissionUtils.Console.readLineAsync(null);
    }
}
