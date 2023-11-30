class SplitNumbers {
    #splitNumbers;

    constructor(numbers) {
        this.#splitNumbers = numbers.split('').map(Number);
    }
    getSplitNum() {
        return this.#splitNumbers;
    }
}

export default SplitNumbers;