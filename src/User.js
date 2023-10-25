import { MissionUtils } from "@woowacourse/mission-utils";
export default class User {
    returnUserQuery(query) {
        return MissionUtils.Console.readLineAsync(query);
    }
}
