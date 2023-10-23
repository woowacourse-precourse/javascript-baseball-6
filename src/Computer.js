import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidInput } from "./ValidationUtils";

class Computer {
    constructor() {
        this.answer = this.getRandAnswer();
    }

    initialAnswer() {
        this.answer = this.getRandAnswer();
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

    getStringCounts(ballCounts, strikeCounts) {
        let hint = '';
        if(ballCounts > 0)  hint += `${ballCounts}볼`;
        if(ballCounts > 0 && strikeCounts > 0)  hint += ' ';
        if(strikeCounts > 0)  hint += `${strikeCounts}스트라이크`;
        if(hint === '')  hint += '낫싱';

        return hint;
    }

    setHint(input) {
        const userInput = input.split('');
        const correctAnswer = this.answer.split('');
        
        const strikeCounts = this.getStrikeCounts(userInput, correctAnswer);
        const ballCounts = this.getBallCounts(userInput, correctAnswer, strikeCounts);
        
        return this.getStringCounts(ballCounts, strikeCounts);
    }

    getRandAnswer() {
        const answerSet = new Set();
        
        while(answerSet.size < 3){
        let num = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!answerSet.has(num))
            answerSet.add(num);
        }

        return [...answerSet].join('');
    }
}


export default Computer;