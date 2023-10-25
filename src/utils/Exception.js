import { ErrorMessages } from "../constants/ErrorMessages.js";

class Exception {
    static userNumberException(answer) {
        const answerSet = new Set(answer.split("")); // Set으로 함으로써 중복된 숫자 제거 가능

        if (answerSet.size !== 3 || isNaN(answer) || answer.includes("0")) {
            throw new Error(ErrorMessages.INVALID_NUMBER_INPUT);
        }
    }
}

export default Exception;