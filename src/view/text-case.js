
const viewError = '[ERROR] 잘못된 입력입니다.';
const viewGameContinue = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
const viewGameStart = '숫자 야구 게임을 시작합니다.';
const viewInputNum = '숫자를 입력해주세요 : ';
const viewBallCnt = '볼';
const viewStrikeCnt = '스트라이크';
const viewNoneCnt = '낫싱';
const viewGameOver ='3개의 숫자를 모두 맞히셨습니다! 게임 종료';


const pickView = function pickView(num, ballCnt, strikeCnt){
    switch(num){
        case 1:
            return viewGameStart;
        case 2:
            return viewInputNum;
        case 3:
            return setResultView(ballCnt, strikeCnt);
        case 4:
            return setResultView(ballCnt, strikeCnt)+"\n"+viewGameOver;
    }
}

const setResultView = function setResultView(ballCnt, strikeCnt){

    if (ballCnt === 0 && strikeCnt === 0) {
        return(viewNoneCnt);
    }

    if(ballCnt===0){
        return strikeCnt + viewStrikeCnt;
    }
    if(strikeCnt===0){
        return ballCnt + viewBallCnt;
    }
    return ballCnt + viewBallCnt + " " + strikeCnt + viewStrikeCnt;
}

export{ pickView, setResultView, viewError, viewGameContinue, viewGameStart}