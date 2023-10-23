import generateRandomThreeDigitNumber from './generateRandomThreeDigitNumber.js';
import isRoundContinuedFromHint from './isRoundContinuedFromHint.js';
import isGameContinued from './isGameContinued.js';
import getHint from './getHint.js';

class Model {
    constructor() {
        this._computerNumber;
        this._userNumber;
    }

    get computerNumber() {
        return this._computerNumber
    }

    set computerNumber(computerNumber) {
        this._computerNumber = computerNumber;
    }

    get userNumber() {
        return this._userNumber
    }

    set userNumber(userNumber) {
        this._userNumber = userNumber;
    }
    
    setRandomComputerNumber() {
        this.computerNumber = generateRandomThreeDigitNumber();
    }

    getHint(userNumber) {
        return getHint(userNumber, this.computerNumber)
    }

    isGameContinued(decision) {
        return isGameContinued(decision)
    }

    isRoundContinuedFromHint(hint) {
        return isRoundContinuedFromHint(hint)
    }

}

export default Model;