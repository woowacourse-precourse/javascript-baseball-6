function hasValidLength(input) {
    return input.length === 3;
}

function hasNoDuplicates(input) {
    const uniqueNumbers = new Set(input);
    return uniqueNumbers.size === 3;
}

function isNumeric(input) {
    return /^\d+$/.test(input);
}

function getIsInputValueValid(input) {
    return !hasValidLength(input) || !hasNoDuplicates(input) || !isNumeric(input);
}

export default getIsInputValueValid;
