import generateRandomThreeDigitNumber from './generateRandomThreeDigitNumber';
import isRoundContinuedFromHint from './isRoundContinuedFromHint';
import isGameContinued from './isGameContinued';
import getHint from './getHint';

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