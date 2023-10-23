import { MissionUtils } from '@woowacourse/mission-utils';

const checkBlank = (input) => {
    const throwBlankError = () => { throw new Error('[ERROR] 3자리의 수를 공백없이 이어서 입력해야 합니다.') }
    [...input].forEach(inputElement => { inputElement === ' ' && throwBlankError()});
}

const checkThreeDigit = (input) => {
    if (input.length !== 3) { throw new Error('[ERROR] 3자리의 숫자가 아닙니다.') }
}

const checkNotDuplicated = (input) => {
    if (new Set(input).size !== input.length) { throw new Error('[ERROR] 각 자리의 수는 중복되지 않아야 합니다.') }
}

const checkAllNumber = (input) => {
    const throwNotNumberError = () => { throw new Error('[ERROR] 입력에는 숫자만 포함되어야 합니다.') }
    [...input].forEach(inputElement => isNaN(parseInt(inputElement)) && throwNotNumberError())
}

const checkNoZero = (input) => {
    const throwHasZeroError = () => { throw new Error('[ERROR] 입력에는 0이 포함되지 않아야 합니다.') }
    [...input].forEach(inputElement => parseInt(inputElement) === 0 && throwHasZeroError())
}

export const getUserNumberInput = async () => {
    const userNumberInput = await MissionUtils.Console.readLineAsync('숫자를 입력하세요 : ')

    checkBlank(userNumberInput)
    checkThreeDigit(userNumberInput)
    checkAllNumber(userNumberInput)
    checkNotDuplicated(userNumberInput)
    checkNoZero(userNumberInput)

    return userNumberInput
}