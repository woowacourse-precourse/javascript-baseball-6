class Computer {
    constructor() {
        this.answer = getRandAnswer();
    }

    initialAnswer() {
        this.answer = getRandAnswer();
    }

    isLenThree(input) {
        return input.length === 3;
    }

    isMadeByDigit(input) {
        const numArr = input.split('');
        return !numArr.some((ele) => ele < '1' || ele > '9');
    }

    isUnique(input) {
        return new Set(input).size === input.length;
    }

    checkInputValid(input) {
        return this.isLenThree(input) && this.isMadeByDigit(input) && this.isUnique(input);
    }

}

function getRandAnswer(){
    const answerSet = new Set();
    
    while(answerSet.size < 3){
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!answerSet.has(num))
        answerSet.add(num);
    }

    return [...answerSet].join('');
}

export default Computer;