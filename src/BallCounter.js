class BallCounter {
    static getStrike(inputNumberList, targetNumber) {
        let strikeCount = 0;
        
        for (let i = 0; i < inputNumberList.length; i++) {
            if (inputNumberList[i] === targetNumber[i]) {
                strikeCount++;
            }
        }
        return strikeCount;
    }


    static getBall(inputNumberList, targetNumber) {
        let ballCount = 0;
        
        for (let i = 0; i < inputNumberList.length; i++) {
            if (inputNumberList[i] !== targetNumber[i] && targetNumber.includes(inputNumberList[i])) {
                ballCount++;
            }
        }
        return ballCount;
    }
}

export default BallCounter;
