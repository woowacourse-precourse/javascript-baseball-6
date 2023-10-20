class Computer {
    constructor() {
        this.answer = getRandAnswer();
    }

    initialAnswer() {
        this.answer = getRandAnswer();
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