const countBall = (numberArray1, numberArray2) => {
    return numberArray1.filter((number, idx) => {
        return numberArray2.includes(number) && numberArray2[idx] !== number;
    }).length;
};

const countStrike = (numberArray1, numberArray2) => {
    return numberArray1.filter((number, idx) => numberArray2[idx] === number).length;
};

const match = (numberArray1, numberArray2) => {
    const ballCount = countBall(numberArray1, numberArray2);
    const strikeCount = countStrike(numberArray1, numberArray2);
    return {
        ballCount,
        strikeCount
    };
};

export default match;