// 입력받은 문자열이 1~9의 숫자중 3개의 서로다른 수인지 체크 (예외처리)
export function checkNumber(number) { 
    const TEST_NUMBER = /[^1-9]/.test(number);
    const NUMBER_SET = new Set(number);
    
    return TEST_NUMBER || NUMBER_SET.size !== 3 || number.length > 3 ? true : false;
}

// ball, strike 개수 체크
export function countCheck(userNumber, computer_number){
    let ball = 0;
    let strike = 0;

    userNumber.split('').forEach((num, idx) => {
    if(computer_number.indexOf(num) === idx)
        strike++;
    else if(computer_number.split("").includes(num))
        ball++;
    })
    return [ball, strike];
}

// 정답 출력 
export function answerPrint(ball, strike) {
    let answer = "";
    if(ball !== 0){
        if(strike !== 0){
        answer = ball + "볼 " + strike + "스트라이크";          
        }else {
        answer = ball + "볼";
        }
    }
    else if(strike !== 0){
        answer = strike + "스트라이크";
    }
    else {
        answer = '낫싱';
    }
    return answer;
}
