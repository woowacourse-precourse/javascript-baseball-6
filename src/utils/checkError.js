import { inputNumberError } from "../constants/errorMessage";

export function validateNumber(inputNumber) {
    if (!inputNumber) {
        throw new Error(inputNumberError.NOT_NUMBER_ERROR);
    }

    if (inputNumber.length > 3) {
        throw new Error(inputNumberError.LENGTH_ERROR);
    }

    if (isNaN(inputNumber)) {
        throw new Error(inputNumberError.NOT_NUMBER_ERROR);
    }

    if (!isDifferentNumbers(inputNumber.split(''))) {
        throw new Error(inputNumberError.NOT_DIFFERENT_ERROR);
    }
}

function isDifferentNumbers(numbers) {
    const result = numbers.map(n => {
        if (numbers.indexOf(n) !== -1) {
            return false;
        }
    });

    return result ? true : false;
}