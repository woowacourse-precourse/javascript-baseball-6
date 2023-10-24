
var error=false;
var answerNum = [];
var userInputNum = [];
var correct = false;

var ballCnt;
var strikeCnt;

const setAnswerNum = function setAnswerNum(num) {
    var check = false;
    answerNum.forEach((n) => n == num ? check = true : check
    );
    if (check == true) {
        return;
    }
    answerNum.push(num);
}


const setUserInputNum = function setUserInputNum(num){
    userInputNum = [];

    var tmp = parseInt(num, 10);
    if(isNaN(tmp)){
        error = true;
        throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    if(tmp<111||tmp>999){
        error = true;
        throw Error('[ERROR] 잘못된 입력입니다.');
    }
    if(tmp%10===0|| parseInt((tmp%100)/10)===0|| parseInt(tmp/100)===0){
        error = true;
        throw Error('[ERROR] 잘못된 입력입니다.');
    }

    const tmpUserInputNum = [];
    while (tmpUserInputNum.length < 3) {
       tmpUserInputNum.push(tmp % 10);
        tmp = parseInt(tmp/10, 10);
    }
    for (let idx = 2; idx >= 0; idx -= 1){
        userInputNum.push(tmpUserInputNum[idx]);
    }

    ballCnt = 0;
    strikeCnt = 0;
}

const clearData = function clearData() {
    answerNum = [];
    userInputNum = [];
    correct = false;
}

const setBallStrike = async function setBallStrike(ball) {
    
    if (ball === 0) {
        ballCnt += 1;
        return;
    }
    if (ball === 1) {
        strikeCnt += 1;
        return;
    }

}

export{clearData, setBallStrike, setAnswerNum, setUserInputNum, correct, error, userInputNum, answerNum, strikeCnt, ballCnt};