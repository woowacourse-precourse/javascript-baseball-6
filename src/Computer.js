import { MissionUtils } from "@woowacourse/mission-utils";

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

    setHint(input) {
        const userInput = input.split('');
        const correctAnswer = this.answer.split('');
        let hint = '';
        let allCnt = 0;
        let strikeCnt = 0;
        let ballCnt = 0;

        for(let i = 0; i < correctAnswer.length; i++){
            if(userInput[i] === correctAnswer[i])   strikeCnt++;
        }
        
        for(let i = 0; i < userInput.length; i++){
            if(correctAnswer.includes(userInput[i]))    allCnt++;
        }
        ballCnt = allCnt - strikeCnt;

        if(ballCnt > 0)   hint += `${ballCnt}볼`;
        if(strikeCnt > 0)   hint += `${strikeCnt}스트라이크`;
        if(hint === '')   hint += `낫싱`;
        
        return hint;
    };
}

function getRandAnswer() {
    const answerSet = new Set();
    
    while(answerSet.size < 3){
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!answerSet.has(num))
        answerSet.add(num);
    }

    return [...answerSet].join('');
}

export default Computer;