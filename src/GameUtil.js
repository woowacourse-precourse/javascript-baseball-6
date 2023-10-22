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

}

export default GameUtil;