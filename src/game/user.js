import {MissionUtils} from "@woowacourse/mission-utils";

const getUserNumber = async () => {
    try {
        const userNumber = await MissionUtils.Console.readLineAsync("숫자를 입력하세요: ");
        return userNumber;
    } catch (error) {
        return 0;
    }
}

const validateUserNumber = (userNumber) => {
    // input값이 숫자인지 확인
    if (isNaN(Number(userNumber))) {
        return false;
    }
    if (userNumber.length !== 3) {
        return false;
    }
    for (let idx = 1; idx < 3; idx++) {
        if (userNumber.indexOf(userNumber[idx]) !== userNumber.lastIndexOf(userNumber[idx])) {
            return false;
        }
    }
    return true;
}

export {getUserNumber, validateUserNumber};
