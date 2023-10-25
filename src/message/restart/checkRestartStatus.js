import {Console} from "@woowacourse/mission-utils";
import inputValidation from "../../validify/inputValidation.js";
import App from "../../App.js";

const checkRestartStatus = async () => {
    try {
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        const restartStatus = await Console.readLineAsync("");
        return restartStatus;
    } catch (error) {
        throw new Error(error);
    }
};

export default checkRestartStatus;