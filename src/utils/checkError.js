import { INPUT_NUMBER_ERROR } from '../constants/errorMessage';

export const validateNumber = function validateNumber(inputNumber) {
    if (!inputNumber) {
        throw new Error(INPUT_NUMBER_ERROR.notNumberError);
    }

    if (inputNumber.length > 3) {
        throw new Error(INPUT_NUMBER_ERROR.lengthError);
    }

    if (isNaN(inputNumber)) {
        throw new Error(INPUT_NUMBER_ERROR.notNumberError);
    }

    if (!isDifferentNumbers(inputNumber.split(''))) {
        throw new Error(INPUT_NUMBER_ERROR.notDifferentError);
    }
}

const isDifferentNumbers = function isDifferentNumbers(numbers) {
    const result = numbers.map(n => {
        if (numbers.indexOf(n) !== -1) {
            return false;
        }
    });

    return result ? true : false;
}