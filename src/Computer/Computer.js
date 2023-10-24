import { isValidInput } from "../utils/ValidationUtils.js";
import { createRandAnswer } from "../utils/createAnswer.js";

class Computer {
    constructor() {
        this.answer = createRandAnswer();
    }

    initAnswer() {
        this.answer = createRandAnswer();
    }

    checkInputValid(input) {
        return isValidInput(input);
    }

    getStrikeCounts(userInput, correctAnswer) {
        let cnt = 0;
        for(let i = 0; i < correctAnswer.length; i++){
            if(userInput[i] === correctAnswer[i])   cnt++;
        }

        return cnt;
    }

    getBallCounts(userInput, correctAnswer, strikeCounts) {
        let cnt = 0;
        for(let i = 0; i < userInput.length; i++){
            if(correctAnswer.includes(userInput[i]))    cnt++;
        }

        return cnt - strikeCounts;
    }

    convertHintToString(ballCounts, strikeCounts) {
        let hint = '';
        if(ballCounts)  hint += `${ballCounts}볼`;
        if(ballCounts && strikeCounts)  hint += ' ';
        if(strikeCounts)  hint += `${strikeCounts}스트라이크`;
        if(ballCounts === 0 && strikeCounts === 0)  hint += '낫싱';

        return hint;
    }

    createHint(input) {
        const userInput = input.split('');
        const correctAnswer = this.answer.split('');
        
        const strikeCounts = this.getStrikeCounts(userInput, correctAnswer);
        const ballCounts = this.getBallCounts(userInput, correctAnswer, strikeCounts);
        
        return this.convertHintToString(ballCounts, strikeCounts);
    }
}


export default Computer;