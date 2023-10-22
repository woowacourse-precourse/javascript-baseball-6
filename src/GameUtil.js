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
}

export default GameUtil;