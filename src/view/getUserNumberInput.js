import { MissionUtils } from '@woowacourse/mission-utils';

const checkBlank = function checkHasNotBlankElseError(input) {
    const throwBlankError = function throwErrorWhenHasBlank() {
        throw new Error('[ERROR] 3자리의 수를 공백없이 이어서 입력해야 합니다.')
    };
    [...input].forEach((inputElement) => (inputElement === ' ' && throwBlankError()));
}

const checkThreeDigit = function checkIsThreeDigitElseError(input) {
    if (input.length !== 3) {
        throw new Error('[ERROR] 3자리의 숫자가 아닙니다.')
    }
}

const checkNotDuplicated = function checkContainsUniqueNumberElseError(input) {
    if (new Set(input).size !== input.length) {
        throw new Error('[ERROR] 각 자리의 수는 중복되지 않아야 합니다.')
    }
}

const checkAllNumber = function checkContainsOnlyNumberElseError(input) {
    const throwNotNumberError = function throwErrorWhenHasNotNumber() {
        throw new Error('[ERROR] 입력에는 숫자만 포함되어야 합니다.')
    };
    [...input].forEach((inputElement) => (isNaN(parseInt(inputElement)) && throwNotNumberError()))
}

const checkNoZero = function checkHasNoZeroElseError(input) {
    const throwHasZeroError = function throwErrorWhenHasZero() {
        throw new Error('[ERROR] 입력에는 0이 포함되지 않아야 합니다.')
    };
    [...input].forEach((inputElement) => (parseInt(inputElement) === 0 && throwHasZeroError()))
}

const getUserNumberInput = async function validateAndReturnInput() {
    const userNumberInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
    checkBlank(userNumberInput)
    checkThreeDigit(userNumberInput)
    checkAllNumber(userNumberInput)
    checkNotDuplicated(userNumberInput)
    checkNoZero(userNumberInput)
    return userNumberInput
}

export default getUserNumberInput;