const checkBall = (numbersArray) => (number, idx) => numbersArray.includes(number) && numbersArray[idx] !== number;

const checkStrike = (numbersArray) => (number, idx) => numbersArray[idx] === number;

const getCount = (numbersArray, check) => numbersArray.filter(check).length;

const match = (numberArray1, numberArray2) => {
    const ballCount = getCount(numberArray1, checkBall(numberArray2));
    const strikeCount = getCount(numberArray1, checkStrike(numberArray2));
    return {
        ballCount,
        strikeCount
    };
};

export default match;