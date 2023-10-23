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

const isValidBaseballInput = (number) => {
    const isNumberValid = isValidNumber(number);
    const hasDuplicates = isDuplicateNumbers(number);
    if (isNumberValid && hasDuplicates) {
        return true;
    } else {
        return false;
    }
}

const isValidGameOption = (binary) => {
    if (binary !== '1' && binary !== '2') {
        return false;
    }
    return true;
}

export { isValidBaseballInput, isValidGameOption };