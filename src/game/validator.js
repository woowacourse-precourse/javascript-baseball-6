const isNumeric = (value) => !isNaN(Number(value));
const isWithinRange = (value) => {
    for (let num = 0; num < value.length; num++) {
        if (!(Number(value[num]) >= 1 && Number(value[num]) <= 9)) {
            return false;
        }
    }
    return true;
}
const hasUniqueDigits = (value) => new Set(value).size === value.length;

const validateUserNumber = (userNumber) => {
    if (!isNumeric(userNumber) || !isWithinRange(userNumber)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 1~9 사이의 숫자를 입력해주세요.");
    }

    if (userNumber.length !== 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 세자리의 숫자를 입력해주세요.")
    }

    if (!hasUniqueDigits(userNumber)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다. 모두 다른 숫자를 입력해주세요.")
    }

    return true;
}

export {validateUserNumber};
