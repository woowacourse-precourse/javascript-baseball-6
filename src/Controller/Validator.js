import { ANSWER_LENGTH, RESTART_REQUEST, EXIT_REQUEST } from '../Model/ModelConstant.js';

const ERROR_MESSAGE = Object.freeze({
    NUMERIC_ERROR: '[ERROR] 입력값이 숫자가 아닙니다.',
    INTEGER_ERROR: '[ERROR] 입력한 숫자값이 정수가 아닙니다.',
    LENGTH_ERROR: '[ERROR] 입력값이 세자리 숫자가 아닙니다.',
    UNIQUE_DIGIT_ERROR: '[ERROR] 입력값이 서로 다른 숫자가 아닙니다.',
    REQUEST_ERROR: '[ERROR] 입력값이 1이나 2가 아닙니다.'
});

const Validator = {
    validateAnswer(answer) {
        validateNumeric(answer);
        validateInteger(answer);
        validateLength(answer);
        validateUniqueDigit(answer);
    },

    validateCorrectRequest(request) {
        if (!isCorrectRequest(request)) {
            throw ERROR_MESSAGE.REQUEST_ERROR;
        }
    },
}


const validateNumeric = (answer) => {
    if (isNaN(Number(answer))) {
        throw ERROR_MESSAGE.NUMERIC_ERROR;
    }
}

const validateInteger = (answer) => {
    if (!isPositiveInteger(answer)) {
        throw ERROR_MESSAGE.INTEGER_ERROR;
    }
}

const validateLength = (answer) => {
    if (!hasCorrectLength(answer)) {
        throw ERROR_MESSAGE.LENGTH_ERROR;
    }
}

const validateUniqueDigit = (answer) => {
    if (!hasUniqueDigit(answer)) {
        throw ERROR_MESSAGE.UNIQUE_DIGIT_ERROR;
    }
}

const isPositiveInteger = (number) => {
    return Number(number) >>> 0 === parseFloat(Number(number));
}

const hasCorrectLength = (number) => {
    return number.length === ANSWER_LENGTH;
}

const hasUniqueDigit = (number) => {
    const numberMap = number.toString().split("").map(Number);
    const set = new Set(numberMap);

    return set.size === numberMap.length && !number.toString().includes(0);
}

const isCorrectRequest = (request) => {
    return request === RESTART_REQUEST || request === EXIT_REQUEST;
}

export default Validator;