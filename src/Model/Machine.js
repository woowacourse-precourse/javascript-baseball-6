export default class Machine {
    constructor() {
        this.randomNumber = '';
    }

    setRandomNumber(randomNumber) {
        this.randomNumber = randomNumber;
    }

    getRandomNumber() {
        return this.randomNumber;
    }
}