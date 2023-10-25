import { MissionUtils } from "@woowacourse/mission-utils";
import { QUERY_STATUS } from "./query_status.js";
export default class User {
    async returnUserQuery(query, status) {
        const INPUT = await MissionUtils.Console.readLineAsync(query);
        if (!this.checkValidation(INPUT, status))
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        return INPUT;
    }
    checkValidation(str, status) {
        if (status === QUERY_STATUS.PLAYING && str.length > 3) return false;
        else if (status === QUERY_STATUS.REPLAY && str.length > 1) return false;
        else if (isNaN(str)) return false;
        else return true;
    }
}
