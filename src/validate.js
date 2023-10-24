const throwErrorMessage = () => {
    throw new Error('[ERROR]');
};

const isNumber = (number) => {
    if (typeof number !== 'number') {
        return false;
    }

    return true;
};

const isDuplicateNumber = (numbersArray) => {
    if (new Set(numbersArray).size < numbersArray.length) {
        return false;
    }

    return true;
};

const isEqualNumbersLength = (numbersArray, fixLength) => {
    if (numbersArray.length !== fixLength) {
        return false;
    }

    return true;
};

const validateInputUserNumbers = (numbers, fixLength) => {
    const numbersArray = [...String(numbers)].map(v => Number(v));
    if (
        isNumber(numbers)
        && isDuplicateNumber(numbersArray)
        && isEqualNumbersLength(numbersArray, fixLength) 
    ) {
        return true;
    }

    throwErrorMessage();
};

const validateInputNewGameSelection = (selection) => {
    if (selection === 1 || selection === 2) {
        return true;
    }

    throwErrorMessage();
};

export { validateInputUserNumbers, validateInputNewGameSelection };