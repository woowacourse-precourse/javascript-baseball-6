import { Console } from "@woowacourse/mission-utils";

class GameInteraction {
    static async inputUserNumbers() {
        const userNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
        return userNumbers;
    }
}

export default GameInteraction;
