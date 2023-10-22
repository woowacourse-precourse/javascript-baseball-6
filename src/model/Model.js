import { generateRandomThreeDigitNumber } from "./generateRandomThreeDigitNumber.js";
import { isRoundEndedFromHint } from "./isRoundEndedFromHint.js";
import { isGameEnded } from "./isGameEnded.js";
import { getHint } from "./getHint.js";


export class Model {
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

    isGameEnded(decision) {
        return isGameEnded(decision)
    }

    isRoundEndedFromHint(hint) {
        return isRoundEndedFromHint(hint)
    }

}