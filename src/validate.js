import NUMBERS_LENGTH from './numbersLength.js';

const throwErrorMessage = () => {
    throw new Error('[ERROR]');
};

const isNumber = (number) => typeof number === 'number';

const isDuplicateNumbers = (numbersArray) => !(new Set(numbersArray).size < numbersArray.length);

const isEqualNumbersLength = (numbersArray) => numbersArray.length === NUMBERS_LENGTH;


const validateInputUserNumbers = (numbers) => {
    const numbersArray = [...String(numbers)].map(v => Number(v));
    if (
        isNumber(numbers)
        && isDuplicateNumbers(numbersArray)
        && isEqualNumbersLength(numbersArray) 
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