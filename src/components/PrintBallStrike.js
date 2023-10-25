import { MissionUtils } from "@woowacourse/mission-utils";

const printBallStrike = (strikes, balls) => {
    if(strikes === 0 && balls === 0){
        MissionUtils.Console.print('낫싱');
    }else if(strikes > 0 && balls > 0){
        MissionUtils.Console.print(`${ balls }볼 ${ strikes }스트라이크`);
    }else if(strikes > 0){
        MissionUtils.Console.print(`${ strikes }스트라이크`);
    }else if(balls > 0){
        MissionUtils.Console.print(`${ balls }볼`);
    }
}

export default printBallStrike;