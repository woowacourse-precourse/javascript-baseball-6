import {MissionUtils} from "@woowacourse/mission-utils";

const isNumberLengthValid = (number) => {
    if (number.length !== 3) {
        return false;
    }
    return true;
}

const isValidNumber = (number) => {
    if (isNaN(Number(number))) {
        return false;
    }
    return true;
}

const isDuplicateNumbers = (number) => {
    const uniqueNumbers = new Set(number.split(''));
    if (uniqueNumbers.size !== 3) {
        return false;
    }
    return true;
}

export const isValidBaseballInput = (number) => {
    const isLengthValid = isNumberLengthValid(number);
    const isNumberValid = isValidNumber(number);
    const hasDuplicates = isDuplicateNumbers(number);
    if (isLengthValid && isNumberValid && hasDuplicates) {
        return true;
    } else {
        return false;
    }
}

export const isValidGameOption = (binary) => {
    return binary === 0 || binary === 1;
}
