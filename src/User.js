import { MissionUtils } from "@woowacourse/mission-utils";
export default class User {
    async returnUserQuery(query) {
        const INPUT = await MissionUtils.Console.readLineAsync(query);
        if (!this.checkValidation(INPUT))
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        return INPUT;
    }
    checkValidation(str) {
        if (str.length > 3) return false;
        else if (isNaN(str)) return false;
        else return true;
    }
}
