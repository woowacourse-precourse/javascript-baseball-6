import {MissionUtils} from "@woowacourse/mission-utils";

const getUserNumber = async () => {
    try {
        const userNumber = await MissionUtils.Console.readLineAsync("숫자를 입력하세요 : ");
        return userNumber;
    } catch (error) {
        return;
    }
}

const validateUserNumber = (userNumber) => {
    // input값이 숫자인지 확인
    if (isNaN(Number(userNumber)) || userNumber.includes("0")) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 1~9 사이의 숫자를 입력해주세요.");
    }
    if (userNumber.length !== 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 세자리의 숫자를 입력해주세요.")
    }
    for (let idx = 1; idx < 3; idx++) {
        if (userNumber.indexOf(userNumber[idx]) !== userNumber.lastIndexOf(userNumber[idx])) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 모두 다른 숫자를 입력해주세요.")
        }
    }
    return true;
}

export {getUserNumber, validateUserNumber};
