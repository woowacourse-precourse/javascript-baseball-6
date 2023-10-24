
var error =false;
var answerNum;
var userInputNum;
var correct = false;

const setAnswerNum = function setAnswerNum(num){
    answerNum = num;
}

let errorMessage = "";

const setUserInputNum = function setUserInputNum(num){


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

    userInputNum = num;
}

export{setAnswerNum, setUserInputNum, correct, error, userInputNum, answerNum};