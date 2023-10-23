import { MissionUtils } from '@woowacourse/mission-utils';

const isThreeDigit = (input) => {
    if (input.length === 3) {
        return true
    } else {
        throw new Error("[ERROR] 3자리의 숫자가 아닙니다.")
    }
}

const isNotDuplicated = (input) => {
    if (new Set(input).size === input.length) {
        return true
    } else {
        throw new Error("[ERROR] 각 자리의 수는 중복되지 않아야 합니다.")
    }
}

const isAllNumber = (input) => {
    for (const str of input) {
        if (isNaN(parseInt(str))) {
            throw new Error("[ERROR] 입력에는 숫자만 포함되어야 합니다.")
        }
    }
    return true
}

const hasNoZero = (input) => {
    for (const str of input) {
        if (parseInt(str) === 0) {
            throw new Error("[ERROR] 입력에는 0이 포함되지 않아야 합니다.")
        }
    }
    return true
}

export const getUserNumberInput = async () => {
    return await MissionUtils.Console.readLineAsync('숫자를 입력하세요 : ')
        .then(userNumberInput => {
            if (isThreeDigit(userNumberInput) && isAllNumber(userNumberInput)  
                && isNotDuplicated(userNumberInput) && hasNoZero(userNumberInput)) {
                return userNumberInput
            } else {
                throw new Error("[ERROR]");
            }
        })
        .catch(err => {
            throw err;
        });
}