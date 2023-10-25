import { MissionUtils } from "@woowacourse/mission-utils";

//볼, 스트라이크 계산
export function count(
    userNumber,
    answerNumber,
    i,
    j,
    hintcount,
  ) {
    if(answerNumber[i] === userNumber[j]){
        if(i === j){
            hintcount.strike++;
        } else {
            hintcount.ball++;
        }
    }
    return hintcount;
}


//힌트에 따라 출력하기
export function printHint (hintcount) {
    let hint = [];
    if(hintcount.ball !== 0) {
        hint.push(`${hintcount.ball}볼`);
    }
    if (hintcount.strike !== 0){
        hint.push(`${hintcount.strike}스트라이크`);
    }
    if(hintcount.ball === 0 && hintcount.strike === 0) {
        hint.push("낫싱");
    }
    
    MissionUtils.Console.print(hint.join(' '));

    if(hintcount.strike === 3){
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        return true;
    }
    return false;
}