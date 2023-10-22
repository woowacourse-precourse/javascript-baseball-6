import {MissionUtils} from "@woowacourse/mission-utils";

class GameUtil{
    generateRandomNumbers(){
        const computer = [];
        while(computer.length < 3){
            const computerNum = MissionUtils.Random.pickNumberInRange(1,9);
            if(!computer.includes(computerNum)){
                computer.push(computerNum);
            }
        }
        return computer;
    }

    validateInput(userNumber){
        const userNumberSet = new Set(userNumber.split('').map(Number));

        if (userNumber.length !== 3) return '[ERROR] 입력값은 세자리 수를 입력해주세요.';
        if ([...userNumberSet].length !== 3) {
        return '[ERROR] 중첩되지 않는 세자리 수를 입력해주세요.';
        }
        if (userNumber.includes(' ')) return '[ERROR] 공백은 넣지 말아주세요.';
        if (Number.isNaN(userNumber)) return '[ERROR] 숫자만 입력해주세요.';

        return 'PASS';
    }

    countBall(randomNumber, userNumber){
        var balls = 0;
        for(var index =0; index<3; index++){
            // 같은 index의 숫자는 다르지만 userNumber[index]가 randomNumber에 포함
            if(randomNumber[index] !== Number(userNumber[index])
            && randomNumber.includes(Number(userNumber[index]))){
                balls+=1;
            }
        }
        return balls;
    }

    countStrike(randomNumber, userNumber){
        var strikes = 0;
        for(var index =0; index<3; index++){
            // 같은 index의 숫자는 다르지만 userNumber[index]가 randomNumber에 포함
            if(randomNumber[index] === Number(userNumber[index])){
                strikes+=1;
            }
        }
        return strikes;
    }

    showUserResult(ballCount, strikeCount){
        if(ballCount!==0 && strikeCount!==0) {
            return `${ballCount}볼 ${strikeCount}스트라이크`;
        }
        if(ballCount!==0 && strikeCount===0) return `${ballCount}볼`;
        if(ballCount===0 && strikeCount!==0) return `${strikeCount}스트라이크`;
        return '낫싱';
    }


}

export default GameUtil;