import { Console } from "@woowacourse/mission-utils";

class GameInteraction {
    static async inputUserNumbers() {
        try {
            const userNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
            this.validateUserNumbers(userNumbers);
            return userNumbers;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static validateUserNumbers(input) {
        const userNumbersArray = Array.from(input).map(Number);

        if (userNumbersArray.some(isNaN)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        if (userNumbersArray.length !== 3) {
            throw new Error("[ERROR] 3개의 숫자를 입력해야 합니다.");
        }

        if (userNumbersArray.some(number => number < 1 || number > 9)) {
            throw new Error("[ERROR] 1~9 사이의 숫자를 입력해야 합니다.");
        }

        const uniqueNumbers = new Set(userNumbersArray);
        if (uniqueNumbers.size !== 3) {
            throw new Error("[ERROR] 중복되지 않은 3개의 숫자를 입력해야 합니다.");
        }

        return null;
    }
}

export default GameInteraction;
