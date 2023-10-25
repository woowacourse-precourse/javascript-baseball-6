import { STRIKE, BALL, NOTHING, ANSWER_LENGTH } from "./ModelConstant.js";

export default class Score {
    constructor() {
        this.strikeCount = 0;
        this.ballCount = 0;
    }

    calculateScore(randomNumber, answer) {
        const randomNumberArray = randomNumber.split("");
        const answerArray = answer.split("");
        let strikeCopy = 0;
        let ballCopy = 0;

        answerArray.forEach((number, index) => {
            if (this.isStrike(number, randomNumberArray[index])) {
                strikeCopy += 1;
            } else if (this.isBall(number, randomNumberArray)) {
                ballCopy += 1;
            }
        });

        this.strikeCount = strikeCopy;
        this.ballCount = ballCopy;
    }

    getScore() {
        return [this.strikeCount, this.ballCount];
    }

    isStrike(answerDigit, randomNumberDigit) {
        return answerDigit === randomNumberDigit;
    }

    isBall(answerDigit, randomNumberArray) {
        return randomNumberArray.includes(answerDigit);
    }

    isAllStrikes() {
        return this.strikeCount === ANSWER_LENGTH;
    }

    getHint() {
        if (this.strikeCount === ANSWER_LENGTH) return `${ANSWER_LENGTH}${STRIKE}`;
        if (this.strikeCount === 0 && this.ballCount === 0) return NOTHING;
        if (this.strikeCount > 0 && this.ballCount === 0) return `${this.strikeCount}${STRIKE}`;
        if (this.strikeCount === 0 && this.ballCount > 0) return `${this.ballCount}${BALL}`;

        return `${this.ballCount}${BALL} ${this.strikeCount}${STRIKE}`;
    }
}
