import MESSAGES from "./Messages.js";
import {Console} from "@woowacourse/mission-utils";

/**
 * 재시작을 담당하는 클래스
 */
class EndStage {
    /** @type {MESSAGES} */
    #message;

    /**
     * 생성자: 재시작 메세지를 가져온다.
     */
    constructor() {
        this.#message = MESSAGES.RESTART;
    }

    /**
     * 재시작 여부를 입력받는다.
     * @return {Promise<boolean>}
     */
    async restart() {
        const input = await Console.readLineAsync(this.#message + "\n");
        if (input === "1") {
            return true;
        } else if (input === "2") {
            return false;
        } else{
            throw new Error("[ERROR]");
        }
    }
}

export default EndStage;